import{ab as x,ac as M,A as T,y as z,w as P,ad as G,ae as L,i as f,af as V,ag as h,n as w,ah as $,a2 as N,g as F,ai as j,aj as H,ak as Z,al as J,am as K,an as Q,ao as W,ap as X,aq as B,ar as k,z as ee,as as ne,at as re,S as ae,au as se,l as te,T as C,av as ue}from"./render.fs_yrWSA.js";const ie="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(ie);x();function ce(e=!1){const n=z,a=n.l.u;if(!a)return;let r=()=>V(n.s);if(e){let i=0,t={};const d=h(()=>{let g=!1;const _=n.s;for(const u in _)_[u]!==t[u]&&(t[u]=_[u],g=!0);return g&&i++,i});r=()=>f(d)}a.b.length&&M(()=>{q(n,r),L(a.b)}),T(()=>{const i=P(()=>a.m.map(G));return()=>{for(const t of i)typeof t=="function"&&t()}}),a.a.length&&T(()=>{q(n,r),L(a.a)})}function q(e,n){if(e.l.s)for(const a of e.l.s)f(a);n()}function fe(e,n,a){if(e==null)return n(void 0),w;const r=P(()=>e.subscribe(n,a));return r.unsubscribe?()=>r.unsubscribe():r}let S=!1;function oe(e,n,a){const r=a[n]??={store:null,source:N(void 0),unsubscribe:w};if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=w;else{var i=!0;r.unsubscribe=fe(e,t=>{i?r.source.v=t:F(r.source,t)}),i=!1}return f(r.source)}function de(e,n){return e.set(n),n}function ve(){const e={};return $(()=>{for(var n in e)e[n].unsubscribe()}),e}function le(e){var n=S;try{return S=!1,[e(),S]}finally{S=n}}function D(e){for(var n=C,a=C;n!==null&&!(n.f&(W|X));)n=n.parent;try{return B(n),e()}finally{B(a)}}function be(e,n,a,r){var i=(a&k)!==0,t=!ee||(a&ne)!==0,d=(a&re)!==0,g=(a&ue)!==0,_=!1,u;d?[u,_]=le(()=>e[n]):u=e[n];var U=ae in e||se in e,v=j(e,n)?.set??(U&&d&&n in e?s=>e[n]=s:void 0),l=r,p=!0,m=!1,O=()=>(m=!0,p&&(p=!1,g?l=P(r):l=r),l);u===void 0&&r!==void 0&&(v&&t&&H(),u=O(),v&&v(u));var c;if(t)c=()=>{var s=e[n];return s===void 0?O():(p=!0,m=!1,s)};else{var A=D(()=>(i?h:te)(()=>e[n]));A.f|=Z,c=()=>{var s=f(A);return s!==void 0&&(l=void 0),s===void 0?l:s}}if(!(a&J))return c;if(v){var Y=e.$$legacy;return function(s,o){return arguments.length>0?((!t||!o||Y||_)&&v(o?c():s),s):c()}}var E=!1,y=!1,I=N(u),b=D(()=>h(()=>{var s=c(),o=f(I);return E?(E=!1,y=!0,o):(y=!1,I.v=s)}));return i||(b.equals=K),function(s,o){if(arguments.length>0){const R=o?f(b):t&&d?Q(s):s;return b.equals(R)||(E=!0,F(I,R),m&&l!==void 0&&(l=R),P(()=>f(b))),s}return f(b)}}export{oe as a,de as b,ce as i,be as p,ve as s};
