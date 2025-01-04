// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.3.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-object-inverse@v0.2.2-esm/index.mjs";import{enum as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@v0.3.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.2-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.2-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-promotion-rules@v0.3.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-safe-casts@v0.3.0-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@v0.0.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@v0.0.3-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-wrap-function@v0.2.2-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtypes2signatures@v0.2.2-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-safe-casts@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-cast-return@esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex128array@v0.2.2-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex64array@v0.2.2-esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-booleanarray@v0.0.2-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-bytes-per-element@v0.2.2-esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import{isPrimitive as M}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function-array@v0.2.2-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function z(r,n){return n>0?0:(1-r)*n}function L(r,n,t,e,i){var a,o,u,s,f,l,d,m,c,p,v;if(!((p=n[0])<=0))for(s=e[0],f=e[1],l=e[2],a=t[0],o=t[1],u=t[2],d=r[0],m=r[1],c=r[2],v=0;v<p;v++)c[l]=i(d[s],m[f]),s+=a,f+=o,l+=u}function N(r,n,t,e,i,a){var o,u,s,f,l,d,m,c,p,v,g,h,y,b;if(!((y=n[0])<=0))for(m=e[0],c=e[1],p=e[2],f=t[0],l=t[1],d=t[2],v=r[0],g=r[1],h=r[2],o=i[0],u=i[1],s=i[2],b=0;b<y;b++)s(h,p,a(o(v,m),u(g,c))),m+=f,c+=l,p+=d}function Y(r,n,s,f){var l,d,m,c,p,v;return c=r[0],t(c)&&(l=e(u(c))),p=r[1],t(p)&&(d=e(u(p))),v=r[2],t(v)&&(m=i(u(v))),l||d||m?function(r,n,t,e,i){var a;return N(r,n,t,[z(a=n[0],t[0]),z(a,t[1]),z(a,t[2])],e,i)}(r,n,s,[l=l||a(u(c)),d=d||a(u(p)),m=m||o(u(v))],f):function(r,n,t,e){var i;return L(r,n,t,[z(i=n[0],t[0]),z(i,t[1]),z(i,t[2])],e)}(r,n,s,f)}n(Y,"ndarray",(function(r,n,s,f,l){var d,m,c,p,v,g;return p=r[0],t(p)&&(d=e(u(p))),v=r[1],t(v)&&(m=e(u(v))),g=r[2],t(g)&&(c=i(u(g))),d||m||c?N(r,n,s,f,[d=d||a(u(p)),m=m||a(u(v)),c=c||o(u(g))],l):L(r,n,s,f,l)}));var q=["binary","bool","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function G(){return q.slice()}var H=d();function J(){return{bool:H.bool,int8:H.int8,uint8:H.uint8,uint8c:H.uint8c,int16:H.int16,uint16:H.uint16,int32:H.int32,uint32:H.uint32,int64:H.int64,uint64:H.uint64,float32:H.float32,float64:H.float64,complex64:H.complex64,complex128:H.complex128,binary:H.binary,generic:H.generic,notype:H.notype,userdefined_type:H.userdefined_type}}n(G,"enum",J),function(n,t){var e,i,a;for(e=m(t),a=0;a<e.length;a++)i=e[a],r(n,i,t[i])}(G,J());var K=l(J(),{duplicates:!1});function Q(r){var n=K[r];return"string"==typeof n?n:null}var W=J();function X(r){var n=W[r];return"number"==typeof n?n:null}function Z(r){var n=typeof r;return"number"===n?Q(r)?r:null:"string"===n?X(r):null}function $(r,n){return new c(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,2*(r.length-n))}function rr(r,n){return new p(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,2*(r.length-n))}function nr(r,n){return new v(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,r.length-n)}var tr=Z("complex64"),er=Z("complex128"),ir=Z("bool");function ar(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(t,e,i,a,o,u,s,l,d,m){var c,p,v;if(!f(i)||!f(u)||!f(d))return n(t,e,i,a,o,u,s,l,d,m),d;if(e=Z(e),o=Z(o),l=Z(l),null===e||null===o||null===l)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");c=e===tr?$(i,0):e===er?rr(i,0):e===ir?nr(i,0):i;p=o===tr?$(u,0):o===er?rr(u,0):o===ir?nr(u,0):u;v=l===tr?$(d,0):l===er?rr(d,0):l===ir?nr(d,0):d;return r(t,e,c,a,o,p,s,l,v,m),d}}function or(r,n){return new r.constructor(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,r.length-n)}function ur(r,n,t){return r>0&&n<0&&(t+=(r-1)*n),t}var sr=Z("complex64"),fr=Z("complex128"),lr=Z("bool");function dr(r){var n=typeof r;return"string"===n?null===X(r)?null:r:"number"===n?Q(r):null}function mr(r,n){var t,e,i,a,o,u,s;for(e=r.length,i=n.length,t=[],s=0,o=0;o<e&&!(s>=i);o++)for(a=r[o],u=s;u<i;u++)if(a===n[u]){s=u+1,t.push(a);break}return t}function cr(r){var n,t,e;for(n=[],e=0;e<r.length;e++){if(null===(t=dr(r[e])))return new TypeError(g("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",r[e]));n.push(t)}return n}function pr(r,n){var t;for(t=0;t<r.length;t++)if(r[t]===n)return!0;return!1}n(ar,"ndarray",(function(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(t,e,i,a,o,u,s,l,d,m,c,p,v){var y,b,w;if(!f(i)||!f(s)||!f(c))return n(t,e,i,a,o,u,s,l,d,m,c,p,v),c;if(e=Z(e),u=Z(u),m=Z(m),null===e||null===u||null===m)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!h(o))throw new TypeError(g("invalid argument. First input array offset must be a nonnegative integer. Value: `%s`.",o));if(!h(d))throw new TypeError(g("invalid argument. Second input array offset must be a nonnegative integer. Value: `%s`.",d));if(!h(v))throw new TypeError(g("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",v));o=ur(t,a,o),d=ur(t,l,d),v=ur(t,p,v),y=e===sr?$(i,o):e===fr?rr(i,o):e===lr?nr(i,o):or(i,o);b=u===sr?$(s,d):u===fr?rr(s,d):u===lr?nr(s,d):or(s,d);w=m===sr?$(c,v):m===fr?rr(c,v):m===lr?nr(c,v):or(c,v);return r(t,e,y,a,u,b,l,m,w,p),c}}));var vr="complex64",gr="complex128",hr={complex64:w,complex128:j};function yr(r,n,t,e){return e===gr?n===vr?t===gr||t===vr?r[gr]:x(r[gr],2,hr[gr]):n===gr&&(t===gr||t===vr)?r[gr]:x(r[gr],2,hr[gr]):e===vr?n===gr?t===vr||t===gr?r[gr]:x(r[gr],2,hr[gr]):n===vr?t===gr?r[gr]:t===vr?r[vr]:x(r[vr],2,hr[vr]):t===gr?x(r[gr],2,hr[gr]):x(r[vr],2,hr[vr]):"generic"===e?n===gr?t===gr||t===vr?r[gr]:x(r[gr],2,hr[gr]):n===vr?t===vr?r[vr]:t===gr?r[gr]:x(r[vr],2,hr[vr]):t===gr?x(r[gr],2,hr[gr]):t===vr?x(r[vr],2,hr[vr]):r.default:r.default}function br(r,n,t,e,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=e,f=o,l=0;l<r;l++)i.set(u(n.get(s)),f),s+=t,f+=a;return i}function wr(r,n,t,e,i,a){return br(r,n,t,z(r,t),e,i,z(r,i),a)}function jr(r,n,t,e,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=e,f=o,l=0;l<r;l++)i[f]=u(n[s]),s+=t,f+=a;return i}function xr(r,n,t,e,i,a){return jr(r,n,t,z(r,t),e,i,z(r,i),a)}function Er(r,n,t,e,i,a,o,u,s,f,l){var d,m,c,p;if(r<=0)return u;for(d=e,m=o,c=f,p=0;p<r;p++)u[c]=l(n[d],i[m]),d+=t,m+=a,c+=s;return u}function Tr(r,n,t,e,i,a,o,u){return Er(r,n,t,z(r,t),e,i,z(r,i),a,o,z(r,o),u)}function Vr(r,n,t,e,i,a,o,u,s,f,l){var d,m,c,p;if(r<=0)return u;for(d=e,m=o,c=f,p=0;p<r;p++)0===i[m]&&(u[c]=l(n[d])),d+=t,m+=a,c+=s;return u}function Sr(r,n,t,e,i,a,o,u){return Vr(r,n,t,z(r,t),e,i,z(r,i),a,o,z(r,o),u)}function kr(r,n,t,e,i,a,o,u,s,f,l,d,m,c){var p,v,g,h,y;if(r<=0)return l;for(p=e,v=o,g=m,h=f,y=0;y<r;y++)0===u[h]&&(l[g]=c(n[p],i[v])),p+=t,v+=a,g+=d,h+=s;return l}function Ur(r,n,t,e,i,a,o,u,s,f){return kr(r,n,t,z(r,t),e,i,z(r,i),a,o,z(r,o),u,s,z(r,s),f)}function Fr(r,n,t,e,i,a,o,u,s,f){var l,d,m,c;if(r<=0)return i;for(l=e,d=o,c=0;c<r;c++)void 0!==(m=s.call(f,n[l],c,[l,d],[n,i]))&&(i[d]=u(m)),l+=t,d+=a;return i}function Ir(r,n,t,e,i,a,o,u,s,f,l,d){var m,c,p,v;if(r<=0)return a;for(m=e,c=u,v=0;v<r;v++)void 0!==(p=l.call(d,i(n,m),v,[m,c],[n,a]))&&s(a,c,f(p)),m+=t,c+=o;return a}function Br(r,n,s,f,l,d,m,c){var p,v;return t(n)&&(p=e(u(n))),t(f)&&(v=i(u(f))),p||v?function(r,n,t,e,i,a,o,u,s,f){return Ir(r,n,t,z(r,t),e,i,a,z(r,a),o,u,s,f)}(r,n,s,p=p||a(u(n)),f,l,v=v||o(u(f)),d,m,c):function(r,n,t,e,i,a,o,u){return Fr(r,n,t,z(r,t),e,i,z(r,i),a,o,u)}(r,n,s,f,l,d,m,c)}function Or(r,n,t,e,i,a,o,u,s,f,l,d,m){var c,p,v,g,h;if(r<=0)return u;for(p=[e,o,f],v=[n,i,u],c=[0,0],h=0;h<r;h++)c[0]=n[p[0]],c[1]=i[p[1]],void 0!==(g=d.call(m,c,h,p,v))&&(u[p[2]]=l(g[0],g[1])),p[0]+=t,p[1]+=a,p[2]+=s;return u}function Dr(r,n,t,e,i,a,o,u,s,f,l,d,m,c,p,v){var g,h,y,b,w;if(r<=0)return f;for(h=[e,u,d],y=[n,a,f],g=[0,0],w=0;w<r;w++)g[0]=i(n,h[0]),g[1]=s(a,h[1]),void 0!==(b=p.call(v,g,w,h,y))&&m(f,h[2],c(b[0],b[1])),h[0]+=t,h[1]+=o,h[2]+=l;return f}function Rr(r,n,s,f,l,d,m,c,p,v){var g,h,y;return t(n)&&(g=e(u(n))),t(f)&&(h=e(u(f))),t(d)&&(y=i(u(d))),g||h||y?function(r,n,t,e,i,a,o,u,s,f,l,d,m){return Dr(r,n,t,z(r,t),e,i,a,z(r,a),o,u,s,z(r,s),f,l,d,m)}(r,n,s,g=g||a(u(n)),f,l,h=h||a(u(f)),d,m,y=y||o(u(d)),c,p,v):function(r,n,t,e,i,a,o,u,s,f){return Or(r,n,t,z(r,t),e,i,z(r,i),a,o,z(r,o),u,s,f)}(r,n,s,f,l,d,m,c,p,v)}function _r(r,n,t,e,i){var a,o,u,s,f,l,d,m,c,p,v;if(!((p=n[0])<=0))for(s=e[0],f=e[1],l=e[2],a=t[0],o=t[1],u=t[2],d=r[0],m=r[1],c=r[2],v=0;v<p;v++)0===m[f]&&(c[l]=i(d[s])),s+=a,f+=o,l+=u}function Mr(r,n,t,e,i,a){var o,u,s,f,l,d,m,c,p,v,g,h,y,b;if(!((y=n[0])<=0))for(m=e[0],c=e[1],p=e[2],f=t[0],l=t[1],d=t[2],v=r[0],g=r[1],h=r[2],o=i[0],u=i[1],s=i[2],b=0;b<y;b++)0===u(g,c)&&s(h,p,a(o(v,m))),m+=f,c+=l,p+=d}function Pr(r,n,s,f){var l,d,m,c,p,v;return c=r[0],t(c)&&(l=e(u(c))),p=r[1],t(p)&&(d=e(u(p))),v=r[2],t(v)&&(m=i(u(v))),l||d||m?function(r,n,t,e,i){var a;return Mr(r,n,t,[z(a=n[0],t[0]),z(a,t[1]),z(a,t[2])],e,i)}(r,n,s,[l=l||a(u(c)),d=d||a(u(p)),m=m||o(u(v))],f):function(r,n,t,e){var i;return _r(r,n,t,[z(i=n[0],t[0]),z(i,t[1]),z(i,t[2])],e)}(r,n,s,f)}n(wr,"ndarray",br),n(xr,"ndarray",jr),n(Tr,"ndarray",Er),n(Sr,"ndarray",Vr),n(Ur,"ndarray",kr),n(Br,"ndarray",(function(r,n,s,f,l,d,m,c,p,v){var g,h;return t(n)&&(g=e(u(n))),t(l)&&(h=i(u(l))),g||h?Ir(r,n,s,f,g=g||a(u(n)),l,d,m,h=h||o(u(l)),c,p,v):Fr(r,n,s,f,l,d,m,c,p,v)})),n(Rr,"ndarray",(function(r,n,s,f,l,d,m,c,p,v,g,h,y){var b,w,j;return t(n)&&(b=e(u(n))),t(l)&&(w=e(u(l))),t(c)&&(j=i(u(c))),b||w||j?Dr(r,n,s,f,b=b||a(u(n)),l,d,m,w=w||a(u(l)),c,p,v,j=j||o(u(c)),g,h,y):Or(r,n,s,f,l,d,m,c,p,v,g,h,y)})),n(Pr,"ndarray",(function(r,n,s,f,l){var d,m,c,p,v,g;return p=r[0],t(p)&&(d=e(u(p))),v=r[1],t(v)&&(m=e(u(v))),g=r[2],t(g)&&(c=i(u(g))),d||m||c?Mr(r,n,s,f,[d=d||a(u(p)),m=m||a(u(v)),c=c||o(u(g))],l):_r(r,n,s,f,l)}));var Ar=Z("complex64"),Cr=Z("complex128"),zr=Z("bool");function Lr(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(t,e,i,a,o,u,s,l,d,m){var c,p;if(!f(i)||!f(d)||!f(u))return n(t,e,i,a,o,u,s,l,d,m),d;if(e=Z(e),l=Z(l),o=Z(o),null===e||null===l||null===o)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");c=e===Ar?$(i,0):e===Cr?rr(i,0):e===zr?nr(i,0):i;p=l===Ar?$(d,0):l===Cr?rr(d,0):l===zr?nr(d,0):d;return r(t,e,c,a,o,u,s,l,p,m),d}}var Nr=Z("complex64"),Yr=Z("complex128"),qr=Z("bool");function Gr(r,n){var t,e,i,a,o,u,s;for(e=r.length,i=n.length,t=[],s=0,o=0;o<e&&!(s>=i);o++)for(a=r[o],u=s;u<i;u++)if(a===n[u]){s=u+1,t.push(a);break}return t}function Hr(r){var n,t,e;for(n=[],e=0;e<r.length;e++){if(null===(t=dr(r[e])))return new TypeError(g("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",r[e]));n.push(t)}return n}n(Lr,"ndarray",(function(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(t,e,i,a,o,u,s,l,d,m,c,p,v){var y,b,w;if(!f(i)||!f(c)||!f(s))return n(t,e,i,a,o,u,s,l,d,m,c,p,v),c;if(e=Z(e),m=Z(m),u=Z(u),null===e||null===m||null===u)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!h(o))throw new TypeError(g("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",o));if(!h(v))throw new TypeError(g("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",v));if(!h(d))throw new TypeError(g("invalid argument. Mask array offset must be a nonnegative integer. Value: `%s`.",d));o=ur(t,a,o),v=ur(t,p,v),d=ur(t,l,d),b=e===Nr?$(i,o):e===Yr?rr(i,o):e===qr?nr(i,o):or(i,o);w=m===Nr?$(c,v):m===Yr?rr(c,v):m===qr?nr(c,v):or(c,v);return y=or(s,d),r(t,e,b,a,u,y,l,m,w,p),c}}));var Jr="complex64",Kr="complex128",Qr={complex64:S,complex128:k};function Wr(r,n,t){return t===Kr?n===Jr||n===Kr?r[Kr]:U(r.default,1,Qr[t]):t===Jr?n===Jr?r[Jr]:n===Kr?r[Kr]:U(r.default,1,Qr[t]):"generic"===t?n===Kr?r[Kr]:n===Jr?r[Jr]:r.default:r.default}function Xr(r,n,t,e,i){var a,o,u,s,f;if(!((s=n[0])<=0))for(o=e[0],a=t[0],u=r[0],f=0;f<s;f++)u[o]=i(),o+=a}function Zr(r,n,t,e,i,a){var o,u,s,f,l,d;if(!((l=n[0])<=0))for(s=e[0],u=t[0],f=r[0],o=i[0],d=0;d<l;d++)o(f,s,a()),s+=u}function $r(r,n,e,a){var s,f;return f=r[0],t(f)&&(s=i(u(f))),s?function(r,n,t,e,i){return Zr(r,n,t,[z(n[0],t[0])],e,i)}(r,n,e,[s=s||o(u(f))],a):function(r,n,t,e){return Xr(r,n,t,[z(n[0],t[0])],e)}(r,n,e,a)}n($r,"ndarray",(function(r,n,e,a,s){var f,l;return l=r[0],t(l)&&(f=i(u(l))),f?Zr(r,n,e,a,[f=f||o(u(l))],s):Xr(r,n,e,a,s)}));var rn=Z("complex64"),nn=Z("complex128"),tn=Z("bool");function en(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(t,e,i,a){var o;if(!f(i))return n(t,e,i,a),i;if(null===(e=Z(e)))throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");o=e===rn?$(i,0):e===nn?rr(i,0):e===tn?nr(i,0):i;return r(t,e,o,a),i}}var an=Z("complex64"),on=Z("complex128"),un=Z("bool");function sn(r,n,t,e,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y,b,w,j;if(!((w=n[0])<=0))for(l=e[0],d=e[1],m=e[2],c=e[3],p=e[4],a=t[0],o=t[1],u=t[2],s=t[3],f=t[4],v=r[0],g=r[1],h=r[2],y=r[3],b=r[4],j=0;j<w;j++)b[p]=i(v[l],g[d],h[m],y[c]),l+=a,d+=o,m+=u,c+=s,p+=f}function fn(r,n,t,e){var i;return sn(r,n,t,[z(i=n[0],t[0]),z(i,t[1]),z(i,t[2]),z(i,t[3]),z(i,t[4])],e)}function ln(r,n,t,e,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y,b,w,j,x,E,T;if(!((E=n[0])<=0))for(d=e[0],m=e[1],c=e[2],p=e[3],v=e[4],g=e[5],a=t[0],o=t[1],u=t[2],s=t[3],f=t[4],l=t[5],h=r[0],y=r[1],b=r[2],w=r[3],j=r[4],x=r[5],T=0;T<E;T++)x[g]=i(h[d],y[m],b[c],w[p],j[v]),d+=a,m+=o,c+=u,p+=s,v+=f,g+=l}function dn(r,n,t,e){var i;return ln(r,n,t,[z(i=n[0],t[0]),z(i,t[1]),z(i,t[2]),z(i,t[3]),z(i,t[4]),z(i,t[5])],e)}n(en,"ndarray",(function(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(t,e,i,a,o){var u;if(!f(i))return n(t,e,i,a,o),i;if(null===(e=Z(e)))throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!h(o))throw new TypeError(g("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",o));o=ur(t,a,o),u=e===an?$(i,o):e===on?rr(i,o):e===un?nr(i,o):or(i,o);return r(t,e,u,a),i}})),n(fn,"ndarray",sn),n(dn,"ndarray",ln);var mn={float64:"getFloat64",float32:"getFloat32",float16:"getFloat16",int64:"getBigInt64",int32:"getInt32",int16:"getInt16",int8:"getInt8",uint64:"getBigUint64",uint32:"getUint32",uint16:"getUint16",uint8:"getUint8"};function cn(r,n,t,e,i,a,o,u,s){var f,l,d,m,c;for(m=mn[r],f=a.data,l=u,d=i,c=0;c<n;c++)f[l]=t[m](d,s),l+=o,d+=e}function pn(r,n,t,e,i,a,o,u,s){var f,l,d,m,c,p;for(c=mn[r],f=D(r),l=a.data,o*=2,d=u*=2,m=i,p=0;p<n;p++)l[d]=t[c](m,s),l[d+1]=t[c](m+f,s),d+=o,m+=e}function vn(r,n,t,e,i,a,o,u){var s;return r<=0?i:(s=O(i)).accessorProtocol?F(i)?(s.data=rr(i,0),pn("float64",r,n,t,e,s,a,o,u),i):I(i)?(s.data=$(i,0),pn("float32",r,n,t,e,s,a,o,u),i):B(i)?(s.data=nr(i,0),cn("uint8",r,n,t,e,s,a,o,u),i):(function(r,n,t,e,i,a,o,u,s){var f,l,d,m,c,p;for(c=mn[r],f=a.data,l=a.accessors[1],d=u,m=i,p=0;p<n;p++)l(f,d,t[c](m,s)),d+=o,m+=e}("float64",r,n,t,e,s,a,o,u),i):(cn(null===s.dtype||"generic"===s.dtype?"float64":s.dtype,r,n,t,e,s,a,o,u),i)}function gn(r,n,t,e,i,a){return vn(r,n,t,z(r,t),e,i,z(r,i),a)}function hn(r,n,t,e,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=e,f=o,l=0;l<r;l++)i[f]=u(n[s]),s+=t,f+=a;return i}function yn(r,n,t,e,i,a){return hn(r,n,t,z(r,t),e,i,z(r,i),a)}function bn(r,n,t,e,i,a,o,u,s,f,l){var d,m,c,p;if(r<=0)return u;for(d=e,m=o,c=f,p=0;p<r;p++)u[c]=l(n[d],i[m]),d+=t,m+=a,c+=s;return u}function wn(r,n,t,e,i,a,o,u){return bn(r,n,t,z(r,t),e,i,z(r,i),a,o,z(r,o),u)}function jn(r,n,t,e,i,a,o,u,s,f,l){var d,m,c,p;if(r<=0)return u;for(d=e,m=o,c=f,p=0;p<r;p++)0===i[m]&&(u[c]=l(n[d])),d+=t,m+=a,c+=s;return u}function xn(r,n,t,e,i,a,o,u){return jn(r,n,t,z(r,t),e,i,z(r,i),a,o,z(r,o),u)}function En(r,n,t,e,i,a,o,u,s,f,l,d,m,c){var p,v,g,h,y;if(r<=0)return l;for(p=e,v=o,g=m,h=f,y=0;y<r;y++)0===u[h]&&(l[g]=c(n[p],i[v])),p+=t,v+=a,g+=d,h+=s;return l}function Tn(r,n,t,e,i,a,o,u,s,f){return En(r,n,t,z(r,t),e,i,z(r,i),a,o,z(r,o),u,s,z(r,s),f)}function Vn(r,n,t,e,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y;if(!((h=n[0])<=0))for(f=e[0],l=e[1],d=e[2],m=e[3],a=t[0],o=t[1],u=t[2],s=t[3],c=r[0],p=r[1],v=r[2],g=r[3],y=0;y<h;y++)g[m]=i(c[f],p[l],v[d]),f+=a,l+=o,d+=u,m+=s}function Sn(r,n,t,e){var i;return Vn(r,n,t,[z(i=n[0],t[0]),z(i,t[1]),z(i,t[2]),z(i,t[3])],e)}function kn(r,n,t,e,i){var a,o,u,s,f,l,d,m;if(!((d=n[0])<=0))for(u=e[0],s=e[1],a=t[0],o=t[1],f=r[0],l=r[1],m=0;m<d;m++)l[s]=i(f[u]),u+=a,s+=o}function Un(r,n,t,e,i,a){var o,u,s,f,l,d,m,c,p,v;if(!((p=n[0])<=0))for(l=e[0],d=e[1],s=t[0],f=t[1],m=r[0],c=r[1],o=i[0],u=i[1],v=0;v<p;v++)u(c,d,a(o(m,l))),l+=s,d+=f}function Fn(r,n,s,f){var l,d,m,c;return m=r[0],t(m)&&(l=e(u(m))),c=r[1],t(c)&&(d=i(u(c))),l||d?function(r,n,t,e,i){var a;return Un(r,n,t,[z(a=n[0],t[0]),z(a,t[1])],e,i)}(r,n,s,[l=l||a(u(m)),d=d||o(u(c))],f):function(r,n,t,e){var i;return kn(r,n,t,[z(i=n[0],t[0]),z(i,t[1])],e)}(r,n,s,f)}n(gn,"ndarray",vn),n(yn,"ndarray",hn),n(wn,"ndarray",bn),n(xn,"ndarray",jn),n(Tn,"ndarray",En),n(Sn,"ndarray",Vn),n(Fn,"ndarray",(function(r,n,s,f,l){var d,m,c,p;return c=r[0],t(c)&&(d=e(u(c))),p=r[1],t(p)&&(m=i(u(p))),d||m?Un(r,n,s,f,[d=d||a(u(c)),m=m||o(u(p))],l):kn(r,n,s,f,l)}));var In=Z("complex64"),Bn=Z("complex128"),On=Z("bool");function Dn(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(t,e,i,a,o,u,s){var l,d;if(!f(i)||!f(u))return n(t,e,i,a,o,u,s),u;if(e=Z(e),o=Z(o),null===e||null===o)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");l=e===In?$(i,0):e===Bn?rr(i,0):e===On?nr(i,0):i;d=o===In?$(u,0):o===Bn?rr(u,0):o===On?nr(u,0):u;return r(t,e,l,a,o,d,s),u}}var Rn=Z("complex64"),_n=Z("complex128"),Mn=Z("bool");function Pn(r,n,t,e,i,a,o){var u,s,f,l,d,m,c,p,v;if(!((c=n[0])<=0))for(f=e[0],l=e[1],u=t[0],s=t[1],d=r[0],m=r[1],v=0;v<c;v++)void 0!==(p=a.call(o,d[f],v,[f,l],[d,m]))&&(m[l]=i(p)),f+=u,l+=s}function An(r,n,t,e,i,a,o,u){var s,f,l,d,m,c,p,v,g,h,y;if(!((g=n[0])<=0))for(m=e[0],c=e[1],l=t[0],d=t[1],p=r[0],v=r[1],s=i[0],f=i[1],y=0;y<g;y++)void 0!==(h=o.call(u,s(p,m),y,[m,c],[p,v]))&&f(v,c,a(h)),m+=l,c+=d}function Cn(r,n,s,f,l){var d,m,c,p,v;return arguments.length>5&&(d=arguments[5]),p=r[0],t(p)&&(m=e(u(p))),v=r[1],t(v)&&(c=i(u(v))),m||c?function(r,n,t,e,i,a,o){var u;return An(r,n,t,[z(u=n[0],t[0]),z(u,t[1])],e,i,a,o)}(r,n,s,[m=m||a(u(p)),c=c||o(u(v))],f,l,d):function(r,n,t,e,i,a){var o;return Pn(r,n,t,[z(o=n[0],t[0]),z(o,t[1])],e,i,a)}(r,n,s,f,l,d)}function zn(r,n){var t,e,i,a,o,u,s;for(e=r.length,i=n.length,t=[],s=0,o=0;o<e&&!(s>=i);o++)for(a=r[o],u=s;u<i;u++)if(a===n[u]){s=u+1,t.push(a);break}return t}function Ln(r){var n,t,e;for(n=[],e=0;e<r.length;e++){if(null===(t=dr(r[e])))return new TypeError(g("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",r[e]));n.push(t)}return n}n(Dn,"ndarray",(function(r,n){if(!s(r))throw new TypeError(g("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(g("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(t,e,i,a,o,u,s,l,d){var m,c;if(!f(i)||!f(s))return n(t,e,i,a,o,u,s,l,d),s;if(e=Z(e),u=Z(u),null===e||null===u)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!h(o))throw new TypeError(g("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",o));if(!h(d))throw new TypeError(g("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",d));o=ur(t,a,o),d=ur(t,l,d),m=e===Rn?$(i,o):e===_n?rr(i,o):e===Mn?nr(i,o):or(i,o);c=u===Rn?$(s,d):u===_n?rr(s,d):u===Mn?nr(s,d):or(s,d);return r(t,e,m,a,u,c,l),s}})),n(Cn,"ndarray",(function(r,n,s,f,l,d){var m,c,p,v,g;return arguments.length>6&&(m=arguments[6]),v=r[0],t(v)&&(c=e(u(v))),g=r[1],t(g)&&(p=i(u(g))),c||p?An(r,n,s,f,[c=c||a(u(v)),p=p||o(u(g))],l,d,m):Pn(r,n,s,f,l,d,m)}));var Nn="complex64",Yn="complex128",qn={complex64:w,complex128:j};function Gn(r,n,t){return t===Yn?n===Nn||n===Yn?r[Yn]:U(r.default,1,qn[t]):t===Nn?n===Nn?r[Nn]:n===Yn?r[Yn]:U(r.default,1,qn[t]):"generic"===t?n===Yn?r[Yn]:n===Nn?r[Nn]:r.default:r.default}var Hn={float64:"setFloat64",float32:"setFloat32",float16:"setFloat16",int64:"setBigInt64",int32:"setInt32",int16:"setInt16",int8:"setInt8",uint64:"setBigUint64",uint32:"setUint32",uint16:"setUint16",uint8:"setUint8"};function Jn(r,n,t,e,i,a,o,u,s){var f,l,d,m,c;for(m=Hn[r],f=t.data,l=i,d=u,c=0;c<n;c++)a[m](d,f[l],s),l+=e,d+=o;return a}function Kn(r,n,t,e,i,a,o,u,s){var f,l,d,m,c,p;for(c=Hn[r],f=D(r),l=t.data,e*=2,d=i*=2,m=u,p=0;p<n;p++)a[c](m,l[d],s),a[c](m+f,l[d+1],s),d+=e,m+=o;return a}function Qn(r,n,t,e,i,a,o,u){var s;return r<=0?i:(s=O(n)).accessorProtocol?F(n)?(s.data=rr(n,0),Kn("float64",r,s,t,e,i,a,o,u)):I(n)?(s.data=$(n,0),Kn("float32",r,s,t,e,i,a,o,u)):B(n)?(s.data=nr(n,0),Jn("uint8",r,s,t,e,i,a,o,u)):function(r,n,t,e,i,a,o,u,s){var f,l,d,m,c,p;for(c=Hn[r],f=t.data,l=t.accessors[0],d=i,m=u,p=0;p<n;p++)a[c](m,l(f,d),s),d+=e,m+=o;return a}("float64",r,s,t,e,i,a,o,u):Jn(null===s.dtype||"generic"===s.dtype?"float64":s.dtype,r,s,t,e,i,a,o,u)}function Wn(r,n,t,e,i,a){return Qn(r,n,t,z(r,t),e,i,z(r,i),a)}function Xn(r,n,t,e,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=e,f=o,l=0;l<r;l++)i.set(u(n.get(s)),f),s+=t,f+=a;return i}function Zn(r,n,t,e,i,a){return Xn(r,n,t,z(r,t),e,i,z(r,i),a)}n(Wn,"ndarray",Qn),n(Zn,"ndarray",Xn);var $n={};function rt(r,n,t,e,i,a){var o,u,f,l,d,m;if(s(r))m=r;else if(!P(r))throw new TypeError(g("invalid argument. First argument must be either a function or an array of functions. Value: `%s`.",r));if(!A(n))throw new TypeError(g("invalid argument. Second argument must be an array-like object. Value: `%s`.",n));if(!A(t)&&null!==t)throw new TypeError(g("invalid argument. Third argument must be an array-like object or null. Value: `%s`.",t));if(!_(e))throw new TypeError(g("invalid argument. Fourth argument must be a positive integer. Value: `%s`.",e));if(!h(i))throw new TypeError(g("invalid argument. Fifth argument must be a nonnegative integer. Value: `%s`.",i));if(!h(a))throw new TypeError(g("invalid argument. Sixth argument must be a nonnegative integer. Value: `%s`.",a));if(0===(f=i+a))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(m){if(l=n.length/f,!M(l))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(l=r.length,n.length!==l*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(t&&t.length!==l)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===e)u=!1;else{if(4*f+1!==e)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");u=!0}return d=i*(o=u?4:3)+1,function(){var s,c,p,v,y,b,w,j,x,E,T,V;if(b=arguments.length,b!==e){if(b<e)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(j=arguments[0],!M(j))throw new TypeError(g("invalid argument. First argument must be an integer. Value: `%s`.",j));for(y=[j],v=[],T=1;T<e;T+=o)v.push(arguments[T]);for(s=[],T=3;T<e;T+=o){if(!M(x=arguments[T]))throw T<d?new TypeError(g("invalid argument. Input array stride must be an integer. Value: `%s`.",x)):new TypeError(g("invalid argument. Output array stride must be an integer. Value: `%s`.",x));s.push(x)}if(u)for(c=[],T=4;T<e;T+=o){if(!h(x=arguments[T]))throw T<d?new TypeError(g("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",x)):new TypeError(g("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",x));c.push(x)}for(p=[],T=2;T<e;T+=o){if(!A(x=arguments[T]))throw T<d?new TypeError(g("invalid argument. Input array must be an array-like object. Value: `%s`.",x)):new TypeError(g("invalid argument. Output array must be an array-like object. Value: `%s`.",x));if(V=(T-2)/o,u){if(w=c[V]+(j-1)*s[V],j>0&&(w<0||w>=x.length))throw T<d?new RangeError("invalid argument. Input array has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array has insufficient elements based on the associated stride and the number of indexed elements.")}else if((j-1)*C(s[V])>=x.length)throw T<d?new RangeError("invalid argument. Input array has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array has insufficient elements based on the associated stride and the number of indexed elements.");p.push(x)}if(w=function(r,n,t,e,i,a,o,u,s){var f,l,d,m;for(f=a,d=0;d<r;d++){for(l=s,m=0;m<n&&t[f+m*i]===o[l];m++)l+=u;if(m===n)return d;f+=e}return-1}(l,f,n,f,1,0,v,1,0),w<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");E=m||r[w];t?u?E(p,y,s,c,t[w]):E(p,y,s,t[w]):u?E(p,y,s,c):E(p,y,s);if(1===a)return p[f-1];if(0===a)return;return p.slice(i)}}r($n,"binary",Y),r($n,"binaryAddonDispatch",ar),r($n,"binaryDtypeSignatures",(function(r,n,t,e){var i,a,o,u,s,f,l,d,m,c,p,v,g,h,w,j,x;if(o=arguments.length>3?e:{},(f=cr(r))instanceof Error)throw f;if(n===r)l=f;else if((l=cr(n))instanceof Error)throw l;if(t===r)d=f;else if(t===n)d=l;else if((d=cr(t))instanceof Error)throw d;for(d.sort(),i={},g=f.length,h=l.length,s=[],w=0;w<g;w++)for(m=f[w],j=0;j<h;j++)if(c=l[j],-1!==(p=y(m,c))&&null!==p)for(pr(d,p)&&s.push(m,c,p),void 0===(a=i[p])&&(a=mr(d,(a=b(p)).sort()),i[p]=a),x=0;x<a.length;x++)(v=a[x])!==p&&s.push(m,c,v);if(o.enums){for(u=[],w=0;w<s.length;w++)u.push(Z(s[w]));s=u}return s})),r($n,"binarySignatureCallbacks",(function(r,n){var t,e,i,a,o;for(t=[],o=0;o<n.length;o+=3)e=dr(n[o]),i=dr(n[o+1]),a=dr(n[o+2]),t.push(yr(r,e,i,a));return t})),r($n,"cmap",wr),r($n,"dmap",xr),r($n,"dmap2",Tr),r($n,"dmskmap",Sr),r($n,"dmskmap2",Ur),r($n,"dtypeEnum2Str",Q),r($n,"dtypeResolveEnum",Z),r($n,"dtypeResolveStr",dr),r($n,"dtypeStr2Enum",X),r($n,"mapBy",Br),r($n,"mapBy2",Rr),r($n,"maxViewBufferIndex",(function(r,n,t){return r>0&&n>0&&(t+=(r-1)*n),t})),r($n,"metaDataProps",(function(r,t,e,i){return n(e,"nargs",i?r.nargs+r.nin+r.nout:r.nargs),n(e,"nin",r.nin),n(e,"nout",r.nout),E(e,"types",(function(){return T(t,r.nin,r.nout)})),e})),r($n,"minViewBufferIndex",ur),r($n,"mskunary",Pr),r($n,"mskunaryAddonDispatch",Lr),r($n,"mskunaryDtypeSignatures",(function(r,n,t){var e,i,a,o,u,s,f,l,d,m;if(i=arguments.length>2?t:{},(u=Hr(r))instanceof Error)throw u;if(n===r)s=u;else if((s=Hr(n))instanceof Error)throw s;for(s.sort(),l=u.length,o=[],d=0;d<l;d++)if(f=u[d],null!==(e=V(f)))for(e=Gr(s,e.sort()),m=0;m<e.length;m++)o.push(f,"uint8",e[m]);if(i.enums){for(a=[],d=0;d<o.length;d++)a.push(Z(o[d]));o=a}return o})),r($n,"mskunarySignatureCallbacks",(function(r,n){var t,e,i,a;for(t=[],a=0;a<n.length;a+=3)e=dr(n[a]),i=dr(n[a+2]),t.push(Wr(r,e,i));return t})),r($n,"nullary",$r),r($n,"nullaryAddonDispatch",en),r($n,"offsetView",or),r($n,"quaternary",fn),r($n,"quinary",dn),r($n,"readDataView",gn),r($n,"reinterpretBoolean",nr),r($n,"reinterpretComplex",(function(r,n){if(F(r))return rr(r,n);if(I(r))return $(r,n);throw new TypeError(g("invalid argument. First argument must be a complex-valued floating-point array. Value: `%s`.",r))})),r($n,"reinterpretComplex64",$),r($n,"reinterpretComplex128",rr),r($n,"smap",yn),r($n,"smap2",wn),r($n,"smskmap",xn),r($n,"smskmap2",Tn),r($n,"stride2offset",z),r($n,"strided2object",(function(r,n,t,e){var i=R(n);return i.length=r>0?r:0,i.stride=t,i.offset=e,i})),r($n,"ternary",Sn),r($n,"unary",Fn),r($n,"unaryAddonDispatch",Dn),r($n,"unaryBy",Cn),r($n,"unaryDtypeSignatures",(function(r,n,t){var e,i,a,o,u,s,f,l,d,m;if(i=arguments.length>2?t:{},(u=Ln(r))instanceof Error)throw u;if(n===r)s=u;else if((s=Ln(n))instanceof Error)throw s;for(s.sort(),l=u.length,o=[],d=0;d<l;d++)if(f=u[d],null!==(e=b(f)))for(e=zn(s,e.sort()),m=0;m<e.length;m++)o.push(f,e[m]);if(i.enums){for(a=[],d=0;d<o.length;d++)a.push(Z(o[d]));o=a}return o})),r($n,"unarySignatureCallbacks",(function(r,n){var t,e,i,a;for(t=[],a=0;a<n.length;a+=2)e=dr(n[a]),i=dr(n[a+1]),t.push(Gn(r,e,i));return t})),r($n,"writeDataView",Wn),r($n,"zmap",Zn);var nt={};r(nt,"base",$n),r(nt,"dispatch",rt),r(nt,"dtypes",G);export{$n as base,nt as default,rt as dispatch,G as dtypes};
//# sourceMappingURL=index.mjs.map
