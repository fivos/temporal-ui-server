import{S as $,i as y,s as h,e as g,k as b,w as S,c as w,m as N,x as E,b as p,g as u,y as C,T as x,q as O,o as T,d as f,B as k,t as F,h as I}from"./index-0ac56778.js";import{d as U}from"./route-for-1f2060cd.js";import{g as A}from"./navigation-6709cf39.js";import{B}from"./button-16cbf4b3.js";import{t as J}from"./index-0ec5e969.js";import{n as v}from"./notifications-c89d12d3.js";import{i as q,a as G}from"./import-events-c7930c61.js";const _={auth:{enabled:!1,options:[]},baseUrl:"base",codec:{},defaultNamespace:"namespace",showTemporalSystemNamespace:!1,notifyOnNewVersion:!1,feedbackURL:"",runtimeEnvironment:{isCloud:!1,isLocal:!0,envOverride:!1},version:"2.0.0"};function L(l){let e;return{c(){e=F("Import")},l(n){e=I(n,"Import")},m(n,o){u(n,e,o)},d(n){n&&f(e)}}}function R(l){let e,n,o,r,a,i;return o=new B({props:{icon:"fileUpload",$$slots:{default:[L]},$$scope:{ctx:l}}}),o.$on("click",l[1]),{c(){e=g("input"),n=b(),S(o.$$.fragment),this.h()},l(t){e=w(t,"INPUT",{class:!0,type:!0,accept:!0}),n=N(t),E(o.$$.fragment,t),this.h()},h(){p(e,"class","import-input block rounded-md border border-gray-200 p-2"),p(e,"type","file"),p(e,"accept",".json")},m(t,s){u(t,e,s),u(t,n,s),C(o,t,s),r=!0,a||(i=x(e,"change",l[0]),a=!0)},p(t,[s]){const c={};s&8&&(c.$$scope={dirty:s,ctx:t}),o.$set(c)},i(t){r||(O(o.$$.fragment,t),r=!0)},o(t){T(o.$$.fragment,t),r=!1},d(t){t&&f(e),t&&f(n),k(o,t),a=!1,i()}}}function j(l){let e;return[async r=>{var a;const i=r.target,t=(a=i==null?void 0:i.files)===null||a===void 0?void 0:a[0],s=new FileReader;t&&(s.readAsText(t),s.onload=()=>{var c,m;try{const d=(m=(c=s==null?void 0:s.result)===null||c===void 0?void 0:c.toString())!==null&&m!==void 0?m:"";e=JSON.parse(d)}catch{v.add("error","Could not parse JSON")}})},async()=>{try{const{events:r,eventGroups:a}=await J({response:Array.isArray(e)?e:e==null?void 0:e.events,namespace:_.defaultNamespace,settings:_});q.set(r),G.set(a);const i=U({importType:"events",view:"feed"});A(i)}catch(r){console.error(r),v.add("error","Could not create event history from JSON")}}]}class Q extends ${constructor(e){super(),y(this,e,j,R,h,{})}}export{Q as E};
