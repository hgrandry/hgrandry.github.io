import{i as S}from"./lifecycle.BLzbUANk.js";import{j as T,k as q,p as z,c as B,a as E,b as F,t as L,g as l,d as k,x as Y,y as A,r as H}from"./template.DEa2yU6v.js";import{s as O}from"./class.Byp-1cfd.js";import{b as j}from"./this.rFa3dWPX.js";import{p as c}from"./props.D10gT_fo.js";import{o as D}from"./index-client.DoAqL5ww.js";/* empty css                       */import"./proxy.B6fCSMzN.js";function G(m,t,p,u,h){T&&q();var n=t.$$slots?.[p],r=!1;n===!0&&(n=t.children,r=!0),n===void 0||n(m,r?()=>u:u)}var I=L("<div><!></div>");function Z(m,t){z(t,!1);let p=c(t,"factor",8),u=c(t,"class_name",8,""),h=c(t,"parallaxRatio",12,0),n=c(t,"onRatioChange",8,void 0),r=c(t,"shadowTarget",8,void 0),f=c(t,"shadowConfig",24,()=>({baseOffset:5,offsetRange:10,baseBlur:5,blurRange:10,opacity:.3})),o=A();function b(a,e){const i=typeof window<"u"?window.innerHeight:0,s=i/2,w=l(o).closest("section");if(!w)return{parallaxY:0,parallaxRatio:0};const v=w.getBoundingClientRect(),_=v.top+v.height/2,M=(s-_)/(i/2),P=e<0?-1:1,x=Math.abs(e),R=P*Math.min(Math.max(-M*x,-x),x);return{parallaxY:R,parallaxRatio:R/e}}function y(a){if(!r())return;const e=document.querySelector(r());if(!e)return;const i=f().baseOffset+a*f().offsetRange,s=f().baseBlur+Math.abs(a)*f().blurRange;e.style.boxShadow=`0 ${i}px ${s}px rgba(0, 0, 0, ${f().opacity})`}function g(){if(!l(o))return;const a=l(o).getBoundingClientRect(),e=b(a,p());h(e.parallaxRatio),n()&&n()(e.parallaxRatio),r()&&y(e.parallaxRatio),l(o).style.setProperty("--parallax-offset",`${e.parallaxY}px`),l(o).style.setProperty("--parallax-ratio",e.parallaxRatio.toString())}D(()=>{requestAnimationFrame(g);let a=!1;const e=()=>{a||(requestAnimationFrame(()=>{g(),a=!1}),a=!0)};window.addEventListener("scroll",e,{passive:!0});let i;const s=()=>{clearTimeout(i),i=setTimeout(g,100)};return window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",s)}}),S();var d=I(),C=k(d);G(C,t,"default",{}),H(d),j(d,a=>Y(o,a),()=>l(o)),B(()=>O(d,`parallax ${u()??""} svelte-qw1gfc`)),E(m,d),F()}export{Z as default};
