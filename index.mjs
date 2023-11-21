// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-object-inverse@v0.1.0-esm/index.mjs";import{enum as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import{isPrimitive as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-promotion-rules@v0.1.0-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-safe-casts@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.1.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-wrap-function@v0.1.0-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtypes2signatures@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-safe-casts@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-cast-return@v0.1.0-esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as D}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function-array@v0.1.0-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";function C(r,n,s,f){var l,d,m,c,p,v;return c=r[0],e(c)&&(l=t(u(c))),p=r[1],e(p)&&(d=t(u(p))),v=r[2],e(v)&&(m=i(u(v))),l||d||m?function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y;if(!((h=n[0])<=0))for(d=(s=e[0])<0?(1-h)*s:0,m=(f=e[1])<0?(1-h)*f:0,c=(l=e[2])<0?(1-h)*l:0,p=r[0],v=r[1],g=r[2],a=t[0],o=t[1],u=t[2],y=0;y<h;y++)u(g,c,i(a(p,d),o(v,m))),d+=s,m+=f,c+=l}(r,n,s,[l=l||a(u(c)),d=d||a(u(p)),m=m||o(u(v))],f):function(r,n,e,t){var i,a,o,u,s,f,l,d,m,c,p;if(!((c=n[0])<=0))for(u=(i=e[0])<0?(1-c)*i:0,s=(a=e[1])<0?(1-c)*a:0,f=(o=e[2])<0?(1-c)*o:0,l=r[0],d=r[1],m=r[2],p=0;p<c;p++)m[f]=t(l[u],d[s]),u+=i,s+=a,f+=o}(r,n,s,f)}n(C,"ndarray",(function(r,n,s,f,l){var d,m,c,p,v,g;return p=r[0],e(p)&&(d=t(u(p))),v=r[1],e(v)&&(m=t(u(v))),g=r[2],e(g)&&(c=i(u(g))),d||m||c?function(r,n,e,t,i,a){var o,u,s,f,l,d,m,c,p,v,g,h,y,b;if(!((y=n[0])<=0))for(m=t[0],c=t[1],p=t[2],f=e[0],l=e[1],d=e[2],v=r[0],g=r[1],h=r[2],o=i[0],u=i[1],s=i[2],b=0;b<y;b++)s(h,p,a(o(v,m),u(g,c))),m+=f,c+=l,p+=d}(r,n,s,f,[d=d||a(u(p)),m=m||a(u(v)),c=c||o(u(g))],l):function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v;if(!((p=n[0])<=0))for(s=t[0],f=t[1],l=t[2],a=e[0],o=e[1],u=e[2],d=r[0],m=r[1],c=r[2],v=0;v<p;v++)c[l]=i(d[s],m[f]),s+=a,f+=o,l+=u}(r,n,s,f,l)}));var P=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function z(){return P.slice()}var q=d();function L(){return{bool:q.bool,int8:q.int8,uint8:q.uint8,uint8c:q.uint8c,int16:q.int16,uint16:q.uint16,int32:q.int32,uint32:q.uint32,int64:q.int64,uint64:q.uint64,float32:q.float32,float64:q.float64,complex64:q.complex64,complex128:q.complex128,binary:q.binary,generic:q.generic,notype:q.notype,userdefined_type:q.userdefined_type}}n(z,"enum",L),function(n,e){var t,i,a;for(t=m(e),a=0;a<t.length;a++)i=t[a],r(n,i,e[i])}(z,L());var N=l(L(),{duplicates:!1});function Y(r){var n=N[r];return"string"==typeof n?n:null}var G=L();function H(r){var n=G[r];return"number"==typeof n?n:null}function J(r){var n=typeof r;return"number"===n?Y(r)?r:null:"string"===n?H(r):null}function K(r,n){return new c(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,2*(r.length-n))}function Q(r,n){return new p(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,2*(r.length-n))}var W=J("complex64"),X=J("complex128");function Z(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d,m){var c,p,v;if(!f(i)||!f(u)||!f(d))return n(e,t,i,a,o,u,s,l,d,m),d;if(t=J(t),o=J(o),l=J(l),null===t||null===o||null===l)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");c=t===W?K(i,0):t===X?Q(i,0):i;p=o===W?K(u,0):o===X?Q(u,0):u;v=l===W?K(d,0):l===X?Q(d,0):d;return r(e,t,c,a,o,p,s,l,v,m),d}}function $(r,n){return new r.constructor(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*n,r.length-n)}function rr(r,n,e){return r>0&&n<0&&(e+=(r-1)*n),e}var nr=J("complex64"),er=J("complex128");function tr(r){var n=typeof r;return"string"===n?H(r)?r:null:"number"===n?Y(r):null}function ir(r,n){var e,t,i,a,o,u,s;for(t=r.length,i=n.length,e=[],s=0,o=0;o<t&&!(s>=i);o++)for(a=r[o],u=s;u<i;u++)if(a===n[u]){s=u+1,e.push(a);break}return e}function ar(r){var n,e,t;for(n=[],t=0;t<r.length;t++){if(null===(e=tr(r[t])))return new TypeError(v("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",r[t]));n.push(e)}return n}function or(r,n){var e;for(e=0;e<r.length;e++)if(r[e]===n)return!0;return!1}n(Z,"ndarray",(function(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d,m,c,p,h){var y,b,w;if(!f(i)||!f(s)||!f(c))return n(e,t,i,a,o,u,s,l,d,m,c,p,h),c;if(t=J(t),u=J(u),m=J(m),null===t||null===u||null===m)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!g(o))throw new TypeError(v("invalid argument. First input array offset must be a nonnegative integer. Value: `%s`.",o));if(!g(d))throw new TypeError(v("invalid argument. Second input array offset must be a nonnegative integer. Value: `%s`.",d));if(!g(h))throw new TypeError(v("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",h));o=rr(e,a,o),d=rr(e,l,d),h=rr(e,p,h),y=t===nr?K(i,o):t===er?Q(i,o):$(i,o);b=u===nr?K(s,d):u===er?Q(s,d):$(s,d);w=m===nr?K(c,h):m===er?Q(c,h):$(c,h);return r(e,t,y,a,u,b,l,m,w,p),c}}));var ur="complex64",sr="complex128",fr={complex64:b,complex128:w};function lr(r,n,e,t){return t===sr?n===ur?e===sr||e===ur?r[sr]:j(r[sr],2,fr[sr]):n===sr&&(e===sr||e===ur)?r[sr]:j(r[sr],2,fr[sr]):t===ur?n===sr?e===ur||e===sr?r[sr]:j(r[sr],2,fr[sr]):n===ur?e===sr?r[sr]:e===ur?r[ur]:j(r[ur],2,fr[ur]):e===sr?j(r[sr],2,fr[sr]):j(r[ur],2,fr[ur]):"generic"===t?n===sr?e===sr||e===ur?r[sr]:j(r[sr],2,fr[sr]):n===ur?e===ur?r[ur]:e===sr?r[sr]:j(r[ur],2,fr[ur]):e===sr?j(r[sr],2,fr[sr]):e===ur?j(r[ur],2,fr[ur]):r.default:r.default}function dr(r,n,e,t,i,a){var o,u,s;if(r<=0)return t;for(o=e<0?(1-r)*e:0,u=i<0?(1-r)*i:0,s=0;s<r;s++)t.set(a(n.get(o)),u),o+=e,u+=i;return t}function mr(r,n,e,t,i,a){var o,u,s;if(r<=0)return t;for(o=e<0?(1-r)*e:0,u=i<0?(1-r)*i:0,s=0;s<r;s++)t[u]=a(n[o]),o+=e,u+=i;return t}function cr(r,n,e,t,i,a,o,u){var s,f,l,d;if(r<=0)return a;for(s=e<0?(1-r)*e:0,f=i<0?(1-r)*i:0,l=o<0?(1-r)*o:0,d=0;d<r;d++)a[l]=u(n[s],t[f]),s+=e,f+=i,l+=o;return a}function pr(r,n,e,t,i,a,o,u){var s,f,l,d;if(r<=0)return a;for(s=e<0?(1-r)*e:0,f=i<0?(1-r)*i:0,l=o<0?(1-r)*o:0,d=0;d<r;d++)0===t[f]&&(a[l]=u(n[s])),s+=e,f+=i,l+=o;return a}function vr(r,n,e,t,i,a,o,u,s,f){var l,d,m,c,p;if(r<=0)return u;for(l=e<0?(1-r)*e:0,d=i<0?(1-r)*i:0,m=s<0?(1-r)*s:0,c=o<0?(1-r)*o:0,p=0;p<r;p++)0===a[c]&&(u[m]=f(n[l],t[d])),l+=e,d+=i,m+=s,c+=o;return u}function gr(r,n,e,t,i,a,o,u){var s,f;return x(n)&&(s=E(k(n))),x(t)&&(f=T(k(t))),s||f?function(r,n,e,t,i,a,o,u,s,f){var l,d,m,c;if(r<=0)return i;for(l=e<0?(1-r)*e:0,d=a<0?(1-r)*a:0,c=0;c<r;c++)void 0!==(m=s.call(f,t(n,l),c,[l,d],[n,i]))&&o(i,d,u(m)),l+=e,d+=a;return i}(r,n,e,s=s||V(k(n)),t,i,f=f||S(k(t)),a,o,u):function(r,n,e,t,i,a,o,u){var s,f,l,d;if(r<=0)return t;for(s=e<0?(1-r)*e:0,f=i<0?(1-r)*i:0,d=0;d<r;d++)void 0!==(l=o.call(u,n[s],d,[s,f],[n,t]))&&(t[f]=a(l)),s+=e,f+=i;return t}(r,n,e,t,i,a,o,u)}function hr(r,n,e,t,i,a,o,u,s,f){var l,d,m;return x(n)&&(l=E(k(n))),x(t)&&(d=E(k(t))),x(a)&&(m=T(k(a))),l||d||m?function(r,n,e,t,i,a,o,u,s,f,l,d,m){var c,p,v,g,h;if(r<=0)return u;for((p=[0,0,0])[0]=e<0?(1-r)*e:0,p[1]=a<0?(1-r)*a:0,p[2]=s<0?(1-r)*s:0,v=[n,i,u],c=[0,0],h=0;h<r;h++)c[0]=t(n,p[0]),c[1]=o(i,p[1]),void 0!==(g=d.call(m,c,h,p,v))&&f(u,p[2],l(g[0],g[1])),p[0]+=e,p[1]+=a,p[2]+=s;return u}(r,n,e,l=l||V(k(n)),t,i,d=d||V(k(t)),a,o,m=m||S(k(a)),u,s,f):function(r,n,e,t,i,a,o,u,s,f){var l,d,m,c,p;if(r<=0)return a;for((d=[0,0,0])[0]=e<0?(1-r)*e:0,d[1]=i<0?(1-r)*i:0,d[2]=o<0?(1-r)*o:0,m=[n,t,a],l=[0,0],p=0;p<r;p++)l[0]=n[d[0]],l[1]=t[d[1]],void 0!==(c=s.call(f,l,p,d,m))&&(a[d[2]]=u(c[0],c[1])),d[0]+=e,d[1]+=i,d[2]+=o;return a}(r,n,e,t,i,a,o,u,s,f)}function yr(r,n,e,t){var i,a,o,u,s,f;return u=r[0],x(u)&&(i=E(k(u))),s=r[1],x(s)&&(a=E(k(s))),f=r[2],x(f)&&(o=T(k(f))),i||a||o?function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y;if(!((h=n[0])<=0))for(d=(s=e[0])<0?(1-h)*s:0,m=(f=e[1])<0?(1-h)*f:0,c=(l=e[2])<0?(1-h)*l:0,p=r[0],v=r[1],g=r[2],a=t[0],o=t[1],u=t[2],y=0;y<h;y++)0===o(v,m)&&u(g,c,i(a(p,d))),d+=s,m+=f,c+=l}(r,n,e,[i=i||V(k(u)),a=a||V(k(s)),o=o||S(k(f))],t):function(r,n,e,t){var i,a,o,u,s,f,l,d,m,c,p;if(!((c=n[0])<=0))for(u=(i=e[0])<0?(1-c)*i:0,s=(a=e[1])<0?(1-c)*a:0,f=(o=e[2])<0?(1-c)*o:0,l=r[0],d=r[1],m=r[2],p=0;p<c;p++)0===d[s]&&(m[f]=t(l[u])),u+=i,s+=a,f+=o}(r,n,e,t)}n(dr,"ndarray",(function(r,n,e,t,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=t,f=o,l=0;l<r;l++)i.set(u(n.get(s)),f),s+=e,f+=a;return i})),n(mr,"ndarray",(function(r,n,e,t,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=t,f=o,l=0;l<r;l++)i[f]=u(n[s]),s+=e,f+=a;return i})),n(cr,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l){var d,m,c,p;if(r<=0)return u;for(d=t,m=o,c=f,p=0;p<r;p++)u[c]=l(n[d],i[m]),d+=e,m+=a,c+=s;return u})),n(pr,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l){var d,m,c,p;if(r<=0)return u;for(d=t,m=o,c=f,p=0;p<r;p++)0===i[m]&&(u[c]=l(n[d])),d+=e,m+=a,c+=s;return u})),n(vr,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l,d,m,c){var p,v,g,h,y;if(r<=0)return l;for(p=t,v=o,g=m,h=f,y=0;y<r;y++)0===u[h]&&(l[g]=c(n[p],i[v])),p+=e,v+=a,g+=d,h+=s;return l})),n(gr,"ndarray",(function(r,n,e,t,i,a,o,u,s,f){var l,d;return x(n)&&(l=E(k(n))),x(i)&&(d=T(k(i))),l||d?function(r,n,e,t,i,a,o,u,s,f,l,d){var m,c,p,v;if(r<=0)return a;for(m=t,c=u,v=0;v<r;v++)void 0!==(p=l.call(d,i(n,m),v,[m,c],[n,a]))&&s(a,c,f(p)),m+=e,c+=o;return a}(r,n,e,t,l=l||V(k(n)),i,a,o,d=d||S(k(i)),u,s,f):function(r,n,e,t,i,a,o,u,s,f){var l,d,m,c;if(r<=0)return i;for(l=t,d=o,c=0;c<r;c++)void 0!==(m=s.call(f,n[l],c,[l,d],[n,i]))&&(i[d]=u(m)),l+=e,d+=a;return i}(r,n,e,t,i,a,o,u,s,f)})),n(hr,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l,d,m){var c,p,v;return x(n)&&(c=E(k(n))),x(i)&&(p=E(k(i))),x(u)&&(v=T(k(u))),c||p||v?function(r,n,e,t,i,a,o,u,s,f,l,d,m,c,p,v){var g,h,y,b,w;if(r<=0)return f;for(h=[t,u,d],y=[n,a,f],g=[0,0],w=0;w<r;w++)g[0]=i(n,h[0]),g[1]=s(a,h[1]),void 0!==(b=p.call(v,g,w,h,y))&&m(f,h[2],c(b[0],b[1])),h[0]+=e,h[1]+=o,h[2]+=l;return f}(r,n,e,t,c=c||V(k(n)),i,a,o,p=p||V(k(i)),u,s,f,v=v||S(k(u)),l,d,m):function(r,n,e,t,i,a,o,u,s,f,l,d,m){var c,p,v,g,h;if(r<=0)return u;for(p=[t,o,f],v=[n,i,u],c=[0,0],h=0;h<r;h++)c[0]=n[p[0]],c[1]=i[p[1]],void 0!==(g=d.call(m,c,h,p,v))&&(u[p[2]]=l(g[0],g[1])),p[0]+=e,p[1]+=a,p[2]+=s;return u}(r,n,e,t,i,a,o,u,s,f,l,d,m)})),n(yr,"ndarray",(function(r,n,e,t,i){var a,o,u,s,f,l;return s=r[0],x(s)&&(a=E(k(s))),f=r[1],x(f)&&(o=E(k(f))),l=r[2],x(l)&&(u=T(k(l))),a||o||u?function(r,n,e,t,i,a){var o,u,s,f,l,d,m,c,p,v,g,h,y,b;if(!((y=n[0])<=0))for(m=t[0],c=t[1],p=t[2],f=e[0],l=e[1],d=e[2],v=r[0],g=r[1],h=r[2],o=i[0],u=i[1],s=i[2],b=0;b<y;b++)0===u(g,c)&&s(h,p,a(o(v,m))),m+=f,c+=l,p+=d}(r,n,e,t,[a=a||V(k(s)),o=o||V(k(f)),u=u||S(k(l))],i):function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v;if(!((p=n[0])<=0))for(s=t[0],f=t[1],l=t[2],a=e[0],o=e[1],u=e[2],d=r[0],m=r[1],c=r[2],v=0;v<p;v++)0===m[f]&&(c[l]=i(d[s])),s+=a,f+=o,l+=u}(r,n,e,t,i)}));var br=J("complex64"),wr=J("complex128");function jr(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,f,l,d){var m,c;if(!O(i)||!O(l)||!O(u))return n(e,t,i,a,o,u,s,f,l,d),l;if(t=J(t),f=J(f),o=J(o),null===t||null===f||null===o)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");m=t===br?K(i,0):t===wr?Q(i,0):i;c=f===br?K(l,0):f===wr?Q(l,0):l;return r(e,t,m,a,o,u,s,f,c,d),l}}var xr=J("complex64"),Er=J("complex128");function Tr(r,n){var e,t,i,a,o,u,s;for(t=r.length,i=n.length,e=[],s=0,o=0;o<t&&!(s>=i);o++)for(a=r[o],u=s;u<i;u++)if(a===n[u]){s=u+1,e.push(a);break}return e}function Vr(r){var n,e,t;for(n=[],t=0;t<r.length;t++){if(null===(e=tr(r[t])))return new TypeError(v("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",r[t]));n.push(e)}return n}n(jr,"ndarray",(function(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d,m,c,p,h){var y,b,w;if(!f(i)||!f(c)||!f(s))return n(e,t,i,a,o,u,s,l,d,m,c,p,h),c;if(t=J(t),m=J(m),u=J(u),null===t||null===m||null===u)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!g(o))throw new TypeError(v("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",o));if(!g(h))throw new TypeError(v("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",h));if(!g(d))throw new TypeError(v("invalid argument. Mask array offset must be a nonnegative integer. Value: `%s`.",d));o=rr(e,a,o),h=rr(e,p,h),d=rr(e,l,d),b=t===xr?K(i,o):t===Er?Q(i,o):$(i,o);w=m===xr?K(c,h):m===Er?Q(c,h):$(c,h);return y=$(s,d),r(e,t,b,a,u,y,l,m,w,p),c}}));var Sr="complex64",kr="complex128",Fr={complex64:b,complex128:w};function Ur(r,n,e){return e===kr?n===Sr||n===kr?r[kr]:B(r.default,1,Fr[e]):e===Sr?n===Sr?r[Sr]:n===kr?r[kr]:B(r.default,1,Fr[e]):"generic"===e?n===kr?r[kr]:n===Sr?r[Sr]:r.default:r.default}function Or(r,n,e,t){var a,o;return o=r[0],x(o)&&(a=i(k(o))),a?function(r,n,e,t,i){var a,o,u,s,f,l;if(!((f=n[0])<=0))for(u=(o=e[0])<0?(1-f)*o:0,s=r[0],a=t[0],l=0;l<f;l++)a(s,u,i()),u+=o}(r,n,e,[a=a||S(k(o))],t):function(r,n,e,t){var i,a,o,u,s;if(!((u=n[0])<=0))for(a=(i=e[0])<0?(1-u)*i:0,o=r[0],s=0;s<u;s++)o[a]=t(),a+=i}(r,n,e,t)}n(Or,"ndarray",(function(r,n,e,t,i){var a,o;return o=r[0],x(o)&&(a=T(k(o))),a?function(r,n,e,t,i,a){var o,u,s,f,l,d;if(!((l=n[0])<=0))for(s=t[0],u=e[0],f=r[0],o=i[0],d=0;d<l;d++)o(f,s,a()),s+=u}(r,n,e,t,[a=a||S(k(o))],i):function(r,n,e,t,i){var a,o,u,s,f;if(!((s=n[0])<=0))for(o=t[0],a=e[0],u=r[0],f=0;f<s;f++)u[o]=i(),o+=a}(r,n,e,t,i)}));var Ir=J("complex64"),Br=J("complex128");function Rr(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a){var o;if(!O(i))return n(e,t,i,a),i;if(null===(t=J(t)))throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");o=t===Ir?K(i,0):t===Br?Q(i,0):i;return r(e,t,o,a),i}}var Dr=J("complex64"),_r=J("complex128");function Mr(r,n,e,t){var i,a,o,u,s,f,l,d,m,c,p,v,g,h,y,b,w;if(!((b=n[0])<=0))for(f=(i=e[0])<0?(1-b)*i:0,l=(a=e[1])<0?(1-b)*a:0,d=(o=e[2])<0?(1-b)*o:0,m=(u=e[3])<0?(1-b)*u:0,c=(s=e[4])<0?(1-b)*s:0,p=r[0],v=r[1],g=r[2],h=r[3],y=r[4],w=0;w<b;w++)y[c]=t(p[f],v[l],g[d],h[m]),f+=i,l+=a,d+=o,m+=u,c+=s}function Ar(r,n,e,t){var i,a,o,u,s,f,l,d,m,c,p,v,g,h,y,b,w,j,x,E;if(!((x=n[0])<=0))for(l=(i=e[0])<0?(1-x)*i:0,d=(a=e[1])<0?(1-x)*a:0,m=(o=e[2])<0?(1-x)*o:0,c=(u=e[3])<0?(1-x)*u:0,p=(s=e[4])<0?(1-x)*s:0,v=(f=e[5])<0?(1-x)*f:0,g=r[0],h=r[1],y=r[2],b=r[3],w=r[4],j=r[5],E=0;E<x;E++)j[v]=t(g[l],h[d],y[m],b[c],w[p]),l+=i,d+=a,m+=o,c+=u,p+=s,v+=f}function Cr(r,n,e,t,i,a){var o,u,s;if(r<=0)return t;for(o=e<0?(1-r)*e:0,u=i<0?(1-r)*i:0,s=0;s<r;s++)t[u]=a(n[o]),o+=e,u+=i;return t}function Pr(r,n,e,t,i,a,o,u){var s,f,l,d;if(r<=0)return a;for(s=e<0?(1-r)*e:0,f=i<0?(1-r)*i:0,l=o<0?(1-r)*o:0,d=0;d<r;d++)a[l]=u(n[s],t[f]),s+=e,f+=i,l+=o;return a}function zr(r,n,e,t,i,a,o,u){var s,f,l,d;if(r<=0)return a;for(s=e<0?(1-r)*e:0,f=i<0?(1-r)*i:0,l=o<0?(1-r)*o:0,d=0;d<r;d++)0===t[f]&&(a[l]=u(n[s])),s+=e,f+=i,l+=o;return a}function qr(r,n,e,t,i,a,o,u,s,f){var l,d,m,c,p;if(r<=0)return u;for(l=e<0?(1-r)*e:0,d=i<0?(1-r)*i:0,m=s<0?(1-r)*s:0,c=o<0?(1-r)*o:0,p=0;p<r;p++)0===a[c]&&(u[m]=f(n[l],t[d])),l+=e,d+=i,m+=s,c+=o;return u}function Lr(r,n,e,t){var i,a,o,u,s,f,l,d,m,c,p,v,g,h;if(!((g=n[0])<=0))for(s=(i=e[0])<0?(1-g)*i:0,f=(a=e[1])<0?(1-g)*a:0,l=(o=e[2])<0?(1-g)*o:0,d=(u=e[3])<0?(1-g)*u:0,m=r[0],c=r[1],p=r[2],v=r[3],h=0;h<g;h++)v[d]=t(m[s],c[f],p[l]),s+=i,f+=a,l+=o,d+=u}function Nr(r,n,s,f){var l,d,m,c;return m=r[0],e(m)&&(l=t(u(m))),c=r[1],e(c)&&(d=i(u(c))),l||d?function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p;if(!((c=n[0])<=0))for(f=(u=e[0])<0?(1-c)*u:0,l=(s=e[1])<0?(1-c)*s:0,d=r[0],m=r[1],a=t[0],o=t[1],p=0;p<c;p++)o(m,l,i(a(d,f))),f+=u,l+=s}(r,n,s,[l=l||a(u(m)),d=d||o(u(c))],f):function(r,n,e,t){var i,a,o,u,s,f,l,d;if(!((l=n[0])<=0))for(o=(i=e[0])<0?(1-l)*i:0,u=(a=e[1])<0?(1-l)*a:0,s=r[0],f=r[1],d=0;d<l;d++)f[u]=t(s[o]),o+=i,u+=a}(r,n,s,f)}n(Rr,"ndarray",(function(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o){var u;if(!O(i))return n(e,t,i,a,o),i;if(null===(t=J(t)))throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!g(o))throw new TypeError(v("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",o));o=rr(e,a,o),u=t===Dr?K(i,o):t===_r?Q(i,o):$(i,o);return r(e,t,u,a),i}})),n(Mr,"ndarray",(function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y,b,w,j;if(!((w=n[0])<=0))for(l=t[0],d=t[1],m=t[2],c=t[3],p=t[4],a=e[0],o=e[1],u=e[2],s=e[3],f=e[4],v=r[0],g=r[1],h=r[2],y=r[3],b=r[4],j=0;j<w;j++)b[p]=i(v[l],g[d],h[m],y[c]),l+=a,d+=o,m+=u,c+=s,p+=f})),n(Ar,"ndarray",(function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y,b,w,j,x,E,T;if(!((E=n[0])<=0))for(d=t[0],m=t[1],c=t[2],p=t[3],v=t[4],g=t[5],a=e[0],o=e[1],u=e[2],s=e[3],f=e[4],l=e[5],h=r[0],y=r[1],b=r[2],w=r[3],j=r[4],x=r[5],T=0;T<E;T++)x[g]=i(h[d],y[m],b[c],w[p],j[v]),d+=a,m+=o,c+=u,p+=s,v+=f,g+=l})),n(Cr,"ndarray",(function(r,n,e,t,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=t,f=o,l=0;l<r;l++)i[f]=u(n[s]),s+=e,f+=a;return i})),n(Pr,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l){var d,m,c,p;if(r<=0)return u;for(d=t,m=o,c=f,p=0;p<r;p++)u[c]=l(n[d],i[m]),d+=e,m+=a,c+=s;return u})),n(zr,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l){var d,m,c,p;if(r<=0)return u;for(d=t,m=o,c=f,p=0;p<r;p++)0===i[m]&&(u[c]=l(n[d])),d+=e,m+=a,c+=s;return u})),n(qr,"ndarray",(function(r,n,e,t,i,a,o,u,s,f,l,d,m,c){var p,v,g,h,y;if(r<=0)return l;for(p=t,v=o,g=m,h=f,y=0;y<r;y++)0===u[h]&&(l[g]=c(n[p],i[v])),p+=e,v+=a,g+=d,h+=s;return l})),n(Lr,"ndarray",(function(r,n,e,t,i){var a,o,u,s,f,l,d,m,c,p,v,g,h,y;if(!((h=n[0])<=0))for(f=t[0],l=t[1],d=t[2],m=t[3],a=e[0],o=e[1],u=e[2],s=e[3],c=r[0],p=r[1],v=r[2],g=r[3],y=0;y<h;y++)g[m]=i(c[f],p[l],v[d]),f+=a,l+=o,d+=u,m+=s})),n(Nr,"ndarray",(function(r,n,s,f,l){var d,m,c,p;return c=r[0],e(c)&&(d=t(u(c))),p=r[1],e(p)&&(m=i(u(p))),d||m?function(r,n,e,t,i,a){var o,u,s,f,l,d,m,c,p,v;if(!((p=n[0])<=0))for(l=t[0],d=t[1],s=e[0],f=e[1],m=r[0],c=r[1],o=i[0],u=i[1],v=0;v<p;v++)u(c,d,a(o(m,l))),l+=s,d+=f}(r,n,s,f,[d=d||a(u(c)),m=m||o(u(p))],l):function(r,n,e,t,i){var a,o,u,s,f,l,d,m;if(!((d=n[0])<=0))for(u=t[0],s=t[1],a=e[0],o=e[1],f=r[0],l=r[1],m=0;m<d;m++)l[s]=i(f[u]),u+=a,s+=o}(r,n,s,f,l)}));var Yr=J("complex64"),Gr=J("complex128");function Hr(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s){var l,d;if(!f(i)||!f(u))return n(e,t,i,a,o,u,s),u;if(t=J(t),o=J(o),null===t||null===o)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");l=t===Yr?K(i,0):t===Gr?Q(i,0):i;d=o===Yr?K(u,0):o===Gr?Q(u,0):u;return r(e,t,l,a,o,d,s),u}}var Jr=J("complex64"),Kr=J("complex128");function Qr(r,n,e,t,i,a){var o,u,s,f,l,d,m,c,p;if(!((m=n[0])<=0))for(s=(o=e[0])<0?(1-m)*o:0,f=(u=e[1])<0?(1-m)*u:0,l=r[0],d=r[1],p=0;p<m;p++)void 0!==(c=i.call(a,l[s],p,[s,f],[l,d]))&&(d[f]=t(c)),s+=o,f+=u}function Wr(r,n,e,t,i,a,o){var u,s,f,l,d,m,c,p,v,g,h;if(!((v=n[0])<=0))for(d=(f=e[0])<0?(1-v)*f:0,m=(l=e[1])<0?(1-v)*l:0,c=r[0],p=r[1],u=t[0],s=t[1],h=0;h<v;h++)void 0!==(g=a.call(o,u(c,d),h,[d,m],[c,p]))&&s(p,m,i(g)),d+=f,m+=l}function Xr(r,n,s,f,l){var d,m,c,p,v;return arguments.length>5&&(d=arguments[5]),p=r[0],e(p)&&(m=t(u(p))),v=r[1],e(v)&&(c=i(u(v))),m||c?Wr(r,n,s,[m=m||a(u(p)),c=c||o(u(v))],f,l,d):Qr(r,n,s,f,l,d)}function Zr(r,n,e,t,i,a,o){var u,s,f,l,d,m,c,p,v;if(!((c=n[0])<=0))for(f=t[0],l=t[1],u=e[0],s=e[1],d=r[0],m=r[1],v=0;v<c;v++)void 0!==(p=a.call(o,d[f],v,[f,l],[d,m]))&&(m[l]=i(p)),f+=u,l+=s}function $r(r,n,e,t,i,a,o,u){var s,f,l,d,m,c,p,v,g,h,y;if(!((g=n[0])<=0))for(m=t[0],c=t[1],l=e[0],d=e[1],p=r[0],v=r[1],s=i[0],f=i[1],y=0;y<g;y++)void 0!==(h=o.call(u,s(p,m),y,[m,c],[p,v]))&&f(v,c,a(h)),m+=l,c+=d}function rn(r,n){var e,t,i,a,o,u,s;for(t=r.length,i=n.length,e=[],s=0,o=0;o<t&&!(s>=i);o++)for(a=r[o],u=s;u<i;u++)if(a===n[u]){s=u+1,e.push(a);break}return e}function nn(r){var n,e,t;for(n=[],t=0;t<r.length;t++){if(null===(e=tr(r[t])))return new TypeError(v("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",r[t]));n.push(e)}return n}n(Hr,"ndarray",(function(r,n){if(!s(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));if(!s(n))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",n));return function(e,t,i,a,o,u,s,l,d){var m,c;if(!f(i)||!f(s))return n(e,t,i,a,o,u,s,l,d),s;if(t=J(t),u=J(u),null===t||null===u)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!g(o))throw new TypeError(v("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",o));if(!g(d))throw new TypeError(v("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",d));o=rr(e,a,o),d=rr(e,l,d),m=t===Jr?K(i,o):t===Kr?Q(i,o):$(i,o);c=u===Jr?K(s,d):u===Kr?Q(s,d):$(s,d);return r(e,t,m,a,u,c,l),s}})),n(Xr,"ndarray",(function(r,n,s,f,l,d){var m,c,p,v,g;return arguments.length>6&&(m=arguments[6]),v=r[0],e(v)&&(c=t(u(v))),g=r[1],e(g)&&(p=i(u(g))),c||p?$r(r,n,s,f,[c=c||a(u(v)),p=p||o(u(g))],l,d,m):Zr(r,n,s,f,l,d,m)}));var en="complex64",tn="complex128",an={complex64:b,complex128:w};function on(r,n,e){return e===tn?n===en||n===tn?r[tn]:B(r.default,1,an[e]):e===en?n===en?r[en]:n===tn?r[tn]:B(r.default,1,an[e]):"generic"===e?n===tn?r[tn]:n===en?r[en]:r.default:r.default}function un(r,n,e,t,i,a){var o,u,s;if(r<=0)return t;for(o=e<0?(1-r)*e:0,u=i<0?(1-r)*i:0,s=0;s<r;s++)t.set(a(n.get(o)),u),o+=e,u+=i;return t}n(un,"ndarray",(function(r,n,e,t,i,a,o,u){var s,f,l;if(r<=0)return i;for(s=t,f=o,l=0;l<r;l++)i.set(u(n.get(s)),f),s+=e,f+=a;return i}));var sn={};function fn(r,n,e,t,i,a,o,u,s){var f,l,d,m;for(f=a,d=0;d<r;d++){for(l=s,m=0;m<n&&e[f+m*i]===o[l];m++)l+=u;if(m===n)return d;f+=t}return-1}function ln(r,n,e,t,i,a){var o,u,f,l,d,m;if(s(r))m=r;else if(!_(r))throw new TypeError(v("invalid argument. First argument must be either a function or an array of functions. Value: `%s`.",r));if(!M(n))throw new TypeError(v("invalid argument. Second argument must be an array-like object. Value: `%s`.",n));if(!M(e)&&null!==e)throw new TypeError(v("invalid argument. Third argument must be an array-like object or null. Value: `%s`.",e));if(!R(t))throw new TypeError(v("invalid argument. Fourth argument must be a positive integer. Value: `%s`.",t));if(!g(i))throw new TypeError(v("invalid argument. Fifth argument must be a nonnegative integer. Value: `%s`.",i));if(!g(a))throw new TypeError(v("invalid argument. Sixth argument must be a nonnegative integer. Value: `%s`.",a));if(0===(f=i+a))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(m){if(l=n.length/f,!D(l))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(l=r.length,n.length!==l*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(e&&e.length!==l)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===t)u=!1;else{if(4*f+1!==t)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");u=!0}return d=i*(o=u?4:3)+1,function(){var s,c,p,h,y,b,w,j,x,E,T,V;if((b=arguments.length)!==t){if(b<t)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!D(j=arguments[0]))throw new TypeError(v("invalid argument. First argument must be an integer. Value: `%s`.",j));for(y=[j],h=[],T=1;T<t;T+=o)h.push(arguments[T]);for(s=[],T=3;T<t;T+=o){if(!D(x=arguments[T]))throw T<d?new TypeError(v("invalid argument. Input array stride must be an integer. Value: `%s`.",x)):new TypeError(v("invalid argument. Output array stride must be an integer. Value: `%s`.",x));s.push(x)}if(u)for(c=[],T=4;T<t;T+=o){if(!g(x=arguments[T]))throw T<d?new TypeError(v("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",x)):new TypeError(v("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",x));c.push(x)}for(p=[],T=2;T<t;T+=o){if(!M(x=arguments[T]))throw T<d?new TypeError(v("invalid argument. Input array must be an array-like object. Value: `%s`.",x)):new TypeError(v("invalid argument. Output array must be an array-like object. Value: `%s`.",x));if(V=(T-2)/o,u){if(w=c[V]+(j-1)*s[V],j>0&&(w<0||w>=x.length))throw T<d?new RangeError("invalid argument. Input array has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array has insufficient elements based on the associated stride and the number of indexed elements.")}else if((j-1)*A(s[V])>=x.length)throw T<d?new RangeError("invalid argument. Input array has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array has insufficient elements based on the associated stride and the number of indexed elements.");p.push(x)}if((w=fn(l,f,n,f,1,0,h,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");E=m||r[w];e?u?E(p,y,s,c,e[w]):E(p,y,s,e[w]):u?E(p,y,s,c):E(p,y,s);if(1===a)return p[f-1];if(0===a)return;return p.slice(i)}}r(sn,"binary",C),r(sn,"binaryAddonDispatch",Z),r(sn,"binaryDtypeSignatures",(function(r,n,e,t){var i,a,o,u,s,f,l,d,m,c,p,v,g,b,w,j,x;if(o=arguments.length>3?t:{},(f=ar(r))instanceof Error)throw f;if(n===r)l=f;else if((l=ar(n))instanceof Error)throw l;if(e===r)d=f;else if(e===n)d=l;else if((d=ar(e))instanceof Error)throw d;for(d.sort(),i={},g=f.length,b=l.length,s=[],w=0;w<g;w++)for(m=f[w],j=0;j<b;j++)if(c=l[j],-1!==(p=h(m,c))&&null!==p)for(or(d,p)&&s.push(m,c,p),void 0===(a=i[p])&&(a=ir(d,(a=y(p)).sort()),i[p]=a),x=0;x<a.length;x++)(v=a[x])!==p&&s.push(m,c,v);if(o.enums){for(u=[],w=0;w<s.length;w++)u.push(J(s[w]));s=u}return s})),r(sn,"binarySignatureCallbacks",(function(r,n){var e,t,i,a,o;for(e=[],o=0;o<n.length;o+=3)t=tr(n[o]),i=tr(n[o+1]),a=tr(n[o+2]),e.push(lr(r,t,i,a));return e})),r(sn,"cmap",dr),r(sn,"dmap",mr),r(sn,"dmap2",cr),r(sn,"dmskmap",pr),r(sn,"dmskmap2",vr),r(sn,"dtypeEnum2Str",Y),r(sn,"dtypeResolveEnum",J),r(sn,"dtypeResolveStr",tr),r(sn,"dtypeStr2Enum",H),r(sn,"mapBy",gr),r(sn,"mapBy2",hr),r(sn,"maxViewBufferIndex",(function(r,n,e){return r>0&&n>0&&(e+=(r-1)*n),e})),r(sn,"metaDataProps",(function(r,e,t,i){return n(t,"nargs",i?r.nargs+r.nin+r.nout:r.nargs),n(t,"nin",r.nin),n(t,"nout",r.nout),F(t,"types",(function(){return U(e,r.nin,r.nout)})),t})),r(sn,"minViewBufferIndex",rr),r(sn,"mskunary",yr),r(sn,"mskunaryAddonDispatch",jr),r(sn,"mskunaryDtypeSignatures",(function(r,n,e){var t,i,a,o,u,s,f,l,d,m;if(i=arguments.length>2?e:{},(u=Vr(r))instanceof Error)throw u;if(n===r)s=u;else if((s=Vr(n))instanceof Error)throw s;for(s.sort(),l=u.length,o=[],d=0;d<l;d++)if(f=u[d],null!==(t=I(f)))for(t=Tr(s,t.sort()),m=0;m<t.length;m++)o.push(f,"uint8",t[m]);if(i.enums){for(a=[],d=0;d<o.length;d++)a.push(J(o[d]));o=a}return o})),r(sn,"mskunarySignatureCallbacks",(function(r,n){var e,t,i,a;for(e=[],a=0;a<n.length;a+=3)t=tr(n[a]),i=tr(n[a+2]),e.push(Ur(r,t,i));return e})),r(sn,"nullary",Or),r(sn,"nullaryAddonDispatch",Rr),r(sn,"offsetView",$),r(sn,"quaternary",Mr),r(sn,"quinary",Ar),r(sn,"reinterpretComplex64",K),r(sn,"reinterpretComplex128",Q),r(sn,"smap",Cr),r(sn,"smap2",Pr),r(sn,"smskmap",zr),r(sn,"smskmap2",qr),r(sn,"ternary",Lr),r(sn,"unary",Nr),r(sn,"unaryAddonDispatch",Hr),r(sn,"unaryBy",Xr),r(sn,"unaryDtypeSignatures",(function(r,n,e){var t,i,a,o,u,s,f,l,d,m;if(i=arguments.length>2?e:{},(u=nn(r))instanceof Error)throw u;if(n===r)s=u;else if((s=nn(n))instanceof Error)throw s;for(s.sort(),l=u.length,o=[],d=0;d<l;d++)if(f=u[d],null!==(t=y(f)))for(t=rn(s,t.sort()),m=0;m<t.length;m++)o.push(f,t[m]);if(i.enums){for(a=[],d=0;d<o.length;d++)a.push(J(o[d]));o=a}return o})),r(sn,"unarySignatureCallbacks",(function(r,n){var e,t,i,a;for(e=[],a=0;a<n.length;a+=2)t=tr(n[a]),i=tr(n[a+1]),e.push(on(r,t,i));return e})),r(sn,"zmap",un);var dn={};r(dn,"base",sn),r(dn,"dispatch",ln),r(dn,"dtypes",z);export{sn as base,dn as default,ln as dispatch,z as dtypes};
//# sourceMappingURL=index.mjs.map
