var f=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(r,e)=>{var o={};for(var t in r)$.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(r!=null&&f)for(var t of f(r))e.indexOf(t)<0&&p.call(r,t)&&(o[t]=r[t]);return o};const h=(r,e)=>{const o=e instanceof URLSearchParams;return e&&!o&&(e=new URLSearchParams(e)),e?`${r}?${e}`:r};function F(r){return r.replace(/%/g,"%25").replace(/,/g,"%2C").replace(/\//g,"%2F").replace(/\\/g,"%5C").replace(/\?/g,"%3F").replace(/:/g,"%3A").replace(/@/g,"%40").replace(/&/g,"%26").replace(/=/g,"%3D").replace(/\+/g,"%2B").replace(/\$/g,"%24").replace(/#/g,"%23")}function k(r){return r.replace(/%2C/g,",").replace(/%2F/g,"/").replace(/%5C/g,"\\").replace(/%3F/g,"?").replace(/%3A/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3D/g,"=").replace(/%2B/g,"+").replace(/%24/g,"$").replace(/%23/g,"#").replace(/%25/g,"%")}const U=r=>r==="feed"||r==="compact"||r==="json",u=({namespace:r})=>`/namespaces/${r}`,P=r=>`${u(r)}/workflows`,w=r=>`${u(r)}/archival`,S=r=>`${u(r)}/settings`,s=t=>{var n=t,{workflow:r,run:e}=n,o=c(n,["workflow","run"]);const a=F(r);return`${P(o)}/${a}/${e}`},m=t=>{var n=t,{view:r,queryParams:e}=n,o=c(n,["view","queryParams"]);const a=`${s(o)}/history`;return!r||!U(r)?`${a}/feed`:h(`${a}/${r}`,e)},R=r=>`${s(r)}/workers`,L=r=>`${s(r)}/stack-trace`,A=r=>`${s(r)}/query`,W=r=>`${s(r)}/pending-activities`,v=r=>{var i;const{settings:e,searchParams:o,originUrl:t}=r,n=new URL("/auth/sso",e.baseUrl);let a=(i=e.auth.options)!=null?i:[];return a=[...a,"returnUrl"],a.forEach(l=>{const g=o.get(l);g&&n.searchParams.set(l,g)}),!n.searchParams.get("returnUrl")&&t&&n.searchParams.set("returnUrl",t),n.toString()},C=()=>{{const r=new URL("login",window.location.origin);return r.searchParams.set("returnUrl",window.location.href),r.toString()}},y=({importType:r,view:e})=>e?r==="events"?`/import/${r}/history/${e}`:`/import/${r}/${e}`:`/import/${r}`;export{w as a,S as b,C as c,y as d,m as e,R as f,W as g,L as h,A as i,k as j,s as k,v as l,P as r,h as t};