import{S as A,i as D,s as F,w as C,k as _,e as d,t as P,x as N,m as h,c as b,a as v,h as q,d as l,b as x,y as B,g as y,M as f,q as H,o as I,B as O,N as M}from"../../chunks/index-0ac56778.js";import{f as T}from"../../chunks/settings-service-4d013b48.js";import{m as U}from"../../chunks/route-for-1f2060cd.js";import{B as V}from"../../chunks/button-16cbf4b3.js";import{p as j}from"../../chunks/stores-b68b1c9c.js";import{g as z}from"../../chunks/navigation-6709cf39.js";import{N as G,H as J}from"../../chunks/hamburger-header-8760f446.js";import"../../chunks/route-for-api-3587a066.js";import"../../chunks/index-d79bdd4d.js";import"../../chunks/notifications-c89d12d3.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/index-8aa3dbe1.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/data-encoder-status-33442a6a.js";import"../../chunks/data-converter-config-3aa7207a.js";import"../../chunks/persist-store-c143c99b.js";import"../../chunks/is-http-66ff83d1.js";import"../../chunks/tooltip-4e8a837b.js";import"../../chunks/copyable-09696270.js";import"../../chunks/modal-789f4b54.js";import"../../chunks/index-4c83ef99.js";function K(i){let e;return{c(){e=P("Continue to SSO")},l(n){e=q(n,"Continue to SSO")},m(n,r){y(n,e,r)},d(n){n&&l(e)}}}function Q(i){let e,n,r,c,a,o,S,k,u,w,E,p,m,$;return e=new G({props:{href:"/",user:void 0}}),r=new J({props:{href:"/",user:void 0}}),m=new V({props:{classes:"",login:!0,name:"lock",$$slots:{default:[K]},$$scope:{ctx:i}}}),m.$on("click",i[2]),{c(){C(e.$$.fragment),n=_(),C(r.$$.fragment),c=_(),a=d("section"),o=d("h1"),S=P("Welcome back."),k=_(),u=d("p"),w=P("Let's get you signed in."),E=_(),p=d("div"),C(m.$$.fragment),this.h()},l(t){N(e.$$.fragment,t),n=h(t),N(r.$$.fragment,t),c=h(t),a=b(t,"SECTION",{class:!0});var s=v(a);o=b(s,"H1",{class:!0});var g=v(o);S=q(g,"Welcome back."),g.forEach(l),k=h(s),u=b(s,"P",{class:!0});var L=v(u);w=q(L,"Let's get you signed in."),L.forEach(l),E=h(s),p=b(s,"DIV",{class:!0});var W=v(p);N(m.$$.fragment,W),W.forEach(l),s.forEach(l),this.h()},h(){x(o,"class","text-8xl font-semibold"),x(u,"class","my-7"),x(p,"class","mx-auto"),x(a,"class","my-[20vh] text-center")},m(t,s){B(e,t,s),y(t,n,s),B(r,t,s),y(t,c,s),y(t,a,s),f(a,o),f(o,S),f(a,k),f(a,u),f(u,w),f(a,E),f(a,p),B(m,p,null),$=!0},p(t,[s]){const g={};s&8&&(g.$$scope={dirty:s,ctx:t}),m.$set(g)},i(t){$||(H(e.$$.fragment,t),H(r.$$.fragment,t),H(m.$$.fragment,t),$=!0)},o(t){I(e.$$.fragment,t),I(r.$$.fragment,t),I(m.$$.fragment,t),$=!1},d(t){O(e,t),t&&l(n),O(r,t),t&&l(c),t&&l(a),O(m)}}}const ht=async function({fetch:i}){const e=await T(i);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function R(i,e,n){let r;M(i,j,o=>n(1,r=o));let{settings:c}=e;const a=()=>{z(U({settings:c,searchParams:r.url.searchParams,originUrl:r.url.origin}))};return i.$$set=o=>{"settings"in o&&n(0,c=o.settings)},[c,r,a]}class bt extends A{constructor(e){super(),D(this,e,R,Q,F,{settings:0})}}export{bt as default,ht as load};
