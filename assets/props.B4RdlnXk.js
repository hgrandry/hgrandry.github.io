import{F as x,G as C,w as A,g as _,d as F,j as m,H as G,L as U,P as H,I as K,u as T,J as V,R as $,K as L,M as z,N as J,O as Q,Q as W,S as N,T as q,V as y,E as X,k as D,W as Z,X as v}from"./runtime.CJxWV0rf.js";import{p as k}from"./proxy.BMOTCA4l.js";import{s as ee}from"./utils.CVykTFJJ.js";let p=!1;function ae(e,r,s){const n=s[r]??={store:null,source:C(void 0),unsubscribe:A};if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=A;else{var i=!0;n.unsubscribe=ee(e,a=>{i?n.source.v=a:F(n.source,a)}),i=!1}return _(n.source)}function ue(e,r){return e.set(r),r}function fe(){const e={};return x(()=>{for(var r in e)e[r].unsubscribe()}),e}function re(e){var r=p;try{return p=!1,[e(),p]}finally{p=r}}const ne={get(e,r){let s=e.props.length;for(;s--;){let n=e.props[s];if(v(n)&&(n=n()),typeof n=="object"&&n!==null&&r in n)return n[r]}},set(e,r,s){let n=e.props.length;for(;n--;){let i=e.props[n];v(i)&&(i=i());const a=m(i,r);if(a&&a.set)return a.set(s),!0}return!1},getOwnPropertyDescriptor(e,r){let s=e.props.length;for(;s--;){let n=e.props[s];if(v(n)&&(n=n()),typeof n=="object"&&n!==null&&r in n){const i=m(n,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===N||r===q)return!1;for(let s of e.props)if(v(s)&&(s=s()),s!=null&&r in s)return!0;return!1},ownKeys(e){const r=[];for(let s of e.props){v(s)&&(s=s());for(const n in s)r.includes(n)||r.push(n)}return r}};function le(...e){return new Proxy({props:e},ne)}function B(e){for(var r=D,s=D;r!==null&&!(r.f&(V|$));)r=r.parent;try{return L(r),e()}finally{L(s)}}function oe(e,r,s,n){var i=(s&z)!==0,a=!J||(s&Q)!==0,b=(s&W)!==0,M=(s&Z)!==0,w=!1,f;b?[f,w]=re(()=>e[r]):f=e[r];var Y=N in e||q in e,c=m(e,r)?.set??(Y&&b&&r in e?t=>e[r]=t:void 0),u=n,P=!0,h=!1,I=()=>(h=!0,P&&(P=!1,M?u=T(n):u=n),u);f===void 0&&n!==void 0&&(c&&a&&G(),f=I(),c&&c(f));var l;if(a)l=()=>{var t=e[r];return t===void 0?I():(P=!0,h=!1,t)};else{var O=B(()=>(i?y:X)(()=>e[r]));O.f|=U,l=()=>{var t=_(O);return t!==void 0&&(u=void 0),t===void 0?u:t}}if(!(s&H))return l;if(c){var j=e.$$legacy;return function(t,o){return arguments.length>0?((!a||!o||j||w)&&c(o?l():t),t):l()}}var g=!1,R=!1,S=C(f),d=B(()=>y(()=>{var t=l(),o=_(S);return g?(g=!1,R=!0,o):(R=!1,S.v=t)}));return i||(d.equals=K),function(t,o){if(arguments.length>0){const E=o?_(d):a&&b?k(t):t;return d.equals(E)||(g=!0,F(S,E),h&&u!==void 0&&(u=E),T(()=>_(d))),t}return _(d)}}export{fe as a,ae as b,ue as c,oe as p,le as s};