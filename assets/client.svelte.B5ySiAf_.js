import{p,u as m,h as y,m as h}from"./render.DNNm5J4B.js";import{au as v,av as _,aa as $,W as g,v as b,A as x,w as k}from"./template.CnN5S33n.js";function f(e){return(a,...i)=>{var n=e(...i),t;if(b)t=x,k();else{var d=n.render().trim(),o=v(d);t=g(o),a.before(t)}const s=n.setup?.(t);_(t,t),typeof s=="function"&&$(s)}}const u=new WeakMap,O=e=>async(a,i,n,{client:t})=>{if(!e.hasAttribute("ssr"))return;let d,o,s={};for(const[r,c]of Object.entries(n))o??={},r==="default"?(o.default=!0,d=f(()=>({render:()=>`<astro-slot>${c}</astro-slot>`}))):o[r]=f(()=>({render:()=>`<astro-slot name="${r}">${c}</astro-slot>`})),r==="default"?s.children=f(()=>({render:()=>`<astro-slot>${c}</astro-slot>`})):s[r]=f(()=>({render:()=>`<astro-slot name="${r}">${c}</astro-slot>`}));const l={...i,children:d,$$slots:o,...s};if(u.has(e))u.get(e).setProps(l);else{const r=w(a,e,l,t!=="only");u.set(e,r),e.addEventListener("astro:unmount",()=>r.destroy(),{once:!0})}};function w(e,a,i,n){let t=p(i);const o=(n?y:h)(e,{target:a,props:t});return{setProps(s){Object.assign(t,s);for(const l in t)l in s||delete t[l]},destroy(){m(o)}}}export{O as default};
