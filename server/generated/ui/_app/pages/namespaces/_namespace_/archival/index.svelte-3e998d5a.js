import{S as K,i as M,s as O,l as I,g as v,o as $,p as q,q as w,d,n as L,e as N,t as T,k as W,w as y,c as C,a as H,h as P,m as D,x as E,L as S,y as A,B as F,b as R,F as X,G as Y,al as G,H as Z,am as x,T as g,aQ as ee}from"../../../../chunks/vendor-7b40ad9c.js";import{b as z}from"../../../../chunks/workflow-status-238f8379.js";import{W as te,a as le,b as ae,c as re}from"../../../../chunks/_workflows-loading-4cb43511.js";import{E as ie}from"../../../../chunks/empty-state-5a5dfcd9.js";import{C as J}from"../../../../chunks/code-block-18c296c3.js";import"../../../../chunks/route-for-api-ff9635e3.js";import"../../../../chunks/notifications-c0e624d6.js";import"../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../chunks/format-date-cf03d31b.js";import"../../../../chunks/namespace-34cc329f.js";import"../../../../chunks/stores-cab1f642.js";import"../../../../chunks/settings-5b17304f.js";import"../../../../chunks/route-for-11851a4f.js";import"../../../../chunks/navigation-093db9e2.js";import"../../../../chunks/singletons-a6a7384f.js";import"../../../../chunks/select-b72dba05.js";import"../../../../chunks/filter-select-8a49190a.js";import"../../../../chunks/append-query-parameters-b8619cc0.js";function Q(o){o[8]=o[9].workflows}function oe(o){let e,l,t,a,n,r,f,i,m,k,b,p,s,_;f=new J({props:{content:"tctl --namespace default namespace update --has enabled",language:"text"}});let u=!o[1]&&U();return{c(){e=N("h2"),l=T("This namespace is currently not enabled for archival."),t=W(),a=N("p"),n=T("Run this command to enable Archival for Event Histories:"),r=W(),y(f.$$.fragment),i=W(),u&&u.c(),m=W(),k=N("p"),b=T("For more details please check out "),p=N("a"),s=T("Archival Docs"),this.h()},l(c){e=C(c,"H2",{class:!0});var h=H(e);l=P(h,"This namespace is currently not enabled for archival."),h.forEach(d),t=D(c),a=C(c,"P",{});var j=H(a);n=P(j,"Run this command to enable Archival for Event Histories:"),j.forEach(d),r=D(c),E(f.$$.fragment,c),i=D(c),u&&u.l(c),m=D(c),k=C(c,"P",{});var V=H(k);b=P(V,"For more details please check out "),p=C(V,"A",{class:!0,href:!0});var B=H(p);s=P(B,"Archival Docs"),B.forEach(d),V.forEach(d),this.h()},h(){R(e,"class","text-2xl"),R(p,"class","text-blue-700 underline"),R(p,"href","https://docs.temporal.io/docs/server/archive-data/")},m(c,h){v(c,e,h),S(e,l),v(c,t,h),v(c,a,h),S(a,n),v(c,r,h),A(f,c,h),v(c,i,h),u&&u.m(c,h),v(c,m,h),v(c,k,h),S(k,b),S(k,p),S(p,s),_=!0},p(c,h){c[1]?u&&(L(),$(u,1,1,()=>{u=null}),q()):u?h&2&&w(u,1):(u=U(),u.c(),w(u,1),u.m(m.parentNode,m))},i(c){_||(w(f.$$.fragment,c),w(u),_=!0)},o(c){$(f.$$.fragment,c),$(u),_=!1},d(c){c&&d(e),c&&d(t),c&&d(a),c&&d(r),F(f,c),c&&d(i),u&&u.d(c),c&&d(m),c&&d(k)}}}function ne(o){let e,l,t,a,n,r,f,i,m;function k(s){o[7](s)}let b={};o[2]!==void 0&&(b.timeFormat=o[2]),a=new te({props:b}),X.push(()=>Y(a,"timeFormat",k));let p={ctx:o,current:null,token:null,hasCatch:!1,pending:pe,then:ce,catch:se,value:9,blocks:[,,,]};return G(i=o[3],p),{c(){e=N("h2"),l=T("Archived Workflows"),t=W(),y(a.$$.fragment),r=W(),f=I(),p.block.c(),this.h()},l(s){e=C(s,"H2",{class:!0});var _=H(e);l=P(_,"Archived Workflows"),_.forEach(d),t=D(s),E(a.$$.fragment,s),r=D(s),f=I(),p.block.l(s),this.h()},h(){R(e,"class","text-2xl")},m(s,_){v(s,e,_),S(e,l),v(s,t,_),A(a,s,_),v(s,r,_),v(s,f,_),p.block.m(s,p.anchor=_),p.mount=()=>f.parentNode,p.anchor=f,m=!0},p(s,_){o=s;const u={};!n&&_&4&&(n=!0,u.timeFormat=o[2],Z(()=>n=!1)),a.$set(u),p.ctx=o,_&8&&i!==(i=o[3])&&G(i,p)||x(p,o,_)},i(s){m||(w(a.$$.fragment,s),w(p.block),m=!0)},o(s){$(a.$$.fragment,s);for(let _=0;_<3;_+=1){const u=p.blocks[_];$(u)}m=!1},d(s){s&&d(e),s&&d(t),F(a,s),s&&d(r),s&&d(f),p.block.d(s),p.token=null,p=null}}}function U(o){let e,l,t,a,n;return a=new J({props:{content:"tctl --namespace default namespace update -vas enabled",language:"text"}}),{c(){e=N("p"),l=T("To enable Visibility Archival:"),t=W(),y(a.$$.fragment)},l(r){e=C(r,"P",{});var f=H(e);l=P(f,"To enable Visibility Archival:"),f.forEach(d),t=D(r),E(a.$$.fragment,r)},m(r,f){v(r,e,f),S(e,l),v(r,t,f),A(a,r,f),n=!0},i(r){n||(w(a.$$.fragment,r),n=!0)},o(r){$(a.$$.fragment,r),n=!1},d(r){r&&d(e),r&&d(t),F(a,r)}}}function se(o){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function ce(o){Q(o);let e,l,t,a;const n=[me,fe],r=[];function f(i,m){return i[8].length?0:1}return e=f(o),l=r[e]=n[e](o),{c(){l.c(),t=I()},l(i){l.l(i),t=I()},m(i,m){r[e].m(i,m),v(i,t,m),a=!0},p(i,m){Q(i);let k=e;e=f(i),e===k?r[e].p(i,m):(L(),$(r[k],1,1,()=>{r[k]=null}),q(),l=r[e],l?l.p(i,m):(l=r[e]=n[e](i),l.c()),w(l,1),l.m(t.parentNode,t))},i(i){a||(w(l),a=!0)},o(i){$(l),a=!1},d(i){r[e].d(i),i&&d(t)}}}function fe(o){let e,l;return e=new ie({props:{title:"No Workflows Found",content:"If you have filters applied, try adjusting them."}}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){A(e,t,a),l=!0},p:g,i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){$(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function me(o){let e,l;return e=new ae({props:{$$slots:{default:[_e]},$$scope:{ctx:o}}}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){A(e,t,a),l=!0},p(t,a){const n={};a&2060&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){$(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function ue(o){let e,l;return e=new re({props:{workflow:o[10],timeFormat:o[2]}}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){A(e,t,a),l=!0},p(t,a){const n={};a&1024&&(n.workflow=t[10]),a&4&&(n.timeFormat=t[2]),e.$set(n)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){$(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function _e(o){let e,l;return e=new ee({props:{items:o[8],$$slots:{default:[ue,({item:t})=>({10:t}),({item:t})=>t?1024:0]},$$scope:{ctx:o}}}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){A(e,t,a),l=!0},p(t,a){const n={};a&8&&(n.items=t[8]),a&3076&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){$(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function pe(o){let e,l;return e=new le({}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){A(e,t,a),l=!0},p:g,i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){$(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function be(o){let e,l,t,a;const n=[ne,oe],r=[];function f(i,m){return i[0]?0:1}return e=f(o),l=r[e]=n[e](o),{c(){l.c(),t=I()},l(i){l.l(i),t=I()},m(i,m){r[e].m(i,m),v(i,t,m),a=!0},p(i,[m]){let k=e;e=f(i),e===k?r[e].p(i,m):(L(),$(r[k],1,1,()=>{r[k]=null}),q(),l=r[e],l?l.p(i,m):(l=r[e]=n[e](i),l.c()),w(l,1),l.m(t.parentNode,t))},i(i){a||(w(l),a=!0)},o(i){$(l),a=!1},d(i){r[e].d(i),i&&d(t)}}}const Ie=async function({params:o,url:e,stuff:l}){var t,a;const{searchParams:n}=e;n.has("time-range")||n.set("time-range","24 hours");const r=o.namespace,f=n.get("workflow-id"),i=n.get("workflow-type"),m=n.get("time-range"),k=n.get("status"),b={workflowId:f,workflowType:i,closeTime:m,executionStatus:k},s=l.namespaces.find(h=>h.namespaceInfo.name===r),_=((t=s==null?void 0:s.config)===null||t===void 0?void 0:t.historyArchivalState)==="Enabled",u=((a=s==null?void 0:s.config)===null||a===void 0?void 0:a.visibilityArchivalState)==="Enabled";return{props:{initialData:_?await z(r,b,fetch):Promise.resolve(null),namespace:r,parameters:b,archivalEnabled:_,visibilityArchivalEnabled:u}}};function ke(o,e,l){let{namespace:t}=e,{initialData:a}=e,{parameters:n}=e,{archivalEnabled:r=!1}=e,{visibilityArchivalEnabled:f=!1}=e,i="UTC",m=a;function k(b){i=b,l(2,i)}return o.$$set=b=>{"namespace"in b&&l(4,t=b.namespace),"initialData"in b&&l(5,a=b.initialData),"parameters"in b&&l(6,n=b.parameters),"archivalEnabled"in b&&l(0,r=b.archivalEnabled),"visibilityArchivalEnabled"in b&&l(1,f=b.visibilityArchivalEnabled)},o.$$.update=()=>{o.$$.dirty&81&&r&&l(3,m=z(t,n))},[r,f,i,m,t,a,n,k]}class Re extends K{constructor(e){super();M(this,e,ke,be,O,{namespace:4,initialData:5,parameters:6,archivalEnabled:0,visibilityArchivalEnabled:1})}}export{Re as default,Ie as load};
