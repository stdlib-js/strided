// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-object-inverse@v0.2.1-esm/index.mjs";import{enum as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.1-esm/index.mjs";import{isPrimitive as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-promotion-rules@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-safe-casts@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-wrap-function@v0.2.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtypes2signatures@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-cast-return@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex128array@v0.2.1-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex64array@v0.2.1-esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import{isPrimitive as F}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function-array@v0.2.1-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";function B(r,n,s,f){var l,d,m,c,p,v;return c=r[0],e(c)&&(l=t(u(c))),p=r[1],e(p)&&(d=t(u(p))),v=r[2],e(v)&&(m=i(u(v))),l||d||m?function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y;if(!((h=n[0])<=0))for(d=(s=e[0])<0?(1-h)*s:0,m=(f=e[1])<0?(1-h)*f:0,c=(l=e[2])<0?(1-h)*l:0,p=r[0],v=r[1],g=r[2],a=t[0],o=t[1],u=t[2],y=0;y<h;y++)u(g,c,i(a(p,d),o(v,m))),d+=s,m+=f,c+=l}(r,n,s,[l=l||a(u(c)),d=d||a(u(p)),m=m||o(u(v))],f):function(r,n,e,t){var i,a,o,u,s,f,l,d,m,c,p;if(!((c=n[0])<=0))for(u=(i=e[0])<0?(1-c)*i:0,s=(a=e[1])<0?(1-c)*a:0,f=(o=e[2])<0?(1-c)*o:0,l=r[0],d=r[1],m=r[2],p=0;p<c;p++)m[f]=t(l[u],d[s]),u+=i,s+=a,f+=o}(r,n,s,f)}n(B,"ndarray",(function(r,n,s,f,l){var d,m,c,p,v,g;return p=r[0],e(p)&&(d=t(u(p))),v=r[1],e(v)&&(m=t(u(v))),g=r[2],e(g)&&(c=i(u(g))),d||m||c?function(r,n,e,t,i,a){var o,u,s,f,l,d,m,c,p,v,g,h,y,b;if(!((y=n[0])<=0))for(m=t[0],c=t[1],p=t[2],f=e[0],l=e[1],d=e[2],v=r[0],g=r[1],h=r[2],o=i[0],u=i[1],s=i[2],b=0;b<y;b++)s(h,p,a(o(v,m),u(g,c))),m+=f,c+=l,p+=d}(r,n,s,f,[d=d||a(u(p)),m=m||a(u(v)),c=c||o(u(g))],l):function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v;if(!((p=n[0])<=0))for(s=t[0],f=t[1],l=t[2],a=e[0],o=e[1],u=e[2],d=r[0],m=r[1],c=r[2],v=0;v<p;v++)c[l]=i(d[s],m[f]),s+=a,f+=o,l+=u}(r,n,s,f,l)}));var R=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function D(){return R.slice()}var _=d();function M(){return{bool:_.bool,int8:_.int8,uint8:_.uint8,uint8c:_.uint8c,int16:_.int16,uint16:_.uint16,int32:_.int32,uint32:_.uint32,int64:_.int64,uint64:_.uint64,float32:_.float32,float64:_.float64,complex64:_.complex64,complex128:_.complex128,binary:_.binary,generic:_.generic,notype:_.notype,userdefined_type:_.userdefined_type}}n(D,"enum",M),function(n,e){var t,i,a;for(t=m(e),a=0;a<t.length;a++)i=t[a],r(n,i,e[i])}(D,M());var A=l(M(),{duplicates:!1});function C(r){var n=A[r];return"string"==typeof n?n:null}var P=M();function z(r){var n=P[r];return"number"==typeof n?n:null}function q(r){var n=typeof r;return"number"===n?C(r)?r:null:"string"===n?z(r):null}function L(r,n){return new c(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,2*(r.length-n))}function N(r,n){return new p(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,2*(r.length-n))}var Y=q("complex64"),G=q("complex128");function H(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d,m){var c,p,v;if(!f(i)||!f(u)||!f(d))return n(e,t,i,a,o,u,s,l,d,m),d;if(t=q(t),o=q(o),l=q(l),null===t||null===o||null===l)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");c=t===Y?L(i,0):t===G?N(i,0):i;p=o===Y?L(u,0):o===G?N(u,0):u;v=l===Y?L(d,0):l===G?N(d,0):d;return r(e,t,c,a,o,p,s,l,v,m),d}}function J(r,n){return new r.constructor(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,r.length-n)}function K(r,n,e){return r>0&&n<0&&(e+=(r-1)*n),e}var Q=q("complex64"),W=q("complex128");function X(r){var n=typeof r;return"string"===n?null===z(r)?null:r:"number"===n?C(r):null}function Z(r,n){var e,t,i,a,o,u,s;for(t=r.length,i=n.length,e=[],s=0,o=0;o<t&&!(s>=i);o++)for(a=r[o],u=s;u<i;u++)if(a===n[u]){s=u+1,e.push(a);break}return e}function $(r){var n,e,t;for(n=[],t=0;t<r.length;t++){if(null===(e=X(r[t])))return new TypeError(v("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",r[t]));n.push(e)}return n}function rr(r,n){var e;for(e=0;e<r.length;e++)if(r[e]===n)return!0;return!1}n(H,"ndarray",(function(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d,m,c,p,h){var y,b,w;if(!f(i)||!f(s)||!f(c))return n(e,t,i,a,o,u,s,l,d,m,c,p,h),c;if(t=q(t),u=q(u),m=q(m),null===t||null===u||null===m)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!g(o))throw new TypeError(v("invalid argument. First input array offset must be a nonnegative integer. Value: `%s`.",o));if(!g(d))throw new TypeError(v("invalid argument. Second input array offset must be a nonnegative integer. Value: `%s`.",d));if(!g(h))throw new TypeError(v("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",h));o=K(e,a,o),d=K(e,l,d),h=K(e,p,h),y=t===Q?L(i,o):t===W?N(i,o):J(i,o);b=u===Q?L(s,d):u===W?N(s,d):J(s,d);w=m===Q?L(c,h):m===W?N(c,h):J(c,h);return r(e,t,y,a,u,b,l,m,w,p),c}}));var nr="complex64",er="complex128",tr={complex64:b,complex128:w};function ir(r,n,e,t){return t===er?n===nr?e===er||e===nr?r[er]:j(r[er],2,tr[er]):n===er&&(e===er||e===nr)?r[er]:j(r[er],2,tr[er]):t===nr?n===er?e===nr||e===er?r[er]:j(r[er],2,tr[er]):n===nr?e===er?r[er]:e===nr?r[nr]:j(r[nr],2,tr[nr]):e===er?j(r[er],2,tr[er]):j(r[nr],2,tr[nr]):"generic"===t?n===er?e===er||e===nr?r[er]:j(r[er],2,tr[er]):n===nr?e===nr?r[nr]:e===er?r[er]:j(r[nr],2,tr[nr]):e===er?j(r[er],2,tr[er]):e===nr?j(r[nr],2,tr[nr]):r.default:r.default}function ar(r,n,e,t,i,a){var o,u,s;if(r<=0)return t;for(o=e<0?(1-r)*e:0,u=i<0?(1-r)*i:0,s=0;s<r;s++)t.set(a(n.get(o)),u),o+=e,u+=i;return t}function or(r,n,e,t,i,a){var o,u,s;if(r<=0)return t;for(o=e<0?(1-r)*e:0,u=i<0?(1-r)*i:0,s=0;s<r;s++)t[u]=a(n[o]),o+=e,u+=i;return t}function ur(r,n,e,t,i,a,o,u){var s,f,l,d;if(r<=0)return a;for(s=e<0?(1-r)*e:0,f=i<0?(1-r)*i:0,l=o<0?(1-r)*o:0,d=0;d<r;d++)a[l]=u(n[s],t[f]),s+=e,f+=i,l+=o;return a}function sr(r,n,e,t,i,a,o,u){var s,f,l,d;if(r<=0)return a;for(s=e<0?(1-r)*e:0,f=i<0?(1-r)*i:0,l=o<0?(1-r)*o:0,d=0;d<r;d++)0===t[f]&&(a[l]=u(n[s])),s+=e,f+=i,l+=o;return a}function fr(r,n,e,t,i,a,o,u,s,f){var l,d,m,c,p;if(r<=0)return u;for(l=e<0?(1-r)*e:0,d=i<0?(1-r)*i:0,m=s<0?(1-r)*s:0,c=o<0?(1-r)*o:0,p=0;p<r;p++)0===a[c]&&(u[m]=f(n[l],t[d])),l+=e,d+=i,m+=s,c+=o;return u}function lr(r,n,s,f,l,d,m,c){var p,v;return e(n)&&(p=t(u(n))),e(f)&&(v=i(u(f))),p||v?function(r,n,e,t,i,a,o,u,s,f){var l,d,m,c;if(r<=0)return i;for(l=e<0?(1-r)*e:0,d=a<0?(1-r)*a:0,c=0;c<r;c++)void 0!==(m=s.call(f,t(n,l),c,[l,d],[n,i]))&&o(i,d,u(m)),l+=e,d+=a;return i}(r,n,s,p=p||a(u(n)),f,l,v=v||o(u(f)),d,m,c):function(r,n,e,t,i,a,o,u){var s,f,l,d;if(r<=0)return t;for(s=e<0?(1-r)*e:0,f=i<0?(1-r)*i:0,d=0;d<r;d++)void 0!==(l=o.call(u,n[s],d,[s,f],[n,t]))&&(t[f]=a(l)),s+=e,f+=i;return t}(r,n,s,f,l,d,m,c)}function dr(r,n,s,f,l,d,m,c,p,v){var g,h,y;return e(n)&&(g=t(u(n))),e(f)&&(h=t(u(f))),e(d)&&(y=i(u(d))),g||h||y?function(r,n,e,t,i,a,o,u,s,f,l,d,m){var c,p,v,g,h;if(r<=0)return u;for((p=[0,0,0])[0]=e<0?(1-r)*e:0,p[1]=a<0?(1-r)*a:0,p[2]=s<0?(1-r)*s:0,v=[n,i,u],c=[0,0],h=0;h<r;h++)c[0]=t(n,p[0]),c[1]=o(i,p[1]),void 0!==(g=d.call(m,c,h,p,v))&&f(u,p[2],l(g[0],g[1])),p[0]+=e,p[1]+=a,p[2]+=s;return u}(r,n,s,g=g||a(u(n)),f,l,h=h||a(u(f)),d,m,y=y||o(u(d)),c,p,v):function(r,n,e,t,i,a,o,u,s,f){var l,d,m,c,p;if(r<=0)return a;for((d=[0,0,0])[0]=e<0?(1-r)*e:0,d[1]=i<0?(1-r)*i:0,d[2]=o<0?(1-r)*o:0,m=[n,t,a],l=[0,0],p=0;p<r;p++)l[0]=n[d[0]],l[1]=t[d[1]],void 0!==(c=s.call(f,l,p,d,m))&&(a[d[2]]=u(c[0],c[1])),d[0]+=e,d[1]+=i,d[2]+=o;return a}(r,n,s,f,l,d,m,c,p,v)}function mr(r,n,s,f){var l,d,m,c,p,v;return c=r[0],e(c)&&(l=t(u(c))),p=r[1],e(p)&&(d=t(u(p))),v=r[2],e(v)&&(m=i(u(v))),l||d||m?function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y;if(!((h=n[0])<=0))for(d=(s=e[0])<0?(1-h)*s:0,m=(f=e[1])<0?(1-h)*f:0,c=(l=e[2])<0?(1-h)*l:0,p=r[0],v=r[1],g=r[2],a=t[0],o=t[1],u=t[2],y=0;y<h;y++)0===o(v,m)&&u(g,c,i(a(p,d))),d+=s,m+=f,c+=l}(r,n,s,[l=l||a(u(c)),d=d||a(u(p)),m=m||o(u(v))],f):function(r,n,e,t){var i,a,o,u,s,f,l,d,m,c,p;if(!((c=n[0])<=0))for(u=(i=e[0])<0?(1-c)*i:0,s=(a=e[1])<0?(1-c)*a:0,f=(o=e[2])<0?(1-c)*o:0,l=r[0],d=r[1],m=r[2],p=0;p<c;p++)0===d[s]&&(m[f]=t(l[u])),u+=i,s+=a,f+=o}(r,n,s,f)}n(ar,"ndarray",(function(r,n,e,t,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=t,f=o,l=0;l<r;l++)i.set(u(n.get(s)),f),s+=e,f+=a;return i})),n(or,"ndarray",(function(r,n,e,t,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=t,f=o,l=0;l<r;l++)i[f]=u(n[s]),s+=e,f+=a;return i})),n(ur,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l){var d,m,c,p;if(r<=0)return u;for(d=t,m=o,c=f,p=0;p<r;p++)u[c]=l(n[d],i[m]),d+=e,m+=a,c+=s;return u})),n(sr,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l){var d,m,c,p;if(r<=0)return u;for(d=t,m=o,c=f,p=0;p<r;p++)0===i[m]&&(u[c]=l(n[d])),d+=e,m+=a,c+=s;return u})),n(fr,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l,d,m,c){var p,v,g,h,y;if(r<=0)return l;for(p=t,v=o,g=m,h=f,y=0;y<r;y++)0===u[h]&&(l[g]=c(n[p],i[v])),p+=e,v+=a,g+=d,h+=s;return l})),n(lr,"ndarray",(function(r,n,s,f,l,d,m,c,p,v){var g,h;return e(n)&&(g=t(u(n))),e(l)&&(h=i(u(l))),g||h?function(r,n,e,t,i,a,o,u,s,f,l,d){var m,c,p,v;if(r<=0)return a;for(m=t,c=u,v=0;v<r;v++)void 0!==(p=l.call(d,i(n,m),v,[m,c],[n,a]))&&s(a,c,f(p)),m+=e,c+=o;return a}(r,n,s,f,g=g||a(u(n)),l,d,m,h=h||o(u(l)),c,p,v):function(r,n,e,t,i,a,o,u,s,f){var l,d,m,c;if(r<=0)return i;for(l=t,d=o,c=0;c<r;c++)void 0!==(m=s.call(f,n[l],c,[l,d],[n,i]))&&(i[d]=u(m)),l+=e,d+=a;return i}(r,n,s,f,l,d,m,c,p,v)})),n(dr,"ndarray",(function(r,n,s,f,l,d,m,c,p,v,g,h,y){var b,w,j;return e(n)&&(b=t(u(n))),e(l)&&(w=t(u(l))),e(c)&&(j=i(u(c))),b||w||j?function(r,n,e,t,i,a,o,u,s,f,l,d,m,c,p,v){var g,h,y,b,w;if(r<=0)return f;for(h=[t,u,d],y=[n,a,f],g=[0,0],w=0;w<r;w++)g[0]=i(n,h[0]),g[1]=s(a,h[1]),void 0!==(b=p.call(v,g,w,h,y))&&m(f,h[2],c(b[0],b[1])),h[0]+=e,h[1]+=o,h[2]+=l;return f}(r,n,s,f,b=b||a(u(n)),l,d,m,w=w||a(u(l)),c,p,v,j=j||o(u(c)),g,h,y):function(r,n,e,t,i,a,o,u,s,f,l,d,m){var c,p,v,g,h;if(r<=0)return u;for(p=[t,o,f],v=[n,i,u],c=[0,0],h=0;h<r;h++)c[0]=n[p[0]],c[1]=i[p[1]],void 0!==(g=d.call(m,c,h,p,v))&&(u[p[2]]=l(g[0],g[1])),p[0]+=e,p[1]+=a,p[2]+=s;return u}(r,n,s,f,l,d,m,c,p,v,g,h,y)})),n(mr,"ndarray",(function(r,n,s,f,l){var d,m,c,p,v,g;return p=r[0],e(p)&&(d=t(u(p))),v=r[1],e(v)&&(m=t(u(v))),g=r[2],e(g)&&(c=i(u(g))),d||m||c?function(r,n,e,t,i,a){var o,u,s,f,l,d,m,c,p,v,g,h,y,b;if(!((y=n[0])<=0))for(m=t[0],c=t[1],p=t[2],f=e[0],l=e[1],d=e[2],v=r[0],g=r[1],h=r[2],o=i[0],u=i[1],s=i[2],b=0;b<y;b++)0===u(g,c)&&s(h,p,a(o(v,m))),m+=f,c+=l,p+=d}(r,n,s,f,[d=d||a(u(p)),m=m||a(u(v)),c=c||o(u(g))],l):function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v;if(!((p=n[0])<=0))for(s=t[0],f=t[1],l=t[2],a=e[0],o=e[1],u=e[2],d=r[0],m=r[1],c=r[2],v=0;v<p;v++)0===m[f]&&(c[l]=i(d[s])),s+=a,f+=o,l+=u}(r,n,s,f,l)}));var cr=q("complex64"),pr=q("complex128");function vr(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d,m){var c,p;if(!f(i)||!f(d)||!f(u))return n(e,t,i,a,o,u,s,l,d,m),d;if(t=q(t),l=q(l),o=q(o),null===t||null===l||null===o)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");c=t===cr?L(i,0):t===pr?N(i,0):i;p=l===cr?L(d,0):l===pr?N(d,0):d;return r(e,t,c,a,o,u,s,l,p,m),d}}var gr=q("complex64"),hr=q("complex128");function yr(r,n){var e,t,i,a,o,u,s;for(t=r.length,i=n.length,e=[],s=0,o=0;o<t&&!(s>=i);o++)for(a=r[o],u=s;u<i;u++)if(a===n[u]){s=u+1,e.push(a);break}return e}function br(r){var n,e,t;for(n=[],t=0;t<r.length;t++){if(null===(e=X(r[t])))return new TypeError(v("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",r[t]));n.push(e)}return n}n(vr,"ndarray",(function(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d,m,c,p,h){var y,b,w;if(!f(i)||!f(c)||!f(s))return n(e,t,i,a,o,u,s,l,d,m,c,p,h),c;if(t=q(t),m=q(m),u=q(u),null===t||null===m||null===u)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!g(o))throw new TypeError(v("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",o));if(!g(h))throw new TypeError(v("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",h));if(!g(d))throw new TypeError(v("invalid argument. Mask array offset must be a nonnegative integer. Value: `%s`.",d));o=K(e,a,o),h=K(e,p,h),d=K(e,l,d),b=t===gr?L(i,o):t===hr?N(i,o):J(i,o);w=m===gr?L(c,h):m===hr?N(c,h):J(c,h);return y=J(s,d),r(e,t,b,a,u,y,l,m,w,p),c}}));var wr="complex64",jr="complex128",xr={complex64:b,complex128:w};function Er(r,n,e){return e===jr?n===wr||n===jr?r[jr]:T(r.default,1,xr[e]):e===wr?n===wr?r[wr]:n===jr?r[jr]:T(r.default,1,xr[e]):"generic"===e?n===jr?r[jr]:n===wr?r[wr]:r.default:r.default}function Tr(r,n,t,a){var s,f;return f=r[0],e(f)&&(s=i(u(f))),s?function(r,n,e,t,i){var a,o,u,s,f,l;if(!((f=n[0])<=0))for(u=(o=e[0])<0?(1-f)*o:0,s=r[0],a=t[0],l=0;l<f;l++)a(s,u,i()),u+=o}(r,n,t,[s=s||o(u(f))],a):function(r,n,e,t){var i,a,o,u,s;if(!((u=n[0])<=0))for(a=(i=e[0])<0?(1-u)*i:0,o=r[0],s=0;s<u;s++)o[a]=t(),a+=i}(r,n,t,a)}n(Tr,"ndarray",(function(r,n,t,a,s){var f,l;return l=r[0],e(l)&&(f=i(u(l))),f?function(r,n,e,t,i,a){var o,u,s,f,l,d;if(!((l=n[0])<=0))for(s=t[0],u=e[0],f=r[0],o=i[0],d=0;d<l;d++)o(f,s,a()),s+=u}(r,n,t,a,[f=f||o(u(l))],s):function(r,n,e,t,i){var a,o,u,s,f;if(!((s=n[0])<=0))for(o=t[0],a=e[0],u=r[0],f=0;f<s;f++)u[o]=i(),o+=a}(r,n,t,a,s)}));var Vr=q("complex64"),Sr=q("complex128");function kr(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a){var o;if(!f(i))return n(e,t,i,a),i;if(null===(t=q(t)))throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");o=t===Vr?L(i,0):t===Sr?N(i,0):i;return r(e,t,o,a),i}}var Fr=q("complex64"),Ur=q("complex128");function Or(r,n,e,t){var i,a,o,u,s,f,l,d,m,c,p,v,g,h,y,b,w;if(!((b=n[0])<=0))for(f=(i=e[0])<0?(1-b)*i:0,l=(a=e[1])<0?(1-b)*a:0,d=(o=e[2])<0?(1-b)*o:0,m=(u=e[3])<0?(1-b)*u:0,c=(s=e[4])<0?(1-b)*s:0,p=r[0],v=r[1],g=r[2],h=r[3],y=r[4],w=0;w<b;w++)y[c]=t(p[f],v[l],g[d],h[m]),f+=i,l+=a,d+=o,m+=u,c+=s}function Ir(r,n,e,t){var i,a,o,u,s,f,l,d,m,c,p,v,g,h,y,b,w,j,x,E;if(!((x=n[0])<=0))for(l=(i=e[0])<0?(1-x)*i:0,d=(a=e[1])<0?(1-x)*a:0,m=(o=e[2])<0?(1-x)*o:0,c=(u=e[3])<0?(1-x)*u:0,p=(s=e[4])<0?(1-x)*s:0,v=(f=e[5])<0?(1-x)*f:0,g=r[0],h=r[1],y=r[2],b=r[3],w=r[4],j=r[5],E=0;E<x;E++)j[v]=t(g[l],h[d],y[m],b[c],w[p]),l+=i,d+=a,m+=o,c+=u,p+=s,v+=f}function Br(r,n,e,t,i,a){var o,u,s;if(r<=0)return t;for(o=e<0?(1-r)*e:0,u=i<0?(1-r)*i:0,s=0;s<r;s++)t[u]=a(n[o]),o+=e,u+=i;return t}function Rr(r,n,e,t,i,a,o,u){var s,f,l,d;if(r<=0)return a;for(s=e<0?(1-r)*e:0,f=i<0?(1-r)*i:0,l=o<0?(1-r)*o:0,d=0;d<r;d++)a[l]=u(n[s],t[f]),s+=e,f+=i,l+=o;return a}function Dr(r,n,e,t,i,a,o,u){var s,f,l,d;if(r<=0)return a;for(s=e<0?(1-r)*e:0,f=i<0?(1-r)*i:0,l=o<0?(1-r)*o:0,d=0;d<r;d++)0===t[f]&&(a[l]=u(n[s])),s+=e,f+=i,l+=o;return a}function _r(r,n,e,t,i,a,o,u,s,f){var l,d,m,c,p;if(r<=0)return u;for(l=e<0?(1-r)*e:0,d=i<0?(1-r)*i:0,m=s<0?(1-r)*s:0,c=o<0?(1-r)*o:0,p=0;p<r;p++)0===a[c]&&(u[m]=f(n[l],t[d])),l+=e,d+=i,m+=s,c+=o;return u}function Mr(r,n,e,t){var i,a,o,u,s,f,l,d,m,c,p,v,g,h;if(!((g=n[0])<=0))for(s=(i=e[0])<0?(1-g)*i:0,f=(a=e[1])<0?(1-g)*a:0,l=(o=e[2])<0?(1-g)*o:0,d=(u=e[3])<0?(1-g)*u:0,m=r[0],c=r[1],p=r[2],v=r[3],h=0;h<g;h++)v[d]=t(m[s],c[f],p[l]),s+=i,f+=a,l+=o,d+=u}function Ar(r,n,s,f){var l,d,m,c;return m=r[0],e(m)&&(l=t(u(m))),c=r[1],e(c)&&(d=i(u(c))),l||d?function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p;if(!((c=n[0])<=0))for(f=(u=e[0])<0?(1-c)*u:0,l=(s=e[1])<0?(1-c)*s:0,d=r[0],m=r[1],a=t[0],o=t[1],p=0;p<c;p++)o(m,l,i(a(d,f))),f+=u,l+=s}(r,n,s,[l=l||a(u(m)),d=d||o(u(c))],f):function(r,n,e,t){var i,a,o,u,s,f,l,d;if(!((l=n[0])<=0))for(o=(i=e[0])<0?(1-l)*i:0,u=(a=e[1])<0?(1-l)*a:0,s=r[0],f=r[1],d=0;d<l;d++)f[u]=t(s[o]),o+=i,u+=a}(r,n,s,f)}n(kr,"ndarray",(function(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o){var u;if(!f(i))return n(e,t,i,a,o),i;if(null===(t=q(t)))throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!g(o))throw new TypeError(v("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",o));o=K(e,a,o),u=t===Fr?L(i,o):t===Ur?N(i,o):J(i,o);return r(e,t,u,a),i}})),n(Or,"ndarray",(function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y,b,w,j;if(!((w=n[0])<=0))for(l=t[0],d=t[1],m=t[2],c=t[3],p=t[4],a=e[0],o=e[1],u=e[2],s=e[3],f=e[4],v=r[0],g=r[1],h=r[2],y=r[3],b=r[4],j=0;j<w;j++)b[p]=i(v[l],g[d],h[m],y[c]),l+=a,d+=o,m+=u,c+=s,p+=f})),n(Ir,"ndarray",(function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y,b,w,j,x,E,T;if(!((E=n[0])<=0))for(d=t[0],m=t[1],c=t[2],p=t[3],v=t[4],g=t[5],a=e[0],o=e[1],u=e[2],s=e[3],f=e[4],l=e[5],h=r[0],y=r[1],b=r[2],w=r[3],j=r[4],x=r[5],T=0;T<E;T++)x[g]=i(h[d],y[m],b[c],w[p],j[v]),d+=a,m+=o,c+=u,p+=s,v+=f,g+=l})),n(Br,"ndarray",(function(r,n,e,t,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=t,f=o,l=0;l<r;l++)i[f]=u(n[s]),s+=e,f+=a;return i})),n(Rr,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l){var d,m,c,p;if(r<=0)return u;for(d=t,m=o,c=f,p=0;p<r;p++)u[c]=l(n[d],i[m]),d+=e,m+=a,c+=s;return u})),n(Dr,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l){var d,m,c,p;if(r<=0)return u;for(d=t,m=o,c=f,p=0;p<r;p++)0===i[m]&&(u[c]=l(n[d])),d+=e,m+=a,c+=s;return u})),n(_r,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l,d,m,c){var p,v,g,h,y;if(r<=0)return l;for(p=t,v=o,g=m,h=f,y=0;y<r;y++)0===u[h]&&(l[g]=c(n[p],i[v])),p+=e,v+=a,g+=d,h+=s;return l})),n(Mr,"ndarray",(function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y;if(!((h=n[0])<=0))for(f=t[0],l=t[1],d=t[2],m=t[3],a=e[0],o=e[1],u=e[2],s=e[3],c=r[0],p=r[1],v=r[2],g=r[3],y=0;y<h;y++)g[m]=i(c[f],p[l],v[d]),f+=a,l+=o,d+=u,m+=s})),n(Ar,"ndarray",(function(r,n,s,f,l){var d,m,c,p;return c=r[0],e(c)&&(d=t(u(c))),p=r[1],e(p)&&(m=i(u(p))),d||m?function(r,n,e,t,i,a){var o,u,s,f,l,d,m,c,p,v;if(!((p=n[0])<=0))for(l=t[0],d=t[1],s=e[0],f=e[1],m=r[0],c=r[1],o=i[0],u=i[1],v=0;v<p;v++)u(c,d,a(o(m,l))),l+=s,d+=f}(r,n,s,f,[d=d||a(u(c)),m=m||o(u(p))],l):function(r,n,e,t,i){var a,o,u,s,f,l,d,m;if(!((d=n[0])<=0))for(u=t[0],s=t[1],a=e[0],o=e[1],f=r[0],l=r[1],m=0;m<d;m++)l[s]=i(f[u]),u+=a,s+=o}(r,n,s,f,l)}));var Cr=q("complex64"),Pr=q("complex128");function zr(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s){var l,d;if(!f(i)||!f(u))return n(e,t,i,a,o,u,s),u;if(t=q(t),o=q(o),null===t||null===o)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");l=t===Cr?L(i,0):t===Pr?N(i,0):i;d=o===Cr?L(u,0):o===Pr?N(u,0):u;return r(e,t,l,a,o,d,s),u}}var qr=q("complex64"),Lr=q("complex128");function Nr(r,n,s,f,l){var d,m,c,p,v;return arguments.length>5&&(d=arguments[5]),p=r[0],e(p)&&(m=t(u(p))),v=r[1],e(v)&&(c=i(u(v))),m||c?function(r,n,e,t,i,a,o){var u,s,f,l,d,m,c,p,v,g,h;if(!((v=n[0])<=0))for(d=(f=e[0])<0?(1-v)*f:0,m=(l=e[1])<0?(1-v)*l:0,c=r[0],p=r[1],u=t[0],s=t[1],h=0;h<v;h++)void 0!==(g=a.call(o,u(c,d),h,[d,m],[c,p]))&&s(p,m,i(g)),d+=f,m+=l}(r,n,s,[m=m||a(u(p)),c=c||o(u(v))],f,l,d):function(r,n,e,t,i,a){var o,u,s,f,l,d,m,c,p;if(!((m=n[0])<=0))for(s=(o=e[0])<0?(1-m)*o:0,f=(u=e[1])<0?(1-m)*u:0,l=r[0],d=r[1],p=0;p<m;p++)void 0!==(c=i.call(a,l[s],p,[s,f],[l,d]))&&(d[f]=t(c)),s+=o,f+=u}(r,n,s,f,l,d)}function Yr(r,n){var e,t,i,a,o,u,s;for(t=r.length,i=n.length,e=[],s=0,o=0;o<t&&!(s>=i);o++)for(a=r[o],u=s;u<i;u++)if(a===n[u]){s=u+1,e.push(a);break}return e}function Gr(r){var n,e,t;for(n=[],t=0;t<r.length;t++){if(null===(e=X(r[t])))return new TypeError(v("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",r[t]));n.push(e)}return n}n(zr,"ndarray",(function(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d){var m,c;if(!f(i)||!f(s))return n(e,t,i,a,o,u,s,l,d),s;if(t=q(t),u=q(u),null===t||null===u)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!g(o))throw new TypeError(v("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",o));if(!g(d))throw new TypeError(v("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",d));o=K(e,a,o),d=K(e,l,d),m=t===qr?L(i,o):t===Lr?N(i,o):J(i,o);c=u===qr?L(s,d):u===Lr?N(s,d):J(s,d);return r(e,t,m,a,u,c,l),s}})),n(Nr,"ndarray",(function(r,n,s,f,l,d){var m,c,p,v,g;return arguments.length>6&&(m=arguments[6]),v=r[0],e(v)&&(c=t(u(v))),g=r[1],e(g)&&(p=i(u(g))),c||p?function(r,n,e,t,i,a,o,u){var s,f,l,d,m,c,p,v,g,h,y;if(!((g=n[0])<=0))for(m=t[0],c=t[1],l=e[0],d=e[1],p=r[0],v=r[1],s=i[0],f=i[1],y=0;y<g;y++)void 0!==(h=o.call(u,s(p,m),y,[m,c],[p,v]))&&f(v,c,a(h)),m+=l,c+=d}(r,n,s,f,[c=c||a(u(v)),p=p||o(u(g))],l,d,m):function(r,n,e,t,i,a,o){var u,s,f,l,d,m,c,p,v;if(!((c=n[0])<=0))for(f=t[0],l=t[1],u=e[0],s=e[1],d=r[0],m=r[1],v=0;v<c;v++)void 0!==(p=a.call(o,d[f],v,[f,l],[d,m]))&&(m[l]=i(p)),f+=u,l+=s}(r,n,s,f,l,d,m)}));var Hr="complex64",Jr="complex128",Kr={complex64:b,complex128:w};function Qr(r,n,e){return e===Jr?n===Hr||n===Jr?r[Jr]:T(r.default,1,Kr[e]):e===Hr?n===Hr?r[Hr]:n===Jr?r[Jr]:T(r.default,1,Kr[e]):"generic"===e?n===Jr?r[Jr]:n===Hr?r[Hr]:r.default:r.default}function Wr(r,n,e,t,i,a){var o,u,s;if(r<=0)return t;for(o=e<0?(1-r)*e:0,u=i<0?(1-r)*i:0,s=0;s<r;s++)t.set(a(n.get(o)),u),o+=e,u+=i;return t}n(Wr,"ndarray",(function(r,n,e,t,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=t,f=o,l=0;l<r;l++)i.set(u(n.get(s)),f),s+=e,f+=a;return i}));var Xr={};function Zr(r,n,e,t,i,a){var o,u,f,l,d,m;if(s(r))m=r;else if(!U(r))throw new TypeError(v("invalid argument. First argument must be either a function or an array of functions. Value: `%s`.",r));if(!O(n))throw new TypeError(v("invalid argument. Second argument must be an array-like object. Value: `%s`.",n));if(!O(e)&&null!==e)throw new TypeError(v("invalid argument. Third argument must be an array-like object or null. Value: `%s`.",e));if(!k(t))throw new TypeError(v("invalid argument. Fourth argument must be a positive integer. Value: `%s`.",t));if(!g(i))throw new TypeError(v("invalid argument. Fifth argument must be a nonnegative integer. Value: `%s`.",i));if(!g(a))throw new TypeError(v("invalid argument. Sixth argument must be a nonnegative integer. Value: `%s`.",a));if(0===(f=i+a))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(m){if(l=n.length/f,!F(l))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(l=r.length,n.length!==l*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(e&&e.length!==l)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===t)u=!1;else{if(4*f+1!==t)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");u=!0}return d=i*(o=u?4:3)+1,function(){var s,c,p,h,y,b,w,j,x,E,T,V;if(b=arguments.length,b!==t){if(b<t)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(j=arguments[0],!F(j))throw new TypeError(v("invalid argument. First argument must be an integer. Value: `%s`.",j));for(y=[j],h=[],T=1;T<t;T+=o)h.push(arguments[T]);for(s=[],T=3;T<t;T+=o){if(!F(x=arguments[T]))throw T<d?new TypeError(v("invalid argument. Input array stride must be an integer. Value: `%s`.",x)):new TypeError(v("invalid argument. Output array stride must be an integer. Value: `%s`.",x));s.push(x)}if(u)for(c=[],T=4;T<t;T+=o){if(!g(x=arguments[T]))throw T<d?new TypeError(v("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",x)):new TypeError(v("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",x));c.push(x)}for(p=[],T=2;T<t;T+=o){if(!O(x=arguments[T]))throw T<d?new TypeError(v("invalid argument. Input array must be an array-like object. Value: `%s`.",x)):new TypeError(v("invalid argument. Output array must be an array-like object. Value: `%s`.",x));if(V=(T-2)/o,u){if(w=c[V]+(j-1)*s[V],j>0&&(w<0||w>=x.length))throw T<d?new RangeError("invalid argument. Input array has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array has insufficient elements based on the associated stride and the number of indexed elements.")}else if((j-1)*I(s[V])>=x.length)throw T<d?new RangeError("invalid argument. Input array has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array has insufficient elements based on the associated stride and the number of indexed elements.");p.push(x)}if(w=function(r,n,e,t,i,a,o,u,s){var f,l,d,m;for(f=a,d=0;d<r;d++){for(l=s,m=0;m<n&&e[f+m*i]===o[l];m++)l+=u;if(m===n)return d;f+=t}return-1}(l,f,n,f,1,0,h,1,0),w<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");E=m||r[w];e?u?E(p,y,s,c,e[w]):E(p,y,s,e[w]):u?E(p,y,s,c):E(p,y,s);if(1===a)return p[f-1];if(0===a)return;return p.slice(i)}}r(Xr,"binary",B),r(Xr,"binaryAddonDispatch",H),r(Xr,"binaryDtypeSignatures",(function(r,n,e,t){var i,a,o,u,s,f,l,d,m,c,p,v,g,b,w,j,x;if(o=arguments.length>3?t:{},(f=$(r))instanceof Error)throw f;if(n===r)l=f;else if((l=$(n))instanceof Error)throw l;if(e===r)d=f;else if(e===n)d=l;else if((d=$(e))instanceof Error)throw d;for(d.sort(),i={},g=f.length,b=l.length,s=[],w=0;w<g;w++)for(m=f[w],j=0;j<b;j++)if(c=l[j],-1!==(p=h(m,c))&&null!==p)for(rr(d,p)&&s.push(m,c,p),void 0===(a=i[p])&&(a=Z(d,(a=y(p)).sort()),i[p]=a),x=0;x<a.length;x++)(v=a[x])!==p&&s.push(m,c,v);if(o.enums){for(u=[],w=0;w<s.length;w++)u.push(q(s[w]));s=u}return s})),r(Xr,"binarySignatureCallbacks",(function(r,n){var e,t,i,a,o;for(e=[],o=0;o<n.length;o+=3)t=X(n[o]),i=X(n[o+1]),a=X(n[o+2]),e.push(ir(r,t,i,a));return e})),r(Xr,"cmap",ar),r(Xr,"dmap",or),r(Xr,"dmap2",ur),r(Xr,"dmskmap",sr),r(Xr,"dmskmap2",fr),r(Xr,"dtypeEnum2Str",C),r(Xr,"dtypeResolveEnum",q),r(Xr,"dtypeResolveStr",X),r(Xr,"dtypeStr2Enum",z),r(Xr,"mapBy",lr),r(Xr,"mapBy2",dr),r(Xr,"maxViewBufferIndex",(function(r,n,e){return r>0&&n>0&&(e+=(r-1)*n),e})),r(Xr,"metaDataProps",(function(r,e,t,i){return n(t,"nargs",i?r.nargs+r.nin+r.nout:r.nargs),n(t,"nin",r.nin),n(t,"nout",r.nout),x(t,"types",(function(){return E(e,r.nin,r.nout)})),t})),r(Xr,"minViewBufferIndex",K),r(Xr,"mskunary",mr),r(Xr,"mskunaryAddonDispatch",vr),r(Xr,"mskunaryDtypeSignatures",(function(r,n,e){var t,i,a,o,u,s,f,l,d,m;if(i=arguments.length>2?e:{},(u=br(r))instanceof Error)throw u;if(n===r)s=u;else if((s=br(n))instanceof Error)throw s;for(s.sort(),l=u.length,o=[],d=0;d<l;d++)if(f=u[d],null!==(t=y(f)))for(t=yr(s,t.sort()),m=0;m<t.length;m++)o.push(f,"uint8",t[m]);if(i.enums){for(a=[],d=0;d<o.length;d++)a.push(q(o[d]));o=a}return o})),r(Xr,"mskunarySignatureCallbacks",(function(r,n){var e,t,i,a;for(e=[],a=0;a<n.length;a+=3)t=X(n[a]),i=X(n[a+2]),e.push(Er(r,t,i));return e})),r(Xr,"nullary",Tr),r(Xr,"nullaryAddonDispatch",kr),r(Xr,"offsetView",J),r(Xr,"quaternary",Or),r(Xr,"quinary",Ir),r(Xr,"reinterpretComplex",(function(r,n){if(V(r))return N(r,n);if(S(r))return L(r,n);throw new TypeError(v("invalid argument. First argument must be a complex-valued floating-point array. Value: `%s`.",r))})),r(Xr,"reinterpretComplex64",L),r(Xr,"reinterpretComplex128",N),r(Xr,"smap",Br),r(Xr,"smap2",Rr),r(Xr,"smskmap",Dr),r(Xr,"smskmap2",_r),r(Xr,"ternary",Mr),r(Xr,"unary",Ar),r(Xr,"unaryAddonDispatch",zr),r(Xr,"unaryBy",Nr),r(Xr,"unaryDtypeSignatures",(function(r,n,e){var t,i,a,o,u,s,f,l,d,m;if(i=arguments.length>2?e:{},(u=Gr(r))instanceof Error)throw u;if(n===r)s=u;else if((s=Gr(n))instanceof Error)throw s;for(s.sort(),l=u.length,o=[],d=0;d<l;d++)if(f=u[d],null!==(t=y(f)))for(t=Yr(s,t.sort()),m=0;m<t.length;m++)o.push(f,t[m]);if(i.enums){for(a=[],d=0;d<o.length;d++)a.push(q(o[d]));o=a}return o})),r(Xr,"unarySignatureCallbacks",(function(r,n){var e,t,i,a;for(e=[],a=0;a<n.length;a+=2)t=X(n[a]),i=X(n[a+1]),e.push(Qr(r,t,i));return e})),r(Xr,"zmap",Wr);var $r={};r($r,"base",Xr),r($r,"dispatch",Zr),r($r,"dtypes",D);export{Xr as base,$r as default,Zr as dispatch,D as dtypes};
//# sourceMappingURL=index.mjs.map
