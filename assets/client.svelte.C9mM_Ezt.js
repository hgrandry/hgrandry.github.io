import{av as p,aw as y,ag as m,a3 as h,A as _,L as $,G as v,am as g,ax as b,ay as x,az as k}from"./render.CP2d90Gu.js";function f(e){return(n,...i)=>{var a=e(...i),t;if(_)t=$,v();else{var d=a.render().trim(),o=p(d);t=h(o),n.before(t)}const s=a.setup?.(t);y(t,t),typeof s=="function"&&m(s)}}const u=new WeakMap,j=e=>async(n,i,a,{client:t})=>{if(!e.hasAttribute("ssr"))return;let d,o,s={};for(const[r,c]of Object.entries(a))o??={},r==="default"?(o.default=!0,d=f(()=>({render:()=>`<astro-slot>${c}</astro-slot>`}))):o[r]=f(()=>({render:()=>`<astro-slot name="${r}">${c}</astro-slot>`})),r==="default"?s.children=f(()=>({render:()=>`<astro-slot>${c}</astro-slot>`})):s[r]=f(()=>({render:()=>`<astro-slot name="${r}">${c}</astro-slot>`}));const l={...i,children:d,$$slots:o,...s};if(u.has(e))u.get(e).setProps(l);else{const r=w(n,e,l,t!=="only");u.set(e,r),e.addEventListener("astro:unmount",()=>r.destroy(),{once:!0})}};function w(e,n,i,a){let t=g(i);const o=(a?x:k)(e,{target:n,props:t});return{setProps(s){Object.assign(t,s);for(const l in t)l in s||delete t[l]},destroy(){b(o)}}}export{j as default};