import{a as s,i,r as o}from"./merge.ea33a221.js";var f=/\s/;function a(r){for(var t=r.length;t--&&f.test(r.charAt(t)););return t}var c=/^\s+/;function m(r){return r&&r.slice(0,a(r)+1).replace(c,"")}var e=0/0,p=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,y=/^0o[0-7]+$/i,I=parseInt;function w(r){if(typeof r=="number")return r;if(s(r))return e;if(i(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=i(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=m(r);var n=b.test(r);return n||y.test(r)?I(r.slice(2),n?2:8):p.test(r)?e:+r}var d=function(){return o.Date.now()};const O=d;export{O as n,w as t};
