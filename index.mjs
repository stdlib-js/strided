// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-object-inverse@v0.2.1-esm/index.mjs";import{enum as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.1-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-promotion-rules@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-safe-casts@v0.2.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@v0.0.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@v0.0.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-wrap-function@v0.2.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtypes2signatures@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-cast-return@esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex128array@esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex64array@esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import{isPrimitive as D}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function-array@v0.2.1-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";function P(r,n){return n>0?0:(1-r)*n}function z(r,n,e,t,i){var a,o,u,s,f,l,d,m,p,c,v;if(!((c=n[0])<=0))for(s=t[0],f=t[1],l=t[2],a=e[0],o=e[1],u=e[2],d=r[0],m=r[1],p=r[2],v=0;v<c;v++)p[l]=i(d[s],m[f]),s+=a,f+=o,l+=u}function L(r,n,e,t,i,a){var o,u,s,f,l,d,m,p,c,v,g,h,y,b;if(!((y=n[0])<=0))for(m=t[0],p=t[1],c=t[2],f=e[0],l=e[1],d=e[2],v=r[0],g=r[1],h=r[2],o=i[0],u=i[1],s=i[2],b=0;b<y;b++)s(h,c,a(o(v,m),u(g,p))),m+=f,p+=l,c+=d}function N(r,n,s,f){var l,d,m,p,c,v;return p=r[0],e(p)&&(l=t(u(p))),c=r[1],e(c)&&(d=t(u(c))),v=r[2],e(v)&&(m=i(u(v))),l||d||m?function(r,n,e,t,i){var a;return L(r,n,e,[P(a=n[0],e[0]),P(a,e[1]),P(a,e[2])],t,i)}(r,n,s,[l=l||a(u(p)),d=d||a(u(c)),m=m||o(u(v))],f):function(r,n,e,t){var i;return z(r,n,e,[P(i=n[0],e[0]),P(i,e[1]),P(i,e[2])],t)}(r,n,s,f)}n(N,"ndarray",(function(r,n,s,f,l){var d,m,p,c,v,g;return c=r[0],e(c)&&(d=t(u(c))),v=r[1],e(v)&&(m=t(u(v))),g=r[2],e(g)&&(p=i(u(g))),d||m||p?L(r,n,s,f,[d=d||a(u(c)),m=m||a(u(v)),p=p||o(u(g))],l):z(r,n,s,f,l)}));var Y=["binary","bool","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function q(){return Y.slice()}var G=d();function H(){return{bool:G.bool,int8:G.int8,uint8:G.uint8,uint8c:G.uint8c,int16:G.int16,uint16:G.uint16,int32:G.int32,uint32:G.uint32,int64:G.int64,uint64:G.uint64,float32:G.float32,float64:G.float64,complex64:G.complex64,complex128:G.complex128,binary:G.binary,generic:G.generic,notype:G.notype,userdefined_type:G.userdefined_type}}n(q,"enum",H),function(n,e){var t,i,a;for(t=m(e),a=0;a<t.length;a++)i=t[a],r(n,i,e[i])}(q,H());var J=l(H(),{duplicates:!1});function K(r){var n=J[r];return"string"==typeof n?n:null}var Q=H();function W(r){var n=Q[r];return"number"==typeof n?n:null}function X(r){var n=typeof r;return"number"===n?K(r)?r:null:"string"===n?W(r):null}function Z(r,n){return new p(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,2*(r.length-n))}function $(r,n){return new c(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,2*(r.length-n))}function rr(r,n){return new v(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,r.length-n)}var nr=X("complex64"),er=X("complex128"),tr=X("bool");function ir(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d,m){var p,c,v;if(!f(i)||!f(u)||!f(d))return n(e,t,i,a,o,u,s,l,d,m),d;if(t=X(t),o=X(o),l=X(l),null===t||null===o||null===l)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");p=t===nr?Z(i,0):t===er?$(i,0):t===tr?rr(i,0):i;c=o===nr?Z(u,0):o===er?$(u,0):o===tr?rr(u,0):u;v=l===nr?Z(d,0):l===er?$(d,0):l===tr?rr(d,0):d;return r(e,t,p,a,o,c,s,l,v,m),d}}function ar(r,n){return new r.constructor(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,r.length-n)}function or(r,n,e){return r>0&&n<0&&(e+=(r-1)*n),e}var ur=X("complex64"),sr=X("complex128"),fr=X("bool");function lr(r){var n=typeof r;return"string"===n?null===W(r)?null:r:"number"===n?K(r):null}function dr(r,n){var e,t,i,a,o,u,s;for(t=r.length,i=n.length,e=[],s=0,o=0;o<t&&!(s>=i);o++)for(a=r[o],u=s;u<i;u++)if(a===n[u]){s=u+1,e.push(a);break}return e}function mr(r){var n,e,t;for(n=[],t=0;t<r.length;t++){if(null===(e=lr(r[t])))return new TypeError(g("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",r[t]));n.push(e)}return n}function pr(r,n){var e;for(e=0;e<r.length;e++)if(r[e]===n)return!0;return!1}n(ir,"ndarray",(function(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d,m,p,c,v){var y,b,w;if(!f(i)||!f(s)||!f(p))return n(e,t,i,a,o,u,s,l,d,m,p,c,v),p;if(t=X(t),u=X(u),m=X(m),null===t||null===u||null===m)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!h(o))throw new TypeError(g("invalid argument. First input array offset must be a nonnegative integer. Value: `%s`.",o));if(!h(d))throw new TypeError(g("invalid argument. Second input array offset must be a nonnegative integer. Value: `%s`.",d));if(!h(v))throw new TypeError(g("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",v));o=or(e,a,o),d=or(e,l,d),v=or(e,c,v),y=t===ur?Z(i,o):t===sr?$(i,o):t===fr?rr(i,o):ar(i,o);b=u===ur?Z(s,d):u===sr?$(s,d):u===fr?rr(s,d):ar(s,d);w=m===ur?Z(p,v):m===sr?$(p,v):m===fr?rr(p,v):ar(p,v);return r(e,t,y,a,u,b,l,m,w,c),p}}));var cr="complex64",vr="complex128",gr={complex64:w,complex128:j};function hr(r,n,e,t){return t===vr?n===cr?e===vr||e===cr?r[vr]:x(r[vr],2,gr[vr]):n===vr&&(e===vr||e===cr)?r[vr]:x(r[vr],2,gr[vr]):t===cr?n===vr?e===cr||e===vr?r[vr]:x(r[vr],2,gr[vr]):n===cr?e===vr?r[vr]:e===cr?r[cr]:x(r[cr],2,gr[cr]):e===vr?x(r[vr],2,gr[vr]):x(r[cr],2,gr[cr]):"generic"===t?n===vr?e===vr||e===cr?r[vr]:x(r[vr],2,gr[vr]):n===cr?e===cr?r[cr]:e===vr?r[vr]:x(r[cr],2,gr[cr]):e===vr?x(r[vr],2,gr[vr]):e===cr?x(r[cr],2,gr[cr]):r.default:r.default}function yr(r,n,e,t,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=t,f=o,l=0;l<r;l++)i.set(u(n.get(s)),f),s+=e,f+=a;return i}function br(r,n,e,t,i,a){return yr(r,n,e,P(r,e),t,i,P(r,i),a)}function wr(r,n,e,t,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=t,f=o,l=0;l<r;l++)i[f]=u(n[s]),s+=e,f+=a;return i}function jr(r,n,e,t,i,a){return wr(r,n,e,P(r,e),t,i,P(r,i),a)}function xr(r,n,e,t,i,a,o,u,s,f,l){var d,m,p,c;if(r<=0)return u;for(d=t,m=o,p=f,c=0;c<r;c++)u[p]=l(n[d],i[m]),d+=e,m+=a,p+=s;return u}function Er(r,n,e,t,i,a,o,u){return xr(r,n,e,P(r,e),t,i,P(r,i),a,o,P(r,o),u)}function Tr(r,n,e,t,i,a,o,u,s,f,l){var d,m,p,c;if(r<=0)return u;for(d=t,m=o,p=f,c=0;c<r;c++)0===i[m]&&(u[p]=l(n[d])),d+=e,m+=a,p+=s;return u}function Vr(r,n,e,t,i,a,o,u){return Tr(r,n,e,P(r,e),t,i,P(r,i),a,o,P(r,o),u)}function Sr(r,n,e,t,i,a,o,u,s,f,l,d,m,p){var c,v,g,h,y;if(r<=0)return l;for(c=t,v=o,g=m,h=f,y=0;y<r;y++)0===u[h]&&(l[g]=p(n[c],i[v])),c+=e,v+=a,g+=d,h+=s;return l}function kr(r,n,e,t,i,a,o,u,s,f){return Sr(r,n,e,P(r,e),t,i,P(r,i),a,o,P(r,o),u,s,P(r,s),f)}function Fr(r,n,e,t,i,a,o,u,s,f){var l,d,m,p;if(r<=0)return i;for(l=t,d=o,p=0;p<r;p++)void 0!==(m=s.call(f,n[l],p,[l,d],[n,i]))&&(i[d]=u(m)),l+=e,d+=a;return i}function Ur(r,n,e,t,i,a,o,u,s,f,l,d){var m,p,c,v;if(r<=0)return a;for(m=t,p=u,v=0;v<r;v++)void 0!==(c=l.call(d,i(n,m),v,[m,p],[n,a]))&&s(a,p,f(c)),m+=e,p+=o;return a}function Or(r,n,s,f,l,d,m,p){var c,v;return e(n)&&(c=t(u(n))),e(f)&&(v=i(u(f))),c||v?function(r,n,e,t,i,a,o,u,s,f){return Ur(r,n,e,P(r,e),t,i,a,P(r,a),o,u,s,f)}(r,n,s,c=c||a(u(n)),f,l,v=v||o(u(f)),d,m,p):function(r,n,e,t,i,a,o,u){return Fr(r,n,e,P(r,e),t,i,P(r,i),a,o,u)}(r,n,s,f,l,d,m,p)}function Br(r,n,e,t,i,a,o,u,s,f,l,d,m){var p,c,v,g,h;if(r<=0)return u;for(c=[t,o,f],v=[n,i,u],p=[0,0],h=0;h<r;h++)p[0]=n[c[0]],p[1]=i[c[1]],void 0!==(g=d.call(m,p,h,c,v))&&(u[c[2]]=l(g[0],g[1])),c[0]+=e,c[1]+=a,c[2]+=s;return u}function Ir(r,n,e,t,i,a,o,u,s,f,l,d,m,p,c,v){var g,h,y,b,w;if(r<=0)return f;for(h=[t,u,d],y=[n,a,f],g=[0,0],w=0;w<r;w++)g[0]=i(n,h[0]),g[1]=s(a,h[1]),void 0!==(b=c.call(v,g,w,h,y))&&m(f,h[2],p(b[0],b[1])),h[0]+=e,h[1]+=o,h[2]+=l;return f}function Rr(r,n,t,i,a,o,u,s,f,l){var d,m,p;return e(n)&&(d=E(k(n))),e(i)&&(m=E(k(i))),e(o)&&(p=T(k(o))),d||m||p?function(r,n,e,t,i,a,o,u,s,f,l,d,m){return Ir(r,n,e,P(r,e),t,i,a,P(r,a),o,u,s,P(r,s),f,l,d,m)}(r,n,t,d=d||V(k(n)),i,a,m=m||V(k(i)),o,u,p=p||S(k(o)),s,f,l):function(r,n,e,t,i,a,o,u,s,f){return Br(r,n,e,P(r,e),t,i,P(r,i),a,o,P(r,o),u,s,f)}(r,n,t,i,a,o,u,s,f,l)}function _r(r,n,e,t,i){var a,o,u,s,f,l,d,m,p,c,v;if(!((c=n[0])<=0))for(s=t[0],f=t[1],l=t[2],a=e[0],o=e[1],u=e[2],d=r[0],m=r[1],p=r[2],v=0;v<c;v++)0===m[f]&&(p[l]=i(d[s])),s+=a,f+=o,l+=u}function Dr(r,n,e,t,i,a){var o,u,s,f,l,d,m,p,c,v,g,h,y,b;if(!((y=n[0])<=0))for(m=t[0],p=t[1],c=t[2],f=e[0],l=e[1],d=e[2],v=r[0],g=r[1],h=r[2],o=i[0],u=i[1],s=i[2],b=0;b<y;b++)0===u(g,p)&&s(h,c,a(o(v,m))),m+=f,p+=l,c+=d}function Mr(r,n,s,f){var l,d,m,p,c,v;return p=r[0],e(p)&&(l=t(u(p))),c=r[1],e(c)&&(d=t(u(c))),v=r[2],e(v)&&(m=i(u(v))),l||d||m?function(r,n,e,t,i){var a;return Dr(r,n,e,[P(a=n[0],e[0]),P(a,e[1]),P(a,e[2])],t,i)}(r,n,s,[l=l||a(u(p)),d=d||a(u(c)),m=m||o(u(v))],f):function(r,n,e,t){var i;return _r(r,n,e,[P(i=n[0],e[0]),P(i,e[1]),P(i,e[2])],t)}(r,n,s,f)}n(br,"ndarray",yr),n(jr,"ndarray",wr),n(Er,"ndarray",xr),n(Vr,"ndarray",Tr),n(kr,"ndarray",Sr),n(Or,"ndarray",(function(r,n,s,f,l,d,m,p,c,v){var g,h;return e(n)&&(g=t(u(n))),e(l)&&(h=i(u(l))),g||h?Ur(r,n,s,f,g=g||a(u(n)),l,d,m,h=h||o(u(l)),p,c,v):Fr(r,n,s,f,l,d,m,p,c,v)})),n(Rr,"ndarray",(function(r,n,e,t,i,a,o,s,f,l,d,m,p){var c,v,g;return F(n)&&(c=E(u(n))),F(i)&&(v=E(u(i))),F(s)&&(g=T(u(s))),c||v||g?Ir(r,n,e,t,c=c||V(u(n)),i,a,o,v=v||V(u(i)),s,f,l,g=g||S(u(s)),d,m,p):Br(r,n,e,t,i,a,o,s,f,l,d,m,p)})),n(Mr,"ndarray",(function(r,n,s,f,l){var d,m,p,c,v,g;return c=r[0],e(c)&&(d=t(u(c))),v=r[1],e(v)&&(m=t(u(v))),g=r[2],e(g)&&(p=i(u(g))),d||m||p?Dr(r,n,s,f,[d=d||a(u(c)),m=m||a(u(v)),p=p||o(u(g))],l):_r(r,n,s,f,l)}));var Ar=X("complex64"),Cr=X("complex128"),Pr=X("bool");function zr(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d,m){var p,c;if(!f(i)||!f(d)||!f(u))return n(e,t,i,a,o,u,s,l,d,m),d;if(t=X(t),l=X(l),o=X(o),null===t||null===l||null===o)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");p=t===Ar?Z(i,0):t===Cr?$(i,0):t===Pr?rr(i,0):i;c=l===Ar?Z(d,0):l===Cr?$(d,0):l===Pr?rr(d,0):d;return r(e,t,p,a,o,u,s,l,c,m),d}}var Lr=X("complex64"),Nr=X("complex128"),Yr=X("bool");function qr(r,n){var e,t,i,a,o,u,s;for(t=r.length,i=n.length,e=[],s=0,o=0;o<t&&!(s>=i);o++)for(a=r[o],u=s;u<i;u++)if(a===n[u]){s=u+1,e.push(a);break}return e}function Gr(r){var n,e,t;for(n=[],t=0;t<r.length;t++){if(null===(e=lr(r[t])))return new TypeError(g("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",r[t]));n.push(e)}return n}n(zr,"ndarray",(function(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d,m,p,c,v){var y,b,w;if(!f(i)||!f(p)||!f(s))return n(e,t,i,a,o,u,s,l,d,m,p,c,v),p;if(t=X(t),m=X(m),u=X(u),null===t||null===m||null===u)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!h(o))throw new TypeError(g("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",o));if(!h(v))throw new TypeError(g("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",v));if(!h(d))throw new TypeError(g("invalid argument. Mask array offset must be a nonnegative integer. Value: `%s`.",d));o=or(e,a,o),v=or(e,c,v),d=or(e,l,d),b=t===Lr?Z(i,o):t===Nr?$(i,o):t===Yr?rr(i,o):ar(i,o);w=m===Lr?Z(p,v):m===Nr?$(p,v):m===Yr?rr(p,v):ar(p,v);return y=ar(s,d),r(e,t,b,a,u,y,l,m,w,c),p}}));var Hr="complex64",Jr="complex128",Kr={complex64:w,complex128:j};function Qr(r,n,e){return e===Jr?n===Hr||n===Jr?r[Jr]:B(r.default,1,Kr[e]):e===Hr?n===Hr?r[Hr]:n===Jr?r[Jr]:B(r.default,1,Kr[e]):"generic"===e?n===Jr?r[Jr]:n===Hr?r[Hr]:r.default:r.default}function Wr(r,n,e,t,i){var a,o,u,s,f;if(!((s=n[0])<=0))for(o=t[0],a=e[0],u=r[0],f=0;f<s;f++)u[o]=i(),o+=a}function Xr(r,n,e,t,i,a){var o,u,s,f,l,d;if(!((l=n[0])<=0))for(s=t[0],u=e[0],f=r[0],o=i[0],d=0;d<l;d++)o(f,s,a()),s+=u}function Zr(r,n,t,a){var s,f;return f=r[0],e(f)&&(s=i(u(f))),s?function(r,n,e,t,i){return Xr(r,n,e,[P(n[0],e[0])],t,i)}(r,n,t,[s=s||o(u(f))],a):function(r,n,e,t){return Wr(r,n,e,[P(n[0],e[0])],t)}(r,n,t,a)}n(Zr,"ndarray",(function(r,n,t,a,s){var f,l;return l=r[0],e(l)&&(f=i(u(l))),f?Xr(r,n,t,a,[f=f||o(u(l))],s):Wr(r,n,t,a,s)}));var $r=X("complex64"),rn=X("complex128"),nn=X("bool");function en(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a){var o;if(!f(i))return n(e,t,i,a),i;if(null===(t=X(t)))throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");o=t===$r?Z(i,0):t===rn?$(i,0):t===nn?rr(i,0):i;return r(e,t,o,a),i}}var tn=X("complex64"),an=X("complex128"),on=X("bool");function un(r,n,e,t,i){var a,o,u,s,f,l,d,m,p,c,v,g,h,y,b,w,j;if(!((w=n[0])<=0))for(l=t[0],d=t[1],m=t[2],p=t[3],c=t[4],a=e[0],o=e[1],u=e[2],s=e[3],f=e[4],v=r[0],g=r[1],h=r[2],y=r[3],b=r[4],j=0;j<w;j++)b[c]=i(v[l],g[d],h[m],y[p]),l+=a,d+=o,m+=u,p+=s,c+=f}function sn(r,n,e,t){var i;return un(r,n,e,[P(i=n[0],e[0]),P(i,e[1]),P(i,e[2]),P(i,e[3]),P(i,e[4])],t)}function fn(r,n,e,t,i){var a,o,u,s,f,l,d,m,p,c,v,g,h,y,b,w,j,x,E,T;if(!((E=n[0])<=0))for(d=t[0],m=t[1],p=t[2],c=t[3],v=t[4],g=t[5],a=e[0],o=e[1],u=e[2],s=e[3],f=e[4],l=e[5],h=r[0],y=r[1],b=r[2],w=r[3],j=r[4],x=r[5],T=0;T<E;T++)x[g]=i(h[d],y[m],b[p],w[c],j[v]),d+=a,m+=o,p+=u,c+=s,v+=f,g+=l}function ln(r,n,e,t){var i;return fn(r,n,e,[P(i=n[0],e[0]),P(i,e[1]),P(i,e[2]),P(i,e[3]),P(i,e[4]),P(i,e[5])],t)}function dn(r,n,e,t,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=t,f=o,l=0;l<r;l++)i[f]=u(n[s]),s+=e,f+=a;return i}function mn(r,n,e,t,i,a){return dn(r,n,e,P(r,e),t,i,P(r,i),a)}function pn(r,n,e,t,i,a,o,u,s,f,l){var d,m,p,c;if(r<=0)return u;for(d=t,m=o,p=f,c=0;c<r;c++)u[p]=l(n[d],i[m]),d+=e,m+=a,p+=s;return u}function cn(r,n,e,t,i,a,o,u){return pn(r,n,e,P(r,e),t,i,P(r,i),a,o,P(r,o),u)}function vn(r,n,e,t,i,a,o,u,s,f,l){var d,m,p,c;if(r<=0)return u;for(d=t,m=o,p=f,c=0;c<r;c++)0===i[m]&&(u[p]=l(n[d])),d+=e,m+=a,p+=s;return u}function gn(r,n,e,t,i,a,o,u){return vn(r,n,e,P(r,e),t,i,P(r,i),a,o,P(r,o),u)}function hn(r,n,e,t,i,a,o,u,s,f,l,d,m,p){var c,v,g,h,y;if(r<=0)return l;for(c=t,v=o,g=m,h=f,y=0;y<r;y++)0===u[h]&&(l[g]=p(n[c],i[v])),c+=e,v+=a,g+=d,h+=s;return l}function yn(r,n,e,t,i,a,o,u,s,f){return hn(r,n,e,P(r,e),t,i,P(r,i),a,o,P(r,o),u,s,P(r,s),f)}function bn(r,n,e,t,i){var a,o,u,s,f,l,d,m,p,c,v,g,h,y;if(!((h=n[0])<=0))for(f=t[0],l=t[1],d=t[2],m=t[3],a=e[0],o=e[1],u=e[2],s=e[3],p=r[0],c=r[1],v=r[2],g=r[3],y=0;y<h;y++)g[m]=i(p[f],c[l],v[d]),f+=a,l+=o,d+=u,m+=s}function wn(r,n,e,t){var i;return bn(r,n,e,[P(i=n[0],e[0]),P(i,e[1]),P(i,e[2]),P(i,e[3])],t)}function jn(r,n,e,t,i){var a,o,u,s,f,l,d,m;if(!((d=n[0])<=0))for(u=t[0],s=t[1],a=e[0],o=e[1],f=r[0],l=r[1],m=0;m<d;m++)l[s]=i(f[u]),u+=a,s+=o}function xn(r,n,e,t,i,a){var o,u,s,f,l,d,m,p,c,v;if(!((c=n[0])<=0))for(l=t[0],d=t[1],s=e[0],f=e[1],m=r[0],p=r[1],o=i[0],u=i[1],v=0;v<c;v++)u(p,d,a(o(m,l))),l+=s,d+=f}function En(r,n,s,f){var l,d,m,p;return m=r[0],e(m)&&(l=t(u(m))),p=r[1],e(p)&&(d=i(u(p))),l||d?function(r,n,e,t,i){var a;return xn(r,n,e,[P(a=n[0],e[0]),P(a,e[1])],t,i)}(r,n,s,[l=l||a(u(m)),d=d||o(u(p))],f):function(r,n,e,t){var i;return jn(r,n,e,[P(i=n[0],e[0]),P(i,e[1])],t)}(r,n,s,f)}n(en,"ndarray",(function(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o){var u;if(!f(i))return n(e,t,i,a,o),i;if(null===(t=X(t)))throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!h(o))throw new TypeError(g("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",o));o=or(e,a,o),u=t===tn?Z(i,o):t===an?$(i,o):t===on?rr(i,o):ar(i,o);return r(e,t,u,a),i}})),n(sn,"ndarray",un),n(ln,"ndarray",fn),n(mn,"ndarray",dn),n(cn,"ndarray",pn),n(gn,"ndarray",vn),n(yn,"ndarray",hn),n(wn,"ndarray",bn),n(En,"ndarray",(function(r,n,s,f,l){var d,m,p,c;return p=r[0],e(p)&&(d=t(u(p))),c=r[1],e(c)&&(m=i(u(c))),d||m?xn(r,n,s,f,[d=d||a(u(p)),m=m||o(u(c))],l):jn(r,n,s,f,l)}));var Tn=X("complex64"),Vn=X("complex128"),Sn=X("bool");function kn(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s){var l,d;if(!f(i)||!f(u))return n(e,t,i,a,o,u,s),u;if(t=X(t),o=X(o),null===t||null===o)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");l=t===Tn?Z(i,0):t===Vn?$(i,0):t===Sn?rr(i,0):i;d=o===Tn?Z(u,0):o===Vn?$(u,0):o===Sn?rr(u,0):u;return r(e,t,l,a,o,d,s),u}}var Fn=X("complex64"),Un=X("complex128"),On=X("bool");function Bn(r,n,e,t,i,a,o){var u,s,f,l,d,m,p,c,v;if(!((p=n[0])<=0))for(f=t[0],l=t[1],u=e[0],s=e[1],d=r[0],m=r[1],v=0;v<p;v++)void 0!==(c=a.call(o,d[f],v,[f,l],[d,m]))&&(m[l]=i(c)),f+=u,l+=s}function In(r,n,e,t,i,a,o,u){var s,f,l,d,m,p,c,v,g,h,y;if(!((g=n[0])<=0))for(m=t[0],p=t[1],l=e[0],d=e[1],c=r[0],v=r[1],s=i[0],f=i[1],y=0;y<g;y++)void 0!==(h=o.call(u,s(c,m),y,[m,p],[c,v]))&&f(v,p,a(h)),m+=l,p+=d}function Rn(r,n,s,f,l){var d,m,p,c,v;return arguments.length>5&&(d=arguments[5]),c=r[0],e(c)&&(m=t(u(c))),v=r[1],e(v)&&(p=i(u(v))),m||p?function(r,n,e,t,i,a,o){var u;return In(r,n,e,[P(u=n[0],e[0]),P(u,e[1])],t,i,a,o)}(r,n,s,[m=m||a(u(c)),p=p||o(u(v))],f,l,d):function(r,n,e,t,i,a){var o;return Bn(r,n,e,[P(o=n[0],e[0]),P(o,e[1])],t,i,a)}(r,n,s,f,l,d)}function _n(r,n){var e,t,i,a,o,u,s;for(t=r.length,i=n.length,e=[],s=0,o=0;o<t&&!(s>=i);o++)for(a=r[o],u=s;u<i;u++)if(a===n[u]){s=u+1,e.push(a);break}return e}function Dn(r){var n,e,t;for(n=[],t=0;t<r.length;t++){if(null===(e=lr(r[t])))return new TypeError(g("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",r[t]));n.push(e)}return n}n(kn,"ndarray",(function(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d){var m,p;if(!f(i)||!f(s))return n(e,t,i,a,o,u,s,l,d),s;if(t=X(t),u=X(u),null===t||null===u)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!h(o))throw new TypeError(g("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",o));if(!h(d))throw new TypeError(g("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",d));o=or(e,a,o),d=or(e,l,d),m=t===Fn?Z(i,o):t===Un?$(i,o):t===On?rr(i,o):ar(i,o);p=u===Fn?Z(s,d):u===Un?$(s,d):u===On?rr(s,d):ar(s,d);return r(e,t,m,a,u,p,l),s}})),n(Rn,"ndarray",(function(r,n,s,f,l,d){var m,p,c,v,g;return arguments.length>6&&(m=arguments[6]),v=r[0],e(v)&&(p=t(u(v))),g=r[1],e(g)&&(c=i(u(g))),p||c?In(r,n,s,f,[p=p||a(u(v)),c=c||o(u(g))],l,d,m):Bn(r,n,s,f,l,d,m)}));var Mn="complex64",An="complex128",Cn={complex64:w,complex128:j};function Pn(r,n,e){return e===An?n===Mn||n===An?r[An]:B(r.default,1,Cn[e]):e===Mn?n===Mn?r[Mn]:n===An?r[An]:B(r.default,1,Cn[e]):"generic"===e?n===An?r[An]:n===Mn?r[Mn]:r.default:r.default}function zn(r,n,e,t,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=t,f=o,l=0;l<r;l++)i.set(u(n.get(s)),f),s+=e,f+=a;return i}function Ln(r,n,e,t,i,a){return zn(r,n,e,P(r,e),t,i,P(r,i),a)}n(Ln,"ndarray",zn);var Nn={};function Yn(r,n,e,t,i,a){var o,u,f,l,d,m;if(s(r))m=r;else if(!M(r))throw new TypeError(g("invalid argument. First argument must be either a function or an array of functions. Value: `%s`.",r));if(!A(n))throw new TypeError(g("invalid argument. Second argument must be an array-like object. Value: `%s`.",n));if(!A(e)&&null!==e)throw new TypeError(g("invalid argument. Third argument must be an array-like object or null. Value: `%s`.",e));if(!_(t))throw new TypeError(g("invalid argument. Fourth argument must be a positive integer. Value: `%s`.",t));if(!h(i))throw new TypeError(g("invalid argument. Fifth argument must be a nonnegative integer. Value: `%s`.",i));if(!h(a))throw new TypeError(g("invalid argument. Sixth argument must be a nonnegative integer. Value: `%s`.",a));if(0===(f=i+a))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(m){if(l=n.length/f,!D(l))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(l=r.length,n.length!==l*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(e&&e.length!==l)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===t)u=!1;else{if(4*f+1!==t)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");u=!0}return d=i*(o=u?4:3)+1,function(){var s,p,c,v,y,b,w,j,x,E,T,V;if(b=arguments.length,b!==t){if(b<t)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(j=arguments[0],!D(j))throw new TypeError(g("invalid argument. First argument must be an integer. Value: `%s`.",j));for(y=[j],v=[],T=1;T<t;T+=o)v.push(arguments[T]);for(s=[],T=3;T<t;T+=o){if(!D(x=arguments[T]))throw T<d?new TypeError(g("invalid argument. Input array stride must be an integer. Value: `%s`.",x)):new TypeError(g("invalid argument. Output array stride must be an integer. Value: `%s`.",x));s.push(x)}if(u)for(p=[],T=4;T<t;T+=o){if(!h(x=arguments[T]))throw T<d?new TypeError(g("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",x)):new TypeError(g("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",x));p.push(x)}for(c=[],T=2;T<t;T+=o){if(!A(x=arguments[T]))throw T<d?new TypeError(g("invalid argument. Input array must be an array-like object. Value: `%s`.",x)):new TypeError(g("invalid argument. Output array must be an array-like object. Value: `%s`.",x));if(V=(T-2)/o,u){if(w=p[V]+(j-1)*s[V],j>0&&(w<0||w>=x.length))throw T<d?new RangeError("invalid argument. Input array has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array has insufficient elements based on the associated stride and the number of indexed elements.")}else if((j-1)*C(s[V])>=x.length)throw T<d?new RangeError("invalid argument. Input array has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array has insufficient elements based on the associated stride and the number of indexed elements.");c.push(x)}if(w=function(r,n,e,t,i,a,o,u,s){var f,l,d,m;for(f=a,d=0;d<r;d++){for(l=s,m=0;m<n&&e[f+m*i]===o[l];m++)l+=u;if(m===n)return d;f+=t}return-1}(l,f,n,f,1,0,v,1,0),w<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");E=m||r[w];e?u?E(c,y,s,p,e[w]):E(c,y,s,e[w]):u?E(c,y,s,p):E(c,y,s);if(1===a)return c[f-1];if(0===a)return;return c.slice(i)}}r(Nn,"binary",N),r(Nn,"binaryAddonDispatch",ir),r(Nn,"binaryDtypeSignatures",(function(r,n,e,t){var i,a,o,u,s,f,l,d,m,p,c,v,g,h,w,j,x;if(o=arguments.length>3?t:{},(f=mr(r))instanceof Error)throw f;if(n===r)l=f;else if((l=mr(n))instanceof Error)throw l;if(e===r)d=f;else if(e===n)d=l;else if((d=mr(e))instanceof Error)throw d;for(d.sort(),i={},g=f.length,h=l.length,s=[],w=0;w<g;w++)for(m=f[w],j=0;j<h;j++)if(p=l[j],-1!==(c=y(m,p))&&null!==c)for(pr(d,c)&&s.push(m,p,c),void 0===(a=i[c])&&(a=dr(d,(a=b(c)).sort()),i[c]=a),x=0;x<a.length;x++)(v=a[x])!==c&&s.push(m,p,v);if(o.enums){for(u=[],w=0;w<s.length;w++)u.push(X(s[w]));s=u}return s})),r(Nn,"binarySignatureCallbacks",(function(r,n){var e,t,i,a,o;for(e=[],o=0;o<n.length;o+=3)t=lr(n[o]),i=lr(n[o+1]),a=lr(n[o+2]),e.push(hr(r,t,i,a));return e})),r(Nn,"cmap",br),r(Nn,"dmap",jr),r(Nn,"dmap2",Er),r(Nn,"dmskmap",Vr),r(Nn,"dmskmap2",kr),r(Nn,"dtypeEnum2Str",K),r(Nn,"dtypeResolveEnum",X),r(Nn,"dtypeResolveStr",lr),r(Nn,"dtypeStr2Enum",W),r(Nn,"mapBy",Or),r(Nn,"mapBy2",Rr),r(Nn,"maxViewBufferIndex",(function(r,n,e){return r>0&&n>0&&(e+=(r-1)*n),e})),r(Nn,"metaDataProps",(function(r,e,t,i){return n(t,"nargs",i?r.nargs+r.nin+r.nout:r.nargs),n(t,"nin",r.nin),n(t,"nout",r.nout),U(t,"types",(function(){return O(e,r.nin,r.nout)})),t})),r(Nn,"minViewBufferIndex",or),r(Nn,"mskunary",Mr),r(Nn,"mskunaryAddonDispatch",zr),r(Nn,"mskunaryDtypeSignatures",(function(r,n,e){var t,i,a,o,u,s,f,l,d,m;if(i=arguments.length>2?e:{},(u=Gr(r))instanceof Error)throw u;if(n===r)s=u;else if((s=Gr(n))instanceof Error)throw s;for(s.sort(),l=u.length,o=[],d=0;d<l;d++)if(f=u[d],null!==(t=b(f)))for(t=qr(s,t.sort()),m=0;m<t.length;m++)o.push(f,"uint8",t[m]);if(i.enums){for(a=[],d=0;d<o.length;d++)a.push(X(o[d]));o=a}return o})),r(Nn,"mskunarySignatureCallbacks",(function(r,n){var e,t,i,a;for(e=[],a=0;a<n.length;a+=3)t=lr(n[a]),i=lr(n[a+2]),e.push(Qr(r,t,i));return e})),r(Nn,"nullary",Zr),r(Nn,"nullaryAddonDispatch",en),r(Nn,"offsetView",ar),r(Nn,"quaternary",sn),r(Nn,"quinary",ln),r(Nn,"reinterpretBoolean",rr),r(Nn,"reinterpretComplex",(function(r,n){if(I(r))return $(r,n);if(R(r))return Z(r,n);throw new TypeError(g("invalid argument. First argument must be a complex-valued floating-point array. Value: `%s`.",r))})),r(Nn,"reinterpretComplex64",Z),r(Nn,"reinterpretComplex128",$),r(Nn,"smap",mn),r(Nn,"smap2",cn),r(Nn,"smskmap",gn),r(Nn,"smskmap2",yn),r(Nn,"stride2offset",P),r(Nn,"ternary",wn),r(Nn,"unary",En),r(Nn,"unaryAddonDispatch",kn),r(Nn,"unaryBy",Rn),r(Nn,"unaryDtypeSignatures",(function(r,n,e){var t,i,a,o,u,s,f,l,d,m;if(i=arguments.length>2?e:{},(u=Dn(r))instanceof Error)throw u;if(n===r)s=u;else if((s=Dn(n))instanceof Error)throw s;for(s.sort(),l=u.length,o=[],d=0;d<l;d++)if(f=u[d],null!==(t=b(f)))for(t=_n(s,t.sort()),m=0;m<t.length;m++)o.push(f,t[m]);if(i.enums){for(a=[],d=0;d<o.length;d++)a.push(X(o[d]));o=a}return o})),r(Nn,"unarySignatureCallbacks",(function(r,n){var e,t,i,a;for(e=[],a=0;a<n.length;a+=2)t=lr(n[a]),i=lr(n[a+1]),e.push(Pn(r,t,i));return e})),r(Nn,"zmap",Ln);var qn={};r(qn,"base",Nn),r(qn,"dispatch",Yn),r(qn,"dtypes",q);export{Nn as base,qn as default,Yn as dispatch,q as dtypes};
//# sourceMappingURL=index.mjs.map
