import{p,u as m,h as y,m as h}from"./render.QEePbp-f.js";import{au as _,av as $,aa as v,W as g,l as b,A as x,w as k}from"./template.CJq6cqxZ.js";function f(e){return(a,...i)=>{var n=e(...i),t;if(b)t=x,k();else{var l=n.render().trim(),o=_(l);t=g(o),a.before(t)}const s=n.setup?.(t);$(t,t),typeof s=="function"&&v(s)}}const u=new WeakMap,O=e=>async(a,i,n,{client:t})=>{if(!e.hasAttribute("ssr"))return;let l,o,s={};for(const[r,c]of Object.entries(n))o??={},r==="default"?(o.default=!0,l=f(()=>({render:()=>`<astro-slot>${c}</astro-slot>`}))):o[r]=f(()=>({render:()=>`<astro-slot name="${r}">${c}</astro-slot>`})),r==="default"?s.children=f(()=>({render:()=>`<astro-slot>${c}</astro-slot>`})):s[r]=f(()=>({render:()=>`<astro-slot name="${r}">${c}</astro-slot>`}));const d={...i,children:l,$$slots:o,...s};if(u.has(e))u.get(e).setProps(d);else{const r=w(a,e,d,t!=="only");u.set(e,r),e.addEventListener("astro:unmount",()=>r.destroy(),{once:!0})}};function w(e,a,i,n){let t=p(i);const o=(n?y:h)(e,{target:a,props:t});return{setProps(s){Object.assign(t,s);for(const d in t)d in s||delete t[d]},destroy(){m(o)}}}export{O as default};
