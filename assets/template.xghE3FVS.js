import{z as h,_ as f,q as d,at as E,au as T,a9 as i,h as u,$ as s,a7 as g,b as k}from"./runtime.D0cKiUdn.js";let _=!1,c=[];function q(){_=!1;const e=c.slice();c=[],h(e)}function b(e){_||(_=!0,queueMicrotask(q)),c.push(e)}function M(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function a(e,r){var t=d;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function x(e,r){var t=(r&E)!==0,m=(r&T)!==0,n,l=!e.startsWith("<!>");return()=>{if(u)return a(s,null),s;n===void 0&&(n=M(l?e:"<!>"+e),t||(n=f(n)));var o=m?document.importNode(n,!0):n.cloneNode(!0);if(t){var v=f(o),p=o.lastChild;a(v,p)}else a(o,o);return o}}function N(e=""){if(!u){var r=i(e+"");return a(r,r),r}var t=s;return t.nodeType!==3&&(t.before(t=i()),g(t)),a(t,t),t}function A(){if(u)return a(s,null),s;var e=document.createDocumentFragment(),r=document.createComment(""),t=i();return e.append(r,t),a(r,t),e}function L(e,r){if(u){d.nodes_end=s,k();return}e!==null&&e.before(r)}export{L as a,N as b,M as c,a as d,A as e,b as q,x as t};
