import{a0 as X,a1 as ea,a2 as k,a3 as m,a4 as q,h as I,b as Z,U as ra,a5 as $,a6 as O,a7 as L,a8 as S,$ as C,a9 as na,x as ia,aa as J,ab as M,q as B,ac as F,ad as V,ae as U,af as fa,ag as sa,ah as la,ai as ta,aj as Q,ak as ua,al as oa,I as va,j as G,_ as _a,am as ca,an as da,ao as ha,ap as z,w as pa,aq as ga}from"./runtime.D0cKiUdn.js";import{q as Ea}from"./template.xghE3FVS.js";function ya(e,a,r=!1){I&&Z();var n=e,f=null,l=null,u=ra,g=r?ea:0,c=!1;const T=(h,d=!0)=>{c=!0,v(d,h)},v=(h,d)=>{if(u===(u=h))return;let i=!1;if(I){const t=n.data===$;!!u===t&&(n=O(),L(n),S(!1),i=!0)}u?(f?k(f):d&&(f=m(()=>d(n))),l&&q(l,()=>{l=null})):(l?k(l):d&&(l=m(()=>d(n))),f&&q(f,()=>{f=null})),i&&S(!0)};X(()=>{c=!1,a(T),c||v(null,null)},g),I&&(n=C)}function Ca(e,a){return a}function Aa(e,a,r,n){for(var f=[],l=a.length,u=0;u<l;u++)fa(a[u].e,f,!0);var g=l>0&&f.length===0&&r!==null;if(g){var c=r.parentNode;sa(c),c.append(r),n.clear(),x(e,a[0].prev,a[l-1].next)}la(f,()=>{for(var T=0;T<l;T++){var v=a[T];g||(n.delete(v.k),x(e,v.prev,v.next)),ta(v.e,!g)}})}function Ra(e,a,r,n,f,l=null){var u=e,g={flags:a,items:new Map,first:null},c=(a&Q)!==0;if(c){var T=e;u=I?L(_a(T)):T.appendChild(na())}I&&Z();var v=null,h=!1;X(()=>{var d=r(),i=ia(d)?d:d==null?[]:J(d),t=i.length;if(h&&t===0)return;h=t===0;let _=!1;if(I){var y=u.data===$;y!==(t===0)&&(u=O(),L(u),S(!1),_=!0)}if(I){for(var p=null,E,A=0;A<t;A++){if(C.nodeType===8&&C.data===ca){u=C,_=!0,S(!1);break}var N=i[A],s=n(N,A);E=W(C,g,p,null,N,s,A,f,a),g.items.set(s,E),p=E}t>0&&L(O())}if(!I){var o=ua;Ia(i,g,u,f,a,(o.f&M)!==0,n)}l!==null&&(t===0?v?k(v):v=m(()=>l(u)):v!==null&&q(v,()=>{v=null})),_&&S(!0),r()}),I&&(u=C)}function Ia(e,a,r,n,f,l,u,g){var c=(f&oa)!==0,T=(f&(F|U))!==0,v=e.length,h=a.items,d=a.first,i=d,t,_=null,y,p=[],E=[],A,N,s,o;if(c)for(o=0;o<v;o+=1)A=e[o],N=u(A,o),s=h.get(N),s!==void 0&&(s.a?.measure(),(y??=new Set).add(s));for(o=0;o<v;o+=1){if(A=e[o],N=u(A,o),s=h.get(N),s===void 0){var j=i?i.e.nodes_start:r;_=W(j,a,_,_===null?a.first:_.next,A,N,o,n,f),h.set(N,_),p=[],E=[],i=_.next;continue}if(T&&Ta(s,A,o,f),s.e.f&M&&(k(s.e),c&&(s.a?.unfix(),(y??=new Set).delete(s))),s!==i){if(t!==void 0&&t.has(s)){if(p.length<E.length){var D=E[0],w;_=D.prev;var Y=p[0],H=p[p.length-1];for(w=0;w<p.length;w+=1)K(p[w],D,r);for(w=0;w<E.length;w+=1)t.delete(E[w]);x(a,Y.prev,H.next),x(a,_,Y),x(a,H,D),i=D,_=H,o-=1,p=[],E=[]}else t.delete(s),K(s,i,r),x(a,s.prev,s.next),x(a,s,_===null?a.first:_.next),x(a,_,s),_=s;continue}for(p=[],E=[];i!==null&&i.k!==N;)(l||!(i.e.f&M))&&(t??=new Set).add(i),E.push(i),i=i.next;if(i===null)continue;s=i}p.push(s),_=s,i=s.next}if(i!==null||t!==void 0){for(var R=t===void 0?[]:J(t);i!==null;)(l||!(i.e.f&M))&&R.push(i),i=i.next;var b=R.length;if(b>0){var aa=f&Q&&v===0?r:null;if(c){for(o=0;o<b;o+=1)R[o].a?.measure();for(o=0;o<b;o+=1)R[o].a?.fix()}Aa(a,R,aa,h)}}c&&Ea(()=>{if(y!==void 0)for(s of y)s.a?.apply()}),B.first=a.first&&a.first.e,B.last=_&&_.e}function Ta(e,a,r,n){n&F&&V(e.v,a),n&U?V(e.i,r):e.i=r}function W(e,a,r,n,f,l,u,g,c,T){var v=(c&F)!==0,h=(c&da)===0,d=v?h?va(f):G(f):f,i=c&U?G(u):u,t={i,v:d,k:l,a:null,e:null,prev:r,next:n};try{return t.e=m(()=>g(e,d,i),I),t.e.prev=r&&r.e,t.e.next=n&&n.e,r===null?a.first=t:(r.next=t,r.e.next=t.e),n!==null&&(n.prev=t,n.e.prev=t.e),t}finally{}}function K(e,a,r){for(var n=e.next?e.next.e.nodes_start:r,f=a?a.e.nodes_start:r,l=e.e.nodes_start;l!==n;){var u=ha(l);f.before(l),l=u}}function x(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function Sa(e,a,r,n){var f=e.__attributes??={};I&&(f[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||f[a]!==(f[a]=r)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[z]=r),r==null?e.removeAttribute(a):typeof r!="string"&&Na(e).includes(a)?e[a]=r:e.setAttribute(a,r))}var P=new Map;function Na(e){var a=P.get(e.nodeName);if(a)return a;P.set(e.nodeName,a=[]);for(var r,n=e,f=Element.prototype;f!==n;){r=ga(n);for(var l in r)r[l].set&&a.push(l);n=pa(n)}return a}function Da(e){if(!I&&e.loading==="lazy"){var a=e.src;e[z]=null,e.loading="eager",e.removeAttribute("src"),requestAnimationFrame(()=>{e[z]!=="eager"&&(e.loading="lazy"),e.src=a})}}export{Ca as a,Ra as e,Da as h,ya as i,Sa as s};
