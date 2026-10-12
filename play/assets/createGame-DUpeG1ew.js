const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-DAGzQrw6.js","./index-utXHLmfV.js","./index-PgORwCFR.css"])))=>i.map(i=>d[i]);
var rf=Object.defineProperty;var of=(a,t,e)=>t in a?rf(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var D=(a,t,e)=>of(a,typeof t!="symbol"?t+"":t,e);import{J as ee,B as $i,P as Ei,E as Se,r as hf,_ as lf,g as vi,C as cf,A as Ys,a as Bi,b as Rt,c as _e,W as _h,o as Jc,i as uf,u as Kc,h as ff,d as Pn,s as wh,l as Ue,e as df,w as mn,f as ce,j as $c,t as pf,T as Ot,k as mf,m as gf,n as xf,p as Zs,q as ds,v as Mf,x as vf,y as _f,z as wf,D as Sf,F as tr,G as Qc,H as yf,I as bf,K as jc,L as er,M as ir,N as _o,O as wo,Q as Tf,R as Ef,S as Ai,U as Ui,V as Fi,X as Af,Y as Rf,Z as Cf,$ as tu,a0 as ji,a1 as Pf,a2 as If,a3 as mi,a4 as nr,a5 as Lf,a6 as Rr,a7 as Df,a8 as cl,a9 as zf,aa as Ff,ab as ha,ac as Cr,ad as Ee,ae as So,af as Nf,ag as Xa,ah as qa,ai as ul,aj as Uf,ak as Of,al as ss,am as Bf,an as Ya,ao as kf,ap as Hf,aq as fl,ar as Gf,as as Vf,at as Wf,au as dl,av as la,aw as Xf,ax as pl,ay as qf,az as Yf,aA as Zf,aB as Jf,aC as Kf,aD as eu,aE as $f,aF as Bs,aG as Qf,aH as jf,aI as hs,aJ as td,aK as ed,aL as zs,aM as id,aN as Rn,aO as nd,aP as sd,aQ as iu,aR as Pr,aS as yo,aT as nu,aU as ad,aV as bo,aW as rd,aX as ml,aY as su,aZ as od,a_ as hd,a$ as To,b0 as au,b1 as ld,b2 as cd,b3 as gl,b4 as ud,b5 as fd,b6 as dd,b7 as xl,b8 as Ml,b9 as vl,ba as pd,bb as md,bc as gd,bd as Ir,be as xd,bf as Md,bg as vd,bh as _d,bi as _l,bj as wd,bk as Sd,bl as yd,bm as bd,bn as Td,bo as Ed,bp as Ad,bq as wl,br as Rd,bs as Cd,bt as Pd,bu as Id,bv as Ld}from"./index-utXHLmfV.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="186",Dd=0,Sl=1,zd=2,ks=1,Fd=2,Fs=3,gn=0,Ze=1,Qt=2,ki=0,Cn=1,pe=2,yl=3,bl=4,Nd=5,as=100,Ud=101,Od=102,Bd=103,kd=104,Hd=200,Gd=201,Vd=202,Wd=203,ru=204,ou=205,Xd=206,qd=207,Yd=208,Zd=209,Jd=210,Kd=211,$d=212,Qd=213,jd=214,Eo=0,Ao=1,Ro=2,Js=3,Co=4,Po=5,Io=6,Lo=7,hu=0,tp=1,ep=2,Hi=0,yh=1,bh=2,Th=3,gr=4,Eh=5,Ah=6,Rh=7,lu=300,In=301,ps=302,Lr=303,Dr=304,xr=306,sr=1e3,tn=1001,Do=1002,Ye=1003,ip=1004,ca=1005,ii=1006,zr=1007,En=1008,gi=1009,cu=1010,uu=1011,Ks=1012,Ch=1013,Wi=1014,Ci=1015,ci=1016,Ph=1017,Ih=1018,$s=1020,fu=35902,du=35899,pu=1021,mu=1022,Pi=1023,sn=1026,An=1027,Lh=1028,Dh=1029,Ln=1030,zh=1031,Fh=1033,Za=33776,Ja=33777,Ka=33778,$a=33779,zo=35840,Fo=35841,No=35842,Uo=35843,Oo=36196,Bo=37492,ko=37496,Ho=37488,Go=37489,ar=37490,Vo=37491,Wo=37808,Xo=37809,qo=37810,Yo=37811,Zo=37812,Jo=37813,Ko=37814,$o=37815,Qo=37816,jo=37817,th=37818,eh=37819,ih=37820,nh=37821,sh=36492,ah=36494,rh=36495,oh=36283,hh=36284,rr=36285,lh=36286,np=3200,or=0,sp=1,pn="",ke="srgb",hr="srgb-linear",lr="linear",Ae="srgb",Fr=7680,ap=519,rp=512,op=513,hp=514,Nh=515,lp=516,cp=517,Uh=518,up=519,gu=35044,fp=35048,Tl="300 es",Oi=2e3,Qs=2001;function dp(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function cr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function pp(){const a=cr("canvas");return a.style.display="block",a}const El={};function ur(...a){const t="THREE."+a.shift();console.log(t,...a)}function xu(a){const t=a[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=a[1];e&&e.isStackTrace?a[0]+=" "+e.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function se(...a){a=xu(a);const t="THREE."+a.shift();{const e=a[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...a)}}function ve(...a){a=xu(a);const t="THREE."+a.shift();{const e=a[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...a)}}function ls(...a){const t=a.join(" ");t in El||(El[t]=!0,se(...a))}function mp(a,t,e){return new Promise(function(i,n){function s(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const gp={[Eo]:Ao,[Ro]:Io,[Co]:Lo,[Js]:Po,[Ao]:Eo,[Io]:Ro,[Lo]:Co,[Po]:Js};class zn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Al=1234567;const Hs=Math.PI/180,js=180/Math.PI;function Gi(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[a&255]+je[a>>8&255]+je[a>>16&255]+je[a>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function me(a,t,e){return Math.max(t,Math.min(e,a))}function Oh(a,t){return(a%t+t)%t}function xp(a,t,e,i,n){return i+(a-t)*(n-i)/(e-t)}function Mp(a,t,e){return a!==t?(e-a)/(t-a):0}function Gs(a,t,e){return(1-e)*a+e*t}function vp(a,t,e,i){return Gs(a,t,1-Math.exp(-e*i))}function _p(a,t=1){return t-Math.abs(Oh(a,t*2)-t)}function wp(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function Sp(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function yp(a,t){return a+Math.floor(Math.random()*(t-a+1))}function bp(a,t){return a+Math.random()*(t-a)}function Tp(a){return a*(.5-Math.random())}function Ep(a){a!==void 0&&(Al=a);let t=Al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ap(a){return a*Hs}function Rp(a){return a*js}function Cp(a){return a>0&&Number.isInteger(a)&&2**Math.round(Math.log2(a))===a}function Pp(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Ip(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Lp(a,t,e,i,n){const s=Math.cos,r=Math.sin,o=s(e/2),h=r(e/2),l=s((t+i)/2),c=r((t+i)/2),f=s((t-i)/2),u=r((t-i)/2),d=s((i-t)/2),g=r((i-t)/2);switch(n){case"XYX":a.set(o*c,h*f,h*u,o*l);break;case"YZY":a.set(h*u,o*c,h*f,o*l);break;case"ZXZ":a.set(h*f,h*u,o*c,o*l);break;case"XZX":a.set(o*c,h*g,h*d,o*l);break;case"YXY":a.set(h*d,o*c,h*g,o*l);break;case"ZYZ":a.set(h*g,h*d,o*c,o*l);break;default:se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ri(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Re(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Dp={DEG2RAD:Hs,RAD2DEG:js,generateUUID:Gi,clamp:me,euclideanModulo:Oh,mapLinear:xp,inverseLerp:Mp,lerp:Gs,damp:vp,pingpong:_p,smoothstep:wp,smootherstep:Sp,randInt:yp,randFloat:bp,randFloatSpread:Tp,seededRandom:Ep,degToRad:Ap,radToDeg:Rp,isPowerOfTwo:Cp,ceilPowerOfTwo:Pp,floorPowerOfTwo:Ip,setQuaternionFromProperEuler:Lp,normalize:Re,denormalize:Ri},Jh=class Jh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*n+t.x,this.y=s*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jh.prototype.isVector2=!0;let ot=Jh;class Ms{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,r,o){let h=i[n+0],l=i[n+1],c=i[n+2],f=i[n+3],u=s[r+0],d=s[r+1],g=s[r+2],x=s[r+3];if(f!==x||h!==u||l!==d||c!==g){let m=h*u+l*d+c*g+f*x;m<0&&(u=-u,d=-d,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),_=Math.sin(M);p=Math.sin(p*M)/_,o=Math.sin(o*M)/_,h=h*p+u*o,l=l*p+d*o,c=c*p+g*o,f=f*p+x*o}else{h=h*p+u*o,l=l*p+d*o,c=c*p+g*o,f=f*p+x*o;const M=1/Math.sqrt(h*h+l*l+c*c+f*f);h*=M,l*=M,c*=M,f*=M}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,s,r){const o=i[n],h=i[n+1],l=i[n+2],c=i[n+3],f=s[r],u=s[r+1],d=s[r+2],g=s[r+3];return t[e]=o*g+c*f+h*d-l*u,t[e+1]=h*g+c*u+l*f-o*d,t[e+2]=l*g+c*d+o*u-h*f,t[e+3]=c*g-o*f-h*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,r=t._order,o=Math.cos,h=Math.sin,l=o(i/2),c=o(n/2),f=o(s/2),u=h(i/2),d=h(n/2),g=h(s/2);switch(r){case"XYZ":this._x=u*c*f+l*d*g,this._y=l*d*f-u*c*g,this._z=l*c*g+u*d*f,this._w=l*c*f-u*d*g;break;case"YXZ":this._x=u*c*f+l*d*g,this._y=l*d*f-u*c*g,this._z=l*c*g-u*d*f,this._w=l*c*f+u*d*g;break;case"ZXY":this._x=u*c*f-l*d*g,this._y=l*d*f+u*c*g,this._z=l*c*g+u*d*f,this._w=l*c*f-u*d*g;break;case"ZYX":this._x=u*c*f-l*d*g,this._y=l*d*f+u*c*g,this._z=l*c*g-u*d*f,this._w=l*c*f+u*d*g;break;case"YZX":this._x=u*c*f+l*d*g,this._y=l*d*f+u*c*g,this._z=l*c*g-u*d*f,this._w=l*c*f-u*d*g;break;case"XZY":this._x=u*c*f-l*d*g,this._y=l*d*f-u*c*g,this._z=l*c*g+u*d*f,this._w=l*c*f+u*d*g;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],r=e[1],o=e[5],h=e[9],l=e[2],c=e[6],f=e[10],u=i+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-h)*d,this._y=(s-l)*d,this._z=(r-n)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(c-h)/d,this._x=.25*d,this._y=(n+r)/d,this._z=(s+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-l)/d,this._x=(n+r)/d,this._y=.25*d,this._z=(h+c)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(r-n)/d,this._x=(s+l)/d,this._y=(h+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,r=t._w,o=e._x,h=e._y,l=e._z,c=e._w;return this._x=i*c+r*o+n*l-s*h,this._y=n*c+r*h+s*o-i*l,this._z=s*c+r*l+i*h-n*o,this._w=r*c-i*o-n*h-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,r=-r,o=-o);let h=1-e;if(o<.9995){const l=Math.acos(o),c=Math.sin(l);h=Math.sin(h*l)/c,e=Math.sin(e*l)/c,this._x=this._x*h+i*e,this._y=this._y*h+n*e,this._z=this._z*h+s*e,this._w=this._w*h+r*e,this._onChangeCallback()}else this._x=this._x*h+i*e,this._y=this._y*h+n*e,this._z=this._z*h+s*e,this._w=this._w*h+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kh=class Kh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z,h=t.w,l=2*(r*n-o*i),c=2*(o*e-s*n),f=2*(s*i-r*e);return this.x=e+h*l+r*f-o*c,this.y=i+h*c+o*l-s*f,this.z=n+h*f+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,r=e.x,o=e.y,h=e.z;return this.x=n*h-s*o,this.y=s*r-i*h,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Nr.copy(this).projectOnVector(t),this.sub(Nr)}reflect(t){return this.sub(Nr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kh.prototype.isVector3=!0;let N=Kh;const Nr=new N,Rl=new Ms,$h=class $h{constructor(t,e,i,n,s,r,o,h,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,h,l)}set(t,e,i,n,s,r,o,h,l){const c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=e,c[4]=s,c[5]=h,c[6]=i,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[3],h=i[6],l=i[1],c=i[4],f=i[7],u=i[2],d=i[5],g=i[8],x=n[0],m=n[3],p=n[6],M=n[1],_=n[4],v=n[7],b=n[2],T=n[5],R=n[8];return s[0]=r*x+o*M+h*b,s[3]=r*m+o*_+h*T,s[6]=r*p+o*v+h*R,s[1]=l*x+c*M+f*b,s[4]=l*m+c*_+f*T,s[7]=l*p+c*v+f*R,s[2]=u*x+d*M+g*b,s[5]=u*m+d*_+g*T,s[8]=u*p+d*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],h=t[6],l=t[7],c=t[8];return e*r*c-e*o*l-i*s*c+i*o*h+n*s*l-n*r*h}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],h=t[6],l=t[7],c=t[8],f=c*r-o*l,u=o*h-c*s,d=l*s-r*h,g=e*f+i*u+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(n*l-c*i)*x,t[2]=(o*i-n*r)*x,t[3]=u*x,t[4]=(c*e-n*h)*x,t[5]=(n*s-o*e)*x,t[6]=d*x,t[7]=(i*h-l*e)*x,t[8]=(r*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,r,o){const h=Math.cos(s),l=Math.sin(s);return this.set(i*h,i*l,-i*(h*r+l*o)+r+t,-n*l,n*h,-n*(-l*r+h*o)+o+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};$h.prototype.isMatrix3=!0;let re=$h;const Ur=new re,Cl=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zp(){const a={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(n,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Ae&&(n.r=nn(n.r),n.g=nn(n.g),n.b=nn(n.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ae&&(n.r=cs(n.r),n.g=cs(n.g),n.b=cs(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===pn?lr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,r){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[hr]:{primaries:t,whitePoint:i,transfer:lr,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:i,transfer:Ae,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),a}const xe=zp();function nn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function cs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let On;class Fp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{On===void 0&&(On=cr("canvas")),On.width=t.width,On.height=t.height;const n=On.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=On}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=nn(s[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(nn(e[i]/255)*255):e[i]=nn(e[i]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Np=0;class Bh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(Or(n[r].image)):s.push(Or(n[r]))}else s=Or(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Or(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Fp.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let Up=0;const Br=new N;class si extends zn{constructor(t=si.DEFAULT_IMAGE,e=si.DEFAULT_MAPPING,i=tn,n=tn,s=ii,r=En,o=Pi,h=gi,l=si.DEFAULT_ANISOTROPY,c=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Gi(),this.name="",this.source=new Bh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Br).x}get height(){return this.source.getSize(Br).y}get depth(){return this.source.getSize(Br).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sr:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case Do:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sr:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case Do:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=lu;si.DEFAULT_ANISOTROPY=1;const Qh=class Qh{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const h=t.elements,l=h[0],c=h[4],f=h[8],u=h[1],d=h[5],g=h[9],x=h[2],m=h[6],p=h[10];if(Math.abs(c-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,v=(d+1)/2,b=(p+1)/2,T=(c+u)/4,R=(f+x)/4,S=(g+m)/4;return _>v&&_>b?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=T/i,s=R/i):v>b?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=T/n,s=S/n):b<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(b),i=R/s,n=S/s),this.set(i,n,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-c)*(u-c));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(u-c)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qh.prototype.isVector4=!0;let Oe=Qh;class Op extends zn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];const n={width:t,height:e,depth:i.depth},s=new si(n),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Bh(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Op{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Mu extends si{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bp extends si{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const mr=class mr{constructor(t,e,i,n,s,r,o,h,l,c,f,u,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,h,l,c,f,u,d,g,x,m)}set(t,e,i,n,s,r,o,h,l,c,f,u,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=r,p[9]=o,p[13]=h,p[2]=l,p[6]=c,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/Bn.setFromMatrixColumn(t,0).length(),s=1/Bn.setFromMatrixColumn(t,1).length(),r=1/Bn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),h=Math.cos(n),l=Math.sin(n),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=r*c,d=r*f,g=o*c,x=o*f;e[0]=h*c,e[4]=-h*f,e[8]=l,e[1]=d+g*l,e[5]=u-x*l,e[9]=-o*h,e[2]=x-u*l,e[6]=g+d*l,e[10]=r*h}else if(t.order==="YXZ"){const u=h*c,d=h*f,g=l*c,x=l*f;e[0]=u+x*o,e[4]=g*o-d,e[8]=r*l,e[1]=r*f,e[5]=r*c,e[9]=-o,e[2]=d*o-g,e[6]=x+u*o,e[10]=r*h}else if(t.order==="ZXY"){const u=h*c,d=h*f,g=l*c,x=l*f;e[0]=u-x*o,e[4]=-r*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=r*c,e[9]=x-u*o,e[2]=-r*l,e[6]=o,e[10]=r*h}else if(t.order==="ZYX"){const u=r*c,d=r*f,g=o*c,x=o*f;e[0]=h*c,e[4]=g*l-d,e[8]=u*l+x,e[1]=h*f,e[5]=x*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*h,e[10]=r*h}else if(t.order==="YZX"){const u=r*h,d=r*l,g=o*h,x=o*l;e[0]=h*c,e[4]=x-u*f,e[8]=g*f+d,e[1]=f,e[5]=r*c,e[9]=-o*c,e[2]=-l*c,e[6]=d*f+g,e[10]=u-x*f}else if(t.order==="XZY"){const u=r*h,d=r*l,g=o*h,x=o*l;e[0]=h*c,e[4]=-f,e[8]=l*c,e[1]=u*f+x,e[5]=r*c,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*c,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kp,t,Hp)}lookAt(t,e,i){const n=this.elements;return fi.subVectors(t,e),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),ln.crossVectors(i,fi),ln.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),ln.crossVectors(i,fi)),ln.normalize(),ua.crossVectors(fi,ln),n[0]=ln.x,n[4]=ua.x,n[8]=fi.x,n[1]=ln.y,n[5]=ua.y,n[9]=fi.y,n[2]=ln.z,n[6]=ua.z,n[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[4],h=i[8],l=i[12],c=i[1],f=i[5],u=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],_=i[7],v=i[11],b=i[15],T=n[0],R=n[4],S=n[8],A=n[12],L=n[1],F=n[5],k=n[9],z=n[13],P=n[2],O=n[6],$=n[10],B=n[14],it=n[3],Y=n[7],et=n[11],nt=n[15];return s[0]=r*T+o*L+h*P+l*it,s[4]=r*R+o*F+h*O+l*Y,s[8]=r*S+o*k+h*$+l*et,s[12]=r*A+o*z+h*B+l*nt,s[1]=c*T+f*L+u*P+d*it,s[5]=c*R+f*F+u*O+d*Y,s[9]=c*S+f*k+u*$+d*et,s[13]=c*A+f*z+u*B+d*nt,s[2]=g*T+x*L+m*P+p*it,s[6]=g*R+x*F+m*O+p*Y,s[10]=g*S+x*k+m*$+p*et,s[14]=g*A+x*z+m*B+p*nt,s[3]=M*T+_*L+v*P+b*it,s[7]=M*R+_*F+v*O+b*Y,s[11]=M*S+_*k+v*$+b*et,s[15]=M*A+_*z+v*B+b*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],r=t[1],o=t[5],h=t[9],l=t[13],c=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],M=h*d-l*u,_=o*d-l*f,v=o*u-h*f,b=r*d-l*c,T=r*u-h*c,R=r*f-o*c;return e*(x*M-m*_+p*v)-i*(g*M-m*b+p*T)+n*(g*_-x*b+p*R)-s*(g*v-x*T+m*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],r=t[5],o=t[9],h=t[2],l=t[6],c=t[10];return e*(r*c-o*l)-i*(s*c-o*h)+n*(s*l-r*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],h=t[6],l=t[7],c=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=e*o-i*r,_=e*h-n*r,v=e*l-s*r,b=i*h-n*o,T=i*l-s*o,R=n*l-s*h,S=c*x-f*g,A=c*m-u*g,L=c*p-d*g,F=f*m-u*x,k=f*p-d*x,z=u*p-d*m,P=M*z-_*k+v*F+b*L-T*A+R*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return t[0]=(o*z-h*k+l*F)*O,t[1]=(n*k-i*z-s*F)*O,t[2]=(x*R-m*T+p*b)*O,t[3]=(u*T-f*R-d*b)*O,t[4]=(h*L-r*z-l*A)*O,t[5]=(e*z-n*L+s*A)*O,t[6]=(m*v-g*R-p*_)*O,t[7]=(c*R-u*v+d*_)*O,t[8]=(r*k-o*L+l*S)*O,t[9]=(i*L-e*k-s*S)*O,t[10]=(g*T-x*v+p*M)*O,t[11]=(f*v-c*T-d*M)*O,t[12]=(o*A-r*F-h*S)*O,t[13]=(e*F-i*A+n*S)*O,t[14]=(x*_-g*b-m*M)*O,t[15]=(c*b-f*_+u*M)*O,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,r=t.x,o=t.y,h=t.z,l=s*r,c=s*o;return this.set(l*r+i,l*o-n*h,l*h+n*o,0,l*o+n*h,c*o+i,c*h-n*r,0,l*h-n*o,c*h+n*r,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,r){return this.set(1,i,s,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,r=e._y,o=e._z,h=e._w,l=s+s,c=r+r,f=o+o,u=s*l,d=s*c,g=s*f,x=r*c,m=r*f,p=o*f,M=h*l,_=h*c,v=h*f,b=i.x,T=i.y,R=i.z;return n[0]=(1-(x+p))*b,n[1]=(d+v)*b,n[2]=(g-_)*b,n[3]=0,n[4]=(d-v)*T,n[5]=(1-(u+p))*T,n[6]=(m+M)*T,n[7]=0,n[8]=(g+_)*R,n[9]=(m-M)*R,n[10]=(1-(u+x))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let r=Bn.set(n[0],n[1],n[2]).length();const o=Bn.set(n[4],n[5],n[6]).length(),h=Bn.set(n[8],n[9],n[10]).length();s<0&&(r=-r),yi.copy(this);const l=1/r,c=1/o,f=1/h;return yi.elements[0]*=l,yi.elements[1]*=l,yi.elements[2]*=l,yi.elements[4]*=c,yi.elements[5]*=c,yi.elements[6]*=c,yi.elements[8]*=f,yi.elements[9]*=f,yi.elements[10]*=f,e.setFromRotationMatrix(yi),i.x=r,i.y=o,i.z=h,this}makePerspective(t,e,i,n,s,r,o=Oi,h=!1){const l=this.elements,c=2*s/(e-t),f=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let g,x;if(h)g=s/(r-s),x=r*s/(r-s);else if(o===Oi)g=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(o===Qs)g=-r/(r-s),x=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,r,o=Oi,h=!1){const l=this.elements,c=2/(e-t),f=2/(i-n),u=-(e+t)/(e-t),d=-(i+n)/(i-n);let g,x;if(h)g=1/(r-s),x=r/(r-s);else if(o===Oi)g=-2/(r-s),x=-(r+s)/(r-s);else if(o===Qs)g=-1/(r-s),x=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};mr.prototype.isMatrix4=!0;let Ce=mr;const Bn=new N,yi=new Ce,kp=new N(0,0,0),Hp=new N(1,1,1),ln=new N,ua=new N,fi=new N,Il=new Ce,Ll=new Ms;class xn{constructor(t=0,e=0,i=0,n=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],r=n[4],o=n[8],h=n[1],l=n[5],c=n[9],f=n[2],u=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-me(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Il.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Il,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class kh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gp=0;const Dl=new N,kn=new Ms,qi=new Ce,fa=new N,ys=new N,Vp=new N,Wp=new Ms,zl=new N(1,0,0),Fl=new N(0,1,0),Nl=new N(0,0,1),Ul={type:"added"},Xp={type:"removed"},Hn={type:"childadded",child:null},kr={type:"childremoved",child:null};class qe extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new N,e=new xn,i=new Ms,n=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ce},normalMatrix:{value:new re}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.multiply(kn),this}rotateOnWorldAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.premultiply(kn),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(Fl,t)}rotateZ(t){return this.rotateOnAxis(Nl,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(Fl,t)}translateZ(t){return this.translateOnAxis(Nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?fa.copy(t):fa.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(ys,fa,this.up):qi.lookAt(fa,ys,this.up),this.quaternion.setFromRotationMatrix(qi),n&&(qi.extractRotation(n.matrixWorld),kn.setFromRotationMatrix(qi),this.quaternion.premultiply(kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),Hn.child=t,this.dispatchEvent(Hn),Hn.child=null):ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xp),kr.child=t,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),Hn.child=t,this.dispatchEvent(Hn),Hn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const f=h[l];s(t.shapes,f)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(s(t.materials,this.material[h]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];n.animations.push(s(t.animations,h))}}if(e){const o=r(t.geometries),h=r(t.materials),l=r(t.textures),c=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const h=[];for(const l in o){const c=o[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}qe.DEFAULT_UP=new N(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jt extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qp={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,r=null;const o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=c.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return o!==null&&(o.visible=n!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},da={h:0,s:0,l:0};function Gr(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class Bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=xe.workingColorSpace){if(t=Oh(t,1),e=me(e,0,1),i=me(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=Gr(r,s,t+1/3),this.g=Gr(r,s,t),this.b=Gr(r,s,t-1/3)}return xe.colorSpaceToWorking(this,n),this}setStyle(t,e=ke){function i(s){s!==void 0&&parseFloat(s)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const i=vu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nn(t.r),this.g=nn(t.g),this.b=nn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return xe.workingToColorSpace(ti.copy(this),t),Math.round(me(ti.r*255,0,255))*65536+Math.round(me(ti.g*255,0,255))*256+Math.round(me(ti.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(ti.copy(this),e);const i=ti.r,n=ti.g,s=ti.b,r=Math.max(i,n,s),o=Math.min(i,n,s);let h,l;const c=(o+r)/2;if(o===r)h=0,l=0;else{const f=r-o;switch(l=c<=.5?f/(r+o):f/(2-r-o),r){case i:h=(n-s)/f+(n<s?6:0);break;case n:h=(s-i)/f+2;break;case s:h=(i-n)/f+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(ti.copy(this),e),t.r=ti.r,t.g=ti.g,t.b=ti.b,t}getStyle(t=ke){xe.workingToColorSpace(ti.copy(this),t);const e=ti.r,i=ti.g,n=ti.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(cn),this.setHSL(cn.h+t,cn.s+e,cn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(cn),t.getHSL(da);const i=Gs(cn.h,da.h,e),n=Gs(cn.s,da.s,e),s=Gs(cn.l,da.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new Bt;Bt.NAMES=vu;class aa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new aa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Yp extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const bi=new N,Yi=new N,Vr=new N,Zi=new N,Gn=new N,Vn=new N,Ol=new N,Wr=new N,Xr=new N,qr=new N,Yr=new Oe,Zr=new Oe,Jr=new Oe;class _i{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),bi.subVectors(t,e),n.cross(bi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){bi.subVectors(n,e),Yi.subVectors(i,e),Vr.subVectors(t,e);const r=bi.dot(bi),o=bi.dot(Yi),h=bi.dot(Vr),l=Yi.dot(Yi),c=Yi.dot(Vr),f=r*l-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,d=(l*h-o*c)*u,g=(r*c-o*h)*u;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,i,n,s,r,o,h){return this.getBarycoord(t,e,i,n,Zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Zi.x),h.addScaledVector(r,Zi.y),h.addScaledVector(o,Zi.z),h)}static getInterpolatedAttribute(t,e,i,n,s,r){return Yr.setScalar(0),Zr.setScalar(0),Jr.setScalar(0),Yr.fromBufferAttribute(t,e),Zr.fromBufferAttribute(t,i),Jr.fromBufferAttribute(t,n),r.setScalar(0),r.addScaledVector(Yr,s.x),r.addScaledVector(Zr,s.y),r.addScaledVector(Jr,s.z),r}static isFrontFacing(t,e,i,n){return bi.subVectors(i,e),Yi.subVectors(t,e),bi.cross(Yi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),bi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return _i.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let r,o;Gn.subVectors(n,i),Vn.subVectors(s,i),Wr.subVectors(t,i);const h=Gn.dot(Wr),l=Vn.dot(Wr);if(h<=0&&l<=0)return e.copy(i);Xr.subVectors(t,n);const c=Gn.dot(Xr),f=Vn.dot(Xr);if(c>=0&&f<=c)return e.copy(n);const u=h*f-c*l;if(u<=0&&h>=0&&c<=0)return r=h/(h-c),e.copy(i).addScaledVector(Gn,r);qr.subVectors(t,s);const d=Gn.dot(qr),g=Vn.dot(qr);if(g>=0&&d<=g)return e.copy(s);const x=d*l-h*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Vn,o);const m=c*g-d*f;if(m<=0&&f-c>=0&&d-g>=0)return Ol.subVectors(s,n),o=(f-c)/(f-c+(d-g)),e.copy(n).addScaledVector(Ol,o);const p=1/(m+x+u);return r=x*p,o=u*p,e.copy(i).addScaledVector(Gn,r).addScaledVector(Vn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Fn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ti):Ti.fromBufferAttribute(s,r),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}const n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),ma.subVectors(this.max,bs),Wn.subVectors(t.a,bs),Xn.subVectors(t.b,bs),qn.subVectors(t.c,bs),un.subVectors(Xn,Wn),fn.subVectors(qn,Xn),_n.subVectors(Wn,qn);let e=[0,-un.z,un.y,0,-fn.z,fn.y,0,-_n.z,_n.y,un.z,0,-un.x,fn.z,0,-fn.x,_n.z,0,-_n.x,-un.y,un.x,0,-fn.y,fn.x,0,-_n.y,_n.x,0];return!Kr(e,Wn,Xn,qn,ma)||(e=[1,0,0,0,1,0,0,0,1],!Kr(e,Wn,Xn,qn,ma))?!1:(ga.crossVectors(un,fn),e=[ga.x,ga.y,ga.z],Kr(e,Wn,Xn,qn,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new N,new N,new N,new N,new N,new N,new N,new N],Ti=new N,pa=new Fn,Wn=new N,Xn=new N,qn=new N,un=new N,fn=new N,_n=new N,bs=new N,ma=new N,ga=new N,wn=new N;function Kr(a,t,e,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){wn.fromArray(a,s);const o=n.x*Math.abs(wn.x)+n.y*Math.abs(wn.y)+n.z*Math.abs(wn.z),h=t.dot(wn),l=e.dot(wn),c=i.dot(wn);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>o)return!1}return!0}const We=new N,xa=new ot;let Zp=0;class ui extends zn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=gu,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class _u extends ui{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class wu extends ui{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ae extends ui{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Jp=new Fn,Ts=new N,$r=new N;class vs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Jp.setFromPoints(t).getCenter(i);let n=0;for(let s=0,r=t.length;s<r;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ts,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add($r)),this.expandByPoint(Ts.copy(t.center).sub($r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Kp=0;const Mi=new Ce,Qr=new qe,Yn=new N,di=new Fn,Es=new Fn,$e=new N;class Le extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dp(t)?wu:_u)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new re().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,i){return Mi.makeTranslation(t,e,i),this.applyMatrix4(Mi),this}scale(t,e,i){return Mi.makeScale(t,e,i),this.applyMatrix4(Mi),this}lookAt(t){return Qr.lookAt(t),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ae(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];Es.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(di.min,Es.min),di.expandByPoint($e),$e.addVectors(di.max,Es.max),di.expandByPoint($e)):(di.expandByPoint(Es.min),di.expandByPoint(Es.max))}di.getCenter(i);let n=0;for(let s=0,r=t.count;s<r;s++)$e.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared($e));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],h=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)$e.fromBufferAttribute(o,l),h&&(Yn.fromBufferAttribute(t,l),$e.add(Yn)),n=Math.max(n,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],h=[];for(let S=0;S<i.count;S++)o[S]=new N,h[S]=new N;const l=new N,c=new N,f=new N,u=new ot,d=new ot,g=new ot,x=new N,m=new N;function p(S,A,L){l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,L),u.fromBufferAttribute(s,S),d.fromBufferAttribute(s,A),g.fromBufferAttribute(s,L),c.sub(l),f.sub(l),d.sub(u),g.sub(u);const F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(F),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(F),o[S].add(x),o[A].add(x),o[L].add(x),h[S].add(m),h[A].add(m),h[L].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let S=0,A=M.length;S<A;++S){const L=M[S],F=L.start,k=L.count;for(let z=F,P=F+k;z<P;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const _=new N,v=new N,b=new N,T=new N;function R(S){b.fromBufferAttribute(n,S),T.copy(b);const A=o[S];_.copy(A),_.sub(b.multiplyScalar(b.dot(A))).normalize(),v.crossVectors(T,A);const F=v.dot(h[S])<0?-1:1;r.setXYZW(S,_.x,_.y,_.z,F)}for(let S=0,A=M.length;S<A;++S){const L=M[S],F=L.start,k=L.count;for(let z=F,P=F+k;z<P;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ui(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const n=new N,s=new N,r=new N,o=new N,h=new N,l=new N,c=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),c.subVectors(r,s),f.subVectors(n,s),c.cross(f),o.fromBufferAttribute(i,g),h.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(c),h.add(c),l.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,h.x,h.y,h.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),c.subVectors(r,s),f.subVectors(n,s),c.cross(f),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,h){const l=o.array,c=o.itemSize,f=o.normalized,u=new l.constructor(h.length*c);let d=0,g=0;for(let x=0,m=h.length;x<m;x++){o.isInterleavedBufferAttribute?d=h[x]*o.data.stride+o.offset:d=h[x]*c;for(let p=0;p<c;p++)u[g++]=l[d++]}return new ui(u,c,f)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,i=this.index.array,n=this.attributes;for(const o in n){const h=n[o],l=t(h,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const h=[],l=s[o];for(let c=0,f=l.length;c<f;c++){const u=l[c],d=t(u,i);h.push(d)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,h=r.length;o<h;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const l=i[h];t.data.attributes[h]=l.toJSON(t.data)}const n={};let s=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];c.push(d.toJSON(t.data))}c.length>0&&(n[h]=c,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const l in n){const c=n[l];this.setAttribute(l,c.clone(e))}const s=t.morphAttributes;for(const l in s){const c=[],f=s[l];for(let u=0,d=f.length;u<d;u++)c.push(f[u].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,c=r.length;l<c;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $p{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gu,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const ri=new N;class fr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ri.fromBufferAttribute(this,e),ri.applyMatrix4(t),this.setXYZ(e,ri.x,ri.y,ri.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ri.fromBufferAttribute(this,e),ri.applyNormalMatrix(t),this.setXYZ(e,ri.x,ri.y,ri.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ri.fromBufferAttribute(this,e),ri.transformDirection(t),this.setXYZ(e,ri.x,ri.y,ri.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ri(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),n=Re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ur("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new ui(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ur("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const jr=new N,Qp=new N,jp=new re;class Qi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=jr.subVectors(i,e).cross(Qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||jp.getNormalMatrix(t),n=this.coplanarPoint(jr).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let t0=0;class Mn extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Cn,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ru,this.blendDst=ou,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const o in s){const h=s[o];delete h.metadata,r.push(h)}return r}if(e){const s=n(t.textures),r=n(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Qi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class us extends Mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zn;const As=new N,Jn=new N,Kn=new N,$n=new ot,Rs=new ot,Su=new Ce,Ma=new N,Cs=new N,va=new N,Bl=new ot,to=new ot,kl=new ot;class Vs extends qe{constructor(t=new us){if(super(),this.isSprite=!0,this.type="Sprite",Zn===void 0){Zn=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $p(e,5);Zn.setIndex([0,1,2,0,2,3]),Zn.setAttribute("position",new fr(i,3,0,!1)),Zn.setAttribute("uv",new fr(i,2,3,!1))}this.geometry=Zn,this.material=t,this.center=new ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jn.setFromMatrixScale(this.matrixWorld),Su.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Kn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jn.multiplyScalar(-Kn.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const r=this.center;_a(Ma.set(-.5,-.5,0),Kn,r,Jn,n,s),_a(Cs.set(.5,-.5,0),Kn,r,Jn,n,s),_a(va.set(.5,.5,0),Kn,r,Jn,n,s),Bl.set(0,0),to.set(1,0),kl.set(1,1);let o=t.ray.intersectTriangle(Ma,Cs,va,!1,As);if(o===null&&(_a(Cs.set(-.5,.5,0),Kn,r,Jn,n,s),to.set(0,1),o=t.ray.intersectTriangle(Ma,va,Cs,!1,As),o===null))return;const h=t.ray.origin.distanceTo(As);h<t.near||h>t.far||e.push({distance:h,point:As.clone(),uv:_i.getInterpolation(As,Ma,Cs,va,Bl,to,kl,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _a(a,t,e,i,n,s){$n.subVectors(a,e).addScalar(.5).multiply(i),n!==void 0?(Rs.x=s*$n.x-n*$n.y,Rs.y=n*$n.x+s*$n.y):Rs.copy($n),a.copy(t),a.x+=Rs.x,a.y+=Rs.y,a.applyMatrix4(Su)}const Ki=new N,eo=new N,wa=new N,Sa=new N;class Hh{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,e),Ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){eo.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),Sa.copy(this.origin).sub(eo);const s=t.distanceTo(e)*.5,r=-this.direction.dot(wa),o=Sa.dot(this.direction),h=-Sa.dot(wa),l=Sa.lengthSq(),c=Math.abs(1-r*r);let f,u,d,g;if(c>0)if(f=r*h-o,u=r*o-h,g=s*c,f>=0)if(u>=-g)if(u<=g){const x=1/c;f*=x,u*=x,d=f*(f+r*u+2*o)+u*(r*f+u+2*h)+l}else u=s,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*h)+l;else u=-s,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*h)+l;else u<=-g?(f=Math.max(0,-(-r*s+o)),u=f>0?-s:Math.min(Math.max(-s,-h),s),d=-f*f+u*(u+2*h)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-h),s),d=u*(u+2*h)+l):(f=Math.max(0,-(r*s+o)),u=f>0?s:Math.min(Math.max(-s,-h),s),d=-f*f+u*(u+2*h)+l);else u=r>0?-s:s,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(eo).addScaledVector(wa,u),d}intersectSphere(t,e){if(t.radius<0)return null;Ki.subVectors(t.center,this.origin);const i=Ki.dot(this.direction),n=Ki.dot(Ki)-i*i,s=t.radius*t.radius;if(n>s)return null;const r=Math.sqrt(s-n),o=i-r,h=i+r;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,r,o,h;const l=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,n=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,n=(t.min.x-u.x)*l),c>=0?(s=(t.min.y-u.y)*c,r=(t.max.y-u.y)*c):(s=(t.max.y-u.y)*c,r=(t.min.y-u.y)*c),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),f>=0?(o=(t.min.z-u.z)*f,h=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,h=(t.min.z-u.z)*f),i>h||o>n)||((o>i||i!==i)&&(i=o),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,e,i,n,s){const r=this.origin,o=this.direction,h=o.x,l=o.y,c=o.z,f=t.x-r.x,u=t.y-r.y,d=t.z-r.z,g=e.x-r.x,x=e.y-r.y,m=e.z-r.z,p=i.x-r.x,M=i.y-r.y,_=i.z-r.z,v=Math.abs(h),b=Math.abs(l),T=Math.abs(c);let R,S,A,L,F,k,z,P,O,$,B,it;if(v>=b&&v>=T?(A=h,k=f,O=g,it=p,h>=0?(R=l,S=c,L=u,F=d,z=x,P=m,$=M,B=_):(R=c,S=l,L=d,F=u,z=m,P=x,$=_,B=M)):b>=T?(A=l,k=u,O=x,it=M,l>=0?(R=c,S=h,L=d,F=f,z=m,P=g,$=_,B=p):(R=h,S=c,L=f,F=d,z=g,P=m,$=p,B=_)):(A=c,k=d,O=m,it=_,c>=0?(R=h,S=l,L=f,F=u,z=g,P=x,$=p,B=M):(R=l,S=h,L=u,F=f,z=x,P=g,$=M,B=p)),A===0)return null;const Y=R/A,et=S/A,nt=1/A,Ft=L-Y*k,X=F-et*k,ct=z-Y*O,ht=P-et*O,ut=$-Y*it,G=B-et*it,Z=ut*ht-G*ct,mt=Ft*G-X*ut,kt=ct*X-ht*Ft;if(n){if(Z<0||mt<0||kt<0)return null}else if((Z<0||mt<0||kt<0)&&(Z>0||mt>0||kt>0))return null;const Tt=Z+mt+kt;if(Tt===0)return null;const St=nt*(Z*k+mt*O+kt*it);return(Tt>0?St<0:St>0)?null:this.at(St/Tt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Hl=new Ce,Sn=new Hh,ya=new vs,Gl=new N,ba=new N,Ta=new N,Ea=new N,io=new N,Aa=new N,Vl=new N,Ra=new N;class w extends qe{constructor(t=new Le,e=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){Aa.set(0,0,0);for(let h=0,l=s.length;h<l;h++){const c=o[h],f=s[h];c!==0&&(io.fromBufferAttribute(f,t),r?Aa.addScaledVector(io,c):Aa.addScaledVector(io.sub(e),c))}e.add(Aa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),Sn.copy(t.ray).recast(t.near),!(ya.containsPoint(Sn.origin)===!1&&(Sn.intersectSphere(ya,Gl)===null||Sn.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(Hl.copy(s).invert(),Sn.copy(t.ray).applyMatrix4(Hl),!(i.boundingBox!==null&&Sn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Sn)))}_computeIntersections(t,e,i){let n;const s=this.geometry,r=this.material,o=s.index,h=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=r[m.materialIndex],M=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,b=_;v<b;v+=3){const T=o.getX(v),R=o.getX(v+1),S=o.getX(v+2);n=Ca(this,p,t,i,l,c,f,T,R,S),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const M=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);n=Ca(this,r,t,i,l,c,f,M,_,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(h!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=r[m.materialIndex],M=Math.max(m.start,d.start),_=Math.min(h.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,b=_;v<b;v+=3){const T=v,R=v+1,S=v+2;n=Ca(this,p,t,i,l,c,f,T,R,S),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,d.start),x=Math.min(h.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const M=m,_=m+1,v=m+2;n=Ca(this,r,t,i,l,c,f,M,_,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function e0(a,t,e,i,n,s,r,o){let h;if(t.side===Ze?h=i.intersectTriangle(r,s,n,!0,o):h=i.intersectTriangle(n,s,r,t.side===gn,o),h===null)return null;Ra.copy(o),Ra.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(Ra);return l<e.near||l>e.far?null:{distance:l,point:Ra.clone(),object:a}}function Ca(a,t,e,i,n,s,r,o,h,l){a.getVertexPosition(o,ba),a.getVertexPosition(h,Ta),a.getVertexPosition(l,Ea);const c=e0(a,t,e,i,ba,Ta,Ea,Vl);if(c){const f=new N;_i.getBarycoord(Vl,ba,Ta,Ea,f),n&&(c.uv=_i.getInterpolatedAttribute(n,o,h,l,f,new ot)),s&&(c.uv1=_i.getInterpolatedAttribute(s,o,h,l,f,new ot)),r&&(c.normal=_i.getInterpolatedAttribute(r,o,h,l,f,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:h,c:l,normal:new N,materialIndex:0};_i.getNormal(ba,Ta,Ea,u.normal),c.face=u,c.barycoord=f}return c}class yu extends si{constructor(t=null,e=1,i=1,n,s,r,o,h,l=Ye,c=Ye,f,u){super(null,r,o,h,l,c,n,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl extends ui{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qn=new Ce,Xl=new Ce,Pa=[],ql=new Fn,i0=new Ce,Ps=new w,Is=new vs;class Tn extends w{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,i0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qn),ql.copy(t.boundingBox).applyMatrix4(Qn),this.boundingBox.union(ql)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qn),Is.copy(t.boundingSphere).applyMatrix4(Qn),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,r=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[r+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(i),t.ray.intersectsSphere(Is)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Qn),Xl.multiplyMatrices(i,Qn),Ps.matrixWorld=Xl,Ps.raycast(t,Pa);for(let r=0,o=Pa.length;r<o;r++){const h=Pa[r];h.instanceId=s,h.object=this,e.push(h)}Pa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new yu(new Float32Array(n*this.count),n,this.count,Lh,Ci));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<i.length;l++)r+=i[l];const o=this.geometry.morphTargetsRelative?1:1-r,h=n*t;return s[h]=o,s.set(i,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yn=new vs,n0=new ot(.5,.5),Ia=new N;class Gh{constructor(t=new Qi,e=new Qi,i=new Qi,n=new Qi,s=new Qi,r=new Qi){this.planes=[t,e,i,n,s,r]}set(t,e,i,n,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Oi,i=!1){const n=this.planes,s=t.elements,r=s[0],o=s[1],h=s[2],l=s[3],c=s[4],f=s[5],u=s[6],d=s[7],g=s[8],x=s[9],m=s[10],p=s[11],M=s[12],_=s[13],v=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,p-g,b-M).normalize(),n[1].setComponents(l+r,d+c,p+g,b+M).normalize(),n[2].setComponents(l+o,d+f,p+x,b+_).normalize(),n[3].setComponents(l-o,d-f,p-x,b-_).normalize(),i)n[4].setComponents(h,u,m,v).normalize(),n[5].setComponents(l-h,d-u,p-m,b-v).normalize();else if(n[4].setComponents(l-h,d-u,p-m,b-v).normalize(),e===Oi)n[5].setComponents(l+h,d+u,p+m,b+v).normalize();else if(e===Qs)n[5].setComponents(h,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(t){yn.center.set(0,0,0);const e=n0.distanceTo(t.center);return yn.radius=.7071067811865476+e,yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Ia.x=n.normal.x>0?t.max.x:t.min.x,Ia.y=n.normal.y>0?t.max.y:t.min.y,Ia.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bu extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yl=new Ce,ch=new Hh,La=new vs,Da=new N;class s0 extends qe{constructor(t=new Le,e=new bu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(n),La.radius+=s,t.ray.intersectsSphere(La)===!1)return;Yl.copy(n).invert(),ch.copy(t.ray).applyMatrix4(Yl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=i.index,f=i.attributes.position;if(l!==null){const u=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let g=u,x=d;g<x;g++){const m=l.getX(g);Da.fromBufferAttribute(f,m),Zl(Da,m,h,n,t,e,this)}}else{const u=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let g=u,x=d;g<x;g++)Da.fromBufferAttribute(f,g),Zl(Da,g,h,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zl(a,t,e,i,n,s,r){const o=ch.distanceSqToPoint(a);if(o<e){const h=new N;ch.closestPointToPoint(a,h),h.applyMatrix4(i);const l=n.ray.origin.distanceTo(h);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Tu extends si{constructor(t=[],e=In,i,n,s,r,o,h,l,c){super(t,e,i,n,s,r,o,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class an extends si{constructor(t,e,i,n,s,r,o,h,l){super(t,e,i,n,s,r,o,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ta extends si{constructor(t,e,i=Wi,n,s,r,o=Ye,h=Ye,l,c=sn,f=1){if(c!==sn&&c!==An)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,n,s,r,o,h,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class a0 extends ta{constructor(t,e=Wi,i=In,n,s,r=Ye,o=Ye,h,l=sn){const c={width:t,height:t,depth:1},f=[c,c,c,c,c,c];super(t,t,e,i,n,s,r,o,h,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Eu extends si{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pt extends Le{constructor(t=1,e=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const h=[],l=[],c=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,i,e,t,r,s,0),g("z","y","x",1,-1,i,e,-t,r,s,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(h),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(f,2));function g(x,m,p,M,_,v,b,T,R,S,A){const L=v/R,F=b/S,k=v/2,z=b/2,P=T/2,O=R+1,$=S+1;let B=0,it=0;const Y=new N;for(let et=0;et<$;et++){const nt=et*F-z;for(let Ft=0;Ft<O;Ft++){const X=Ft*L-k;Y[x]=X*M,Y[m]=nt*_,Y[p]=P,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=T>0?1:-1,c.push(Y.x,Y.y,Y.z),f.push(Ft/R),f.push(1-et/S),B+=1}}for(let et=0;et<S;et++)for(let nt=0;nt<R;nt++){const Ft=u+nt+O*et,X=u+nt+O*(et+1),ct=u+(nt+1)+O*(et+1),ht=u+(nt+1)+O*et;h.push(Ft,X,ht),h.push(X,ct,ht),it+=6}o.addGroup(d,it,A),d+=it,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class oe extends Le{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));const r=[],o=[],h=[],l=[],c=e/2,f=Math.PI/2*t,u=e,d=2*f+u,g=i*2+s,x=n+1,m=new N,p=new N;for(let M=0;M<=g;M++){let _=0,v=0,b=0,T=0;if(M<=i){const A=M/i,L=A*Math.PI/2;v=-c-t*Math.cos(L),b=t*Math.sin(L),T=-t*Math.cos(L),_=A*f}else if(M<=i+s){const A=(M-i)/s;v=-c+A*e,b=t,T=0,_=f+A*u}else{const A=(M-i-s)/i,L=A*Math.PI/2;v=c+t*Math.sin(L),b=t*Math.cos(L),T=t*Math.sin(L),_=f+u+A*f}const R=Math.max(0,Math.min(1,_/d));let S=0;M===0?S=.5/n:M===g&&(S=-.5/n);for(let A=0;A<=n;A++){const L=A/n,F=L*Math.PI*2,k=Math.sin(F),z=Math.cos(F);p.x=-b*z,p.y=v,p.z=b*k,o.push(p.x,p.y,p.z),m.set(-b*z,T,b*k),m.normalize(),h.push(m.x,m.y,m.z),l.push(L+S,R)}if(M>0){const A=(M-1)*x;for(let L=0;L<n;L++){const F=A+L,k=A+L+1,z=M*x+L,P=M*x+L+1;r.push(F,k,z),r.push(k,P,z)}}}this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Xe extends Le{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],r=[],o=[],h=[],l=new N,c=new ot;r.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=i+f/e*n;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(r[u]/t+1)/2,c.y=(r[u+1]/t+1)/2,h.push(c.x,c.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ut extends Le{constructor(t=1,e=1,i=1,n=32,s=1,r=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:h};const l=this;n=Math.floor(n),s=Math.floor(s);const c=[],f=[],u=[],d=[];let g=0;const x=[],m=i/2;let p=0;M(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new ae(f,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(d,2));function M(){const v=new N,b=new N;let T=0;const R=(e-t)/i;for(let S=0;S<=s;S++){const A=[],L=S/s,F=L*(e-t)+t;for(let k=0;k<=n;k++){const z=k/n,P=z*h+o,O=Math.sin(P),$=Math.cos(P);b.x=F*O,b.y=-L*i+m,b.z=F*$,f.push(b.x,b.y,b.z),v.set(O,R,$).normalize(),u.push(v.x,v.y,v.z),d.push(z,1-L),A.push(g++)}x.push(A)}for(let S=0;S<n;S++)for(let A=0;A<s;A++){const L=x[A][S],F=x[A+1][S],k=x[A+1][S+1],z=x[A][S+1];(t>0||A!==0)&&(c.push(L,F,z),T+=3),(e>0||A!==s-1)&&(c.push(F,k,z),T+=3)}l.addGroup(p,T,0),p+=T}function _(v){const b=g,T=new ot,R=new N;let S=0;const A=v===!0?t:e,L=v===!0?1:-1;for(let k=1;k<=n;k++)f.push(0,m*L,0),u.push(0,L,0),d.push(.5,.5),g++;const F=g;for(let k=0;k<=n;k++){const P=k/n*h+o,O=Math.cos(P),$=Math.sin(P);R.x=A*$,R.y=m*L,R.z=A*O,f.push(R.x,R.y,R.z),u.push(0,L,0),T.x=O*.5+.5,T.y=$*.5*L+.5,d.push(T.x,T.y),g++}for(let k=0;k<n;k++){const z=b+k,P=F+k;v===!0?c.push(P,P+1,z):c.push(P+1,P,z),S+=3}l.addGroup(p,S,v===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ut(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vt extends Ut{constructor(t=1,e=1,i=32,n=1,s=!1,r=0,o=Math.PI*2){super(0,t,e,i,n,s,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Vt(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mr extends Le{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],r=[];o(n),l(i),c(),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(s.slice(),3)),this.setAttribute("uv",new ae(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const _=new N,v=new N,b=new N;for(let T=0;T<e.length;T+=3)d(e[T+0],_),d(e[T+1],v),d(e[T+2],b),h(_,v,b,M)}function h(M,_,v,b){const T=b+1,R=[];for(let S=0;S<=T;S++){R[S]=[];const A=M.clone().lerp(v,S/T),L=_.clone().lerp(v,S/T),F=T-S;for(let k=0;k<=F;k++)k===0&&S===T?R[S][k]=A:R[S][k]=A.clone().lerp(L,k/F)}for(let S=0;S<T;S++)for(let A=0;A<2*(T-S)-1;A++){const L=Math.floor(A/2);A%2===0?(u(R[S][L+1]),u(R[S+1][L]),u(R[S][L])):(u(R[S][L+1]),u(R[S+1][L+1]),u(R[S+1][L]))}}function l(M){const _=new N;for(let v=0;v<s.length;v+=3)_.x=s[v+0],_.y=s[v+1],_.z=s[v+2],_.normalize().multiplyScalar(M),s[v+0]=_.x,s[v+1]=_.y,s[v+2]=_.z}function c(){const M=new N;for(let _=0;_<s.length;_+=3){M.x=s[_+0],M.y=s[_+1],M.z=s[_+2];const v=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;r.push(v,1-b)}g(),f()}function f(){for(let M=0;M<r.length;M+=6){const _=r[M+0],v=r[M+2],b=r[M+4],T=Math.max(_,v,b),R=Math.min(_,v,b);T>.9&&R<.1&&(_<.2&&(r[M+0]+=1),v<.2&&(r[M+2]+=1),b<.2&&(r[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function d(M,_){const v=M*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){const M=new N,_=new N,v=new N,b=new N,T=new ot,R=new ot,S=new ot;for(let A=0,L=0;A<s.length;A+=9,L+=6){M.set(s[A+0],s[A+1],s[A+2]),_.set(s[A+3],s[A+4],s[A+5]),v.set(s[A+6],s[A+7],s[A+8]),T.set(r[L+0],r[L+1]),R.set(r[L+2],r[L+3]),S.set(r[L+4],r[L+5]),b.copy(M).add(_).add(v).divideScalar(3);const F=m(b);x(T,L+0,M,F),x(R,L+2,_,F),x(S,L+4,v,F)}}function x(M,_,v,b){b<0&&M.x===1&&(r[_]=M.x-1),v.x===0&&v.z===0&&(r[_]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.vertices,t.indices,t.radius,t.detail)}}class Xi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let r;e?r=e:r=t*i[s-1];let o=0,h=s-1,l;for(;o<=h;)if(n=Math.floor(o+(h-o)/2),l=i[n]-r,l<0)o=n+1;else if(l>0)h=n-1;else{h=n;break}if(n=h,i[n]===r)return n/(s-1);const c=i[n],u=i[n+1]-c,d=(r-c)/u;return(n+d)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const r=this.getPoint(n),o=this.getPoint(s),h=e||(r.isVector2?new ot:new N);return h.copy(o).sub(r).normalize(),h}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new N,n=[],s=[],r=[],o=new N,h=new Ce;for(let d=0;d<=t;d++){const g=d/t;n[d]=this.getTangentAt(g,new N)}s[0]=new N,r[0]=new N;let l=Number.MAX_VALUE;const c=Math.abs(n[0].x),f=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=l&&(l=c,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),r[0].crossVectors(n[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(me(n[d-1].dot(n[d]),-1,1));s[d].applyMatrix4(h.makeRotationAxis(o,g))}r[d].crossVectors(n[d],s[d])}if(e===!0){let d=Math.acos(me(s[0].dot(s[t]),-1,1));d/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(h.makeRotationAxis(n[g],d*g)),r[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Vh extends Xi{constructor(t=0,e=0,i=1,n=1,s=0,r=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=h}getPoint(t,e=new ot){const i=e,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(r?s=0:s=n),this.aClockwise===!0&&!r&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+t*s;let h=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=h-this.aX,d=l-this.aY;h=u*c-d*f+this.aX,l=u*f+d*c+this.aY}return i.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class r0 extends Vh{constructor(t,e,i,n,s,r){super(t,e,i,i,n,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Wh(){let a=0,t=0,e=0,i=0;function n(s,r,o,h){a=s,t=o,e=-3*s+3*r-2*o-h,i=2*s-2*r+o+h}return{initCatmullRom:function(s,r,o,h,l){n(r,o,l*(o-s),l*(h-r))},initNonuniformCatmullRom:function(s,r,o,h,l,c,f){let u=(r-s)/l-(o-s)/(l+c)+(o-r)/c,d=(o-r)/c-(h-r)/(c+f)+(h-o)/f;u*=c,d*=c,n(r,o,u,d)},calc:function(s){const r=s*s,o=r*s;return a+t*s+e*r+i*o}}}const Jl=new N,Kl=new N,no=new Wh,so=new Wh,ao=new Wh;class o0 extends Xi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new N){const i=e,n=this.points,s=n.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),h=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1);let l,c;this.closed||o>0?l=n[(o-1)%s]:(Kl.subVectors(n[0],n[1]).add(n[0]),l=Kl);const f=n[o%s],u=n[(o+1)%s];if(this.closed||o+2<s?c=n[(o+2)%s]:(Jl.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=Jl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(c),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),no.initNonuniformCatmullRom(l.x,f.x,u.x,c.x,g,x,m),so.initNonuniformCatmullRom(l.y,f.y,u.y,c.y,g,x,m),ao.initNonuniformCatmullRom(l.z,f.z,u.z,c.z,g,x,m)}else this.curveType==="catmullrom"&&(no.initCatmullRom(l.x,f.x,u.x,c.x,this.tension),so.initCatmullRom(l.y,f.y,u.y,c.y,this.tension),ao.initCatmullRom(l.z,f.z,u.z,c.z,this.tension));return i.set(no.calc(h),so.calc(h),ao.calc(h)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new N().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $l(a,t,e,i,n){const s=(i-t)*.5,r=(n-e)*.5,o=a*a,h=a*o;return(2*e-2*i+s+r)*h+(-3*e+3*i-2*s-r)*o+s*a+e}function h0(a,t){const e=1-a;return e*e*t}function l0(a,t){return 2*(1-a)*a*t}function c0(a,t){return a*a*t}function Ws(a,t,e,i){return h0(a,t)+l0(a,e)+c0(a,i)}function u0(a,t){const e=1-a;return e*e*e*t}function f0(a,t){const e=1-a;return 3*e*e*a*t}function d0(a,t){return 3*(1-a)*a*a*t}function p0(a,t){return a*a*a*t}function Xs(a,t,e,i,n){return u0(a,t)+f0(a,e)+d0(a,i)+p0(a,n)}class Au extends Xi{constructor(t=new ot,e=new ot,i=new ot,n=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ot){const i=e,n=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(Xs(t,n.x,s.x,r.x,o.x),Xs(t,n.y,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class m0 extends Xi{constructor(t=new N,e=new N,i=new N,n=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new N){const i=e,n=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(Xs(t,n.x,s.x,r.x,o.x),Xs(t,n.y,s.y,r.y,o.y),Xs(t,n.z,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ru extends Xi{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cu extends Xi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pu extends Xi{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(Ws(t,n.x,s.x,r.x),Ws(t,n.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iu extends Xi{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){const i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(Ws(t,n.x,s.x,r.x),Ws(t,n.y,s.y,r.y),Ws(t,n.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lu extends Xi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,n=this.points,s=(n.length-1)*t,r=Math.floor(s),o=s-r,h=n[r===0?r:r-1],l=n[r],c=n[r>n.length-2?n.length-1:r+1],f=n[r>n.length-3?n.length-1:r+2];return i.set($l(o,h.x,l.x,c.x,f.x),$l(o,h.y,l.y,c.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new ot().fromArray(n))}return this}}var dr=Object.freeze({__proto__:null,ArcCurve:r0,CatmullRomCurve3:o0,CubicBezierCurve:Au,CubicBezierCurve3:m0,EllipseCurve:Vh,LineCurve:Ru,LineCurve3:Cu,QuadraticBezierCurve:Pu,QuadraticBezierCurve3:Iu,SplineCurve:Lu});class Du extends Xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dr[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const r=n[s]-i,o=this.curves[s],h=o.getLength(),l=h===0?0:1-r/h;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const r=s[n],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,h=r.getPoints(o);for(let l=0;l<h.length;l++){const c=h[l];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new dr[n.type]().fromJSON(n))}return this}}class Ql extends Du{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ru(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new Pu(this.currentPoint.clone(),new ot(t,e),new ot(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,r){const o=new Au(this.currentPoint.clone(),new ot(t,e),new ot(i,n),new ot(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Lu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,r){const o=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+o,e+h,i,n,s,r),this}absarc(t,e,i,n,s,r){return this.absellipse(t,e,i,i,n,s,r),this}ellipse(t,e,i,n,s,r,o,h){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,i,n,s,r,o,h),this}absellipse(t,e,i,n,s,r,o,h){const l=new Vh(t,e,i,n,s,r,o,h);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wi extends Ql{constructor(t){super(t),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new Ql().fromJSON(n))}return this}}function g0(a,t,e=2){const i=t&&t.length,n=i?t[0]*e:a.length;let s=zu(a,0,n,e,!0);const r=[];if(!s||s.next===s.prev)return r;let o,h,l;if(i&&(s=w0(a,t,s,e)),a.length>80*e){o=a[0],h=a[1];let c=o,f=h;for(let u=e;u<n;u+=e){const d=a[u],g=a[u+1];d<o&&(o=d),g<h&&(h=g),d>c&&(c=d),g>f&&(f=g)}l=Math.max(c-o,f-h),l=l!==0?32767/l:0}return ea(s,r,e,o,h,l,0),r}function zu(a,t,e,i,n){let s;if(n===L0(a,t,e,i)>0)for(let r=t;r<e;r+=i)s=jl(r/i|0,a[r],a[r+1],s);else for(let r=e-i;r>=t;r-=i)s=jl(r/i|0,a[r],a[r+1],s);return s&&ms(s,s.next)&&(na(s),s=s.next),s}function Dn(a,t){if(!a)return a;t||(t=a);let e=a,i;do if(i=!1,!e.steiner&&(ms(e,e.next)||Be(e.prev,e,e.next)===0)){if(na(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ea(a,t,e,i,n,s,r){if(!a)return;!r&&s&&E0(a,i,n,s);let o=a;for(;a.prev!==a.next;){const h=a.prev,l=a.next;if(s?M0(a,i,n,s):x0(a)){t.push(h.i,a.i,l.i),na(a),a=l.next,o=l.next;continue}if(a=l,a===o){r?r===1?(a=v0(Dn(a),t),ea(a,t,e,i,n,s,2)):r===2&&_0(a,t,e,i,n,s):ea(Dn(a),t,e,i,n,s,1);break}}}function x0(a){const t=a.prev,e=a,i=a.next;if(Be(t,e,i)>=0)return!1;const n=t.x,s=e.x,r=i.x,o=t.y,h=e.y,l=i.y,c=Math.min(n,s,r),f=Math.min(o,h,l),u=Math.max(n,s,r),d=Math.max(o,h,l);let g=i.next;for(;g!==t;){if(g.x>=c&&g.x<=u&&g.y>=f&&g.y<=d&&Ns(n,o,s,h,r,l,g.x,g.y)&&Be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function M0(a,t,e,i){const n=a.prev,s=a,r=a.next;if(Be(n,s,r)>=0)return!1;const o=n.x,h=s.x,l=r.x,c=n.y,f=s.y,u=r.y,d=Math.min(o,h,l),g=Math.min(c,f,u),x=Math.max(o,h,l),m=Math.max(c,f,u),p=uh(d,g,t,e,i),M=uh(x,m,t,e,i);let _=a.prevZ,v=a.nextZ;for(;_&&_.z>=p&&v&&v.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==n&&_!==r&&Ns(o,c,h,f,l,u,_.x,_.y)&&Be(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==n&&v!==r&&Ns(o,c,h,f,l,u,v.x,v.y)&&Be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==n&&_!==r&&Ns(o,c,h,f,l,u,_.x,_.y)&&Be(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==n&&v!==r&&Ns(o,c,h,f,l,u,v.x,v.y)&&Be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function v0(a,t){let e=a;do{const i=e.prev,n=e.next.next;!ms(i,n)&&Nu(i,e,e.next,n)&&ia(i,n)&&ia(n,i)&&(t.push(i.i,e.i,n.i),na(e),na(e.next),e=a=n),e=e.next}while(e!==a);return Dn(e)}function _0(a,t,e,i,n,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&C0(r,o)){let h=Uu(r,o);r=Dn(r,r.next),h=Dn(h,h.next),ea(r,t,e,i,n,s,0),ea(h,t,e,i,n,s,0);return}o=o.next}r=r.next}while(r!==a)}function w0(a,t,e,i){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s]*i,h=s<r-1?t[s+1]*i:a.length,l=zu(a,o,h,i,!1);l===l.next&&(l.steiner=!0),n.push(R0(l))}n.sort(S0);for(let s=0;s<n.length;s++)e=y0(n[s],e);return e}function S0(a,t){let e=a.x-t.x;if(e===0&&(e=a.y-t.y,e===0)){const i=(a.next.y-a.y)/(a.next.x-a.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function y0(a,t){const e=b0(a,t);if(!e)return t;const i=Uu(e,a);return Dn(i,i.next),Dn(e,e.next)}function b0(a,t){let e=t;const i=a.x,n=a.y;let s=-1/0,r;if(ms(a,e))return e;do{if(ms(a,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const f=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>s&&(s=f,r=e.x<e.next.x?e:e.next,f===i))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,h=r.x,l=r.y;let c=1/0;e=r;do{if(i>=e.x&&e.x>=h&&i!==e.x&&Fu(n<l?i:s,n,h,l,n<l?s:i,n,e.x,e.y)){const f=Math.abs(n-e.y)/(i-e.x);ia(e,a)&&(f<c||f===c&&(e.x>r.x||e.x===r.x&&T0(r,e)))&&(r=e,c=f)}e=e.next}while(e!==o);return r}function T0(a,t){return Be(a.prev,a,t.prev)<0&&Be(t.next,a,a.next)<0}function E0(a,t,e,i){let n=a;do n.z===0&&(n.z=uh(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==a);n.prevZ.nextZ=null,n.prevZ=null,A0(n)}function A0(a){let t,e=1;do{let i=a,n;a=null;let s=null;for(t=0;i;){t++;let r=i,o=0;for(let l=0;l<e&&(o++,r=r.nextZ,!!r);l++);let h=e;for(;o>0||h>0&&r;)o!==0&&(h===0||!r||i.z<=r.z)?(n=i,i=i.nextZ,o--):(n=r,r=r.nextZ,h--),s?s.nextZ=n:a=n,n.prevZ=s,s=n;i=r}s.nextZ=null,e*=2}while(t>1);return a}function uh(a,t,e,i,n){return a=(a-e)*n|0,t=(t-i)*n|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,a|t<<1}function R0(a){let t=a,e=a;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==a);return e}function Fu(a,t,e,i,n,s,r,o){return(n-r)*(t-o)>=(a-r)*(s-o)&&(a-r)*(i-o)>=(e-r)*(t-o)&&(e-r)*(s-o)>=(n-r)*(i-o)}function Ns(a,t,e,i,n,s,r,o){return!(a===r&&t===o)&&Fu(a,t,e,i,n,s,r,o)}function C0(a,t){return a.next.i!==t.i&&a.prev.i!==t.i&&!P0(a,t)&&(ia(a,t)&&ia(t,a)&&I0(a,t)&&(Be(a.prev,a,t.prev)||Be(a,t.prev,t))||ms(a,t)&&Be(a.prev,a,a.next)>0&&Be(t.prev,t,t.next)>0)}function Be(a,t,e){return(t.y-a.y)*(e.x-t.x)-(t.x-a.x)*(e.y-t.y)}function ms(a,t){return a.x===t.x&&a.y===t.y}function Nu(a,t,e,i){const n=Fa(Be(a,t,e)),s=Fa(Be(a,t,i)),r=Fa(Be(e,i,a)),o=Fa(Be(e,i,t));return!!(n!==s&&r!==o||n===0&&za(a,e,t)||s===0&&za(a,i,t)||r===0&&za(e,a,i)||o===0&&za(e,t,i))}function za(a,t,e){return t.x<=Math.max(a.x,e.x)&&t.x>=Math.min(a.x,e.x)&&t.y<=Math.max(a.y,e.y)&&t.y>=Math.min(a.y,e.y)}function Fa(a){return a>0?1:a<0?-1:0}function P0(a,t){let e=a;do{if(e.i!==a.i&&e.next.i!==a.i&&e.i!==t.i&&e.next.i!==t.i&&Nu(e,e.next,a,t))return!0;e=e.next}while(e!==a);return!1}function ia(a,t){return Be(a.prev,a,a.next)<0?Be(a,t,a.next)>=0&&Be(a,a.prev,t)>=0:Be(a,t,a.prev)<0||Be(a,a.next,t)<0}function I0(a,t){let e=a,i=!1;const n=(a.x+t.x)/2,s=(a.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==a);return i}function Uu(a,t){const e=fh(a.i,a.x,a.y),i=fh(t.i,t.x,t.y),n=a.next,s=t.prev;return a.next=t,t.prev=a,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function jl(a,t,e,i){const n=fh(a,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function na(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function fh(a,t,e){return{i:a,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function L0(a,t,e,i){let n=0;for(let s=t,r=e-i;s<e;s+=i)n+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return n}class D0{static triangulate(t,e,i=2){return g0(t,e,i)}}class en{static area(t){const e=t.length;let i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return en.area(t)<0}static triangulateShape(t,e){const i=[],n=[],s=[];tc(t),ec(i,t);let r=t.length;e.forEach(tc);for(let h=0;h<e.length;h++)n.push(r),r+=e[h].length,ec(i,e[h]);const o=D0.triangulate(i,n);for(let h=0;h<o.length;h+=3)s.push(o.slice(h,h+3));return s}}function tc(a){const t=a.length;t>2&&a[t-1].equals(a[0])&&a.pop()}function ec(a,t){for(let e=0;e<t.length;e++)a.push(t[e].x),a.push(t[e].y)}class Vi extends Le{constructor(t=new wi([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],s=[];for(let o=0,h=t.length;o<h;o++){const l=t[o];r(l)}this.setAttribute("position",new ae(n,3)),this.setAttribute("uv",new ae(s,2)),this.computeVertexNormals();function r(o){const h=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:z0;let _,v=!1,b,T,R,S;if(p){_=p.getSpacedPoints(c),v=!0,u=!1;const at=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(c,at),T=new N,R=new N,S=new N}u||(m=0,d=0,g=0,x=0);const A=o.extractPoints(l);let L=A.shape;const F=A.holes;if(!en.isClockWise(L)){L=L.reverse();for(let at=0,ft=F.length;at<ft;at++){const gt=F[at];en.isClockWise(gt)&&(F[at]=gt.reverse())}}function z(at){const gt=10000000000000001e-36;let xt=at[0];for(let _t=1;_t<=at.length;_t++){const Kt=_t%at.length,Zt=at[Kt],ie=Zt.x-xt.x,ne=Zt.y-xt.y,U=ie*ie+ne*ne,Me=Math.max(Math.abs(Zt.x),Math.abs(Zt.y),Math.abs(xt.x),Math.abs(xt.y)),he=gt*Me*Me;if(U<=he){at.splice(Kt,1),_t--;continue}xt=Zt}}z(L),F.forEach(z);const P=F.length,O=L;for(let at=0;at<P;at++){const ft=F[at];L=L.concat(ft)}function $(at,ft,gt){return ft||ve("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(ft,gt)}const B=L.length;function it(at,ft,gt){let xt,_t,Kt;const Zt=at.x-ft.x,ie=at.y-ft.y,ne=gt.x-at.x,U=gt.y-at.y,Me=Zt*Zt+ie*ie,he=Zt*U-ie*ne;if(Math.abs(he)>Number.EPSILON){const I=Math.sqrt(Me),y=Math.sqrt(ne*ne+U*U),V=ft.x-ie/I,q=ft.y+Zt/I,Q=gt.x-U/y,pt=gt.y+ne/y,vt=((Q-V)*U-(pt-q)*ne)/(Zt*U-ie*ne);xt=V+Zt*vt-at.x,_t=q+ie*vt-at.y;const tt=xt*xt+_t*_t;if(tt<=2)return new ot(xt,_t);Kt=Math.sqrt(tt/2)}else{let I=!1;Zt>Number.EPSILON?ne>Number.EPSILON&&(I=!0):Zt<-Number.EPSILON?ne<-Number.EPSILON&&(I=!0):Math.sign(ie)===Math.sign(U)&&(I=!0),I?(xt=-ie,_t=Zt,Kt=Math.sqrt(Me)):(xt=Zt,_t=ie,Kt=Math.sqrt(Me/2))}return new ot(xt/Kt,_t/Kt)}const Y=[];for(let at=0,ft=O.length,gt=ft-1,xt=at+1;at<ft;at++,gt++,xt++)gt===ft&&(gt=0),xt===ft&&(xt=0),Y[at]=it(O[at],O[gt],O[xt]);const et=[];let nt,Ft=Y.concat();for(let at=0,ft=P;at<ft;at++){const gt=F[at];nt=[];for(let xt=0,_t=gt.length,Kt=_t-1,Zt=xt+1;xt<_t;xt++,Kt++,Zt++)Kt===_t&&(Kt=0),Zt===_t&&(Zt=0),nt[xt]=it(gt[xt],gt[Kt],gt[Zt]);et.push(nt),Ft=Ft.concat(nt)}let X;if(m===0)X=en.triangulateShape(O,F);else{const at=[],ft=[];for(let gt=0;gt<m;gt++){const xt=gt/m,_t=d*Math.cos(xt*Math.PI/2),Kt=g*Math.sin(xt*Math.PI/2)+x;for(let Zt=0,ie=O.length;Zt<ie;Zt++){const ne=$(O[Zt],Y[Zt],Kt);mt(ne.x,ne.y,-_t),xt===0&&at.push(ne)}for(let Zt=0,ie=P;Zt<ie;Zt++){const ne=F[Zt];nt=et[Zt];const U=[];for(let Me=0,he=ne.length;Me<he;Me++){const I=$(ne[Me],nt[Me],Kt);mt(I.x,I.y,-_t),xt===0&&U.push(I)}xt===0&&ft.push(U)}}X=en.triangulateShape(at,ft)}const ct=X.length,ht=g+x;for(let at=0;at<B;at++){const ft=u?$(L[at],Ft[at],ht):L[at];v?(R.copy(b.normals[0]).multiplyScalar(ft.x),T.copy(b.binormals[0]).multiplyScalar(ft.y),S.copy(_[0]).add(R).add(T),mt(S.x,S.y,S.z)):mt(ft.x,ft.y,0)}for(let at=1;at<=c;at++)for(let ft=0;ft<B;ft++){const gt=u?$(L[ft],Ft[ft],ht):L[ft];v?(R.copy(b.normals[at]).multiplyScalar(gt.x),T.copy(b.binormals[at]).multiplyScalar(gt.y),S.copy(_[at]).add(R).add(T),mt(S.x,S.y,S.z)):mt(gt.x,gt.y,f/c*at)}for(let at=m-1;at>=0;at--){const ft=at/m,gt=d*Math.cos(ft*Math.PI/2),xt=g*Math.sin(ft*Math.PI/2)+x;for(let _t=0,Kt=O.length;_t<Kt;_t++){const Zt=$(O[_t],Y[_t],xt);mt(Zt.x,Zt.y,f+gt)}for(let _t=0,Kt=F.length;_t<Kt;_t++){const Zt=F[_t];nt=et[_t];for(let ie=0,ne=Zt.length;ie<ne;ie++){const U=$(Zt[ie],nt[ie],xt);v?mt(U.x,U.y+_[c-1].y,_[c-1].x+gt):mt(U.x,U.y,f+gt)}}}ut(),G();function ut(){const at=n.length/3;if(u){let ft=0,gt=B*ft;for(let xt=0;xt<ct;xt++){const _t=X[xt];kt(_t[2]+gt,_t[1]+gt,_t[0]+gt)}ft=c+m*2,gt=B*ft;for(let xt=0;xt<ct;xt++){const _t=X[xt];kt(_t[0]+gt,_t[1]+gt,_t[2]+gt)}}else{for(let ft=0;ft<ct;ft++){const gt=X[ft];kt(gt[2],gt[1],gt[0])}for(let ft=0;ft<ct;ft++){const gt=X[ft];kt(gt[0]+B*c,gt[1]+B*c,gt[2]+B*c)}}i.addGroup(at,n.length/3-at,0)}function G(){const at=n.length/3;let ft=0;Z(O,ft),ft+=O.length;for(let gt=0,xt=F.length;gt<xt;gt++){const _t=F[gt];Z(_t,ft),ft+=_t.length}i.addGroup(at,n.length/3-at,1)}function Z(at,ft){let gt=at.length;for(;--gt>=0;){const xt=gt;let _t=gt-1;_t<0&&(_t=at.length-1);for(let Kt=0,Zt=c+m*2;Kt<Zt;Kt++){const ie=B*Kt,ne=B*(Kt+1),U=ft+xt+ie,Me=ft+_t+ie,he=ft+_t+ne,I=ft+xt+ne;Tt(U,Me,he,I)}}}function mt(at,ft,gt){h.push(at),h.push(ft),h.push(gt)}function kt(at,ft,gt){St(at),St(ft),St(gt);const xt=n.length/3,_t=M.generateTopUV(i,n,xt-3,xt-2,xt-1);de(_t[0]),de(_t[1]),de(_t[2])}function Tt(at,ft,gt,xt){St(at),St(ft),St(xt),St(ft),St(gt),St(xt);const _t=n.length/3,Kt=M.generateSideWallUV(i,n,_t-6,_t-3,_t-2,_t-1);de(Kt[0]),de(Kt[1]),de(Kt[3]),de(Kt[1]),de(Kt[2]),de(Kt[3])}function St(at){n.push(h[at*3+0]),n.push(h[at*3+1]),n.push(h[at*3+2])}function de(at){s.push(at.x),s.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return F0(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new dr[n.type]().fromJSON(n)),new Vi(i,t.options)}}const z0={generateTopUV:function(a,t,e,i,n){const s=t[e*3],r=t[e*3+1],o=t[i*3],h=t[i*3+1],l=t[n*3],c=t[n*3+1];return[new ot(s,r),new ot(o,h),new ot(l,c)]},generateSideWallUV:function(a,t,e,i,n,s){const r=t[e*3],o=t[e*3+1],h=t[e*3+2],l=t[i*3],c=t[i*3+1],f=t[i*3+2],u=t[n*3],d=t[n*3+1],g=t[n*3+2],x=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-c)<Math.abs(r-l)?[new ot(r,1-h),new ot(l,1-f),new ot(u,1-g),new ot(x,1-p)]:[new ot(o,1-h),new ot(c,1-f),new ot(d,1-g),new ot(m,1-p)]}};function F0(a,t,e){if(e.shapes=[],Array.isArray(a))for(let i=0,n=a.length;i<n;i++){const s=a[i];e.shapes.push(s.uuid)}else e.shapes.push(a.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Xh extends Mr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xh(t.radius,t.detail)}}class vr extends Le{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=me(n,0,Math.PI*2);const s=[],r=[],o=[],h=[],l=[],c=1/e,f=new N,u=new ot,d=new N,g=new N,x=new N;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),h.push(d.x,d.y,d.z);break;case t.length-1:h.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),h.push(d.x,d.y,d.z),x.copy(g)}for(let M=0;M<=e;M++){const _=i+M*c*n,v=Math.sin(_),b=Math.cos(_);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*v,f.y=t[T].y,f.z=t[T].x*b,r.push(f.x,f.y,f.z),u.x=M/e,u.y=T/(t.length-1),o.push(u.x,u.y);const R=h[3*T+0]*v,S=h[3*T+1],A=h[3*T+0]*b;l.push(R,S,A)}}for(let M=0;M<e;M++)for(let _=0;_<t.length-1;_++){const v=_+M*t.length,b=v,T=v+t.length,R=v+t.length+1,S=v+1;s.push(b,T,S),s.push(R,S,T)}this.setIndex(s),this.setAttribute("position",new ae(r,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.points,t.segments,t.phiStart,t.phiLength)}}class ye extends Mr{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ye(t.radius,t.detail)}}class Ge extends Le{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,r=e/2,o=Math.floor(i),h=Math.floor(n),l=o+1,c=h+1,f=t/o,u=e/h,d=[],g=[],x=[],m=[];for(let p=0;p<c;p++){const M=p*u-r;for(let _=0;_<l;_++){const v=_*f-s;g.push(v,-M,0),x.push(0,0,1),m.push(_/o),m.push(1-p/h)}}for(let p=0;p<h;p++)for(let M=0;M<o;M++){const _=M+l*p,v=M+l*(p+1),b=M+1+l*(p+1),T=M+1+l*p;d.push(_,v,T),d.push(v,b,T)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fe extends Le{constructor(t=.5,e=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],h=[],l=[],c=[];let f=t;const u=(e-t)/n,d=new N,g=new ot;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){const p=s+m/i*r;d.x=f*Math.cos(p),d.y=f*Math.sin(p),h.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,c.push(g.x,g.y)}f+=u}for(let x=0;x<n;x++){const m=x*(i+1);for(let p=0;p<i;p++){const M=p+m,_=M,v=M+i+1,b=M+i+2,T=M+1;o.push(_,v,T),o.push(v,b,T)}}this.setIndex(o),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class _r extends Le{constructor(t=new wi([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],s=[],r=[];let o=0,h=0;if(Array.isArray(t)===!1)l(t);else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(o,h,c),o+=h,h=0;this.setIndex(i),this.setAttribute("position",new ae(n,3)),this.setAttribute("normal",new ae(s,3)),this.setAttribute("uv",new ae(r,2));function l(c){const f=n.length/3,u=c.extractPoints(e);let d=u.shape;const g=u.holes;en.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];en.isClockWise(M)===!0&&(g[m]=M.reverse())}const x=en.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){const M=d[m];n.push(M.x,M.y,0),s.push(0,0,1),r.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){const M=x[m],_=M[0]+f,v=M[1]+f,b=M[2]+f;i.push(_,v,b),h+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return N0(e,t)}static fromJSON(t,e){const i=[];for(let n=0,s=t.shapes.length;n<s;n++){const r=e[t.shapes[n]];i.push(r)}return new _r(i,t.curveSegments)}}function N0(a,t){if(t.shapes=[],Array.isArray(a))for(let e=0,i=a.length;e<i;e++){const n=a[e];t.shapes.push(n.uuid)}else t.shapes.push(a.uuid);return t}class Mt extends Le{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const h=Math.min(r+o,Math.PI);let l=0;const c=[],f=new N,u=new N,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const M=[],_=p/i,v=r+_*o,b=t*Math.cos(v),T=Math.sqrt(t*t-b*b);let R=0;p===0&&r===0?R=.5/e:p===i&&h===Math.PI&&(R=-.5/e);for(let S=0;S<=e;S++){const A=S/e,L=n+A*s;f.x=-T*Math.cos(L),f.y=b,f.z=T*Math.sin(L),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(A+R,1-_),M.push(l++)}c.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const _=c[p][M+1],v=c[p][M],b=c[p+1][M],T=c[p+1][M+1];(p!==0||r>0)&&d.push(_,v,T),(p!==i-1||h<Math.PI)&&d.push(v,b,T)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jt extends Le{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const h=[],l=[],c=[],f=[],u=new N,d=new N,g=new N;for(let x=0;x<=i;x++){const m=r+x/i*o;for(let p=0;p<=n;p++){const M=p/n*s;d.x=(t+e*Math.cos(m))*Math.cos(M),d.y=(t+e*Math.cos(m))*Math.sin(M),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(d,u).normalize(),c.push(g.x,g.y,g.z),f.push(p/n),f.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){const p=(n+1)*x+m-1,M=(n+1)*(x-1)+m-1,_=(n+1)*(x-1)+m,v=(n+1)*x+m;h.push(p,M,v),h.push(M,_,v)}this.setIndex(h),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class qh extends Le{constructor(t=new Iu(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:s};const r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new N,h=new N,l=new ot;let c=new N;const f=[],u=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ae(f,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(d,2));function x(){for(let _=0;_<e;_++)m(_);m(s===!1?e:0),M(),p()}function m(_){c=t.getPointAt(_/e,c);const v=r.normals[_],b=r.binormals[_];for(let T=0;T<=n;T++){const R=T/n*Math.PI*2,S=Math.sin(R),A=-Math.cos(R);h.x=A*v.x+S*b.x,h.y=A*v.y+S*b.y,h.z=A*v.z+S*b.z,h.normalize(),u.push(h.x,h.y,h.z),o.x=c.x+i*h.x,o.y=c.y+i*h.y,o.z=c.z+i*h.z,f.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=n;v++){const b=(n+1)*(_-1)+(v-1),T=(n+1)*_+(v-1),R=(n+1)*_+v,S=(n+1)*(_-1)+v;g.push(b,T,S),g.push(T,R,S)}}function M(){for(let _=0;_<=e;_++)for(let v=0;v<=n;v++)l.x=_/e,l.y=v/n,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new qh(new dr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function gs(a){const t={};for(const e in a){t[e]={};for(const i in a[e]){const n=a[e][i];if(ic(n))n.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(ic(n[0])){const s=[];for(let r=0,o=n.length;r<o;r++)s[r]=n[r].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function hi(a){const t={};for(let e=0;e<a.length;e++){const i=gs(a[e]);for(const n in i)t[n]=i[n]}return t}function ic(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function U0(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function Ou(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const sa={clone:gs,merge:hi};var O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=B0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=U0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Bt().setHex(n.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(n.value);break;case"v3":this.uniforms[i].value=new N().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Oe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new re().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ce().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Bu extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nc extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=or,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Us extends Mn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Bt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=or,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class k0 extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class H0 extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wr extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class G0 extends wr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ro=new Ce,sc=new N,ac=new N;class ku{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gh,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(sc),ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ac),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ro,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,r=n?n.z/s.x:1,o=n?n.w/s.y:1,h=n?n.x/s.x:0,l=n?n.y/s.y:0;t.coordinateSystem===Qs||t.reversedDepth?e.set(.5*r,0,0,.5*r+h,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+h,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Na=new N,Ua=new Ms,Di=new N;class Hu extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Na,Ua,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Ua,Di.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Na,Ua,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Ua,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const dn=new N,rc=new ot,oc=new ot;class pi extends Hu{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dn.x,dn.y).multiplyScalar(-t/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dn.x,dn.y).multiplyScalar(-t/dn.z)}getViewSize(t,e){return this.getViewBounds(t,rc,oc),e.subVectors(oc,rc)}setViewOffset(t,e,i,n,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const h=r.fullWidth,l=r.fullHeight;s+=r.offsetX*n/h,e-=r.offsetY*i/l,n*=r.width/h,i*=r.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class V0 extends ku{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class _s extends wr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new V0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Sr extends Hu{constructor(t=-1,e=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=n+e,h=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=c*this.view.offsetY,h=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class W0 extends ku{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dh extends wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new W0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class X0 extends wr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const jn=-90,ts=1;class q0 extends qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new pi(jn,ts,t,e);n.layers=this.layers,this.add(n);const s=new pi(jn,ts,t,e);s.layers=this.layers,this.add(s);const r=new pi(jn,ts,t,e);r.layers=this.layers,this.add(r);const o=new pi(jn,ts,t,e);o.layers=this.layers,this.add(o);const h=new pi(jn,ts,t,e);h.layers=this.layers,this.add(h);const l=new pi(jn,ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,r,o,h]=e;for(const l of e)this.remove(l);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,h,l,c]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Y0 extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Z0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=J0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function J0(){this._document.hidden===!1&&this.reset()}const hc=new Ce;class K0{constructor(t,e,i=0,n=1/0){this.ray=new Hh(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new kh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ve("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hc),this}intersectObject(t,e=!0,i=[]){return ph(t,this,i,e),i.sort(lc),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)ph(t[n],this,i,e);return i.sort(lc),i}}function lc(a,t){return a.distance-t.distance}function ph(a,t,e,i){let n=!0;if(a.layers.test(t.layers)&&a.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const s=a.children;for(let r=0,o=s.length;r<o;r++)ph(s[r],t,e,!0)}}const jh=class jh{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};jh.prototype.isMatrix2=!0;let cc=jh;function uc(a,t,e,i){const n=$0(i);switch(e){case pu:return a*t;case Lh:return a*t/n.components*n.byteLength;case Dh:return a*t/n.components*n.byteLength;case Ln:return a*t*2/n.components*n.byteLength;case zh:return a*t*2/n.components*n.byteLength;case mu:return a*t*3/n.components*n.byteLength;case Pi:return a*t*4/n.components*n.byteLength;case Fh:return a*t*4/n.components*n.byteLength;case Za:case Ja:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Ka:case $a:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Fo:case Uo:return Math.max(a,16)*Math.max(t,8)/4;case zo:case No:return Math.max(a,8)*Math.max(t,8)/2;case Oo:case Bo:case Ho:case Go:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case ko:case ar:case Vo:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case qo:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case $o:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case jo:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case th:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case eh:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case ih:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case nh:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case sh:case ah:case rh:return Math.ceil(a/4)*Math.ceil(t/4)*16;case oh:case hh:return Math.ceil(a/4)*Math.ceil(t/4)*8;case rr:case lh:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $0(a){switch(a){case gi:case cu:return{byteLength:1,components:1};case Ks:case uu:case ci:return{byteLength:2,components:1};case Ph:case Ih:return{byteLength:2,components:4};case Wi:case Ch:case Ci:return{byteLength:4,components:1};case fu:case du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gu(){let a=null,t=!1,e=null,i=null;function n(s,r){i=a.requestAnimationFrame(n),e(s,r)}return{start:function(){t!==!0&&e!==null&&a!==null&&(i=a.requestAnimationFrame(n),t=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function Q0(a){const t=new WeakMap;function e(o,h){const l=o.array,c=o.usage,f=l.byteLength,u=a.createBuffer();a.bindBuffer(h,u),a.bufferData(h,l,c),o.onUploadCallback();let d;if(l instanceof Float32Array)d=a.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=a.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=a.SHORT;else if(l instanceof Uint32Array)d=a.UNSIGNED_INT;else if(l instanceof Int32Array)d=a.INT;else if(l instanceof Int8Array)d=a.BYTE;else if(l instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,h,l){const c=h.array,f=h.updateRanges;if(a.bindBuffer(l,o),f.length===0)a.bufferSubData(l,0,c);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const x=f[d];a.bufferSubData(l,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}h.clearUpdateRanges()}h.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=t.get(o);h&&(a.deleteBuffer(h.buffer),t.delete(o))}function r(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,h),l.version=o.version}}return{get:n,remove:s,update:r}}var j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,um=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ym=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$m=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ox=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_x=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ex=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ix=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:j0,alphahash_pars_fragment:tm,alphamap_fragment:em,alphamap_pars_fragment:im,alphatest_fragment:nm,alphatest_pars_fragment:sm,aomap_fragment:am,aomap_pars_fragment:rm,batching_pars_vertex:om,batching_vertex:hm,begin_vertex:lm,beginnormal_vertex:cm,bsdfs:um,iridescence_fragment:fm,bumpmap_pars_fragment:dm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:xm,color_fragment:Mm,color_pars_fragment:vm,color_pars_vertex:_m,color_vertex:wm,common:Sm,cube_uv_reflection_fragment:ym,defaultnormal_vertex:bm,displacementmap_pars_vertex:Tm,displacementmap_vertex:Em,emissivemap_fragment:Am,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Pm,envmap_fragment:Im,envmap_common_pars_fragment:Lm,envmap_pars_fragment:Dm,envmap_pars_vertex:zm,envmap_physical_pars_fragment:Xm,envmap_vertex:Fm,fog_vertex:Nm,fog_pars_vertex:Um,fog_fragment:Om,fog_pars_fragment:Bm,gradientmap_pars_fragment:km,lightmap_pars_fragment:Hm,lights_lambert_fragment:Gm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Wm,lights_toon_fragment:qm,lights_toon_pars_fragment:Ym,lights_phong_fragment:Zm,lights_phong_pars_fragment:Jm,lights_physical_fragment:Km,lights_physical_pars_fragment:$m,lights_fragment_begin:Qm,lights_fragment_maps:jm,lights_fragment_end:tg,lightprobes_pars_fragment:eg,logdepthbuf_fragment:ig,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:ag,map_fragment:rg,map_pars_fragment:og,map_particle_fragment:hg,map_particle_pars_fragment:lg,metalnessmap_fragment:cg,metalnessmap_pars_fragment:ug,morphinstance_vertex:fg,morphcolor_vertex:dg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:xg,normal_fragment_maps:Mg,normal_pars_fragment:vg,normal_pars_vertex:_g,normal_vertex:wg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:yg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Eg,opaque_fragment:Ag,packing:Rg,premultiplied_alpha_fragment:Cg,project_vertex:Pg,dithering_fragment:Ig,dithering_pars_fragment:Lg,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:zg,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Ng,shadowmap_vertex:Ug,shadowmask_pars_fragment:Og,skinbase_vertex:Bg,skinning_pars_vertex:kg,skinning_vertex:Hg,skinnormal_vertex:Gg,specularmap_fragment:Vg,specularmap_pars_fragment:Wg,tonemapping_fragment:Xg,tonemapping_pars_fragment:qg,transmission_fragment:Yg,transmission_pars_fragment:Zg,uv_pars_fragment:Jg,uv_pars_vertex:Kg,uv_vertex:$g,worldpos_vertex:Qg,background_vert:jg,background_frag:tx,backgroundCube_vert:ex,backgroundCube_frag:ix,cube_vert:nx,cube_frag:sx,depth_vert:ax,depth_frag:rx,distance_vert:ox,distance_frag:hx,equirect_vert:lx,equirect_frag:cx,linedashed_vert:ux,linedashed_frag:fx,meshbasic_vert:dx,meshbasic_frag:px,meshlambert_vert:mx,meshlambert_frag:gx,meshmatcap_vert:xx,meshmatcap_frag:Mx,meshnormal_vert:vx,meshnormal_frag:_x,meshphong_vert:wx,meshphong_frag:Sx,meshphysical_vert:yx,meshphysical_frag:bx,meshtoon_vert:Tx,meshtoon_frag:Ex,points_vert:Ax,points_frag:Rx,shadow_vert:Cx,shadow_frag:Px,sprite_vert:Ix,sprite_frag:Lx},Ct={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ni={basic:{uniforms:hi([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:hi([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:hi([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:hi([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:hi([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Bt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:hi([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:hi([Ct.points,Ct.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:hi([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:hi([Ct.common,Ct.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:hi([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:hi([Ct.sprite,Ct.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:hi([Ct.common,Ct.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:hi([Ct.lights,Ct.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ni.physical={uniforms:hi([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Oa={r:0,b:0,g:0},Dx=new Ce,Vu=new re;Vu.set(-1,0,0,0,1,0,0,0,1);function zx(a,t,e,i,n,s){const r=new Bt(0);let o=n===!0?0:1,h,l,c=null,f=0,u=null;function d(M){let _=M.isScene===!0?M.background:null;if(_&&_.isTexture){const v=M.backgroundBlurriness>0;_=t.get(_,v)}return _}function g(M){let _=!1;const v=d(M);v===null?m(r,o):v&&v.isColor&&(m(v,1),_=!0);const b=a.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(a.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function x(M,_){const v=d(_);v&&(v.isCubeTexture||v.mapping===xr)?(l===void 0&&(l=new w(new Pt(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:gs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vu),l.material.toneMapped=xe.getTransfer(v.colorSpace)!==Ae,(c!==v||f!==v.version||u!==a.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,u=a.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new w(new Ge(2,2),new ni({name:"BackgroundMaterial",uniforms:gs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=xe.getTransfer(v.colorSpace)!==Ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||u!==a.toneMapping)&&(h.material.needsUpdate=!0,c=v,f=v.version,u=a.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function m(M,_){M.getRGB(Oa,Ou(a)),e.buffers.color.setClear(Oa.r,Oa.g,Oa.b,_,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return r},setClearColor:function(M,_=1){r.set(M),o=_,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(r,o)},render:g,addToRenderList:x,dispose:p}}function Fx(a,t){const e=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,r=!1;function o(F,k,z,P,O){let $=!1;const B=f(F,P,z,k);s!==B&&(s=B,l(s.object)),$=d(F,P,z,O),$&&g(F,P,z,O),O!==null&&t.update(O,a.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,v(F,k,z,P),O!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function h(){return a.createVertexArray()}function l(F){return a.bindVertexArray(F)}function c(F){return a.deleteVertexArray(F)}function f(F,k,z,P){const O=P.wireframe===!0;let $=i[k.id];$===void 0&&($={},i[k.id]=$);const B=F.isInstancedMesh===!0?F.id:0;let it=$[B];it===void 0&&(it={},$[B]=it);let Y=it[z.id];Y===void 0&&(Y={},it[z.id]=Y);let et=Y[O];return et===void 0&&(et=u(h()),Y[O]=et),et}function u(F){const k=[],z=[],P=[];for(let O=0;O<e;O++)k[O]=0,z[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:P,object:F,attributes:{},index:null}}function d(F,k,z,P){const O=s.attributes,$=k.attributes;let B=0;const it=z.getAttributes();for(const Y in it)if(it[Y].location>=0){const nt=O[Y];let Ft=$[Y];if(Ft===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(Ft=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(Ft=F.instanceColor)),nt===void 0||nt.attribute!==Ft||Ft&&nt.data!==Ft.data)return!0;B++}return s.attributesNum!==B||s.index!==P}function g(F,k,z,P){const O={},$=k.attributes;let B=0;const it=z.getAttributes();for(const Y in it)if(it[Y].location>=0){let nt=$[Y];nt===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(nt=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(nt=F.instanceColor));const Ft={};Ft.attribute=nt,nt&&nt.data&&(Ft.data=nt.data),O[Y]=Ft,B++}s.attributes=O,s.attributesNum=B,s.index=P}function x(){const F=s.newAttributes;for(let k=0,z=F.length;k<z;k++)F[k]=0}function m(F){p(F,0)}function p(F,k){const z=s.newAttributes,P=s.enabledAttributes,O=s.attributeDivisors;z[F]=1,P[F]===0&&(a.enableVertexAttribArray(F),P[F]=1),O[F]!==k&&(a.vertexAttribDivisor(F,k),O[F]=k)}function M(){const F=s.newAttributes,k=s.enabledAttributes;for(let z=0,P=k.length;z<P;z++)k[z]!==F[z]&&(a.disableVertexAttribArray(z),k[z]=0)}function _(F,k,z,P,O,$,B){B===!0?a.vertexAttribIPointer(F,k,z,O,$):a.vertexAttribPointer(F,k,z,P,O,$)}function v(F,k,z,P){x();const O=P.attributes,$=z.getAttributes(),B=k.defaultAttributeValues;for(const it in $){const Y=$[it];if(Y.location>=0){let et=O[it];if(et===void 0&&(it==="instanceMatrix"&&F.instanceMatrix&&(et=F.instanceMatrix),it==="instanceColor"&&F.instanceColor&&(et=F.instanceColor)),et!==void 0){const nt=et.normalized,Ft=et.itemSize,X=t.get(et);if(X===void 0)continue;const ct=X.buffer,ht=X.type,ut=X.bytesPerElement,G=ht===a.INT||ht===a.UNSIGNED_INT||et.gpuType===Ch;if(et.isInterleavedBufferAttribute){const Z=et.data,mt=Z.stride,kt=et.offset;if(Z.isInstancedInterleavedBuffer){for(let Tt=0;Tt<Y.locationSize;Tt++)p(Y.location+Tt,Z.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Tt=0;Tt<Y.locationSize;Tt++)m(Y.location+Tt);a.bindBuffer(a.ARRAY_BUFFER,ct);for(let Tt=0;Tt<Y.locationSize;Tt++)_(Y.location+Tt,Ft/Y.locationSize,ht,nt,mt*ut,(kt+Ft/Y.locationSize*Tt)*ut,G)}else{if(et.isInstancedBufferAttribute){for(let Z=0;Z<Y.locationSize;Z++)p(Y.location+Z,et.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Z=0;Z<Y.locationSize;Z++)m(Y.location+Z);a.bindBuffer(a.ARRAY_BUFFER,ct);for(let Z=0;Z<Y.locationSize;Z++)_(Y.location+Z,Ft/Y.locationSize,ht,nt,Ft*ut,Ft/Y.locationSize*Z*ut,G)}}else if(B!==void 0){const nt=B[it];if(nt!==void 0)switch(nt.length){case 2:a.vertexAttrib2fv(Y.location,nt);break;case 3:a.vertexAttrib3fv(Y.location,nt);break;case 4:a.vertexAttrib4fv(Y.location,nt);break;default:a.vertexAttrib1fv(Y.location,nt)}}}}M()}function b(){A();for(const F in i){const k=i[F];for(const z in k){const P=k[z];for(const O in P){const $=P[O];for(const B in $)c($[B].object),delete $[B];delete P[O]}}delete i[F]}}function T(F){if(i[F.id]===void 0)return;const k=i[F.id];for(const z in k){const P=k[z];for(const O in P){const $=P[O];for(const B in $)c($[B].object),delete $[B];delete P[O]}}delete i[F.id]}function R(F){for(const k in i){const z=i[k];for(const P in z){const O=z[P];if(O[F.id]===void 0)continue;const $=O[F.id];for(const B in $)c($[B].object),delete $[B];delete O[F.id]}}}function S(F){for(const k in i){const z=i[k],P=F.isInstancedMesh===!0?F.id:0,O=z[P];if(O!==void 0){for(const $ in O){const B=O[$];for(const it in B)c(B[it].object),delete B[it];delete O[$]}delete z[P],Object.keys(z).length===0&&delete i[k]}}}function A(){L(),r=!0,s!==n&&(s=n,l(s.object))}function L(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Nx(a,t,e){let i;function n(h){i=h}function s(h,l){a.drawArrays(i,h,l),e.update(l,i,1)}function r(h,l,c){c!==0&&(a.drawArraysInstanced(i,h,l,c),e.update(l,i,c))}function o(h,l,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,l,0,c);let u=0;for(let d=0;d<c;d++)u+=l[d];e.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function Ux(a,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){return!(R!==Pi&&i.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const S=R===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==gi&&R!==Ci&&!S&&i.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function h(R){if(R==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=h(l);c!==l&&(se("WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),M=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),_=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),b=a.getParameter(a.MAX_SAMPLES),T=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,maxSamples:b,samples:T}}function Ox(a){const t=this;let e=null,i=0,n=!1,s=!1;const r=new Qi,o=new re,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||n;return n=u,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=c(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=a.get(f);if(!n||g===null||g.length===0||s&&!m)s?c(null):l();else{const M=s?0:i,_=M*4;let v=p.clippingState||null;h.value=v,v=c(g,u,_,d);for(let b=0;b!==_;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,u,d,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=h.value,g!==!0||m===null){const p=d+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)r.copy(f[_]).applyMatrix4(M,o),r.normal.toArray(m,v),m[v+3]=r.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}const rs=4,Bx=6,kx=20,Hx=256,Ls=new Sr,fc=new Bt;let oo=null,ho=0,lo=0,co=!1;const Gx=new N,bn=new N;class dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:r=256,position:o=Gx}=s;oo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,i,n,h,o),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(oo,ho,lo),this._renderer.xr.enabled=co,t.scissorTest=!1,es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===In||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:ci,format:Pi,colorSpace:hr,depthBuffer:!1},n=pc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vx(s)),this._blurMaterial=Xx(s,t,e),this._ggxMaterial=Wx(s,t,e)}return n}_compileMaterial(t){const e=new w(new Le,t);this._renderer.compile(e,Ls)}_sceneToCubeUV(t,e,i,n,s){const h=new pi(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(fc),f.toneMapping=Hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new w(new Pt,new st({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(fc),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(h.up.set(0,l[_],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+c[_],s.y,s.z)):v===1?(h.up.set(0,0,l[_]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+c[_],s.z)):(h.up.set(0,l[_],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+c[_]));const b=this._cubeSize;es(n,v*b,_>2?b:0,b,b),f.setRenderTarget(n),p&&f.render(x,h),f.render(t,h)}f.toneMapping=d,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===In||t.mapping===ps;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const s=n?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const h=this._cubeSize;es(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(r,Ls)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const h=r.uniforms,l=i/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-c*c),u=l*1.25,d=f*u,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-rs?i-g+rs:0),p=4*(this._cubeSize-x);h.envMap.value=t.texture,h.roughness.value=d,h.mipInt.value=g-e,es(s,m,p,3*x,2*x),n.setRenderTarget(s),n.render(o,Ls),h.envMap.value=s.texture,h.roughness.value=0,h.mipInt.value=g-i,es(t,m,p,3*x,2*x),n.setRenderTarget(t),n.render(o,Ls)}_blur(t,e,i,n){const s=this._pingPongRenderTarget,r=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,r),this._blurPass(s,t,i,i,r)}_blurPass(t,e,i,n,s){const r=this._renderer,o=this._blurMaterial,h=this._lodMeshes[n];h.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const c=this._sizeLods[n],f=3*c*(n>this._lodMax-rs?n-this._lodMax+rs:0),u=4*(this._cubeSize-c);es(e,f,u,3*c,2*c),r.setRenderTarget(e),r.render(h,Ls)}}function Vx(a){const t=[],e=[];let i=a;const n=a-rs+1+Bx;for(let s=0;s<n;s++){const r=Math.pow(2,i);t.push(r);const o=1/(r-2),h=-o,l=1+o,c=[h,h,l,h,l,l,h,h,l,l,h,l],f=6,u=6,d=3,g=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let p=0;p<f;p++){const M=p%3*2/3-1,_=p>2?0:-1,v=[M,_,0,M+2/3,_,0,M+2/3,_+1,0,M,_,0,M+2/3,_+1,0,M,_+1,0];g.set(v,d*u*p);for(let b=0;b<u;b++){const T=c[b*2]*2-1,R=c[b*2+1]*2-1;p===0?bn.set(1,R,T):p===1?bn.set(-T,1,-R):p===2?bn.set(-T,R,1):p===3?bn.set(-1,R,-T):p===4?bn.set(-T,-1,R):bn.set(T,R,-1),bn.toArray(x,(p*u+b)*d)}}const m=new Le;m.setAttribute("position",new ui(g,d)),m.setAttribute("outputDirection",new ui(x,d)),e.push(new w(m,null)),i>rs&&i--}return{lodMeshes:e,sizeLods:t}}function pc(a,t,e){const i=new li(a,t,e);return i.texture.mapping=xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(a,t,e,i,n){a.viewport.set(t,e,i,n),a.scissor.set(t,e,i,n)}function Wx(a,t,e){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Xx(a,t,e){return new ni({name:"SphericalGaussianBlur",defines:{SAMPLES:kx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function mc(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function gc(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function yr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wu extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Tu(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Pt(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:ki});s.uniforms.tEquirect.value=e;const r=new w(n,s),o=e.minFilter;return e.minFilter===En&&(e.minFilter=ii),new q0(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(s)}}function qx(a){let t=new WeakMap,e=new WeakMap,i=null;function n(u,d=!1){return u==null?null:d?r(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===Lr||d===Dr)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new Wu(g.height);return x.fromEquirectangularTexture(a,u),t.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const d=u.mapping,g=d===Lr||d===Dr,x=d===In||d===ps;if(g||x){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new dc(a)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||x&&M&&h(M)?(i===null&&(i=new dc(a)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,d){return d===Lr?u.mapping=In:d===Dr&&(u.mapping=ps),u}function h(u){let d=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&d++;return d===g}function l(u){const d=u.target;d.removeEventListener("dispose",l);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function c(u){const d=u.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:f}}function Yx(a){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=a.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&ls("WebGLRenderer: "+i+" extension not supported."),n}}}function Zx(a,t,e,i){const n={},s=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete n[u.id];const d=s.get(u);d&&(t.remove(d),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return n[u.id]===!0||(u.addEventListener("dispose",r),n[u.id]=!0,e.memory.geometries++),u}function h(f){const u=f.attributes;for(const d in u)t.update(u[d],a.ARRAY_BUFFER)}function l(f){const u=[],d=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(d!==null){const M=d.array;x=d.version;for(let _=0,v=M.length;_<v;_+=3){const b=M[_+0],T=M[_+1],R=M[_+2];u.push(b,T,T,R,R,b)}}else{const M=g.array;x=g.version;for(let _=0,v=M.length/3-1;_<v;_+=3){const b=_+0,T=_+1,R=_+2;u.push(b,T,T,R,R,b)}}const m=new(g.count>=65535?wu:_u)(u,1);m.version=x;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function c(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:h,getWireframeAttribute:c}}function Jx(a,t,e){let i;function n(f){i=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function h(f,u){a.drawElements(i,u,s,f*r),e.update(u,i,1)}function l(f,u,d){d!==0&&(a.drawElementsInstanced(i,u,s,f*r,d),e.update(u,i,d))}function c(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,d);let x=0;for(let m=0;m<d;m++)x+=u[m];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=c}function Kx(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(e.calls++,r){case a.TRIANGLES:e.triangles+=o*(s/3);break;case a.LINES:e.lines+=o*(s/2);break;case a.LINE_STRIP:e.lines+=o*(s-1);break;case a.LINE_LOOP:e.lines+=o*s;break;case a.POINTS:e.points+=o*s;break;default:ve("WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function $x(a,t,e){const i=new WeakMap,n=new Oe;function s(r,o,h){const l=r.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;d===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=o.attributes.position.count*_,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*b*4*f),R=new Mu(T,v,b,f);R.type=Ci,R.needsUpdate=!0;const S=_*4;for(let L=0;L<f;L++){const F=m[L],k=p[L],z=M[L],P=v*b*4*L;for(let O=0;O<F.count;O++){const $=O*S;d===!0&&(n.fromBufferAttribute(F,O),T[P+$+0]=n.x,T[P+$+1]=n.y,T[P+$+2]=n.z,T[P+$+3]=0),g===!0&&(n.fromBufferAttribute(k,O),T[P+$+4]=n.x,T[P+$+5]=n.y,T[P+$+6]=n.z,T[P+$+7]=0),x===!0&&(n.fromBufferAttribute(z,O),T[P+$+8]=n.x,T[P+$+9]=n.y,T[P+$+10]=n.z,T[P+$+11]=z.itemSize===4?n.w:1)}}u={count:f,texture:R,size:new ot(v,b)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",r.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];const g=o.morphTargetsRelative?1:1-d;h.getUniforms().setValue(a,"morphTargetBaseInfluence",g),h.getUniforms().setValue(a,"morphTargetInfluences",l)}h.getUniforms().setValue(a,"morphTargetsTexture",u.texture,e),h.getUniforms().setValue(a,"morphTargetsTextureSize",u.size)}return{update:s}}function Qx(a,t,e,i,n){let s=new WeakMap;function r(l){const c=n.render.frame,f=l.geometry,u=t.get(l,f);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",h)===!1&&l.addEventListener("dispose",h),s.get(l)!==c&&(e.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,a.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function h(l){const c=l.target;c.removeEventListener("dispose",h),i.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const jx={[yh]:"LINEAR_TONE_MAPPING",[bh]:"REINHARD_TONE_MAPPING",[Th]:"CINEON_TONE_MAPPING",[gr]:"ACES_FILMIC_TONE_MAPPING",[Ah]:"AGX_TONE_MAPPING",[Rh]:"NEUTRAL_TONE_MAPPING",[Eh]:"CUSTOM_TONE_MAPPING"};function t1(a,t,e,i,n,s){const r=new li(t,e,{type:a,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,h=null;const l=new Le;l.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ae([0,2,0,0,2,0],2));const c=new Bu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new w(l,c),u=new Sr(-1,1,1,-1,0,1);let d=null,g=null,x=!1,m,p=null,M=[],_=!1;this.setSize=function(v,b){r.setSize(v,b),o!==null&&o.setSize(v,b),h!==null&&h.setSize(v,b);for(let T=0;T<M.length;T++){const R=M[T];R.setSize&&R.setSize(v,b)}},this.setEffects=function(v){M=v,_=M.length>0&&M[0].isRenderPass===!0;const b=r.width,T=r.height;M.length>0&&o===null&&(o=new li(b,T,{type:ci,depthBuffer:!1,stencilBuffer:!1}),h=new li(b,T,{type:ci,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const S=M[R];S.setSize&&S.setSize(b,T)}},this.begin=function(v,b){if(x||v.toneMapping===Hi&&M.length===0)return!1;if(p=b,b!==null){const T=b.width,R=b.height;(r.width!==T||r.height!==R)&&this.setSize(T,R)}return _===!1&&v.setRenderTarget(r),m=v.toneMapping,v.toneMapping=Hi,!0},this.hasRenderPass=function(){return _},this.end=function(v,b){v.toneMapping=m,x=!0;let T=r,R=o;for(let S=0;S<M.length;S++){const A=M[S];A.enabled!==!1&&(A.render(v,R,T,b),A.needsSwap!==!1&&(T=R,R=R===o?h:o))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,c.defines={},xe.getTransfer(d)===Ae&&(c.defines.SRGB_TRANSFER="");const S=jx[g];S&&(c.defines[S]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(p),v.render(f,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),l.dispose(),c.dispose()}}const Xu=new si,mh=new ta(1,1),qu=new Mu,Yu=new Bp,Zu=new Tu,xc=[],Mc=[],vc=new Float32Array(16),_c=new Float32Array(9),wc=new Float32Array(4);function ws(a,t,e){const i=a[0];if(i<=0||i>0)return a;const n=t*e;let s=xc[n];if(s===void 0&&(s=new Float32Array(n),xc[n]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function Je(a,t){if(a.length!==t.length)return!1;for(let e=0,i=a.length;e<i;e++)if(a[e]!==t[e])return!1;return!0}function Ke(a,t){for(let e=0,i=t.length;e<i;e++)a[e]=t[e]}function br(a,t){let e=Mc[t];e===void 0&&(e=new Int32Array(t),Mc[t]=e);for(let i=0;i!==t;++i)e[i]=a.allocateTextureUnit();return e}function e1(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function i1(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;a.uniform2fv(this.addr,t),Ke(e,t)}}function n1(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;a.uniform3fv(this.addr,t),Ke(e,t)}}function s1(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;a.uniform4fv(this.addr,t),Ke(e,t)}}function a1(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,i))return;wc.set(i),a.uniformMatrix2fv(this.addr,!1,wc),Ke(e,i)}}function r1(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,i))return;_c.set(i),a.uniformMatrix3fv(this.addr,!1,_c),Ke(e,i)}}function o1(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,i))return;vc.set(i),a.uniformMatrix4fv(this.addr,!1,vc),Ke(e,i)}}function h1(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function l1(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;a.uniform2iv(this.addr,t),Ke(e,t)}}function c1(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;a.uniform3iv(this.addr,t),Ke(e,t)}}function u1(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;a.uniform4iv(this.addr,t),Ke(e,t)}}function f1(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function d1(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;a.uniform2uiv(this.addr,t),Ke(e,t)}}function p1(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;a.uniform3uiv(this.addr,t),Ke(e,t)}}function m1(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;a.uniform4uiv(this.addr,t),Ke(e,t)}}function g1(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s;this.type===a.SAMPLER_2D_SHADOW?(mh.compareFunction=e.isReversedDepthBuffer()?Uh:Nh,s=mh):s=Xu,e.setTexture2D(t||s,n)}function x1(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Yu,n)}function M1(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Zu,n)}function v1(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||qu,n)}function _1(a){switch(a){case 5126:return e1;case 35664:return i1;case 35665:return n1;case 35666:return s1;case 35674:return a1;case 35675:return r1;case 35676:return o1;case 5124:case 35670:return h1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return f1;case 36294:return d1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return v1}}function w1(a,t){a.uniform1fv(this.addr,t)}function S1(a,t){const e=ws(t,this.size,2);a.uniform2fv(this.addr,e)}function y1(a,t){const e=ws(t,this.size,3);a.uniform3fv(this.addr,e)}function b1(a,t){const e=ws(t,this.size,4);a.uniform4fv(this.addr,e)}function T1(a,t){const e=ws(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function E1(a,t){const e=ws(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function A1(a,t){const e=ws(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function R1(a,t){a.uniform1iv(this.addr,t)}function C1(a,t){a.uniform2iv(this.addr,t)}function P1(a,t){a.uniform3iv(this.addr,t)}function I1(a,t){a.uniform4iv(this.addr,t)}function L1(a,t){a.uniform1uiv(this.addr,t)}function D1(a,t){a.uniform2uiv(this.addr,t)}function z1(a,t){a.uniform3uiv(this.addr,t)}function F1(a,t){a.uniform4uiv(this.addr,t)}function N1(a,t,e){const i=this.cache,n=t.length,s=br(e,n);Je(i,s)||(a.uniform1iv(this.addr,s),Ke(i,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=mh:r=Xu;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||r,s[o])}function U1(a,t,e){const i=this.cache,n=t.length,s=br(e,n);Je(i,s)||(a.uniform1iv(this.addr,s),Ke(i,s));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Yu,s[r])}function O1(a,t,e){const i=this.cache,n=t.length,s=br(e,n);Je(i,s)||(a.uniform1iv(this.addr,s),Ke(i,s));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Zu,s[r])}function B1(a,t,e){const i=this.cache,n=t.length,s=br(e,n);Je(i,s)||(a.uniform1iv(this.addr,s),Ke(i,s));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||qu,s[r])}function k1(a){switch(a){case 5126:return w1;case 35664:return S1;case 35665:return y1;case 35666:return b1;case 35674:return T1;case 35675:return E1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return P1;case 35669:case 35673:return I1;case 5125:return L1;case 36294:return D1;case 36295:return z1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return B1}}class H1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=_1(e.type)}}class G1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k1(e.type)}}class V1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Sc(a,t){a.seq.push(t),a.map[t.id]=t}function W1(a,t,e){const i=a.name,n=i.length;for(uo.lastIndex=0;;){const s=uo.exec(i),r=uo.lastIndex;let o=s[1];const h=s[2]==="]",l=s[3];if(h&&(o=o|0),l===void 0||l==="["&&r+2===n){Sc(e,l===void 0?new H1(o,a,t):new G1(o,a,t));break}else{let f=e.map[o];f===void 0&&(f=new V1(o),Sc(e,f)),e=f}}}class Qa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(e,r),h=t.getUniformLocation(e,o.name);W1(o,h,this)}const n=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(r):s.push(r);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,r=e.length;s!==r;++s){const o=e[s],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function yc(a,t,e){const i=a.createShader(t);return a.shaderSource(i,e),a.compileShader(i),i}const X1=37297;let q1=0;function Y1(a,t){const e=a.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=n;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const bc=new re;function Z1(a){xe._getMatrix(bc,xe.workingColorSpace,a);const t=`mat3( ${bc.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(a)){case lr:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function Tc(a,t,e){const i=a.getShaderParameter(t,a.COMPILE_STATUS),s=(a.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Y1(a.getShaderSource(t),o)}else return s}function J1(a,t){const e=Z1(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const K1={[yh]:"Linear",[bh]:"Reinhard",[Th]:"Cineon",[gr]:"ACESFilmic",[Ah]:"AgX",[Rh]:"Neutral",[Eh]:"Custom"};function $1(a,t){const e=K1[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ba=new N;function Q1(){xe.getLuminanceCoefficients(Ba);const a=Ba.x.toFixed(4),t=Ba.y.toFixed(4),e=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j1(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function tM(a){const t=[];for(const e in a){const i=a[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function eM(a,t){const e={},i=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=a.getActiveAttrib(t,n),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function Os(a){return a!==""}function Ec(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ac(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(a){return a.replace(iM,sM)}const nM=new Map;function sM(a,t){let e=fe[t];if(e===void 0){const i=nM.get(t);if(i!==void 0)e=fe[i],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gh(e)}const aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(a){return a.replace(aM,rM)}function rM(a,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Cc(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const oM={[ks]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function hM(a){return oM[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lM={[In]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE_UV"};function cM(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":lM[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const uM={[ps]:"ENVMAP_MODE_REFRACTION"};function fM(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":uM[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dM={[hu]:"ENVMAP_BLENDING_MULTIPLY",[tp]:"ENVMAP_BLENDING_MIX",[ep]:"ENVMAP_BLENDING_ADD"};function pM(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":dM[a.combine]||"ENVMAP_BLENDING_NONE"}function mM(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function gM(a,t,e,i){const n=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const h=hM(e),l=cM(e),c=fM(e),f=pM(e),u=mM(e),d=j1(e),g=tM(s),x=n.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(m=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?fe.tonemapping_pars_fragment:"",e.toneMapping!==Hi?$1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,J1("linearToOutputTexel",e.outputColorSpace),Q1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),r=gh(r),r=Ec(r,e),r=Ac(r,e),o=gh(o),o=Ec(o,e),o=Ac(o,e),r=Rc(r),o=Rc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+r,v=M+p+o,b=yc(n,n.VERTEX_SHADER,_),T=yc(n,n.FRAGMENT_SHADER,v);n.attachShader(x,b),n.attachShader(x,T),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function R(F){if(a.debug.checkShaderErrors){const k=n.getProgramInfoLog(x)||"",z=n.getShaderInfoLog(b)||"",P=n.getShaderInfoLog(T)||"",O=k.trim(),$=z.trim(),B=P.trim();let it=!0,Y=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(it=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,x,b,T);else{const et=Tc(n,b,"vertex"),nt=Tc(n,T,"fragment");ve("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+et+`
`+nt)}else O!==""?se("WebGLProgram: Program Info Log:",O):($===""||B==="")&&(Y=!1);Y&&(F.diagnostics={runnable:it,programLog:O,vertexShader:{log:$,prefix:m},fragmentShader:{log:B,prefix:p}})}n.deleteShader(b),n.deleteShader(T),S=new Qa(n,x),A=eM(n,x)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=n.getProgramParameter(x,X1)),L},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}let xM=0;class MM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new vM(t),e.set(t,i)),i}}class vM{constructor(t){this.id=xM++,this.code=t,this.usedTimes=0}}function _M(a){return a===Ln||a===ar||a===rr}function wM(a,t,e,i,n,s){const r=new kh,o=new MM,h=new Set,l=[],c=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return h.add(S),S===0?"uv":`uv${S}`}function x(S,A,L,F,k,z){const P=F.fog,O=k.geometry,$=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,B=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,it=t.get(S.envMap||$,B),Y=it&&it.mapping===xr?it.image.height:null,et=d[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&se("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ft=nt!==void 0?nt.length:0;let X=0;O.morphAttributes.position!==void 0&&(X=1),O.morphAttributes.normal!==void 0&&(X=2),O.morphAttributes.color!==void 0&&(X=3);let ct,ht,ut,G;if(et){const De=Ni[et];ct=De.vertexShader,ht=De.fragmentShader}else{ct=S.vertexShader,ht=S.fragmentShader;const De=o.getVertexShaderStage(S),be=o.getFragmentShaderStage(S);o.update(S,De,be),ut=De.id,G=be.id}const Z=a.getRenderTarget(),mt=a.state.buffers.depth.getReversed(),kt=k.isInstancedMesh===!0,Tt=k.isBatchedMesh===!0,St=!!S.map,de=!!S.matcap,at=!!it,ft=!!S.aoMap,gt=!!S.lightMap,xt=!!S.bumpMap&&S.wireframe===!1,_t=!!S.normalMap,Kt=!!S.displacementMap,Zt=!!S.emissiveMap,ie=!!S.metalnessMap,ne=!!S.roughnessMap,U=S.anisotropy>0,Me=S.clearcoat>0,he=S.dispersion>0,I=S.retroreflectivity>0,y=S.iridescence>0,V=S.sheen>0,q=S.transmission>0,Q=U&&!!S.anisotropyMap,pt=Me&&!!S.clearcoatMap,vt=Me&&!!S.clearcoatNormalMap,tt=Me&&!!S.clearcoatRoughnessMap,rt=y&&!!S.iridescenceMap,wt=y&&!!S.iridescenceThicknessMap,qt=V&&!!S.sheenColorMap,bt=V&&!!S.sheenRoughnessMap,yt=!!S.specularMap,Wt=!!S.specularColorMap,te=!!S.specularIntensityMap,le=q&&!!S.transmissionMap,W=q&&!!S.thicknessMap,Et=!!S.gradientMap,lt=!!S.alphaMap,At=S.alphaTest>0,Dt=!!S.alphaHash,dt=!!S.extensions;let $t=Hi;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&($t=a.toneMapping);const Xt={shaderID:et,shaderType:S.type,shaderName:S.name,vertexShader:ct,fragmentShader:ht,defines:S.defines,customVertexShaderID:ut,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&k._colorsTexture!==null,instancing:kt,instancingColor:kt&&k.instanceColor!==null,instancingMorph:kt&&k.morphTexture!==null,outputColorSpace:Z===null?a.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:St,matcap:de,envMap:at,envMapMode:at&&it.mapping,envMapCubeUVHeight:Y,aoMap:ft,lightMap:gt,bumpMap:xt,normalMap:_t,displacementMap:Kt,emissiveMap:Zt,normalMapObjectSpace:_t&&S.normalMapType===sp,normalMapTangentSpace:_t&&S.normalMapType===or,packedNormalMap:_t&&S.normalMapType===or&&_M(S.normalMap.format),metalnessMap:ie,roughnessMap:ne,anisotropy:U,anisotropyMap:Q,clearcoat:Me,clearcoatMap:pt,clearcoatNormalMap:vt,clearcoatRoughnessMap:tt,dispersion:he,retroreflection:I,iridescence:y,iridescenceMap:rt,iridescenceThicknessMap:wt,sheen:V,sheenColorMap:qt,sheenRoughnessMap:bt,specularMap:yt,specularColorMap:Wt,specularIntensityMap:te,transmission:q,transmissionMap:le,thicknessMap:W,gradientMap:Et,opaque:S.transparent===!1&&S.blending===Cn&&S.alphaToCoverage===!1,alphaMap:lt,alphaTest:At,alphaHash:Dt,combine:S.combine,mapUv:St&&g(S.map.channel),aoMapUv:ft&&g(S.aoMap.channel),lightMapUv:gt&&g(S.lightMap.channel),bumpMapUv:xt&&g(S.bumpMap.channel),normalMapUv:_t&&g(S.normalMap.channel),displacementMapUv:Kt&&g(S.displacementMap.channel),emissiveMapUv:Zt&&g(S.emissiveMap.channel),metalnessMapUv:ie&&g(S.metalnessMap.channel),roughnessMapUv:ne&&g(S.roughnessMap.channel),anisotropyMapUv:Q&&g(S.anisotropyMap.channel),clearcoatMapUv:pt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:vt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(S.sheenRoughnessMap.channel),specularMapUv:yt&&g(S.specularMap.channel),specularColorMapUv:Wt&&g(S.specularColorMap.channel),specularIntensityMapUv:te&&g(S.specularIntensityMap.channel),transmissionMapUv:le&&g(S.transmissionMap.channel),thicknessMapUv:W&&g(S.thicknessMap.channel),alphaMapUv:lt&&g(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_t||U),vertexNormals:!!O.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(St||lt),fog:!!P,useFog:S.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||O.attributes.normal===void 0&&_t===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:X,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:a.shadowMap.enabled&&L.length>0,shadowMapType:a.shadowMap.type,toneMapping:$t,decodeVideoTexture:St&&S.map.isVideoTexture===!0&&xe.getTransfer(S.map.colorSpace)===Ae,decodeVideoTextureEmissive:Zt&&S.emissiveMap.isVideoTexture===!0&&xe.getTransfer(S.emissiveMap.colorSpace)===Ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qt,flipSided:S.side===Ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:dt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&S.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xt.vertexUv1s=h.has(1),Xt.vertexUv2s=h.has(2),Xt.vertexUv3s=h.has(3),h.clear(),Xt}function m(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)A.push(L),A.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(p(A,S),M(A,S),A.push(a.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function p(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numSunLights),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numSunLightShadows),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function M(S,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.retroreflection&&r.enable(24),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),S.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),S.push(r.mask)}function _(S){const A=d[S.type];let L;if(A){const F=Ni[A];L=sa.clone(F.uniforms)}else L=S.uniforms;return L}function v(S,A){let L=c.get(A);return L!==void 0?++L.usedTimes:(L=new gM(a,A,S,n),l.push(L),c.set(A,L)),L}function b(S){if(--S.usedTimes===0){const A=l.indexOf(S);l[A]=l[l.length-1],l.pop(),c.delete(S.cacheKey),S.destroy()}}function T(S){o.remove(S)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:_,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:R}}function SM(){let a=new WeakMap;function t(r){return a.has(r)}function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function i(r){a.delete(r)}function n(r,o,h){a.get(r)[o]=h}function s(){a=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function yM(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.materialVariant!==t.materialVariant?a.materialVariant-t.materialVariant:a.z!==t.z?a.z-t.z:a.id-t.id}function Pc(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function Ic(){const a=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,x,m,p){let M=a[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:g,materialVariant:r(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},a[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=g,M.materialVariant=r(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=p),t++,M}function h(u,d,g,x,m,p,M){M.reversedDepth===!0&&(m=-m);const _=o(u,d,g,x,m,p);g.transmission>0?i.push(_):g.transparent===!0?n.push(_):e.push(_)}function l(u,d,g,x,m,p){const M=o(u,d,g,x,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?n.unshift(M):e.unshift(M)}function c(u,d){e.length>1&&e.sort(u||yM),i.length>1&&i.sort(d||Pc),n.length>1&&n.sort(d||Pc)}function f(){for(let u=t,d=a.length;u<d;u++){const g=a[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:h,unshift:l,finish:f,sort:c}}function bM(){let a=new WeakMap;function t(i,n){const s=a.get(i);let r;return s===void 0?(r=new Ic,a.set(i,[r])):n>=s.length?(r=new Ic,s.push(r)):r=s[n],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function TM(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Bt};break;case"SpotLight":e={position:new N,direction:new N,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new N,halfWidth:new N,halfHeight:new N};break}return a[t.id]=e,e}}}function EM(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let AM=0;function RM(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function CM(a){const t=new TM,e=EM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const n=new N,s=new Ce,r=new Ce;function o(l){let c=0,f=0,u=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,M=0,_=0,v=0,b=0,T=0,R=0,S=0,A=0,L=0;l.sort(RM);for(let k=0,z=l.length;k<z;k++){const P=l[k],O=P.color,$=P.intensity,B=P.distance;let it=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ln?it=P.shadow.map.texture:it=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=O.r*$,f+=O.g*$,u+=O.b*$;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],$);L++}else if(P.isSunLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const et=P.shadow,nt=e.get(P);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[g]=nt,i.sunShadowMap[g]=it;const Ft=et.getViewportCount();for(let X=0;X<Ft;X++)i.sunShadowMatrix[x+X]=et.getMatrix(X),i.sunShadowCascade[x+X]=et._cascadeData[X];x+=Ft,g++}i.sun[d]=Y,d++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const et=P.shadow,nt=e.get(P);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=P.shadow.matrix,b++}i.directional[m]=Y,m++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(O).multiplyScalar($),Y.distance=B,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[M]=Y;const et=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,et.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[M]=et.matrix,P.castShadow){const nt=e.get(P);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,i.spotShadow[M]=nt,i.spotShadowMap[M]=it,R++}M++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(O).multiplyScalar($),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=Y,_++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const et=P.shadow,nt=e.get(P);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,nt.shadowCameraNear=et.camera.near,nt.shadowCameraFar=et.camera.far,i.pointShadow[p]=nt,i.pointShadowMap[p]=it,i.pointShadowMatrix[p]=P.shadow.matrix,T++}i.point[p]=Y,p++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar($),Y.groundColor.copy(P.groundColor).multiplyScalar($),i.hemi[v]=Y,v++}}_>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=u;const F=i.hash;(F.sunLength!==d||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==M||F.rectAreaLength!==_||F.hemiLength!==v||F.numSunShadows!==g||F.numDirectionalShadows!==b||F.numPointShadows!==T||F.numSpotShadows!==R||F.numSpotMaps!==S||F.numLightProbes!==L)&&(i.sun.length=d,i.directional.length=m,i.spot.length=M,i.rectArea.length=_,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+S-A,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,F.sunLength=d,F.directionalLength=m,F.pointLength=p,F.spotLength=M,F.rectAreaLength=_,F.hemiLength=v,F.numSunShadows=g,F.numDirectionalShadows=b,F.numPointShadows=T,F.numSpotShadows=R,F.numSpotMaps=S,F.numLightProbes=L,i.version=AM++)}function h(l,c){let f=0,u=0,d=0,g=0,x=0,m=0;const p=c.matrixWorldInverse;for(let M=0,_=l.length;M<_;M++){const v=l[M];if(v.isSunLight){const b=i.sun[f];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),f++}else if(v.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),u++}else if(v.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const b=i.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),r.identity(),s.copy(v.matrixWorld),s.premultiply(p),r.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),x++}else if(v.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:h,state:i}}function Lc(a){const t=new CM(a),e=[],i=[],n=[];function s(u){f.camera=u,e.length=0,i.length=0,n.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function h(u){n.push(u)}function l(){t.setup(e)}function c(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o,pushLightProbeGrid:h}}function PM(a){let t=new WeakMap;function e(n,s=0){const r=t.get(n);let o;return r===void 0?(o=new Lc(a),t.set(n,[o])):s>=r.length?(o=new Lc(a),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const IM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DM=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],zM=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Dc=new Ce,Ds=new N,fo=new N;function FM(a,t,e){let i=new Gh;const n=new ot,s=new ot,r=new Oe,o=new k0,h=new H0,l={},c=e.maxTextureSize,f={[gn]:Ze,[Ze]:gn,[Qt]:Qt},u=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:IM,fragmentShader:LM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new w(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let p=this.type;this.render=function(T,R,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Fd&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);const A=a.getRenderTarget(),L=a.getActiveCubeFace(),F=a.getActiveMipmapLevel(),k=a.state;k.setBlending(ki),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=p!==this.type;z&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=T.length;P<O;P++){const $=T[P],B=$.shadow;if(B===void 0){se("WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);const it=B.getFrameExtents();n.multiply(it),s.copy(B.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/it.x),n.x=s.x*it.x,B.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/it.y),n.y=s.y*it.y,B.mapSize.y=s.y));const Y=a.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Y,B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Fs){if($.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new li(n.x,n.y,{format:Ln,type:ci,minFilter:ii,magFilter:ii,generateMipmaps:!1}),B.map.texture.name=$.name+".shadowMap",B.map.depthTexture=new ta(n.x,n.y,Ci),B.map.depthTexture.name=$.name+".shadowMapDepth",B.map.depthTexture.format=sn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ye,B.map.depthTexture.magFilter=Ye}else $.isPointLight?(B.map=new Wu(n.x),B.map.depthTexture=new a0(n.x,Wi)):(B.map=new li(n.x,n.y),B.map.depthTexture=new ta(n.x,n.y,Wi)),B.map.depthTexture.name=$.name+".shadowMap",B.map.depthTexture.format=sn,this.type===ks?(B.map.depthTexture.compareFunction=Y?Uh:Nh,B.map.depthTexture.minFilter=ii,B.map.depthTexture.magFilter=ii):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ye,B.map.depthTexture.magFilter=Ye);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==n.x||B.map.height!==n.y)&&B.map.setSize(n.x,n.y);const et=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();$.isPointLight!==!0&&B.updateMatrices($,S);for(let nt=0;nt<et;nt++){const Ft=B.getCamera(nt);if($.isPointLight){const X=B.camera,ct=B.matrix,ht=$.distance||X.far;ht!==X.far&&(X.far=ht,X.updateProjectionMatrix()),Ds.setFromMatrixPosition($.matrixWorld),X.position.copy(Ds),fo.copy(X.position),fo.add(DM[nt]),X.up.copy(zM[nt]),X.lookAt(fo),X.updateMatrixWorld(),ct.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Dc.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Dc,X.coordinateSystem,X.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)a.setRenderTarget(B.map,nt),a.clear();else{nt===0&&(a.setRenderTarget(B.map),a.clear());const X=B.getViewport(nt);r.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),k.viewport(r)}i=B.getFrustum(nt),v(R,S,Ft,$,this.type)}B.isPointLightShadow!==!0&&this.type===Fs&&M(B,S),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(A,L,F)};function M(T,R){const S=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new li(n.x,n.y,{format:Ln,type:ci}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,a.setRenderTarget(T.mapPass),a.clear(),a.renderBufferDirect(R,null,S,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,a.setRenderTarget(T.map),a.clear(),a.renderBufferDirect(R,null,S,d,x,null)}function _(T,R,S,A){let L=null;const F=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)L=F;else if(L=S.isPointLight===!0?h:o,a.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=L.uuid,z=R.uuid;let P=l[k];P===void 0&&(P={},l[k]=P);let O=P[z];O===void 0&&(O=L.clone(),P[z]=O,R.addEventListener("dispose",b)),L=O}if(L.visible=R.visible,L.wireframe=R.wireframe,A===Fs?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:f[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const k=a.properties.get(L);k.light=S}return L}function v(T,R,S,A,L){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Fs)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const z=t.update(T),P=T.material;if(Array.isArray(P)){const O=z.groups;for(let $=0,B=O.length;$<B;$++){const it=O[$],Y=P[it.materialIndex];if(Y&&Y.visible){const et=_(T,Y,A,L);T.onBeforeShadow(a,T,R,S,z,et,it),a.renderBufferDirect(S,null,z,et,T,it),T.onAfterShadow(a,T,R,S,z,et,it)}}}else if(P.visible){const O=_(T,P,A,L);T.onBeforeShadow(a,T,R,S,z,O,null),a.renderBufferDirect(S,null,z,O,T,null),T.onAfterShadow(a,T,R,S,z,O,null)}}const k=T.children;for(let z=0,P=k.length;z<P;z++)v(k[z],R,S,A,L)}function b(T){T.target.removeEventListener("dispose",b);for(const S in l){const A=l[S],L=T.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function NM(a,t){function e(){let W=!1;const Et=new Oe;let lt=null;const At=new Oe(0,0,0,0);return{setMask:function(Dt){lt!==Dt&&!W&&(a.colorMask(Dt,Dt,Dt,Dt),lt=Dt)},setLocked:function(Dt){W=Dt},setClear:function(Dt,dt,$t,Xt,De){De===!0&&(Dt*=Xt,dt*=Xt,$t*=Xt),Et.set(Dt,dt,$t,Xt),At.equals(Et)===!1&&(a.clearColor(Dt,dt,$t,Xt),At.copy(Et))},reset:function(){W=!1,lt=null,At.set(-1,0,0,0)}}}function i(){let W=!1,Et=!1,lt=null,At=null,Dt=null;return{setReversed:function(dt){if(Et!==dt){const $t=t.get("EXT_clip_control");dt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Et=dt;const Xt=Dt;Dt=null,this.setClear(Xt)}},getReversed:function(){return Et},setTest:function(dt){dt?Z(a.DEPTH_TEST):mt(a.DEPTH_TEST)},setMask:function(dt){lt!==dt&&!W&&(a.depthMask(dt),lt=dt)},setFunc:function(dt){if(Et&&(dt=gp[dt]),At!==dt){switch(dt){case Eo:a.depthFunc(a.NEVER);break;case Ao:a.depthFunc(a.ALWAYS);break;case Ro:a.depthFunc(a.LESS);break;case Js:a.depthFunc(a.LEQUAL);break;case Co:a.depthFunc(a.EQUAL);break;case Po:a.depthFunc(a.GEQUAL);break;case Io:a.depthFunc(a.GREATER);break;case Lo:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}At=dt}},setLocked:function(dt){W=dt},setClear:function(dt){Dt!==dt&&(Dt=dt,Et&&(dt=1-dt),a.clearDepth(dt))},reset:function(){W=!1,lt=null,At=null,Dt=null,Et=!1}}}function n(){let W=!1,Et=null,lt=null,At=null,Dt=null,dt=null,$t=null,Xt=null,De=null;return{setTest:function(be){W||(be?Z(a.STENCIL_TEST):mt(a.STENCIL_TEST))},setMask:function(be){Et!==be&&!W&&(a.stencilMask(be),Et=be)},setFunc:function(be,Si,Ii){(lt!==be||At!==Si||Dt!==Ii)&&(a.stencilFunc(be,Si,Ii),lt=be,At=Si,Dt=Ii)},setOp:function(be,Si,Ii){(dt!==be||$t!==Si||Xt!==Ii)&&(a.stencilOp(be,Si,Ii),dt=be,$t=Si,Xt=Ii)},setLocked:function(be){W=be},setClear:function(be){De!==be&&(a.clearStencil(be),De=be)},reset:function(){W=!1,Et=null,lt=null,At=null,Dt=null,dt=null,$t=null,Xt=null,De=null}}}const s=new e,r=new i,o=new n,h=new WeakMap,l=new WeakMap;let c={},f={},u={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,_=null,v=null,b=null,T=null,R=null,S=new Bt(0,0,0),A=0,L=!1,F=null,k=null,z=null,P=null,O=null;const $=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,it=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=it>=2);let et=null,nt={};const Ft=a.getParameter(a.SCISSOR_BOX),X=a.getParameter(a.VIEWPORT),ct=new Oe().fromArray(Ft),ht=new Oe().fromArray(X);function ut(W,Et,lt,At){const Dt=new Uint8Array(4),dt=a.createTexture();a.bindTexture(W,dt),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let $t=0;$t<lt;$t++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Et,0,a.RGBA,1,1,At,0,a.RGBA,a.UNSIGNED_BYTE,Dt):a.texImage2D(Et+$t,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Dt);return dt}const G={};G[a.TEXTURE_2D]=ut(a.TEXTURE_2D,a.TEXTURE_2D,1),G[a.TEXTURE_CUBE_MAP]=ut(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[a.TEXTURE_2D_ARRAY]=ut(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),G[a.TEXTURE_3D]=ut(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Z(a.DEPTH_TEST),r.setFunc(Js),xt(!1),_t(Sl),Z(a.CULL_FACE),ft(ki);function Z(W){c[W]!==!0&&(a.enable(W),c[W]=!0)}function mt(W){c[W]!==!1&&(a.disable(W),c[W]=!1)}function kt(W,Et){return u[W]!==Et?(a.bindFramebuffer(W,Et),u[W]=Et,W===a.DRAW_FRAMEBUFFER&&(u[a.FRAMEBUFFER]=Et),W===a.FRAMEBUFFER&&(u[a.DRAW_FRAMEBUFFER]=Et),!0):!1}function Tt(W,Et){let lt=g,At=!1;if(W){lt=d.get(Et),lt===void 0&&(lt=[],d.set(Et,lt));const Dt=W.textures;if(lt.length!==Dt.length||lt[0]!==a.COLOR_ATTACHMENT0){for(let dt=0,$t=Dt.length;dt<$t;dt++)lt[dt]=a.COLOR_ATTACHMENT0+dt;lt.length=Dt.length,At=!0}}else lt[0]!==a.BACK&&(lt[0]=a.BACK,At=!0);At&&a.drawBuffers(lt)}function St(W){return x!==W?(a.useProgram(W),x=W,!0):!1}const de={[as]:a.FUNC_ADD,[Ud]:a.FUNC_SUBTRACT,[Od]:a.FUNC_REVERSE_SUBTRACT};de[Bd]=a.MIN,de[kd]=a.MAX;const at={[Hd]:a.ZERO,[Gd]:a.ONE,[Vd]:a.SRC_COLOR,[ru]:a.SRC_ALPHA,[Jd]:a.SRC_ALPHA_SATURATE,[Yd]:a.DST_COLOR,[Xd]:a.DST_ALPHA,[Wd]:a.ONE_MINUS_SRC_COLOR,[ou]:a.ONE_MINUS_SRC_ALPHA,[Zd]:a.ONE_MINUS_DST_COLOR,[qd]:a.ONE_MINUS_DST_ALPHA,[Kd]:a.CONSTANT_COLOR,[$d]:a.ONE_MINUS_CONSTANT_COLOR,[Qd]:a.CONSTANT_ALPHA,[jd]:a.ONE_MINUS_CONSTANT_ALPHA};function ft(W,Et,lt,At,Dt,dt,$t,Xt,De,be){if(W===ki){m===!0&&(mt(a.BLEND),m=!1);return}if(m===!1&&(Z(a.BLEND),m=!0),W!==Nd){if(W!==p||be!==L){if((M!==as||b!==as)&&(a.blendEquation(a.FUNC_ADD),M=as,b=as),be)switch(W){case Cn:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case pe:a.blendFunc(a.ONE,a.ONE);break;case yl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case bl:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:ve("WebGLState: Invalid blending: ",W);break}else switch(W){case Cn:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case pe:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case yl:ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ve("WebGLState: Invalid blending: ",W);break}_=null,v=null,T=null,R=null,S.set(0,0,0),A=0,p=W,L=be}return}Dt=Dt||Et,dt=dt||lt,$t=$t||At,(Et!==M||Dt!==b)&&(a.blendEquationSeparate(de[Et],de[Dt]),M=Et,b=Dt),(lt!==_||At!==v||dt!==T||$t!==R)&&(a.blendFuncSeparate(at[lt],at[At],at[dt],at[$t]),_=lt,v=At,T=dt,R=$t),(Xt.equals(S)===!1||De!==A)&&(a.blendColor(Xt.r,Xt.g,Xt.b,De),S.copy(Xt),A=De),p=W,L=!1}function gt(W,Et){W.side===Qt?mt(a.CULL_FACE):Z(a.CULL_FACE);let lt=W.side===Ze;Et&&(lt=!lt),xt(lt),W.blending===Cn&&W.transparent===!1?ft(ki):ft(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),r.setFunc(W.depthFunc),r.setTest(W.depthTest),r.setMask(W.depthWrite),s.setMask(W.colorWrite);const At=W.stencilWrite;o.setTest(At),At&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Zt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Z(a.SAMPLE_ALPHA_TO_COVERAGE):mt(a.SAMPLE_ALPHA_TO_COVERAGE)}function xt(W){F!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),F=W)}function _t(W){W!==Dd?(Z(a.CULL_FACE),W!==k&&(W===Sl?a.cullFace(a.BACK):W===zd?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):mt(a.CULL_FACE),k=W}function Kt(W){W!==z&&(B&&a.lineWidth(W),z=W)}function Zt(W,Et,lt){W?(Z(a.POLYGON_OFFSET_FILL),(P!==Et||O!==lt)&&(P=Et,O=lt,r.getReversed()&&(Et=-Et),a.polygonOffset(Et,lt))):mt(a.POLYGON_OFFSET_FILL)}function ie(W){W?Z(a.SCISSOR_TEST):mt(a.SCISSOR_TEST)}function ne(W){W===void 0&&(W=a.TEXTURE0+$-1),et!==W&&(a.activeTexture(W),et=W)}function U(W,Et,lt){lt===void 0&&(et===null?lt=a.TEXTURE0+$-1:lt=et);let At=nt[lt];At===void 0&&(At={type:void 0,texture:void 0},nt[lt]=At),(At.type!==W||At.texture!==Et)&&(et!==lt&&(a.activeTexture(lt),et=lt),a.bindTexture(W,Et||G[W]),At.type=W,At.texture=Et)}function Me(){const W=nt[et];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function he(){try{a.compressedTexImage2D(...arguments)}catch(W){ve("WebGLState:",W)}}function I(){try{a.compressedTexImage3D(...arguments)}catch(W){ve("WebGLState:",W)}}function y(){try{a.texSubImage2D(...arguments)}catch(W){ve("WebGLState:",W)}}function V(){try{a.texSubImage3D(...arguments)}catch(W){ve("WebGLState:",W)}}function q(){try{a.compressedTexSubImage2D(...arguments)}catch(W){ve("WebGLState:",W)}}function Q(){try{a.compressedTexSubImage3D(...arguments)}catch(W){ve("WebGLState:",W)}}function pt(){try{a.texStorage2D(...arguments)}catch(W){ve("WebGLState:",W)}}function vt(){try{a.texStorage3D(...arguments)}catch(W){ve("WebGLState:",W)}}function tt(){try{a.texImage2D(...arguments)}catch(W){ve("WebGLState:",W)}}function rt(){try{a.texImage3D(...arguments)}catch(W){ve("WebGLState:",W)}}function wt(W){return f[W]!==void 0?f[W]:a.getParameter(W)}function qt(W,Et){f[W]!==Et&&(a.pixelStorei(W,Et),f[W]=Et)}function bt(W){ct.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),ct.copy(W))}function yt(W){ht.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),ht.copy(W))}function Wt(W,Et){let lt=l.get(Et);lt===void 0&&(lt=new WeakMap,l.set(Et,lt));let At=lt.get(W);At===void 0&&(At=a.getUniformBlockIndex(Et,W.name),lt.set(W,At))}function te(W,Et){const At=l.get(Et).get(W);h.get(Et)!==At&&(a.uniformBlockBinding(Et,At,W.__bindingPointIndex),h.set(Et,At))}function le(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),c={},f={},et=null,nt={},u={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,_=null,v=null,b=null,T=null,R=null,S=new Bt(0,0,0),A=0,L=!1,F=null,k=null,z=null,P=null,O=null,ct.set(0,0,a.canvas.width,a.canvas.height),ht.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Z,disable:mt,bindFramebuffer:kt,drawBuffers:Tt,useProgram:St,setBlending:ft,setMaterial:gt,setFlipSided:xt,setCullFace:_t,setLineWidth:Kt,setPolygonOffset:Zt,setScissorTest:ie,activeTexture:ne,bindTexture:U,unbindTexture:Me,compressedTexImage2D:he,compressedTexImage3D:I,texImage2D:tt,texImage3D:rt,pixelStorei:qt,getParameter:wt,updateUBOMapping:Wt,uniformBlockBinding:te,texStorage2D:pt,texStorage3D:vt,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:bt,viewport:yt,reset:le}}function UM(a,t,e,i,n,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,c=new WeakMap,f=new Set;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,y){return g?new OffscreenCanvas(I,y):cr("canvas")}function m(I,y,V){let q=1;const Q=he(I);if((Q.width>V||Q.height>V)&&(q=V/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pt=Math.floor(q*Q.width),vt=Math.floor(q*Q.height);u===void 0&&(u=x(pt,vt));const tt=y?x(pt,vt):u;return tt.width=pt,tt.height=vt,tt.getContext("2d").drawImage(I,0,0,pt,vt),se("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+pt+"x"+vt+")."),tt}else return"data"in I&&se("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function p(I){return I.generateMipmaps}function M(I){a.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?a.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function v(I,y,V,q,Q,pt=!1){if(I!==null){if(a[I]!==void 0)return a[I];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let vt;q&&(vt=t.get("EXT_texture_norm16"),vt||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=y;if(y===a.RED&&(V===a.FLOAT&&(tt=a.R32F),V===a.HALF_FLOAT&&(tt=a.R16F),V===a.UNSIGNED_BYTE&&(tt=a.R8),V===a.UNSIGNED_SHORT&&vt&&(tt=vt.R16_EXT),V===a.SHORT&&vt&&(tt=vt.R16_SNORM_EXT)),y===a.RED_INTEGER&&(V===a.UNSIGNED_BYTE&&(tt=a.R8UI),V===a.UNSIGNED_SHORT&&(tt=a.R16UI),V===a.UNSIGNED_INT&&(tt=a.R32UI),V===a.BYTE&&(tt=a.R8I),V===a.SHORT&&(tt=a.R16I),V===a.INT&&(tt=a.R32I)),y===a.RG&&(V===a.FLOAT&&(tt=a.RG32F),V===a.HALF_FLOAT&&(tt=a.RG16F),V===a.UNSIGNED_BYTE&&(tt=a.RG8),V===a.UNSIGNED_SHORT&&vt&&(tt=vt.RG16_EXT),V===a.SHORT&&vt&&(tt=vt.RG16_SNORM_EXT)),y===a.RG_INTEGER&&(V===a.UNSIGNED_BYTE&&(tt=a.RG8UI),V===a.UNSIGNED_SHORT&&(tt=a.RG16UI),V===a.UNSIGNED_INT&&(tt=a.RG32UI),V===a.BYTE&&(tt=a.RG8I),V===a.SHORT&&(tt=a.RG16I),V===a.INT&&(tt=a.RG32I)),y===a.RGB_INTEGER&&(V===a.UNSIGNED_BYTE&&(tt=a.RGB8UI),V===a.UNSIGNED_SHORT&&(tt=a.RGB16UI),V===a.UNSIGNED_INT&&(tt=a.RGB32UI),V===a.BYTE&&(tt=a.RGB8I),V===a.SHORT&&(tt=a.RGB16I),V===a.INT&&(tt=a.RGB32I)),y===a.RGBA_INTEGER&&(V===a.UNSIGNED_BYTE&&(tt=a.RGBA8UI),V===a.UNSIGNED_SHORT&&(tt=a.RGBA16UI),V===a.UNSIGNED_INT&&(tt=a.RGBA32UI),V===a.BYTE&&(tt=a.RGBA8I),V===a.SHORT&&(tt=a.RGBA16I),V===a.INT&&(tt=a.RGBA32I)),y===a.RGB&&(V===a.UNSIGNED_SHORT&&vt&&(tt=vt.RGB16_EXT),V===a.SHORT&&vt&&(tt=vt.RGB16_SNORM_EXT),V===a.UNSIGNED_INT_5_9_9_9_REV&&(tt=a.RGB9_E5),V===a.UNSIGNED_INT_10F_11F_11F_REV&&(tt=a.R11F_G11F_B10F)),y===a.RGBA){const rt=pt?lr:xe.getTransfer(Q);V===a.FLOAT&&(tt=a.RGBA32F),V===a.HALF_FLOAT&&(tt=a.RGBA16F),V===a.UNSIGNED_BYTE&&(tt=rt===Ae?a.SRGB8_ALPHA8:a.RGBA8),V===a.UNSIGNED_SHORT&&vt&&(tt=vt.RGBA16_EXT),V===a.SHORT&&vt&&(tt=vt.RGBA16_SNORM_EXT),V===a.UNSIGNED_SHORT_4_4_4_4&&(tt=a.RGBA4),V===a.UNSIGNED_SHORT_5_5_5_1&&(tt=a.RGB5_A1)}return(tt===a.R16F||tt===a.R32F||tt===a.RG16F||tt===a.RG32F||tt===a.RGBA16F||tt===a.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function b(I,y){let V;return I?y===null||y===Wi||y===$s?V=a.DEPTH24_STENCIL8:y===Ci?V=a.DEPTH32F_STENCIL8:y===Ks&&(V=a.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Wi||y===$s?V=a.DEPTH_COMPONENT24:y===Ci?V=a.DEPTH_COMPONENT32F:y===Ks&&(V=a.DEPTH_COMPONENT16),V}function T(I,y){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ye&&I.minFilter!==ii?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function R(I){const y=I.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&c.delete(y),y.isHTMLTexture&&f.delete(y)}function S(I){const y=I.target;y.removeEventListener("dispose",S),F(y)}function A(I){const y=i.get(I);if(y.__webglInit===void 0)return;const V=I.source,q=d.get(V);if(q){const Q=q[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(I),Object.keys(q).length===0&&d.delete(V)}i.remove(I)}function L(I){const y=i.get(I);a.deleteTexture(y.__webglTexture);const V=I.source,q=d.get(V);delete q[y.__cacheKey],r.memory.textures--}function F(I){const y=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Q=0;Q<y.__webglFramebuffer[q].length;Q++)a.deleteFramebuffer(y.__webglFramebuffer[q][Q]);else a.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)a.deleteFramebuffer(y.__webglFramebuffer[q]);else a.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&a.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&a.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&a.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=I.textures;for(let q=0,Q=V.length;q<Q;q++){const pt=i.get(V[q]);pt.__webglTexture&&(a.deleteTexture(pt.__webglTexture),r.memory.textures--),i.remove(V[q])}i.remove(I)}let k=0;function z(){k=0}function P(){return k}function O(I){k=I}function $(){const I=k;return I>=n.maxTextures&&se("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+n.maxTextures),k+=1,I}function B(I){const y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function it(I,y){const V=i.get(I);if(I.isVideoTexture&&U(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){const q=I.image;if(q===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(V,I,y);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(a.TEXTURE_2D,V.__webglTexture,a.TEXTURE0+y)}function Y(I,y){const V=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){mt(V,I,y);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(a.TEXTURE_2D_ARRAY,V.__webglTexture,a.TEXTURE0+y)}function et(I,y){const V=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){mt(V,I,y);return}e.bindTexture(a.TEXTURE_3D,V.__webglTexture,a.TEXTURE0+y)}function nt(I,y){const V=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&V.__version!==I.version){kt(V,I,y);return}e.bindTexture(a.TEXTURE_CUBE_MAP,V.__webglTexture,a.TEXTURE0+y)}const Ft={[sr]:a.REPEAT,[tn]:a.CLAMP_TO_EDGE,[Do]:a.MIRRORED_REPEAT},X={[Ye]:a.NEAREST,[ip]:a.NEAREST_MIPMAP_NEAREST,[ca]:a.NEAREST_MIPMAP_LINEAR,[ii]:a.LINEAR,[zr]:a.LINEAR_MIPMAP_NEAREST,[En]:a.LINEAR_MIPMAP_LINEAR},ct={[rp]:a.NEVER,[up]:a.ALWAYS,[op]:a.LESS,[Nh]:a.LEQUAL,[hp]:a.EQUAL,[Uh]:a.GEQUAL,[lp]:a.GREATER,[cp]:a.NOTEQUAL};function ht(I,y){if(y.type===Ci&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ii||y.magFilter===zr||y.magFilter===ca||y.magFilter===En||y.minFilter===ii||y.minFilter===zr||y.minFilter===ca||y.minFilter===En)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(I,a.TEXTURE_WRAP_S,Ft[y.wrapS]),a.texParameteri(I,a.TEXTURE_WRAP_T,Ft[y.wrapT]),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,Ft[y.wrapR]),a.texParameteri(I,a.TEXTURE_MAG_FILTER,X[y.magFilter]),a.texParameteri(I,a.TEXTURE_MIN_FILTER,X[y.minFilter]),y.compareFunction&&(a.texParameteri(I,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(I,a.TEXTURE_COMPARE_FUNC,ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ye||y.minFilter!==ca&&y.minFilter!==En||y.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");a.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ut(I,y){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",R));const q=y.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const pt=B(y);if(pt!==I.__cacheKey){Q[pt]===void 0&&(Q[pt]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,V=!0),Q[pt].usedTimes++;const vt=Q[I.__cacheKey];vt!==void 0&&(Q[I.__cacheKey].usedTimes--,vt.usedTimes===0&&L(y)),I.__cacheKey=pt,I.__webglTexture=Q[pt].texture}return V}function G(I,y,V){return Math.floor(Math.floor(I/V)/y)}function Z(I,y,V,q){const pt=I.updateRanges;if(pt.length===0)e.texSubImage2D(a.TEXTURE_2D,0,0,0,y.width,y.height,V,q,y.data);else{pt.sort((qt,bt)=>qt.start-bt.start);let vt=0;for(let qt=1;qt<pt.length;qt++){const bt=pt[vt],yt=pt[qt],Wt=bt.start+bt.count,te=G(yt.start,y.width,4),le=G(bt.start,y.width,4);yt.start<=Wt+1&&te===le&&G(yt.start+yt.count-1,y.width,4)===te?bt.count=Math.max(bt.count,yt.start+yt.count-bt.start):(++vt,pt[vt]=yt)}pt.length=vt+1;const tt=e.getParameter(a.UNPACK_ROW_LENGTH),rt=e.getParameter(a.UNPACK_SKIP_PIXELS),wt=e.getParameter(a.UNPACK_SKIP_ROWS);e.pixelStorei(a.UNPACK_ROW_LENGTH,y.width);for(let qt=0,bt=pt.length;qt<bt;qt++){const yt=pt[qt],Wt=Math.floor(yt.start/4),te=Math.ceil(yt.count/4),le=Wt%y.width,W=Math.floor(Wt/y.width),Et=te,lt=1;e.pixelStorei(a.UNPACK_SKIP_PIXELS,le),e.pixelStorei(a.UNPACK_SKIP_ROWS,W),e.texSubImage2D(a.TEXTURE_2D,0,le,W,Et,lt,V,q,y.data)}I.clearUpdateRanges(),e.pixelStorei(a.UNPACK_ROW_LENGTH,tt),e.pixelStorei(a.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(a.UNPACK_SKIP_ROWS,wt)}}function mt(I,y,V){let q=a.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=a.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=a.TEXTURE_3D);const Q=ut(I,y),pt=y.source;e.bindTexture(q,I.__webglTexture,a.TEXTURE0+V);const vt=i.get(pt);if(pt.version!==vt.__version||Q===!0){if(e.activeTexture(a.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const lt=xe.getPrimaries(xe.workingColorSpace),At=y.colorSpace===pn?null:xe.getPrimaries(y.colorSpace),Dt=y.colorSpace===pn||lt===At?a.NONE:a.BROWSER_DEFAULT_WEBGL;e.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment);let rt=m(y.image,!1,n.maxTextureSize);rt=Me(y,rt);const wt=s.convert(y.format,y.colorSpace),qt=s.convert(y.type);let bt=v(y.internalFormat,wt,qt,y.normalized,y.colorSpace,y.isVideoTexture);ht(q,y);let yt;const Wt=y.mipmaps,te=y.isVideoTexture!==!0,le=vt.__version===void 0||Q===!0,W=pt.dataReady,Et=T(y,rt);if(y.isDepthTexture)bt=b(y.format===An,y.type),le&&(te?e.texStorage2D(a.TEXTURE_2D,1,bt,rt.width,rt.height):e.texImage2D(a.TEXTURE_2D,0,bt,rt.width,rt.height,0,wt,qt,null));else if(y.isDataTexture)if(Wt.length>0){te&&le&&e.texStorage2D(a.TEXTURE_2D,Et,bt,Wt[0].width,Wt[0].height);for(let lt=0,At=Wt.length;lt<At;lt++)yt=Wt[lt],te?W&&e.texSubImage2D(a.TEXTURE_2D,lt,0,0,yt.width,yt.height,wt,qt,yt.data):e.texImage2D(a.TEXTURE_2D,lt,bt,yt.width,yt.height,0,wt,qt,yt.data);y.generateMipmaps=!1}else te?(le&&e.texStorage2D(a.TEXTURE_2D,Et,bt,rt.width,rt.height),W&&Z(y,rt,wt,qt)):e.texImage2D(a.TEXTURE_2D,0,bt,rt.width,rt.height,0,wt,qt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){te&&le&&e.texStorage3D(a.TEXTURE_2D_ARRAY,Et,bt,Wt[0].width,Wt[0].height,rt.depth);for(let lt=0,At=Wt.length;lt<At;lt++)if(yt=Wt[lt],y.format!==Pi)if(wt!==null)if(te){if(W)if(y.layerUpdates.size>0){const Dt=uc(yt.width,yt.height,y.format,y.type);for(const dt of y.layerUpdates){const $t=yt.data.subarray(dt*Dt/yt.data.BYTES_PER_ELEMENT,(dt+1)*Dt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,lt,0,0,dt,yt.width,yt.height,1,wt,$t)}}else e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,rt.depth,wt,yt.data)}else e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,lt,bt,yt.width,yt.height,rt.depth,0,yt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?W&&e.texSubImage3D(a.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,rt.depth,wt,qt,yt.data):e.texImage3D(a.TEXTURE_2D_ARRAY,lt,bt,yt.width,yt.height,rt.depth,0,wt,qt,yt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{te&&le&&e.texStorage2D(a.TEXTURE_2D,Et,bt,Wt[0].width,Wt[0].height);for(let lt=0,At=Wt.length;lt<At;lt++)yt=Wt[lt],y.format!==Pi?wt!==null?te?W&&e.compressedTexSubImage2D(a.TEXTURE_2D,lt,0,0,yt.width,yt.height,wt,yt.data):e.compressedTexImage2D(a.TEXTURE_2D,lt,bt,yt.width,yt.height,0,yt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?W&&e.texSubImage2D(a.TEXTURE_2D,lt,0,0,yt.width,yt.height,wt,qt,yt.data):e.texImage2D(a.TEXTURE_2D,lt,bt,yt.width,yt.height,0,wt,qt,yt.data)}else if(y.isDataArrayTexture)if(te){if(le&&e.texStorage3D(a.TEXTURE_2D_ARRAY,Et,bt,rt.width,rt.height,rt.depth),W)if(y.layerUpdates.size>0){const lt=uc(rt.width,rt.height,y.format,y.type);for(const At of y.layerUpdates){const Dt=rt.data.subarray(At*lt/rt.data.BYTES_PER_ELEMENT,(At+1)*lt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,At,rt.width,rt.height,1,wt,qt,Dt)}y.clearLayerUpdates()}else e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,wt,qt,rt.data)}else e.texImage3D(a.TEXTURE_2D_ARRAY,0,bt,rt.width,rt.height,rt.depth,0,wt,qt,rt.data);else if(y.isData3DTexture)te?(le&&e.texStorage3D(a.TEXTURE_3D,Et,bt,rt.width,rt.height,rt.depth),W&&e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,wt,qt,rt.data)):e.texImage3D(a.TEXTURE_3D,0,bt,rt.width,rt.height,rt.depth,0,wt,qt,rt.data);else if(y.isFramebufferTexture){if(le)if(te)e.texStorage2D(a.TEXTURE_2D,Et,bt,rt.width,rt.height);else{let lt=rt.width,At=rt.height;for(let Dt=0;Dt<Et;Dt++)e.texImage2D(a.TEXTURE_2D,Dt,bt,lt,At,0,wt,qt,null),lt>>=1,At>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in a){const lt=a.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),rt.parentNode!==lt){lt.appendChild(rt),f.add(y),lt.onpaint=At=>{const Dt=At.changedElements;for(const dt of f)Dt.includes(dt.image)&&(dt.needsUpdate=!0)},lt.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,rt);else{const Dt=a.RGBA,dt=a.RGBA,$t=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Dt,dt,$t,rt)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(te&&le){const lt=he(Wt[0]);e.texStorage2D(a.TEXTURE_2D,Et,bt,lt.width,lt.height)}for(let lt=0,At=Wt.length;lt<At;lt++)yt=Wt[lt],te?W&&e.texSubImage2D(a.TEXTURE_2D,lt,0,0,wt,qt,yt):e.texImage2D(a.TEXTURE_2D,lt,bt,wt,qt,yt);y.generateMipmaps=!1}else if(te){if(le){const lt=he(rt);e.texStorage2D(a.TEXTURE_2D,Et,bt,lt.width,lt.height)}W&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,wt,qt,rt)}else e.texImage2D(a.TEXTURE_2D,0,bt,wt,qt,rt);p(y)&&M(q),vt.__version=pt.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function kt(I,y,V){if(y.image.length!==6)return;const q=ut(I,y),Q=y.source;e.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+V);const pt=i.get(Q);if(Q.version!==pt.__version||q===!0){e.activeTexture(a.TEXTURE0+V);const vt=xe.getPrimaries(xe.workingColorSpace),tt=y.colorSpace===pn?null:xe.getPrimaries(y.colorSpace),rt=y.colorSpace===pn||vt===tt?a.NONE:a.BROWSER_DEFAULT_WEBGL;e.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const wt=y.isCompressedTexture||y.image[0].isCompressedTexture,qt=y.image[0]&&y.image[0].isDataTexture,bt=[];for(let dt=0;dt<6;dt++)!wt&&!qt?bt[dt]=m(y.image[dt],!0,n.maxCubemapSize):bt[dt]=qt?y.image[dt].image:y.image[dt],bt[dt]=Me(y,bt[dt]);const yt=bt[0],Wt=s.convert(y.format,y.colorSpace),te=s.convert(y.type),le=v(y.internalFormat,Wt,te,y.normalized,y.colorSpace),W=y.isVideoTexture!==!0,Et=pt.__version===void 0||q===!0,lt=Q.dataReady;let At=T(y,yt);ht(a.TEXTURE_CUBE_MAP,y);let Dt;if(wt){W&&Et&&e.texStorage2D(a.TEXTURE_CUBE_MAP,At,le,yt.width,yt.height);for(let dt=0;dt<6;dt++){Dt=bt[dt].mipmaps;for(let $t=0;$t<Dt.length;$t++){const Xt=Dt[$t];y.format!==Pi?Wt!==null?W?lt&&e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+dt,$t,0,0,Xt.width,Xt.height,Wt,Xt.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+dt,$t,le,Xt.width,Xt.height,0,Xt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?lt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+dt,$t,0,0,Xt.width,Xt.height,Wt,te,Xt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+dt,$t,le,Xt.width,Xt.height,0,Wt,te,Xt.data)}}}else{if(Dt=y.mipmaps,W&&Et){Dt.length>0&&At++;const dt=he(bt[0]);e.texStorage2D(a.TEXTURE_CUBE_MAP,At,le,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(qt){W?lt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,bt[dt].width,bt[dt].height,Wt,te,bt[dt].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,le,bt[dt].width,bt[dt].height,0,Wt,te,bt[dt].data);for(let $t=0;$t<Dt.length;$t++){const De=Dt[$t].image[dt].image;W?lt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+dt,$t+1,0,0,De.width,De.height,Wt,te,De.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+dt,$t+1,le,De.width,De.height,0,Wt,te,De.data)}}else{W?lt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Wt,te,bt[dt]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,le,Wt,te,bt[dt]);for(let $t=0;$t<Dt.length;$t++){const Xt=Dt[$t];W?lt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+dt,$t+1,0,0,Wt,te,Xt.image[dt]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+dt,$t+1,le,Wt,te,Xt.image[dt])}}}p(y)&&M(a.TEXTURE_CUBE_MAP),pt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Tt(I,y,V,q,Q,pt){const vt=s.convert(V.format,V.colorSpace),tt=s.convert(V.type),rt=v(V.internalFormat,vt,tt,V.normalized,V.colorSpace),wt=i.get(y),qt=i.get(V);if(qt.__renderTarget=y,!wt.__hasExternalTextures){const bt=Math.max(1,y.width>>pt),yt=Math.max(1,y.height>>pt);Q===a.TEXTURE_3D||Q===a.TEXTURE_2D_ARRAY?e.texImage3D(Q,pt,rt,bt,yt,y.depth,0,vt,tt,null):e.texImage2D(Q,pt,rt,bt,yt,0,vt,tt,null)}e.bindFramebuffer(a.FRAMEBUFFER,I),ne(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,q,Q,qt.__webglTexture,0,ie(y)):(Q===a.TEXTURE_2D||Q>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,q,Q,qt.__webglTexture,pt),e.bindFramebuffer(a.FRAMEBUFFER,null)}function St(I,y,V){if(a.bindRenderbuffer(a.RENDERBUFFER,I),y.depthBuffer){const q=y.depthTexture,Q=q&&q.isDepthTexture?q.type:null,pt=b(y.stencilBuffer,Q),vt=y.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;ne(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ie(y),pt,y.width,y.height):V?a.renderbufferStorageMultisample(a.RENDERBUFFER,ie(y),pt,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,pt,y.width,y.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,vt,a.RENDERBUFFER,I)}else{const q=y.textures;for(let Q=0;Q<q.length;Q++){const pt=q[Q],vt=s.convert(pt.format,pt.colorSpace),tt=s.convert(pt.type),rt=v(pt.internalFormat,vt,tt,pt.normalized,pt.colorSpace);ne(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ie(y),rt,y.width,y.height):V?a.renderbufferStorageMultisample(a.RENDERBUFFER,ie(y),rt,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,rt,y.width,y.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function de(I,y,V){const q=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(a.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=a.createTexture(),e.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture),ht(a.TEXTURE_CUBE_MAP,y.depthTexture);const wt=s.convert(y.depthTexture.format),qt=s.convert(y.depthTexture.type);let bt;y.depthTexture.format===sn?bt=a.DEPTH_COMPONENT24:y.depthTexture.format===An&&(bt=a.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,bt,y.width,y.height,0,wt,qt,null)}}else it(y.depthTexture,0);const pt=Q.__webglTexture,vt=ie(y),tt=q?a.TEXTURE_CUBE_MAP_POSITIVE_X+V:a.TEXTURE_2D,rt=y.depthTexture.format===An?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(y.depthTexture.format===sn)ne(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,rt,tt,pt,0,vt):a.framebufferTexture2D(a.FRAMEBUFFER,rt,tt,pt,0);else if(y.depthTexture.format===An)ne(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,rt,tt,pt,0,vt):a.framebufferTexture2D(a.FRAMEBUFFER,rt,tt,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(I){const y=i.get(I),V=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){const q=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=q}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)de(y.__webglFramebuffer[q],I,q);else{const q=I.texture.mipmaps;q&&q.length>0?de(y.__webglFramebuffer[0],I,0):de(y.__webglFramebuffer,I,0)}else if(V){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=a.createRenderbuffer(),St(y.__webglDepthbuffer[q],I,!1);else{const Q=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer[q];a.bindRenderbuffer(a.RENDERBUFFER,pt),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,pt)}}else{const q=I.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=a.createRenderbuffer(),St(y.__webglDepthbuffer,I,!1);else{const Q=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,pt),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,pt)}}e.bindFramebuffer(a.FRAMEBUFFER,null)}function ft(I,y,V){const q=i.get(I);y!==void 0&&Tt(q.__webglFramebuffer,I,I.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),V!==void 0&&at(I)}function gt(I){const y=I.texture,V=i.get(I),q=i.get(y);I.addEventListener("dispose",S);const Q=I.textures,pt=I.isWebGLCubeRenderTarget===!0,vt=Q.length>1;if(vt||(q.__webglTexture===void 0&&(q.__webglTexture=a.createTexture()),q.__version=y.version,r.memory.textures++),pt){V.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[tt]=[];for(let rt=0;rt<y.mipmaps.length;rt++)V.__webglFramebuffer[tt][rt]=a.createFramebuffer()}else V.__webglFramebuffer[tt]=a.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let tt=0;tt<y.mipmaps.length;tt++)V.__webglFramebuffer[tt]=a.createFramebuffer()}else V.__webglFramebuffer=a.createFramebuffer();if(vt)for(let tt=0,rt=Q.length;tt<rt;tt++){const wt=i.get(Q[tt]);wt.__webglTexture===void 0&&(wt.__webglTexture=a.createTexture(),r.memory.textures++)}if(I.samples>0&&ne(I)===!1){V.__webglMultisampledFramebuffer=a.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let tt=0;tt<Q.length;tt++){const rt=Q[tt];V.__webglColorRenderbuffer[tt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,V.__webglColorRenderbuffer[tt]);const wt=s.convert(rt.format,rt.colorSpace),qt=s.convert(rt.type),bt=v(rt.internalFormat,wt,qt,rt.normalized,rt.colorSpace,I.isXRRenderTarget===!0),yt=ie(I);a.renderbufferStorageMultisample(a.RENDERBUFFER,yt,bt,I.width,I.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+tt,a.RENDERBUFFER,V.__webglColorRenderbuffer[tt])}a.bindRenderbuffer(a.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=a.createRenderbuffer(),St(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(pt){e.bindTexture(a.TEXTURE_CUBE_MAP,q.__webglTexture),ht(a.TEXTURE_CUBE_MAP,y);for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0)for(let rt=0;rt<y.mipmaps.length;rt++)Tt(V.__webglFramebuffer[tt][rt],I,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+tt,rt);else Tt(V.__webglFramebuffer[tt],I,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(y)&&M(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let tt=0,rt=Q.length;tt<rt;tt++){const wt=Q[tt],qt=i.get(wt);let bt=a.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(bt=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(bt,qt.__webglTexture),ht(bt,wt),Tt(V.__webglFramebuffer,I,wt,a.COLOR_ATTACHMENT0+tt,bt,0),p(wt)&&M(bt)}e.unbindTexture()}else{let tt=a.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(tt=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(tt,q.__webglTexture),ht(tt,y),y.mipmaps&&y.mipmaps.length>0)for(let rt=0;rt<y.mipmaps.length;rt++)Tt(V.__webglFramebuffer[rt],I,y,a.COLOR_ATTACHMENT0,tt,rt);else Tt(V.__webglFramebuffer,I,y,a.COLOR_ATTACHMENT0,tt,0);p(y)&&M(tt),e.unbindTexture()}I.depthBuffer&&at(I)}function xt(I){const y=I.textures;for(let V=0,q=y.length;V<q;V++){const Q=y[V];if(p(Q)){const pt=_(I),vt=i.get(Q).__webglTexture;e.bindTexture(pt,vt),M(pt),e.unbindTexture()}}}const _t=[],Kt=[];function Zt(I){if(I.samples>0){if(ne(I)===!1){const y=I.textures,V=I.width,q=I.height;let Q=a.COLOR_BUFFER_BIT;const pt=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,vt=i.get(I),tt=y.length>1;if(tt)for(let wt=0;wt<y.length;wt++)e.bindFramebuffer(a.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+wt,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,vt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+wt,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const rt=I.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(a.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(a.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let wt=0;wt<y.length;wt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=a.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=a.STENCIL_BUFFER_BIT)),tt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,vt.__webglColorRenderbuffer[wt]);const qt=i.get(y[wt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,qt,0)}a.blitFramebuffer(0,0,V,q,0,0,V,q,Q,a.NEAREST),h===!0&&(_t.length=0,Kt.length=0,_t.push(a.COLOR_ATTACHMENT0+wt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(_t.push(pt),Kt.push(pt),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Kt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),tt)for(let wt=0;wt<y.length;wt++){e.bindFramebuffer(a.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+wt,a.RENDERBUFFER,vt.__webglColorRenderbuffer[wt]);const qt=i.get(y[wt]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,vt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+wt,a.TEXTURE_2D,qt,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&h){const y=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[y])}}}function ie(I){return Math.min(n.maxSamples,I.samples)}function ne(I){const y=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(I){const y=r.render.frame;c.get(I)!==y&&(c.set(I,y),I.update())}function Me(I,y){const V=I.colorSpace,q=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==hr&&V!==pn&&(xe.getTransfer(V)===Ae?(q!==Pi||Q!==gi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ve("WebGLTextures: Unsupported texture color space:",V)),y}function he(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=z,this.getTextureUnits=P,this.setTextureUnits=O,this.setTexture2D=it,this.setTexture2DArray=Y,this.setTexture3D=et,this.setTextureCube=nt,this.rebindTextures=ft,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function OM(a,t){function e(i,n=pn){let s;const r=xe.getTransfer(n);if(i===gi)return a.UNSIGNED_BYTE;if(i===Ph)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Ih)return a.UNSIGNED_SHORT_5_5_5_1;if(i===fu)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===du)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===cu)return a.BYTE;if(i===uu)return a.SHORT;if(i===Ks)return a.UNSIGNED_SHORT;if(i===Ch)return a.INT;if(i===Wi)return a.UNSIGNED_INT;if(i===Ci)return a.FLOAT;if(i===ci)return a.HALF_FLOAT;if(i===pu)return a.ALPHA;if(i===mu)return a.RGB;if(i===Pi)return a.RGBA;if(i===sn)return a.DEPTH_COMPONENT;if(i===An)return a.DEPTH_STENCIL;if(i===Lh)return a.RED;if(i===Dh)return a.RED_INTEGER;if(i===Ln)return a.RG;if(i===zh)return a.RG_INTEGER;if(i===Fh)return a.RGBA_INTEGER;if(i===Za||i===Ja||i===Ka||i===$a)if(r===Ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zo||i===Fo||i===No||i===Uo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===No)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oo||i===Bo||i===ko||i===Ho||i===Go||i===ar||i===Vo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Oo||i===Bo)return r===Ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ko)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ho)return s.COMPRESSED_R11_EAC;if(i===Go)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ar)return s.COMPRESSED_RG11_EAC;if(i===Vo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===Jo||i===Ko||i===$o||i===Qo||i===jo||i===th||i===eh||i===ih||i===nh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wo)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xo)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qo)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yo)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zo)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jo)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ko)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$o)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qo)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jo)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===th)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eh)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ih)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nh)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sh||i===ah||i===rh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===sh)return r===Ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oh||i===hh||i===rr||i===lh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===oh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:e}}const BM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Eu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ni({vertexShader:BM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new w(new Ge(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GM extends zn{constructor(t,e){super();const i=this;let n=null,s=1,r=null,o="local-floor",h=1,l=null,c=null,f=null,u=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",m=new HM,p={},M=e.getContextAttributes();let _=null,v=null;const b=[],T=[],R=new ot;let S=null,A=null;const L=new pi;L.viewport=new Oe;const F=new pi;F.viewport=new Oe;const k=[L,F],z=new Y0;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=b[G];return Z===void 0&&(Z=new Hr,b[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=b[G];return Z===void 0&&(Z=new Hr,b[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=b[G];return Z===void 0&&(Z=new Hr,b[G]=Z),Z.getHandSpace()};function $(G){const Z=T.indexOf(G.inputSource);if(Z===-1)return;const mt=b[Z];mt!==void 0&&(mt.update(G.inputSource,G.frame,l||r),mt.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){n.removeEventListener("select",$),n.removeEventListener("selectstart",$),n.removeEventListener("selectend",$),n.removeEventListener("squeeze",$),n.removeEventListener("squeezestart",$),n.removeEventListener("squeezeend",$),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",it);for(let G=0;G<b.length;G++){const Z=T[G];Z!==null&&(T[G]=null,b[G].disconnect(Z))}P=null,O=null,m.reset();for(const G in p)delete p[G];if(t.setRenderTarget(_),d=null,u=null,f=null,n=null,v=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),A!==null){const G=A.camera;G.fov=A.fov,G.zoom=A.zoom,G.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(n,e)),f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(_=t.getRenderTarget(),n.addEventListener("select",$),n.addEventListener("selectstart",$),n.addEventListener("selectend",$),n.addEventListener("squeeze",$),n.addEventListener("squeezestart",$),n.addEventListener("squeezeend",$),n.addEventListener("end",B),n.addEventListener("inputsourceschange",it),M.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,kt=null,Tt=null;M.depth&&(Tt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=M.stencil?An:sn,kt=M.stencil?$s:Wi);const St={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(St),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new li(u.textureWidth,u.textureHeight,{format:Pi,type:gi,depthTexture:new ta(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,e,mt),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new li(d.framebufferWidth,d.framebufferHeight,{format:Pi,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(h),l=null,r=await n.requestReferenceSpace(o),ut.setContext(n),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(G){for(let Z=0;Z<G.removed.length;Z++){const mt=G.removed[Z],kt=T.indexOf(mt);kt>=0&&(T[kt]=null,b[kt].disconnect(mt))}for(let Z=0;Z<G.added.length;Z++){const mt=G.added[Z];let kt=T.indexOf(mt);if(kt===-1){for(let St=0;St<b.length;St++)if(St>=T.length){T.push(mt),kt=St;break}else if(T[St]===null){T[St]=mt,kt=St;break}if(kt===-1)break}const Tt=b[kt];Tt&&Tt.connect(mt)}}const Y=new N,et=new N;function nt(G,Z,mt){Y.setFromMatrixPosition(Z.matrixWorld),et.setFromMatrixPosition(mt.matrixWorld);const kt=Y.distanceTo(et),Tt=Z.projectionMatrix.elements,St=mt.projectionMatrix.elements,de=Tt[14]/(Tt[10]-1),at=Tt[14]/(Tt[10]+1),ft=(Tt[9]+1)/Tt[5],gt=(Tt[9]-1)/Tt[5],xt=(Tt[8]-1)/Tt[0],_t=(St[8]+1)/St[0],Kt=de*xt,Zt=de*_t,ie=kt/(-xt+_t),ne=ie*-xt;if(Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ne),G.translateZ(ie),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Tt[10]===-1)G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const U=de+ie,Me=at+ie,he=Kt-ne,I=Zt+(kt-ne),y=ft*at/Me*U,V=gt*at/Me*U;G.projectionMatrix.makePerspective(he,I,y,V,U,Me),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Ft(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;let Z=G.near,mt=G.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),z.near=F.near=L.near=Z,z.far=F.far=L.far=mt,(P!==z.near||O!==z.far)&&(n.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,O=z.far),z.layers.mask=G.layers.mask|6,L.layers.mask=z.layers.mask&-5,F.layers.mask=z.layers.mask&-3;const kt=G.parent,Tt=z.cameras;Ft(z,kt);for(let St=0;St<Tt.length;St++)Ft(Tt[St],kt);Tt.length===2?nt(z,L,F):z.projectionMatrix.copy(L.projectionMatrix),A===null&&G.isPerspectiveCamera&&(A={camera:G,fov:G.fov,zoom:G.zoom}),X(G,z,kt)};function X(G,Z,mt){mt===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(mt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=js*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return h},this.setFoveation=function(G){h=G,u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(G){return p[G]};let ct=null;function ht(G,Z){if(c=Z.getViewerPose(l||r),g=Z,c!==null){const mt=c.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let kt=!1;mt.length!==z.cameras.length&&(z.cameras.length=0,kt=!0);for(let at=0;at<mt.length;at++){const ft=mt[at];let gt=null;if(d!==null)gt=d.getViewport(ft);else{const _t=f.getViewSubImage(u,ft);gt=_t.viewport,at===0&&(t.setRenderTargetTextures(v,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(v))}let xt=k[at];xt===void 0&&(xt=new pi,xt.layers.enable(at),xt.viewport=new Oe,k[at]=xt),xt.matrix.fromArray(ft.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(ft.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(gt.x,gt.y,gt.width,gt.height),at===0&&(z.matrix.copy(xt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),kt===!0&&z.cameras.push(xt)}const Tt=n.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const at=f.getDepthInformation(mt[0]);at&&at.isValid&&at.texture&&m.init(at,n.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let at=0;at<mt.length;at++){const ft=mt[at].camera;if(ft){let gt=p[ft];gt||(gt=new Eu,p[ft]=gt);const xt=f.getCameraImage(ft);gt.sourceTexture=xt}}}}for(let mt=0;mt<b.length;mt++){const kt=T[mt],Tt=b[mt];kt!==null&&Tt!==void 0&&Tt.update(kt,Z,l||r)}ct&&ct(G,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ut=new Gu;ut.setAnimationLoop(ht),this.setAnimationLoop=function(G){ct=G},this.dispose=function(){}}}const VM=new Ce,Ju=new re;Ju.set(-1,0,0,0,1,0,0,0,1);function WM(a,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ou(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,M,_,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?h(m,p,M,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),_=M.envMap,v=M.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(VM.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ju),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function h(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function XM(a,t,e,i){let n={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function h(v,b){const T=b.program;i.uniformBlockBinding(v,T)}function l(v,b){let T=n[v.id];T===void 0&&(m(v),T=c(v),n[v.id]=T,v.addEventListener("dispose",M));const R=b.program;i.updateUBOMapping(v,R);const S=t.render.frame;s[v.id]!==S&&(u(v),s[v.id]=S)}function c(v){const b=f();v.__bindingPointIndex=b;const T=a.createBuffer(),R=v.__size,S=v.usage;return a.bindBuffer(a.UNIFORM_BUFFER,T),a.bufferData(a.UNIFORM_BUFFER,R,S),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,b,T),T}function f(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const b=n[v.id],T=v.uniforms,R=v.__cache;a.bindBuffer(a.UNIFORM_BUFFER,b);for(let S=0,A=T.length;S<A;S++){const L=T[S];if(Array.isArray(L))for(let F=0,k=L.length;F<k;F++)d(L[F],S,F,R);else d(L,S,0,R)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(v,b,T,R){if(x(v,b,T,R)===!0){const S=v.__offset,A=v.value;if(Array.isArray(A)){let L=0;for(let F=0;F<A.length;F++){const k=A[F],z=p(k);g(k,v.__data,L),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(L+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,v.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,S,v.__data)}}function g(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function x(v,b,T,R){const S=v.value,A=b+"_"+T;if(R[A]===void 0)return typeof S=="number"||typeof S=="boolean"?R[A]=S:ArrayBuffer.isView(S)?R[A]=S.slice():R[A]=S.clone(),!0;{const L=R[A];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return R[A]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(L.equals(S)===!1)return L.copy(S),!0}}return!1}function m(v){const b=v.uniforms;let T=0;const R=16;for(let A=0,L=b.length;A<L;A++){const F=Array.isArray(b[A])?b[A]:[b[A]];for(let k=0,z=F.length;k<z;k++){const P=F[k],O=Array.isArray(P.value)?P.value:[P.value];for(let $=0,B=O.length;$<B;$++){const it=O[$],Y=p(it),et=T%R,nt=et%Y.boundary,Ft=et+nt;T+=nt,Ft!==0&&R-Ft<Y.storage&&(T+=R-Ft),P.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=Y.storage}}}const S=T%R;return S>0&&(T+=R-S),v.__size=T,v.__cache={},this}function p(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):se("WebGLRenderer: Unsupported uniform value type.",v),b}function M(v){const b=v.target;b.removeEventListener("dispose",M);const T=r.indexOf(b.__bindingPointIndex);r.splice(T,1),a.deleteBuffer(n[b.id]),delete n[b.id],delete s[b.id]}function _(){for(const v in n)a.deleteBuffer(n[v]);r=[],n={},s={}}return{bind:h,update:l,dispose:_}}const qM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function YM(){return zi===null&&(zi=new yu(qM,16,16,Ln,ci),zi.name="DFG_LUT",zi.minFilter=ii,zi.magFilter=ii,zi.wrapS=tn,zi.wrapT=tn,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class ZM{constructor(t={}){const{canvas:e=pp(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=gi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;const x=d,m=new Set([Fh,zh,Dh]),p=new Set([gi,Wi,Ks,$s,Ph,Ih]),M=new Uint32Array(4),_=new Int32Array(4),v=new N;let b=null,T=null;const R=[],S=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let F=!1,k=null,z=null,P=null,O=null;this._outputColorSpace=ke;let $=0,B=0,it=null,Y=-1,et=null;const nt=new Oe,Ft=new Oe;let X=null;const ct=new Bt(0);let ht=0,ut=e.width,G=e.height,Z=1,mt=null,kt=null;const Tt=new Oe(0,0,ut,G),St=new Oe(0,0,ut,G);let de=!1;const at=new Gh;let ft=!1,gt=!1;const xt=new Ce,_t=new N,Kt=new Oe,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function ne(){return it===null?Z:1}let U=i;function Me(E,H){return e.getContext(E,H)}let he,I,y,V,q,Q,pt,vt,tt,rt,wt,qt,bt,yt,Wt,te,le,W,Et,lt,At,Dt,dt;try{const E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sh}`),e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Si,!1),U===null){const H="webgl2";if(U=Me(H,E),U===null)throw Me(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(E){throw e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Si,!1),ve("WebGLRenderer: "+E.message),E}function $t(){he=new Yx(U),he.init(),At=new OM(U,he),I=new Ux(U,he,t,At),y=new NM(U,he),I.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),z=U.createFramebuffer(),P=U.createFramebuffer(),O=U.createFramebuffer(),V=new Kx(U),q=new SM,Q=new UM(U,he,y,q,I,At,V),pt=new qx(L),vt=new Q0(U),Dt=new Fx(U,vt),tt=new Zx(U,vt,V,Dt),rt=new Qx(U,tt,vt,Dt,V),W=new $x(U,I,Q),Wt=new Ox(q),wt=new wM(L,pt,he,I,Dt,Wt),qt=new WM(L,q),bt=new bM,yt=new PM(he),le=new zx(L,pt,y,rt,g,h),te=new FM(L,rt,I),dt=new XM(U,V,I,y),Et=new Nx(U,he,V),lt=new Jx(U,he,V),V.programs=wt.programs,L.capabilities=I,L.extensions=he,L.properties=q,L.renderLists=bt,L.shadowMap=te,L.state=y,L.info=V}x!==gi&&(A=new t1(x,e.width,e.height,o,n,s));const Xt=new GM(L,U);this.xr=Xt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(ut,G,!1))},this.getSize=function(E){return E.set(ut,G)},this.setSize=function(E,H,j=!0){if(Xt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=E,G=H,e.width=Math.floor(E*Z),e.height=Math.floor(H*Z),j===!0&&(e.style.width=E+"px",e.style.height=H+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(ut*Z,G*Z).floor()},this.setDrawingBufferSize=function(E,H,j){ut=E,G=H,Z=j,e.width=Math.floor(E*j),e.height=Math.floor(H*j),this.setViewport(0,0,E,H)},this.setEffects=function(E){if(x===gi){ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let H=0;H<E.length;H++)if(E[H].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(nt)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,H,j,J){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,H,j,J),y.viewport(nt.copy(Tt).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(St)},this.setScissor=function(E,H,j,J){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,H,j,J),y.scissor(Ft.copy(St).multiplyScalar(Z).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(E){y.setScissorTest(de=E)},this.setOpaqueSort=function(E){mt=E},this.setTransparentSort=function(E){kt=E},this.getClearColor=function(E){return E.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,j=!0){let J=0;if(E){let K=!1;if(it!==null){const Lt=it.texture.format;K=m.has(Lt)}if(K){const Lt=it.texture.type,Nt=p.has(Lt),It=le.getClearColor(),Ht=le.getClearAlpha(),Yt=It.r,ue=It.g,ge=It.b;Nt?(M[0]=Yt,M[1]=ue,M[2]=ge,M[3]=Ht,U.clearBufferuiv(U.COLOR,0,M)):(_[0]=Yt,_[1]=ue,_[2]=ge,_[3]=Ht,U.clearBufferiv(U.COLOR,0,_))}else J|=U.COLOR_BUFFER_BIT}H&&(J|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),k=E},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Si,!1),le.dispose(),bt.dispose(),yt.dispose(),q.dispose(),pt.dispose(),rt.dispose(),Dt.dispose(),dt.dispose(),wt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",el),Xt.removeEventListener("sessionend",il),vn.stop()};function De(E){E.preventDefault(),ur("WebGLRenderer: Context Lost."),F=!0}function be(){ur("WebGLRenderer: Context Restored."),F=!1;const E=V.autoReset,H=te.enabled,j=te.autoUpdate,J=te.needsUpdate,K=te.type;$t(),V.autoReset=E,te.enabled=H,te.autoUpdate=j,te.needsUpdate=J,te.type=K}function Si(E){ve("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ii(E){const H=E.target;H.removeEventListener("dispose",Ii),Qu(H)}function Qu(E){ju(E),q.remove(E)}function ju(E){const H=q.get(E).programs;H!==void 0&&(H.forEach(function(j){wt.releaseProgram(j)}),E.isShaderMaterial&&wt.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,j,J,K,Lt){H===null&&(H=Zt);const Nt=K.isMesh&&K.matrixWorld.determinantAffine()<0,It=nf(E,H,j,J,K);y.setMaterial(J,Nt);let Ht=j.index,Yt=1;if(J.wireframe===!0){if(Ht=tt.getWireframeAttribute(j),Ht===void 0)return;Yt=2}const ue=j.drawRange,ge=j.attributes.position;let Gt=ue.start*Yt,Te=(ue.start+ue.count)*Yt;Lt!==null&&(Gt=Math.max(Gt,Lt.start*Yt),Te=Math.min(Te,(Lt.start+Lt.count)*Yt)),Ht!==null?(Gt=Math.max(Gt,0),Te=Math.min(Te,Ht.count)):ge!=null&&(Gt=Math.max(Gt,0),Te=Math.min(Te,ge.count));const Ve=Te-Gt;if(Ve<0||Ve===1/0)return;Dt.setup(K,J,It,j,Ht);let Ne,Ie=Et;if(Ht!==null&&(Ne=vt.get(Ht),Ie=lt,Ie.setIndex(Ne)),K.isMesh)J.wireframe===!0?(y.setLineWidth(J.wireframeLinewidth*ne()),Ie.setMode(U.LINES)):Ie.setMode(U.TRIANGLES);else if(K.isLine){let Qe=J.linewidth;Qe===void 0&&(Qe=1),y.setLineWidth(Qe*ne()),K.isLineSegments?Ie.setMode(U.LINES):K.isLineLoop?Ie.setMode(U.LINE_LOOP):Ie.setMode(U.LINE_STRIP)}else K.isPoints?Ie.setMode(U.POINTS):K.isSprite&&Ie.setMode(U.TRIANGLES);if(K.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Ie.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Qe=K._multiDrawStarts,zt=K._multiDrawCounts,ai=K._multiDrawCount,we=Ht?vt.get(Ht).bytesPerElement:1,xi=q.get(J).currentProgram.getUniforms();for(let Li=0;Li<ai;Li++)xi.setValue(U,"_gl_DrawID",Li),Ie.render(Qe[Li]/we,zt[Li])}else if(K.isInstancedMesh)Ie.renderInstances(Gt,Ve,K.count);else if(j.isInstancedBufferGeometry){const Qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,zt=Math.min(j.instanceCount,Qe);Ie.renderInstances(Gt,Ve,zt)}else Ie.render(Gt,Ve)};function tl(E,H,j,J){k!==null&&E.isNodeMaterial&&k.setObject(J,E),ft===!0&&Wt.setState(E,j,!1),E.transparent===!0&&E.side===Qt&&E.forceSinglePass===!1?(E.side=Ze,E.needsUpdate=!0,oa(E,H,J),E.side=gn,E.needsUpdate=!0,oa(E,H,J),E.side=Qt):oa(E,H,J)}this.compile=function(E,H,j=null){j===null&&(j=E),k!==null&&k.renderStart(E,H,j),T=yt.get(j),T.init(H),S.push(T),j.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),E!==j&&E.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),gt=this.localClippingEnabled,ft=Wt.init(this.clippingPlanes,gt),ft===!0&&Wt.setGlobalState(this.clippingPlanes,H),k!==null&&te.render(T.state.shadowsArray,j,H);const J=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Lt=K.material;if(Lt)if(Array.isArray(Lt))for(let Nt=0;Nt<Lt.length;Nt++){const It=Lt[Nt];tl(It,j,H,K),J.add(It)}else tl(Lt,j,H,K),J.add(Lt)}),T=S.pop(),k!==null&&k.renderEnd(),J},this.compileAsync=function(E,H,j=null){const J=this.compile(E,H,j);return new Promise(K=>{function Lt(){if(J.forEach(function(Nt){const Ht=q.get(Nt).currentProgram;(Ht===void 0||Ht.isReady())&&J.delete(Nt)}),J.size===0){K(E);return}setTimeout(Lt,10)}he.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Er=null;function tf(E){Er&&Er(E)}function el(){vn.stop()}function il(){vn.start()}const vn=new Gu;vn.setAnimationLoop(tf),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(E){Er=E,Xt.setAnimationLoop(E),E===null?vn.stop():vn.start()},Xt.addEventListener("sessionstart",el),Xt.addEventListener("sessionend",il),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;k!==null&&k.renderStart(E,H);const j=Xt.enabled===!0&&Xt.isPresenting===!0,J=A!==null&&(it===null||j)&&A.begin(L,it);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(H),H=Xt.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,H,it),T=yt.get(E,S.length),T.init(H),T.state.textureUnits=Q.getTextureUnits(),S.push(T),xt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),at.setFromProjectionMatrix(xt,Oi,H.reversedDepth),gt=this.localClippingEnabled,ft=Wt.init(this.clippingPlanes,gt),b=bt.get(E,R.length),b.init(),R.push(b),Xt.enabled===!0&&Xt.isPresenting===!0){const Nt=L.xr.getDepthSensingMesh();Nt!==null&&Ar(Nt,H,-1/0,L.sortObjects)}Ar(E,H,0,L.sortObjects),b.finish(),k!==null&&k.updateLights(T.state.lightsArray),L.sortObjects===!0&&b.sort(mt,kt),ie=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,ie&&le.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&Wt.beginShadows();const K=T.state.shadowsArray;if(te.render(K,E,H),ft===!0&&Wt.endShadows(),(J&&A.hasRenderPass())===!1){const Nt=b.opaque,It=b.transmissive;if(T.setupLights(),H.isArrayCamera){const Ht=H.cameras;if(It.length>0)for(let Yt=0,ue=Ht.length;Yt<ue;Yt++){const ge=Ht[Yt];sl(Nt,It,E,ge)}ie&&le.render(E);for(let Yt=0,ue=Ht.length;Yt<ue;Yt++){const ge=Ht[Yt];nl(b,E,ge,ge.viewport)}}else It.length>0&&sl(Nt,It,E,H),ie&&le.render(E),nl(b,E,H)}it!==null&&B===0&&(Q.updateMultisampleRenderTarget(it),Q.updateRenderTargetMipmap(it)),J&&A.end(L),E.isScene===!0&&E.onAfterRender(L,E,H),Dt.resetDefaultState(),Y=-1,et=null,S.pop(),S.length>0?(T=S[S.length-1],Q.setTextureUnits(T.state.textureUnits),ft===!0&&Wt.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,k!==null&&k.renderEnd()};function Ar(E,H,j,J){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(at)){J&&Kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xt);const Nt=rt.update(E),It=E.material;It.visible&&b.push(E,Nt,It,j,Kt.z,null,H)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(at))){const Nt=rt.update(E),It=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Kt.copy(E.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Kt.copy(Nt.boundingSphere.center)),Kt.applyMatrix4(E.matrixWorld).applyMatrix4(xt)),Array.isArray(It)){const Ht=Nt.groups;for(let Yt=0,ue=Ht.length;Yt<ue;Yt++){const ge=Ht[Yt],Gt=It[ge.materialIndex];Gt&&Gt.visible&&b.push(E,Nt,Gt,j,Kt.z,ge,H)}}else It.visible&&b.push(E,Nt,It,j,Kt.z,null,H)}}const Lt=E.children;for(let Nt=0,It=Lt.length;Nt<It;Nt++)Ar(Lt[Nt],H,j,J)}function nl(E,H,j,J){const{opaque:K,transmissive:Lt,transparent:Nt}=E;T.setupLightsView(j),ft===!0&&Wt.setGlobalState(L.clippingPlanes,j),J&&y.viewport(nt.copy(J)),K.length>0&&ra(K,H,j),Lt.length>0&&ra(Lt,H,j),Nt.length>0&&ra(Nt,H,j),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function sl(E,H,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){const Gt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new li(1,1,{generateMipmaps:!0,type:Gt?ci:gi,minFilter:En,samples:Math.max(4,I.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}const Lt=T.state.transmissionRenderTarget[J.id],Nt=J.viewport||nt;Lt.setSize(Nt.z*L.transmissionResolutionScale,Nt.w*L.transmissionResolutionScale);const It=L.getRenderTarget(),Ht=L.getActiveCubeFace(),Yt=L.getActiveMipmapLevel();L.setRenderTarget(Lt),L.getClearColor(ct),ht=L.getClearAlpha(),ht<1&&L.setClearColor(16777215,.5),L.clear(),ie&&le.render(j);const ue=L.toneMapping;L.toneMapping=Hi;const ge=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),ft===!0&&Wt.setGlobalState(L.clippingPlanes,J),ra(E,j,J),Q.updateMultisampleRenderTarget(Lt),Q.updateRenderTargetMipmap(Lt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Te=0,Ve=H.length;Te<Ve;Te++){const Ne=H[Te],{object:Ie,geometry:Qe,material:zt,group:ai}=Ne;if(zt.side===Qt&&Ie.layers.test(J.layers)){const we=zt.side;zt.side=Ze,zt.needsUpdate=!0,al(Ie,j,J,Qe,zt,ai),zt.side=we,zt.needsUpdate=!0,Gt=!0}}Gt===!0&&(Q.updateMultisampleRenderTarget(Lt),Q.updateRenderTargetMipmap(Lt))}L.setRenderTarget(It,Ht,Yt),L.setClearColor(ct,ht),ge!==void 0&&(J.viewport=ge),L.toneMapping=ue}function ra(E,H,j){const J=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Lt=E.length;K<Lt;K++){const Nt=E[K],{object:It,geometry:Ht,group:Yt}=Nt;let ue=Nt.material;ue.allowOverride===!0&&J!==null&&(ue=J),It.layers.test(j.layers)&&al(It,H,j,Ht,ue,Yt)}}function al(E,H,j,J,K,Lt){k!==null&&K.isNodeMaterial&&k.setObject(E,K),E.onBeforeRender(L,H,j,J,K,Lt),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(L,H,j,J,E,Lt),K.transparent===!0&&K.side===Qt&&K.forceSinglePass===!1?(K.side=Ze,K.needsUpdate=!0,L.renderBufferDirect(j,H,J,K,E,Lt),K.side=gn,K.needsUpdate=!0,L.renderBufferDirect(j,H,J,K,E,Lt),K.side=Qt):L.renderBufferDirect(j,H,J,K,E,Lt),E.onAfterRender(L,H,j,J,K,Lt)}function oa(E,H,j){H.isScene!==!0&&(H=Zt);const J=q.get(E),K=T.state.lights,Lt=T.state.shadowsArray,Nt=K.state.version,It=wt.getParameters(E,K.state,Lt,H,j,T.state.lightProbeGridArray),Ht=wt.getProgramCacheKey(It);let Yt=J.programs;J.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;const ue=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;J.envMap=pt.get(E.envMap||J.environment,ue),J.envMapRotation=J.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Yt===void 0&&(E.addEventListener("dispose",Ii),Yt=new Map,J.programs=Yt);let ge=Yt.get(Ht);if(ge!==void 0){if(J.currentProgram===ge&&J.lightsStateVersion===Nt)return ol(E,It),ge}else It.uniforms=wt.getUniforms(E),k!==null&&E.isNodeMaterial&&k.build(E,j,It),E.onBeforeCompile(It,L),ge=wt.acquireProgram(It,Ht),Yt.set(Ht,ge),J.uniforms=It.uniforms;const Gt=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Gt.clippingPlanes=Wt.uniform),ol(E,It),J.needsLights=af(E),J.lightsStateVersion=Nt,J.needsLights&&(Gt.ambientLightColor.value=K.state.ambient,Gt.lightProbe.value=K.state.probe,Gt.sunLights.value=K.state.sun,Gt.sunLightShadows.value=K.state.sunShadow,Gt.directionalLights.value=K.state.directional,Gt.directionalLightShadows.value=K.state.directionalShadow,Gt.spotLights.value=K.state.spot,Gt.spotLightShadows.value=K.state.spotShadow,Gt.rectAreaLights.value=K.state.rectArea,Gt.ltc_1.value=K.state.rectAreaLTC1,Gt.ltc_2.value=K.state.rectAreaLTC2,Gt.pointLights.value=K.state.point,Gt.pointLightShadows.value=K.state.pointShadow,Gt.hemisphereLights.value=K.state.hemi,Gt.sunShadowMatrix.value=K.state.sunShadowMatrix,Gt.sunShadowCascade.value=K.state.sunShadowCascade,Gt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Gt.spotLightMatrix.value=K.state.spotLightMatrix,Gt.spotLightMap.value=K.state.spotLightMap,Gt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=T.state.lightProbeGridArray.length>0,J.currentProgram=ge,J.uniformsList=null,ge}function rl(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Qa.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function ol(E,H){const j=q.get(E);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function ef(E,H){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let j=0,J=E.length;j<J;j++){const K=E[j];if(K.texture!==null&&K.boundingBox.containsPoint(v))return K}return null}function nf(E,H,j,J,K){H.isScene!==!0&&(H=Zt),Q.resetTextureUnits();const Lt=H.fog,Nt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,It=it===null?L.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:xe.workingColorSpace,Ht=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Yt=pt.get(J.envMap||Nt,Ht),ue=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ge=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Gt=!!j.morphAttributes.position,Te=!!j.morphAttributes.normal,Ve=!!j.morphAttributes.color;let Ne=Hi;J.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ne=L.toneMapping);const Ie=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qe=Ie!==void 0?Ie.length:0,zt=q.get(J),ai=T.state.lights;if(ft===!0&&(gt===!0||E!==et)){const ze=E===et&&J.id===Y;Wt.setState(J,E,ze)}let we=!1;J.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ai.state.version||zt.outputColorSpace!==It||K.isBatchedMesh&&zt.batching===!1||!K.isBatchedMesh&&zt.batching===!0||K.isBatchedMesh&&zt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&zt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&zt.instancing===!1||!K.isInstancedMesh&&zt.instancing===!0||K.isSkinnedMesh&&zt.skinning===!1||!K.isSkinnedMesh&&zt.skinning===!0||K.isInstancedMesh&&zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&zt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&zt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&zt.instancingMorph===!1&&K.morphTexture!==null||zt.envMap!==Yt||J.fog===!0&&zt.fog!==Lt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Wt.numPlanes||zt.numIntersection!==Wt.numIntersection)||zt.vertexAlphas!==ue||zt.vertexTangents!==ge||zt.morphTargets!==Gt||zt.morphNormals!==Te||zt.morphColors!==Ve||zt.toneMapping!==Ne||zt.morphTargetsCount!==Qe||!!zt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,zt.__version=J.version);let xi=zt.currentProgram;we===!0&&(xi=oa(J,H,K),k&&J.isNodeMaterial&&k.onUpdateProgram(J,xi,zt));let Li=!1,rn=!1,Nn=!1;const Pe=xi.getUniforms(),He=zt.uniforms;if(y.useProgram(xi.program)&&(Li=!0,rn=!0,Nn=!0),J.id!==Y&&(Y=J.id,rn=!0),zt.needsLights){const ze=ef(T.state.lightProbeGridArray,K);zt.lightProbeGrid!==ze&&(zt.lightProbeGrid=ze,rn=!0)}if(Li||et!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Pe.setValue(U,"projectionMatrix",E.projectionMatrix),Pe.setValue(U,"viewMatrix",E.matrixWorldInverse);const hn=Pe.map.cameraPosition;hn!==void 0&&hn.setValue(U,_t.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&Pe.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Pe.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),et!==E&&(et=E,rn=!0,Nn=!0)}if(zt.needsLights&&(ai.state.sunShadowMap.length>0&&Pe.setValue(U,"sunShadowMap",ai.state.sunShadowMap,Q),ai.state.directionalShadowMap.length>0&&Pe.setValue(U,"directionalShadowMap",ai.state.directionalShadowMap,Q),ai.state.spotShadowMap.length>0&&Pe.setValue(U,"spotShadowMap",ai.state.spotShadowMap,Q),ai.state.pointShadowMap.length>0&&Pe.setValue(U,"pointShadowMap",ai.state.pointShadowMap,Q)),K.isSkinnedMesh){Pe.setOptional(U,K,"bindMatrix"),Pe.setOptional(U,K,"bindMatrixInverse");const ze=K.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Pe.setValue(U,"boneTexture",ze.boneTexture,Q))}K.isBatchedMesh&&(Pe.setOptional(U,K,"batchingTexture"),Pe.setValue(U,"batchingTexture",K._matricesTexture,Q),Pe.setOptional(U,K,"batchingIdTexture"),Pe.setValue(U,"batchingIdTexture",K._indirectTexture,Q),Pe.setOptional(U,K,"batchingColorTexture"),K._colorsTexture!==null&&Pe.setValue(U,"batchingColorTexture",K._colorsTexture,Q));const on=j.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&W.update(K,j,xi),(rn||zt.receiveShadow!==K.receiveShadow)&&(zt.receiveShadow=K.receiveShadow,Pe.setValue(U,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(He.envMapIntensity.value=H.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=YM()),rn){if(Pe.setValue(U,"toneMappingExposure",L.toneMappingExposure),zt.needsLights&&sf(He,Nn),Lt&&J.fog===!0&&qt.refreshFogUniforms(He,Lt),qt.refreshMaterialUniforms(He,J,Z,G,T.state.transmissionRenderTarget[E.id]),zt.needsLights&&zt.lightProbeGrid){const ze=zt.lightProbeGrid;He.probesSH.value=ze.texture,He.probesMin.value.copy(ze.boundingBox.min),He.probesMax.value.copy(ze.boundingBox.max),He.probesResolution.value.copy(ze.resolution)}Qa.upload(U,rl(zt),He,Q)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Qa.upload(U,rl(zt),He,Q),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Pe.setValue(U,"center",K.center),Pe.setValue(U,"modelViewMatrix",K.modelViewMatrix),Pe.setValue(U,"normalMatrix",K.normalMatrix),Pe.setValue(U,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){const ze=J.uniformsGroups;for(let hn=0,Un=ze.length;hn<Un;hn++){const ll=ze[hn];dt.update(ll,xi),dt.bind(ll,xi)}}return xi}function sf(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.sunLights.needsUpdate=H,E.sunLightShadows.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function af(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(E,H,j){const J=q.get(E);J.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=H,q.get(E.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const j=q.get(E);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,j=0){it=E,$=H,B=j;let J=null,K=!1,Lt=!1;if(E){const It=q.get(E);if(It.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,It.__webglFramebuffer),nt.copy(E.viewport),Ft.copy(E.scissor),X=E.scissorTest,y.viewport(nt),y.scissor(Ft),y.setScissorTest(X),Y=-1;return}else if(It.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(It.__hasExternalTextures)Q.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ue=E.depthTexture;if(It.__boundDepthTexture!==ue){if(ue!==null&&q.has(ue)&&(E.width!==ue.image.width||E.height!==ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}const Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Lt=!0);const Yt=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Yt[H])?J=Yt[H][j]:J=Yt[H],K=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?J=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Yt)?J=Yt[j]:J=Yt,nt.copy(E.viewport),Ft.copy(E.scissor),X=E.scissorTest}else nt.copy(Tt).multiplyScalar(Z).floor(),Ft.copy(St).multiplyScalar(Z).floor(),X=de;if(j!==0&&(J=z),y.bindFramebuffer(U.FRAMEBUFFER,J)&&y.drawBuffers(E,J),y.viewport(nt),y.scissor(Ft),y.setScissorTest(X),K){const It=q.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,It.__webglTexture,j)}else if(Lt){const It=H;for(let Ht=0;Ht<E.textures.length;Ht++){const Yt=q.get(E.textures[Ht]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ht,Yt.__webglTexture,j,It)}}else if(E!==null&&j!==0){const It=q.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,It.__webglTexture,j)}Y=-1};function hl(E){const H=q.get(E);return(H.__readFormat!==E.format||H.__readType!==E.type)&&(H.__readFormat=E.format,H.__readType=E.type,H.__formatReadable=I.textureFormatReadable(E.format),H.__typeReadable=I.textureTypeReadable(E.type)),H}this.readRenderTargetPixels=function(E,H,j,J,K,Lt,Nt,It=0){if(!(E&&E.isWebGLRenderTarget)){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ht=Ht[Nt]),Ht){y.bindFramebuffer(U.FRAMEBUFFER,Ht);try{const Yt=E.textures[It],ue=Yt.format,ge=Yt.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+It);const Gt=hl(Yt);if(Gt.__formatReadable===!1){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-J&&j>=0&&j<=E.height-K&&U.readPixels(H,j,J,K,At.convert(ue),At.convert(ge),Lt)}finally{const Yt=it!==null?q.get(it).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(E,H,j,J,K,Lt,Nt,It=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ht=Ht[Nt]),Ht)if(H>=0&&H<=E.width-J&&j>=0&&j<=E.height-K){y.bindFramebuffer(U.FRAMEBUFFER,Ht);const Yt=E.textures[It],ue=Yt.format,ge=Yt.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+It);const Gt=hl(Yt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.bufferData(U.PIXEL_PACK_BUFFER,Lt.byteLength,U.STREAM_READ),U.readPixels(H,j,J,K,At.convert(ue),At.convert(ge),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Ve=it!==null?q.get(it).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Ve);const Ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await mp(U,Ne,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Lt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Te),U.deleteSync(Ne),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,j=0){const J=Math.pow(2,-j),K=Math.floor(E.image.width*J),Lt=Math.floor(E.image.height*J),Nt=H!==null?H.x:0,It=H!==null?H.y:0;Q.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,Nt,It,K,Lt),y.unbindTexture()},this.copyTextureToTexture=function(E,H,j=null,J=null,K=0,Lt=0){let Nt,It,Ht,Yt,ue,ge,Gt,Te,Ve;const Ne=E.isCompressedTexture?E.mipmaps[Lt]:E.image;if(j!==null)Nt=j.max.x-j.min.x,It=j.max.y-j.min.y,Ht=j.isBox3?j.max.z-j.min.z:1,Yt=j.min.x,ue=j.min.y,ge=j.isBox3?j.min.z:0;else{const He=Math.pow(2,-K);Nt=Math.floor(Ne.width*He),It=Math.floor(Ne.height*He),E.isDataArrayTexture?Ht=Ne.depth:E.isData3DTexture?Ht=Math.floor(Ne.depth*He):Ht=1,Yt=0,ue=0,ge=0}J!==null?(Gt=J.x,Te=J.y,Ve=J.z):(Gt=0,Te=0,Ve=0);const Ie=At.convert(H.format),Qe=At.convert(H.type);let zt;H.isData3DTexture?(Q.setTexture3D(H,0),zt=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Q.setTexture2DArray(H,0),zt=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(H,0),zt=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const ai=y.getParameter(U.UNPACK_ROW_LENGTH),we=y.getParameter(U.UNPACK_IMAGE_HEIGHT),xi=y.getParameter(U.UNPACK_SKIP_PIXELS),Li=y.getParameter(U.UNPACK_SKIP_ROWS),rn=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,Ne.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ne.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Yt),y.pixelStorei(U.UNPACK_SKIP_ROWS,ue),y.pixelStorei(U.UNPACK_SKIP_IMAGES,ge);const Nn=E.isDataArrayTexture||E.isData3DTexture,Pe=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const He=q.get(E),on=q.get(H),ze=q.get(He.__renderTarget),hn=q.get(on.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,ze.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let Un=0;Un<Ht;Un++)Nn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(E).__webglTexture,K,ge+Un),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(H).__webglTexture,Lt,Ve+Un)),U.blitFramebuffer(Yt,ue,Nt,It,Gt,Te,Nt,It,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||q.has(E)){const He=q.get(E),on=q.get(H);y.bindFramebuffer(U.READ_FRAMEBUFFER,P),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let ze=0;ze<Ht;ze++)Nn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.__webglTexture,K,ge+ze):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,He.__webglTexture,K),Pe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,on.__webglTexture,Lt,Ve+ze):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,on.__webglTexture,Lt),K!==0?U.blitFramebuffer(Yt,ue,Nt,It,Gt,Te,Nt,It,U.COLOR_BUFFER_BIT,U.NEAREST):Pe?U.copyTexSubImage3D(zt,Lt,Gt,Te,Ve+ze,Yt,ue,Nt,It):U.copyTexSubImage2D(zt,Lt,Gt,Te,Yt,ue,Nt,It);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Pe?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(zt,Lt,Gt,Te,Ve,Nt,It,Ht,Ie,Qe,Ne.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(zt,Lt,Gt,Te,Ve,Nt,It,Ht,Ie,Ne.data):U.texSubImage3D(zt,Lt,Gt,Te,Ve,Nt,It,Ht,Ie,Qe,Ne):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Lt,Gt,Te,Nt,It,Ie,Qe,Ne.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Lt,Gt,Te,Ne.width,Ne.height,Ie,Ne.data):U.texSubImage2D(U.TEXTURE_2D,Lt,Gt,Te,Nt,It,Ie,Qe,Ne);y.pixelStorei(U.UNPACK_ROW_LENGTH,ai),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,we),y.pixelStorei(U.UNPACK_SKIP_PIXELS,xi),y.pixelStorei(U.UNPACK_SKIP_ROWS,Li),y.pixelStorei(U.UNPACK_SKIP_IMAGES,rn),Lt===0&&H.generateMipmaps&&U.generateMipmap(zt),y.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){$=0,B=0,it=null,y.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}function Ku(a,t=!1){const e=a[0].index!==null,i=new Set(Object.keys(a[0].attributes)),n=new Set(Object.keys(a[0].morphAttributes)),s={},r={},o=a[0].morphTargetsRelative,h=new Le;let l=0;for(let c=0;c<a.length;++c){const f=a[c];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;h.addGroup(l,d,c),l+=d}}if(e){let c=0;const f=[];for(let u=0;u<a.length;++u){const d=a[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+c);c+=a[u].attributes.position.count}h.setIndex(f)}for(const c in s){const f=zc(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;h.setAttribute(c,f)}for(const c in r){const f=r[c][0].length;if(f!==0){h.morphAttributes=h.morphAttributes||{},h.morphAttributes[c]=[];for(let u=0;u<f;++u){const d=[];for(let x=0;x<r[c].length;++x)d.push(r[c][x][u]);const g=zc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;h.morphAttributes[c].push(g)}}}return h}function zc(a){let t,e,i,n=-1,s=0;for(let l=0;l<a.length;++l){const c=a[l];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=c.gpuType),n!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*e}const r=new t(s),o=new ui(r,e,i);let h=0;for(let l=0;l<a.length;++l){const c=a[l];if(c.isInterleavedBufferAttribute){const f=h/e;for(let u=0,d=c.count;u<d;u++)for(let g=0;g<e;g++){const x=c.getComponent(u,g);o.setComponent(u+f,g,x)}}else r.set(c.array,h);h+=c.count*e}return n!==void 0&&(o.gpuType=n),o}function C(a,t,e,i,n,s=0,r=0,o=0){return t.position.set(e,i,n),t.rotation.set(s,r,o),t.castShadow=!1,t.receiveShadow=!1,a.add(t),t}function JM(){const a=new wi;return a.moveTo(0,.05),a.quadraticCurveTo(.08,.02,.16,-.05),a.quadraticCurveTo(.52,-.2,.74,-.56),a.quadraticCurveTo(.84,-.74,.74,-.84),a.quadraticCurveTo(.6,-.64,.38,-.4),a.quadraticCurveTo(.16,-.16,-.03,.03),a.closePath(),new Vi(a,{depth:.045,bevelEnabled:!1})}function is(a,t,e,i){const n=new Pt(1,e,i,2,7,1),s=n.attributes.position;for(let r=0;r<s.count;r++){const o=(s.getY(r)+e/2)/e;s.setX(r,s.getX(r)*(t+(a-t)*o));const h=(1-o)*(1-o);s.setZ(r,s.getZ(r)-h*.2),s.setY(r,s.getY(r)+h*.06)}return n.computeVertexNormals(),n}function po(){const a=new wi,t=.105,e=.034;for(let i=0;i<8;i++){const n=i/8*Math.PI*2,s=i%2===0?t:e,r=Math.cos(n)*s,o=Math.sin(n)*s;i===0?a.moveTo(r,o):a.lineTo(r,o)}return a.closePath(),new Vi(a,{depth:.014,bevelEnabled:!1})}function KM(a,t,e,i,n,s=1,r=15784136){const o=a.mat(new st({color:r,fog:!1}));C(t,new w(a.geo(new Pt(.07*s,.03*s,.04*s)),o),e-.055*s,i,n),C(t,new w(a.geo(new Pt(.07*s,.03*s,.04*s)),o),e+.055*s,i,n)}function $u(a,t,e,i,n){a.clear();const s=ee[t],r=n??s,o=new Bt(3814480).lerp(new Bt(r),n?.68:.55).getHex(),h=e.toon(o,r,.34),l=e.toon(15780016,0,0),c=e.toon(788496,s,.12),f=e.mat(new st({color:s,fog:!1})),u=e.mat(new st({color:1313800})),d=new Jt,g=new Jt,x=new Jt,m=new Jt,p=new Jt,M=new Jt;d.position.set(-.13,.74,0),g.position.set(.13,.74,0),x.position.set(-.32,1.32,.04),m.position.set(.32,1.32,.04),M.position.set(0,1.28,-.1);const _=C(d,new w(e.geo(new oe(.055,.52,4,10)),c),0,-.34,0);C(d,e.outline(_,1.16),0,-.34,0),C(d,new w(e.geo(new oe(.072,.13,3,8)),u),0,-.76,.04,Math.PI/2,0,0);const v=C(g,new w(e.geo(new oe(.055,.52,4,10)),c),0,-.34,0);C(g,e.outline(v,1.16),0,-.34,0),C(g,new w(e.geo(new oe(.072,.13,3,8)),u),0,-.76,.04,Math.PI/2,0,0);const b=C(a,new w(e.geo(new Pt(.36,.16,.2)),c),0,.76,0),T=C(a,new w(e.geo(new oe(.18,.38,5,12)),h),0,1.1,0);T.scale.set(1.08,1,.86),C(a,e.outline(T,1.12),0,1.1,0).scale.set(1.08*1.12,1.12,.86*1.12),C(a,new w(e.geo(new oe(.1,.34,4,10)),h),0,1.31,0,0,0,Math.PI/2),C(a,new w(e.geo(new Mt(.105,10,8)),h),-.3,1.32,.02),C(a,new w(e.geo(new Mt(.105,10,8)),h),.3,1.32,.02),C(a,new w(e.geo(new Ut(.068,.082,.12,8)),l),0,1.38,.02),C(a,new w(e.geo(new Pt(.38,.07,.24)),u),0,.87,0),C(a,new w(e.geo(new Pt(.09,.09,.06)),f),0,.87,.13),C(a,new w(e.geo(new jt(.16,.03,8,12)),f),0,1.14,.14,Math.PI/2,0,0),C(x,new w(e.geo(new oe(.045,.48,4,10)),h),0,-.28,0,.15,0,.28),C(x,new w(e.geo(new Mt(.06,10,8)),u),.02,-.54,.04),C(m,new w(e.geo(new oe(.045,.42,4,10)),h),0,-.24,0,.2,0,-.35),C(m,new w(e.geo(new Mt(.055,10,8)),u),.06,-.48,.02);const R=C(a,new w(e.geo(new Mt(.2,14,12)),l),0,1.56,.05);C(a,e.outline(R,1.12),0,1.56,.05);const S=new w(e.geo(new Mt(.3,16,12,0,Math.PI*2,0,Math.PI*.7)),h);C(a,S,0,1.6,-.02,.5,0,0),C(a,e.outline(S,1.1),0,1.6,-.02,.5,0,0),C(a,new w(e.geo(new jt(.21,.035,6,14)),h),0,1.6,.06,1.15,0,0),C(a,new w(e.geo(new Vt(.07,.22,6)),h),0,1.86,-.18,-.5,0,0),KM(e,a,0,1.54,.24,1.05,s);const A=new w(e.geo(is(.42,.72,.95,.07)),h);C(M,A,0,-.35,-.06,.18,0,0),C(M,e.outline(A,1.05),0,-.35,-.06,.18,0,0),C(M,new w(e.geo(is(.16,.3,.8,.05)),h),-.24,-.4,-.02,.22,0,.18),C(M,new w(e.geo(is(.16,.3,.8,.05)),h),.24,-.4,-.02,.22,0,-.18),p.position.set(.08,-.36,.05);const L=new w(e.geo(new Ut(.012,.012,.28,8)),u);L.position.set(0,-.08,0);const F=new w(e.geo(new Pt(.12,.14,.12)),f);F.position.set(0,-.26,0);const k=new w(e.geo(new Mt(.06,10,8)),f);k.position.set(0,-.26,0);const z=new w(e.geo(new jt(.08,.015,8,10)),f);z.position.set(0,-.18,0);const P=new _s(s,1.1,7,2);if(P.position.set(0,-.26,0),t!=="reaper"&&p.add(L,F,k,z,P),t==="wanderer"&&i==="arrowbolt"?(p.scale.setScalar(.55),p.position.set(-.22,1.28,-.14),a.add(p)):t==="wanderer"?x.add(p):t==="arcanist"?(p.scale.setScalar(.7),x.add(p)):t==="hunter"?(p.scale.setScalar(.55),p.position.set(.16,1.32,-.18),a.add(p)):t==="knight"&&(p.scale.setScalar(.5),p.position.set(-.2,1.3,-.12),a.add(p)),a.add(d,g,x,m,M,b,T),t==="wanderer"&&i==="arrowbolt"){C(M,new w(e.geo(is(.5,.88,1.05,.06)),h),0,-.42,-.08,.22,0,0),C(x,new w(e.geo(new Ut(.026,.03,.14,6)),c),-.02,-.46,.08,2.9,0,0),C(x,new w(e.geo(new Pt(.1,.032,.032)),u),-.02,-.53,.1,2.9,0,0);const B=C(x,new w(e.geo(new Pt(.045,.3,.014)),f),-.02,-.68,.12,2.9,0,0);C(x,e.outline(B,1.16),-.02,-.68,.12,2.9,0,0),C(a,new w(e.geo(new Pt(.06,.24,.05)),u),-.24,.8,.06,0,0,.28)}else if(t==="wanderer"){C(a,new w(e.geo(new Pt(.22,.16,.12)),c),.22,.92,-.04),C(M,new w(e.geo(is(.5,.88,1.05,.06)),h),0,-.42,-.08,.22,0,0);const B=C(m,new w(e.geo(po()),f),.02,-.46,.12,Math.PI/2,0,0);C(m,e.outline(B,1.2),.02,-.46,.12,Math.PI/2,0,0),i==="glaive"&&(B.scale.setScalar(1.7),C(m,new w(e.geo(new jt(.07,.018,6,14)),u),.02,-.46,.12,Math.PI/2,0,0)),C(a,new w(e.geo(po()),f),.07,.95,.15,0,.35,0).scale.setScalar(.66),C(a,new w(e.geo(po()),f),-.08,.93,.15,0,-.3,0).scale.setScalar(.58),C(g,new w(e.geo(new Pt(.1,.05,.1)),u),.085,-.26,.05),C(g,new w(e.geo(new Ut(.022,.026,.13,6)),c),.095,-.11,.055,0,0,.1),C(g,new w(e.geo(new Pt(.11,.028,.038)),c),.095,-.2,.055);const it=C(g,new w(e.geo(new Pt(.05,.26,.016)),f),.095,-.34,.055);C(g,e.outline(it,1.14),.095,-.34,.055)}else if(t==="arcanist")if(S.scale.set(1.09,1.12,1.12),C(a,new w(e.geo(new ye(.095,0)),f),0,2.06,.02),C(a,new w(e.geo(new jt(.28,.025,8,16)),f),0,1.18,.1,Math.PI/2),i==="prismshard"){const B=C(m,new w(e.geo(new Ut(.03,.036,.85,7)),u),.03,-.1,.12,.06,0,.1);C(m,e.outline(B,1.1),.03,-.1,.12,.06,0,.1),C(m,new w(e.geo(new Ut(.036,.042,.5,7)),u),.03,.42,.12,-.14,0,.1);for(const[it,Y,et]of[[-.06,.1,.6],[.18,.14,-.5],[.36,.1,.7]])C(m,new w(e.geo(new Vt(.022,.11,5)),u),.03,it,Y,0,0,et);for(const[it,Y,et,nt]of[[.72,0,.15,1],[.62,.07,.55,.72],[.66,-.06,-.45,.66]]){const Ft=C(m,new w(e.geo(new Vt(.05,.24,4)),f),.03+Y,it,.12,0,0,et);Ft.scale.setScalar(nt),C(m,e.outline(Ft,1.16),.03+Y,it,.12,0,0,et).scale.setScalar(nt)}C(m,new w(e.geo(new Ut(.045,.05,.07,8)),c),.03,-.24,.12,.06,0,.1)}else{C(m,new w(e.geo(new Ut(.028,.034,1.55,8)),c),.03,-.08,.12,0,0,.07);const B=C(m,new w(e.geo(new ye(.125,0)),f),.08,.7,.12,0,0,.07);if(C(m,e.outline(B,1.18),.08,.7,.12,0,0,.07),C(m,new w(e.geo(new jt(.11,.016,6,14)),f),.08,.7,.12,Math.PI/2,0,.07),C(m,new w(e.geo(new Ut(.045,.05,.07,8)),c),.07,.58,.12,0,0,.07),i==="frostorbit"){const it=e.mat(new st({color:12577279,fog:!1}));for(let Y=0;Y<3;Y++){const et=Y/3*Math.PI*2;C(m,new w(e.geo(new ye(.05,0)),it),.08+Math.cos(et)*.2,.7+Math.sin(et)*.08,.12+Math.sin(et)*.2).scale.set(1,1.7,1)}}}else if(t==="reaper"&&i==="chainsickle"){P.intensity=.45,P.distance=4,P.position.set(0,1.08,.2),a.add(P),C(x,new w(e.geo(new Ut(.026,.03,.4,7)),c),-.02,-.42,.12,.3,0,.15);const B=e.mat(new st({color:11563263,fog:!1})),it=C(x,new w(e.geo(new jt(.2,.032,6,16,Math.PI*1.1)),B),-.02,-.2,.22,0,Math.PI/2,.5);C(x,e.outline(it,1.14),-.02,-.2,.22,0,Math.PI/2,.5),C(x,new w(e.geo(new jt(.2,.09,6,16,Math.PI*1.1)),e.mat(new st({color:10116351,transparent:!0,opacity:.3,depthWrite:!1,fog:!1,blending:pe}))),-.02,-.2,.22,0,Math.PI/2,.5);for(let Y=0;Y<4;Y++)C(a,new w(e.geo(new jt(.075,.016,5,10)),u),-.24,.98-Y*.07,.06,Math.PI/2+Y%2*.5,0,0)}else if(t==="reaper"&&i==="twindaggers"){P.intensity=.45,P.distance=4,P.position.set(0,1.08,.2),a.add(P);for(const B of[x,m]){C(B,new w(e.geo(new Ut(.026,.03,.15,6)),c),-.02,-.42,.1,1.2,0,0),C(B,new w(e.geo(new Pt(.09,.03,.03)),u),-.02,-.35,.14,1.2,0,0);const it=C(B,new w(e.geo(new Pt(.045,.5,.016)),f),-.02,-.02,.2,1.2,0,0);C(B,e.outline(it,1.14),-.02,-.02,.2,1.2,0,0)}}else if(t==="reaper"){P.intensity=.45,P.distance=4,P.position.set(0,1.08,.2),a.add(P),C(x,new w(e.geo(new Ut(.03,.03,1.45,8)),c),-.04,-.42,.14,.28,0,.2);const B=C(x,new w(e.geo(JM()),f),-.02,.28,.22,.15,.4,-.9);C(x,e.outline(B,1.12),-.02,.28,.22,.15,.4,-.9),C(a,new w(e.geo(new Pt(.5,.1,.08)),f),0,1.05,.12)}else if(t==="hunter"){const B=new Jt;B.position.set(-.06,-.54,-.58),x.add(B),C(B,new w(e.geo(new jt(.62,.028,6,24,1.75)),f),0,0,0,0,-Math.PI/2,-.875),C(B,new w(e.geo(new Ut(.008,.008,.95,5)),u),0,0,.397),C(B,new w(e.geo(new Ut(.038,.038,.2,6)),c),0,0,.61),C(B,new w(e.geo(new Ut(.009,.009,.7,5)),c),0,0,.62,Math.PI/2,0,0),C(B,new w(e.geo(new Vt(.03,.1,6)),f),0,0,1,Math.PI/2,0,0),C(a,new w(e.geo(new Pt(.16,.38,.12)),c),-.18,1.18,-.16),C(a,new w(e.geo(new Vt(.04,.16,8)),f),-.18,1.4,-.16)}else if(t==="knight"){const B=new Jt;if(B.position.set(.05,-.46,.12),B.rotation.set(.15,0,-.32),m.add(B),i==="warhammer"){C(B,new w(e.geo(new Ut(.034,.04,1.05,8)),c),0,.3,0);const it=C(B,new w(e.geo(new Pt(.44,.22,.22)),f),0,.86,0);C(B,e.outline(it,1.1),0,.86,0),C(B,new w(e.geo(new Pt(.48,.05,.25)),u),0,.86,0)}else{C(B,new w(e.geo(new Ut(.032,.038,.26,8)),c),0,-.12,0),C(B,new w(e.geo(new Mt(.045,8,6)),c),0,-.26,0),C(B,new w(e.geo(new Pt(.32,.055,.07)),f),0,.04,0);const it=C(B,new w(e.geo(new Pt(.1,.92,.045)),f),0,.53,0);C(B,e.outline(it,1.1),0,.53,0),C(B,new w(e.geo(new Vt(.052,.16,4)),f),0,1.05,0,0,Math.PI/4,0)}for(const it of[-1,1])C(a,new w(e.geo(new Mt(.15,10,8)),c),it*.33,1.3,.02).scale.set(1.05,.72,1.05);C(M,new w(e.geo(is(.46,.78,.95,.06)),h),0,-.38,-.08,.2,0,0)}const O=new w(e.geo(new Xe(.44,20)),e.mat(new st({color:1313304,transparent:!0,opacity:.62})));O.rotation.x=-Math.PI/2,O.position.y=.02,a.add(O);const $=new w(e.geo(new jt(.7,.045,8,18,Math.PI*.9)),e.mat(new st({color:s,transparent:!0,opacity:.85,fog:!1,side:Qt})));return $.position.set(0,1.05,.35),$.rotation.x=Math.PI/2,t==="reaper"&&($.visible=!1,a.add($)),a.traverse(B=>{B instanceof w&&(B.castShadow=!0)}),{legL:d,legR:g,armL:x,armR:m,lamp:p,cape:M,lantern:P,slash:$}}function Fc(a,t,e,i){const n=Ei[a].color,s=new Jt,r=a==="wisp"?t>=5?1.15:1:.62+t*.16,o=e.mat(new st({color:n,fog:!1,transparent:!0,opacity:a==="shade"?.7:.95})),h=e.toon(3814480,n,.35+t*.12);if(a==="wisp"){const c=new w(e.geo(new Mt(.1+t*.04,12,10)),o);c.position.y=.22+t*.06;const f=new _s(n,.6+t*.4,4+t*1.4,2);if(f.position.y=c.position.y,s.add(c),t===0){const u=new w(e.geo(new Vt(.06,.16,8)),o);u.position.y=.36,s.add(u)}if(t>=1){const u=new w(e.geo(new Pt(.18+t*.02,.2,.18)),o);u.position.y=.22;const d=new w(e.geo(new jt(.14,.02,8,12)),o);d.position.y=.34;const g=new w(e.geo(new Ut(.015,.015,.22,8)),h);g.position.y=.46,s.add(u,d,g)}if(t>=2){const u=new w(e.geo(new oe(.12,.22,4,10)),h);u.position.y=.55;const d=new w(e.geo(new Mt(.18,12,10,0,Math.PI*2,0,Math.PI*.62)),h);d.position.set(0,.78,-.02),d.rotation.x=.4;const g=new w(e.geo(new Pt(.08,.025,.03)),o);g.position.set(0,.74,.14),s.add(u,d,e.outline(d,1.08),g)}if(t>=3){const u=new w(e.geo(new Pt(.34,.5,.05)),h);u.position.set(0,.48,-.14),u.rotation.x=.2;const d=new w(e.geo(new jt(.32,.03,8,16)),o);d.position.y=.4,d.rotation.x=Math.PI/2,s.add(u,d)}if(t>=4){const u=new w(e.geo(new oe(.14,.85,4,10)),h);u.position.set(-.2,.55,0),u.rotation.z=Math.PI/2.5;const d=new w(e.geo(new Mt(.16,10,8)),h);d.position.set(.38,.7,0);const g=new w(e.geo(new Vt(.08,.22,8)),o);g.position.set(.54,.66,0),g.rotation.z=-Math.PI/2;const x=new w(e.geo(new Ge(.7,.34)),o);x.position.set(-.05,.78,.16),x.rotation.set(-.35,.15,.45);const m=x.clone();m.position.z=-.16,m.rotation.z=-.45,s.add(u,d,g,x,m,e.outline(u,1.08))}}else if(a==="summon"){const c=new w(e.geo(new ye(.14+t*.03,0)),o);c.position.y=.32,s.add(c,e.outline(c,1.1));for(let f=0;f<1+t;f++){const u=new w(e.geo(new jt(.2+f*.08,.02,8,14)),o);u.position.y=.32,u.rotation.x=Math.PI/2+f*.4,s.add(u)}if(t>=2)for(let f=0;f<3;f++){const u=f/3*Math.PI*2,d=new w(e.geo(new ye(.05,0)),o);d.position.set(Math.cos(u)*.32,.32+Math.sin(u*2)*.06,Math.sin(u)*.32),s.add(d)}if(t>=3){const f=new w(e.geo(new Vt(.12,.22,8)),h);f.position.y=.58,s.add(f)}if(t>=4)for(let f=0;f<5;f++){const u=f/5*Math.PI*2,d=new w(e.geo(new Vt(.03,.18,5)),o);d.position.set(Math.cos(u)*.14,.76,Math.sin(u)*.14),s.add(d)}}else if(a==="kestrel"){const c=new w(e.geo(new oe(.08,.2+t*.03,4,10)),h);c.position.y=.4,c.rotation.z=Math.PI/2;const f=new w(e.geo(new Mt(.08,10,8)),h);f.position.set(.2+t*.015,.45,0);const u=new w(e.geo(new Vt(.03,.1,6)),o);u.position.set(.3+t*.015,.44,0),u.rotation.z=-Math.PI/2;const d=.34+t*.1,g=e.geo(new Vt(.07,d,3)),x=new w(g,o);x.position.set(0,.44,d/2),x.rotation.x=Math.PI/2;const m=new w(g,o);if(m.position.set(0,.44,-d/2),m.rotation.x=-Math.PI/2,s.add(c,f,u,x,m,e.outline(c,1.1)),t>=1){const p=new w(e.geo(new Vt(.06,.18+t*.03,4)),o);p.position.set(-.22-t*.02,.41,0),p.rotation.z=Math.PI/2,s.add(p)}if(t>=2){const p=new w(e.geo(new Vt(.025,.12,5)),o);p.position.set(.18,.55,0),p.rotation.z=.5,s.add(p)}if(t>=4){const p=new w(e.geo(new jt(.42,.02,8,18)),o);p.position.y=.42,p.rotation.x=Math.PI/2,s.add(p)}}else if(a==="sentinel"){const c=new w(e.geo(new Pt(.05,.42+t*.05,.1)),o);c.position.y=.36;const f=new w(e.geo(new Vt(.05,.1,4)),o);f.position.y=.1-t*.025,f.rotation.x=Math.PI;const u=new w(e.geo(new Pt(.06,.04,.3)),h);u.position.y=.6+t*.025;const d=new w(e.geo(new Ut(.025,.025,.14,8)),h);if(d.position.y=.68+t*.025,s.add(c,f,u,d,e.outline(u,1.15)),t>=1){const g=new w(e.geo(new Xe(.14+t*.02,6)),h);g.position.set(0,.42,-.14),s.add(g)}if(t>=2){const g=new w(e.geo(new jt(.16,.015,8,18)),o);g.position.y=.86+t*.025,g.rotation.x=Math.PI/2,s.add(g)}if(t>=3){const g=c.clone();g.position.set(0,.36,.2),g.rotation.x=.35,s.add(g)}if(t>=4){const g=new w(e.geo(new Ge(.5,.26)),o);g.position.set(0,.58,.28),g.rotation.set(.5,0,.3);const x=g.clone();x.position.z=-.28,x.rotation.set(-.5,0,.3),s.add(g,x)}}else{const c=new w(e.geo(new oe(.12+t*.02,.28+t*.06,5,12)),o);c.position.y=.38;const f=new w(e.geo(new Vt(.1+t*.02,.36+t*.06,8)),o);f.position.y=.08,f.rotation.x=Math.PI;const u=new w(e.geo(new Mt(.03,8,8)),o);u.position.set(-.05,.5,.12);const d=u.clone();if(d.position.x=.05,s.add(c,f,u,d),t>=1)for(const g of[-1,1]){const x=new w(e.geo(new Vt(.04,.26,6)),o);x.position.set(g*.14,.3,-.04),x.rotation.z=g*.6,s.add(x)}if(t>=2){const g=new w(e.geo(new Mt(.18,12,10,0,Math.PI*2,0,Math.PI*.6)),h);g.position.set(0,.55,-.02),g.rotation.x=.4,s.add(g)}if(t>=3){const g=new w(e.geo(new Ge(.4,.5)),o);g.position.set(0,.42,-.16),s.add(g)}if(t>=4){const g=new w(e.geo(new jt(.3,.03,8,14)),o);g.position.y=.4,s.add(g)}}const l=new w(e.geo(new Xe(.22+t*.04,12)),e.mat(new st({color:0,transparent:!0,opacity:.25})));return l.rotation.x=-Math.PI/2,s.add(l),s.scale.setScalar(r),s}function $M(a){try{a.updateMatrixWorld(!0);const t=new Map,e=[];let i,n=!1;a.traverse(r=>{if(!(r instanceof w)||!r.geometry)return;const o=Array.isArray(r.material)?r.material[0]:r.material;if(o.side===Ze)return;const h=r.geometry.clone();h.applyMatrix4(r.matrixWorld);let l=o;if(!o.transparent&&(o instanceof Us||o instanceof st)){l=o instanceof Us?"toon":"basic",o instanceof Us&&((!i||o.emissiveIntensity>i.emissiveIntensity)&&(i=o),o.side===Qt&&(n=!0));const f=h.getAttribute("position").count,u=new Float32Array(f*3),d=o.color;for(let g=0;g<f;g++)u[g*3]=d.r,u[g*3+1]=d.g,u[g*3+2]=d.b;h.setAttribute("color",new ui(u,3))}const c=t.get(l)??[];c.push(h),t.set(l,c),e.push(h)});const s=new Jt;for(const[r,o]of t){const h=r==="toon"?new Us({vertexColors:!0,gradientMap:(i==null?void 0:i.gradientMap)??null,emissive:(i==null?void 0:i.emissive)??new Bt(0),emissiveIntensity:(i==null?void 0:i.emissiveIntensity)??0,side:n?Qt:gn}):r==="basic"?new st({vertexColors:!0,fog:!1}):r;let l=o;l.some(u=>u.index)&&l.some(u=>!u.index)&&(l=l.map(u=>{if(!u.index)return u;const d=u.toNonIndexed();return e.push(d),d}));const c=l.length===1?l[0].clone():Ku(l,!1);if(!c)continue;c.computeBoundingSphere();const f=new w(c,h);f.castShadow=!1,f.receiveShadow=!1,s.add(f)}for(const r of e)r.dispose();return s.children.length?s:a}catch{return a}}const fs={};function Nc(){for(const a of Object.values(fs))a.traverse(t=>{t instanceof w&&(t.geometry.dispose(),t.material.dispose())});for(const a of Object.keys(fs))delete fs[a]}function QM(a,t=1){const e=[new ot(.02*t,0),new ot(.14*t,.06*t),new ot(.3*t,.22*t),new ot(.38*t,.52*t),new ot(.32*t,.88*t),new ot(.22*t,1.18*t),new ot(.15*t,1.38*t)];return a.geo(new vr(e,22))}const jM={zombie:3028521,ghost:2893896,wraith:3808562,wight:3024432,cinder:3808282,acolyte:2761030,binder:1912370,gazer:1845298,husk:3811874,bulwark:2239034,anchor:2761024,skitter:2758690,mire:2763804,bell:2043948,burrower:3811868,censer:2893862,weaver:1842228,tidecaller:1190458,moth:3813408,mirror:9082544,shell:4860474,siren:1324602};function tv(a,t){const e=fs[a];if(e)return e.clone();const i=new Jt,n=Se[a],s=jM[a],r=t.toon(s,n,.08),o=t.toon(new Bt(s).multiplyScalar(.6).getHex(),0,0),h=t.toon(new Bt(s).lerp(new Bt(n),.35).getHex(),n,.12),l=t.toon(13616308,0,0),c=t.mat(new st({color:n,fog:!1})),f=t.mat(new st({color:n,fog:!1,transparent:!0,opacity:.45,depthWrite:!1})),u=t.toon(s,n,.14);u.transparent=!0,u.opacity=.88,u.side=Qt;const d=a==="wight"||a==="husk"?.72:a==="cinder"||a==="skitter"?.36:a==="mire"?.62:a==="bulwark"||a==="wraith"?.56:.48;C(i,new w(t.geo(new Xe(d,20)),t.mat(new st({color:1313304,transparent:!0,opacity:.62,depthWrite:!1}))),0,.02,0,-Math.PI/2),C(i,new w(t.geo(new Fe(d*.86,d,28)),f),0,.03,0,-Math.PI/2);const g=(p,M,_=1,v=.07)=>{C(i,new w(t.geo(new Mt(.045*_,8,6)),c),-v*_,p,M),C(i,new w(t.geo(new Mt(.045*_,8,6)),c),v*_,p,M)};if(a==="zombie"){C(i,new w(t.geo(new oe(.1,.4,4,10)),o),-.14,.32,0,.15),C(i,new w(t.geo(new oe(.1,.36,4,10)),o),.14,.3,-.04,-.25),C(i,new w(t.geo(new oe(.26,.42,4,12)),r),0,.9,.06,.55),C(i,new w(t.geo(new Pt(.56,.5,.1)),h),0,.92,-.14,.45),C(i,new w(t.geo(new Mt(.2,14,10)),r),.04,1.16,.34).scale.set(1,.92,1.05),C(i,new w(t.geo(new Pt(.16,.06,.1)),l),.04,1.03,.48,.3),g(1.2,.52,1.1);for(const M of[-1,1])C(i,new w(t.geo(new oe(.075,.46,4,10)),r),M*.3,1,.36,1.25,0,M*.12),C(i,new w(t.geo(new Vt(.07,.18,6)),c),M*.32,.98,.7,Math.PI/2);C(i,new w(t.geo(new Mt(.07,8,6)),c),-.1,1.08,-.16),C(i,new w(t.geo(new Mt(.05,8,6)),c),.12,.94,-.18)}else if(a==="wight"){for(const M of[-1,1])C(i,new w(t.geo(new Ut(.16,.2,.7,10)),o),M*.2,.35,0),C(i,new w(t.geo(new Mt(.28,14,10)),h),M*.52,1.52,0),C(i,new w(t.geo(new oe(.12,.6,4,10)),r),M*.6,1.05,.08,.2,0,M*.18),C(i,new w(t.geo(new Vt(.08,.3,6)),c),M*.56,1.8,0,0,0,-M*.3);C(i,new w(t.geo(new Ut(.5,.36,1,10)),r),0,1.2,0).scale.set(1,1,.8),C(i,new w(t.geo(new ye(.16,0)),c),0,1.3,.34),C(i,new w(t.geo(new Mt(.22,14,10)),o),0,1.86,.06),g(1.88,.26,1.2);for(let M=0;M<5;M++){const _=M/5*Math.PI*2;C(i,new w(t.geo(new Vt(.05,.26,5)),c),Math.cos(_)*.17,2.1,.06+Math.sin(_)*.17)}}else if(a==="husk"){C(i,new w(t.geo(new oe(.16,.26,4,10)),o),-.18,.3,0),C(i,new w(t.geo(new oe(.16,.26,4,10)),o),.18,.3,0),C(i,new w(t.geo(new Mt(.5,16,12)),r),0,.92,.02).scale.set(1.35,.95,1.05),C(i,new w(t.geo(new Mt(.17,12,10)),o),0,.98,.48).scale.set(1,.85,1),g(1,.63,.9);for(let v=0;v<4;v++)C(i,new w(t.geo(new Vt(.08,.32,6)),h),0,1.36-v*.08,.2-v*.2,-.5-v*.2),C(i,new w(t.geo(new Mt(.035,6,5)),c),0,1.52-v*.1,.25-v*.24);C(i,new w(t.geo(new oe(.1,.34,4,10)),r),-.62,.66,.1,.3,0,.25),C(i,new w(t.geo(new oe(.17,.4,4,10)),r),.66,.74,.18,.6,0,-.2),C(i,new w(t.geo(new Mt(.28,14,10)),h),.72,.52,.5).scale.set(1.1,.9,1.1);for(let v=0;v<3;v++)C(i,new w(t.geo(new Mt(.06,8,6)),c),.62+v*.1,.62,.74)}else if(a==="bulwark")C(i,new w(t.geo(new oe(.13,.32,4,10)),o),-.14,.32,0),C(i,new w(t.geo(new oe(.13,.32,4,10)),o),.14,.32,0),C(i,new w(t.geo(new Ut(.34,.28,.72,10)),r),0,.92,-.04),C(i,new w(t.geo(new Ut(.2,.22,.32,10)),h),0,1.44,0).scale.set(1,1,.95),C(i,new w(t.geo(new Pt(.26,.04,.04)),c),0,1.46,.21),C(i,new w(t.geo(new Vt(.06,.24,6)),h),0,1.72,0),C(i,new w(t.geo(new oe(.08,.36,4,10)),r),-.42,.9,0,.2,0,.3),C(i,new w(t.geo(new Ut(.03,.03,.7,6)),l),-.52,.8,.12,.9),C(i,new w(t.geo(new Mt(.12,10,8)),h),-.52,.66,.46),C(i,new w(t.geo(new Pt(.86,1.1,.1)),o),.04,.84,.42),C(i,new w(t.geo(new Pt(.94,.07,.14)),c),.04,1.42,.42),C(i,new w(t.geo(new Pt(.94,.07,.14)),c),.04,.28,.42),C(i,new w(t.geo(new Pt(.07,1.1,.14)),c),-.43,.84,.42),C(i,new w(t.geo(new Pt(.07,1.1,.14)),c),.51,.84,.42),C(i,new w(t.geo(new ye(.12,0)),c),.04,.9,.5);else if(a==="anchor"){C(i,new w(t.geo(new Ut(.5,.58,.24,8)),o),0,.12,0),C(i,new w(t.geo(new Ut(.36,.44,.22,8)),r),0,.34,0),C(i,new w(t.geo(new ye(.28,0)),c),0,1.15,0).scale.set(.8,1.6,.8),C(i,new w(t.geo(new jt(.5,.035,6,20)),h),0,1.15,0,Math.PI/2);for(let M=0;M<3;M++){const _=M/3*Math.PI*2;C(i,new w(t.geo(new ye(.1,0)),c),Math.cos(_)*.62,.7+M*.12,Math.sin(_)*.62)}C(i,new w(t.geo(new Fe(3.38,3.5,48)),f),0,.035,0,-Math.PI/2)}else if(a==="cinder"){C(i,new w(t.geo(new Mt(.26,14,12)),c),0,.42,0);for(let p=0;p<7;p++){const M=p/7*Math.PI*2,_=C(i,new w(t.geo(new Pt(.2,.26,.06)),r),Math.cos(M)*.28,.42+Math.sin(p*1.7)*.1,Math.sin(M)*.28,0,-M+Math.PI/2,0);_.rotation.x=Math.sin(p*2.3)*.4}C(i,new w(t.geo(new Mt(.2,10,8,0,Math.PI*2,0,Math.PI*.45)),r),0,.5,0),C(i,new w(t.geo(new Vt(.07,.24,6)),c),0,.78,0),g(.46,.28,.8,.08)}else if(a==="gazer"){const p=new Jt;p.position.y=1,p.rotation.x=-.95,i.add(p),C(p,new w(t.geo(new Mt(.37,18,14,0,Math.PI*2,0,Math.PI*.5)),r),0,0,-.02,-Math.PI/2),C(p,new w(t.geo(new Mt(.32,16,12)),t.mat(new st({color:15398644,fog:!1}))),0,0,.02),C(p,new w(t.geo(new Xe(.18,20)),c),0,0,.345),C(p,new w(t.geo(new Xe(.08,14)),t.mat(new st({color:658452}))),0,0,.35),C(p,new w(t.geo(new jt(.34,.05,6,16,Math.PI)),h),0,.02,.06,.3);for(let M=0;M<4;M++){const _=M/4*Math.PI*2+.4;C(i,new w(t.geo(new Vt(.06,.5,6)),o),Math.cos(_)*.18,.55,Math.sin(_)*.18,Math.PI+Math.sin(_)*.3,0,Math.cos(_)*.3)}for(let M=0;M<3;M++){const _=M/3*Math.PI*2;C(i,new w(t.geo(new ye(.07,0)),c),Math.cos(_)*.52,1.1,Math.sin(_)*.52)}}else if(a==="skitter"){C(i,new w(t.geo(new Mt(.2,12,10)),r),0,.26,-.04).scale.set(1,.75,1.25),C(i,new w(t.geo(new Mt(.12,10,8)),o),0,.26,.22),C(i,new w(t.geo(new Mt(.07,8,6)),c),0,.38,-.12),g(.3,.32,.7,.06),C(i,new w(t.geo(new Mt(.03,6,5)),c),0,.33,.33);for(let M=0;M<3;M++)for(const _ of[-1,1]){const v=.16-M*.16;C(i,new w(t.geo(new oe(.025,.36,3,6)),o),_*.28,.24,v,0,0,_*1.05),C(i,new w(t.geo(new oe(.02,.26,3,6)),o),_*.46,.12,v+(M-1)*.05,0,0,-_*.35)}}else if(a==="mire"){C(i,new w(t.geo(new Mt(.58,18,14)),u),0,.38,0).scale.set(1,.68,1),C(i,new w(t.geo(new Mt(.34,14,10)),r),0,.64,.08);for(let _=0;_<3;_++){const v=_/3*Math.PI*2+.3;C(i,new w(t.geo(new Mt(.12,10,8)),c),Math.cos(v)*.3,.4,Math.sin(v)*.3)}for(let _=0;_<5;_++){const v=_/5*Math.PI*2;C(i,new w(t.geo(new Mt(.05+_%2*.03,8,6)),c),Math.cos(v)*.5,.2+_%3*.12,Math.sin(v)*.5)}g(.8,.36,1.1,.09),C(i,new w(t.geo(new Xe(.72,20)),f),0,.04,0,-Math.PI/2).scale.set(1,.85,1)}else if(a==="bell"){const p=[new ot(.06,1),new ot(.18,.98),new ot(.26,.86),new ot(.3,.62),new ot(.36,.44),new ot(.48,.3),new ot(.52,.26)],M=C(i,new w(t.geo(new vr(p,20)),r),0,.5,0);M.material.side=Qt,C(i,new w(t.geo(new jt(.5,.045,8,24)),c),0,.78,0,Math.PI/2),C(i,new w(t.geo(new jt(.31,.03,6,20)),h),0,1.14,0,Math.PI/2),C(i,new w(t.geo(new Mt(.14,12,10)),c),0,.72,0),C(i,new w(t.geo(new Ut(.025,.025,.3,6)),h),0,.92,0),C(i,new w(t.geo(new jt(.12,.035,6,14)),h),0,1.58,0),C(i,new w(t.geo(new Pt(.03,.34,.02)),c),.22,1.2,.2,0,.8,.3),g(1.26,.27,.9,.08)}else if(a==="burrower"){C(i,new w(t.geo(new Mt(.42,16,12)),r),0,.46,0).scale.set(1.15,.8,1.3),C(i,new w(t.geo(new Vt(.16,.42,10)),o),0,.5,.56,Math.PI/2).scale.set(1,1,.8),C(i,new w(t.geo(new Mt(.07,8,6)),c),0,.52,.78),g(.7,.42,.9,.12);for(const _ of[-1,1]){C(i,new w(t.geo(new oe(.08,.28,4,8)),r),_*.36,.34,.36,.9,0,_*.3);for(let v=0;v<3;v++)C(i,new w(t.geo(new Vt(.035,.2,5)),c),_*(.34+v*.06),.16,.58,Math.PI/2+.4,0,0)}for(let _=0;_<5;_++)C(i,new w(t.geo(new Vt(.06,.26,5)),h),0,.82-_*.04,.3-_*.18,-.6-_*.15)}else if(a==="censer"){C(i,new w(t.geo(new Vt(.46,1.2,12)),r),0,.6,0).scale.set(1,1,.9),C(i,new w(t.geo(new oe(.2,.3,4,10)),r),0,1.25,0),C(i,new w(t.geo(new Vt(.28,.5,10)),o),0,1.62,-.02,-.15).scale.set(1,1,1.1),g(1.5,.2,.9),C(i,new w(t.geo(new oe(.06,.46,4,8)),r),.3,1.12,.2,.9,0,-.3),C(i,new w(t.geo(new Ut(.012,.012,.5,4)),h),.44,.9,.52,.3),C(i,new w(t.geo(new Mt(.14,12,10)),h),.46,.62,.6),C(i,new w(t.geo(new Mt(.08,8,6)),c),.46,.62,.6);for(let _=0;_<3;_++)C(i,new w(t.geo(new Mt(.12+_*.05,8,6)),f),.46-_*.1,.84+_*.28,.6-_*.12);C(i,new w(t.geo(new jt(.34,.025,6,20)),c),0,.12,0,Math.PI/2)}else if(a==="weaver"){C(i,new w(t.geo(new Mt(.34,14,12)),r),0,.62,-.28).scale.set(1,.85,1.2),C(i,new w(t.geo(new Mt(.1,8,6)),c),0,.82,-.44),C(i,new w(t.geo(new Mt(.2,12,10)),o),0,.6,.12);for(let M=0;M<4;M++){const _=(M-1.5)*.06;C(i,new w(t.geo(new Mt(.035,6,5)),c),_,.66+M%2*.05,.3)}for(const M of[-1,1])for(let _=0;_<4;_++){const v=.2-_*.18;C(i,new w(t.geo(new Ut(.025,.03,.5,5)),h),M*.3,.78,v,0,0,M*-.9),C(i,new w(t.geo(new Ut(.02,.025,.62,5)),r),M*.62,.42,v,0,0,M*.45)}C(i,new w(t.geo(new Ut(.008,.008,.9,3)),f),0,.6,-.8,Math.PI/2-.3)}else if(a==="moth"){C(i,new w(t.geo(new oe(.08,.22,4,8)),r),0,.85,0,Math.PI/2).scale.set(1,1,1),C(i,new w(t.geo(new Mt(.1,10,8)),c),0,.8,-.14);for(const M of[-1,1])C(i,new w(t.geo(new Mt(.26,12,8)),u),M*.26,.9,.02,0,0,M*.3).scale.set(1,.08,.7),C(i,new w(t.geo(new Mt(.05,8,6)),c),M*.3,.93,.02),C(i,new w(t.geo(new Ut(.008,.008,.2,4)),h),M*.05,.98,.2,.6,0,M*.3);g(.88,.14,.6,.05)}else if(a==="mirror"){for(const p of[-1,1])C(i,new w(t.geo(new oe(.11,.32,4,10)),o),p*.14,.32,0);C(i,new w(t.geo(new Ut(.3,.24,.7,10)),r),0,.92,0),C(i,new w(t.geo(new Ut(.19,.2,.3,10)),h),0,1.42,0),C(i,new w(t.geo(new Pt(.05,.2,.04)),c),0,1.42,.2),C(i,new w(t.geo(new Vt(.07,.26,6)),h),0,1.7,0),C(i,new w(t.geo(new Ut(.34,.34,.05,20)),h),-.36,.95,.24,Math.PI/2,0,.3),C(i,new w(t.geo(new Ut(.27,.27,.06,20)),c),-.37,.95,.27,Math.PI/2,0,.3),C(i,new w(t.geo(new Ut(.03,.03,.9,6)),l),.38,.9,.2,.5)}else if(a==="shell"){C(i,new w(t.geo(new Mt(.5,16,10,0,Math.PI*2,Math.PI*.5,Math.PI*.5)),o),0,.5,0).scale.set(1.1,.6,1),C(i,new w(t.geo(new Mt(.52,16,10,0,Math.PI*2,0,Math.PI*.5)),r),0,.55,-.04,-.35).scale.set(1.1,.9,1);for(let _=0;_<7;_++){const v=_/7*Math.PI-Math.PI/2;C(i,new w(t.geo(new Vt(.06,.24,5)),h),Math.sin(v)*.52,.62,Math.cos(v)*.4,.5,0,-Math.sin(v)*.6)}C(i,new w(t.geo(new jt(.5,.03,6,24)),c),0,.5,0,Math.PI/2),g(.62,.36,.8,.12)}else if(a==="siren"){C(i,new w(t.geo(new Vt(.26,1,10)),r),0,.55,-.1,Math.PI+.25).scale.set(1,1,.8),C(i,new w(t.geo(new Vt(.22,.3,4)),h),0,.08,-.32,-.9,0,0),C(i,new w(t.geo(new oe(.17,.32,4,10)),u),0,1.15,0),C(i,new w(t.geo(new Mt(.17,12,10)),o),0,1.5,.04),C(i,new w(t.geo(new Mt(.06,8,6)),c),0,1.36,.16),g(1.52,.18,.8,.06);for(let M=0;M<5;M++){const _=(M/4-.5)*1.6;C(i,new w(t.geo(new Vt(.05,.5,5)),h),Math.sin(_)*.14,1.5,-.12,-2.4,0,_*.5)}for(const M of[-1,1])C(i,new w(t.geo(new Vt(.06,.22,4)),c),M*.18,1.66,0,0,0,-M*.6)}else if(a==="tidecaller"){C(i,new w(t.geo(new Mt(.46,16,12,0,Math.PI*2,0,Math.PI*.55)),u),0,1,0).scale.set(1,.8,1),C(i,new w(t.geo(new Mt(.16,12,10)),c),0,1.06,0),C(i,new w(t.geo(new Mt(.3,12,10)),f),0,1.06,0),C(i,new w(t.geo(new jt(.44,.03,6,24)),c),0,1,0,Math.PI/2),g(1.2,.38,.9);for(let M=0;M<7;M++){const _=M/7*Math.PI*2;C(i,new w(t.geo(new Pt(.035,.8,.02)),M%2?f:h),Math.cos(_)*.3,.55,Math.sin(_)*.3,Math.sin(_)*.15,0,-Math.cos(_)*.15)}C(i,new w(t.geo(new Vt(.1,.36,8)),h),.4,1.3,.2,0,0,-.9)}else{const p=a==="wraith",M=a==="acolyte",_=a==="binder",v=p?1.15:1;C(i,new w(QM(t,v),u),0,.08,0).scale.set(1.1,1,1.1);for(let R=0;R<6;R++){const S=R/6*Math.PI*2;C(i,new w(t.geo(new Vt(.08*v,.3,5)),u),Math.cos(S)*.3*v,.1,Math.sin(S)*.3*v,Math.PI)}if(C(i,new w(t.geo(new Mt(.26*v,16,12,0,Math.PI*2,0,Math.PI*.62)),r),0,1.44*v,0,.35).scale.set(1,1.15,1.1),C(i,new w(t.geo(new Mt(.17*v,12,10)),t.mat(new st({color:656912}))),0,1.38*v,.08),g(1.4*v,.24*v,v),C(i,new w(t.geo(new oe(.05,.5,4,8)),u),-.3*v,.95*v,.14,.7,0,.4),C(i,new w(t.geo(new oe(.05,.5,4,8)),u),.3*v,.95*v,.14,.7,0,-.4),a==="ghost"&&(C(i,new w(t.geo(new Ut(.01,.01,.2,4)),h),.34,.9,.36),C(i,new w(t.geo(new ye(.14,0)),c),.34,.74,.38),C(i,new w(t.geo(new Mt(.22,10,8)),f),.34,.74,.38)),p){for(let R=0;R<7;R++){const S=R/7*Math.PI*2;C(i,new w(t.geo(new Vt(.07,.4,5)),h),Math.cos(S)*.36,1.32,Math.sin(S)*.36-.04,Math.sin(S)*.9,0,-Math.cos(S)*.9)}C(i,new w(t.geo(new Ut(.025,.025,1.9,6)),l),-.5,1,.2,.25),C(i,new w(t.geo(new jt(.34,.04,6,16,Math.PI*.8)),c),-.5,1.9,.38,.2,0,.3)}if(M&&(C(i,new w(t.geo(new jt(.3,.035,8,22)),c),0,1.86,0,Math.PI/2),C(i,new w(t.geo(new Mt(.15,12,10)),c),0,1,.44),C(i,new w(t.geo(new Mt(.26,12,10)),f),0,1,.44)),_){for(let R=0;R<3;R++){const S=R/3*Math.PI*2;C(i,new w(t.geo(new ye(.1,0)),c),Math.cos(S)*.55,1+Math.sin(S*1.3)*.2,Math.sin(S)*.55)}C(i,new w(t.geo(new Fe(.62,.74,5)),c),0,.04,0,-Math.PI/2),C(i,new w(t.geo(new Ut(.025,.025,1.7,6)),l),.46,.9,.16,.1),C(i,new w(t.geo(new ye(.13,0)),c),.46,1.8,.24)}}a==="zombie"&&i.scale.setScalar(1.15);let x=fs[a];x||(x=$M(i),fs[a]=x);const m=x.clone();return m.position.set(0,0,0),m.rotation.set(0,0,0),m.scale.set(1,1,1),m}const ev={warden:3023400,tyrant:2367292,throne:2761264,saint:2043452,star:2366528};function iv(a,t){const e=new Jt,i=$i[a],n=ev[a],s=t.toon(n,i,.1),r=t.toon(new Bt(n).multiplyScalar(.6).getHex(),0,0),o=t.toon(new Bt(n).lerp(new Bt(i),.4).getHex(),i,.16),h=t.toon(5918820,i,.06),l=t.mat(new st({color:i,fog:!1})),c=t.mat(new st({color:i,fog:!1,transparent:!0,opacity:.45,depthWrite:!1})),f=t.mat(new st({color:656912})),u=a==="tyrant"?1.05:a==="throne"?.95:a==="saint"||a==="star"?1:.9;C(e,new w(t.geo(new Xe(u,28)),t.mat(new st({color:1313304,transparent:!0,opacity:.45,depthWrite:!1}))),0,.02,0,-Math.PI/2),C(e,new w(t.geo(new Fe(u*.88,u,40)),c),0,.03,0,-Math.PI/2),C(e,new w(t.geo(new Fe(u*1.12,u*1.16,40)),c),0,.03,0,-Math.PI/2);const d=new _s(i,1.8,12,2);d.position.y=2.3,e.add(d);const g=(x,m,p=.09,M=1)=>{C(e,new w(t.geo(new Mt(.055*M,8,6)),l),-p,x,m),C(e,new w(t.geo(new Mt(.055*M,8,6)),l),p,x,m)};if(a==="warden"){for(const _ of[-1,1])C(e,new w(t.geo(new Ut(.17,.22,.72,10)),r),_*.2,.36,0);C(e,new w(t.geo(new Vt(.72,1.4,12)),s),0,.95,0).scale.set(1,1,.85),C(e,new w(t.geo(new Mt(.52,16,12)),s),0,1.55,0).scale.set(1.15,.9,.85);for(const _ of[-1,1])C(e,new w(t.geo(new Mt(.26,12,10)),o),_*.56,1.72,0),C(e,new w(t.geo(new Vt(.07,.3,6)),l),_*.62,1.98,0,0,0,-_*.3),C(e,new w(t.geo(new oe(.12,.62,4,10)),s),_*.62,1.2,.26,.9,0,_*.2);for(let _=0;_<6;_++){const v=_/5;C(e,new w(t.geo(new jt(.06,.018,5,10)),h),-.4+v*.8,1.72-v*.44,.42,0,_%2?Math.PI/2:0,0)}C(e,new w(t.geo(new Mt(.34,16,12,0,Math.PI*2,0,Math.PI*.62)),s),0,2.08,.04,.35).scale.set(1,1.2,1.1),C(e,new w(t.geo(new Mt(.22,12,10)),f),0,2,.14),g(2.02,.32,.09,1.2),C(e,new w(t.geo(new Ut(.05,.05,2,8)),h),.2,1.3,.62,.5,0,-.9);const M=C(e,new w(t.geo(new Pt(.7,.5,.5)),h),.98,1.92,.34,.2,.3,-.9);M.castShadow=!0;for(const _ of[-1,1])C(e,new w(t.geo(new Pt(.08,.34,.52)),l),.98+_*.2,1.92+_*.14,.34,.2,.3,-.9);for(let _=0;_<6;_++){const v=_/6*Math.PI*2;C(e,new w(t.geo(new ye(.07,0)),l),Math.cos(v)*1.05,.9+_%3*.45,Math.sin(v)*1.05)}}else if(a==="tyrant"){for(const x of[-1,1])C(e,new w(t.geo(new Pt(.34,.9,.36)),r),x*.3,.45,0),C(e,new w(t.geo(new Pt(.42,.14,.56)),s),x*.3,.07,.06);C(e,new w(t.geo(new Pt(1.2,1.2,.7)),s),0,1.4,0),C(e,new w(t.geo(new Pt(1.34,.12,.8)),o),0,1.02,0),C(e,new w(t.geo(new Pt(1.34,.12,.8)),o),0,1.96,0);for(const x of[-1,1])C(e,new w(t.geo(new Pt(.5,.36,.7)),o),x*.8,1.9,0,0,0,x*.25),C(e,new w(t.geo(new Pt(.26,.9,.3)),s),x*.84,1.3,.1,.1,0,x*.1);C(e,new w(t.geo(new ye(.2,0)),l),0,1.45,.38),C(e,new w(t.geo(new Pt(.56,.46,.5)),s),0,2.3,.04),C(e,new w(t.geo(new Pt(.44,.06,.06)),l),0,2.32,.3),C(e,new w(t.geo(new Ut(.78,.78,.14,24)),h),0,1.55,-.44,Math.PI/2),C(e,new w(t.geo(new jt(.6,.04,6,32)),l),0,1.55,-.52),C(e,new w(t.geo(new Fe(.16,.26,6)),l),0,1.55,-.53,0,Math.PI),C(e,new w(t.geo(new jt(.28,.04,6,18)),l),0,2.85,0,Math.PI/2);for(let x=0;x<5;x++){const m=x/5*Math.PI*2;C(e,new w(t.geo(new Vt(.05,.22,5)),l),Math.cos(m)*.28,2.98,Math.sin(m)*.28)}for(let x=0;x<4;x++){const m=x/4*Math.PI*2+.4,p=Math.cos(m)*1.2,M=Math.sin(m)*1.2;C(e,new w(t.geo(new jt(.1,.03,6,12)),l),p,2.4,M,Math.PI/2),C(e,new w(t.geo(new Pt(.05,.05,.32)),o),p-Math.cos(m)*.2,2.4,M-Math.sin(m)*.2,0,-m+Math.PI/2,0)}}else if(a==="star"){const x=C(e,new w(t.geo(new Vt(.75,1.6,16,1,!0)),r),0,.85,0);x.material.side=Qt,C(e,new w(t.geo(new Mt(.62,18,14)),s),0,2,0),C(e,new w(t.geo(new Mt(.4,16,12)),f),0,2,.28),C(e,new w(t.geo(new jt(.82,.07,10,40)),l),0,2,0,Math.PI/2-.35),C(e,new w(t.geo(new jt(1,.03,8,40)),c),0,2,0,Math.PI/2+.2,.4,0);for(let m=0;m<8;m++){const p=m/8*Math.PI*2;C(e,new w(t.geo(new Vt(.09,.7,5)),m%2?o:l),Math.cos(p)*1.05,2+Math.sin(p)*1.05,-.05,0,0,p-Math.PI/2)}for(let m=0;m<3;m++){const p=m/3*Math.PI*2;C(e,new w(t.geo(new Mt(.14,10,8)),h),Math.cos(p)*1.35,1.4+m*.25,Math.sin(p)*1.35)}for(const m of[-1,1])C(e,new w(t.geo(new Mt(.07,8,6)),l),m*.14,2.08,.6)}else if(a==="saint"){const x=t.toon(n,i,.16);x.transparent=!0,x.opacity=.9,x.side=Qt,C(e,new w(t.geo(new Vt(.7,2,16,1,!0)),x),0,1.05,0).scale.set(1,1,.85);for(let M=0;M<8;M++){const _=M/8*Math.PI*2;C(e,new w(t.geo(new Vt(.1,.5,5)),x),Math.cos(_)*.62,.2,Math.sin(_)*.54,Math.PI)}C(e,new w(t.geo(new oe(.3,.6,6,12)),s),0,2,0),C(e,new w(t.geo(new Mt(.36,16,12,0,Math.PI*2,0,Math.PI*.62)),r),0,2.62,0,.35).scale.set(1,1.2,1.1),C(e,new w(t.geo(new Mt(.24,12,10)),f),0,2.56,.1),g(2.58,.3,.09,1.1);for(let M=0;M<3;M++)C(e,new w(t.geo(new jt(.6+M*.28,.035,8,36)),M===1?l:c),0,2.9+M*.12,-.1,Math.PI/2-.3+M*.15,M*.5,0);C(e,new w(t.geo(new oe(.09,.8,4,10)),s),-.5,1.9,.12,.3,0,.5),C(e,new w(t.geo(new oe(.09,.8,4,10)),s),.52,2.1,.18,-.5,0,-.6),C(e,new w(t.geo(new Ut(.012,.012,.7,4)),o),.84,1.95,.4),C(e,new w(t.geo(new ye(.2,0)),l),.84,1.55,.42),C(e,new w(t.geo(new Mt(.34,12,10)),c),.84,1.55,.42);for(let M=0;M<5;M++){const _=M/5*Math.PI*2+.3;C(e,new w(t.geo(new Pt(.05,1.5,.02)),c),Math.cos(_)*.75,.9,Math.sin(_)*.6,0,-_,.18)}C(e,new w(t.geo(new ye(.2,0)),l),0,2.02,.32)}else{C(e,new w(t.geo(new Vt(.8,1.9,14)),s),0,.95,0).scale.set(1,1,.9),C(e,new w(t.geo(new Pt(1.3,1.9,.08)),r),0,1.05,-.5,-.18),C(e,new w(t.geo(new oe(.34,.7,6,12)),s),0,1.9,0);for(const m of[-1,1])C(e,new w(t.geo(new Mt(.24,12,10)),o),m*.46,2.18,0),C(e,new w(t.geo(new oe(.09,.7,4,10)),s),m*.56,1.7,.18,.5,0,m*.3);C(e,new w(t.geo(new ye(.16,0)),l),0,1.95,.34),C(e,new w(t.geo(new Mt(.26,14,12)),f),0,2.58,.06),g(2.6,.3,.08,1.1),C(e,new w(t.geo(new Ut(.24,.26,.12,12)),o),0,2.86,.04);for(let m=0;m<5;m++){const p=m/5*Math.PI*2;C(e,new w(t.geo(new Vt(.05,.28,5)),l),Math.cos(p)*.22,3.04,.04+Math.sin(p)*.22)}C(e,new w(t.geo(new jt(.95,.06,8,40)),l),0,2.6,-.34,-.25);for(let m=0;m<12;m++){const p=m/12*Math.PI*2;C(e,new w(t.geo(new Vt(.06,.34,5)),l),Math.cos(p)*1.18,2.6+Math.sin(p)*1.18*.97,-.34-Math.sin(p)*.29,-.25,0,p-Math.PI/2)}for(let m=0;m<4;m++){const p=m/4*Math.PI*2+Math.PI/4;C(e,new w(t.geo(new Pt(.08,.7,.03)),l),Math.cos(p)*1.25,1.2,Math.sin(p)*1.25,0,-p,.25)}}return e.traverse(x=>{x instanceof w&&!x.material.transparent&&(x.castShadow=!0)}),e}function nv(a,t,e){const i=new Jt;if(i.position.y=1.84,a==="wayfarer"){const n=t.toon(5913130,0,0);C(i,new w(t.geo(new Ut(.4,.4,.04,20)),n),0,-.04,0),C(i,new w(t.geo(new Ut(.19,.23,.22,16)),n),0,.08,0),C(i,new w(t.geo(new Ut(.235,.235,.05,16)),t.toon(e,e,.3)),0,0,0)}else if(a==="laurel"){const n=t.toon(9097354,4885066,.2);C(i,new w(t.geo(new jt(.24,.025,6,20)),n),0,-.06,0,Math.PI/2);for(let s=0;s<10;s++){const r=s/10*Math.PI*2;C(i,new w(t.geo(new ye(.06,0)),n),Math.cos(r)*.25,-.03,Math.sin(r)*.25,0,-r,.6)}}else if(a==="horns"){const n=t.toon(15260872,0,0);for(const s of[-1,1])C(i,new w(t.geo(new Vt(.06,.36,8)),n),s*.2,.02,0,0,0,-s*.7),C(i,new w(t.geo(new Vt(.035,.14,6)),t.mat(new st({color:16765562,fog:!1}))),s*.33,.14,0,0,0,-s*1.2)}else if(a==="flowers"){C(i,new w(t.geo(new jt(.24,.022,6,20)),t.toon(8044666,0,0)),0,-.06,0,Math.PI/2);const n=[15775944,16773572,13154536,12118228,16109736,15775944];n.forEach((s,r)=>{const o=r/n.length*Math.PI*2;C(i,new w(t.geo(new Mt(.06,8,6)),t.toon(s,s,.25)),Math.cos(o)*.25,-.03,Math.sin(o)*.25)})}else if(a==="halo")C(i,new w(t.geo(new jt(.24,.03,8,24)),t.mat(new st({color:16773572,fog:!1}))),0,.26,0,Math.PI/2);else if(a==="ironcrown"){const n=t.toon(4867160,9075354,.15);C(i,new w(t.geo(new Ut(.22,.21,.12,10,1,!0)),n),0,-.02,0);for(let s=0;s<5;s++){const r=s/5*Math.PI*2;C(i,new w(t.geo(new Vt(.07,.18,4)),n),Math.cos(r)*.21,.1,Math.sin(r)*.21),C(i,new w(t.geo(new ye(.03,0)),t.mat(new st({color:16730730,fog:!1}))),Math.cos(r)*.225,-.01,Math.sin(r)*.225)}}else if(a==="crown"){const n=t.toon(16765562,16760906,.35);C(i,new w(t.geo(new Ut(.21,.2,.1,16,1,!0)),n),0,-.02,0);for(let s=0;s<5;s++){const r=s/5*Math.PI*2;C(i,new w(t.geo(new Vt(.045,.14,5)),n),Math.cos(r)*.2,.09,Math.sin(r)*.2)}C(i,new w(t.geo(new ye(.045,0)),t.mat(new st({color:16738954,fog:!1}))),0,-.02,.21)}return i}var qs;(function(a){a.Heavy="HEAVY",a.Medium="MEDIUM",a.Light="LIGHT"})(qs||(qs={}));var Uc;(function(a){a.Success="SUCCESS",a.Warning="WARNING",a.Error="ERROR"})(Uc||(Uc={}));const sv=hf("Haptics",{web:()=>lf(()=>import("./web-DAGzQrw6.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(a=>new a.HapticsWeb)}),Oc=cf.isNativePlatform();var Zc;const av=typeof window<"u"&&((Zc=window.matchMedia)==null?void 0:Zc.call(window,"(pointer: coarse)").matches);let Bc=0;function Yh(a){var t;if(!(!vi().vibration||!Oc&&!av)){if(a==="kill"){const e=performance.now();if(e-Bc<90)return;Bc=e}if(Oc){const e=a==="kill"?qs.Light:a==="sweep"?qs.Medium:qs.Heavy;sv.impact({style:e}).catch(()=>{});return}try{(t=navigator.vibrate)==null||t.call(navigator,a==="kill"?12:a==="sweep"?28:a==="hurt"?45:90)}catch{}}}function kc(){const a=new wi;a.moveTo(0,.32),a.lineTo(.085,.02),a.lineTo(.055,-.26),a.lineTo(-.055,-.26),a.lineTo(-.085,.02),a.closePath();const t=new Vi(a,{depth:.03,bevelEnabled:!1});return t.center(),t}function Hc(){const a=new wi;a.moveTo(0,.34),a.lineTo(.045,.08),a.lineTo(.025,-.3),a.lineTo(-.025,-.3),a.lineTo(-.045,.08),a.closePath();const t=new Vi(a,{depth:.025,bevelEnabled:!1});return t.center(),t}function mo(){const a=new wi;a.moveTo(0,.24),a.lineTo(.06,-.02),a.lineTo(.02,-.2),a.lineTo(-.02,-.2),a.lineTo(-.06,-.02),a.closePath();const t=new Vi(a,{depth:.022,bevelEnabled:!1});return t.center(),t}function rv(){const a=[new N(.02,.42,0),new N(-.07,.2,0),new N(.04,.1,0),new N(-.06,-.08,0),new N(.05,-.18,0),new N(-.03,-.42,0)],t=new Du;for(let e=0;e<a.length-1;e++)t.add(new Cu(a[e],a[e+1]));return t}function Gc(a){const t=new qh(rv(),24,a,5,!1);return t.center(),t}function ov(){const a=document.createElement("canvas");a.width=4,a.height=1;const t=a.getContext("2d");t.fillStyle="#2a1c18",t.fillRect(0,0,1,1),t.fillStyle="#c45c58",t.fillRect(1,0,1,1),t.fillStyle="#f0a8a0",t.fillRect(2,0,1,1),t.fillStyle="#f8ecd8",t.fillRect(3,0,1,1);const e=new an(a);return e.minFilter=Ye,e.magFilter=Ye,e.colorSpace=ke,e}function hv(){const a=document.createElement("canvas");a.width=64,a.height=64;const t=a.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,240,230,0.95)"),e.addColorStop(.5,"rgba(255,180,200,0.4)"),e.addColorStop(1,"rgba(255,180,200,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const i=new an(a);return i.colorSpace=ke,i}function lv(){const a=document.createElement("canvas");a.width=a.height=128;const t=a.getContext("2d"),e=[[64,62,58],[46,44,30],[82,48,26],[56,86,24]];t.globalCompositeOperation="lighter";for(const[n,s,r]of e){const o=t.createRadialGradient(n,s,1,n,s,r);o.addColorStop(0,"rgba(255,255,255,0.95)"),o.addColorStop(.35,"rgba(255,255,255,0.55)"),o.addColorStop(.7,"rgba(255,255,255,0.22)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,128,128)}const i=new an(a);return i.colorSpace=ke,i}function cv(){const a=document.createElement("canvas");a.width=a.height=64;const t=a.getContext("2d");t.translate(32,32);const e=t.createRadialGradient(0,0,0,0,0,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,255,255,0.9)"),e.addColorStop(.3,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(-32,-32,64,64),t.strokeStyle="rgba(255,255,255,0.9)",t.lineWidth=2,t.beginPath(),t.moveTo(-30,0),t.lineTo(30,0),t.moveTo(0,-30),t.lineTo(0,30),t.stroke();const i=new an(a);return i.colorSpace=ke,i}function uv(){const a=document.createElement("canvas");a.width=160,a.height=48;const t=a.getContext("2d"),e=t.createLinearGradient(0,0,160,0);e.addColorStop(0,"rgba(30,16,38,0)"),e.addColorStop(.22,"rgba(40,20,50,0.75)"),e.addColorStop(.6,"rgba(80,30,110,0.92)"),e.addColorStop(.86,"rgba(200,107,255,1)"),e.addColorStop(1,"rgba(230,180,255,0)"),t.fillStyle=e,t.fillRect(0,0,160,48),t.globalCompositeOperation="destination-in";const i=t.createLinearGradient(0,0,0,48);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.22,"rgba(255,255,255,0.95)"),i.addColorStop(.78,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,160,48),t.globalCompositeOperation="source-over";const n=new an(a);return n.colorSpace=ke,n}function fv(){const a=document.createElement("canvas");a.width=64,a.height=16;const t=a.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.45,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,4,64,8);const i=new an(a);return i.colorSpace=ke,i}function dv(a){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),i=e.createRadialGradient(128,128,10,128,128,124);i.addColorStop(0,a),i.addColorStop(.45,a.replace("1)","0.35)")),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.fillRect(0,0,256,256);const n=new an(t);return n.colorSpace=ke,n}function oi(a,t,e){let i=Math.imul(a+e*13,374761393)^Math.imul(t+e*7,668265263);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function go(a,t){const e=parseInt(a.slice(1),16),i=n=>Math.max(0,Math.min(255,Math.round(t>=0?n+(255-n)*t:n*(1+t))));return`rgb(${i(e>>16)},${i(e>>8&255)},${i(e&255)})`}const pr=[{grout:"#c4a8b0",tile:"#ead4d0",crack:"#d8b8bc",wash:"#f0c8d0",moss:"#b8d8c4",cool:"#cfc8dc",warm:"#ecd8bc",growth:"96,150,112"},{grout:"#b0a0b8",tile:"#d8ccd8",crack:"#c0b0c8",wash:"#d0c4e0",moss:"#b0c8bc",cool:"#c0ccd8",warm:"#e0d0c8",growth:"84,132,140"},{grout:"#c8c0c4",tile:"#efe8e2",crack:"#d8d0cc",wash:"#f5e0c8",moss:"#c8d4dc",cool:"#d4dce4",warm:"#f0dcc0",growth:"128,150,104"},{grout:"#a8bcc4",tile:"#d4e4e6",crack:"#bccdd2",wash:"#c8e8ec",moss:"#a8d4c8",cool:"#c4cce8",warm:"#e0dcc8",growth:"84,150,150"},{grout:"#9a94c4",tile:"#d4ccf0",crack:"#b4acdc",wash:"#dcd4fa",moss:"#c4c8f0",cool:"#c8ccf4",warm:"#f2e6c0",growth:"120,116,184"}];function ns(a,t=1){const e=a==="floor"?512:256,i=document.createElement("canvas");i.width=i.height=e;const n=i.getContext("2d"),s=pr[Math.max(1,Math.min(pr.length,t))-1],r=t*17+(a==="floor"?3:a==="wall"?9:21);if(a==="floor"){n.fillStyle=go(s.grout,-.08),n.fillRect(0,0,e,e);const h=32,l=e/h,c=new Set,f=(u,d,g,x,m)=>{const p=m>.86?s.wash:m>.45?s.tile:s.crack,M=oi(u,d,r+41),_=M>.94?s.cool:M<.05?s.warm:p,v=go(_,(oi(u,d,r+5)-.5)*.08);n.fillStyle=v,n.fillRect(u+2,d+2,g-4,x-4),n.fillStyle="rgba(255,248,240,0.28)",n.fillRect(u+2,d+2,g-4,2),n.fillRect(u+2,d+2,2,x-4),n.fillStyle="rgba(40,20,30,0.2)",n.fillRect(u+2,d+x-4,g-4,2),n.fillRect(u+g-4,d+2,2,x-4);for(let b=0;b<g*x/90;b++){const T=u+3+oi(u+b,d,r+11)*(g-6),R=d+3+oi(u,d+b,r+13)*(x-6);n.fillStyle=oi(b,u+d,r)>.5?"rgba(255,255,255,0.14)":"rgba(60,30,40,0.12)",n.fillRect(T,R,1.5,1.5)}if(m<.06){n.strokeStyle="rgba(50,28,36,0.45)",n.lineWidth=1.2,n.beginPath();const b=u+g*(.3+oi(u,d,r+17)*.4);n.moveTo(b,d+3),n.lineTo(b+(oi(u,d,r+19)-.5)*10,d+x*.45),n.lineTo(b+(oi(u,d,r+23)-.5)*16,d+x-3),n.stroke()}m>.95&&(n.fillStyle=go(s.grout,-.12),n.beginPath(),n.moveTo(u+g-3,d+3),n.lineTo(u+g-11,d+3),n.lineTo(u+g-3,d+10),n.fill())};for(let u=0;u<l;u++)for(let d=0;d<l;d++){if(c.has(`${d},${u}`))continue;const g=oi(d,u,r);d<l-1&&u<l-1&&oi(d,u,r+29)>.88&&!c.has(`${d+1},${u}`)?(c.add(`${d+1},${u}`).add(`${d},${u+1}`).add(`${d+1},${u+1}`),f(d*h,u*h,h*2,h*2,g)):f(d*h,u*h,h,h,g)}}else if(a==="wall"){n.fillStyle=s.crack,n.fillRect(0,0,e,e);const h=28;for(let l=0;l<e;l+=h){const c=l/h%2*22;for(let f=-22;f<e+22;f+=44){const u=oi((f+c)/44,l/h,r);n.fillStyle=u>.7?s.wash:u>.35?s.tile:s.grout,n.fillRect((f+c+e)%e,l+2,40,h-4)}}}else{n.clearRect(0,0,e,e);for(let h=0;h<28;h++){const c=oi(h,3,r)*e,f=oi(h,9,r+4)*e,u=10+oi(h,5,r+2)*22,d=n.createRadialGradient(c,f,1,c,f,u);d.addColorStop(0,s.moss+"cc"),d.addColorStop(1,s.moss+"00"),n.fillStyle=d,n.beginPath(),n.arc(c,f,u,0,Math.PI*2),n.fill(),c<u&&(n.beginPath(),n.arc(c+e,f,u,0,Math.PI*2),n.fill()),f<u&&(n.beginPath(),n.arc(c,f+e,u,0,Math.PI*2),n.fill())}}const o=new an(i);return o.wrapS=o.wrapT=sr,o.colorSpace=ke,o.anisotropy=4,o.needsUpdate=!0,o}function pv(a,t,e,i,n){const r=document.createElement("canvas");r.width=r.height=1024;const o=r.getContext("2d"),h=pr[Math.max(1,Math.min(pr.length,a))-1],l=p=>(p+e/2)/e*1024,c=(p,M,_,v,b)=>{const T=o.createRadialGradient(p,M,0,p,M,_);T.addColorStop(0,v.replace("A",String(b))),T.addColorStop(.6,v.replace("A",String(b*.5))),T.addColorStop(1,v.replace("A","0")),o.fillStyle=T,o.beginPath(),o.arc(p,M,_,0,Math.PI*2),o.fill()};let f=0;const u=()=>oi(f++,t,t+31);for(const p of n)c(l(p.x),l(p.z),p.r/e*1024,"rgba(255,246,236,A)",.22);for(let p=0;p<30;p++)c(u()*1024,u()*1024,30+u()*100,"rgba(70,40,56,A)",.16+u()*.14);const d=`rgba(${h.growth},A)`;for(let p=0;p<44;p++){const M=u()<.75,_=u()*1024,v=Math.floor(u()*4),b=M?40+u()*90:u()*1024,T=M?v===0?b:v===1?1024-b:_:u()*1024,R=M?v===2?b:v===3?1024-b:_:b;c(T,R,30+u()*80,d,.4+u()*.25)}o.filter="blur(10px)",o.fillStyle="rgba(40,22,36,0.42)";for(const p of i){const M=l(p.minx)-8,_=l(p.minz)-8;o.fillRect(M,_,l(p.maxx)-l(p.minx)+16,l(p.maxz)-l(p.minz)+16)}o.filter="none";const g=2.2/e*1024,x=l(-16);for(const[p,M,_,v]of[[x,0,x+g,0],[1024-x,0,1024-x-g,0],[0,x,0,x+g],[0,1024-x,0,1024-x-g]]){const b=o.createLinearGradient(p,M,_,v);b.addColorStop(0,"rgba(40,22,36,0.4)"),b.addColorStop(1,"rgba(40,22,36,0)"),o.fillStyle=b,o.fillRect(0,0,1024,1024)}const m=new an(r);return m.colorSpace=ke,m.anisotropy=4,m}function mv(a){const{room:t,root:e,wallMat:i,floorMat:n,kit:s,lite:r,mossMap:o}=a,h=(a.seed??1)>>>0;e.traverse(X=>{var ct;if(X instanceof w){X.geometry.dispose();for(const ht of Array.isArray(X.material)?X.material:[X.material])ht===i||ht===n||(ht.userData.ownMap&&ht instanceof st&&((ct=ht.map)==null||ct.dispose()),ht.dispose())}}),e.clear();const l=a.walls.filter(X=>X.perim),c=[],f=2.35,u=_e(t),d=Ys[u],g=X=>Rt[X%4],x=X=>{X.matrixAutoUpdate=!1,X.updateMatrix()},m=(X,ct,ht,ut,G=2.4)=>{l.push({minx:X-ht,maxx:X+ht,minz:ct-ut,maxz:ct+ut,top:G})};let p=h^Math.imul(t,2654435761);const M=()=>{p=p+1831565813|0;let X=Math.imul(p^p>>>15,1|p);return X=X+Math.imul(X^X>>>7,61|X)^X,((X^X>>>14)>>>0)/4294967296},_=(X,ct,ht,ut)=>{const G=ht>=ut,Z=G?ht:ut,mt=Math.min(G?ut:ht,1)*.8,kt=Math.floor(Z/1.3);for(let Tt=0;Tt<kt;Tt++){if(M()<.28)continue;const St=(Tt+.5)/kt-.5,de=.25+M()*.35,at=new w(s.geo(new Pt(G?.7:mt,de,G?mt:.7)),i);at.position.set(G?X+St*Z:X,f+de/2,G?ct:ct+St*Z),at.rotation.y=(M()-.5)*.12,at.castShadow=!0,e.add(at),x(at)}},v=(X,ct,ht,ut)=>{const G=new w(s.geo(new Pt(ht,f,ut)),i);G.position.set(X,f/2,ct),G.castShadow=!0,G.receiveShadow=!0,e.add(G),x(G);const Z=new w(s.geo(new Pt(Math.max(ht,.15),.1,Math.max(ut,.15))),s.mat(new st({color:d.accent})));Z.position.set(X,f+.05,ct),e.add(Z),x(Z),_(X,ct,ht,ut),m(X,ct,ht/2,ut/2)},b=(X,ct,ht=d.accent)=>{const ut=new w(s.geo(new Ut(.38,.5,2.2,8)),s.toon(d.stone,ht,.16));ut.position.set(X,1.1,ct),ut.castShadow=!0,ut.receiveShadow=!0,e.add(ut),x(ut);const G=new w(s.geo(new Ut(.5,.42,.18,8)),s.toon(5916768,ht,.22));G.position.set(X,2.28,ct),e.add(G),x(G);const Z=new w(s.geo(new Mt(.14,8,8)),s.mat(new st({color:ht})));Z.position.set(X,2.52,ct),e.add(Z),x(Z),m(X,ct,.52,.52)},T=(X,ct)=>{const ht=new w(s.geo(new Ut(.4,.48,.7,8)),s.toon(d.stone,d.wash,.08));ht.position.set(X,.35,ct),ht.castShadow=!0,ht.receiveShadow=!0,e.add(ht),x(ht);const ut=new w(s.geo(new Ut(.32,.36,1.6,7)),s.toon(d.stone,d.accent,.06));ut.position.set(X+.85,.28,ct+.2),ut.rotation.z=1.15,ut.rotation.y=.4,ut.castShadow=!0,e.add(ut),x(ut),m(X,ct,.5,.5,.75),m(X+.85,ct+.2,.7,.4,.55)},R=(X,ct,ht,ut=.7)=>{const G=new w(s.geo(new Fe(ut*.72,ut,20)),s.mat(new st({color:ht,transparent:!0,opacity:.25,side:Qt})));G.rotation.x=-Math.PI/2,G.position.set(X,.04,ct),e.add(G),x(G)},S=(X,ct,ht,ut)=>{const G=new w(s.geo(new Xe(ht,20)),s.mat(new st({color:ut,transparent:!0,opacity:.1,side:Qt})));G.rotation.x=-Math.PI/2,G.position.set(X,.03,ct),e.add(G),x(G),R(X,ct,ut,ht)},A=(X,ct,ht,ut)=>{const G=new w(s.geo(new Xe(ht,18)),s.mat(new st({color:ut,transparent:!0,opacity:.35,side:Qt})));G.rotation.x=-Math.PI/2,G.position.set(X,.05,ct),e.add(G),x(G);const Z=new w(s.geo(new jt(ht,.08,6,18)),s.toon(d.stone,ut,.12));Z.rotation.x=Math.PI/2,Z.position.set(X,.08,ct),e.add(Z),x(Z)},L=(X,ct)=>{const ht=new w(s.geo(new Pt(1.15,.5,.9)),i);ht.position.set(X,.25,ct),ht.rotation.y=(X+ct)*.18,e.add(ht),x(ht),m(X,ct,.55,.42,.65)},F=(X,ct,ht=2.4,ut=.48)=>{const G=new w(s.geo(new Ut(ht,ht+.22,ut,14)),s.toon(d.stone,d.accent,.14));G.position.set(X,ut/2,ct),G.receiveShadow=!0,e.add(G),x(G),S(X,ct,ht*.72,d.accent),c.push({minx:X-ht*.82,maxx:X+ht*.82,minz:ct-ht*.82,maxz:ct+ht*.82,y:ut})},k=(X,ct,ht,ut,G)=>{const Z=new w(s.geo(new Pt(ht,G,ut)),s.toon(d.stone,d.wash,.1));Z.position.set(X,G/2,ct),e.add(Z),x(Z),c.push({minx:X-ht/2,maxx:X+ht/2,minz:ct-ut/2,maxz:ct+ut/2,y:G})},z=(X,ct,ht,ut,G,Z="s")=>{for(let kt=1;kt<=4;kt++){const Tt=kt/4,St=Math.max(.12,G*Tt),de=(ut/2+(4-kt+.5)*.55)*(Z==="n"||Z==="e"?1:-1),at=Z==="e"||Z==="w"?X+de:X,ft=Z==="n"||Z==="s"?ct+de:ct;k(at,ft,Z==="e"||Z==="w"?.6:ht,Z==="e"||Z==="w"?ut:.6,St)}k(X,ct,ht,ut,G)},P=(X,ct,ht,ut)=>{const G=new w(s.geo(new Pt(ht,.62,ut)),s.toon(3820098,d.wash,.12));if(G.position.set(X,.31,ct),e.add(G),x(G),o){const Z=new w(s.geo(new Ge(ht*.9,ut*.9)),s.mat(new st({map:o,transparent:!0,opacity:.45,depthWrite:!1})));Z.rotation.x=-Math.PI/2,Z.position.set(X,.64,ct),e.add(Z),x(Z)}m(X,ct,ht/2,ut/2,.7)},O=(X,ct,ht,ut)=>{if(r)return;const G=new w(s.geo(new Ge(.85,1.7)),s.mat(new st({color:ut,transparent:!0,opacity:.55,side:Qt})));G.position.set(X,1.55,ct),G.rotation.y=ht,e.add(G),x(G)},$=(X,ct,ht,ut=d.accent)=>{const G=Math.cos(ht)*1.15,Z=Math.sin(ht)*1.15;b(X-G,ct-Z,ut),b(X+G,ct+Z,ut);const mt=new w(s.geo(new Pt(2.6,.32,.42)),s.toon(d.stone,ut,.18));mt.position.set(X,2.38,ct),mt.rotation.y=ht,mt.castShadow=!0,e.add(mt),x(mt)},B=(X,ct,ht,ut,G=2.2,Z=2.1)=>{if(r)return;const mt=new w(s.geo(new Ge(G,Z)),s.mat(new st({color:ut,transparent:!0,opacity:.28,side:Qt})));mt.position.set(X,Z/2+.2,ct),mt.rotation.y=ht,e.add(mt),x(mt)},it=(X,ct)=>{const ut=l.filter(y=>!y.perim),G=s.mat(new st({map:pv(u,p>>>0,38,[...ut,...c],[{x:0,z:0,r:7.5},{x:ct.x,z:ct.z,r:3.2}]),transparent:!0,depthWrite:!1}));G.userData.ownMap=!0;const Z=new w(s.geo(new Ge(38,38)),G);Z.rotation.x=-Math.PI/2,Z.position.y=.015,Z.renderOrder=-1,e.add(Z),x(Z);const mt=15.2,kt=(y,V,q)=>{if(Math.abs(y)>mt||Math.abs(V)>mt)return!1;for(const Q of[...ut,...c])if(y>Q.minx-q&&y<Q.maxx+q&&V>Q.minz-q&&V<Q.maxz+q)return!1;return!0},Tt=()=>{if(M()<.55||!ut.length){const tt=Math.floor(M()*4),rt=(M()-.5)*2*mt,wt=mt-M()*1.6;return tt===0?[rt,-wt]:tt===1?[rt,wt]:tt===2?[-wt,rt]:[wt,rt]}const y=ut[Math.floor(M()*ut.length)],V=M()*Math.PI*2,q=(y.minx+y.maxx)/2,Q=(y.minz+y.maxz)/2,pt=(y.maxx-y.minx)/2+.35+M()*.6,vt=(y.maxz-y.minz)/2+.35+M()*.6;return[q+Math.cos(V)*pt,Q+Math.sin(V)*vt]},St=new qe,de=r?.5:1,at=u===1?7320711:u===2?6987440:u===4?6272168:u===5?9078472:9614460,ft=Math.round(48*de),gt=new Tn(s.geo(new Vt(.065,.55,4)),s.toon(at,at,.12),ft*5),xt=new Tn(s.geo(new Mt(.075,6,5)),s.mat(new st({color:16777215})),ft);let _t=0,Kt=0;for(let y=0;y<ft*3&&_t<ft*5;y++){const[V,q]=Tt();if(!kt(V,q,.05))continue;const Q=3+Math.floor(M()*3);for(let pt=0;pt<Q&&_t<ft*5;pt++){const vt=.6+M()*.7;St.position.set(V+(M()-.5)*.3,.26*vt,q+(M()-.5)*.3),St.rotation.set((M()-.5)*.7,M()*Math.PI,(M()-.5)*.7),St.scale.set(1,vt,1),St.updateMatrix(),gt.setMatrixAt(_t++,St.matrix)}M()<.45&&Kt<ft&&(St.position.set(V+(M()-.5)*.2,.46+M()*.14,q+(M()-.5)*.2),St.rotation.set(0,0,0),St.scale.setScalar(.8+M()*.5),St.updateMatrix(),xt.setMatrixAt(Kt,St.matrix),xt.setColorAt(Kt++,new Bt(Rt[Math.floor(M()*4)]).offsetHSL(0,.15,-.05)))}gt.count=_t,xt.count=Kt,e.add(gt,xt);const Zt=Math.round(70*de),ie=new Tn(s.geo(new Xh(.12,0)),s.toon(new Bt(d.stone).lerp(new Bt(d.floor),.5).getHex(),d.wash,.1),Zt);let ne=0;for(let y=0;y<Zt*3&&ne<Zt;y++){const[V,q]=M()<.7?Tt():[(M()-.5)*2*mt,(M()-.5)*2*mt];if(!kt(V,q,.05))continue;const Q=.5+M()*1.4;St.position.set(V,.05*Q,q),St.rotation.set(M()*3,M()*3,M()*3),St.scale.set(Q,Q*(.5+M()*.4),Q),St.updateMatrix(),ie.setMatrixAt(ne++,St.matrix)}ie.count=ne,e.add(ie);const U=Math.round(80*de),Me=new Tn(s.geo(new Xe(.09,5)),s.mat(new st({color:16777215,transparent:!0,opacity:.85,side:Qt,depthWrite:!1})),U);let he=0;const I=[0,1,2].map(()=>[(M()-.5)*22,(M()-.5)*22]);for(let y=0;y<U*3&&he<U;y++){const[V,q]=I[y%3],Q=V+(M()-.5)*9,pt=q+(M()-.5)*9;kt(Q,pt,0)&&(St.position.set(Q,.025,pt),St.rotation.set(-Math.PI/2,0,M()*Math.PI*2),St.scale.set(1,.55+M()*.3,1),St.updateMatrix(),Me.setMatrixAt(he,St.matrix),Me.setColorAt(he++,new Bt(M()<.6?d.accent:Rt[Math.floor(M()*4)])))}if(Me.count=he,e.add(Me),X==="shrine"||X==="boss"||X==="choir"){const y=X==="choir"?6:8,V=new Tn(s.geo(new Ut(.06,.07,.34,6)),s.toon(16050904,16109736,.2),y*4),q=new Tn(s.geo(new Mt(.05,6,5)),s.mat(new st({color:16767392})),y*4);let Q=0;for(let pt=0;pt<y;pt++){const vt=pt/y*Math.PI*2+.3,tt=X==="choir"?4.2:4.6,rt=Math.cos(vt)*tt,wt=Math.sin(vt)*tt;if(!kt(rt,wt,.1))continue;const qt=3+Math.floor(M()*2);for(let bt=0;bt<qt;bt++){const yt=.6+M()*.8,Wt=rt+(M()-.5)*.45,te=wt+(M()-.5)*.45;St.rotation.set(0,0,0),St.position.set(Wt,.17*yt,te),St.scale.set(1,yt,1),St.updateMatrix(),V.setMatrixAt(Q,St.matrix),St.position.set(Wt,.34*yt+.05,te),St.scale.set(.8,1.4,.8),St.updateMatrix(),q.setMatrixAt(Q++,St.matrix)}}V.count=Q,q.count=Q,e.add(V,q)}};let Y={x:0,z:-8};const et=[];n&&(n.color.setHex(d.floor),n.emissive.setHex(d.emit),n.emissiveIntensity=r?.05:.06);const nt=Bi(t).kind;switch(nt){case"court":S(0,0,4.2,d.accent);for(let X=0;X<8;X++){const ct=X/8*Math.PI*2+.2;b(Math.cos(ct)*10.2,Math.sin(ct)*10.2,g(X))}O(-10.2,0,Math.PI/2,d.accent),O(10.2,0,-Math.PI/2,d.wash),T(-9.5,-8.2),L(10.4,3.2),L(-10.2,6),R(-3.2,2.6,Rt[0],.85),R(4.4,-3.1,Rt[1],.7),Y={x:9.4,z:-9};break;case"hall":for(const X of[-8,-2.5,2.5,8])b(-5.6,X,Rt[1]),b(5.6,X,Rt[2]);P(-3.2,-5,1.1,3.4),P(3.2,5,1.1,3.4),P(-3.2,5.2,1.1,3.2),P(3.2,-5.2,1.1,3.2),S(0,0,2.4,d.wash),O(-5.6,0,Math.PI/2,Rt[1]),O(5.6,0,-Math.PI/2,Rt[2]),z(0,0,3.6,5.2,.62,"s"),Y={x:0,z:-11};break;case"cross":v(-9.2,0,8.4,1),v(9.2,0,8.4,1),v(0,-9.2,1,8.4),v(0,9.2,1,8.4),S(0,0,2.8,Rt[2]),T(-6.4,-6.4),L(6.6,6.2),k(10.4,10.4,4.6,4.6,.5),z(10.4,7.2,3.2,2.4,.5,"s"),Y={x:10.4,z:10.4};break;case"shrine":F(0,0,2.7,.5),A(0,0,1.15,d.wash),b(-8.2,-8.2,Rt[1]),b(8.2,-8.2,Rt[2]),b(-8.2,8.2,Rt[3]),b(8.2,8.2,Rt[0]),$(0,-11,0,d.accent),R(-4.5,0,Rt[1],.9),R(4.5,0,Rt[3],.9),Y={x:0,z:11};break;case"elite":v(-9,-9,9.5,1),v(9,-9,9.5,1),v(-9,9,9.5,1),v(9,9,9.5,1),F(0,0,2.2,.52),b(0,9.4,d.accent),T(8.5,0),O(0,9.4,0,d.accent),Y={x:0,z:11.2};break;case"trap":P(-4.2,-3.2,7.4,.7),P(4.2,3.2,7.4,.7),P(-9,6.2,4.2,.7),P(9,-6.2,4.2,.7),R(-6,6,Rt[0],1),R(6,-6,Rt[1],1),R(0,0,Rt[3],1.15),et.push({x:-6,z:6},{x:6,z:-6},{x:0,z:0},{x:-8.4,z:-8.4}),z(8.4,8.4,3.8,3.8,.66,"w"),k(-10.2,10.2,3.4,3.4,.34),Y={x:-10.2,z:-10.2};break;case"gallery":for(let X=0;X<8;X++){const ct=X/8*Math.PI*2+.18,ht=Math.cos(ct)*9,ut=Math.sin(ct)*9;b(ht,ut,g(X)),X%2===0&&B((ht+Math.cos(ct+.4)*9)/2,(ut+Math.sin(ct+.4)*9)/2,ct+Math.PI/2,g(X),2.6,2.2)}S(0,0,3.4,Rt[3]),P(0,4.6,5.2,.55),P(0,-4.6,5.2,.55),k(-7.4,0,3.2,3.2,.36),k(7.4,0,3.2,3.2,.36),Y={x:0,z:0};break;case"choir":for(const X of[-8.5,0,8.5])b(-8.8,X,Rt[1]),b(-3.1,X,Rt[2]),b(3.1,X,Rt[3]),b(8.8,X,Rt[0]);P(-5.8,-4.2,.55,5.6),P(5.8,4.2,.55,5.6),S(0,0,2.2,d.accent),O(0,-8.5,0,d.accent),z(-11.2,0,3.4,4.6,.66,"e"),z(11.2,0,3.4,4.6,.66,"w"),Y={x:0,z:-12};break;case"boss":F(0,0,3.5,.55);for(let X=0;X<8;X++){const ct=X/8*Math.PI*2;b(Math.cos(ct)*10,Math.sin(ct)*10,g(X))}$(-11.2,0,Math.PI/2,d.accent),$(11.2,0,Math.PI/2,d.accent),O(0,10,0,d.accent),O(-10,0,Math.PI/2,d.wash),O(10,0,-Math.PI/2,d.wash),S(0,0,2.4,d.accent),Y={x:0,z:11.4};break}it(nt,Y);const Ft=[{x:0,z:0},{x:Y.x,z:Y.z}];return{walls:l,crystal:Y,hazards:et,plats:c,lights:Ft}}const ja={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ss{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gv=new Sr(-1,1,1,-1,0,1);class xv extends Le{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}}const Mv=new xv;class Zh{constructor(t){this._mesh=new w(Mv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,gv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class vv extends Ss{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ni?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=sa.clone(t.uniforms),this.material=new ni({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Zh(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vc extends Ss{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class _v extends Ss{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class wv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new ot);this._width=i.width,this._height=i.height,e=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vv(ja),this.copyPass.material.blending=ki,this.timer=new Z0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const o=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),h.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Vc!==void 0&&(r instanceof Vc?i=!0:r instanceof _v&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Sv extends Ss{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Bt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=n}}const yv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class xs extends Ss{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new Bt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new li(s,r,{type:ci,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const f=new li(s,r,{type:ci,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+c,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const u=new li(s,r,{type:ci,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),r=Math.round(r/2)}const o=yv;this.highPassUniforms=sa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ni({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ot(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=sa.clone(ja.uniforms),this.blendMaterial=new ni({uniforms:this.copyUniforms,vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader,premultipliedAlpha:!0,blending:pe,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Bt,this._oldClearAlpha=1,this._basic=new st,this._fsQuad=new Zh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new ot(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[h].uniforms.direction.value=xs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[h]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=xs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[h]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let r=0;r<t;r++)e.push(.39894*Math.exp(-.5*r*r/(i*i))/i);const n=[],s=[];for(let r=1;r<t;r+=2){const o=e[r],h=r+1<t?e[r+1]:0,l=o+h;n.push((r*o+(r+1)*h)/l),s.push(l)}return new ni({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ni({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}xs.BlurDirectionX=new ot(1,0);xs.BlurDirectionY=new ot(0,1);const ka={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class bv extends Ss{constructor(){super(),this.isOutputPass=!0,this.uniforms=sa.clone(ka.uniforms),this.material=new Bu({name:ka.name,uniforms:this.uniforms,vertexShader:ka.vertexShader,fragmentShader:ka.fragmentShader}),this._fsQuad=new Zh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===Ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Th?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ah?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Eh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const os=class os{constructor(t){D(this,"parent");D(this,"renderer");D(this,"scene",new Yp);D(this,"camera");D(this,"composer");D(this,"bloom");D(this,"ray",new K0);D(this,"player",new Jt);D(this,"lantern");D(this,"toonRamp");D(this,"snapCam",!0);D(this,"clock",0);D(this,"last",0);D(this,"keys",new Set);D(this,"forced",new Set);D(this,"pointer",{x:0,y:0,down:!1,mouse:!0});D(this,"job");D(this,"skin","shuriken");D(this,"runJob","wanderer");D(this,"hp",100);D(this,"maxHp",100);D(this,"room",1);D(this,"fireCd",0);D(this,"dashCd",0);D(this,"dashLeft",0);D(this,"dashX",0);D(this,"dashZ",0);D(this,"iFrames",0);D(this,"hitstop",0);D(this,"hitstopNext",0);D(this,"trauma",0);D(this,"camPunch",0);D(this,"kills",0);D(this,"runCleared",0);D(this,"newcomer",!1);D(this,"runBigHit",0);D(this,"runStartBest",0);D(this,"runStartClock",0);D(this,"unbanked",{kills:0,elites:0,bosses:[],champions:0,byKind:{}});D(this,"alive",!1);D(this,"reviveUsed",!1);D(this,"choosing",!1);D(this,"paused",!1);D(this,"magnet",2.4);D(this,"extraPellets",0);D(this,"extraPierce",0);D(this,"extraDmg",0);D(this,"extraSpeed",0);D(this,"fireMul",1);D(this,"dashMul",1);D(this,"leech",0);D(this,"extraIFrames",0);D(this,"heading",0);D(this,"speedNow",0);D(this,"vx",0);D(this,"knockX",0);D(this,"knockZ",0);D(this,"vz",0);D(this,"px",0);D(this,"pz",0);D(this,"py",0);D(this,"chargeFromX",0);D(this,"chargeFromZ",0);D(this,"lungeLeft",0);D(this,"lungeX",0);D(this,"lungeZ",0);D(this,"lungeSpd",0);D(this,"lungeDmg",0);D(this,"lungeFinisher",!1);D(this,"lungeHit",new Set);D(this,"lungeBurst",!0);D(this,"lungeFromX",0);D(this,"lungeFromZ",0);D(this,"pvy",0);D(this,"coyote",0);D(this,"safeX",0);D(this,"safeZ",0);D(this,"aimX",1);D(this,"aimZ",0);D(this,"faceY",Math.PI/2);D(this,"swapLeft",0);D(this,"relics",[]);D(this,"pendingRelics",[]);D(this,"pendingPetTalents",[]);D(this,"curse","");D(this,"curseHp",1);D(this,"curseExtra",0);D(this,"curseXp",1);D(this,"curseDmg",1);D(this,"curseAsh",0);D(this,"nextCurse",null);D(this,"sigils",[]);D(this,"pendingEvent",null);D(this,"eventActs",new Set);D(this,"eliteNext",!1);D(this,"sigilLayer");D(this,"vaultActs",new Set);D(this,"freeRerolls",0);D(this,"relicCards",3);D(this,"emberLeft",0);D(this,"wrelics",new Set);D(this,"rares",new Set);D(this,"rushStacks",0);D(this,"rushT",0);D(this,"phantomCount",0);D(this,"relicHp",0);D(this,"hpMul",1);D(this,"relicFireMul",1);D(this,"relicDashMul",1);D(this,"relicLeech",0);D(this,"relicIFrames",0);D(this,"crystalOn",!1);D(this,"crystal");D(this,"walls",[]);D(this,"plats",[]);D(this,"bullets",[]);D(this,"eBullets",[]);D(this,"enemies",[]);D(this,"shards",[]);D(this,"mats",[]);D(this,"geos",[]);D(this,"texs",[]);D(this,"reduced",!1);D(this,"escHeld",!1);D(this,"hudAcc",0);D(this,"resizeObs");D(this,"floorMat");D(this,"farLayer",new Jt);D(this,"midLayer",new Jt);D(this,"nearLayer",new Jt);D(this,"motes");D(this,"moteArr");D(this,"hazeA");D(this,"hazeB");D(this,"rigLegL",new Jt);D(this,"rigLegR",new Jt);D(this,"rigArmL",new Jt);D(this,"rigArmR",new Jt);D(this,"rigLamp",new Jt);D(this,"rigCape",new Jt);D(this,"attackT",0);D(this,"skillSpinT",0);D(this,"skillSpinMax",.5);D(this,"slash");D(this,"layoutRoot",new Jt);D(this,"wallMat");D(this,"sparkMesh");D(this,"sparkPos",new Float32Array(os.SPARK_CAP*3));D(this,"sparkVel",new Float32Array(os.SPARK_CAP*3));D(this,"sparkTtl",new Float32Array(os.SPARK_CAP));D(this,"sparkNext",0);D(this,"thornPool",[]);D(this,"thornMats");D(this,"fx",[]);D(this,"bloomKick",0);D(this,"hitLight");D(this,"starTex");D(this,"streakTex");D(this,"glowTexCache");D(this,"glintTexCache");D(this,"slashTexCache");D(this,"mossMap");D(this,"roomLights",[]);D(this,"runSeed",1);D(this,"crystalSpot",{x:8.2,z:-7.4});D(this,"pet");D(this,"petTwin");D(this,"petKind",null);D(this,"petCharge",0);D(this,"familiarHeld",!1);D(this,"petStage",0);D(this,"petLevel",1);D(this,"petShots",0);D(this,"endless",!1);D(this,"daily",!1);D(this,"weekly",!1);D(this,"rush",!1);D(this,"rushStart",0);D(this,"practiceSkin",null);D(this,"masteryGain",{});D(this,"masteryRun",{});D(this,"masteryBase",{});D(this,"masteryRank",0);D(this,"heldIds",[]);D(this,"trailColor",null);D(this,"setTier",{});D(this,"practiceHits",[]);D(this,"webbed",0);D(this,"dustT",0);D(this,"corpses",[]);D(this,"zones",[]);D(this,"oath",Jc([]));D(this,"petX",0);D(this,"petZ",0);D(this,"petY",1.1);D(this,"petFire",0);D(this,"petAng",0);D(this,"petTalents",[]);D(this,"petGuard",0);D(this,"classIndex",0);D(this,"skillCd",0);D(this,"skillMax",6);D(this,"skillHeld",!1);D(this,"rageLeft",0);D(this,"markLeft",0);D(this,"petBoost",0);D(this,"echoT",0);D(this,"echoX",0);D(this,"echoZ",0);D(this,"fuse",null);D(this,"relicEcho",!1);D(this,"relicSplinter",!1);D(this,"shotBounce",0);D(this,"frost",!1);D(this,"fury",!1);D(this,"petCadence",1);D(this,"overshield",!1);D(this,"ward",0);D(this,"wardMax",0);D(this,"beats",[]);D(this,"shows",[]);D(this,"aura");D(this,"playerMark");D(this,"markSigil");D(this,"reaperCombo",0);D(this,"combo",0);D(this,"comboIdle",0);D(this,"swingStep",0);D(this,"swingFinisher",!1);D(this,"hazards",[]);D(this,"fireFields",[]);D(this,"thorns",[]);D(this,"allies",[]);D(this,"shrineHeal",0);D(this,"roomSpawnQueue",[]);D(this,"roomKills",0);D(this,"roomCleared",!1);D(this,"runLifeMul",1);D(this,"killHealPool",0);D(this,"killHealAt",0);D(this,"roomTarget",0);D(this,"roomIsBoss",!1);D(this,"roomSpawnTimer",0);D(this,"lite",!1);D(this,"smallScreen",!1);D(this,"runLog");D(this,"roomLog");D(this,"diedLog");D(this,"roomLogAt",0);D(this,"kit");D(this,"keepGeo",new Map);this.parent=t,this.smallScreen=uf();const e=vi().quality;this.lite=e==="low"?!0:e==="high"?!1:this.smallScreen,this.renderer=new ZM({antialias:!1,alpha:!1,powerPreference:this.lite?"low-power":"high-performance",stencil:!1,depth:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.lite?1:1.5)),this.renderer.setClearColor(2893884,1),this.renderer.shadowMap.enabled=!this.lite,this.renderer.shadowMap.type=ks,this.renderer.outputColorSpace=ke,this.renderer.toneMapping=gr,this.renderer.toneMappingExposure=this.lite?.86:1.05;const i=this.renderer.domElement;i.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;background:#2c283c;touch-action:none;",t.style.background="#2c283c",t.appendChild(i),this.camera=new pi(this.smallScreen?34:28,16/9,.1,160),this.scene.fog=new aa(3814480,this.lite?.015:.01),this.scene.background=new Bt(3288132),this.toonRamp=ov(),this.kit={geo:n=>this.geo(n),mat:n=>this.mat(n),toon:(n,s,r)=>this.toon(n,s,r),outline:(n,s,r)=>this.outlineOf(n,s,r)},this.lite||this.ensureComposer(),i.addEventListener("webglcontextlost",n=>n.preventDefault()),this.bindDom(),this.layout(),this.last=performance.now()}wr(t){var e;return this.wrelics.has(t)&&((e=_h.find(i=>i.id===t))==null?void 0:e.skin)===this.skin}setOn(t,e){return(this.setTier[t]??0)>=e}layout(){var i,n;this.canvasRect=void 0;const t=this.parent.clientWidth||960,e=this.parent.clientHeight||540;this.renderer.setSize(t,e,!1),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix(),(i=this.composer)==null||i.setSize(t,e),(n=this.bloom)==null||n.setSize(t,e)}bindDom(){const t=this.renderer.domElement,e=l=>{this.pointer.down=!0,this.pointer.x=l.clientX,this.pointer.y=l.clientY,this.pointer.mouse=l.pointerType==="mouse"},i=l=>{this.pointer.x=l.clientX,this.pointer.y=l.clientY,this.pointer.mouse=l.pointerType==="mouse"},n=()=>{this.pointer.down=!1};t.addEventListener("webglcontextlost",l=>{l.preventDefault(),Kc.setState({gfxLost:!0})}),t.addEventListener("pointerdown",e),window.addEventListener("pointermove",i),window.addEventListener("pointerup",n);const s=l=>{this.keys.add(l.code),this.alive&&!this.paused&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(l.code)&&l.preventDefault()},r=l=>this.keys.delete(l.code),o=()=>{this.keys.clear(),this.pointer.down=!1,ce.getState().setTouch({mx:0,my:0,ax:0,ay:0,fire:!1,dash:!1,skill:!1})},h=()=>{document.hidden&&o()};document.addEventListener("visibilitychange",h),window.addEventListener("pointercancel",n),window.addEventListener("keydown",s),window.addEventListener("keyup",r),window.addEventListener("blur",o),this.resizeObs=new ResizeObserver(()=>this.layout()),this.resizeObs.observe(this.parent),this._dom={down:e,move:i,up:n,kd:s,ku:r,blur:o,hidden:h}}unbindDom(){const t=this._dom;t&&(this.renderer.domElement.removeEventListener("pointerdown",t.down),window.removeEventListener("pointermove",t.move),window.removeEventListener("pointerup",t.up),window.removeEventListener("keydown",t.kd),window.removeEventListener("keyup",t.ku),window.removeEventListener("blur",t.blur),window.removeEventListener("pointercancel",t.up),document.removeEventListener("visibilitychange",t.hidden))}ensureComposer(){this.composer||(this.composer=new wv(this.renderer),this.composer.setPixelRatio(.7),this.composer.addPass(new Sv(this.scene,this.camera)),this.bloom=new xs(new ot(640,360),.2,.35,.62),this.composer.addPass(this.bloom),this.composer.addPass(new bv),this.layout())}applyQuality(){const t=vi().quality,e=t==="low"?!0:t==="high"?!1:this.smallScreen;e===this.lite&&(e||this.composer)||(this.lite=e,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:1.5)),this.renderer.toneMappingExposure=e?.86:1.05,this.renderer.shadowMap.enabled=!e,this.scene.traverse(i=>{if(i instanceof dh&&(i.castShadow=!e),i instanceof w)for(const n of Array.isArray(i.material)?i.material:[i.material])n.needsUpdate=!0}),e||this.ensureComposer(),this.layout())}held(t){return this.forced.size?this.forced.has(t):this.keys.has(t)}mat(t){return this.mats.push(t),t}geo(t){return this.geos.push(t),t}sharedGeo(t,e){let i=this.keepGeo.get(t);return i||(i=e(),this.keepGeo.set(t,i)),i}makeStarTex(){return this.starTex?this.starTex:(this.starTex=hv(),this.starTex)}makeStreakTex(){return this.streakTex?this.streakTex:(this.streakTex=fv(),this.streakTex)}glowTex(){return this.glowTexCache?this.glowTexCache:(this.glowTexCache=lv(),this.glowTexCache)}glintTex(){return this.glintTexCache?this.glintTexCache:(this.glintTexCache=cv(),this.glintTexCache)}slashTex(){return this.slashTexCache?this.slashTexCache:(this.slashTexCache=uv(),this.slashTexCache)}toon(t,e=0,i=0){return this.mat(new Us({color:t,emissive:e,emissiveIntensity:i,gradientMap:this.toonRamp}))}outlineOf(t,e=1.1,i=590092){const n=new w(t.geometry,this.mat(new st({color:i,side:Ze})));return n.scale.copy(t.scale).multiplyScalar(e),n.position.copy(t.position),n.rotation.copy(t.rotation),n}hazeTex(t){const e=dv(t);return this.texs.push(e),e}blocked(t,e,i,n=this.py){return ff(t,e,i,this.walls,n)?!0:Pn(t,e,this.plats)>n+.4}resolve(t,e,i,n=this.py){return wh(t,e,i,this.safeX,this.safeZ,this.walls,n)}addXp(t){if(this.practiceSkin)return;const e=Ue();df(e,this.runJob,Math.round(t*this.curseXp*this.oath.reward)),mn(e),ce.getState().refreshSave()}};D(os,"SPARK_CAP",640);let xh=os;function xo(a,t,e,i=20){const n=[],s=[],r=[];for(let h=0;h<=i;h++){const l=h/i,c=l*e,f=Math.cos(c),u=Math.sin(c);n.push(f*a,u*a,0,f*t,u*t,0),s.push(l,0,l,1)}for(let h=0;h<i;h++){const l=h*2,c=h*2+1,f=h*2+2,u=h*2+3;r.push(l,f,c,c,f,u)}const o=new Le;return o.setAttribute("position",new ae(n,3)),o.setAttribute("uv",new ae(s,2)),o.setIndex(r),o.computeVertexNormals(),o}function Tv(a,t,e,i=24){const n=[],s=[],r=[];for(let h=0;h<=i;h++){const l=h/i,c=-e+l*e,f=t-(t-a)*(.35+.65*l);n.push(Math.cos(c)*f,0,Math.sin(c)*f,Math.cos(c)*t,0,Math.sin(c)*t),s.push(l,0,l,1)}for(let h=0;h<i;h++){const l=h*2,c=h*2+1,f=h*2+2,u=h*2+3;r.push(l,f,c,c,f,u)}const o=new Le;return o.setAttribute("position",new ae(n,3)),o.setAttribute("uv",new ae(s,2)),o.setIndex(r),o.computeVertexNormals(),o}const Mo=new N;class Ev extends xh{constructor(){super(...arguments);D(this,"floatLayer");D(this,"canvasRect");D(this,"floats",[]);D(this,"dmgPending",new Map);D(this,"hitFlashMat");D(this,"sparkColor",new Bt)}makeShowMesh(e,i){const n=this.mat(new st({color:i,map:this.glowTex(),transparent:!0,opacity:.9,fog:!1,depthWrite:!1,side:Qt,blending:pe}));if(e==="crescent"){const s=new Jt,r=Math.PI*.24,o=this.sharedGeo("show-slash",()=>xo(.5,1.5,r)),h=new w(o,this.mat(new st({color:16777215,map:this.slashTex(),transparent:!0,opacity:.5,depthWrite:!1,fog:!1,side:Qt,blending:pe})));h.scale.set(1.22,1.4,1),h.userData.fixedColor=!0,h.userData.baseOpacity=.5,s.add(h);const l=new w(o,this.mat(new st({color:16777215,map:this.slashTex(),transparent:!0,opacity:.95,depthWrite:!1,fog:!1,side:Qt})));return l.userData.fixedColor=!0,l.userData.baseOpacity=.95,s.add(l),s}if(e==="pillar")return new w(this.sharedGeo("show-pillar",()=>new Ut(.22,.55,4.6,10,1,!0)),n);if(e==="dome")return new w(this.sharedGeo("show-dome",()=>new Mt(2.1,12,8,0,Math.PI*2,0,Math.PI/2)),n);if(e==="rune"){const s=new w(this.sharedGeo("show-rune",()=>new Fe(.9,1.25,24)),n);return s.rotation.x=-Math.PI/2,s}if(e==="meteor")return new w(this.sharedGeo("show-meteor",()=>new ye(.55,0)),n);if(e==="clone"){const s=new Jt,r=new w(this.sharedGeo("show-clone",()=>new oe(.22,.7,4,8)),n);return r.position.y=.8,s.add(r),s}if(e==="blade")return new w(this.sharedGeo("show-blade",()=>{const s=new wi;s.moveTo(0,.9),s.lineTo(.13,.22),s.lineTo(.07,-.65),s.lineTo(-.07,-.65),s.lineTo(-.13,.22),s.closePath();const r=new Vi(s,{depth:.05,bevelEnabled:!1});return r.center(),r}),n);if(e==="warn"){const s=new Jt,r=(h,l,c)=>{const f=new w(h,this.mat(new st({color:l,transparent:!0,opacity:c,depthWrite:!1,fog:!1,side:Qt})));return f.rotation.x=-Math.PI/2,f.userData.baseOpacity=c,l!==i&&(f.userData.fixedColor=!0),s.add(f),f};r(this.sharedGeo("warn-fill",()=>new Xe(1,40)),i,.24);const o=r(this.sharedGeo("warn-core",()=>new Xe(1,40)),i,.55);return o.name="core",o.position.y=.005,r(this.sharedGeo("warn-outline",()=>new Fe(1,1.07,48)),1706516,.55).position.y=.01,r(this.sharedGeo("warn-rim",()=>new Fe(.95,1,48)),i,.95).position.y=.012,s}if(e==="root"){const s=this.sharedGeo("show-root",()=>{const o=[],h=(c,f,u,d,g,x,m)=>{const p=new Ut(f,c,u,7,1,f===0);p.translate(0,u/2,0),p.rotateZ(m),p.translate(d,g,x),o.push(p.toNonIndexed())};h(.2,.15,.55,0,-.05,0,.12),h(.15,.1,.5,-.07,.47,0,.38),h(.1,0,.45,-.26,.92,0,.75);for(const[c,f,u]of[[.14,.3,-1.1],[-.18,.7,1.2],[-.02,.62,-1]]){const d=new Vt(.04,.18,5);d.translate(0,.09,0),d.rotateZ(u),d.translate(c,f,0),o.push(d.toNonIndexed())}const l=Ku(o,!1)??o[0];return l.computeVertexNormals(),l}),r=new w(s,this.toon(5208658,12118228,.12));return r.castShadow=!1,r.userData.fixedColor=!0,r.userData.baseOpacity=1,r}if(e==="lane"){const s=new Jt,r=(o,h,l,c,f,u=0)=>{const d=new w(this.sharedGeo(o,()=>new Ge(h,l).translate(h/2,0,0)),this.mat(new st({color:c,transparent:!0,opacity:f,depthWrite:!1,fog:!1,side:Qt})));return d.rotation.x=-Math.PI/2,d.position.z=u,d.userData.baseOpacity=f,c!==i&&(d.userData.fixedColor=!0),s.add(d),d};r("lane-fill",1,1,i,.24),r("lane-core",1,1,i,.55).name="core";for(const o of[-1,1])r("lane-outline",1,.08,1706516,.55,o*.52),r("lane-rim",1,.05,i,.95,o*.48);return s}if(e==="cut"){const s=new Jt,r=this.makeStreakTex(),o=[[1.6,.42,.55,!0],[1.45,.1,1,!1]];for(const[h,l,c,f]of o){const u=new w(this.sharedGeo(`show-cut-${h}`,()=>new Ge(h,l)),this.mat(new st({color:f?i:16777215,map:r,transparent:!0,opacity:c,depthWrite:!1,depthTest:!1,fog:!1,side:Qt,blending:f?pe:Cn})));u.userData.baseOpacity=c,f||(u.userData.fixedColor=!0),u.renderOrder=5,s.add(u)}return s}if(e==="sweep"){const s=new Jt,r=[["show-sweep-glow",.35,1.25,.5,!0],["show-sweep-edge",.85,1.18,.95,!1]];for(const[o,h,l,c,f]of r){const u=new w(this.sharedGeo(o,()=>Tv(h,l,Math.PI*.75)),this.mat(new st({color:i,map:this.slashTex(),transparent:!0,opacity:c,depthWrite:!1,fog:!1,side:Qt,blending:f?pe:Cn})));u.userData.baseOpacity=c,s.add(u)}return s}if(e==="bat"){const s=this.sharedGeo("show-bat",()=>{const l=new wi;l.moveTo(0,-.16),l.lineTo(.1,.02),l.lineTo(.34,.2),l.lineTo(.16,.08),l.lineTo(.1,.16),l.lineTo(0,.06),l.lineTo(-.1,.16),l.lineTo(-.16,.08),l.lineTo(-.34,.2),l.lineTo(-.1,.02),l.closePath();const c=new Vi(l,{depth:.03,bevelEnabled:!1});return c.center(),c}),r=new Jt;r.rotation.order="YXZ";const o=new w(s,n);o.scale.setScalar(1.45),o.userData.baseOpacity=.8,o.material.depthTest=!1,o.renderOrder=6,r.add(o);const h=new w(s,this.mat(new st({color:8002108,transparent:!0,opacity:.97,depthWrite:!1,depthTest:!1,fog:!1,side:Qt})));return h.userData.fixedColor=!0,h.userData.baseOpacity=.97,h.position.y=.01,h.renderOrder=7,r.add(h),r}if(e==="band")return new w(this.sharedGeo("show-band",()=>new jt(.95,.13,8,16,Math.PI*.55)),n);if(e==="claw"){const s=new Jt,r=Math.PI*.22;for(let o=0;o<3;o++){const h=.45+o*.28,l=h+.5,c=this.sharedGeo(`show-claw-${o}`,()=>xo(h,l,r)),f=new w(c,this.mat(new st({color:i,map:this.slashTex(),transparent:!0,opacity:.9-o*.08,depthWrite:!1,fog:!1,side:Qt,blending:pe})));s.add(f)}return s}if(e==="knifeslash"){const s=new Jt,r=Math.PI*.16,o=this.sharedGeo("show-knife",()=>xo(.3,.95,r)),h=new w(o,this.mat(new st({color:i,map:this.slashTex(),transparent:!0,opacity:.55,depthWrite:!1,fog:!1,side:Qt,blending:pe})));h.scale.set(1.2,1.35,1),h.userData.baseOpacity=.55,s.add(h);const l=new w(o,this.mat(new st({color:i,map:this.slashTex(),transparent:!0,opacity:.92,depthWrite:!1,fog:!1,side:Qt})));return l.userData.baseOpacity=.92,s.add(l),s}if(e==="sworddrop"){const s=new Jt,r=new w(this.sharedGeo("show-sword-blade",()=>{const c=new wi;c.moveTo(0,1.05),c.lineTo(.09,.55),c.lineTo(.06,-.35),c.lineTo(-.06,-.35),c.lineTo(-.09,.55),c.closePath();const f=new Vi(c,{depth:.045,bevelEnabled:!1});return f.center(),f}),n);s.add(r);const o=new w(this.sharedGeo("show-sword-guard",()=>new Pt(.32,.05,.07)),n);o.position.y=-.35,s.add(o);const h=new w(this.sharedGeo("show-sword-grip",()=>new Ut(.028,.032,.3,6)),this.mat(new st({color:2759186,fog:!1,transparent:!0,opacity:.95})));h.userData.fixedColor=!0,h.position.y=-.55,s.add(h);const l=new w(this.sharedGeo("show-sword-glow",()=>new Ge(.3,1.5)),this.mat(new st({color:i,map:this.glowTex(),transparent:!0,opacity:.55,depthWrite:!1,fog:!1,side:Qt,blending:pe})));return l.userData.baseOpacity=.55,l.position.y=.15,s.add(l),s}return new w(this.sharedGeo("show-drop",()=>new Vt(.08,.9,5)),n)}spawnShow(e,i,n,s,r=0,o=1,h=0,l=.22,c=1,f,u){if((e==="warn"||e==="lane")&&(s=$c()??s),e==="crescent"&&this.runJob!=="reaper"||e==="blade"&&this.runJob!=="reaper"||e==="band"&&this.runJob!=="reaper"||e==="bat"&&this.runJob!=="reaper"||e==="claw"&&this.runJob!=="reaper"||e==="sweep"&&this.runJob!=="reaper")return;const d=e==="warn"||e==="lane"||e==="bat"||e==="cut"||e==="root";if(this.lite&&!d&&this.shows.filter(m=>m.live).length>5)return;let g=this.shows.find(m=>!m.live&&m.kind===e);if(!g){let m=0,p;for(const M of this.shows)M.kind===e&&(m++,(!p||M.ttl<p.ttl)&&(p=M));m>=64&&(g=p)}if(!g){const m=this.makeShowMesh(e,s);this.scene.add(m),g={live:!1,kind:e,mesh:m,ttl:0,max:.4,yaw:r,x:i,z:n,scale:o,spin:h,tilt:l,fade:c},this.shows.push(g)}g.live=!0,g.x=i,g.z=n,g.yaw=r,g.scale=o,g.spin=h,g.tilt=l,g.fade=c,g.target=f,g.max=e==="meteor"?.52:e==="dome"?.9:e==="pillar"?.48:e==="clone"?.55:e==="drop"?.42:e==="sworddrop"?.55:e==="blade"?.26:e==="band"||e==="claw"?.3:e==="sweep"?.24:e==="cut"?.3:e==="bat"?.62:e==="crescent"?.44:e==="knifeslash"?.2:.36,u!==void 0?g.max=u:(e==="warn"||e==="lane"||e==="root")&&(g.max=.6),g.ttl=g.max,g.mesh.visible=!0;const x=e==="meteor"?7.2:e==="drop"||e==="sworddrop"?6.4:e==="rune"?.06:e==="dome"?.05:e==="pillar"?2.2:e==="crescent"||e==="band"||e==="claw"?1.35:e==="knifeslash"||e==="sweep"?.95:e==="bat"?.1:1.05;g.mesh.position.set(i,x,n),e==="crescent"||e==="blade"||e==="band"||e==="claw"||e==="knifeslash"?g.mesh.rotation.set(l,r,0):e==="sweep"||e==="bat"?g.mesh.rotation.set(0,-r,0):e==="root"?(g.mesh.rotation.set(0,-r,l),g.mesh.position.y=-1.25*o):g.mesh.rotation.y=r,g.mesh.scale.setScalar(o),g.mesh.traverse(m=>{m instanceof w&&m.material instanceof st&&(m.userData.fixedColor||m.material.color.setHex(s),m.material.opacity=(m.userData.baseOpacity??.95)*c)})}spawnFloat(e,i,n,s,r,o={}){if(!this.floatLayer){const l=document.createElement("div");l.className="float-layer",document.body.appendChild(l),this.floatLayer=l}let h=this.floats.find(l=>!l.live);if(!h)if(this.floats.length>=40)h=this.floats.reduce((l,c)=>l.t/l.max>c.t/c.max?l:c);else{const l=document.createElement("span");this.floatLayer.appendChild(l),h={el:l,x:0,y:0,z:0,t:0,max:1,rise:0,live:!1},this.floats.push(h)}h.el.className=`float-text ${i}`,h.el.textContent=e,h.el.style.display="block",Object.assign(h,{x:n,y:s,z:r,t:0,max:o.max??.75,rise:o.rise??.9,follow:o.follow,live:!0})}queueDamageNumber(e,i,n){if(i<.5||!vi().damageNumbers)return;const s=this.dmgPending.get(e);s?(s.amount+=i,s.big||(s.big=n),s.x=e.mesh.position.x,s.z=e.mesh.position.z):this.dmgPending.set(e,{amount:i,t:0,big:n,x:e.mesh.position.x,z:e.mesh.position.z})}stepFloats(e){for(const[n,s]of this.dmgPending){s.t+=e;const r=n.hp<=0||!this.enemies.includes(n);if(s.t<.12&&!r)continue;this.dmgPending.delete(n);const o=Math.round(s.amount),h=o>=1e4?`${Math.round(o/1e3)}k`:o>=1e3?`${(o/1e3).toFixed(1)}k`:`${o}`,l=(Math.random()-.5)*.6;this.spawnFloat(h,s.big?"float-big":"float-dmg",s.x+l,1.9,s.z)}if(!this.floats.some(n=>n.live))return;const i=this.canvasRect??(this.canvasRect=this.renderer.domElement.getBoundingClientRect());for(const n of this.floats){if(!n.live)continue;n.t+=e;const s=n.t/n.max;if(s>=1){n.live=!1,n.el.style.display="none";continue}n.follow&&this.enemies.includes(n.follow)&&(n.x=n.follow.mesh.position.x,n.z=n.follow.mesh.position.z),Mo.set(n.x,n.y+n.rise*(1-(1-s)*(1-s)),n.z).project(this.camera);const r=i.left+(Mo.x+1)/2*i.width,o=i.top+(1-Mo.y)/2*i.height,h=s<.12?1.35-s/.12*.35:1;n.el.style.transform=`translate(${r.toFixed(1)}px, ${o.toFixed(1)}px) translate(-50%, -50%) scale(${h.toFixed(2)})`,n.el.style.opacity=s>.66?`${((1-s)/.34).toFixed(2)}`:"1"}}clearFloats(){this.dmgPending.clear();for(const e of this.floats)e.live=!1,e.el.style.display="none"}addCorpse(e,i,n,s="fall",r=16777215){if(e.rotation.order="YXZ",e.rotation.y=Math.atan2(e.position.x-i,e.position.z-n),e.rotation.z=0,this.corpses.push({mesh:e,t:0,y0:e.position.y,s0:e.scale.clone(),tip:.9+Math.random()*.5,style:s,col:r,thud:!1}),s==="shatter"&&(this.burst(e.position.x,e.position.z,r,this.lite?6:12),this.spawnFx("shock",e.position.x,.08,e.position.z,r)),this.corpses.length>24){const o=this.corpses.shift();o&&this.scene.remove(o.mesh)}}stepCorpses(e){for(let i=this.corpses.length-1;i>=0;i--){const n=this.corpses[i];n.t+=e;const s=n.mesh,r=s.position.x,o=s.position.z,h=n.t<.08?1+.22*Math.sin(n.t/.08*Math.PI):1,l=(f,u,d)=>s.scale.set(n.s0.x*f,n.s0.y*u,n.s0.z*d);let c;if(n.style==="rise"){c=Math.min(1,n.t/.6),s.position.y=n.y0+c*1.3,s.rotation.y+=e*(4+c*10);const f=Math.pow(1-c,.7)*h;l(f,f*(1+c*.4),f),Math.random()<e*(this.lite?12:30)&&this.burst(r,o,n.col,1)}else if(n.style==="shatter"){c=Math.min(1,n.t/.16);const f=(1+.3*Math.sin(c*Math.PI*.5))*(1-c);l(f,f,f)}else if(n.style==="melt"){c=Math.min(1,n.t/.65);const f=1-Math.pow(1-c,2);s.position.y=n.y0-c*.15,l((1+f*.6)*(1-c*.3)*h,Math.max(.04,1-f),(1+f*.6)*(1-c*.3)*h)}else if(n.style==="sink")c=Math.min(1,n.t/.5),s.position.y=n.y0-c*c*1.4,s.rotation.y+=e*9,Math.random()<e*24&&this.burst(r,o,9071178,1),l(h,h,h);else if(n.style==="flip"){c=Math.min(1,n.t/.55);const f=Math.min(1,n.t/.22);s.rotation.z=Math.PI*(1-Math.pow(1-f,3)),s.position.y=n.y0+Math.sin(f*Math.PI)*.45+(c>.6?-(c-.6)*1.2:0);const u=(c>.6?1-(c-.6)/.4:1)*h;l(u,u,u)}else{c=Math.min(1,n.t/.55);const f=1-Math.pow(1-c,2);s.rotation.x=f*n.tip,s.position.y=n.y0-c*c*1.1;const u=(1-.4*c)*h;l(u,u,u),!n.thud&&c>.42&&(n.thud=!0,this.burst(r,o,14207176,this.lite?2:5))}c>=1&&(this.scene.remove(n.mesh),this.corpses.splice(i,1))}}stepShows(e){for(const i of this.shows){if(!i.live)continue;i.ttl-=e;const n=Math.max(0,i.ttl/i.max),s=(r,o)=>{r.traverse(h=>{h instanceof w&&h.material instanceof st&&(h.material.opacity=(h.userData.baseOpacity??1)*o*i.fade)})};if(i.kind==="crescent")i.spin&&(i.mesh.rotation.y+=e*i.spin),i.mesh.scale.setScalar(i.scale*(1.3-(1-n)*.55)),s(i.mesh,n);else if(i.kind==="pillar")i.mesh.position.y=2.2+(1-n)*.8,i.mesh.scale.set(i.scale*(.7+n),i.scale*(1.2-n*.2),i.scale*(.7+n)),s(i.mesh,n*.85);else if(i.kind==="dome")i.mesh.position.set(this.px,.05,this.pz),i.mesh.scale.setScalar(i.scale*(.8+(1-n)*.5)),s(i.mesh,n*.55);else if(i.kind==="rune")i.mesh.rotation.z+=e*2.4,i.mesh.scale.setScalar(i.scale*(.9+(1-n)*.8)),s(i.mesh,n);else if(i.kind==="meteor")i.mesh.position.y=.5+n*6.7,i.mesh.rotation.x+=e*8,i.mesh.rotation.y+=e*6,s(i.mesh,.4+n*.6);else if(i.kind==="clone")s(i.mesh,n*.55),i.mesh.position.y=0;else if(i.kind==="drop")i.mesh.position.y=Math.max(.4,i.mesh.position.y-16*e),i.mesh.rotation.x=Math.PI,s(i.mesh,n),i.mesh.position.y<=.45&&n>.1&&(this.spawnFx("ring",i.x,.08,i.z,ee[this.runJob]),i.ttl=0);else if(i.kind==="sworddrop")i.target&&(i.x=i.target.mesh.position.x,i.z=i.target.mesh.position.z),i.max-i.ttl<.16?(i.mesh.position.set(i.x,6.4,i.z),i.mesh.rotation.x=Math.PI,i.mesh.rotation.y=i.yaw,s(i.mesh,1)):(i.mesh.position.x=i.x,i.mesh.position.z=i.z,i.mesh.position.y=Math.max(.35,i.mesh.position.y-26*e),i.mesh.rotation.x=Math.PI+Math.sin(i.mesh.id*.7)*.12,i.mesh.rotation.y=i.yaw+Math.sin(this.clock*3+i.mesh.id)*.06,s(i.mesh,1),i.mesh.position.y<=.4&&(this.spawnFx("ring",i.x,.08,i.z,ee.knight),this.burst(i.x,i.z,ee.knight,8),i.ttl=0));else if(i.kind==="warn"){const r=1-n;i.mesh.position.set(i.x,.05,i.z),i.mesh.scale.setScalar(i.scale);const o=i.mesh.getObjectByName("core");o&&o.scale.setScalar(Math.max(.02,r)),s(i.mesh,n<.12?n/.12:1)}else if(i.kind==="root"){const r=i.max-i.ttl,o=Math.min(1,r/.09),h=i.ttl<.2?i.ttl/.2:1,l=1-Math.pow(1-o,3);i.mesh.position.set(i.x,-1.25*i.scale*(1-l*h),i.z),i.mesh.rotation.set(0,-i.yaw,i.tilt),i.mesh.scale.setScalar(i.scale*(.7+.3*l))}else if(i.kind==="lane"){const r=1-n;i.mesh.position.set(i.x,.05,i.z),i.mesh.rotation.set(0,-i.yaw,0),i.mesh.scale.set(i.scale,1,i.tilt);const o=i.mesh.getObjectByName("core");o&&o.scale.set(Math.max(.02,r),1,1),s(i.mesh,n<.12?n/.12:1)}else if(i.kind==="cut"){i.target&&this.enemies.includes(i.target)&&(i.x=i.target.mesh.position.x,i.z=i.target.mesh.position.z);const r=1-n;i.mesh.position.set(i.x,.95+(i.target?i.target.mesh.position.y:0),i.z),i.mesh.quaternion.copy(this.camera.quaternion),i.mesh.rotateZ(i.yaw);const o=Math.min(1,r/.3),h=r>.55?1-(r-.55)/.45:1;i.mesh.scale.set(i.scale*(.15+o*.85),i.scale*Math.max(.15,h),1),s(i.mesh,Math.min(1,n*2.5))}else if(i.kind==="sweep"){const r=i.max-i.ttl;i.mesh.position.set(this.px,.95,this.pz),i.mesh.rotation.set(0,-(i.yaw+i.spin*r),0);const o=i.scale*(.92+(1-n)*.12);i.mesh.scale.set(o,o,i.spin<0?-o:o),s(i.mesh,Math.min(1,n*2.2))}else if(i.kind==="bat"){i.target&&this.enemies.includes(i.target)&&(i.x=i.target.mesh.position.x,i.z=i.target.mesh.position.z);const r=1-n,o=i.yaw+i.spin*(i.max-i.ttl),h=i.tilt*(1.2-r*.35)+(r>.8?(r-.8)*3:0);i.mesh.position.set(i.x+Math.cos(o)*h,.35+Math.min(1,r*1.6)*1.55+(r>.8?(r-.8)*4:0),i.z+Math.sin(o)*h);const l=i.spin>=0?1:-1,c=-Math.sin(o)*l,f=Math.cos(o)*l;i.mesh.rotation.set(-Math.PI/2+.35,Math.atan2(-c,-f),Math.sin(this.clock*9+i.yaw)*.25);const u=.45+.55*Math.abs(Math.sin(this.clock*34+i.yaw*3));i.mesh.scale.set(i.scale*u,i.scale,i.scale),s(i.mesh,Math.min(1,r*6,n*3))}else(i.kind==="blade"||i.kind==="band"||i.kind==="claw")&&(i.spin&&(i.mesh.rotation.z+=e*i.spin),i.mesh.scale.setScalar(i.scale*(1.1-n*.15)),s(i.mesh,n));i.ttl<=0&&(i.live=!1,i.mesh.visible=!1)}}applyHitFlash(e){let i=e.flash>0;if(i&&e.bossId&&!e.mesh.userData.flashing&&(this.clock-(e.mesh.userData.flashAt??-9)<.3?i=!1:e.mesh.userData.flashAt=this.clock),i===!!e.mesh.userData.flashing)return;e.mesh.userData.flashing=i,this.hitFlashMat??(this.hitFlashMat=this.mat(new st({color:16774898,fog:!1})));const n=this.hitFlashMat;e.mesh.traverse(s=>{if(s instanceof w)if(i){const r=s.material;if(Array.isArray(s.material)||r.transparent)return;s.userData.baseMat=r,s.material=n}else s.userData.baseMat&&(s.material=s.userData.baseMat,delete s.userData.baseMat)})}ensureAura(){this.aura||(this.aura=new w(this.sharedGeo("aura",()=>new jt(.85,.05,6,20)),this.mat(new st({color:ee.reaper,transparent:!0,opacity:.7,fog:!1,depthWrite:!1,blending:pe}))),this.aura.rotation.x=-Math.PI/2,this.scene.add(this.aura))}ensureMark(){this.markSigil||(this.markSigil=new w(this.sharedGeo("mark",()=>new Fe(.35,.5,16)),this.mat(new st({color:ee.hunter,transparent:!0,opacity:.85,side:Qt,fog:!1,depthWrite:!1,blending:pe}))),this.markSigil.rotation.x=-Math.PI/2,this.scene.add(this.markSigil))}ensureSparks(){if(this.sparkMesh)return this.sparkMesh;const e=this.sparkTtl.length,i=new Tn(this.sharedGeo("spark",()=>new Mt(.07,6,6)),this.mat(new st({color:16777215,fog:!1})),e);i.instanceMatrix.setUsage(fp),i.frustumCulled=!1;const n=new Bt(16777215);for(let s=0;s<e;s++)i.setColorAt(s,n);return i.instanceMatrix.array.fill(0),i.instanceMatrix.needsUpdate=!0,this.sparkTtl.fill(0),this.scene.add(i),this.sparkMesh=i,i}burst(e,i,n,s=8){this.lite?s=Math.min(s,3):s=Math.min(s,8);const r=this.ensureSparks(),o=this.sparkTtl.length;this.sparkColor.setHex(n);for(let h=0;h<s;h++){const l=this.sparkNext;this.sparkNext=(this.sparkNext+1)%o;const c=Math.random()*Math.PI*2,f=3+Math.random()*7;this.sparkPos[l*3]=e,this.sparkPos[l*3+1]=.85+Math.random()*.5,this.sparkPos[l*3+2]=i,this.sparkVel[l*3]=Math.cos(c)*f,this.sparkVel[l*3+1]=3+Math.random()*6,this.sparkVel[l*3+2]=Math.sin(c)*f,this.sparkTtl[l]=.32+Math.random()*.22,r.setColorAt(l,this.sparkColor)}r.instanceColor&&(r.instanceColor.needsUpdate=!0)}spawnFx(e,i,n,s,r,o=0,h=1){let l=this.fx.find(c=>!c.live&&c.kind===e);if(!l){let c=0,f;for(const u of this.fx)u.kind===e&&(c++,(!f||u.ttl<f.ttl)&&(f=u));c>=48&&(l=f)}if(!l){let c;e==="ring"||e==="shock"?(c=new w(this.sharedGeo("fx-ring",()=>new Fe(.35,.5,16)),this.mat(new st({color:r,transparent:!0,opacity:.9,side:Qt,fog:!1,depthWrite:!1}))),c.rotation.x=-Math.PI/2):e==="flash"?c=new w(this.sharedGeo("fx-flash",()=>new Ge(1.2,1.2)),this.mat(new st({map:this.makeStarTex(),color:r,transparent:!0,opacity:1,fog:!1,depthWrite:!1,blending:pe,side:Qt}))):e==="arc"?c=new w(this.sharedGeo("fx-arc",()=>{const f=new Ge(1,.14);return f.translate(.5,0,0),f}),this.mat(new st({map:this.makeStreakTex(),color:r,transparent:!0,opacity:1,fog:!1,depthWrite:!1,blending:pe,side:Qt}))):c=new w(this.sharedGeo("fx-streak",()=>new Ge(1.4,.18)),this.mat(new st({map:this.makeStreakTex(),color:r,transparent:!0,opacity:1,fog:!1,depthWrite:!1,blending:pe}))),this.scene.add(c),l={mesh:c,kind:e,ttl:0,max:.28,live:!1,yaw:0,len:1},this.fx.push(l)}l.live=!0,l.ttl=l.max,l.yaw=o,l.len=h,l.mesh.visible=!0,l.mesh.position.set(i,n,s),e==="streak"?l.mesh.rotation.set(0,-o,0):e==="arc"&&(l.mesh.rotation.set(0,-o,0),l.mesh.scale.set(h,1,1)),l.mesh.material.color.setHex(r),l.mesh.material.opacity=e==="flash"&&vi().calmFlash?.3:1}impact(e,i,n,s=!1,r=!1){this.burst(e,i,n,s?14:8),this.spawnFx("ring",e,.08,i,n),this.spawnFx("flash",e,1,i,n),this.bloomKick=Math.min(1.2,this.bloomKick+(s?.85:r?.7:.4)),this.hitLight||(this.hitLight=new _s(n,0,8,2),this.scene.add(this.hitLight)),this.hitLight.color.setHex(n),this.hitLight.intensity=s?3.2:1.8,this.hitLight.position.set(e,1.2,i)}stepFx(e){this.bloomKick=Math.max(0,this.bloomKick-e*3.4),this.hitLight&&(this.hitLight.intensity=Math.max(0,this.hitLight.intensity-e*10));for(const i of this.fx){if(!i.live)continue;i.ttl-=e;const n=Math.max(0,i.ttl/i.max),s=i.mesh.material;if(s.opacity=n,i.kind==="arc")i.mesh.scale.set(i.len,1+(1-n)*.5,1);else{const r=1+(1-n)*(i.kind==="ring"||i.kind==="shock"?2.4:.6);i.mesh.scale.setScalar(r)}i.kind==="flash"&&i.mesh.lookAt(this.camera.position),i.ttl<=0&&(i.live=!1,i.mesh.visible=!1)}}stepSparks(e){const i=this.sparkMesh;if(!i)return;const n=i.instanceMatrix.array,s=this.sparkTtl.length;let r=!1;for(let o=0;o<s;o++){if(this.sparkTtl[o]<=0)continue;r=!0;const h=this.sparkTtl[o]-=e,l=o*16;if(h<=0){n[l]=n[l+5]=n[l+10]=0;continue}const c=o*3;this.sparkPos[c]+=this.sparkVel[c]*e,this.sparkPos[c+1]+=this.sparkVel[c+1]*e,this.sparkPos[c+2]+=this.sparkVel[c+2]*e,this.sparkVel[c+1]-=18*e;const f=Math.min(1,h*3);n[l]=f,n[l+1]=n[l+2]=n[l+3]=n[l+4]=0,n[l+5]=f,n[l+6]=n[l+7]=n[l+8]=n[l+9]=0,n[l+10]=f,n[l+11]=0,n[l+12]=this.sparkPos[c],n[l+13]=this.sparkPos[c+1],n[l+14]=this.sparkPos[c+2],n[l+15]=1}r&&(i.instanceMatrix.needsUpdate=!0)}}const ei={tempest:{name:"Tempest",color:10475775,members:["firerate","haste","dash","stormstep"],two:"+8% attack speed",three:"Dashing flings a ring of bolts"},hearth:{name:"Hearth",color:16761466,members:["vitality","leech","ward","overshield"],two:"+20 max life",three:"Each chamber cleared mends 20% of your life"},pyre:{name:"Pyre",color:16747098,members:["splinter","echo","kindling","chainreact"],two:"+8% damage",three:"Kills burst into flame around them"},wrath:{name:"Wrath",color:16738954,members:["damage","fury","glassheart","bloodrush"],two:"+8% damage",three:"+20% attack speed below half life"},rime:{name:"Rime",color:12577279,members:["frost","frostbite","pierce","bounce"],two:"+12% damage to slowed foes",three:"Slowed foes shatter when they fall"},kinship:{name:"Kinship",color:12118228,members:["bond","multishot","magnet","phantom","thunderguard"],two:"Your familiar deals 30% more",three:"Your familiar 30% more again, and you +6% damage"}},Tr=Object.keys(ei);function Av(a){return Tr.find(t=>ei[t].members.includes(a))}function Rv(a){const t={};for(const e of Tr)t[e]=ei[e].members.filter(i=>a.includes(i)).length;return t}function Cv(a){return a>=3?3:a>=2?2:0}class Pv extends Ev{hurt(t,e=0,i=0){if(!this.alive||this.practiceSkin)return;if(vi().assist&&(t*=.6),!Number.isFinite(this.hp)||this.hp<=0){this.die();return}if(this.iFrames>0)return;if(this.petGuard>0){this.petGuard-=1,this.iFrames=Math.max(this.iFrames,.35),this.impact(this.petX,this.petZ,Rt[1],!1),this.pushHud("Familiar ward");return}if(this.ward>0){this.ward-=1,this.iFrames=Math.max(this.iFrames,.4),this.impact(this.px,this.pz,Rt[1],!1),this.pushHud("Ward held");return}let n=t*pf(this.room)*(this.roomIsBoss?Ot.bossRoomDamage:1)*this.curseDmg*this.oath.damageTaken;this.newcomer&&this.room<=2&&(n*=Ot.newcomerDamage);const s=this.hp>this.maxHp*.25;if(this.hp-=n,s&&this.hp>0&&this.hp<=this.maxHp*.25&&mf(),this.petTalents.includes("kin")&&(this.petFire=0),Yh("hurt"),this.logDamage(n,e,i),this.hp<=0&&this.emberLeft>0){this.emberLeft-=1,this.hp=Math.round(this.maxHp*.3),this.iFrames=1.6,this.spawnFx("shock",this.px,.08,this.pz,16761466),this.spawnFx("flash",this.px,1,this.pz,16761466),this.burst(this.px,this.pz,16761466,14),gf(),this.pushHud("Last Ember: the ruin lets you up once");return}const r=this.swapLeft>0&&this.runJob==="wanderer"?.2:0;this.iFrames=Ot.hurtIFrames+this.extraIFrames+r,this.trauma=Math.min(1,this.trauma+.2),xf(),Zs(110,.7);const o=Math.atan2(this.pz-i,this.px-e);this.vx+=Math.cos(o)*6,this.vz+=Math.sin(o)*6,this.impact(this.px,this.pz,Rt[0],!1,!0),this.pushHud(),this.hp<=0?this.die():this.onHurt()}onHurt(){}die(){this.finishRunLog("died"),this.summarize(!1),ds("death"),this.alive=!1,Mf(),this.endRun(!1),ce.getState().setScreen("dead")}beginRunLog(){const e=Ue().jobs[this.runJob],i=this.rush?"rush":this.weekly?"weekly":this.daily?"daily":this.endless?"endless":void 0;this.runLog={at:Date.now(),job:this.runJob,weapon:this.skin,level:e.level,tier:this.classIndex+1,heat:this.oath.heat,result:"open",endRoom:this.room,secs:0,rooms:[],mode:i},this.roomLog=void 0}reopenRunLog(){const t=this.diedLog;this.diedLog=void 0,!(!t||this.runLog)&&(t.run.result="open",this.runLog=t.run,this.roomLog=t.room)}beginRoomLog(t){this.runLog&&(this.closeRoomLog(),this.roomLog={room:this.room,kind:t,secs:0,dmg:0,by:{},kills:0,lowPct:Math.round(100*this.hp/Math.max(1,this.maxHp))},this.roomLogAt=this.clock,this.runLog.rooms.push(this.roomLog))}closeRoomLog(){this.roomLog&&(this.roomLog.secs=+(this.clock-this.roomLogAt).toFixed(1))}logDamage(t,e,i){const n=this.roomLog;if(!n)return;let s="shots/hazards",r=1.6;for(const o of this.enemies){const h=Math.hypot(o.mesh.position.x-e,o.mesh.position.z-i);h<r&&(r=h,s=o.bossId??o.kind)}n.dmg=Math.round(n.dmg+t),n.by[s]=Math.round((n.by[s]??0)+t),n.lowPct=Math.min(n.lowPct,Math.max(0,Math.round(100*this.hp/Math.max(1,this.maxHp))))}logKill(){this.roomLog&&(this.roomLog.kills+=1)}finishRunLog(t){const e=this.runLog;if(!e||e.result!=="open")return;this.closeRoomLog(),e.result=t,e.endRoom=this.room,e.secs=+e.rooms.reduce((n,s)=>n+s.secs,0).toFixed(1),vf(e);const i=Ue();i.stats.secs+=e.secs,mn(i),this.diedLog=t==="died"?{run:e,room:this.roomLog}:void 0,this.runLog=void 0,this.roomLog=void 0}bankRun(){_f(this.unbanked.kills,this.unbanked.elites,this.unbanked.bosses,this.unbanked.champions,this.unbanked.byKind),this.unbanked={kills:0,elites:0,bosses:[],champions:0,byKind:{}},wf(this.masteryGain),this.masteryGain={},Sf()}summarize(t){ce.getState().setRunSummary({won:t,room:this.room,chambers:this.runCleared,kills:this.kills,bigHit:Math.round(this.runBigHit),secs:Math.round(this.clock-this.runStartClock),newBest:this.room>this.runStartBest,endless:this.endless,mastery:this.masterySummary()})}masterySummary(){var r;const t=Object.entries(this.masteryRun).sort((o,h)=>h[1]-o[1])[0];if(!t||t[1]<=0)return;const[e,i]=t,n=this.masteryBase[e]??0,s=tr(n+i);return{name:((r=Qc(e))==null?void 0:r.name)??e,gained:Math.round(i),rank:s,rankUp:s>tr(n)}}endRun(t){if(this.daily&&yf(this.room),this.weekly){const i=bf(this.room,t);i&&this.pushHud(`Weekly challenge cleared: +${i} Ash`)}const e=Ue();if(this.rush&&t){const i=Math.round(this.clock-this.rushStart);e.bossRush.clears+=1,e.bossRush.bestSecs=e.bossRush.bestSecs?Math.min(e.bossRush.bestSecs,i):i}this.rush||(e.bestRoom=Math.max(e.bestRoom,this.room)),this.endless&&(e.bestDepth=Math.max(e.bestDepth??0,this.room)),t&&(e.jobs[this.runJob].cleared=!0,e.ash+=20,e.bestHeat=Math.max(e.bestHeat??0,this.oath.heat)),mn(e),ce.getState().refreshSave(),this.paused=!0,this.bankRun()}practiceReadout(){const t=this.clock-4;if(this.practiceHits=this.practiceHits.filter(n=>n.t>=t),!this.practiceHits.length)return"Practice: hit the dummies. Pause to leave.";const e=Math.max(1,this.clock-this.practiceHits[0].t),i=this.practiceHits.reduce((n,s)=>n+s.a,0);return`Damage per second: ${Math.round(i/Math.min(4,e))}`}pushHud(t){var h;const e=Ue(),i=e.jobs[this.runJob],n=this.job.dashMs/this.dashMul/1e3,s=jc(this.runJob,this.classIndex,this.skin),r=this.enemies.find(l=>l.bossId)??this.enemies.find(l=>l.champion),o=this.rageLeft>0?"Frenzy":this.markLeft>0?"Mark":this.petBoost>0?"Cry":"";ce.getState().setHud({hp:Math.max(0,this.hp),maxHp:this.maxHp,room:this.room,job:this.runJob,className:this.job.className,level:i.level,xp:i.xp,xpNext:Ef(i.level),dashReady:this.dashCd<=0?1:1-this.dashCd/n,petReady:this.petKind?this.petCharge:0,petAbility:this.petKind?_o[this.petKind].name:"",killCount:this.kills,swapLeft:this.swapLeft,relics:this.relics,curse:this.curse,waveHint:t??(this.practiceSkin?this.practiceReadout():ce.getState().hud.waveHint),companion:this.petKind?Tf(this.petKind,this.petLevel):"None",ash:e.ash,skillName:s.name,skillReady:this.skillCd<=0?1:1-this.skillCd/this.skillMax,buff:this.ward>0?`Ward ${this.ward}`:o,act:_e(this.room),actName:this.practiceSkin?"Practice":`${this.daily?"Daily · ":this.weekly?"Weekly · ":this.rush?"Boss Rush · ":""}${this.endless&&wo(this.room)>1?`${ir[_e(this.room)-1]}, depth ${wo(this.room)}`:ir[_e(this.room)-1]}`,roomKills:this.roomKills,roomTarget:this.roomTarget,roomIsBoss:this.roomIsBoss,bossName:r!=null&&r.bossId?er[r.bossId]:((h=r==null?void 0:r.champion)==null?void 0:h.name)??"",bossHp:r?Math.max(0,r.hp):0,bossMaxHp:(r==null?void 0:r.maxHp)??0,bossPhase:(r==null?void 0:r.bossPhase)??0,bossShielded:!!(r&&((r.intro??0)>0||(r.invuln??0)>0)),sets:Tr.map(l=>({id:l,have:ei[l].members.filter(c=>this.heldIds.includes(c)).length})).filter(l=>l.have>0).map(({id:l,have:c})=>({name:ei[l].name,color:ei[l].color,have:c,size:ei[l].members.length,two:ei[l].two,three:ei[l].three}))})}}const Iv={court:{tint:16771280,power:1.4,reach:9},hall:{tint:16768184,power:1.5,reach:10},cross:{tint:12903167,power:1.5,reach:10},shrine:{tint:16767392,power:2.1,reach:11},elite:{tint:16751272,power:1.9,reach:10},trap:{tint:10475775,power:1.25,reach:8},gallery:{tint:16770752,power:1.5,reach:10},choir:{tint:14206207,power:1.7,reach:12},vault:{tint:16769184,power:1.9,reach:11},boss:{tint:16748410,power:2.4,reach:13}};class Lv extends Pv{buildChamber(){const t=_e(this.room),e=ns("floor",t);e.repeat.set(3,3),e.anisotropy=this.lite?1:8,this.texs.push(e);const i=ns("wall",t);i.repeat.set(4,1),i.anisotropy=this.lite?1:8,this.texs.push(i);const n=ns("moss",t);n.repeat.set(1,1),this.texs.push(n),this.mossMap=n,this.scene.add(new X0(13154520,this.lite?1.1:.82)),this.scene.add(new G0(15786228,10123408,this.lite?.5:.7));const s=new dh(16770248,this.lite?.75:1.05);if(s.position.set(6,28,8),s.castShadow=!this.lite,this.lite||(s.shadow.mapSize.set(512,512),s.shadow.camera.near=4,s.shadow.camera.far=50,s.shadow.camera.left=-16,s.shadow.camera.right=16,s.shadow.camera.top=16,s.shadow.camera.bottom=-16),this.scene.add(s),!this.lite){const g=new dh(12109055,.55);g.position.set(-8,10,-16),this.scene.add(g)}const r=Ai/2;this.floorMat=this.mat(new nc({map:e,roughness:.94,metalness:.08,color:Ys[_e(this.room)].floor,emissive:11045016,emissiveIntensity:this.lite?.05:.06}));const o=new w(this.geo(new Ge(Ai+6,Ai+6)),this.floorMat);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,this.scene.add(o);const h=this.mat(new nc({map:i,roughness:.82,metalness:.12,color:13153468,emissive:9994384,emissiveIntensity:this.lite?.08:.14}));this.wallMat=h;const l=2.35,c=(g,x,m,p)=>{const M=new w(this.geo(new Pt(m,l,p)),h);M.position.set(g,l/2,x),M.castShadow=!0,M.receiveShadow=!0,M.matrixAutoUpdate=!1,M.updateMatrix(),this.scene.add(M);const _=new w(this.geo(new Pt(Math.max(m,.2),.1,Math.max(p,.2))),this.mat(new st({color:Rt[0]})));_.position.set(g,l+.04,x),_.matrixAutoUpdate=!1,_.updateMatrix(),this.scene.add(_),this.walls.push({minx:g-m/2,maxx:g+m/2,minz:x-p/2,maxz:x+p/2,perim:!0});const v=m>=p,b=v?m:p,T=Math.floor(b/1.25);for(let R=0;R<T;R++){const S=(Math.imul(R+1,2654435761)^Math.imul(Math.round(g+x*7),40503)^this.runSeed)>>>0;if(S%100<25)continue;const A=.3+(S>>>8)%100/250,L=new w(this.geo(new Pt(v?.72:Fi*.85,A,v?Fi*.85:.72)),h),F=(R+.5)/T-.5;L.position.set(v?g+F*b:g,l+A/2,v?x:x+F*b),L.castShadow=!0,L.matrixAutoUpdate=!1,L.updateMatrix(),this.scene.add(L)}};c(0,-r,Ai+Fi*2,Fi),c(0,r,Ai+Fi*2,Fi),c(-r,0,Fi,Ai),c(r,0,Fi,Ai);const f=[[-r+2.2,-r+2.2,Rt[0]],[r-2.2,-r+2.2,Rt[1]],[-r+2.2,r-2.2,Rt[2]],[r-2.2,r-2.2,Rt[3]]],u=this.sharedGeo("lamp",()=>new Mt(.18,8,8)),d=this.sharedGeo("post",()=>new Ut(.07,.09,2.1,6));for(const[g,x,m]of f){const p=new w(u,this.mat(new st({color:m})));p.position.set(g,2.15,x),p.matrixAutoUpdate=!1,p.updateMatrix(),this.scene.add(p);const M=new w(d,this.toon(2101288,m,.3));M.position.set(g,1.05,x),M.matrixAutoUpdate=!1,M.updateMatrix(),this.scene.add(M)}this.scene.add(this.layoutRoot),this.dressLayout(this.room),this.makeParallax(i)}retextureAct(t){const e=this.floorMat,i=this.wallMat;if(!e||!i)return;const n=ns("floor",t);n.repeat.set(3,3),n.anisotropy=this.lite?1:8;const s=ns("wall",t);s.repeat.set(4,1),s.anisotropy=this.lite?1:8;const r=ns("moss",t),o=[e.map,i.map,this.mossMap];e.map=n,i.map=s,this.mossMap=r,e.needsUpdate=!0,i.needsUpdate=!0;for(const h of o)h&&(h.dispose(),this.texs=this.texs.filter(l=>l!==h));this.texs.push(n,s,r)}makeParallax(t){this.farLayer=new Jt,this.midLayer=new Jt,this.nearLayer=new Jt,this.scene.add(this.farLayer,this.midLayer,this.nearLayer);const e=this.sharedGeo("ruin",()=>new Pt(3.2,4.5,1.2)),i=this.mat(new st({map:t,color:6971512}));for(let l=0;l<6;l++){const c=l/6*Math.PI*2,f=new w(e,i);f.position.set(Math.cos(c)*28,2,Math.sin(c)*28),f.lookAt(0,2,0),f.matrixAutoUpdate=!1,f.updateMatrix(),this.farLayer.add(f)}const n=this.mat(new st({map:this.hazeTex("rgba(240,184,200,1)"),transparent:!0,opacity:.45,depthWrite:!1,fog:!1})),s=this.mat(new st({map:this.hazeTex("rgba(184,232,212,1)"),transparent:!0,opacity:.45,depthWrite:!1,fog:!1}));this.hazeA=new w(this.geo(new Ge(18,8)),n),this.hazeA.position.set(-4,3,-8),this.hazeB=new w(this.geo(new Ge(16,7)),s),this.hazeB.position.set(6,2.4,5),this.midLayer.add(this.hazeA,this.hazeB);const r=this.lite?12:22,o=new Float32Array(r*3);for(let l=0;l<r;l++)o[l*3]=(Math.random()-.5)*22,o[l*3+1]=.4+Math.random()*2.4,o[l*3+2]=(Math.random()-.5)*22;this.moteArr=o;const h=this.geo(new Le);h.setAttribute("position",new ui(o,3)),this.motes=new s0(h,this.mat(new bu({color:16109736,size:.08,transparent:!0,opacity:.55,depthWrite:!1}))),this.nearLayer.add(this.motes)}dressLayout(t){if(!this.wallMat)return;this.clearHazards();const e=mv({room:Af(t),root:this.layoutRoot,walls:this.walls,wallMat:this.wallMat,floorMat:this.floorMat,kit:this.kit,lite:this.lite,mossMap:this.mossMap,seed:this.runSeed}),i=(this.room*2654435761^this.runSeed)>>>0&3;this.layoutRoot.rotation.y=i*Math.PI/2;const n=(h,l)=>i===1?[l,-h]:i===2?[-h,-l]:i===3?[-l,h]:[h,l],s=h=>{const[l,c]=n(h.minx,h.minz),[f,u]=n(h.maxx,h.maxz);return{...h,minx:Math.min(l,f),maxx:Math.max(l,f),minz:Math.min(c,u),maxz:Math.max(c,u)}};this.walls=e.walls.map(h=>h.perim?h:s(h)),this.plats=e.plats.map(s);const r=e.crystal;if(r){const[h,l]=n(r.x,r.z);this.crystalSpot={...r,x:h,z:l}}else this.crystalSpot=r;for(const h of e.hazards){const[l,c]=n(h.x,h.z);this.placeHazard(l,c)}const o=Ys[_e(t)];if(this.scene.fog instanceof aa&&this.scene.fog.color.setHex(o.fog),this.scene.background instanceof Bt&&this.scene.background.setHex(o.bg),!this.lite){const h=Iv[Bi(t).kind];for(;this.roomLights.length<e.lights.length;){const l=new _s(h.tint,h.power,h.reach,2);this.scene.add(l),this.roomLights.push(l)}this.roomLights.forEach((l,c)=>{const f=e.lights[c];if(f){const[u,d]=n(f.x,f.z);l.visible=!0,l.color.setHex(h.tint),l.distance=h.reach,l.intensity=h.power,l.userData.base=h.power,l.position.set(u,2.4,d)}else l.visible=!1})}}placeHazard(t,e){const i=new w(this.sharedGeo("hazard",()=>new Fe(.55,.85,16)),this.mat(new st({color:Rt[0],transparent:!0,opacity:.35,side:Qt,fog:!1,depthWrite:!1})));i.rotation.x=-Math.PI/2,i.position.set(t,.06,e),this.scene.add(i);const n=this.sharedGeo("hazard-spike",()=>new Vt(.09,.4,5)),s=this.toon(Rt[3],Rt[0],.25),r=[],o=6;for(let h=0;h<o;h++){const l=h/o*Math.PI*2,c=new w(n,s);c.position.set(t+Math.cos(l)*.62,0,e+Math.sin(l)*.62),c.castShadow=!0,this.scene.add(c),r.push(c)}this.hazards.push({mesh:i,spikes:r,x:t,z:e,t:Math.random()*1.6})}clearHazards(){for(const t of this.hazards){this.scene.remove(t.mesh);for(const e of t.spikes)this.scene.remove(e)}this.hazards=[]}stepHazards(t){var e;for(const i of this.hazards){i.t+=t;const n=i.t%1.8,s=n>1.32,r=i.mesh.material;r.opacity=s?.92:.28,r.color.setHex(s?Rt[0]:Rt[3]),i.mesh.scale.setScalar(s?1.15:.95);const o=1.02,h=n>=o?Math.min(1,(n-o)/(1.32-o)):0,l=(e=i.spikes[0])==null?void 0:e.material;l&&(l.color.setHex(s?Rt[0]:Rt[3]),l.emissiveIntensity=s?.5:.2);for(const c of i.spikes)c.position.y=-.4+h*.6;s&&Math.hypot(this.px-i.x,this.pz-i.z)<.95&&this.hurt(9,i.x,i.z)}if(this.shrineHeal>0&&Math.hypot(this.px,this.pz)<1.7){const i=Math.min(this.shrineHeal,22*t);this.shrineHeal-=i,this.hp=Math.min(this.maxHp,this.hp+i)}}ensureSafe(){const t=Ui(this.px,this.pz,.45,this.walls);this.px=t.x,this.pz=t.z,this.safeX=t.x,this.safeZ=t.z}}class Dv extends Lv{queueBeat(t,e){this.beats.push({t,run:e})}anchorAura(t,e){for(const i of this.enemies)if(i.kind==="anchor"&&Math.hypot(i.mesh.position.x-t,i.mesh.position.z-e)<3.5)return .55;return 1}damageAround(t,e,i,n,s,r){for(const o of[...this.enemies])Math.hypot(o.mesh.position.x-t,o.mesh.position.z-e)>i+o.r||this.damageOne(o,t,e,n*((r==null?void 0:r(o))??1),s)}flinchFrom(t,e,i){t.flinch=.22,t.flinchX=e,t.flinchZ=i}damageOne(t,e,i,n,s,r=!1){if(this.bossShielded(t)||t.burrowed)return;const o=Math.atan2(t.mesh.position.z-i,t.mesh.position.x-e),h=this.isGuardedHit(t,o)?.25:1;this.dealTo(t,n*h*this.anchorAura(t.mesh.position.x,t.mesh.position.z)),t.flash=.1,r||(Rf(),t.recoil=.2,this.flinchFrom(t,Math.cos(o),Math.sin(o)),this.impact(t.mesh.position.x,t.mesh.position.z,ee[this.runJob],!1)),this.frost&&(t.slow=Math.max(t.slow,1.4)),s==null||s(t),t.bossId&&this.maybeBossPhase(t),t.hp<=0&&this.killEnemy(t)}addMastery(t){this.practiceSkin||(this.masteryGain[this.skin]=(this.masteryGain[this.skin]??0)+t,this.masteryRun[this.skin]=(this.masteryRun[this.skin]??0)+t)}hitDamage(){const t=Math.max(0,this.job.pellets-1)+this.extraPellets;return(this.job.damage+this.extraDmg+Ot.extraShotDamage*t)*(Ot.weaponPower[this.skin]??1)*Cf(this.masteryRank)}bonusPierce(){return Math.max(0,this.job.pierce-tu[this.runJob].pierce)+this.extraPierce}setDamage(t){return(this.setOn("wrath",2)?1.08:1)*(this.setOn("pyre",2)?1.08:1)*(this.setOn("kinship",3)?1.06:1)*(this.setOn("rime",2)&&t.slow>0?1.12:1)}damageMul(){const t=this.swapLeft>0&&this.runJob==="arcanist"?1.2:1,e=this.markLeft>0?1.85:1,i=this.rageLeft>0?1.35:1,n=this.fury&&this.hp/this.maxHp<.4?1.45:1;return t*e*i*n}dealTo(t,e){t.kind==="shell"&&t.chargeState===1&&(e*=.15);let i=e*this.damageMul()*(this.rares.has("glassheart")?1.35:1)*(this.rares.has("frostbite")&&t.slow>0?1.35:1)*this.setDamage(t);if((t.ward??0)>0){const n=Math.min(t.ward??0,i*Ot.wardSoak);if(t.ward=(t.ward??0)-n,i-=n,(t.ward??0)<=0){const s=t.mesh.position.x,r=t.mesh.position.z;this.spawnFx("shock",s,.08,r,ji.warded.color),Pf(),this.burst(s,r,ji.warded.color,10),this.dropAffixRing(t,"warded")}}t.hp-=i,t.dummy&&(t.hp<t.maxHp*.5&&(t.hp=t.maxHp),this.practiceHits.push({t:this.clock,a:i})),i>this.runBigHit&&(this.runBigHit=i),this.queueDamageNumber(t,i,i>=this.hitDamage()*2.2)}dropAffixRing(t,e){const i=t.mesh.getObjectByName(`affix-${e}`);i&&i.removeFromParent()}bossShielded(t){return!t.bossId||(t.intro??0)<=0&&(t.invuln??0)<=0?!1:(Math.random()<.3&&this.burst(t.mesh.position.x,t.mesh.position.z,16777215,2),!0)}isBackstab(t,e){const i=Math.sin(t.mesh.rotation.y),n=Math.cos(t.mesh.rotation.y);return i*Math.cos(e)+n*Math.sin(e)>.35}isGuardedHit(t,e){if(!If(t.kind))return!1;const i=Math.sin(t.mesh.rotation.y),n=Math.cos(t.mesh.rotation.y);return i*Math.cos(e)+n*Math.sin(e)<-.35}markEnemy(t,e=!1){const i=t.mesh.position.x,n=t.mesh.position.z,s=e?4:3;for(let r=0;r<s;r++){const o=Math.random()*Math.PI,h=r%2===0?2757939:13134847,l=(Math.random()-.5)*.22,c=(Math.random()-.5)*.22;this.queueBeat(r*.03,()=>{this.spawnFx("streak",i+l,.9+Math.random()*.3,n+c,h,o),this.burst(i+l,n+c,3809093,2)})}e&&this.queueBeat((s-1)*.03,()=>this.spawnFx("flash",i,1.05,n,13134847))}glowShot(t,e,i,n=.45){const s=this.mat(new st({color:e,fog:!1,transparent:!0,opacity:1,blending:pe,depthWrite:!1})),r=new w(t,s),o=new w(i,this.mat(new st({color:e,fog:!1,transparent:!0,opacity:n,blending:pe,depthWrite:!1})));return r.add(o),r}shotMesh(t){if(t==="enemy"){const s=new w(this.sharedGeo("shot-enemy-core",()=>new Mt(.15,12,10)),this.mat(new st({color:2363436,fog:!1}))),r=new w(this.sharedGeo("shot-enemy-rim",()=>new Mt(.22,12,10)),this.mat(new st({color:16723306,fog:!1,side:Ze})));return s.add(r),s}const e=ee[this.runJob];if(t==="bolt"){let s,r;if(this.skin==="arrowbolt")s=this.glowShot(this.sharedGeo("shot-arrow",Hc),e,this.sharedGeo("shot-arrow-glow",()=>new Xe(.16,10)),.35),r=()=>this.sharedGeo("shot-arrow",Hc);else{const c=new w(this.sharedGeo("shot-bolt-core",()=>new ye(.07,0)),this.mat(new st({color:16777215,fog:!1,transparent:!0,opacity:1,blending:pe,depthWrite:!1}))),f=new w(this.sharedGeo("shot-bolt-spark",()=>new Fe(.12,.16,16)),this.mat(new st({color:e,fog:!1,transparent:!0,opacity:1,blending:pe,depthWrite:!1,side:Qt})));f.name="boltSpark",c.add(f);const u=new Vs(this.mat(new us({map:this.glintTex(),color:16777215,transparent:!0,opacity:.7,blending:pe,depthWrite:!1,fog:!1})));u.scale.setScalar(.34),u.name="boltGlint",c.add(u),s=c,r=()=>this.sharedGeo("shot-bolt-core",()=>new ye(.07,0))}const o=Rt[1],h=new w(this.sharedGeo("shot-bolt-ring",()=>new jt(.32,.022,6,14)),this.mat(new st({color:o,fog:!1,transparent:!0,opacity:.8,blending:pe,depthWrite:!1})));h.name="tierRing",h.visible=!1,s.add(h);const l=new w(r(),this.mat(new st({color:o,fog:!1,transparent:!0,opacity:.55,blending:pe,depthWrite:!1})));return l.name="tierEcho",l.scale.setScalar(.55),l.position.set(.24,0,.12),l.visible=!1,s.add(l),s}if(t==="shard"){const s=()=>{const c=new Vs(this.mat(new us({map:this.glintTex(),transparent:!0,opacity:.85,blending:pe,depthWrite:!1,fog:!1})));return c.scale.setScalar(.22),c.position.set(0,.14,0),c},r=Rt[1],o=()=>{const c=new w(this.sharedGeo("shot-shard-ring",()=>new jt(.1,.016,6,12)),this.mat(new st({color:r,fog:!1,transparent:!0,opacity:.8,blending:pe,depthWrite:!1})));return c.position.set(0,-.16,0),c.rotation.x=Math.PI/2,c.name="tierRing",c.visible=!1,c};if(this.skin==="twinfang"){const c=this.glowShot(this.sharedGeo("shot-fang",mo),e,this.sharedGeo("shot-fang-glow",()=>new Xe(.14,10)),.35),f=new w(this.sharedGeo("shot-fang",mo),this.mat(new st({color:e,fog:!1,transparent:!0,opacity:1,blending:pe,depthWrite:!1})));f.position.set(.09,-.1,0),f.rotation.z=.4;const u=new w(this.sharedGeo("shot-fang",mo),this.mat(new st({color:r,fog:!1,transparent:!0,opacity:.5,blending:pe,depthWrite:!1})));return u.scale.setScalar(.55),u.position.set(-.12,.18,0),u.name="tierEcho",u.visible=!1,c.add(f,s(),o(),u),c}const h=this.glowShot(this.sharedGeo("shot-shard",kc),e,this.sharedGeo("shot-shard-glow",()=>new Xe(.16,10)),.35),l=new w(this.sharedGeo("shot-shard",kc),this.mat(new st({color:r,fog:!1,transparent:!0,opacity:.5,blending:pe,depthWrite:!1})));return l.scale.setScalar(.55),l.position.set(-.12,.18,0),l.name="tierEcho",l.visible=!1,h.add(s(),o(),l),h}if(t==="chain"){if(this.skin==="prismshard")return this.glowShot(this.sharedGeo("shot-prism",()=>new ye(.16,0)),e,this.sharedGeo("shot-prism-glow",()=>new Mt(.26,10,8)),.3);const s=new w(this.sharedGeo("shot-bolt-lightning",()=>Gc(.02)),this.mat(new st({color:16052479,fog:!1,transparent:!0,opacity:.95,blending:pe,depthWrite:!1}))),r=new w(this.sharedGeo("shot-bolt-lightning-glow",()=>Gc(.05)),this.mat(new st({color:e,fog:!1,transparent:!0,opacity:.55,blending:pe,depthWrite:!1})));s.add(r);const o=new Vs(this.mat(new us({map:this.glintTex(),color:16777215,transparent:!0,opacity:.85,blending:pe,depthWrite:!1,fog:!1})));return o.scale.setScalar(.28),o.name="chainGlint",s.add(o),s}if(t==="wave"){const s=this.skin==="dawnedge",r=s?Math.PI*1.15:Math.PI*.95,o=new w(this.sharedGeo(s?"shot-wave-wide":"shot-wave",()=>new jt(.62,s?.055:.078,8,22,r)),this.mat(new st({color:e,map:this.glowTex(),fog:!1,transparent:!0,opacity:.9,blending:pe,depthWrite:!1,side:Qt}))),h=new w(this.sharedGeo(s?"shot-wave-wide-core":"shot-wave-core",()=>new jt(.62,.026,8,22,r)),this.mat(new st({color:16774368,fog:!1,transparent:!0,opacity:.95,blending:pe,depthWrite:!1,side:Qt})));return o.add(h),o}if(t==="slash"){const s=new w(this.sharedGeo("shot-slash",()=>new jt(.95,.08,6,20,Math.PI*1.25)),this.mat(new st({color:e,map:this.glowTex(),fog:!1,transparent:!0,opacity:.85,blending:pe,depthWrite:!1,side:Qt}))),r=new w(this.sharedGeo("shot-slash-core",()=>new jt(.95,.03,6,20,Math.PI*1.25)),this.mat(new st({color:16774890,fog:!1,transparent:!0,opacity:.95,blending:pe,depthWrite:!1,side:Qt})));return s.add(r),s}const i=this.mat(new st({color:e,fog:!1,opacity:1})),n=t==="orb"?this.sharedGeo("shot-orb",()=>new Mt(.18,10,8)):this.sharedGeo("shot-enemy",()=>new Mt(.14,8,8));return new w(n,i)}aimShot(t){const e=Math.atan2(t.vz,t.vx);if(t.kind==="slash")t.mesh.rotation.set(.22,e,0);else if(t.kind==="wave")this.skin==="dawnedge"?t.mesh.rotation.set(.3,e,0):t.mesh.rotation.set(Math.PI/2,e,this.clock*16+t.mesh.id);else if(t.kind==="orb")t.mesh.rotation.x=.25;else if(t.kind==="shard"){const i=Math.sin(this.clock*22+t.mesh.id*.4)*.08;t.mesh.rotation.set(Math.PI/2+i,0,e-Math.PI/2)}else if(t.kind==="bolt"&&this.skin!=="arrowbolt"){const i=this.runJob==="wanderer"?this.classIndex:0;t.mesh.rotation.set(Math.PI/2,0,this.clock*(30+i*4)+t.mesh.id);const n=t.mesh.getObjectByName("boltGlint");n&&(n.material.rotation=this.clock*9+t.mesh.id*.3);const s=t.mesh.getObjectByName("boltSpark");s&&(s.lookAt(this.camera.position),s.rotateZ(this.clock*5+t.mesh.id*.4))}else if(t.kind==="chain"&&this.skin!=="prismshard"){const i=Math.sin(this.clock*45+t.mesh.id*3)*.09;t.mesh.rotation.set(Math.PI/2,0,e-Math.PI/2+i);const n=t.mesh.getObjectByName("chainGlint");n&&(n.material.rotation=this.clock*14+t.mesh.id*.3)}else t.mesh.rotation.set(Math.PI/2,0,e-Math.PI/2)}spawnBullet(t,e,i,n,s){const r=n?this.bullets:this.eBullets,o=(s==null?void 0:s.kind)??(n?"bolt":"enemy");let h=r.find(f=>!f.live&&f.kind===o);if(!h){const f=this.shotMesh(o);this.scene.add(f),h={mesh:f,vx:0,vz:0,dmg:0,pierce:0,homing:0,ttl:0,friendly:n,live:!1,kind:o,r:.16,bounce:0,chain:0,chainSeen:[]},r.push(h)}const l=(s==null?void 0:s.speed)??(o==="slash"?4.2:(s==null?void 0:s.ttl)!==void 0&&s.ttl<.2?0:n?this.job.bulletSpeed/mi:10);h.live=!0,h.friendly=n,h.kind=o,h.mesh.visible=!0;const c=(s==null?void 0:s.y)??(n?this.py+.88:1.05);if(h.mesh.position.set(t,c,e),h.vx=Math.cos(i)*l,h.vz=Math.sin(i)*l,h.dmg=(s==null?void 0:s.dmg)??(n?this.hitDamage():10),h.pierce=(s==null?void 0:s.pierce)??(n?this.job.pierce+this.extraPierce:0),h.homing=0,h.ttl=(s==null?void 0:s.ttl)??(o==="orb"?2.2:o==="slash"?.18:1.6),h.r=o==="slash"?.75:o==="wave"?.72:o==="orb"?.28:o==="shard"?.1:.16,h.bounce=n&&o!=="slash"?this.shotBounce:0,h.chain=(s==null?void 0:s.chain)??0,h.chainSeen=[],o==="slash")h.mesh.scale.setScalar(1.05);else if(o==="wave"){const f=n&&this.runJob==="knight"?this.classIndex:0;h.mesh.scale.setScalar(1+f*.14)}else if(o==="orb")h.mesh.scale.setScalar(s!=null&&s.ttl&&s.ttl>2?1.35:1.05);else if(o==="bolt"){const f=n&&this.runJob==="wanderer"?this.classIndex:0;h.mesh.scale.setScalar(1+f*.1);const u=h.mesh.getObjectByName("tierRing");u&&(u.visible=f>=1);const d=h.mesh.getObjectByName("tierEcho");d&&(d.visible=f>=2)}else if(o==="shard"){const f=n&&this.runJob==="hunter"?this.classIndex:0,u=h.mesh.getObjectByName("tierRing");u&&(u.visible=f>=1);const d=h.mesh.getObjectByName("tierEcho");d&&(d.visible=f>=2)}return o==="enemy"&&h.mesh.children[0].material.color.setHex($c()??16723306),this.aimShot(h),h}hitEnemy(t,e){if(t.kind==="chain"&&t.chainSeen.includes(e)||e.burrowed)return;if(e.kind==="shell"&&e.chargeState===1&&t.friendly){t.live=!1,t.mesh.visible=!1;const s=Math.atan2(this.pz-e.mesh.position.z,this.px-e.mesh.position.x);this.spawnBullet(e.mesh.position.x,e.mesh.position.z,s,!1,{dmg:8,speed:9}),this.spawnFx("flash",e.mesh.position.x,.6,e.mesh.position.z,Se.shell);return}if(this.bossShielded(e)){t.live=!1,t.mesh.visible=!1;return}const i=this.isGuardedHit(e,Math.atan2(t.vz,t.vx))?.25:1;this.dealTo(e,t.dmg*i*this.anchorAura(e.mesh.position.x,e.mesh.position.z)),e.flash=.08,e.recoil=.18;const n=Math.hypot(t.vx,t.vz)||1;this.flinchFrom(e,t.vx/n,t.vz/n),t.pierce-=1,nr(),this.trauma<.15&&(this.trauma=Math.min(.15,this.trauma+.03)),Zs(40,.3),this.impact(e.mesh.position.x,e.mesh.position.z,ee[this.runJob],!1),this.frost&&(e.slow=Math.max(e.slow,1.8)),t.friendly&&this.weaponRelicHit(t,e),t.kind==="chain"?this.chainJump(t,e):t.pierce<0&&(t.live=!1,t.mesh.visible=!1),e.bossId&&this.maybeBossPhase(e),e.hp<=0&&this.killEnemy(e)}weaponRelicHit(t,e){const i=e.mesh.position.x,n=e.mesh.position.z;if(t.kind==="bolt"&&this.wr("dagger_deep")&&(e.cuts=(e.cuts??0)+1,e.cuts%4===0&&(this.dealTo(e,t.dmg*2),this.spawnShow("cut",i,n,16773296,.4,1+e.r*.6,0,0,1,e),this.spawnFx("flash",i,1,n,16773296))),t.kind==="chain"&&this.wr("core_scorch")&&this.fireFields.push({x:i,z:n,r:.8,ttl:1.3,tick:.1,dmg:t.dmg*.12,col:16756848}),t.kind==="shard"&&this.wr("fang_hooks")){const s=t.dmg*.15;for(let r=1;r<=3;r++)this.queueBeat(.35*r,()=>{this.enemies.includes(e)&&(this.burst(e.mesh.position.x,e.mesh.position.z,12593230,2),this.damageOne(e,e.mesh.position.x,e.mesh.position.z,s,void 0,!0))})}}nova(t,e,i=8,n="bolt"){const s=this.hitDamage()*.7;for(let r=0;r<i;r++){const o=r/i*Math.PI*2;this.spawnBullet(t+Math.cos(o)*.4,e+Math.sin(o)*.4,o,!0,{kind:n,dmg:s,pierce:1,homing:n==="orb"?180:0,ttl:.85})}this.impact(t,e,ee[this.runJob],!0)}launchChainBolt(t,e,i,n){const s=this.px+Math.cos(t)*.55,r=this.pz+Math.sin(t)*.55;this.spawnBullet(s,r,t,!0,{kind:"chain",dmg:e,chain:i,pierce:0,ttl:1.6,speed:n,y:this.py+.88})}chainJump(t,e){if(t.chainSeen.push(e),t.chain<=0){t.live=!1,t.mesh.visible=!1;return}const i=e.mesh.position.x,n=e.mesh.position.z;let s=null,r=6.5;for(const f of this.enemies){if(t.chainSeen.includes(f))continue;const u=Math.hypot(f.mesh.position.x-i,f.mesh.position.z-n);u<r&&(r=u,s=f)}if(!s){t.live=!1,t.mesh.visible=!1;return}t.chain-=1;const o=s.mesh.position.x,h=s.mesh.position.z,l=Math.atan2(h-n,o-i),c=Math.hypot(t.vx,t.vz)||12;t.mesh.position.set(i,t.mesh.position.y,n),t.vx=Math.cos(l)*c,t.vz=Math.sin(l)*c,this.spawnFx("arc",i,t.mesh.position.y,n,ee.arcanist,l,r),this.spawnFx("arc",i,t.mesh.position.y,n,16777215,l,r),this.burst(i,n,Rt[2],3)}stepFireFields(t){for(let e=this.fireFields.length-1;e>=0;e--){const i=this.fireFields[e];i.ttl-=t,i.tick-=t,i.tick<=0&&(i.tick=.32,this.damageAround(i.x,i.z,i.r,i.dmg),i.col!==void 0&&this.spawnFx("ring",i.x,.06,i.z,i.col)),i.ttl<=0&&this.fireFields.splice(e,1)}}leadAngle(t,e,i,n=.7){const s=Math.hypot(this.px-t,this.pz-e)/Math.max(1,i),r=this.px+this.vx*s*n,o=this.pz+this.vz*s*n;return Math.atan2(o-e,r-t)}nearestEnemy(t,e,i){let n=null,s=i;for(const r of this.enemies){const o=Math.hypot(r.mesh.position.x-t,r.mesh.position.z-e);o<s&&(s=o,n=r)}return n}spawnShard(t,e,i){const n=new w(this.geo(new ye(.18,0)),this.mat(new st({color:Rt[1]})));n.position.set(t,.5,e),this.scene.add(n),this.shards.push({mesh:n,xp:i,live:!0})}}const zv={skitter:{hp:14,perRoom:3,speed:205,r:.3},mire:{hp:90,perRoom:13,speed:62,r:.55},bell:{hp:70,perRoom:10,speed:45,r:.46},burrower:{hp:60,perRoom:10,speed:150,r:.46},censer:{hp:110,perRoom:14,speed:55,r:.5},weaver:{hp:55,perRoom:9,speed:96,r:.46},tidecaller:{hp:80,perRoom:12,speed:60,r:.5},moth:{hp:14,perRoom:3,speed:165,r:.3},mirror:{hp:120,perRoom:15,speed:82,r:.48},shell:{hp:130,perRoom:16,speed:38,r:.52},siren:{hp:95,perRoom:13,speed:58,r:.5}},Wc={wisp:{spin:1,radius:1.7,fire:.82,shot:"bolt",dmg:.55,pierce:0},summon:{spin:2.1,radius:1.4,fire:1.05,shot:"orb",dmg:1.4,pierce:0},shade:{spin:1,radius:1.7,fire:.82,shot:"shard",dmg:2.2,pierce:0},kestrel:{spin:1.6,radius:2.1,fire:.62,shot:"shard",dmg:.77,pierce:1},sentinel:{spin:.8,radius:1.3,fire:1.25,shot:"wave",dmg:.98,pierce:0}},vo=new N;class Fv extends Dv{makePet(){var n,s;this.pet&&(this.scene.remove(this.pet),this.pet=void 0),this.petTwin&&(this.scene.remove(this.petTwin),this.petTwin=void 0);const t=Ue(),e=Lf(this.runJob,this.classIndex,t.companion);this.petKind=e,this.petLevel=((n=t.pets[e])==null?void 0:n.level)??1,this.petStage=Rr(this.petLevel),this.petTalents=[...((s=t.pets[e])==null?void 0:s.talents)??[]],this.petShots=0;const i=Fc(e,this.petStage,this.kit);if(i.scale.setScalar(Ot.petScale),this.petAng=.8,this.petX=this.px+1.4,this.petZ=this.pz,this.petY=this.petStage>=4&&e==="wisp"?1.55:1.05,this.petFire=.5,i.position.set(this.petX,this.petY,this.petZ),this.scene.add(i),this.pet=i,this.petTalents.includes("twin")){const r=Fc(e,Math.max(0,this.petStage-1),this.kit);r.scale.setScalar(.78),this.scene.add(r),r.scale.setScalar(Ot.petScale*.85),this.petTwin=r}}stepPet(t){if(!this.pet||!this.petKind)return;const e=this.petStage,i=this.petKind==="wisp"&&e>=4,n=Wc[this.petKind];this.petAng+=t*(i?1.2:n.spin);const s=(i?2.3:n.radius)+e*.08,r=this.px+Math.cos(this.petAng)*s,o=this.pz+Math.sin(this.petAng)*s;if(this.petX+=(r-this.petX)*Math.min(1,t*4),this.petZ+=(o-this.petZ)*Math.min(1,t*4),this.pet.position.set(this.petX,this.petY+Math.sin(this.clock*3)*.08,this.petZ),this.pet.rotation.y+=t*1.4,!this.lite&&e>0&&Math.random()<t*(2+e*1.6)&&this.burst(this.petX,this.petZ,Ei[this.petKind].color,1),this.petTwin){const u=this.px+Math.cos(this.petAng+Math.PI)*(s*.85),d=this.pz+Math.sin(this.petAng+Math.PI)*(s*.85);this.petTwin.position.set(u,this.petY*.9,d),this.petTwin.rotation.y-=t*1.2}const h=(this.petTalents.includes("swift")?1.55:1)*(this.petTalents.includes("k_updraft")?1.25:1);if(this.petFire-=t*(this.petBoost>0?2.2:1)*this.petCadence*h,this.petFire>0||!this.enemies.length)return;this.petFire=(i?.5:n.fire)-e*.04;let l=null,c=12;for(const u of this.enemies){const d=Math.hypot(u.mesh.position.x-this.petX,u.mesh.position.z-this.petZ);d<c&&(c=d,l=u)}if(!l)return;const f=Math.atan2(l.mesh.position.z-this.petZ,l.mesh.position.x-this.petX);this.petShot(this.petX,this.petZ,f,e,l),this.petTwin&&this.petShot(this.petTwin.position.x,this.petTwin.position.z,f+.35,Math.max(0,e-1),l)}petShot(t,e,i,n,s){if(!this.petKind)return;const r=this.petKind,o=++this.petShots,h=_=>this.petTalents.includes(_),l=h("fang")?6:0,c=Wc[r],f=Math.max(0,this.petLevel-20),u=(4+n*3+f*.4+l)*c.dmg*Ot.petDamage*(this.setOn("kinship",2)?1.3:1)*(this.setOn("kinship",3)?1.3:1),d=Ei[r].color,g=h("focus")?1:0,x=(_,v,b,T,R=0)=>this.spawnBullet(t,e,_,!0,{kind:v,dmg:b,pierce:T+g,homing:0,ttl:1.25,chain:R}),m=(_,v,b,T=.14,R=0)=>{for(let S=0;S<_;S++)x(i+(S-(_-1)/2)*T,v,u*(_>1?.62:1),b,R)},p=(s==null?void 0:s.mesh.position.x)??t+Math.cos(i)*4,M=(s==null?void 0:s.mesh.position.z)??e+Math.sin(i)*4;if(r==="wisp"){const _=h("w_bright")?1:0;n>=4?(m(3+_,"orb",1,.18),o%3===0&&this.fireFields.push({x:p,z:M,r:1.2,ttl:2,tick:.1,dmg:u*.2,col:d})):m((n>=1?2:1)+_,n>=2?"orb":"bolt",n>=3?1:0);const v=h("w_pyre")?2:3;(n===3||h("w_pyre"))&&o%v===0&&(this.spawnFx("ring",t,.08,e,d),this.burst(t,e,d,6),this.damageAround(t,e,1.8,u)),h("w_trail")&&s&&this.fireFields.push({x:p,z:M,r:.7,ttl:1.2,tick:.1,dmg:u*.12,col:d}),h("w_sun")&&o%4===0&&s&&(this.spawnFx("shock",p,.08,M,d),this.fireFields.push({x:p,z:M,r:1.6,ttl:2.2,tick:.1,dmg:u*.18,col:d}))}else if(r==="summon"){const _=h("s_arc");n>=4?x(i,"chain",u,0,(_?3:2)+(h("s_overload")?1:0)):m((n>=2?2:1)+(h("s_split")?1:0),_?"chain":"orb",n>=1?1:0,.12,_?1:0);const v=h("s_web");(n>=3||v)&&o%(v?2:3)===0&&s&&(this.spawnShow("rune",p,M,d,0,.8),this.queueBeat(.5,()=>{this.spawnFx("shock",p,.08,M,d),this.damageAround(p,M,1.6,u*2)}))}else if(r==="shade"){m((n>=3?3:n>=1?2:1)+(h("h_legion")?1:0),"shard",0);const _=h("h_chill");if((n>=2||_)&&o%(_?2:3)===0&&s){const v=_?3:1.5;this.spawnFx("flash",p,1,M,d),this.burst(p,M,d,5),n>=4||h("h_reach")?(this.spawnFx("shock",p,.08,M,d),this.damageAround(p,M,1.8,u*1.4,b=>b.slow=Math.max(b.slow,v))):(s.slow=Math.max(s.slow,v),this.damageOne(s,p,M,u*1.4)),h("h_siphon")&&(this.hp=Math.min(this.overshield?this.maxHp*1.2:this.maxHp,this.hp+2))}}else if(r==="kestrel"){m(n>=3?3:n>=1?2:1,"shard",c.pierce,.1);const _=h("k_talon"),v=n>=4||_?2:3;(n>=2||_)&&o%v===0&&s&&(this.kestrelDive(t,e,p,M,u*1.6),h("k_storm")&&this.queueBeat(.18,()=>this.kestrelDive(t,e,p,M,u)),h("k_feather")&&this.nova(p,M,5,"shard"))}else if(r==="sentinel"){s&&this.sentinelStrike(s,i,n,u),h("t_aegis")&&o%4===0&&this.ward<1&&(this.ward=1,this.spawnFx("ring",this.px,.08,this.pz,d));const _=h("t_judge");if((n>=2||_)&&o%3===0){const v=this.enemies.filter(b=>b!==s).map(b=>({e:b,d:Math.hypot(b.mesh.position.x-t,b.mesh.position.z-e)})).filter(b=>b.d<9).sort((b,T)=>b.d-T.d).slice(0,_?3:2);for(const{e:b}of v)this.sentinelStrike(b,i,n,u*.8)}}n>=5&&o%3===0&&s&&(this.spawnFx("shock",p,.08,M,d),this.burst(p,M,d,8),this.damageAround(p,M,1.8,u*.9)),h("nova")&&this.nova(t,e,4,r==="shade"||r==="kestrel"?"shard":"bolt"),h("leech")&&(this.hp=Math.min(this.overshield?this.maxHp*1.2:this.maxHp,this.hp+1))}kestrelDive(t,e,i,n,s){const r=Math.hypot(i-t,n-e)+1.5,o=(i-t)/(r-1.5||1),h=(n-e)/(r-1.5||1),l=Math.atan2(h,o),c=Ei.kestrel.color;this.spawnFx("arc",t,.9,e,c,l,r),this.spawnFx("arc",t,.92,e,16777215,l,r*.7);for(const f of[...this.enemies]){const u=f.mesh.position.x-t,d=f.mesh.position.z-e,g=u*o+d*h,x=Math.abs(-u*h+d*o);g<0||g>r||x>.7+f.r||this.damageOne(f,t,e,s)}}sentinelStrike(t,e,i,n){const s=Ei.sentinel.color,r=this.petTalents.includes("t_great"),o=this.petTalents.includes("t_brand"),h=t.mesh.position.x,l=t.mesh.position.z;this.spawnShow(this.skin==="warhammer"?"meteor":"sworddrop",h,l,s,e,.7+i*.08+(r?.25:0),0,.22,1,t),this.queueBeat(.2,()=>{if(!this.enemies.includes(t))return;const c=t.mesh.position.x,f=t.mesh.position.z;this.spawnFx("ring",c,.08,f,s);const u=d=>{i>=1&&(d.slow=Math.max(d.slow,.8))};i>=3||r?this.damageAround(c,f,1.2+(r?.5:0),n,u):this.damageOne(t,c,f,n,u),(i>=4||o)&&this.fireFields.push({x:c,z:f,r:1,ttl:1.8,tick:.1,dmg:n*.18,col:s})})}feedPet(t){var s;if(!this.petKind)return;const e=Ue(),i=Rr(((s=e.pets[this.petKind])==null?void 0:s.level)??1);Df(e,this.petKind,t),mn(e);const n=Rr(e.pets[this.petKind].level);if(this.petLevel=e.pets[this.petKind].level,this.petStage=n,n!==i){const r=Ei[this.petKind].color;this.spawnShow("dome",this.petX,this.petZ,r,0,.9,0),this.spawnShow("rune",this.petX,this.petZ,r,0,.8),this.burst(this.petX,this.petZ,r,14),this.spawnFx("ring",this.petX,.1,this.petZ,r),this.bloomKick=Math.min(1.2,this.bloomKick+.35),this.camPunch=Math.min(1,this.camPunch+.2),this.makePet(),this.offerPetTalent()}}offerPetTalent(){if(!this.petKind)return;const t=Ue(),e=t.pets[this.petKind].talents??[];if(cl(t.pets[this.petKind].level,e)<=0)return;const i=[...zf(this.petKind,t.pets[this.petKind].level,e)];if(!i.length)return;for(let s=i.length-1;s>0;s--){const r=Math.floor(Math.random()*(s+1));[i[s],i[r]]=[i[r],i[s]]}if(this.pendingPetTalents.length>=cl(t.pets[this.petKind].level,e))return;const n=i.findIndex(s=>s.pet===this.petKind);n>2&&([i[0],i[n]]=[i[n],i[0]]),this.pendingPetTalents.push(i.slice(0,3).map(s=>({id:s.id,title:s.name,body:s.body,tag:s.pet?`${Ei[s.pet].name} talent`:void 0}))),this.resolvePendingRelicUi(),this.pushHud(`${Ei[this.petKind].stages[this.petStage]} takes a new shape — talent waiting`)}applyPetTalent(t){if(this.pendingPetTalents.shift(),this.resolvePendingRelicUi(),!this.petKind)return;const e=Ue();Ff(e,this.petKind,t),mn(e),ce.getState().refreshSave(),this.makePet(),this.pushHud("Familiar talent bound")}spawnWave(){for(const s of this.enemies)this.scene.remove(s.mesh);for(const s of this.eBullets)s.live=!1,s.mesh.visible=!1;this.enemies=[];const t=Bi(this.room),e=t.kind==="boss",i=this.room===1||e?ha:this.nextCurse??ha;this.nextCurse=null,this.clearSigils(),this.curse=e?er[Cr[_e(this.room)]]:i.title,this.curseHp=i.hp*this.oath.enemyLife*this.runLifeMul,this.curseExtra=e?0:i.extra,this.curseXp=i.xp,this.curseDmg=i.dmg,this.curseAsh=i.ash,this.shrineHeal=t.kind==="shrine"&&!this.oath.noRest?30:0;const n=_e(this.room);if(this.roomIsBoss=t.kind==="boss",this.roomKills=0,this.roomCleared=!1,this.beginRoomLog(t.kind==="boss"?Cr[n]:t.kind),this.roomLog&&!e&&(this.roomLog.curse=i.title),this.roomSpawnQueue=[],this.roomSpawnTimer=0,t.kind==="boss")this.spawnBoss(Cr[n]);else{const s=this.roomSpawnQueue;if(t.kind==="court"){const o=this.newcomer&&this.room===1?Ot.newcomerOpeners:7;for(let h=0;h<o;h++)s.push({kind:"zombie"});this.room>1&&s.push({kind:"ghost"})}else if(t.kind==="hall"){for(let o=0;o<8;o++)s.push({kind:"zombie"});s.push({kind:"ghost"},{kind:"ghost"})}else if(t.kind==="shrine"){for(let o=0;o<6;o++)s.push({kind:"zombie"});s.push({kind:"ghost"},{kind:"ghost"})}else if(t.kind==="elite"){s.push({kind:"wraith",elite:!0});for(let o=0;o<5;o++)s.push({kind:"zombie"})}else if(t.kind==="trap"){for(let o=0;o<9;o++)s.push({kind:"zombie"});for(let o=0;o<3;o++)s.push({kind:"ghost"})}else if(t.kind==="gallery"){for(let o=0;o<6;o++)s.push({kind:"zombie"});for(let o=0;o<3+n;o++)s.push({kind:"ghost"})}else if(t.kind==="cross"){for(let o=0;o<7;o++)s.push({kind:"zombie"});for(let o=0;o<2+n;o++)s.push({kind:"ghost"})}else if(t.kind==="choir"){for(let o=0;o<5;o++)s.push({kind:"zombie"});for(let o=0;o<5;o++)s.push({kind:"ghost"});s.push({kind:"wraith"})}else if(t.kind==="vault"){s.push({kind:"wight"},{kind:"wraith",elite:!0});for(let o=0;o<3;o++)s.push({kind:"zombie"});n>=2&&s.push({kind:"bulwark"}),n>=3&&s.push({kind:"anchor"})}else{for(let o=0;o<7;o++)s.push({kind:"zombie"});s.push({kind:"ghost"})}Ee("spawns")<(n>=2?.6:.35)&&s.push({kind:"acolyte"}),this.room>1&&Ee("spawns")<(n===1?.55:.35)&&s.push({kind:"burrower"}),n>=2&&Ee("spawns")<(n===2?.6:.35)&&s.push({kind:"censer"}),n>=3&&Ee("spawns")<(n===3?.6:.35)&&s.push({kind:"weaver"}),n>=4&&(s.push({kind:"tidecaller"}),(t.kind==="choir"||t.kind==="hall")&&s.push({kind:"tidecaller"})),Ee("spawns")<(n===1?.5:.3)&&s.push({kind:"moth",pack:3+(n>=3?1:0)}),n>=2&&Ee("spawns")<(n===2?.5:.3)&&s.push({kind:"mirror"}),n>=3&&Ee("spawns")<(n===3?.55:.3)&&s.push({kind:"shell"}),n>=4&&Ee("spawns")<.55&&s.push({kind:"siren"});for(let o=0;o<this.curseExtra;o++)s.push({kind:"zombie"});this.oath.hunted&&this.room>1&&s.push({kind:n>=2?"husk":"wraith",elite:!0}),this.eliteNext&&(s.push({kind:n>=2?"husk":"wraith",elite:!0}),this.eliteNext=!1),n>=3&&(t.kind==="elite"||t.kind==="trap")&&Ee("spawns")<.6&&s.push({kind:"anchor"}),Ee("spawns")<.4&&s.push({kind:"cinder"}),n>=2&&(t.kind==="elite"||t.kind==="trap"||t.kind==="cross")&&Ee("spawns")<.55&&s.push({kind:"husk"}),n>=2&&(t.kind==="gallery"||t.kind==="choir"||t.kind==="shrine")&&Ee("spawns")<.55&&s.push({kind:"binder"}),n>=2&&(t.kind==="elite"||t.kind==="trap"||t.kind==="cross")&&Ee("spawns")<.4&&s.push({kind:"bulwark"}),n>=2&&(t.kind==="hall"||t.kind==="gallery"||t.kind==="cross")&&Ee("spawns")<.4&&s.push({kind:"gazer"});const r=(Ee("spawns")<.55?1:0)+(n>=2?1:0)+(n>=3&&Ee("spawns")<.5?1:0);for(let o=0;o<r;o++)s.push({kind:"skitter",pack:3+(n>=2?1:0)});n>=2&&(t.kind==="elite"||t.kind==="trap"||t.kind==="gallery"||t.kind==="hall")&&Ee("spawns")<.45&&s.push({kind:"mire"}),n>=3&&Ee("spawns")<.35&&s.push({kind:"mire"}),n>=2&&(t.kind==="choir"||t.kind==="shrine"||t.kind==="gallery"||t.kind==="cross")&&Ee("spawns")<.5&&s.push({kind:"bell"}),n>=3&&Ee("spawns")<.3&&s.push({kind:"bell"});for(let o=s.length-1;o>0;o--){const h=Math.floor(Ee("spawns")*(o+1));[s[o],s[h]]=[s[h],s[o]]}this.roomTarget=s.reduce((o,h)=>o+(h.pack??1),0);for(let o=0;o<Math.min(5,s.length);o++)this.spawnFromQueue()}t.kind==="shrine"||t.kind==="gallery"?this.placeCrystal():this.clearCrystal(),this.ward=this.wardMax,this.petTalents.includes("guard")&&(this.petGuard=1),this.pushHud(t.kind==="boss"?`${t.name}: something stirs beneath the floor`:t.name)}spawnFromQueue(){const t=this.roomSpawnQueue.shift();if(!t)return;this.spawnEnemy(t.kind);const e=this.enemies[this.enemies.length-1];t.elite&&(e.hp=Math.round(e.hp*Ot.eliteLife),e.maxHp=e.hp,e.size=Ot.eliteSize,this.giveAffixes(e,Math.min(3,Ot.eliteAffixes[_e(this.room)>=2?1:0]+this.oath.extraAffix)));for(let i=1;i<(t.pack??1);i++){this.spawnEnemy(t.kind);const n=this.enemies[this.enemies.length-1],s=i/(t.pack??1)*Math.PI*2;this.placeEnemyNear(n,e.mesh.position.x+Math.cos(s)*.9,e.mesh.position.z+Math.sin(s)*.9)}}spawnDummies(){this.roomSpawnQueue=[],this.roomTarget=0;const t=[[2.6,0],[5.5,-1.6],[4.6,2.2],[5.4,2.8],[5.6,1.7]];for(const[e,i]of t){this.spawnEnemy("wight");const n=this.enemies[this.enemies.length-1];this.placeEnemyNear(n,this.px+e,this.pz+i),n.dummy=!0,n.hp=n.maxHp=1e6,n.speed=0,n.age=5,n.spawnGrace=0}this.pushHud("Practice: hit the dummies. Pause to leave.")}giveAffixes(t,e){const i=So(Object.keys(ji),"affixes");t.affixes=i.slice(0,e),t.affixes.forEach((r,o)=>{const h=new w(this.sharedGeo(`affix-ring-${o}`,()=>new Fe(.72+o*.2,.84+o*.2,36)),this.mat(new st({color:ji[r].color,transparent:!0,opacity:.8,depthWrite:!1,fog:!1,side:Qt})));h.name=`affix-${r}`,h.rotation.x=-Math.PI/2,h.position.y=.05,t.mesh.add(h)}),t.affixes.includes("warded")&&(t.ward=t.maxHp*Ot.wardShare),t.affixes.includes("hasted")&&(t.speed*=Ot.hastedSpeed),t.affixes.includes("mending")&&(t.mendT=1),Nf();const n=t.mesh.position.x,s=t.mesh.position.z;this.spawnFloat("!","float-alert",n,2.5,s,{max:1.6,rise:.3,follow:t}),this.spawnFx("shock",n,.08,s,16723306),this.queueBeat(.28,()=>this.spawnFx("shock",t.mesh.position.x,.08,t.mesh.position.z,16723306)),ds("elite"),this.pushHud(`Elite: ${t.affixes.map(r=>`${ji[r].name} (${ji[r].body})`).join(", ")}`)}burstBrood(t,e,i,n){for(let s=0;s<i;s++){this.spawnEnemy("skitter");const r=this.enemies[this.enemies.length-1],o=s/i*Math.PI*2;this.placeEnemyNear(r,t+Math.cos(o)*.7,e+Math.sin(o)*.7),r.spawnGrace=.5}this.roomIsBoss||(this.roomTarget+=i),this.burst(t,e,n,10)}placeEnemyNear(t,e,i){const n=this.blocked(e,i,t.r)?Ui(e,i,t.r,this.walls):{x:e,z:i};t.mesh.position.set(n.x,0,n.z)}stepRoomSpawns(t){if(this.roomIsBoss||!this.roomSpawnQueue.length||(this.roomSpawnTimer-=t,this.roomSpawnTimer>0))return;const e=_e(this.room),i=3+(Math.random()<.5?1:0)+(e>=2?1:0);let n;for(let s=0;s<i&&this.roomSpawnQueue.length;s++){const r=this.enemies.length;this.spawnFromQueue();const o=this.enemies[r];if(!o)continue;if(!n){n=o;continue}const h=Math.random()*Math.PI*2,l=n.mesh.position.x+Math.cos(h)*(1.1+Math.random()*.8),c=n.mesh.position.z+Math.sin(h)*(1.1+Math.random()*.8),f=l-o.mesh.position.x,u=c-o.mesh.position.z;for(let d=r;d<this.enemies.length;d++){const g=this.enemies[d];this.placeEnemyNear(g,g.mesh.position.x+f,g.mesh.position.z+u)}}this.roomSpawnTimer=Math.max(2.6,4.2-e*.4)+Math.random()*.8}spawnAway(t,e=8){const i=Ai/2-2.6;for(let r=0;r<80;r++){const o=Math.random()*Math.PI*2,h=t+Math.random()*e,l=this.px+Math.cos(o)*h,c=this.pz+Math.sin(o)*h;if(!(Math.abs(l)>i||Math.abs(c)>i)&&!this.blocked(l,c,.6)&&!(Math.hypot(l-this.px,c-this.pz)<t))return{x:l,z:c}}const s=[...[[-i,-i],[-i,i],[i,-i],[i,i]]].sort((r,o)=>Math.hypot(o[0]-this.px,o[1]-this.pz)-Math.hypot(r[0]-this.px,r[1]-this.pz));for(const r of s){const o=Ui(r[0],r[1],.6,this.walls);if(Math.hypot(o.x-this.px,o.z-this.pz)>=t*.75)return o}return Ui(s[0][0],s[0][1],.6,this.walls)}spawnEnemy(t){const e=this.spawnAway(t==="wight"?10:7.5,4),i=tv(t,this.kit);i.position.set(e.x,0,e.z),this.spawnFx("ring",e.x,.06,e.z,Se[t]),!Xa(t)&&!qa(t)&&this.burst(e.x,e.z,9075338,this.lite?3:6),this.scene.add(i);const n=Math.round((t==="wight"?320+this.room*27:t==="anchor"?100+this.room*13:t==="husk"?140+this.room*16:t==="bulwark"?95+this.room*14:t==="wraith"?60+this.room*11:t==="binder"?46+this.room*8:t==="acolyte"?52+this.room*9:t==="ghost"?40+this.room*8:t==="gazer"?34+this.room*7:t==="cinder"?18+this.room*3:48+this.room*11)*this.curseHp*ul(this.room));this.enemies.push({mesh:i,hp:n,maxHp:n,kind:t,speed:(t==="anchor"?0:t==="ghost"||t==="wight"?80:t==="wraith"?128:t==="acolyte"?92:t==="husk"?66:t==="cinder"?50:t==="binder"?90:t==="bulwark"||t==="gazer"?58:118+this.room*6)/mi,shootCd:.8,flash:0,recoil:0,r:t==="wight"?.72:t==="anchor"?.5:t==="husk"?.62:t==="cinder"?.36:t==="bulwark"?.52:t==="ghost"||t==="acolyte"||t==="binder"||t==="gazer"?.44:.4,phase:Math.random()*Math.PI*2,slow:0,bossId:null,bossPhase:0,telegraph:0,fly:0,spawnGrace:1.1,curse:0,curseTtl:0,chargeState:0,chargeT:0});const s=zv[t];if(s){const r=this.enemies[this.enemies.length-1];if(r.hp=r.maxHp=Math.round((s.hp+this.room*s.perRoom)*this.curseHp*ul(this.room)),r.speed=s.speed/mi,r.r=s.r,t==="shell"){const o=new w(this.sharedGeo("shell-pearl",()=>new Mt(.16,12,10)),this.mat(new st({color:16773368,fog:!1})));o.name="pearl",o.position.set(0,.5,.18),r.mesh.add(o),r.chargeT=3.2}}this.enemies[this.enemies.length-1].speed*=this.oath.enemySpeed}offerRooms(){this.clearSigils();const t=Uf(),i=Of(this.room,Bi(this.room-1).kind,this.vaultActs.has(_e(this.room))).map((o,h)=>({plan:o,curse:t[h%t.length]})),n=_e(this.room);if(!this.practiceSkin&&this.room>1&&!this.eventActs.has(n)&&Ee("events")<Ot.eventChance){const o=Ue().ash,h=Object.keys(ss).filter(f=>!Bf(f)||o>=Ya(n)),l=h[Math.floor(Ee("events")*h.length)],c=Math.floor(Ee("events")*i.length);i[c]={plan:i[c].plan,curse:{...ha,title:ss[l].title,color:kf},event:l}}const s=i.length,r=Ai/2-3;i.forEach(({plan:o,curse:h,event:l},c)=>{let f=Math.max(-r,Math.min(r,this.px+(c-(s-1)/2)*3.4)),u=Math.max(-r,Math.min(r,this.pz-3.4));if(this.blocked(f,u,1)){const g=Ui(f,u,1,this.walls);f=g.x,u=g.z}const d=this.makeSigil(o,h);d.position.set(f,Pn(f,u,this.plats),u),d.scale.setScalar(.01),this.scene.add(d),this.sigils.push({mesh:d,curse:h,plan:o,x:f,z:u,age:0,card:this.makeSigilCard(o,h,l),event:l}),this.spawnFx("ring",f,.08,u,h.color)}),Hf(),ds("sigils"),this.pushHud("Choose the next chamber: step on a sigil")}makeSigil(t,e){const i=new Jt,n=new w(this.sharedGeo("sigil-ring",()=>new Fe(.82,1,40)),this.mat(new st({color:e.color,transparent:!0,opacity:.9,depthWrite:!1,fog:!1,side:Qt})));n.rotation.x=-Math.PI/2,n.position.y=.05,i.add(n);const s=new w(this.sharedGeo("sigil-disc",()=>new Xe(.82,32)),this.mat(new st({color:e.color,transparent:!0,opacity:.22,depthWrite:!1,fog:!1})));s.rotation.x=-Math.PI/2,s.position.y=.04,i.add(s);const r=new w(this.sharedGeo("sigil-beam",()=>new Ut(.8,.8,2.2,24,1,!0)),this.mat(new st({color:e.color,transparent:!0,opacity:.1,depthWrite:!1,fog:!1,blending:pe,side:Qt})));return r.position.y=1.1,i.add(r),i}makeSigilCard(t,e,i){if(!this.sigilLayer){const l=document.createElement("div");l.className="sigil-layer",document.body.appendChild(l),this.sigilLayer=l}const n=`#${e.color.toString(16).padStart(6,"0")}`,[s,r]=fl(e),o=document.createElement("div");o.className="sigil-card",o.style.borderColor=n;const h=(l,c,f)=>{const u=document.createElement("div");u.className=l,u.textContent=c,f&&(u.style.color=f),o.appendChild(u)};return h("sigil-room",t.name),i?(h("sigil-perk","No fight: an event"),h("sigil-curse",ss[i].title,n),h("sigil-pay",ss[i].card)):(t.kind!=="boss"&&h("sigil-perk",Gf[t.kind].perk),h("sigil-curse",`${e.title}: ${s}`,n),h("sigil-pay",r)),o.style.opacity="0",this.sigilLayer.appendChild(o),o}placeSigilCards(){if(!this.sigils.length)return;const t=this.renderer.domElement.getBoundingClientRect(),e=t.width,i=this.sigils.map(o=>(vo.set(o.x,o.mesh.position.y+2.2,o.z).project(this.camera),{s:o,x:(vo.x+1)/2*e,y:t.top+(1-vo.y)/2*t.height,cw:o.card.offsetWidth}));i.sort((o,h)=>o.x-h.x);for(let o=1;o<i.length;o++){const h=i[o-1].x+(i[o-1].cw+i[o].cw)/2+6;i[o].x<h&&(i[o].x=h)}const n=i[i.length-1],s=n.x+n.cw/2+6-e;if(s>0)for(const o of i)o.x-=s;const r=6-(i[0].x-i[0].cw/2);if(r>0)for(const o of i)o.x+=r;for(const o of i)o.s.card.style.opacity=String(Math.min(1,o.s.age/.35)),o.s.card.style.transform=`translate(${t.left+o.x}px, ${o.y}px) translate(-50%, -100%)`}stepSigils(t){if(!this.sigils.length)return;for(const r of this.sigils)r.age+=t,r.mesh.scale.setScalar(Math.max(.01,Math.min(1,r.age/.35))),r.mesh.children[0].rotation.z+=t*.8;this.placeSigilCards();const e=this.sigils.find(r=>r.age>Ot.sigilGrace&&Math.hypot(this.px-r.x,this.pz-r.z)<1);if(!e)return;const i=e.curse;if(this.nextCurse=i,Vf(this.room,e.plan),e.plan.kind==="vault"&&this.vaultActs.add(_e(this.room)),this.spawnFx("shock",e.x,.08,e.z,i.color),this.spawnFx("flash",e.x,1,e.z,i.color),this.burst(e.x,e.z,i.color,10),Wf(),this.clearSigils(),e.event){const r=e.event;this.nextCurse=ha,this.pushHud(`${e.plan.name}: ${ss[r].title}`),this.queueBeat(Ot.sigilToWave,()=>this.openEvent(r));return}const[n,s]=fl(i);this.pushHud(`${e.plan.name}. ${i.title}: ${n}, ${s}.`),this.queueBeat(Ot.sigilToWave,()=>this.spawnWave())}clearSigils(){for(const t of this.sigils)this.scene.remove(t.mesh),t.card.remove();this.sigils=[]}placeCrystal(){this.clearCrystal(),this.crystalOn=!0;const t=new w(this.geo(new ye(.55,0)),this.mat(new st({color:Rt[1]})));t.position.set(this.crystalSpot.x,1.1,this.crystalSpot.z),this.scene.add(t),this.crystal=t}clearCrystal(){this.crystalOn=!1,this.crystal&&this.scene.remove(this.crystal),this.crystal=void 0}}const Ha=1.5,Ga={warden:{scale:1.5,hp:300,speed:62},tyrant:{scale:1.4,hp:380,speed:70},throne:{scale:1.7,hp:520,speed:88},saint:{scale:1.6,hp:640,speed:74},star:{scale:1.6,hp:760,speed:70}},Nv=new Set(["volley","rain"]),Va=.9,Uv={warden:[["slam","charge"],["slam","charge","triple"],["slam","charge","triple"]],tyrant:[["fan","spiral"],["fan","spiral","ambush"],["fan","spiral2","ambush"]],throne:[["volley","rain","nova"],["volley","rain","nova","cross","descent"],["volley","rain","nova","cross","pillar","descent"]],saint:[["tide","spiral"],["tide","spiral","whirl","rain"],["tide","spiral2","whirl","rain","cross"]],star:[["starfall","volley","nova"],["starfall","comet","nova","cross"],["starfall","comet","spiral2","cross","descent"]]};class Ov extends Fv{spawnBoss(t){const e=this.spawnAway(6.5,1.5),i=iv(t,this.kit),n=Ga[t].scale;i.scale.setScalar(n),i.position.set(e.x,0,e.z);const s=$i[t];i.position.y=-2.8,this.scene.add(i);const r=Math.round((Ga[t].hp+this.room*18)*5.5*(1+Ot.bossActHp*(_e(this.room)-1))*(1+Ot.bossDepthHp*(wo(this.room)-1))*this.oath.bossLife);this.enemies.push({mesh:i,hp:r,maxHp:r,kind:"wight",speed:Ga[t].speed/mi*this.oath.bossSpeed,shootCd:1.1,flash:0,recoil:0,r:.85*n,phase:0,slow:0,bossId:t,bossPhase:0,telegraph:0,fly:0,spawnGrace:Ha+.3,curse:0,curseTtl:0,chargeState:0,chargeT:0,intro:Ha,invuln:0}),this.spawnShow("warn",e.x,e.z,s,0,2.2,0,.22,1,void 0,Ha),this.spawnShow("rune",e.x,e.z,s,0,1.6)}maybeBossPhase(t){const e=t.hp/t.maxHp,i=e<.33?2:e<.66?1:0;if(i<=t.bossPhase)return;t.bossPhase=i,t.invuln=1.1,t.telegraph=1.1,t.shootCd=Math.max(t.shootCd,1.4),t.chargeState=0,t.mesh.visible=!0;const n=this.px-t.mesh.position.x,s=this.pz-t.mesh.position.z,r=Math.hypot(n,s)||1;r<5.5&&(this.vx+=n/r*16,this.vz+=s/r*16),this.trauma=Math.min(1,this.trauma+.45),this.hitstop=Math.max(this.hitstop,.12);const o=$i[t.bossId];this.spawnShow("pillar",t.mesh.position.x,t.mesh.position.z,o,0,1.4),this.spawnFx("shock",t.mesh.position.x,.08,t.mesh.position.z,o),this.impact(t.mesh.position.x,t.mesh.position.z,o,!0),this.pushHud(`${er[t.bossId]} — phase ${i+1}`),t.bossId==="warden"?(this.spawnEnemy("zombie"),i===2&&this.spawnEnemy("zombie")):t.bossId==="tyrant"?(this.bossTeleport(t),this.spawnEnemy("ghost")):t.bossId==="throne"?(this.spawnEnemy("wraith"),i===2&&this.spawnEnemy("ghost")):t.bossId==="star"&&(this.spawnEnemy("siren"),i===2&&this.spawnEnemy("mirror"))}bossTeleport(t){const e=this.spawnAway(8);this.spawnShow("clone",t.mesh.position.x,t.mesh.position.z,$i.tyrant,0,1),t.mesh.position.set(e.x,0,e.z),this.spawnShow("rune",e.x,e.z,$i.tyrant,0,1.4)}stepBoss(t,e){const i=t.bossId,n=$i[i],s=Ga[i].scale*Ot.bossScale,r=Pn(t.mesh.position.x,t.mesh.position.z,this.plats),o=this.px-t.mesh.position.x,h=this.pz-t.mesh.position.z,l=Math.hypot(o,h)||1;if((t.intro??0)>0){t.intro=Math.max(0,(t.intro??0)-e);const p=1-t.intro/Ha,M=1-Math.pow(1-p,3);t.mesh.position.y=r-2.8*(1-M),t.mesh.rotation.y=Math.atan2(o,h),t.mesh.scale.setScalar(s),Math.random()<e*14&&this.burst(t.mesh.position.x,t.mesh.position.z,n,2),t.intro===0&&(this.spawnFx("shock",t.mesh.position.x,.08,t.mesh.position.z,n),this.spawnShow("pillar",t.mesh.position.x,t.mesh.position.z,n,0,1.3),this.burst(t.mesh.position.x,t.mesh.position.z,n,12),this.trauma=Math.min(1,this.trauma+.4),this.pushHud(`${er[i]} rises`));return}t.invuln=Math.max(0,(t.invuln??0)-e),t.recoil=Math.max(0,t.recoil-e*9),t.slow=Math.max(0,t.slow-e),t.telegraph=Math.max(0,t.telegraph-e),this.stepCurse(t,e),t.flash>0&&(t.flash-=e*2),this.applyHitFlash(t);const c=t.slow>0?.42:1;let f=0,u=0,d=0;if(t.chargeState===4){t.chargeT-=e;const p=t.mesh.userData.leapTo,M=p.x-t.mesh.position.x,_=p.z-t.mesh.position.z,v=Math.max(e,t.chargeT);f=M/v,u=_/v,d=Math.sin(Math.PI*Math.min(1,1-t.chargeT/Va))*3,t.chargeT<=0&&(t.mesh.position.x=p.x,t.mesh.position.z=p.z,f=0,u=0,d=0,t.chargeState=0,t.telegraph=.5,this.bossSlam(t,p.x,p.z,2.2,18,12),this.trauma=Math.min(1,this.trauma+.2))}else if(t.chargeState===2||t.chargeState===3){t.chargeT-=e;const p=t.chargeState===2?14:7.2;f=Math.sin(t.mesh.rotation.y)*p,u=Math.cos(t.mesh.rotation.y)*p;const M=this.blocked(t.mesh.position.x+f*e*3,t.mesh.position.z+u*e*3,t.r*.55);if(t.chargeState===2&&Math.random()<e*20&&this.spawnFx("streak",t.mesh.position.x,1,t.mesh.position.z,n,Math.atan2(u,f)+Math.PI/2),t.chargeT<=0||M){if(t.chargeState===2&&(t.telegraph=.8,this.spawnFx("shock",t.mesh.position.x,.08,t.mesh.position.z,n),this.burst(t.mesh.position.x,t.mesh.position.z,n,10),this.trauma=Math.min(1,this.trauma+(M?.35:.15)),t.bossPhase>=1))for(let _=0;_<8;_++)this.spawnBullet(t.mesh.position.x,t.mesh.position.z,_/8*Math.PI*2,!1,{kind:"enemy",dmg:12,ttl:1.6});t.chargeState=0,f=0,u=0}}else if((t.telegraph<=0||i==="throne"&&Nv.has(t.lastMove??""))&&t.mesh.visible){const p=i==="tyrant"?l<5?-1.1:l>8?1:0:i==="throne"?l<4.5?-.8:l>6.5?1:0:i==="saint"||i==="star"?l<5.5?-.9:l>8.5?.8:0:1;if(f=o/l*t.speed*c*p,u=h/l*t.speed*c*p,i==="throne"){(!t.mesh.userData.orbit||Math.random()<e*.3)&&(t.mesh.userData.orbit=Math.random()<.5?-1:1);const M=t.mesh.userData.orbit;f+=-h/l*t.speed*1.1*c*M,u+=o/l*t.speed*1.1*c*M}t.mesh.rotation.y=Math.atan2(o,h)}const g=wh(t.mesh.position.x+f*e,t.mesh.position.z+u*e,t.r,t.mesh.position.x,t.mesh.position.z,this.walls);if(t.mesh.position.x=g.x,t.mesh.position.z=g.z,t.mesh.position.y=Pn(t.mesh.position.x,t.mesh.position.z,this.plats)+.08+Math.sin(this.clock*2.2)*.06+d,t.mesh.scale.setScalar(s*(1+t.recoil*.08)),t.mesh.visible&&t.chargeState!==4&&Math.hypot(this.px-t.mesh.position.x,this.pz-t.mesh.position.z)<.7+t.r&&this.hurt(t.chargeState===2?24:i==="throne"?20:16,t.mesh.position.x,t.mesh.position.z),t.shootCd-=e,t.shootCd>0||t.telegraph>0||t.chargeState!==0||!t.mesh.visible)return;const x=Uv[i][t.bossPhase].filter(p=>p!==t.lastMove),m=x[Math.floor(Math.random()*x.length)];t.lastMove=m,this.runBossMove(t,m)}runBossMove(t,e){const i=t.bossId,n=$i[i],s=t.bossPhase,r=t.mesh.position.x,o=t.mesh.position.z,h=Math.atan2(this.pz-o,this.px-r),l=[1.1,.85,.6][s],c=u=>{t.telegraph=u,t.shootCd=u+l},f=()=>this.enemies.includes(t);if(e==="slam"){const u=2.4+s*.3;c(.95),this.spawnShow("warn",r,o,n,0,u,0,.22,1,void 0,.6),this.queueBeat(.6,()=>{f()&&this.bossSlam(t,r,o,u,14+s*4,s>=1?s===2?8:6:0)})}else if(e==="charge"){t.mesh.rotation.y=Math.atan2(this.px-r,this.pz-o);const u=Math.sin(t.mesh.rotation.y),d=Math.cos(t.mesh.rotation.y);let g=0;for(;g<24&&!this.blocked(r+u*(g+.5),o+d*(g+.5),t.r*.55);)g+=.5;c(.75),t.shootCd=.75+1.8+l,this.spawnShow("lane",r,o,n,Math.atan2(d,u),Math.max(2,g),0,1.9,1,void 0,.75),this.queueBeat(.75,()=>{f()&&(t.chargeState=2,t.chargeT=1.8)})}else if(e==="triple"){c(2.5);for(let u=0;u<3;u++){const d=u*.82;this.queueBeat(d,()=>{f()&&u>0&&(t.mesh.rotation.y=Math.atan2(this.px-t.mesh.position.x,this.pz-t.mesh.position.z),t.chargeState=3,t.chargeT=.25)}),this.queueBeat(d+(u>0?.27:0),()=>{if(!f())return;const g=t.mesh.position.x,x=t.mesh.position.z;this.spawnShow("warn",g,x,n,0,2.1,0,.22,1,void 0,.45),this.queueBeat(.45,()=>{f()&&this.bossSlam(t,g,x,2.1,12+s*3,u===2?8:0)})})}}else if(e==="fan"){const u=s===2?2:1;c(.5+u*.35);for(let d=0;d<u;d++){const g=3+s*2,x=[];for(let m=0;m<g;m++)x.push(h+(m-(g-1)/2)*.18+d*.09);this.queueBeat(d*.35,()=>{if(f())for(const m of x)this.spawnFx("arc",t.mesh.position.x+Math.cos(m)*.9,.6,t.mesh.position.z+Math.sin(m)*.9,n,m,4.5),this.spawnFx("arc",t.mesh.position.x+Math.cos(m)*.9,.62,t.mesh.position.z+Math.sin(m)*.9,16777215,m,3.2)}),this.queueBeat(d*.35+.4,()=>{if(f())for(const m of x)this.spawnBullet(t.mesh.position.x,t.mesh.position.z,m,!1,{kind:"enemy",dmg:12,ttl:2.1})})}}else if(e==="spiral"||e==="spiral2"){const u=s>=1?4:3,d=17;c(.5+d*.1+.2),this.spawnShow("rune",r,o,n,0,1.3),this.spawnFx("flash",r,2.2,o,n);const g=Math.random()*Math.PI*2;for(let x=0;x<d;x++)this.queueBeat(.5+x*.1,()=>{if(f())for(let m=0;m<u;m++){const p=g+x*.3+m/u*Math.PI*2;this.spawnBullet(t.mesh.position.x,t.mesh.position.z,p,!1,{kind:"enemy",dmg:11,ttl:3,speed:6}),e==="spiral2"&&this.spawnBullet(t.mesh.position.x,t.mesh.position.z,-p+g*2,!1,{kind:"enemy",dmg:11,ttl:3,speed:5})}})}else if(e==="ambush"){c(1.5),this.spawnShow("clone",r,o,n,0,1.4),t.mesh.visible=!1,t.invuln=Math.max(t.invuln??0,1);const u=Math.random()*Math.PI*2,d={x:this.px+Math.cos(u)*2.2,z:this.pz+Math.sin(u)*2.2},g=this.blocked(d.x,d.z,t.r)?Ui(d.x,d.z,t.r,this.walls):d;this.spawnShow("warn",g.x,g.z,n,0,2.3,0,.22,1,void 0,.85),this.queueBeat(.85,()=>{f()&&(t.mesh.position.set(g.x,t.mesh.position.y,g.z),t.mesh.visible=!0,this.bossSlam(t,g.x,g.z,2.3,16,10))})}else if(e==="volley"){c(.75);for(let u=0;u<3;u++)this.queueBeat(.2+u*.18,()=>{if(!f())return;const d=this.leadAngle(t.mesh.position.x,t.mesh.position.z,12,.8);this.spawnFx("flash",t.mesh.position.x,2.4,t.mesh.position.z,n),this.spawnBullet(t.mesh.position.x,t.mesh.position.z,d,!1,{kind:"enemy",dmg:13,ttl:2,speed:12})})}else if(e==="rain"){c(.9);for(let u=0;u<5+s;u++){const d=Math.random()*Math.PI*2,g=u===0?0:1.2+Math.random()*3.2,x=this.px+Math.cos(d)*g,m=this.pz+Math.sin(d)*g;this.spawnShow("warn",x,m,n,0,.9,0,.22,1,void 0,.65),this.queueBeat(.28,()=>this.spawnShow("drop",x,m,n,d,1)),this.queueBeat(.65,()=>{f()&&Math.hypot(this.px-x,this.pz-m)<.95&&this.hurt(12,x,m)})}}else if(e==="nova"){c(1.25),this.spawnShow("rune",r,o,n,0,1.5),this.spawnFx("flash",r,2.6,o,n);const u=16;for(let d=0;d<2;d++)this.queueBeat(.5+d*.35,()=>{if(f()){for(let g=0;g<u;g++)this.spawnBullet(t.mesh.position.x,t.mesh.position.z,(g+d*.5)/u*Math.PI*2,!1,{kind:"enemy",dmg:12,ttl:3,speed:6.5});this.spawnFx("shock",t.mesh.position.x,.08,t.mesh.position.z,n)}})}else if(e==="cross"){c(1.2);const u=Math.random()<.5?0:Math.PI/4,d=[0,1,2,3].map(g=>u+g*Math.PI/2);for(const g of d)this.spawnShow("lane",r,o,n,g,16,0,1.4,1,void 0,.8);this.queueBeat(.8,()=>{if(!f())return;let g=!1;for(const x of d){this.spawnFx("arc",r,.9,o,n,x,16),this.spawnFx("arc",r,.92,o,16777215,x,16);const m=(this.px-r)*Math.cos(x)+(this.pz-o)*Math.sin(x),p=Math.abs(-(this.px-r)*Math.sin(x)+(this.pz-o)*Math.cos(x));m>0&&m<16&&p<.75&&(g=!0)}this.trauma=Math.min(1,this.trauma+.25),g&&this.hurt(18,r,o)})}else if(e==="tide"){c(1.3);const u=s>=2?5:3,d=Math.cos(h),g=Math.sin(h),x=r-d*3,m=o-g*3,p=Array.from({length:u},(M,_)=>(_-(u-1)/2)*3.1+(Math.random()-.5)*.8);for(const M of p)this.spawnShow("lane",x-g*M,m+d*M,n,h,22,0,1.5,1,void 0,.95);this.queueBeat(.95,()=>{if(!f())return;let M=!1;for(const _ of p){const v=x-g*_,b=m+d*_;this.spawnFx("arc",v,.6,b,n,h,22),this.spawnFx("arc",v,.62,b,16777215,h,16);const T=(this.px-v)*d+(this.pz-b)*g,R=Math.abs(-(this.px-v)*g+(this.pz-b)*d);T>0&&T<22&&R<.8&&(M=!0)}this.trauma=Math.min(1,this.trauma+.3),M&&this.hurt(18+s*2,r,o)})}else if(e==="whirl"){c(1.2);const u=this.px,d=this.pz,g=1.7+s*.2;this.spawnShow("warn",u,d,n,0,g,0,.22,1,void 0,2.1),this.spawnShow("rune",u,d,n,0,1.6,-5);for(let x=0;x<20;x++)this.queueBeat(x*.1,()=>{if(!f())return;const m=u-this.px,p=d-this.pz,M=Math.hypot(m,p);M<5&&M>.2&&this.dashLeft<=0&&(this.knockX=m/M*2.6,this.knockZ=p/M*2.6),x%4===0&&this.burst(u,d,n,3)});this.queueBeat(2.1,()=>{f()&&(this.spawnFx("shock",u,.08,d,n),this.spawnShow("dome",u,d,n,0,1.2),this.burst(u,d,n,12),this.trauma=Math.min(1,this.trauma+.35),Math.hypot(this.px-u,this.pz-d)<g&&this.hurt(22+s*3,u,d))})}else if(e==="descent"){const u={x:this.px,z:this.pz},d=this.blocked(u.x,u.z,t.r)?Ui(u.x,u.z,t.r,this.walls):u;c(.15+Va+.5),this.spawnShow("warn",d.x,d.z,n,0,2.2,0,.22,1,void 0,.15+Va),this.spawnFx("shock",r,.08,o,n),this.queueBeat(.15,()=>{f()&&(t.mesh.userData.leapTo=d,t.chargeState=4,t.chargeT=Va)})}else if(e==="starfall"){const u=8+s*2;c(.6+u*.12);const d=Math.cos(h),g=Math.sin(h);for(let x=0;x<u;x++){const m=r+d*(1.6+x*1.15),p=o+g*(1.6+x*1.15);if(this.blocked(m,p,.3,0))break;this.queueBeat(x*.12,()=>{f()&&(this.spawnShow("warn",m,p,n,0,1,0,.22,1,void 0,.55),this.queueBeat(.3,()=>this.spawnShow("meteor",m,p,n,0,.9)),this.queueBeat(.55,()=>{f()&&(this.spawnFx("shock",m,.08,p,n),this.burst(m,p,n,4),Math.hypot(this.px-m,this.pz-p)<1&&this.hurt(14+s*2,m,p))}))})}}else if(e==="comet"){c(1.4),this.spawnFx("flash",r,2.6,o,n);for(let u=0;u<3;u++){const d=h+(u-1)*.5,g=this.spawnBullet(r,o,d,!1,{kind:"enemy",dmg:14,ttl:2,speed:4.5});this.queueBeat(1.1,()=>{if(!f()||!g.live)return;const x=g.mesh.position.x,m=g.mesh.position.z;g.live=!1,g.mesh.visible=!1,this.spawnFx("shock",x,.08,m,n);for(let p=0;p<6+s*2;p++)this.spawnBullet(x,m,p/(6+s*2)*Math.PI*2+u,!1,{kind:"enemy",dmg:11,ttl:1.6,speed:6})})}}else if(e==="pillar"){c(.95);const u=this.px,d=this.pz;this.spawnShow("warn",u,d,n,0,1.3,0,.22,1,void 0,.75),this.queueBeat(.75,()=>{f()&&(this.spawnShow("pillar",u,d,n,0,.8),this.spawnFx("shock",u,.08,d,n),Math.hypot(this.px-u,this.pz-d)<1.3&&this.hurt(16,u,d))})}}bossSlam(t,e,i,n,s,r){const o=$i[t.bossId];this.spawnShow("pillar",e,i,o,0,1),this.spawnFx("shock",e,.08,i,o),this.burst(e,i,o,10),this.trauma=Math.min(1,this.trauma+.25),Math.hypot(this.px-e,this.pz-i)<n&&this.hurt(s,e,i);for(let h=0;h<r;h++)this.spawnBullet(e,i,h/r*Math.PI*2+t.bossPhase*.2,!1,{kind:"enemy",dmg:12,ttl:1.6})}}class Bv extends Ov{stepBite(t,e){var s;const i=Math.hypot(this.px-t.mesh.position.x,this.pz-t.mesh.position.z);if(t.kind==="husk"&&t.chargeState===2){i<.55+t.r&&this.hurt(34,t.mesh.position.x,t.mesh.position.z);return}const n=.75+t.r;if(t.biteCd=Math.max(0,(t.biteCd??0)-e),(t.bite??0)>0){if(t.bite=(t.bite??0)-e,t.bite>0)return;t.bite=0;const r=Math.atan2(this.pz-t.mesh.position.z,this.px-t.mesh.position.x);if(t.recoil=.35,t.lunge=.25,this.spawnFx("streak",t.mesh.position.x+Math.cos(r)*.5,.8,t.mesh.position.z+Math.sin(r)*.5,Se[t.kind],r),i<n+.3){if(this.iFrames<=0&&this.dashLeft<=0&&this.lungeLeft<=0){const h=t.kind==="skitter"?3.6:t.kind==="wight"||t.kind==="bulwark"||t.kind==="husk"?7.9:5.7,l=Math.cos(r),c=Math.sin(r);this.knockX=l*h,this.knockZ=c*h,this.spawnFx("shock",this.px,.1,this.pz,Se[t.kind])}const o=t.kind==="moth"?6:t.kind==="skitter"?7:t.kind==="mire"?12:t.kind==="bell"?10:t.kind==="wight"?24:t.kind==="wraith"?16:t.kind==="husk"?14:t.kind==="bulwark"?15:13;this.hurt(o,t.mesh.position.x,t.mesh.position.z)}return}if(i<n&&(t.biteCd??0)<=0){const r=(t.kind==="skitter"?.22:t.kind==="wight"||t.kind==="husk"||t.kind==="bulwark"||t.kind==="mire"?.5:.36)*((s=t.affixes)!=null&&s.includes("hasted")?Ot.hastedWindup:1);t.bite=r,t.biteWind=r,ds("bite"),t.biteCd=r+.7,t.mesh.rotation.y=Math.atan2(this.px-t.mesh.position.x,this.pz-t.mesh.position.z),this.spawnFx("flash",t.mesh.position.x,1,t.mesh.position.z,Se[t.kind])}}animateEnemy(t,e,i){var g;const n=(t.size??1)*Ot.enemyScale;if(t.burrowed||t.kind==="burrower"&&t.chargeState===1){t.mesh.scale.set(n*1.25,n*.16,n*1.25);return}let s=0,r=0,o=1,h=1,l=1;const c=x=>Math.sin(this.clock*61+t.phase*7)*x;if(o+=t.recoil*.22,l+=t.recoil*.22,h-=t.recoil*.18,(t.flinch??0)>0){t.flinch=Math.max(0,(t.flinch??0)-e);const x=(t.flinch??0)/.22,m=t.mesh.rotation.y,p=t.flinchX??0,M=t.flinchZ??0;s+=(p*Math.sin(m)+M*Math.cos(m))*.4*x,r-=(p*Math.cos(m)-M*Math.sin(m))*.4*x}if((t.bite??0)>0){const x=1-(t.bite??0)/(t.biteWind||.4);s-=.32*x,r+=c(.06*x*x),h-=.16*x,o+=.1*x,l+=.1*x}if((t.lunge??0)>0){t.lunge=Math.max(0,(t.lunge??0)-e);const x=(t.lunge??0)/.25;s+=.45*x,l*=1+.25*x,h*=1-.08*x}if(dl(t.kind)){if(t.chargeState===1){const x=1-t.chargeT/.5;s-=.4*x,r+=c(.08*x),h-=.12*x,o+=.1*x,l+=.1*x}else if(t.chargeState===2)s+=.38,l*=1.15,h*=.94;else if(t.chargeState===3){const x=t.chargeT/.6;s+=.3*x,h*=1-.1*x}}if(t.telegraph>0){t.telegraph=Math.max(0,t.telegraph-e);const x=1-t.telegraph/(t.telegraphMax||1),m=1+.12*x+Math.sin(this.clock*24)*.025*x;o*=m,h*=m,l*=m,s-=.12*x}t.kind==="shell"&&t.chargeState===1&&(h*=.6,o*=1.12,l*=1.12);const f=1-i;if(f>.3&&!la(t.kind)){const x=!!((g=t.affixes)!=null&&g.length),m=Math.sin(this.clock*(x?1.8:2.6)+t.phase)*(x?.06:.035)*f;h*=1+m,o*=1-m*.5,l*=1-m*.5}const u=t.age??0,d=Xa(t.kind)||qa(t.kind);if(u<.5){const x=u/.5;if(d){t.mesh.position.y+=Math.pow(1-x,2)*1.8;const m=.35+.65*x;o*=m,h*=m,l*=m}else t.mesh.position.y-=Math.pow(1-x,2)*1.3}else if(u<.7&&!d){const x=1+.12*Math.sin((u-.5)/.2*Math.PI);o*=x,h*=x,l*=x}t.mesh.rotation.x+=s,t.mesh.rotation.z+=r,t.mesh.scale.set(n*o,n*h,n*l)}stepEnemy(t,e){if(t.dummy){t.flash=Math.max(0,(t.flash??0)-e),t.recoil=Math.max(0,(t.recoil??0)-e*4),t.mesh.rotation.y=Math.atan2(this.px-t.mesh.position.x,this.pz-t.mesh.position.z);return}if(t.bossId){this.stepBoss(t,e);return}const i=this.px-t.mesh.position.x,n=this.pz-t.mesh.position.z,s=Math.hypot(i,n)||1,r=(t.frozen??0)>0?.05:t.slow>0?.42:1;let o=i/s*t.speed*r,h=n/s*t.speed*r;Xf(t.kind)&&(s<5?(o=-(i/s)*t.speed*r,h=-(n/s)*t.speed*r):s<7.5&&(o=-(n/s)*t.speed*.55*r,h=i/s*t.speed*.55*r));let l=!1;if(dl(t.kind))if(t.chargeState===0)t.shootCd=Math.max(0,t.shootCd-e),t.shootCd<=0&&s>1.8&&s<7.5&&(t.chargeState=1,t.chargeT=.5,t.shootCd=3.4,t.mesh.rotation.y=Math.atan2(i,n),this.spawnFx("flash",t.mesh.position.x,t.mesh.position.y+.9,t.mesh.position.z,Se.husk));else if(t.chargeState===1)t.chargeT-=e,o=0,h=0,l=!0,t.chargeT<=0&&(t.chargeState=2,t.chargeT=.5);else if(t.chargeState===2){t.chargeT-=e;const g=Math.sin(t.mesh.rotation.y),x=Math.cos(t.mesh.rotation.y);o=g*t.speed*4.2,h=x*t.speed*4.2,l=!0,(t.chargeT<=0||this.blocked(t.mesh.position.x+o*e,t.mesh.position.z+h*e,t.r))&&(t.chargeState=3,t.chargeT=.6)}else t.chargeState===3&&(t.chargeT-=e,o*=.25,h*=.25,t.chargeT<=0&&(t.chargeState=0));if(t.kind==="burrower"){const g=Se.burrower;if(t.chargeState===0)t.burrowed=!0,o*=1,h*=1,Math.random()<e*9&&this.burst(t.mesh.position.x,t.mesh.position.z,9071178,1),s<1.2&&t.spawnGrace<=0&&(t.chargeState=1,t.chargeT=.6,this.spawnShow("warn",t.mesh.position.x,t.mesh.position.z,g,0,1.35,0,.22,1,void 0,.6));else if(t.chargeState===1){if(o=0,h=0,t.chargeT-=e,t.chargeT<=0){t.chargeState=2,t.chargeT=2.2,t.burrowed=!1,t.biteCd=.9;const x=t.mesh.position.x,m=t.mesh.position.z;if(this.burst(x,m,9071178,12),this.spawnFx("shock",x,.08,m,g),Math.hypot(this.px-x,this.pz-m)<1.4){this.hurt(16,x,m);const p=Math.atan2(this.pz-m,this.px-x);this.knockX=Math.cos(p)*5.5,this.knockZ=Math.sin(p)*5.5}}}else o*=.35,h*=.35,t.chargeT-=e,t.chargeT<=0&&(t.chargeState=0,t.burrowed=!0,this.burst(t.mesh.position.x,t.mesh.position.z,9071178,8))}(t.bite??0)>0&&(o=0,h=0,l=!0),qa(t.kind)&&s<6.5&&(o=0,h=0);for(const g of this.enemies){if(g===t)continue;const x=t.mesh.position.x-g.mesh.position.x,m=t.mesh.position.z-g.mesh.position.z,p=Math.hypot(x,m);p>0&&p<1.1&&(o+=x/p*1.2,h+=m/p*1.2)}const c=wh(t.mesh.position.x+o*e,t.mesh.position.z+h*e,t.r,t.mesh.position.x,t.mesh.position.z,this.walls,t.mesh.position.y);t.mesh.position.x=c.x,t.mesh.position.z=c.z;const f=Math.hypot(o,h),u=t.speed>0?Math.min(1,f/t.speed):0;if(t.mesh.rotation.order="YXZ",!l&&f>.05){let g=Math.atan2(o,h)-t.mesh.rotation.y;g=((g+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,t.mesh.rotation.y+=g*Math.min(1,e*11)}t.mesh.rotation.x=la(t.kind)||Xa(t.kind)?0:Math.min(.22,.13*(f/Math.max(.01,t.speed)));const d=Pn(t.mesh.position.x,t.mesh.position.z,this.plats);if(la(t.kind)?(t.mesh.position.y=d,t.mesh.rotation.y=this.clock*.5+t.phase,t.mesh.rotation.z=0):Xa(t.kind)?(t.mesh.position.y=d+.18+Math.sin(this.clock*2.2+t.phase)*.12,t.mesh.rotation.z=Math.sin(this.clock*1.8+t.phase)*.08):t.kind==="zombie"?(t.mesh.position.y=d,t.mesh.rotation.z=Math.sin(this.clock*7+t.phase)*.1):t.kind==="skitter"?(t.mesh.position.y=d+Math.abs(Math.sin(this.clock*22+t.phase))*.05,t.mesh.rotation.z=Math.sin(this.clock*30+t.phase)*.06):(t.mesh.position.y=d+Math.abs(Math.sin(this.clock*9+t.phase))*.05*u,t.mesh.rotation.z=0),t.age=(t.age??0)+e,t.recoil=Math.max(0,t.recoil-e*9),t.slow=Math.max(0,t.slow-e),t.frozen&&(t.frozen=Math.max(0,t.frozen-e)),t.spawnGrace=Math.max(0,t.spawnGrace-e),this.stepCurse(t,e),t.mendT!==void 0&&(t.mendT-=e,t.mendT<=0)){t.mendT=1;const g=ji.mending.color;this.spawnFx("ring",t.mesh.position.x,.08,t.mesh.position.z,g);for(const x of this.enemies)x===t||x.bossId||x.hp>=x.maxHp||Math.hypot(x.mesh.position.x-t.mesh.position.x,x.mesh.position.z-t.mesh.position.z)>Ot.mendingRadius||(x.hp=Math.min(x.maxHp,x.hp+x.maxHp*Ot.mendingShare),this.burst(x.mesh.position.x,x.mesh.position.z,g,2))}if(this.animateEnemy(t,e,u),t.flash>0&&(t.flash-=e),this.applyHitFlash(t),!la(t.kind)&&!pl(t.kind)&&t.spawnGrace<=0&&!(t.kind==="burrower"&&t.chargeState!==2)&&this.stepBite(t,e),this.stepNewKinds(t,s,e),pl(t.kind)&&t.spawnGrace<=0&&Math.hypot(this.px-t.mesh.position.x,this.pz-t.mesh.position.z)<1.3){this.hurt(26,t.mesh.position.x,t.mesh.position.z),this.spawnShow("dome",t.mesh.position.x,t.mesh.position.z,Se.cinder,0,1.1),this.burst(t.mesh.position.x,t.mesh.position.z,Se.cinder,10),this.impact(t.mesh.position.x,t.mesh.position.z,Se.cinder,!0),this.killEnemy(t);return}if(qf(t.kind)&&(t.shootCd-=e,t.shootCd<=0&&s<14&&this.enemies.length<9)){t.shootCd=4.4;const g=t.mesh.position.x,x=t.mesh.position.z;this.spawnShow("rune",g,x,Se.binder,0,1),this.queueBeat(.55,()=>{this.enemies.includes(t)&&(this.spawnEnemy("zombie"),this.spawnFx("flash",g,.6,x,Se.binder))})}if(Yf(t.kind)&&(t.shootCd-=e,t.shootCd<=0&&s<16&&(t.shootCd=3.8,t.telegraph=t.telegraphMax=1.1,this.spawnFx("flash",t.mesh.position.x,t.mesh.position.y+.6,t.mesh.position.z,Se.gazer),this.queueBeat(1.1,()=>{if(!this.enemies.includes(t))return;const g=this.leadAngle(t.mesh.position.x,t.mesh.position.z,16,.6);this.spawnBullet(t.mesh.position.x,t.mesh.position.z,g,!1,{dmg:30,pierce:1,homing:0,ttl:3,kind:"enemy",y:t.mesh.position.y+.5,speed:16}),this.spawnFx("streak",t.mesh.position.x,t.mesh.position.y+.5,t.mesh.position.z,Se.gazer,g)}))),qa(t.kind)&&(t.shootCd-=e,t.shootCd<=0&&s<14)){t.shootCd=3.2,t.telegraph=t.telegraphMax=.6;const g=t.mesh.position.x,x=t.mesh.position.z;this.spawnFx("flash",g,t.mesh.position.y+.8,x,Se.bell),this.spawnShow("rune",g,x,Se.bell,0,.9),this.queueBeat(.6,()=>{if(!this.enemies.includes(t))return;const m=_e(this.room)>=3?12:8;t.phase+=Math.PI/m;for(let p=0;p<m;p++){const M=t.phase+p/m*Math.PI*2;this.spawnBullet(t.mesh.position.x,t.mesh.position.z,M,!1,{dmg:12,pierce:0,homing:0,ttl:3,kind:"enemy",y:t.mesh.position.y+.7,speed:6.5})}this.spawnFx("ring",t.mesh.position.x,.08,t.mesh.position.z,Se.bell)})}if(Zf(t.kind))t.shootCd-=e,t.shootCd<=0&&s<12&&(t.shootCd=t.kind==="wight"?.7:t.kind==="wraith"?1.05:1.4-this.room*.06,this.spawnBullet(t.mesh.position.x,t.mesh.position.z,this.leadAngle(t.mesh.position.x,t.mesh.position.z,10),!1,{dmg:t.kind==="wight"?18:14,pierce:0,homing:0,ttl:2.2,kind:"enemy",y:t.mesh.position.y+.5}));else if(Jf(t.kind)&&(t.shootCd-=e,t.shootCd<=0&&s<13)){t.shootCd=2.6,t.telegraph=t.telegraphMax=.7;const g=this.px,x=this.pz;this.spawnShow("rune",g,x,Se.acolyte,0,1.15),this.queueBeat(.7,()=>{this.enemies.includes(t)&&(this.spawnShow("dome",g,x,Se.acolyte,0,1.3),Math.hypot(this.px-g,this.pz-x)<1.5&&this.hurt(20,g,x))})}}stepNewKinds(t,e,i){if(t.spawnGrace>0)return;const n=t.mesh.position.x,s=t.mesh.position.z;if(t.kind==="moth"){const r=Math.atan2(this.pz-s,this.px-n),o=Math.sin(this.clock*7+t.phase*5)*2.6*i,h=n-Math.sin(r)*o,l=s+Math.cos(r)*o;this.blocked(h,l,t.r,0)||t.mesh.position.set(h,t.mesh.position.y,l),!this.lite&&Math.random()<i*6&&this.burst(n,s,Se.moth,1)}else if(t.kind==="mirror")this.stepMirror(t,e,i);else if(t.kind==="shell")this.stepShell(t,e,i);else if(t.kind==="siren")this.stepSiren(t,e,i);else if(t.kind==="censer")t.shootCd-=i,t.shootCd<=0&&e<12&&(t.shootCd=1.5,this.addZone("ash",n,s,1.25,3.4),this.burst(n,s,Se.censer,3));else if(t.kind==="weaver"){if(t.shootCd-=i,t.shootCd<=0&&e<11){t.shootCd=3.4,t.telegraph=t.telegraphMax=.75;const r=this.px,o=this.pz;this.spawnShow("warn",r,o,Se.weaver,0,1.6,0,.22,1,void 0,.75),this.spawnFx("streak",n,.9,s,Se.weaver,Math.atan2(o-s,r-n)),this.queueBeat(.75,()=>{this.enemies.includes(t)&&this.addZone("web",r,o,1.65,4.5)})}}else if(t.kind==="tidecaller"&&(t.shootCd-=i,t.shootCd<=0&&e<13)){t.shootCd=4,t.telegraph=t.telegraphMax=.9;const r=Math.atan2(this.pz-s,this.px-n),o=Se.tidecaller;this.spawnShow("lane",n,s,o,r,14,0,1.3,1,void 0,.9),this.queueBeat(.9,()=>{if(!this.enemies.includes(t))return;this.spawnFx("arc",n,.6,s,o,r,14),this.spawnFx("arc",n,.62,s,16777215,r,10);const h=(this.px-n)*Math.cos(r)+(this.pz-s)*Math.sin(r),l=Math.abs(-(this.px-n)*Math.sin(r)+(this.pz-s)*Math.cos(r));h>0&&h<14&&l<.75&&this.hurt(16,n,s)})}}stepMirror(t,e,i){const n=Se.mirror;if(t.shootCd=Math.max(0,t.shootCd-i),t.chargeState===0)this.dashLeft>.12&&e<10&&t.shootCd<=0&&(t.chargeState=1,t.chargeT=.28,t.telegraph=t.telegraphMax=.28,this.spawnFx("flash",t.mesh.position.x,1.2,t.mesh.position.z,n));else if(t.chargeState===1)t.chargeT-=i,t.chargeT<=0&&(t.chargeState=2,t.chargeT=.26,t.mesh.rotation.y=Math.atan2(this.px-t.mesh.position.x,this.pz-t.mesh.position.z));else if(t.chargeState===2){t.chargeT-=i;const s=Math.sin(t.mesh.rotation.y),r=Math.cos(t.mesh.rotation.y),o=20*i,h=t.mesh.position.x+s*o,l=t.mesh.position.z+r*o;this.blocked(h,l,t.r,0)?t.chargeT=0:t.mesh.position.set(h,t.mesh.position.y,l),this.burst(t.mesh.position.x,t.mesh.position.z,n,this.lite?1:2),Math.hypot(this.px-t.mesh.position.x,this.pz-t.mesh.position.z)<.6+t.r&&this.iFrames<=0&&(this.hurt(14,t.mesh.position.x,t.mesh.position.z),t.chargeT=0),t.chargeT<=0&&(t.chargeState=3,t.chargeT=.5,t.lunge=.25,this.spawnFx("streak",t.mesh.position.x,.9,t.mesh.position.z,n,Math.atan2(r,s)))}else t.chargeT-=i,t.chargeT<=0&&(t.chargeState=0,t.shootCd=1.4)}stepShell(t,e,i){const n=t.mesh.getObjectByName("pearl");t.chargeT-=i,t.chargeState===0?(n&&(n.visible=!0),t.shootCd-=i,t.shootCd<=0&&e<12&&(t.shootCd=1.5,t.telegraph=t.telegraphMax=.5,this.queueBeat(.5,()=>{if(!this.enemies.includes(t)||t.chargeState!==0)return;const s=Math.atan2(this.pz-t.mesh.position.z,this.px-t.mesh.position.x);for(let r=-2;r<=2;r++)this.spawnBullet(t.mesh.position.x,t.mesh.position.z,s+r*.22,!1,{dmg:9,speed:6})})),t.chargeT<=0&&(t.chargeState=1,t.chargeT=2.4,this.burst(t.mesh.position.x,t.mesh.position.z,Se.shell,4))):(n&&(n.visible=!1),t.chargeT<=0&&(t.chargeState=0,t.chargeT=3.2,t.shootCd=.4))}stepSiren(t,e,i){const n=Se.siren,s=t.mesh.position.x,r=t.mesh.position.z;if(t.chargeState===0)t.shootCd-=i,t.shootCd<=0&&e<11&&(t.chargeState=1,t.chargeT=.6,t.telegraph=t.telegraphMax=.6);else if(t.chargeState===1)t.chargeT-=i,t.chargeT<=0&&(t.chargeState=2,t.chargeT=2);else{t.chargeT-=i;const o=Math.atan2(r-this.pz,s-this.px);e>1&&(this.knockX+=Math.cos(o)*26*i,this.knockZ+=Math.sin(o)*26*i),Math.random()<i*4&&this.spawnFx("ring",s,.08,r,n),Math.random()<i*6&&this.spawnFx("arc",s,.9,r,n,Math.atan2(this.pz-r,this.px-s),e),(this.dashLeft>0||t.chargeT<=0)&&(this.dashLeft>0&&this.spawnFx("shock",s,.08,r,n),t.chargeState=0,t.shootCd=5.5)}}addZone(t,e,i,n,s){const r=t==="ash"?Se.censer:Se.weaver,o=new Jt,h=new w(this.sharedGeo("zone-disc",()=>new Xe(1,28)),this.mat(new st({color:t==="ash"?3814452:r,transparent:!0,opacity:t==="ash"?.5:.22,depthWrite:!1,fog:!1})));h.rotation.x=-Math.PI/2,o.add(h);const l=new w(this.sharedGeo(t==="ash"?"zone-ring":"zone-web",()=>t==="ash"?new Fe(.88,1,32):new Fe(.2,1,12,3)),this.mat(new st({color:r,transparent:!0,opacity:t==="ash"?.6:.5,depthWrite:!1,fog:!1,wireframe:t==="web"})));l.rotation.x=-Math.PI/2,l.position.y=.01,o.add(l),o.position.set(e,.05,i),o.scale.setScalar(n),this.scene.add(o),this.zones.push({kind:t,x:e,z:i,r:n,ttl:s,max:s,tick:.2,mesh:o}),this.zones.length>12&&this.removeZone(this.zones[0])}removeZone(t){this.scene.remove(t.mesh),t.mesh.traverse(e=>{e instanceof w&&e.material.dispose()}),this.zones=this.zones.filter(e=>e!==t)}stepZones(t){this.webbed=Math.max(0,this.webbed-t);for(const e of[...this.zones]){e.ttl-=t,e.tick-=t,e.mesh.scale.setScalar(e.r*Math.min(1,(e.max-e.ttl)/.2)*Math.min(1,e.ttl/.4+.2));const i=Math.hypot(this.px-e.x,this.pz-e.z)<e.r;e.kind==="ash"?(Math.random()<t*3&&this.burst(e.x+(Math.random()-.5)*e.r,e.z+(Math.random()-.5)*e.r,9076856,1),e.tick<=0&&(e.tick=.5,i&&this.dashLeft<=0&&this.hurt(7,e.x,e.z))):i&&(this.webbed=.3),e.ttl<=0&&this.removeZone(e)}}}const Wa=11563263,kv=new N,Xc=new ot,Hv=new Qi(new N(0,1,0),0);class Gv extends Bv{constructor(){super(...arguments);D(this,"glaives",[]);D(this,"hammerDur",.62);D(this,"sickles",[]);D(this,"frostShards",[]);D(this,"frostNext",0);D(this,"frostFling",0);D(this,"frostR",0);D(this,"frostDmg",0);D(this,"frostTrail")}autoTarget(){if(!vi().autoAim||Kf()!=="touch")return null;let e=null,i=9;for(const n of this.enemies){if(n.burrowed)continue;const s=Math.hypot(n.mesh.position.x-this.px,n.mesh.position.z-this.pz);s<i&&(i=s,e=n)}return e}worldAim(){const e=eu(),i=ce.getState().touch;if(Math.hypot(e.ax,e.ay)>.25)return{x:e.ax,z:e.ay};const n=Math.hypot(i.ax,i.ay);if(n>.001)return{x:i.ax/n,z:i.ay/n};const s=this.autoTarget();if(s){const h=s.mesh.position.x-this.px,l=s.mesh.position.z-this.pz,c=Math.hypot(h,l)||1;return{x:h/c,z:l/c}}if(!this.pointer.mouse)return{x:this.aimX,z:this.aimZ};const r=this.renderer.domElement.getBoundingClientRect();Xc.set((this.pointer.x-r.left)/r.width*2-1,-((this.pointer.y-r.top)/r.height)*2+1),this.ray.setFromCamera(Xc,this.camera);const o=this.ray.ray.intersectPlane(Hv,kv);if(o){const h=o.x-this.px,l=o.z-this.pz,c=Math.hypot(h,l)||1;return{x:h/c,z:l/c}}return{x:this.aimX,z:this.aimZ}}comboLen(){return 3}fire(){if(this.fireCd>0)return;const e=this.swapLeft>0&&this.runJob==="hunter"?1.25:1,i=this.comboLen(),n=this.combo;this.combo=(this.combo+1)%i,this.comboIdle=0,this.swingStep=n,this.swingFinisher=n===i-1;const s=1+.06*this.rushStacks;this.fireCd=this.job.fireMs/this.fireMul/e/s/$f(this.masteryRank)/(this.setOn("wrath",3)&&this.hp<this.maxHp*.5?1.2:1)/1e3*(this.swingFinisher?1.32:1),this.skin==="warhammer"&&(this.fireCd*=1.9,this.hammerDur=Math.min(.62,this.fireCd*.95)),this.rares.has("phantom")&&++this.phantomCount%4===0&&(this.nova(this.px,this.pz,8,"bolt"),this.spawnFx("ring",this.px,.08,this.pz,Rt[2]),Bs());const r=this.worldAim();this.aimX=r.x,this.aimZ=r.z,this.attackT=1,Qf(this.skin);const o=Math.atan2(r.z,r.x);this.runJob==="reaper"&&this.skin==="twindaggers"?this.castDarkImpale(o,n):this.runJob==="reaper"&&this.skin==="chainsickle"?this.castChainSickle(o):this.runJob==="reaper"?this.swingReaper(o,n):this.runJob==="arcanist"&&this.skin==="prismshard"?this.castCurseBolt(o,n):this.runJob==="arcanist"&&this.skin==="frostorbit"?this.castFrostOrbit():this.runJob==="arcanist"?this.castArcanist(o,n):this.runJob==="hunter"&&this.skin==="twinfang"?this.castSnipeShot(o,n):this.runJob==="hunter"&&this.skin==="scattershot"?this.castScattershot(o):this.runJob==="hunter"?this.castHunter(o,n):this.runJob==="knight"&&this.skin==="dawnedge"?this.castDawnRush(o,n):this.runJob==="knight"&&this.skin==="warhammer"?this.castWarhammer(o):this.runJob==="knight"?this.castKnight(o,n):this.runJob==="wanderer"&&this.skin==="glaive"?this.castGlaive(o):this.castWanderer(o,n)}castGlaive(e){const i=this.classIndex,n=this.swingFinisher,s=Ot.pierceReach*this.bonusPierce(),r=this.hitDamage()*(1+i*.12)*.5*(n?1.15:1),o=5.6+i*.5+s*2,h=.6+i*.08+s,l=n?[e-.22,e+.22]:[e];for(const c of l)this.launchGlaive(c,o,h,r)}launchGlaive(e,i,n,s){let r=this.glaives.find(o=>!o.live);if(!r){const o=new Jt,h=new wi;for(let u=0;u<8;u++){const d=u%2===0?.55:.16,g=u/8*Math.PI*2;u===0?h.moveTo(Math.cos(g)*d,Math.sin(g)*d):h.lineTo(Math.cos(g)*d,Math.sin(g)*d)}h.closePath();const l=this.sharedGeo("glaive-star",()=>new _r(h)),c=new w(l,this.mat(new st({color:2363436,fog:!1,side:Qt,depthWrite:!1})));c.rotation.x=-Math.PI/2,c.scale.setScalar(1.18),c.position.y=-.08,c.renderOrder=2;const f=new w(l,this.mat(new st({color:ee.wanderer,fog:!1,side:Qt})));f.rotation.x=-Math.PI/2,f.renderOrder=3,o.add(c,f),this.scene.add(o),r={mesh:o,x:0,z:0,dx:0,dz:0,t:0,out:0,dist:0,back:!1,r:0,dmg:0,hit:new Set,live:!1},this.glaives.push(r)}Object.assign(r,{x:this.px,z:this.pz,dx:Math.cos(e),dz:Math.sin(e),t:0,out:0,dist:i,back:!1,r:n,dmg:s,live:!0}),r.hit.clear(),r.mesh.parent||this.scene.add(r.mesh),r.mesh.visible=!0,r.mesh.scale.setScalar(n/.6),r.mesh.position.set(r.x,.9,r.z)}stepGlaives(e){for(const i of this.glaives){if(!i.live)continue;i.t+=e;const n=17;if(i.back){const s=this.px-i.x,r=this.pz-i.z,o=Math.hypot(s,r),h=(n+4)*e;if(o<=Math.max(.5,h)||i.t>3){i.live=!1,i.mesh.visible=!1,this.spawnFx("flash",this.px,1,this.pz,ee.wanderer),jf();continue}i.x+=s/o*h,i.z+=r/o*h}else{const s=i.x+i.dx*n*e,r=i.z+i.dz*n*e;i.out+=n*e,i.out>=i.dist||this.blocked(s,r,.2,0)?(i.back=!0,i.hit.clear()):(i.x=s,i.z=r)}i.mesh.position.set(i.x,.9,i.z),i.mesh.rotation.y+=e*24;for(const s of[...this.enemies])i.hit.has(s)||s.burrowed||Math.hypot(s.mesh.position.x-i.x,s.mesh.position.z-i.z)>i.r+s.r||(i.hit.add(s),this.damageOne(s,i.x,i.z,i.dmg),nr());Math.random()<e*(this.lite?14:34)&&this.burst(i.x,i.z,ee.wanderer,1)}}castWarhammer(e){const i=this.classIndex,n=this.swingFinisher,s=Ot.pierceReach*this.bonusPierce(),r=this.hitDamage()*(1+i*.12)*(n?1.3:1),o=this.px+Math.cos(e)*1.3,h=this.pz+Math.sin(e)*1.3,l=1.1+i*.1,c=6+i+Math.round(s*1.5),f=1.05;this.queueBeat(this.hammerDur*.36,()=>{const u=new Set;this.damageAround(o,h,l,r,g=>{u.add(g),this.staggerFrom(g,o,h,.6)}),this.spawnFx("shock",o,.08,h,ee.knight),this.spawnFx("flash",o,.6,h,ee.knight),this.spawnFx("ring",o,.07,h,2759216),this.burst(o,h,9075338,n?12:7),this.trauma=Math.min(1,this.trauma+(n?.35:.18)),this.camPunch=Math.min(1,this.camPunch+.3),hs();const d=n?[e-.38,e,e+.38]:[e];for(const g of d){const x=Math.cos(g),m=Math.sin(g);let p=!1;for(let M=1;M<=c;M++)this.queueBeat(M*.045,()=>{if(p)return;const _=o+x*f*M,v=h+m*f*M;if(this.blocked(_,v,.3,0)){p=!0,this.burst(_-x*.5,v-m*.5,9075338,5);return}this.spawnFx("streak",_,.15,v,2759216,g),this.burst(_,v,M%2?9075338:ee.knight,this.lite?2:4),M%2===0&&this.spawnFx("shock",_,.08,v,ee.knight);for(const b of[...this.enemies])u.has(b)||b.burrowed||Math.hypot(b.mesh.position.x-_,b.mesh.position.z-v)>.85+b.r||(u.add(b),this.damageOne(b,_,v,r*.7),this.staggerFrom(b,_,v,.4))})}})}staggerFrom(e,i,n,s){if(e.slow=Math.max(e.slow,.9),e.bossId||!this.enemies.includes(e))return;const r=e.mesh.position.x-i,o=e.mesh.position.z-n,h=Math.hypot(r,o)||1,l=e.mesh.position.x+r/h*s,c=e.mesh.position.z+o/h*s;this.blocked(l,c,.4,0)||e.mesh.position.set(l,e.mesh.position.y,c)}castScattershot(e){const i=this.classIndex,n=this.swingFinisher,s=5+i+this.extraPellets,r=this.hitDamage()*(1+Ot.tierDamage*i)*1.6/5,o=.62,h=this.job.bulletSpeed/mi*1.15,l=.26+Ot.pierceReach*this.bonusPierce()*.05,c=d=>{for(let g=0;g<s;g++){const x=e+(g/Math.max(1,s-1)-.5)*o+(Math.random()-.5)*.08+d;this.spawnBullet(this.px+Math.cos(x)*.55,this.pz+Math.sin(x)*.55,x,!0,{kind:"shard",dmg:r,pierce:0,ttl:l,speed:h*(.9+Math.random()*.2)})}};c(0);const f=this.px+Math.cos(e)*.7,u=this.pz+Math.sin(e)*.7;this.burst(f,u,ee.hunter,6),this.spawnFx("flash",f,.9,u,ee.hunter);for(const d of[-.2,0,.2])this.spawnFx("streak",f,.9,u,ee.hunter,e+d);if(n){const d=this.px-Math.cos(e)*.35,g=this.pz-Math.sin(e)*.35;this.blocked(d,g,.42,this.py)||(this.px=d,this.pz=g),this.burst(this.px,this.pz,14207176,5),this.trauma=Math.min(1,this.trauma+.12),this.queueBeat(.07,()=>c(.04)),this.queueBeat(.06,()=>{for(const x of this.enemies){if(x.bossId||x.burrowed)continue;const m=x.mesh.position.x-this.px,p=x.mesh.position.z-this.pz,M=Math.hypot(m,p);if(M>2.6||M<.01)continue;let _=Math.atan2(p,m)-e;if(_=((_+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,Math.abs(_)>.6)continue;const v=x.mesh.position.x+m/M*.9,b=x.mesh.position.z+p/M*.9;this.blocked(v,b,.4,0)||x.mesh.position.set(v,x.mesh.position.y,b)}})}}castChainSickle(e){const i=this.classIndex,n=this.swingFinisher,s=4.2+i*.3+Ot.pierceReach*this.bonusPierce(),r=n?.85:.55,o=n?2.2:1.6,h=this.hitDamage()*(1+i*.12)*(n?1.4:1),l=this.combo%2===0?1:-1;this.launchSickle(e,l,r,s),this.spawnFx("flash",this.px+Math.cos(e)*.6,1,this.pz+Math.sin(e)*.6,Wa),this.queueBeat(.13,()=>{for(const c of[...this.enemies]){if(c.burrowed)continue;const f=c.mesh.position.x-this.px,u=c.mesh.position.z-this.pz,d=Math.hypot(f,u);if(d<1.2-c.r||d>s+c.r)continue;let g=Math.atan2(u,f)-e;if(g=((g+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,Math.abs(g)>r+Math.atan2(c.r,Math.max(d,.01))||(this.damageOne(c,this.px,this.pz,h,M=>this.markEnemy(M,n)),this.burst(c.mesh.position.x,c.mesh.position.z,Wa,4),c.bossId||!this.enemies.includes(c)))continue;const x=Math.min(o,Math.max(0,d-1.1)),m=c.mesh.position.x-f/d*x,p=c.mesh.position.z-u/d*x;this.blocked(m,p,.4,0)||c.mesh.position.set(m,c.mesh.position.y,p)}})}launchSickle(e,i,n,s){let r=this.sickles.find(o=>!o.live);if(!r){const o=new Jt,h=this.sharedGeo("sickle-link",()=>new jt(.09,.025,5,10)),l=this.mat(new st({color:8014008,fog:!1})),c=[];for(let g=0;g<10;g++){const x=new w(h,l);x.rotation.set(Math.PI/2,g%2?Math.PI/2:0,0),o.add(x),c.push(x)}const f=new w(this.sharedGeo("sickle-hook",()=>new jt(.42,.075,6,18,Math.PI*1.15)),this.mat(new st({color:Wa,fog:!1,side:Qt}))),u=new w(this.sharedGeo("sickle-hook-aura",()=>new jt(.42,.24,6,18,Math.PI*1.15)),this.mat(new st({color:10116351,transparent:!0,opacity:.35,depthWrite:!1,fog:!1,blending:pe})));f.add(u);const d=new w(this.sharedGeo("sickle-hook-rim",()=>new jt(.42,.11,6,18,Math.PI*1.15)),this.mat(new st({color:2363436,fog:!1,side:Ze})));f.add(d),o.add(f),this.scene.add(o),r={group:o,hook:f,links:c,t:0,ang:0,side:1,arc:0,reach:0,live:!1},this.sickles.push(r)}r.group.parent||this.scene.add(r.group),Object.assign(r,{t:0,ang:e,side:i,arc:n,reach:s,live:!0}),r.group.visible=!0}stepSickles(e){for(const r of this.sickles){if(!r.live)continue;r.t+=e;let o,h;const l=r.ang-r.side*r.arc;if(r.t<.07)o=r.reach*(r.t/.07),h=l;else if(r.t<.07+.12)o=r.reach,h=l+r.side*r.arc*2*((r.t-.07)/.12);else if(r.t<.07+.12+.07)o=r.reach*(1-(r.t-.07-.12)/.07),h=r.ang+r.side*r.arc;else{r.live=!1,r.group.visible=!1;continue}const c=this.px+Math.cos(h)*o,f=this.pz+Math.sin(h)*o;r.links.forEach((u,d)=>{const g=(d+1)/(r.links.length+1);u.position.set(this.px+(c-this.px)*g,.95,this.pz+(f-this.pz)*g),u.visible=o>.3}),r.hook.position.set(c,.95,f),(!this.lite||Math.random()<.5)&&this.burst(c,f,Math.random()<.5?Wa:6961832,1),r.hook.rotation.set(-Math.PI/2,0,-h+(r.side>0?-.6:Math.PI+.6))}}castFrostOrbit(){const e=this.classIndex,i=4+e;this.frostDmg=this.hitDamage()*(1+e*.1)*.42;const n=this.frostShards.filter(o=>o.live);for(const o of n)o.ttl=4;n.length<i&&this.addFrostShard(n.length),this.frostShards.filter(o=>o.live).forEach((o,h,l)=>o.target=h/l.length);const s=this.frostShards.filter(o=>o.live&&o.mode===0),r=this.swingFinisher?s.length:Math.min(s.length,1);for(let o=0;o<r;o++){const h=s[(this.frostNext+o)%s.length],l=this.nearestFoe(h.mesh.position.x,h.mesh.position.z,7.5);l&&(h.mode=1,h.foe=l,h.out=0,h.hitAt.delete(l),this.lite||this.burst(h.mesh.position.x,h.mesh.position.z,12577279,2))}this.frostNext+=r,this.swingFinisher&&(this.frostFling=.35,this.spawnFx("ring",this.px,.08,this.pz,12577279))}nearestFoe(e,i,n){let s=null,r=n;for(const o of this.enemies){const h=Math.hypot(o.mesh.position.x-e,o.mesh.position.z-i);h<r&&!o.burrowed&&(r=h,s=o)}return s}addFrostShard(e){let i=this.frostShards.find(s=>!s.live);if(!i){const s=new Jt,r=this.sharedGeo("frost-shard",()=>new ye(.22,0)),o=new w(r,this.mat(new st({color:2363436,fog:!1,side:Ze})));o.scale.setScalar(1.3);const h=new w(r,this.mat(new st({color:12577279,fog:!1})));h.scale.set(1,1.6,1),o.scale.set(1.3,2,1.3),s.add(o,h),this.scene.add(s),i={mesh:s,slot:0,target:0,ttl:0,hitAt:new Map,live:!1,mode:0,foe:null,out:0},this.frostShards.push(i)}i.mesh.parent||this.scene.add(i.mesh),i.live=!0,i.ttl=4;const n=this.frostShards.filter(s=>s.live&&s!==i).pop();i.slot=n?n.slot:e,i.target=i.slot,i.hitAt.clear(),i.mode=0,i.foe=null,i.mesh.visible=!0}stepFrost(e){this.frostFling=Math.max(0,this.frostFling-e);const i=this.frostShards.some(l=>l.live);i&&!this.frostTrail&&(this.frostTrail=new w(this.sharedGeo("frost-trail",()=>new Fe(.93,1,48)),this.mat(new st({color:12577279,transparent:!0,opacity:.3,depthWrite:!1,fog:!1,side:Qt}))),this.frostTrail.rotation.x=-Math.PI/2),this.frostTrail&&(this.frostTrail.parent||this.scene.add(this.frostTrail),this.frostTrail.visible=i,i&&(this.frostTrail.position.set(this.px,this.py+.06,this.pz),this.frostTrail.scale.setScalar(Math.max(.1,this.frostR))));const n=this.classIndex,s=Ot.pierceReach*this.bonusPierce(),r=1.55+n*.12+s;this.frostR<=0&&(this.frostR=r),this.frostR+=(r*(this.frostFling>0?1.6:1)-this.frostR)*Math.min(1,e*12);const o=this.frostR,h=this.clock*3.2;for(const l of this.frostShards){if(!l.live)continue;if(l.ttl-=e,l.ttl<=0){l.live=!1,l.mesh.visible=!1;continue}let c=l.target-l.slot;c-=Math.round(c),l.slot+=c*Math.min(1,e*8);const f=h+l.slot*Math.PI*2,u=this.px+Math.cos(f)*o,d=this.pz+Math.sin(f)*o,g=.85+Math.sin(this.clock*6+l.slot*9)*.08;if(l.mode===0)l.mesh.position.set(u,g,d);else{l.out+=e;const p=l.foe;l.mode===1&&(!p||!this.enemies.includes(p)||l.out>.7)&&(l.mode=2);const M=l.mode===1&&p?p.mesh.position.x:u,_=l.mode===1&&p?p.mesh.position.z:d,v=M-l.mesh.position.x,b=_-l.mesh.position.z,T=Math.hypot(v,b),R=(l.mode===1?15:12)*e;if(l.mode===2&&T<=Math.max(R,.2))l.mode=0,l.foe=null,l.mesh.position.set(u,g,d);else{const S=Math.min(1,R/(T||1));l.mesh.position.set(l.mesh.position.x+v*S,g,l.mesh.position.z+b*S)}Math.random()<e*(this.lite?12:30)&&this.burst(l.mesh.position.x,l.mesh.position.z,12577279,1)}const x=l.mesh.position.x,m=l.mesh.position.z;l.mesh.rotation.y+=e*(l.mode?14:5),!this.lite&&Math.random()<e*14&&this.burst(x,m,12577279,1);for(const p of this.enemies){if(p.burrowed||Math.hypot(p.mesh.position.x-x,p.mesh.position.z-m)>.45+p.r||this.clock<(l.hitAt.get(p)??-1))continue;l.hitAt.set(p,this.clock+.35),p.slow=Math.max(p.slow,1.2);const M=l.mode===1&&p===l.foe;if(this.damageOne(p,x,m,this.frostDmg*(M?Ot.frostStrike:1)*(this.frostFling>0?1.3:1)),nr(),M&&(l.mode=2,this.spawnFx("flash",x,.85,m,15268095),this.burst(x,m,12577279,this.lite?3:6)),p.frostbite=(p.frostbite??0)+1,p.frostbite>=4&&this.enemies.includes(p)){p.frostbite=0,p.frozen=1.2;const _=p.mesh.position.x,v=p.mesh.position.z;this.spawnFx("shock",_,.08,v,12577279),this.spawnFx("flash",_,1,v,15268095),this.burst(_,v,12577279,10),this.damageAround(_,v,1.4,this.frostDmg*1.3)}}}}clearGlaives(){this.frostR=0;for(const e of this.sickles)e.live=!1,e.group.visible=!1;for(const e of this.frostShards)e.live=!1,e.mesh.visible=!1;for(const e of this.glaives)e.live=!1,e.mesh.visible=!1}swingReaper(e,i){const n=this.classIndex,s=this.rageLeft>0,r=Rt[1],o=3+n,h=this.swingFinisher,l=this.hitDamage()*(1+n*.12)*(h?1.15:.93+i*.07),c=l/(o+.6),f=i%2===0?-1:1,u=(h?1.7:1.18+i*.14)*(1+n*.07),d=this.wr("scythe_wide")?1.25:1,g=1.5*u*(s?1.15:1)*d,x=((h?1.75:1.3+i*.12)+n*.15+(s?.35:0)+Ot.pierceReach*this.bonusPierce())*d,m=.45*(h?1.35:1),p=.18,M=o>1?p/(o-1):0,_=.25,v=(m*2+_)/p,b=(g+x*.4)/1.25;this.spawnShow("sweep",this.px,this.pz,ee.reaper,e-f*(m+_),b,f*v),this.queueBeat(.03,()=>this.spawnShow("sweep",this.px,this.pz,9067712,e-f*(m+_),b*.8,f*v,0,.8));for(let T=0;T<o;T++){const R=o>1?T/(o-1):0,S=T===o-1,A=e+f*(-m+R*m*2);this.queueBeat(T*M,()=>{const L=this.px+Math.cos(A)*g,F=this.pz+Math.sin(A)*g;this.damageAround(L,F,x,c*(S?1.6:1),k=>this.markEnemy(k,S)),this.burst(L,F,ee.reaper,S?9:4),this.trauma=Math.min(1,this.trauma+(S?.12:.05)),this.camPunch=Math.min(1,this.camPunch+(S?.12:.04)),S&&(this.spawnFx("streak",L,.95,F,ee.reaper,A+Math.PI/2),this.burst(L,F,r,8),this.spawnFx("ring",L,.08,F,r),h&&this.spawnShow("rune",this.px,this.pz,ee.reaper,e,1.35),h&&this.wr("scythe_moon")&&this.spawnBullet(this.px+Math.cos(e)*.7,this.pz+Math.sin(e)*.7,e,!0,{kind:"wave",dmg:l*.8,pierce:6,ttl:.9,speed:13,y:this.py+.9}),n>=2&&h&&this.spawnShow("dome",L,F,r,0,.55,0),this.bloomKick=Math.min(1.2,this.bloomKick+.3+n*.05))})}}castDarkImpale(e,i){const n=this.classIndex,s=ee.reaper,r=this.swingFinisher,o=this.maxHp>0?this.hp/this.maxHp:1,h=1+Math.max(0,.5-o)*1.2,l=this.hitDamage()*(1.4+n*.2)*(r?1.35:.9+i*.12)*h,c=this.wr("bite_moon"),f=3+n*.25+(r?.5:i*.1)+(c?1.2:0)+Ot.pierceReach*this.bonusPierce(),u=(c?8:5)+this.bonusPierce(),d=new Map,g=[];let x=0;this.damageAround(this.px,this.pz,f,l,M=>{x+=Math.max(0,(d.get(M)??0)-Math.max(0,M.hp)),g.push(M),this.markEnemy(M,!0)},M=>(d.set(M,Math.max(0,M.hp)),1));const m=(r?4:3)+Math.floor(n/2);for(const M of g.slice(0,u)){const _=M.mesh.position.x,v=M.mesh.position.z,b=Math.random()<.5?-1:1,T=.7+M.r*.9;this.spawnFx("flash",_,1,v,16730730),this.burst(_,v,12593230,r?7:4);for(let R=0;R<m;R++)this.queueBeat(R*.035,()=>{this.spawnShow("bat",_,v,s,R/m*Math.PI*2+Math.random()*.4,.95+n*.05,b*(7+Math.random()*2.5),T,1,M)});this.burst(_,v,s,r?6:3),h>1.15&&this.spawnFx("flash",_,1.05,v,16734826),r&&this.burst(_,v,Rt[1],4)}if(!g.length)return;const p=g.slice(0,u);if(n>=1&&this.queueBeat(.35,()=>{for(const M of p)this.enemies.includes(M)&&(this.spawnFx("flash",M.mesh.position.x,1,M.mesh.position.z,16730730),this.damageOne(M,M.mesh.position.x,M.mesh.position.z,l*.35,void 0,!0))}),n>=2){const M=new Set(g);for(const _ of p){let v=null,b=2.8;for(const R of this.enemies){if(M.has(R))continue;const S=Math.hypot(R.mesh.position.x-_.mesh.position.x,R.mesh.position.z-_.mesh.position.z);S<b&&(b=S,v=R)}if(!v)continue;const T=v;M.add(T),this.queueBeat(.25,()=>{if(this.enemies.includes(T)){for(let R=0;R<2;R++)this.spawnShow("bat",T.mesh.position.x,T.mesh.position.z,s,R*Math.PI,.9,8,.7+T.r*.9,1,T);this.spawnFx("flash",T.mesh.position.x,1,T.mesh.position.z,16730730),this.damageOne(T,T.mesh.position.x,T.mesh.position.z,l*.5)}})}}if(n>=3)for(let M=1;M<=3;M++)this.queueBeat(.4*M+.2,()=>{for(const _ of p)this.enemies.includes(_)&&(this.burst(_.mesh.position.x,_.mesh.position.z,12593230,2),this.damageOne(_,_.mesh.position.x,_.mesh.position.z,l*.1,void 0,!0))});if(this.trauma=Math.min(1,this.trauma+(r?.11:.05)),this.camPunch=Math.min(1,this.camPunch+(r?.13:.05)),x>0){const M=o<.5,_=this.wr("bite_gorge"),v=(r?.016:.008)*(M?1.5:1)*(n>=3?2:1)*(_?1.5:1),b=this.overshield?this.maxHp*1.2:this.maxHp,T=Math.min(x*(_?.2:.12),this.maxHp*v,b-this.hp);T>0&&(this.hp+=T,this.spawnFx("ring",this.px,.08,this.pz,s))}r&&(this.bloomKick=Math.min(1.2,this.bloomKick+.22+n*.03))}castWanderer(e,i){if(this.skin==="arrowbolt"){this.castKnifeCombo(e,i);return}const n=this.classIndex,s=ee.wanderer,r=Rt[1],o=this.px+Math.cos(e)*.5,h=this.pz+Math.sin(e)*.5,l=this.job.pellets+this.extraPellets+1+n,c=this.hitDamage()*(1+Ot.tierDamage*n)*1.8/l;this.spawnFx("ring",this.px,.08,this.pz,s);for(let f=0;f<l;f++)this.queueBeat(f*.05,()=>{this.spawnBullet(this.px+Math.cos(e)*.55,this.pz+Math.sin(e)*.55,e,!0,{kind:"bolt",dmg:c})});i===2&&this.wr("dagger_fan")&&this.queueBeat(l*.05+.04,()=>{for(let f=0;f<5;f++){const u=e+(f-2)*.24;this.spawnBullet(this.px+Math.cos(u)*.55,this.pz+Math.sin(u)*.55,u,!0,{kind:"bolt",dmg:c*.6})}}),this.burst(o,h,s,3+i+n),this.spawnFx("streak",this.px+Math.cos(e)*.4,this.py+.9,this.pz+Math.sin(e)*.4,s,e),n>=1&&this.spawnFx("streak",this.px+Math.cos(e)*.65,this.py+.9,this.pz+Math.sin(e)*.65,r,e),this.trauma=Math.min(1,this.trauma+.03+n*.01),i===2&&(this.burst(o,h,r,6+n*2),this.bloomKick=Math.min(1.2,this.bloomKick+.2+n*.04),this.camPunch=Math.min(1,this.camPunch+.12+n*.03),n>=2&&this.spawnShow("rune",this.px,this.pz,r,e,.5))}castKnifeCombo(e,i){const n=this.classIndex,s=ee.wanderer,r=this.swingFinisher,o=this.wr("spin_long")?1.35:1,h=((r?3.4:2.6)+n*.25)*o,l=this.enemyOnLine(e,(6+n*.3)*o,.5),c=l?Math.min(7.5*o,l.d+l.e.r+1.3*o):h,f=this.startLunge(e,c,!0);this.lungeFinisher=r,this.lungeDmg=this.hitDamage()*(1.15+i*.1+n*.1)*(r?1.45:1),this.iFrames=Math.max(this.iFrames,f+.15),this.fireCd=Math.max(this.fireCd,(r?.54:.42)/this.fireMul),this.chargeFromX=this.px,this.chargeFromZ=this.pz,this.spawnShow("clone",this.px,this.pz,s,e,.9),this.spawnFx("arc",this.px,.9,this.pz,s,e,c),this.trauma=Math.min(1,this.trauma+(r?.08:.04))}enemyOnLine(e,i,n){let s=null;for(const r of this.enemies){if(!r.mesh.visible)continue;const o=r.mesh.position.x-this.px,h=r.mesh.position.z-this.pz,l=Math.hypot(o,h);if(l>i||s&&l>=s.d)continue;let c=Math.atan2(h,o)-e;c=((c+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,!(Math.abs(c)>n)&&(s={e:r,d:l})}return s}startLunge(e,i,n){const s=Math.max(.14,Math.min(.34,i/16));return this.lungeX=Math.cos(e),this.lungeZ=Math.sin(e),this.lungeSpd=i/s,this.lungeLeft=s,this.lungeHit=new Set,this.lungeBurst=n,this.lungeFromX=this.px,this.lungeFromZ=this.pz,this.dashLeft=0,this.chargeFromX=this.px,this.chargeFromZ=this.pz,s}stepLunge(){const e=1.5+this.classIndex*.15+(this.lungeFinisher?.3:0)+(this.wr("spin_long")?.4:0)+Ot.pierceReach*this.bonusPierce();for(const i of[...this.enemies]){if(this.lungeHit.has(i))continue;const n=i.mesh.position.x,s=i.mesh.position.z;Math.hypot(n-this.px,s-this.pz)>e+i.r||(this.cutEnemy(i,this.lungeDmg,this.lungeFinisher),this.camPunch=Math.min(1,this.camPunch+(this.lungeFinisher?.1:.04)))}}endLunge(){if(!this.lungeBurst)return;const e=ee.wanderer,i=this.lungeFinisher,n=1.8+this.classIndex*.2+(i?.5:0),s=this.lungeDmg*(i?.9:.6);for(const o of[...this.enemies])Math.hypot(o.mesh.position.x-this.px,o.mesh.position.z-this.pz)>n+o.r||(this.lungeHit.delete(o),this.cutEnemy(o,s,i));this.spawnFx("ring",this.px,.08,this.pz,e),this.spawnFx("shock",this.px,.08,this.pz,i?16773296:e),this.burst(this.px,this.pz,e,i?8:5),this.trauma=Math.min(1,this.trauma+(i?.14:.07)),this.camPunch=Math.min(1,this.camPunch+(i?.12:.05)),i&&(this.bloomKick=Math.min(1.2,this.bloomKick+.25));const r=this.classIndex;if(r>=2&&this.nova(this.px,this.pz,6+(i?2:0),"bolt"),r>=3&&i){const o=this.lungeFromX,h=this.lungeFromZ,l=this.px,c=this.pz,f=this.lungeDmg*.5;this.queueBeat(.25,()=>{const u=Math.hypot(l-o,c-h)||.01,d=(l-o)/u,g=(c-h)/u,x=Math.atan2(g,d);this.spawnShow("clone",o,h,Rt[2],x,.95),this.spawnFx("arc",o,.9,h,Rt[2],x,u),this.spawnFx("arc",o,.92,h,16777215,x,u*.7);for(const m of[...this.enemies]){const p=m.mesh.position.x-o,M=m.mesh.position.z-h,_=p*d+M*g,v=Math.abs(-p*g+M*d);_<-.5||_>u+.5||v>1.5+m.r||(this.spawnShow("cut",m.mesh.position.x,m.mesh.position.z,Rt[2],-.75,.9+m.r*.6,0,0,1,m),this.damageOne(m,o,h,f))}})}}cutEnemy(e,i,n){if(this.lungeHit.has(e))return;this.lungeHit.add(e);const s=ee.wanderer,r=e.mesh.position.x,o=e.mesh.position.z,h=.9+e.r*.6,l=(Math.random()-.5)*.3;this.spawnShow("cut",r,o,s,.75+l,h,0,0,1,e),this.queueBeat(.05,()=>this.spawnShow("cut",r,o,s,-.75+l,h,0,0,1,e)),n&&this.queueBeat(.1,()=>{this.spawnShow("cut",r,o,16773296,.08,h*1.35,0,0,1,e),this.spawnFx("flash",r,1,o,16773296)}),this.burst(r,o,s,n?7:4),this.damageOne(e,this.px,this.pz,i),this.lungeBurst&&this.runJob==="wanderer"&&this.classIndex>=1&&this.queueBeat(.18,()=>{this.enemies.includes(e)&&(this.spawnShow("cut",e.mesh.position.x,e.mesh.position.z,Rt[2],.1,h*1.1,0,0,.8,e),this.damageOne(e,e.mesh.position.x,e.mesh.position.z,i*.4))})}castArcanist(e,i){const n=this.classIndex,s=ee.arcanist,r=Rt[1],o=this.hitDamage()*(1+Ot.tierDamage*n)*(i===2?1.35:1+i*.12),h=this.px+Math.cos(e)*.55,l=this.pz+Math.sin(e)*.55;this.spawnShow("rune",this.px,this.pz,s,e,.4+n*.12),this.burst(h,l,s,4+i*2);const c=1+n+(i===2?1:0)+(this.wr("core_fork")?2:0)+this.bonusPierce();this.launchChainBolt(e,o,c,9.4+n*.6),this.trauma=Math.min(1,this.trauma+.04),i===2&&(this.burst(h,l,r,6),this.bloomKick=Math.min(1.2,this.bloomKick+.22),this.camPunch=Math.min(1,this.camPunch+.14))}castCurseBolt(e,i){const n=this.classIndex,s=ee.arcanist,r=this.swingFinisher,o=this.hitDamage()*(1+Ot.tierDamage*n)*(.95+i*.06)*(r?1.15:1),h=this.wr("prism_growth"),l=3+n+(r?2:0)+(h?2:0)+this.bonusPierce();this.rootLine(this.px,this.pz,e,6.5,o,new Set,r?1.25:1.05,(c,f,u)=>{if(!c){this.plantThorn(f,u);return}const d=new Set([c]),g=.9+l*.06;for(let x=0;x<l;x++){const m=e+(l>1?(x/(l-1)-.5)*g:0);this.rootLine(f,u,m,h?4.6:3.4,o*.45,d,.7,(p,M,_)=>this.plantThorn(M,_))}}),this.spawnShow("rune",this.px,this.pz,s,e,.35+n*.08,-6),this.burst(this.px+Math.cos(e)*.6,this.pz+Math.sin(e)*.6,8018496,r?6:3),this.trauma=Math.min(1,this.trauma+(r?.06:.03))}rootLine(e,i,n,s,r,o,h,l){const c=Math.cos(n),f=Math.sin(n),u=.6,d=Math.max(1,Math.floor(s/u));let g=!1;for(let x=1;x<=d;x++){const m=e+c*u*x,p=i+f*u*x,M=x===d;this.queueBeat(x*.025,()=>{if(g)return;if(this.blocked(m,p,.15)){g=!0,l(null,m-c*u,p-f*u);return}this.spawnShow("root",m,p,0,n+(Math.random()-.5)*1.2,h*(.85+Math.random()*.3),0,(Math.random()-.5)*.35),(x%2===0||M)&&this.burst(m,p,8018496,2);let _=null,v=1e9;for(const b of this.enemies){if(o.has(b)||!b.mesh.visible)continue;const T=Math.hypot(b.mesh.position.x-m,b.mesh.position.z-p);T<.65+b.r&&T<v&&(v=T,_=b)}if(_){g=!0;const b=_.mesh.position.x,T=_.mesh.position.z;this.spawnShow("root",b,T,0,n,h*1.35,0,0),this.spawnFx("shock",b,.08,T,ee.arcanist),this.damageOne(_,m-c,p-f,r),l(_,b,T);return}M&&(g=!0,l(null,m,p))})}}plantThorn(e,i){if(this.blocked(e,i,.2)){const r=Ui(e,i,.2,this.walls);e=r.x,i=r.z}const n=8+this.classIndex*3+(this.wr("prism_crown")?6:0);for(;this.thorns.length>=n;){const r=this.thorns.shift();r&&this.retireThorn(r.mesh)}const s=this.thornPool.pop()??this.makeThornMesh();s.rotation.y=Math.random()*Math.PI*2,s.position.set(e,0,i),s.scale.setScalar(.01),this.scene.add(s),this.thorns.push({mesh:s,x:e,z:i,ttl:6,age:0,tick:.5})}makeThornMesh(){this.thornMats??(this.thornMats=[this.mat(new st({color:Rt[2],fog:!1})),this.mat(new st({color:Rt[0],fog:!1})),this.mat(new st({color:Rt[1],fog:!1})),this.mat(new st({color:ee.arcanist,transparent:!0,opacity:.85,depthWrite:!1,fog:!1,side:Qt}))]);const e=new Jt,i=this.sharedGeo("thorn-spike",()=>new Vt(.1,.62,5));for(let s=0;s<3;s++){const r=s/3*Math.PI*2+.4,o=new w(i,this.thornMats[s]);o.position.set(Math.cos(r)*.12,.26,Math.sin(r)*.12),o.rotation.set(Math.sin(r)*.45,0,-Math.cos(r)*.45),o.scale.set(1,.8+s*.25,1),e.add(o)}const n=new w(this.sharedGeo("thorn-ring",()=>new Fe(.3,.44,18)),this.thornMats[3]);return n.rotation.x=-Math.PI/2,n.position.y=.03,e.add(n),e}retireThorn(e){this.scene.remove(e),this.thornPool.push(e)}stepThorns(e){const i=this.job?this.hitDamage()*.2*(this.wr("prism_crown")?2:1):0;for(let n=this.thorns.length-1;n>=0;n--){const s=this.thorns[n];s.ttl-=e,s.age+=e,s.tick-=e;const r=Math.min(1,s.age/.15),o=Math.min(1,s.ttl);if(s.mesh.scale.setScalar(Math.max(.01,r*o)),s.tick<=0){s.tick=.5;for(const h of[...this.enemies])Math.hypot(h.mesh.position.x-s.x,h.mesh.position.z-s.z)<.55+h.r&&this.damageOne(h,s.x,s.z,i,void 0,!0)}s.ttl<=0&&(this.retireThorn(s.mesh),this.thorns.splice(n,1))}}clearThorns(){for(const e of this.thorns)this.retireThorn(e.mesh);this.thorns=[]}castHunter(e,i){const n=this.classIndex,s=ee.hunter,r=Rt[1],o=this.swingFinisher,h=this.px+Math.cos(e)*.5,l=this.pz+Math.sin(e)*.5,c=this.job.pellets+this.extraPellets+n,f=this.hitDamage()*(1+Ot.tierDamage*n)*1.6/c,u=this.wr("arrow_focus"),d=u?{kind:"shard",pierce:this.job.pierce+this.extraPierce+1,speed:this.job.bulletSpeed/mi*1.25}:{kind:"shard"},g=u?.55:1,x=(m,p)=>this.spawnBullet(this.px+Math.cos(m)*.55,this.pz+Math.sin(m)*.55,m,!0,{...d,dmg:p});if(!o&&i===0){const m=this.job.spread*.35*g;for(let p=0;p<c;p++){const M=e+(p-(c-1)/2)*m;this.queueBeat(p*.025,()=>x(M,f))}this.spawnFx("streak",h,.9,l,s,e),this.burst(h,l,s,3+n)}else if(o){this.spawnFx("flash",this.px,1.8,this.pz,r),this.spawnShow("pillar",this.px,this.pz,s,0,.35),this.burst(this.px,this.pz,r,6+n*2);let m=this.px+Math.cos(e)*4.5,p=this.pz+Math.sin(e)*4.5,M=8;for(const R of this.enemies){if(R.burrowed)continue;const S=R.mesh.position.x-this.px,A=R.mesh.position.z-this.pz,L=Math.hypot(S,A);let F=Math.atan2(A,S)-e;F=((F+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,L<M&&Math.abs(F)<.5&&(M=L,m=R.mesh.position.x,p=R.mesh.position.z)}const _=this.wr("arrow_rain"),v=(1.5+n*.12)*(_?1.3:1),b=_?5:3,T=this.hitDamage()*(1+Ot.tierDamage*n)*1.6*Ot.skyfall/3;this.spawnShow("warn",m,p,s,0,v);for(let R=0;R<b;R++)this.queueBeat(.3+R*.12,()=>{for(let S=0;S<(this.lite?3:5);S++){const A=Math.random()*Math.PI*2,L=Math.sqrt(Math.random())*v*.85;this.spawnShow("drop",m+Math.cos(A)*L,p+Math.sin(A)*L,S%2?r:s,e,.55)}this.queueBeat(.1,()=>{this.spawnFx("ring",m,.08,p,r),this.burst(m,p,s,4),this.damageAround(m,p,v,T)})});this.bloomKick=Math.min(1.2,this.bloomKick+.18+n*.04),this.camPunch=Math.min(1,this.camPunch+.1+n*.03)}else{const m=i%2===0?1:-1,p=c+1,M=this.job.spread*1.35*g;for(let _=0;_<p;_++){const v=m>0?_:p-1-_,b=e+(v-(p-1)/2)*M;this.queueBeat(_*.02,()=>x(b,f*c/p))}for(const _ of[-1,0,1])this.spawnFx("streak",h,.9,l,r,e+_*M);this.burst(h,l,s,5+n)}this.trauma=Math.min(1,this.trauma+.025+n*.006)}castSnipeShot(e,i){const n=this.classIndex,s=ee.hunter,r=Rt[1],o=this.swingFinisher,h=o?Ot.railshot:1+i*.22,l=this.job.pierce+this.extraPierce+(o?4:i),c=this.hitDamage()*(1+Ot.tierDamage*n)*h,f=this.px+Math.cos(e)*.5,u=this.pz+Math.sin(e)*.5;o?(this.spawnFx("flash",f,.9,u,r),this.burst(f,u,r,4),this.queueBeat(.14,()=>{const x=this.aimX||this.aimZ?Math.atan2(this.aimZ,this.aimX):e,m=Math.cos(x),p=Math.sin(x),M=this.px+m*.5,_=this.pz+p*.5;let v=0;for(;v<11&&!this.blocked(M+m*(v+.4),_+p*(v+.4),.15,0);)v+=.4;this.spawnFx("arc",M,.9,_,16777215,x,v),this.spawnFx("arc",M,.88,_,s,x,v),this.spawnFx("flash",M,.9,_,16777215),this.spawnFx("flash",M+m*v,.9,_+p*v,s);for(const R of[...this.enemies]){if(R.burrowed)continue;const S=R.mesh.position.x-M,A=R.mesh.position.z-_,L=S*m+A*p,F=Math.abs(-S*p+A*m);L<0||L>v||F>.45+R.r||(this.damageOne(R,R.mesh.position.x,R.mesh.position.z,c),this.burst(R.mesh.position.x,R.mesh.position.z,s,4),R.slow=Math.max(R.slow,.6))}const b=this.px-m*.4,T=this.pz-p*.4;this.blocked(b,T,.42,this.py)||(this.px=b,this.pz=T),this.burst(this.px,this.pz,14207176,4),hs(),this.trauma=Math.min(1,this.trauma+.12),this.camPunch=Math.min(1,this.camPunch+.18),this.bloomKick=Math.min(1.2,this.bloomKick+.25)})):(this.spawnBullet(f,u,e,!0,{kind:"shard",dmg:c,pierce:l,speed:this.job.bulletSpeed/mi*(1.1+i*.1)}),this.spawnFx("arc",f,.9,u,s,e,2.2+i*1.4),this.spawnFx("streak",f,this.py+.9,u,r,e),this.burst(f,u,s,3+i),this.trauma=Math.min(1,this.trauma+.025+i*.015));const d=this.wr("fang_twin");if(n===0&&!d)return;const g=(o?c/Ot.railshot:c)*(n>=2||d?.85:.55);this.queueBeat(o?.22:.08,()=>{const x=e+(i%2===0?-1:1)*.12;this.spawnBullet(this.px+Math.cos(x)*.55,this.pz+Math.sin(x)*.55,x,!0,{kind:"shard",dmg:g,pierce:n>=2||d?l+2:0,speed:this.job.bulletSpeed/mi*1.2}),this.spawnFx("streak",this.px,this.py+.9,this.pz,r,x)})}castKnight(e,i){const n=this.classIndex,s=ee.knight,r=Rt[1],o=this.swingFinisher,h=1+n+this.extraPellets,l=this.job.spread+(o?.17:.1),c=this.hitDamage()*(1+Ot.tierDamage*n)*(o?1.3:.95+i*.08)*1.6/h,f=this.px+Math.cos(e)*.6,u=this.pz+Math.sin(e)*.6,d=this.wr("soul_far"),g=x=>{for(let m=0;m<h;m++){const p=e+(m-(h-1)/2)*l;this.spawnBullet(this.px+Math.cos(p)*.62,this.pz+Math.sin(p)*.62,p,!0,{kind:"wave",dmg:c*x,pierce:this.job.pierce+this.extraPierce+(d?2:0),ttl:(.8+n*.08)*(d?1.4:1),speed:this.job.bulletSpeed/mi,y:this.py+.9})}};g(1),this.wr("soul_twin")&&this.queueBeat(.14,()=>g(.45)),this.burst(f,u,s,3+i+n),this.spawnFx("streak",f,.95,u,s,e+Math.PI/2),this.trauma=Math.min(1,this.trauma+(o?.09:.04)),o&&(this.spawnShow("rune",this.px,this.pz,s,e,.7+n*.2),this.burst(f,u,r,7+n*2),this.bloomKick=Math.min(1.2,this.bloomKick+.18),this.camPunch=Math.min(1,this.camPunch+.12+n*.03))}castDawnRush(e,i){const n=this.classIndex,s=ee.knight,r=Rt[1],o=this.swingFinisher,h=this.hitDamage()*(o?1.5:1+i*.15),l=2.4+n*.2+(o?.4:0)+(this.wr("dawn_reach")?.8:0)+Ot.pierceReach*this.bonusPierce(),c=this.wr("dawn_consecrate"),f=this.px+Math.cos(e)*l*.5,u=this.pz+Math.sin(e)*l*.5,d=[];this.damageAround(this.px,this.pz,l,h,g=>{d.push(g),this.spawnShow("sworddrop",g.mesh.position.x,g.mesh.position.z,s,e,(o?1.35:1)+n*.08,0,.22,1,g)});for(const g of d)if(n>=1&&this.queueBeat(.22,()=>{this.enemies.includes(g)&&(this.spawnShow("sworddrop",g.mesh.position.x,g.mesh.position.z,r,e+.4,.85+n*.06,0,.22,1,g),this.damageOne(g,g.mesh.position.x,g.mesh.position.z,h*.45))}),n>=2||c){const x=g.mesh.position.x,m=g.mesh.position.z;this.queueBeat(.5,()=>this.fireFields.push({x,z:m,r:.95,ttl:c?3:1.6,tick:.1,dmg:h*.15,col:16761466}))}if(n>=3&&o){const g=this.enemies.filter(x=>!d.includes(x)).map(x=>({e:x,d:Math.hypot(x.mesh.position.x-this.px,x.mesh.position.z-this.pz)})).filter(x=>x.d<6.5).sort((x,m)=>x.d-m.d).slice(0,3);for(const{e:x}of g)this.spawnShow("sworddrop",x.mesh.position.x,x.mesh.position.z,s,e,1.2,0,.22,1,x),this.queueBeat(.35,()=>{this.enemies.includes(x)&&this.damageOne(x,x.mesh.position.x,x.mesh.position.z,h*.8)})}this.spawnShow("rune",this.px,this.pz,s,e,.7+n*.15,o?10:0),this.burst(f,u,s,o?8:4),this.spawnFx("ring",f,.08,u,s),this.trauma=Math.min(1,this.trauma+(o?.1:.04)),this.camPunch=Math.min(1,this.camPunch+(o?.14:.05)),o&&(this.burst(this.px,this.pz,r,8),this.bloomKick=Math.min(1.2,this.bloomKick+.22))}}const qc=16762024;class Vv extends Gv{constructor(){super(...arguments);D(this,"capeArcs",[])}castSoulWave(e,i,n){const s=ee.knight,r=Rt[1];this.iFrames=Math.max(this.iFrames,.35+n*.16);const o=n>=1?3:1,h=2+n;this.castSpinAoE({col:s,trail:r,ticks:h,dmgTotal:i*(1.3+n*.4),maxRadius:1.7+n*.4,onTick:l=>{const c=this.heading+l/h*Math.PI*2;for(let f=0;f<o;f++){const u=c+(f-(o-1)/2)*.32;this.spawnBullet(this.px+Math.cos(u)*.7,this.pz+Math.sin(u)*.7,u,!0,{kind:"wave",dmg:i*.65,pierce:99,ttl:.9+n*.08,speed:9.6,y:this.py+.92})}}}),!(n<2)&&(this.queueBeat(this.skillSpinMax+.05,()=>{this.castSpinAoE({col:r,trail:s,ticks:3,dmgTotal:i*1.6,maxRadius:2.2,duration:.35})}),!(n<3)&&this.queueBeat(this.skillSpinMax+.05+.35+.05,()=>{this.spawnShow("pillar",this.px,this.pz,r,0,1.6),this.castSpinAoE({col:s,trail:r,ticks:3,dmgTotal:i*(2+this.job.radianceDmg),maxRadius:2.6+this.job.radianceRadius,duration:.35})}))}castRadiantRush(e,i,n){const s=ee.knight,r=Rt[1];this.iFrames=Math.max(this.iFrames,.4+n*.08);const o=3+n,h=new Set;this.castSpinAoE({col:s,trail:r,ticks:o,dmgTotal:i*(2.6+n*.9),maxRadius:1.8+n*.45,onHit:l=>{h.has(l)||(h.add(l),this.spawnShow(this.skin==="warhammer"?"meteor":"sworddrop",l.mesh.position.x,l.mesh.position.z,s,e,1.1+n*.15,0,.22,1,l))},onEnd:()=>{this.nova(this.px,this.pz,8,"wave"),n>=1&&this.fireFields.push({x:this.px,z:this.pz,r:1.6+n*.3,dmg:i*.4,ttl:1.4,tick:.3})}}),!(n<2)&&(this.queueBeat(this.skillSpinMax+.1,()=>{this.damageAround(this.px,this.pz,2.6,i*1.3),this.spawnShow("dome",this.px,this.pz,s,0,.55),this.burst(this.px,this.pz,s,14),this.camPunch=Math.min(1,this.camPunch+.3)}),!(n<3)&&this.queueBeat(this.skillSpinMax+.1+.5,()=>{this.damageAround(this.px,this.pz,3.2+this.job.radianceRadius,i*(1.6+this.job.radianceDmg)),this.spawnShow("dome",this.px,this.pz,r,0,.8),this.nova(this.px,this.pz,10,"wave"),this.burst(this.px,this.pz,r,18),this.camPunch=Math.min(1,this.camPunch+.35),this.trauma=Math.min(1,this.trauma+.2)}))}spawnAlly(e,i,n,s,r,o,h,l){const c=new Jt,f=this.mat(new st({color:16774368,transparent:!0,opacity:.9,fog:!1}));if(l==="shadow"){const u=new Jt;$u(u,"wanderer",this.kit,this.skin);const d=new Bt(1182234).lerp(new Bt(h),.25),g=this.mat(new st({color:d,transparent:!0,opacity:.65,fog:!1,depthWrite:!1}));u.traverse(x=>{x instanceof _s?x.intensity=0:x instanceof w&&(x.material=g)}),u.scale.setScalar(.88),c.add(u)}else if(l==="turret"){const u=new w(this.sharedGeo("ally-turret-base",()=>new Ut(.26,.34,.28,10)),this.mat(new st({color:h,fog:!1})));u.position.y=.14,c.add(u);const d=new w(this.sharedGeo("ally-turret-core",()=>new ye(.17,0)),f);d.position.y=.42,c.add(d)}else{const u=this.mat(new st({color:2168112,transparent:!0,opacity:.94,fog:!1})),d=new w(this.sharedGeo("ally-wraith-robe",()=>new Vt(.22,.85,10)),u);d.position.y=.68,c.add(d);const g=new w(this.sharedGeo("ally-wraith-cloak",()=>new Vt(.32,.3,10)),u);g.position.y=.9,c.add(g);const x=this.mat(new st({color:h,transparent:!0,opacity:.95,fog:!1}));for(const p of[-1,1]){const M=new w(this.sharedGeo("ally-wraith-eye",()=>new Mt(.045,6,6)),x);M.position.set(p*.07,.86,.17),c.add(M)}const m=new w(this.sharedGeo("ally-wraith-core",()=>new ye(.1,0)),f);m.position.y=1.18,c.add(m)}c.position.set(e,0,i),this.scene.add(c),this.allies.push({mesh:c,x:e,z:i,ttl:n,fireCd:.25,rate:r,dmg:s,range:o,col:h,kind:l}),this.spawnFx("flash",e,.9,i,h)}stepAllies(e){for(let i=this.allies.length-1;i>=0;i--){const n=this.allies[i];if(n.ttl-=e,n.fireCd-=e,n.kind==="shadow"){const s=this.px-this.aimX*1.15,r=this.pz-this.aimZ*1.15;n.x+=(s-n.x)*Math.min(1,e*5),n.z+=(r-n.z)*Math.min(1,e*5)}else if(n.kind==="wraith"){const s=this.nearestEnemy(n.x,n.z,n.range*1.8),r=s?s.mesh.position.x:this.px,o=s?s.mesh.position.z:this.pz,h=s?n.range*.55:2,l=Math.hypot(r-n.x,o-n.z);if(l>h){const c=Math.atan2(o-n.z,r-n.x),f=Math.min(l-h,e*(s?3.2:2.4));n.x+=Math.cos(c)*f,n.z+=Math.sin(c)*f,n.mesh.rotation.y=Math.PI/2-c}}if(n.mesh.position.set(n.x,Math.sin(this.clock*3+n.x*2)*.06,n.z),n.kind==="wraith"){const s=1+Math.sin(this.clock*3.5+n.x*3)*.12;n.mesh.scale.setScalar(s)}else n.mesh.rotation.y+=e*1.1;if(n.fireCd<=0){const s=this.nearestEnemy(n.x,n.z,n.range);if(s){n.fireCd=n.rate;const r=Math.atan2(s.mesh.position.z-n.z,s.mesh.position.x-n.x);this.spawnBullet(n.x,n.z,r,!0,{kind:"bolt",dmg:n.dmg,pierce:0,ttl:1.6,y:.85,speed:13}),this.spawnFx("streak",n.x,.85,n.z,n.col,r)}}n.ttl<=0&&(this.scene.remove(n.mesh),this.allies.splice(i,1))}}castActive(){if(!this.alive||this.skillCd>0)return;const e=jc(this.runJob,this.classIndex,this.skin);this.skillCd=Math.max(2,e.cd-this.job.yCdReduction),this.skillMax=this.skillCd,this.attackT=1,this.skillSpinMax=.5,this.skillSpinT=this.skillSpinMax,td(this.runJob);const i=this.classIndex;Zs(40+i*28,.3+i*.2);const n=this.worldAim(),s=Math.atan2(n.z,n.x),r=this.hitDamage();this.runJob==="wanderer"&&this.skin==="arrowbolt"?this.castAssaulter(s,r,i):this.runJob==="wanderer"?this.castLanternRift(s,n,r,i):this.runJob==="arcanist"&&this.skin==="prismshard"?this.castSoulHarvest(s,r,i):this.runJob==="arcanist"?this.castPrismFall(s,n,r,i):this.runJob==="reaper"&&this.skin==="twindaggers"?this.castBloodImpale(s,r,i):this.runJob==="reaper"?this.castHarvest(s,n,r,i):this.runJob==="knight"&&this.skin==="dawnedge"?this.castRadiantRush(s,r,i):this.runJob==="knight"?this.castSoulWave(s,r,i):this.runJob==="hunter"&&this.skin==="twinfang"?this.castPiercingSnipe(s,r,i):this.castShardStorm(s,n,r,i),this.pushHud(e.name)}castSpinAoE(e){const{col:i,trail:n,ticks:s,onHit:r,onTick:o,onEnd:h}=e,l=e.maxRadius*Ot.spinRadius,c=e.dmgTotal*Ot.spinDamage,f=e.duration??this.skillSpinMax;this.skillSpinMax=f,this.skillSpinT=f,this.spawnFx("flash",this.px,1.1,this.pz,i),this.bloomKick=Math.min(1.2,this.bloomKick+.25);const u=c/s;for(let d=0;d<s;d++){const g=(d+1)/s,x=d===s-1,m=l*(.7+g*.3);this.queueBeat(f*g*.92,()=>{const p=Math.atan2(this.aimZ,this.aimX),M=this.capeSweepTargets(m,p);this.spawnCapeArc(m,p,x?n:i,x),ed(x),x&&Yh("sweep");for(const _ of M)this.damageOne(_,this.px,this.pz,u,v=>r==null?void 0:r(v,d));if(this.burst(this.px+Math.cos(p)*m*.5,this.pz+Math.sin(p)*m*.5,i,x?10:5),this.trauma=Math.min(1,this.trauma+(x?.14:.06)),x&&c>0)for(const _ of M){if(_.bossId||_.burrowed||!this.enemies.includes(_))continue;const v=_.mesh.position.x-this.px,b=_.mesh.position.z-this.pz,T=Math.hypot(v,b);if(T<.01)continue;const R=Ot.spinKnockback*(1-T/(m+_.r)*.5),S=_.mesh.position.x+v/T*R,A=_.mesh.position.z+b/T*R;this.blocked(S,A,.4,0)||_.mesh.position.set(S,_.mesh.position.y,A)}o==null||o(d,m)})}this.camPunch=Math.min(1,this.camPunch+.4),this.hitstop=Math.max(this.hitstop,.05),h&&this.queueBeat(f,h)}capeSweepTargets(e,i){const n=[];for(const s of this.enemies){if(s.burrowed)continue;const r=s.mesh.position.x-this.px,o=s.mesh.position.z-this.pz,h=Math.hypot(r,o);if(!(h>e+s.r)){if(h>Ot.spinCloseReach+s.r){let l=Math.atan2(o,r)-i;if(l=((l+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,Math.abs(l)>Ot.spinArc/2+Math.atan2(s.r,Math.max(h,.01)))continue}n.push(s)}}return n}spawnCapeArc(e,i,n,s){let r=this.capeArcs.find(o=>o.t>=o.max);if(!r){const o=this.mat(new st({color:n,transparent:!0,opacity:.7,depthWrite:!1,fog:!1,side:Qt})),h=new w(this.sharedGeo("cape-arc",()=>new Fe(.18,1,36,1,-2.6/2,Ot.spinArc)),o);h.rotation.x=-Math.PI/2;const l=this.mat(new st({color:2363436,transparent:!0,opacity:.9,depthWrite:!1,fog:!1,side:Qt})),c=new w(this.sharedGeo("cape-arc-edge",()=>new Fe(.9,1.05,36,1,-2.6/2,Ot.spinArc)),l);c.rotation.x=-Math.PI/2,c.position.y=.005;const f=new Jt;f.add(h,c),f.renderOrder=3,this.scene.add(f),r={mesh:f,t:0,max:.26,r:1,mat:o,edge:l},this.capeArcs.push(r)}r.mat.color.setHex(n),r.mesh.parent||this.scene.add(r.mesh),r.t=0,r.max=s?.34:.24,r.r=e,r.mesh.visible=!0,r.mesh.position.set(this.px,this.py+.07,this.pz),r.mesh.scale.setScalar(e*.86),r.mesh.rotation.y=-i}stepCapeArcs(e){for(const i of this.capeArcs){if(i.t>=i.max)continue;i.t+=e;const n=Math.min(1,i.t/i.max);i.mesh.scale.setScalar(i.r*(.86+.14*n)),i.mat.opacity=.7*(1-n*n),i.edge.opacity=.9*(1-n*n),i.mesh.position.set(this.px,this.py+.07,this.pz),n>=1&&(i.mesh.visible=!1)}}castAssaulter(e,i,n){const s=ee.wanderer,r=Rt[1],o=()=>this.castSpinAoE({col:s,trail:r,ticks:2+n,dmgTotal:i*(2.6+n*.9),maxRadius:1.5+n*.3,onHit:f=>{this.isBackstab(f,e)&&(this.spawnFx("flash",f.mesh.position.x,1.05,f.mesh.position.z,16773296),this.burst(f.mesh.position.x,f.mesh.position.z,16773296,5))}}),h=this.enemyOnLine(e,5.5+n*1.2,.95);let l=0,c=null;if(h){c=h.e;const f=Math.atan2(h.e.mesh.position.z-this.pz,h.e.mesh.position.x-this.px);this.spawnShow("clone",this.px,this.pz,s,f,.85+n*.15),l=this.startLunge(f,Math.min(8,h.d+h.e.r+1.3),!1),this.lungeFinisher=!1,this.lungeDmg=i*.8,this.iFrames=Math.max(this.iFrames,l+.3),this.spawnFx("arc",this.px,.9,this.pz,s,f,h.d+h.e.r+1.3)}this.queueBeat(l,o),!(n<2)&&this.queueBeat(l+this.skillSpinMax+.06,()=>{let f=null,u=4;for(const g of this.enemies){if(g===c||!g.mesh.visible)continue;const x=Math.hypot(g.mesh.position.x-this.px,g.mesh.position.z-this.pz);x<u&&(u=x,f=g)}let d=0;if(f){const g=Math.atan2(f.mesh.position.z-this.pz,f.mesh.position.x-this.px);d=this.startLunge(g,Math.min(6,u+f.r+1.2),!1),this.lungeFinisher=!1,this.lungeDmg=i*.6,this.iFrames=Math.max(this.iFrames,d+.2)}this.queueBeat(d,()=>this.castSpinAoE({col:r,trail:s,ticks:1,dmgTotal:i*1.8,maxRadius:1.6,duration:.32})),!(n<3)&&this.queueBeat(d+.32,()=>{this.spawnAlly(this.px,this.pz,7+this.job.shadeTtl,i*(.55+this.job.shadeDmg),.8,8,s,"shadow")})})}castLanternRift(e,i,n,s){const r=ee.wanderer,o=Rt[1];if(this.castSpinAoE({col:r,trail:o,ticks:2+s,dmgTotal:n*(2.2+s*.85),maxRadius:1.7+s*.5,onTick:()=>this.nova(this.px,this.pz,3+s*2,"bolt")}),s===0){this.trauma=Math.min(1,this.trauma+.05);return}this.spawnShow("clone",this.px,this.pz,r,this.heading,.7+s*.25),this.echoT=.36+s*.08,this.echoX=this.px,this.echoZ=this.pz,!(s<2)&&(this.queueBeat(this.skillSpinMax+.05,()=>{this.spawnShow("pillar",this.px,this.pz,r,0,1.7),this.castSpinAoE({col:o,trail:r,ticks:2,dmgTotal:n*2.4,maxRadius:2.5,duration:.4})}),!(s<3)&&this.spawnAlly(this.px,this.pz,7.5+this.job.shadeTtl,n*(.5+this.job.shadeDmg),.85,8,r,"shadow"))}castSoulHarvest(e,i,n){const s=ee.arcanist,r=Rt[1];for(let o=0;o<6;o++){const h=e+o/6*Math.PI*2;this.plantThorn(this.px+Math.cos(h)*1.7,this.pz+Math.sin(h)*1.7)}this.castSpinAoE({col:s,trail:r,ticks:2,dmgTotal:i*1.2,maxRadius:1.7}),this.queueBeat(this.skillSpinMax*.9,()=>{const o=this.thorns.map(c=>({x:c.x,z:c.z}));this.clearThorns();const h=1.3+(n>=1?.45:0),l=i*(1.5+n*.3);for(const c of o)this.thornBurst(c.x,c.z,h,l,n>=1,s);if(o.length&&(this.trauma=Math.min(1,this.trauma+.25),this.camPunch=Math.min(1,this.camPunch+.35),this.hitstop=Math.max(this.hitstop,.05)),n>=2)for(const c of o.slice(0,8))for(let f=0;f<3;f++){const u=Math.random()*Math.PI*2;this.rootLine(c.x,c.z,u,2.5,i*.4,new Set,.6,(d,g,x)=>this.plantThorn(g,x))}n>=3&&this.queueBeat(.35,()=>{const c=h+.6+this.job.ascendRadius*.5,f=l*(.8+this.job.ascendPower);for(const u of o)this.thornBurst(u.x,u.z,c,f,!0,r);this.trauma=Math.min(1,this.trauma+.3)})})}thornBurst(e,i,n,s,r,o){this.spawnShow("pillar",e,i,o,0,.45),this.spawnFx("shock",e,.08,i,o),this.burst(e,i,Rt[Math.floor(Math.random()*3)],5),this.damageAround(e,i,n,s,h=>{r&&(h.slow=Math.max(h.slow,2))})}castPrismFall(e,i,n,s){const r=ee.arcanist,o=Rt[1];if(this.iFrames=Math.max(this.iFrames,.4+s*.22),this.castSpinAoE({col:r,trail:o,ticks:2+s,dmgTotal:n*(2+s*.9),maxRadius:1.7+s*.5,onEnd:()=>{const h=1.6+s*.4+this.job.ascendRadius,l=3+s*2;for(let c=0;c<l;c++){const f=e+c/l*Math.PI*2,u=this.px+Math.cos(f)*h,d=this.pz+Math.sin(f)*h;this.spawnShow("rune",u,d,qc,0,.7),this.fireFields.push({x:u,z:d,r:1.1,ttl:1.4+s*.3,tick:.3,dmg:n*(.18+s*.04)})}this.burst(this.px,this.pz,qc,10),this.nova(this.px,this.pz,5,"orb"),s>=3&&(this.nova(this.px,this.pz,Math.round(6*(1+this.job.ascendPower)),"orb"),this.bloomKick=Math.min(1.2,this.bloomKick+.25))}}),s===0){this.trauma=Math.min(1,this.trauma+.05);return}this.ward=Math.max(this.ward,1),this.petBoost=8+s*4,this.petFire=0,this.spawnShow("rune",this.petX,this.petZ,Ei.summon.color,0,.9+s*.3),this.spawnShow("pillar",this.petX,this.petZ,Ei.summon.color,0,.55+s*.35)}castBloodImpale(e,i,n){const s=ee.reaper,r=Rt[1],o=this.maxHp>0?this.hp/this.maxHp:1,h=1+Math.max(0,.5-o)*1.5,l=3+n,c=i*(2.6+n*.9)*h,f=c/l;let u=0;this.castSpinAoE({col:s,trail:r,ticks:l,dmgTotal:c,maxRadius:1.4+n*.32,onHit:d=>{u+=f,this.markEnemy(d,!0)},onEnd:()=>{if(u<=0)return;const d=Math.min(u*(.16+n*.05),this.maxHp-this.hp);d>0&&(this.hp+=d),this.spawnFx("ring",this.px,.08,this.pz,r)}}),!(n<2)&&this.queueBeat(this.skillSpinMax+.08,()=>{this.castSpinAoE({col:r,trail:s,ticks:2,dmgTotal:i*1.7*h,maxRadius:1.6+n*.2,duration:.3,onHit:d=>this.markEnemy(d,!0)})})}castHarvest(e,i,n,s){const r=ee.reaper,o=Rt[1],h=3+s;this.castSpinAoE({col:r,trail:o,ticks:h,dmgTotal:n*(2.4+s*.9),maxRadius:1.5+s*.35,onTick:l=>{this.spawnShow("crescent",this.px,this.pz,r,this.heading+l/h*Math.PI*2,1.1+s*.2,3.2)}}),s!==0&&(this.rageLeft=Math.max(this.rageLeft,2.4+s*1.4),this.ensureAura(),!(s<2)&&(this.iFrames=Math.max(this.iFrames,.5),this.queueBeat(this.skillSpinMax+.05,()=>{this.hp=Math.min(this.overshield?this.maxHp*1.2:this.maxHp,this.hp+14),this.spawnShow("pillar",this.px,this.pz,r,0,1.85),this.castSpinAoE({col:o,trail:r,ticks:3,dmgTotal:n*2.2,maxRadius:2.4,duration:.4})})))}castPiercingSnipe(e,i,n){const s=ee.hunter,r=Rt[1],o=this.job.bulletSpeed/mi*1.6,h=3+n*2,l=n>=1;this.castSpinAoE({col:s,trail:r,ticks:h,dmgTotal:0,maxRadius:1.4,onTick:c=>{const f=this.heading+c/h*Math.PI*2;if(this.spawnBullet(this.px+Math.cos(f)*.6,this.pz+Math.sin(f)*.6,f,!0,{kind:"shard",dmg:i*(1.7+n*.3),pierce:99,speed:o,ttl:1.6}),this.spawnFx("streak",this.px,this.py+.9,this.pz,s,f),l){const u=f+Math.PI/h;this.spawnBullet(this.px+Math.cos(u)*.6,this.pz+Math.sin(u)*.6,u,!0,{kind:"shard",dmg:i*1.3,pierce:99,speed:o,ttl:1.6}),this.spawnFx("streak",this.px,this.py+.9,this.pz,r,u)}}}),!(n<2)&&(this.queueBeat(this.skillSpinMax+.1,()=>{this.castSpinAoE({col:r,trail:s,ticks:h,dmgTotal:0,maxRadius:1.4,duration:.35,onTick:c=>{const f=this.heading+c/h*Math.PI*2+Math.PI/h;this.spawnBullet(this.px+Math.cos(f)*.6,this.pz+Math.sin(f)*.6,f,!0,{kind:"shard",dmg:i*1.4,pierce:99,speed:o,ttl:1.6})}})}),!(n<3)&&this.queueBeat(this.skillSpinMax+.1+.35,()=>{this.spawnAlly(this.px,this.pz,7+this.job.sentryTtl,i*(.6+this.job.sentryDmg),.6,9,s,"turret")}))}castShardStorm(e,i,n,s){const r=ee.hunter,o=Rt[1],h=3+s*3;this.castSpinAoE({col:r,trail:o,ticks:h,dmgTotal:0,maxRadius:1.6+s*.3,onTick:l=>{const c=this.heading+l/h*Math.PI*2,f=1.6+s*.6,u=this.px+Math.cos(c)*f,d=this.pz+Math.sin(c)*f;this.spawnShow("drop",u,d,r,c,.7+s*.3),this.spawnBullet(u,d,c,!0,{kind:"shard",dmg:n*(.85+s*.2),pierce:s,ttl:.5+s*.1})}}),s!==0&&(this.markLeft=3+s*2,this.ensureMark(),!(s<2)&&(this.queueBeat(this.skillSpinMax+.1,()=>{const l=this.px,c=this.pz;for(let f=0;f<8;f++){const u=f/8*Math.PI*2;this.spawnShow("drop",l+Math.cos(u)*1.8,c+Math.sin(u)*1.8,r,u,1.15)}this.damageAround(l,c,2.4,n*1.6),this.impact(l,c,r,!0),this.hitstop=Math.max(this.hitstop,.05),this.trauma=Math.min(1,this.trauma+.2),this.camPunch=Math.min(1,this.camPunch+.9)}),!(s<3)&&this.queueBeat(this.skillSpinMax+.1+.1,()=>{this.spawnAlly(this.px,this.pz,7+this.job.sentryTtl,n*(.6+this.job.sentryDmg),.6,9,r,"turret")})))}}class Wv extends Vv{stepCurse(t,e){if(t.curse<=0||this.bossShielded(t))return;const i=this.hitDamage()*.32*t.curse*e;t.hp-=i,t.curseTtl-=e,t.curseTtl<=0&&(t.curse=0),t.hp<=0&&this.killEnemy(t)}killEnemy(t){var s,r,o,h;if(!this.enemies.includes(t))return;if(nr(),this.killRelics(t),this.lungeLeft>0&&this.wr("spin_momentum")&&(this.fireCd=0,this.spawnFx("ring",this.px,.08,this.pz,16773296)),this.kills+=1,this.unbanked.kills+=1,(s=t.affixes)!=null&&s.length&&(this.unbanked.elites+=1),t.bossId&&this.unbanked.bosses.push(t.bossId),t.dummy||(this.unbanked.byKind[t.bossId??t.kind]=(this.unbanked.byKind[t.bossId??t.kind]??0)+1),this.addMastery(t.bossId?zs.boss:(r=t.affixes)!=null&&r.length?zs.elite:zs.foe),this.logKill(),Zs(50,.35),t.bossId){const l=$i[t.bossId];this.hitstop=Math.max(this.hitstop,.35),this.trauma=1,this.bloomKick=Math.min(1.2,this.bloomKick+.6),Zs(400,1);for(const c of this.eBullets)c.live=!1,c.mesh.visible=!1;this.spawnShow("pillar",t.mesh.position.x,t.mesh.position.z,l,0,2),this.spawnFx("shock",t.mesh.position.x,.08,t.mesh.position.z,l),this.spawnFx("ring",t.mesh.position.x,.08,t.mesh.position.z,16777215);for(let c=0;c<3;c++)this.burst(t.mesh.position.x,t.mesh.position.z,c===1?16777215:l,8)}this.runJob==="reaper"&&this.classIndex>=3&&Math.random()<.28+this.job.raiseChance&&this.allies.filter(c=>c.kind==="wraith").length<10&&this.spawnAlly(t.mesh.position.x,t.mesh.position.z,14+this.job.wraithTtl,this.hitDamage()*(.5+this.job.wraithDmg),.8,7,ee.reaper,"wraith");const e=this.maxHp*Ot.killHealPerSec;this.killHealPool=Math.min(e,this.killHealPool+(this.clock-this.killHealAt)*e),this.killHealAt=this.clock;const i=Math.min(this.killHealPool,this.leech+(this.swapLeft>0&&this.runJob==="reaper"?4:0));if(i>0){this.killHealPool-=i;const l=this.overshield?this.maxHp*1.2:this.maxHp;this.hp=Math.min(l,this.hp+i)}const n=t.bossId?140:t.kind==="skitter"?5:t.kind==="mire"?26:t.kind==="bell"?22:t.kind==="wight"?80:t.kind==="anchor"?30:t.kind==="husk"||t.kind==="bulwark"?26:t.kind==="wraith"||t.kind==="acolyte"||t.kind==="binder"||t.kind==="gazer"?24:t.kind==="ghost"?18:t.kind==="cinder"?10:12;if(this.spawnShard(t.mesh.position.x,t.mesh.position.z,n),this.impact(t.mesh.position.x,t.mesh.position.z,t.bossId?Rt[3]:Se[t.kind],!0),this.spawnFx("flash",t.mesh.position.x,1.1,t.mesh.position.z,16777215),id(),Yh(t.bossId?"boss":"kill"),this.feedPet(t.bossId?22:t.kind==="skitter"?1:t.kind==="mire"||t.kind==="bell"?4:t.kind==="wight"?14:t.kind==="anchor"?6:t.kind==="ghost"||t.kind==="wraith"||t.kind==="acolyte"||t.kind==="husk"||t.kind==="binder"||t.kind==="bulwark"||t.kind==="gazer"?4:t.kind==="cinder"?2:3),Rn(t.bossId?16:t.kind==="skitter"?0:t.kind==="mire"||t.kind==="bell"?2:t.kind==="wight"?8:t.kind==="anchor"?4:t.kind==="ghost"||t.kind==="wraith"||t.kind==="acolyte"||t.kind==="husk"||t.kind==="binder"||t.kind==="bulwark"||t.kind==="gazer"?2:(t.kind==="cinder",1)),(this.job.killBurst>0||this.relicSplinter)&&this.nova(t.mesh.position.x,t.mesh.position.z,5,"bolt"),this.addCorpse(t.mesh,this.px,this.pz,t.bossId?"fall":nd(t.kind),t.bossId?Rt[3]:Se[t.kind]),this.enemies=this.enemies.filter(l=>l!==t),t.kind==="mire"&&this.burstBrood(t.mesh.position.x,t.mesh.position.z,3,Se.mire),(o=t.affixes)!=null&&o.includes("splitting")&&this.burstBrood(t.mesh.position.x,t.mesh.position.z,Ot.splittingBrood,ji.splitting.color),(h=t.affixes)!=null&&h.includes("volatile")){const l=t.mesh.position.x,c=t.mesh.position.z,f=ji.volatile.color;this.spawnShow("warn",l,c,f,0,Ot.volatileRadius),sd(),this.queueBeat(Ot.volatileDelay,()=>{this.spawnShow("dome",l,c,f,0,1.3),hs(),this.spawnFx("shock",l,.08,c,f),this.burst(l,c,f,14),this.trauma=Math.min(1,this.trauma+.3),Math.hypot(this.px-l,this.pz-c)<Ot.volatileRadius&&this.hurt(Ot.volatileDamage,l,c)})}this.roomIsBoss?this.enemies.length===0&&this.onClear():(this.roomKills+=1,this.pushHud(),this.roomKills>=this.roomTarget&&this.onClear())}advanceRoom(){const t=Bi(this.room);if(this.room+=1,t.kind==="boss")this.swapRoom();else{const e=Ys[_e(this.room)];this.floorMat&&this.floorMat.color.setHex(e.floor)}Bi(this.room).kind==="boss"?this.queueBeat(1.1,()=>this.spawnWave()):this.queueBeat(Ot.sigilDelay,()=>this.offerRooms())}swapRoom(){const t=Ys[_e(this.room)];this.floorMat&&this.floorMat.color.setHex(t.floor),_e(this.room)!==_e(this.room-1)&&this.retextureAct(_e(this.room)),this.dressLayout(this.room);for(const n of this.enemies)this.scene.remove(n.mesh);this.enemies=[];for(const n of[...this.bullets,...this.eBullets])n.live=!1,n.mesh.visible=!1;this.fireFields=[],this.clearThorns();let e=0;for(const n of this.shards)n.live&&(e+=n.xp,n.live=!1,this.scene.remove(n.mesh));if(this.shards=[],e&&(this.addXp(e),iu()),this.blocked(this.px,this.pz,.45)){const n=Ui(this.px,this.pz,.45,this.walls);this.px=n.x,this.pz=n.z}this.safeX=this.px,this.safeZ=this.pz,this.py=Pn(this.px,this.pz,this.plats),this.dashLeft=0,this.player.position.set(this.px,this.py,this.pz);let i=0;for(const n of this.allies){if(n.kind==="turret"&&!this.blocked(n.x,n.z,.35))continue;const s=i++*2.4,r=n.kind==="turret"?{x:n.x,z:n.z}:{x:this.px+Math.cos(s)*1.6,z:this.pz+Math.sin(s)*1.6},o=this.blocked(r.x,r.z,.35)?Ui(r.x,r.z,.35,this.walls):r;n.x=o.x,n.z=o.z,n.mesh.position.set(n.x,0,n.z)}this.petX=this.px+1.4,this.petZ=this.pz}resolvePendingRelicUi(){const t=ce.getState();t.setPendingRelicCount(this.pendingRelics.length+this.pendingPetTalents.length),t.setPendingKind(this.pendingRelics.length?"relic":"pet"),t.setUpgrades(this.pendingRelics[0]??this.pendingPetTalents[0]??[]),t.setReroll(this.pendingRelics.length?{free:this.freeRerolls,cost:Pr}:null)}killRelics(t){const e=t.mesh.position.x,i=t.mesh.position.z,n=this.hitDamage();if(this.rares.has("kindling")&&this.fireFields.push({x:e,z:i,r:1.1,ttl:2,tick:.1,dmg:n*.25,col:16756848}),this.rares.has("chainreact")&&!t.bossId){const s=Math.min(t.maxHp*.4,n*3);this.queueBeat(.08,()=>{this.spawnFx("shock",e,.08,i,16765088),Bs(),this.burst(e,i,16765088,6),this.damageAround(e,i,2,s)})}this.rares.has("bloodrush")&&(this.rushStacks=Math.min(5,this.rushStacks+1),this.rushT=3)}onHurt(){if(!this.rares.has("thunderguard"))return;const t=this.enemies.filter(i=>!i.bossId||!this.bossShielded(i)).map(i=>({e:i,d:Math.hypot(i.mesh.position.x-this.px,i.mesh.position.z-this.pz)})).filter(i=>i.d<6).sort((i,n)=>i.d-n.d).slice(0,3),e=this.hitDamage()*2;t.length&&Bs();for(const{e:i}of t){const n=i.mesh.position.x,s=i.mesh.position.z;this.spawnFx("streak",n,2.2,s,Rt[2],-Math.PI/2),this.spawnFx("flash",n,1,s,16777215),this.damageOne(i,n,s,e)}}dashRelics(){if(!this.rares.has("stormstep"))return;let t=null,e=9;for(const n of this.enemies){const s=Math.hypot(n.mesh.position.x-this.px,n.mesh.position.z-this.pz);s<e&&(e=s,t=n)}if(!t)return;const i=Math.atan2(t.mesh.position.z-this.pz,t.mesh.position.x-this.px);this.launchChainBolt(i,this.hitDamage()*1.2,3,16),Bs()}rollRelicCards(t,e=!1){var c;const i=new Set(this.relics),n=Object.values(yo).filter(f=>!i.has(f.title)),s=n.length>=this.relicCards?n:Object.values(yo);So(s,"relics");const r=s.slice(0,this.relicCards),o=new Set(this.pendingRelics.flat().map(f=>f.id)),h=_h.filter(f=>f.skin===this.skin&&!this.wrelics.has(f.id)&&!o.has(f.id));if(h.length&&(t||Ee("relics")<Ot.weaponRelicChance)){const f=h[Math.floor(Ee("relics")*h.length)];r[Math.floor(Ee("relics")*r.length)]={id:f.id,title:f.title,body:f.body,tag:`${((c=Qc(f.skin))==null?void 0:c.name)??"Weapon"} relic`}}const l=nu.filter(f=>!this.rares.has(f.id)&&!o.has(f.id));if(l.length&&(e||Ee("relics")<Ot.rareRelicChance)){const f=r.map((d,g)=>ad.has(d.id)?-1:g).filter(d=>d>=0),u=f[Math.floor(Ee("relics")*f.length)];u!==void 0&&(r[u]=l[Math.floor(Ee("relics")*l.length)])}return r.map(f=>{const u=Av(f.id);if(!u)return f;const d=ei[u];return{...f,set:{name:d.name,color:d.color,have:d.members.filter(g=>this.heldIds.includes(g)).length,size:d.members.length}}})}rerollRelic(){if(this.pendingRelics.length){if(this.freeRerolls>0)this.freeRerolls-=1;else if(Ue().ash>=Pr)bo(Pr);else{this.pushHud("Not enough Ash to reroll");return}this.pendingRelics[0]=this.rollRelicCards(!1),rd(),this.resolvePendingRelicUi()}}onClear(){if(this.roomCleared)return;if(this.roomCleared=!0,this.runCleared+=1,!this.endless&&!this.rush){const e=Ue(),i=Math.min(ml,this.room+1);i>e.bestRoom&&(e.bestRoom=i,mn(e))}if(this.addMastery(zs.chamber),this.bankRun(),su(),this.addXp(40+this.room*12),this.feedPet(10+this.room*2),Rn(Ot.clearAshBase+this.room+this.curseAsh),this.room>=ml&&!this.endless){this.alive=!1,this.endRun(!0),this.finishRunLog("won"),this.summarize(!0),ce.getState().setScreen("victory");return}if(this.room===od){const e=Ue();e.jobs[this.runJob].cleared=!0,mn(e)}if(hd(this.room)){this.choosing=!0,this.paused=!0,this.endRun(!1);const e=So(Object.values(To),"boons");ce.getState().setUpgrades(e.slice(0,3)),ce.getState().setScreen("rest"),this.pushHud(`${ir[_e(this.room)-1]} falls. The rift opens.`);return}const t=Bi(this.room).kind;this.pendingRelics.push(this.rollRelicCards(t==="elite")),ds("relic"),t==="vault"&&this.pendingRelics.push(this.rollRelicCards(!1,!0)),this.resolvePendingRelicUi(),this.advanceRoom(),this.pushHud(this.pendingRelics.length>1?`Chamber cleared — ${this.pendingRelics.length} relics waiting`:"Chamber cleared — relic waiting")}}class Xv extends Wv{constructor(){super(...arguments);D(this,"blades",[]);D(this,"caveIns",!1);D(this,"caveNext",0);D(this,"crack",null);D(this,"reliquary",null);D(this,"secretActs",new Set);D(this,"championPending",!1);D(this,"championActs",new Set);D(this,"spikeBit",new Map)}roomRand(e){let i=(Math.imul(this.room+1,2654435761)^Math.imul(this.runSeed,40503)^Math.imul(e,97))>>>0;return i=Math.imul(i^i>>>15,2246822507)>>>0,i=Math.imul(i^i>>>13,3266489909)>>>0,((i^i>>>16)>>>0)/4294967296}advanceRoom(){const e=this.rush&&Bi(this.room).kind==="boss";e&&(this.room+=au-1),super.advanceRoom(),e&&(this.retextureAct(_e(this.room)),this.pushHud(`Boss Rush: ${ir[_e(this.room)-1]}`))}dressLayout(e){super.dressLayout(e),this.layoutFeatures(e)}clearFeatures(){for(const e of this.blades)this.scene.remove(e.group),this.scene.remove(e.track);this.blades=[],this.crack&&this.scene.remove(this.crack.group),this.reliquary&&this.scene.remove(this.reliquary.group),this.crack=null,this.reliquary=null,this.caveIns=!1,this.spikeBit.clear()}layoutFeatures(e){if(this.clearFeatures(),this.practiceSkin||Bi(e).kind==="boss")return;const i=_e(e);if(e>1&&this.roomRand(1)<.3+i*.05){const n=i>=3&&this.roomRand(2)<.5?2:1;for(let s=0;s<n;s++)this.placeBlade(10+s)}this.caveIns=i>=2&&this.roomRand(3)<.25,this.caveNext=3,!this.secretActs.has(i)&&e>1&&this.roomRand(4)<.22&&this.placeCrack(),this.championPending=e>2&&!this.championActs.has(i)&&this.roomRand(5)<.16}spawnFromQueue(){var n;const e=this.enemies.length;if(super.spawnFromQueue(),!this.championPending||this.enemies.length<=e)return;const i=this.enemies[e];i.kind==="skitter"||i.kind==="cinder"||i.kind==="anchor"||i.kind==="burrower"||(n=i.affixes)!=null&&n.length||(this.championPending=!1,this.makeChampion(i))}makeChampion(e){const i=["Grael","Morrow","Vesh","Ilka","Dunmere","Ketch","Ashlin","Harrow","Wren","Sorrel"],n=["quake","volley","brood"],s=n[Math.floor(this.roomRand(6)*n.length)],r=s==="quake"?"the Quaking":s==="volley"?"the Many-Eyed":"the Teeming",o=`${i[Math.floor(this.roomRand(7)*i.length)]} ${r}`;e.champion={name:o,move:s,cd:3},e.hp=e.maxHp=Math.round(e.maxHp*5),e.size=1.5,this.giveAffixes(e,1);const h=new w(this.sharedGeo("champ-crown",()=>new jt(.32,.05,6,20)),this.mat(new st({color:16765562,fog:!1})));h.rotation.x=Math.PI/2,h.position.y=2.2,h.name="champion-crown",e.mesh.add(h),this.spawnFx("shock",e.mesh.position.x,.08,e.mesh.position.z,16765562),ld(),this.pushHud(`A champion: ${o}!`)}stepChampions(e){for(const i of this.enemies){const n=i.champion;if(!n)continue;const s=i.mesh.getObjectByName("champion-crown");if(s&&(s.rotation.z+=e*1.5),i.spawnGrace>0||(i.frozen??0)>0||(n.cd-=e,n.cd>0))continue;const r=i.mesh.position.x,o=i.mesh.position.z,h=_e(this.room);if(n.move==="quake"){n.cd=5;const l=2.8;i.telegraph=i.telegraphMax=1,this.spawnShow("warn",r,o,16765562,0,l,0,.22,1,void 0,1),this.queueBeat(1,()=>{if(!this.enemies.includes(i))return;const c=i.mesh.position.x,f=i.mesh.position.z;if(this.spawnFx("shock",c,.08,f,16765562),this.spawnFx("ring",c,.08,f,16777215),this.burst(c,f,9075338,12),hs(),this.trauma=Math.min(1,this.trauma+.25),Math.hypot(this.px-c,this.pz-f)<l){this.hurt(18+h*3,c,f);const u=Math.atan2(this.pz-f,this.px-c);this.knockX=Math.cos(u)*7,this.knockZ=Math.sin(u)*7}})}else n.move==="volley"?(n.cd=4,i.telegraph=i.telegraphMax=.6,this.queueBeat(.6,()=>{if(!this.enemies.includes(i))return;const l=Math.random()*Math.PI;for(let c=0;c<10;c++){const f=l+c/10*Math.PI*2;this.spawnBullet(i.mesh.position.x+Math.cos(f)*.6,i.mesh.position.z+Math.sin(f)*.6,f,!1,{dmg:8+h*2})}this.spawnFx("flash",i.mesh.position.x,1.2,i.mesh.position.z,16765562)})):(n.cd=7,i.telegraph=i.telegraphMax=.5,this.queueBeat(.5,()=>{this.enemies.includes(i)&&this.enemies.length<16&&this.burstBrood(i.mesh.position.x,i.mesh.position.z,2,16765562)}))}}refreshSets(){const e=Rv(this.heldIds);for(const i of Tr){const n=Cv(e[i]);if(n>(this.setTier[i]??0)){const s=ei[i];this.pushHud(`${s.name} set (${n}): ${n===3?s.three:s.two}`),this.spawnFx("ring",this.px,.08,this.pz,s.color),i==="hearth"&&n===2&&(this.hp=Math.min(this.maxHp+20,this.hp+20))}this.setTier[i]=n}}onClear(){super.onClear(),this.setOn("hearth",3)&&this.alive&&(this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.2),this.spawnFx("ring",this.px,.08,this.pz,ei.hearth.color))}chargeFamiliar(e){if(!this.petKind)return;const i=this.petCharge;this.petCharge=Math.min(1,this.petCharge+e),i<1&&this.petCharge>=1&&this.pushHud(`${_o[this.petKind].name} is ready`)}castFamiliar(){const e=this.petKind;if(!e||this.petCharge<1||!this.alive||this.paused)return;this.petCharge=0;const i=Ei[e].color,n=this.hitDamage()*(1+this.petLevel*.03),s=this.px,r=this.pz;if(this.spawnFx("shock",s,.08,r,i),this.spawnFx("flash",s,1.2,r,i),Bs(),e==="wisp")this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.25),this.spawnShow("dome",s,r,i,0,.8),this.nova(s,r,10,"bolt");else if(e==="summon")for(const o of[-1,1])this.spawnAlly(s+o*1.2,r,8,n*.5,.45,8,i,"turret");else e==="shade"?(this.spawnShow("dome",s,r,3809360,0,1.6),this.damageAround(s,r,7,n*1.4,o=>o.slow=Math.max(o.slow,3))):e==="kestrel"?this.enemies.filter(h=>!h.burrowed).sort((h,l)=>Math.hypot(h.mesh.position.x-s,h.mesh.position.z-r)-Math.hypot(l.mesh.position.x-s,l.mesh.position.z-r)).slice(0,6).forEach((h,l)=>this.queueBeat(l*.12,()=>{this.enemies.includes(h)&&this.kestrelDive(this.px,this.pz,h.mesh.position.x,h.mesh.position.z,n*.9)})):this.enemies.filter(h=>!h.burrowed&&Math.hypot(h.mesh.position.x-s,h.mesh.position.z-r)<8).slice(0,10).forEach((h,l)=>this.queueBeat(l*.08,()=>this.enemies.includes(h)&&this.sentinelStrike(h,0,2,n*.8)));this.pushHud(_o[e].name)}killEnemy(e){var l;this.enemies.includes(e)&&this.chargeFamiliar(e.bossId?.5:e.champion?.35:(l=e.affixes)!=null&&l.length?.15:.06);const i=e.champion&&this.enemies.includes(e)?e.champion:null,n=this.enemies.includes(e),s=e.mesh.position.x,r=e.mesh.position.z,o=e.slow>0;if(super.killEnemy(e),n&&(this.setOn("pyre",3)&&(this.spawnFx("shock",s,.08,r,ei.pyre.color),this.burst(s,r,ei.pyre.color,this.lite?3:6),this.damageAround(s,r,1.4,this.hitDamage()*.5)),this.setOn("rime",3)&&o&&(this.spawnFx("shock",s,.08,r,ei.rime.color),this.burst(s,r,ei.rime.color,this.lite?3:6),this.damageAround(s,r,1.3,this.hitDamage()*.45,c=>c.slow=Math.max(c.slow,1.2)))),!i)return;const h=_e(this.room);this.championActs.add(h),this.unbanked.champions+=1,this.pendingRelics.push(this.rollRelicCards(!1,!0)),this.resolvePendingRelicUi(),Rn(30+h*10),this.addMastery(zs.boss),this.spawnShow("pillar",e.mesh.position.x,e.mesh.position.z,16765562,0,1.2),this.pushHud(`${i.name} falls! A rare relic waits.`)}placeBlade(e){const i=Ai/2-Fi-1.5;for(let n=0;n<12;n++){const s=(this.roomRand(e*31+n)*2-1)*i,r=(this.roomRand(e*37+n)*2-1)*i,o=this.roomRand(e*41+n)<.5;if(this.blocked(s,r,.6,0)||Math.hypot(s-this.px,r-this.pz)<3)continue;const h=b=>{let T=0;for(;T<6&&!this.blocked(s+(o?(T+.5)*b:0),r+(o?0:(T+.5)*b),.6,0);)T+=.5;return T},l=h(-1),c=h(1);if(l+c<5)continue;const f=o?s-l:s,u=o?r:r-l,d=o?s+c:s,g=o?r:r+c,x=Math.hypot(d-f,g-u),m=new w(this.sharedGeo("blade-track",()=>new Ge(1,.32)),this.mat(new st({color:5906480,transparent:!0,opacity:.55,depthWrite:!1,fog:!1})));m.rotation.set(-Math.PI/2,0,o?0:Math.PI/2),m.scale.set(x+1,1,1),m.position.set((f+d)/2,.05,(u+g)/2),this.scene.add(m);const p=new Jt,M=new Jt;M.add(new w(this.sharedGeo("blade-disc",()=>new Ut(.5,.5,.07,20)),this.toon(12103880,0,0))),M.add(new w(this.sharedGeo("blade-rim",()=>new jt(.5,.05,6,24)),this.mat(new st({color:16743050,fog:!1})))),M.children[1].rotation.x=Math.PI/2;const _=this.sharedGeo("blade-tooth",()=>new Vt(.07,.18,4)),v=this.toon(15261936,0,0);for(let b=0;b<10;b++){const T=new w(_,v),R=b/10*Math.PI*2;T.position.set(Math.cos(R)*.58,0,Math.sin(R)*.58),T.rotation.set(0,-R,-Math.PI/2),M.add(T)}M.rotation.set(Math.PI/2,0,0),p.add(M),p.rotation.y=o?0:Math.PI/2,p.position.set(f,.55,u),this.scene.add(p),this.blades.push({group:p,ax:f,az:u,bx:d,bz:g,t:this.roomRand(e)*2,len:x,hitAt:new Map,track:m});return}}stepBlades(e){for(const i of this.blades){i.t+=e*(3/Math.max(1,i.len));const n=(1-Math.cos(i.t*Math.PI))/2,s=i.ax+(i.bx-i.ax)*n,r=i.az+(i.bz-i.az)*n;i.group.position.set(s,.55,r),i.group.children[0].rotation.y+=e*14,!this.lite&&Math.random()<e*10&&this.burst(s,r,16756896,1),Math.hypot(this.px-s,this.pz-r)<.75&&this.alive&&this.hurt(12+_e(this.room)*2,s,r);for(const o of this.enemies)o.bossId||o.burrowed||Math.hypot(o.mesh.position.x-s,o.mesh.position.z-r)>.6+o.r||this.clock<(i.hitAt.get(o)??-1)||(i.hitAt.set(o,this.clock+.5),this.damageOne(o,s,r,22+this.room*5))}}stepCaveIns(e){if(!this.caveIns||this.roomCleared||!this.enemies.length||!this.alive||(this.caveNext-=e,this.caveNext>0))return;this.caveNext=3.5+Math.random()*1.5;const i=Math.random()<.4?2:1;for(let n=0;n<i;n++){const s=Math.random()*Math.PI*2,r=.6+Math.random()*2.2,o=this.px+Math.cos(s)*r,h=this.pz+Math.sin(s)*r;if(this.blocked(o,h,.3,0))continue;const l=1.1;this.spawnShow("warn",o,h,13148288,0,l),this.queueBeat(.75,()=>this.spawnShow("meteor",o,h,9075338,0,1.2)),this.queueBeat(1.05,()=>{this.spawnFx("shock",o,.08,h,13148288),this.burst(o,h,9075338,this.lite?5:10),hs(),this.trauma=Math.min(1,this.trauma+.15),this.damageAround(o,h,l,30+this.room*6),Math.hypot(this.px-o,this.pz-h)<l&&this.hurt(14+_e(this.room)*2,o,h)})}}stepSpikesOnFoes(){for(const e of this.hazards){if(e.t%1.8<=1.32)continue;const n=Math.floor(e.t/1.8);let s=this.spikeBit.get(e);(!s||s.pulse!==n)&&(s={pulse:n,hit:new Set},this.spikeBit.set(e,s));for(const r of this.enemies)r.bossId||r.burrowed||s.hit.has(r)||Math.hypot(r.mesh.position.x-e.x,r.mesh.position.z-e.z)>.95+r.r*.5||(s.hit.add(r),this.damageOne(r,e.x,e.z,20+this.room*4))}}placeCrack(){const e=Ai/2-Fi/2;for(let i=0;i<10;i++){const n=Math.floor(this.roomRand(50+i)*4),s=(this.roomRand(60+i)*2-1)*(e-3),r=n===0?1:n===1?-1:0,o=n===2?1:n===3?-1:0,h=r?r*e:s,l=o?o*e:s,c=h-r*1.1,f=l-o*1.1;if(this.blocked(c,f,.5,0))continue;const u=new Jt,d=this.mat(new st({color:16769696,fog:!1})),g=this.toon(2760752,0,0);let x=.15,m=0;for(let M=0;M<6;M++){const _=x+.28,v=(M%2?1:-1)*(.12+this.roomRand(70+M)*.12),b=new w(this.sharedGeo("crack-seg",()=>new Pt(.06,1,.06)),d);b.scale.y=Math.hypot(_-x,v-m),b.position.set((m+v)/2,(x+_)/2,0),b.rotation.z=-Math.atan2(v-m,_-x),u.add(b);const T=new w(this.sharedGeo("crack-chunk",()=>new Pt(.16,.12,.08)),g);T.position.set(m+(M%2?-.16:.16),x+.1,.02),T.rotation.z=M*.7,u.add(T),x=_,m=v}const p=new Vs(this.mat(new us({map:this.glowTex(),color:16765562,transparent:!0,opacity:.6,blending:pe,depthWrite:!1,fog:!1})));p.scale.set(1.2,2,1),p.position.y=.95,u.add(p),u.position.set(h-r*.02,0,l-o*.02),u.rotation.y=Math.atan2(-r,-o),this.scene.add(u),this.crack={group:u,x:c,z:f},this.pushHud("A crack glows in the wall.");return}}stepSecret(e){const i=this.crack;if(i){const s=i.group.children[i.group.children.length-1];s.material.opacity=.45+Math.sin(this.clock*3)*.2;const r=Math.hypot(this.px-i.x,this.pz-i.z),o=this.bullets.find(h=>h.live&&Math.hypot(h.mesh.position.x-i.x,h.mesh.position.z-i.z)<1.3);(this.dashLeft>0&&r<1.6||this.attackT>.85&&r<1.9||o)&&(o&&(o.live=!1,o.mesh.visible=!1),this.breakCrack())}const n=this.reliquary;n&&(n.group.children[1].position.y=.62+Math.sin(this.clock*2.4)*.05,n.group.rotation.y+=e*.6,this.clock>=n.readyAt&&Math.hypot(this.px-n.x,this.pz-n.z)<.95&&this.openReliquary())}breakCrack(){const e=this.crack;if(!e)return;this.crack=null,this.scene.remove(e.group),this.secretActs.add(_e(this.room)),this.burst(e.x,e.z,9075338,this.lite?8:16),this.burst(e.x,e.z,16765562,8),this.spawnFx("shock",e.x,.08,e.z,16765562),hs(),this.trauma=Math.min(1,this.trauma+.2);const i=new Jt;i.add(new w(this.sharedGeo("reliq-box",()=>new Pt(.62,.4,.44)),this.toon(6965802,16765562,.15))),i.children[0].position.y=.2;const n=new w(this.sharedGeo("reliq-orb",()=>new ye(.14,0)),this.mat(new st({color:16769696,fog:!1})));i.add(n);const s=new w(this.sharedGeo("reliq-lid",()=>new Pt(.68,.08,.5)),this.toon(14198864,16765562,.3));s.position.y=.44,i.add(s),i.position.set(e.x,0,e.z),this.scene.add(i),this.reliquary={group:i,x:e.x,z:e.z,readyAt:this.clock+.6},this.pushHud("A hidden reliquary!")}openReliquary(){const e=this.reliquary;if(!e)return;this.reliquary=null,this.scene.remove(e.group),this.spawnFx("flash",e.x,.8,e.z,16769696),this.spawnFx("ring",e.x,.08,e.z,16765562),this.burst(e.x,e.z,16765562,12),su();const i=Math.random();let n;if(i<.35){const s=25+_e(this.room)*15;Rn(s),n=`The reliquary held ${s} Ash.`}else i<.65?(this.pendingRelics.push(this.rollRelicCards(!1)),this.resolvePendingRelicUi(),n="The reliquary held a relic."):i<.85?(this.hp=this.maxHp,this.spawnFx("shock",this.px,.08,this.pz,10477800),n="A healing font: you're mended."):(this.pendingRelics.push(this.rollRelicCards(!1,!0)),this.resolvePendingRelicUi(),n="The reliquary held a rare relic!");this.pushHud(n)}stepHazards(e){super.stepHazards(e),this.stepSpikesOnFoes(),this.stepBlades(e),this.stepCaveIns(e),this.stepSecret(e),this.stepChampions(e),this.alive&&this.enemies.length&&this.chargeFamiliar(e/45)}}const Yc=new N,Mh=29,vh=19.5,qv=Math.hypot(Mh,vh),Yv=7;class Zv extends Xv{constructor(e){super(e);D(this,"systemReduced",!1);this.bindApi(),this.applySettings(),this.renderer.setAnimationLoop(i=>this.tick(i))}startPlay(e){try{if(this.resetRun(e),cd("threshold","death"),!this.practiceSkin)for(const i of["move","dash","skill","familiar"])ds(i);ce.getState().setScreen("play")}catch(i){gl("dive",i),this.bindApi(),this.alive=!1,this.paused=!0,ce.getState().setScreen("hub")}}destroy(){var e,i,n,s,r,o;this.renderer.setAnimationLoop(null),this.clearSigils(),(e=this.sigilLayer)==null||e.remove(),(i=this.floatLayer)==null||i.remove(),this.unbindDom(),(n=this.resizeObs)==null||n.disconnect(),this.clearWorld(),(s=this.composer)==null||s.dispose(),this.toonRamp.dispose(),(r=this.starTex)==null||r.dispose(),(o=this.streakTex)==null||o.dispose();for(const h of this.keepGeo.values())h.dispose();this.keepGeo.clear(),Nc(),this.renderer.dispose(),this.renderer.domElement.remove(),ce.getState().setApi(null)}resetRun(e){var r;this.alive=!1,this.paused=!0,this.clearWorld(),this.choosing=!1,this.practiceSkin=ce.getState().practice,this.practiceHits=[],this.endless=!this.practiceSkin&&ce.getState().endless&&ud(Ue()),this.daily=!this.practiceSkin&&!this.endless&&ce.getState().daily,this.weekly=!this.practiceSkin&&!this.endless&&!this.daily&&ce.getState().weekly,this.rush=!this.practiceSkin&&!this.endless&&!this.daily&&!this.weekly&&ce.getState().rush&&fd(Ue()),dd(this.daily?xl():this.weekly?Ml():null);const i=this.endless||this.daily||this.weekly||this.rush?1:Math.min(ce.getState().act,Ue().unlockedAct??1);this.room=this.rush?vl(1)+au-1:vl(i),this.newcomer=!this.endless&&!this.practiceSkin&&i===1&&Ue().bestRoom<3,this.kills=0,this.fireCd=0,this.dashCd=0,this.dashLeft=0,this.iFrames=0,this.hitstop=0,this.trauma=0,this.magnet=2.4,this.extraPellets=0,this.extraPierce=0,this.extraDmg=0,this.extraSpeed=0,this.forced.clear(),this.crystalOn=!1,this.swapLeft=0,this.relics=[],this.pendingRelics=[],this.pendingPetTalents=[],this.thorns=[],ce.getState().setPendingRelicCount(0),this.curse="",this.curseHp=1,this.curseExtra=0,this.curseXp=1,this.curseDmg=1,this.curseAsh=0,this.nextCurse=null,this.clearSigils(),this.wrelics.clear(),this.zones=[],this.webbed=0,this.corpses=[],this.vaultActs.clear(),pd(),this.px=0,this.pz=0,this.py=0,this.pvy=0,this.coyote=0,this.vx=0,this.vz=0,this.safeX=0,this.safeZ=0,this.relicHp=0,this.heldIds=[],this.setTier={},this.hpMul=1,this.relicFireMul=1,this.relicDashMul=1,this.relicLeech=0,this.relicIFrames=0,this.rares.clear(),this.rushStacks=0,this.rushT=0,this.phantomCount=0,this.runJob=e,this.hp=0,this.maxHp=0,this.applyBuild(),this.skillCd=0,this.rageLeft=0,this.markLeft=0,this.petBoost=0,this.echoT=0,this.fuse=null,this.relicEcho=!1,this.relicSplinter=!1,this.shotBounce=0,this.frost=!1,this.fury=!1,this.petCadence=1,this.overshield=!1,this.ward=0,this.wardMax=0,this.runSeed=this.daily?xl():this.weekly?Ml():Math.random()*4294967295>>>0||1,this.beats=[],this.combo=0,this.comboIdle=0,this.swingStep=0,this.swingFinisher=!1,this.reaperCombo=0;for(const o of this.shows)o.live=!1,o.mesh.visible=!1;const n=md();for(const o of n){const h=gd(o);o==="vial-iron"&&(this.relicHp+=28,this.refreshStats(),this.hp+=28),o==="vial-pace"&&(this.extraSpeed+=28),o==="vial-spark"&&(this.extraDmg+=5),o==="vial-split"&&(this.extraPellets+=1),o==="vial-ward"&&(this.relicIFrames+=.18),h&&this.relics.push(h.name)}const s=Ue();if(s.runs+=1,mn(s),this.freeRerolls=Ir(s,"altar-reroll"),this.relicCards=3+Ir(s,"altar-choice"),this.oath=Jc(this.daily?[xd()]:this.weekly?Md():vd(s)),_d(this.oath.reward),Ld(),this.reviveUsed=!1,this.runCleared=0,this.runBigHit=0,this.runStartBest=this.endless?s.bestDepth??0:s.bestRoom,this.runStartClock=this.clock,this.unbanked={kills:0,elites:0,bosses:[],champions:0,byKind:{}},this.masteryGain={},this.masteryRun={},this.masteryBase={[this.skin]:_l(s,this.skin)},this.masteryRank=this.practiceSkin?0:tr(this.masteryBase[this.skin]),this.pendingEvent=null,this.eventActs=new Set,this.secretActs=new Set,this.petCharge=.5,this.rushStart=this.clock,this.rush)for(let o=0;o<3;o++)this.pendingRelics.push(this.rollRelicCards(o===0));this.championActs=new Set,this.runLifeMul=1,this.eliteNext=!1,ce.getState().setRunSummary(null),this.diedLog=void 0,this.emberLeft=this.oath.noRest?0:Ir(s,"altar-ember"),this.systemReduced=((r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,this.reduced=this.systemReduced||vi().reducedMotion,this.buildChamber(),this.makePlayer(),this.makePet(),this.camera.position.set(this.px,Mh,this.pz+vh),this.camera.lookAt(this.px,.5,this.pz),this.snapCam=!1,this.bindApi(),this.practiceSkin?this.spawnDummies():(this.beginRunLog(),this.spawnWave()),this.paused=!1,this.alive=!0}applyBuild(){var n,s;const e=Ue();this.practiceSkin&&(e.weaponSkin[this.runJob]=this.practiceSkin),this.job=wd(this.runJob,e),this.skin=e.weaponSkin[this.runJob],(n=this.masteryBase)[s=this.skin]??(n[s]=_l(e,this.skin)),this.masteryRank=this.practiceSkin?0:tr(this.masteryBase[this.skin]),this.classIndex=e.jobs[this.runJob].classIndex;const i=this.maxHp>0&&this.hp>0?this.hp/this.maxHp:1;this.refreshStats(),this.hp=Math.max(1,Math.round(this.maxHp*i))}refreshStats(){this.fireMul=this.job.fireMul*this.relicFireMul*(this.setOn("tempest",2)?1.08:1),this.dashMul=this.job.dashMul*this.relicDashMul,this.leech=this.job.leech+this.relicLeech,this.extraIFrames=this.job.extraIFrames+this.relicIFrames,this.maxHp=Math.max(1,Math.round((this.job.hp+this.relicHp+(this.setOn("hearth",2)?20:0))*this.hpMul)),this.hp=Math.min(this.hp,this.overshield?this.maxHp*1.2:this.maxHp)}makePlayer(){var s;const e=$u(this.player,this.runJob,this.kit,this.skin,Sd(Ue()));this.rigLegL=e.legL,this.rigLegR=e.legR,this.rigArmL=e.armL,this.rigArmR=e.armR,this.rigLamp=e.lamp,this.rigCape=e.cape,this.lantern=e.lantern,this.slash=e.slash;const i=Ue(),n=yd(i);if(n!=="none"&&this.player.add(nv(n,this.kit,ee[this.runJob])),this.trailColor=((s=bd(i))==null?void 0:s.color)??null,this.masteryRank>=2){const r=new Vs(this.mat(new us({map:this.glowTex(),color:this.masteryRank>=4?16765562:ee[this.runJob],transparent:!0,opacity:.85,blending:pe,depthWrite:!1,fog:!1})));r.scale.setScalar(this.masteryRank>=4?.75:.55),r.position.set(0,-.52,.12),(this.runJob==="hunter"?e.armL:e.armR).add(r)}this.player.position.set(this.px,0,this.pz),this.player.parent||this.scene.add(this.player),this.makePlayerMark()}makePlayerMark(){this.playerMark&&this.scene.remove(this.playerMark);const e=ee[this.runJob],i=new Jt,n=this.mat(new st({color:e,transparent:!0,opacity:.9,depthWrite:!1,fog:!1,side:Qt})),s=new w(this.sharedGeo("player-mark-ring",()=>new Fe(.74,.9,40)),n);s.rotation.x=-Math.PI/2,i.add(s);const r=this.mat(new st({color:1313304,transparent:!0,opacity:.55,depthWrite:!1,fog:!1,side:Qt})),o=new w(this.sharedGeo("player-mark-edge",()=>new Fe(.66,.98,40)),r);o.rotation.x=-Math.PI/2,o.position.y=-.01,o.renderOrder=1,i.add(o);const h=new w(this.sharedGeo("player-mark-chevron",()=>{const l=new wi;return l.moveTo(0,.32),l.lineTo(.26,-.06),l.lineTo(0,.06),l.lineTo(-.26,-.06),l.closePath(),new _r(l)}),n);h.rotation.x=-Math.PI/2,h.position.z=1.12,i.add(h),i.renderOrder=2,this.scene.add(i),this.playerMark=i}clearWorld(){this.clearFloats(),this.clearGlaives();for(const e of[...this.bullets,...this.eBullets])this.scene.remove(e.mesh);for(const e of this.enemies)this.scene.remove(e.mesh);for(const e of this.shards)this.scene.remove(e.mesh);this.sparkMesh&&this.scene.remove(this.sparkMesh),this.sparkMesh=void 0,this.sparkTtl.fill(0),this.thornPool=[],this.thornMats=void 0;for(const e of this.fx)this.scene.remove(e.mesh);this.crystal&&this.scene.remove(this.crystal),this.pet&&this.scene.remove(this.pet),this.scene.remove(this.player),this.bullets=[],this.eBullets=[],this.enemies=[],this.shards=[],this.fx=[],this.walls=[],this.crystal=void 0,this.pet=void 0,this.petTwin=void 0,this.petKind=null,this.shows=[],this.beats=[],this.aura=void 0,this.playerMark=void 0,this.markSigil=void 0,this.roomLights=[],this.layoutRoot=new Jt,Nc();for(const e of this.mats)e.dispose();for(const e of this.geos)e.dispose();for(const e of this.texs)e.dispose();this.mats=[],this.geos=[],this.texs=[],this.scene.clear(),this.scene.fog=new aa(3814480,this.lite?.015:.01),this.scene.background=new Bt(3288132)}openEvent(e){this.pendingEvent=e,this.paused=!0,ce.getState().setEvent({id:e,cost:Ya(_e(this.room))}),ce.getState().setScreen("event")}resolveEvent(e){const i=this.pendingEvent;if(!i)return;this.pendingEvent=null,this.eventActs.add(_e(this.room));let n=`${ss[i].title}: you walk on.`;if(e)if(i==="shrine")this.hpMul*=.8,this.refreshStats(),this.hp=Math.min(this.hp,this.maxHp),this.pendingRelics.push(this.rollRelicCards(!1,!0)),n="The shrine takes its due: a rare relic waits.";else if(i==="merchant"){const s=Ya(_e(this.room));Ue().ash>=s&&(bo(s),this.pendingRelics.push(this.rollRelicCards(!1)),n=`Paid ${s} Ash: a relic waits.`)}else if(i==="spring")this.hp=this.maxHp,this.spawnFx("shock",this.px,.08,this.pz,10477800),n="The spring mends you.";else if(i==="cache")this.pendingRelics.push(this.rollRelicCards(!1)),Rn(20),this.eliteNext=!0,n="A relic and 20 Ash. Something heard you.";else if(i==="gambler"){const s=Ya(_e(this.room));if(Ue().ash>=s){bo(s);const r=2+Math.floor(Math.random()*6)+Math.floor(Math.random()*6);r>=7?(Rn(s*2),n=`The dice come up ${r}: you win ${s*2} Ash!`):n=`The dice come up ${r}: the stake is lost.`}}else i==="altar"?(this.pendingRelics.push(this.rollRelicCards(!1,!0)),this.runLifeMul*=1.2,n="A rare relic waits. The ruin stirs, tougher than before."):i==="spirit"?(this.spawnAlly(this.px+.8,this.pz,120,this.hitDamage()*.6,.8,7,10477800,"wraith"),n="The lost spirit follows you."):i==="chest"&&(this.hp=Math.max(1,Math.round(this.hp-this.maxHp*.25)),this.pendingRelics.push(this.rollRelicCards(!1),this.rollRelicCards(!1)),n="The lock gives. Two relics wait.");ce.getState().setEvent(null),ce.getState().setScreen("play"),this.paused=!1,this.roomCleared=!0,this.resolvePendingRelicUi(),this.advanceRoom(),this.pushHud(n)}revive(){if(!(this.alive||this.reviveUsed||this.hp>0)){this.reviveUsed=!0,this.reopenRunLog(),this.hp=Math.ceil(this.maxHp*.5),this.iFrames=3;for(const e of this.eBullets)e.live=!1,e.mesh.visible=!1;for(const e of this.enemies){const i=e.mesh.position.x-this.px,n=e.mesh.position.z-this.pz,s=Math.hypot(i,n);if(s<4&&!e.bossId){const r=(4-s)/Math.max(.01,s),o=e.mesh.position.x+i*r,h=e.mesh.position.z+n*r;this.blocked(o,h,.4,0)||e.mesh.position.set(o,e.mesh.position.y,h)}}this.impact(this.px,this.pz,Rt[2],!1,!0),this.alive=!0,this.paused=!1,this.pushHud("You rise again."),ce.getState().setScreen("play")}}bindApi(){ce.getState().setApi({startRun:e=>this.startPlay(e),pickUpgrade:e=>this.applyUpgrade(e),pickPetTalent:e=>this.applyPetTalent(e),switchJob:e=>this.doSwitch(e),pause:()=>{!this.alive||this.choosing||(this.paused=!0,ce.getState().setScreen("pause"))},resume:()=>{this.paused=!1,ce.getState().setScreen("play")},abortToCamp:()=>{if(this.practiceSkin){this.alive=!1,this.paused=!0,this.practiceSkin=null,ce.getState().setPractice(null);return}this.finishRunLog("left"),this.endRun(!1)},revive:()=>this.revive(),resolveEvent:e=>this.resolveEvent(e),canRevive:()=>!this.alive&&!this.reviveUsed&&this.hp<=0,applySettings:()=>this.applySettings(),rerollRelic:()=>this.rerollRelic(),setForcedKeys:e=>{this.forced=new Set(e)}})}applyUpgrade(e){if(!(e in To?this.choosing:(this.pendingRelics[0]??[]).some(l=>l.id===e))){this.resolvePendingRelicUi();return}e==="damage"&&(this.extraDmg+=4),e==="firerate"&&(this.relicFireMul*=1.18),e==="vitality"&&(this.relicHp+=24,this.refreshStats(),this.hp=Math.min(this.maxHp,this.hp+40)),e==="haste"&&(this.extraSpeed+=22),e==="dash"&&(this.relicDashMul*=1.22),e==="pierce"&&(this.extraPierce+=1),e==="multishot"&&(this.extraPellets+=1),e==="leech"&&(this.relicLeech+=2),e==="magnet"&&(this.magnet+=1.6),e==="echo"&&(this.relicEcho=!0),e==="splinter"&&(this.relicSplinter=!0),e==="ward"&&(this.wardMax=Math.max(this.wardMax,1)),e==="bounce"&&(this.shotBounce+=1),e==="frost"&&(this.frost=!0),e==="fury"&&(this.fury=!0),e==="bond"&&(this.petCadence=Math.max(this.petCadence,1.7)),e==="overshield"&&(this.overshield=!0),e==="heartwood"&&(this.relicHp+=30,this.refreshStats(),this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.5)),e==="storm"&&(this.extraPellets+=2),e==="lantern"&&(this.wardMax=Math.max(this.wardMax,2)),e==="ashrite"&&(Rn(36),this.magnet+=2.2),e==="blood"&&(this.relicLeech+=4),e==="pace"&&(this.extraSpeed+=36,this.relicDashMul*=1.28);const s=_h.find(l=>l.id===e);s&&this.wrelics.add(s.id);const r=nu.find(l=>l.id===e);r&&this.rares.add(r.id),e==="glassheart"&&(this.hpMul*=.75);const o=To[e],h=yo[e]??o??s??r;h&&!o&&!s&&(this.heldIds.push(e),this.refreshSets()),this.refreshStats(),h&&this.relics.push(h.title),h&&Td(e),h&&!o&&Ed(),o?(this.choosing=!1,this.paused=!1,this.advanceRoom(),this.resolvePendingRelicUi(),ce.getState().setScreen("play"),this.pushHud(Bi(this.room).name)):(this.pendingRelics.shift(),this.resolvePendingRelicUi())}doSwitch(e){const i=this.hp/this.maxHp;this.runJob=e,this.applyBuild(),this.hp=Math.max(1,Math.round(this.maxHp*i)),this.makePlayer(),this.makePet(),this.swapLeft=8,this.crystalOn=!1,this.clearCrystal(),ce.getState().setJob(e),ce.getState().setScreen("play"),this.paused=!1,this.pushHud(tu[e].swapHint)}applySettings(){const e=vi();Ad(e.music,e.sfx),this.reduced=this.systemReduced||e.reducedMotion,this.applyQuality()}tick(e){try{const i=Math.min((e-this.last)/1e3,.1);this.last=e,this.clock+=i,(!Number.isFinite(this.hp)||this.hp<=0)&&this.alive&&this.die(),this.job&&this.alive&&!this.paused&&(this.hitstop<=0||this.lungeLeft>0)?this.simulate(i):(this.hitstop=Math.max(0,this.hitstop-i),this.iFrames=Math.max(0,this.iFrames-i)),this.stepSparks(i),this.stepFx(i),this.stepCapeArcs(i),this.stepFloats(i),this.stepCorpses(i),this.paused&&this.stepShows(i),this.draw(i),this.composer&&!this.lite?this.composer.render():this.renderer.render(this.scene,this.camera)}catch(i){Kc.getState().error?console.error("tick failed",i):gl("frame",i)}}simulate(e){var k;this.swapLeft=Math.max(0,this.swapLeft-e);const i=eu(),n=vi(),s=z=>Id(z,n).some(P=>this.held(P)),r=s("pause")||i.pause;r&&!this.escHeld&&ce.getState().screen==="play"&&((k=ce.getState().api)==null||k.pause()),this.escHeld=r,i.back&&wl.getState().tip&&wl.getState().dismiss();const o=ce.getState().touch;let h=o.mx+i.mx,l=o.my+i.my;s("up")&&(l-=1),s("down")&&(l+=1),s("left")&&(h-=1),s("right")&&(h+=1);const c=Math.hypot(h,l);c>1&&(h/=c,l/=c);const f=(this.job.speed+this.extraSpeed)*(this.rageLeft>0?1.32:1)*(this.webbed>0?.5:1)/mi,u=h*f,d=l*f,g=s("dash")||o.dash||i.dash;let x=h,m=l;Math.hypot(x,m)<.1&&Math.hypot(i.ax,i.ay)>.2&&(x=i.ax,m=i.ay),g&&this.dashCd<=0&&this.dashLeft<=0&&Math.hypot(x,m)>.1&&(this.dashCd=this.job.dashMs/this.dashMul/1e3,this.dashLeft=.18,this.dashX=x,this.dashZ=m,this.iFrames=Math.max(this.iFrames,.24),Rd(),this.dashRelics(),(this.job.dashBurst>0||this.relicEcho)&&this.nova(this.px,this.pz,6,this.runJob==="hunter"?"shard":"bolt"),this.trailColor!==null&&this.spawnFx("streak",this.px,.6,this.pz,this.trailColor,Math.atan2(m,x)),this.setOn("tempest",3)&&this.nova(this.px,this.pz,8,"bolt"));const p=this.job.dashSpeed/mi;if(this.dashLeft>0)this.vx=this.dashX*p,this.vz=this.dashZ*p,this.trailColor!==null&&this.burst(this.px,this.pz,this.trailColor,this.lite?1:3),this.dashLeft-=e;else if(this.lungeLeft>0)this.vx=this.lungeX*this.lungeSpd,this.vz=this.lungeZ*this.lungeSpd,this.lungeLeft-=e,this.lungeLeft<=0&&(this.vx*=.25,this.vz*=.25,this.endLunge());else{const z=1-Math.exp(-18*e);this.vx+=(u-this.vx)*z,this.vz+=(d-this.vz)*z}(this.dashLeft>0||this.lungeLeft>0)&&(this.knockX=this.knockZ=0);const M=this.px+(this.vx+this.knockX)*e,_=this.pz+(this.vz+this.knockZ)*e,v=Math.exp(-9*e);this.knockX*=v,this.knockZ*=v;const b=this.resolve(M,_,.42,this.py);(b.x!==M||b.z!==_)&&(this.knockX=this.knockZ=0,this.dashLeft=0,this.lungeLeft>0&&(this.lungeLeft=0,this.endLunge()),b.x===this.safeX&&(this.vx=0),b.z===this.safeZ&&(this.vz=0)),this.px=b.x,this.pz=b.z;const T=Pn(this.px,this.pz,this.plats);if(this.py+=(T-this.py)*Math.min(1,16*e),Math.abs(T-this.py)<.04&&(this.py=T),this.blocked(this.px,this.pz,.42,this.py)||(this.safeX=this.px,this.safeZ=this.pz),this.lungeLeft>0&&(this.chargeFromX=this.px,this.chargeFromZ=this.pz,this.stepLunge()),this.speedNow=Math.hypot(this.vx,this.vz)*mi,this.speedNow>8&&(this.heading=Math.atan2(-this.vx,-this.vz)),this.fireCd=Math.max(0,this.fireCd-e),this.comboIdle+=e,this.comboIdle>.55&&(this.combo=0),this.dashCd=Math.max(0,this.dashCd-e),this.iFrames=Math.max(0,this.iFrames-e),this.skillCd=Math.max(0,this.skillCd-e),this.rageLeft=Math.max(0,this.rageLeft-e),this.markLeft=Math.max(0,this.markLeft-e),this.petBoost=Math.max(0,this.petBoost-e),this.rushT=Math.max(0,this.rushT-e),this.rushT<=0&&(this.rushStacks=0),this.beats.length){const z=[];for(const P of this.beats)P.t-=e,P.t<=0?P.run():z.push(P);this.beats=z}this.practiceSkin||this.stepRoomSpawns(e),this.stepShows(e),this.echoT>0&&(this.echoT-=e,this.echoT<=0&&this.nova(this.echoX,this.echoZ,8,"bolt")),this.fuse&&(this.fuse.ttl-=e,this.fuse.ttl<=0&&(this.nova(this.fuse.x,this.fuse.z,10,"shard"),this.fuse=null));const R=s("familiar")||i.familiar||o.familiar;R&&!this.familiarHeld&&this.castFamiliar(),this.familiarHeld=!!R;const S=s("skill")||i.skill||o.skill;S&&!this.skillHeld&&this.castActive(),this.skillHeld=!!S;const A=this.autoTarget()!==null&&Math.hypot(o.ax,o.ay)<.001;(this.pointer.down||o.fire||i.fire||A||Math.hypot(o.ax,o.ay)>.35||Math.hypot(i.ax,i.ay)>.35)&&this.fire();const F=this.worldAim();this.aimX=F.x,this.aimZ=F.z,this.crystalOn&&this.crystal&&Math.hypot(this.px-this.crystal.position.x,this.pz-this.crystal.position.z)<1.3&&(this.pushHud("Hold E or X to shift job"),(s("swap")||i.interact)&&(this.paused=!0,ce.getState().setSwitchable(Cd.filter(z=>z!==this.runJob&&Pd(Ue(),z))),ce.getState().setScreen("jobswitch"))),this.stepProjectiles(this.bullets,e,!0),this.stepGlaives(e),this.stepFrost(e),this.stepSickles(e),this.stepProjectiles(this.eBullets,e,!1),this.stepFireFields(e),this.stepThorns(e),this.stepPet(e),this.stepHazards(e),this.stepZones(e),this.stepAllies(e),this.stepSigils(e);for(const z of this.enemies)this.stepEnemy(z,e);for(const z of this.shards){if(!z.live)continue;z.mesh.rotation.y+=e*3,z.mesh.position.y=.5+Math.sin(this.clock*4)*.08;const P=Math.hypot(this.px-z.mesh.position.x,this.pz-z.mesh.position.z);P<this.magnet&&(z.mesh.position.x+=(this.px-z.mesh.position.x)/(P||1)*8*e,z.mesh.position.z+=(this.pz-z.mesh.position.z)/(P||1)*8*e),P<.55&&(this.addXp(z.xp),iu(),z.live=!1,this.scene.remove(z.mesh),this.pushHud())}this.shards=this.shards.filter(z=>z.live),this.hudAcc+=e,this.hudAcc>.12&&(this.hudAcc=0,this.pushHud())}stepProjectiles(e,i,n){for(const s of e){if(!s.live)continue;if(s.ttl-=i,s.ttl<=0){s.live=!1,s.mesh.visible=!1;continue}s.mesh.position.x+=s.vx*i,s.mesh.position.z+=s.vz*i,s.kind==="orb"?s.mesh.rotation.y+=i*1.4:this.aimShot(s),s.kind==="bolt"&&n&&this.skin!=="arrowbolt"&&!this.lite&&Math.random()<i*30?(this.spawnFx("streak",s.mesh.position.x,s.mesh.position.y,s.mesh.position.z,16777215,Math.atan2(s.vz,s.vx)),this.burst(s.mesh.position.x,s.mesh.position.z,ee.wanderer,1)):s.kind==="chain"&&n&&this.skin!=="prismshard"&&!this.lite&&Math.random()<i*16?this.burst(s.mesh.position.x,s.mesh.position.z,Rt[Math.floor(Math.random()*3)],1):s.kind==="shard"&&n&&!this.lite&&Math.random()<i*10&&this.spawnFx("streak",s.mesh.position.x,s.mesh.position.y,s.mesh.position.z,ee.hunter,Math.atan2(s.vz,s.vx));const r=s.kind!=="slash"&&this.blocked(s.mesh.position.x,s.mesh.position.z,.12,s.mesh.position.y);if(r&&s.bounce>0){s.bounce-=1,s.mesh.position.x-=s.vx*i,s.mesh.position.z-=s.vz*i,this.blocked(s.mesh.position.x+s.vx*i,s.mesh.position.z,.12,s.mesh.position.y)?s.vx*=-1:s.vz*=-1,this.aimShot(s);continue}if(s.ttl<=0||r){s.live=!1,s.mesh.visible=!1;continue}if(n)for(const o of this.enemies){const h=Math.hypot(o.mesh.position.x-s.mesh.position.x,o.mesh.position.z-s.mesh.position.z),l=Math.abs(s.mesh.position.y-(o.mesh.position.y+.45));if(h<o.r+s.r&&l<1.2){if(s.kind!=="chain"&&s.chainSeen.includes(o))continue;if(this.hitEnemy(s,o),s.kind!=="chain"&&s.chainSeen.push(o),!s.live)break}}else Math.hypot(this.px-s.mesh.position.x,this.pz-s.mesh.position.z)<.5&&(this.hurt(s.dmg,s.mesh.position.x,s.mesh.position.z),s.live=!1,s.mesh.visible=!1)}}swingCurve(e){if(e<.22){const n=e/.22;return-.18*Math.sin(n*Math.PI*.5)}else if(e<.62){const n=(e-.22)/.4;return-.18+1.33*(1-(1-n)*(1-n)*(1-n))}return 1.15-.15*((e-.62)/.38)}castCurve(e){if(e<.3){const n=e/.3;return-.22*Math.sin(n*Math.PI*.5)}else if(e<.55){const n=(e-.3)/.25;return-.22+1.34*(1-(1-n)*(1-n)*(1-n))}return 1.12-.12*((e-.55)/.45)}hammerCurve(e){const i=n=>n*n*(3-2*n);if(e<.25)return i(e/.25);if(e<.36){const n=(e-.25)/.11;return 1-2*n*n}return e<.55?-1+Math.sin((e-.36)/.19*Math.PI)*.06:-1+i((e-.55)/.45)}hunterPose(e,i){return this.skin==="scattershot"?{lx:[-1.1,-1.35],ly:[.25,.1],lz:[0,0],rx:[-.9,-1.25],rz:[.25,.1],lean:.02,push:i?.24:.16,cape:.35}:this.skin==="twinfang"?i?{lx:[-1.4,-1.45],ly:[.12,0],lz:[0,0],rx:[.6,-1.3],rz:[.8,0],lean:.1,push:.22,cape:.6}:{lx:[-1.25,-1.35],ly:[.1,0],lz:[0,0],rx:[.2+e*.15,-1.2],rz:[.7,.05],lean:.06,push:.08+e*.04,cape:.3}:i?{lx:[-2.2,-2.6],ly:[0,0],lz:[.1,0],rx:[-1.6,-2.5],rz:[.4,0],lean:0,push:-.04,cape:.45}:e===1?{lx:[-1,-1],ly:[.55,-.55],lz:[0,0],rx:[-.4,-1],rz:[.5,0],lean:.14,push:.06,cape:.3}:{lx:[-.85,-1],ly:[.05,0],lz:[0,0],rx:[-.5,-1.1],rz:[.6,.1],lean:.04,push:.05,cape:.2}}draw(e){var k;const i=this.speedNow>24?Math.sin(this.clock*14)*.06:0;this.speedNow>60&&this.dashLeft<=0&&!this.lite&&(this.dustT-=e,this.dustT<=0&&(this.dustT=.24,this.burst(this.px-this.vx*.02,this.pz-this.vz*.02,14207176,2))),this.player.position.y=this.py+i;let s=Math.atan2(this.aimX,this.aimZ)-this.faceY;s=((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,this.faceY+=s*Math.min(1,e*28);const r=this.skillSpinT>0;let o=0;r?(this.skillSpinT=Math.max(0,this.skillSpinT-e),o=this.skillSpinMax>0?1-this.skillSpinT/this.skillSpinMax:1,this.player.rotation.y=this.faceY+o*Math.PI*2):this.player.rotation.y=this.faceY,this.player.scale.setScalar((this.dashLeft>0?.94:1)*Ot.playerScale),this.playerMark&&(this.playerMark.position.set(this.player.position.x,this.player.position.y+.05,this.player.position.z),this.playerMark.rotation.y=this.faceY);const h=this.runJob==="wanderer"&&this.skin==="arrowbolt",l=h,c=this.runJob==="reaper"&&this.skin==="twindaggers",f=this.runJob==="reaper"&&this.skin!=="twindaggers",u=((k=this.job)==null?void 0:k.melee)??!1,d=this.runJob==="knight"&&this.skin==="warhammer",g=this.runJob==="hunter"&&this.swingFinisher&&this.skin!=="scattershot";this.attackT=Math.max(0,this.attackT-e/(d?this.hammerDur:u||l?.26:g?.3:.2));const x=1-this.attackT,m=u||l?this.swingCurve(x):this.castCurve(x),p=Math.max(0,Math.min(1,m));l?(this.player.position.x=this.chargeFromX+(this.px-this.chargeFromX)*p,this.player.position.z=this.chargeFromZ+(this.pz-this.chargeFromZ)*p):(this.player.position.x=this.px,this.player.position.z=this.pz),this.player.rotation.x=0;const M=this.speedNow>28?Math.sin(this.clock*11):0,_=this.speedNow>28?.55:0;this.rigLegL.rotation.x=M*_,this.rigLegR.rotation.x=-M*_;const v=this.swingStep;if(this.rigCape.rotation.x=.08+Math.sin(this.clock*2.2)*.05+_*.1,this.rigCape.rotation.z=Math.sin(this.clock*1.6)*.04,r){const z=Math.sin(Math.min(1,o*3)*(Math.PI/2));this.rigArmL.rotation.x=0,this.rigArmL.rotation.y=0,this.rigArmL.rotation.z=1.3*z,this.rigArmR.rotation.x=0,this.rigArmR.rotation.y=0,this.rigArmR.rotation.z=-1.3*z,this.player.rotation.x=-.07*z,this.rigCape.rotation.x+=.7*z,this.rigCape.rotation.z+=Math.sin(o*Math.PI*5)*.5*z,this.rigLamp.rotation.x=Math.sin(this.clock*7)*.08-.3*z,this.lantern&&(this.lantern.intensity=1.1+1.3*z)}else if(d){const z=this.hammerCurve(x),P=Math.max(0,z),O=Math.max(0,-z),$=this.swingFinisher?1.15:1;this.rigArmR.rotation.x=M*_*.35*(1-P-O)+(1.75*P-1.45*O)*$,this.rigArmR.rotation.z=-.15*P+.3*O,this.rigArmL.rotation.x=-M*_*.55*(1-P-O)+(1.55*P-1.3*O)*$,this.rigArmL.rotation.y=0,this.rigArmL.rotation.z=-.35*(P+O),this.player.rotation.z=0;const B=O*(this.swingFinisher?.16:.1);this.player.position.x+=this.aimX*B,this.player.position.z+=this.aimZ*B,this.rigCape.rotation.x+=.25*P+.45*O,this.rigLamp.rotation.x=Math.sin(this.clock*7)*.08-.25*O,this.lantern&&(this.lantern.intensity=1.1+1.4*O)}else if(c){const z=this.swingFinisher,P=.55,O=-1.15,$=-M*_*.5+P+(O-P)*m;this.rigArmL.rotation.x=$,this.rigArmL.rotation.y=.12-.12*m,this.rigArmL.rotation.z=.55-1.05*m,this.rigArmR.rotation.x=M*_*.5+P+(O-P)*m,this.rigArmR.rotation.y=-.12+.12*m,this.rigArmR.rotation.z=-.55+1.05*m,this.player.rotation.z=0;const B=p*(1-p)*4*(z?.22:.14);this.player.position.x+=this.aimX*B,this.player.position.z+=this.aimZ*B,this.rigCape.rotation.x+=p*.4,this.lantern&&(this.lantern.intensity=.45+1.4*p*(1-p)*4)}else if(f){const z=this.swingFinisher,P=v%2===0?-1:1,O=z?1.35:P<0?1.05:-.95,$=z?-2.7:P<0?-1.9:1.7,B=z?-.3:P<0?-.35:.35,it=z?.45:P<0?.5:-.45,Y=O+($-O)*m,et=B+(it-B)*m;this.rigArmL.rotation.x=-M*_*.5+Y,this.rigArmL.rotation.y=0,this.rigArmL.rotation.z=et,this.rigArmR.rotation.x=M*_*.35+Y*.55,this.rigArmR.rotation.y=0,this.rigArmR.rotation.z=et*.5,this.player.rotation.z=(z?.22:P<0?.14:-.14)*p,z&&(this.player.rotation.y+=.4*p*(1-p)*4);const nt=p*(1-p)*4*(z?.2:.13);this.player.position.x+=this.aimX*nt,this.player.position.z+=this.aimZ*nt,this.rigCape.rotation.x+=p*.55,this.rigCape.rotation.z+=(P>0?-1:1)*p*.35}else if(u||h){const z=this.swingFinisher,P=v%2===0?-1:1,O=z?1:P<0?.85:-.85,$=z?-2.3:P<0?-1.3:1.15,B=z?-.4:P<0?-.3:.3,it=z?2.6:P<0?1.1:-1.35,Y=z?-.2:P<0?-.15:.25,et=z?.65:P<0?.55:-.5;this.rigArmL.rotation.x=-M*_*.55+O+($-O)*m,this.rigArmL.rotation.y=B+(it-B)*m,this.rigArmL.rotation.z=Y+(et-Y)*m,this.rigArmR.rotation.x=M*_*.35-.15*p,this.rigArmR.rotation.z=0,this.rigLamp.rotation.x=Math.sin(this.clock*7)*.08-(z?.45:.22)*p,this.lantern&&(this.lantern.intensity=1.1+(z?1.8:1.1)*p*(1-p)*4),this.player.rotation.z=(z?.18:P<0?.1:-.1)*p,z&&(this.player.rotation.y+=.35*p*(1-p)*4);const nt=p*(1-p)*4*(z?.16:.1);this.player.position.x+=this.aimX*nt,this.player.position.z+=this.aimZ*nt,this.rigCape.rotation.x+=p*.5,this.rigCape.rotation.z+=(P>0?-1:1)*p*.3}else{const z=this.swingFinisher,P=v%2===0?1:-1,O=this.runJob==="wanderer"?{lx:[.12,-.3],ly:[0,0],lz:[0,0],rx:[.9,-1.45],rz:[.28,-.5],lean:.12,push:.05,cape:.3}:this.runJob==="arcanist"&&this.skin==="prismshard"?{lx:[-.35,.6],ly:[.32,-.28],lz:[.4,-.18],rx:[-.3,.55],rz:[-.35,.22],lean:.12,push:.06,cape:.5}:this.runJob==="arcanist"?{lx:[.45,-.85],ly:[.22,-.08],lz:[-.18,.3],rx:[.45,-.85],rz:[.18,-.3],lean:-.08,push:.12,cape:.44}:this.runJob==="knight"?{lx:[.25,-.22],ly:[.1,-.05],lz:[0,0],rx:[1.15,-1.7],rz:[-.35,.6],lean:.18,push:-.07,cape:.38}:this.hunterPose(v,z),$=z&&this.runJob!=="hunter"?1.22:1,B=ht=>(ht[0]+(ht[1]-ht[0])*m)*$,it=-M*_*.55+B(O.lx),Y=B(O.ly)*P,et=B(O.lz),nt=M*_*.35+B(O.rx),Ft=B(O.rz);if(this.runJob==="hunter"){const ht=Math.min(1,e*26),ut=this.rigArmL.rotation,G=this.rigArmR.rotation;ut.set(ut.x+(it-ut.x)*ht,ut.y+(Y-ut.y)*ht,ut.z+(et-ut.z)*ht),G.x+=(nt-G.x)*ht,G.z+=(Ft-G.z)*ht}else this.rigArmL.rotation.set(it,Y,et),this.rigArmR.rotation.x=nt,this.rigArmR.rotation.z=Ft;this.rigLamp.rotation.x=Math.sin(this.clock*7)*.08-.22*p;const X=p*(1-p)*4;this.lantern&&(this.lantern.intensity=1.1+(z?1.7:1.1)*X),this.player.rotation.z=O.lean*P*p;const ct=X*O.push*(z?1.5:1);this.player.position.x-=this.aimX*ct,this.player.position.z-=this.aimZ*ct,this.rigCape.rotation.x+=p*O.cape,this.rigCape.rotation.z+=-P*p*.18}this.rigLamp.rotation.z=Math.sin(this.clock*9)*(.12+_*.12);for(let z=0;z<this.roomLights.length;z++){const P=this.roomLights[z];if(!P.visible)continue;const O=P.userData.base??P.intensity;P.intensity=O*(.92+Math.sin(this.clock*(2.3+z*.7)+z)*.08)}if(this.slash&&(this.slash.visible=!1),this.iFrames>0?this.player.visible=Math.floor(this.clock*24)%2===0:this.player.visible=!0,this.aura){const z=this.rageLeft>0;if(this.aura.visible=z,z){this.aura.position.set(this.px,.08,this.pz),this.aura.rotation.z=this.clock*3.2;const P=.9+Math.sin(this.clock*8)*.12;this.aura.scale.setScalar(P),this.aura.material.opacity=.45+Math.sin(this.clock*10)*.2}}if(this.markSigil){const z=this.markLeft>0;if(this.markSigil.visible=z,z){let P=this.enemies[0]??null,O=99;for(const $ of this.enemies){const B=Math.hypot($.mesh.position.x-this.px,$.mesh.position.z-this.pz);B<O&&(O=B,P=$)}P&&(this.markSigil.position.set(P.mesh.position.x,2.1+Math.sin(this.clock*6)*.1,P.mesh.position.z),this.markSigil.rotation.z=this.clock*4)}}this.crystal&&(this.crystal.rotation.y+=e*1.4,this.crystal.position.y=1.1+Math.sin(this.clock*3)*.12),this.hazeA&&(this.hazeA.position.x=-4+this.px*.04),this.hazeB&&(this.hazeB.position.z=5+this.pz*.05),this.farLayer.position.x=this.px*.12,this.farLayer.position.z=this.pz*.12;const b=this.reduced?0:this.camPunch*3.2,T=Math.tan(Dp.degToRad(this.camera.fov/2))*this.camera.aspect,R=Math.min(1.7,Math.max(1,Yv/T/qv)),S=this.px,A=Mh*R-b,L=this.pz+vh*R-b*.7,F=this.snapCam?1:1-Math.exp(-10*e);if(this.camera.position.x+=(S-this.camera.position.x)*F,this.camera.position.y+=(A-this.camera.position.y)*F,this.camera.position.z+=(L-this.camera.position.z)*F,this.snapCam=!1,this.trauma=Math.max(0,this.trauma-e*2.2),this.camPunch=Math.max(0,this.camPunch-e*5),this.bloom&&(this.bloom.strength=.22+this.bloomKick*(vi().calmFlash?.25:.9)),!this.reduced&&this.trauma>.04){const z=this.trauma*this.trauma*.1*vi().shake;this.camera.position.x+=Math.sin(this.clock*47)*Math.cos(this.clock*31)*z,this.camera.position.z+=Math.sin(this.clock*39+1.3)*z}Yc.set(this.px,this.py+.45,this.pz),this.camera.lookAt(Yc)}}function Jv(a){const t=new Zv(a);return{startPlay:e=>t.startPlay(e),destroy:()=>t.destroy()}}const Qv=Object.freeze(Object.defineProperty({__proto__:null,createGame:Jv},Symbol.toStringTag,{value:"Module"}));export{qs as I,Uc as N,Qv as c};
