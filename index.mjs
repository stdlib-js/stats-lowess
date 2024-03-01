// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-range@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.1-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@v0.2.1-esm/index.mjs";import{isPrimitive as v}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";function b(s,e,r,t,i,d,f,p,l){var h,j,v,b,c,g,w,u,x,y,E,L;for(c=s[t],h=s[r-1]-s[0],b=.999*(w=o(c-s[i],s[d]-c)),v=.001*w,u=0,L=i;L<r;L++)if(f[L]=0,(E=n(s[L]-c))<=b)f[L]=E>v?m(1-m(E/w,3),3):1,p&&(f[L]*=l[L]),u+=f[L];else if(s[L]>c)break;if(j=L-1,u<=0)return e[t];for(L=i;L<=j;L++)f[L]/=u;if(w>0){for(u=0,L=i;L<=j;L++)u+=f[L]*s[L];for(x=c-u,y=0,L=i;L<=j;L++)y+=f[L]*m(s[L]-u,2);if(a(y)>.001*h)for(x/=y,L=i;L<=j;L++)f[L]*=1+x*(s[L]-u)}for(g=0,L=i;L<=j;L++)g+=f[L]*e[L];return g}function c(s,e){return s-e}function g(s,e){return s[0]-e[0]}function w(a,w,u){var x,y,E,L,T;if(!e(a)&&!s(a))throw new TypeError(t("1Lh8R",a));if(!e(w)&&!s(w))throw new TypeError(t("1Lh9k",w));if(T=a.length,w.length!==T)throw new RangeError(t("1Lh1E"));if(x={},arguments.length>2&&(y=function(s,e){return p(e)?f(e,"f")&&(s.f=e.f,!l(s.f))?new TypeError(t("1Lh4D","f",s.f)):f(e,"nsteps")&&(s.nsteps=e.nsteps,!h(s.nsteps))?new TypeError(t("1Lh2t","nsteps",s.nsteps)):f(e,"delta")&&(s.delta=e.delta,!j(s.delta))?new TypeError(t("1Lh4k","delta",s.delta)):f(e,"sorted")&&(s.sorted=e.sorted,!v(s.sorted))?new TypeError(t("1Lh2o","sorted",s.sorted)):null:new TypeError(t("1Lh2V",e))}(x,u),y))throw y;if(!0!==x.sorted){for(E=new Array(T),L=0;L<T;L++)E[L]=[a[L],w[L]];for(E.sort(g),a=new Array(T),w=new Array(T),L=0;L<T;L++)a[L]=E[L][0],w[L]=E[L][1]}return function(s,e,r,t,a,f){var p,l,h,j,v,g,w,u,x,y,E,L,T,A,k,P,R,q,D;if(r<2)return e;for(P=new Array(r),x=new Array(r),k=new Array(r),L=o(d(i(t*r),r),2),g=1;g<=a+1;g++){h=0,p=L-1,w=-1,R=0;do{for(;p<r-1&&!(s[R]-s[h]<=s[p+1]-s[R]);)h+=1,p+=1;if(P[R]=b(s,e,r,R,h,p,x,g>1,k),w<R-1)for(l=s[R]-s[w],q=w+1;q<R;q++)j=(s[q]-s[w])/l,P[q]=j*P[R]+(1-j)*P[w];for(u=s[w=R]+f,R=w+1;R<r&&!(s[R]>u);R++)s[R]===s[w]&&(P[R]=P[w],w=R);R=o(w+1,R-1)}while(w<r-1);for(R=0;R<r;R++)x[R]=e[R]-P[R];if(g>a)break;for(R=0;R<r;R++)k[R]=n(x[R]);for(k.sort(c),E=r-(y=i(r/2))-1,A=.999*(v=3*(k[y]+k[E])),T=.001*v,R=0;R<r;R++)D=n(x[R]),k[R]=D<=T?1:D>A?0:m(1-m(D/v,2),2)}return{x:s,y:P}}(a,w,T,void 0===x.f?2/3:x.f,void 0===x.nsteps?3:x.nsteps,void 0===x.delta?.01*r(T,a,1):x.delta)}export{w as default};
//# sourceMappingURL=index.mjs.map
