import{c as i,p}from"./parallax.DJENJaw7.js";import"./index.C-dvCPbh.js";import"./equality.CHFDe4kT.js";function a(){const t=document.querySelector(".contact-btn");if(!t)return;const r=t.getBoundingClientRect(),{parallaxY:o,parallaxRatio:e}=i(r,p.contact),n=o*.5,l=10+Math.abs(e)*20,c=Math.abs(e)*2,d=.2-Math.abs(e)*.02;t.style.setProperty("--button-offset",`${o}px`),t.style.setProperty("--shadow-y",`${n}px`),t.style.setProperty("--shadow-blur",`${l}px`),t.style.setProperty("--shadow-spread",`${c}px`),t.style.setProperty("--shadow-opacity",d)}window.addEventListener("load",()=>{setTimeout(a,100)});window.addEventListener("scroll",a,{passive:!0});let s;window.addEventListener("resize",()=>{clearTimeout(s),s=setTimeout(a,100)});