import{p as n}from"./hooks.module.c47369c2.js";/* empty css                       */import{o as a}from"./jsxRuntime.module.fb7d8ecd.js";import"./preact.module.4ca93ae9.js";const d=({defaultActiveTab:e,labels:t})=>{const[c,i]=n(e);function l(o){document.querySelectorAll("li.nav-group").forEach(r=>r.classList.remove("active")),document.querySelectorAll(`li.nav-group.${o}`).forEach(r=>r.classList.add("active")),i(o)}return a("div",{class:"TabGroup",children:["learn","api"].map(o=>a("button",{class:c===o?"active":"",onClick:()=>l(o),children:t[o]}))})};export{d as default};