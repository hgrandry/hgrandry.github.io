import{i as j}from"./lifecycle.DIFoE0P3.js";import{p as K,B as ee,C as te,t as f,g as s,f as O,a as N,m as P,E as Q,D as se,c as a,r as e,s as u,F as ae,n as re,G as ie}from"./runtime.D0cKiUdn.js";import{e as J,s as y}from"./render.DflygPmv.js";import{i as U,e as W,a as B,s as V}from"./attributes.BjNm56FB.js";import{a as m,t as x}from"./template.xghE3FVS.js";import{c as ve,t as S,o as ne}from"./index-client.DXXyS-C5.js";import{b as Y}from"./this.BOE1u79u.js";import{p as X,a as oe,b as le}from"./props.BB-HR_cq.js";/* empty css                       */import de from"./Parallax.kR9OfXnw.js";import{e as pe}from"./work.CnoRmGAu.js";import"./proxy.DjauZPiP.js";import"./utils.DwVOqfoQ.js";import"./slot.DciUBXO5.js";import"./index.TyNKgPmN.js";var ce=x('<span class="type svelte-1vuvk54"> </span>'),ue=x('<p class="location svelte-1vuvk54"> </p>'),fe=x('<li class="svelte-1vuvk54"> </li>'),me=x('<span class="skill svelte-1vuvk54"> </span>'),xe=x('<div class="experience svelte-1vuvk54" tabindex="0" role="button"><div class="header svelte-1vuvk54"><div class="title-section svelte-1vuvk54"><h3 class="svelte-1vuvk54"> </h3> <div class="company-info svelte-1vuvk54"><p class="company svelte-1vuvk54"> </p> <!></div></div> <div class="meta svelte-1vuvk54"><p class="period svelte-1vuvk54"> </p> <!></div></div> <div class="content svelte-1vuvk54"><div class="inner-content svelte-1vuvk54"><div class="responsibilities svelte-1vuvk54"><ul class="svelte-1vuvk54"></ul></div></div></div> <div class="skills svelte-1vuvk54"></div></div>');function _e(H,$){K($,!1);let o=X($,"experience",8),F=X($,"isExpanded",8,!1);const M=ve();let v=P();function I(){M("expand");const t=performance.now(),r=500;function i(T){const Z=T-t;M("heightChange"),Z<r&&requestAnimationFrame(i)}requestAnimationFrame(i)}ee(()=>(s(v),se(F())),()=>{s(v)&&setTimeout(()=>{Q(v,s(v).style.maxHeight=F()?`${s(v).scrollHeight}px`:"0")},0)}),te(),j();var n=xe(),p=a(n),w=a(p),b=a(w),R=a(b,!0);e(b);var D=u(b,2),_=a(D),z=a(_,!0);e(_);var l=u(_,2);{var A=t=>{var r=ce(),i=a(r,!0);e(r),f(()=>y(i,o().type)),m(t,r)};U(l,t=>{o().type&&t(A)})}e(D),e(w);var k=u(w,2),c=a(k),q=a(c);e(c);var G=u(c,2);{var L=t=>{var r=ue(),i=a(r,!0);e(r),f(()=>y(i,o().location)),m(t,r)};U(G,t=>{o().location&&t(L)})}e(k),e(p);var g=u(p,2),C=a(g),h=a(C),d=a(h);W(d,5,()=>o().responsibilities,B,(t,r)=>{var i=fe(),T=a(i,!0);e(i),f(()=>y(T,s(r))),m(t,i)}),e(d),e(h),e(C),e(g),Y(g,t=>O(v,t),()=>s(v));var E=u(g,2);W(E,5,()=>o().skills,B,(t,r)=>{var i=me(),T=a(i,!0);e(i),f(()=>y(T,s(r))),m(t,i)}),e(E),e(n),f(()=>{S(n,"expanded",F()),y(R,o().title),y(z,o().company),y(q,`${o().period.start??""} - ${o().period.end??""}`)}),J("click",n,I),J("keydown",n,t=>t.key==="Enter"&&I()),m(H,n),N()}var ke=x('<div class="marker svelte-1svufyx"><span class="date svelte-1svufyx"> </span> <div class="dot svelte-1svufyx"></div></div>'),ge=x('<div class="experience-wrapper svelte-1svufyx"><!></div>'),he=x('<div class="timeline svelte-1svufyx"><div class="line svelte-1svufyx"></div> <!></div> <div class="experience-list svelte-1svufyx"></div>',1),ye=x('<div class="experiences svelte-1svufyx"><div class="links svelte-1svufyx"><a href="https://drive.google.com/file/d/1ICIL-f8s4XvXaCnHamv-GuiVcvcJEUO-/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="svelte-1svufyx">Resume</a> <span class="separator svelte-1svufyx">|</span> <a href="https://www.linkedin.com/in/hgrandry" target="_blank" rel="noopener noreferrer" class="svelte-1svufyx">LinkedIn</a></div> <!></div>');function Be(H,$){K($,!1);const o=oe(),F=()=>le(pe,"$expandedWorkId",o);let M=X($,"experiences",8),v=P([]),I=P(null),n=P([]),p=!1;function w(){const l=p;p=window.innerWidth<=768,l&&!p&&b()}function b(){p||requestAnimationFrame(()=>{O(n,s(v).map(l=>l.getBoundingClientRect().top+45-s(v)[0].getBoundingClientRect().top))})}function R(){if(p)return;const l=performance.now(),A=500;function k(c){const q=c-l;b(),q<A&&requestAnimationFrame(k)}requestAnimationFrame(k)}function D(l){O(I,s(I)===l?null:l),R()}ne(()=>(w(),window.addEventListener("resize",w),b(),()=>{window.removeEventListener("resize",w)})),j();var _=ye(),z=u(a(_),2);de(z,{layer:"content",centerMode:"viewport-relative",viewportOffset:300,class_name:"experience-content",children:(l,A)=>{var k=he(),c=ae(k),q=a(c),G=u(q,2);W(G,1,M,B,(g,C,h)=>{var d=ke(),E=a(d),t=a(E,!0);f(()=>y(t,s(C).period.start.split("-")[0])),e(E),re(2),e(d),f(()=>V(d,"style",`top: ${s(n)[h]??""}px`)),m(g,d)}),e(c);var L=u(c,2);W(L,5,M,B,(g,C,h)=>{var d=ge(),E=a(d),t=ie(()=>s(I)===h);_e(E,{get experience(){return s(C)},get isExpanded(){return s(t)},$$events:{expand:()=>D(h)}}),e(d),Y(d,(r,i)=>Q(v,s(v)[i]=r),r=>s(v)?.[r],()=>[h]),m(g,d)}),e(L),f(()=>V(q,"style",`top: ${s(n)[0]??""}px; height: ${s(n)[s(n).length-1]-s(n)[0]}px`)),m(l,k)},$$slots:{default:!0}}),e(_),f(()=>S(_,"fade-out",F()!==null)),m(H,_),N()}export{Be as default};
