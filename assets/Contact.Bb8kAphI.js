import{i as z}from"./lifecycle.dEfKyE3P.js";import{p as A,a as p,b as B,t as f,c,d as i,s as u,r as a,g as t}from"./template.BcbFdhFy.js";import{s as b}from"./render.D_eh7ANd.js";import{i as D}from"./if.BT4aaxKJ.js";import{e as P,i as k,s as m}from"./attributes.60pltVRI.js";import{s as L}from"./class.FvSz6ltG.js";import{p as x}from"./props.Bn9TQA6c.js";import{p as E}from"./parallax.DJENJaw7.js";import G from"./Parallax.CirKGLkk.js";/* empty css                       */import"./equality.CHFDe4kT.js";import"./proxy.DrSHuIrQ.js";import"./index.C-dvCPbh.js";import"./this.DWLYuhCF.js";import"./index-client.BRytnvxX.js";var H=f("<a> </a>"),I=f('<div class="contact-inner svelte-w5wh7v"><p class="svelte-w5wh7v"> </p> <div class="contact-buttons svelte-w5wh7v"></div></div>'),J=f('<a class="icon-link svelte-w5wh7v" target="_blank" rel="noopener noreferrer"><i></i> <span class="sr-only svelte-w5wh7v"> </span></a>'),K=f('<div class="icon-links svelte-w5wh7v"></div>'),M=f('<div class="contact-wrapper svelte-w5wh7v"><!> <!></div>');function st(W,d){A(d,!1);let $=x(d,"description",8),C=x(d,"links",8),g=x(d,"iconLinks",24,()=>[]);z();var _=M(),y=i(_);G(y,{get factor(){return E.contact},class_name:"contact-content",children:(n,h)=>{var v=I(),r=i(v),e=i(r,!0);a(r);var l=u(r,2);P(l,5,C,k,(w,s)=>{var o=H();c(()=>m(o,"target",t(s).href.startsWith("http")?"_blank":void 0)),c(()=>m(o,"rel",t(s).href.startsWith("http")?"noopener noreferrer":void 0));var q=i(o,!0);a(o),c(()=>{m(o,"href",t(s).href),L(o,`${`btn ${t(s).isPrimary?"btn-primary":"btn-outline"}`??""} svelte-w5wh7v`),b(q,t(s).label)}),p(w,o)}),a(l),a(v),c(()=>b(e,$())),p(n,v)},$$slots:{default:!0}});var F=u(y,2);{var j=n=>{var h=K();P(h,5,g,k,(v,r)=>{var e=J(),l=i(e),w=u(l,2),s=i(w,!0);a(w),a(e),c(()=>{m(e,"href",t(r).href),m(e,"title",t(r).label),L(l,`${`icon ${t(r).icon}`??""} svelte-w5wh7v`),b(s,t(r).label)}),p(v,e)}),a(h),p(n,h)};D(F,n=>{g().length>0&&n(j)})}a(_),p(W,_),B()}export{st as default};
