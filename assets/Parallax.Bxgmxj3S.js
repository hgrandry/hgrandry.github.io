import{i as H}from"./lifecycle.Dt1m5ZJi.js";import{Z as W,$ as Z,p as j,z as M,A as D,t as G,a as I,g as o,c as J,d as k,m as P,B as K,r as N}from"./runtime.CJxWV0rf.js";import{a as Q,t as U}from"./template.BMaGmDQA.js";import{o as V,s as X}from"./index-client.BsdcetsV.js";import{b as $}from"./this.C6gCiUzC.js";import{a as ee,p as r,b as z}from"./props.B4RdlnXk.js";import{d as te,w as ae}from"./index.DiBLy0j7.js";/* empty css                       */import"./proxy.BMOTCA4l.js";import"./utils.CVykTFJJ.js";function ne(c,a,u,f,x){W&&Z();var s=a.$$slots?.[u],p=!1;s===!0&&(s=a.children,p=!0),s===void 0||s(c,p?()=>f:f)}const B=()=>window.innerWidth<=768,oe={background:-100,title:-50,contact:100,content:100},y=ae(typeof window<"u"?B():!1);typeof window<"u"&&window.addEventListener("resize",()=>{y.set(B())});const re=te(y,c=>c?{background:0,title:0,contact:0,content:0}:oe);var se=U("<div><!></div>");function he(c,a){j(a,!1);const u=ee(),f=()=>z(re,"$parallaxFactors",u),x=()=>z(y,"$mobile",u);let s=r(a,"layer",8),p=r(a,"class_name",8,""),E=r(a,"parallaxRatio",12,0),m=r(a,"onRatioChange",8,void 0),b=r(a,"shadowTarget",8,void 0),w=r(a,"shadowConfig",24,()=>({baseOffset:5,offsetRange:10,baseBlur:5,blurRange:10,opacity:.3})),L=r(a,"centerMode",8,"section"),T=r(a,"viewportOffset",8,0),n=P(),R=P();function q(t,e){if(e===0)return m()&&m()(0),{parallaxY:0,parallaxRatio:0};const i=typeof window<"u"?window.innerHeight:0,l=i/2;let h;switch(L()){case"element":h=t.top+t.height/2;break;case"viewport-relative":h=t.top+T();break;case"section":default:const C=o(n).closest("section");if(!C)return{parallaxY:0,parallaxRatio:0};const F=C.getBoundingClientRect();h=F.top+F.height/2;break}const Y=(l-h)/(i/2),A=e<0?-1:1,v=Math.abs(e),_=A*Math.min(Math.max(-Y*v,-v),v);return{parallaxY:_,parallaxRatio:_/e}}function O(t){if(!b())return;const e=document.querySelector(b());if(!e)return;const i=w().baseOffset+t*w().offsetRange,l=w().baseBlur+Math.abs(t)*w().blurRange;e.style.setProperty("--shadow-offset",`${i}px`),e.style.setProperty("--shadow-blur",`${l}px`)}function g(){if(!o(n))return;const t=o(n).getBoundingClientRect(),e=q(t,o(R));E(e.parallaxRatio),m()&&m()(e.parallaxRatio),b()&&O(e.parallaxRatio),o(n).style.setProperty("--parallax-offset",`${e.parallaxY}px`),o(n).style.setProperty("--parallax-ratio",e.parallaxRatio.toString())}V(()=>{requestAnimationFrame(g);let t=!1;const e=()=>{t||(requestAnimationFrame(()=>{g(),t=!1}),t=!0)};window.addEventListener("scroll",e,{passive:!0});let i;const l=()=>{clearTimeout(i),i=setTimeout(g,100)};return window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",l)}}),M(()=>(f(),K(s())),()=>{k(R,f()[s()])}),M(()=>(o(n),x()),()=>{o(n)&&x()!==void 0&&g()}),D(),H();var d=se(),S=J(d);ne(S,a,"default",{}),N(d),$(d,t=>k(n,t),()=>o(n)),G(()=>X(d,`parallax ${p()??""} svelte-qw1gfc`)),Q(c,d),I()}export{he as default};
