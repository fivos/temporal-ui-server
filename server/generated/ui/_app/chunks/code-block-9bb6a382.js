import{S as P,i as j,s as A,e as k,k as D,w as I,c as p,a as v,d as _,m as R,x as U,b as d,X as w,g as O,M as y,y as V,N as X,q as N,o as S,B as z,l as C,n as G,p as K,v as L,C as q,a8 as B,al as Q,am as W,t as Y,h as Z,j as x}from"./index-733079a8.js";import{e as F,g as H,F as $}from"./index.es-b93730d8.js";function M(n){let l,a,e,t,i,r,u,m,f,s,h;function E(o,c){return o[4]?le:ee}let g=E(n)(n);return u=new $({props:{icon:n[0]?F:H,color:"white"}}),{c(){l=k("div"),a=k("pre"),e=k("code"),g.c(),i=D(),r=k("button"),I(u.$$.fragment),this.h()},l(o){l=p(o,"DIV",{class:!0});var c=v(l);a=p(c,"PRE",{class:!0});var b=v(a);e=p(b,"CODE",{class:!0});var J=v(e);g.l(J),J.forEach(_),b.forEach(_),i=R(c),r=p(c,"BUTTON",{class:!0});var T=v(r);U(u.$$.fragment,T),T.forEach(_),c.forEach(_),this.h()},h(){d(e,"class",t="language-"+n[3]),d(a,"class","p-4 rounded-lg w-full overflow-x-scroll"),w(a,"h-full",!n[2]),d(r,"class","absolute top-4 right-4"),d(l,"class",m="relative w-full rounded-lg h-auto "+n[7].class+" "+(n[2]?"":"lg:h-full"))},m(o,c){O(o,l,c),y(l,a),y(a,e),g.m(e,null),y(l,i),y(l,r),V(u,r,null),f=!0,s||(h=X(r,"click",n[5]),s=!0)},p(o,c){g.p(o,c),(!f||c&8&&t!==(t="language-"+o[3]))&&d(e,"class",t),c&4&&w(a,"h-full",!o[2]);const b={};c&1&&(b.icon=o[0]?F:H),u.$set(b),(!f||c&132&&m!==(m="relative w-full rounded-lg h-auto "+o[7].class+" "+(o[2]?"":"lg:h-full")))&&d(l,"class",m)},i(o){f||(N(u.$$.fragment,o),f=!0)},o(o){S(u.$$.fragment,o),f=!1},d(o){o&&_(l),g.d(),z(u),s=!1,h()}}}function ee(n){let l,a;return{c(){l=new Q,a=C(),this.h()},l(e){l=W(e),a=C(),this.h()},h(){l.a=a},m(e,t){l.m(n[1],e,t),O(e,a,t)},p(e,t){t&2&&l.p(e[1])},d(e){e&&_(a),e&&l.d()}}}function le(n){let l=n[6](n[1])+"",a;return{c(){a=Y(l)},l(e){a=Z(e,l)},m(e,t){O(e,a,t)},p(e,t){t&2&&l!==(l=e[6](e[1])+"")&&x(a,l)},d(e){e&&_(a)}}}function te(n){let l,a,e=(n[1]||n[1]===null)&&M(n);return{c(){e&&e.c(),l=C()},l(t){e&&e.l(t),l=C()},m(t,i){e&&e.m(t,i),O(t,l,i),a=!0},p(t,[i]){t[1]||t[1]===null?e?(e.p(t,i),i&2&&N(e,1)):(e=M(t),e.c(),N(e,1),e.m(l.parentNode,l)):e&&(G(),S(e,1,1,()=>{e=null}),K())},i(t){a||(N(e),a=!0)},o(t){S(e),a=!1},d(t){e&&e.d(t),t&&_(l)}}}function ae(n,l,a){let{content:e}=l,{copied:t=!1}=l,{inline:i=!1}=l,{language:r="json"}=l;const u=r==="json",m=()=>navigator.clipboard.writeText(u?f(JSON.stringify(e)):e).then(()=>{a(0,t=!t),setTimeout(()=>a(0,t=!1),2e3)}).catch(s=>console.error(s)),f=s=>{if(!s)return;let h;try{h=JSON.parse(s)}catch{h=s}return JSON.stringify(h,void 0,i?0:2)};return L(()=>{window.Prism.highlightAll()}),n.$$set=s=>{a(7,l=q(q({},l),B(s))),"content"in s&&a(1,e=s.content),"copied"in s&&a(0,t=s.copied),"inline"in s&&a(2,i=s.inline),"language"in s&&a(3,r=s.language)},l=B(l),[t,e,i,r,u,m,f,l]}class ie extends P{constructor(l){super(),j(this,l,ae,te,A,{content:1,copied:0,inline:2,language:3})}}export{ie as C};