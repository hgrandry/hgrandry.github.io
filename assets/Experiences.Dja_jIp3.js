import{i as Q}from"./utils.vNBKzEkj.js";import{p as S,O as W,P as Z,c as $,a as f,g as a,A as U,b as Y,t as _,B as D,R as z,Q as ee,d as t,r as e,s as m,T as te,C as se,V as ae}from"./template.DbfV741Q.js";import{e as G,s as x}from"./render.C3u750a8.js";import{e as M,i as O,s as re}from"./attributes.BvTvdrOJ.js";import{b as K}from"./this.DM_fwHbK.js";import{p as F}from"./props.Cw2u0vRJ.js";import{c as ie,t as ve,o as le}from"./index-client.CtBxzlR2.js";import{i as J}from"./if.C2e7CUVY.js";/* empty css                       */import ne from"./Parallax.D-JJ_0fQ.js";import"./proxy.ERrKhqz9.js";import"./index.DJ3hts1W.js";var oe=_('<span class="type svelte-1vy0mjl"> </span>'),ce=_('<p class="location svelte-1vy0mjl"> </p>'),de=_('<li class="svelte-1vy0mjl"> </li>'),pe=_('<span class="skill svelte-1vy0mjl"> </span>'),me=_('<div class="experience svelte-1vy0mjl" tabindex="0" role="button"><div class="header svelte-1vy0mjl"><div class="title-section svelte-1vy0mjl"><h3 class="svelte-1vy0mjl"> </h3> <div class="company-info svelte-1vy0mjl"><p class="company svelte-1vy0mjl"> </p> <!></div></div> <div class="meta svelte-1vy0mjl"><p class="period svelte-1vy0mjl"> </p> <!></div></div> <div class="content svelte-1vy0mjl"><div class="inner-content svelte-1vy0mjl"><div class="responsibilities svelte-1vy0mjl"><ul class="svelte-1vy0mjl"></ul></div></div></div> <div class="skills svelte-1vy0mjl"></div></div>');function fe(V,h){S(h,!1);let i=F(h,"experience",8),d=F(h,"isExpanded",8,!1);const E=ie();let p=D();function w(){E("expand");const s=performance.now(),l=500;function r(q){const N=q-s;E("heightChange"),N<l&&requestAnimationFrame(r)}requestAnimationFrame(r)}W(()=>(a(p),ee(d())),()=>{a(p)&&setTimeout(()=>{z(p,a(p).style.maxHeight=d()?`${a(p).scrollHeight}px`:"0")},0)}),Z(),Q();var o=me(),P=t(o),n=t(P),u=t(n),j=t(u,!0);e(u);var c=m(u,2),y=t(c),A=t(y,!0);e(y);var C=m(y,2);{var T=s=>{var l=oe(),r=t(l,!0);e(l),$(()=>x(r,i().type)),f(s,l)};J(C,s=>{i().type&&s(T)})}e(c),e(n);var g=m(n,2),v=t(g),k=t(v);e(v);var H=m(v,2);{var I=s=>{var l=ce(),r=t(l,!0);e(l),$(()=>x(r,i().location)),f(s,l)};J(H,s=>{i().location&&s(I)})}e(g),e(P);var b=m(P,2),L=t(b),R=t(L),X=t(R);M(X,5,()=>i().responsibilities,O,(s,l)=>{var r=de(),q=t(r,!0);e(r),$(()=>x(q,a(l))),f(s,r)}),e(X),e(R),e(L),e(b),K(b,s=>U(p,s),()=>a(p));var B=m(b,2);M(B,5,()=>i().skills,O,(s,l)=>{var r=pe(),q=t(r,!0);e(r),$(()=>x(q,a(l))),f(s,r)}),e(B),e(o),$(()=>{ve(o,"expanded",d()),x(j,i().title),x(A,i().company),x(k,`${i().period.start??""} - ${i().period.end??""}`)}),G("click",o,w),G("keydown",o,s=>s.key==="Enter"&&w()),f(V,o),Y()}var _e=_('<div class="marker svelte-1vrgocf"><span class="date svelte-1vrgocf"> </span> <div class="dot svelte-1vrgocf"></div></div>'),ue=_('<div class="experience-wrapper svelte-1vrgocf"><!></div>'),ge=_('<div class="timeline svelte-1vrgocf"><div class="line svelte-1vrgocf"></div> <!></div> <div class="experience-list svelte-1vrgocf"></div>',1),xe=_('<div class="experiences svelte-1vrgocf"><div class="links svelte-1vrgocf"><a href="https://drive.google.com/file/d/1ICIL-f8s4XvXaCnHamv-GuiVcvcJEUO-/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="svelte-1vrgocf">Resume</a> <span class="separator svelte-1vrgocf">|</span> <a href="https://www.linkedin.com/in/hgrandry" target="_blank" rel="noopener noreferrer" class="svelte-1vrgocf">LinkedIn</a></div> <!></div>');function Ie(V,h){S(h,!1);let i=F(h,"experiences",8),d=D([]),E=D(null);function p(n){U(E,a(E)===n?null:n)}function w(){a(d).forEach((n,u)=>{const j=n.offsetTop;n.offsetHeight;const c=j+45;if(document.documentElement.style.setProperty(`--marker-${u}-top`,`${c}px`),u===0&&document.documentElement.style.setProperty("--line-top",`${c}px`),u===a(d).length-1){const y=c-parseInt(getComputedStyle(document.documentElement).getPropertyValue("--line-top"));document.documentElement.style.setProperty("--line-height",`${y}px`)}})}le(()=>{w()}),Q();var o=xe(),P=m(t(o),2);ne(P,{layer:"content",centerMode:"viewport-relative",viewportOffset:300,class_name:"experience-content",children:(n,u)=>{var j=ge(),c=te(j),y=m(t(c),2);M(y,1,i,O,(C,T,g)=>{var v=_e();re(v,"style",`top: var(--marker-${g}-top)`);var k=t(v),H=t(k,!0);$(()=>x(H,a(T).period.start.split("-")[0])),e(k),se(2),e(v),f(C,v)}),e(c);var A=m(c,2);M(A,5,i,O,(C,T,g)=>{var v=ue(),k=t(v),H=ae(()=>a(E)===g);fe(k,{get experience(){return a(T)},get isExpanded(){return a(H)},$$events:{expand:()=>p(g),heightChange:w}}),e(v),K(v,(I,b)=>z(d,a(d)[b]=I),I=>a(d)?.[I],()=>[g]),f(C,v)}),e(A),f(n,j)},$$slots:{default:!0}}),e(o),f(V,o),Y()}export{Ie as default};