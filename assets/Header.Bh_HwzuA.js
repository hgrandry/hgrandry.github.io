import{s as J,a as K,b as N,p as E,i as Q}from"./props.DvN_OIS4.js";import{n as L,s as R,e as k,a as x,t as z,c as f,b as F,r,p as U,d as H,f as V,g,h as S,i as v,j as P,m as j}from"./render.CP2d90Gu.js";import{i as X,e as Z,a as ee,s as te}from"./attributes.B1dzio1m.js";import{s as W,t as Y}from"./class.CPfdjQ9l.js";import{o as se}from"./index-client.BBdntN4A.js";/* empty css                       */const p=[];function oe(e,h=L){let l=null;const c=new Set;function a(s){if(R(e,s)&&(e=s,l)){const o=!p.length;for(const t of c)t[1](),p.push(t,e);if(o){for(let t=0;t<p.length;t+=2)p[t][0](p[t+1]);p.length=0}}}function i(s){a(s(e))}function b(s,o=L){const t=[s,o];return c.add(t),c.size===1&&(l=h(a,i)||L),s(e),()=>{c.delete(t),c.size===0&&l&&(l(),l=null)}}return{set:a,update:i,subscribe:b}}const ae=()=>{if(typeof localStorage<"u"){const e=localStorage.getItem("theme");if(e)return e}return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},q=oe("light");typeof window<"u"&&(q.set(ae()),q.subscribe(e=>{localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}));var ne=z('<button class="theme-toggle svelte-829jcr" aria-label="Toggle theme"><!></button>');function le(e){const h=J(),l=()=>K(q,"$theme",h);function c(){N(q,l()==="light"?"dark":"light")}var a=ne(),i=f(a);{var b=o=>{var t=F("🌙");x(o,t)},s=o=>{var t=F("☀️");x(o,t)};X(i,o=>{l()==="light"?o(b):o(s,!1)})}r(a),k("click",a,c),x(e,a)}function ie(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}var re=z('<li class="svelte-h3lsx7"><button> </button></li>'),ce=z('<header id="header" class="svelte-h3lsx7"><nav class="container svelte-h3lsx7"><button class="logo svelte-h3lsx7"><img src="/favicon.png" alt="Logo" class="svelte-h3lsx7"> <span> </span></button> <div class="nav-right svelte-h3lsx7"><!> <button class="btn menu-button svelte-h3lsx7" aria-label="Toggle menu"><i></i></button> <ul class="svelte-h3lsx7"></ul></div></nav></header>');function be(e,h){U(h,!1);let l=E(h,"title",8,""),c=E(h,"navItems",24,()=>[]),a=E(h,"homeSection",8,"#about"),i=j(!1),b=j(!1),s=j(0);function o(){g(i,!v(i))}function t(u){if(u===a())window.scrollTo({top:0,behavior:"smooth"});else{const n=document.querySelector(u);if(n){const d=window.getComputedStyle(n),m=window.innerWidth<=768,M=parseInt(d.paddingTop),G=n.offsetTop-(m?M:0);window.scrollTo({top:G,behavior:"smooth"})}}g(i,!1)}function y(){const u=window.scrollY;g(b,u>20);const n=20,d=800;if(u<=n)g(s,0);else if(u>=d)g(s,1);else{const m=(u-n)/(d-n);g(s,ie(m))}}se(()=>(window.addEventListener("scroll",y,{passive:!0}),y(),()=>{window.removeEventListener("scroll",y)})),Q();var w=ce(),O=f(w),_=f(O),$=S(f(_),2),B=f($,!0);r($),r(_);var A=S(_,2),C=f(A);le(C);var T=S(C,2),D=f(T);r(T);var I=S(T,2);Z(I,5,c,ee,(u,n)=>{var d=re(),m=f(d),M=f(m,!0);r(m),r(d),H(()=>{W(m,`${(v(n).isPrimary?"btn btn-primary":"")??""} svelte-h3lsx7`),P(M,v(n).label)}),k("click",m,()=>t(v(n).href)),x(u,d)}),r(I),r(A),r(O),r(w),H(()=>{te(w,"style",`--squish-factor: ${v(s)??""}`),Y(w,"scrolled",v(b)),P(B,l()),W(D,`${`fa-solid ${v(i)?"fa-xmark":"fa-bars"}`??""} svelte-h3lsx7`),Y(I,"active",v(i))}),k("click",_,()=>t(a())),k("click",T,o),x(e,w),V()}export{be as default};
