import{i as Q}from"./lifecycle.CnyiU18L.js";import{p as S,N as W,O as Z,c as w,a as m,g as s,x as U,b as Y,t as g,y as L,Q as j,P as ee,d as t,r as e,s as f,R as te,z as ae,T as se}from"./template.DOunm_XP.js";import{e as J,s as _}from"./render.BdAcdsok.js";import{e as O,i as A,s as re}from"./attributes.BLRzfbSQ.js";import{b as B}from"./this.DUwLyeKX.js";import{p as R}from"./props.CnNi-LlA.js";import{c as ie,t as ne,o as oe}from"./index-client.CTDrX-b-.js";import{i as N}from"./if.CLS8_6nQ.js";/* empty css                       */import ve from"./Parallax.WxvZGW1P.js";import{p as le}from"./parallax.Ks8Qc2SS.js";import"./proxy.C5zBtQhi.js";var ce=g('<span class="type svelte-k4yhxg"> </span>'),de=g('<p class="location svelte-k4yhxg"> </p>'),pe=g('<li class="svelte-k4yhxg"> </li>'),fe=g('<span class="skill svelte-k4yhxg"> </span>'),me=g('<div class="experience svelte-k4yhxg" tabindex="0" role="button"><div class="header svelte-k4yhxg"><div class="title-section svelte-k4yhxg"><h3 class="svelte-k4yhxg"> </h3> <div class="company-info svelte-k4yhxg"><p class="company svelte-k4yhxg"> </p> <!></div></div> <div class="meta svelte-k4yhxg"><p class="period svelte-k4yhxg"> </p> <!></div></div> <div class="content svelte-k4yhxg"><div class="inner-content svelte-k4yhxg"><div class="responsibilities svelte-k4yhxg"><ul class="svelte-k4yhxg"></ul></div></div></div> <div class="skills svelte-k4yhxg"></div></div>');function ge(D,y){S(y,!1);let i=R(y,"experience",8),d=R(y,"isExpanded",8,!1);const k=ie();let p=L();function P(){k("expand");const a=performance.now(),o=500;function r(F){const K=F-a;k("heightChange"),K<o&&requestAnimationFrame(r)}requestAnimationFrame(r)}W(()=>(s(p),ee(d())),()=>{s(p)&&setTimeout(()=>{j(p,s(p).style.maxHeight=d()?`${s(p).scrollHeight}px`:"0")},0)}),Z(),Q();var l=me(),T=t(l),v=t(T),x=t(v),E=t(x,!0);e(x);var c=f(x,2),h=t(c),M=t(h,!0);e(h);var C=f(h,2);{var H=a=>{var o=ce(),r=t(o,!0);e(o),w(()=>_(r,i().type)),m(a,o)};N(C,a=>{i().type&&a(H)})}e(c),e(v);var u=f(v,2),n=t(u),b=t(n);e(n);var I=f(n,2);{var q=a=>{var o=de(),r=t(o,!0);e(o),w(()=>_(r,i().location)),m(a,o)};N(I,a=>{i().location&&a(q)})}e(u),e(T);var $=f(T,2),V=t($),X=t(V),z=t(X);O(z,5,()=>i().responsibilities,A,(a,o)=>{var r=pe(),F=t(r,!0);e(r),w(()=>_(F,s(o))),m(a,r)}),e(z),e(X),e(V),e($),B($,a=>U(p,a),()=>s(p));var G=f($,2);O(G,5,()=>i().skills,A,(a,o)=>{var r=fe(),F=t(r,!0);e(r),w(()=>_(F,s(o))),m(a,r)}),e(G),e(l),w(()=>{ne(l,"expanded",d()),_(E,i().title),_(M,i().company),_(b,`${i().period.start??""} - ${i().period.end??""}`)}),J("click",l,P),J("keydown",l,a=>a.key==="Enter"&&P()),m(D,l),Y()}var xe=g('<div class="marker svelte-1vrgocf"><span class="date svelte-1vrgocf"> </span> <div class="dot svelte-1vrgocf"></div></div>'),ue=g('<div class="experience-wrapper svelte-1vrgocf"><!></div>'),_e=g('<div class="timeline svelte-1vrgocf"><div class="line svelte-1vrgocf"></div> <!></div> <div class="experience-list svelte-1vrgocf"></div>',1),he=g('<div class="experiences svelte-1vrgocf"><div class="links svelte-1vrgocf"><a href="https://drive.google.com/file/d/1ICIL-f8s4XvXaCnHamv-GuiVcvcJEUO-/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="svelte-1vrgocf">Resume</a> <span class="separator svelte-1vrgocf">|</span> <a href="https://www.linkedin.com/in/hgrandry" target="_blank" rel="noopener noreferrer" class="svelte-1vrgocf">LinkedIn</a></div> <!></div>');function Fe(D,y){S(y,!1);let i=R(y,"experiences",8),d=L([]),k=L(null);function p(v){U(k,s(k)===v?null:v)}function P(){s(d).forEach((v,x)=>{const E=v.offsetTop;v.offsetHeight;const c=E+45;if(document.documentElement.style.setProperty(`--marker-${x}-top`,`${c}px`),x===0&&document.documentElement.style.setProperty("--line-top",`${c}px`),x===s(d).length-1){const h=c-parseInt(getComputedStyle(document.documentElement).getPropertyValue("--line-top"));document.documentElement.style.setProperty("--line-height",`${h}px`)}})}oe(()=>{P()}),Q();var l=he(),T=f(t(l),2);ve(T,{get factor(){return le.content},centerMode:"viewport-relative",viewportOffset:300,class_name:"experience-content",children:(v,x)=>{var E=_e(),c=te(E),h=f(t(c),2);O(h,1,i,A,(C,H,u)=>{var n=xe();re(n,"style",`top: var(--marker-${u}-top)`);var b=t(n),I=t(b,!0);w(()=>_(I,s(H).period.start.split("-")[0])),e(b),ae(2),e(n),m(C,n)}),e(c);var M=f(c,2);O(M,5,i,A,(C,H,u)=>{var n=ue(),b=t(n),I=se(()=>s(k)===u);ge(b,{get experience(){return s(H)},get isExpanded(){return s(I)},$$events:{expand:()=>p(u),heightChange:P}}),e(n),B(n,(q,$)=>j(d,s(d)[$]=q),q=>s(d)?.[q],()=>[u]),m(C,n)}),e(M),m(v,E)},$$slots:{default:!0}}),e(l),m(D,l),Y()}export{Fe as default};
