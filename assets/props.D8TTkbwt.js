import{ac as Y,ad as M,B as L,z as V,x as P,ae as z,af as T,i as f,ag as G,ah as h,n as w,ai as $,a3 as N,g as x,aj as j,ak as H,al as Z,am as J,an as K,ao as Q,ap as W,aq as X,ar as B,as as k,A as ee,at as ne,au as re,S as ae,av as se,o as te,V as C,aw as ue}from"./render.BK1WQAwX.js";const ie="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(ie);Y();function oe(e=!1){const n=V,a=n.l.u;if(!a)return;let r=()=>G(n.s);if(e){let i=0,t={};const d=h(()=>{let g=!1;const _=n.s;for(const u in _)_[u]!==t[u]&&(t[u]=_[u],g=!0);return g&&i++,i});r=()=>f(d)}a.b.length&&M(()=>{q(n,r),T(a.b)}),L(()=>{const i=P(()=>a.m.map(z));return()=>{for(const t of i)typeof t=="function"&&t()}}),a.a.length&&L(()=>{q(n,r),T(a.a)})}function q(e,n){if(e.l.s)for(const a of e.l.s)f(a);n()}function fe(e,n,a){if(e==null)return n(void 0),w;const r=P(()=>e.subscribe(n,a));return r.unsubscribe?()=>r.unsubscribe():r}let S=!1;function ce(e,n,a){const r=a[n]??={store:null,source:N(void 0),unsubscribe:w};if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=w;else{var i=!0;r.unsubscribe=fe(e,t=>{i?r.source.v=t:x(r.source,t)}),i=!1}return f(r.source)}function de(e,n){return e.set(n),n}function ve(){const e={};return $(()=>{for(var n in e)e[n].unsubscribe()}),e}function le(e){var n=S;try{return S=!1,[e(),S]}finally{S=n}}function D(e){for(var n=C,a=C;n!==null&&!(n.f&(W|X));)n=n.parent;try{return B(n),e()}finally{B(a)}}function be(e,n,a,r){var i=(a&k)!==0,t=!ee||(a&ne)!==0,d=(a&re)!==0,g=(a&ue)!==0,_=!1,u;d?[u,_]=le(()=>e[n]):u=e[n];var F=ae in e||se in e,v=j(e,n)?.set??(F&&d&&n in e?s=>e[n]=s:void 0),l=r,p=!0,m=!1,O=()=>(m=!0,p&&(p=!1,g?l=P(r):l=r),l);u===void 0&&r!==void 0&&(v&&t&&H(),u=O(),v&&v(u));var o;if(t)o=()=>{var s=e[n];return s===void 0?O():(p=!0,m=!1,s)};else{var A=D(()=>(i?h:te)(()=>e[n]));A.f|=Z,o=()=>{var s=f(A);return s!==void 0&&(l=void 0),s===void 0?l:s}}if(!(a&J))return o;if(v){var U=e.$$legacy;return function(s,c){return arguments.length>0?((!t||!c||U||_)&&v(c?o():s),s):o()}}var E=!1,y=!1,I=N(u),b=D(()=>h(()=>{var s=o(),c=f(I);return E?(E=!1,y=!0,c):(y=!1,I.v=s)}));return i||(b.equals=K),function(s,c){if(arguments.length>0){const R=c?f(b):t&&d?Q(s):s;return b.equals(R)||(E=!0,x(I,R),m&&l!==void 0&&(l=R),P(()=>f(b))),s}return f(b)}}export{ce as a,de as b,oe as i,be as p,ve as s};