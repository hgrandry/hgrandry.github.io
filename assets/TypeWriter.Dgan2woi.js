import{i as c}from"./lifecycle.Ddz9ft4s.js";import{p as w,c as x,a as g,b as h,t as T,g as s,x as p,y as d,d as y,z as v,r as P}from"./template.BNnZoSOd.js";import{s as _}from"./render.DxyhYp4i.js";import{p as b}from"./props.sA_CKwar.js";/* empty css                       */import"./equality.CHFDe4kT.js";import"./proxy.Bk_Gv-qP.js";var k=T('<span class="typewriter svelte-qk1gaf"> <span class="cursor svelte-qk1gaf">|</span></span>');function C(m,l){w(l,!1);let n=b(l,"texts",8),a=0,e=d(""),i=!0;async function u(){for(;;){const o=n()[a];if(i){for(s(e).length===0&&await new Promise(t=>setTimeout(t,700));s(e).length<o.length;)p(e,o.slice(0,s(e).length+1)),await new Promise(t=>setTimeout(t,50));await new Promise(t=>setTimeout(t,1500)),i=!1}else{for(;s(e).length>0;)p(e,s(e).slice(0,-1)),await new Promise(t=>setTimeout(t,20));a=(a+1)%n().length,i=!0}}}u(),c();var r=k(),f=y(r,!0);v(),P(r),x(()=>_(f,s(e))),g(m,r),h()}export{C as default};