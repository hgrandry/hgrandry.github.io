import{W as P,e as Q,N as j,X as b,Y as R,f as F,h as U,i as ee,z as ae,K as q,Z as z,_ as B,$ as Y,j as N,a0 as re,a1 as ne,a2 as ie,a3 as se,a4 as W,m as L,k as fe,H as le,l as G,n as k,o as M,a5 as te,a6 as ue,a7 as oe,G as K,a8 as ve,a9 as _e,aa as de,ab as ce,ac as O,M as he,ad as pe}from"./template.DbfV741Q.js";function Ne(a,e){return e}function ge(a,e,r,s){for(var l=[],u=e.length,o=0;o<u;o++)re(e[o].e,l,!0);var g=u>0&&l.length===0&&r!==null;if(g){var d=r.parentNode;ne(d),d.append(r),s.clear(),x(a,e[0].prev,e[u-1].next)}ie(l,()=>{for(var E=0;E<u;E++){var _=e[E];g||(s.delete(_.k),x(a,_.prev,_.next)),se(_.e,!g)}})}function we(a,e,r,s,l,u=null){var o=a,g={flags:e,items:new Map,first:null},d=(e&W)!==0;if(d){var E=a;o=N?L(ve(E)):E.appendChild(P())}N&&fe();var _=null,T=!1;Q(()=>{var I=r(),n=j(I)?I:I==null?[]:b(I),f=n.length;if(T&&f===0)return;T=f===0;let v=!1;if(N){var y=o.data===le;y!==(f===0)&&(o=G(),L(o),k(!1),v=!0)}if(N){for(var c=null,h,p=0;p<f;p++){if(M.nodeType===8&&M.data===_e){o=M,v=!0,k(!1);break}var A=n[p],i=s(A,p);h=Z(M,g,c,null,A,i,p,l,e),g.items.set(i,h),c=h}f>0&&L(G())}if(!N){var t=te;Ae(n,g,o,l,e,(t.f&R)!==0,s)}u!==null&&(f===0?_?F(_):_=U(()=>u(o)):_!==null&&ee(_,()=>{_=null})),v&&k(!0),r()}),N&&(o=M)}function Ae(a,e,r,s,l,u,o,g){var d=(l&ue)!==0,E=(l&(z|Y))!==0,_=a.length,T=e.items,I=e.first,n=I,f,v=null,y,c=[],h=[],p,A,i,t;if(d)for(t=0;t<_;t+=1)p=a[t],A=o(p,t),i=T.get(A),i!==void 0&&(i.a?.measure(),(y??=new Set).add(i));for(t=0;t<_;t+=1){if(p=a[t],A=o(p,t),i=T.get(A),i===void 0){var $=n?n.e.nodes_start:r;v=Z($,e,v,v===null?e.first:v.next,p,A,t,s,l),T.set(A,v),c=[],h=[],n=v.next;continue}if(E&&Ee(i,p,t,l),i.e.f&R&&(F(i.e),d&&(i.a?.unfix(),(y??=new Set).delete(i))),i!==n){if(f!==void 0&&f.has(i)){if(c.length<h.length){var H=h[0],w;v=H.prev;var m=c[0],S=c[c.length-1];for(w=0;w<c.length;w+=1)V(c[w],H,r);for(w=0;w<h.length;w+=1)f.delete(h[w]);x(e,m.prev,S.next),x(e,v,m),x(e,S,H),n=H,v=S,t-=1,c=[],h=[]}else f.delete(i),V(i,n,r),x(e,i.prev,i.next),x(e,i,v===null?e.first:v.next),x(e,v,i),v=i;continue}for(c=[],h=[];n!==null&&n.k!==A;)(u||!(n.e.f&R))&&(f??=new Set).add(n),h.push(n),n=n.next;if(n===null)continue;i=n}c.push(i),v=i,n=i.next}if(n!==null||f!==void 0){for(var C=f===void 0?[]:b(f);n!==null;)(u||!(n.e.f&R))&&C.push(n),n=n.next;var D=C.length;if(D>0){var J=l&W&&_===0?r:null;if(d){for(t=0;t<D;t+=1)C[t].a?.measure();for(t=0;t<D;t+=1)C[t].a?.fix()}ge(e,C,J,T)}}d&&ae(()=>{if(y!==void 0)for(i of y)i.a?.apply()}),q.first=e.first&&e.first.e,q.last=v&&v.e}function Ee(a,e,r,s){s&z&&B(a.v,e),s&Y?B(a.i,r):a.i=r}function Z(a,e,r,s,l,u,o,g,d,E){var _=(d&z)!==0,T=(d&de)===0,I=_?T?oe(l):K(l):l,n=d&Y?K(o):o,f={i:n,v:I,k:u,a:null,e:null,prev:r,next:s};try{return f.e=U(()=>g(a,I,n),N),f.e.prev=r&&r.e,f.e.next=s&&s.e,r===null?e.first=f:(r.next=f,r.e.next=f.e),s!==null&&(s.prev=f,s.e.prev=f.e),f}finally{}}function V(a,e,r){for(var s=a.next?a.next.e.nodes_start:r,l=e?e.e.nodes_start:r,u=a.e.nodes_start;u!==s;){var o=ce(u);l.before(u),u=o}}function x(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function xe(a,e,r,s){var l=a.__attributes??={};N&&(l[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||l[e]!==(l[e]=r)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[O]=r),r==null?a.removeAttribute(e):typeof r!="string"&&Te(a).includes(e)?a[e]=r:a.setAttribute(e,r))}var X=new Map;function Te(a){var e=X.get(a.nodeName);if(e)return e;X.set(a.nodeName,e=[]);for(var r,s=a,l=Element.prototype;l!==s;){r=pe(s);for(var u in r)r[u].set&&e.push(u);s=he(s)}return e}function ye(a){if(!N&&a.loading==="lazy"){var e=a.src;a[O]=null,a.loading="eager",a.removeAttribute("src"),requestAnimationFrame(()=>{a[O]!=="eager"&&(a.loading="lazy"),a.src=e})}}export{we as e,ye as h,Ne as i,xe as s};