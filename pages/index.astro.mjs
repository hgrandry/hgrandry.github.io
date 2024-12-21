import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderScript, e as renderSlot, f as renderHead, g as renderComponent, h as defineScriptVars, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DexFrGse.mjs';
import 'kleur/colors';
import { c as current_component, n as noop, p as push, a as pop, s as stringify, f as fallback, b as slot, d as bind_props, e as copy_payload, g as assign_payload, h as ensure_array_like, i as spread_props, j as store_get, u as unsubscribe_stores } from '../chunks/_@astro-renderers_CqB4IQq4.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CqB4IQq4.mjs';
/* empty css                                 */
import 'clsx';

const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * @template V
 * @param {V} value
 * @param {boolean} [is_attr]
 */
function escape_html(value, is_attr) {
	const str = String(value ?? '');

	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;

	let escaped = '';
	let last = 0;

	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}

	return escaped + str.substring(last);
}

/**
 * `<div translate={false}>` should be rendered as `<div translate="no">` and _not_
 * `<div translate="false">`, which is equivalent to `<div translate="yes">`. There
 * may be other odd cases that need to be added to this list in future
 * @type {Record<string, Map<any, string>>}
 */
const replacements = {
	translate: new Map([
		[true, 'yes'],
		[false, 'no']
	])
};

/**
 * @template V
 * @param {string} name
 * @param {V} value
 * @param {boolean} [is_boolean]
 * @returns {string}
 */
function attr(name, value, is_boolean = false) {
	if (value == null || (!value && is_boolean) || (value === '' && name === 'class')) return '';
	const normalized = (name in replacements && replacements[name].get(value)) || value;
	const assignment = is_boolean ? '' : `="${escape_html(normalized, true)}"`;
	return ` ${name}${assignment}`;
}

/** @import { Equals } from '#client' */
/** @type {Equals} */

/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
function safe_not_equal(a, b) {
	return a != a
		? b == b
		: a !== b || (a !== null && typeof a === 'object') || typeof a === 'function';
}

/** @import { Component } from '#server' */

/** @param {() => void} fn */
function onDestroy(fn) {
	var context = /** @type {Component} */ (current_component);
	(context.d ??= []).push(fn);
}

/** @import { Readable, StartStopNotifier, Subscriber, Unsubscriber, Updater, Writable } from '../public.js' */
/** @import { Stores, StoresValues, SubscribeInvalidateTuple } from '../private.js' */

/**
 * @type {Array<SubscribeInvalidateTuple<any> | any>}
 */
const subscriber_queue = [];

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * @template T
 * @param {T} [value] initial value
 * @param {StartStopNotifier<T>} [start]
 * @returns {Writable<T>}
 */
function writable(value, start = noop) {
	/** @type {Unsubscriber | null} */
	let stop = null;

	/** @type {Set<SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();

	/**
	 * @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(/** @type {T} */ (value)));
	}

	/**
	 * @param {Subscriber<T>} run
	 * @param {() => void} [invalidate]
	 * @returns {Unsubscriber}
	 */
	function subscribe(run, invalidate = noop) {
		/** @type {SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || noop;
		}
		run(/** @type {T} */ (value));
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

const defaultTheme = "dark";
const getInitialTheme = () => {
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
  }
  return defaultTheme;
};
const theme = writable(defaultTheme);
if (typeof window !== "undefined") {
  theme.set(getInitialTheme());
  theme.subscribe((value) => {
    localStorage.setItem("theme", value);
    document.documentElement.setAttribute("data-theme", value);
  });
}

function Background3D($$payload, $$props) {
	push();

	$$payload.out += `<div${attr("class", `background svelte-r7a9sv ${stringify([""].filter(Boolean).join(" "))}`)} style="opacity: 0;"></div>`;
	pop();
}

const $$Astro$3 = createAstro("https://hgrandry.net");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/git/hg/portfolio-astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/git/hg/portfolio-astro/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://hgrandry.net");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const GA_ID = "G-XDDX848KW2";
  return renderTemplate(_a || (_a = __template([`<html lang="en" data-theme="dark" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description" content="Software Developer with over 20 years of experience in UI, Games, and Tools development. Expertise in Unity, ASP.NET, and Software Architecture. Let's build something great together!"><base href="/"><link rel="icon" type="image/png" href="/favicon.png"><meta name="theme-color" content="#1f2937"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"><title>`, "</title><!-- Google Analytics --><script async", "><\/script><script>(function(){", "\n			window.dataLayer = window.dataLayer || [];\n			function gtag() {\n				dataLayer.push(arguments);\n			}\n			gtag('js', new Date());\n			gtag('config', GA_ID);\n		})();<\/script><script>\n			// Initialize theme on page load to prevent flash\n			if (localStorage.getItem('theme') === 'light') {\n				document.documentElement.setAttribute('data-theme', 'light');\n			}\n\n			// Manual scroll restoration\n			history.scrollRestoration = 'manual';\n			let savedScroll = 0;\n\n			document.addEventListener('astro:before-swap', () => {\n				savedScroll = window.scrollY;\n			});\n\n			document.addEventListener('astro:after-swap', () => {\n				window.scrollTo(0, savedScroll);\n			});\n		<\/script>", "", "", "</head> <body data-astro-cid-sckkx6r4> <main data-astro-cid-sckkx6r4> ", " </main> </body></html>"])), title, addAttribute(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, "src"), defineScriptVars({ GA_ID }), renderComponent($$result, "ViewTransitions", $$ClientRouter, { "data-astro-cid-sckkx6r4": true }), renderScript($$result, "C:/git/hg/portfolio-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/git/hg/portfolio-astro/src/layouts/Layout.astro", void 0);

function Parallax($$payload, $$props) {
	push();

	let factor = $$props["factor"];
	let class_name = fallback($$props["class_name"], '');
	let parallaxRatio = fallback($$props["parallaxRatio"], 0);
	let onRatioChange = fallback($$props["onRatioChange"], undefined);
	let shadowTarget = fallback($$props["shadowTarget"], undefined);

	let shadowConfig = fallback(
		$$props["shadowConfig"],
		() => ({
			baseOffset: 5,
			offsetRange: 10,
			baseBlur: 5,
			blurRange: 10,
			opacity: 0.3
		}),
		true
	);

	$$payload.out += `<div${attr("class", `parallax ${stringify(class_name)} svelte-qw1gfc`)}><!---->`;
	slot($$payload, $$props, "default", {});
	$$payload.out += `<!----></div>`;

	bind_props($$props, {
		factor,
		class_name,
		parallaxRatio,
		onRatioChange,
		shadowTarget,
		shadowConfig
	});

	pop();
}

const parallaxFactors = {
  background: -100,
  title: -50,
  contact: 100,
  content: 100
};

const $$Astro$1 = createAstro("https://hgrandry.net");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { title, backgroundColor = "transparent", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="section" data-astro-cid-sh445jdo> <!-- <div class="section-background-container">
        <Parallax factor={parallaxFactors.background} client:load class_name="section-background-wrapper">
            <div class="section-background" style={\`background-color: var(\${backgroundColor});\`}></div>
        </Parallax>
    </div> --> <div class="section-content" data-astro-cid-sh445jdo> <div class="container" data-astro-cid-sh445jdo> ${title && renderTemplate`${renderComponent($$result, "Parallax", Parallax, { "factor": parallaxFactors.title, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/git/hg/portfolio-astro/src/components/Parallax.svelte", "client:component-export": "default", "data-astro-cid-sh445jdo": true }, { "default": ($$result2) => renderTemplate` <div class="title-wrapper" data-astro-cid-sh445jdo> <h2 class="title" data-astro-cid-sh445jdo>${title}</h2> </div> ` })}`} ${renderSlot($$result, $$slots["default"])} </div> </div> </section> ${renderScript($$result, "C:/git/hg/portfolio-astro/src/components/Section.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/git/hg/portfolio-astro/src/components/Section.astro", void 0);

function TypeWriter($$payload, $$props) {
	push();

	let texts = $$props["texts"];
	let currentTextIndex = 0;
	let displayedText = '';
	let isTyping = true;

	async function typeText() {
		while (true) {
			const currentText = texts[currentTextIndex];

			if (isTyping) {
				// Add pause before starting new word
				if (displayedText.length === 0) {
					await new Promise((resolve) => setTimeout(resolve, 700));
				}

				// Type characters
				while (displayedText.length < currentText.length) {
					displayedText = currentText.slice(0, displayedText.length + 1);
					await new Promise((resolve) => setTimeout(resolve, 50));
				}

				// Wait before erasing
				await new Promise((resolve) => setTimeout(resolve, 1500));
				isTyping = false;
			} else {
				// Erase characters
				while (displayedText.length > 0) {
					displayedText = displayedText.slice(0, -1);
					await new Promise((resolve) => setTimeout(resolve, 20));
				}

				// Move to next text
				currentTextIndex = (currentTextIndex + 1) % texts.length;
				isTyping = true;
			}
		}
	}

	// Start the typing animation when the component mounts
	typeText();
	$$payload.out += `<span class="typewriter svelte-qk1gaf">${escape_html(displayedText)}<span class="cursor svelte-qk1gaf">|</span></span>`;
	bind_props($$props, { texts });
	pop();
}

const $$Astro = createAstro("https://hgrandry.net");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { firstName, description, about, emailAddress = "hiring@hgrandry.net" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="hero-content container" data-astro-cid-bbe6dxrz> <div class="intro" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>
Hi, I'm <span class="highlight" data-astro-cid-bbe6dxrz>${firstName}</span> </h1> </div> <p class="description" data-astro-cid-bbe6dxrz>
I am a <span class="highlight-2" data-astro-cid-bbe6dxrz>${renderComponent($$result, "TypeWriter", TypeWriter, { "client:load": true, "texts": description, "client:component-hydration": "load", "client:component-path": "C:/git/hg/portfolio-astro/src/components/TypeWriter.svelte", "client:component-export": "default", "data-astro-cid-bbe6dxrz": true })}</span> </p> <div class="about" data-astro-cid-bbe6dxrz> ${about.map((item) => renderTemplate`<p data-astro-cid-bbe6dxrz>${unescapeHTML(item)}</p>`)} </div> ${renderComponent($$result, "Parallax", Parallax, { "factor": parallaxFactors.contact, "client:load": true, "class_name": "contact-button-wrapper", "shadowTarget": ".contact-button", "shadowConfig": {
    baseOffset: 5,
    offsetRange: 10,
    baseBlur: 5,
    blurRange: 10,
    opacity: 0.3
  }, "client:component-hydration": "load", "client:component-path": "C:/git/hg/portfolio-astro/src/components/Parallax.svelte", "client:component-export": "default", "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate` <div class="contact-button-wrapper" data-astro-cid-bbe6dxrz> <a${addAttribute(`mailto:${emailAddress}`, "href")} class="btn btn-primary contact-button" data-astro-cid-bbe6dxrz> <i class="fa-regular fa-envelope" data-astro-cid-bbe6dxrz></i>
Contact Me
</a> </div> ` })} </div> </section> `;
}, "C:/git/hg/portfolio-astro/src/components/Hero.astro", void 0);

function Service($$payload, $$props) {
	let shadowY,
		shadowBlur,
		shadowSpread,
		shadowOpacity;

	let title = $$props["title"];
	let description = $$props["description"];
	let icon = $$props["icon"];
	let parallaxRatio = fallback($$props["parallaxRatio"], 0);

	shadowY = Math.abs(parallaxRatio) * 20;
	shadowBlur = 10 + Math.abs(parallaxRatio) * 30;
	shadowSpread = Math.abs(parallaxRatio) * 5;
	shadowOpacity = 0.1 + Math.abs(parallaxRatio) * 0.1;
	$$payload.out += `<div class="service-wrapper svelte-x28oe1"${attr("style", `--shadow-y: ${stringify(shadowY)}px; --shadow-blur: ${stringify(shadowBlur)}px; --shadow-spread: ${stringify(shadowSpread)}px; --shadow-opacity: ${stringify(shadowOpacity)}`)}><div class="service svelte-x28oe1"><div class="content svelte-x28oe1"><div class="header svelte-x28oe1"><div class="icon svelte-x28oe1">${escape_html(icon)}</div> <h3 class="svelte-x28oe1">${escape_html(title)}</h3></div> <p class="svelte-x28oe1">${escape_html(description)}</p></div></div></div>`;
	bind_props($$props, { title, description, icon, parallaxRatio });
}

function Services($$payload, $$props) {
	push();

	let services = $$props["services"];
	let currentParallaxRatio = 0;
	let $$settled = true;
	let $$inner_payload;

	function $$render_inner($$payload) {
		Parallax($$payload, {
			factor: parallaxFactors.content,
			class_name: "services-grid",
			get parallaxRatio() {
				return currentParallaxRatio;
			},
			set parallaxRatio($$value) {
				currentParallaxRatio = $$value;
				$$settled = false;
			},
			children: ($$payload) => {
				const each_array = ensure_array_like(services);

				$$payload.out += `<!--[-->`;

				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let service = each_array[$$index];

					Service($$payload, spread_props([
						service,
						{ parallaxRatio: currentParallaxRatio }
					]));
				}

				$$payload.out += `<!--]-->`;
			},
			$$slots: { default: true }
		});
	}
	do {
		$$settled = true;
		$$inner_payload = copy_payload($$payload);
		$$render_inner($$inner_payload);
	} while (!$$settled);

	assign_payload($$payload, $$inner_payload);
	bind_props($$props, { services });
	pop();
}

function Experience($$payload, $$props) {
	push();

	let experience = $$props["experience"];

	// Format date to display
	function formatDate(date) {
		if (date === 'Present') return date;

		const d = new Date(date);

		return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
	}

	const each_array = ensure_array_like(experience.responsibilities);
	const each_array_1 = ensure_array_like(experience.skills);

	$$payload.out += `<div class="experience svelte-1kgei8t"><div class="header svelte-1kgei8t"><div class="title-section svelte-1kgei8t"><h3 class="svelte-1kgei8t">${escape_html(experience.title)}</h3> <div class="company svelte-1kgei8t">${escape_html(experience.company)} `;

	if (experience.type) {
		$$payload.out += "<!--[-->";
		$$payload.out += `<span class="type svelte-1kgei8t">· ${escape_html(experience.type)}</span>`;
	} else {
		$$payload.out += "<!--[!-->";
	}

	$$payload.out += `<!--]--></div></div> <div class="meta svelte-1kgei8t"><div class="period svelte-1kgei8t">${escape_html(formatDate(experience.period.start))} - ${escape_html(formatDate(experience.period.end))}</div> `;

	if (experience.location) {
		$$payload.out += "<!--[-->";
		$$payload.out += `<div class="location svelte-1kgei8t">${escape_html(experience.location)}</div>`;
	} else {
		$$payload.out += "<!--[!-->";
	}

	$$payload.out += `<!--]--></div></div> <ul class="responsibilities svelte-1kgei8t"><!--[-->`;

	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let responsibility = each_array[$$index];

		$$payload.out += `<li class="svelte-1kgei8t">${escape_html(responsibility)}</li>`;
	}

	$$payload.out += `<!--]--></ul> <div class="skills svelte-1kgei8t"><!--[-->`;

	for (let $$index_1 = 0,
		$$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let skill = each_array_1[$$index_1];

		$$payload.out += `<span class="skill svelte-1kgei8t">${escape_html(skill)}</span>`;
	}

	$$payload.out += `<!--]--></div></div>`;
	bind_props($$props, { experience });
	pop();
}

function Experiences($$payload, $$props) {
	push();

	let experiences = $$props["experiences"];

	const each_array = ensure_array_like(experiences);
	const each_array_1 = ensure_array_like(experiences);

	$$payload.out += `<div class="experiences svelte-nf1ney"><div class="timeline svelte-nf1ney"><div class="line svelte-nf1ney"></div> <!--[-->`;

	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let experience = each_array[i];

		$$payload.out += `<div class="marker svelte-nf1ney"${attr("style", `top: var(--marker-${i}-top)`)}><span class="date svelte-nf1ney">${escape_html(experience.period.start.split('-')[0])}</span> <div class="dot svelte-nf1ney"></div></div>`;
	}

	$$payload.out += `<!--]--></div> <div class="experience-list svelte-nf1ney"><!--[-->`;

	for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
		let experience = each_array_1[i];

		$$payload.out += `<div class="experience-wrapper svelte-nf1ney">`;
		Experience($$payload, { experience });
		$$payload.out += `<!----></div>`;
	}

	$$payload.out += `<!--]--></div></div>`;
	bind_props($$props, { experiences });
	pop();
}

function Contact($$payload, $$props) {
	push();

	let description = $$props["description"];
	let links = $$props["links"];
	let iconLinks = fallback($$props["iconLinks"], () => [], true);

	$$payload.out += `<div class="contact-wrapper svelte-id0gmz">`;

	Parallax($$payload, {
		factor: parallaxFactors.contact,
		class_name: "contact-content",
		children: ($$payload) => {
			const each_array = ensure_array_like(links);

			$$payload.out += `<div class="contact-inner svelte-id0gmz"><p class="svelte-id0gmz">${escape_html(description)}</p> <div class="contact-buttons svelte-id0gmz"><!--[-->`;

			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let link = each_array[$$index];

				$$payload.out += `<a${attr("href", link.href)}${attr("class", `${stringify(`btn ${link.isPrimary ? 'btn-primary' : 'btn-outline'}`)} svelte-id0gmz`)}${attr("target", link.href.startsWith('http') ? '_blank' : undefined)}${attr("rel", link.href.startsWith('http') ? 'noopener noreferrer' : undefined)}>${escape_html(link.label)}</a>`;
			}

			$$payload.out += `<!--]--></div></div>`;
		},
		$$slots: { default: true }
	});

	$$payload.out += `<!----> `;

	if (iconLinks.length > 0) {
		$$payload.out += "<!--[-->";

		const each_array_1 = ensure_array_like(iconLinks);

		$$payload.out += `<div class="icon-links svelte-id0gmz"><!--[-->`;

		for (let $$index_1 = 0,
			$$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let link = each_array_1[$$index_1];

			$$payload.out += `<a${attr("href", link.href)} class="icon-link svelte-id0gmz" target="_blank" rel="noopener noreferrer"${attr("title", link.label)}><i${attr("class", `${stringify(`icon ${link.icon}`)} svelte-id0gmz`)}></i> <span class="sr-only svelte-id0gmz">${escape_html(link.label)}</span></a>`;
		}

		$$payload.out += `<!--]--></div>`;
	} else {
		$$payload.out += "<!--[!-->";
	}

	$$payload.out += `<!--]--></div>`;
	bind_props($$props, { description, links, iconLinks });
	pop();
}

function ThemeToggle($$payload) {
	var $$store_subs;

	$$payload.out += `<button class="theme-toggle svelte-829jcr" aria-label="Toggle theme">`;

	if (store_get($$store_subs ??= {}, "$theme", theme) === 'dark') {
		$$payload.out += "<!--[-->";
		$$payload.out += `🌙`;
	} else {
		$$payload.out += "<!--[!-->";
		$$payload.out += `☀️`;
	}

	$$payload.out += `<!--]--></button>`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
}

function Header($$payload, $$props) {
	push();

	let title = fallback($$props["title"], "");
	let navItems = fallback($$props["navItems"], () => [], true);
	let homeSection = fallback($$props["homeSection"], "#about");
	let squishFactor = 0;

	const each_array = ensure_array_like(navItems);

	$$payload.out += `<header id="header"${attr("style", ` --squish-factor: ${stringify(squishFactor)}; --header-bg-opacity: ${stringify(squishFactor)}; `)}${attr("class", `svelte-1qvjc0v ${stringify([""].filter(Boolean).join(" "))}`)}><nav class="container svelte-1qvjc0v"><button class="logo svelte-1qvjc0v"><img src="/favicon.png" alt="Logo" loading="eager" class="svelte-1qvjc0v"> <span>${escape_html(title)}</span></button> <div class="nav-right svelte-1qvjc0v">`;
	ThemeToggle($$payload);
	$$payload.out += `<!----> <button class="btn menu-button svelte-1qvjc0v" aria-label="Toggle menu"><i${attr("class", `${stringify(`fa-solid ${'fa-bars'}`)} svelte-1qvjc0v`)}></i></button> <ul${attr("class", `svelte-1qvjc0v ${stringify([""].filter(Boolean).join(" "))}`)}><!--[-->`;

	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let item = each_array[$$index];

		$$payload.out += `<li class="svelte-1qvjc0v"><button${attr("class", `${stringify(item.isPrimary ? 'btn btn-primary' : '')} svelte-1qvjc0v`)}>${escape_html(item.label)}</button></li>`;
	}

	$$payload.out += `<!--]--></ul></div></nav></header>`;
	bind_props($$props, { title, navItems, homeSection });
	pop();
}

function Work($$payload, $$props) {
	push();

	let work = $$props["work"];
	let isExpanded = false;

	onDestroy(() => {
	});

	{
		$$payload.out += "<!--[!-->";
	}

	$$payload.out += `<!--]--> `;

	{
		$$payload.out += "<!--[!-->";
	}

	$$payload.out += `<!--]--> <div role="button" tabindex="0"${attr("class", `work svelte-zvybrf ${stringify([
		"",
		"",
		""
	].filter(Boolean).join(" "))}`)}${attr("aria-expanded", isExpanded)}>`;

	{
		$$payload.out += "<!--[!-->";
	}

	$$payload.out += `<!--]--> <div class="image-container svelte-zvybrf"><img${attr("src", work.image)}${attr("alt", work.title)} class="svelte-zvybrf"></div> <div class="content svelte-zvybrf"><h3 class="svelte-zvybrf">${escape_html(work.title)}</h3> <p class="description svelte-zvybrf">${escape_html(work.description)}</p> `;

	if (work.tags) {
		$$payload.out += "<!--[-->";

		const each_array = ensure_array_like(work.tags);

		$$payload.out += `<div class="tags svelte-zvybrf"><!--[-->`;

		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let tag = each_array[$$index];

			$$payload.out += `<span class="tag svelte-zvybrf">${escape_html(tag)}</span>`;
		}

		$$payload.out += `<!--]--></div>`;
	} else {
		$$payload.out += "<!--[!-->";
	}

	$$payload.out += `<!--]--> `;

	{
		$$payload.out += "<!--[!-->";
	}

	$$payload.out += `<!--]--> `;

	{
		$$payload.out += "<!--[!-->";
	}

	$$payload.out += `<!--]--></div></div>`;
	bind_props($$props, { work });
	pop();
}

function Works($$payload, $$props) {
	let works = $$props["works"];
	const each_array = ensure_array_like(works);

	$$payload.out += `<div class="works-grid svelte-b613hu"><!--[-->`;

	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let work = each_array[$$index];

		Work($$payload, { work });
	}

	$$payload.out += `<!--]--></div>`;
	bind_props($$props, { works });
}

const assistoImg = new Proxy({"src":"/assets/assisto.BLZyVgQI.png","width":1380,"height":802,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/git/hg/portfolio-astro/src/assets/works/assisto/assisto.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/git/hg/portfolio-astro/src/assets/works/assisto/assisto.png");
							return target[name];
						}
					});

const ubisimImg = new Proxy({"src":"/assets/ubisim.Bh4RAcip.avif","width":1286,"height":701,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/git/hg/portfolio-astro/src/assets/works/ubisim/ubisim.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/git/hg/portfolio-astro/src/assets/works/ubisim/ubisim.avif");
							return target[name];
						}
					});

const chapter2Img = new Proxy({"src":"/assets/chapter2.zspvrz7b.png","width":573,"height":453,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/git/hg/portfolio-astro/src/assets/works/chapter2/chapter2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/git/hg/portfolio-astro/src/assets/works/chapter2/chapter2.png");
							return target[name];
						}
					});

const tabMinimaImg = new Proxy({"src":"/assets/tab-minima.I2l_dxJu.jpeg","width":5094,"height":3396,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/git/hg/portfolio-astro/src/assets/works/tab-minima/tab-minima.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/git/hg/portfolio-astro/src/assets/works/tab-minima/tab-minima.jpeg");
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Hadrien Grandry";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Background3D", Background3D, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/git/hg/portfolio-astro/src/components/Background3D.svelte", "client:component-export": "default" })} ${renderComponent($$result2, "Header", Header, { "client:load": true, "title": title, "navItems": [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Works", href: "#works" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ], "homeSection": "#about", "client:component-hydration": "load", "client:component-path": "C:/git/hg/portfolio-astro/src/components/Header.svelte", "client:component-export": "default" })} ${renderComponent($$result2, "Section", $$Section, { "id": "about" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, { "client:load": true, "firstName": "Hadrien", "description": [
    "Software Developer",
    "Unity Developer",
    "Web Developer",
    "Tools Developer",
    "Tech Lead",
    "Software Architect"
  ], "about": [
    "I have been developing software for over 20 years, crafting <b>user interfaces</b>, <b>games</b> and <b>production tools</b>.",
    "Over the years, I have developed a process to write modular software that <b>scales</b> and delivers high-end <b>user experiences</b>.",
    "I can <b>help you</b> kick-off your project the right way, build and improve your existing code-base and provides analysis and counseling to <b> grow</b> your project.",
    "Let's get in touch!"
  ], "client:component-hydration": "load", "client:component-path": "C:/git/hg/portfolio-astro/src/components/Hero.astro", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "id": "services", "title": "Services", "backgroundColor": "--color-background-services" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Services", Services, { "client:load": true, "services": [
    {
      icon: "\u{1F468}\u200D\u{1F4BB}",
      title: "Technical Lead",
      description: "Leading development teams with modern best practices and agile methodologies to deliver high-quality software solutions."
    },
    {
      icon: "\u{1F3D7}\uFE0F",
      title: "Software Architecture",
      description: "Designing scalable, maintainable, and efficient software architectures that align with business objectives."
    },
    {
      icon: "\u{1F3AE}",
      title: "Unity Development",
      description: "Creating immersive 3D experiences and games using Unity, with expertise in C# and modern game development practices."
    },
    {
      icon: "\u{1F310}",
      title: "ASP.NET Development",
      description: "Building robust web applications and APIs using ASP.NET Core with clean architecture and modern development patterns."
    }
  ], "client:component-hydration": "load", "client:component-path": "C:/git/hg/portfolio-astro/src/components/Services.svelte", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "id": "works", "title": "Works", "backgroundColor": "--color-background-works" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Works", Works, { "client:load": true, "works": [
    {
      title: "Assisto",
      description: "An AI-powered platform for Nursing Home administrators.",
      summary: "I implemented the MVP using ASP.NET and Blazor, focusing on a scalable architecture that balances short-term velocity with long-term stability. The platform leverages AI to streamline administrative tasks and improve care quality.",
      image: assistoImg.src,
      tags: ["ASP.NET", "Blazor", "AI", "Azure"],
      link: "https://www.assistocare.com"
    },
    {
      title: "UbiSim VR Training",
      description: "A VR medical training platform for nursing students, featuring multiplayer sessions and web-based monitoring.",
      summary: "I led the technical transition from startup to stable product, implementing core features like multiplayer sessions, VR/non-VR interfaces, and a web-based monitoring system. The platform includes real-time session tracking and replay capabilities, built with Unity and ASP.NET.",
      image: ubisimImg.src,
      tags: ["Unity", "VR", "Multiplayer", "ASP.NET"],
      link: "https://www.ubisimvr.com/"
    },
    {
      title: "Chapter2 Dental",
      description: "A 3D dental treatment planning tool with real-time collaboration and advanced visualization features.",
      summary: "I developed the entire front-end in Unity, creating intuitive UI/UX, 3D interactions, animations, and data synchronization between devices. Built multiple supporting libraries including dependency injection, tweening, and UI components, along with automated content authoring and build pipelines.",
      image: chapter2Img.src,
      tags: ["Unity", "3D", "Medical", "Azure"],
      link: "https://chapter2dental.com"
    },
    {
      title: "Tab Minima",
      description: "A minimalist Chrome extension that transforms your new tab into a clean, distraction-free space.",
      summary: "Designed with focus on simplicity and user experience, it provides a serene environment for improved productivity. Features a clean interface that helps you stay focused on what matters.",
      image: tabMinimaImg.src,
      tags: ["Chrome Extension", "Blazor", "UX Design"],
      links: [
        {
          label: "Try it online",
          href: "https://salmon-dune-05d377e0f.5.azurestaticapps.net/"
        },
        {
          label: "Install the extension",
          href: "https://chromewebstore.google.com/detail/tab-minima/fkaanfampdpmpkenbacgljbnfakemplm?hl=en"
        }
      ]
    }
  ], "client:component-hydration": "load", "client:component-path": "C:/git/hg/portfolio-astro/src/components/Works.svelte", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "id": "experience", "title": "Experience", "backgroundColor": "--color-background-experiences" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Experiences", Experiences, { "client:load": true, "experiences": [
    {
      title: "Co-Founder / Head of Engineering",
      company: "Assisto",
      type: "Part-time",
      period: {
        start: "2024-01",
        end: "Present"
      },
      location: null,
      responsibilities: [
        "Implemented the MVP with ASP.net and Blazor",
        "Drive technical decisions on software architecture with focus on short-term velocity and long-term stability",
        "R&D on AI and internal tools"
      ],
      skills: ["ASP.NET", "Blazor", "AI"]
    },
    {
      title: "Software Architect / Tech Lead",
      company: "UbiSim",
      type: "Contract",
      period: {
        start: "2021-10",
        end: "Present"
      },
      location: "Remote",
      responsibilities: [
        "Lead tech initiatives to transition the project from its initial startup implementation to a long-term stable product",
        "Provided support and guidance to the feature team through fast-pace release cycles",
        "Identified implementation and process issues and developed solutions to address them",
        "Established coding guidelines and patterns to improve the project overall stability and team efficiency with Unity",
        "Wrote tools, libraries and build pipelines to streamline the day to day workflow of developers and QA"
      ],
      skills: [
        "Software Architecture",
        "Unity3D",
        "ASP.NET",
        "C#"
      ]
    },
    {
      title: "Freelance Software Developer",
      company: "UbiSim",
      type: "Freelance",
      period: {
        start: "2019-10",
        end: "2021-10"
      },
      location: "Montreal, Quebec, Canada",
      responsibilities: [
        "Implemented core parts of the VR simulation in Unity3d, such as the multiplayer mode, VR/non-VR interfaces and lower levels systems",
        "Implemented a web player (Blazor client and ASP.net server) to follow live sessions of the VR simulation and watch sessions replays"
      ],
      skills: [
        "Microsoft Azure",
        "Unity3D",
        "User Interface Programming",
        "Azure DevOps",
        "C#",
        "Software Architecture",
        "Web API",
        "Client/server",
        "ASP.NET",
        "Blazor"
      ]
    },
    {
      title: "Principal Developer",
      company: "Chapter2Dental",
      type: "Freelance",
      period: {
        start: "2019-07",
        end: "2023-07"
      },
      location: "Montreal, Quebec, Canada",
      responsibilities: [
        "Application front-end with Unity: UI, UX, 3d interactions and animations, drawing in a 3d space, client-server interactions, data synchronization between devices, overall front-end architecture and systems",
        "Multiple libraries to support the front-end development, including a dependency injection library for Unity, tween library, observables, UI components, embedded dev tools",
        "Animation pipeline, enabling 3d artists to work autonomously from end to end",
        "Application build pipeline for multi-platforms (mobile and desktop)",
        "Content build and delivery pipeline, automating content authoring steps",
        "Project organization and documentation using Notion",
        "Coordination with backend using Azure portal, DevOps and MySql workbench"
      ],
      skills: [
        "Unity3D",
        "User Interface Programming",
        "User Interface Design",
        "User Experience (UX)",
        "C#",
        "Software Architecture",
        "Client/server"
      ]
    },
    {
      title: "Senior Tools Programmer",
      company: "Playtika",
      type: "Freelance",
      period: {
        start: "2017-09",
        end: "2019-05"
      },
      location: "Montreal, Quebec, Canada",
      responsibilities: [
        "Monetization dashboard in Unity, back-end API and data processing with .net",
        "Back-end agent to process user statistics, running on millions of profiles every day",
        "Custom memory profiler for the Unity game to track loaded entities and detect memory leaks",
        "UI performance improvements",
        "UI library and guidelines to improve usability, performances and maintainability"
      ],
      skills: [
        "Unity3D",
        "User Interface Programming",
        "Performance Improvement",
        "C#",
        "MySQL",
        "Web API",
        "Entity Framework",
        "Client/server"
      ]
    },
    {
      title: "Senior Unity Developer",
      company: "HUMANITAS SOLUTIONS",
      period: {
        start: "2016-08",
        end: "2017-05"
      },
      location: "Montreal, Canada Area",
      responsibilities: [
        "Architecture of a collaborative mobile application with a Unity3D front-end",
        "Development of the application main components (Front-end, C# back-end and middle-ware libraries, internal tools)",
        "Coordination of the dev team, follow up with UI/UX/Business, definition of the development process"
      ],
      skills: [
        "C#",
        "Unity3D",
        "Mobile",
        "UI",
        "Dev tools",
        "Team lead"
      ]
    },
    {
      title: "Freelance Software Developer",
      company: "Autodesk",
      type: "Freelance",
      period: {
        start: "2015-09",
        end: "2016-06"
      },
      location: "Montreal, Canada Area",
      responsibilities: [
        "R&D Programming on a real-time 3D visualization tool, using Stingray engine and Lua",
        "Full-stack programming on Autodesk Live using Lua, C#, Html/JS/Css, C++",
        "Development of a VSCode debugger for the Stingray engine (C#)"
      ],
      skills: [
        "UI",
        "3D simulation",
        "BIM",
        "Lua",
        "Stingray engine",
        "C#",
        "C++",
        "HTML/CSS/JS"
      ]
    },
    {
      title: "Tool Programmer",
      company: "Ubisoft",
      type: "Full-time",
      period: {
        start: "2012-10",
        end: "2015-03"
      },
      location: "Montreal, Canada",
      responsibilities: [
        "Researched and designed a production pipeline to improve UI teams workflow. Helped identify project scope, requirements and created early UI prototypes",
        "Designed and developed the front-end for a profiling tool with focus on usability and performance",
        "Designed and developed a browsing interface to search production assets, locate duplicate/unused assets and optimize game interfaces",
        "Reverse-engineered the Flash open-file format and wrote an API to quickly search and modify files simultaneously",
        "Extended the FlashDevelop IDE to improve UI developers workflow"
      ],
      skills: [
        "UI Development",
        "Tool Development",
        "Flash",
        "FlashDevelop",
        "API Design"
      ]
    },
    {
      title: "User Interface Developer",
      company: "Ubisoft",
      type: "Full-time",
      period: {
        start: "2010-09",
        end: "2012-09"
      },
      location: "Montreal, Canada",
      responsibilities: [
        "Designed and developed a toolchain to improve AC3 UI team workflow and framework supporting all UI elements (HUD, menus, subtitles, system feedbacks)",
        "Developed in-game menus, participated in motion design and 3D layout optimization",
        "Collaborated with designers and QA testers to improve usability and user flow"
      ],
      skills: [
        "Game UI",
        "Motion Design",
        "3D Layout",
        "UI Framework Development",
        "User Experience"
      ]
    },
    {
      title: "Actionscript Developer",
      company: "Ubisoft",
      type: "Full-time",
      period: {
        start: "2009-10",
        end: "2010-09"
      },
      location: "Montreal, Canada",
      responsibilities: [
        "Developed 30+ mini-games levels and cut-scenes in Flash, focusing on code reusability",
        "Prototyped 3Ds dual screen interface adaptations for Splinter Cell Chaos Theory",
        "Developed a multiplayer lobby prototype with flexible dialog API"
      ],
      skills: [
        "Actionscript",
        "Flash",
        "Game Development",
        "Prototyping",
        "UI Development"
      ]
    },
    {
      title: "Level Designer",
      company: "Ubisoft",
      type: "Full-time",
      period: {
        start: "2004-09",
        end: "2009-09"
      },
      location: "Montreal/Annecy",
      responsibilities: [
        "Designed and implemented Splinter Cell multiplayer environments with asymmetric gameplay",
        "Designed and implemented fast-paced levels for the Naruto series, including E3 demo area",
        "Designed and integrated parkour areas on Assassin's Creed II"
      ],
      skills: [
        "Level Design",
        "Game Design",
        "3D Modeling",
        "Multiplayer Design",
        "Environmental Design"
      ]
    },
    {
      title: "Game Designer",
      company: "Eko Software",
      type: "Internship",
      period: {
        start: "2003-07",
        end: "2003-09"
      },
      location: "Paris, France",
      responsibilities: [
        "Game design and prototyping for an unreleased PS2 project"
      ],
      skills: ["Game Design", "Prototyping", "PS2 Development"]
    },
    {
      title: "Software Developer",
      company: "Prodem",
      type: "Internship",
      period: {
        start: "2001-07",
        end: "2001-09"
      },
      location: "Saint-Germain en Laye, France",
      responsibilities: [
        "Designed and developed a software used to produce cost-estimates for customers"
      ],
      skills: ["Software Development", "Business Applications"]
    }
  ], "client:component-hydration": "load", "client:component-path": "C:/git/hg/portfolio-astro/src/components/Experiences.svelte", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "id": "contact", "title": "Contact", "backgroundColor": "--color-background-contact" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Contact", Contact, { "client:load": true, "description": "Ready to start a project or just want to chat? Get in touch!", "links": [
    {
      label: "Email Me",
      href: "mailto:hiring@hgrandry.net",
      isPrimary: true
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hgrandry"
    }
  ], "iconLinks": [
    {
      icon: "fa-solid fa-file-lines",
      label: "Resume",
      href: "https://drive.google.com/file/d/1ICIL-f8s4XvXaCnHamv-GuiVcvcJEUO-/view?usp=sharing"
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      href: "https://github.com/hgrandry"
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hgrandry"
    }
  ], "client:component-hydration": "load", "client:component-path": "C:/git/hg/portfolio-astro/src/components/Contact.svelte", "client:component-export": "default" })} ` })} ` })}`;
}, "C:/git/hg/portfolio-astro/src/pages/index.astro", void 0);

const $$file = "C:/git/hg/portfolio-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
