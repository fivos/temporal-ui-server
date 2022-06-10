import{S as ve,i as _e,s as be,I as Ve,e as p,t as z,k as y,c as w,a as k,h as V,d,m as D,b as u,ae as ue,g as ae,M as r,aq as de,J as qe,K as Ce,L as Ne,q as Q,o as x,N as le,w as re,x as oe,y as ne,j as $,B as ie,T as We,ar as Pe,n as Ae,p as Fe,G as Be,W as ye}from"./index-0ac56778.js";import{b as me,c as ce,d as he,g as fe}from"./get-truncated-word-a0dd6ba9.js";import{f as Z,g as De}from"./format-date-308f6b51.js";import{l as Le}from"./route-for-1f2060cd.js";import{W as je}from"./workflow-status-bb105668.js";import{T as Se}from"./tooltip-4e8a837b.js";import{I as Me}from"./index-8aa3dbe1.js";import{B as Oe}from"./button-16cbf4b3.js";function Re(t){let e,l,a,s,n,i,m,E,g,f,o,B,c,b,v,N,q,L,j,G,C,M,O,X,H,A,R;const U=t[4].default,W=Ve(U,t,t[3],null);return{c(){e=p("section"),l=p("div"),a=p("div"),s=p("div"),n=z("Status"),i=y(),m=p("div"),E=z("Workflow ID"),f=y(),o=p("div"),B=z("Type"),b=y(),v=p("div"),N=z("Start"),q=y(),L=p("div"),j=z("End"),G=y(),C=p("div"),M=p("div"),O=z("Summary"),H=y(),A=p("div"),W&&W.c(),this.h()},l(I){e=w(I,"SECTION",{class:!0});var T=k(e);l=w(T,"DIV",{class:!0});var Y=k(l);a=w(Y,"DIV",{class:!0});var S=k(a);s=w(S,"DIV",{class:!0});var ee=k(s);n=V(ee,"Status"),ee.forEach(d),i=D(S),m=w(S,"DIV",{class:!0});var P=k(m);E=V(P,"Workflow ID"),P.forEach(d),f=D(S),o=w(S,"DIV",{class:!0});var h=k(o);B=V(h,"Type"),h.forEach(d),b=D(S),v=w(S,"DIV",{class:!0});var _=k(v);N=V(_,"Start"),_.forEach(d),q=D(S),L=w(S,"DIV",{class:!0});var J=k(L);j=V(J,"End"),J.forEach(d),S.forEach(d),Y.forEach(d),G=D(T),C=w(T,"DIV",{class:!0});var K=k(C);M=w(K,"DIV",{class:!0});var F=k(M);O=V(F,"Summary"),F.forEach(d),K.forEach(d),H=D(T),A=w(T,"DIV",{class:!0});var se=k(A);W&&W.l(se),se.forEach(d),T.forEach(d),this.h()},h(){u(s,"class","table-header table-cell w-28 rounded-tl-md svelte-qkbvym"),u(m,"class","table-header table-cell md:w-60 xl:w-auto svelte-qkbvym"),ue(()=>t[5].call(m)),u(o,"class","table-header table-cell md:w-60 xl:w-80 svelte-qkbvym"),ue(()=>t[6].call(o)),u(v,"class","table-header hidden text-sm xl:table-cell xl:w-64 xl:text-base svelte-qkbvym"),u(L,"class","table-header hidden rounded-tr-md xl:table-cell xl:w-64 svelte-qkbvym"),u(a,"class","hidden md:table-row"),u(l,"class","table-header-row md:table-header-group svelte-qkbvym"),u(M,"class","rounded-t-md border-b p-2"),u(C,"class","table-header-row md:hidden svelte-qkbvym"),ue(()=>t[7].call(C)),u(A,"class","overflow-y-auto md:table-row-group"),u(e,"class","workflow-table svelte-qkbvym")},m(I,T){ae(I,e,T),r(e,l),r(l,a),r(a,s),r(s,n),r(a,i),r(a,m),r(m,E),g=de(m,t[5].bind(m)),r(a,f),r(a,o),r(o,B),c=de(o,t[6].bind(o)),r(a,b),r(a,v),r(v,N),r(a,q),r(a,L),r(L,j),r(e,G),r(e,C),r(C,M),r(M,O),X=de(C,t[7].bind(C)),r(e,H),r(e,A),W&&W.m(A,null),R=!0},p(I,[T]){W&&W.p&&(!R||T&8)&&qe(W,U,I,I[3],R?Ne(U,I[3],T,null):Ce(I[3]),null)},i(I){R||(Q(W,I),R=!0)},o(I){x(W,I),R=!1},d(I){I&&d(e),g(),c(),X(),W&&W.d(I)}}}function Ue(t,e,l){let a,s,n;le(t,me,o=>l(0,a=o)),le(t,ce,o=>l(1,s=o)),le(t,he,o=>l(2,n=o));let{$$slots:i={},$$scope:m}=e;function E(){a=this.offsetWidth,me.set(a)}function g(){s=this.offsetWidth,ce.set(s)}function f(){n=this.offsetWidth,he.set(n)}return t.$$set=o=>{"$$scope"in o&&l(3,m=o.$$scope)},[a,s,n,m,i,E,g,f]}class ot extends ve{constructor(e){super(),_e(this,e,Ue,Re,be,{})}}function Ge(t){let e,l=fe(t[0].id,t[3]||t[4])+"",a;return{c(){e=p("span"),a=z(l),this.h()},l(s){e=w(s,"SPAN",{class:!0});var n=k(e);a=V(n,l),n.forEach(d),this.h()},h(){u(e,"class","table-link svelte-3bzomh")},m(s,n){ae(s,e,n),r(e,a)},p(s,n){n&25&&l!==(l=fe(s[0].id,s[3]||s[4])+"")&&$(a,l)},d(s){s&&d(e)}}}function He(t){let e,l=fe(t[0].name,t[5]||t[4])+"",a;return{c(){e=p("span"),a=z(l),this.h()},l(s){e=w(s,"SPAN",{class:!0});var n=k(e);a=V(n,l),n.forEach(d),this.h()},h(){u(e,"class","table-link svelte-3bzomh")},m(s,n){ae(s,e,n),r(e,a)},p(s,n){n&49&&l!==(l=fe(s[0].name,s[5]||s[4])+"")&&$(a,l)},d(s){s&&d(e)}}}function Je(t){let e,l,a,s,n,i,m,E,g,f=Z(t[0].startTime,t[1])+"",o,B,c,b,v,N,q,L,j,G=Z(t[0].endTime,t[1])+"",C,M,O,X,H=Z(t[0].startTime,t[1])+"",A,R,U,W,I,T,Y,S=Z(t[0].endTime,t[1])+"",ee,P;return s=new je({props:{status:t[0].status,delay:De(t[0].startTime)}}),m=new Se({props:{bottom:!0,copyable:!0,text:t[0].id,$$slots:{default:[Ge]},$$scope:{ctx:t}}}),q=new Se({props:{bottom:!0,copyable:!0,text:t[0].name,$$slots:{default:[He]},$$scope:{ctx:t}}}),{c(){e=p("a"),l=p("div"),a=p("div"),re(s.$$.fragment),n=y(),i=p("div"),re(m.$$.fragment),E=y(),g=p("p"),o=z(f),B=y(),c=p("div"),b=p("h3"),v=z("Workflow Name:"),N=y(),re(q.$$.fragment),L=y(),j=p("p"),C=z(G),M=y(),O=p("div"),X=p("p"),A=z(H),R=y(),U=p("span"),W=z("-"),I=y(),T=p("div"),Y=p("p"),ee=z(S),this.h()},l(h){e=w(h,"A",{href:!0,class:!0});var _=k(e);l=w(_,"DIV",{class:!0});var J=k(l);a=w(J,"DIV",{});var K=k(a);oe(s.$$.fragment,K),K.forEach(d),J.forEach(d),n=D(_),i=w(_,"DIV",{class:!0});var F=k(i);oe(m.$$.fragment,F),E=D(F),g=w(F,"P",{class:!0});var se=k(g);o=V(se,f),se.forEach(d),F.forEach(d),B=D(_),c=w(_,"DIV",{class:!0});var te=k(c);b=w(te,"H3",{class:!0});var pe=k(b);v=V(pe,"Workflow Name:"),pe.forEach(d),N=D(te),oe(q.$$.fragment,te),L=D(te),j=w(te,"P",{class:!0});var we=k(j);C=V(we,G),we.forEach(d),te.forEach(d),M=D(_),O=w(_,"DIV",{class:!0});var ge=k(O);X=w(ge,"P",{});var ke=k(X);A=V(ke,H),ke.forEach(d),ge.forEach(d),R=D(_),U=w(_,"SPAN",{class:!0});var Ee=k(U);W=V(Ee,"-"),Ee.forEach(d),I=D(_),T=w(_,"DIV",{class:!0});var Ie=k(T);Y=w(Ie,"P",{});var Te=k(Y);ee=V(Te,S),Te.forEach(d),Ie.forEach(d),_.forEach(d),this.h()},h(){u(l,"class","cell svelte-3bzomh"),u(g,"class","time-cell-inline svelte-3bzomh"),u(i,"class","cell overflow-cell links font-medium md:font-normal svelte-3bzomh"),u(b,"class","md:hidden"),u(j,"class","time-cell-inline svelte-3bzomh"),u(c,"class","cell links flex gap-2 font-medium md:font-normal svelte-3bzomh"),u(O,"class","time-cell font-normal svelte-3bzomh"),u(U,"class","md:hidden"),u(T,"class","time-cell font-medium md:font-normal svelte-3bzomh"),u(e,"href",t[2]),u(e,"class","row group svelte-3bzomh")},m(h,_){ae(h,e,_),r(e,l),r(l,a),ne(s,a,null),r(e,n),r(e,i),ne(m,i,null),r(i,E),r(i,g),r(g,o),r(e,B),r(e,c),r(c,b),r(b,v),r(c,N),ne(q,c,null),r(c,L),r(c,j),r(j,C),r(e,M),r(e,O),r(O,X),r(X,A),r(e,R),r(e,U),r(U,W),r(e,I),r(e,T),r(T,Y),r(Y,ee),P=!0},p(h,[_]){const J={};_&1&&(J.status=h[0].status),_&1&&(J.delay=De(h[0].startTime)),s.$set(J);const K={};_&1&&(K.text=h[0].id),_&153&&(K.$$scope={dirty:_,ctx:h}),m.$set(K),(!P||_&3)&&f!==(f=Z(h[0].startTime,h[1])+"")&&$(o,f);const F={};_&1&&(F.text=h[0].name),_&177&&(F.$$scope={dirty:_,ctx:h}),q.$set(F),(!P||_&3)&&G!==(G=Z(h[0].endTime,h[1])+"")&&$(C,G),(!P||_&3)&&H!==(H=Z(h[0].startTime,h[1])+"")&&$(A,H),(!P||_&3)&&S!==(S=Z(h[0].endTime,h[1])+"")&&$(ee,S),(!P||_&4)&&u(e,"href",h[2])},i(h){P||(Q(s.$$.fragment,h),Q(m.$$.fragment,h),Q(q.$$.fragment,h),P=!0)},o(h){x(s.$$.fragment,h),x(m.$$.fragment,h),x(q.$$.fragment,h),P=!1},d(h){h&&d(e),ie(s),ie(m),ie(q)}}}function Ke(t,e,l){let a,s,n,i;le(t,me,f=>l(3,s=f)),le(t,he,f=>l(4,n=f)),le(t,ce,f=>l(5,i=f));let{namespace:m}=e,{workflow:E}=e,{timeFormat:g}=e;return t.$$set=f=>{"namespace"in f&&l(6,m=f.namespace),"workflow"in f&&l(0,E=f.workflow),"timeFormat"in f&&l(1,g=f.timeFormat)},t.$$.update=()=>{t.$$.dirty&65&&l(2,a=Le({namespace:m,workflow:E.id,run:E.runId}))},[E,g,a,s,n,i,m]}class nt extends ve{constructor(e){super(),_e(this,e,Ke,Je,be,{namespace:6,workflow:0,timeFormat:1})}}var it=Qe;function Qe(t,e,l,a){var s,n,i;return function(){if(i=this,n=Array.prototype.slice.call(arguments),s&&(l||a))return;if(!l)return g(),s=setTimeout(E,e),s;s=setTimeout(g,e),t.apply(i,n);function E(){g(),t.apply(i,n)}function g(){clearTimeout(s),s=null}}}function ze(t){let e,l;return e=new Me({props:{name:"search",scale:.9,stroke:"gray",class:"ml-4 flex items-center"}}),{c(){re(e.$$.fragment)},l(a){oe(e.$$.fragment,a)},m(a,s){ne(e,a,s),l=!0},i(a){l||(Q(e.$$.fragment,a),l=!0)},o(a){x(e.$$.fragment,a),l=!1},d(a){ie(e,a)}}}function Xe(t){let e;return{c(){e=z(t[2])},l(l){e=V(l,t[2])},m(l,a){ae(l,e,a)},p(l,a){a&4&&$(e,l[2])},d(l){l&&d(e)}}}function Ye(t){let e,l,a,s,n,i,m,E,g,f,o,B,c=t[4]&&ze();return g=new Oe({props:{class:"m-2",$$slots:{default:[Xe]},$$scope:{ctx:t}}}),{c(){e=p("form"),c&&c.c(),l=y(),a=p("label"),s=z(t[2]),n=y(),i=p("input"),m=y(),E=p("div"),re(g.$$.fragment),this.h()},l(b){e=w(b,"FORM",{class:!0});var v=k(e);c&&c.l(v),l=D(v),a=w(v,"LABEL",{for:!0,class:!0});var N=k(a);s=V(N,t[2]),N.forEach(d),n=D(v),i=w(v,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0}),m=D(v),E=w(v,"DIV",{});var q=k(E);oe(g.$$.fragment,q),q.forEach(d),v.forEach(d),this.h()},h(){u(a,"for",t[5]),u(a,"class","hidden"),u(i,"id",t[5]),u(i,"type","text"),u(i,"class","w-full rounded-l-lg px-4 focus:outline-none"),u(i,"name",t[3]),i.value=t[1],u(i,"placeholder",t[0]),u(e,"class","relative flex items-center rounded-lg border-2 transition-colors focus-within:border-blue-700")},m(b,v){ae(b,e,v),c&&c.m(e,null),r(e,l),r(e,a),r(a,s),r(e,n),r(e,i),r(e,m),r(e,E),ne(g,E,null),f=!0,o||(B=[We(i,"input",t[7]),We(e,"submit",Pe(t[6]))],o=!0)},p(b,[v]){b[4]?c?v&16&&Q(c,1):(c=ze(),c.c(),Q(c,1),c.m(e,l)):c&&(Ae(),x(c,1,1,()=>{c=null}),Fe()),(!f||v&4)&&$(s,b[2]),(!f||v&32)&&u(a,"for",b[5]),(!f||v&32)&&u(i,"id",b[5]),(!f||v&8)&&u(i,"name",b[3]),(!f||v&2&&i.value!==b[1])&&(i.value=b[1]),(!f||v&1)&&u(i,"placeholder",b[0]);const N={};v&260&&(N.$$scope={dirty:v,ctx:b}),g.$set(N)},i(b){f||(Q(c),Q(g.$$.fragment,b),f=!0)},o(b){x(c),x(g.$$.fragment,b),f=!1},d(b){b&&d(e),c&&c.d(),ie(g),o=!1,Be(B)}}}function Ze(t,e,l){let{placeholder:a=""}=e,{value:s=""}=e,{label:n="Search"}=e,{name:i="query"}=e,{icon:m=!1}=e,{id:E=`${n.toLocaleUpperCase()}-input`}=e;function g(o){ye.call(this,t,o)}function f(o){ye.call(this,t,o)}return t.$$set=o=>{"placeholder"in o&&l(0,a=o.placeholder),"value"in o&&l(1,s=o.value),"label"in o&&l(2,n=o.label),"name"in o&&l(3,i=o.name),"icon"in o&&l(4,m=o.icon),"id"in o&&l(5,E=o.id)},[a,s,n,i,m,E,g,f]}class ft extends ve{constructor(e){super(),_e(this,e,Ze,Ye,be,{placeholder:0,value:1,label:2,name:3,icon:4,id:5})}}export{ft as S,ot as W,nt as a,it as j};
