import{L as $,e as J,M as G,N as H,f as K,h as P,i as j,w as ee,C as V,O as m,P as q,Q as Y,j as N,R as re,T as ae,V as ne,W as ie,m as D,k as fe,H as se,l as B,n as O,o as M,X as le,Y as te,Z as ue,A as X,_ as oe,$ as ve,a0 as _e,a1 as de,a2 as k}from"./template.BNnZoSOd.js";import{i as ce,c as Q,b as he,d as pe}from"./equality.CHFDe4kT.js";function we(r,e){return e}function ge(r,e,a,f){for(var l=[],u=e.length,o=0;o<u;o++)re(e[o].e,l,!0);var g=u>0&&l.length===0&&a!==null;if(g){var d=a.parentNode;ae(d),d.append(a),f.clear(),x(r,e[0].prev,e[u-1].next)}ne(l,()=>{for(var E=0;E<u;E++){var _=e[E];g||(f.delete(_.k),x(r,_.prev,_.next)),ie(_.e,!g)}})}function xe(r,e,a,f,l,u=null){var o=r,g={flags:e,items:new Map,first:null},d=(e&G)!==0;if(d){var E=r;o=N?D(oe(E)):E.appendChild($())}N&&fe();var _=null,T=!1;J(()=>{var I=a(),n=ce(I)?I:I==null?[]:Q(I),s=n.length;if(T&&s===0)return;T=s===0;let v=!1;if(N){var y=o.data===se;y!==(s===0)&&(o=B(),D(o),O(!1),v=!0)}if(N){for(var c=null,h,p=0;p<s;p++){if(M.nodeType===8&&M.data===ve){o=M,v=!0,O(!1);break}var A=n[p],i=f(A,p);h=U(M,g,c,null,A,i,p,l,e),g.items.set(i,h),c=h}s>0&&D(B())}if(!N){var t=le;Ae(n,g,o,l,e,(t.f&H)!==0,f)}u!==null&&(s===0?_?K(_):_=P(()=>u(o)):_!==null&&j(_,()=>{_=null})),v&&O(!0),a()}),N&&(o=M)}function Ae(r,e,a,f,l,u,o,g){var d=(l&te)!==0,E=(l&(m|Y))!==0,_=r.length,T=e.items,I=e.first,n=I,s,v=null,y,c=[],h=[],p,A,i,t;if(d)for(t=0;t<_;t+=1)p=r[t],A=o(p,t),i=T.get(A),i!==void 0&&(i.a?.measure(),(y??=new Set).add(i));for(t=0;t<_;t+=1){if(p=r[t],A=o(p,t),i=T.get(A),i===void 0){var W=n?n.e.nodes_start:a;v=U(W,e,v,v===null?e.first:v.next,p,A,t,f,l),T.set(A,v),c=[],h=[],n=v.next;continue}if(E&&Ee(i,p,t,l),i.e.f&H&&(K(i.e),d&&(i.a?.unfix(),(y??=new Set).delete(i))),i!==n){if(s!==void 0&&s.has(i)){if(c.length<h.length){var R=h[0],w;v=R.prev;var z=c[0],L=c[c.length-1];for(w=0;w<c.length;w+=1)b(c[w],R,a);for(w=0;w<h.length;w+=1)s.delete(h[w]);x(e,z.prev,L.next),x(e,v,z),x(e,L,R),n=R,v=L,t-=1,c=[],h=[]}else s.delete(i),b(i,n,a),x(e,i.prev,i.next),x(e,i,v===null?e.first:v.next),x(e,v,i),v=i;continue}for(c=[],h=[];n!==null&&n.k!==A;)(u||!(n.e.f&H))&&(s??=new Set).add(n),h.push(n),n=n.next;if(n===null)continue;i=n}c.push(i),v=i,n=i.next}if(n!==null||s!==void 0){for(var C=s===void 0?[]:Q(s);n!==null;)(u||!(n.e.f&H))&&C.push(n),n=n.next;var S=C.length;if(S>0){var Z=l&G&&_===0?a:null;if(d){for(t=0;t<S;t+=1)C[t].a?.measure();for(t=0;t<S;t+=1)C[t].a?.fix()}ge(e,C,Z,T)}}d&&ee(()=>{if(y!==void 0)for(i of y)i.a?.apply()}),V.first=e.first&&e.first.e,V.last=v&&v.e}function Ee(r,e,a,f){f&m&&q(r.v,e),f&Y?q(r.i,a):r.i=a}function U(r,e,a,f,l,u,o,g,d,E){var _=(d&m)!==0,T=(d&_e)===0,I=_?T?ue(l):X(l):l,n=d&Y?X(o):o,s={i:n,v:I,k:u,a:null,e:null,prev:a,next:f};try{return s.e=P(()=>g(r,I,n),N),s.e.prev=a&&a.e,s.e.next=f&&f.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),f!==null&&(f.prev=s,f.e.prev=s.e),s}finally{}}function b(r,e,a){for(var f=r.next?r.next.e.nodes_start:a,l=e?e.e.nodes_start:a,u=r.e.nodes_start;u!==f;){var o=de(u);l.before(u),u=o}}function x(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function ye(r,e,a,f){var l=r.__attributes??={};N&&(l[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||l[e]!==(l[e]=a)&&(e==="style"&&"__styles"in r&&(r.__styles={}),e==="loading"&&(r[k]=a),a==null?r.removeAttribute(e):typeof a!="string"&&Te(r).includes(e)?r[e]=a:r.setAttribute(e,a))}var F=new Map;function Te(r){var e=F.get(r.nodeName);if(e)return e;F.set(r.nodeName,e=[]);for(var a,f=r,l=Element.prototype;l!==f;){a=pe(f);for(var u in a)a[u].set&&e.push(u);f=he(f)}return e}function Ce(r){if(!N&&r.loading==="lazy"){var e=r.src;r[k]=null,r.loading="eager",r.removeAttribute("src"),requestAnimationFrame(()=>{r[k]!=="eager"&&(r.loading="lazy"),r.src=e})}}export{xe as e,Ce as h,we as i,ye as s};