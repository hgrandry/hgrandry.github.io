import{i as T}from"./lifecycle.BLzbUANk.js";import{j as q,k as z,p as B,c as E,a as F,b as L,t as S,g as l,d as k,x as Y,y as A,r as H}from"./template.DEa2yU6v.js";import{s as O}from"./class.Byp-1cfd.js";import{b as j}from"./this.rFa3dWPX.js";import{p as f}from"./props.D10gT_fo.js";import{o as D}from"./index-client.DoAqL5ww.js";/* empty css                       */import"./proxy.B6fCSMzN.js";function G(m,t,p,d,x){q&&z();var n=t.$$slots?.[p],s=!1;n===!0&&(n=t.children,s=!0),n===void 0||n(m,s?()=>d:d)}var I=S("<div><!></div>");function Z(m,t){B(t,!1);let p=f(t,"factor",8),d=f(t,"class_name",8,""),x=f(t,"parallaxRatio",12,0),n=f(t,"onRatioChange",8,void 0),s=f(t,"shadowTarget",8,void 0),u=f(t,"shadowConfig",24,()=>({baseOffset:5,offsetRange:10,baseBlur:5,blurRange:10,opacity:.3})),o=A();function b(a,e){const r=typeof window<"u"?window.innerHeight:0,i=r/2,w=l(o).closest("section");if(!w)return{parallaxY:0,parallaxRatio:0};const v=w.getBoundingClientRect(),_=v.top+v.height/2,P=(i-_)/(r/2),M=e<0?-1:1,g=Math.abs(e),R=M*Math.min(Math.max(-P*g,-g),g);return{parallaxY:R,parallaxRatio:R/e}}function y(a){if(!s())return;const e=document.querySelector(s());if(!e)return;const r=u().baseOffset+a*u().offsetRange,i=u().baseBlur+Math.abs(a)*u().blurRange;e.style.setProperty("--shadow-offset",`${r}px`),e.style.setProperty("--shadow-blur",`${i}px`)}function h(){if(!l(o))return;const a=l(o).getBoundingClientRect(),e=b(a,p());x(e.parallaxRatio),n()&&n()(e.parallaxRatio),s()&&y(e.parallaxRatio),l(o).style.setProperty("--parallax-offset",`${e.parallaxY}px`),l(o).style.setProperty("--parallax-ratio",e.parallaxRatio.toString())}D(()=>{requestAnimationFrame(h);let a=!1;const e=()=>{a||(requestAnimationFrame(()=>{h(),a=!1}),a=!0)};window.addEventListener("scroll",e,{passive:!0});let r;const i=()=>{clearTimeout(r),r=setTimeout(h,100)};return window.addEventListener("resize",i),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",i)}}),T();var c=I(),C=k(c);G(C,t,"default",{}),H(c),j(c,a=>Y(o,a),()=>l(o)),E(()=>O(c,`parallax ${d()??""} svelte-qw1gfc`)),F(m,c),L()}export{Z as default};