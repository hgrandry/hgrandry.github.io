import{i as B}from"./lifecycle.XO4OpTCT.js";import{p as D,d as n,a as p,e as E,t as f,f as h,c as l,r as s,g as e}from"./template.BK_v_5TK.js";import{s as b}from"./render.CTq5wEc1.js";import{i as F}from"./if.BstegzDm.js";import{e as k,i as L,s as v}from"./attributes.DzMkLdbA.js";import{s as W}from"./class.C7Z3ELQA.js";import{p as u}from"./props._MM1y4GG.js";/* empty css                       */var G=f("<a> </a>"),H=f('<a class="icon-link svelte-t5osa0" target="_blank" rel="noopener noreferrer"><i></i> <span class="sr-only svelte-t5osa0"> </span></a>'),I=f('<div class="icon-links svelte-t5osa0"></div>'),J=f('<div class="contact-content svelte-t5osa0"><p class="svelte-t5osa0"> </p> <div class="contact-buttons svelte-t5osa0"></div> <!></div>');function U(C,c){D(c,!1);let P=u(c,"description",8),j=u(c,"links",8),g=u(c,"iconLinks",24,()=>[]);B();var d=J(),m=l(d),q=l(m,!0);s(m);var _=h(m,2);k(_,5,j,L,(o,t)=>{var a=G();n(()=>v(a,"target",e(t).href.startsWith("http")?"_blank":void 0)),n(()=>v(a,"rel",e(t).href.startsWith("http")?"noopener noreferrer":void 0));var r=l(a,!0);s(a),n(()=>{v(a,"href",e(t).href),W(a,`${`btn ${e(t).isPrimary?"btn-primary":"btn-outline"}`??""} svelte-t5osa0`),b(r,e(t).label)}),p(o,a)}),s(_);var w=h(_,2);{var z=o=>{var t=I();k(t,5,g,L,(a,r)=>{var i=H(),x=l(i),y=h(x,2),A=l(y,!0);s(y),s(i),n(()=>{v(i,"href",e(r).href),v(i,"title",e(r).label),W(x,`${`icon ${e(r).icon}`??""} svelte-t5osa0`),b(A,e(r).label)}),p(a,i)}),s(t),p(o,t)};F(w,o=>{g().length>0&&o(z)})}s(d),n(()=>b(q,P())),p(C,d),E()}export{U as default};