import{_ as g}from"./preload-helper.101896b7.js";import{y as e,D as m}from"./preact.module.4ca93ae9.js";const _=({value:t,name:n})=>t?e("astro-slot",{name:n,dangerouslySetInnerHTML:{__html:t}}):null;_.shouldComponentUpdate=()=>!1;var u=_;const o=new Map;var h=t=>async(n,a,{default:l,...c})=>{if(!t.hasAttribute("ssr"))return;for(const[s,r]of Object.entries(c))a[s]=e(u,{value:r,name:s});if(t.dataset.preactSignals){const{signal:s}=await g(()=>import("./signals.module.9f85f68d.js"),["_astro/signals.module.9f85f68d.js","_astro/preact.module.4ca93ae9.js","_astro/hooks.module.c47369c2.js"]);let r=JSON.parse(t.dataset.preactSignals);for(const[f,i]of Object.entries(r)){if(!o.has(i)){const d=s(a[f]);o.set(i,d)}a[f]=o.get(i)}}m(e(n,a,l!=null?e(u,{value:l}):l),t)};export{h as default};