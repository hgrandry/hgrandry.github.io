import{i as q}from"./lifecycle.Tab6NWVN.js";import{j as z,k as B,p as E,c as F,a as L,b as O,t as S,g as f,d as Y,x as A,y as H,r as j}from"./template.CbwEp4oG.js";import{o as D,s as G}from"./index-client.OJY0eALj.js";import{b as I}from"./this.aWSVw7wu.js";import{p as n}from"./props.C5v_E_sD.js";/* empty css                       */import"./proxy.Cl3KYcjd.js";function J(p,a,h,d,x){z&&B();var o=a.$$slots?.[h],i=!1;o===!0&&(o=a.children,i=!0),o===void 0||o(p,i?()=>d:d)}var K=S("<div><!></div>");function $(p,a){E(a,!1);let h=n(a,"factor",8),d=n(a,"class_name",8,""),x=n(a,"parallaxRatio",12,0),o=n(a,"onRatioChange",8,void 0),i=n(a,"shadowTarget",8,void 0),u=n(a,"shadowConfig",24,()=>({baseOffset:5,offsetRange:10,baseBlur:5,blurRange:10,opacity:.3})),y=n(a,"centerMode",8,"section"),C=n(a,"viewportOffset",8,0),r=H();function _(t,e){const s=typeof window<"u"?window.innerHeight:0,l=s/2;let m;switch(y()){case"element":m=t.top+t.height/2;break;case"viewport-relative":m=t.top+C();break;case"section":default:const b=f(r).closest("section");if(!b)return{parallaxY:0,parallaxRatio:0};const R=b.getBoundingClientRect();m=R.top+R.height/2;break}const k=(l-m)/(s/2),T=e<0?-1:1,g=Math.abs(e),v=T*Math.min(Math.max(-k*g,-g),g);return{parallaxY:v,parallaxRatio:v/e}}function M(t){if(!i())return;const e=document.querySelector(i());if(!e)return;const s=u().baseOffset+t*u().offsetRange,l=u().baseBlur+Math.abs(t)*u().blurRange;e.style.setProperty("--shadow-offset",`${s}px`),e.style.setProperty("--shadow-blur",`${l}px`)}function w(){if(!f(r))return;const t=f(r).getBoundingClientRect(),e=_(t,h());x(e.parallaxRatio),o()&&o()(e.parallaxRatio),i()&&M(e.parallaxRatio),f(r).style.setProperty("--parallax-offset",`${e.parallaxY}px`),f(r).style.setProperty("--parallax-ratio",e.parallaxRatio.toString())}D(()=>{requestAnimationFrame(w);let t=!1;const e=()=>{t||(requestAnimationFrame(()=>{w(),t=!1}),t=!0)};window.addEventListener("scroll",e,{passive:!0});let s;const l=()=>{clearTimeout(s),s=setTimeout(w,100)};return window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",l)}}),q();var c=K(),P=Y(c);J(P,a,"default",{}),j(c),I(c,t=>A(r,t),()=>f(r)),F(()=>G(c,`parallax ${d()??""} svelte-qw1gfc`)),L(p,c),O()}export{$ as default};
