import{u as s,d as a}from"./dispalyAlert.6311c68c.js";import"./main.1cf786eb.js";import"./_commonjsHelpers.725317a4.js";import"./preload-helper.d4198ada.js";const i=document.querySelector("#signin-form");i.addEventListener("submit",async o=>{o.preventDefault();const e=o.target[0].value,r=o.target[1].value;if(!(!e||!r))try{const t=await s(e,r);t.status==="ok"?window.location.href=window.location.origin:a("message-box",t.message,3e3)}catch(t){console.log(t),alert(t)}});
