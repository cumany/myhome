import{d as t,c as i}from"./dispalyAlert.6311c68c.js";import"./main.c00241e2.js";import"./LeftSidebar.astro_astro_type_script_index_0_lang.34d19877.js";import"./_commonjsHelpers.725317a4.js";import"./preload-helper.d4198ada.js";const n=document.querySelector("#signup-form");n.addEventListener("submit",async e=>{e.preventDefault();const o=e.target[0].value,r=e.target[1].value,a=e.target[2].value;if(r!=a)t("message-box","两次输入密码不一致",3e3);else if(!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(o))t("message-box","请填写有效的邮箱",3e3);else{const s=await i(o,r);s.status==="ok"?(t("message-box",s.message,3e3),setTimeout(()=>{window.location.href=window.location.origin+"/products/signIn"},3e3)):s.status==="error"&&t("message-box",s.message,3e3)}});
