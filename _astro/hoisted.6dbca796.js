import"./main.c00241e2.js";import"./LeftSidebar.astro_astro_type_script_index_0_lang.34d19877.js";import{_ as m}from"./preload-helper.d4198ada.js";const i=document.getElementsByClassName("mermaid");if(document.getElementsByClassName("mermaid").length>0){const{default:t}=await m(()=>import("./mermaid.core.80b8ffc3.js"),["_astro/mermaid.core.80b8ffc3.js","_astro/_commonjsHelpers.725317a4.js"]);t.initialize({startOnLoad:!1,fontFamily:"var(--sans-font)",theme:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"default"});for(const e of i){const a=e.getAttribute("data-content");if(!a)continue;let n=document.createElement("svg");const o=n.id="mermaid-"+Math.round(Math.random()*1e5);e.appendChild(n),t.render(o,a,r=>{e.innerHTML=r})}}
