// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).lowess=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,h,"$1e"),n=l.call(n,b,"e"),n=l.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,v,"$1."),n=l.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=isNaN,E=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function _(r){var t,e,n,o,a,f,c,s,l,p,y,v,d;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)f+=n;else{if(t=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,l=0;l<e.length;l++)switch(o=e.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),f+=n.arg||"",c+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function S(r){var t,e,n,i;for(e=[],i=0,n=T.exec(r);n;)(t=r.slice(i,T.lastIndex-n[0].length)).length&&e.push(t),e.push(N(n)),i=T.lastIndex,n=T.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function U(r){var t,e;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[S(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return _.apply(null,t)}var k,I=Object.prototype,x=I.toString,F=I.__defineGetter__,L=I.__defineSetter__,P=I.__lookupGetter__,V=I.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===x.call(e))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(P.call(r,t)||V.call(r,t)?(n=r.__proto__,r.__proto__=I,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,t,e.get),a&&L&&L.call(r,t,e.set),r};var R=k;function C(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var G=Math.floor;function $(r){return G(r)===r}var B=4294967295;function H(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&$(r.length)&&r.length>=0&&r.length<=B}(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}function M(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return W&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&Y.call(r,t)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var J=Z()?function(r){var t,e,n;if(null==r)return X.call(r);e=r[D],t=q(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return n=X.call(r),t?r[D]=e:delete r[D],n}:function(r){return X.call(r)},K=Number,Q=K.prototype.toString;var rr=Z();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function er(r){return M(r)||tr(r)}C(er,"isPrimitive",M),C(er,"isObject",tr);var nr=H(er.isPrimitive),ir=H(er.isObject),or=H(er);C(or,"primitives",nr),C(or,"objects",ir);var ar=Number.POSITIVE_INFINITY,ur=K.NEGATIVE_INFINITY;function fr(r){return r<ar&&r>ur&&$(r)}function cr(r){return M(r)&&fr(r)}function sr(r){return tr(r)&&fr(r.valueOf())}function lr(r){return cr(r)||sr(r)}function pr(r){return cr(r)&&r>=0}function yr(r){return sr(r)&&r.valueOf()>=0}function vr(r){return pr(r)||yr(r)}C(lr,"isPrimitive",cr),C(lr,"isObject",sr),C(vr,"isPrimitive",pr),C(vr,"isObject",yr);var dr=9007199254740991;function gr(r){return null!==r&&"object"==typeof r&&pr(r.length)&&r.length<=dr&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}function br(r){return r!=r}function hr(r,t,e){var n,i,o,a,u;if(r<=0)return NaN;if(1===r||0===e)return br(t[0])?NaN:0;for(n=i=t[o=e<0?(1-r)*e:0],u=1;u<r;u++){if(br(a=t[o+=e]))return a;a<i?i=a:a>n&&(n=a)}return n-i}function wr(){var r,t=arguments,e="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function mr(r){return Math.abs(r)}function jr(r,t){return br(r)||br(t)?NaN:r===ar||t===ar?ar:r===t&&0===r?function(r){return 0===r&&1/r===ar}(r)?r:t:r>t?r:t}function Ar(r,t){return br(r)||br(t)?NaN:r===ur||t===ur?ur:r===t&&0===r?function(r){return 0===r&&1/r===ur}(r)?r:t:r<t?r:t}function Er(r){return $(r/2)}function Or(r){return Er(r>0?r-1:r+1)}function _r(r){return r===ar||r===ur}C(hr,"ndarray",(function(r,t,e,n){var i,o,a,u,f;if(r<=0)return NaN;if(1===r||0===e)return br(t[n])?NaN:0;for(i=o=t[a=n],f=1;f<r;f++){if(br(u=t[a+=e]))return u;u<o?o=u:u>i&&(i=u)}return i-o}));var Tr=Math.sqrt,Nr="function"==typeof Uint32Array;var Sr="function"==typeof Uint32Array?Uint32Array:null;var Ur,kr="function"==typeof Uint32Array?Uint32Array:void 0;Ur=function(){var r,t,e;if("function"!=typeof Sr)return!1;try{t=new Sr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Nr&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Ir=Ur,xr="function"==typeof Float64Array;var Fr="function"==typeof Float64Array?Float64Array:null;var Lr,Pr="function"==typeof Float64Array?Float64Array:void 0;Lr=function(){var r,t,e;if("function"!=typeof Fr)return!1;try{t=new Fr([1,3.14,-3.14,NaN]),e=t,r=(xr&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Vr=Lr,Rr="function"==typeof Uint8Array;var Cr="function"==typeof Uint8Array?Uint8Array:null;var Gr,$r="function"==typeof Uint8Array?Uint8Array:void 0;Gr=function(){var r,t,e;if("function"!=typeof Cr)return!1;try{t=new Cr(t=[1,3.14,-3.14,256,257]),e=t,r=(Rr&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Br=Gr,Hr="function"==typeof Uint16Array;var Mr="function"==typeof Uint16Array?Uint16Array:null;var Wr,Zr="function"==typeof Uint16Array?Uint16Array:void 0;Wr=function(){var r,t,e;if("function"!=typeof Mr)return!1;try{t=new Mr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Hr&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var Xr,Yr={uint16:Wr,uint8:Br};(Xr=new Yr.uint16(1))[0]=4660;var qr,zr,Dr=52===new Yr.uint8(Xr.buffer)[0];!0===Dr?(qr=1,zr=0):(qr=0,zr=1);var Jr={HIGH:qr,LOW:zr},Kr=new Vr(1),Qr=new Ir(Kr.buffer),rt=Jr.HIGH,tt=Jr.LOW;function et(r,t,e,n){return Kr[0]=r,t[n]=Qr[rt],t[n+e]=Qr[tt],t}function nt(r){return et(r,[0,0],1,0)}C(nt,"assign",et);var it=!0===Dr?0:1,ot=new Vr(1),at=new Ir(ot.buffer);function ut(r,t){return ot[0]=r,at[it]=t>>>0,ot[0]}function ft(r){return 0|r}var ct,st,lt=2147483647,pt=2147483648,yt=!0===Dr?1:0,vt=new Vr(1),dt=new Ir(vt.buffer);function gt(r){return vt[0]=r,dt[yt]}!0===Dr?(ct=1,st=0):(ct=0,st=1);var bt={HIGH:ct,LOW:st},ht=new Vr(1),wt=new Ir(ht.buffer),mt=bt.HIGH,jt=bt.LOW;function At(r,t){return wt[mt]=r,wt[jt]=t,ht[0]}var Et=[0,0];function Ot(r,t){var e,n;return nt.assign(r,Et,1,0),e=Et[0],e&=lt,n=gt(t),At(e|=n&=pt,Et[1])}var _t=1072693247,Tt=1e300,Nt=1e-300;var St=!0===Dr?1:0,Ut=new Vr(1),kt=new Ir(Ut.buffer);function It(r,t){return Ut[0]=r,kt[St]=t>>>0,Ut[0]}var xt=1023;var Ft=1048575,Lt=1048576,Pt=1072693248,Vt=536870912,Rt=524288,Ct=20,Gt=9007199254740992,$t=.9617966939259756,Bt=.9617967009544373,Ht=-7.028461650952758e-9,Mt=[1,1.5],Wt=[0,.5849624872207642],Zt=[0,1.350039202129749e-8];var Xt=1.4426950408889634,Yt=1.4426950216293335,qt=1.9259629911266175e-8;var zt=1023,Dt=-1023,Jt=-1074,Kt=22250738585072014e-324,Qt=4503599627370496;function re(r,t,e,n){return br(r)||_r(r)?(t[n]=r,t[n+e]=0,t):0!==r&&mr(r)<Kt?(t[n]=r*Qt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}C((function(r){return re(r,[0,0],1,0)}),"assign",re);var te=2146435072;var ee=2220446049250313e-31,ne=2148532223,ie=[0,0],oe=[0,0];function ae(r,t){var e,n;return 0===t||0===r||br(r)||_r(r)?r:(re(r,ie,1,0),r=ie[0],t+=ie[1],t+=function(r){var t=gt(r);return(t=(t&te)>>>20)-xt|0}(r),t<Jt?Ot(0,r):t>zt?r<0?ur:ar:(t<=Dt?(t+=52,n=ee):n=1,nt.assign(r,oe,1,0),e=oe[0],e&=ne,n*At(e|=t+xt<<20,oe[1])))}var ue=.6931471805599453,fe=1048575;var ce=1048576,se=1071644672,le=20,pe=.6931471824645996,ye=-1.904654299957768e-9;var ve=1072693247,de=1105199104,ge=1139802112,be=1083179008,he=1072693248,we=1083231232,me=3230714880,je=31,Ae=1e300,Ee=1e-300,Oe=8008566259537294e-32,_e=[0,0],Te=[0,0];function Ne(r,t){var e,n,i,o,a,u,f,c,s,l,p,y,v,d;if(br(r)||br(t))return NaN;if(nt.assign(t,_e,1,0),a=_e[0],0===_e[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Tr(r);if(-.5===t)return 1/Tr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(_r(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:mr(r)<1==(t===ar)?0:ar}(r,t)}if(nt.assign(r,_e,1,0),o=_e[0],0===_e[1]){if(0===o)return function(r,t){return t===ur?ar:t===ar?0:t>0?Or(t)?r:0:Or(t)?Ot(ar,r):ar}(r,t);if(1===r)return 1;if(-1===r&&Or(t))return-1;if(_r(r))return r===ur?Ne(-0,-t):t<0?0:ar}if(r<0&&!1===$(t))return(r-r)/(r-r);if(i=mr(r),e=o&lt|0,n=a&lt|0,f=a>>>je|0,u=(u=o>>>je|0)&&Or(t)?-1:1,n>de){if(n>ge)return function(r,t){return(gt(r)&lt)<=_t?t<0?Tt*Tt:Nt*Nt:t>0?Tt*Tt:Nt*Nt}(r,t);if(e<ve)return 1===f?u*Ae*Ae:u*Ee*Ee;if(e>he)return 0===f?u*Ae*Ae:u*Ee*Ee;p=function(r,t){var e,n,i,o,a,u,f;return o=(i=t-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),e=(u=i*qt-o*Xt)-((n=ut(n=(a=Yt*i)+u,0))-a),r[0]=n,r[1]=e,r}(Te,i)}else p=function(r,t,e){var n,i,o,a,u,f,c,s,l,p,y,v,d,g,b,h,w,m,j,A,E;return m=0,e<Lt&&(m-=53,e=gt(t*=Gt)),m+=(e>>Ct)-xt|0,e=(j=e&Ft|0)|Pt|0,j<=235662?A=0:j<767610?A=1:(A=0,m+=1,e-=Lt),a=ut(i=(h=(t=It(t,e))-(c=Mt[A]))*(w=1/(t+c)),0),n=(e>>1|Vt)+Rt,f=It(0,n+=A<<18),b=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=ut(f=3+(o=a*a)+(b+=(u=w*(h-a*f-a*(t-(f-c))))*(a+i)),0),l=ut(l=(h=a*f)+(w=u*f+(b-(f-3-o))*i),0),p=Bt*l,d=(y=Ht*l+(w-(l-h))*$t+Zt[A])-((v=ut(v=p+y+(s=Wt[A])+(g=m),0))-g-s-p),r[0]=v,r[1]=d,r}(Te,i,e);if(y=(l=(t-(c=ut(t,0)))*p[0]+t*p[1])+(s=c*p[0]),nt.assign(y,_e,1,0),v=ft(_e[0]),d=ft(_e[1]),v>=be){if(0!=(v-be|d))return u*Ae*Ae;if(l+Oe>y-s)return u*Ae*Ae}else if((v&lt)>=we){if(0!=(v-me|d))return u*Ee*Ee;if(l<=y-s)return u*Ee*Ee}return y=function(r,t,e){var n,i,o,a,u,f,c,s,l,p;return l=((s=r&lt|0)>>le)-xt|0,c=0,s>se&&(i=It(0,((c=r+(ce>>l+1)>>>0)&~(fe>>(l=((c&lt)>>le)-xt|0)))>>>0),c=(c&fe|ce)>>le-l>>>0,r<0&&(c=-c),t-=i),r=ft(r=gt(f=1-((f=(o=(i=ut(i=e+t,0))*pe)+(a=(e-(i-t))*ue+i*ye))*(n=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<le>>>0)>>le<=0?ae(f,c):It(f,r)}(v,s,l),u*y}function Se(r,t,e,n,i,o,a,u,f){var c,s,l,p,y,v,d,g,b,h,w,m;for(y=r[n],c=r[e-1]-r[0],p=.999*(d=jr(y-r[i],r[o]-y)),l=.001*d,g=0,m=i;m<e;m++)if(a[m]=0,(w=mr(r[m]-y))<=p)a[m]=w>l?Ne(1-Ne(w/d,3),3):1,u&&(a[m]*=f[m]),g+=a[m];else if(r[m]>y)break;if(s=m-1,g<=0)return t[n];for(m=i;m<=s;m++)a[m]/=g;if(d>0){for(g=0,m=i;m<=s;m++)g+=a[m]*r[m];for(b=y-g,h=0,m=i;m<=s;m++)h+=a[m]*Ne(r[m]-g,2);if(Tr(h)>.001*c)for(b/=h,m=i;m<=s;m++)a[m]*=1+b*(r[m]-g)}for(v=0,m=i;m<=s;m++)v+=a[m]*t[m];return v}function Ue(r,t){return r-t}var ke=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var Ie=/./;function xe(r){return"boolean"==typeof r}var Fe=Boolean,Le=Boolean.prototype.toString;var Pe=Z();function Ve(r){return"object"==typeof r&&(r instanceof Fe||(Pe?function(r){try{return Le.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Re(r){return xe(r)||Ve(r)}C(Re,"isPrimitive",xe),C(Re,"isObject",Ve);var Ce="object"==typeof self?self:null,Ge="object"==typeof window?window:null,$e="object"==typeof global?global:null,Be="object"==typeof globalThis?globalThis:null;var He=function(r){if(arguments.length){if(!xe(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Be)return Be;if(Ce)return Ce;if(Ge)return Ge;if($e)return $e;throw new Error("unexpected error. Unable to resolve global object.")}(),Me=He.document&&He.document.childNodes,We=Int8Array;function Ze(){return/^\s*function\s*([^(]*)/i}var Xe=/^\s*function\s*([^(]*)/i;function Ye(r){return null!==r&&"object"==typeof r}function qe(r){var t,e,n,i;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Xe.exec(n.toString()))return t[1]}return Ye(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}C(Ze,"REGEXP",Xe),C(Ye,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!ke(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Ye));var ze="function"==typeof Ie||"object"==typeof We||"function"==typeof Me?function(r){return qe(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?qe(r).toLowerCase():t};function De(r){return"function"===ze(r)}var Je,Ke=Object,Qe=Object.getPrototypeOf;Je=De(Object.getPrototypeOf)?Qe:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var rn=Je;var tn=Object.prototype;function en(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!ke(r)}(r)&&(t=function(r){return null==r?null:(r=Ke(r),rn(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&De(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&De(t.isPrototypeOf)&&(t===tn||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function nn(r){return M(r)&&r>0}function on(r){return tr(r)&&r.valueOf()>0}function an(r){return nn(r)||on(r)}function un(r){return M(r)&&r>=0}function fn(r){return tr(r)&&r.valueOf()>=0}function cn(r){return un(r)||fn(r)}function sn(r,t){return r[0]-t[0]}return C(an,"isPrimitive",nn),C(an,"isObject",on),C(cn,"isPrimitive",un),C(cn,"isObject",fn),function(r,t,e){var n,i,o,a,u;if(!gr(r)&&!nr(r))throw new TypeError(wr("1Lh8R",r));if(!gr(t)&&!nr(t))throw new TypeError(wr("1Lh9k",t));if(u=r.length,t.length!==u)throw new RangeError(wr("1Lh1E"));if(n={},arguments.length>2&&(i=function(r,t){return en(t)?q(t,"f")&&(r.f=t.f,!an(r.f))?new TypeError(wr("1Lh4D","f",r.f)):q(t,"nsteps")&&(r.nsteps=t.nsteps,!pr(r.nsteps))?new TypeError(wr("1Lh2t","nsteps",r.nsteps)):q(t,"delta")&&(r.delta=t.delta,!un(r.delta))?new TypeError(wr("1Lh4k","delta",r.delta)):q(t,"sorted")&&(r.sorted=t.sorted,!xe(r.sorted))?new TypeError(wr("1Lh2o","sorted",r.sorted)):null:new TypeError(wr("1Lh2V",t))}(n,e)))throw i;if(!0!==n.sorted){for(o=new Array(u),a=0;a<u;a++)o[a]=[r[a],t[a]];for(o.sort(sn),r=new Array(u),t=new Array(u),a=0;a<u;a++)r[a]=o[a][0],t[a]=o[a][1]}return function(r,t,e,n,i,o){var a,u,f,c,s,l,p,y,v,d,g,b,h,w,m,j,A,E,O;if(e<2)return t;for(j=new Array(e),v=new Array(e),m=new Array(e),b=jr(Ar(G(n*e),e),2),l=1;l<=i+1;l++){f=0,a=b-1,p=-1,A=0;do{for(;a<e-1&&!(r[A]-r[f]<=r[a+1]-r[A]);)f+=1,a+=1;if(j[A]=Se(r,t,e,A,f,a,v,l>1,m),p<A-1)for(u=r[A]-r[p],E=p+1;E<A;E++)c=(r[E]-r[p])/u,j[E]=c*j[A]+(1-c)*j[p];for(y=r[p=A]+o,A=p+1;A<e&&!(r[A]>y);A++)r[A]===r[p]&&(j[A]=j[p],p=A);A=jr(p+1,A-1)}while(p<e-1);for(A=0;A<e;A++)v[A]=t[A]-j[A];if(l>i)break;for(A=0;A<e;A++)m[A]=mr(v[A]);for(m.sort(Ue),g=e-(d=G(e/2))-1,w=.999*(s=3*(m[d]+m[g])),h=.001*s,A=0;A<e;A++)O=mr(v[A]),m[A]=O<=h?1:O>w?0:Ne(1-Ne(O/s,2),2)}return{x:r,y:j}}(r,t,u,void 0===n.f?2/3:n.f,void 0===n.nsteps?3:n.nsteps,void 0===n.delta?.01*hr(u,r,1):n.delta)}}));
//# sourceMappingURL=index.js.map
