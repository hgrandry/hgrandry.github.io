const HYDRATION_START = '[';
const HYDRATION_END = ']';

// Store the references to globals in case someone tries to monkey patch these, causing the below
// to de-opt (this occurs often when using popular extensions).

const noop = () => {};

/**
 * @template V
 * @param {V} value
 * @param {V | (() => V)} fallback
 * @param {boolean} [lazy]
 * @returns {V}
 */
function fallback(value, fallback, lazy = false) {
	return value === undefined
		? lazy
			? /** @type {() => V} */ (fallback)()
			: /** @type {V} */ (fallback)
		: value;
}

/** @import { ComponentContext, Derived, Effect, Reaction, Signal, Source, Value } from '#client' */
// Handle signal reactivity tree dependencies and reactions

/** @type {null | Reaction} */
let active_reaction = null;

/**
 * When used inside a [`$derived`](https://svelte.dev/docs/svelte/$derived) or [`$effect`](https://svelte.dev/docs/svelte/$effect),
 * any state read inside `fn` will not be treated as a dependency.
 *
 * ```ts
 * $effect(() => {
 *   // this will run when `data` changes, but not when `time` changes
 *   save(data, {
 *     timestamp: untrack(() => time)
 *   });
 * });
 * ```
 * @template T
 * @param {() => T} fn
 * @returns {T}
 */
function untrack(fn) {
	const previous_reaction = active_reaction;
	try {
		active_reaction = null;
		return fn();
	} finally {
		active_reaction = previous_reaction;
	}
}

/** @import { Readable } from './public' */

/**
 * @template T
 * @param {Readable<T> | null | undefined} store
 * @param {(value: T) => void} run
 * @param {(value: T) => void} [invalidate]
 * @returns {() => void}
 */
function subscribe_to_store(store, run, invalidate) {
	if (store == null) {
		// @ts-expect-error
		run(undefined);

		return noop;
	}

	// Svelte store takes a private second argument
	// StartStopNotifier could mutate state, and we want to silence the corresponding validation error
	const unsub = untrack(() =>
		store.subscribe(
			run,
			// @ts-expect-error
			invalidate
		)
	);

	// Also support RxJS
	// @ts-expect-error TODO fix this in the types?
	return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

const BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
const BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;

/** @import { ComponentType, SvelteComponent } from 'svelte' */
/** @import { Component, Payload, RenderOutput } from '#server' */
/** @import { Store } from '#shared' */

/**
 * @param {Payload} to_copy
 * @returns {Payload}
 */
function copy_payload({ out, css, head }) {
	return {
		out,
		css: new Set(css),
		head: {
			title: head.title,
			out: head.out
		}
	};
}

/**
 * Assigns second payload to first
 * @param {Payload} p1
 * @param {Payload} p2
 * @returns {void}
 */
function assign_payload(p1, p2) {
	p1.out = p2.out;
	p1.head = p2.head;
}

/**
 * Array of `onDestroy` callbacks that should be called at the end of the server render function
 * @type {Function[]}
 */
let on_destroy = [];

/**
 * Only available on the server and when compiling with the `server` option.
 * Takes a component and returns an object with `body` and `head` properties on it, which you can use to populate the HTML when server-rendering your app.
 * @template {Record<string, any>} Props
 * @param {import('svelte').Component<Props> | ComponentType<SvelteComponent<Props>>} component
 * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any> }} [options]
 * @returns {RenderOutput}
 */
function render(component, options = {}) {
	/** @type {Payload} */
	const payload = { out: '', css: new Set(), head: { title: '', out: '' } };

	const prev_on_destroy = on_destroy;
	on_destroy = [];
	payload.out += BLOCK_OPEN;

	if (options.context) {
		push();
		/** @type {Component} */ (current_component).c = options.context;
	}

	// @ts-expect-error
	component(payload, options.props ?? {}, {}, {});

	if (options.context) {
		pop();
	}

	payload.out += BLOCK_CLOSE;
	for (const cleanup of on_destroy) cleanup();
	on_destroy = prev_on_destroy;

	let head = payload.head.out + payload.head.title;

	for (const { hash, code } of payload.css) {
		head += `<style id="${hash}">${code}</style>`;
	}

	return {
		head,
		html: payload.out,
		body: payload.out
	};
}

/**
 * @param {Record<string, unknown>[]} props
 * @returns {Record<string, unknown>}
 */
function spread_props(props) {
	/** @type {Record<string, unknown>} */
	const merged_props = {};
	let key;

	for (let i = 0; i < props.length; i++) {
		const obj = props[i];
		for (key in obj) {
			const desc = Object.getOwnPropertyDescriptor(obj, key);
			if (desc) {
				Object.defineProperty(merged_props, key, desc);
			} else {
				merged_props[key] = obj[key];
			}
		}
	}
	return merged_props;
}

/**
 * @param {unknown} value
 * @returns {string}
 */
function stringify(value) {
	return typeof value === 'string' ? value : value == null ? '' : value + '';
}

/**
 * @template V
 * @param {Record<string, [any, any, any]>} store_values
 * @param {string} store_name
 * @param {Store<V> | null | undefined} store
 * @returns {V}
 */
function store_get(store_values, store_name, store) {

	// it could be that someone eagerly updates the store in the instance script, so
	// we should only reuse the store value in the template
	if (store_name in store_values && store_values[store_name][0] === store) {
		return store_values[store_name][2];
	}

	store_values[store_name]?.[1](); // if store was switched, unsubscribe from old store
	store_values[store_name] = [store, null, undefined];
	const unsub = subscribe_to_store(
		store,
		/** @param {any} v */ (v) => (store_values[store_name][2] = v)
	);
	store_values[store_name][1] = unsub;
	return store_values[store_name][2];
}

/** @param {Record<string, [any, any, any]>} store_values */
function unsubscribe_stores(store_values) {
	for (const store_name in store_values) {
		store_values[store_name][1]();
	}
}

/**
 * @param {Payload} payload
 * @param {Record<string, any>} $$props
 * @param {string} name
 * @param {Record<string, unknown>} slot_props
 * @param {null | (() => void)} fallback_fn
 * @returns {void}
 */
function slot(payload, $$props, name, slot_props, fallback_fn) {
	var slot_fn = $$props.$$slots?.[name];
	// Interop: Can use snippets to fill slots
	if (slot_fn === true) {
		slot_fn = $$props['children' ];
	}

	if (slot_fn !== undefined) {
		slot_fn(payload, slot_props);
	}
}

/**
 * Legacy mode: If the prop has a fallback and is bound in the
 * parent component, propagate the fallback value upwards.
 * @param {Record<string, unknown>} props_parent
 * @param {Record<string, unknown>} props_now
 */
function bind_props(props_parent, props_now) {
	for (const key in props_now) {
		const initial_value = props_parent[key];
		const value = props_now[key];
		if (
			initial_value === undefined &&
			value !== undefined &&
			Object.getOwnPropertyDescriptor(props_parent, key)?.set
		) {
			props_parent[key] = value;
		}
	}
}

/** @param {any} array_like_or_iterator */
function ensure_array_like(array_like_or_iterator) {
	if (array_like_or_iterator) {
		return array_like_or_iterator.length !== undefined
			? array_like_or_iterator
			: Array.from(array_like_or_iterator);
	}
	return [];
}

/** @import { Component } from '#server' */

/** @type {Component | null} */
var current_component = null;

/**
 * @param {Function} [fn]
 */
function push(fn) {
	current_component = { p: current_component, c: null, d: null };
}

function pop() {
	var component = /** @type {Component} */ (current_component);

	var ondestroy = component.d;

	if (ondestroy) {
		on_destroy.push(...ondestroy);
	}

	current_component = component.p;
}

/** @import { Snippet } from 'svelte' */
/** @import { Payload } from '#server' */
/** @import { Getters } from '#shared' */

/**
 * Create a snippet programmatically
 * @template {unknown[]} Params
 * @param {(...params: Getters<Params>) => {
 *   render: () => string
 *   setup?: (element: Element) => void | (() => void)
 * }} fn
 * @returns {Snippet<Params>}
 */
function createRawSnippet(fn) {
	// @ts-expect-error the types are a lie
	return (/** @type {Payload} */ payload, /** @type {Params} */ ...args) => {
		var getters = /** @type {Getters<Params>} */ (args.map((value) => () => value));
		payload.out += fn(...getters)
			.render()
			.trim();
	};
}

function check(Component) {
	if (typeof Component !== 'function') return false;
	// Svelte 5 generated components always accept a `$$payload` prop.
	// This assumes that the SSR build does not minify it (which Astro enforces by default).
	// This isn't the best check, but the only other option otherwise is to try to render the
	// component, which is taxing. We'll leave it as a last resort for the future for now.
	return Component.toString().includes('$$payload');
}

function needsHydration(metadata) {
	// Adjust how this is hydrated only when the version of Astro supports `astroStaticSlot`
	return metadata.astroStaticSlot ? !!metadata.hydrate : true;
}

async function renderToStaticMarkup(Component, props, slotted, metadata) {
	const tagName = needsHydration(metadata) ? 'astro-slot' : 'astro-static-slot';

	let children = undefined;
	let $$slots = undefined;
	const renderProps = {};

	for (const [key, value] of Object.entries(slotted)) {
		// Legacy slot support
		$$slots ??= {};
		if (key === 'default') {
			$$slots.default = true;
			children = createRawSnippet(() => ({
				render: () => `<${tagName}>${value}</${tagName}>`,
			}));
		} else {
			$$slots[key] = createRawSnippet(() => ({
				render: () => `<${tagName} name="${key}">${value}</${tagName}>`,
			}));
		}
		// @render support for Svelte ^5.0
		const slotName = key === 'default' ? 'children' : key;
		renderProps[slotName] = createRawSnippet(() => ({
			render: () => `<${tagName}${key !== 'default' ? ` name="${key}"` : ''}>${value}</${tagName}>`,
		}));
	}

	const result = render(Component, {
		props: {
			...props,
			children,
			$$slots,
			...renderProps,
		},
	});
	return { html: result.body };
}

const _renderer0 = {
	name: '@astrojs/svelte',
	check,
	renderToStaticMarkup,
	supportsAstroStaticSlot: true,
};

const renderers = [Object.assign({"name":"@astrojs/svelte","clientEntrypoint":"@astrojs/svelte/client.js","serverEntrypoint":"@astrojs/svelte/server.js"}, { ssr: _renderer0 }),];

export { pop as a, slot as b, current_component as c, bind_props as d, copy_payload as e, fallback as f, assign_payload as g, ensure_array_like as h, spread_props as i, store_get as j, noop as n, push as p, renderers as r, stringify as s, unsubscribe_stores as u };
