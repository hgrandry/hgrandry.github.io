import{j as i,ax as a,an as _,ay as v,y as o,N as p}from"./template.DbfV741Q.js";function l(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function h(e,t){var n=e.__className,s=m(t);i&&e.className===s?e.__className=s:(n!==s||i&&e.className!==s)&&(t==null?e.removeAttribute("class"):e.className=s,e.__className=s)}function m(e){return e??""}function b(e,t,n){if(n){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}function y(e){a===null&&l(),_&&a.l!==null?x(a).m.push(e):v(()=>{const t=o(e);if(typeof t=="function")return t})}function L(e){a===null&&l(),y(()=>()=>o(e))}function N(e,t,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:s})}function k(){const e=a;return e===null&&l(),(t,n,s)=>{const c=e.s.$$events?.[t];if(c){const u=p(c)?c.slice():[c],r=N(t,n,s);for(const f of u)f.call(e.x,r);return!r.defaultPrevented}return!0}}function x(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}export{L as a,k as c,y as o,h as s,b as t};