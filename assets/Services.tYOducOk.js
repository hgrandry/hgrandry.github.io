import"./utils.vNBKzEkj.js";import{p as A,O as w,P as C,c as M,a as h,b as Q,t as x,A as q,Q as y,d as i,r as a,s as R,g as u,B}from"./template.DbfV741Q.js";import{s as T,e as j,i as k}from"./attributes.BvTvdrOJ.js";import{p as l,s as z}from"./props.Cw2u0vRJ.js";import{s as _}from"./render.C3u750a8.js";import{s as D}from"./index-client.CtBxzlR2.js";/* empty css                       */import E from"./Parallax.D-JJ_0fQ.js";import"./proxy.ERrKhqz9.js";import"./this.DM_fwHbK.js";import"./index.DJ3hts1W.js";var F=x('<div><div class="header svelte-l2fqtd"><div class="icon svelte-l2fqtd"> </div> <h3 class="svelte-l2fqtd"> </h3></div> <p class="svelte-l2fqtd"> </p></div>');function G(p,e){A(e,!1);const d=B(),c=B();let o=l(e,"icon",8),f=l(e,"title",8),n=l(e,"description",8),s=l(e,"parallaxRatio",8,0),m=l(e,"class_name",8);w(()=>y(s()),()=>{q(d,5+s()*10)}),w(()=>y(s()),()=>{q(c,15+Math.abs(s())*20)}),C();var r=F(),t=i(r),v=i(t),O=i(v,!0);a(v);var g=R(v,2),P=i(g,!0);a(g),a(t);var b=R(t,2),S=i(b,!0);a(b),a(r),M(()=>{D(r,`service ${m()??""} svelte-l2fqtd`),T(r,"style",`--shadow-offset: ${u(d)??""}px; --shadow-blur: ${u(c)??""}px;`),_(O,o()),_(P,f()),_(S,n())}),h(p,r),Q()}var H=x('<div class="service-wrapper svelte-1ox9hsx"><!></div>'),I=x('<div class="services-grid svelte-1ox9hsx"></div>');function ee(p,e){let d=l(e,"services",8);const c={baseOffset:5,offsetRange:20,baseBlur:5,blurRange:20,opacity:.2};var o=I();j(o,5,d,k,(f,n,s)=>{E(f,{layer:"content",shadowTarget:`.service-${s}`,shadowConfig:c,children:(m,r)=>{var t=H(),v=i(t);G(v,z(()=>u(n),{class_name:`service-${s}`})),a(t),h(m,t)},$$slots:{default:!0}})}),a(o),h(p,o)}export{ee as default};
