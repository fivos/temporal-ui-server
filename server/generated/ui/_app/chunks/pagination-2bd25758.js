import{at as V,au as pe,D as ce,S as be,i as ve,s as Ie,U as fe,av as Pe,aw as Ne,L as ye,e as j,t as B,k as A,w as z,c as k,a as E,h as D,d as N,m as U,x as $,b as F,g as je,Q as l,y as ee,R as ge,j as te,M as ke,N as Ee,O as Te,q as K,o as Q,B as ne,ad as we,I as Fe,a8 as Oe,K as xe}from"./vendor-35e673e5.js";import{p as Be}from"./stores-668aa160.js";import{F as De}from"./filter-select-309f4e59.js";const se=["100","250","500"],_e=e=>{const t=String(e);return se.includes(t)?se:[e,...se]},G=(e,t)=>Math.floor(e/t)+1,me=(e,t,r)=>isNaN(e)||e<=1?0:e>he(t,r)?r.length-t:Math.floor(t*(e-1)),Me=(e,t,r)=>{const u=G(e,t);return me(u,t,r)},he=(e,t)=>Math.ceil(t.length/e),ae=(e,t)=>isNaN(e)||e<0?0:e<t.length?e:t.length-1,re=(e,t)=>e>=t.length||e<0,Se=(e=[],t=100,r=0)=>{const u=Me(Number(r),Number(t),e),o=ce(Number(t)),h=ce(u),y=n=>{o.set(Number(n))},g=()=>{h.update(n=>{const s=n+V(o);return re(s,e)?n:ae(s,e)})},T=()=>{h.update(n=>{const s=n-V(o);return ae(s,e)})},f=n=>{const s=V(o);return h.set(me(Number(n),s,e))},_=n=>{const s=G(Number(n),V(o));f(s)},d=n=>{for(let s=0;s<e.length;s++)if(n(e[s]))return s},b=n=>{const s=d(n);return G(s,V(o))},{subscribe:v}=pe([h,o],([n,s])=>({items:e.slice(n,n+s),hasPrevious:!re(n-s,e),hasNext:!re(n+s,e),startingIndex:n,endingIndex:ae(n+s-1,e),length:e.length,pageSize:s,currentPage:G(n,s),totalPages:he(s,e)}));return{subscribe:v,adjustPageSize:y,next:g,previous:T,jumpToPage:f,jumpToIndex:_,findIndex:d,findPage:b}};const Ve=e=>({visibleItems:e&8}),de=e=>({visibleItems:e[3].items});function Ae(e){let t,r,u,o,h,y,g,T,f,_,d,b,v,n,s=e[3].startingIndex+1+"",i,H,M=e[3].endingIndex+1+"",q,J,S=e[3].length+"",L,W,I,w,R,X,p,Y,oe;g=new De({props:{label:"Per Page",parameter:e[0],value:e[2],options:_e(e[2])}}),d=new fe({props:{icon:Pe}}),w=new fe({props:{icon:Ne}});const Z=e[8].default,m=ye(Z,e,e[7],de);return{c(){t=j("div"),r=j("nav"),u=j("div"),o=j("p"),h=B("Per Page"),y=A(),z(g.$$.fragment),T=A(),f=j("div"),_=j("button"),z(d.$$.fragment),v=A(),n=j("p"),i=B(s),H=B("\u2013"),q=B(M),J=B(" of "),L=B(S),W=A(),I=j("button"),z(w.$$.fragment),X=A(),m&&m.c(),this.h()},l(a){t=k(a,"DIV",{class:!0});var c=E(t);r=k(c,"NAV",{class:!0});var P=E(r);u=k(P,"DIV",{class:!0});var C=E(u);o=k(C,"P",{class:!0});var le=E(o);h=D(le,"Per Page"),le.forEach(N),y=U(C),$(g.$$.fragment,C),C.forEach(N),T=U(P),f=k(P,"DIV",{class:!0});var O=E(f);_=k(O,"BUTTON",{class:!0});var ue=E(_);$(d.$$.fragment,ue),ue.forEach(N),v=U(O),n=k(O,"P",{});var x=E(n);i=D(x,s),H=D(x,"\u2013"),q=D(x,M),J=D(x," of "),L=D(x,S),x.forEach(N),W=U(O),I=k(O,"BUTTON",{class:!0});var ie=E(I);$(w.$$.fragment,ie),ie.forEach(N),O.forEach(N),P.forEach(N),X=U(c),m&&m.l(c),c.forEach(N),this.h()},h(){F(o,"class","w-fit text-right"),F(u,"class","flex gap-2 items-center justify-center"),F(_,"class","caret svelte-15p08gy"),_.disabled=b=!e[3].hasPrevious,F(I,"class","caret svelte-15p08gy"),I.disabled=R=!e[3].hasNext,F(f,"class","flex gap-6 items-center justify-center"),F(r,"class","flex justify-end gap-8"),F(t,"class","flex flex-col gap-4")},m(a,c){je(a,t,c),l(t,r),l(r,u),l(u,o),l(o,h),l(u,y),ee(g,u,null),l(r,T),l(r,f),l(f,_),ee(d,_,null),l(f,v),l(f,n),l(n,i),l(n,H),l(n,q),l(n,J),l(n,L),l(f,W),l(f,I),ee(w,I,null),l(t,X),m&&m.m(t,null),p=!0,Y||(oe=[ge(_,"click",e[9]),ge(I,"click",e[10])],Y=!0)},p(a,[c]){const P={};c&1&&(P.parameter=a[0]),c&4&&(P.value=a[2]),c&4&&(P.options=_e(a[2])),g.$set(P),(!p||c&8&&b!==(b=!a[3].hasPrevious))&&(_.disabled=b),(!p||c&8)&&s!==(s=a[3].startingIndex+1+"")&&te(i,s),(!p||c&8)&&M!==(M=a[3].endingIndex+1+"")&&te(q,M),(!p||c&8)&&S!==(S=a[3].length+"")&&te(L,S),(!p||c&8&&R!==(R=!a[3].hasNext))&&(I.disabled=R),m&&m.p&&(!p||c&136)&&ke(m,Z,a,a[7],p?Te(Z,a[7],c,Ve):Ee(a[7]),de)},i(a){p||(K(g.$$.fragment,a),K(d.$$.fragment,a),K(w.$$.fragment,a),K(m,a),p=!0)},o(a){Q(g.$$.fragment,a),Q(d.$$.fragment,a),Q(w.$$.fragment,a),Q(m,a),p=!1},d(a){a&&N(t),ne(g),ne(d),ne(w),m&&m.d(a),Y=!1,we(oe)}}}function Ue(e,t,r){let u,o,h,y,g=xe,T=()=>(g(),g=Oe(o,i=>r(3,y=i)),o);Fe(e,Be,i=>r(6,h=i)),e.$$.on_destroy.push(()=>g());let{$$slots:f={},$$scope:_}=t,{key:d="per-page"}=t,{items:b}=t,{startingIndex:v=null}=t;const n=()=>o.previous(),s=()=>o.next();return e.$$set=i=>{"key"in i&&r(0,d=i.key),"items"in i&&r(4,b=i.items),"startingIndex"in i&&r(5,v=i.startingIndex),"$$scope"in i&&r(7,_=i.$$scope)},e.$$.update=()=>{e.$$.dirty&65&&r(2,u=h.url.searchParams.get(d)||"100"),e.$$.dirty&20&&T(r(1,o=Se(b,u))),e.$$.dirty&6&&o.adjustPageSize(u),e.$$.dirty&34&&o.jumpToIndex(v)},[d,o,u,y,b,v,h,_,f,n,s]}class Ce extends be{constructor(t){super();ve(this,t,Ue,Ae,Ie,{key:0,items:4,startingIndex:5})}}export{Ce as P};