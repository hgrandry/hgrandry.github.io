import{aD as b,aq as E,a5 as k,G as R,aj as V,w as W,aE as Y,K as j,aF as S,a8 as q,aG as x,ab as M,aH as m,n as w,m as D,k as P,o as p,a9 as B,aI as C,aJ as G,a2 as K,Y as $,aK as F,W as J,h as z,p as Q,j as L,ai as U,b as X,ae as Z}from"./template.DEa2yU6v.js";const ee=["touchstart","touchmove"];function te(e){return ee.includes(e)}function re(e){var t=k,a=R;b(null),E(null);try{return e()}finally{b(t),E(a)}}const ae=new Set,O=new Set;function ne(e,t,a,o){function i(r){if(o.capture||y.call(t,r),!r.cancelBubble)return re(()=>a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?W(()=>{t.addEventListener(e,i,o)}):t.addEventListener(e,i,o),i}function oe(e,t,a,o,i){var r={capture:o,passive:i},u=ne(e,t,a,r);(t===document.body||t===window||t===document)&&V(()=>{t.removeEventListener(e,u,r)})}function y(e){var t=this,a=t.ownerDocument,o=e.type,i=e.composedPath?.()||[],r=i[0]||e.target,u=0,d=e.__root;if(d){var l=i.indexOf(d);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var _=i.indexOf(t);if(_===-1)return;l<=_&&(u=l)}if(r=i[u]||e.target,r!==t){Y(e,"currentTarget",{configurable:!0,get(){return r||a}});var T=k,f=R;b(null),E(null);try{for(var n,s=[];r!==null;){var h=r.assignedSlot||r.parentNode||r.host||null;try{var c=r["__"+o];if(c!==void 0&&!r.disabled)if(j(c)){var[I,...H]=c;I.apply(r,[e,...H])}else c.call(r,e)}catch(g){n?s.push(g):n=g}if(e.cancelBubble||h===t||h===null)break;r=h}if(n){for(let g of s)queueMicrotask(()=>{throw g});throw n}}finally{e.__root=t,delete e.currentTarget,b(T),E(f)}}}function ue(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??=e.nodeValue)&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function ie(e,t){return A(e,t)}function fe(e,t){S(),t.intro=t.intro??!1;const a=t.target,o=L,i=p;try{for(var r=q(a);r&&(r.nodeType!==8||r.data!==x);)r=M(r);if(!r)throw m;w(!0),D(r),P();const u=A(e,{...t,anchor:r});if(p===null||p.nodeType!==8||p.data!==B)throw C(),m;return w(!1),u}catch(u){if(u===m)return t.recover===!1&&G(),S(),K(a),w(!1),ie(e,t);throw u}finally{w(o),D(i)}}const v=new Map;function A(e,{target:t,anchor:a,props:o={},events:i,context:r,intro:u=!0}){S();var d=new Set,l=f=>{for(var n=0;n<f.length;n++){var s=f[n];if(!d.has(s)){d.add(s);var h=te(s);t.addEventListener(s,y,{passive:h});var c=v.get(s);c===void 0?(document.addEventListener(s,y,{passive:h}),v.set(s,1)):v.set(s,c+1)}}};l($(ae)),O.add(l);var _=void 0,T=F(()=>{var f=a??t.appendChild(J());return z(()=>{if(r){Q({});var n=Z;n.c=r}i&&(o.$$events=i),L&&U(f,null),_=e(f,o)||{},L&&(R.nodes_end=p),r&&X()}),()=>{for(var n of d){t.removeEventListener(n,y);var s=v.get(n);--s===0?(document.removeEventListener(n,y),v.delete(n)):v.set(n,s)}O.delete(l),f!==a&&f.parentNode?.removeChild(f)}});return N.set(_,T),_}let N=new WeakMap;function le(e,t){const a=N.get(e);return a?(N.delete(e),a(t)):Promise.resolve()}export{oe as e,fe as h,ie as m,ue as s,le as u};