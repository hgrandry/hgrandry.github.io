import{i as c}from"./lifecycle.xAr6KlAC.js";import{p as w,d as g,a as h,e as x,t as T,g as s,s as p,m as d,c as y,n as v,r as P}from"./template.CJq6cqxZ.js";import{s as _}from"./render.QEePbp-f.js";import{p as k}from"./props.B4JOcCrY.js";/* empty css                       */var q=T('<span class="typewriter svelte-qk1gaf"> <span class="cursor svelte-qk1gaf">|</span></span>');function A(m,n){w(n,!1);let l=k(n,"texts",8),a=0,e=d(""),i=!0;async function u(){for(;;){const o=l()[a];if(i){for(s(e).length===0&&await new Promise(t=>setTimeout(t,700));s(e).length<o.length;)p(e,o.slice(0,s(e).length+1)),await new Promise(t=>setTimeout(t,50));await new Promise(t=>setTimeout(t,1500)),i=!1}else{for(;s(e).length>0;)p(e,s(e).slice(0,-1)),await new Promise(t=>setTimeout(t,20));a=(a+1)%l().length,i=!0}}}u(),c();var r=q(),f=y(r,!0);v(),P(r),g(()=>_(f,s(e))),h(m,r),x()}export{A as default};
