import{e as l}from"./work.BfGDsiUn.js";import"./index.DpDRSc5s.js";import"./runtime.Codrn5cO.js";import"./utils.DP0BsZ3-.js";function r(){const e=document.getElementById("section-title");e&&e.setAttribute("viewportOffset",(window.innerHeight/2).toString())}window.addEventListener("load",r);window.addEventListener("resize",r);function i(){const e=window.innerHeight;document.querySelectorAll(".section").forEach(t=>{const s=t.querySelector(".container"),n=window.getComputedStyle(t),d=parseInt(n.paddingTop)+parseInt(n.paddingBottom);s.getBoundingClientRect().height+d<e?(t.style.height=`${e}px`,t.style.minHeight=`${e}px`,t.classList.add("large")):(t.style.height="auto",t.style.minHeight=`${e}px`,t.classList.remove("large"))})}window.addEventListener("load",()=>{i(),setTimeout(i,100)});let a;window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(i,100)});const c=new MutationObserver(e=>{e.forEach(o=>{o.attributeName==="data-theme"&&setTimeout(i,100)})});c.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});l.subscribe(e=>{document.querySelectorAll('[data-fade-with-work="true"]').forEach(t=>{e!==null?t.classList.add("fade-out"):t.classList.remove("fade-out")})});