const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-SIHeifO_.js","./index-CU-VXq07.js","./index-BgpfZLiK.css"])))=>i.map(i=>d[i]);
var tf=Object.defineProperty;var ef=(r,t,e)=>t in r?tf(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var L=(r,t,e)=>ef(r,typeof t!="symbol"?t+"":t,e);import{J as jt,B as Ji,P as zi,E as Ce,r as nf,_ as sf,g as En,C as rf,A as qs,a as tn,b as Rt,c as we,W as Mh,o as Xc,i as af,u as qc,h as of,d as Cn,s as _h,l as Be,e as hf,w as Pn,f as de,t as lf,T as Ut,j as cf,k as uf,m as ff,n as Ys,p as ds,q as df,v as pf,x as mf,y as gf,z as xf,D as ta,F as Yc,G as Mf,H as Zc,I as ea,K as Mo,L as _o,M as _f,N as vf,O as Ti,Q as Fi,R as Di,S as wf,U as Sf,V as yf,X as Jc,Y as $i,Z as bf,$ as Tf,a0 as mi,a1 as ia,a2 as Ef,a3 as Ea,a4 as Af,a5 as hl,a6 as Rf,a7 as Cf,a8 as or,a9 as Aa,aa as ze,ab as vo,ac as Pf,ad as Wr,ae as Xr,af as ll,ag as If,ah as Lf,ai as ss,aj as Df,ak as qr,al as zf,am as Nf,an as cl,ao as Ff,ap as Uf,aq as Of,ar as ul,as as hr,at as Bf,au as fl,av as kf,aw as Hf,ax as Gf,ay as Vf,az as Kc,aA as Wf,aB as Yr,aC as Xf,aD as qf,aE as hs,aF as Yf,aG as Zf,aH as zs,aI as Jf,aJ as An,aK as Kf,aL as $f,aM as $c,aN as Ra,aO as wo,aP as Qc,aQ as Qf,aR as So,aS as jf,aT as dl,aU as jc,aV as td,aW as ed,aX as yo,aY as id,aZ as nd,a_ as pl,a$ as sd,b0 as rd,b1 as ml,b2 as ad,b3 as od,b4 as hd,b5 as ld,b6 as Ca,b7 as cd,b8 as ud,b9 as fd,ba as gl,bb as dd,bc as pd,bd as md,be as gd,bf as xd,bg as Md,bh as _d,bi as xl,bj as vd,bk as wd,bl as Sd,bm as yd,bn as bd}from"./index-CU-VXq07.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vh="186",Td=0,Ml=1,Ed=2,Bs=1,Ad=2,Ns=3,pn=0,Ze=1,$t=2,Oi=0,Rn=1,pe=2,_l=3,vl=4,Rd=5,rs=100,Cd=101,Pd=102,Id=103,Ld=104,Dd=200,zd=201,Nd=202,Fd=203,tu=204,eu=205,Ud=206,Od=207,Bd=208,kd=209,Hd=210,Gd=211,Vd=212,Wd=213,Xd=214,bo=0,To=1,Eo=2,Zs=3,Ao=4,Ro=5,Co=6,Po=7,iu=0,qd=1,Yd=2,Bi=0,wh=1,Sh=2,yh=3,pa=4,bh=5,Th=6,Eh=7,nu=300,In=301,ps=302,Pa=303,Ia=304,ma=306,na=1e3,Qi=1001,Io=1002,Ye=1003,Zd=1004,lr=1005,ii=1006,La=1007,bn=1008,gi=1009,su=1010,ru=1011,Js=1012,Ah=1013,Gi=1014,Ai=1015,ci=1016,Rh=1017,Ch=1018,Ks=1020,au=35902,ou=35899,hu=1021,lu=1022,Ri=1023,nn=1026,Tn=1027,Ph=1028,Ih=1029,Ln=1030,Lh=1031,Dh=1033,Zr=33776,Jr=33777,Kr=33778,$r=33779,Lo=35840,Do=35841,zo=35842,No=35843,Fo=36196,Uo=37492,Oo=37496,Bo=37488,ko=37489,sa=37490,Ho=37491,Go=37808,Vo=37809,Wo=37810,Xo=37811,qo=37812,Yo=37813,Zo=37814,Jo=37815,Ko=37816,$o=37817,Qo=37818,jo=37819,th=37820,eh=37821,ih=36492,nh=36494,sh=36495,rh=36283,ah=36284,ra=36285,oh=36286,Jd=3200,aa=0,Kd=1,dn="",ke="srgb",oa="srgb-linear",ha="linear",Te="srgb",Da=7680,$d=519,Qd=512,jd=513,tp=514,zh=515,ep=516,ip=517,Nh=518,np=519,cu=35044,sp=35048,wl="300 es",Ui=2e3,$s=2001;function rp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function la(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ap(){const r=la("canvas");return r.style.display="block",r}const Sl={};function ca(...r){const t="THREE."+r.shift();console.log(t,...r)}function uu(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function se(...r){r=uu(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function _e(...r){r=uu(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function ls(...r){const t=r.join(" ");t in Sl||(Sl[t]=!0,se(...r))}function op(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const hp={[bo]:To,[Eo]:Co,[Ao]:Po,[Zs]:Ro,[To]:bo,[Co]:Eo,[Po]:Ao,[Ro]:Zs};class zn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yl=1234567;const ks=Math.PI/180,Qs=180/Math.PI;function ki(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[r&255]+je[r>>8&255]+je[r>>16&255]+je[r>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function me(r,t,e){return Math.max(t,Math.min(e,r))}function Fh(r,t){return(r%t+t)%t}function lp(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function cp(r,t,e){return r!==t?(e-r)/(t-r):0}function Hs(r,t,e){return(1-e)*r+e*t}function up(r,t,e,i){return Hs(r,t,1-Math.exp(-e*i))}function fp(r,t=1){return t-Math.abs(Fh(r,t*2)-t)}function dp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function pp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function mp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function gp(r,t){return r+Math.random()*(t-r)}function xp(r){return r*(.5-Math.random())}function Mp(r){r!==void 0&&(yl=r);let t=yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _p(r){return r*ks}function vp(r){return r*Qs}function wp(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Sp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bp(r,t,e,i,n){const s=Math.cos,a=Math.sin,o=s(e/2),h=a(e/2),l=s((t+i)/2),c=a((t+i)/2),f=s((t-i)/2),u=a((t-i)/2),d=s((i-t)/2),m=a((i-t)/2);switch(n){case"XYX":r.set(o*c,h*f,h*u,o*l);break;case"YZY":r.set(h*u,o*c,h*f,o*l);break;case"ZXZ":r.set(h*f,h*u,o*c,o*l);break;case"XZX":r.set(o*c,h*m,h*d,o*l);break;case"YXY":r.set(h*d,o*c,h*m,o*l);break;case"ZYZ":r.set(h*m,h*d,o*c,o*l);break;default:se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ei(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Tp={DEG2RAD:ks,RAD2DEG:Qs,generateUUID:ki,clamp:me,euclideanModulo:Fh,mapLinear:lp,inverseLerp:cp,lerp:Hs,damp:up,pingpong:fp,smoothstep:dp,smootherstep:pp,randInt:mp,randFloat:gp,randFloatSpread:xp,seededRandom:Mp,degToRad:_p,radToDeg:vp,isPowerOfTwo:wp,ceilPowerOfTwo:Sp,floorPowerOfTwo:yp,setQuaternionFromProperEuler:bp,normalize:Ee,denormalize:Ei},Yh=class Yh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yh.prototype.isVector2=!0;let ot=Yh;class Ms{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let h=i[n+0],l=i[n+1],c=i[n+2],f=i[n+3],u=s[a+0],d=s[a+1],m=s[a+2],x=s[a+3];if(f!==x||h!==u||l!==d||c!==m){let g=h*u+l*d+c*m+f*x;g<0&&(u=-u,d=-d,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){const M=Math.acos(g),v=Math.sin(M);p=Math.sin(p*M)/v,o=Math.sin(o*M)/v,h=h*p+u*o,l=l*p+d*o,c=c*p+m*o,f=f*p+x*o}else{h=h*p+u*o,l=l*p+d*o,c=c*p+m*o,f=f*p+x*o;const M=1/Math.sqrt(h*h+l*l+c*c+f*f);h*=M,l*=M,c*=M,f*=M}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],h=i[n+1],l=i[n+2],c=i[n+3],f=s[a],u=s[a+1],d=s[a+2],m=s[a+3];return t[e]=o*m+c*f+h*d-l*u,t[e+1]=h*m+c*u+l*f-o*d,t[e+2]=l*m+c*d+o*u-h*f,t[e+3]=c*m-o*f-h*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,h=Math.sin,l=o(i/2),c=o(n/2),f=o(s/2),u=h(i/2),d=h(n/2),m=h(s/2);switch(a){case"XYZ":this._x=u*c*f+l*d*m,this._y=l*d*f-u*c*m,this._z=l*c*m+u*d*f,this._w=l*c*f-u*d*m;break;case"YXZ":this._x=u*c*f+l*d*m,this._y=l*d*f-u*c*m,this._z=l*c*m-u*d*f,this._w=l*c*f+u*d*m;break;case"ZXY":this._x=u*c*f-l*d*m,this._y=l*d*f+u*c*m,this._z=l*c*m+u*d*f,this._w=l*c*f-u*d*m;break;case"ZYX":this._x=u*c*f-l*d*m,this._y=l*d*f+u*c*m,this._z=l*c*m-u*d*f,this._w=l*c*f+u*d*m;break;case"YZX":this._x=u*c*f+l*d*m,this._y=l*d*f+u*c*m,this._z=l*c*m-u*d*f,this._w=l*c*f-u*d*m;break;case"XZY":this._x=u*c*f-l*d*m,this._y=l*d*f-u*c*m,this._z=l*c*m+u*d*f,this._w=l*c*f+u*d*m;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],h=e[9],l=e[2],c=e[6],f=e[10],u=i+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-h)*d,this._y=(s-l)*d,this._z=(a-n)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(c-h)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(s+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-l)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(h+c)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-n)/d,this._x=(s+l)/d,this._y=(h+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,h=e._y,l=e._z,c=e._w;return this._x=i*c+a*o+n*l-s*h,this._y=n*c+a*h+s*o-i*l,this._z=s*c+a*l+i*h-n*o,this._w=a*c-i*o-n*h-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let h=1-e;if(o<.9995){const l=Math.acos(o),c=Math.sin(l);h=Math.sin(h*l)/c,e=Math.sin(e*l)/c,this._x=this._x*h+i*e,this._y=this._y*h+n*e,this._z=this._z*h+s*e,this._w=this._w*h+a*e,this._onChangeCallback()}else this._x=this._x*h+i*e,this._y=this._y*h+n*e,this._z=this._z*h+s*e,this._w=this._w*h+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zh=class Zh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,h=t.w,l=2*(a*n-o*i),c=2*(o*e-s*n),f=2*(s*i-a*e);return this.x=e+h*l+a*f-o*c,this.y=i+h*c+o*l-s*f,this.z=n+h*f+s*c-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,h=e.z;return this.x=n*h-s*o,this.y=s*a-i*h,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zh.prototype.isVector3=!0;let N=Zh;const za=new N,bl=new Ms,Jh=class Jh{constructor(t,e,i,n,s,a,o,h,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,h,l)}set(t,e,i,n,s,a,o,h,l){const c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=e,c[4]=s,c[5]=h,c[6]=i,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],h=i[6],l=i[1],c=i[4],f=i[7],u=i[2],d=i[5],m=i[8],x=n[0],g=n[3],p=n[6],M=n[1],v=n[4],_=n[7],b=n[2],T=n[5],R=n[8];return s[0]=a*x+o*M+h*b,s[3]=a*g+o*v+h*T,s[6]=a*p+o*_+h*R,s[1]=l*x+c*M+f*b,s[4]=l*g+c*v+f*T,s[7]=l*p+c*_+f*R,s[2]=u*x+d*M+m*b,s[5]=u*g+d*v+m*T,s[8]=u*p+d*_+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8];return e*a*c-e*o*l-i*s*c+i*o*h+n*s*l-n*a*h}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8],f=c*a-o*l,u=o*h-c*s,d=l*s-a*h,m=e*f+i*u+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=f*x,t[1]=(n*l-c*i)*x,t[2]=(o*i-n*a)*x,t[3]=u*x,t[4]=(c*e-n*h)*x,t[5]=(n*s-o*e)*x,t[6]=d*x,t[7]=(i*h-l*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const h=Math.cos(s),l=Math.sin(s);return this.set(i*h,i*l,-i*(h*a+l*o)+a+t,-n*l,n*h,-n*(-l*a+h*o)+o+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Na.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Na.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Jh.prototype.isMatrix3=!0;let ae=Jh;const Na=new ae,Tl=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),El=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ep(){const r={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Te&&(n.r=en(n.r),n.g=en(n.g),n.b=en(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Te&&(n.r=cs(n.r),n.g=cs(n.g),n.b=cs(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===dn?ha:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[oa]:{primaries:t,whitePoint:i,transfer:ha,toXYZ:Tl,fromXYZ:El,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:i,transfer:Te,toXYZ:Tl,fromXYZ:El,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),r}const xe=Ep();function en(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let On;class Ap{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{On===void 0&&(On=la("canvas")),On.width=t.width,On.height=t.height;const n=On.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=On}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=la("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=en(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(en(e[i]/255)*255):e[i]=en(e[i]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rp=0;class Uh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Fa(n[a].image)):s.push(Fa(n[a]))}else s=Fa(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Fa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ap.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let Cp=0;const Ua=new N;class si extends zn{constructor(t=si.DEFAULT_IMAGE,e=si.DEFAULT_MAPPING,i=Qi,n=Qi,s=ii,a=bn,o=Ri,h=gi,l=si.DEFAULT_ANISOTROPY,c=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ki(),this.name="",this.source=new Uh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ua).x}get height(){return this.source.getSize(Ua).y}get depth(){return this.source.getSize(Ua).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case na:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case na:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=nu;si.DEFAULT_ANISOTROPY=1;const Kh=class Kh{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const h=t.elements,l=h[0],c=h[4],f=h[8],u=h[1],d=h[5],m=h[9],x=h[2],g=h[6],p=h[10];if(Math.abs(c-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,_=(d+1)/2,b=(p+1)/2,T=(c+u)/4,R=(f+x)/4,w=(m+g)/4;return v>_&&v>b?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=T/i,s=R/i):_>b?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=T/n,s=w/n):b<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(b),i=R/s,n=w/s),this.set(i,n,s,e),this}let M=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(u-c)*(u-c));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-x)/M,this.z=(u-c)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kh.prototype.isVector4=!0;let Ue=Kh;class Pp extends zn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];const n={width:t,height:e,depth:i.depth},s=new si(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Uh(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Pp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class fu extends si{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ip extends si{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const da=class da{constructor(t,e,i,n,s,a,o,h,l,c,f,u,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,h,l,c,f,u,d,m,x,g)}set(t,e,i,n,s,a,o,h,l,c,f,u,d,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=h,p[2]=l,p[6]=c,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new da().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/Bn.setFromMatrixColumn(t,0).length(),s=1/Bn.setFromMatrixColumn(t,1).length(),a=1/Bn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),h=Math.cos(n),l=Math.sin(n),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=a*c,d=a*f,m=o*c,x=o*f;e[0]=h*c,e[4]=-h*f,e[8]=l,e[1]=d+m*l,e[5]=u-x*l,e[9]=-o*h,e[2]=x-u*l,e[6]=m+d*l,e[10]=a*h}else if(t.order==="YXZ"){const u=h*c,d=h*f,m=l*c,x=l*f;e[0]=u+x*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*c,e[9]=-o,e[2]=d*o-m,e[6]=x+u*o,e[10]=a*h}else if(t.order==="ZXY"){const u=h*c,d=h*f,m=l*c,x=l*f;e[0]=u-x*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*c,e[9]=x-u*o,e[2]=-a*l,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){const u=a*c,d=a*f,m=o*c,x=o*f;e[0]=h*c,e[4]=m*l-d,e[8]=u*l+x,e[1]=h*f,e[5]=x*l+u,e[9]=d*l-m,e[2]=-l,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){const u=a*h,d=a*l,m=o*h,x=o*l;e[0]=h*c,e[4]=x-u*f,e[8]=m*f+d,e[1]=f,e[5]=a*c,e[9]=-o*c,e[2]=-l*c,e[6]=d*f+m,e[10]=u-x*f}else if(t.order==="XZY"){const u=a*h,d=a*l,m=o*h,x=o*l;e[0]=h*c,e[4]=-f,e[8]=l*c,e[1]=u*f+x,e[5]=a*c,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*c,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lp,t,Dp)}lookAt(t,e,i){const n=this.elements;return fi.subVectors(t,e),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),hn.crossVectors(i,fi),hn.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),hn.crossVectors(i,fi)),hn.normalize(),cr.crossVectors(fi,hn),n[0]=hn.x,n[4]=cr.x,n[8]=fi.x,n[1]=hn.y,n[5]=cr.y,n[9]=fi.y,n[2]=hn.z,n[6]=cr.z,n[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],h=i[8],l=i[12],c=i[1],f=i[5],u=i[9],d=i[13],m=i[2],x=i[6],g=i[10],p=i[14],M=i[3],v=i[7],_=i[11],b=i[15],T=n[0],R=n[4],w=n[8],A=n[12],P=n[1],z=n[5],B=n[9],F=n[13],D=n[2],O=n[6],$=n[10],k=n[14],it=n[3],Y=n[7],et=n[11],nt=n[15];return s[0]=a*T+o*P+h*D+l*it,s[4]=a*R+o*z+h*O+l*Y,s[8]=a*w+o*B+h*$+l*et,s[12]=a*A+o*F+h*k+l*nt,s[1]=c*T+f*P+u*D+d*it,s[5]=c*R+f*z+u*O+d*Y,s[9]=c*w+f*B+u*$+d*et,s[13]=c*A+f*F+u*k+d*nt,s[2]=m*T+x*P+g*D+p*it,s[6]=m*R+x*z+g*O+p*Y,s[10]=m*w+x*B+g*$+p*et,s[14]=m*A+x*F+g*k+p*nt,s[3]=M*T+v*P+_*D+b*it,s[7]=M*R+v*z+_*O+b*Y,s[11]=M*w+v*B+_*$+b*et,s[15]=M*A+v*F+_*k+b*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],h=t[9],l=t[13],c=t[2],f=t[6],u=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15],M=h*d-l*u,v=o*d-l*f,_=o*u-h*f,b=a*d-l*c,T=a*u-h*c,R=a*f-o*c;return e*(x*M-g*v+p*_)-i*(m*M-g*b+p*T)+n*(m*v-x*b+p*R)-s*(m*_-x*T+g*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],a=t[5],o=t[9],h=t[2],l=t[6],c=t[10];return e*(a*c-o*l)-i*(s*c-o*h)+n*(s*l-a*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8],f=t[9],u=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],M=e*o-i*a,v=e*h-n*a,_=e*l-s*a,b=i*h-n*o,T=i*l-s*o,R=n*l-s*h,w=c*x-f*m,A=c*g-u*m,P=c*p-d*m,z=f*g-u*x,B=f*p-d*x,F=u*p-d*g,D=M*F-v*B+_*z+b*P-T*A+R*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return t[0]=(o*F-h*B+l*z)*O,t[1]=(n*B-i*F-s*z)*O,t[2]=(x*R-g*T+p*b)*O,t[3]=(u*T-f*R-d*b)*O,t[4]=(h*P-a*F-l*A)*O,t[5]=(e*F-n*P+s*A)*O,t[6]=(g*_-m*R-p*v)*O,t[7]=(c*R-u*_+d*v)*O,t[8]=(a*B-o*P+l*w)*O,t[9]=(i*P-e*B-s*w)*O,t[10]=(m*T-x*_+p*M)*O,t[11]=(f*_-c*T-d*M)*O,t[12]=(o*A-a*z-h*w)*O,t[13]=(e*z-i*A+n*w)*O,t[14]=(x*v-m*b-g*M)*O,t[15]=(c*b-f*v+u*M)*O,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,h=t.z,l=s*a,c=s*o;return this.set(l*a+i,l*o-n*h,l*h+n*o,0,l*o+n*h,c*o+i,c*h-n*a,0,l*h-n*o,c*h+n*a,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,h=e._w,l=s+s,c=a+a,f=o+o,u=s*l,d=s*c,m=s*f,x=a*c,g=a*f,p=o*f,M=h*l,v=h*c,_=h*f,b=i.x,T=i.y,R=i.z;return n[0]=(1-(x+p))*b,n[1]=(d+_)*b,n[2]=(m-v)*b,n[3]=0,n[4]=(d-_)*T,n[5]=(1-(u+p))*T,n[6]=(g+M)*T,n[7]=0,n[8]=(m+v)*R,n[9]=(g-M)*R,n[10]=(1-(u+x))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=Bn.set(n[0],n[1],n[2]).length();const o=Bn.set(n[4],n[5],n[6]).length(),h=Bn.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Si.copy(this);const l=1/a,c=1/o,f=1/h;return Si.elements[0]*=l,Si.elements[1]*=l,Si.elements[2]*=l,Si.elements[4]*=c,Si.elements[5]*=c,Si.elements[6]*=c,Si.elements[8]*=f,Si.elements[9]*=f,Si.elements[10]*=f,e.setFromRotationMatrix(Si),i.x=a,i.y=o,i.z=h,this}makePerspective(t,e,i,n,s,a,o=Ui,h=!1){const l=this.elements,c=2*s/(e-t),f=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let m,x;if(h)m=s/(a-s),x=a*s/(a-s);else if(o===Ui)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===$s)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Ui,h=!1){const l=this.elements,c=2/(e-t),f=2/(i-n),u=-(e+t)/(e-t),d=-(i+n)/(i-n);let m,x;if(h)m=1/(a-s),x=a/(a-s);else if(o===Ui)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===$s)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};da.prototype.isMatrix4=!0;let Ae=da;const Bn=new N,Si=new Ae,Lp=new N(0,0,0),Dp=new N(1,1,1),hn=new N,cr=new N,fi=new N,Al=new Ae,Rl=new Ms;class mn{constructor(t=0,e=0,i=0,n=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],h=n[1],l=n[5],c=n[9],f=n[2],u=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zp=0;const Cl=new N,kn=new Ms,Wi=new Ae,ur=new N,ys=new N,Np=new N,Fp=new Ms,Pl=new N(1,0,0),Il=new N(0,1,0),Ll=new N(0,0,1),Dl={type:"added"},Up={type:"removed"},Hn={type:"childadded",child:null},Oa={type:"childremoved",child:null};class qe extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new N,e=new mn,i=new Ms,n=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ae},normalMatrix:{value:new ae}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.multiply(kn),this}rotateOnWorldAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.premultiply(kn),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,e){return Cl.copy(t).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ur.copy(t):ur.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(ys,ur,this.up):Wi.lookAt(ur,ys,this.up),this.quaternion.setFromRotationMatrix(Wi),n&&(Wi.extractRotation(n.matrixWorld),kn.setFromRotationMatrix(Wi),this.quaternion.premultiply(kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(_e("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),Hn.child=t,this.dispatchEvent(Hn),Hn.child=null):_e("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Up),Oa.child=t,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),Hn.child=t,this.dispatchEvent(Hn),Hn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Fp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const f=h[l];s(t.shapes,f)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(s(t.materials,this.material[h]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];n.animations.push(s(t.animations,h))}}if(e){const o=a(t.geometries),h=a(t.materials),l=a(t.textures),c=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){const h=[];for(const l in o){const c=o[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}qe.DEFAULT_UP=new N(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zt extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Op={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,i),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=c.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&u>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return o!==null&&(o.visible=n!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},fr={h:0,s:0,l:0};function ka(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ot{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=xe.workingColorSpace){if(t=Fh(t,1),e=me(e,0,1),i=me(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ka(a,s,t+1/3),this.g=ka(a,s,t),this.b=ka(a,s,t-1/3)}return xe.colorSpaceToWorking(this,n),this}setStyle(t,e=ke){function i(s){s!==void 0&&parseFloat(s)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const i=du[t.toLowerCase()];return i!==void 0?this.setHex(i,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=en(t.r),this.g=en(t.g),this.b=en(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return xe.workingToColorSpace(ti.copy(this),t),Math.round(me(ti.r*255,0,255))*65536+Math.round(me(ti.g*255,0,255))*256+Math.round(me(ti.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(ti.copy(this),e);const i=ti.r,n=ti.g,s=ti.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let h,l;const c=(o+a)/2;if(o===a)h=0,l=0;else{const f=a-o;switch(l=c<=.5?f/(a+o):f/(2-a-o),a){case i:h=(n-s)/f+(n<s?6:0);break;case n:h=(s-i)/f+2;break;case s:h=(i-n)/f+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(ti.copy(this),e),t.r=ti.r,t.g=ti.g,t.b=ti.b,t}getStyle(t=ke){xe.workingToColorSpace(ti.copy(this),t);const e=ti.r,i=ti.g,n=ti.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(ln),this.setHSL(ln.h+t,ln.s+e,ln.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ln),t.getHSL(fr);const i=Hs(ln.h,fr.h,e),n=Hs(ln.s,fr.s,e),s=Hs(ln.l,fr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new Ot;Ot.NAMES=du;class sr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new sr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bp extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yi=new N,Xi=new N,Ha=new N,qi=new N,Gn=new N,Vn=new N,zl=new N,Ga=new N,Va=new N,Wa=new N,Xa=new Ue,qa=new Ue,Ya=new Ue;class _i{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),yi.subVectors(t,e),n.cross(yi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){yi.subVectors(n,e),Xi.subVectors(i,e),Ha.subVectors(t,e);const a=yi.dot(yi),o=yi.dot(Xi),h=yi.dot(Ha),l=Xi.dot(Xi),c=Xi.dot(Ha),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,d=(l*h-o*c)*u,m=(a*c-o*h)*u;return s.set(1-d-m,m,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,i,n,s,a,o,h){return this.getBarycoord(t,e,i,n,qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,qi.x),h.addScaledVector(a,qi.y),h.addScaledVector(o,qi.z),h)}static getInterpolatedAttribute(t,e,i,n,s,a){return Xa.setScalar(0),qa.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(t,e),qa.fromBufferAttribute(t,i),Ya.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Xa,s.x),a.addScaledVector(qa,s.y),a.addScaledVector(Ya,s.z),a}static isFrontFacing(t,e,i,n){return yi.subVectors(i,e),Xi.subVectors(t,e),yi.cross(Xi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),yi.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return _i.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;Gn.subVectors(n,i),Vn.subVectors(s,i),Ga.subVectors(t,i);const h=Gn.dot(Ga),l=Vn.dot(Ga);if(h<=0&&l<=0)return e.copy(i);Va.subVectors(t,n);const c=Gn.dot(Va),f=Vn.dot(Va);if(c>=0&&f<=c)return e.copy(n);const u=h*f-c*l;if(u<=0&&h>=0&&c<=0)return a=h/(h-c),e.copy(i).addScaledVector(Gn,a);Wa.subVectors(t,s);const d=Gn.dot(Wa),m=Vn.dot(Wa);if(m>=0&&d<=m)return e.copy(s);const x=d*l-h*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(i).addScaledVector(Vn,o);const g=c*m-d*f;if(g<=0&&f-c>=0&&d-m>=0)return zl.subVectors(s,n),o=(f-c)/(f-c+(d-m)),e.copy(n).addScaledVector(zl,o);const p=1/(g+x+u);return a=x*p,o=u*p,e.copy(i).addScaledVector(Gn,a).addScaledVector(Vn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Nn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bi):bi.fromBufferAttribute(s,a),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dr.copy(i.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),pr.subVectors(this.max,bs),Wn.subVectors(t.a,bs),Xn.subVectors(t.b,bs),qn.subVectors(t.c,bs),cn.subVectors(Xn,Wn),un.subVectors(qn,Xn),Mn.subVectors(Wn,qn);let e=[0,-cn.z,cn.y,0,-un.z,un.y,0,-Mn.z,Mn.y,cn.z,0,-cn.x,un.z,0,-un.x,Mn.z,0,-Mn.x,-cn.y,cn.x,0,-un.y,un.x,0,-Mn.y,Mn.x,0];return!Za(e,Wn,Xn,qn,pr)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,Wn,Xn,qn,pr))?!1:(mr.crossVectors(cn,un),e=[mr.x,mr.y,mr.z],Za(e,Wn,Xn,qn,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Yi=[new N,new N,new N,new N,new N,new N,new N,new N],bi=new N,dr=new Nn,Wn=new N,Xn=new N,qn=new N,cn=new N,un=new N,Mn=new N,bs=new N,pr=new N,mr=new N,_n=new N;function Za(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){_n.fromArray(r,s);const o=n.x*Math.abs(_n.x)+n.y*Math.abs(_n.y)+n.z*Math.abs(_n.z),h=t.dot(_n),l=e.dot(_n),c=i.dot(_n);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>o)return!1}return!0}const We=new N,gr=new ot;let kp=0;class ui extends zn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cu,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class pu extends ui{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class mu extends ui{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class re extends ui{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Hp=new Nn,Ts=new N,Ja=new N;class _s{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Hp.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ts,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(Ja)),this.expandByPoint(Ts.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Gp=0;const Mi=new Ae,Ka=new qe,Yn=new N,di=new Nn,Es=new Nn,$e=new N;class Ie extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rp(t)?mu:pu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ae().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,i){return Mi.makeTranslation(t,e,i),this.applyMatrix4(Mi),this}scale(t,e,i){return Mi.makeScale(t,e,i),this.applyMatrix4(Mi),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Es.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(di.min,Es.min),di.expandByPoint($e),$e.addVectors(di.max,Es.max),di.expandByPoint($e)):(di.expandByPoint(Es.min),di.expandByPoint(Es.max))}di.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)$e.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared($e));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],h=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)$e.fromBufferAttribute(o,l),h&&(Yn.fromBufferAttribute(t,l),$e.add(Yn)),n=Math.max(n,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&_e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){_e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],h=[];for(let w=0;w<i.count;w++)o[w]=new N,h[w]=new N;const l=new N,c=new N,f=new N,u=new ot,d=new ot,m=new ot,x=new N,g=new N;function p(w,A,P){l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,P),u.fromBufferAttribute(s,w),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,P),c.sub(l),f.sub(l),d.sub(u),m.sub(u);const z=1/(d.x*m.y-m.x*d.y);isFinite(z)&&(x.copy(c).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(z),g.copy(f).multiplyScalar(d.x).addScaledVector(c,-m.x).multiplyScalar(z),o[w].add(x),o[A].add(x),o[P].add(x),h[w].add(g),h[A].add(g),h[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let w=0,A=M.length;w<A;++w){const P=M[w],z=P.start,B=P.count;for(let F=z,D=z+B;F<D;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const v=new N,_=new N,b=new N,T=new N;function R(w){b.fromBufferAttribute(n,w),T.copy(b);const A=o[w];v.copy(A),v.sub(b.multiplyScalar(b.dot(A))).normalize(),_.crossVectors(T,A);const z=_.dot(h[w])<0?-1:1;a.setXYZW(w,v.x,v.y,v.z,z)}for(let w=0,A=M.length;w<A;++w){const P=M[w],z=P.start,B=P.count;for(let F=z,D=z+B;F<D;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ui(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const n=new N,s=new N,a=new N,o=new N,h=new N,l=new N,c=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);n.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),c.subVectors(a,s),f.subVectors(n,s),c.cross(f),o.fromBufferAttribute(i,m),h.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),o.add(c),h.add(c),l.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,h.x,h.y,h.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),c.subVectors(a,s),f.subVectors(n,s),c.cross(f),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,h){const l=o.array,c=o.itemSize,f=o.normalized,u=new l.constructor(h.length*c);let d=0,m=0;for(let x=0,g=h.length;x<g;x++){o.isInterleavedBufferAttribute?d=h[x]*o.data.stride+o.offset:d=h[x]*c;for(let p=0;p<c;p++)u[m++]=l[d++]}return new ui(u,c,f)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,i=this.index.array,n=this.attributes;for(const o in n){const h=n[o],l=t(h,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const h=[],l=s[o];for(let c=0,f=l.length;c<f;c++){const u=l[c],d=t(u,i);h.push(d)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const l=i[h];t.data.attributes[h]=l.toJSON(t.data)}const n={};let s=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];c.push(d.toJSON(t.data))}c.length>0&&(n[h]=c,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const l in n){const c=n[l];this.setAttribute(l,c.clone(e))}const s=t.morphAttributes;for(const l in s){const c=[],f=s[l];for(let u=0,d=f.length;u<d;u++)c.push(f[u].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,c=a.length;l<c;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cu,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const ai=new N;class ua{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.applyMatrix4(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.applyNormalMatrix(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.transformDirection(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ei(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new ui(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ua(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $a=new N,Wp=new N,Xp=new ae;class Ki{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=$a.subVectors(i,e).cross(Wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta($a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Xp.getNormalMatrix(t),n=this.coplanarPoint($a).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let qp=0;class gn extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Rn,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=eu,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const h=s[o];delete h.metadata,a.push(h)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ki().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class us extends gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zn;const As=new N,Jn=new N,Kn=new N,$n=new ot,Rs=new ot,gu=new Ae,xr=new N,Cs=new N,Mr=new N,Nl=new ot,Qa=new ot,Fl=new ot;class Gs extends qe{constructor(t=new us){if(super(),this.isSprite=!0,this.type="Sprite",Zn===void 0){Zn=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Vp(e,5);Zn.setIndex([0,1,2,0,2,3]),Zn.setAttribute("position",new ua(i,3,0,!1)),Zn.setAttribute("uv",new ua(i,2,3,!1))}this.geometry=Zn,this.material=t,this.center=new ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&_e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jn.setFromMatrixScale(this.matrixWorld),gu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Kn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jn.multiplyScalar(-Kn.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const a=this.center;_r(xr.set(-.5,-.5,0),Kn,a,Jn,n,s),_r(Cs.set(.5,-.5,0),Kn,a,Jn,n,s),_r(Mr.set(.5,.5,0),Kn,a,Jn,n,s),Nl.set(0,0),Qa.set(1,0),Fl.set(1,1);let o=t.ray.intersectTriangle(xr,Cs,Mr,!1,As);if(o===null&&(_r(Cs.set(-.5,.5,0),Kn,a,Jn,n,s),Qa.set(0,1),o=t.ray.intersectTriangle(xr,Mr,Cs,!1,As),o===null))return;const h=t.ray.origin.distanceTo(As);h<t.near||h>t.far||e.push({distance:h,point:As.clone(),uv:_i.getInterpolation(As,xr,Cs,Mr,Nl,Qa,Fl,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _r(r,t,e,i,n,s){$n.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(Rs.x=s*$n.x-n*$n.y,Rs.y=n*$n.x+s*$n.y):Rs.copy($n),r.copy(t),r.x+=Rs.x,r.y+=Rs.y,r.applyMatrix4(gu)}const Zi=new N,ja=new N,vr=new N,wr=new N;class Bh{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){ja.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),wr.copy(this.origin).sub(ja);const s=t.distanceTo(e)*.5,a=-this.direction.dot(vr),o=wr.dot(this.direction),h=-wr.dot(vr),l=wr.lengthSq(),c=Math.abs(1-a*a);let f,u,d,m;if(c>0)if(f=a*h-o,u=a*o-h,m=s*c,f>=0)if(u>=-m)if(u<=m){const x=1/c;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*h)+l}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*h)+l;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*h)+l;else u<=-m?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-h),s),d=-f*f+u*(u+2*h)+l):u<=m?(f=0,u=Math.min(Math.max(-s,-h),s),d=u*(u+2*h)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-h),s),d=-f*f+u*(u+2*h)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(ja).addScaledVector(vr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Zi.subVectors(t.center,this.origin);const i=Zi.dot(this.direction),n=Zi.dot(Zi)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,h=i+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,h;const l=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,n=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,n=(t.min.x-u.x)*l),c>=0?(s=(t.min.y-u.y)*c,a=(t.max.y-u.y)*c):(s=(t.max.y-u.y)*c,a=(t.min.y-u.y)*c),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),f>=0?(o=(t.min.z-u.z)*f,h=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,h=(t.min.z-u.z)*f),i>h||o>n)||((o>i||i!==i)&&(i=o),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,i,n,s){const a=this.origin,o=this.direction,h=o.x,l=o.y,c=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,p=i.x-a.x,M=i.y-a.y,v=i.z-a.z,_=Math.abs(h),b=Math.abs(l),T=Math.abs(c);let R,w,A,P,z,B,F,D,O,$,k,it;if(_>=b&&_>=T?(A=h,B=f,O=m,it=p,h>=0?(R=l,w=c,P=u,z=d,F=x,D=g,$=M,k=v):(R=c,w=l,P=d,z=u,F=g,D=x,$=v,k=M)):b>=T?(A=l,B=u,O=x,it=M,l>=0?(R=c,w=h,P=d,z=f,F=g,D=m,$=v,k=p):(R=h,w=c,P=f,z=d,F=m,D=g,$=p,k=v)):(A=c,B=d,O=g,it=v,c>=0?(R=h,w=l,P=f,z=u,F=m,D=x,$=p,k=M):(R=l,w=h,P=u,z=f,F=x,D=m,$=M,k=p)),A===0)return null;const Y=R/A,et=w/A,nt=1/A,Nt=P-Y*B,X=z-et*B,ct=F-Y*O,ht=D-et*O,ut=$-Y*it,G=k-et*it,Z=ut*ht-G*ct,mt=Nt*G-X*ut,Bt=ct*X-ht*Nt;if(n){if(Z<0||mt<0||Bt<0)return null}else if((Z<0||mt<0||Bt<0)&&(Z>0||mt>0||Bt>0))return null;const Tt=Z+mt+Bt;if(Tt===0)return null;const St=nt*(Z*B+mt*O+Bt*it);return(Tt>0?St<0:St>0)?null:this.at(St/Tt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at extends gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ul=new Ae,vn=new Bh,Sr=new _s,Ol=new N,yr=new N,br=new N,Tr=new N,to=new N,Er=new N,Bl=new N,Ar=new N;class S extends qe{constructor(t=new Ie,e=new at){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){Er.set(0,0,0);for(let h=0,l=s.length;h<l;h++){const c=o[h],f=s[h];c!==0&&(to.fromBufferAttribute(f,t),a?Er.addScaledVector(to,c):Er.addScaledVector(to.sub(e),c))}e.add(Er)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere),Sr.applyMatrix4(s),vn.copy(t.ray).recast(t.near),!(Sr.containsPoint(vn.origin)===!1&&(vn.intersectSphere(Sr,Ol)===null||vn.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Ul.copy(s).invert(),vn.copy(t.ray).applyMatrix4(Ul),!(i.boundingBox!==null&&vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vn)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,h=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,b=v;_<b;_+=3){const T=o.getX(_),R=o.getX(_+1),w=o.getX(_+2);n=Rr(this,p,t,i,l,c,f,T,R,w),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=o.getX(g),v=o.getX(g+1),_=o.getX(g+2);n=Rr(this,a,t,i,l,c,f,M,v,_),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(h!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(h.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,b=v;_<b;_+=3){const T=_,R=_+1,w=_+2;n=Rr(this,p,t,i,l,c,f,T,R,w),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const m=Math.max(0,d.start),x=Math.min(h.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=g,v=g+1,_=g+2;n=Rr(this,a,t,i,l,c,f,M,v,_),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}}function Yp(r,t,e,i,n,s,a,o){let h;if(t.side===Ze?h=i.intersectTriangle(a,s,n,!0,o):h=i.intersectTriangle(n,s,a,t.side===pn,o),h===null)return null;Ar.copy(o),Ar.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Ar);return l<e.near||l>e.far?null:{distance:l,point:Ar.clone(),object:r}}function Rr(r,t,e,i,n,s,a,o,h,l){r.getVertexPosition(o,yr),r.getVertexPosition(h,br),r.getVertexPosition(l,Tr);const c=Yp(r,t,e,i,yr,br,Tr,Bl);if(c){const f=new N;_i.getBarycoord(Bl,yr,br,Tr,f),n&&(c.uv=_i.getInterpolatedAttribute(n,o,h,l,f,new ot)),s&&(c.uv1=_i.getInterpolatedAttribute(s,o,h,l,f,new ot)),a&&(c.normal=_i.getInterpolatedAttribute(a,o,h,l,f,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:h,c:l,normal:new N,materialIndex:0};_i.getNormal(yr,br,Tr,u.normal),c.face=u,c.barycoord=f}return c}class xu extends si{constructor(t=null,e=1,i=1,n,s,a,o,h,l=Ye,c=Ye,f,u){super(null,a,o,h,l,c,n,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl extends ui{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qn=new Ae,Hl=new Ae,Cr=[],Gl=new Nn,Zp=new Ae,Ps=new S,Is=new _s;class yn extends S{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Zp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qn),Gl.copy(t.boundingBox).applyMatrix4(Qn),this.boundingBox.union(Gl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qn),Is.copy(t.boundingSphere).applyMatrix4(Qn),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(i),t.ray.intersectsSphere(Is)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Qn),Hl.multiplyMatrices(i,Qn),Ps.matrixWorld=Hl,Ps.raycast(t,Cr);for(let a=0,o=Cr.length;a<o;a++){const h=Cr[a];h.instanceId=s,h.object=this,e.push(h)}Cr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new kl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new xu(new Float32Array(n*this.count),n,this.count,Ph,Ai));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,h=n*t;return s[h]=o,s.set(i,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wn=new _s,Jp=new ot(.5,.5),Pr=new N;class kh{constructor(t=new Ki,e=new Ki,i=new Ki,n=new Ki,s=new Ki,a=new Ki){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ui,i=!1){const n=this.planes,s=t.elements,a=s[0],o=s[1],h=s[2],l=s[3],c=s[4],f=s[5],u=s[6],d=s[7],m=s[8],x=s[9],g=s[10],p=s[11],M=s[12],v=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-a,d-c,p-m,b-M).normalize(),n[1].setComponents(l+a,d+c,p+m,b+M).normalize(),n[2].setComponents(l+o,d+f,p+x,b+v).normalize(),n[3].setComponents(l-o,d-f,p-x,b-v).normalize(),i)n[4].setComponents(h,u,g,_).normalize(),n[5].setComponents(l-h,d-u,p-g,b-_).normalize();else if(n[4].setComponents(l-h,d-u,p-g,b-_).normalize(),e===Ui)n[5].setComponents(l+h,d+u,p+g,b+_).normalize();else if(e===$s)n[5].setComponents(h,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(t){wn.center.set(0,0,0);const e=Jp.distanceTo(t.center);return wn.radius=.7071067811865476+e,wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Pr.x=n.normal.x>0?t.max.x:t.min.x,Pr.y=n.normal.y>0?t.max.y:t.min.y,Pr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mu extends gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vl=new Ae,hh=new Bh,Ir=new _s,Lr=new N;class Kp extends qe{constructor(t=new Ie,e=new Mu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(n),Ir.radius+=s,t.ray.intersectsSphere(Ir)===!1)return;Vl.copy(n).invert(),hh.copy(t.ray).applyMatrix4(Vl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=i.index,f=i.attributes.position;if(l!==null){const u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=u,x=d;m<x;m++){const g=l.getX(m);Lr.fromBufferAttribute(f,g),Wl(Lr,g,h,n,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=u,x=d;m<x;m++)Lr.fromBufferAttribute(f,m),Wl(Lr,m,h,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wl(r,t,e,i,n,s,a){const o=hh.distanceSqToPoint(r);if(o<e){const h=new N;hh.closestPointToPoint(r,h),h.applyMatrix4(i);const l=n.ray.origin.distanceTo(h);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class _u extends si{constructor(t=[],e=In,i,n,s,a,o,h,l,c){super(t,e,i,n,s,a,o,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sn extends si{constructor(t,e,i,n,s,a,o,h,l){super(t,e,i,n,s,a,o,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class js extends si{constructor(t,e,i=Gi,n,s,a,o=Ye,h=Ye,l,c=nn,f=1){if(c!==nn&&c!==Tn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,n,s,a,o,h,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Uh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class $p extends js{constructor(t,e=Gi,i=In,n,s,a=Ye,o=Ye,h,l=nn){const c={width:t,height:t,depth:1},f=[c,c,c,c,c,c];super(t,t,e,i,n,s,a,o,h,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class vu extends si{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class It extends Ie{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const h=[],l=[],c=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,i,e,t,a,s,0),m("z","y","x",1,-1,i,e,-t,a,s,1),m("x","z","y",1,1,t,i,e,n,a,2),m("x","z","y",1,-1,t,i,-e,n,a,3),m("x","y","z",1,-1,t,e,i,n,s,4),m("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(h),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(f,2));function m(x,g,p,M,v,_,b,T,R,w,A){const P=_/R,z=b/w,B=_/2,F=b/2,D=T/2,O=R+1,$=w+1;let k=0,it=0;const Y=new N;for(let et=0;et<$;et++){const nt=et*z-F;for(let Nt=0;Nt<O;Nt++){const X=Nt*P-B;Y[x]=X*M,Y[g]=nt*v,Y[p]=D,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[p]=T>0?1:-1,c.push(Y.x,Y.y,Y.z),f.push(Nt/R),f.push(1-et/w),k+=1}}for(let et=0;et<w;et++)for(let nt=0;nt<R;nt++){const Nt=u+nt+O*et,X=u+nt+O*(et+1),ct=u+(nt+1)+O*(et+1),ht=u+(nt+1)+O*et;h.push(Nt,X,ht),h.push(X,ct,ht),it+=6}o.addGroup(d,it,A),d+=it,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new It(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ue extends Ie{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));const a=[],o=[],h=[],l=[],c=e/2,f=Math.PI/2*t,u=e,d=2*f+u,m=i*2+s,x=n+1,g=new N,p=new N;for(let M=0;M<=m;M++){let v=0,_=0,b=0,T=0;if(M<=i){const A=M/i,P=A*Math.PI/2;_=-c-t*Math.cos(P),b=t*Math.sin(P),T=-t*Math.cos(P),v=A*f}else if(M<=i+s){const A=(M-i)/s;_=-c+A*e,b=t,T=0,v=f+A*u}else{const A=(M-i-s)/i,P=A*Math.PI/2;_=c+t*Math.sin(P),b=t*Math.cos(P),T=t*Math.sin(P),v=f+u+A*f}const R=Math.max(0,Math.min(1,v/d));let w=0;M===0?w=.5/n:M===m&&(w=-.5/n);for(let A=0;A<=n;A++){const P=A/n,z=P*Math.PI*2,B=Math.sin(z),F=Math.cos(z);p.x=-b*F,p.y=_,p.z=b*B,o.push(p.x,p.y,p.z),g.set(-b*F,T,b*B),g.normalize(),h.push(g.x,g.y,g.z),l.push(P+w,R)}if(M>0){const A=(M-1)*x;for(let P=0;P<n;P++){const z=A+P,B=A+P+1,F=M*x+P,D=M*x+P+1;a.push(z,B,F),a.push(B,D,F)}}}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Xe extends Ie{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],a=[],o=[],h=[],l=new N,c=new ot;a.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=i+f/e*n;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(a[u]/t+1)/2,c.y=(a[u+1]/t+1)/2,h.push(c.x,c.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qt extends Ie{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:h};const l=this;n=Math.floor(n),s=Math.floor(s);const c=[],f=[],u=[],d=[];let m=0;const x=[],g=i/2;let p=0;M(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(d,2));function M(){const _=new N,b=new N;let T=0;const R=(e-t)/i;for(let w=0;w<=s;w++){const A=[],P=w/s,z=P*(e-t)+t;for(let B=0;B<=n;B++){const F=B/n,D=F*h+o,O=Math.sin(D),$=Math.cos(D);b.x=z*O,b.y=-P*i+g,b.z=z*$,f.push(b.x,b.y,b.z),_.set(O,R,$).normalize(),u.push(_.x,_.y,_.z),d.push(F,1-P),A.push(m++)}x.push(A)}for(let w=0;w<n;w++)for(let A=0;A<s;A++){const P=x[A][w],z=x[A+1][w],B=x[A+1][w+1],F=x[A][w+1];(t>0||A!==0)&&(c.push(P,z,F),T+=3),(e>0||A!==s-1)&&(c.push(z,B,F),T+=3)}l.addGroup(p,T,0),p+=T}function v(_){const b=m,T=new ot,R=new N;let w=0;const A=_===!0?t:e,P=_===!0?1:-1;for(let B=1;B<=n;B++)f.push(0,g*P,0),u.push(0,P,0),d.push(.5,.5),m++;const z=m;for(let B=0;B<=n;B++){const D=B/n*h+o,O=Math.cos(D),$=Math.sin(D);R.x=A*$,R.y=g*P,R.z=A*O,f.push(R.x,R.y,R.z),u.push(0,P,0),T.x=O*.5+.5,T.y=$*.5*P+.5,d.push(T.x,T.y),m++}for(let B=0;B<n;B++){const F=b+B,D=z+B;_===!0?c.push(D,D+1,F):c.push(D+1,D,F),w+=3}l.addGroup(p,w,_===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class te extends qt{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new te(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ga extends Ie{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],a=[];o(n),l(i),c(),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(s.slice(),3)),this.setAttribute("uv",new re(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const v=new N,_=new N,b=new N;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],_),d(e[T+2],b),h(v,_,b,M)}function h(M,v,_,b){const T=b+1,R=[];for(let w=0;w<=T;w++){R[w]=[];const A=M.clone().lerp(_,w/T),P=v.clone().lerp(_,w/T),z=T-w;for(let B=0;B<=z;B++)B===0&&w===T?R[w][B]=A:R[w][B]=A.clone().lerp(P,B/z)}for(let w=0;w<T;w++)for(let A=0;A<2*(T-w)-1;A++){const P=Math.floor(A/2);A%2===0?(u(R[w][P+1]),u(R[w+1][P]),u(R[w][P])):(u(R[w][P+1]),u(R[w+1][P+1]),u(R[w+1][P]))}}function l(M){const v=new N;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(M),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function c(){const M=new N;for(let v=0;v<s.length;v+=3){M.x=s[v+0],M.y=s[v+1],M.z=s[v+2];const _=g(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(_,1-b)}m(),f()}function f(){for(let M=0;M<a.length;M+=6){const v=a[M+0],_=a[M+2],b=a[M+4],T=Math.max(v,_,b),R=Math.min(v,_,b);T>.9&&R<.1&&(v<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function d(M,v){const _=M*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function m(){const M=new N,v=new N,_=new N,b=new N,T=new ot,R=new ot,w=new ot;for(let A=0,P=0;A<s.length;A+=9,P+=6){M.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),_.set(s[A+6],s[A+7],s[A+8]),T.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),w.set(a[P+4],a[P+5]),b.copy(M).add(v).add(_).divideScalar(3);const z=g(b);x(T,P+0,M,z),x(R,P+2,v,z),x(w,P+4,_,z)}}function x(M,v,_,b){b<0&&M.x===1&&(a[v]=M.x-1),_.x===0&&_.z===0&&(a[v]=b/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.vertices,t.indices,t.radius,t.detail)}}class Vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,h=s-1,l;for(;o<=h;)if(n=Math.floor(o+(h-o)/2),l=i[n]-a,l<0)o=n+1;else if(l>0)h=n-1;else{h=n;break}if(n=h,i[n]===a)return n/(s-1);const c=i[n],u=i[n+1]-c,d=(a-c)/u;return(n+d)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),h=e||(a.isVector2?new ot:new N);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new N,n=[],s=[],a=[],o=new N,h=new Ae;for(let d=0;d<=t;d++){const m=d/t;n[d]=this.getTangentAt(m,new N)}s[0]=new N,a[0]=new N;let l=Number.MAX_VALUE;const c=Math.abs(n[0].x),f=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=l&&(l=c,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(me(n[d-1].dot(n[d]),-1,1));s[d].applyMatrix4(h.makeRotationAxis(o,m))}a[d].crossVectors(n[d],s[d])}if(e===!0){let d=Math.acos(me(s[0].dot(s[t]),-1,1));d/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(h.makeRotationAxis(n[m],d*m)),a[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hh extends Vi{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=h}getPoint(t,e=new ot){const i=e,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+t*s;let h=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=h-this.aX,d=l-this.aY;h=u*c-d*f+this.aX,l=u*f+d*c+this.aY}return i.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qp extends Hh{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Gh(){let r=0,t=0,e=0,i=0;function n(s,a,o,h){r=s,t=o,e=-3*s+3*a-2*o-h,i=2*s-2*a+o+h}return{initCatmullRom:function(s,a,o,h,l){n(a,o,l*(o-s),l*(h-a))},initNonuniformCatmullRom:function(s,a,o,h,l,c,f){let u=(a-s)/l-(o-s)/(l+c)+(o-a)/c,d=(o-a)/c-(h-a)/(c+f)+(h-o)/f;u*=c,d*=c,n(a,o,u,d)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+i*o}}}const Xl=new N,ql=new N,eo=new Gh,io=new Gh,no=new Gh;class jp extends Vi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new N){const i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1);let l,c;this.closed||o>0?l=n[(o-1)%s]:(ql.subVectors(n[0],n[1]).add(n[0]),l=ql);const f=n[o%s],u=n[(o+1)%s];if(this.closed||o+2<s?c=n[(o+2)%s]:(Xl.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=Xl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(c),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),eo.initNonuniformCatmullRom(l.x,f.x,u.x,c.x,m,x,g),io.initNonuniformCatmullRom(l.y,f.y,u.y,c.y,m,x,g),no.initNonuniformCatmullRom(l.z,f.z,u.z,c.z,m,x,g)}else this.curveType==="catmullrom"&&(eo.initCatmullRom(l.x,f.x,u.x,c.x,this.tension),io.initCatmullRom(l.y,f.y,u.y,c.y,this.tension),no.initCatmullRom(l.z,f.z,u.z,c.z,this.tension));return i.set(eo.calc(h),io.calc(h),no.calc(h)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new N().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yl(r,t,e,i,n){const s=(i-t)*.5,a=(n-e)*.5,o=r*r,h=r*o;return(2*e-2*i+s+a)*h+(-3*e+3*i-2*s-a)*o+s*r+e}function t0(r,t){const e=1-r;return e*e*t}function e0(r,t){return 2*(1-r)*r*t}function i0(r,t){return r*r*t}function Vs(r,t,e,i){return t0(r,t)+e0(r,e)+i0(r,i)}function n0(r,t){const e=1-r;return e*e*e*t}function s0(r,t){const e=1-r;return 3*e*e*r*t}function r0(r,t){return 3*(1-r)*r*r*t}function a0(r,t){return r*r*r*t}function Ws(r,t,e,i,n){return n0(r,t)+s0(r,e)+r0(r,i)+a0(r,n)}class wu extends Vi{constructor(t=new ot,e=new ot,i=new ot,n=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ot){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ws(t,n.x,s.x,a.x,o.x),Ws(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class o0 extends Vi{constructor(t=new N,e=new N,i=new N,n=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new N){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ws(t,n.x,s.x,a.x,o.x),Ws(t,n.y,s.y,a.y,o.y),Ws(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Su extends Vi{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yu extends Vi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bu extends Vi{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Vs(t,n.x,s.x,a.x),Vs(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends Vi{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Vs(t,n.x,s.x,a.x),Vs(t,n.y,s.y,a.y),Vs(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eu extends Vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,h=n[a===0?a:a-1],l=n[a],c=n[a>n.length-2?n.length-1:a+1],f=n[a>n.length-3?n.length-1:a+2];return i.set(Yl(o,h.x,l.x,c.x,f.x),Yl(o,h.y,l.y,c.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new ot().fromArray(n))}return this}}var fa=Object.freeze({__proto__:null,ArcCurve:Qp,CatmullRomCurve3:jp,CubicBezierCurve:wu,CubicBezierCurve3:o0,EllipseCurve:Hh,LineCurve:Su,LineCurve3:yu,QuadraticBezierCurve:bu,QuadraticBezierCurve3:Tu,SplineCurve:Eu});class Au extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fa[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const a=n[s]-i,o=this.curves[s],h=o.getLength(),l=h===0?0:1-a/h;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(o);for(let l=0;l<h.length;l++){const c=h[l];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new fa[n.type]().fromJSON(n))}return this}}class Zl extends Au{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Su(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new bu(this.currentPoint.clone(),new ot(t,e),new ot(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){const o=new wu(this.currentPoint.clone(),new ot(t,e),new ot(i,n),new ot(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Eu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){const o=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+o,e+h,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,h){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,i,n,s,a,o,h),this}absellipse(t,e,i,n,s,a,o,h){const l=new Hh(t,e,i,n,s,a,o,h);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class vi extends Zl{constructor(t){super(t),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new Zl().fromJSON(n))}return this}}function h0(r,t,e=2){const i=t&&t.length,n=i?t[0]*e:r.length;let s=Ru(r,0,n,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,h,l;if(i&&(s=d0(r,t,s,e)),r.length>80*e){o=r[0],h=r[1];let c=o,f=h;for(let u=e;u<n;u+=e){const d=r[u],m=r[u+1];d<o&&(o=d),m<h&&(h=m),d>c&&(c=d),m>f&&(f=m)}l=Math.max(c-o,f-h),l=l!==0?32767/l:0}return tr(s,a,e,o,h,l,0),a}function Ru(r,t,e,i,n){let s;if(n===b0(r,t,e,i)>0)for(let a=t;a<e;a+=i)s=Jl(a/i|0,r[a],r[a+1],s);else for(let a=e-i;a>=t;a-=i)s=Jl(a/i|0,r[a],r[a+1],s);return s&&ms(s,s.next)&&(ir(s),s=s.next),s}function Dn(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(ms(e,e.next)||Oe(e.prev,e,e.next)===0)){if(ir(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function tr(r,t,e,i,n,s,a){if(!r)return;!a&&s&&M0(r,i,n,s);let o=r;for(;r.prev!==r.next;){const h=r.prev,l=r.next;if(s?c0(r,i,n,s):l0(r)){t.push(h.i,r.i,l.i),ir(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=u0(Dn(r),t),tr(r,t,e,i,n,s,2)):a===2&&f0(r,t,e,i,n,s):tr(Dn(r),t,e,i,n,s,1);break}}}function l0(r){const t=r.prev,e=r,i=r.next;if(Oe(t,e,i)>=0)return!1;const n=t.x,s=e.x,a=i.x,o=t.y,h=e.y,l=i.y,c=Math.min(n,s,a),f=Math.min(o,h,l),u=Math.max(n,s,a),d=Math.max(o,h,l);let m=i.next;for(;m!==t;){if(m.x>=c&&m.x<=u&&m.y>=f&&m.y<=d&&Fs(n,o,s,h,a,l,m.x,m.y)&&Oe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function c0(r,t,e,i){const n=r.prev,s=r,a=r.next;if(Oe(n,s,a)>=0)return!1;const o=n.x,h=s.x,l=a.x,c=n.y,f=s.y,u=a.y,d=Math.min(o,h,l),m=Math.min(c,f,u),x=Math.max(o,h,l),g=Math.max(c,f,u),p=lh(d,m,t,e,i),M=lh(x,g,t,e,i);let v=r.prevZ,_=r.nextZ;for(;v&&v.z>=p&&_&&_.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==n&&v!==a&&Fs(o,c,h,f,l,u,v.x,v.y)&&Oe(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==n&&_!==a&&Fs(o,c,h,f,l,u,_.x,_.y)&&Oe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==n&&v!==a&&Fs(o,c,h,f,l,u,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==n&&_!==a&&Fs(o,c,h,f,l,u,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function u0(r,t){let e=r;do{const i=e.prev,n=e.next.next;!ms(i,n)&&Pu(i,e,e.next,n)&&er(i,n)&&er(n,i)&&(t.push(i.i,e.i,n.i),ir(e),ir(e.next),e=r=n),e=e.next}while(e!==r);return Dn(e)}function f0(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&w0(a,o)){let h=Iu(a,o);a=Dn(a,a.next),h=Dn(h,h.next),tr(a,t,e,i,n,s,0),tr(h,t,e,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function d0(r,t,e,i){const n=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*i,h=s<a-1?t[s+1]*i:r.length,l=Ru(r,o,h,i,!1);l===l.next&&(l.steiner=!0),n.push(v0(l))}n.sort(p0);for(let s=0;s<n.length;s++)e=m0(n[s],e);return e}function p0(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function m0(r,t){const e=g0(r,t);if(!e)return t;const i=Iu(e,r);return Dn(i,i.next),Dn(e,e.next)}function g0(r,t){let e=t;const i=r.x,n=r.y;let s=-1/0,a;if(ms(r,e))return e;do{if(ms(r,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const f=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>s&&(s=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,h=a.x,l=a.y;let c=1/0;e=a;do{if(i>=e.x&&e.x>=h&&i!==e.x&&Cu(n<l?i:s,n,h,l,n<l?s:i,n,e.x,e.y)){const f=Math.abs(n-e.y)/(i-e.x);er(e,r)&&(f<c||f===c&&(e.x>a.x||e.x===a.x&&x0(a,e)))&&(a=e,c=f)}e=e.next}while(e!==o);return a}function x0(r,t){return Oe(r.prev,r,t.prev)<0&&Oe(t.next,r,r.next)<0}function M0(r,t,e,i){let n=r;do n.z===0&&(n.z=lh(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,_0(n)}function _0(r){let t,e=1;do{let i=r,n;r=null;let s=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let h=e;for(;o>0||h>0&&a;)o!==0&&(h===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,h--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=a}s.nextZ=null,e*=2}while(t>1);return r}function lh(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function v0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Cu(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function Fs(r,t,e,i,n,s,a,o){return!(r===a&&t===o)&&Cu(r,t,e,i,n,s,a,o)}function w0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!S0(r,t)&&(er(r,t)&&er(t,r)&&y0(r,t)&&(Oe(r.prev,r,t.prev)||Oe(r,t.prev,t))||ms(r,t)&&Oe(r.prev,r,r.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ms(r,t){return r.x===t.x&&r.y===t.y}function Pu(r,t,e,i){const n=zr(Oe(r,t,e)),s=zr(Oe(r,t,i)),a=zr(Oe(e,i,r)),o=zr(Oe(e,i,t));return!!(n!==s&&a!==o||n===0&&Dr(r,e,t)||s===0&&Dr(r,i,t)||a===0&&Dr(e,r,i)||o===0&&Dr(e,t,i))}function Dr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function zr(r){return r>0?1:r<0?-1:0}function S0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Pu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function er(r,t){return Oe(r.prev,r,r.next)<0?Oe(r,t,r.next)>=0&&Oe(r,r.prev,t)>=0:Oe(r,t,r.prev)<0||Oe(r,r.next,t)<0}function y0(r,t){let e=r,i=!1;const n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function Iu(r,t){const e=ch(r.i,r.x,r.y),i=ch(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Jl(r,t,e,i){const n=ch(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ir(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ch(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function b0(r,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}class T0{static triangulate(t,e,i=2){return h0(t,e,i)}}class ji{static area(t){const e=t.length;let i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return ji.area(t)<0}static triangulateShape(t,e){const i=[],n=[],s=[];Kl(t),$l(i,t);let a=t.length;e.forEach(Kl);for(let h=0;h<e.length;h++)n.push(a),a+=e[h].length,$l(i,e[h]);const o=T0.triangulate(i,n);for(let h=0;h<o.length;h+=3)s.push(o.slice(h,h+3));return s}}function Kl(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function $l(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Hi extends Ie{constructor(t=new vi([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],s=[];for(let o=0,h=t.length;o<h;o++){const l=t[o];a(l)}this.setAttribute("position",new re(n,3)),this.setAttribute("uv",new re(s,2)),this.computeVertexNormals();function a(o){const h=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:E0;let v,_=!1,b,T,R,w;if(p){v=p.getSpacedPoints(c),_=!0,u=!1;const st=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(c,st),T=new N,R=new N,w=new N}u||(g=0,d=0,m=0,x=0);const A=o.extractPoints(l);let P=A.shape;const z=A.holes;if(!ji.isClockWise(P)){P=P.reverse();for(let st=0,ft=z.length;st<ft;st++){const gt=z[st];ji.isClockWise(gt)&&(z[st]=gt.reverse())}}function F(st){const gt=10000000000000001e-36;let xt=st[0];for(let _t=1;_t<=st.length;_t++){const Jt=_t%st.length,Yt=st[Jt],ee=Yt.x-xt.x,ne=Yt.y-xt.y,U=ee*ee+ne*ne,Me=Math.max(Math.abs(Yt.x),Math.abs(Yt.y),Math.abs(xt.x),Math.abs(xt.y)),oe=gt*Me*Me;if(U<=oe){st.splice(Jt,1),_t--;continue}xt=Yt}}F(P),z.forEach(F);const D=z.length,O=P;for(let st=0;st<D;st++){const ft=z[st];P=P.concat(ft)}function $(st,ft,gt){return ft||_e("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ft,gt)}const k=P.length;function it(st,ft,gt){let xt,_t,Jt;const Yt=st.x-ft.x,ee=st.y-ft.y,ne=gt.x-st.x,U=gt.y-st.y,Me=Yt*Yt+ee*ee,oe=Yt*U-ee*ne;if(Math.abs(oe)>Number.EPSILON){const I=Math.sqrt(Me),y=Math.sqrt(ne*ne+U*U),V=ft.x-ee/I,q=ft.y+Yt/I,Q=gt.x-U/y,pt=gt.y+ne/y,Mt=((Q-V)*U-(pt-q)*ne)/(Yt*U-ee*ne);xt=V+Yt*Mt-st.x,_t=q+ee*Mt-st.y;const tt=xt*xt+_t*_t;if(tt<=2)return new ot(xt,_t);Jt=Math.sqrt(tt/2)}else{let I=!1;Yt>Number.EPSILON?ne>Number.EPSILON&&(I=!0):Yt<-Number.EPSILON?ne<-Number.EPSILON&&(I=!0):Math.sign(ee)===Math.sign(U)&&(I=!0),I?(xt=-ee,_t=Yt,Jt=Math.sqrt(Me)):(xt=Yt,_t=ee,Jt=Math.sqrt(Me/2))}return new ot(xt/Jt,_t/Jt)}const Y=[];for(let st=0,ft=O.length,gt=ft-1,xt=st+1;st<ft;st++,gt++,xt++)gt===ft&&(gt=0),xt===ft&&(xt=0),Y[st]=it(O[st],O[gt],O[xt]);const et=[];let nt,Nt=Y.concat();for(let st=0,ft=D;st<ft;st++){const gt=z[st];nt=[];for(let xt=0,_t=gt.length,Jt=_t-1,Yt=xt+1;xt<_t;xt++,Jt++,Yt++)Jt===_t&&(Jt=0),Yt===_t&&(Yt=0),nt[xt]=it(gt[xt],gt[Jt],gt[Yt]);et.push(nt),Nt=Nt.concat(nt)}let X;if(g===0)X=ji.triangulateShape(O,z);else{const st=[],ft=[];for(let gt=0;gt<g;gt++){const xt=gt/g,_t=d*Math.cos(xt*Math.PI/2),Jt=m*Math.sin(xt*Math.PI/2)+x;for(let Yt=0,ee=O.length;Yt<ee;Yt++){const ne=$(O[Yt],Y[Yt],Jt);mt(ne.x,ne.y,-_t),xt===0&&st.push(ne)}for(let Yt=0,ee=D;Yt<ee;Yt++){const ne=z[Yt];nt=et[Yt];const U=[];for(let Me=0,oe=ne.length;Me<oe;Me++){const I=$(ne[Me],nt[Me],Jt);mt(I.x,I.y,-_t),xt===0&&U.push(I)}xt===0&&ft.push(U)}}X=ji.triangulateShape(st,ft)}const ct=X.length,ht=m+x;for(let st=0;st<k;st++){const ft=u?$(P[st],Nt[st],ht):P[st];_?(R.copy(b.normals[0]).multiplyScalar(ft.x),T.copy(b.binormals[0]).multiplyScalar(ft.y),w.copy(v[0]).add(R).add(T),mt(w.x,w.y,w.z)):mt(ft.x,ft.y,0)}for(let st=1;st<=c;st++)for(let ft=0;ft<k;ft++){const gt=u?$(P[ft],Nt[ft],ht):P[ft];_?(R.copy(b.normals[st]).multiplyScalar(gt.x),T.copy(b.binormals[st]).multiplyScalar(gt.y),w.copy(v[st]).add(R).add(T),mt(w.x,w.y,w.z)):mt(gt.x,gt.y,f/c*st)}for(let st=g-1;st>=0;st--){const ft=st/g,gt=d*Math.cos(ft*Math.PI/2),xt=m*Math.sin(ft*Math.PI/2)+x;for(let _t=0,Jt=O.length;_t<Jt;_t++){const Yt=$(O[_t],Y[_t],xt);mt(Yt.x,Yt.y,f+gt)}for(let _t=0,Jt=z.length;_t<Jt;_t++){const Yt=z[_t];nt=et[_t];for(let ee=0,ne=Yt.length;ee<ne;ee++){const U=$(Yt[ee],nt[ee],xt);_?mt(U.x,U.y+v[c-1].y,v[c-1].x+gt):mt(U.x,U.y,f+gt)}}}ut(),G();function ut(){const st=n.length/3;if(u){let ft=0,gt=k*ft;for(let xt=0;xt<ct;xt++){const _t=X[xt];Bt(_t[2]+gt,_t[1]+gt,_t[0]+gt)}ft=c+g*2,gt=k*ft;for(let xt=0;xt<ct;xt++){const _t=X[xt];Bt(_t[0]+gt,_t[1]+gt,_t[2]+gt)}}else{for(let ft=0;ft<ct;ft++){const gt=X[ft];Bt(gt[2],gt[1],gt[0])}for(let ft=0;ft<ct;ft++){const gt=X[ft];Bt(gt[0]+k*c,gt[1]+k*c,gt[2]+k*c)}}i.addGroup(st,n.length/3-st,0)}function G(){const st=n.length/3;let ft=0;Z(O,ft),ft+=O.length;for(let gt=0,xt=z.length;gt<xt;gt++){const _t=z[gt];Z(_t,ft),ft+=_t.length}i.addGroup(st,n.length/3-st,1)}function Z(st,ft){let gt=st.length;for(;--gt>=0;){const xt=gt;let _t=gt-1;_t<0&&(_t=st.length-1);for(let Jt=0,Yt=c+g*2;Jt<Yt;Jt++){const ee=k*Jt,ne=k*(Jt+1),U=ft+xt+ee,Me=ft+_t+ee,oe=ft+_t+ne,I=ft+xt+ne;Tt(U,Me,oe,I)}}}function mt(st,ft,gt){h.push(st),h.push(ft),h.push(gt)}function Bt(st,ft,gt){St(st),St(ft),St(gt);const xt=n.length/3,_t=M.generateTopUV(i,n,xt-3,xt-2,xt-1);fe(_t[0]),fe(_t[1]),fe(_t[2])}function Tt(st,ft,gt,xt){St(st),St(ft),St(xt),St(ft),St(gt),St(xt);const _t=n.length/3,Jt=M.generateSideWallUV(i,n,_t-6,_t-3,_t-2,_t-1);fe(Jt[0]),fe(Jt[1]),fe(Jt[3]),fe(Jt[1]),fe(Jt[2]),fe(Jt[3])}function St(st){n.push(h[st*3+0]),n.push(h[st*3+1]),n.push(h[st*3+2])}function fe(st){s.push(st.x),s.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return A0(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];i.push(o)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new fa[n.type]().fromJSON(n)),new Hi(i,t.options)}}const E0={generateTopUV:function(r,t,e,i,n){const s=t[e*3],a=t[e*3+1],o=t[i*3],h=t[i*3+1],l=t[n*3],c=t[n*3+1];return[new ot(s,a),new ot(o,h),new ot(l,c)]},generateSideWallUV:function(r,t,e,i,n,s){const a=t[e*3],o=t[e*3+1],h=t[e*3+2],l=t[i*3],c=t[i*3+1],f=t[i*3+2],u=t[n*3],d=t[n*3+1],m=t[n*3+2],x=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(o-c)<Math.abs(a-l)?[new ot(a,1-h),new ot(l,1-f),new ot(u,1-m),new ot(x,1-p)]:[new ot(o,1-h),new ot(c,1-f),new ot(d,1-m),new ot(g,1-p)]}};function A0(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){const s=r[i];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Vh extends ga{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vh(t.radius,t.detail)}}class xa extends Ie{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=me(n,0,Math.PI*2);const s=[],a=[],o=[],h=[],l=[],c=1/e,f=new N,u=new ot,d=new N,m=new N,x=new N;let g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),h.push(d.x,d.y,d.z);break;case t.length-1:h.push(x.x,x.y,x.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),h.push(d.x,d.y,d.z),x.copy(m)}for(let M=0;M<=e;M++){const v=i+M*c*n,_=Math.sin(v),b=Math.cos(v);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*_,f.y=t[T].y,f.z=t[T].x*b,a.push(f.x,f.y,f.z),u.x=M/e,u.y=T/(t.length-1),o.push(u.x,u.y);const R=h[3*T+0]*_,w=h[3*T+1],A=h[3*T+0]*b;l.push(R,w,A)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){const _=v+M*t.length,b=_,T=_+t.length,R=_+t.length+1,w=_+1;s.push(b,T,w),s.push(R,w,T)}this.setIndex(s),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xa(t.points,t.segments,t.phiStart,t.phiLength)}}class Se extends ga{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Se(t.radius,t.detail)}}class Ge extends Ie{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),h=Math.floor(n),l=o+1,c=h+1,f=t/o,u=e/h,d=[],m=[],x=[],g=[];for(let p=0;p<c;p++){const M=p*u-a;for(let v=0;v<l;v++){const _=v*f-s;m.push(_,-M,0),x.push(0,0,1),g.push(v/o),g.push(1-p/h)}}for(let p=0;p<h;p++)for(let M=0;M<o;M++){const v=M+l*p,_=M+l*(p+1),b=M+1+l*(p+1),T=M+1+l*p;d.push(v,_,T),d.push(_,b,T)}this.setIndex(d),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ne extends Ie{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],h=[],l=[],c=[];let f=t;const u=(e-t)/n,d=new N,m=new ot;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){const p=s+g/i*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),h.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,c.push(m.x,m.y)}f+=u}for(let x=0;x<n;x++){const g=x*(i+1);for(let p=0;p<i;p++){const M=p+g,v=M,_=M+i+1,b=M+i+2,T=M+1;o.push(v,_,T),o.push(_,b,T)}}this.setIndex(o),this.setAttribute("position",new re(h,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ma extends Ie{constructor(t=new vi([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],s=[],a=[];let o=0,h=0;if(Array.isArray(t)===!1)l(t);else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(o,h,c),o+=h,h=0;this.setIndex(i),this.setAttribute("position",new re(n,3)),this.setAttribute("normal",new re(s,3)),this.setAttribute("uv",new re(a,2));function l(c){const f=n.length/3,u=c.extractPoints(e);let d=u.shape;const m=u.holes;ji.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const M=m[g];ji.isClockWise(M)===!0&&(m[g]=M.reverse())}const x=ji.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const M=m[g];d=d.concat(M)}for(let g=0,p=d.length;g<p;g++){const M=d[g];n.push(M.x,M.y,0),s.push(0,0,1),a.push(M.x,M.y)}for(let g=0,p=x.length;g<p;g++){const M=x[g],v=M[0]+f,_=M[1]+f,b=M[2]+f;i.push(v,_,b),h+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return R0(e,t)}static fromJSON(t,e){const i=[];for(let n=0,s=t.shapes.length;n<s;n++){const a=e[t.shapes[n]];i.push(a)}return new Ma(i,t.curveSegments)}}function R0(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,i=r.length;e<i;e++){const n=r[e];t.shapes.push(n.uuid)}else t.shapes.push(r.uuid);return t}class wt extends Ie{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const h=Math.min(a+o,Math.PI);let l=0;const c=[],f=new N,u=new N,d=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){const M=[],v=p/i,_=a+v*o,b=t*Math.cos(_),T=Math.sqrt(t*t-b*b);let R=0;p===0&&a===0?R=.5/e:p===i&&h===Math.PI&&(R=-.5/e);for(let w=0;w<=e;w++){const A=w/e,P=n+A*s;f.x=-T*Math.cos(P),f.y=b,f.z=T*Math.sin(P),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(A+R,1-v),M.push(l++)}c.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const v=c[p][M+1],_=c[p][M],b=c[p+1][M],T=c[p+1][M+1];(p!==0||a>0)&&d.push(v,_,T),(p!==i-1||h<Math.PI)&&d.push(_,b,T)}this.setIndex(d),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ie extends Ie{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const h=[],l=[],c=[],f=[],u=new N,d=new N,m=new N;for(let x=0;x<=i;x++){const g=a+x/i*o;for(let p=0;p<=n;p++){const M=p/n*s;d.x=(t+e*Math.cos(g))*Math.cos(M),d.y=(t+e*Math.cos(g))*Math.sin(M),d.z=e*Math.sin(g),l.push(d.x,d.y,d.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),m.subVectors(d,u).normalize(),c.push(m.x,m.y,m.z),f.push(p/n),f.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=n;g++){const p=(n+1)*x+g-1,M=(n+1)*(x-1)+g-1,v=(n+1)*(x-1)+g,_=(n+1)*x+g;h.push(p,M,_),h.push(M,v,_)}this.setIndex(h),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Wh extends Ie{constructor(t=new Tu(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new N,h=new N,l=new ot;let c=new N;const f=[],u=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(d,2));function x(){for(let v=0;v<e;v++)g(v);g(s===!1?e:0),M(),p()}function g(v){c=t.getPointAt(v/e,c);const _=a.normals[v],b=a.binormals[v];for(let T=0;T<=n;T++){const R=T/n*Math.PI*2,w=Math.sin(R),A=-Math.cos(R);h.x=A*_.x+w*b.x,h.y=A*_.y+w*b.y,h.z=A*_.z+w*b.z,h.normalize(),u.push(h.x,h.y,h.z),o.x=c.x+i*h.x,o.y=c.y+i*h.y,o.z=c.z+i*h.z,f.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=e;v++)for(let _=1;_<=n;_++){const b=(n+1)*(v-1)+(_-1),T=(n+1)*v+(_-1),R=(n+1)*v+_,w=(n+1)*(v-1)+_;m.push(b,T,w),m.push(T,R,w)}}function M(){for(let v=0;v<=e;v++)for(let _=0;_<=n;_++)l.x=v/e,l.y=_/n,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Wh(new fa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function gs(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];if(Ql(n))n.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Ql(n[0])){const s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function hi(r){const t={};for(let e=0;e<r.length;e++){const i=gs(r[e]);for(const n in i)t[n]=i[n]}return t}function Ql(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function C0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Lu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const nr={clone:gs,merge:hi};var P0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=C0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Ot().setHex(n.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(n.value);break;case"v3":this.uniforms[i].value=new N().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Ue().fromArray(n.value);break;case"m3":this.uniforms[i].value=new ae().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ae().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Du extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jl extends gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Us extends gn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class L0 extends gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class D0 extends gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class _a extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class z0 extends _a{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const so=new Ae,tc=new N,ec=new N;class zu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kh,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(tc),ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ec),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){so.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(so,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,h=n?n.x/s.x:0,l=n?n.y/s.y:0;t.coordinateSystem===$s||t.reversedDepth?e.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nr=new N,Fr=new Ms,Ii=new N;class Nu extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Nr,Fr,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nr,Fr,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Nr,Fr,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nr,Fr,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fn=new N,ic=new ot,nc=new ot;class pi extends Nu{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fn.x,fn.y).multiplyScalar(-t/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fn.x,fn.y).multiplyScalar(-t/fn.z)}getViewSize(t,e){return this.getViewBounds(t,ic,nc),e.subVectors(nc,ic)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/h,e-=a.offsetY*i/l,n*=a.width/h,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class N0 extends zu{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class vs extends _a{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new N0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class va extends Nu{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,h=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=c*this.view.offsetY,h=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class F0 extends zu{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uh extends _a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new F0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class U0 extends _a{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const jn=-90,ts=1;class O0 extends qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new pi(jn,ts,t,e);n.layers=this.layers,this.add(n);const s=new pi(jn,ts,t,e);s.layers=this.layers,this.add(s);const a=new pi(jn,ts,t,e);a.layers=this.layers,this.add(a);const o=new pi(jn,ts,t,e);o.layers=this.layers,this.add(o);const h=new pi(jn,ts,t,e);h.layers=this.layers,this.add(h);const l=new pi(jn,ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,h]=e;for(const l of e)this.remove(l);if(t===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===$s)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,h,l,c]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,4,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(f,u,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class B0 extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class k0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=H0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function H0(){this._document.hidden===!1&&this.reset()}const sc=new Ae;class G0{constructor(t,e,i=0,n=1/0){this.ray=new Bh(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Oh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):_e("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sc),this}intersectObject(t,e=!0,i=[]){return fh(t,this,i,e),i.sort(rc),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)fh(t[n],this,i,e);return i.sort(rc),i}}function rc(r,t){return r.distance-t.distance}function fh(r,t,e,i){let n=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)fh(s[a],t,e,!0)}}const $h=class $h{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};$h.prototype.isMatrix2=!0;let ac=$h;function oc(r,t,e,i){const n=V0(i);switch(e){case hu:return r*t;case Ph:return r*t/n.components*n.byteLength;case Ih:return r*t/n.components*n.byteLength;case Ln:return r*t*2/n.components*n.byteLength;case Lh:return r*t*2/n.components*n.byteLength;case lu:return r*t*3/n.components*n.byteLength;case Ri:return r*t*4/n.components*n.byteLength;case Dh:return r*t*4/n.components*n.byteLength;case Zr:case Jr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Kr:case $r:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Do:case No:return Math.max(r,16)*Math.max(t,8)/4;case Lo:case zo:return Math.max(r,8)*Math.max(t,8)/2;case Fo:case Uo:case Bo:case ko:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Oo:case sa:case Ho:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case qo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case jo:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case th:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case eh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ih:case nh:case sh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case rh:case ah:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ra:case oh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function V0(r){switch(r){case gi:case su:return{byteLength:1,components:1};case Js:case ru:case ci:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case Gi:case Ah:case Ai:return{byteLength:4,components:1};case au:case ou:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fu(){let r=null,t=!1,e=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function W0(r){const t=new WeakMap;function e(o,h){const l=o.array,c=o.usage,f=l.byteLength,u=r.createBuffer();r.bindBuffer(h,u),r.bufferData(h,l,c),o.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,h,l){const c=h.array,f=h.updateRanges;if(r.bindBuffer(l,o),f.length===0)r.bufferSubData(l,0,c);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const x=f[d];r.bufferSubData(l,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}h.clearUpdateRanges()}h.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=t.get(o);h&&(r.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,h),l.version=o.version}}return{get:n,remove:s,update:a}}var X0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q0=`#ifdef USE_ALPHAHASH
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
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
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
#endif`,Q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j0=`#ifdef USE_BATCHING
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
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sm=`#ifdef USE_IRIDESCENCE
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
#endif`,rm=`#ifdef USE_BUMPMAP
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pm=`#define PI 3.141592653589793
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
} // validated`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ym=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
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
}`,Dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Um=`#ifdef USE_ENVMAP
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
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,Vm=`uniform sampler2D dfgLUT;
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
}`,Wm=`
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eg=`#if defined( USE_POINTS_UV )
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
#endif`,ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
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
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pg=`float getShadowMask() {
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
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Og=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`#include <common>
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
}`,Qg=`#if DEPTH_PACKING == 3200
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
}`,jg=`#define DISTANCE
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
}`,tx=`#define DISTANCE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`uniform float scale;
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#include <common>
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#define LAMBERT
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
}`,hx=`#define LAMBERT
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
}`,lx=`#define MATCAP
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
}`,cx=`#define MATCAP
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
}`,ux=`#define NORMAL
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
}`,fx=`#define NORMAL
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
}`,dx=`#define PHONG
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
}`,px=`#define PHONG
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
}`,mx=`#define STANDARD
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
}`,gx=`#define STANDARD
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
}`,xx=`#define TOON
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
}`,Mx=`#define TOON
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
}`,_x=`uniform float size;
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
}`,vx=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Sx=`uniform vec3 color;
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
}`,yx=`uniform float rotation;
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
}`,bx=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:X0,alphahash_pars_fragment:q0,alphamap_fragment:Y0,alphamap_pars_fragment:Z0,alphatest_fragment:J0,alphatest_pars_fragment:K0,aomap_fragment:$0,aomap_pars_fragment:Q0,batching_pars_vertex:j0,batching_vertex:tm,begin_vertex:em,beginnormal_vertex:im,bsdfs:nm,iridescence_fragment:sm,bumpmap_pars_fragment:rm,clipping_planes_fragment:am,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:hm,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:um,color_pars_vertex:fm,color_vertex:dm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:xm,displacementmap_vertex:Mm,emissivemap_fragment:_m,emissivemap_pars_fragment:vm,colorspace_fragment:wm,colorspace_pars_fragment:Sm,envmap_fragment:ym,envmap_common_pars_fragment:bm,envmap_pars_fragment:Tm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Um,envmap_vertex:Am,fog_vertex:Rm,fog_pars_vertex:Cm,fog_fragment:Pm,fog_pars_fragment:Im,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Dm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Fm,lights_toon_fragment:Om,lights_toon_pars_fragment:Bm,lights_phong_fragment:km,lights_phong_pars_fragment:Hm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Vm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:qm,lightprobes_pars_fragment:Ym,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:$m,map_fragment:Qm,map_pars_fragment:jm,map_particle_fragment:tg,map_particle_pars_fragment:eg,metalnessmap_fragment:ig,metalnessmap_pars_fragment:ng,morphinstance_vertex:sg,morphcolor_vertex:rg,morphnormal_vertex:ag,morphtarget_pars_vertex:og,morphtarget_vertex:hg,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:ug,normal_pars_vertex:fg,normal_vertex:dg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:xg,iridescence_pars_fragment:Mg,opaque_fragment:_g,packing:vg,premultiplied_alpha_fragment:wg,project_vertex:Sg,dithering_fragment:yg,dithering_pars_fragment:bg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Rg,shadowmap_vertex:Cg,shadowmask_pars_fragment:Pg,skinbase_vertex:Ig,skinning_pars_vertex:Lg,skinning_vertex:Dg,skinnormal_vertex:zg,specularmap_fragment:Ng,specularmap_pars_fragment:Fg,tonemapping_fragment:Ug,tonemapping_pars_fragment:Og,transmission_fragment:Bg,transmission_pars_fragment:kg,uv_pars_fragment:Hg,uv_pars_vertex:Gg,uv_vertex:Vg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:Zg,cube_vert:Jg,cube_frag:Kg,depth_vert:$g,depth_frag:Qg,distance_vert:jg,distance_frag:tx,equirect_vert:ex,equirect_frag:ix,linedashed_vert:nx,linedashed_frag:sx,meshbasic_vert:rx,meshbasic_frag:ax,meshlambert_vert:ox,meshlambert_frag:hx,meshmatcap_vert:lx,meshmatcap_frag:cx,meshnormal_vert:ux,meshnormal_frag:fx,meshphong_vert:dx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:gx,meshtoon_vert:xx,meshtoon_frag:Mx,points_vert:_x,points_frag:vx,shadow_vert:wx,shadow_frag:Sx,sprite_vert:yx,sprite_frag:bx},Ct={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Ni={basic:{uniforms:hi([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:hi([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:hi([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:hi([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:hi([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Ot(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:hi([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:hi([Ct.points,Ct.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:hi([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:hi([Ct.common,Ct.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:hi([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:hi([Ct.sprite,Ct.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:hi([Ct.common,Ct.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:hi([Ct.lights,Ct.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ni.physical={uniforms:hi([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Ur={r:0,b:0,g:0},Tx=new Ae,Uu=new ae;Uu.set(-1,0,0,0,1,0,0,0,1);function Ex(r,t,e,i,n,s){const a=new Ot(0);let o=n===!0?0:1,h,l,c=null,f=0,u=null;function d(M){let v=M.isScene===!0?M.background:null;if(v&&v.isTexture){const _=M.backgroundBlurriness>0;v=t.get(v,_)}return v}function m(M){let v=!1;const _=d(M);_===null?g(a,o):_&&_.isColor&&(g(_,1),v=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(M,v){const _=d(v);_&&(_.isCubeTexture||_.mapping===ma)?(l===void 0&&(l=new S(new It(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:gs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Uu),l.material.toneMapped=xe.getTransfer(_.colorSpace)!==Te,(c!==_||f!==_.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,c=_,f=_.version,u=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new S(new Ge(2,2),new ni({name:"BackgroundMaterial",uniforms:gs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=xe.getTransfer(_.colorSpace)!==Te,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||f!==_.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,c=_,f=_.version,u=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function g(M,v){M.getRGB(Ur,Lu(r)),e.buffers.color.setClear(Ur.r,Ur.g,Ur.b,v,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),o=v,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:x,dispose:p}}function Ax(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,a=!1;function o(z,B,F,D,O){let $=!1;const k=f(z,D,F,B);s!==k&&(s=k,l(s.object)),$=d(z,D,F,O),$&&m(z,D,F,O),O!==null&&t.update(O,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(z,B,F,D),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function h(){return r.createVertexArray()}function l(z){return r.bindVertexArray(z)}function c(z){return r.deleteVertexArray(z)}function f(z,B,F,D){const O=D.wireframe===!0;let $=i[B.id];$===void 0&&($={},i[B.id]=$);const k=z.isInstancedMesh===!0?z.id:0;let it=$[k];it===void 0&&(it={},$[k]=it);let Y=it[F.id];Y===void 0&&(Y={},it[F.id]=Y);let et=Y[O];return et===void 0&&(et=u(h()),Y[O]=et),et}function u(z){const B=[],F=[],D=[];for(let O=0;O<e;O++)B[O]=0,F[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:F,attributeDivisors:D,object:z,attributes:{},index:null}}function d(z,B,F,D){const O=s.attributes,$=B.attributes;let k=0;const it=F.getAttributes();for(const Y in it)if(it[Y].location>=0){const nt=O[Y];let Nt=$[Y];if(Nt===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(Nt=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(Nt=z.instanceColor)),nt===void 0||nt.attribute!==Nt||Nt&&nt.data!==Nt.data)return!0;k++}return s.attributesNum!==k||s.index!==D}function m(z,B,F,D){const O={},$=B.attributes;let k=0;const it=F.getAttributes();for(const Y in it)if(it[Y].location>=0){let nt=$[Y];nt===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(nt=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(nt=z.instanceColor));const Nt={};Nt.attribute=nt,nt&&nt.data&&(Nt.data=nt.data),O[Y]=Nt,k++}s.attributes=O,s.attributesNum=k,s.index=D}function x(){const z=s.newAttributes;for(let B=0,F=z.length;B<F;B++)z[B]=0}function g(z){p(z,0)}function p(z,B){const F=s.newAttributes,D=s.enabledAttributes,O=s.attributeDivisors;F[z]=1,D[z]===0&&(r.enableVertexAttribArray(z),D[z]=1),O[z]!==B&&(r.vertexAttribDivisor(z,B),O[z]=B)}function M(){const z=s.newAttributes,B=s.enabledAttributes;for(let F=0,D=B.length;F<D;F++)B[F]!==z[F]&&(r.disableVertexAttribArray(F),B[F]=0)}function v(z,B,F,D,O,$,k){k===!0?r.vertexAttribIPointer(z,B,F,O,$):r.vertexAttribPointer(z,B,F,D,O,$)}function _(z,B,F,D){x();const O=D.attributes,$=F.getAttributes(),k=B.defaultAttributeValues;for(const it in $){const Y=$[it];if(Y.location>=0){let et=O[it];if(et===void 0&&(it==="instanceMatrix"&&z.instanceMatrix&&(et=z.instanceMatrix),it==="instanceColor"&&z.instanceColor&&(et=z.instanceColor)),et!==void 0){const nt=et.normalized,Nt=et.itemSize,X=t.get(et);if(X===void 0)continue;const ct=X.buffer,ht=X.type,ut=X.bytesPerElement,G=ht===r.INT||ht===r.UNSIGNED_INT||et.gpuType===Ah;if(et.isInterleavedBufferAttribute){const Z=et.data,mt=Z.stride,Bt=et.offset;if(Z.isInstancedInterleavedBuffer){for(let Tt=0;Tt<Y.locationSize;Tt++)p(Y.location+Tt,Z.meshPerAttribute);z.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Tt=0;Tt<Y.locationSize;Tt++)g(Y.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,ct);for(let Tt=0;Tt<Y.locationSize;Tt++)v(Y.location+Tt,Nt/Y.locationSize,ht,nt,mt*ut,(Bt+Nt/Y.locationSize*Tt)*ut,G)}else{if(et.isInstancedBufferAttribute){for(let Z=0;Z<Y.locationSize;Z++)p(Y.location+Z,et.meshPerAttribute);z.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Z=0;Z<Y.locationSize;Z++)g(Y.location+Z);r.bindBuffer(r.ARRAY_BUFFER,ct);for(let Z=0;Z<Y.locationSize;Z++)v(Y.location+Z,Nt/Y.locationSize,ht,nt,Nt*ut,Nt/Y.locationSize*Z*ut,G)}}else if(k!==void 0){const nt=k[it];if(nt!==void 0)switch(nt.length){case 2:r.vertexAttrib2fv(Y.location,nt);break;case 3:r.vertexAttrib3fv(Y.location,nt);break;case 4:r.vertexAttrib4fv(Y.location,nt);break;default:r.vertexAttrib1fv(Y.location,nt)}}}}M()}function b(){A();for(const z in i){const B=i[z];for(const F in B){const D=B[F];for(const O in D){const $=D[O];for(const k in $)c($[k].object),delete $[k];delete D[O]}}delete i[z]}}function T(z){if(i[z.id]===void 0)return;const B=i[z.id];for(const F in B){const D=B[F];for(const O in D){const $=D[O];for(const k in $)c($[k].object),delete $[k];delete D[O]}}delete i[z.id]}function R(z){for(const B in i){const F=i[B];for(const D in F){const O=F[D];if(O[z.id]===void 0)continue;const $=O[z.id];for(const k in $)c($[k].object),delete $[k];delete O[z.id]}}}function w(z){for(const B in i){const F=i[B],D=z.isInstancedMesh===!0?z.id:0,O=F[D];if(O!==void 0){for(const $ in O){const k=O[$];for(const it in k)c(k[it].object),delete k[it];delete O[$]}delete F[D],Object.keys(F).length===0&&delete i[B]}}}function A(){P(),a=!0,s!==n&&(s=n,l(s.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Rx(r,t,e){let i;function n(h){i=h}function s(h,l){r.drawArrays(i,h,l),e.update(l,i,1)}function a(h,l,c){c!==0&&(r.drawArraysInstanced(i,h,l,c),e.update(l,i,c))}function o(h,l,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,l,0,c);let u=0;for(let d=0;d<c;d++)u+=l[d];e.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Cx(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){return!(R!==Ri&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const w=R===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==gi&&R!==Ai&&!w&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function h(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=h(l);c!==l&&(se("WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,maxSamples:b,samples:T}}function Px(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Ki,o=new ae,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||n;return n=u,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=c(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=r.get(f);if(!n||m===null||m.length===0||s&&!g)s?c(null):l();else{const M=s?0:i,v=M*4;let _=p.clippingState||null;h.value=_,_=c(m,u,v,d);for(let b=0;b!==v;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,u,d,m){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=h.value,m!==!0||g===null){const p=d+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=d;v!==x;++v,_+=4)a.copy(f[v]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}h.value=g,h.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const as=4,Ix=6,Lx=20,Dx=256,Ls=new va,hc=new Ot;let ro=null,ao=0,oo=0,ho=!1;const zx=new N,Sn=new N;class lc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:a=256,position:o=zx}=s;ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,i,n,h,o),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ro,ao,oo),this._renderer.xr.enabled=ho,t.scissorTest=!1,es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===In||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:ci,format:Ri,colorSpace:oa,depthBuffer:!1},n=cc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cc(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Nx(s)),this._blurMaterial=Ux(s,t,e),this._ggxMaterial=Fx(s,t,e)}return n}_compileMaterial(t){const e=new S(new Ie,t);this._renderer.compile(e,Ls)}_sceneToCubeUV(t,e,i,n,s){const h=new pi(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(hc),f.toneMapping=Bi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new S(new It,new at({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(hc),p=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(h.up.set(0,l[v],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+c[v],s.y,s.z)):_===1?(h.up.set(0,0,l[v]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+c[v],s.z)):(h.up.set(0,l[v],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+c[v]));const b=this._cubeSize;es(n,_*b,v>2?b:0,b,b),f.setRenderTarget(n),p&&f.render(x,h),f.render(t,h)}f.toneMapping=d,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===In||t.mapping===ps;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());const s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const h=this._cubeSize;es(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(a,Ls)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const h=a.uniforms,l=i/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-c*c),u=l*1.25,d=f*u,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-as?i-m+as:0),p=4*(this._cubeSize-x);h.envMap.value=t.texture,h.roughness.value=d,h.mipInt.value=m-e,es(s,g,p,3*x,2*x),n.setRenderTarget(s),n.render(o,Ls),h.envMap.value=s.texture,h.roughness.value=0,h.mipInt.value=m-i,es(t,g,p,3*x,2*x),n.setRenderTarget(t),n.render(o,Ls)}_blur(t,e,i,n){const s=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,a),this._blurPass(s,t,i,i,a)}_blurPass(t,e,i,n,s){const a=this._renderer,o=this._blurMaterial,h=this._lodMeshes[n];h.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const c=this._sizeLods[n],f=3*c*(n>this._lodMax-as?n-this._lodMax+as:0),u=4*(this._cubeSize-c);es(e,f,u,3*c,2*c),a.setRenderTarget(e),a.render(h,Ls)}}function Nx(r){const t=[],e=[];let i=r;const n=r-as+1+Ix;for(let s=0;s<n;s++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),h=-o,l=1+o,c=[h,h,l,h,l,l,h,h,l,l,h,l],f=6,u=6,d=3,m=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let p=0;p<f;p++){const M=p%3*2/3-1,v=p>2?0:-1,_=[M,v,0,M+2/3,v,0,M+2/3,v+1,0,M,v,0,M+2/3,v+1,0,M,v+1,0];m.set(_,d*u*p);for(let b=0;b<u;b++){const T=c[b*2]*2-1,R=c[b*2+1]*2-1;p===0?Sn.set(1,R,T):p===1?Sn.set(-T,1,-R):p===2?Sn.set(-T,R,1):p===3?Sn.set(-1,R,-T):p===4?Sn.set(-T,-1,R):Sn.set(T,R,-1),Sn.toArray(x,(p*u+b)*d)}}const g=new Ie;g.setAttribute("position",new ui(m,d)),g.setAttribute("outputDirection",new ui(x,d)),e.push(new S(g,null)),i>as&&i--}return{lodMeshes:e,sizeLods:t}}function cc(r,t,e){const i=new li(r,t,e);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Fx(r,t,e){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ux(r,t,e){return new ni({name:"SphericalGaussianBlur",defines:{SAMPLES:Lx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function uc(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function fc(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function wa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ou extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new _u(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new It(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:Oi});s.uniforms.tEquirect.value=e;const a=new S(n,s),o=e.minFilter;return e.minFilter===bn&&(e.minFilter=ii),new O0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}function Ox(r){let t=new WeakMap,e=new WeakMap,i=null;function n(u,d=!1){return u==null?null:d?a(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===Pa||d===Ia)if(t.has(u)){const m=t.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const x=new Ou(m.height);return x.fromEquirectangularTexture(r,u),t.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,m=d===Pa||d===Ia,x=d===In||d===ps;if(m||x){let g=e.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new lc(r)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const M=u.image;return m&&M&&M.height>0||x&&M&&h(M)?(i===null&&(i=new lc(r)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",c),g.texture):null}}}return u}function o(u,d){return d===Pa?u.mapping=In:d===Ia&&(u.mapping=ps),u}function h(u){let d=0;const m=6;for(let x=0;x<m;x++)u[x]!==void 0&&d++;return d===m}function l(u){const d=u.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:f}}function Bx(r){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&ls("WebGLRenderer: "+i+" extension not supported."),n}}}function kx(r,t,e,i){const n={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete n[u.id];const d=s.get(u);d&&(t.remove(d),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,e.memory.geometries++),u}function h(f){const u=f.attributes;for(const d in u)t.update(u[d],r.ARRAY_BUFFER)}function l(f){const u=[],d=f.index,m=f.attributes.position;let x=0;if(m===void 0)return;if(d!==null){const M=d.array;x=d.version;for(let v=0,_=M.length;v<_;v+=3){const b=M[v+0],T=M[v+1],R=M[v+2];u.push(b,T,T,R,R,b)}}else{const M=m.array;x=m.version;for(let v=0,_=M.length/3-1;v<_;v+=3){const b=v+0,T=v+1,R=v+2;u.push(b,T,T,R,R,b)}}const g=new(m.count>=65535?mu:pu)(u,1);g.version=x;const p=s.get(f);p&&t.remove(p),s.set(f,g)}function c(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:h,getWireframeAttribute:c}}function Hx(r,t,e){let i;function n(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function h(f,u){r.drawElements(i,u,s,f*a),e.update(u,i,1)}function l(f,u,d){d!==0&&(r.drawElementsInstanced(i,u,s,f*a,d),e.update(u,i,d))}function c(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=c}function Gx(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:_e("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Vx(r,t,e){const i=new WeakMap,n=new Ue;function s(a,o,h){const l=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let _=o.attributes.position.count*v,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const T=new Float32Array(_*b*4*f),R=new fu(T,_,b,f);R.type=Ai,R.needsUpdate=!0;const w=v*4;for(let P=0;P<f;P++){const z=g[P],B=p[P],F=M[P],D=_*b*4*P;for(let O=0;O<z.count;O++){const $=O*w;d===!0&&(n.fromBufferAttribute(z,O),T[D+$+0]=n.x,T[D+$+1]=n.y,T[D+$+2]=n.z,T[D+$+3]=0),m===!0&&(n.fromBufferAttribute(B,O),T[D+$+4]=n.x,T[D+$+5]=n.y,T[D+$+6]=n.z,T[D+$+7]=0),x===!0&&(n.fromBufferAttribute(F,O),T[D+$+8]=n.x,T[D+$+9]=n.y,T[D+$+10]=n.z,T[D+$+11]=F.itemSize===4?n.w:1)}}u={count:f,texture:R,size:new ot(_,b)},i.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];const m=o.morphTargetsRelative?1:1-d;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",l)}h.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Wx(r,t,e,i,n){let s=new WeakMap;function a(l){const c=n.render.frame,f=l.geometry,u=t.get(l,f);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",h)===!1&&l.addEventListener("dispose",h),s.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function h(l){const c=l.target;c.removeEventListener("dispose",h),i.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}const Xx={[wh]:"LINEAR_TONE_MAPPING",[Sh]:"REINHARD_TONE_MAPPING",[yh]:"CINEON_TONE_MAPPING",[pa]:"ACES_FILMIC_TONE_MAPPING",[Th]:"AGX_TONE_MAPPING",[Eh]:"NEUTRAL_TONE_MAPPING",[bh]:"CUSTOM_TONE_MAPPING"};function qx(r,t,e,i,n,s){const a=new li(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,h=null;const l=new Ie;l.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new re([0,2,0,0,2,0],2));const c=new Du({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new S(l,c),u=new va(-1,1,1,-1,0,1);let d=null,m=null,x=!1,g,p=null,M=[],v=!1;this.setSize=function(_,b){a.setSize(_,b),o!==null&&o.setSize(_,b),h!==null&&h.setSize(_,b);for(let T=0;T<M.length;T++){const R=M[T];R.setSize&&R.setSize(_,b)}},this.setEffects=function(_){M=_,v=M.length>0&&M[0].isRenderPass===!0;const b=a.width,T=a.height;M.length>0&&o===null&&(o=new li(b,T,{type:ci,depthBuffer:!1,stencilBuffer:!1}),h=new li(b,T,{type:ci,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const w=M[R];w.setSize&&w.setSize(b,T)}},this.begin=function(_,b){if(x||_.toneMapping===Bi&&M.length===0)return!1;if(p=b,b!==null){const T=b.width,R=b.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return v===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Bi,!0},this.hasRenderPass=function(){return v},this.end=function(_,b){_.toneMapping=g,x=!0;let T=a,R=o;for(let w=0;w<M.length;w++){const A=M[w];A.enabled!==!1&&(A.render(_,R,T,b),A.needsSwap!==!1&&(T=R,R=R===o?h:o))}if(d!==_.outputColorSpace||m!==_.toneMapping){d=_.outputColorSpace,m=_.toneMapping,c.defines={},xe.getTransfer(d)===Te&&(c.defines.SRGB_TRANSFER="");const w=Xx[m];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(p),_.render(f,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),l.dispose(),c.dispose()}}const Bu=new si,dh=new js(1,1),ku=new fu,Hu=new Ip,Gu=new _u,dc=[],pc=[],mc=new Float32Array(16),gc=new Float32Array(9),xc=new Float32Array(4);function ws(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=dc[n];if(s===void 0&&(s=new Float32Array(n),dc[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Je(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Ke(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Sa(r,t){let e=pc[t];e===void 0&&(e=new Int32Array(t),pc[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Yx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Zx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2fv(this.addr,t),Ke(e,t)}}function Jx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;r.uniform3fv(this.addr,t),Ke(e,t)}}function Kx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4fv(this.addr,t),Ke(e,t)}}function $x(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,i))return;xc.set(i),r.uniformMatrix2fv(this.addr,!1,xc),Ke(e,i)}}function Qx(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,i))return;gc.set(i),r.uniformMatrix3fv(this.addr,!1,gc),Ke(e,i)}}function jx(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,i))return;mc.set(i),r.uniformMatrix4fv(this.addr,!1,mc),Ke(e,i)}}function t1(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function e1(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2iv(this.addr,t),Ke(e,t)}}function i1(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;r.uniform3iv(this.addr,t),Ke(e,t)}}function n1(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4iv(this.addr,t),Ke(e,t)}}function s1(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function r1(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2uiv(this.addr,t),Ke(e,t)}}function a1(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;r.uniform3uiv(this.addr,t),Ke(e,t)}}function o1(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4uiv(this.addr,t),Ke(e,t)}}function h1(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(dh.compareFunction=e.isReversedDepthBuffer()?Nh:zh,s=dh):s=Bu,e.setTexture2D(t||s,n)}function l1(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Hu,n)}function c1(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Gu,n)}function u1(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||ku,n)}function f1(r){switch(r){case 5126:return Yx;case 35664:return Zx;case 35665:return Jx;case 35666:return Kx;case 35674:return $x;case 35675:return Qx;case 35676:return jx;case 5124:case 35670:return t1;case 35667:case 35671:return e1;case 35668:case 35672:return i1;case 35669:case 35673:return n1;case 5125:return s1;case 36294:return r1;case 36295:return a1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return u1}}function d1(r,t){r.uniform1fv(this.addr,t)}function p1(r,t){const e=ws(t,this.size,2);r.uniform2fv(this.addr,e)}function m1(r,t){const e=ws(t,this.size,3);r.uniform3fv(this.addr,e)}function g1(r,t){const e=ws(t,this.size,4);r.uniform4fv(this.addr,e)}function x1(r,t){const e=ws(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function M1(r,t){const e=ws(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function _1(r,t){const e=ws(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function v1(r,t){r.uniform1iv(this.addr,t)}function w1(r,t){r.uniform2iv(this.addr,t)}function S1(r,t){r.uniform3iv(this.addr,t)}function y1(r,t){r.uniform4iv(this.addr,t)}function b1(r,t){r.uniform1uiv(this.addr,t)}function T1(r,t){r.uniform2uiv(this.addr,t)}function E1(r,t){r.uniform3uiv(this.addr,t)}function A1(r,t){r.uniform4uiv(this.addr,t)}function R1(r,t,e){const i=this.cache,n=t.length,s=Sa(e,n);Je(i,s)||(r.uniform1iv(this.addr,s),Ke(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=dh:a=Bu;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function C1(r,t,e){const i=this.cache,n=t.length,s=Sa(e,n);Je(i,s)||(r.uniform1iv(this.addr,s),Ke(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Hu,s[a])}function P1(r,t,e){const i=this.cache,n=t.length,s=Sa(e,n);Je(i,s)||(r.uniform1iv(this.addr,s),Ke(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Gu,s[a])}function I1(r,t,e){const i=this.cache,n=t.length,s=Sa(e,n);Je(i,s)||(r.uniform1iv(this.addr,s),Ke(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||ku,s[a])}function L1(r){switch(r){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return x1;case 35675:return M1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return w1;case 35668:case 35672:return S1;case 35669:case 35673:return y1;case 5125:return b1;case 36294:return T1;case 36295:return E1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return I1}}class D1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=f1(e.type)}}class z1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L1(e.type)}}class N1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function Mc(r,t){r.seq.push(t),r.map[t.id]=t}function F1(r,t,e){const i=r.name,n=i.length;for(lo.lastIndex=0;;){const s=lo.exec(i),a=lo.lastIndex;let o=s[1];const h=s[2]==="]",l=s[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===n){Mc(e,l===void 0?new D1(o,r,t):new z1(o,r,t));break}else{let f=e.map[o];f===void 0&&(f=new N1(o),Mc(e,f)),e=f}}}class Qr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),h=t.getUniformLocation(e,o.name);F1(o,h,this)}const n=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function _c(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const U1=37297;let O1=0;function B1(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const vc=new ae;function k1(r){xe._getMatrix(vc,xe.workingColorSpace,r);const t=`mat3( ${vc.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(r)){case ha:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function wc(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+B1(r.getShaderSource(t),o)}else return s}function H1(r,t){const e=k1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const G1={[wh]:"Linear",[Sh]:"Reinhard",[yh]:"Cineon",[pa]:"ACESFilmic",[Th]:"AgX",[Eh]:"Neutral",[bh]:"Custom"};function V1(r,t){const e=G1[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Or=new N;function W1(){xe.getLuminanceCoefficients(Or);const r=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function q1(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Y1(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Os(r){return r!==""}function Sc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(r){return r.replace(Z1,K1)}const J1=new Map;function K1(r,t){let e=ce[t];if(e===void 0){const i=J1.get(t);if(i!==void 0)e=ce[i],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ph(e)}const $1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(r){return r.replace($1,Q1)}function Q1(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Tc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const j1={[Bs]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function tM(r){return j1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eM={[In]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function iM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":eM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const nM={[ps]:"ENVMAP_MODE_REFRACTION"};function sM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":nM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rM={[iu]:"ENVMAP_BLENDING_MULTIPLY",[qd]:"ENVMAP_BLENDING_MIX",[Yd]:"ENVMAP_BLENDING_ADD"};function aM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":rM[r.combine]||"ENVMAP_BLENDING_NONE"}function oM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function hM(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const h=tM(e),l=iM(e),c=sM(e),f=aM(e),u=oM(e),d=X1(e),m=q1(s),x=n.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Os).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(g=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?ce.tonemapping_pars_fragment:"",e.toneMapping!==Bi?V1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,H1("linearToOutputTexel",e.outputColorSpace),W1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),a=ph(a),a=Sc(a,e),a=yc(a,e),o=ph(o),o=Sc(o,e),o=yc(o,e),a=bc(a),o=bc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+g+a,_=M+p+o,b=_c(n,n.VERTEX_SHADER,v),T=_c(n,n.FRAGMENT_SHADER,_);n.attachShader(x,b),n.attachShader(x,T),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function R(z){if(r.debug.checkShaderErrors){const B=n.getProgramInfoLog(x)||"",F=n.getShaderInfoLog(b)||"",D=n.getShaderInfoLog(T)||"",O=B.trim(),$=F.trim(),k=D.trim();let it=!0,Y=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(it=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,b,T);else{const et=wc(n,b,"vertex"),nt=wc(n,T,"fragment");_e("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+O+`
`+et+`
`+nt)}else O!==""?se("WebGLProgram: Program Info Log:",O):($===""||k==="")&&(Y=!1);Y&&(z.diagnostics={runnable:it,programLog:O,vertexShader:{log:$,prefix:g},fragmentShader:{log:k,prefix:p}})}n.deleteShader(b),n.deleteShader(T),w=new Qr(n,x),A=Y1(n,x)}let w;this.getUniforms=function(){return w===void 0&&R(this),w};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(x,U1)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=O1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}let lM=0;class cM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new uM(t),e.set(t,i)),i}}class uM{constructor(t){this.id=lM++,this.code=t,this.usedTimes=0}}function fM(r){return r===Ln||r===sa||r===ra}function dM(r,t,e,i,n,s){const a=new Oh,o=new cM,h=new Set,l=[],c=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w){return h.add(w),w===0?"uv":`uv${w}`}function x(w,A,P,z,B,F){const D=z.fog,O=B.geometry,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,k=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,it=t.get(w.envMap||$,k),Y=it&&it.mapping===ma?it.image.height:null,et=d[w.type];w.precision!==null&&(u=i.getMaxPrecision(w.precision),u!==w.precision&&se("WebGLProgram.getParameters:",w.precision,"not supported, using",u,"instead."));const nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Nt=nt!==void 0?nt.length:0;let X=0;O.morphAttributes.position!==void 0&&(X=1),O.morphAttributes.normal!==void 0&&(X=2),O.morphAttributes.color!==void 0&&(X=3);let ct,ht,ut,G;if(et){const Le=Ni[et];ct=Le.vertexShader,ht=Le.fragmentShader}else{ct=w.vertexShader,ht=w.fragmentShader;const Le=o.getVertexShaderStage(w),ye=o.getFragmentShaderStage(w);o.update(w,Le,ye),ut=Le.id,G=ye.id}const Z=r.getRenderTarget(),mt=r.state.buffers.depth.getReversed(),Bt=B.isInstancedMesh===!0,Tt=B.isBatchedMesh===!0,St=!!w.map,fe=!!w.matcap,st=!!it,ft=!!w.aoMap,gt=!!w.lightMap,xt=!!w.bumpMap&&w.wireframe===!1,_t=!!w.normalMap,Jt=!!w.displacementMap,Yt=!!w.emissiveMap,ee=!!w.metalnessMap,ne=!!w.roughnessMap,U=w.anisotropy>0,Me=w.clearcoat>0,oe=w.dispersion>0,I=w.retroreflectivity>0,y=w.iridescence>0,V=w.sheen>0,q=w.transmission>0,Q=U&&!!w.anisotropyMap,pt=Me&&!!w.clearcoatMap,Mt=Me&&!!w.clearcoatNormalMap,tt=Me&&!!w.clearcoatRoughnessMap,rt=y&&!!w.iridescenceMap,vt=y&&!!w.iridescenceThicknessMap,Wt=V&&!!w.sheenColorMap,bt=V&&!!w.sheenRoughnessMap,yt=!!w.specularMap,Gt=!!w.specularColorMap,Qt=!!w.specularIntensityMap,he=q&&!!w.transmissionMap,W=q&&!!w.thicknessMap,Et=!!w.gradientMap,lt=!!w.alphaMap,At=w.alphaTest>0,Dt=!!w.alphaHash,dt=!!w.extensions;let Kt=Bi;w.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Kt=r.toneMapping);const Vt={shaderID:et,shaderType:w.type,shaderName:w.name,vertexShader:ct,fragmentShader:ht,defines:w.defines,customVertexShaderID:ut,customFragmentShaderID:G,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&B._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&B.instanceColor!==null,instancingMorph:Bt&&B.morphTexture!==null,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:St,matcap:fe,envMap:st,envMapMode:st&&it.mapping,envMapCubeUVHeight:Y,aoMap:ft,lightMap:gt,bumpMap:xt,normalMap:_t,displacementMap:Jt,emissiveMap:Yt,normalMapObjectSpace:_t&&w.normalMapType===Kd,normalMapTangentSpace:_t&&w.normalMapType===aa,packedNormalMap:_t&&w.normalMapType===aa&&fM(w.normalMap.format),metalnessMap:ee,roughnessMap:ne,anisotropy:U,anisotropyMap:Q,clearcoat:Me,clearcoatMap:pt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:tt,dispersion:oe,retroreflection:I,iridescence:y,iridescenceMap:rt,iridescenceThicknessMap:vt,sheen:V,sheenColorMap:Wt,sheenRoughnessMap:bt,specularMap:yt,specularColorMap:Gt,specularIntensityMap:Qt,transmission:q,transmissionMap:he,thicknessMap:W,gradientMap:Et,opaque:w.transparent===!1&&w.blending===Rn&&w.alphaToCoverage===!1,alphaMap:lt,alphaTest:At,alphaHash:Dt,combine:w.combine,mapUv:St&&m(w.map.channel),aoMapUv:ft&&m(w.aoMap.channel),lightMapUv:gt&&m(w.lightMap.channel),bumpMapUv:xt&&m(w.bumpMap.channel),normalMapUv:_t&&m(w.normalMap.channel),displacementMapUv:Jt&&m(w.displacementMap.channel),emissiveMapUv:Yt&&m(w.emissiveMap.channel),metalnessMapUv:ee&&m(w.metalnessMap.channel),roughnessMapUv:ne&&m(w.roughnessMap.channel),anisotropyMapUv:Q&&m(w.anisotropyMap.channel),clearcoatMapUv:pt&&m(w.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&m(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&m(w.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&m(w.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&m(w.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&m(w.sheenColorMap.channel),sheenRoughnessMapUv:bt&&m(w.sheenRoughnessMap.channel),specularMapUv:yt&&m(w.specularMap.channel),specularColorMapUv:Gt&&m(w.specularColorMap.channel),specularIntensityMapUv:Qt&&m(w.specularIntensityMap.channel),transmissionMapUv:he&&m(w.transmissionMap.channel),thicknessMapUv:W&&m(w.thicknessMap.channel),alphaMapUv:lt&&m(w.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_t||U),vertexNormals:!!O.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(St||lt),fog:!!D,useFog:w.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||O.attributes.normal===void 0&&_t===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:X,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Kt,decodeVideoTexture:St&&w.map.isVideoTexture===!0&&xe.getTransfer(w.map.colorSpace)===Te,decodeVideoTextureEmissive:Yt&&w.emissiveMap.isVideoTexture===!0&&xe.getTransfer(w.emissiveMap.colorSpace)===Te,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$t,flipSided:w.side===Ze,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:dt&&w.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&w.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Vt.vertexUv1s=h.has(1),Vt.vertexUv2s=h.has(2),Vt.vertexUv3s=h.has(3),h.clear(),Vt}function g(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)A.push(P),A.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(p(A,w),M(A,w),A.push(r.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function p(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numSunLights),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numSunLightShadows),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function M(w,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),w.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),w.push(a.mask)}function v(w){const A=d[w.type];let P;if(A){const z=Ni[A];P=nr.clone(z.uniforms)}else P=w.uniforms;return P}function _(w,A){let P=c.get(A);return P!==void 0?++P.usedTimes:(P=new hM(r,A,w,n),l.push(P),c.set(A,P)),P}function b(w){if(--w.usedTimes===0){const A=l.indexOf(w);l[A]=l[l.length-1],l.pop(),c.delete(w.cacheKey),w.destroy()}}function T(w){o.remove(w)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:v,acquireProgram:_,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:R}}function pM(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,h){r.get(a)[o]=h}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function mM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Ec(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ac(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,x,g,p){let M=r[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},r[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=m,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=g,M.group=p),t++,M}function h(u,d,m,x,g,p,M){M.reversedDepth===!0&&(g=-g);const v=o(u,d,m,x,g,p);m.transmission>0?i.push(v):m.transparent===!0?n.push(v):e.push(v)}function l(u,d,m,x,g,p){const M=o(u,d,m,x,g,p);m.transmission>0?i.unshift(M):m.transparent===!0?n.unshift(M):e.unshift(M)}function c(u,d){e.length>1&&e.sort(u||mM),i.length>1&&i.sort(d||Ec),n.length>1&&n.sort(d||Ec)}function f(){for(let u=t,d=r.length;u<d;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:h,unshift:l,finish:f,sort:c}}function gM(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new Ac,r.set(i,[a])):n>=s.length?(a=new Ac,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function xM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Ot};break;case"SpotLight":e={position:new N,direction:new N,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function MM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let _M=0;function vM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function wM(r){const t=new xM,e=MM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const n=new N,s=new Ae,a=new Ae;function o(l){let c=0,f=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,v=0,_=0,b=0,T=0,R=0,w=0,A=0,P=0;l.sort(vM);for(let B=0,F=l.length;B<F;B++){const D=l[B],O=D.color,$=D.intensity,k=D.distance;let it=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ln?it=D.shadow.map.texture:it=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)c+=O.r*$,f+=O.g*$,u+=O.b*$;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],$);P++}else if(D.isSunLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,nt=e.get(D);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[m]=nt,i.sunShadowMap[m]=it;const Nt=et.getViewportCount();for(let X=0;X<Nt;X++)i.sunShadowMatrix[x+X]=et.getMatrix(X),i.sunShadowCascade[x+X]=et._cascadeData[X];x+=Nt,m++}i.sun[d]=Y,d++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,nt=e.get(D);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,i.directionalShadow[g]=nt,i.directionalShadowMap[g]=it,i.directionalShadowMatrix[g]=D.shadow.matrix,b++}i.directional[g]=Y,g++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(O).multiplyScalar($),Y.distance=k,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[M]=Y;const et=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,et.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[M]=et.matrix,D.castShadow){const nt=e.get(D);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,i.spotShadow[M]=nt,i.spotShadowMap[M]=it,R++}M++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(O).multiplyScalar($),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=Y,v++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const et=D.shadow,nt=e.get(D);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,nt.shadowCameraNear=et.camera.near,nt.shadowCameraFar=et.camera.far,i.pointShadow[p]=nt,i.pointShadowMap[p]=it,i.pointShadowMatrix[p]=D.shadow.matrix,T++}i.point[p]=Y,p++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar($),Y.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[_]=Y,_++}}v>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=u;const z=i.hash;(z.sunLength!==d||z.directionalLength!==g||z.pointLength!==p||z.spotLength!==M||z.rectAreaLength!==v||z.hemiLength!==_||z.numSunShadows!==m||z.numDirectionalShadows!==b||z.numPointShadows!==T||z.numSpotShadows!==R||z.numSpotMaps!==w||z.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=g,i.spot.length=M,i.rectArea.length=v,i.point.length=p,i.hemi.length=_,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,z.sunLength=d,z.directionalLength=g,z.pointLength=p,z.spotLength=M,z.rectAreaLength=v,z.hemiLength=_,z.numSunShadows=m,z.numDirectionalShadows=b,z.numPointShadows=T,z.numSpotShadows=R,z.numSpotMaps=w,z.numLightProbes=P,i.version=_M++)}function h(l,c){let f=0,u=0,d=0,m=0,x=0,g=0;const p=c.matrixWorldInverse;for(let M=0,v=l.length;M<v;M++){const _=l[M];if(_.isSunLight){const b=i.sun[f];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),f++}else if(_.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),u++}else if(_.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const b=i.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(_.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:o,setupView:h,state:i}}function Rc(r){const t=new wM(r),e=[],i=[],n=[];function s(u){f.camera=u,e.length=0,i.length=0,n.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function h(u){n.push(u)}function l(){t.setup(e)}function c(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:h}}function SM(r){let t=new WeakMap;function e(n,s=0){const a=t.get(n);let o;return a===void 0?(o=new Rc(r),t.set(n,[o])):s>=a.length?(o=new Rc(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const yM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
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
}`,TM=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],EM=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Cc=new Ae,Ds=new N,co=new N;function AM(r,t,e){let i=new kh;const n=new ot,s=new ot,a=new Ue,o=new L0,h=new D0,l={},c=e.maxTextureSize,f={[pn]:Ze,[Ze]:pn,[$t]:$t},u=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:yM,fragmentShader:bM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ie;m.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new S(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let p=this.type;this.render=function(T,R,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Ad&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bs);const A=r.getRenderTarget(),P=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Oi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=p!==this.type;F&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=T.length;D<O;D++){const $=T[D],k=$.shadow;if(k===void 0){se("WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);const it=k.getFrameExtents();n.multiply(it),s.copy(k.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/it.x),n.x=s.x*it.x,k.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/it.y),n.y=s.y*it.y,k.mapSize.y=s.y));const Y=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||F===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ns){if($.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new li(n.x,n.y,{format:Ln,type:ci,minFilter:ii,magFilter:ii,generateMipmaps:!1}),k.map.texture.name=$.name+".shadowMap",k.map.depthTexture=new js(n.x,n.y,Ai),k.map.depthTexture.name=$.name+".shadowMapDepth",k.map.depthTexture.format=nn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ye,k.map.depthTexture.magFilter=Ye}else $.isPointLight?(k.map=new Ou(n.x),k.map.depthTexture=new $p(n.x,Gi)):(k.map=new li(n.x,n.y),k.map.depthTexture=new js(n.x,n.y,Gi)),k.map.depthTexture.name=$.name+".shadowMap",k.map.depthTexture.format=nn,this.type===Bs?(k.map.depthTexture.compareFunction=Y?Nh:zh,k.map.depthTexture.minFilter=ii,k.map.depthTexture.magFilter=ii):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ye,k.map.depthTexture.magFilter=Ye);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==n.x||k.map.height!==n.y)&&k.map.setSize(n.x,n.y);const et=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();$.isPointLight!==!0&&k.updateMatrices($,w);for(let nt=0;nt<et;nt++){const Nt=k.getCamera(nt);if($.isPointLight){const X=k.camera,ct=k.matrix,ht=$.distance||X.far;ht!==X.far&&(X.far=ht,X.updateProjectionMatrix()),Ds.setFromMatrixPosition($.matrixWorld),X.position.copy(Ds),co.copy(X.position),co.add(TM[nt]),X.up.copy(EM[nt]),X.lookAt(co),X.updateMatrixWorld(),ct.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Cc.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Cc,X.coordinateSystem,X.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,nt),r.clear();else{nt===0&&(r.setRenderTarget(k.map),r.clear());const X=k.getViewport(nt);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),B.viewport(a)}i=k.getFrustum(nt),_(R,w,Nt,$,this.type)}k.isPointLightShadow!==!0&&this.type===Ns&&M(k,w),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(A,P,z)};function M(T,R){const w=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new li(n.x,n.y,{format:Ln,type:ci}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(R,null,w,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(R,null,w,d,x,null)}function v(T,R,w,A){let P=null;const z=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)P=z;else if(P=w.isPointLight===!0?h:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=P.uuid,F=R.uuid;let D=l[B];D===void 0&&(D={},l[B]=D);let O=D[F];O===void 0&&(O=P.clone(),D[F]=O,R.addEventListener("dispose",b)),P=O}if(P.visible=R.visible,P.wireframe=R.wireframe,A===Ns?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const B=r.properties.get(P);B.light=w}return P}function _(T,R,w,A,P){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Ns)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const F=t.update(T),D=T.material;if(Array.isArray(D)){const O=F.groups;for(let $=0,k=O.length;$<k;$++){const it=O[$],Y=D[it.materialIndex];if(Y&&Y.visible){const et=v(T,Y,A,P);T.onBeforeShadow(r,T,R,w,F,et,it),r.renderBufferDirect(w,null,F,et,T,it),T.onAfterShadow(r,T,R,w,F,et,it)}}}else if(D.visible){const O=v(T,D,A,P);T.onBeforeShadow(r,T,R,w,F,O,null),r.renderBufferDirect(w,null,F,O,T,null),T.onAfterShadow(r,T,R,w,F,O,null)}}const B=T.children;for(let F=0,D=B.length;F<D;F++)_(B[F],R,w,A,P)}function b(T){T.target.removeEventListener("dispose",b);for(const w in l){const A=l[w],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function RM(r,t){function e(){let W=!1;const Et=new Ue;let lt=null;const At=new Ue(0,0,0,0);return{setMask:function(Dt){lt!==Dt&&!W&&(r.colorMask(Dt,Dt,Dt,Dt),lt=Dt)},setLocked:function(Dt){W=Dt},setClear:function(Dt,dt,Kt,Vt,Le){Le===!0&&(Dt*=Vt,dt*=Vt,Kt*=Vt),Et.set(Dt,dt,Kt,Vt),At.equals(Et)===!1&&(r.clearColor(Dt,dt,Kt,Vt),At.copy(Et))},reset:function(){W=!1,lt=null,At.set(-1,0,0,0)}}}function i(){let W=!1,Et=!1,lt=null,At=null,Dt=null;return{setReversed:function(dt){if(Et!==dt){const Kt=t.get("EXT_clip_control");dt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Et=dt;const Vt=Dt;Dt=null,this.setClear(Vt)}},getReversed:function(){return Et},setTest:function(dt){dt?Z(r.DEPTH_TEST):mt(r.DEPTH_TEST)},setMask:function(dt){lt!==dt&&!W&&(r.depthMask(dt),lt=dt)},setFunc:function(dt){if(Et&&(dt=hp[dt]),At!==dt){switch(dt){case bo:r.depthFunc(r.NEVER);break;case To:r.depthFunc(r.ALWAYS);break;case Eo:r.depthFunc(r.LESS);break;case Zs:r.depthFunc(r.LEQUAL);break;case Ao:r.depthFunc(r.EQUAL);break;case Ro:r.depthFunc(r.GEQUAL);break;case Co:r.depthFunc(r.GREATER);break;case Po:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}At=dt}},setLocked:function(dt){W=dt},setClear:function(dt){Dt!==dt&&(Dt=dt,Et&&(dt=1-dt),r.clearDepth(dt))},reset:function(){W=!1,lt=null,At=null,Dt=null,Et=!1}}}function n(){let W=!1,Et=null,lt=null,At=null,Dt=null,dt=null,Kt=null,Vt=null,Le=null;return{setTest:function(ye){W||(ye?Z(r.STENCIL_TEST):mt(r.STENCIL_TEST))},setMask:function(ye){Et!==ye&&!W&&(r.stencilMask(ye),Et=ye)},setFunc:function(ye,wi,Ci){(lt!==ye||At!==wi||Dt!==Ci)&&(r.stencilFunc(ye,wi,Ci),lt=ye,At=wi,Dt=Ci)},setOp:function(ye,wi,Ci){(dt!==ye||Kt!==wi||Vt!==Ci)&&(r.stencilOp(ye,wi,Ci),dt=ye,Kt=wi,Vt=Ci)},setLocked:function(ye){W=ye},setClear:function(ye){Le!==ye&&(r.clearStencil(ye),Le=ye)},reset:function(){W=!1,Et=null,lt=null,At=null,Dt=null,dt=null,Kt=null,Vt=null,Le=null}}}const s=new e,a=new i,o=new n,h=new WeakMap,l=new WeakMap;let c={},f={},u={},d=new WeakMap,m=[],x=null,g=!1,p=null,M=null,v=null,_=null,b=null,T=null,R=null,w=new Ot(0,0,0),A=0,P=!1,z=null,B=null,F=null,D=null,O=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,it=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=it>=2);let et=null,nt={};const Nt=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),ct=new Ue().fromArray(Nt),ht=new Ue().fromArray(X);function ut(W,Et,lt,At){const Dt=new Uint8Array(4),dt=r.createTexture();r.bindTexture(W,dt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<lt;Kt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Et,0,r.RGBA,1,1,At,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(Et+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return dt}const G={};G[r.TEXTURE_2D]=ut(r.TEXTURE_2D,r.TEXTURE_2D,1),G[r.TEXTURE_CUBE_MAP]=ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[r.TEXTURE_2D_ARRAY]=ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),G[r.TEXTURE_3D]=ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),a.setFunc(Zs),xt(!1),_t(Ml),Z(r.CULL_FACE),ft(Oi);function Z(W){c[W]!==!0&&(r.enable(W),c[W]=!0)}function mt(W){c[W]!==!1&&(r.disable(W),c[W]=!1)}function Bt(W,Et){return u[W]!==Et?(r.bindFramebuffer(W,Et),u[W]=Et,W===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Et),W===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Et),!0):!1}function Tt(W,Et){let lt=m,At=!1;if(W){lt=d.get(Et),lt===void 0&&(lt=[],d.set(Et,lt));const Dt=W.textures;if(lt.length!==Dt.length||lt[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Kt=Dt.length;dt<Kt;dt++)lt[dt]=r.COLOR_ATTACHMENT0+dt;lt.length=Dt.length,At=!0}}else lt[0]!==r.BACK&&(lt[0]=r.BACK,At=!0);At&&r.drawBuffers(lt)}function St(W){return x!==W?(r.useProgram(W),x=W,!0):!1}const fe={[rs]:r.FUNC_ADD,[Cd]:r.FUNC_SUBTRACT,[Pd]:r.FUNC_REVERSE_SUBTRACT};fe[Id]=r.MIN,fe[Ld]=r.MAX;const st={[Dd]:r.ZERO,[zd]:r.ONE,[Nd]:r.SRC_COLOR,[tu]:r.SRC_ALPHA,[Hd]:r.SRC_ALPHA_SATURATE,[Bd]:r.DST_COLOR,[Ud]:r.DST_ALPHA,[Fd]:r.ONE_MINUS_SRC_COLOR,[eu]:r.ONE_MINUS_SRC_ALPHA,[kd]:r.ONE_MINUS_DST_COLOR,[Od]:r.ONE_MINUS_DST_ALPHA,[Gd]:r.CONSTANT_COLOR,[Vd]:r.ONE_MINUS_CONSTANT_COLOR,[Wd]:r.CONSTANT_ALPHA,[Xd]:r.ONE_MINUS_CONSTANT_ALPHA};function ft(W,Et,lt,At,Dt,dt,Kt,Vt,Le,ye){if(W===Oi){g===!0&&(mt(r.BLEND),g=!1);return}if(g===!1&&(Z(r.BLEND),g=!0),W!==Rd){if(W!==p||ye!==P){if((M!==rs||b!==rs)&&(r.blendEquation(r.FUNC_ADD),M=rs,b=rs),ye)switch(W){case Rn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pe:r.blendFunc(r.ONE,r.ONE);break;case _l:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:_e("WebGLState: Invalid blending: ",W);break}else switch(W){case Rn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pe:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case _l:_e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:_e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_e("WebGLState: Invalid blending: ",W);break}v=null,_=null,T=null,R=null,w.set(0,0,0),A=0,p=W,P=ye}return}Dt=Dt||Et,dt=dt||lt,Kt=Kt||At,(Et!==M||Dt!==b)&&(r.blendEquationSeparate(fe[Et],fe[Dt]),M=Et,b=Dt),(lt!==v||At!==_||dt!==T||Kt!==R)&&(r.blendFuncSeparate(st[lt],st[At],st[dt],st[Kt]),v=lt,_=At,T=dt,R=Kt),(Vt.equals(w)===!1||Le!==A)&&(r.blendColor(Vt.r,Vt.g,Vt.b,Le),w.copy(Vt),A=Le),p=W,P=!1}function gt(W,Et){W.side===$t?mt(r.CULL_FACE):Z(r.CULL_FACE);let lt=W.side===Ze;Et&&(lt=!lt),xt(lt),W.blending===Rn&&W.transparent===!1?ft(Oi):ft(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),s.setMask(W.colorWrite);const At=W.stencilWrite;o.setTest(At),At&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Yt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function xt(W){z!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),z=W)}function _t(W){W!==Td?(Z(r.CULL_FACE),W!==B&&(W===Ml?r.cullFace(r.BACK):W===Ed?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):mt(r.CULL_FACE),B=W}function Jt(W){W!==F&&(k&&r.lineWidth(W),F=W)}function Yt(W,Et,lt){W?(Z(r.POLYGON_OFFSET_FILL),(D!==Et||O!==lt)&&(D=Et,O=lt,a.getReversed()&&(Et=-Et),r.polygonOffset(Et,lt))):mt(r.POLYGON_OFFSET_FILL)}function ee(W){W?Z(r.SCISSOR_TEST):mt(r.SCISSOR_TEST)}function ne(W){W===void 0&&(W=r.TEXTURE0+$-1),et!==W&&(r.activeTexture(W),et=W)}function U(W,Et,lt){lt===void 0&&(et===null?lt=r.TEXTURE0+$-1:lt=et);let At=nt[lt];At===void 0&&(At={type:void 0,texture:void 0},nt[lt]=At),(At.type!==W||At.texture!==Et)&&(et!==lt&&(r.activeTexture(lt),et=lt),r.bindTexture(W,Et||G[W]),At.type=W,At.texture=Et)}function Me(){const W=nt[et];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function oe(){try{r.compressedTexImage2D(...arguments)}catch(W){_e("WebGLState:",W)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(W){_e("WebGLState:",W)}}function y(){try{r.texSubImage2D(...arguments)}catch(W){_e("WebGLState:",W)}}function V(){try{r.texSubImage3D(...arguments)}catch(W){_e("WebGLState:",W)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(W){_e("WebGLState:",W)}}function Q(){try{r.compressedTexSubImage3D(...arguments)}catch(W){_e("WebGLState:",W)}}function pt(){try{r.texStorage2D(...arguments)}catch(W){_e("WebGLState:",W)}}function Mt(){try{r.texStorage3D(...arguments)}catch(W){_e("WebGLState:",W)}}function tt(){try{r.texImage2D(...arguments)}catch(W){_e("WebGLState:",W)}}function rt(){try{r.texImage3D(...arguments)}catch(W){_e("WebGLState:",W)}}function vt(W){return f[W]!==void 0?f[W]:r.getParameter(W)}function Wt(W,Et){f[W]!==Et&&(r.pixelStorei(W,Et),f[W]=Et)}function bt(W){ct.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ct.copy(W))}function yt(W){ht.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),ht.copy(W))}function Gt(W,Et){let lt=l.get(Et);lt===void 0&&(lt=new WeakMap,l.set(Et,lt));let At=lt.get(W);At===void 0&&(At=r.getUniformBlockIndex(Et,W.name),lt.set(W,At))}function Qt(W,Et){const At=l.get(Et).get(W);h.get(Et)!==At&&(r.uniformBlockBinding(Et,At,W.__bindingPointIndex),h.set(Et,At))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),c={},f={},et=null,nt={},u={},d=new WeakMap,m=[],x=null,g=!1,p=null,M=null,v=null,_=null,b=null,T=null,R=null,w=new Ot(0,0,0),A=0,P=!1,z=null,B=null,F=null,D=null,O=null,ct.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:mt,bindFramebuffer:Bt,drawBuffers:Tt,useProgram:St,setBlending:ft,setMaterial:gt,setFlipSided:xt,setCullFace:_t,setLineWidth:Jt,setPolygonOffset:Yt,setScissorTest:ee,activeTexture:ne,bindTexture:U,unbindTexture:Me,compressedTexImage2D:oe,compressedTexImage3D:I,texImage2D:tt,texImage3D:rt,pixelStorei:Wt,getParameter:vt,updateUBOMapping:Gt,uniformBlockBinding:Qt,texStorage2D:pt,texStorage3D:Mt,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:bt,viewport:yt,reset:he}}function CM(r,t,e,i,n,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,c=new WeakMap,f=new Set;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,y){return m?new OffscreenCanvas(I,y):la("canvas")}function g(I,y,V){let q=1;const Q=oe(I);if((Q.width>V||Q.height>V)&&(q=V/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pt=Math.floor(q*Q.width),Mt=Math.floor(q*Q.height);u===void 0&&(u=x(pt,Mt));const tt=y?x(pt,Mt):u;return tt.width=pt,tt.height=Mt,tt.getContext("2d").drawImage(I,0,0,pt,Mt),se("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+pt+"x"+Mt+")."),tt}else return"data"in I&&se("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function p(I){return I.generateMipmaps}function M(I){r.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(I,y,V,q,Q,pt=!1){if(I!==null){if(r[I]!==void 0)return r[I];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Mt;q&&(Mt=t.get("EXT_texture_norm16"),Mt||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=y;if(y===r.RED&&(V===r.FLOAT&&(tt=r.R32F),V===r.HALF_FLOAT&&(tt=r.R16F),V===r.UNSIGNED_BYTE&&(tt=r.R8),V===r.UNSIGNED_SHORT&&Mt&&(tt=Mt.R16_EXT),V===r.SHORT&&Mt&&(tt=Mt.R16_SNORM_EXT)),y===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(tt=r.R8UI),V===r.UNSIGNED_SHORT&&(tt=r.R16UI),V===r.UNSIGNED_INT&&(tt=r.R32UI),V===r.BYTE&&(tt=r.R8I),V===r.SHORT&&(tt=r.R16I),V===r.INT&&(tt=r.R32I)),y===r.RG&&(V===r.FLOAT&&(tt=r.RG32F),V===r.HALF_FLOAT&&(tt=r.RG16F),V===r.UNSIGNED_BYTE&&(tt=r.RG8),V===r.UNSIGNED_SHORT&&Mt&&(tt=Mt.RG16_EXT),V===r.SHORT&&Mt&&(tt=Mt.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(tt=r.RG8UI),V===r.UNSIGNED_SHORT&&(tt=r.RG16UI),V===r.UNSIGNED_INT&&(tt=r.RG32UI),V===r.BYTE&&(tt=r.RG8I),V===r.SHORT&&(tt=r.RG16I),V===r.INT&&(tt=r.RG32I)),y===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),V===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),V===r.UNSIGNED_INT&&(tt=r.RGB32UI),V===r.BYTE&&(tt=r.RGB8I),V===r.SHORT&&(tt=r.RGB16I),V===r.INT&&(tt=r.RGB32I)),y===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),V===r.UNSIGNED_INT&&(tt=r.RGBA32UI),V===r.BYTE&&(tt=r.RGBA8I),V===r.SHORT&&(tt=r.RGBA16I),V===r.INT&&(tt=r.RGBA32I)),y===r.RGB&&(V===r.UNSIGNED_SHORT&&Mt&&(tt=Mt.RGB16_EXT),V===r.SHORT&&Mt&&(tt=Mt.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(tt=r.R11F_G11F_B10F)),y===r.RGBA){const rt=pt?ha:xe.getTransfer(Q);V===r.FLOAT&&(tt=r.RGBA32F),V===r.HALF_FLOAT&&(tt=r.RGBA16F),V===r.UNSIGNED_BYTE&&(tt=rt===Te?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&Mt&&(tt=Mt.RGBA16_EXT),V===r.SHORT&&Mt&&(tt=Mt.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function b(I,y){let V;return I?y===null||y===Gi||y===Ks?V=r.DEPTH24_STENCIL8:y===Ai?V=r.DEPTH32F_STENCIL8:y===Js&&(V=r.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gi||y===Ks?V=r.DEPTH_COMPONENT24:y===Ai?V=r.DEPTH_COMPONENT32F:y===Js&&(V=r.DEPTH_COMPONENT16),V}function T(I,y){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ye&&I.minFilter!==ii?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function R(I){const y=I.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&c.delete(y),y.isHTMLTexture&&f.delete(y)}function w(I){const y=I.target;y.removeEventListener("dispose",w),z(y)}function A(I){const y=i.get(I);if(y.__webglInit===void 0)return;const V=I.source,q=d.get(V);if(q){const Q=q[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(I),Object.keys(q).length===0&&d.delete(V)}i.remove(I)}function P(I){const y=i.get(I);r.deleteTexture(y.__webglTexture);const V=I.source,q=d.get(V);delete q[y.__cacheKey],a.memory.textures--}function z(I){const y=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Q=0;Q<y.__webglFramebuffer[q].length;Q++)r.deleteFramebuffer(y.__webglFramebuffer[q][Q]);else r.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)r.deleteFramebuffer(y.__webglFramebuffer[q]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=I.textures;for(let q=0,Q=V.length;q<Q;q++){const pt=i.get(V[q]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),a.memory.textures--),i.remove(V[q])}i.remove(I)}let B=0;function F(){B=0}function D(){return B}function O(I){B=I}function $(){const I=B;return I>=n.maxTextures&&se("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+n.maxTextures),B+=1,I}function k(I){const y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function it(I,y){const V=i.get(I);if(I.isVideoTexture&&U(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){const q=I.image;if(q===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(V,I,y);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+y)}function Y(I,y){const V=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){mt(V,I,y);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+y)}function et(I,y){const V=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){mt(V,I,y);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+y)}function nt(I,y){const V=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&V.__version!==I.version){Bt(V,I,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+y)}const Nt={[na]:r.REPEAT,[Qi]:r.CLAMP_TO_EDGE,[Io]:r.MIRRORED_REPEAT},X={[Ye]:r.NEAREST,[Zd]:r.NEAREST_MIPMAP_NEAREST,[lr]:r.NEAREST_MIPMAP_LINEAR,[ii]:r.LINEAR,[La]:r.LINEAR_MIPMAP_NEAREST,[bn]:r.LINEAR_MIPMAP_LINEAR},ct={[Qd]:r.NEVER,[np]:r.ALWAYS,[jd]:r.LESS,[zh]:r.LEQUAL,[tp]:r.EQUAL,[Nh]:r.GEQUAL,[ep]:r.GREATER,[ip]:r.NOTEQUAL};function ht(I,y){if(y.type===Ai&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ii||y.magFilter===La||y.magFilter===lr||y.magFilter===bn||y.minFilter===ii||y.minFilter===La||y.minFilter===lr||y.minFilter===bn)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Nt[y.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Nt[y.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Nt[y.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,X[y.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,X[y.minFilter]),y.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ye||y.minFilter!==lr&&y.minFilter!==bn||y.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ut(I,y){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",R));const q=y.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const pt=k(y);if(pt!==I.__cacheKey){Q[pt]===void 0&&(Q[pt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[pt].usedTimes++;const Mt=Q[I.__cacheKey];Mt!==void 0&&(Q[I.__cacheKey].usedTimes--,Mt.usedTimes===0&&P(y)),I.__cacheKey=pt,I.__webglTexture=Q[pt].texture}return V}function G(I,y,V){return Math.floor(Math.floor(I/V)/y)}function Z(I,y,V,q){const pt=I.updateRanges;if(pt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,V,q,y.data);else{pt.sort((Wt,bt)=>Wt.start-bt.start);let Mt=0;for(let Wt=1;Wt<pt.length;Wt++){const bt=pt[Mt],yt=pt[Wt],Gt=bt.start+bt.count,Qt=G(yt.start,y.width,4),he=G(bt.start,y.width,4);yt.start<=Gt+1&&Qt===he&&G(yt.start+yt.count-1,y.width,4)===Qt?bt.count=Math.max(bt.count,yt.start+yt.count-bt.start):(++Mt,pt[Mt]=yt)}pt.length=Mt+1;const tt=e.getParameter(r.UNPACK_ROW_LENGTH),rt=e.getParameter(r.UNPACK_SKIP_PIXELS),vt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Wt=0,bt=pt.length;Wt<bt;Wt++){const yt=pt[Wt],Gt=Math.floor(yt.start/4),Qt=Math.ceil(yt.count/4),he=Gt%y.width,W=Math.floor(Gt/y.width),Et=Qt,lt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,he),e.pixelStorei(r.UNPACK_SKIP_ROWS,W),e.texSubImage2D(r.TEXTURE_2D,0,he,W,Et,lt,V,q,y.data)}I.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,tt),e.pixelStorei(r.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(r.UNPACK_SKIP_ROWS,vt)}}function mt(I,y,V){let q=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=r.TEXTURE_3D);const Q=ut(I,y),pt=y.source;e.bindTexture(q,I.__webglTexture,r.TEXTURE0+V);const Mt=i.get(pt);if(pt.version!==Mt.__version||Q===!0){if(e.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const lt=xe.getPrimaries(xe.workingColorSpace),At=y.colorSpace===dn?null:xe.getPrimaries(y.colorSpace),Dt=y.colorSpace===dn||lt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let rt=g(y.image,!1,n.maxTextureSize);rt=Me(y,rt);const vt=s.convert(y.format,y.colorSpace),Wt=s.convert(y.type);let bt=_(y.internalFormat,vt,Wt,y.normalized,y.colorSpace,y.isVideoTexture);ht(q,y);let yt;const Gt=y.mipmaps,Qt=y.isVideoTexture!==!0,he=Mt.__version===void 0||Q===!0,W=pt.dataReady,Et=T(y,rt);if(y.isDepthTexture)bt=b(y.format===Tn,y.type),he&&(Qt?e.texStorage2D(r.TEXTURE_2D,1,bt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,bt,rt.width,rt.height,0,vt,Wt,null));else if(y.isDataTexture)if(Gt.length>0){Qt&&he&&e.texStorage2D(r.TEXTURE_2D,Et,bt,Gt[0].width,Gt[0].height);for(let lt=0,At=Gt.length;lt<At;lt++)yt=Gt[lt],Qt?W&&e.texSubImage2D(r.TEXTURE_2D,lt,0,0,yt.width,yt.height,vt,Wt,yt.data):e.texImage2D(r.TEXTURE_2D,lt,bt,yt.width,yt.height,0,vt,Wt,yt.data);y.generateMipmaps=!1}else Qt?(he&&e.texStorage2D(r.TEXTURE_2D,Et,bt,rt.width,rt.height),W&&Z(y,rt,vt,Wt)):e.texImage2D(r.TEXTURE_2D,0,bt,rt.width,rt.height,0,vt,Wt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qt&&he&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,bt,Gt[0].width,Gt[0].height,rt.depth);for(let lt=0,At=Gt.length;lt<At;lt++)if(yt=Gt[lt],y.format!==Ri)if(vt!==null)if(Qt){if(W)if(y.layerUpdates.size>0){const Dt=oc(yt.width,yt.height,y.format,y.type);for(const dt of y.layerUpdates){const Kt=yt.data.subarray(dt*Dt/yt.data.BYTES_PER_ELEMENT,(dt+1)*Dt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,dt,yt.width,yt.height,1,vt,Kt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,rt.depth,vt,yt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,lt,bt,yt.width,yt.height,rt.depth,0,yt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?W&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,rt.depth,vt,Wt,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,lt,bt,yt.width,yt.height,rt.depth,0,vt,Wt,yt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Qt&&he&&e.texStorage2D(r.TEXTURE_2D,Et,bt,Gt[0].width,Gt[0].height);for(let lt=0,At=Gt.length;lt<At;lt++)yt=Gt[lt],y.format!==Ri?vt!==null?Qt?W&&e.compressedTexSubImage2D(r.TEXTURE_2D,lt,0,0,yt.width,yt.height,vt,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,lt,bt,yt.width,yt.height,0,yt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?W&&e.texSubImage2D(r.TEXTURE_2D,lt,0,0,yt.width,yt.height,vt,Wt,yt.data):e.texImage2D(r.TEXTURE_2D,lt,bt,yt.width,yt.height,0,vt,Wt,yt.data)}else if(y.isDataArrayTexture)if(Qt){if(he&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,bt,rt.width,rt.height,rt.depth),W)if(y.layerUpdates.size>0){const lt=oc(rt.width,rt.height,y.format,y.type);for(const At of y.layerUpdates){const Dt=rt.data.subarray(At*lt/rt.data.BYTES_PER_ELEMENT,(At+1)*lt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,At,rt.width,rt.height,1,vt,Wt,Dt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,vt,Wt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,rt.width,rt.height,rt.depth,0,vt,Wt,rt.data);else if(y.isData3DTexture)Qt?(he&&e.texStorage3D(r.TEXTURE_3D,Et,bt,rt.width,rt.height,rt.depth),W&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,vt,Wt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,bt,rt.width,rt.height,rt.depth,0,vt,Wt,rt.data);else if(y.isFramebufferTexture){if(he)if(Qt)e.texStorage2D(r.TEXTURE_2D,Et,bt,rt.width,rt.height);else{let lt=rt.width,At=rt.height;for(let Dt=0;Dt<Et;Dt++)e.texImage2D(r.TEXTURE_2D,Dt,bt,lt,At,0,vt,Wt,null),lt>>=1,At>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const lt=r.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),rt.parentNode!==lt){lt.appendChild(rt),f.add(y),lt.onpaint=At=>{const Dt=At.changedElements;for(const dt of f)Dt.includes(dt.image)&&(dt.needsUpdate=!0)},lt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,rt);else{const Dt=r.RGBA,dt=r.RGBA,Kt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Dt,dt,Kt,rt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(Qt&&he){const lt=oe(Gt[0]);e.texStorage2D(r.TEXTURE_2D,Et,bt,lt.width,lt.height)}for(let lt=0,At=Gt.length;lt<At;lt++)yt=Gt[lt],Qt?W&&e.texSubImage2D(r.TEXTURE_2D,lt,0,0,vt,Wt,yt):e.texImage2D(r.TEXTURE_2D,lt,bt,vt,Wt,yt);y.generateMipmaps=!1}else if(Qt){if(he){const lt=oe(rt);e.texStorage2D(r.TEXTURE_2D,Et,bt,lt.width,lt.height)}W&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,Wt,rt)}else e.texImage2D(r.TEXTURE_2D,0,bt,vt,Wt,rt);p(y)&&M(q),Mt.__version=pt.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Bt(I,y,V){if(y.image.length!==6)return;const q=ut(I,y),Q=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+V);const pt=i.get(Q);if(Q.version!==pt.__version||q===!0){e.activeTexture(r.TEXTURE0+V);const Mt=xe.getPrimaries(xe.workingColorSpace),tt=y.colorSpace===dn?null:xe.getPrimaries(y.colorSpace),rt=y.colorSpace===dn||Mt===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const vt=y.isCompressedTexture||y.image[0].isCompressedTexture,Wt=y.image[0]&&y.image[0].isDataTexture,bt=[];for(let dt=0;dt<6;dt++)!vt&&!Wt?bt[dt]=g(y.image[dt],!0,n.maxCubemapSize):bt[dt]=Wt?y.image[dt].image:y.image[dt],bt[dt]=Me(y,bt[dt]);const yt=bt[0],Gt=s.convert(y.format,y.colorSpace),Qt=s.convert(y.type),he=_(y.internalFormat,Gt,Qt,y.normalized,y.colorSpace),W=y.isVideoTexture!==!0,Et=pt.__version===void 0||q===!0,lt=Q.dataReady;let At=T(y,yt);ht(r.TEXTURE_CUBE_MAP,y);let Dt;if(vt){W&&Et&&e.texStorage2D(r.TEXTURE_CUBE_MAP,At,he,yt.width,yt.height);for(let dt=0;dt<6;dt++){Dt=bt[dt].mipmaps;for(let Kt=0;Kt<Dt.length;Kt++){const Vt=Dt[Kt];y.format!==Ri?Gt!==null?W?lt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt,0,0,Vt.width,Vt.height,Gt,Vt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt,he,Vt.width,Vt.height,0,Vt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt,0,0,Vt.width,Vt.height,Gt,Qt,Vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt,he,Vt.width,Vt.height,0,Gt,Qt,Vt.data)}}}else{if(Dt=y.mipmaps,W&&Et){Dt.length>0&&At++;const dt=oe(bt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,At,he,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Wt){W?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,bt[dt].width,bt[dt].height,Gt,Qt,bt[dt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,he,bt[dt].width,bt[dt].height,0,Gt,Qt,bt[dt].data);for(let Kt=0;Kt<Dt.length;Kt++){const Le=Dt[Kt].image[dt].image;W?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt+1,0,0,Le.width,Le.height,Gt,Qt,Le.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt+1,he,Le.width,Le.height,0,Gt,Qt,Le.data)}}else{W?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Gt,Qt,bt[dt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,he,Gt,Qt,bt[dt]);for(let Kt=0;Kt<Dt.length;Kt++){const Vt=Dt[Kt];W?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt+1,0,0,Gt,Qt,Vt.image[dt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt+1,he,Gt,Qt,Vt.image[dt])}}}p(y)&&M(r.TEXTURE_CUBE_MAP),pt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Tt(I,y,V,q,Q,pt){const Mt=s.convert(V.format,V.colorSpace),tt=s.convert(V.type),rt=_(V.internalFormat,Mt,tt,V.normalized,V.colorSpace),vt=i.get(y),Wt=i.get(V);if(Wt.__renderTarget=y,!vt.__hasExternalTextures){const bt=Math.max(1,y.width>>pt),yt=Math.max(1,y.height>>pt);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,pt,rt,bt,yt,y.depth,0,Mt,tt,null):e.texImage2D(Q,pt,rt,bt,yt,0,Mt,tt,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),ne(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,Q,Wt.__webglTexture,0,ee(y)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,Q,Wt.__webglTexture,pt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function St(I,y,V){if(r.bindRenderbuffer(r.RENDERBUFFER,I),y.depthBuffer){const q=y.depthTexture,Q=q&&q.isDepthTexture?q.type:null,pt=b(y.stencilBuffer,Q),Mt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ne(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee(y),pt,y.width,y.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee(y),pt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,pt,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,I)}else{const q=y.textures;for(let Q=0;Q<q.length;Q++){const pt=q[Q],Mt=s.convert(pt.format,pt.colorSpace),tt=s.convert(pt.type),rt=_(pt.internalFormat,Mt,tt,pt.normalized,pt.colorSpace);ne(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee(y),rt,y.width,y.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee(y),rt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,rt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(I,y,V){const q=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),ht(r.TEXTURE_CUBE_MAP,y.depthTexture);const vt=s.convert(y.depthTexture.format),Wt=s.convert(y.depthTexture.type);let bt;y.depthTexture.format===nn?bt=r.DEPTH_COMPONENT24:y.depthTexture.format===Tn&&(bt=r.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,bt,y.width,y.height,0,vt,Wt,null)}}else it(y.depthTexture,0);const pt=Q.__webglTexture,Mt=ee(y),tt=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,rt=y.depthTexture.format===Tn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===nn)ne(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,tt,pt,0,Mt):r.framebufferTexture2D(r.FRAMEBUFFER,rt,tt,pt,0);else if(y.depthTexture.format===Tn)ne(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,tt,pt,0,Mt):r.framebufferTexture2D(r.FRAMEBUFFER,rt,tt,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(I){const y=i.get(I),V=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){const q=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=q}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)fe(y.__webglFramebuffer[q],I,q);else{const q=I.texture.mipmaps;q&&q.length>0?fe(y.__webglFramebuffer[0],I,0):fe(y.__webglFramebuffer,I,0)}else if(V){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=r.createRenderbuffer(),St(y.__webglDepthbuffer[q],I,!1);else{const Q=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,pt)}}else{const q=I.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),St(y.__webglDepthbuffer,I,!1);else{const Q=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,pt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(I,y,V){const q=i.get(I);y!==void 0&&Tt(q.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&st(I)}function gt(I){const y=I.texture,V=i.get(I),q=i.get(y);I.addEventListener("dispose",w);const Q=I.textures,pt=I.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=y.version,a.memory.textures++),pt){V.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[tt]=[];for(let rt=0;rt<y.mipmaps.length;rt++)V.__webglFramebuffer[tt][rt]=r.createFramebuffer()}else V.__webglFramebuffer[tt]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let tt=0;tt<y.mipmaps.length;tt++)V.__webglFramebuffer[tt]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let tt=0,rt=Q.length;tt<rt;tt++){const vt=i.get(Q[tt]);vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture(),a.memory.textures++)}if(I.samples>0&&ne(I)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let tt=0;tt<Q.length;tt++){const rt=Q[tt];V.__webglColorRenderbuffer[tt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[tt]);const vt=s.convert(rt.format,rt.colorSpace),Wt=s.convert(rt.type),bt=_(rt.internalFormat,vt,Wt,rt.normalized,rt.colorSpace,I.isXRRenderTarget===!0),yt=ee(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,bt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,V.__webglColorRenderbuffer[tt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),St(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),ht(r.TEXTURE_CUBE_MAP,y);for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0)for(let rt=0;rt<y.mipmaps.length;rt++)Tt(V.__webglFramebuffer[tt][rt],I,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,rt);else Tt(V.__webglFramebuffer[tt],I,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(y)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let tt=0,rt=Q.length;tt<rt;tt++){const vt=Q[tt],Wt=i.get(vt);let bt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(bt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(bt,Wt.__webglTexture),ht(bt,vt),Tt(V.__webglFramebuffer,I,vt,r.COLOR_ATTACHMENT0+tt,bt,0),p(vt)&&M(bt)}e.unbindTexture()}else{let tt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(tt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(tt,q.__webglTexture),ht(tt,y),y.mipmaps&&y.mipmaps.length>0)for(let rt=0;rt<y.mipmaps.length;rt++)Tt(V.__webglFramebuffer[rt],I,y,r.COLOR_ATTACHMENT0,tt,rt);else Tt(V.__webglFramebuffer,I,y,r.COLOR_ATTACHMENT0,tt,0);p(y)&&M(tt),e.unbindTexture()}I.depthBuffer&&st(I)}function xt(I){const y=I.textures;for(let V=0,q=y.length;V<q;V++){const Q=y[V];if(p(Q)){const pt=v(I),Mt=i.get(Q).__webglTexture;e.bindTexture(pt,Mt),M(pt),e.unbindTexture()}}}const _t=[],Jt=[];function Yt(I){if(I.samples>0){if(ne(I)===!1){const y=I.textures,V=I.width,q=I.height;let Q=r.COLOR_BUFFER_BIT;const pt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=i.get(I),tt=y.length>1;if(tt)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const rt=I.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),tt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);const Wt=i.get(y[vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,V,q,0,0,V,q,Q,r.NEAREST),h===!0&&(_t.length=0,Jt.length=0,_t.push(r.COLOR_ATTACHMENT0+vt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(_t.push(pt),Jt.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Jt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),tt)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);const Wt=i.get(y[vt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&h){const y=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function ee(I){return Math.min(n.maxSamples,I.samples)}function ne(I){const y=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(I){const y=a.render.frame;c.get(I)!==y&&(c.set(I,y),I.update())}function Me(I,y){const V=I.colorSpace,q=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==oa&&V!==dn&&(xe.getTransfer(V)===Te?(q!==Ri||Q!==gi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_e("WebGLTextures: Unsupported texture color space:",V)),y}function oe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=F,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=it,this.setTexture2DArray=Y,this.setTexture3D=et,this.setTextureCube=nt,this.rebindTextures=ft,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function PM(r,t){function e(i,n=dn){let s;const a=xe.getTransfer(n);if(i===gi)return r.UNSIGNED_BYTE;if(i===Rh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Ch)return r.UNSIGNED_SHORT_5_5_5_1;if(i===au)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===ou)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===su)return r.BYTE;if(i===ru)return r.SHORT;if(i===Js)return r.UNSIGNED_SHORT;if(i===Ah)return r.INT;if(i===Gi)return r.UNSIGNED_INT;if(i===Ai)return r.FLOAT;if(i===ci)return r.HALF_FLOAT;if(i===hu)return r.ALPHA;if(i===lu)return r.RGB;if(i===Ri)return r.RGBA;if(i===nn)return r.DEPTH_COMPONENT;if(i===Tn)return r.DEPTH_STENCIL;if(i===Ph)return r.RED;if(i===Ih)return r.RED_INTEGER;if(i===Ln)return r.RG;if(i===Lh)return r.RG_INTEGER;if(i===Dh)return r.RGBA_INTEGER;if(i===Zr||i===Jr||i===Kr||i===$r)if(a===Te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lo||i===Do||i===zo||i===No)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Do)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===No)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fo||i===Uo||i===Oo||i===Bo||i===ko||i===sa||i===Ho)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fo||i===Uo)return a===Te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Oo)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bo)return s.COMPRESSED_R11_EAC;if(i===ko)return s.COMPRESSED_SIGNED_R11_EAC;if(i===sa)return s.COMPRESSED_RG11_EAC;if(i===Ho)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Go||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===Jo||i===Ko||i===$o||i===Qo||i===jo||i===th||i===eh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Go)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vo)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wo)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xo)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qo)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yo)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zo)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jo)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ko)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$o)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qo)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jo)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===th)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eh)return a===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ih||i===nh||i===sh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ih)return a===Te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rh||i===ah||i===ra||i===oh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===rh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ah)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const IM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LM=`
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

}`;class DM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new vu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ni({vertexShader:IM,fragmentShader:LM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new S(new Ge(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zM extends zn{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",h=1,l=null,c=null,f=null,u=null,d=null,m=null;const x=typeof XRWebGLBinding<"u",g=new DM,p={},M=e.getContextAttributes();let v=null,_=null;const b=[],T=[],R=new ot;let w=null,A=null;const P=new pi;P.viewport=new Ue;const z=new pi;z.viewport=new Ue;const B=[P,z],F=new B0;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=b[G];return Z===void 0&&(Z=new Ba,b[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=b[G];return Z===void 0&&(Z=new Ba,b[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=b[G];return Z===void 0&&(Z=new Ba,b[G]=Z),Z.getHandSpace()};function $(G){const Z=T.indexOf(G.inputSource);if(Z===-1)return;const mt=b[Z];mt!==void 0&&(mt.update(G.inputSource,G.frame,l||a),mt.dispatchEvent({type:G.type,data:G.inputSource}))}function k(){n.removeEventListener("select",$),n.removeEventListener("selectstart",$),n.removeEventListener("selectend",$),n.removeEventListener("squeeze",$),n.removeEventListener("squeezestart",$),n.removeEventListener("squeezeend",$),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",it);for(let G=0;G<b.length;G++){const Z=T[G];Z!==null&&(T[G]=null,b[G].disconnect(Z))}D=null,O=null,g.reset();for(const G in p)delete p[G];if(t.setRenderTarget(v),d=null,u=null,f=null,n=null,_=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),A!==null){const G=A.camera;G.fov=A.fov,G.zoom=A.zoom,G.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(n,e)),f},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(v=t.getRenderTarget(),n.addEventListener("select",$),n.addEventListener("selectstart",$),n.addEventListener("selectend",$),n.addEventListener("squeeze",$),n.addEventListener("squeezestart",$),n.addEventListener("squeezeend",$),n.addEventListener("end",k),n.addEventListener("inputsourceschange",it),M.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Bt=null,Tt=null;M.depth&&(Tt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=M.stencil?Tn:nn,Bt=M.stencil?Ks:Gi);const St={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(St),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new li(u.textureWidth,u.textureHeight,{format:Ri,type:gi,depthTexture:new js(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,e,mt),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new li(d.framebufferWidth,d.framebufferHeight,{format:Ri,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await n.requestReferenceSpace(o),ut.setContext(n),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(G){for(let Z=0;Z<G.removed.length;Z++){const mt=G.removed[Z],Bt=T.indexOf(mt);Bt>=0&&(T[Bt]=null,b[Bt].disconnect(mt))}for(let Z=0;Z<G.added.length;Z++){const mt=G.added[Z];let Bt=T.indexOf(mt);if(Bt===-1){for(let St=0;St<b.length;St++)if(St>=T.length){T.push(mt),Bt=St;break}else if(T[St]===null){T[St]=mt,Bt=St;break}if(Bt===-1)break}const Tt=b[Bt];Tt&&Tt.connect(mt)}}const Y=new N,et=new N;function nt(G,Z,mt){Y.setFromMatrixPosition(Z.matrixWorld),et.setFromMatrixPosition(mt.matrixWorld);const Bt=Y.distanceTo(et),Tt=Z.projectionMatrix.elements,St=mt.projectionMatrix.elements,fe=Tt[14]/(Tt[10]-1),st=Tt[14]/(Tt[10]+1),ft=(Tt[9]+1)/Tt[5],gt=(Tt[9]-1)/Tt[5],xt=(Tt[8]-1)/Tt[0],_t=(St[8]+1)/St[0],Jt=fe*xt,Yt=fe*_t,ee=Bt/(-xt+_t),ne=ee*-xt;if(Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ne),G.translateZ(ee),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Tt[10]===-1)G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const U=fe+ee,Me=st+ee,oe=Jt-ne,I=Yt+(Bt-ne),y=ft*st/Me*U,V=gt*st/Me*U;G.projectionMatrix.makePerspective(oe,I,y,V,U,Me),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Nt(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;let Z=G.near,mt=G.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(mt=g.depthFar)),F.near=z.near=P.near=Z,F.far=z.far=P.far=mt,(D!==F.near||O!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,O=F.far),F.layers.mask=G.layers.mask|6,P.layers.mask=F.layers.mask&-5,z.layers.mask=F.layers.mask&-3;const Bt=G.parent,Tt=F.cameras;Nt(F,Bt);for(let St=0;St<Tt.length;St++)Nt(Tt[St],Bt);Tt.length===2?nt(F,P,z):F.projectionMatrix.copy(P.projectionMatrix),A===null&&G.isPerspectiveCamera&&(A={camera:G,fov:G.fov,zoom:G.zoom}),X(G,F,Bt)};function X(G,Z,mt){mt===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(mt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Qs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return h},this.setFoveation=function(G){h=G,u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(G){return p[G]};let ct=null;function ht(G,Z){if(c=Z.getViewerPose(l||a),m=Z,c!==null){const mt=c.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Bt=!1;mt.length!==F.cameras.length&&(F.cameras.length=0,Bt=!0);for(let st=0;st<mt.length;st++){const ft=mt[st];let gt=null;if(d!==null)gt=d.getViewport(ft);else{const _t=f.getViewSubImage(u,ft);gt=_t.viewport,st===0&&(t.setRenderTargetTextures(_,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(_))}let xt=B[st];xt===void 0&&(xt=new pi,xt.layers.enable(st),xt.viewport=new Ue,B[st]=xt),xt.matrix.fromArray(ft.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(ft.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(gt.x,gt.y,gt.width,gt.height),st===0&&(F.matrix.copy(xt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Bt===!0&&F.cameras.push(xt)}const Tt=n.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const st=f.getDepthInformation(mt[0]);st&&st.isValid&&st.texture&&g.init(st,n.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let st=0;st<mt.length;st++){const ft=mt[st].camera;if(ft){let gt=p[ft];gt||(gt=new vu,p[ft]=gt);const xt=f.getCameraImage(ft);gt.sourceTexture=xt}}}}for(let mt=0;mt<b.length;mt++){const Bt=T[mt],Tt=b[mt];Bt!==null&&Tt!==void 0&&Tt.update(Bt,Z,l||a)}ct&&ct(G,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),m=null}const ut=new Fu;ut.setAnimationLoop(ht),this.setAnimationLoop=function(G){ct=G},this.dispose=function(){}}}const NM=new Ae,Vu=new ae;Vu.set(-1,0,0,0,1,0,0,0,1);function FM(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Lu(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,M,v,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),c(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?h(g,p,M,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ze&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ze&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,_=M.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(NM.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Vu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function h(g,p,M,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function UM(r,t,e,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(_,b){const T=b.program;i.uniformBlockBinding(_,T)}function l(_,b){let T=n[_.id];T===void 0&&(g(_),T=c(_),n[_.id]=T,_.addEventListener("dispose",M));const R=b.program;i.updateUBOMapping(_,R);const w=t.render.frame;s[_.id]!==w&&(u(_),s[_.id]=w)}function c(_){const b=f();_.__bindingPointIndex=b;const T=r.createBuffer(),R=_.__size,w=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,T),T}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return _e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const b=n[_.id],T=_.uniforms,R=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let w=0,A=T.length;w<A;w++){const P=T[w];if(Array.isArray(P))for(let z=0,B=P.length;z<B;z++)d(P[z],w,z,R);else d(P,w,0,R)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(_,b,T,R){if(x(_,b,T,R)===!0){const w=_.__offset,A=_.value;if(Array.isArray(A)){let P=0;for(let z=0;z<A.length;z++){const B=A[z],F=p(B);m(B,_.__data,P),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,_.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,_.__data)}}function m(_,b,T){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,T)}function x(_,b,T,R){const w=_.value,A=b+"_"+T;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:ArrayBuffer.isView(w)?R[A]=w.slice():R[A]=w.clone(),!0;{const P=R[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[A]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(P.equals(w)===!1)return P.copy(w),!0}}return!1}function g(_){const b=_.uniforms;let T=0;const R=16;for(let A=0,P=b.length;A<P;A++){const z=Array.isArray(b[A])?b[A]:[b[A]];for(let B=0,F=z.length;B<F;B++){const D=z[B],O=Array.isArray(D.value)?D.value:[D.value];for(let $=0,k=O.length;$<k;$++){const it=O[$],Y=p(it),et=T%R,nt=et%Y.boundary,Nt=et+nt;T+=nt,Nt!==0&&R-Nt<Y.storage&&(T+=R-Nt),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=Y.storage}}}const w=T%R;return w>0&&(T+=R-w),_.__size=T,_.__cache={},this}function p(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):se("WebGLRenderer: Unsupported uniform value type.",_),b}function M(_){const b=_.target;b.removeEventListener("dispose",M);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(n[b.id]),delete n[b.id],delete s[b.id]}function v(){for(const _ in n)r.deleteBuffer(n[_]);a=[],n={},s={}}return{bind:h,update:l,dispose:v}}const OM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function BM(){return Li===null&&(Li=new xu(OM,16,16,Ln,ci),Li.name="DFG_LUT",Li.minFilter=ii,Li.magFilter=ii,Li.wrapS=Qi,Li.wrapT=Qi,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class kM{constructor(t={}){const{canvas:e=ap(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=gi}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const x=d,g=new Set([Dh,Lh,Ih]),p=new Set([gi,Gi,Js,Ks,Rh,Ch]),M=new Uint32Array(4),v=new Int32Array(4),_=new N;let b=null,T=null;const R=[],w=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let z=!1,B=null,F=null,D=null,O=null;this._outputColorSpace=ke;let $=0,k=0,it=null,Y=-1,et=null;const nt=new Ue,Nt=new Ue;let X=null;const ct=new Ot(0);let ht=0,ut=e.width,G=e.height,Z=1,mt=null,Bt=null;const Tt=new Ue(0,0,ut,G),St=new Ue(0,0,ut,G);let fe=!1;const st=new kh;let ft=!1,gt=!1;const xt=new Ae,_t=new N,Jt=new Ue,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function ne(){return it===null?Z:1}let U=i;function Me(E,H){return e.getContext(E,H)}let oe,I,y,V,q,Q,pt,Mt,tt,rt,vt,Wt,bt,yt,Gt,Qt,he,W,Et,lt,At,Dt,dt;try{const E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vh}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",wi,!1),U===null){const H="webgl2";if(U=Me(H,E),U===null)throw Me(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(E){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",wi,!1),_e("WebGLRenderer: "+E.message),E}function Kt(){oe=new Bx(U),oe.init(),At=new PM(U,oe),I=new Cx(U,oe,t,At),y=new RM(U,oe),I.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),F=U.createFramebuffer(),D=U.createFramebuffer(),O=U.createFramebuffer(),V=new Gx(U),q=new pM,Q=new CM(U,oe,y,q,I,At,V),pt=new Ox(P),Mt=new W0(U),Dt=new Ax(U,Mt),tt=new kx(U,Mt,V,Dt),rt=new Wx(U,tt,Mt,Dt,V),W=new Vx(U,I,Q),Gt=new Px(q),vt=new dM(P,pt,oe,I,Dt,Gt),Wt=new FM(P,q),bt=new gM,yt=new SM(oe),he=new Ex(P,pt,y,rt,m,h),Qt=new AM(P,rt,I),dt=new UM(U,V,I,y),Et=new Rx(U,oe,V),lt=new Hx(U,oe,V),V.programs=vt.programs,P.capabilities=I,P.extensions=oe,P.properties=q,P.renderLists=bt,P.shadowMap=Qt,P.state=y,P.info=V}x!==gi&&(A=new qx(x,e.width,e.height,o,n,s));const Vt=new zM(P,U);this.xr=Vt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(ut,G,!1))},this.getSize=function(E){return E.set(ut,G)},this.setSize=function(E,H,j=!0){if(Vt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=E,G=H,e.width=Math.floor(E*Z),e.height=Math.floor(H*Z),j===!0&&(e.style.width=E+"px",e.style.height=H+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(ut*Z,G*Z).floor()},this.setDrawingBufferSize=function(E,H,j){ut=E,G=H,Z=j,e.width=Math.floor(E*j),e.height=Math.floor(H*j),this.setViewport(0,0,E,H)},this.setEffects=function(E){if(x===gi){_e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let H=0;H<E.length;H++)if(E[H].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(nt)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,H,j,J){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,H,j,J),y.viewport(nt.copy(Tt).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(St)},this.setScissor=function(E,H,j,J){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,H,j,J),y.scissor(Nt.copy(St).multiplyScalar(Z).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(E){y.setScissorTest(fe=E)},this.setOpaqueSort=function(E){mt=E},this.setTransparentSort=function(E){Bt=E},this.getClearColor=function(E){return E.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,j=!0){let J=0;if(E){let K=!1;if(it!==null){const Lt=it.texture.format;K=g.has(Lt)}if(K){const Lt=it.texture.type,Ft=p.has(Lt),Pt=he.getClearColor(),kt=he.getClearAlpha(),Xt=Pt.r,le=Pt.g,ge=Pt.b;Ft?(M[0]=Xt,M[1]=le,M[2]=ge,M[3]=kt,U.clearBufferuiv(U.COLOR,0,M)):(v[0]=Xt,v[1]=le,v[2]=ge,v[3]=kt,U.clearBufferiv(U.COLOR,0,v))}else J|=U.COLOR_BUFFER_BIT}H&&(J|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),B=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",wi,!1),he.dispose(),bt.dispose(),yt.dispose(),q.dispose(),pt.dispose(),rt.dispose(),Dt.dispose(),dt.dispose(),vt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",jh),Vt.removeEventListener("sessionend",tl),xn.stop()};function Le(E){E.preventDefault(),ca("WebGLRenderer: Context Lost."),z=!0}function ye(){ca("WebGLRenderer: Context Restored."),z=!1;const E=V.autoReset,H=Qt.enabled,j=Qt.autoUpdate,J=Qt.needsUpdate,K=Qt.type;Kt(),V.autoReset=E,Qt.enabled=H,Qt.autoUpdate=j,Qt.needsUpdate=J,Qt.type=K}function wi(E){_e("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ci(E){const H=E.target;H.removeEventListener("dispose",Ci),Yu(H)}function Yu(E){Zu(E),q.remove(E)}function Zu(E){const H=q.get(E).programs;H!==void 0&&(H.forEach(function(j){vt.releaseProgram(j)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,j,J,K,Lt){H===null&&(H=Yt);const Ft=K.isMesh&&K.matrixWorld.determinantAffine()<0,Pt=$u(E,H,j,J,K);y.setMaterial(J,Ft);let kt=j.index,Xt=1;if(J.wireframe===!0){if(kt=tt.getWireframeAttribute(j),kt===void 0)return;Xt=2}const le=j.drawRange,ge=j.attributes.position;let Ht=le.start*Xt,be=(le.start+le.count)*Xt;Lt!==null&&(Ht=Math.max(Ht,Lt.start*Xt),be=Math.min(be,(Lt.start+Lt.count)*Xt)),kt!==null?(Ht=Math.max(Ht,0),be=Math.min(be,kt.count)):ge!=null&&(Ht=Math.max(Ht,0),be=Math.min(be,ge.count));const Ve=be-Ht;if(Ve<0||Ve===1/0)return;Dt.setup(K,J,Pt,j,kt);let Fe,Pe=Et;if(kt!==null&&(Fe=Mt.get(kt),Pe=lt,Pe.setIndex(Fe)),K.isMesh)J.wireframe===!0?(y.setLineWidth(J.wireframeLinewidth*ne()),Pe.setMode(U.LINES)):Pe.setMode(U.TRIANGLES);else if(K.isLine){let Qe=J.linewidth;Qe===void 0&&(Qe=1),y.setLineWidth(Qe*ne()),K.isLineSegments?Pe.setMode(U.LINES):K.isLineLoop?Pe.setMode(U.LINE_LOOP):Pe.setMode(U.LINE_STRIP)}else K.isPoints?Pe.setMode(U.POINTS):K.isSprite&&Pe.setMode(U.TRIANGLES);if(K.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Pe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Qe=K._multiDrawStarts,zt=K._multiDrawCounts,ri=K._multiDrawCount,ve=kt?Mt.get(kt).bytesPerElement:1,xi=q.get(J).currentProgram.getUniforms();for(let Pi=0;Pi<ri;Pi++)xi.setValue(U,"_gl_DrawID",Pi),Pe.render(Qe[Pi]/ve,zt[Pi])}else if(K.isInstancedMesh)Pe.renderInstances(Ht,Ve,K.count);else if(j.isInstancedBufferGeometry){const Qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,zt=Math.min(j.instanceCount,Qe);Pe.renderInstances(Ht,Ve,zt)}else Pe.render(Ht,Ve)};function Qh(E,H,j,J){B!==null&&E.isNodeMaterial&&B.setObject(J,E),ft===!0&&Gt.setState(E,j,!1),E.transparent===!0&&E.side===$t&&E.forceSinglePass===!1?(E.side=Ze,E.needsUpdate=!0,ar(E,H,J),E.side=pn,E.needsUpdate=!0,ar(E,H,J),E.side=$t):ar(E,H,J)}this.compile=function(E,H,j=null){j===null&&(j=E),B!==null&&B.renderStart(E,H,j),T=yt.get(j),T.init(H),w.push(T),j.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),E!==j&&E.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),gt=this.localClippingEnabled,ft=Gt.init(this.clippingPlanes,gt),ft===!0&&Gt.setGlobalState(this.clippingPlanes,H),B!==null&&Qt.render(T.state.shadowsArray,j,H);const J=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Lt=K.material;if(Lt)if(Array.isArray(Lt))for(let Ft=0;Ft<Lt.length;Ft++){const Pt=Lt[Ft];Qh(Pt,j,H,K),J.add(Pt)}else Qh(Lt,j,H,K),J.add(Lt)}),T=w.pop(),B!==null&&B.renderEnd(),J},this.compileAsync=function(E,H,j=null){const J=this.compile(E,H,j);return new Promise(K=>{function Lt(){if(J.forEach(function(Ft){const kt=q.get(Ft).currentProgram;(kt===void 0||kt.isReady())&&J.delete(Ft)}),J.size===0){K(E);return}setTimeout(Lt,10)}oe.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let ba=null;function Ju(E){ba&&ba(E)}function jh(){xn.stop()}function tl(){xn.start()}const xn=new Fu;xn.setAnimationLoop(Ju),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(E){ba=E,Vt.setAnimationLoop(E),E===null?xn.stop():xn.start()},Vt.addEventListener("sessionstart",jh),Vt.addEventListener("sessionend",tl),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){_e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;B!==null&&B.renderStart(E,H);const j=Vt.enabled===!0&&Vt.isPresenting===!0,J=A!==null&&(it===null||j)&&A.begin(P,it);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(H),H=Vt.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,H,it),T=yt.get(E,w.length),T.init(H),T.state.textureUnits=Q.getTextureUnits(),w.push(T),xt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),st.setFromProjectionMatrix(xt,Ui,H.reversedDepth),gt=this.localClippingEnabled,ft=Gt.init(this.clippingPlanes,gt),b=bt.get(E,R.length),b.init(),R.push(b),Vt.enabled===!0&&Vt.isPresenting===!0){const Ft=P.xr.getDepthSensingMesh();Ft!==null&&Ta(Ft,H,-1/0,P.sortObjects)}Ta(E,H,0,P.sortObjects),b.finish(),B!==null&&B.updateLights(T.state.lightsArray),P.sortObjects===!0&&b.sort(mt,Bt),ee=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,ee&&he.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&Gt.beginShadows();const K=T.state.shadowsArray;if(Qt.render(K,E,H),ft===!0&&Gt.endShadows(),(J&&A.hasRenderPass())===!1){const Ft=b.opaque,Pt=b.transmissive;if(T.setupLights(),H.isArrayCamera){const kt=H.cameras;if(Pt.length>0)for(let Xt=0,le=kt.length;Xt<le;Xt++){const ge=kt[Xt];il(Ft,Pt,E,ge)}ee&&he.render(E);for(let Xt=0,le=kt.length;Xt<le;Xt++){const ge=kt[Xt];el(b,E,ge,ge.viewport)}}else Pt.length>0&&il(Ft,Pt,E,H),ee&&he.render(E),el(b,E,H)}it!==null&&k===0&&(Q.updateMultisampleRenderTarget(it),Q.updateRenderTargetMipmap(it)),J&&A.end(P),E.isScene===!0&&E.onAfterRender(P,E,H),Dt.resetDefaultState(),Y=-1,et=null,w.pop(),w.length>0?(T=w[w.length-1],Q.setTextureUnits(T.state.textureUnits),ft===!0&&Gt.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,B!==null&&B.renderEnd()};function Ta(E,H,j,J){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(st)){J&&Jt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xt);const Ft=rt.update(E),Pt=E.material;Pt.visible&&b.push(E,Ft,Pt,j,Jt.z,null,H)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(st))){const Ft=rt.update(E),Pt=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Jt.copy(E.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Jt.copy(Ft.boundingSphere.center)),Jt.applyMatrix4(E.matrixWorld).applyMatrix4(xt)),Array.isArray(Pt)){const kt=Ft.groups;for(let Xt=0,le=kt.length;Xt<le;Xt++){const ge=kt[Xt],Ht=Pt[ge.materialIndex];Ht&&Ht.visible&&b.push(E,Ft,Ht,j,Jt.z,ge,H)}}else Pt.visible&&b.push(E,Ft,Pt,j,Jt.z,null,H)}}const Lt=E.children;for(let Ft=0,Pt=Lt.length;Ft<Pt;Ft++)Ta(Lt[Ft],H,j,J)}function el(E,H,j,J){const{opaque:K,transmissive:Lt,transparent:Ft}=E;T.setupLightsView(j),ft===!0&&Gt.setGlobalState(P.clippingPlanes,j),J&&y.viewport(nt.copy(J)),K.length>0&&rr(K,H,j),Lt.length>0&&rr(Lt,H,j),Ft.length>0&&rr(Ft,H,j),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function il(E,H,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){const Ht=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new li(1,1,{generateMipmaps:!0,type:Ht?ci:gi,minFilter:bn,samples:Math.max(4,I.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}const Lt=T.state.transmissionRenderTarget[J.id],Ft=J.viewport||nt;Lt.setSize(Ft.z*P.transmissionResolutionScale,Ft.w*P.transmissionResolutionScale);const Pt=P.getRenderTarget(),kt=P.getActiveCubeFace(),Xt=P.getActiveMipmapLevel();P.setRenderTarget(Lt),P.getClearColor(ct),ht=P.getClearAlpha(),ht<1&&P.setClearColor(16777215,.5),P.clear(),ee&&he.render(j);const le=P.toneMapping;P.toneMapping=Bi;const ge=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),ft===!0&&Gt.setGlobalState(P.clippingPlanes,J),rr(E,j,J),Q.updateMultisampleRenderTarget(Lt),Q.updateRenderTargetMipmap(Lt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let be=0,Ve=H.length;be<Ve;be++){const Fe=H[be],{object:Pe,geometry:Qe,material:zt,group:ri}=Fe;if(zt.side===$t&&Pe.layers.test(J.layers)){const ve=zt.side;zt.side=Ze,zt.needsUpdate=!0,nl(Pe,j,J,Qe,zt,ri),zt.side=ve,zt.needsUpdate=!0,Ht=!0}}Ht===!0&&(Q.updateMultisampleRenderTarget(Lt),Q.updateRenderTargetMipmap(Lt))}P.setRenderTarget(Pt,kt,Xt),P.setClearColor(ct,ht),ge!==void 0&&(J.viewport=ge),P.toneMapping=le}function rr(E,H,j){const J=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Lt=E.length;K<Lt;K++){const Ft=E[K],{object:Pt,geometry:kt,group:Xt}=Ft;let le=Ft.material;le.allowOverride===!0&&J!==null&&(le=J),Pt.layers.test(j.layers)&&nl(Pt,H,j,kt,le,Xt)}}function nl(E,H,j,J,K,Lt){B!==null&&K.isNodeMaterial&&B.setObject(E,K),E.onBeforeRender(P,H,j,J,K,Lt),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(P,H,j,J,E,Lt),K.transparent===!0&&K.side===$t&&K.forceSinglePass===!1?(K.side=Ze,K.needsUpdate=!0,P.renderBufferDirect(j,H,J,K,E,Lt),K.side=pn,K.needsUpdate=!0,P.renderBufferDirect(j,H,J,K,E,Lt),K.side=$t):P.renderBufferDirect(j,H,J,K,E,Lt),E.onAfterRender(P,H,j,J,K,Lt)}function ar(E,H,j){H.isScene!==!0&&(H=Yt);const J=q.get(E),K=T.state.lights,Lt=T.state.shadowsArray,Ft=K.state.version,Pt=vt.getParameters(E,K.state,Lt,H,j,T.state.lightProbeGridArray),kt=vt.getProgramCacheKey(Pt);let Xt=J.programs;J.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;const le=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;J.envMap=pt.get(E.envMap||J.environment,le),J.envMapRotation=J.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Xt===void 0&&(E.addEventListener("dispose",Ci),Xt=new Map,J.programs=Xt);let ge=Xt.get(kt);if(ge!==void 0){if(J.currentProgram===ge&&J.lightsStateVersion===Ft)return rl(E,Pt),ge}else Pt.uniforms=vt.getUniforms(E),B!==null&&E.isNodeMaterial&&B.build(E,j,Pt),E.onBeforeCompile(Pt,P),ge=vt.acquireProgram(Pt,kt),Xt.set(kt,ge),J.uniforms=Pt.uniforms;const Ht=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=Gt.uniform),rl(E,Pt),J.needsLights=ju(E),J.lightsStateVersion=Ft,J.needsLights&&(Ht.ambientLightColor.value=K.state.ambient,Ht.lightProbe.value=K.state.probe,Ht.sunLights.value=K.state.sun,Ht.sunLightShadows.value=K.state.sunShadow,Ht.directionalLights.value=K.state.directional,Ht.directionalLightShadows.value=K.state.directionalShadow,Ht.spotLights.value=K.state.spot,Ht.spotLightShadows.value=K.state.spotShadow,Ht.rectAreaLights.value=K.state.rectArea,Ht.ltc_1.value=K.state.rectAreaLTC1,Ht.ltc_2.value=K.state.rectAreaLTC2,Ht.pointLights.value=K.state.point,Ht.pointLightShadows.value=K.state.pointShadow,Ht.hemisphereLights.value=K.state.hemi,Ht.sunShadowMatrix.value=K.state.sunShadowMatrix,Ht.sunShadowCascade.value=K.state.sunShadowCascade,Ht.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ht.spotLightMatrix.value=K.state.spotLightMatrix,Ht.spotLightMap.value=K.state.spotLightMap,Ht.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=T.state.lightProbeGridArray.length>0,J.currentProgram=ge,J.uniformsList=null,ge}function sl(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Qr.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function rl(E,H){const j=q.get(E);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function Ku(E,H){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let j=0,J=E.length;j<J;j++){const K=E[j];if(K.texture!==null&&K.boundingBox.containsPoint(_))return K}return null}function $u(E,H,j,J,K){H.isScene!==!0&&(H=Yt),Q.resetTextureUnits();const Lt=H.fog,Ft=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,Pt=it===null?P.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:xe.workingColorSpace,kt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Xt=pt.get(J.envMap||Ft,kt),le=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ge=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ht=!!j.morphAttributes.position,be=!!j.morphAttributes.normal,Ve=!!j.morphAttributes.color;let Fe=Bi;J.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Fe=P.toneMapping);const Pe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qe=Pe!==void 0?Pe.length:0,zt=q.get(J),ri=T.state.lights;if(ft===!0&&(gt===!0||E!==et)){const De=E===et&&J.id===Y;Gt.setState(J,E,De)}let ve=!1;J.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ri.state.version||zt.outputColorSpace!==Pt||K.isBatchedMesh&&zt.batching===!1||!K.isBatchedMesh&&zt.batching===!0||K.isBatchedMesh&&zt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&zt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&zt.instancing===!1||!K.isInstancedMesh&&zt.instancing===!0||K.isSkinnedMesh&&zt.skinning===!1||!K.isSkinnedMesh&&zt.skinning===!0||K.isInstancedMesh&&zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&zt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&zt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&zt.instancingMorph===!1&&K.morphTexture!==null||zt.envMap!==Xt||J.fog===!0&&zt.fog!==Lt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Gt.numPlanes||zt.numIntersection!==Gt.numIntersection)||zt.vertexAlphas!==le||zt.vertexTangents!==ge||zt.morphTargets!==Ht||zt.morphNormals!==be||zt.morphColors!==Ve||zt.toneMapping!==Fe||zt.morphTargetsCount!==Qe||!!zt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,zt.__version=J.version);let xi=zt.currentProgram;ve===!0&&(xi=ar(J,H,K),B&&J.isNodeMaterial&&B.onUpdateProgram(J,xi,zt));let Pi=!1,rn=!1,Fn=!1;const Re=xi.getUniforms(),He=zt.uniforms;if(y.useProgram(xi.program)&&(Pi=!0,rn=!0,Fn=!0),J.id!==Y&&(Y=J.id,rn=!0),zt.needsLights){const De=Ku(T.state.lightProbeGridArray,K);zt.lightProbeGrid!==De&&(zt.lightProbeGrid=De,rn=!0)}if(Pi||et!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Re.setValue(U,"projectionMatrix",E.projectionMatrix),Re.setValue(U,"viewMatrix",E.matrixWorldInverse);const on=Re.map.cameraPosition;on!==void 0&&on.setValue(U,_t.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&Re.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Re.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),et!==E&&(et=E,rn=!0,Fn=!0)}if(zt.needsLights&&(ri.state.sunShadowMap.length>0&&Re.setValue(U,"sunShadowMap",ri.state.sunShadowMap,Q),ri.state.directionalShadowMap.length>0&&Re.setValue(U,"directionalShadowMap",ri.state.directionalShadowMap,Q),ri.state.spotShadowMap.length>0&&Re.setValue(U,"spotShadowMap",ri.state.spotShadowMap,Q),ri.state.pointShadowMap.length>0&&Re.setValue(U,"pointShadowMap",ri.state.pointShadowMap,Q)),K.isSkinnedMesh){Re.setOptional(U,K,"bindMatrix"),Re.setOptional(U,K,"bindMatrixInverse");const De=K.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Re.setValue(U,"boneTexture",De.boneTexture,Q))}K.isBatchedMesh&&(Re.setOptional(U,K,"batchingTexture"),Re.setValue(U,"batchingTexture",K._matricesTexture,Q),Re.setOptional(U,K,"batchingIdTexture"),Re.setValue(U,"batchingIdTexture",K._indirectTexture,Q),Re.setOptional(U,K,"batchingColorTexture"),K._colorsTexture!==null&&Re.setValue(U,"batchingColorTexture",K._colorsTexture,Q));const an=j.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&W.update(K,j,xi),(rn||zt.receiveShadow!==K.receiveShadow)&&(zt.receiveShadow=K.receiveShadow,Re.setValue(U,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(He.envMapIntensity.value=H.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=BM()),rn){if(Re.setValue(U,"toneMappingExposure",P.toneMappingExposure),zt.needsLights&&Qu(He,Fn),Lt&&J.fog===!0&&Wt.refreshFogUniforms(He,Lt),Wt.refreshMaterialUniforms(He,J,Z,G,T.state.transmissionRenderTarget[E.id]),zt.needsLights&&zt.lightProbeGrid){const De=zt.lightProbeGrid;He.probesSH.value=De.texture,He.probesMin.value.copy(De.boundingBox.min),He.probesMax.value.copy(De.boundingBox.max),He.probesResolution.value.copy(De.resolution)}Qr.upload(U,sl(zt),He,Q)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Qr.upload(U,sl(zt),He,Q),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Re.setValue(U,"center",K.center),Re.setValue(U,"modelViewMatrix",K.modelViewMatrix),Re.setValue(U,"normalMatrix",K.normalMatrix),Re.setValue(U,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){const De=J.uniformsGroups;for(let on=0,Un=De.length;on<Un;on++){const ol=De[on];dt.update(ol,xi),dt.bind(ol,xi)}}return xi}function Qu(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.sunLights.needsUpdate=H,E.sunLightShadows.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function ju(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(E,H,j){const J=q.get(E);J.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=H,q.get(E.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const j=q.get(E);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,j=0){it=E,$=H,k=j;let J=null,K=!1,Lt=!1;if(E){const Pt=q.get(E);if(Pt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,Pt.__webglFramebuffer),nt.copy(E.viewport),Nt.copy(E.scissor),X=E.scissorTest,y.viewport(nt),y.scissor(Nt),y.setScissorTest(X),Y=-1;return}else if(Pt.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(Pt.__hasExternalTextures)Q.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const le=E.depthTexture;if(Pt.__boundDepthTexture!==le){if(le!==null&&q.has(le)&&(E.width!==le.image.width||E.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}const kt=E.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Lt=!0);const Xt=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?J=Xt[H][j]:J=Xt[H],K=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?J=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?J=Xt[j]:J=Xt,nt.copy(E.viewport),Nt.copy(E.scissor),X=E.scissorTest}else nt.copy(Tt).multiplyScalar(Z).floor(),Nt.copy(St).multiplyScalar(Z).floor(),X=fe;if(j!==0&&(J=F),y.bindFramebuffer(U.FRAMEBUFFER,J)&&y.drawBuffers(E,J),y.viewport(nt),y.scissor(Nt),y.setScissorTest(X),K){const Pt=q.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pt.__webglTexture,j)}else if(Lt){const Pt=H;for(let kt=0;kt<E.textures.length;kt++){const Xt=q.get(E.textures[kt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+kt,Xt.__webglTexture,j,Pt)}}else if(E!==null&&j!==0){const Pt=q.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,j)}Y=-1};function al(E){const H=q.get(E);return(H.__readFormat!==E.format||H.__readType!==E.type)&&(H.__readFormat=E.format,H.__readType=E.type,H.__formatReadable=I.textureFormatReadable(E.format),H.__typeReadable=I.textureTypeReadable(E.type)),H}this.readRenderTargetPixels=function(E,H,j,J,K,Lt,Ft,Pt=0){if(!(E&&E.isWebGLRenderTarget)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ft!==void 0&&(kt=kt[Ft]),kt){y.bindFramebuffer(U.FRAMEBUFFER,kt);try{const Xt=E.textures[Pt],le=Xt.format,ge=Xt.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt);const Ht=al(Xt);if(Ht.__formatReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-J&&j>=0&&j<=E.height-K&&U.readPixels(H,j,J,K,At.convert(le),At.convert(ge),Lt)}finally{const Xt=it!==null?q.get(it).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(E,H,j,J,K,Lt,Ft,Pt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ft!==void 0&&(kt=kt[Ft]),kt)if(H>=0&&H<=E.width-J&&j>=0&&j<=E.height-K){y.bindFramebuffer(U.FRAMEBUFFER,kt);const Xt=E.textures[Pt],le=Xt.format,ge=Xt.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt);const Ht=al(Xt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,be),U.bufferData(U.PIXEL_PACK_BUFFER,Lt.byteLength,U.STREAM_READ),U.readPixels(H,j,J,K,At.convert(le),At.convert(ge),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Ve=it!==null?q.get(it).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Ve);const Fe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await op(U,Fe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,be),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Lt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(be),U.deleteSync(Fe),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,j=0){const J=Math.pow(2,-j),K=Math.floor(E.image.width*J),Lt=Math.floor(E.image.height*J),Ft=H!==null?H.x:0,Pt=H!==null?H.y:0;Q.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,Ft,Pt,K,Lt),y.unbindTexture()},this.copyTextureToTexture=function(E,H,j=null,J=null,K=0,Lt=0){let Ft,Pt,kt,Xt,le,ge,Ht,be,Ve;const Fe=E.isCompressedTexture?E.mipmaps[Lt]:E.image;if(j!==null)Ft=j.max.x-j.min.x,Pt=j.max.y-j.min.y,kt=j.isBox3?j.max.z-j.min.z:1,Xt=j.min.x,le=j.min.y,ge=j.isBox3?j.min.z:0;else{const He=Math.pow(2,-K);Ft=Math.floor(Fe.width*He),Pt=Math.floor(Fe.height*He),E.isDataArrayTexture?kt=Fe.depth:E.isData3DTexture?kt=Math.floor(Fe.depth*He):kt=1,Xt=0,le=0,ge=0}J!==null?(Ht=J.x,be=J.y,Ve=J.z):(Ht=0,be=0,Ve=0);const Pe=At.convert(H.format),Qe=At.convert(H.type);let zt;H.isData3DTexture?(Q.setTexture3D(H,0),zt=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Q.setTexture2DArray(H,0),zt=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(H,0),zt=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const ri=y.getParameter(U.UNPACK_ROW_LENGTH),ve=y.getParameter(U.UNPACK_IMAGE_HEIGHT),xi=y.getParameter(U.UNPACK_SKIP_PIXELS),Pi=y.getParameter(U.UNPACK_SKIP_ROWS),rn=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,Fe.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Fe.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Xt),y.pixelStorei(U.UNPACK_SKIP_ROWS,le),y.pixelStorei(U.UNPACK_SKIP_IMAGES,ge);const Fn=E.isDataArrayTexture||E.isData3DTexture,Re=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const He=q.get(E),an=q.get(H),De=q.get(He.__renderTarget),on=q.get(an.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,De.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let Un=0;Un<kt;Un++)Fn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(E).__webglTexture,K,ge+Un),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(H).__webglTexture,Lt,Ve+Un)),U.blitFramebuffer(Xt,le,Ft,Pt,Ht,be,Ft,Pt,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||q.has(E)){const He=q.get(E),an=q.get(H);y.bindFramebuffer(U.READ_FRAMEBUFFER,D),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let De=0;De<kt;De++)Fn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.__webglTexture,K,ge+De):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,He.__webglTexture,K),Re?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,an.__webglTexture,Lt,Ve+De):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,an.__webglTexture,Lt),K!==0?U.blitFramebuffer(Xt,le,Ft,Pt,Ht,be,Ft,Pt,U.COLOR_BUFFER_BIT,U.NEAREST):Re?U.copyTexSubImage3D(zt,Lt,Ht,be,Ve+De,Xt,le,Ft,Pt):U.copyTexSubImage2D(zt,Lt,Ht,be,Xt,le,Ft,Pt);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Re?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(zt,Lt,Ht,be,Ve,Ft,Pt,kt,Pe,Qe,Fe.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(zt,Lt,Ht,be,Ve,Ft,Pt,kt,Pe,Fe.data):U.texSubImage3D(zt,Lt,Ht,be,Ve,Ft,Pt,kt,Pe,Qe,Fe):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Lt,Ht,be,Ft,Pt,Pe,Qe,Fe.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Lt,Ht,be,Fe.width,Fe.height,Pe,Fe.data):U.texSubImage2D(U.TEXTURE_2D,Lt,Ht,be,Ft,Pt,Pe,Qe,Fe);y.pixelStorei(U.UNPACK_ROW_LENGTH,ri),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve),y.pixelStorei(U.UNPACK_SKIP_PIXELS,xi),y.pixelStorei(U.UNPACK_SKIP_ROWS,Pi),y.pixelStorei(U.UNPACK_SKIP_IMAGES,rn),Lt===0&&H.generateMipmaps&&U.generateMipmap(zt),y.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){$=0,k=0,it=null,y.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}function Wu(r,t=!1){const e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,h=new Ie;let l=0;for(let c=0;c<r.length;++c){const f=r[c];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;h.addGroup(l,d,c),l+=d}}if(e){let c=0;const f=[];for(let u=0;u<r.length;++u){const d=r[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+c);c+=r[u].attributes.position.count}h.setIndex(f)}for(const c in s){const f=Pc(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;h.setAttribute(c,f)}for(const c in a){const f=a[c][0].length;if(f!==0){h.morphAttributes=h.morphAttributes||{},h.morphAttributes[c]=[];for(let u=0;u<f;++u){const d=[];for(let x=0;x<a[c].length;++x)d.push(a[c][x][u]);const m=Pc(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;h.morphAttributes[c].push(m)}}}return h}function Pc(r){let t,e,i,n=-1,s=0;for(let l=0;l<r.length;++l){const c=r[l];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=c.gpuType),n!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*e}const a=new t(s),o=new ui(a,e,i);let h=0;for(let l=0;l<r.length;++l){const c=r[l];if(c.isInterleavedBufferAttribute){const f=h/e;for(let u=0,d=c.count;u<d;u++)for(let m=0;m<e;m++){const x=c.getComponent(u,m);o.setComponent(u+f,m,x)}}else a.set(c.array,h);h+=c.count*e}return n!==void 0&&(o.gpuType=n),o}function C(r,t,e,i,n,s=0,a=0,o=0){return t.position.set(e,i,n),t.rotation.set(s,a,o),t.castShadow=!1,t.receiveShadow=!1,r.add(t),t}function HM(){const r=new vi;return r.moveTo(0,.05),r.quadraticCurveTo(.08,.02,.16,-.05),r.quadraticCurveTo(.52,-.2,.74,-.56),r.quadraticCurveTo(.84,-.74,.74,-.84),r.quadraticCurveTo(.6,-.64,.38,-.4),r.quadraticCurveTo(.16,-.16,-.03,.03),r.closePath(),new Hi(r,{depth:.045,bevelEnabled:!1})}function is(r,t,e,i){const n=new It(1,e,i,2,7,1),s=n.attributes.position;for(let a=0;a<s.count;a++){const o=(s.getY(a)+e/2)/e;s.setX(a,s.getX(a)*(t+(r-t)*o));const h=(1-o)*(1-o);s.setZ(a,s.getZ(a)-h*.2),s.setY(a,s.getY(a)+h*.06)}return n.computeVertexNormals(),n}function uo(){const r=new vi,t=.105,e=.034;for(let i=0;i<8;i++){const n=i/8*Math.PI*2,s=i%2===0?t:e,a=Math.cos(n)*s,o=Math.sin(n)*s;i===0?r.moveTo(a,o):r.lineTo(a,o)}return r.closePath(),new Hi(r,{depth:.014,bevelEnabled:!1})}function GM(r,t,e,i,n,s=1,a=15784136){const o=r.mat(new at({color:a,fog:!1}));C(t,new S(r.geo(new It(.07*s,.03*s,.04*s)),o),e-.055*s,i,n),C(t,new S(r.geo(new It(.07*s,.03*s,.04*s)),o),e+.055*s,i,n)}function Xu(r,t,e,i,n){r.clear();const s=jt[t],a=n??s,o=new Ot(3814480).lerp(new Ot(a),n?.68:.55).getHex(),h=e.toon(o,a,.34),l=e.toon(15780016,0,0),c=e.toon(788496,s,.12),f=e.mat(new at({color:s,fog:!1})),u=e.mat(new at({color:1313800})),d=new Zt,m=new Zt,x=new Zt,g=new Zt,p=new Zt,M=new Zt;d.position.set(-.13,.74,0),m.position.set(.13,.74,0),x.position.set(-.32,1.32,.04),g.position.set(.32,1.32,.04),M.position.set(0,1.28,-.1);const v=C(d,new S(e.geo(new ue(.055,.52,4,10)),c),0,-.34,0);C(d,e.outline(v,1.16),0,-.34,0),C(d,new S(e.geo(new ue(.072,.13,3,8)),u),0,-.76,.04,Math.PI/2,0,0);const _=C(m,new S(e.geo(new ue(.055,.52,4,10)),c),0,-.34,0);C(m,e.outline(_,1.16),0,-.34,0),C(m,new S(e.geo(new ue(.072,.13,3,8)),u),0,-.76,.04,Math.PI/2,0,0);const b=C(r,new S(e.geo(new It(.36,.16,.2)),c),0,.76,0),T=C(r,new S(e.geo(new ue(.18,.38,5,12)),h),0,1.1,0);T.scale.set(1.08,1,.86),C(r,e.outline(T,1.12),0,1.1,0).scale.set(1.08*1.12,1.12,.86*1.12),C(r,new S(e.geo(new ue(.1,.34,4,10)),h),0,1.31,0,0,0,Math.PI/2),C(r,new S(e.geo(new wt(.105,10,8)),h),-.3,1.32,.02),C(r,new S(e.geo(new wt(.105,10,8)),h),.3,1.32,.02),C(r,new S(e.geo(new qt(.068,.082,.12,8)),l),0,1.38,.02),C(r,new S(e.geo(new It(.38,.07,.24)),u),0,.87,0),C(r,new S(e.geo(new It(.09,.09,.06)),f),0,.87,.13),C(r,new S(e.geo(new ie(.16,.03,8,12)),f),0,1.14,.14,Math.PI/2,0,0),C(x,new S(e.geo(new ue(.045,.48,4,10)),h),0,-.28,0,.15,0,.28),C(x,new S(e.geo(new wt(.06,10,8)),u),.02,-.54,.04),C(g,new S(e.geo(new ue(.045,.42,4,10)),h),0,-.24,0,.2,0,-.35),C(g,new S(e.geo(new wt(.055,10,8)),u),.06,-.48,.02);const R=C(r,new S(e.geo(new wt(.2,14,12)),l),0,1.56,.05);C(r,e.outline(R,1.12),0,1.56,.05);const w=new S(e.geo(new wt(.3,16,12,0,Math.PI*2,0,Math.PI*.7)),h);C(r,w,0,1.6,-.02,.5,0,0),C(r,e.outline(w,1.1),0,1.6,-.02,.5,0,0),C(r,new S(e.geo(new ie(.21,.035,6,14)),h),0,1.6,.06,1.15,0,0),C(r,new S(e.geo(new te(.07,.22,6)),h),0,1.86,-.18,-.5,0,0),GM(e,r,0,1.54,.24,1.05,s);const A=new S(e.geo(is(.42,.72,.95,.07)),h);C(M,A,0,-.35,-.06,.18,0,0),C(M,e.outline(A,1.05),0,-.35,-.06,.18,0,0),C(M,new S(e.geo(is(.16,.3,.8,.05)),h),-.24,-.4,-.02,.22,0,.18),C(M,new S(e.geo(is(.16,.3,.8,.05)),h),.24,-.4,-.02,.22,0,-.18),p.position.set(.08,-.36,.05);const P=new S(e.geo(new qt(.012,.012,.28,8)),u);P.position.set(0,-.08,0);const z=new S(e.geo(new It(.12,.14,.12)),f);z.position.set(0,-.26,0);const B=new S(e.geo(new wt(.06,10,8)),f);B.position.set(0,-.26,0);const F=new S(e.geo(new ie(.08,.015,8,10)),f);F.position.set(0,-.18,0);const D=new vs(s,1.1,7,2);if(D.position.set(0,-.26,0),t!=="reaper"&&p.add(P,z,B,F,D),t==="wanderer"&&i==="arrowbolt"?(p.scale.setScalar(.55),p.position.set(-.22,1.28,-.14),r.add(p)):t==="wanderer"?x.add(p):t==="arcanist"?(p.scale.setScalar(.7),x.add(p)):t==="hunter"?(p.scale.setScalar(.55),p.position.set(.16,1.32,-.18),r.add(p)):t==="knight"&&(p.scale.setScalar(.5),p.position.set(-.2,1.3,-.12),r.add(p)),r.add(d,m,x,g,M,b,T),t==="wanderer"&&i==="arrowbolt"){C(M,new S(e.geo(is(.5,.88,1.05,.06)),h),0,-.42,-.08,.22,0,0),C(x,new S(e.geo(new qt(.026,.03,.14,6)),c),-.02,-.46,.08,2.9,0,0),C(x,new S(e.geo(new It(.1,.032,.032)),u),-.02,-.53,.1,2.9,0,0);const k=C(x,new S(e.geo(new It(.045,.3,.014)),f),-.02,-.68,.12,2.9,0,0);C(x,e.outline(k,1.16),-.02,-.68,.12,2.9,0,0),C(r,new S(e.geo(new It(.06,.24,.05)),u),-.24,.8,.06,0,0,.28)}else if(t==="wanderer"){C(r,new S(e.geo(new It(.22,.16,.12)),c),.22,.92,-.04),C(M,new S(e.geo(is(.5,.88,1.05,.06)),h),0,-.42,-.08,.22,0,0);const k=C(g,new S(e.geo(uo()),f),.02,-.46,.12,Math.PI/2,0,0);C(g,e.outline(k,1.2),.02,-.46,.12,Math.PI/2,0,0),i==="glaive"&&(k.scale.setScalar(1.7),C(g,new S(e.geo(new ie(.07,.018,6,14)),u),.02,-.46,.12,Math.PI/2,0,0)),C(r,new S(e.geo(uo()),f),.07,.95,.15,0,.35,0).scale.setScalar(.66),C(r,new S(e.geo(uo()),f),-.08,.93,.15,0,-.3,0).scale.setScalar(.58),C(m,new S(e.geo(new It(.1,.05,.1)),u),.085,-.26,.05),C(m,new S(e.geo(new qt(.022,.026,.13,6)),c),.095,-.11,.055,0,0,.1),C(m,new S(e.geo(new It(.11,.028,.038)),c),.095,-.2,.055);const it=C(m,new S(e.geo(new It(.05,.26,.016)),f),.095,-.34,.055);C(m,e.outline(it,1.14),.095,-.34,.055)}else if(t==="arcanist")if(w.scale.set(1.09,1.12,1.12),C(r,new S(e.geo(new Se(.095,0)),f),0,2.06,.02),C(r,new S(e.geo(new ie(.28,.025,8,16)),f),0,1.18,.1,Math.PI/2),i==="prismshard"){const k=C(g,new S(e.geo(new qt(.03,.036,.85,7)),u),.03,-.1,.12,.06,0,.1);C(g,e.outline(k,1.1),.03,-.1,.12,.06,0,.1),C(g,new S(e.geo(new qt(.036,.042,.5,7)),u),.03,.42,.12,-.14,0,.1);for(const[it,Y,et]of[[-.06,.1,.6],[.18,.14,-.5],[.36,.1,.7]])C(g,new S(e.geo(new te(.022,.11,5)),u),.03,it,Y,0,0,et);for(const[it,Y,et,nt]of[[.72,0,.15,1],[.62,.07,.55,.72],[.66,-.06,-.45,.66]]){const Nt=C(g,new S(e.geo(new te(.05,.24,4)),f),.03+Y,it,.12,0,0,et);Nt.scale.setScalar(nt),C(g,e.outline(Nt,1.16),.03+Y,it,.12,0,0,et).scale.setScalar(nt)}C(g,new S(e.geo(new qt(.045,.05,.07,8)),c),.03,-.24,.12,.06,0,.1)}else{C(g,new S(e.geo(new qt(.028,.034,1.55,8)),c),.03,-.08,.12,0,0,.07);const k=C(g,new S(e.geo(new Se(.125,0)),f),.08,.7,.12,0,0,.07);if(C(g,e.outline(k,1.18),.08,.7,.12,0,0,.07),C(g,new S(e.geo(new ie(.11,.016,6,14)),f),.08,.7,.12,Math.PI/2,0,.07),C(g,new S(e.geo(new qt(.045,.05,.07,8)),c),.07,.58,.12,0,0,.07),i==="frostorbit"){const it=e.mat(new at({color:12577279,fog:!1}));for(let Y=0;Y<3;Y++){const et=Y/3*Math.PI*2;C(g,new S(e.geo(new Se(.05,0)),it),.08+Math.cos(et)*.2,.7+Math.sin(et)*.08,.12+Math.sin(et)*.2).scale.set(1,1.7,1)}}}else if(t==="reaper"&&i==="chainsickle"){D.intensity=.45,D.distance=4,D.position.set(0,1.08,.2),r.add(D),C(x,new S(e.geo(new qt(.026,.03,.4,7)),c),-.02,-.42,.12,.3,0,.15);const k=e.mat(new at({color:11563263,fog:!1})),it=C(x,new S(e.geo(new ie(.2,.032,6,16,Math.PI*1.1)),k),-.02,-.2,.22,0,Math.PI/2,.5);C(x,e.outline(it,1.14),-.02,-.2,.22,0,Math.PI/2,.5),C(x,new S(e.geo(new ie(.2,.09,6,16,Math.PI*1.1)),e.mat(new at({color:10116351,transparent:!0,opacity:.3,depthWrite:!1,fog:!1,blending:pe}))),-.02,-.2,.22,0,Math.PI/2,.5);for(let Y=0;Y<4;Y++)C(r,new S(e.geo(new ie(.075,.016,5,10)),u),-.24,.98-Y*.07,.06,Math.PI/2+Y%2*.5,0,0)}else if(t==="reaper"&&i==="twindaggers"){D.intensity=.45,D.distance=4,D.position.set(0,1.08,.2),r.add(D);for(const k of[x,g]){C(k,new S(e.geo(new qt(.026,.03,.15,6)),c),-.02,-.42,.1,1.2,0,0),C(k,new S(e.geo(new It(.09,.03,.03)),u),-.02,-.35,.14,1.2,0,0);const it=C(k,new S(e.geo(new It(.045,.5,.016)),f),-.02,-.02,.2,1.2,0,0);C(k,e.outline(it,1.14),-.02,-.02,.2,1.2,0,0)}}else if(t==="reaper"){D.intensity=.45,D.distance=4,D.position.set(0,1.08,.2),r.add(D),C(x,new S(e.geo(new qt(.03,.03,1.45,8)),c),-.04,-.42,.14,.28,0,.2);const k=C(x,new S(e.geo(HM()),f),-.02,.28,.22,.15,.4,-.9);C(x,e.outline(k,1.12),-.02,.28,.22,.15,.4,-.9),C(r,new S(e.geo(new It(.5,.1,.08)),f),0,1.05,.12)}else if(t==="hunter"){const k=new Zt;k.position.set(-.06,-.54,-.58),x.add(k),C(k,new S(e.geo(new ie(.62,.028,6,24,1.75)),f),0,0,0,0,-Math.PI/2,-.875),C(k,new S(e.geo(new qt(.008,.008,.95,5)),u),0,0,.397),C(k,new S(e.geo(new qt(.038,.038,.2,6)),c),0,0,.61),C(k,new S(e.geo(new qt(.009,.009,.7,5)),c),0,0,.62,Math.PI/2,0,0),C(k,new S(e.geo(new te(.03,.1,6)),f),0,0,1,Math.PI/2,0,0),C(r,new S(e.geo(new It(.16,.38,.12)),c),-.18,1.18,-.16),C(r,new S(e.geo(new te(.04,.16,8)),f),-.18,1.4,-.16)}else if(t==="knight"){const k=new Zt;if(k.position.set(.05,-.46,.12),k.rotation.set(.15,0,-.32),g.add(k),i==="warhammer"){C(k,new S(e.geo(new qt(.034,.04,1.05,8)),c),0,.3,0);const it=C(k,new S(e.geo(new It(.44,.22,.22)),f),0,.86,0);C(k,e.outline(it,1.1),0,.86,0),C(k,new S(e.geo(new It(.48,.05,.25)),u),0,.86,0)}else{C(k,new S(e.geo(new qt(.032,.038,.26,8)),c),0,-.12,0),C(k,new S(e.geo(new wt(.045,8,6)),c),0,-.26,0),C(k,new S(e.geo(new It(.32,.055,.07)),f),0,.04,0);const it=C(k,new S(e.geo(new It(.1,.92,.045)),f),0,.53,0);C(k,e.outline(it,1.1),0,.53,0),C(k,new S(e.geo(new te(.052,.16,4)),f),0,1.05,0,0,Math.PI/4,0)}for(const it of[-1,1])C(r,new S(e.geo(new wt(.15,10,8)),c),it*.33,1.3,.02).scale.set(1.05,.72,1.05);C(M,new S(e.geo(is(.46,.78,.95,.06)),h),0,-.38,-.08,.2,0,0)}const O=new S(e.geo(new Xe(.44,20)),e.mat(new at({color:1313304,transparent:!0,opacity:.62})));O.rotation.x=-Math.PI/2,O.position.y=.02,r.add(O);const $=new S(e.geo(new ie(.7,.045,8,18,Math.PI*.9)),e.mat(new at({color:s,transparent:!0,opacity:.85,fog:!1,side:$t})));return $.position.set(0,1.05,.35),$.rotation.x=Math.PI/2,t==="reaper"&&($.visible=!1,r.add($)),r.traverse(k=>{k instanceof S&&(k.castShadow=!0)}),{legL:d,legR:m,armL:x,armR:g,lamp:p,cape:M,lantern:D,slash:$}}function Ic(r,t,e,i){const n=zi[r].color,s=new Zt,a=r==="wisp"?t>=5?1.15:1:.62+t*.16,o=e.mat(new at({color:n,fog:!1,transparent:!0,opacity:r==="shade"?.7:.95})),h=e.toon(3814480,n,.35+t*.12);if(r==="wisp"){const c=new S(e.geo(new wt(.1+t*.04,12,10)),o);c.position.y=.22+t*.06;const f=new vs(n,.6+t*.4,4+t*1.4,2);if(f.position.y=c.position.y,s.add(c),t===0){const u=new S(e.geo(new te(.06,.16,8)),o);u.position.y=.36,s.add(u)}if(t>=1){const u=new S(e.geo(new It(.18+t*.02,.2,.18)),o);u.position.y=.22;const d=new S(e.geo(new ie(.14,.02,8,12)),o);d.position.y=.34;const m=new S(e.geo(new qt(.015,.015,.22,8)),h);m.position.y=.46,s.add(u,d,m)}if(t>=2){const u=new S(e.geo(new ue(.12,.22,4,10)),h);u.position.y=.55;const d=new S(e.geo(new wt(.18,12,10,0,Math.PI*2,0,Math.PI*.62)),h);d.position.set(0,.78,-.02),d.rotation.x=.4;const m=new S(e.geo(new It(.08,.025,.03)),o);m.position.set(0,.74,.14),s.add(u,d,e.outline(d,1.08),m)}if(t>=3){const u=new S(e.geo(new It(.34,.5,.05)),h);u.position.set(0,.48,-.14),u.rotation.x=.2;const d=new S(e.geo(new ie(.32,.03,8,16)),o);d.position.y=.4,d.rotation.x=Math.PI/2,s.add(u,d)}if(t>=4){const u=new S(e.geo(new ue(.14,.85,4,10)),h);u.position.set(-.2,.55,0),u.rotation.z=Math.PI/2.5;const d=new S(e.geo(new wt(.16,10,8)),h);d.position.set(.38,.7,0);const m=new S(e.geo(new te(.08,.22,8)),o);m.position.set(.54,.66,0),m.rotation.z=-Math.PI/2;const x=new S(e.geo(new Ge(.7,.34)),o);x.position.set(-.05,.78,.16),x.rotation.set(-.35,.15,.45);const g=x.clone();g.position.z=-.16,g.rotation.z=-.45,s.add(u,d,m,x,g,e.outline(u,1.08))}}else if(r==="summon"){const c=new S(e.geo(new Se(.14+t*.03,0)),o);c.position.y=.32,s.add(c,e.outline(c,1.1));for(let f=0;f<1+t;f++){const u=new S(e.geo(new ie(.2+f*.08,.02,8,14)),o);u.position.y=.32,u.rotation.x=Math.PI/2+f*.4,s.add(u)}if(t>=2)for(let f=0;f<3;f++){const u=f/3*Math.PI*2,d=new S(e.geo(new Se(.05,0)),o);d.position.set(Math.cos(u)*.32,.32+Math.sin(u*2)*.06,Math.sin(u)*.32),s.add(d)}if(t>=3){const f=new S(e.geo(new te(.12,.22,8)),h);f.position.y=.58,s.add(f)}if(t>=4)for(let f=0;f<5;f++){const u=f/5*Math.PI*2,d=new S(e.geo(new te(.03,.18,5)),o);d.position.set(Math.cos(u)*.14,.76,Math.sin(u)*.14),s.add(d)}}else if(r==="kestrel"){const c=new S(e.geo(new ue(.08,.2+t*.03,4,10)),h);c.position.y=.4,c.rotation.z=Math.PI/2;const f=new S(e.geo(new wt(.08,10,8)),h);f.position.set(.2+t*.015,.45,0);const u=new S(e.geo(new te(.03,.1,6)),o);u.position.set(.3+t*.015,.44,0),u.rotation.z=-Math.PI/2;const d=.34+t*.1,m=e.geo(new te(.07,d,3)),x=new S(m,o);x.position.set(0,.44,d/2),x.rotation.x=Math.PI/2;const g=new S(m,o);if(g.position.set(0,.44,-d/2),g.rotation.x=-Math.PI/2,s.add(c,f,u,x,g,e.outline(c,1.1)),t>=1){const p=new S(e.geo(new te(.06,.18+t*.03,4)),o);p.position.set(-.22-t*.02,.41,0),p.rotation.z=Math.PI/2,s.add(p)}if(t>=2){const p=new S(e.geo(new te(.025,.12,5)),o);p.position.set(.18,.55,0),p.rotation.z=.5,s.add(p)}if(t>=4){const p=new S(e.geo(new ie(.42,.02,8,18)),o);p.position.y=.42,p.rotation.x=Math.PI/2,s.add(p)}}else if(r==="sentinel"){const c=new S(e.geo(new It(.05,.42+t*.05,.1)),o);c.position.y=.36;const f=new S(e.geo(new te(.05,.1,4)),o);f.position.y=.1-t*.025,f.rotation.x=Math.PI;const u=new S(e.geo(new It(.06,.04,.3)),h);u.position.y=.6+t*.025;const d=new S(e.geo(new qt(.025,.025,.14,8)),h);if(d.position.y=.68+t*.025,s.add(c,f,u,d,e.outline(u,1.15)),t>=1){const m=new S(e.geo(new Xe(.14+t*.02,6)),h);m.position.set(0,.42,-.14),s.add(m)}if(t>=2){const m=new S(e.geo(new ie(.16,.015,8,18)),o);m.position.y=.86+t*.025,m.rotation.x=Math.PI/2,s.add(m)}if(t>=3){const m=c.clone();m.position.set(0,.36,.2),m.rotation.x=.35,s.add(m)}if(t>=4){const m=new S(e.geo(new Ge(.5,.26)),o);m.position.set(0,.58,.28),m.rotation.set(.5,0,.3);const x=m.clone();x.position.z=-.28,x.rotation.set(-.5,0,.3),s.add(m,x)}}else{const c=new S(e.geo(new ue(.12+t*.02,.28+t*.06,5,12)),o);c.position.y=.38;const f=new S(e.geo(new te(.1+t*.02,.36+t*.06,8)),o);f.position.y=.08,f.rotation.x=Math.PI;const u=new S(e.geo(new wt(.03,8,8)),o);u.position.set(-.05,.5,.12);const d=u.clone();if(d.position.x=.05,s.add(c,f,u,d),t>=1)for(const m of[-1,1]){const x=new S(e.geo(new te(.04,.26,6)),o);x.position.set(m*.14,.3,-.04),x.rotation.z=m*.6,s.add(x)}if(t>=2){const m=new S(e.geo(new wt(.18,12,10,0,Math.PI*2,0,Math.PI*.6)),h);m.position.set(0,.55,-.02),m.rotation.x=.4,s.add(m)}if(t>=3){const m=new S(e.geo(new Ge(.4,.5)),o);m.position.set(0,.42,-.16),s.add(m)}if(t>=4){const m=new S(e.geo(new ie(.3,.03,8,14)),o);m.position.y=.4,s.add(m)}}const l=new S(e.geo(new Xe(.22+t*.04,12)),e.mat(new at({color:0,transparent:!0,opacity:.25})));return l.rotation.x=-Math.PI/2,s.add(l),s.scale.setScalar(a),s}function VM(r){try{r.updateMatrixWorld(!0);const t=new Map,e=[];let i,n=!1;r.traverse(a=>{if(!(a instanceof S)||!a.geometry)return;const o=Array.isArray(a.material)?a.material[0]:a.material;if(o.side===Ze)return;const h=a.geometry.clone();h.applyMatrix4(a.matrixWorld);let l=o;if(!o.transparent&&(o instanceof Us||o instanceof at)){l=o instanceof Us?"toon":"basic",o instanceof Us&&((!i||o.emissiveIntensity>i.emissiveIntensity)&&(i=o),o.side===$t&&(n=!0));const f=h.getAttribute("position").count,u=new Float32Array(f*3),d=o.color;for(let m=0;m<f;m++)u[m*3]=d.r,u[m*3+1]=d.g,u[m*3+2]=d.b;h.setAttribute("color",new ui(u,3))}const c=t.get(l)??[];c.push(h),t.set(l,c),e.push(h)});const s=new Zt;for(const[a,o]of t){const h=a==="toon"?new Us({vertexColors:!0,gradientMap:(i==null?void 0:i.gradientMap)??null,emissive:(i==null?void 0:i.emissive)??new Ot(0),emissiveIntensity:(i==null?void 0:i.emissiveIntensity)??0,side:n?$t:pn}):a==="basic"?new at({vertexColors:!0,fog:!1}):a;let l=o;l.some(u=>u.index)&&l.some(u=>!u.index)&&(l=l.map(u=>{if(!u.index)return u;const d=u.toNonIndexed();return e.push(d),d}));const c=l.length===1?l[0].clone():Wu(l,!1);if(!c)continue;c.computeBoundingSphere();const f=new S(c,h);f.castShadow=!1,f.receiveShadow=!1,s.add(f)}for(const a of e)a.dispose();return s.children.length?s:r}catch{return r}}const fs={};function Lc(){for(const r of Object.values(fs))r.traverse(t=>{t instanceof S&&(t.geometry.dispose(),t.material.dispose())});for(const r of Object.keys(fs))delete fs[r]}function WM(r,t=1){const e=[new ot(.02*t,0),new ot(.14*t,.06*t),new ot(.3*t,.22*t),new ot(.38*t,.52*t),new ot(.32*t,.88*t),new ot(.22*t,1.18*t),new ot(.15*t,1.38*t)];return r.geo(new xa(e,22))}const XM={zombie:3028521,ghost:2893896,wraith:3808562,wight:3024432,cinder:3808282,acolyte:2761030,binder:1912370,gazer:1845298,husk:3811874,bulwark:2239034,anchor:2761024,skitter:2758690,mire:2763804,bell:2043948,burrower:3811868,censer:2893862,weaver:1842228,tidecaller:1190458};function qM(r,t){const e=fs[r];if(e)return e.clone();const i=new Zt,n=Ce[r],s=XM[r],a=t.toon(s,n,.08),o=t.toon(new Ot(s).multiplyScalar(.6).getHex(),0,0),h=t.toon(new Ot(s).lerp(new Ot(n),.35).getHex(),n,.12),l=t.toon(13616308,0,0),c=t.mat(new at({color:n,fog:!1})),f=t.mat(new at({color:n,fog:!1,transparent:!0,opacity:.45,depthWrite:!1})),u=t.toon(s,n,.14);u.transparent=!0,u.opacity=.88,u.side=$t;const d=r==="wight"||r==="husk"?.72:r==="cinder"||r==="skitter"?.36:r==="mire"?.62:r==="bulwark"||r==="wraith"?.56:.48;C(i,new S(t.geo(new Xe(d,20)),t.mat(new at({color:1313304,transparent:!0,opacity:.62,depthWrite:!1}))),0,.02,0,-Math.PI/2),C(i,new S(t.geo(new Ne(d*.86,d,28)),f),0,.03,0,-Math.PI/2);const m=(p,M,v=1,_=.07)=>{C(i,new S(t.geo(new wt(.045*v,8,6)),c),-_*v,p,M),C(i,new S(t.geo(new wt(.045*v,8,6)),c),_*v,p,M)};if(r==="zombie"){C(i,new S(t.geo(new ue(.1,.4,4,10)),o),-.14,.32,0,.15),C(i,new S(t.geo(new ue(.1,.36,4,10)),o),.14,.3,-.04,-.25),C(i,new S(t.geo(new ue(.26,.42,4,12)),a),0,.9,.06,.55),C(i,new S(t.geo(new It(.56,.5,.1)),h),0,.92,-.14,.45),C(i,new S(t.geo(new wt(.2,14,10)),a),.04,1.16,.34).scale.set(1,.92,1.05),C(i,new S(t.geo(new It(.16,.06,.1)),l),.04,1.03,.48,.3),m(1.2,.52,1.1);for(const M of[-1,1])C(i,new S(t.geo(new ue(.075,.46,4,10)),a),M*.3,1,.36,1.25,0,M*.12),C(i,new S(t.geo(new te(.07,.18,6)),c),M*.32,.98,.7,Math.PI/2);C(i,new S(t.geo(new wt(.07,8,6)),c),-.1,1.08,-.16),C(i,new S(t.geo(new wt(.05,8,6)),c),.12,.94,-.18)}else if(r==="wight"){for(const M of[-1,1])C(i,new S(t.geo(new qt(.16,.2,.7,10)),o),M*.2,.35,0),C(i,new S(t.geo(new wt(.28,14,10)),h),M*.52,1.52,0),C(i,new S(t.geo(new ue(.12,.6,4,10)),a),M*.6,1.05,.08,.2,0,M*.18),C(i,new S(t.geo(new te(.08,.3,6)),c),M*.56,1.8,0,0,0,-M*.3);C(i,new S(t.geo(new qt(.5,.36,1,10)),a),0,1.2,0).scale.set(1,1,.8),C(i,new S(t.geo(new Se(.16,0)),c),0,1.3,.34),C(i,new S(t.geo(new wt(.22,14,10)),o),0,1.86,.06),m(1.88,.26,1.2);for(let M=0;M<5;M++){const v=M/5*Math.PI*2;C(i,new S(t.geo(new te(.05,.26,5)),c),Math.cos(v)*.17,2.1,.06+Math.sin(v)*.17)}}else if(r==="husk"){C(i,new S(t.geo(new ue(.16,.26,4,10)),o),-.18,.3,0),C(i,new S(t.geo(new ue(.16,.26,4,10)),o),.18,.3,0),C(i,new S(t.geo(new wt(.5,16,12)),a),0,.92,.02).scale.set(1.35,.95,1.05),C(i,new S(t.geo(new wt(.17,12,10)),o),0,.98,.48).scale.set(1,.85,1),m(1,.63,.9);for(let _=0;_<4;_++)C(i,new S(t.geo(new te(.08,.32,6)),h),0,1.36-_*.08,.2-_*.2,-.5-_*.2),C(i,new S(t.geo(new wt(.035,6,5)),c),0,1.52-_*.1,.25-_*.24);C(i,new S(t.geo(new ue(.1,.34,4,10)),a),-.62,.66,.1,.3,0,.25),C(i,new S(t.geo(new ue(.17,.4,4,10)),a),.66,.74,.18,.6,0,-.2),C(i,new S(t.geo(new wt(.28,14,10)),h),.72,.52,.5).scale.set(1.1,.9,1.1);for(let _=0;_<3;_++)C(i,new S(t.geo(new wt(.06,8,6)),c),.62+_*.1,.62,.74)}else if(r==="bulwark")C(i,new S(t.geo(new ue(.13,.32,4,10)),o),-.14,.32,0),C(i,new S(t.geo(new ue(.13,.32,4,10)),o),.14,.32,0),C(i,new S(t.geo(new qt(.34,.28,.72,10)),a),0,.92,-.04),C(i,new S(t.geo(new qt(.2,.22,.32,10)),h),0,1.44,0).scale.set(1,1,.95),C(i,new S(t.geo(new It(.26,.04,.04)),c),0,1.46,.21),C(i,new S(t.geo(new te(.06,.24,6)),h),0,1.72,0),C(i,new S(t.geo(new ue(.08,.36,4,10)),a),-.42,.9,0,.2,0,.3),C(i,new S(t.geo(new qt(.03,.03,.7,6)),l),-.52,.8,.12,.9),C(i,new S(t.geo(new wt(.12,10,8)),h),-.52,.66,.46),C(i,new S(t.geo(new It(.86,1.1,.1)),o),.04,.84,.42),C(i,new S(t.geo(new It(.94,.07,.14)),c),.04,1.42,.42),C(i,new S(t.geo(new It(.94,.07,.14)),c),.04,.28,.42),C(i,new S(t.geo(new It(.07,1.1,.14)),c),-.43,.84,.42),C(i,new S(t.geo(new It(.07,1.1,.14)),c),.51,.84,.42),C(i,new S(t.geo(new Se(.12,0)),c),.04,.9,.5);else if(r==="anchor"){C(i,new S(t.geo(new qt(.5,.58,.24,8)),o),0,.12,0),C(i,new S(t.geo(new qt(.36,.44,.22,8)),a),0,.34,0),C(i,new S(t.geo(new Se(.28,0)),c),0,1.15,0).scale.set(.8,1.6,.8),C(i,new S(t.geo(new ie(.5,.035,6,20)),h),0,1.15,0,Math.PI/2);for(let M=0;M<3;M++){const v=M/3*Math.PI*2;C(i,new S(t.geo(new Se(.1,0)),c),Math.cos(v)*.62,.7+M*.12,Math.sin(v)*.62)}C(i,new S(t.geo(new Ne(3.38,3.5,48)),f),0,.035,0,-Math.PI/2)}else if(r==="cinder"){C(i,new S(t.geo(new wt(.26,14,12)),c),0,.42,0);for(let p=0;p<7;p++){const M=p/7*Math.PI*2,v=C(i,new S(t.geo(new It(.2,.26,.06)),a),Math.cos(M)*.28,.42+Math.sin(p*1.7)*.1,Math.sin(M)*.28,0,-M+Math.PI/2,0);v.rotation.x=Math.sin(p*2.3)*.4}C(i,new S(t.geo(new wt(.2,10,8,0,Math.PI*2,0,Math.PI*.45)),a),0,.5,0),C(i,new S(t.geo(new te(.07,.24,6)),c),0,.78,0),m(.46,.28,.8,.08)}else if(r==="gazer"){const p=new Zt;p.position.y=1,p.rotation.x=-.95,i.add(p),C(p,new S(t.geo(new wt(.37,18,14,0,Math.PI*2,0,Math.PI*.5)),a),0,0,-.02,-Math.PI/2),C(p,new S(t.geo(new wt(.32,16,12)),t.mat(new at({color:15398644,fog:!1}))),0,0,.02),C(p,new S(t.geo(new Xe(.18,20)),c),0,0,.345),C(p,new S(t.geo(new Xe(.08,14)),t.mat(new at({color:658452}))),0,0,.35),C(p,new S(t.geo(new ie(.34,.05,6,16,Math.PI)),h),0,.02,.06,.3);for(let M=0;M<4;M++){const v=M/4*Math.PI*2+.4;C(i,new S(t.geo(new te(.06,.5,6)),o),Math.cos(v)*.18,.55,Math.sin(v)*.18,Math.PI+Math.sin(v)*.3,0,Math.cos(v)*.3)}for(let M=0;M<3;M++){const v=M/3*Math.PI*2;C(i,new S(t.geo(new Se(.07,0)),c),Math.cos(v)*.52,1.1,Math.sin(v)*.52)}}else if(r==="skitter"){C(i,new S(t.geo(new wt(.2,12,10)),a),0,.26,-.04).scale.set(1,.75,1.25),C(i,new S(t.geo(new wt(.12,10,8)),o),0,.26,.22),C(i,new S(t.geo(new wt(.07,8,6)),c),0,.38,-.12),m(.3,.32,.7,.06),C(i,new S(t.geo(new wt(.03,6,5)),c),0,.33,.33);for(let M=0;M<3;M++)for(const v of[-1,1]){const _=.16-M*.16;C(i,new S(t.geo(new ue(.025,.36,3,6)),o),v*.28,.24,_,0,0,v*1.05),C(i,new S(t.geo(new ue(.02,.26,3,6)),o),v*.46,.12,_+(M-1)*.05,0,0,-v*.35)}}else if(r==="mire"){C(i,new S(t.geo(new wt(.58,18,14)),u),0,.38,0).scale.set(1,.68,1),C(i,new S(t.geo(new wt(.34,14,10)),a),0,.64,.08);for(let v=0;v<3;v++){const _=v/3*Math.PI*2+.3;C(i,new S(t.geo(new wt(.12,10,8)),c),Math.cos(_)*.3,.4,Math.sin(_)*.3)}for(let v=0;v<5;v++){const _=v/5*Math.PI*2;C(i,new S(t.geo(new wt(.05+v%2*.03,8,6)),c),Math.cos(_)*.5,.2+v%3*.12,Math.sin(_)*.5)}m(.8,.36,1.1,.09),C(i,new S(t.geo(new Xe(.72,20)),f),0,.04,0,-Math.PI/2).scale.set(1,.85,1)}else if(r==="bell"){const p=[new ot(.06,1),new ot(.18,.98),new ot(.26,.86),new ot(.3,.62),new ot(.36,.44),new ot(.48,.3),new ot(.52,.26)],M=C(i,new S(t.geo(new xa(p,20)),a),0,.5,0);M.material.side=$t,C(i,new S(t.geo(new ie(.5,.045,8,24)),c),0,.78,0,Math.PI/2),C(i,new S(t.geo(new ie(.31,.03,6,20)),h),0,1.14,0,Math.PI/2),C(i,new S(t.geo(new wt(.14,12,10)),c),0,.72,0),C(i,new S(t.geo(new qt(.025,.025,.3,6)),h),0,.92,0),C(i,new S(t.geo(new ie(.12,.035,6,14)),h),0,1.58,0),C(i,new S(t.geo(new It(.03,.34,.02)),c),.22,1.2,.2,0,.8,.3),m(1.26,.27,.9,.08)}else if(r==="burrower"){C(i,new S(t.geo(new wt(.42,16,12)),a),0,.46,0).scale.set(1.15,.8,1.3),C(i,new S(t.geo(new te(.16,.42,10)),o),0,.5,.56,Math.PI/2).scale.set(1,1,.8),C(i,new S(t.geo(new wt(.07,8,6)),c),0,.52,.78),m(.7,.42,.9,.12);for(const v of[-1,1]){C(i,new S(t.geo(new ue(.08,.28,4,8)),a),v*.36,.34,.36,.9,0,v*.3);for(let _=0;_<3;_++)C(i,new S(t.geo(new te(.035,.2,5)),c),v*(.34+_*.06),.16,.58,Math.PI/2+.4,0,0)}for(let v=0;v<5;v++)C(i,new S(t.geo(new te(.06,.26,5)),h),0,.82-v*.04,.3-v*.18,-.6-v*.15)}else if(r==="censer"){C(i,new S(t.geo(new te(.46,1.2,12)),a),0,.6,0).scale.set(1,1,.9),C(i,new S(t.geo(new ue(.2,.3,4,10)),a),0,1.25,0),C(i,new S(t.geo(new te(.28,.5,10)),o),0,1.62,-.02,-.15).scale.set(1,1,1.1),m(1.5,.2,.9),C(i,new S(t.geo(new ue(.06,.46,4,8)),a),.3,1.12,.2,.9,0,-.3),C(i,new S(t.geo(new qt(.012,.012,.5,4)),h),.44,.9,.52,.3),C(i,new S(t.geo(new wt(.14,12,10)),h),.46,.62,.6),C(i,new S(t.geo(new wt(.08,8,6)),c),.46,.62,.6);for(let v=0;v<3;v++)C(i,new S(t.geo(new wt(.12+v*.05,8,6)),f),.46-v*.1,.84+v*.28,.6-v*.12);C(i,new S(t.geo(new ie(.34,.025,6,20)),c),0,.12,0,Math.PI/2)}else if(r==="weaver"){C(i,new S(t.geo(new wt(.34,14,12)),a),0,.62,-.28).scale.set(1,.85,1.2),C(i,new S(t.geo(new wt(.1,8,6)),c),0,.82,-.44),C(i,new S(t.geo(new wt(.2,12,10)),o),0,.6,.12);for(let M=0;M<4;M++){const v=(M-1.5)*.06;C(i,new S(t.geo(new wt(.035,6,5)),c),v,.66+M%2*.05,.3)}for(const M of[-1,1])for(let v=0;v<4;v++){const _=.2-v*.18;C(i,new S(t.geo(new qt(.025,.03,.5,5)),h),M*.3,.78,_,0,0,M*-.9),C(i,new S(t.geo(new qt(.02,.025,.62,5)),a),M*.62,.42,_,0,0,M*.45)}C(i,new S(t.geo(new qt(.008,.008,.9,3)),f),0,.6,-.8,Math.PI/2-.3)}else if(r==="tidecaller"){C(i,new S(t.geo(new wt(.46,16,12,0,Math.PI*2,0,Math.PI*.55)),u),0,1,0).scale.set(1,.8,1),C(i,new S(t.geo(new wt(.16,12,10)),c),0,1.06,0),C(i,new S(t.geo(new wt(.3,12,10)),f),0,1.06,0),C(i,new S(t.geo(new ie(.44,.03,6,24)),c),0,1,0,Math.PI/2),m(1.2,.38,.9);for(let M=0;M<7;M++){const v=M/7*Math.PI*2;C(i,new S(t.geo(new It(.035,.8,.02)),M%2?f:h),Math.cos(v)*.3,.55,Math.sin(v)*.3,Math.sin(v)*.15,0,-Math.cos(v)*.15)}C(i,new S(t.geo(new te(.1,.36,8)),h),.4,1.3,.2,0,0,-.9)}else{const p=r==="wraith",M=r==="acolyte",v=r==="binder",_=p?1.15:1;C(i,new S(WM(t,_),u),0,.08,0).scale.set(1.1,1,1.1);for(let R=0;R<6;R++){const w=R/6*Math.PI*2;C(i,new S(t.geo(new te(.08*_,.3,5)),u),Math.cos(w)*.3*_,.1,Math.sin(w)*.3*_,Math.PI)}if(C(i,new S(t.geo(new wt(.26*_,16,12,0,Math.PI*2,0,Math.PI*.62)),a),0,1.44*_,0,.35).scale.set(1,1.15,1.1),C(i,new S(t.geo(new wt(.17*_,12,10)),t.mat(new at({color:656912}))),0,1.38*_,.08),m(1.4*_,.24*_,_),C(i,new S(t.geo(new ue(.05,.5,4,8)),u),-.3*_,.95*_,.14,.7,0,.4),C(i,new S(t.geo(new ue(.05,.5,4,8)),u),.3*_,.95*_,.14,.7,0,-.4),r==="ghost"&&(C(i,new S(t.geo(new qt(.01,.01,.2,4)),h),.34,.9,.36),C(i,new S(t.geo(new Se(.14,0)),c),.34,.74,.38),C(i,new S(t.geo(new wt(.22,10,8)),f),.34,.74,.38)),p){for(let R=0;R<7;R++){const w=R/7*Math.PI*2;C(i,new S(t.geo(new te(.07,.4,5)),h),Math.cos(w)*.36,1.32,Math.sin(w)*.36-.04,Math.sin(w)*.9,0,-Math.cos(w)*.9)}C(i,new S(t.geo(new qt(.025,.025,1.9,6)),l),-.5,1,.2,.25),C(i,new S(t.geo(new ie(.34,.04,6,16,Math.PI*.8)),c),-.5,1.9,.38,.2,0,.3)}if(M&&(C(i,new S(t.geo(new ie(.3,.035,8,22)),c),0,1.86,0,Math.PI/2),C(i,new S(t.geo(new wt(.15,12,10)),c),0,1,.44),C(i,new S(t.geo(new wt(.26,12,10)),f),0,1,.44)),v){for(let R=0;R<3;R++){const w=R/3*Math.PI*2;C(i,new S(t.geo(new Se(.1,0)),c),Math.cos(w)*.55,1+Math.sin(w*1.3)*.2,Math.sin(w)*.55)}C(i,new S(t.geo(new Ne(.62,.74,5)),c),0,.04,0,-Math.PI/2),C(i,new S(t.geo(new qt(.025,.025,1.7,6)),l),.46,.9,.16,.1),C(i,new S(t.geo(new Se(.13,0)),c),.46,1.8,.24)}}r==="zombie"&&i.scale.setScalar(1.15);let x=fs[r];x||(x=VM(i),fs[r]=x);const g=x.clone();return g.position.set(0,0,0),g.rotation.set(0,0,0),g.scale.set(1,1,1),g}const YM={warden:3023400,tyrant:2367292,throne:2761264,saint:2043452};function ZM(r,t){const e=new Zt,i=Ji[r],n=YM[r],s=t.toon(n,i,.1),a=t.toon(new Ot(n).multiplyScalar(.6).getHex(),0,0),o=t.toon(new Ot(n).lerp(new Ot(i),.4).getHex(),i,.16),h=t.toon(5918820,i,.06),l=t.mat(new at({color:i,fog:!1})),c=t.mat(new at({color:i,fog:!1,transparent:!0,opacity:.45,depthWrite:!1})),f=t.mat(new at({color:656912})),u=r==="tyrant"?1.05:r==="throne"?.95:r==="saint"?1:.9;C(e,new S(t.geo(new Xe(u,28)),t.mat(new at({color:1313304,transparent:!0,opacity:.45,depthWrite:!1}))),0,.02,0,-Math.PI/2),C(e,new S(t.geo(new Ne(u*.88,u,40)),c),0,.03,0,-Math.PI/2),C(e,new S(t.geo(new Ne(u*1.12,u*1.16,40)),c),0,.03,0,-Math.PI/2);const d=new vs(i,1.8,12,2);d.position.y=2.3,e.add(d);const m=(x,g,p=.09,M=1)=>{C(e,new S(t.geo(new wt(.055*M,8,6)),l),-p,x,g),C(e,new S(t.geo(new wt(.055*M,8,6)),l),p,x,g)};if(r==="warden"){for(const v of[-1,1])C(e,new S(t.geo(new qt(.17,.22,.72,10)),a),v*.2,.36,0);C(e,new S(t.geo(new te(.72,1.4,12)),s),0,.95,0).scale.set(1,1,.85),C(e,new S(t.geo(new wt(.52,16,12)),s),0,1.55,0).scale.set(1.15,.9,.85);for(const v of[-1,1])C(e,new S(t.geo(new wt(.26,12,10)),o),v*.56,1.72,0),C(e,new S(t.geo(new te(.07,.3,6)),l),v*.62,1.98,0,0,0,-v*.3),C(e,new S(t.geo(new ue(.12,.62,4,10)),s),v*.62,1.2,.26,.9,0,v*.2);for(let v=0;v<6;v++){const _=v/5;C(e,new S(t.geo(new ie(.06,.018,5,10)),h),-.4+_*.8,1.72-_*.44,.42,0,v%2?Math.PI/2:0,0)}C(e,new S(t.geo(new wt(.34,16,12,0,Math.PI*2,0,Math.PI*.62)),s),0,2.08,.04,.35).scale.set(1,1.2,1.1),C(e,new S(t.geo(new wt(.22,12,10)),f),0,2,.14),m(2.02,.32,.09,1.2),C(e,new S(t.geo(new qt(.05,.05,2,8)),h),.2,1.3,.62,.5,0,-.9);const M=C(e,new S(t.geo(new It(.7,.5,.5)),h),.98,1.92,.34,.2,.3,-.9);M.castShadow=!0;for(const v of[-1,1])C(e,new S(t.geo(new It(.08,.34,.52)),l),.98+v*.2,1.92+v*.14,.34,.2,.3,-.9);for(let v=0;v<6;v++){const _=v/6*Math.PI*2;C(e,new S(t.geo(new Se(.07,0)),l),Math.cos(_)*1.05,.9+v%3*.45,Math.sin(_)*1.05)}}else if(r==="tyrant"){for(const x of[-1,1])C(e,new S(t.geo(new It(.34,.9,.36)),a),x*.3,.45,0),C(e,new S(t.geo(new It(.42,.14,.56)),s),x*.3,.07,.06);C(e,new S(t.geo(new It(1.2,1.2,.7)),s),0,1.4,0),C(e,new S(t.geo(new It(1.34,.12,.8)),o),0,1.02,0),C(e,new S(t.geo(new It(1.34,.12,.8)),o),0,1.96,0);for(const x of[-1,1])C(e,new S(t.geo(new It(.5,.36,.7)),o),x*.8,1.9,0,0,0,x*.25),C(e,new S(t.geo(new It(.26,.9,.3)),s),x*.84,1.3,.1,.1,0,x*.1);C(e,new S(t.geo(new Se(.2,0)),l),0,1.45,.38),C(e,new S(t.geo(new It(.56,.46,.5)),s),0,2.3,.04),C(e,new S(t.geo(new It(.44,.06,.06)),l),0,2.32,.3),C(e,new S(t.geo(new qt(.78,.78,.14,24)),h),0,1.55,-.44,Math.PI/2),C(e,new S(t.geo(new ie(.6,.04,6,32)),l),0,1.55,-.52),C(e,new S(t.geo(new Ne(.16,.26,6)),l),0,1.55,-.53,0,Math.PI),C(e,new S(t.geo(new ie(.28,.04,6,18)),l),0,2.85,0,Math.PI/2);for(let x=0;x<5;x++){const g=x/5*Math.PI*2;C(e,new S(t.geo(new te(.05,.22,5)),l),Math.cos(g)*.28,2.98,Math.sin(g)*.28)}for(let x=0;x<4;x++){const g=x/4*Math.PI*2+.4,p=Math.cos(g)*1.2,M=Math.sin(g)*1.2;C(e,new S(t.geo(new ie(.1,.03,6,12)),l),p,2.4,M,Math.PI/2),C(e,new S(t.geo(new It(.05,.05,.32)),o),p-Math.cos(g)*.2,2.4,M-Math.sin(g)*.2,0,-g+Math.PI/2,0)}}else if(r==="saint"){const x=t.toon(n,i,.16);x.transparent=!0,x.opacity=.9,x.side=$t,C(e,new S(t.geo(new te(.7,2,16,1,!0)),x),0,1.05,0).scale.set(1,1,.85);for(let M=0;M<8;M++){const v=M/8*Math.PI*2;C(e,new S(t.geo(new te(.1,.5,5)),x),Math.cos(v)*.62,.2,Math.sin(v)*.54,Math.PI)}C(e,new S(t.geo(new ue(.3,.6,6,12)),s),0,2,0),C(e,new S(t.geo(new wt(.36,16,12,0,Math.PI*2,0,Math.PI*.62)),a),0,2.62,0,.35).scale.set(1,1.2,1.1),C(e,new S(t.geo(new wt(.24,12,10)),f),0,2.56,.1),m(2.58,.3,.09,1.1);for(let M=0;M<3;M++)C(e,new S(t.geo(new ie(.6+M*.28,.035,8,36)),M===1?l:c),0,2.9+M*.12,-.1,Math.PI/2-.3+M*.15,M*.5,0);C(e,new S(t.geo(new ue(.09,.8,4,10)),s),-.5,1.9,.12,.3,0,.5),C(e,new S(t.geo(new ue(.09,.8,4,10)),s),.52,2.1,.18,-.5,0,-.6),C(e,new S(t.geo(new qt(.012,.012,.7,4)),o),.84,1.95,.4),C(e,new S(t.geo(new Se(.2,0)),l),.84,1.55,.42),C(e,new S(t.geo(new wt(.34,12,10)),c),.84,1.55,.42);for(let M=0;M<5;M++){const v=M/5*Math.PI*2+.3;C(e,new S(t.geo(new It(.05,1.5,.02)),c),Math.cos(v)*.75,.9,Math.sin(v)*.6,0,-v,.18)}C(e,new S(t.geo(new Se(.2,0)),l),0,2.02,.32)}else{C(e,new S(t.geo(new te(.8,1.9,14)),s),0,.95,0).scale.set(1,1,.9),C(e,new S(t.geo(new It(1.3,1.9,.08)),a),0,1.05,-.5,-.18),C(e,new S(t.geo(new ue(.34,.7,6,12)),s),0,1.9,0);for(const g of[-1,1])C(e,new S(t.geo(new wt(.24,12,10)),o),g*.46,2.18,0),C(e,new S(t.geo(new ue(.09,.7,4,10)),s),g*.56,1.7,.18,.5,0,g*.3);C(e,new S(t.geo(new Se(.16,0)),l),0,1.95,.34),C(e,new S(t.geo(new wt(.26,14,12)),f),0,2.58,.06),m(2.6,.3,.08,1.1),C(e,new S(t.geo(new qt(.24,.26,.12,12)),o),0,2.86,.04);for(let g=0;g<5;g++){const p=g/5*Math.PI*2;C(e,new S(t.geo(new te(.05,.28,5)),l),Math.cos(p)*.22,3.04,.04+Math.sin(p)*.22)}C(e,new S(t.geo(new ie(.95,.06,8,40)),l),0,2.6,-.34,-.25);for(let g=0;g<12;g++){const p=g/12*Math.PI*2;C(e,new S(t.geo(new te(.06,.34,5)),l),Math.cos(p)*1.18,2.6+Math.sin(p)*1.18*.97,-.34-Math.sin(p)*.29,-.25,0,p-Math.PI/2)}for(let g=0;g<4;g++){const p=g/4*Math.PI*2+Math.PI/4;C(e,new S(t.geo(new It(.08,.7,.03)),l),Math.cos(p)*1.25,1.2,Math.sin(p)*1.25,0,-p,.25)}}return e.traverse(x=>{x instanceof S&&!x.material.transparent&&(x.castShadow=!0)}),e}function JM(r,t,e){const i=new Zt;if(i.position.y=1.84,r==="wayfarer"){const n=t.toon(5913130,0,0);C(i,new S(t.geo(new qt(.4,.4,.04,20)),n),0,-.04,0),C(i,new S(t.geo(new qt(.19,.23,.22,16)),n),0,.08,0),C(i,new S(t.geo(new qt(.235,.235,.05,16)),t.toon(e,e,.3)),0,0,0)}else if(r==="laurel"){const n=t.toon(9097354,4885066,.2);C(i,new S(t.geo(new ie(.24,.025,6,20)),n),0,-.06,0,Math.PI/2);for(let s=0;s<10;s++){const a=s/10*Math.PI*2;C(i,new S(t.geo(new Se(.06,0)),n),Math.cos(a)*.25,-.03,Math.sin(a)*.25,0,-a,.6)}}else if(r==="horns"){const n=t.toon(15260872,0,0);for(const s of[-1,1])C(i,new S(t.geo(new te(.06,.36,8)),n),s*.2,.02,0,0,0,-s*.7),C(i,new S(t.geo(new te(.035,.14,6)),t.mat(new at({color:16765562,fog:!1}))),s*.33,.14,0,0,0,-s*1.2)}else if(r==="flowers"){C(i,new S(t.geo(new ie(.24,.022,6,20)),t.toon(8044666,0,0)),0,-.06,0,Math.PI/2);const n=[15775944,16773572,13154536,12118228,16109736,15775944];n.forEach((s,a)=>{const o=a/n.length*Math.PI*2;C(i,new S(t.geo(new wt(.06,8,6)),t.toon(s,s,.25)),Math.cos(o)*.25,-.03,Math.sin(o)*.25)})}else if(r==="halo")C(i,new S(t.geo(new ie(.24,.03,8,24)),t.mat(new at({color:16773572,fog:!1}))),0,.26,0,Math.PI/2);else if(r==="crown"){const n=t.toon(16765562,16760906,.35);C(i,new S(t.geo(new qt(.21,.2,.1,16,1,!0)),n),0,-.02,0);for(let s=0;s<5;s++){const a=s/5*Math.PI*2;C(i,new S(t.geo(new te(.045,.14,5)),n),Math.cos(a)*.2,.09,Math.sin(a)*.2)}C(i,new S(t.geo(new Se(.045,0)),t.mat(new at({color:16738954,fog:!1}))),0,-.02,.21)}return i}var Xs;(function(r){r.Heavy="HEAVY",r.Medium="MEDIUM",r.Light="LIGHT"})(Xs||(Xs={}));var Dc;(function(r){r.Success="SUCCESS",r.Warning="WARNING",r.Error="ERROR"})(Dc||(Dc={}));const KM=nf("Haptics",{web:()=>sf(()=>import("./web-SIHeifO_.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(r=>new r.HapticsWeb)}),zc=rf.isNativePlatform();var Wc;const $M=typeof window<"u"&&((Wc=window.matchMedia)==null?void 0:Wc.call(window,"(pointer: coarse)").matches);let Nc=0;function Xh(r){var t;if(!(!En().vibration||!zc&&!$M)){if(r==="kill"){const e=performance.now();if(e-Nc<90)return;Nc=e}if(zc){const e=r==="kill"?Xs.Light:r==="sweep"?Xs.Medium:Xs.Heavy;KM.impact({style:e}).catch(()=>{});return}try{(t=navigator.vibrate)==null||t.call(navigator,r==="kill"?12:r==="sweep"?28:r==="hurt"?45:90)}catch{}}}function Fc(){const r=new vi;r.moveTo(0,.32),r.lineTo(.085,.02),r.lineTo(.055,-.26),r.lineTo(-.055,-.26),r.lineTo(-.085,.02),r.closePath();const t=new Hi(r,{depth:.03,bevelEnabled:!1});return t.center(),t}function Uc(){const r=new vi;r.moveTo(0,.34),r.lineTo(.045,.08),r.lineTo(.025,-.3),r.lineTo(-.025,-.3),r.lineTo(-.045,.08),r.closePath();const t=new Hi(r,{depth:.025,bevelEnabled:!1});return t.center(),t}function fo(){const r=new vi;r.moveTo(0,.24),r.lineTo(.06,-.02),r.lineTo(.02,-.2),r.lineTo(-.02,-.2),r.lineTo(-.06,-.02),r.closePath();const t=new Hi(r,{depth:.022,bevelEnabled:!1});return t.center(),t}function QM(){const r=[new N(.02,.42,0),new N(-.07,.2,0),new N(.04,.1,0),new N(-.06,-.08,0),new N(.05,-.18,0),new N(-.03,-.42,0)],t=new Au;for(let e=0;e<r.length-1;e++)t.add(new yu(r[e],r[e+1]));return t}function Oc(r){const t=new Wh(QM(),24,r,5,!1);return t.center(),t}function jM(){const r=document.createElement("canvas");r.width=4,r.height=1;const t=r.getContext("2d");t.fillStyle="#2a1c18",t.fillRect(0,0,1,1),t.fillStyle="#c45c58",t.fillRect(1,0,1,1),t.fillStyle="#f0a8a0",t.fillRect(2,0,1,1),t.fillStyle="#f8ecd8",t.fillRect(3,0,1,1);const e=new sn(r);return e.minFilter=Ye,e.magFilter=Ye,e.colorSpace=ke,e}function t_(){const r=document.createElement("canvas");r.width=64,r.height=64;const t=r.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,240,230,0.95)"),e.addColorStop(.5,"rgba(255,180,200,0.4)"),e.addColorStop(1,"rgba(255,180,200,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const i=new sn(r);return i.colorSpace=ke,i}function e_(){const r=document.createElement("canvas");r.width=r.height=128;const t=r.getContext("2d"),e=[[64,62,58],[46,44,30],[82,48,26],[56,86,24]];t.globalCompositeOperation="lighter";for(const[n,s,a]of e){const o=t.createRadialGradient(n,s,1,n,s,a);o.addColorStop(0,"rgba(255,255,255,0.95)"),o.addColorStop(.35,"rgba(255,255,255,0.55)"),o.addColorStop(.7,"rgba(255,255,255,0.22)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,128,128)}const i=new sn(r);return i.colorSpace=ke,i}function i_(){const r=document.createElement("canvas");r.width=r.height=64;const t=r.getContext("2d");t.translate(32,32);const e=t.createRadialGradient(0,0,0,0,0,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,255,255,0.9)"),e.addColorStop(.3,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(-32,-32,64,64),t.strokeStyle="rgba(255,255,255,0.9)",t.lineWidth=2,t.beginPath(),t.moveTo(-30,0),t.lineTo(30,0),t.moveTo(0,-30),t.lineTo(0,30),t.stroke();const i=new sn(r);return i.colorSpace=ke,i}function n_(){const r=document.createElement("canvas");r.width=160,r.height=48;const t=r.getContext("2d"),e=t.createLinearGradient(0,0,160,0);e.addColorStop(0,"rgba(30,16,38,0)"),e.addColorStop(.22,"rgba(40,20,50,0.75)"),e.addColorStop(.6,"rgba(80,30,110,0.92)"),e.addColorStop(.86,"rgba(200,107,255,1)"),e.addColorStop(1,"rgba(230,180,255,0)"),t.fillStyle=e,t.fillRect(0,0,160,48),t.globalCompositeOperation="destination-in";const i=t.createLinearGradient(0,0,0,48);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.22,"rgba(255,255,255,0.95)"),i.addColorStop(.78,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,160,48),t.globalCompositeOperation="source-over";const n=new sn(r);return n.colorSpace=ke,n}function s_(){const r=document.createElement("canvas");r.width=64,r.height=16;const t=r.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.45,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,4,64,8);const i=new sn(r);return i.colorSpace=ke,i}function r_(r){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),i=e.createRadialGradient(128,128,10,128,128,124);i.addColorStop(0,r),i.addColorStop(.45,r.replace("1)","0.35)")),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.fillRect(0,0,256,256);const n=new sn(t);return n.colorSpace=ke,n}function oi(r,t,e){let i=Math.imul(r+e*13,374761393)^Math.imul(t+e*7,668265263);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function po(r,t){const e=parseInt(r.slice(1),16),i=n=>Math.max(0,Math.min(255,Math.round(t>=0?n+(255-n)*t:n*(1+t))));return`rgb(${i(e>>16)},${i(e>>8&255)},${i(e&255)})`}const qu=[{grout:"#c4a8b0",tile:"#ead4d0",crack:"#d8b8bc",wash:"#f0c8d0",moss:"#b8d8c4",cool:"#cfc8dc",warm:"#ecd8bc",growth:"96,150,112"},{grout:"#b0a0b8",tile:"#d8ccd8",crack:"#c0b0c8",wash:"#d0c4e0",moss:"#b0c8bc",cool:"#c0ccd8",warm:"#e0d0c8",growth:"84,132,140"},{grout:"#c8c0c4",tile:"#efe8e2",crack:"#d8d0cc",wash:"#f5e0c8",moss:"#c8d4dc",cool:"#d4dce4",warm:"#f0dcc0",growth:"128,150,104"},{grout:"#a8bcc4",tile:"#d4e4e6",crack:"#bccdd2",wash:"#c8e8ec",moss:"#a8d4c8",cool:"#c4cce8",warm:"#e0dcc8",growth:"84,150,150"}];function ns(r,t=1){const e=r==="floor"?512:256,i=document.createElement("canvas");i.width=i.height=e;const n=i.getContext("2d"),s=qu[Math.max(1,Math.min(4,t))-1],a=t*17+(r==="floor"?3:r==="wall"?9:21);if(r==="floor"){n.fillStyle=po(s.grout,-.08),n.fillRect(0,0,e,e);const h=32,l=e/h,c=new Set,f=(u,d,m,x,g)=>{const p=g>.86?s.wash:g>.45?s.tile:s.crack,M=oi(u,d,a+41),v=M>.94?s.cool:M<.05?s.warm:p,_=po(v,(oi(u,d,a+5)-.5)*.08);n.fillStyle=_,n.fillRect(u+2,d+2,m-4,x-4),n.fillStyle="rgba(255,248,240,0.28)",n.fillRect(u+2,d+2,m-4,2),n.fillRect(u+2,d+2,2,x-4),n.fillStyle="rgba(40,20,30,0.2)",n.fillRect(u+2,d+x-4,m-4,2),n.fillRect(u+m-4,d+2,2,x-4);for(let b=0;b<m*x/90;b++){const T=u+3+oi(u+b,d,a+11)*(m-6),R=d+3+oi(u,d+b,a+13)*(x-6);n.fillStyle=oi(b,u+d,a)>.5?"rgba(255,255,255,0.14)":"rgba(60,30,40,0.12)",n.fillRect(T,R,1.5,1.5)}if(g<.06){n.strokeStyle="rgba(50,28,36,0.45)",n.lineWidth=1.2,n.beginPath();const b=u+m*(.3+oi(u,d,a+17)*.4);n.moveTo(b,d+3),n.lineTo(b+(oi(u,d,a+19)-.5)*10,d+x*.45),n.lineTo(b+(oi(u,d,a+23)-.5)*16,d+x-3),n.stroke()}g>.95&&(n.fillStyle=po(s.grout,-.12),n.beginPath(),n.moveTo(u+m-3,d+3),n.lineTo(u+m-11,d+3),n.lineTo(u+m-3,d+10),n.fill())};for(let u=0;u<l;u++)for(let d=0;d<l;d++){if(c.has(`${d},${u}`))continue;const m=oi(d,u,a);d<l-1&&u<l-1&&oi(d,u,a+29)>.88&&!c.has(`${d+1},${u}`)?(c.add(`${d+1},${u}`).add(`${d},${u+1}`).add(`${d+1},${u+1}`),f(d*h,u*h,h*2,h*2,m)):f(d*h,u*h,h,h,m)}}else if(r==="wall"){n.fillStyle=s.crack,n.fillRect(0,0,e,e);const h=28;for(let l=0;l<e;l+=h){const c=l/h%2*22;for(let f=-22;f<e+22;f+=44){const u=oi((f+c)/44,l/h,a);n.fillStyle=u>.7?s.wash:u>.35?s.tile:s.grout,n.fillRect((f+c+e)%e,l+2,40,h-4)}}}else{n.clearRect(0,0,e,e);for(let h=0;h<28;h++){const c=oi(h,3,a)*e,f=oi(h,9,a+4)*e,u=10+oi(h,5,a+2)*22,d=n.createRadialGradient(c,f,1,c,f,u);d.addColorStop(0,s.moss+"cc"),d.addColorStop(1,s.moss+"00"),n.fillStyle=d,n.beginPath(),n.arc(c,f,u,0,Math.PI*2),n.fill(),c<u&&(n.beginPath(),n.arc(c+e,f,u,0,Math.PI*2),n.fill()),f<u&&(n.beginPath(),n.arc(c,f+e,u,0,Math.PI*2),n.fill())}}const o=new sn(i);return o.wrapS=o.wrapT=na,o.colorSpace=ke,o.anisotropy=4,o.needsUpdate=!0,o}function a_(r,t,e,i,n){const a=document.createElement("canvas");a.width=a.height=1024;const o=a.getContext("2d"),h=qu[Math.max(1,Math.min(4,r))-1],l=p=>(p+e/2)/e*1024,c=(p,M,v,_,b)=>{const T=o.createRadialGradient(p,M,0,p,M,v);T.addColorStop(0,_.replace("A",String(b))),T.addColorStop(.6,_.replace("A",String(b*.5))),T.addColorStop(1,_.replace("A","0")),o.fillStyle=T,o.beginPath(),o.arc(p,M,v,0,Math.PI*2),o.fill()};let f=0;const u=()=>oi(f++,t,t+31);for(const p of n)c(l(p.x),l(p.z),p.r/e*1024,"rgba(255,246,236,A)",.22);for(let p=0;p<30;p++)c(u()*1024,u()*1024,30+u()*100,"rgba(70,40,56,A)",.16+u()*.14);const d=`rgba(${h.growth},A)`;for(let p=0;p<44;p++){const M=u()<.75,v=u()*1024,_=Math.floor(u()*4),b=M?40+u()*90:u()*1024,T=M?_===0?b:_===1?1024-b:v:u()*1024,R=M?_===2?b:_===3?1024-b:v:b;c(T,R,30+u()*80,d,.4+u()*.25)}o.filter="blur(10px)",o.fillStyle="rgba(40,22,36,0.42)";for(const p of i){const M=l(p.minx)-8,v=l(p.minz)-8;o.fillRect(M,v,l(p.maxx)-l(p.minx)+16,l(p.maxz)-l(p.minz)+16)}o.filter="none";const m=2.2/e*1024,x=l(-16);for(const[p,M,v,_]of[[x,0,x+m,0],[1024-x,0,1024-x-m,0],[0,x,0,x+m],[0,1024-x,0,1024-x-m]]){const b=o.createLinearGradient(p,M,v,_);b.addColorStop(0,"rgba(40,22,36,0.4)"),b.addColorStop(1,"rgba(40,22,36,0)"),o.fillStyle=b,o.fillRect(0,0,1024,1024)}const g=new sn(a);return g.colorSpace=ke,g.anisotropy=4,g}function o_(r){const{room:t,root:e,wallMat:i,floorMat:n,kit:s,lite:a,mossMap:o}=r,h=(r.seed??1)>>>0;e.traverse(X=>{var ct;if(X instanceof S){X.geometry.dispose();for(const ht of Array.isArray(X.material)?X.material:[X.material])ht===i||ht===n||(ht.userData.ownMap&&ht instanceof at&&((ct=ht.map)==null||ct.dispose()),ht.dispose())}}),e.clear();const l=r.walls.filter(X=>X.perim),c=[],f=2.35,u=we(t),d=qs[u],m=X=>Rt[X%4],x=X=>{X.matrixAutoUpdate=!1,X.updateMatrix()},g=(X,ct,ht,ut,G=2.4)=>{l.push({minx:X-ht,maxx:X+ht,minz:ct-ut,maxz:ct+ut,top:G})};let p=h^Math.imul(t,2654435761);const M=()=>{p=p+1831565813|0;let X=Math.imul(p^p>>>15,1|p);return X=X+Math.imul(X^X>>>7,61|X)^X,((X^X>>>14)>>>0)/4294967296},v=(X,ct,ht,ut)=>{const G=ht>=ut,Z=G?ht:ut,mt=Math.min(G?ut:ht,1)*.8,Bt=Math.floor(Z/1.3);for(let Tt=0;Tt<Bt;Tt++){if(M()<.28)continue;const St=(Tt+.5)/Bt-.5,fe=.25+M()*.35,st=new S(s.geo(new It(G?.7:mt,fe,G?mt:.7)),i);st.position.set(G?X+St*Z:X,f+fe/2,G?ct:ct+St*Z),st.rotation.y=(M()-.5)*.12,st.castShadow=!0,e.add(st),x(st)}},_=(X,ct,ht,ut)=>{const G=new S(s.geo(new It(ht,f,ut)),i);G.position.set(X,f/2,ct),G.castShadow=!0,G.receiveShadow=!0,e.add(G),x(G);const Z=new S(s.geo(new It(Math.max(ht,.15),.1,Math.max(ut,.15))),s.mat(new at({color:d.accent})));Z.position.set(X,f+.05,ct),e.add(Z),x(Z),v(X,ct,ht,ut),g(X,ct,ht/2,ut/2)},b=(X,ct,ht=d.accent)=>{const ut=new S(s.geo(new qt(.38,.5,2.2,8)),s.toon(d.stone,ht,.16));ut.position.set(X,1.1,ct),ut.castShadow=!0,ut.receiveShadow=!0,e.add(ut),x(ut);const G=new S(s.geo(new qt(.5,.42,.18,8)),s.toon(5916768,ht,.22));G.position.set(X,2.28,ct),e.add(G),x(G);const Z=new S(s.geo(new wt(.14,8,8)),s.mat(new at({color:ht})));Z.position.set(X,2.52,ct),e.add(Z),x(Z),g(X,ct,.52,.52)},T=(X,ct)=>{const ht=new S(s.geo(new qt(.4,.48,.7,8)),s.toon(d.stone,d.wash,.08));ht.position.set(X,.35,ct),ht.castShadow=!0,ht.receiveShadow=!0,e.add(ht),x(ht);const ut=new S(s.geo(new qt(.32,.36,1.6,7)),s.toon(d.stone,d.accent,.06));ut.position.set(X+.85,.28,ct+.2),ut.rotation.z=1.15,ut.rotation.y=.4,ut.castShadow=!0,e.add(ut),x(ut),g(X,ct,.5,.5,.75),g(X+.85,ct+.2,.7,.4,.55)},R=(X,ct,ht,ut=.7)=>{const G=new S(s.geo(new Ne(ut*.72,ut,20)),s.mat(new at({color:ht,transparent:!0,opacity:.25,side:$t})));G.rotation.x=-Math.PI/2,G.position.set(X,.04,ct),e.add(G),x(G)},w=(X,ct,ht,ut)=>{const G=new S(s.geo(new Xe(ht,20)),s.mat(new at({color:ut,transparent:!0,opacity:.1,side:$t})));G.rotation.x=-Math.PI/2,G.position.set(X,.03,ct),e.add(G),x(G),R(X,ct,ut,ht)},A=(X,ct,ht,ut)=>{const G=new S(s.geo(new Xe(ht,18)),s.mat(new at({color:ut,transparent:!0,opacity:.35,side:$t})));G.rotation.x=-Math.PI/2,G.position.set(X,.05,ct),e.add(G),x(G);const Z=new S(s.geo(new ie(ht,.08,6,18)),s.toon(d.stone,ut,.12));Z.rotation.x=Math.PI/2,Z.position.set(X,.08,ct),e.add(Z),x(Z)},P=(X,ct)=>{const ht=new S(s.geo(new It(1.15,.5,.9)),i);ht.position.set(X,.25,ct),ht.rotation.y=(X+ct)*.18,e.add(ht),x(ht),g(X,ct,.55,.42,.65)},z=(X,ct,ht=2.4,ut=.48)=>{const G=new S(s.geo(new qt(ht,ht+.22,ut,14)),s.toon(d.stone,d.accent,.14));G.position.set(X,ut/2,ct),G.receiveShadow=!0,e.add(G),x(G),w(X,ct,ht*.72,d.accent),c.push({minx:X-ht*.82,maxx:X+ht*.82,minz:ct-ht*.82,maxz:ct+ht*.82,y:ut})},B=(X,ct,ht,ut,G)=>{const Z=new S(s.geo(new It(ht,G,ut)),s.toon(d.stone,d.wash,.1));Z.position.set(X,G/2,ct),e.add(Z),x(Z),c.push({minx:X-ht/2,maxx:X+ht/2,minz:ct-ut/2,maxz:ct+ut/2,y:G})},F=(X,ct,ht,ut,G,Z="s")=>{for(let Bt=1;Bt<=4;Bt++){const Tt=Bt/4,St=Math.max(.12,G*Tt),fe=(ut/2+(4-Bt+.5)*.55)*(Z==="n"||Z==="e"?1:-1),st=Z==="e"||Z==="w"?X+fe:X,ft=Z==="n"||Z==="s"?ct+fe:ct;B(st,ft,Z==="e"||Z==="w"?.6:ht,Z==="e"||Z==="w"?ut:.6,St)}B(X,ct,ht,ut,G)},D=(X,ct,ht,ut)=>{const G=new S(s.geo(new It(ht,.62,ut)),s.toon(3820098,d.wash,.12));if(G.position.set(X,.31,ct),e.add(G),x(G),o){const Z=new S(s.geo(new Ge(ht*.9,ut*.9)),s.mat(new at({map:o,transparent:!0,opacity:.45,depthWrite:!1})));Z.rotation.x=-Math.PI/2,Z.position.set(X,.64,ct),e.add(Z),x(Z)}g(X,ct,ht/2,ut/2,.7)},O=(X,ct,ht,ut)=>{if(a)return;const G=new S(s.geo(new Ge(.85,1.7)),s.mat(new at({color:ut,transparent:!0,opacity:.55,side:$t})));G.position.set(X,1.55,ct),G.rotation.y=ht,e.add(G),x(G)},$=(X,ct,ht,ut=d.accent)=>{const G=Math.cos(ht)*1.15,Z=Math.sin(ht)*1.15;b(X-G,ct-Z,ut),b(X+G,ct+Z,ut);const mt=new S(s.geo(new It(2.6,.32,.42)),s.toon(d.stone,ut,.18));mt.position.set(X,2.38,ct),mt.rotation.y=ht,mt.castShadow=!0,e.add(mt),x(mt)},k=(X,ct,ht,ut,G=2.2,Z=2.1)=>{if(a)return;const mt=new S(s.geo(new Ge(G,Z)),s.mat(new at({color:ut,transparent:!0,opacity:.28,side:$t})));mt.position.set(X,Z/2+.2,ct),mt.rotation.y=ht,e.add(mt),x(mt)},it=(X,ct)=>{const ut=l.filter(y=>!y.perim),G=s.mat(new at({map:a_(u,p>>>0,38,[...ut,...c],[{x:0,z:0,r:7.5},{x:ct.x,z:ct.z,r:3.2}]),transparent:!0,depthWrite:!1}));G.userData.ownMap=!0;const Z=new S(s.geo(new Ge(38,38)),G);Z.rotation.x=-Math.PI/2,Z.position.y=.015,Z.renderOrder=-1,e.add(Z),x(Z);const mt=15.2,Bt=(y,V,q)=>{if(Math.abs(y)>mt||Math.abs(V)>mt)return!1;for(const Q of[...ut,...c])if(y>Q.minx-q&&y<Q.maxx+q&&V>Q.minz-q&&V<Q.maxz+q)return!1;return!0},Tt=()=>{if(M()<.55||!ut.length){const tt=Math.floor(M()*4),rt=(M()-.5)*2*mt,vt=mt-M()*1.6;return tt===0?[rt,-vt]:tt===1?[rt,vt]:tt===2?[-vt,rt]:[vt,rt]}const y=ut[Math.floor(M()*ut.length)],V=M()*Math.PI*2,q=(y.minx+y.maxx)/2,Q=(y.minz+y.maxz)/2,pt=(y.maxx-y.minx)/2+.35+M()*.6,Mt=(y.maxz-y.minz)/2+.35+M()*.6;return[q+Math.cos(V)*pt,Q+Math.sin(V)*Mt]},St=new qe,fe=a?.5:1,st=u===1?7320711:u===2?6987440:u===4?6272168:9614460,ft=Math.round(48*fe),gt=new yn(s.geo(new te(.065,.55,4)),s.toon(st,st,.12),ft*5),xt=new yn(s.geo(new wt(.075,6,5)),s.mat(new at({color:16777215})),ft);let _t=0,Jt=0;for(let y=0;y<ft*3&&_t<ft*5;y++){const[V,q]=Tt();if(!Bt(V,q,.05))continue;const Q=3+Math.floor(M()*3);for(let pt=0;pt<Q&&_t<ft*5;pt++){const Mt=.6+M()*.7;St.position.set(V+(M()-.5)*.3,.26*Mt,q+(M()-.5)*.3),St.rotation.set((M()-.5)*.7,M()*Math.PI,(M()-.5)*.7),St.scale.set(1,Mt,1),St.updateMatrix(),gt.setMatrixAt(_t++,St.matrix)}M()<.45&&Jt<ft&&(St.position.set(V+(M()-.5)*.2,.46+M()*.14,q+(M()-.5)*.2),St.rotation.set(0,0,0),St.scale.setScalar(.8+M()*.5),St.updateMatrix(),xt.setMatrixAt(Jt,St.matrix),xt.setColorAt(Jt++,new Ot(Rt[Math.floor(M()*4)]).offsetHSL(0,.15,-.05)))}gt.count=_t,xt.count=Jt,e.add(gt,xt);const Yt=Math.round(70*fe),ee=new yn(s.geo(new Vh(.12,0)),s.toon(new Ot(d.stone).lerp(new Ot(d.floor),.5).getHex(),d.wash,.1),Yt);let ne=0;for(let y=0;y<Yt*3&&ne<Yt;y++){const[V,q]=M()<.7?Tt():[(M()-.5)*2*mt,(M()-.5)*2*mt];if(!Bt(V,q,.05))continue;const Q=.5+M()*1.4;St.position.set(V,.05*Q,q),St.rotation.set(M()*3,M()*3,M()*3),St.scale.set(Q,Q*(.5+M()*.4),Q),St.updateMatrix(),ee.setMatrixAt(ne++,St.matrix)}ee.count=ne,e.add(ee);const U=Math.round(80*fe),Me=new yn(s.geo(new Xe(.09,5)),s.mat(new at({color:16777215,transparent:!0,opacity:.85,side:$t,depthWrite:!1})),U);let oe=0;const I=[0,1,2].map(()=>[(M()-.5)*22,(M()-.5)*22]);for(let y=0;y<U*3&&oe<U;y++){const[V,q]=I[y%3],Q=V+(M()-.5)*9,pt=q+(M()-.5)*9;Bt(Q,pt,0)&&(St.position.set(Q,.025,pt),St.rotation.set(-Math.PI/2,0,M()*Math.PI*2),St.scale.set(1,.55+M()*.3,1),St.updateMatrix(),Me.setMatrixAt(oe,St.matrix),Me.setColorAt(oe++,new Ot(M()<.6?d.accent:Rt[Math.floor(M()*4)])))}if(Me.count=oe,e.add(Me),X==="shrine"||X==="boss"||X==="choir"){const y=X==="choir"?6:8,V=new yn(s.geo(new qt(.06,.07,.34,6)),s.toon(16050904,16109736,.2),y*4),q=new yn(s.geo(new wt(.05,6,5)),s.mat(new at({color:16767392})),y*4);let Q=0;for(let pt=0;pt<y;pt++){const Mt=pt/y*Math.PI*2+.3,tt=X==="choir"?4.2:4.6,rt=Math.cos(Mt)*tt,vt=Math.sin(Mt)*tt;if(!Bt(rt,vt,.1))continue;const Wt=3+Math.floor(M()*2);for(let bt=0;bt<Wt;bt++){const yt=.6+M()*.8,Gt=rt+(M()-.5)*.45,Qt=vt+(M()-.5)*.45;St.rotation.set(0,0,0),St.position.set(Gt,.17*yt,Qt),St.scale.set(1,yt,1),St.updateMatrix(),V.setMatrixAt(Q,St.matrix),St.position.set(Gt,.34*yt+.05,Qt),St.scale.set(.8,1.4,.8),St.updateMatrix(),q.setMatrixAt(Q++,St.matrix)}}V.count=Q,q.count=Q,e.add(V,q)}};let Y={x:0,z:-8};const et=[];n&&(n.color.setHex(d.floor),n.emissive.setHex(d.emit),n.emissiveIntensity=a?.05:.06);const nt=tn(t).kind;switch(nt){case"court":w(0,0,4.2,d.accent);for(let X=0;X<8;X++){const ct=X/8*Math.PI*2+.2;b(Math.cos(ct)*10.2,Math.sin(ct)*10.2,m(X))}O(-10.2,0,Math.PI/2,d.accent),O(10.2,0,-Math.PI/2,d.wash),T(-9.5,-8.2),P(10.4,3.2),P(-10.2,6),R(-3.2,2.6,Rt[0],.85),R(4.4,-3.1,Rt[1],.7),Y={x:9.4,z:-9};break;case"hall":for(const X of[-8,-2.5,2.5,8])b(-5.6,X,Rt[1]),b(5.6,X,Rt[2]);D(-3.2,-5,1.1,3.4),D(3.2,5,1.1,3.4),D(-3.2,5.2,1.1,3.2),D(3.2,-5.2,1.1,3.2),w(0,0,2.4,d.wash),O(-5.6,0,Math.PI/2,Rt[1]),O(5.6,0,-Math.PI/2,Rt[2]),F(0,0,3.6,5.2,.62,"s"),Y={x:0,z:-11};break;case"cross":_(-9.2,0,8.4,1),_(9.2,0,8.4,1),_(0,-9.2,1,8.4),_(0,9.2,1,8.4),w(0,0,2.8,Rt[2]),T(-6.4,-6.4),P(6.6,6.2),B(10.4,10.4,4.6,4.6,.5),F(10.4,7.2,3.2,2.4,.5,"s"),Y={x:10.4,z:10.4};break;case"shrine":z(0,0,2.7,.5),A(0,0,1.15,d.wash),b(-8.2,-8.2,Rt[1]),b(8.2,-8.2,Rt[2]),b(-8.2,8.2,Rt[3]),b(8.2,8.2,Rt[0]),$(0,-11,0,d.accent),R(-4.5,0,Rt[1],.9),R(4.5,0,Rt[3],.9),Y={x:0,z:11};break;case"elite":_(-9,-9,9.5,1),_(9,-9,9.5,1),_(-9,9,9.5,1),_(9,9,9.5,1),z(0,0,2.2,.52),b(0,9.4,d.accent),T(8.5,0),O(0,9.4,0,d.accent),Y={x:0,z:11.2};break;case"trap":D(-4.2,-3.2,7.4,.7),D(4.2,3.2,7.4,.7),D(-9,6.2,4.2,.7),D(9,-6.2,4.2,.7),R(-6,6,Rt[0],1),R(6,-6,Rt[1],1),R(0,0,Rt[3],1.15),et.push({x:-6,z:6},{x:6,z:-6},{x:0,z:0},{x:-8.4,z:-8.4}),F(8.4,8.4,3.8,3.8,.66,"w"),B(-10.2,10.2,3.4,3.4,.34),Y={x:-10.2,z:-10.2};break;case"gallery":for(let X=0;X<8;X++){const ct=X/8*Math.PI*2+.18,ht=Math.cos(ct)*9,ut=Math.sin(ct)*9;b(ht,ut,m(X)),X%2===0&&k((ht+Math.cos(ct+.4)*9)/2,(ut+Math.sin(ct+.4)*9)/2,ct+Math.PI/2,m(X),2.6,2.2)}w(0,0,3.4,Rt[3]),D(0,4.6,5.2,.55),D(0,-4.6,5.2,.55),B(-7.4,0,3.2,3.2,.36),B(7.4,0,3.2,3.2,.36),Y={x:0,z:0};break;case"choir":for(const X of[-8.5,0,8.5])b(-8.8,X,Rt[1]),b(-3.1,X,Rt[2]),b(3.1,X,Rt[3]),b(8.8,X,Rt[0]);D(-5.8,-4.2,.55,5.6),D(5.8,4.2,.55,5.6),w(0,0,2.2,d.accent),O(0,-8.5,0,d.accent),F(-11.2,0,3.4,4.6,.66,"e"),F(11.2,0,3.4,4.6,.66,"w"),Y={x:0,z:-12};break;case"boss":z(0,0,3.5,.55);for(let X=0;X<8;X++){const ct=X/8*Math.PI*2;b(Math.cos(ct)*10,Math.sin(ct)*10,m(X))}$(-11.2,0,Math.PI/2,d.accent),$(11.2,0,Math.PI/2,d.accent),O(0,10,0,d.accent),O(-10,0,Math.PI/2,d.wash),O(10,0,-Math.PI/2,d.wash),w(0,0,2.4,d.accent),Y={x:0,z:11.4};break}it(nt,Y);const Nt=[{x:0,z:0},{x:Y.x,z:Y.z}];return{walls:l,crystal:Y,hazards:et,plats:c,lights:Nt}}const jr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ss{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const h_=new va(-1,1,1,-1,0,1);class l_ extends Ie{constructor(){super(),this.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new re([0,2,0,0,2,0],2))}}const c_=new l_;class qh{constructor(t){this._mesh=new S(c_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,h_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class u_ extends Ss{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ni?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=nr.clone(t.uniforms),this.material=new ni({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new qh(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Bc extends Ss{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class f_ extends Ss{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class d_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new ot);this._width=i.width,this._height=i.height,e=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new u_(jr),this.copyPass.material.blending=Oi,this.timer=new k0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),h.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Bc!==void 0&&(a instanceof Bc?i=!0:a instanceof f_&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class p_ extends Ss{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ot}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const m_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class xs extends Ss{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new Ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new li(s,a,{type:ci,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const f=new li(s,a,{type:ci,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+c,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const u=new li(s,a,{type:ci,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),a=Math.round(a/2)}const o=m_;this.highPassUniforms=nr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ni({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ot(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=nr.clone(jr.uniforms),this.blendMaterial=new ni({uniforms:this.copyUniforms,vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader,premultipliedAlpha:!0,blending:pe,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ot,this._oldClearAlpha=1,this._basic=new at,this._fsQuad=new qh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new ot(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[h].uniforms.direction.value=xs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[h]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=xs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[h]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const n=[],s=[];for(let a=1;a<t;a+=2){const o=e[a],h=a+1<t?e[a+1]:0,l=o+h;n.push((a*o+(a+1)*h)/l),s.push(l)}return new ni({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}}xs.BlurDirectionX=new ot(1,0);xs.BlurDirectionY=new ot(0,1);const Br={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class g_ extends Ss{constructor(){super(),this.isOutputPass=!0,this.uniforms=nr.clone(Br.uniforms),this.material=new Du({name:Br.name,uniforms:this.uniforms,vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader}),this._fsQuad=new qh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===Te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Th?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Eh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===bh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const os=class os{constructor(t){L(this,"parent");L(this,"renderer");L(this,"scene",new Bp);L(this,"camera");L(this,"composer");L(this,"bloom");L(this,"ray",new G0);L(this,"player",new Zt);L(this,"lantern");L(this,"toonRamp");L(this,"snapCam",!0);L(this,"clock",0);L(this,"last",0);L(this,"keys",new Set);L(this,"forced",new Set);L(this,"pointer",{x:0,y:0,down:!1,mouse:!0});L(this,"job");L(this,"skin","shuriken");L(this,"runJob","wanderer");L(this,"hp",100);L(this,"maxHp",100);L(this,"room",1);L(this,"fireCd",0);L(this,"dashCd",0);L(this,"dashLeft",0);L(this,"dashX",0);L(this,"dashZ",0);L(this,"iFrames",0);L(this,"hitstop",0);L(this,"hitstopNext",0);L(this,"trauma",0);L(this,"camPunch",0);L(this,"kills",0);L(this,"runCleared",0);L(this,"newcomer",!1);L(this,"runBigHit",0);L(this,"runStartBest",0);L(this,"runStartClock",0);L(this,"unbanked",{kills:0,elites:0,bosses:[],champions:0});L(this,"alive",!1);L(this,"reviveUsed",!1);L(this,"choosing",!1);L(this,"paused",!1);L(this,"magnet",2.4);L(this,"extraPellets",0);L(this,"extraPierce",0);L(this,"extraDmg",0);L(this,"extraSpeed",0);L(this,"fireMul",1);L(this,"dashMul",1);L(this,"leech",0);L(this,"extraIFrames",0);L(this,"heading",0);L(this,"speedNow",0);L(this,"vx",0);L(this,"knockX",0);L(this,"knockZ",0);L(this,"vz",0);L(this,"px",0);L(this,"pz",0);L(this,"py",0);L(this,"chargeFromX",0);L(this,"chargeFromZ",0);L(this,"lungeLeft",0);L(this,"lungeX",0);L(this,"lungeZ",0);L(this,"lungeSpd",0);L(this,"lungeDmg",0);L(this,"lungeFinisher",!1);L(this,"lungeHit",new Set);L(this,"lungeBurst",!0);L(this,"lungeFromX",0);L(this,"lungeFromZ",0);L(this,"pvy",0);L(this,"coyote",0);L(this,"safeX",0);L(this,"safeZ",0);L(this,"aimX",1);L(this,"aimZ",0);L(this,"faceY",Math.PI/2);L(this,"swapLeft",0);L(this,"relics",[]);L(this,"pendingRelics",[]);L(this,"pendingPetTalents",[]);L(this,"curse","");L(this,"curseHp",1);L(this,"curseExtra",0);L(this,"curseXp",1);L(this,"curseDmg",1);L(this,"curseAsh",0);L(this,"nextCurse",null);L(this,"sigils",[]);L(this,"pendingEvent",null);L(this,"eventActs",new Set);L(this,"eliteNext",!1);L(this,"sigilLayer");L(this,"vaultActs",new Set);L(this,"freeRerolls",0);L(this,"relicCards",3);L(this,"emberLeft",0);L(this,"wrelics",new Set);L(this,"rares",new Set);L(this,"rushStacks",0);L(this,"rushT",0);L(this,"phantomCount",0);L(this,"relicHp",0);L(this,"hpMul",1);L(this,"relicFireMul",1);L(this,"relicDashMul",1);L(this,"relicLeech",0);L(this,"relicIFrames",0);L(this,"crystalOn",!1);L(this,"crystal");L(this,"walls",[]);L(this,"plats",[]);L(this,"bullets",[]);L(this,"eBullets",[]);L(this,"enemies",[]);L(this,"shards",[]);L(this,"mats",[]);L(this,"geos",[]);L(this,"texs",[]);L(this,"reduced",!1);L(this,"escHeld",!1);L(this,"hudAcc",0);L(this,"resizeObs");L(this,"floorMat");L(this,"farLayer",new Zt);L(this,"midLayer",new Zt);L(this,"nearLayer",new Zt);L(this,"motes");L(this,"moteArr");L(this,"hazeA");L(this,"hazeB");L(this,"rigLegL",new Zt);L(this,"rigLegR",new Zt);L(this,"rigArmL",new Zt);L(this,"rigArmR",new Zt);L(this,"rigLamp",new Zt);L(this,"rigCape",new Zt);L(this,"attackT",0);L(this,"skillSpinT",0);L(this,"skillSpinMax",.5);L(this,"slash");L(this,"layoutRoot",new Zt);L(this,"wallMat");L(this,"sparkMesh");L(this,"sparkPos",new Float32Array(os.SPARK_CAP*3));L(this,"sparkVel",new Float32Array(os.SPARK_CAP*3));L(this,"sparkTtl",new Float32Array(os.SPARK_CAP));L(this,"sparkNext",0);L(this,"thornPool",[]);L(this,"thornMats");L(this,"fx",[]);L(this,"bloomKick",0);L(this,"hitLight");L(this,"starTex");L(this,"streakTex");L(this,"glowTexCache");L(this,"glintTexCache");L(this,"slashTexCache");L(this,"mossMap");L(this,"roomLights",[]);L(this,"runSeed",1);L(this,"crystalSpot",{x:8.2,z:-7.4});L(this,"pet");L(this,"petTwin");L(this,"petKind",null);L(this,"petStage",0);L(this,"petLevel",1);L(this,"petShots",0);L(this,"endless",!1);L(this,"daily",!1);L(this,"practiceSkin",null);L(this,"masteryGain",{});L(this,"masteryRun",{});L(this,"masteryBase",{});L(this,"masteryRank",0);L(this,"heldIds",[]);L(this,"trailColor",null);L(this,"setTier",{});L(this,"practiceHits",[]);L(this,"webbed",0);L(this,"dustT",0);L(this,"corpses",[]);L(this,"zones",[]);L(this,"oath",Xc([]));L(this,"petX",0);L(this,"petZ",0);L(this,"petY",1.1);L(this,"petFire",0);L(this,"petAng",0);L(this,"petTalents",[]);L(this,"petGuard",0);L(this,"classIndex",0);L(this,"skillCd",0);L(this,"skillMax",6);L(this,"skillHeld",!1);L(this,"rageLeft",0);L(this,"markLeft",0);L(this,"petBoost",0);L(this,"echoT",0);L(this,"echoX",0);L(this,"echoZ",0);L(this,"fuse",null);L(this,"relicEcho",!1);L(this,"relicSplinter",!1);L(this,"shotBounce",0);L(this,"frost",!1);L(this,"fury",!1);L(this,"petCadence",1);L(this,"overshield",!1);L(this,"ward",0);L(this,"wardMax",0);L(this,"beats",[]);L(this,"shows",[]);L(this,"aura");L(this,"playerMark");L(this,"markSigil");L(this,"reaperCombo",0);L(this,"combo",0);L(this,"comboIdle",0);L(this,"swingStep",0);L(this,"swingFinisher",!1);L(this,"hazards",[]);L(this,"fireFields",[]);L(this,"thorns",[]);L(this,"allies",[]);L(this,"shrineHeal",0);L(this,"roomSpawnQueue",[]);L(this,"roomKills",0);L(this,"roomCleared",!1);L(this,"runLifeMul",1);L(this,"killHealPool",0);L(this,"killHealAt",0);L(this,"roomTarget",0);L(this,"roomIsBoss",!1);L(this,"roomSpawnTimer",0);L(this,"lite",!1);L(this,"smallScreen",!1);L(this,"runLog");L(this,"roomLog");L(this,"diedLog");L(this,"roomLogAt",0);L(this,"kit");L(this,"keepGeo",new Map);this.parent=t,this.smallScreen=af();const e=En().quality;this.lite=e==="low"?!0:e==="high"?!1:this.smallScreen,this.renderer=new kM({antialias:!1,alpha:!1,powerPreference:this.lite?"low-power":"high-performance",stencil:!1,depth:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.lite?1:1.5)),this.renderer.setClearColor(2893884,1),this.renderer.shadowMap.enabled=!this.lite,this.renderer.shadowMap.type=Bs,this.renderer.outputColorSpace=ke,this.renderer.toneMapping=pa,this.renderer.toneMappingExposure=this.lite?.86:1.05;const i=this.renderer.domElement;i.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;background:#2c283c;touch-action:none;",t.style.background="#2c283c",t.appendChild(i),this.camera=new pi(this.smallScreen?34:28,16/9,.1,160),this.scene.fog=new sr(3814480,this.lite?.015:.01),this.scene.background=new Ot(3288132),this.toonRamp=jM(),this.kit={geo:n=>this.geo(n),mat:n=>this.mat(n),toon:(n,s,a)=>this.toon(n,s,a),outline:(n,s,a)=>this.outlineOf(n,s,a)},this.lite||this.ensureComposer(),i.addEventListener("webglcontextlost",n=>n.preventDefault()),this.bindDom(),this.layout(),this.last=performance.now()}wr(t){var e;return this.wrelics.has(t)&&((e=Mh.find(i=>i.id===t))==null?void 0:e.skin)===this.skin}setOn(t,e){return(this.setTier[t]??0)>=e}layout(){var i,n;this.canvasRect=void 0;const t=this.parent.clientWidth||960,e=this.parent.clientHeight||540;this.renderer.setSize(t,e,!1),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix(),(i=this.composer)==null||i.setSize(t,e),(n=this.bloom)==null||n.setSize(t,e)}bindDom(){const t=this.renderer.domElement,e=l=>{this.pointer.down=!0,this.pointer.x=l.clientX,this.pointer.y=l.clientY,this.pointer.mouse=l.pointerType==="mouse"},i=l=>{this.pointer.x=l.clientX,this.pointer.y=l.clientY,this.pointer.mouse=l.pointerType==="mouse"},n=()=>{this.pointer.down=!1};t.addEventListener("webglcontextlost",l=>{l.preventDefault(),qc.setState({gfxLost:!0})}),t.addEventListener("pointerdown",e),window.addEventListener("pointermove",i),window.addEventListener("pointerup",n);const s=l=>{this.keys.add(l.code),this.alive&&!this.paused&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(l.code)&&l.preventDefault()},a=l=>this.keys.delete(l.code),o=()=>{this.keys.clear(),this.pointer.down=!1,de.getState().setTouch({mx:0,my:0,ax:0,ay:0,fire:!1,dash:!1,skill:!1})},h=()=>{document.hidden&&o()};document.addEventListener("visibilitychange",h),window.addEventListener("pointercancel",n),window.addEventListener("keydown",s),window.addEventListener("keyup",a),window.addEventListener("blur",o),this.resizeObs=new ResizeObserver(()=>this.layout()),this.resizeObs.observe(this.parent),this._dom={down:e,move:i,up:n,kd:s,ku:a,blur:o,hidden:h}}unbindDom(){const t=this._dom;t&&(this.renderer.domElement.removeEventListener("pointerdown",t.down),window.removeEventListener("pointermove",t.move),window.removeEventListener("pointerup",t.up),window.removeEventListener("keydown",t.kd),window.removeEventListener("keyup",t.ku),window.removeEventListener("blur",t.blur),window.removeEventListener("pointercancel",t.up),document.removeEventListener("visibilitychange",t.hidden))}ensureComposer(){this.composer||(this.composer=new d_(this.renderer),this.composer.setPixelRatio(.7),this.composer.addPass(new p_(this.scene,this.camera)),this.bloom=new xs(new ot(640,360),.2,.35,.62),this.composer.addPass(this.bloom),this.composer.addPass(new g_),this.layout())}applyQuality(){const t=En().quality,e=t==="low"?!0:t==="high"?!1:this.smallScreen;e===this.lite&&(e||this.composer)||(this.lite=e,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:1.5)),this.renderer.toneMappingExposure=e?.86:1.05,this.renderer.shadowMap.enabled=!e,this.scene.traverse(i=>{if(i instanceof uh&&(i.castShadow=!e),i instanceof S)for(const n of Array.isArray(i.material)?i.material:[i.material])n.needsUpdate=!0}),e||this.ensureComposer(),this.layout())}held(t){return this.forced.size?this.forced.has(t):this.keys.has(t)}mat(t){return this.mats.push(t),t}geo(t){return this.geos.push(t),t}sharedGeo(t,e){let i=this.keepGeo.get(t);return i||(i=e(),this.keepGeo.set(t,i)),i}makeStarTex(){return this.starTex?this.starTex:(this.starTex=t_(),this.starTex)}makeStreakTex(){return this.streakTex?this.streakTex:(this.streakTex=s_(),this.streakTex)}glowTex(){return this.glowTexCache?this.glowTexCache:(this.glowTexCache=e_(),this.glowTexCache)}glintTex(){return this.glintTexCache?this.glintTexCache:(this.glintTexCache=i_(),this.glintTexCache)}slashTex(){return this.slashTexCache?this.slashTexCache:(this.slashTexCache=n_(),this.slashTexCache)}toon(t,e=0,i=0){return this.mat(new Us({color:t,emissive:e,emissiveIntensity:i,gradientMap:this.toonRamp}))}outlineOf(t,e=1.1,i=590092){const n=new S(t.geometry,this.mat(new at({color:i,side:Ze})));return n.scale.copy(t.scale).multiplyScalar(e),n.position.copy(t.position),n.rotation.copy(t.rotation),n}hazeTex(t){const e=r_(t);return this.texs.push(e),e}blocked(t,e,i,n=this.py){return of(t,e,i,this.walls,n)?!0:Cn(t,e,this.plats)>n+.4}resolve(t,e,i,n=this.py){return _h(t,e,i,this.safeX,this.safeZ,this.walls,n)}addXp(t){if(this.practiceSkin)return;const e=Be();hf(e,this.runJob,Math.round(t*this.curseXp*this.oath.reward)),Pn(e),de.getState().refreshSave()}};L(os,"SPARK_CAP",640);let mh=os;function mo(r,t,e,i=20){const n=[],s=[],a=[];for(let h=0;h<=i;h++){const l=h/i,c=l*e,f=Math.cos(c),u=Math.sin(c);n.push(f*r,u*r,0,f*t,u*t,0),s.push(l,0,l,1)}for(let h=0;h<i;h++){const l=h*2,c=h*2+1,f=h*2+2,u=h*2+3;a.push(l,f,c,c,f,u)}const o=new Ie;return o.setAttribute("position",new re(n,3)),o.setAttribute("uv",new re(s,2)),o.setIndex(a),o.computeVertexNormals(),o}function x_(r,t,e,i=24){const n=[],s=[],a=[];for(let h=0;h<=i;h++){const l=h/i,c=-e+l*e,f=t-(t-r)*(.35+.65*l);n.push(Math.cos(c)*f,0,Math.sin(c)*f,Math.cos(c)*t,0,Math.sin(c)*t),s.push(l,0,l,1)}for(let h=0;h<i;h++){const l=h*2,c=h*2+1,f=h*2+2,u=h*2+3;a.push(l,f,c,c,f,u)}const o=new Ie;return o.setAttribute("position",new re(n,3)),o.setAttribute("uv",new re(s,2)),o.setIndex(a),o.computeVertexNormals(),o}const go=new N;class M_ extends mh{constructor(){super(...arguments);L(this,"floatLayer");L(this,"canvasRect");L(this,"floats",[]);L(this,"dmgPending",new Map);L(this,"hitFlashMat");L(this,"sparkColor",new Ot)}makeShowMesh(e,i){const n=this.mat(new at({color:i,map:this.glowTex(),transparent:!0,opacity:.9,fog:!1,depthWrite:!1,side:$t,blending:pe}));if(e==="crescent"){const s=new Zt,a=Math.PI*.24,o=this.sharedGeo("show-slash",()=>mo(.5,1.5,a)),h=new S(o,this.mat(new at({color:16777215,map:this.slashTex(),transparent:!0,opacity:.5,depthWrite:!1,fog:!1,side:$t,blending:pe})));h.scale.set(1.22,1.4,1),h.userData.fixedColor=!0,h.userData.baseOpacity=.5,s.add(h);const l=new S(o,this.mat(new at({color:16777215,map:this.slashTex(),transparent:!0,opacity:.95,depthWrite:!1,fog:!1,side:$t})));return l.userData.fixedColor=!0,l.userData.baseOpacity=.95,s.add(l),s}if(e==="pillar")return new S(this.sharedGeo("show-pillar",()=>new qt(.22,.55,4.6,10,1,!0)),n);if(e==="dome")return new S(this.sharedGeo("show-dome",()=>new wt(2.1,12,8,0,Math.PI*2,0,Math.PI/2)),n);if(e==="rune"){const s=new S(this.sharedGeo("show-rune",()=>new Ne(.9,1.25,24)),n);return s.rotation.x=-Math.PI/2,s}if(e==="meteor")return new S(this.sharedGeo("show-meteor",()=>new Se(.55,0)),n);if(e==="clone"){const s=new Zt,a=new S(this.sharedGeo("show-clone",()=>new ue(.22,.7,4,8)),n);return a.position.y=.8,s.add(a),s}if(e==="blade")return new S(this.sharedGeo("show-blade",()=>{const s=new vi;s.moveTo(0,.9),s.lineTo(.13,.22),s.lineTo(.07,-.65),s.lineTo(-.07,-.65),s.lineTo(-.13,.22),s.closePath();const a=new Hi(s,{depth:.05,bevelEnabled:!1});return a.center(),a}),n);if(e==="warn"){const s=new Zt,a=(h,l,c)=>{const f=new S(h,this.mat(new at({color:l,transparent:!0,opacity:c,depthWrite:!1,fog:!1,side:$t})));return f.rotation.x=-Math.PI/2,f.userData.baseOpacity=c,l!==i&&(f.userData.fixedColor=!0),s.add(f),f};a(this.sharedGeo("warn-fill",()=>new Xe(1,40)),i,.24);const o=a(this.sharedGeo("warn-core",()=>new Xe(1,40)),i,.55);return o.name="core",o.position.y=.005,a(this.sharedGeo("warn-outline",()=>new Ne(1,1.07,48)),1706516,.55).position.y=.01,a(this.sharedGeo("warn-rim",()=>new Ne(.95,1,48)),i,.95).position.y=.012,s}if(e==="root"){const s=this.sharedGeo("show-root",()=>{const o=[],h=(c,f,u,d,m,x,g)=>{const p=new qt(f,c,u,7,1,f===0);p.translate(0,u/2,0),p.rotateZ(g),p.translate(d,m,x),o.push(p.toNonIndexed())};h(.2,.15,.55,0,-.05,0,.12),h(.15,.1,.5,-.07,.47,0,.38),h(.1,0,.45,-.26,.92,0,.75);for(const[c,f,u]of[[.14,.3,-1.1],[-.18,.7,1.2],[-.02,.62,-1]]){const d=new te(.04,.18,5);d.translate(0,.09,0),d.rotateZ(u),d.translate(c,f,0),o.push(d.toNonIndexed())}const l=Wu(o,!1)??o[0];return l.computeVertexNormals(),l}),a=new S(s,this.toon(5208658,12118228,.12));return a.castShadow=!1,a.userData.fixedColor=!0,a.userData.baseOpacity=1,a}if(e==="lane"){const s=new Zt,a=(o,h,l,c,f,u=0)=>{const d=new S(this.sharedGeo(o,()=>new Ge(h,l).translate(h/2,0,0)),this.mat(new at({color:c,transparent:!0,opacity:f,depthWrite:!1,fog:!1,side:$t})));return d.rotation.x=-Math.PI/2,d.position.z=u,d.userData.baseOpacity=f,c!==i&&(d.userData.fixedColor=!0),s.add(d),d};a("lane-fill",1,1,i,.24),a("lane-core",1,1,i,.55).name="core";for(const o of[-1,1])a("lane-outline",1,.08,1706516,.55,o*.52),a("lane-rim",1,.05,i,.95,o*.48);return s}if(e==="cut"){const s=new Zt,a=this.makeStreakTex(),o=[[1.6,.42,.55,!0],[1.45,.1,1,!1]];for(const[h,l,c,f]of o){const u=new S(this.sharedGeo(`show-cut-${h}`,()=>new Ge(h,l)),this.mat(new at({color:f?i:16777215,map:a,transparent:!0,opacity:c,depthWrite:!1,depthTest:!1,fog:!1,side:$t,blending:f?pe:Rn})));u.userData.baseOpacity=c,f||(u.userData.fixedColor=!0),u.renderOrder=5,s.add(u)}return s}if(e==="sweep"){const s=new Zt,a=[["show-sweep-glow",.35,1.25,.5,!0],["show-sweep-edge",.85,1.18,.95,!1]];for(const[o,h,l,c,f]of a){const u=new S(this.sharedGeo(o,()=>x_(h,l,Math.PI*.75)),this.mat(new at({color:i,map:this.slashTex(),transparent:!0,opacity:c,depthWrite:!1,fog:!1,side:$t,blending:f?pe:Rn})));u.userData.baseOpacity=c,s.add(u)}return s}if(e==="bat"){const s=this.sharedGeo("show-bat",()=>{const l=new vi;l.moveTo(0,-.16),l.lineTo(.1,.02),l.lineTo(.34,.2),l.lineTo(.16,.08),l.lineTo(.1,.16),l.lineTo(0,.06),l.lineTo(-.1,.16),l.lineTo(-.16,.08),l.lineTo(-.34,.2),l.lineTo(-.1,.02),l.closePath();const c=new Hi(l,{depth:.03,bevelEnabled:!1});return c.center(),c}),a=new Zt;a.rotation.order="YXZ";const o=new S(s,n);o.scale.setScalar(1.45),o.userData.baseOpacity=.8,o.material.depthTest=!1,o.renderOrder=6,a.add(o);const h=new S(s,this.mat(new at({color:8002108,transparent:!0,opacity:.97,depthWrite:!1,depthTest:!1,fog:!1,side:$t})));return h.userData.fixedColor=!0,h.userData.baseOpacity=.97,h.position.y=.01,h.renderOrder=7,a.add(h),a}if(e==="band")return new S(this.sharedGeo("show-band",()=>new ie(.95,.13,8,16,Math.PI*.55)),n);if(e==="claw"){const s=new Zt,a=Math.PI*.22;for(let o=0;o<3;o++){const h=.45+o*.28,l=h+.5,c=this.sharedGeo(`show-claw-${o}`,()=>mo(h,l,a)),f=new S(c,this.mat(new at({color:i,map:this.slashTex(),transparent:!0,opacity:.9-o*.08,depthWrite:!1,fog:!1,side:$t,blending:pe})));s.add(f)}return s}if(e==="knifeslash"){const s=new Zt,a=Math.PI*.16,o=this.sharedGeo("show-knife",()=>mo(.3,.95,a)),h=new S(o,this.mat(new at({color:i,map:this.slashTex(),transparent:!0,opacity:.55,depthWrite:!1,fog:!1,side:$t,blending:pe})));h.scale.set(1.2,1.35,1),h.userData.baseOpacity=.55,s.add(h);const l=new S(o,this.mat(new at({color:i,map:this.slashTex(),transparent:!0,opacity:.92,depthWrite:!1,fog:!1,side:$t})));return l.userData.baseOpacity=.92,s.add(l),s}if(e==="sworddrop"){const s=new Zt,a=new S(this.sharedGeo("show-sword-blade",()=>{const c=new vi;c.moveTo(0,1.05),c.lineTo(.09,.55),c.lineTo(.06,-.35),c.lineTo(-.06,-.35),c.lineTo(-.09,.55),c.closePath();const f=new Hi(c,{depth:.045,bevelEnabled:!1});return f.center(),f}),n);s.add(a);const o=new S(this.sharedGeo("show-sword-guard",()=>new It(.32,.05,.07)),n);o.position.y=-.35,s.add(o);const h=new S(this.sharedGeo("show-sword-grip",()=>new qt(.028,.032,.3,6)),this.mat(new at({color:2759186,fog:!1,transparent:!0,opacity:.95})));h.userData.fixedColor=!0,h.position.y=-.55,s.add(h);const l=new S(this.sharedGeo("show-sword-glow",()=>new Ge(.3,1.5)),this.mat(new at({color:i,map:this.glowTex(),transparent:!0,opacity:.55,depthWrite:!1,fog:!1,side:$t,blending:pe})));return l.userData.baseOpacity=.55,l.position.y=.15,s.add(l),s}return new S(this.sharedGeo("show-drop",()=>new te(.08,.9,5)),n)}spawnShow(e,i,n,s,a=0,o=1,h=0,l=.22,c=1,f,u){if(e==="crescent"&&this.runJob!=="reaper"||e==="blade"&&this.runJob!=="reaper"||e==="band"&&this.runJob!=="reaper"||e==="bat"&&this.runJob!=="reaper"||e==="claw"&&this.runJob!=="reaper"||e==="sweep"&&this.runJob!=="reaper")return;const d=e==="warn"||e==="lane"||e==="bat"||e==="cut"||e==="root";if(this.lite&&!d&&this.shows.filter(g=>g.live).length>5)return;let m=this.shows.find(g=>!g.live&&g.kind===e);if(!m){let g=0,p;for(const M of this.shows)M.kind===e&&(g++,(!p||M.ttl<p.ttl)&&(p=M));g>=64&&(m=p)}if(!m){const g=this.makeShowMesh(e,s);this.scene.add(g),m={live:!1,kind:e,mesh:g,ttl:0,max:.4,yaw:a,x:i,z:n,scale:o,spin:h,tilt:l,fade:c},this.shows.push(m)}m.live=!0,m.x=i,m.z=n,m.yaw=a,m.scale=o,m.spin=h,m.tilt=l,m.fade=c,m.target=f,m.max=e==="meteor"?.52:e==="dome"?.9:e==="pillar"?.48:e==="clone"?.55:e==="drop"?.42:e==="sworddrop"?.55:e==="blade"?.26:e==="band"||e==="claw"?.3:e==="sweep"?.24:e==="cut"?.3:e==="bat"?.62:e==="crescent"?.44:e==="knifeslash"?.2:.36,u!==void 0?m.max=u:(e==="warn"||e==="lane"||e==="root")&&(m.max=.6),m.ttl=m.max,m.mesh.visible=!0;const x=e==="meteor"?7.2:e==="drop"||e==="sworddrop"?6.4:e==="rune"?.06:e==="dome"?.05:e==="pillar"?2.2:e==="crescent"||e==="band"||e==="claw"?1.35:e==="knifeslash"||e==="sweep"?.95:e==="bat"?.1:1.05;m.mesh.position.set(i,x,n),e==="crescent"||e==="blade"||e==="band"||e==="claw"||e==="knifeslash"?m.mesh.rotation.set(l,a,0):e==="sweep"||e==="bat"?m.mesh.rotation.set(0,-a,0):e==="root"?(m.mesh.rotation.set(0,-a,l),m.mesh.position.y=-1.25*o):m.mesh.rotation.y=a,m.mesh.scale.setScalar(o),m.mesh.traverse(g=>{g instanceof S&&g.material instanceof at&&(g.userData.fixedColor||g.material.color.setHex(s),g.material.opacity=(g.userData.baseOpacity??.95)*c)})}spawnFloat(e,i,n,s,a,o={}){if(!this.floatLayer){const l=document.createElement("div");l.className="float-layer",document.body.appendChild(l),this.floatLayer=l}let h=this.floats.find(l=>!l.live);if(!h)if(this.floats.length>=40)h=this.floats.reduce((l,c)=>l.t/l.max>c.t/c.max?l:c);else{const l=document.createElement("span");this.floatLayer.appendChild(l),h={el:l,x:0,y:0,z:0,t:0,max:1,rise:0,live:!1},this.floats.push(h)}h.el.className=`float-text ${i}`,h.el.textContent=e,h.el.style.display="block",Object.assign(h,{x:n,y:s,z:a,t:0,max:o.max??.75,rise:o.rise??.9,follow:o.follow,live:!0})}queueDamageNumber(e,i,n){if(i<.5||!En().damageNumbers)return;const s=this.dmgPending.get(e);s?(s.amount+=i,s.big||(s.big=n),s.x=e.mesh.position.x,s.z=e.mesh.position.z):this.dmgPending.set(e,{amount:i,t:0,big:n,x:e.mesh.position.x,z:e.mesh.position.z})}stepFloats(e){for(const[n,s]of this.dmgPending){s.t+=e;const a=n.hp<=0||!this.enemies.includes(n);if(s.t<.12&&!a)continue;this.dmgPending.delete(n);const o=Math.round(s.amount),h=o>=1e4?`${Math.round(o/1e3)}k`:o>=1e3?`${(o/1e3).toFixed(1)}k`:`${o}`,l=(Math.random()-.5)*.6;this.spawnFloat(h,s.big?"float-big":"float-dmg",s.x+l,1.9,s.z)}if(!this.floats.some(n=>n.live))return;const i=this.canvasRect??(this.canvasRect=this.renderer.domElement.getBoundingClientRect());for(const n of this.floats){if(!n.live)continue;n.t+=e;const s=n.t/n.max;if(s>=1){n.live=!1,n.el.style.display="none";continue}n.follow&&this.enemies.includes(n.follow)&&(n.x=n.follow.mesh.position.x,n.z=n.follow.mesh.position.z),go.set(n.x,n.y+n.rise*(1-(1-s)*(1-s)),n.z).project(this.camera);const a=i.left+(go.x+1)/2*i.width,o=i.top+(1-go.y)/2*i.height,h=s<.12?1.35-s/.12*.35:1;n.el.style.transform=`translate(${a.toFixed(1)}px, ${o.toFixed(1)}px) translate(-50%, -50%) scale(${h.toFixed(2)})`,n.el.style.opacity=s>.66?`${((1-s)/.34).toFixed(2)}`:"1"}}clearFloats(){this.dmgPending.clear();for(const e of this.floats)e.live=!1,e.el.style.display="none"}addCorpse(e,i,n,s="fall",a=16777215){if(e.rotation.order="YXZ",e.rotation.y=Math.atan2(e.position.x-i,e.position.z-n),e.rotation.z=0,this.corpses.push({mesh:e,t:0,y0:e.position.y,s0:e.scale.clone(),tip:.9+Math.random()*.5,style:s,col:a,thud:!1}),s==="shatter"&&(this.burst(e.position.x,e.position.z,a,this.lite?6:12),this.spawnFx("shock",e.position.x,.08,e.position.z,a)),this.corpses.length>24){const o=this.corpses.shift();o&&this.scene.remove(o.mesh)}}stepCorpses(e){for(let i=this.corpses.length-1;i>=0;i--){const n=this.corpses[i];n.t+=e;const s=n.mesh,a=s.position.x,o=s.position.z,h=n.t<.08?1+.22*Math.sin(n.t/.08*Math.PI):1,l=(f,u,d)=>s.scale.set(n.s0.x*f,n.s0.y*u,n.s0.z*d);let c;if(n.style==="rise"){c=Math.min(1,n.t/.6),s.position.y=n.y0+c*1.3,s.rotation.y+=e*(4+c*10);const f=Math.pow(1-c,.7)*h;l(f,f*(1+c*.4),f),Math.random()<e*(this.lite?12:30)&&this.burst(a,o,n.col,1)}else if(n.style==="shatter"){c=Math.min(1,n.t/.16);const f=(1+.3*Math.sin(c*Math.PI*.5))*(1-c);l(f,f,f)}else if(n.style==="melt"){c=Math.min(1,n.t/.65);const f=1-Math.pow(1-c,2);s.position.y=n.y0-c*.15,l((1+f*.6)*(1-c*.3)*h,Math.max(.04,1-f),(1+f*.6)*(1-c*.3)*h)}else if(n.style==="sink")c=Math.min(1,n.t/.5),s.position.y=n.y0-c*c*1.4,s.rotation.y+=e*9,Math.random()<e*24&&this.burst(a,o,9071178,1),l(h,h,h);else if(n.style==="flip"){c=Math.min(1,n.t/.55);const f=Math.min(1,n.t/.22);s.rotation.z=Math.PI*(1-Math.pow(1-f,3)),s.position.y=n.y0+Math.sin(f*Math.PI)*.45+(c>.6?-(c-.6)*1.2:0);const u=(c>.6?1-(c-.6)/.4:1)*h;l(u,u,u)}else{c=Math.min(1,n.t/.55);const f=1-Math.pow(1-c,2);s.rotation.x=f*n.tip,s.position.y=n.y0-c*c*1.1;const u=(1-.4*c)*h;l(u,u,u),!n.thud&&c>.42&&(n.thud=!0,this.burst(a,o,14207176,this.lite?2:5))}c>=1&&(this.scene.remove(n.mesh),this.corpses.splice(i,1))}}stepShows(e){for(const i of this.shows){if(!i.live)continue;i.ttl-=e;const n=Math.max(0,i.ttl/i.max),s=(a,o)=>{a.traverse(h=>{h instanceof S&&h.material instanceof at&&(h.material.opacity=(h.userData.baseOpacity??1)*o*i.fade)})};if(i.kind==="crescent")i.spin&&(i.mesh.rotation.y+=e*i.spin),i.mesh.scale.setScalar(i.scale*(1.3-(1-n)*.55)),s(i.mesh,n);else if(i.kind==="pillar")i.mesh.position.y=2.2+(1-n)*.8,i.mesh.scale.set(i.scale*(.7+n),i.scale*(1.2-n*.2),i.scale*(.7+n)),s(i.mesh,n*.85);else if(i.kind==="dome")i.mesh.position.set(this.px,.05,this.pz),i.mesh.scale.setScalar(i.scale*(.8+(1-n)*.5)),s(i.mesh,n*.55);else if(i.kind==="rune")i.mesh.rotation.z+=e*2.4,i.mesh.scale.setScalar(i.scale*(.9+(1-n)*.8)),s(i.mesh,n);else if(i.kind==="meteor")i.mesh.position.y=.5+n*6.7,i.mesh.rotation.x+=e*8,i.mesh.rotation.y+=e*6,s(i.mesh,.4+n*.6);else if(i.kind==="clone")s(i.mesh,n*.55),i.mesh.position.y=0;else if(i.kind==="drop")i.mesh.position.y=Math.max(.4,i.mesh.position.y-16*e),i.mesh.rotation.x=Math.PI,s(i.mesh,n),i.mesh.position.y<=.45&&n>.1&&(this.spawnFx("ring",i.x,.08,i.z,jt[this.runJob]),i.ttl=0);else if(i.kind==="sworddrop")i.target&&(i.x=i.target.mesh.position.x,i.z=i.target.mesh.position.z),i.max-i.ttl<.16?(i.mesh.position.set(i.x,6.4,i.z),i.mesh.rotation.x=Math.PI,i.mesh.rotation.y=i.yaw,s(i.mesh,1)):(i.mesh.position.x=i.x,i.mesh.position.z=i.z,i.mesh.position.y=Math.max(.35,i.mesh.position.y-26*e),i.mesh.rotation.x=Math.PI+Math.sin(i.mesh.id*.7)*.12,i.mesh.rotation.y=i.yaw+Math.sin(this.clock*3+i.mesh.id)*.06,s(i.mesh,1),i.mesh.position.y<=.4&&(this.spawnFx("ring",i.x,.08,i.z,jt.knight),this.burst(i.x,i.z,jt.knight,8),i.ttl=0));else if(i.kind==="warn"){const a=1-n;i.mesh.position.set(i.x,.05,i.z),i.mesh.scale.setScalar(i.scale);const o=i.mesh.getObjectByName("core");o&&o.scale.setScalar(Math.max(.02,a)),s(i.mesh,n<.12?n/.12:1)}else if(i.kind==="root"){const a=i.max-i.ttl,o=Math.min(1,a/.09),h=i.ttl<.2?i.ttl/.2:1,l=1-Math.pow(1-o,3);i.mesh.position.set(i.x,-1.25*i.scale*(1-l*h),i.z),i.mesh.rotation.set(0,-i.yaw,i.tilt),i.mesh.scale.setScalar(i.scale*(.7+.3*l))}else if(i.kind==="lane"){const a=1-n;i.mesh.position.set(i.x,.05,i.z),i.mesh.rotation.set(0,-i.yaw,0),i.mesh.scale.set(i.scale,1,i.tilt);const o=i.mesh.getObjectByName("core");o&&o.scale.set(Math.max(.02,a),1,1),s(i.mesh,n<.12?n/.12:1)}else if(i.kind==="cut"){i.target&&this.enemies.includes(i.target)&&(i.x=i.target.mesh.position.x,i.z=i.target.mesh.position.z);const a=1-n;i.mesh.position.set(i.x,.95+(i.target?i.target.mesh.position.y:0),i.z),i.mesh.quaternion.copy(this.camera.quaternion),i.mesh.rotateZ(i.yaw);const o=Math.min(1,a/.3),h=a>.55?1-(a-.55)/.45:1;i.mesh.scale.set(i.scale*(.15+o*.85),i.scale*Math.max(.15,h),1),s(i.mesh,Math.min(1,n*2.5))}else if(i.kind==="sweep"){const a=i.max-i.ttl;i.mesh.position.set(this.px,.95,this.pz),i.mesh.rotation.set(0,-(i.yaw+i.spin*a),0);const o=i.scale*(.92+(1-n)*.12);i.mesh.scale.set(o,o,i.spin<0?-o:o),s(i.mesh,Math.min(1,n*2.2))}else if(i.kind==="bat"){i.target&&this.enemies.includes(i.target)&&(i.x=i.target.mesh.position.x,i.z=i.target.mesh.position.z);const a=1-n,o=i.yaw+i.spin*(i.max-i.ttl),h=i.tilt*(1.2-a*.35)+(a>.8?(a-.8)*3:0);i.mesh.position.set(i.x+Math.cos(o)*h,.35+Math.min(1,a*1.6)*1.55+(a>.8?(a-.8)*4:0),i.z+Math.sin(o)*h);const l=i.spin>=0?1:-1,c=-Math.sin(o)*l,f=Math.cos(o)*l;i.mesh.rotation.set(-Math.PI/2+.35,Math.atan2(-c,-f),Math.sin(this.clock*9+i.yaw)*.25);const u=.45+.55*Math.abs(Math.sin(this.clock*34+i.yaw*3));i.mesh.scale.set(i.scale*u,i.scale,i.scale),s(i.mesh,Math.min(1,a*6,n*3))}else(i.kind==="blade"||i.kind==="band"||i.kind==="claw")&&(i.spin&&(i.mesh.rotation.z+=e*i.spin),i.mesh.scale.setScalar(i.scale*(1.1-n*.15)),s(i.mesh,n));i.ttl<=0&&(i.live=!1,i.mesh.visible=!1)}}applyHitFlash(e){let i=e.flash>0;if(i&&e.bossId&&!e.mesh.userData.flashing&&(this.clock-(e.mesh.userData.flashAt??-9)<.3?i=!1:e.mesh.userData.flashAt=this.clock),i===!!e.mesh.userData.flashing)return;e.mesh.userData.flashing=i,this.hitFlashMat??(this.hitFlashMat=this.mat(new at({color:16774898,fog:!1})));const n=this.hitFlashMat;e.mesh.traverse(s=>{if(s instanceof S)if(i){const a=s.material;if(Array.isArray(s.material)||a.transparent)return;s.userData.baseMat=a,s.material=n}else s.userData.baseMat&&(s.material=s.userData.baseMat,delete s.userData.baseMat)})}ensureAura(){this.aura||(this.aura=new S(this.sharedGeo("aura",()=>new ie(.85,.05,6,20)),this.mat(new at({color:jt.reaper,transparent:!0,opacity:.7,fog:!1,depthWrite:!1,blending:pe}))),this.aura.rotation.x=-Math.PI/2,this.scene.add(this.aura))}ensureMark(){this.markSigil||(this.markSigil=new S(this.sharedGeo("mark",()=>new Ne(.35,.5,16)),this.mat(new at({color:jt.hunter,transparent:!0,opacity:.85,side:$t,fog:!1,depthWrite:!1,blending:pe}))),this.markSigil.rotation.x=-Math.PI/2,this.scene.add(this.markSigil))}ensureSparks(){if(this.sparkMesh)return this.sparkMesh;const e=this.sparkTtl.length,i=new yn(this.sharedGeo("spark",()=>new wt(.07,6,6)),this.mat(new at({color:16777215,fog:!1})),e);i.instanceMatrix.setUsage(sp),i.frustumCulled=!1;const n=new Ot(16777215);for(let s=0;s<e;s++)i.setColorAt(s,n);return i.instanceMatrix.array.fill(0),i.instanceMatrix.needsUpdate=!0,this.sparkTtl.fill(0),this.scene.add(i),this.sparkMesh=i,i}burst(e,i,n,s=8){this.lite?s=Math.min(s,3):s=Math.min(s,8);const a=this.ensureSparks(),o=this.sparkTtl.length;this.sparkColor.setHex(n);for(let h=0;h<s;h++){const l=this.sparkNext;this.sparkNext=(this.sparkNext+1)%o;const c=Math.random()*Math.PI*2,f=3+Math.random()*7;this.sparkPos[l*3]=e,this.sparkPos[l*3+1]=.85+Math.random()*.5,this.sparkPos[l*3+2]=i,this.sparkVel[l*3]=Math.cos(c)*f,this.sparkVel[l*3+1]=3+Math.random()*6,this.sparkVel[l*3+2]=Math.sin(c)*f,this.sparkTtl[l]=.32+Math.random()*.22,a.setColorAt(l,this.sparkColor)}a.instanceColor&&(a.instanceColor.needsUpdate=!0)}spawnFx(e,i,n,s,a,o=0,h=1){let l=this.fx.find(c=>!c.live&&c.kind===e);if(!l){let c=0,f;for(const u of this.fx)u.kind===e&&(c++,(!f||u.ttl<f.ttl)&&(f=u));c>=48&&(l=f)}if(!l){let c;e==="ring"||e==="shock"?(c=new S(this.sharedGeo("fx-ring",()=>new Ne(.35,.5,16)),this.mat(new at({color:a,transparent:!0,opacity:.9,side:$t,fog:!1,depthWrite:!1}))),c.rotation.x=-Math.PI/2):e==="flash"?c=new S(this.sharedGeo("fx-flash",()=>new Ge(1.2,1.2)),this.mat(new at({map:this.makeStarTex(),color:a,transparent:!0,opacity:1,fog:!1,depthWrite:!1,blending:pe,side:$t}))):e==="arc"?c=new S(this.sharedGeo("fx-arc",()=>{const f=new Ge(1,.14);return f.translate(.5,0,0),f}),this.mat(new at({map:this.makeStreakTex(),color:a,transparent:!0,opacity:1,fog:!1,depthWrite:!1,blending:pe,side:$t}))):c=new S(this.sharedGeo("fx-streak",()=>new Ge(1.4,.18)),this.mat(new at({map:this.makeStreakTex(),color:a,transparent:!0,opacity:1,fog:!1,depthWrite:!1,blending:pe}))),this.scene.add(c),l={mesh:c,kind:e,ttl:0,max:.28,live:!1,yaw:0,len:1},this.fx.push(l)}l.live=!0,l.ttl=l.max,l.yaw=o,l.len=h,l.mesh.visible=!0,l.mesh.position.set(i,n,s),e==="streak"?l.mesh.rotation.set(0,-o,0):e==="arc"&&(l.mesh.rotation.set(0,-o,0),l.mesh.scale.set(h,1,1)),l.mesh.material.color.setHex(a),l.mesh.material.opacity=1}impact(e,i,n,s=!1,a=!1){this.burst(e,i,n,s?14:8),this.spawnFx("ring",e,.08,i,n),this.spawnFx("flash",e,1,i,n),this.bloomKick=Math.min(1.2,this.bloomKick+(s?.85:a?.7:.4)),this.hitLight||(this.hitLight=new vs(n,0,8,2),this.scene.add(this.hitLight)),this.hitLight.color.setHex(n),this.hitLight.intensity=s?3.2:1.8,this.hitLight.position.set(e,1.2,i)}stepFx(e){this.bloomKick=Math.max(0,this.bloomKick-e*3.4),this.hitLight&&(this.hitLight.intensity=Math.max(0,this.hitLight.intensity-e*10));for(const i of this.fx){if(!i.live)continue;i.ttl-=e;const n=Math.max(0,i.ttl/i.max),s=i.mesh.material;if(s.opacity=n,i.kind==="arc")i.mesh.scale.set(i.len,1+(1-n)*.5,1);else{const a=1+(1-n)*(i.kind==="ring"||i.kind==="shock"?2.4:.6);i.mesh.scale.setScalar(a)}i.kind==="flash"&&i.mesh.lookAt(this.camera.position),i.ttl<=0&&(i.live=!1,i.mesh.visible=!1)}}stepSparks(e){const i=this.sparkMesh;if(!i)return;const n=i.instanceMatrix.array,s=this.sparkTtl.length;let a=!1;for(let o=0;o<s;o++){if(this.sparkTtl[o]<=0)continue;a=!0;const h=this.sparkTtl[o]-=e,l=o*16;if(h<=0){n[l]=n[l+5]=n[l+10]=0;continue}const c=o*3;this.sparkPos[c]+=this.sparkVel[c]*e,this.sparkPos[c+1]+=this.sparkVel[c+1]*e,this.sparkPos[c+2]+=this.sparkVel[c+2]*e,this.sparkVel[c+1]-=18*e;const f=Math.min(1,h*3);n[l]=f,n[l+1]=n[l+2]=n[l+3]=n[l+4]=0,n[l+5]=f,n[l+6]=n[l+7]=n[l+8]=n[l+9]=0,n[l+10]=f,n[l+11]=0,n[l+12]=this.sparkPos[c],n[l+13]=this.sparkPos[c+1],n[l+14]=this.sparkPos[c+2],n[l+15]=1}a&&(i.instanceMatrix.needsUpdate=!0)}}const ei={tempest:{name:"Tempest",color:10475775,members:["firerate","haste","dash","stormstep"],two:"+8% attack speed",three:"Dashing flings a ring of bolts"},hearth:{name:"Hearth",color:16761466,members:["vitality","leech","ward","overshield"],two:"+20 max life",three:"Each chamber cleared mends 20% of your life"},pyre:{name:"Pyre",color:16747098,members:["splinter","echo","kindling","chainreact"],two:"+8% damage",three:"Kills burst into flame around them"},wrath:{name:"Wrath",color:16738954,members:["damage","fury","glassheart","bloodrush"],two:"+8% damage",three:"+20% attack speed below half life"},rime:{name:"Rime",color:12577279,members:["frost","frostbite","pierce","bounce"],two:"+12% damage to slowed foes",three:"Slowed foes shatter when they fall"},kinship:{name:"Kinship",color:12118228,members:["bond","multishot","magnet","phantom","thunderguard"],two:"Your familiar deals 30% more",three:"Your familiar 30% more again, and you +6% damage"}},ya=Object.keys(ei);function __(r){return ya.find(t=>ei[t].members.includes(r))}function v_(r){const t={};for(const e of ya)t[e]=ei[e].members.filter(i=>r.includes(i)).length;return t}function w_(r){return r>=3?3:r>=2?2:0}class S_ extends M_{hurt(t,e=0,i=0){if(!this.alive||this.practiceSkin)return;if(!Number.isFinite(this.hp)||this.hp<=0){this.die();return}if(this.iFrames>0)return;if(this.petGuard>0){this.petGuard-=1,this.iFrames=Math.max(this.iFrames,.35),this.impact(this.petX,this.petZ,Rt[1],!1),this.pushHud("Familiar ward");return}if(this.ward>0){this.ward-=1,this.iFrames=Math.max(this.iFrames,.4),this.impact(this.px,this.pz,Rt[1],!1),this.pushHud("Ward held");return}let n=t*lf(this.room)*(this.roomIsBoss?Ut.bossRoomDamage:1)*this.curseDmg*this.oath.damageTaken;this.newcomer&&this.room<=2&&(n*=Ut.newcomerDamage);const s=this.hp>this.maxHp*.25;if(this.hp-=n,s&&this.hp>0&&this.hp<=this.maxHp*.25&&cf(),this.petTalents.includes("kin")&&(this.petFire=0),Xh("hurt"),this.logDamage(n,e,i),this.hp<=0&&this.emberLeft>0){this.emberLeft-=1,this.hp=Math.round(this.maxHp*.3),this.iFrames=1.6,this.spawnFx("shock",this.px,.08,this.pz,16761466),this.spawnFx("flash",this.px,1,this.pz,16761466),this.burst(this.px,this.pz,16761466,14),uf(),this.pushHud("Last Ember: the ruin lets you up once");return}const a=this.swapLeft>0&&this.runJob==="wanderer"?.2:0;this.iFrames=Ut.hurtIFrames+this.extraIFrames+a,this.trauma=Math.min(1,this.trauma+.2),ff(),Ys(110,.7);const o=Math.atan2(this.pz-i,this.px-e);this.vx+=Math.cos(o)*6,this.vz+=Math.sin(o)*6,this.impact(this.px,this.pz,Rt[0],!1,!0),this.pushHud(),this.hp<=0?this.die():this.onHurt()}onHurt(){}die(){this.finishRunLog("died"),this.summarize(!1),ds("death"),this.alive=!1,df(),this.endRun(!1),de.getState().setScreen("dead")}beginRunLog(){const e=Be().jobs[this.runJob];this.runLog={at:Date.now(),job:this.runJob,weapon:this.skin,level:e.level,tier:this.classIndex+1,heat:this.oath.heat,result:"open",endRoom:this.room,secs:0,rooms:[]},this.roomLog=void 0}reopenRunLog(){const t=this.diedLog;this.diedLog=void 0,!(!t||this.runLog)&&(t.run.result="open",this.runLog=t.run,this.roomLog=t.room)}beginRoomLog(t){this.runLog&&(this.closeRoomLog(),this.roomLog={room:this.room,kind:t,secs:0,dmg:0,by:{},kills:0,lowPct:Math.round(100*this.hp/Math.max(1,this.maxHp))},this.roomLogAt=this.clock,this.runLog.rooms.push(this.roomLog))}closeRoomLog(){this.roomLog&&(this.roomLog.secs=+(this.clock-this.roomLogAt).toFixed(1))}logDamage(t,e,i){const n=this.roomLog;if(!n)return;let s="shots/hazards",a=1.6;for(const o of this.enemies){const h=Math.hypot(o.mesh.position.x-e,o.mesh.position.z-i);h<a&&(a=h,s=o.bossId??o.kind)}n.dmg=Math.round(n.dmg+t),n.by[s]=Math.round((n.by[s]??0)+t),n.lowPct=Math.min(n.lowPct,Math.max(0,Math.round(100*this.hp/Math.max(1,this.maxHp))))}logKill(){this.roomLog&&(this.roomLog.kills+=1)}finishRunLog(t){const e=this.runLog;!e||e.result!=="open"||(this.closeRoomLog(),e.result=t,e.endRoom=this.room,e.secs=+e.rooms.reduce((i,n)=>i+n.secs,0).toFixed(1),pf(e),this.diedLog=t==="died"?{run:e,room:this.roomLog}:void 0,this.runLog=void 0,this.roomLog=void 0)}bankRun(){mf(this.unbanked.kills,this.unbanked.elites,this.unbanked.bosses,this.unbanked.champions),this.unbanked={kills:0,elites:0,bosses:[],champions:0},gf(this.masteryGain),this.masteryGain={},xf()}summarize(t){de.getState().setRunSummary({won:t,room:this.room,chambers:this.runCleared,kills:this.kills,bigHit:Math.round(this.runBigHit),secs:Math.round(this.clock-this.runStartClock),newBest:this.room>this.runStartBest,endless:this.endless,mastery:this.masterySummary()})}masterySummary(){var a;const t=Object.entries(this.masteryRun).sort((o,h)=>h[1]-o[1])[0];if(!t||t[1]<=0)return;const[e,i]=t,n=this.masteryBase[e]??0,s=ta(n+i);return{name:((a=Yc(e))==null?void 0:a.name)??e,gained:Math.round(i),rank:s,rankUp:s>ta(n)}}endRun(t){this.daily&&Mf(this.room);const e=Be();e.bestRoom=Math.max(e.bestRoom,this.room),this.endless&&(e.bestDepth=Math.max(e.bestDepth??0,this.room)),t&&(e.jobs[this.runJob].cleared=!0,e.ash+=20,e.bestHeat=Math.max(e.bestHeat??0,this.oath.heat)),Pn(e),de.getState().refreshSave(),this.paused=!0,this.bankRun()}practiceReadout(){const t=this.clock-4;if(this.practiceHits=this.practiceHits.filter(n=>n.t>=t),!this.practiceHits.length)return"Practice: hit the dummies. Pause to leave.";const e=Math.max(1,this.clock-this.practiceHits[0].t),i=this.practiceHits.reduce((n,s)=>n+s.a,0);return`Damage per second: ${Math.round(i/Math.min(4,e))}`}pushHud(t){var h;const e=Be(),i=e.jobs[this.runJob],n=this.job.dashMs/this.dashMul/1e3,s=Zc(this.runJob,this.classIndex,this.skin),a=this.enemies.find(l=>l.bossId)??this.enemies.find(l=>l.champion),o=this.rageLeft>0?"Frenzy":this.markLeft>0?"Mark":this.petBoost>0?"Cry":"";de.getState().setHud({hp:Math.max(0,this.hp),maxHp:this.maxHp,room:this.room,job:this.runJob,className:this.job.className,level:i.level,xp:i.xp,xpNext:vf(i.level),dashReady:this.dashCd<=0?1:1-this.dashCd/n,killCount:this.kills,swapLeft:this.swapLeft,relics:this.relics,curse:this.curse,waveHint:t??(this.practiceSkin?this.practiceReadout():de.getState().hud.waveHint),companion:this.petKind?_f(this.petKind,this.petLevel):"None",ash:e.ash,skillName:s.name,skillReady:this.skillCd<=0?1:1-this.skillCd/this.skillMax,buff:this.ward>0?`Ward ${this.ward}`:o,act:we(this.room),actName:this.practiceSkin?"Practice":`${this.daily?"Daily · ":""}${this.endless&&_o(this.room)>1?`${Mo[we(this.room)-1]}, depth ${_o(this.room)}`:Mo[we(this.room)-1]}`,roomKills:this.roomKills,roomTarget:this.roomTarget,roomIsBoss:this.roomIsBoss,bossName:a!=null&&a.bossId?ea[a.bossId]:((h=a==null?void 0:a.champion)==null?void 0:h.name)??"",bossHp:a?Math.max(0,a.hp):0,bossMaxHp:(a==null?void 0:a.maxHp)??0,bossPhase:(a==null?void 0:a.bossPhase)??0,bossShielded:!!(a&&((a.intro??0)>0||(a.invuln??0)>0)),sets:ya.map(l=>({id:l,have:ei[l].members.filter(c=>this.heldIds.includes(c)).length})).filter(l=>l.have>0).map(({id:l,have:c})=>({name:ei[l].name,color:ei[l].color,have:c,size:ei[l].members.length,two:ei[l].two,three:ei[l].three}))})}}const y_={court:{tint:16771280,power:1.4,reach:9},hall:{tint:16768184,power:1.5,reach:10},cross:{tint:12903167,power:1.5,reach:10},shrine:{tint:16767392,power:2.1,reach:11},elite:{tint:16751272,power:1.9,reach:10},trap:{tint:10475775,power:1.25,reach:8},gallery:{tint:16770752,power:1.5,reach:10},choir:{tint:14206207,power:1.7,reach:12},vault:{tint:16769184,power:1.9,reach:11},boss:{tint:16748410,power:2.4,reach:13}};class b_ extends S_{buildChamber(){const t=we(this.room),e=ns("floor",t);e.repeat.set(3,3),e.anisotropy=this.lite?1:8,this.texs.push(e);const i=ns("wall",t);i.repeat.set(4,1),i.anisotropy=this.lite?1:8,this.texs.push(i);const n=ns("moss",t);n.repeat.set(1,1),this.texs.push(n),this.mossMap=n,this.scene.add(new U0(13154520,this.lite?1.1:.82)),this.scene.add(new z0(15786228,10123408,this.lite?.5:.7));const s=new uh(16770248,this.lite?.75:1.05);if(s.position.set(6,28,8),s.castShadow=!this.lite,this.lite||(s.shadow.mapSize.set(512,512),s.shadow.camera.near=4,s.shadow.camera.far=50,s.shadow.camera.left=-16,s.shadow.camera.right=16,s.shadow.camera.top=16,s.shadow.camera.bottom=-16),this.scene.add(s),!this.lite){const m=new uh(12109055,.55);m.position.set(-8,10,-16),this.scene.add(m)}const a=Ti/2;this.floorMat=this.mat(new jl({map:e,roughness:.94,metalness:.08,color:qs[we(this.room)].floor,emissive:11045016,emissiveIntensity:this.lite?.05:.06}));const o=new S(this.geo(new Ge(Ti+6,Ti+6)),this.floorMat);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,this.scene.add(o);const h=this.mat(new jl({map:i,roughness:.82,metalness:.12,color:13153468,emissive:9994384,emissiveIntensity:this.lite?.08:.14}));this.wallMat=h;const l=2.35,c=(m,x,g,p)=>{const M=new S(this.geo(new It(g,l,p)),h);M.position.set(m,l/2,x),M.castShadow=!0,M.receiveShadow=!0,M.matrixAutoUpdate=!1,M.updateMatrix(),this.scene.add(M);const v=new S(this.geo(new It(Math.max(g,.2),.1,Math.max(p,.2))),this.mat(new at({color:Rt[0]})));v.position.set(m,l+.04,x),v.matrixAutoUpdate=!1,v.updateMatrix(),this.scene.add(v),this.walls.push({minx:m-g/2,maxx:m+g/2,minz:x-p/2,maxz:x+p/2,perim:!0});const _=g>=p,b=_?g:p,T=Math.floor(b/1.25);for(let R=0;R<T;R++){const w=(Math.imul(R+1,2654435761)^Math.imul(Math.round(m+x*7),40503)^this.runSeed)>>>0;if(w%100<25)continue;const A=.3+(w>>>8)%100/250,P=new S(this.geo(new It(_?.72:Di*.85,A,_?Di*.85:.72)),h),z=(R+.5)/T-.5;P.position.set(_?m+z*b:m,l+A/2,_?x:x+z*b),P.castShadow=!0,P.matrixAutoUpdate=!1,P.updateMatrix(),this.scene.add(P)}};c(0,-a,Ti+Di*2,Di),c(0,a,Ti+Di*2,Di),c(-a,0,Di,Ti),c(a,0,Di,Ti);const f=[[-a+2.2,-a+2.2,Rt[0]],[a-2.2,-a+2.2,Rt[1]],[-a+2.2,a-2.2,Rt[2]],[a-2.2,a-2.2,Rt[3]]],u=this.sharedGeo("lamp",()=>new wt(.18,8,8)),d=this.sharedGeo("post",()=>new qt(.07,.09,2.1,6));for(const[m,x,g]of f){const p=new S(u,this.mat(new at({color:g})));p.position.set(m,2.15,x),p.matrixAutoUpdate=!1,p.updateMatrix(),this.scene.add(p);const M=new S(d,this.toon(2101288,g,.3));M.position.set(m,1.05,x),M.matrixAutoUpdate=!1,M.updateMatrix(),this.scene.add(M)}this.scene.add(this.layoutRoot),this.dressLayout(this.room),this.makeParallax(i)}retextureAct(t){const e=this.floorMat,i=this.wallMat;if(!e||!i)return;const n=ns("floor",t);n.repeat.set(3,3),n.anisotropy=this.lite?1:8;const s=ns("wall",t);s.repeat.set(4,1),s.anisotropy=this.lite?1:8;const a=ns("moss",t),o=[e.map,i.map,this.mossMap];e.map=n,i.map=s,this.mossMap=a,e.needsUpdate=!0,i.needsUpdate=!0;for(const h of o)h&&(h.dispose(),this.texs=this.texs.filter(l=>l!==h));this.texs.push(n,s,a)}makeParallax(t){this.farLayer=new Zt,this.midLayer=new Zt,this.nearLayer=new Zt,this.scene.add(this.farLayer,this.midLayer,this.nearLayer);const e=this.sharedGeo("ruin",()=>new It(3.2,4.5,1.2)),i=this.mat(new at({map:t,color:6971512}));for(let l=0;l<6;l++){const c=l/6*Math.PI*2,f=new S(e,i);f.position.set(Math.cos(c)*28,2,Math.sin(c)*28),f.lookAt(0,2,0),f.matrixAutoUpdate=!1,f.updateMatrix(),this.farLayer.add(f)}const n=this.mat(new at({map:this.hazeTex("rgba(240,184,200,1)"),transparent:!0,opacity:.45,depthWrite:!1,fog:!1})),s=this.mat(new at({map:this.hazeTex("rgba(184,232,212,1)"),transparent:!0,opacity:.45,depthWrite:!1,fog:!1}));this.hazeA=new S(this.geo(new Ge(18,8)),n),this.hazeA.position.set(-4,3,-8),this.hazeB=new S(this.geo(new Ge(16,7)),s),this.hazeB.position.set(6,2.4,5),this.midLayer.add(this.hazeA,this.hazeB);const a=this.lite?12:22,o=new Float32Array(a*3);for(let l=0;l<a;l++)o[l*3]=(Math.random()-.5)*22,o[l*3+1]=.4+Math.random()*2.4,o[l*3+2]=(Math.random()-.5)*22;this.moteArr=o;const h=this.geo(new Ie);h.setAttribute("position",new ui(o,3)),this.motes=new Kp(h,this.mat(new Mu({color:16109736,size:.08,transparent:!0,opacity:.55,depthWrite:!1}))),this.nearLayer.add(this.motes)}dressLayout(t){if(!this.wallMat)return;this.clearHazards();const e=o_({room:wf(t),root:this.layoutRoot,walls:this.walls,wallMat:this.wallMat,floorMat:this.floorMat,kit:this.kit,lite:this.lite,mossMap:this.mossMap,seed:this.runSeed}),i=(this.room*2654435761^this.runSeed)>>>0&3;this.layoutRoot.rotation.y=i*Math.PI/2;const n=(h,l)=>i===1?[l,-h]:i===2?[-h,-l]:i===3?[-l,h]:[h,l],s=h=>{const[l,c]=n(h.minx,h.minz),[f,u]=n(h.maxx,h.maxz);return{...h,minx:Math.min(l,f),maxx:Math.max(l,f),minz:Math.min(c,u),maxz:Math.max(c,u)}};this.walls=e.walls.map(h=>h.perim?h:s(h)),this.plats=e.plats.map(s);const a=e.crystal;if(a){const[h,l]=n(a.x,a.z);this.crystalSpot={...a,x:h,z:l}}else this.crystalSpot=a;for(const h of e.hazards){const[l,c]=n(h.x,h.z);this.placeHazard(l,c)}const o=qs[we(t)];if(this.scene.fog instanceof sr&&this.scene.fog.color.setHex(o.fog),this.scene.background instanceof Ot&&this.scene.background.setHex(o.bg),!this.lite){const h=y_[tn(t).kind];for(;this.roomLights.length<e.lights.length;){const l=new vs(h.tint,h.power,h.reach,2);this.scene.add(l),this.roomLights.push(l)}this.roomLights.forEach((l,c)=>{const f=e.lights[c];if(f){const[u,d]=n(f.x,f.z);l.visible=!0,l.color.setHex(h.tint),l.distance=h.reach,l.intensity=h.power,l.userData.base=h.power,l.position.set(u,2.4,d)}else l.visible=!1})}}placeHazard(t,e){const i=new S(this.sharedGeo("hazard",()=>new Ne(.55,.85,16)),this.mat(new at({color:Rt[0],transparent:!0,opacity:.35,side:$t,fog:!1,depthWrite:!1})));i.rotation.x=-Math.PI/2,i.position.set(t,.06,e),this.scene.add(i);const n=this.sharedGeo("hazard-spike",()=>new te(.09,.4,5)),s=this.toon(Rt[3],Rt[0],.25),a=[],o=6;for(let h=0;h<o;h++){const l=h/o*Math.PI*2,c=new S(n,s);c.position.set(t+Math.cos(l)*.62,0,e+Math.sin(l)*.62),c.castShadow=!0,this.scene.add(c),a.push(c)}this.hazards.push({mesh:i,spikes:a,x:t,z:e,t:Math.random()*1.6})}clearHazards(){for(const t of this.hazards){this.scene.remove(t.mesh);for(const e of t.spikes)this.scene.remove(e)}this.hazards=[]}stepHazards(t){var e;for(const i of this.hazards){i.t+=t;const n=i.t%1.8,s=n>1.32,a=i.mesh.material;a.opacity=s?.92:.28,a.color.setHex(s?Rt[0]:Rt[3]),i.mesh.scale.setScalar(s?1.15:.95);const o=1.02,h=n>=o?Math.min(1,(n-o)/(1.32-o)):0,l=(e=i.spikes[0])==null?void 0:e.material;l&&(l.color.setHex(s?Rt[0]:Rt[3]),l.emissiveIntensity=s?.5:.2);for(const c of i.spikes)c.position.y=-.4+h*.6;s&&Math.hypot(this.px-i.x,this.pz-i.z)<.95&&this.hurt(9,i.x,i.z)}if(this.shrineHeal>0&&Math.hypot(this.px,this.pz)<1.7){const i=Math.min(this.shrineHeal,22*t);this.shrineHeal-=i,this.hp=Math.min(this.maxHp,this.hp+i)}}ensureSafe(){const t=Fi(this.px,this.pz,.45,this.walls);this.px=t.x,this.pz=t.z,this.safeX=t.x,this.safeZ=t.z}}class T_ extends b_{queueBeat(t,e){this.beats.push({t,run:e})}anchorAura(t,e){for(const i of this.enemies)if(i.kind==="anchor"&&Math.hypot(i.mesh.position.x-t,i.mesh.position.z-e)<3.5)return .55;return 1}damageAround(t,e,i,n,s,a){for(const o of[...this.enemies])Math.hypot(o.mesh.position.x-t,o.mesh.position.z-e)>i+o.r||this.damageOne(o,t,e,n*((a==null?void 0:a(o))??1),s)}flinchFrom(t,e,i){t.flinch=.22,t.flinchX=e,t.flinchZ=i}damageOne(t,e,i,n,s,a=!1){if(this.bossShielded(t)||t.burrowed)return;const o=Math.atan2(t.mesh.position.z-i,t.mesh.position.x-e),h=this.isGuardedHit(t,o)?.25:1;this.dealTo(t,n*h*this.anchorAura(t.mesh.position.x,t.mesh.position.z)),t.flash=.1,a||(Sf(),t.recoil=.2,this.flinchFrom(t,Math.cos(o),Math.sin(o)),this.impact(t.mesh.position.x,t.mesh.position.z,jt[this.runJob],!1)),this.frost&&(t.slow=Math.max(t.slow,1.4)),s==null||s(t),t.bossId&&this.maybeBossPhase(t),t.hp<=0&&this.killEnemy(t)}addMastery(t){this.practiceSkin||(this.masteryGain[this.skin]=(this.masteryGain[this.skin]??0)+t,this.masteryRun[this.skin]=(this.masteryRun[this.skin]??0)+t)}hitDamage(){const t=Math.max(0,this.job.pellets-1)+this.extraPellets;return(this.job.damage+this.extraDmg+Ut.extraShotDamage*t)*(Ut.weaponPower[this.skin]??1)*yf(this.masteryRank)}bonusPierce(){return Math.max(0,this.job.pierce-Jc[this.runJob].pierce)+this.extraPierce}setDamage(t){return(this.setOn("wrath",2)?1.08:1)*(this.setOn("pyre",2)?1.08:1)*(this.setOn("kinship",3)?1.06:1)*(this.setOn("rime",2)&&t.slow>0?1.12:1)}damageMul(){const t=this.swapLeft>0&&this.runJob==="arcanist"?1.2:1,e=this.markLeft>0?1.85:1,i=this.rageLeft>0?1.35:1,n=this.fury&&this.hp/this.maxHp<.4?1.45:1;return t*e*i*n}dealTo(t,e){let i=e*this.damageMul()*(this.rares.has("glassheart")?1.35:1)*(this.rares.has("frostbite")&&t.slow>0?1.35:1)*this.setDamage(t);if((t.ward??0)>0){const n=Math.min(t.ward??0,i*Ut.wardSoak);if(t.ward=(t.ward??0)-n,i-=n,(t.ward??0)<=0){const s=t.mesh.position.x,a=t.mesh.position.z;this.spawnFx("shock",s,.08,a,$i.warded.color),bf(),this.burst(s,a,$i.warded.color,10),this.dropAffixRing(t,"warded")}}t.hp-=i,t.dummy&&(t.hp<t.maxHp*.5&&(t.hp=t.maxHp),this.practiceHits.push({t:this.clock,a:i})),i>this.runBigHit&&(this.runBigHit=i),this.queueDamageNumber(t,i,i>=this.hitDamage()*2.2)}dropAffixRing(t,e){const i=t.mesh.getObjectByName(`affix-${e}`);i&&i.removeFromParent()}bossShielded(t){return!t.bossId||(t.intro??0)<=0&&(t.invuln??0)<=0?!1:(Math.random()<.3&&this.burst(t.mesh.position.x,t.mesh.position.z,16777215,2),!0)}isBackstab(t,e){const i=Math.sin(t.mesh.rotation.y),n=Math.cos(t.mesh.rotation.y);return i*Math.cos(e)+n*Math.sin(e)>.35}isGuardedHit(t,e){if(!Tf(t.kind))return!1;const i=Math.sin(t.mesh.rotation.y),n=Math.cos(t.mesh.rotation.y);return i*Math.cos(e)+n*Math.sin(e)<-.35}markEnemy(t,e=!1){const i=t.mesh.position.x,n=t.mesh.position.z,s=e?4:3;for(let a=0;a<s;a++){const o=Math.random()*Math.PI,h=a%2===0?2757939:13134847,l=(Math.random()-.5)*.22,c=(Math.random()-.5)*.22;this.queueBeat(a*.03,()=>{this.spawnFx("streak",i+l,.9+Math.random()*.3,n+c,h,o),this.burst(i+l,n+c,3809093,2)})}e&&this.queueBeat((s-1)*.03,()=>this.spawnFx("flash",i,1.05,n,13134847))}glowShot(t,e,i,n=.45){const s=this.mat(new at({color:e,fog:!1,transparent:!0,opacity:1,blending:pe,depthWrite:!1})),a=new S(t,s),o=new S(i,this.mat(new at({color:e,fog:!1,transparent:!0,opacity:n,blending:pe,depthWrite:!1})));return a.add(o),a}shotMesh(t){if(t==="enemy"){const s=new S(this.sharedGeo("shot-enemy-core",()=>new wt(.15,12,10)),this.mat(new at({color:2363436,fog:!1}))),a=new S(this.sharedGeo("shot-enemy-rim",()=>new wt(.22,12,10)),this.mat(new at({color:16723306,fog:!1,side:Ze})));return s.add(a),s}const e=jt[this.runJob];if(t==="bolt"){let s,a;if(this.skin==="arrowbolt")s=this.glowShot(this.sharedGeo("shot-arrow",Uc),e,this.sharedGeo("shot-arrow-glow",()=>new Xe(.16,10)),.35),a=()=>this.sharedGeo("shot-arrow",Uc);else{const c=new S(this.sharedGeo("shot-bolt-core",()=>new Se(.07,0)),this.mat(new at({color:16777215,fog:!1,transparent:!0,opacity:1,blending:pe,depthWrite:!1}))),f=new S(this.sharedGeo("shot-bolt-spark",()=>new Ne(.12,.16,16)),this.mat(new at({color:e,fog:!1,transparent:!0,opacity:1,blending:pe,depthWrite:!1,side:$t})));f.name="boltSpark",c.add(f);const u=new Gs(this.mat(new us({map:this.glintTex(),color:16777215,transparent:!0,opacity:.7,blending:pe,depthWrite:!1,fog:!1})));u.scale.setScalar(.34),u.name="boltGlint",c.add(u),s=c,a=()=>this.sharedGeo("shot-bolt-core",()=>new Se(.07,0))}const o=Rt[1],h=new S(this.sharedGeo("shot-bolt-ring",()=>new ie(.32,.022,6,14)),this.mat(new at({color:o,fog:!1,transparent:!0,opacity:.8,blending:pe,depthWrite:!1})));h.name="tierRing",h.visible=!1,s.add(h);const l=new S(a(),this.mat(new at({color:o,fog:!1,transparent:!0,opacity:.55,blending:pe,depthWrite:!1})));return l.name="tierEcho",l.scale.setScalar(.55),l.position.set(.24,0,.12),l.visible=!1,s.add(l),s}if(t==="shard"){const s=()=>{const c=new Gs(this.mat(new us({map:this.glintTex(),transparent:!0,opacity:.85,blending:pe,depthWrite:!1,fog:!1})));return c.scale.setScalar(.22),c.position.set(0,.14,0),c},a=Rt[1],o=()=>{const c=new S(this.sharedGeo("shot-shard-ring",()=>new ie(.1,.016,6,12)),this.mat(new at({color:a,fog:!1,transparent:!0,opacity:.8,blending:pe,depthWrite:!1})));return c.position.set(0,-.16,0),c.rotation.x=Math.PI/2,c.name="tierRing",c.visible=!1,c};if(this.skin==="twinfang"){const c=this.glowShot(this.sharedGeo("shot-fang",fo),e,this.sharedGeo("shot-fang-glow",()=>new Xe(.14,10)),.35),f=new S(this.sharedGeo("shot-fang",fo),this.mat(new at({color:e,fog:!1,transparent:!0,opacity:1,blending:pe,depthWrite:!1})));f.position.set(.09,-.1,0),f.rotation.z=.4;const u=new S(this.sharedGeo("shot-fang",fo),this.mat(new at({color:a,fog:!1,transparent:!0,opacity:.5,blending:pe,depthWrite:!1})));return u.scale.setScalar(.55),u.position.set(-.12,.18,0),u.name="tierEcho",u.visible=!1,c.add(f,s(),o(),u),c}const h=this.glowShot(this.sharedGeo("shot-shard",Fc),e,this.sharedGeo("shot-shard-glow",()=>new Xe(.16,10)),.35),l=new S(this.sharedGeo("shot-shard",Fc),this.mat(new at({color:a,fog:!1,transparent:!0,opacity:.5,blending:pe,depthWrite:!1})));return l.scale.setScalar(.55),l.position.set(-.12,.18,0),l.name="tierEcho",l.visible=!1,h.add(s(),o(),l),h}if(t==="chain"){if(this.skin==="prismshard")return this.glowShot(this.sharedGeo("shot-prism",()=>new Se(.16,0)),e,this.sharedGeo("shot-prism-glow",()=>new wt(.26,10,8)),.3);const s=new S(this.sharedGeo("shot-bolt-lightning",()=>Oc(.02)),this.mat(new at({color:16052479,fog:!1,transparent:!0,opacity:.95,blending:pe,depthWrite:!1}))),a=new S(this.sharedGeo("shot-bolt-lightning-glow",()=>Oc(.05)),this.mat(new at({color:e,fog:!1,transparent:!0,opacity:.55,blending:pe,depthWrite:!1})));s.add(a);const o=new Gs(this.mat(new us({map:this.glintTex(),color:16777215,transparent:!0,opacity:.85,blending:pe,depthWrite:!1,fog:!1})));return o.scale.setScalar(.28),o.name="chainGlint",s.add(o),s}if(t==="wave"){const s=this.skin==="dawnedge",a=s?Math.PI*1.15:Math.PI*.95,o=new S(this.sharedGeo(s?"shot-wave-wide":"shot-wave",()=>new ie(.62,s?.055:.078,8,22,a)),this.mat(new at({color:e,map:this.glowTex(),fog:!1,transparent:!0,opacity:.9,blending:pe,depthWrite:!1,side:$t}))),h=new S(this.sharedGeo(s?"shot-wave-wide-core":"shot-wave-core",()=>new ie(.62,.026,8,22,a)),this.mat(new at({color:16774368,fog:!1,transparent:!0,opacity:.95,blending:pe,depthWrite:!1,side:$t})));return o.add(h),o}if(t==="slash"){const s=new S(this.sharedGeo("shot-slash",()=>new ie(.95,.08,6,20,Math.PI*1.25)),this.mat(new at({color:e,map:this.glowTex(),fog:!1,transparent:!0,opacity:.85,blending:pe,depthWrite:!1,side:$t}))),a=new S(this.sharedGeo("shot-slash-core",()=>new ie(.95,.03,6,20,Math.PI*1.25)),this.mat(new at({color:16774890,fog:!1,transparent:!0,opacity:.95,blending:pe,depthWrite:!1,side:$t})));return s.add(a),s}const i=this.mat(new at({color:e,fog:!1,opacity:1})),n=t==="orb"?this.sharedGeo("shot-orb",()=>new wt(.18,10,8)):this.sharedGeo("shot-enemy",()=>new wt(.14,8,8));return new S(n,i)}aimShot(t){const e=Math.atan2(t.vz,t.vx);if(t.kind==="slash")t.mesh.rotation.set(.22,e,0);else if(t.kind==="wave")this.skin==="dawnedge"?t.mesh.rotation.set(.3,e,0):t.mesh.rotation.set(Math.PI/2,e,this.clock*16+t.mesh.id);else if(t.kind==="orb")t.mesh.rotation.x=.25;else if(t.kind==="shard"){const i=Math.sin(this.clock*22+t.mesh.id*.4)*.08;t.mesh.rotation.set(Math.PI/2+i,0,e-Math.PI/2)}else if(t.kind==="bolt"&&this.skin!=="arrowbolt"){const i=this.runJob==="wanderer"?this.classIndex:0;t.mesh.rotation.set(Math.PI/2,0,this.clock*(30+i*4)+t.mesh.id);const n=t.mesh.getObjectByName("boltGlint");n&&(n.material.rotation=this.clock*9+t.mesh.id*.3);const s=t.mesh.getObjectByName("boltSpark");s&&(s.lookAt(this.camera.position),s.rotateZ(this.clock*5+t.mesh.id*.4))}else if(t.kind==="chain"&&this.skin!=="prismshard"){const i=Math.sin(this.clock*45+t.mesh.id*3)*.09;t.mesh.rotation.set(Math.PI/2,0,e-Math.PI/2+i);const n=t.mesh.getObjectByName("chainGlint");n&&(n.material.rotation=this.clock*14+t.mesh.id*.3)}else t.mesh.rotation.set(Math.PI/2,0,e-Math.PI/2)}spawnBullet(t,e,i,n,s){const a=n?this.bullets:this.eBullets,o=(s==null?void 0:s.kind)??(n?"bolt":"enemy");let h=a.find(f=>!f.live&&f.kind===o);if(!h){const f=this.shotMesh(o);this.scene.add(f),h={mesh:f,vx:0,vz:0,dmg:0,pierce:0,homing:0,ttl:0,friendly:n,live:!1,kind:o,r:.16,bounce:0,chain:0,chainSeen:[]},a.push(h)}const l=(s==null?void 0:s.speed)??(o==="slash"?4.2:(s==null?void 0:s.ttl)!==void 0&&s.ttl<.2?0:n?this.job.bulletSpeed/mi:10);h.live=!0,h.friendly=n,h.kind=o,h.mesh.visible=!0;const c=(s==null?void 0:s.y)??(n?this.py+.88:1.05);if(h.mesh.position.set(t,c,e),h.vx=Math.cos(i)*l,h.vz=Math.sin(i)*l,h.dmg=(s==null?void 0:s.dmg)??(n?this.hitDamage():10),h.pierce=(s==null?void 0:s.pierce)??(n?this.job.pierce+this.extraPierce:0),h.homing=0,h.ttl=(s==null?void 0:s.ttl)??(o==="orb"?2.2:o==="slash"?.18:1.6),h.r=o==="slash"?.75:o==="wave"?.72:o==="orb"?.28:o==="shard"?.1:.16,h.bounce=n&&o!=="slash"?this.shotBounce:0,h.chain=(s==null?void 0:s.chain)??0,h.chainSeen=[],o==="slash")h.mesh.scale.setScalar(1.05);else if(o==="wave"){const f=n&&this.runJob==="knight"?this.classIndex:0;h.mesh.scale.setScalar(1+f*.14)}else if(o==="orb")h.mesh.scale.setScalar(s!=null&&s.ttl&&s.ttl>2?1.35:1.05);else if(o==="bolt"){const f=n&&this.runJob==="wanderer"?this.classIndex:0;h.mesh.scale.setScalar(1+f*.1);const u=h.mesh.getObjectByName("tierRing");u&&(u.visible=f>=1);const d=h.mesh.getObjectByName("tierEcho");d&&(d.visible=f>=2)}else if(o==="shard"){const f=n&&this.runJob==="hunter"?this.classIndex:0,u=h.mesh.getObjectByName("tierRing");u&&(u.visible=f>=1);const d=h.mesh.getObjectByName("tierEcho");d&&(d.visible=f>=2)}return this.aimShot(h),h}hitEnemy(t,e){if(t.kind==="chain"&&t.chainSeen.includes(e)||e.burrowed)return;if(this.bossShielded(e)){t.live=!1,t.mesh.visible=!1;return}const i=this.isGuardedHit(e,Math.atan2(t.vz,t.vx))?.25:1;this.dealTo(e,t.dmg*i*this.anchorAura(e.mesh.position.x,e.mesh.position.z)),e.flash=.08,e.recoil=.18;const n=Math.hypot(t.vx,t.vz)||1;this.flinchFrom(e,t.vx/n,t.vz/n),t.pierce-=1,ia(),this.trauma<.15&&(this.trauma=Math.min(.15,this.trauma+.03)),Ys(40,.3),this.impact(e.mesh.position.x,e.mesh.position.z,jt[this.runJob],!1),this.frost&&(e.slow=Math.max(e.slow,1.8)),t.friendly&&this.weaponRelicHit(t,e),t.kind==="chain"?this.chainJump(t,e):t.pierce<0&&(t.live=!1,t.mesh.visible=!1),e.bossId&&this.maybeBossPhase(e),e.hp<=0&&this.killEnemy(e)}weaponRelicHit(t,e){const i=e.mesh.position.x,n=e.mesh.position.z;if(t.kind==="bolt"&&this.wr("dagger_deep")&&(e.cuts=(e.cuts??0)+1,e.cuts%4===0&&(this.dealTo(e,t.dmg*2),this.spawnShow("cut",i,n,16773296,.4,1+e.r*.6,0,0,1,e),this.spawnFx("flash",i,1,n,16773296))),t.kind==="chain"&&this.wr("core_scorch")&&this.fireFields.push({x:i,z:n,r:.8,ttl:1.3,tick:.1,dmg:t.dmg*.12,col:16756848}),t.kind==="shard"&&this.wr("fang_hooks")){const s=t.dmg*.15;for(let a=1;a<=3;a++)this.queueBeat(.35*a,()=>{this.enemies.includes(e)&&(this.burst(e.mesh.position.x,e.mesh.position.z,12593230,2),this.damageOne(e,e.mesh.position.x,e.mesh.position.z,s,void 0,!0))})}}nova(t,e,i=8,n="bolt"){const s=this.hitDamage()*.7;for(let a=0;a<i;a++){const o=a/i*Math.PI*2;this.spawnBullet(t+Math.cos(o)*.4,e+Math.sin(o)*.4,o,!0,{kind:n,dmg:s,pierce:1,homing:n==="orb"?180:0,ttl:.85})}this.impact(t,e,jt[this.runJob],!0)}launchChainBolt(t,e,i,n){const s=this.px+Math.cos(t)*.55,a=this.pz+Math.sin(t)*.55;this.spawnBullet(s,a,t,!0,{kind:"chain",dmg:e,chain:i,pierce:0,ttl:1.6,speed:n,y:this.py+.88})}chainJump(t,e){if(t.chainSeen.push(e),t.chain<=0){t.live=!1,t.mesh.visible=!1;return}const i=e.mesh.position.x,n=e.mesh.position.z;let s=null,a=6.5;for(const f of this.enemies){if(t.chainSeen.includes(f))continue;const u=Math.hypot(f.mesh.position.x-i,f.mesh.position.z-n);u<a&&(a=u,s=f)}if(!s){t.live=!1,t.mesh.visible=!1;return}t.chain-=1;const o=s.mesh.position.x,h=s.mesh.position.z,l=Math.atan2(h-n,o-i),c=Math.hypot(t.vx,t.vz)||12;t.mesh.position.set(i,t.mesh.position.y,n),t.vx=Math.cos(l)*c,t.vz=Math.sin(l)*c,this.spawnFx("arc",i,t.mesh.position.y,n,jt.arcanist,l,a),this.spawnFx("arc",i,t.mesh.position.y,n,16777215,l,a),this.burst(i,n,Rt[2],3)}stepFireFields(t){for(let e=this.fireFields.length-1;e>=0;e--){const i=this.fireFields[e];i.ttl-=t,i.tick-=t,i.tick<=0&&(i.tick=.32,this.damageAround(i.x,i.z,i.r,i.dmg),i.col!==void 0&&this.spawnFx("ring",i.x,.06,i.z,i.col)),i.ttl<=0&&this.fireFields.splice(e,1)}}leadAngle(t,e,i,n=.7){const s=Math.hypot(this.px-t,this.pz-e)/Math.max(1,i),a=this.px+this.vx*s*n,o=this.pz+this.vz*s*n;return Math.atan2(o-e,a-t)}nearestEnemy(t,e,i){let n=null,s=i;for(const a of this.enemies){const o=Math.hypot(a.mesh.position.x-t,a.mesh.position.z-e);o<s&&(s=o,n=a)}return n}spawnShard(t,e,i){const n=new S(this.geo(new Se(.18,0)),this.mat(new at({color:Rt[1]})));n.position.set(t,.5,e),this.scene.add(n),this.shards.push({mesh:n,xp:i,live:!0})}}const E_={skitter:{hp:14,perRoom:3,speed:205,r:.3},mire:{hp:90,perRoom:13,speed:62,r:.55},bell:{hp:70,perRoom:10,speed:45,r:.46},burrower:{hp:60,perRoom:10,speed:150,r:.46},censer:{hp:110,perRoom:14,speed:55,r:.5},weaver:{hp:55,perRoom:9,speed:96,r:.46},tidecaller:{hp:80,perRoom:12,speed:60,r:.5}},kc={wisp:{spin:1,radius:1.7,fire:.82,shot:"bolt",dmg:.55,pierce:0},summon:{spin:2.1,radius:1.4,fire:1.05,shot:"orb",dmg:1.4,pierce:0},shade:{spin:1,radius:1.7,fire:.82,shot:"shard",dmg:2.2,pierce:0},kestrel:{spin:1.6,radius:2.1,fire:.62,shot:"shard",dmg:.77,pierce:1},sentinel:{spin:.8,radius:1.3,fire:1.25,shot:"wave",dmg:.98,pierce:0}},xo=new N;class A_ extends T_{makePet(){var n,s;this.pet&&(this.scene.remove(this.pet),this.pet=void 0),this.petTwin&&(this.scene.remove(this.petTwin),this.petTwin=void 0);const t=Be(),e=Ef(this.runJob,this.classIndex,t.companion);this.petKind=e,this.petLevel=((n=t.pets[e])==null?void 0:n.level)??1,this.petStage=Ea(this.petLevel),this.petTalents=[...((s=t.pets[e])==null?void 0:s.talents)??[]],this.petShots=0;const i=Ic(e,this.petStage,this.kit);if(i.scale.setScalar(Ut.petScale),this.petAng=.8,this.petX=this.px+1.4,this.petZ=this.pz,this.petY=this.petStage>=4&&e==="wisp"?1.55:1.05,this.petFire=.5,i.position.set(this.petX,this.petY,this.petZ),this.scene.add(i),this.pet=i,this.petTalents.includes("twin")){const a=Ic(e,Math.max(0,this.petStage-1),this.kit);a.scale.setScalar(.78),this.scene.add(a),a.scale.setScalar(Ut.petScale*.85),this.petTwin=a}}stepPet(t){if(!this.pet||!this.petKind)return;const e=this.petStage,i=this.petKind==="wisp"&&e>=4,n=kc[this.petKind];this.petAng+=t*(i?1.2:n.spin);const s=(i?2.3:n.radius)+e*.08,a=this.px+Math.cos(this.petAng)*s,o=this.pz+Math.sin(this.petAng)*s;if(this.petX+=(a-this.petX)*Math.min(1,t*4),this.petZ+=(o-this.petZ)*Math.min(1,t*4),this.pet.position.set(this.petX,this.petY+Math.sin(this.clock*3)*.08,this.petZ),this.pet.rotation.y+=t*1.4,!this.lite&&e>0&&Math.random()<t*(2+e*1.6)&&this.burst(this.petX,this.petZ,zi[this.petKind].color,1),this.petTwin){const u=this.px+Math.cos(this.petAng+Math.PI)*(s*.85),d=this.pz+Math.sin(this.petAng+Math.PI)*(s*.85);this.petTwin.position.set(u,this.petY*.9,d),this.petTwin.rotation.y-=t*1.2}const h=(this.petTalents.includes("swift")?1.55:1)*(this.petTalents.includes("k_updraft")?1.25:1);if(this.petFire-=t*(this.petBoost>0?2.2:1)*this.petCadence*h,this.petFire>0||!this.enemies.length)return;this.petFire=(i?.5:n.fire)-e*.04;let l=null,c=12;for(const u of this.enemies){const d=Math.hypot(u.mesh.position.x-this.petX,u.mesh.position.z-this.petZ);d<c&&(c=d,l=u)}if(!l)return;const f=Math.atan2(l.mesh.position.z-this.petZ,l.mesh.position.x-this.petX);this.petShot(this.petX,this.petZ,f,e,l),this.petTwin&&this.petShot(this.petTwin.position.x,this.petTwin.position.z,f+.35,Math.max(0,e-1),l)}petShot(t,e,i,n,s){if(!this.petKind)return;const a=this.petKind,o=++this.petShots,h=v=>this.petTalents.includes(v),l=h("fang")?6:0,c=kc[a],f=Math.max(0,this.petLevel-20),u=(4+n*3+f*.4+l)*c.dmg*Ut.petDamage*(this.setOn("kinship",2)?1.3:1)*(this.setOn("kinship",3)?1.3:1),d=zi[a].color,m=h("focus")?1:0,x=(v,_,b,T,R=0)=>this.spawnBullet(t,e,v,!0,{kind:_,dmg:b,pierce:T+m,homing:0,ttl:1.25,chain:R}),g=(v,_,b,T=.14,R=0)=>{for(let w=0;w<v;w++)x(i+(w-(v-1)/2)*T,_,u*(v>1?.62:1),b,R)},p=(s==null?void 0:s.mesh.position.x)??t+Math.cos(i)*4,M=(s==null?void 0:s.mesh.position.z)??e+Math.sin(i)*4;if(a==="wisp"){const v=h("w_bright")?1:0;n>=4?(g(3+v,"orb",1,.18),o%3===0&&this.fireFields.push({x:p,z:M,r:1.2,ttl:2,tick:.1,dmg:u*.2,col:d})):g((n>=1?2:1)+v,n>=2?"orb":"bolt",n>=3?1:0);const _=h("w_pyre")?2:3;(n===3||h("w_pyre"))&&o%_===0&&(this.spawnFx("ring",t,.08,e,d),this.burst(t,e,d,6),this.damageAround(t,e,1.8,u)),h("w_trail")&&s&&this.fireFields.push({x:p,z:M,r:.7,ttl:1.2,tick:.1,dmg:u*.12,col:d}),h("w_sun")&&o%4===0&&s&&(this.spawnFx("shock",p,.08,M,d),this.fireFields.push({x:p,z:M,r:1.6,ttl:2.2,tick:.1,dmg:u*.18,col:d}))}else if(a==="summon"){const v=h("s_arc");n>=4?x(i,"chain",u,0,(v?3:2)+(h("s_overload")?1:0)):g((n>=2?2:1)+(h("s_split")?1:0),v?"chain":"orb",n>=1?1:0,.12,v?1:0);const _=h("s_web");(n>=3||_)&&o%(_?2:3)===0&&s&&(this.spawnShow("rune",p,M,d,0,.8),this.queueBeat(.5,()=>{this.spawnFx("shock",p,.08,M,d),this.damageAround(p,M,1.6,u*2)}))}else if(a==="shade"){g((n>=3?3:n>=1?2:1)+(h("h_legion")?1:0),"shard",0);const v=h("h_chill");if((n>=2||v)&&o%(v?2:3)===0&&s){const _=v?3:1.5;this.spawnFx("flash",p,1,M,d),this.burst(p,M,d,5),n>=4||h("h_reach")?(this.spawnFx("shock",p,.08,M,d),this.damageAround(p,M,1.8,u*1.4,b=>b.slow=Math.max(b.slow,_))):(s.slow=Math.max(s.slow,_),this.damageOne(s,p,M,u*1.4)),h("h_siphon")&&(this.hp=Math.min(this.overshield?this.maxHp*1.2:this.maxHp,this.hp+2))}}else if(a==="kestrel"){g(n>=3?3:n>=1?2:1,"shard",c.pierce,.1);const v=h("k_talon"),_=n>=4||v?2:3;(n>=2||v)&&o%_===0&&s&&(this.kestrelDive(t,e,p,M,u*1.6),h("k_storm")&&this.queueBeat(.18,()=>this.kestrelDive(t,e,p,M,u)),h("k_feather")&&this.nova(p,M,5,"shard"))}else if(a==="sentinel"){s&&this.sentinelStrike(s,i,n,u),h("t_aegis")&&o%4===0&&this.ward<1&&(this.ward=1,this.spawnFx("ring",this.px,.08,this.pz,d));const v=h("t_judge");if((n>=2||v)&&o%3===0){const _=this.enemies.filter(b=>b!==s).map(b=>({e:b,d:Math.hypot(b.mesh.position.x-t,b.mesh.position.z-e)})).filter(b=>b.d<9).sort((b,T)=>b.d-T.d).slice(0,v?3:2);for(const{e:b}of _)this.sentinelStrike(b,i,n,u*.8)}}n>=5&&o%3===0&&s&&(this.spawnFx("shock",p,.08,M,d),this.burst(p,M,d,8),this.damageAround(p,M,1.8,u*.9)),h("nova")&&this.nova(t,e,4,a==="shade"||a==="kestrel"?"shard":"bolt"),h("leech")&&(this.hp=Math.min(this.overshield?this.maxHp*1.2:this.maxHp,this.hp+1))}kestrelDive(t,e,i,n,s){const a=Math.hypot(i-t,n-e)+1.5,o=(i-t)/(a-1.5||1),h=(n-e)/(a-1.5||1),l=Math.atan2(h,o),c=zi.kestrel.color;this.spawnFx("arc",t,.9,e,c,l,a),this.spawnFx("arc",t,.92,e,16777215,l,a*.7);for(const f of[...this.enemies]){const u=f.mesh.position.x-t,d=f.mesh.position.z-e,m=u*o+d*h,x=Math.abs(-u*h+d*o);m<0||m>a||x>.7+f.r||this.damageOne(f,t,e,s)}}sentinelStrike(t,e,i,n){const s=zi.sentinel.color,a=this.petTalents.includes("t_great"),o=this.petTalents.includes("t_brand"),h=t.mesh.position.x,l=t.mesh.position.z;this.spawnShow(this.skin==="warhammer"?"meteor":"sworddrop",h,l,s,e,.7+i*.08+(a?.25:0),0,.22,1,t),this.queueBeat(.2,()=>{if(!this.enemies.includes(t))return;const c=t.mesh.position.x,f=t.mesh.position.z;this.spawnFx("ring",c,.08,f,s);const u=d=>{i>=1&&(d.slow=Math.max(d.slow,.8))};i>=3||a?this.damageAround(c,f,1.2+(a?.5:0),n,u):this.damageOne(t,c,f,n,u),(i>=4||o)&&this.fireFields.push({x:c,z:f,r:1,ttl:1.8,tick:.1,dmg:n*.18,col:s})})}feedPet(t){var s;if(!this.petKind)return;const e=Be(),i=Ea(((s=e.pets[this.petKind])==null?void 0:s.level)??1);Af(e,this.petKind,t),Pn(e);const n=Ea(e.pets[this.petKind].level);if(this.petLevel=e.pets[this.petKind].level,this.petStage=n,n!==i){const a=zi[this.petKind].color;this.spawnShow("dome",this.petX,this.petZ,a,0,.9,0),this.spawnShow("rune",this.petX,this.petZ,a,0,.8),this.burst(this.petX,this.petZ,a,14),this.spawnFx("ring",this.petX,.1,this.petZ,a),this.bloomKick=Math.min(1.2,this.bloomKick+.35),this.camPunch=Math.min(1,this.camPunch+.2),this.makePet(),this.offerPetTalent()}}offerPetTalent(){if(!this.petKind)return;const t=Be(),e=t.pets[this.petKind].talents??[];if(hl(t.pets[this.petKind].level,e)<=0)return;const i=[...Rf(this.petKind,t.pets[this.petKind].level,e)];if(!i.length)return;for(let s=i.length-1;s>0;s--){const a=Math.floor(Math.random()*(s+1));[i[s],i[a]]=[i[a],i[s]]}if(this.pendingPetTalents.length>=hl(t.pets[this.petKind].level,e))return;const n=i.findIndex(s=>s.pet===this.petKind);n>2&&([i[0],i[n]]=[i[n],i[0]]),this.pendingPetTalents.push(i.slice(0,3).map(s=>({id:s.id,title:s.name,body:s.body,tag:s.pet?`${zi[s.pet].name} talent`:void 0}))),this.resolvePendingRelicUi(),this.pushHud(`${zi[this.petKind].stages[this.petStage]} takes a new shape — talent waiting`)}applyPetTalent(t){if(this.pendingPetTalents.shift(),this.resolvePendingRelicUi(),!this.petKind)return;const e=Be();Cf(e,this.petKind,t),Pn(e),de.getState().refreshSave(),this.makePet(),this.pushHud("Familiar talent bound")}spawnWave(){for(const s of this.enemies)this.scene.remove(s.mesh);for(const s of this.eBullets)s.live=!1,s.mesh.visible=!1;this.enemies=[];const t=tn(this.room),e=t.kind==="boss",i=this.room===1||e?or:this.nextCurse??or;this.nextCurse=null,this.clearSigils(),this.curse=e?ea[Aa[we(this.room)]]:i.title,this.curseHp=i.hp*this.oath.enemyLife*this.runLifeMul,this.curseExtra=e?0:i.extra,this.curseXp=i.xp,this.curseDmg=i.dmg,this.curseAsh=i.ash,this.shrineHeal=t.kind==="shrine"&&!this.oath.noRest?30:0;const n=we(this.room);if(this.roomIsBoss=t.kind==="boss",this.roomKills=0,this.roomCleared=!1,this.beginRoomLog(t.kind==="boss"?Aa[n]:t.kind),this.roomLog&&!e&&(this.roomLog.curse=i.title),this.roomSpawnQueue=[],this.roomSpawnTimer=0,t.kind==="boss")this.spawnBoss(Aa[n]);else{const s=this.roomSpawnQueue;if(t.kind==="court"){const o=this.newcomer&&this.room===1?Ut.newcomerOpeners:7;for(let h=0;h<o;h++)s.push({kind:"zombie"});this.room>1&&s.push({kind:"ghost"})}else if(t.kind==="hall"){for(let o=0;o<8;o++)s.push({kind:"zombie"});s.push({kind:"ghost"},{kind:"ghost"})}else if(t.kind==="shrine"){for(let o=0;o<6;o++)s.push({kind:"zombie"});s.push({kind:"ghost"},{kind:"ghost"})}else if(t.kind==="elite"){s.push({kind:"wraith",elite:!0});for(let o=0;o<5;o++)s.push({kind:"zombie"})}else if(t.kind==="trap"){for(let o=0;o<9;o++)s.push({kind:"zombie"});for(let o=0;o<3;o++)s.push({kind:"ghost"})}else if(t.kind==="gallery"){for(let o=0;o<6;o++)s.push({kind:"zombie"});for(let o=0;o<3+n;o++)s.push({kind:"ghost"})}else if(t.kind==="cross"){for(let o=0;o<7;o++)s.push({kind:"zombie"});for(let o=0;o<2+n;o++)s.push({kind:"ghost"})}else if(t.kind==="choir"){for(let o=0;o<5;o++)s.push({kind:"zombie"});for(let o=0;o<5;o++)s.push({kind:"ghost"});s.push({kind:"wraith"})}else if(t.kind==="vault"){s.push({kind:"wight"},{kind:"wraith",elite:!0});for(let o=0;o<3;o++)s.push({kind:"zombie"});n>=2&&s.push({kind:"bulwark"}),n>=3&&s.push({kind:"anchor"})}else{for(let o=0;o<7;o++)s.push({kind:"zombie"});s.push({kind:"ghost"})}ze("spawns")<(n>=2?.6:.35)&&s.push({kind:"acolyte"}),this.room>1&&ze("spawns")<(n===1?.55:.35)&&s.push({kind:"burrower"}),n>=2&&ze("spawns")<(n===2?.6:.35)&&s.push({kind:"censer"}),n>=3&&ze("spawns")<(n===3?.6:.35)&&s.push({kind:"weaver"}),n>=4&&(s.push({kind:"tidecaller"}),(t.kind==="choir"||t.kind==="hall")&&s.push({kind:"tidecaller"}));for(let o=0;o<this.curseExtra;o++)s.push({kind:"zombie"});this.oath.hunted&&this.room>1&&s.push({kind:n>=2?"husk":"wraith",elite:!0}),this.eliteNext&&(s.push({kind:n>=2?"husk":"wraith",elite:!0}),this.eliteNext=!1),n>=3&&(t.kind==="elite"||t.kind==="trap")&&ze("spawns")<.6&&s.push({kind:"anchor"}),ze("spawns")<.4&&s.push({kind:"cinder"}),n>=2&&(t.kind==="elite"||t.kind==="trap"||t.kind==="cross")&&ze("spawns")<.55&&s.push({kind:"husk"}),n>=2&&(t.kind==="gallery"||t.kind==="choir"||t.kind==="shrine")&&ze("spawns")<.55&&s.push({kind:"binder"}),n>=2&&(t.kind==="elite"||t.kind==="trap"||t.kind==="cross")&&ze("spawns")<.4&&s.push({kind:"bulwark"}),n>=2&&(t.kind==="hall"||t.kind==="gallery"||t.kind==="cross")&&ze("spawns")<.4&&s.push({kind:"gazer"});const a=(ze("spawns")<.55?1:0)+(n>=2?1:0)+(n>=3&&ze("spawns")<.5?1:0);for(let o=0;o<a;o++)s.push({kind:"skitter",pack:3+(n>=2?1:0)});n>=2&&(t.kind==="elite"||t.kind==="trap"||t.kind==="gallery"||t.kind==="hall")&&ze("spawns")<.45&&s.push({kind:"mire"}),n>=3&&ze("spawns")<.35&&s.push({kind:"mire"}),n>=2&&(t.kind==="choir"||t.kind==="shrine"||t.kind==="gallery"||t.kind==="cross")&&ze("spawns")<.5&&s.push({kind:"bell"}),n>=3&&ze("spawns")<.3&&s.push({kind:"bell"});for(let o=s.length-1;o>0;o--){const h=Math.floor(ze("spawns")*(o+1));[s[o],s[h]]=[s[h],s[o]]}this.roomTarget=s.reduce((o,h)=>o+(h.pack??1),0);for(let o=0;o<Math.min(5,s.length);o++)this.spawnFromQueue()}t.kind==="shrine"||t.kind==="gallery"?this.placeCrystal():this.clearCrystal(),this.ward=this.wardMax,this.petTalents.includes("guard")&&(this.petGuard=1),this.pushHud(t.kind==="boss"?`${t.name}: something stirs beneath the floor`:t.name)}spawnFromQueue(){const t=this.roomSpawnQueue.shift();if(!t)return;this.spawnEnemy(t.kind);const e=this.enemies[this.enemies.length-1];t.elite&&(e.hp=Math.round(e.hp*Ut.eliteLife),e.maxHp=e.hp,e.size=Ut.eliteSize,this.giveAffixes(e,Math.min(3,Ut.eliteAffixes[we(this.room)>=2?1:0]+this.oath.extraAffix)));for(let i=1;i<(t.pack??1);i++){this.spawnEnemy(t.kind);const n=this.enemies[this.enemies.length-1],s=i/(t.pack??1)*Math.PI*2;this.placeEnemyNear(n,e.mesh.position.x+Math.cos(s)*.9,e.mesh.position.z+Math.sin(s)*.9)}}spawnDummies(){this.roomSpawnQueue=[],this.roomTarget=0;const t=[[2.6,0],[5.5,-1.6],[4.6,2.2],[5.4,2.8],[5.6,1.7]];for(const[e,i]of t){this.spawnEnemy("wight");const n=this.enemies[this.enemies.length-1];this.placeEnemyNear(n,this.px+e,this.pz+i),n.dummy=!0,n.hp=n.maxHp=1e6,n.speed=0,n.age=5,n.spawnGrace=0}this.pushHud("Practice: hit the dummies. Pause to leave.")}giveAffixes(t,e){const i=vo(Object.keys($i),"affixes");t.affixes=i.slice(0,e),t.affixes.forEach((a,o)=>{const h=new S(this.sharedGeo(`affix-ring-${o}`,()=>new Ne(.72+o*.2,.84+o*.2,36)),this.mat(new at({color:$i[a].color,transparent:!0,opacity:.8,depthWrite:!1,fog:!1,side:$t})));h.name=`affix-${a}`,h.rotation.x=-Math.PI/2,h.position.y=.05,t.mesh.add(h)}),t.affixes.includes("warded")&&(t.ward=t.maxHp*Ut.wardShare),t.affixes.includes("hasted")&&(t.speed*=Ut.hastedSpeed),t.affixes.includes("mending")&&(t.mendT=1),Pf();const n=t.mesh.position.x,s=t.mesh.position.z;this.spawnFloat("!","float-alert",n,2.5,s,{max:1.6,rise:.3,follow:t}),this.spawnFx("shock",n,.08,s,16723306),this.queueBeat(.28,()=>this.spawnFx("shock",t.mesh.position.x,.08,t.mesh.position.z,16723306)),ds("elite"),this.pushHud(`Elite: ${t.affixes.map(a=>`${$i[a].name} (${$i[a].body})`).join(", ")}`)}burstBrood(t,e,i,n){for(let s=0;s<i;s++){this.spawnEnemy("skitter");const a=this.enemies[this.enemies.length-1],o=s/i*Math.PI*2;this.placeEnemyNear(a,t+Math.cos(o)*.7,e+Math.sin(o)*.7),a.spawnGrace=.5}this.roomIsBoss||(this.roomTarget+=i),this.burst(t,e,n,10)}placeEnemyNear(t,e,i){const n=this.blocked(e,i,t.r)?Fi(e,i,t.r,this.walls):{x:e,z:i};t.mesh.position.set(n.x,0,n.z)}stepRoomSpawns(t){if(this.roomIsBoss||!this.roomSpawnQueue.length||(this.roomSpawnTimer-=t,this.roomSpawnTimer>0))return;const e=we(this.room),i=3+(Math.random()<.5?1:0)+(e>=2?1:0);let n;for(let s=0;s<i&&this.roomSpawnQueue.length;s++){const a=this.enemies.length;this.spawnFromQueue();const o=this.enemies[a];if(!o)continue;if(!n){n=o;continue}const h=Math.random()*Math.PI*2,l=n.mesh.position.x+Math.cos(h)*(1.1+Math.random()*.8),c=n.mesh.position.z+Math.sin(h)*(1.1+Math.random()*.8),f=l-o.mesh.position.x,u=c-o.mesh.position.z;for(let d=a;d<this.enemies.length;d++){const m=this.enemies[d];this.placeEnemyNear(m,m.mesh.position.x+f,m.mesh.position.z+u)}}this.roomSpawnTimer=Math.max(2.6,4.2-e*.4)+Math.random()*.8}spawnAway(t,e=8){const i=Ti/2-2.6;for(let a=0;a<80;a++){const o=Math.random()*Math.PI*2,h=t+Math.random()*e,l=this.px+Math.cos(o)*h,c=this.pz+Math.sin(o)*h;if(!(Math.abs(l)>i||Math.abs(c)>i)&&!this.blocked(l,c,.6)&&!(Math.hypot(l-this.px,c-this.pz)<t))return{x:l,z:c}}const s=[...[[-i,-i],[-i,i],[i,-i],[i,i]]].sort((a,o)=>Math.hypot(o[0]-this.px,o[1]-this.pz)-Math.hypot(a[0]-this.px,a[1]-this.pz));for(const a of s){const o=Fi(a[0],a[1],.6,this.walls);if(Math.hypot(o.x-this.px,o.z-this.pz)>=t*.75)return o}return Fi(s[0][0],s[0][1],.6,this.walls)}spawnEnemy(t){const e=this.spawnAway(t==="wight"?10:7.5,4),i=qM(t,this.kit);i.position.set(e.x,0,e.z),this.spawnFx("ring",e.x,.06,e.z,Ce[t]),!Wr(t)&&!Xr(t)&&this.burst(e.x,e.z,9075338,this.lite?3:6),this.scene.add(i);const n=Math.round((t==="wight"?320+this.room*27:t==="anchor"?100+this.room*13:t==="husk"?140+this.room*16:t==="bulwark"?95+this.room*14:t==="wraith"?60+this.room*11:t==="binder"?46+this.room*8:t==="acolyte"?52+this.room*9:t==="ghost"?40+this.room*8:t==="gazer"?34+this.room*7:t==="cinder"?18+this.room*3:48+this.room*11)*this.curseHp*ll(this.room));this.enemies.push({mesh:i,hp:n,maxHp:n,kind:t,speed:(t==="anchor"?0:t==="ghost"||t==="wight"?80:t==="wraith"?128:t==="acolyte"?92:t==="husk"?66:t==="cinder"?50:t==="binder"?90:t==="bulwark"||t==="gazer"?58:118+this.room*6)/mi,shootCd:.8,flash:0,recoil:0,r:t==="wight"?.72:t==="anchor"?.5:t==="husk"?.62:t==="cinder"?.36:t==="bulwark"?.52:t==="ghost"||t==="acolyte"||t==="binder"||t==="gazer"?.44:.4,phase:Math.random()*Math.PI*2,slow:0,bossId:null,bossPhase:0,telegraph:0,fly:0,spawnGrace:1.1,curse:0,curseTtl:0,chargeState:0,chargeT:0});const s=E_[t];if(s){const a=this.enemies[this.enemies.length-1];a.hp=a.maxHp=Math.round((s.hp+this.room*s.perRoom)*this.curseHp*ll(this.room)),a.speed=s.speed/mi,a.r=s.r}this.enemies[this.enemies.length-1].speed*=this.oath.enemySpeed}offerRooms(){this.clearSigils();const t=If(),i=Lf(this.room,tn(this.room-1).kind,this.vaultActs.has(we(this.room))).map((o,h)=>({plan:o,curse:t[h%t.length]})),n=we(this.room);if(!this.practiceSkin&&this.room>1&&!this.eventActs.has(n)&&ze("events")<Ut.eventChance){const o=Be().ash,h=Object.keys(ss).filter(f=>!Df(f)||o>=qr(n)),l=h[Math.floor(ze("events")*h.length)],c=Math.floor(ze("events")*i.length);i[c]={plan:i[c].plan,curse:{...or,title:ss[l].title,color:zf},event:l}}const s=i.length,a=Ti/2-3;i.forEach(({plan:o,curse:h,event:l},c)=>{let f=Math.max(-a,Math.min(a,this.px+(c-(s-1)/2)*3.4)),u=Math.max(-a,Math.min(a,this.pz-3.4));if(this.blocked(f,u,1)){const m=Fi(f,u,1,this.walls);f=m.x,u=m.z}const d=this.makeSigil(o,h);d.position.set(f,Cn(f,u,this.plats),u),d.scale.setScalar(.01),this.scene.add(d),this.sigils.push({mesh:d,curse:h,plan:o,x:f,z:u,age:0,card:this.makeSigilCard(o,h,l),event:l}),this.spawnFx("ring",f,.08,u,h.color)}),Nf(),ds("sigils"),this.pushHud("Choose the next chamber: step on a sigil")}makeSigil(t,e){const i=new Zt,n=new S(this.sharedGeo("sigil-ring",()=>new Ne(.82,1,40)),this.mat(new at({color:e.color,transparent:!0,opacity:.9,depthWrite:!1,fog:!1,side:$t})));n.rotation.x=-Math.PI/2,n.position.y=.05,i.add(n);const s=new S(this.sharedGeo("sigil-disc",()=>new Xe(.82,32)),this.mat(new at({color:e.color,transparent:!0,opacity:.22,depthWrite:!1,fog:!1})));s.rotation.x=-Math.PI/2,s.position.y=.04,i.add(s);const a=new S(this.sharedGeo("sigil-beam",()=>new qt(.8,.8,2.2,24,1,!0)),this.mat(new at({color:e.color,transparent:!0,opacity:.1,depthWrite:!1,fog:!1,blending:pe,side:$t})));return a.position.y=1.1,i.add(a),i}makeSigilCard(t,e,i){if(!this.sigilLayer){const l=document.createElement("div");l.className="sigil-layer",document.body.appendChild(l),this.sigilLayer=l}const n=`#${e.color.toString(16).padStart(6,"0")}`,[s,a]=cl(e),o=document.createElement("div");o.className="sigil-card",o.style.borderColor=n;const h=(l,c,f)=>{const u=document.createElement("div");u.className=l,u.textContent=c,f&&(u.style.color=f),o.appendChild(u)};return h("sigil-room",t.name),i?(h("sigil-perk","No fight: an event"),h("sigil-curse",ss[i].title,n),h("sigil-pay",ss[i].card)):(t.kind!=="boss"&&h("sigil-perk",Ff[t.kind].perk),h("sigil-curse",`${e.title}: ${s}`,n),h("sigil-pay",a)),o.style.opacity="0",this.sigilLayer.appendChild(o),o}placeSigilCards(){if(!this.sigils.length)return;const t=this.renderer.domElement.getBoundingClientRect(),e=t.width,i=this.sigils.map(o=>(xo.set(o.x,o.mesh.position.y+2.2,o.z).project(this.camera),{s:o,x:(xo.x+1)/2*e,y:t.top+(1-xo.y)/2*t.height,cw:o.card.offsetWidth}));i.sort((o,h)=>o.x-h.x);for(let o=1;o<i.length;o++){const h=i[o-1].x+(i[o-1].cw+i[o].cw)/2+6;i[o].x<h&&(i[o].x=h)}const n=i[i.length-1],s=n.x+n.cw/2+6-e;if(s>0)for(const o of i)o.x-=s;const a=6-(i[0].x-i[0].cw/2);if(a>0)for(const o of i)o.x+=a;for(const o of i)o.s.card.style.opacity=String(Math.min(1,o.s.age/.35)),o.s.card.style.transform=`translate(${t.left+o.x}px, ${o.y}px) translate(-50%, -100%)`}stepSigils(t){if(!this.sigils.length)return;for(const a of this.sigils)a.age+=t,a.mesh.scale.setScalar(Math.max(.01,Math.min(1,a.age/.35))),a.mesh.children[0].rotation.z+=t*.8;this.placeSigilCards();const e=this.sigils.find(a=>a.age>Ut.sigilGrace&&Math.hypot(this.px-a.x,this.pz-a.z)<1);if(!e)return;const i=e.curse;if(this.nextCurse=i,Uf(this.room,e.plan),e.plan.kind==="vault"&&this.vaultActs.add(we(this.room)),this.spawnFx("shock",e.x,.08,e.z,i.color),this.spawnFx("flash",e.x,1,e.z,i.color),this.burst(e.x,e.z,i.color,10),Of(),this.clearSigils(),e.event){const a=e.event;this.nextCurse=or,this.pushHud(`${e.plan.name}: ${ss[a].title}`),this.queueBeat(Ut.sigilToWave,()=>this.openEvent(a));return}const[n,s]=cl(i);this.pushHud(`${e.plan.name}. ${i.title}: ${n}, ${s}.`),this.queueBeat(Ut.sigilToWave,()=>this.spawnWave())}clearSigils(){for(const t of this.sigils)this.scene.remove(t.mesh),t.card.remove();this.sigils=[]}placeCrystal(){this.clearCrystal(),this.crystalOn=!0;const t=new S(this.geo(new Se(.55,0)),this.mat(new at({color:Rt[1]})));t.position.set(this.crystalSpot.x,1.1,this.crystalSpot.z),this.scene.add(t),this.crystal=t}clearCrystal(){this.crystalOn=!1,this.crystal&&this.scene.remove(this.crystal),this.crystal=void 0}}const kr=1.5,Hr={warden:{scale:1.5,hp:300,speed:62},tyrant:{scale:1.4,hp:380,speed:70},throne:{scale:1.7,hp:520,speed:88},saint:{scale:1.6,hp:640,speed:74}},R_=new Set(["volley","rain"]),Gr=.9,C_={warden:[["slam","charge"],["slam","charge","triple"],["slam","charge","triple"]],tyrant:[["fan","spiral"],["fan","spiral","ambush"],["fan","spiral2","ambush"]],throne:[["volley","rain","nova"],["volley","rain","nova","cross","descent"],["volley","rain","nova","cross","pillar","descent"]],saint:[["tide","spiral"],["tide","spiral","whirl","rain"],["tide","spiral2","whirl","rain","cross"]]};class P_ extends A_{spawnBoss(t){const e=this.spawnAway(6.5,1.5),i=ZM(t,this.kit),n=Hr[t].scale;i.scale.setScalar(n),i.position.set(e.x,0,e.z);const s=Ji[t];i.position.y=-2.8,this.scene.add(i);const a=Math.round((Hr[t].hp+this.room*18)*5.5*(1+Ut.bossActHp*(we(this.room)-1))*(1+Ut.bossDepthHp*(_o(this.room)-1))*this.oath.bossLife);this.enemies.push({mesh:i,hp:a,maxHp:a,kind:"wight",speed:Hr[t].speed/mi*this.oath.bossSpeed,shootCd:1.1,flash:0,recoil:0,r:.85*n,phase:0,slow:0,bossId:t,bossPhase:0,telegraph:0,fly:0,spawnGrace:kr+.3,curse:0,curseTtl:0,chargeState:0,chargeT:0,intro:kr,invuln:0}),this.spawnShow("warn",e.x,e.z,s,0,2.2,0,.22,1,void 0,kr),this.spawnShow("rune",e.x,e.z,s,0,1.6)}maybeBossPhase(t){const e=t.hp/t.maxHp,i=e<.33?2:e<.66?1:0;if(i<=t.bossPhase)return;t.bossPhase=i,t.invuln=1.1,t.telegraph=1.1,t.shootCd=Math.max(t.shootCd,1.4),t.chargeState=0,t.mesh.visible=!0;const n=this.px-t.mesh.position.x,s=this.pz-t.mesh.position.z,a=Math.hypot(n,s)||1;a<5.5&&(this.vx+=n/a*16,this.vz+=s/a*16),this.trauma=Math.min(1,this.trauma+.45),this.hitstop=Math.max(this.hitstop,.12);const o=Ji[t.bossId];this.spawnShow("pillar",t.mesh.position.x,t.mesh.position.z,o,0,1.4),this.spawnFx("shock",t.mesh.position.x,.08,t.mesh.position.z,o),this.impact(t.mesh.position.x,t.mesh.position.z,o,!0),this.pushHud(`${ea[t.bossId]} — phase ${i+1}`),t.bossId==="warden"?(this.spawnEnemy("zombie"),i===2&&this.spawnEnemy("zombie")):t.bossId==="tyrant"?(this.bossTeleport(t),this.spawnEnemy("ghost")):t.bossId==="throne"&&(this.spawnEnemy("wraith"),i===2&&this.spawnEnemy("ghost"))}bossTeleport(t){const e=this.spawnAway(8);this.spawnShow("clone",t.mesh.position.x,t.mesh.position.z,Ji.tyrant,0,1),t.mesh.position.set(e.x,0,e.z),this.spawnShow("rune",e.x,e.z,Ji.tyrant,0,1.4)}stepBoss(t,e){const i=t.bossId,n=Ji[i],s=Hr[i].scale*Ut.bossScale,a=Cn(t.mesh.position.x,t.mesh.position.z,this.plats),o=this.px-t.mesh.position.x,h=this.pz-t.mesh.position.z,l=Math.hypot(o,h)||1;if((t.intro??0)>0){t.intro=Math.max(0,(t.intro??0)-e);const p=1-t.intro/kr,M=1-Math.pow(1-p,3);t.mesh.position.y=a-2.8*(1-M),t.mesh.rotation.y=Math.atan2(o,h),t.mesh.scale.setScalar(s),Math.random()<e*14&&this.burst(t.mesh.position.x,t.mesh.position.z,n,2),t.intro===0&&(this.spawnFx("shock",t.mesh.position.x,.08,t.mesh.position.z,n),this.spawnShow("pillar",t.mesh.position.x,t.mesh.position.z,n,0,1.3),this.burst(t.mesh.position.x,t.mesh.position.z,n,12),this.trauma=Math.min(1,this.trauma+.4),this.pushHud(`${ea[i]} rises`));return}t.invuln=Math.max(0,(t.invuln??0)-e),t.recoil=Math.max(0,t.recoil-e*9),t.slow=Math.max(0,t.slow-e),t.telegraph=Math.max(0,t.telegraph-e),this.stepCurse(t,e),t.flash>0&&(t.flash-=e*2),this.applyHitFlash(t);const c=t.slow>0?.42:1;let f=0,u=0,d=0;if(t.chargeState===4){t.chargeT-=e;const p=t.mesh.userData.leapTo,M=p.x-t.mesh.position.x,v=p.z-t.mesh.position.z,_=Math.max(e,t.chargeT);f=M/_,u=v/_,d=Math.sin(Math.PI*Math.min(1,1-t.chargeT/Gr))*3,t.chargeT<=0&&(t.mesh.position.x=p.x,t.mesh.position.z=p.z,f=0,u=0,d=0,t.chargeState=0,t.telegraph=.5,this.bossSlam(t,p.x,p.z,2.2,18,12),this.trauma=Math.min(1,this.trauma+.2))}else if(t.chargeState===2||t.chargeState===3){t.chargeT-=e;const p=t.chargeState===2?14:7.2;f=Math.sin(t.mesh.rotation.y)*p,u=Math.cos(t.mesh.rotation.y)*p;const M=this.blocked(t.mesh.position.x+f*e*3,t.mesh.position.z+u*e*3,t.r*.55);if(t.chargeState===2&&Math.random()<e*20&&this.spawnFx("streak",t.mesh.position.x,1,t.mesh.position.z,n,Math.atan2(u,f)+Math.PI/2),t.chargeT<=0||M){if(t.chargeState===2&&(t.telegraph=.8,this.spawnFx("shock",t.mesh.position.x,.08,t.mesh.position.z,n),this.burst(t.mesh.position.x,t.mesh.position.z,n,10),this.trauma=Math.min(1,this.trauma+(M?.35:.15)),t.bossPhase>=1))for(let v=0;v<8;v++)this.spawnBullet(t.mesh.position.x,t.mesh.position.z,v/8*Math.PI*2,!1,{kind:"enemy",dmg:12,ttl:1.6});t.chargeState=0,f=0,u=0}}else if((t.telegraph<=0||i==="throne"&&R_.has(t.lastMove??""))&&t.mesh.visible){const p=i==="tyrant"?l<5?-1.1:l>8?1:0:i==="throne"?l<4.5?-.8:l>6.5?1:0:i==="saint"?l<5.5?-.9:l>8.5?.8:0:1;if(f=o/l*t.speed*c*p,u=h/l*t.speed*c*p,i==="throne"){(!t.mesh.userData.orbit||Math.random()<e*.3)&&(t.mesh.userData.orbit=Math.random()<.5?-1:1);const M=t.mesh.userData.orbit;f+=-h/l*t.speed*1.1*c*M,u+=o/l*t.speed*1.1*c*M}t.mesh.rotation.y=Math.atan2(o,h)}const m=_h(t.mesh.position.x+f*e,t.mesh.position.z+u*e,t.r,t.mesh.position.x,t.mesh.position.z,this.walls);if(t.mesh.position.x=m.x,t.mesh.position.z=m.z,t.mesh.position.y=Cn(t.mesh.position.x,t.mesh.position.z,this.plats)+.08+Math.sin(this.clock*2.2)*.06+d,t.mesh.scale.setScalar(s*(1+t.recoil*.08)),t.mesh.visible&&t.chargeState!==4&&Math.hypot(this.px-t.mesh.position.x,this.pz-t.mesh.position.z)<.7+t.r&&this.hurt(t.chargeState===2?24:i==="throne"?20:16,t.mesh.position.x,t.mesh.position.z),t.shootCd-=e,t.shootCd>0||t.telegraph>0||t.chargeState!==0||!t.mesh.visible)return;const x=C_[i][t.bossPhase].filter(p=>p!==t.lastMove),g=x[Math.floor(Math.random()*x.length)];t.lastMove=g,this.runBossMove(t,g)}runBossMove(t,e){const i=t.bossId,n=Ji[i],s=t.bossPhase,a=t.mesh.position.x,o=t.mesh.position.z,h=Math.atan2(this.pz-o,this.px-a),l=[1.1,.85,.6][s],c=u=>{t.telegraph=u,t.shootCd=u+l},f=()=>this.enemies.includes(t);if(e==="slam"){const u=2.4+s*.3;c(.95),this.spawnShow("warn",a,o,n,0,u,0,.22,1,void 0,.6),this.queueBeat(.6,()=>{f()&&this.bossSlam(t,a,o,u,14+s*4,s>=1?s===2?8:6:0)})}else if(e==="charge"){t.mesh.rotation.y=Math.atan2(this.px-a,this.pz-o);const u=Math.sin(t.mesh.rotation.y),d=Math.cos(t.mesh.rotation.y);let m=0;for(;m<24&&!this.blocked(a+u*(m+.5),o+d*(m+.5),t.r*.55);)m+=.5;c(.75),t.shootCd=.75+1.8+l,this.spawnShow("lane",a,o,n,Math.atan2(d,u),Math.max(2,m),0,1.9,1,void 0,.75),this.queueBeat(.75,()=>{f()&&(t.chargeState=2,t.chargeT=1.8)})}else if(e==="triple"){c(2.5);for(let u=0;u<3;u++){const d=u*.82;this.queueBeat(d,()=>{f()&&u>0&&(t.mesh.rotation.y=Math.atan2(this.px-t.mesh.position.x,this.pz-t.mesh.position.z),t.chargeState=3,t.chargeT=.25)}),this.queueBeat(d+(u>0?.27:0),()=>{if(!f())return;const m=t.mesh.position.x,x=t.mesh.position.z;this.spawnShow("warn",m,x,n,0,2.1,0,.22,1,void 0,.45),this.queueBeat(.45,()=>{f()&&this.bossSlam(t,m,x,2.1,12+s*3,u===2?8:0)})})}}else if(e==="fan"){const u=s===2?2:1;c(.5+u*.35);for(let d=0;d<u;d++){const m=3+s*2,x=[];for(let g=0;g<m;g++)x.push(h+(g-(m-1)/2)*.18+d*.09);this.queueBeat(d*.35,()=>{if(f())for(const g of x)this.spawnFx("arc",t.mesh.position.x+Math.cos(g)*.9,.6,t.mesh.position.z+Math.sin(g)*.9,n,g,4.5),this.spawnFx("arc",t.mesh.position.x+Math.cos(g)*.9,.62,t.mesh.position.z+Math.sin(g)*.9,16777215,g,3.2)}),this.queueBeat(d*.35+.4,()=>{if(f())for(const g of x)this.spawnBullet(t.mesh.position.x,t.mesh.position.z,g,!1,{kind:"enemy",dmg:12,ttl:2.1})})}}else if(e==="spiral"||e==="spiral2"){const u=s>=1?4:3,d=17;c(.5+d*.1+.2),this.spawnShow("rune",a,o,n,0,1.3),this.spawnFx("flash",a,2.2,o,n);const m=Math.random()*Math.PI*2;for(let x=0;x<d;x++)this.queueBeat(.5+x*.1,()=>{if(f())for(let g=0;g<u;g++){const p=m+x*.3+g/u*Math.PI*2;this.spawnBullet(t.mesh.position.x,t.mesh.position.z,p,!1,{kind:"enemy",dmg:11,ttl:3,speed:6}),e==="spiral2"&&this.spawnBullet(t.mesh.position.x,t.mesh.position.z,-p+m*2,!1,{kind:"enemy",dmg:11,ttl:3,speed:5})}})}else if(e==="ambush"){c(1.5),this.spawnShow("clone",a,o,n,0,1.4),t.mesh.visible=!1,t.invuln=Math.max(t.invuln??0,1);const u=Math.random()*Math.PI*2,d={x:this.px+Math.cos(u)*2.2,z:this.pz+Math.sin(u)*2.2},m=this.blocked(d.x,d.z,t.r)?Fi(d.x,d.z,t.r,this.walls):d;this.spawnShow("warn",m.x,m.z,n,0,2.3,0,.22,1,void 0,.85),this.queueBeat(.85,()=>{f()&&(t.mesh.position.set(m.x,t.mesh.position.y,m.z),t.mesh.visible=!0,this.bossSlam(t,m.x,m.z,2.3,16,10))})}else if(e==="volley"){c(.75);for(let u=0;u<3;u++)this.queueBeat(.2+u*.18,()=>{if(!f())return;const d=this.leadAngle(t.mesh.position.x,t.mesh.position.z,12,.8);this.spawnFx("flash",t.mesh.position.x,2.4,t.mesh.position.z,n),this.spawnBullet(t.mesh.position.x,t.mesh.position.z,d,!1,{kind:"enemy",dmg:13,ttl:2,speed:12})})}else if(e==="rain"){c(.9);for(let u=0;u<5+s;u++){const d=Math.random()*Math.PI*2,m=u===0?0:1.2+Math.random()*3.2,x=this.px+Math.cos(d)*m,g=this.pz+Math.sin(d)*m;this.spawnShow("warn",x,g,n,0,.9,0,.22,1,void 0,.65),this.queueBeat(.28,()=>this.spawnShow("drop",x,g,n,d,1)),this.queueBeat(.65,()=>{f()&&Math.hypot(this.px-x,this.pz-g)<.95&&this.hurt(12,x,g)})}}else if(e==="nova"){c(1.25),this.spawnShow("rune",a,o,n,0,1.5),this.spawnFx("flash",a,2.6,o,n);const u=16;for(let d=0;d<2;d++)this.queueBeat(.5+d*.35,()=>{if(f()){for(let m=0;m<u;m++)this.spawnBullet(t.mesh.position.x,t.mesh.position.z,(m+d*.5)/u*Math.PI*2,!1,{kind:"enemy",dmg:12,ttl:3,speed:6.5});this.spawnFx("shock",t.mesh.position.x,.08,t.mesh.position.z,n)}})}else if(e==="cross"){c(1.2);const u=Math.random()<.5?0:Math.PI/4,d=[0,1,2,3].map(m=>u+m*Math.PI/2);for(const m of d)this.spawnShow("lane",a,o,n,m,16,0,1.4,1,void 0,.8);this.queueBeat(.8,()=>{if(!f())return;let m=!1;for(const x of d){this.spawnFx("arc",a,.9,o,n,x,16),this.spawnFx("arc",a,.92,o,16777215,x,16);const g=(this.px-a)*Math.cos(x)+(this.pz-o)*Math.sin(x),p=Math.abs(-(this.px-a)*Math.sin(x)+(this.pz-o)*Math.cos(x));g>0&&g<16&&p<.75&&(m=!0)}this.trauma=Math.min(1,this.trauma+.25),m&&this.hurt(18,a,o)})}else if(e==="tide"){c(1.3);const u=s>=2?5:3,d=Math.cos(h),m=Math.sin(h),x=a-d*3,g=o-m*3,p=Array.from({length:u},(M,v)=>(v-(u-1)/2)*3.1+(Math.random()-.5)*.8);for(const M of p)this.spawnShow("lane",x-m*M,g+d*M,n,h,22,0,1.5,1,void 0,.95);this.queueBeat(.95,()=>{if(!f())return;let M=!1;for(const v of p){const _=x-m*v,b=g+d*v;this.spawnFx("arc",_,.6,b,n,h,22),this.spawnFx("arc",_,.62,b,16777215,h,16);const T=(this.px-_)*d+(this.pz-b)*m,R=Math.abs(-(this.px-_)*m+(this.pz-b)*d);T>0&&T<22&&R<.8&&(M=!0)}this.trauma=Math.min(1,this.trauma+.3),M&&this.hurt(18+s*2,a,o)})}else if(e==="whirl"){c(1.2);const u=this.px,d=this.pz,m=1.7+s*.2;this.spawnShow("warn",u,d,n,0,m,0,.22,1,void 0,2.1),this.spawnShow("rune",u,d,n,0,1.6,-5);for(let x=0;x<20;x++)this.queueBeat(x*.1,()=>{if(!f())return;const g=u-this.px,p=d-this.pz,M=Math.hypot(g,p);M<5&&M>.2&&this.dashLeft<=0&&(this.knockX=g/M*2.6,this.knockZ=p/M*2.6),x%4===0&&this.burst(u,d,n,3)});this.queueBeat(2.1,()=>{f()&&(this.spawnFx("shock",u,.08,d,n),this.spawnShow("dome",u,d,n,0,1.2),this.burst(u,d,n,12),this.trauma=Math.min(1,this.trauma+.35),Math.hypot(this.px-u,this.pz-d)<m&&this.hurt(22+s*3,u,d))})}else if(e==="descent"){const u={x:this.px,z:this.pz},d=this.blocked(u.x,u.z,t.r)?Fi(u.x,u.z,t.r,this.walls):u;c(.15+Gr+.5),this.spawnShow("warn",d.x,d.z,n,0,2.2,0,.22,1,void 0,.15+Gr),this.spawnFx("shock",a,.08,o,n),this.queueBeat(.15,()=>{f()&&(t.mesh.userData.leapTo=d,t.chargeState=4,t.chargeT=Gr)})}else if(e==="pillar"){c(.95);const u=this.px,d=this.pz;this.spawnShow("warn",u,d,n,0,1.3,0,.22,1,void 0,.75),this.queueBeat(.75,()=>{f()&&(this.spawnShow("pillar",u,d,n,0,.8),this.spawnFx("shock",u,.08,d,n),Math.hypot(this.px-u,this.pz-d)<1.3&&this.hurt(16,u,d))})}}bossSlam(t,e,i,n,s,a){const o=Ji[t.bossId];this.spawnShow("pillar",e,i,o,0,1),this.spawnFx("shock",e,.08,i,o),this.burst(e,i,o,10),this.trauma=Math.min(1,this.trauma+.25),Math.hypot(this.px-e,this.pz-i)<n&&this.hurt(s,e,i);for(let h=0;h<a;h++)this.spawnBullet(e,i,h/a*Math.PI*2+t.bossPhase*.2,!1,{kind:"enemy",dmg:12,ttl:1.6})}}class I_ extends P_{stepBite(t,e){var s;const i=Math.hypot(this.px-t.mesh.position.x,this.pz-t.mesh.position.z);if(t.kind==="husk"&&t.chargeState===2){i<.55+t.r&&this.hurt(34,t.mesh.position.x,t.mesh.position.z);return}const n=.75+t.r;if(t.biteCd=Math.max(0,(t.biteCd??0)-e),(t.bite??0)>0){if(t.bite=(t.bite??0)-e,t.bite>0)return;t.bite=0;const a=Math.atan2(this.pz-t.mesh.position.z,this.px-t.mesh.position.x);if(t.recoil=.35,t.lunge=.25,this.spawnFx("streak",t.mesh.position.x+Math.cos(a)*.5,.8,t.mesh.position.z+Math.sin(a)*.5,Ce[t.kind],a),i<n+.3){if(this.iFrames<=0&&this.dashLeft<=0&&this.lungeLeft<=0){const h=t.kind==="skitter"?3.6:t.kind==="wight"||t.kind==="bulwark"||t.kind==="husk"?7.9:5.7,l=Math.cos(a),c=Math.sin(a);this.knockX=l*h,this.knockZ=c*h,this.spawnFx("shock",this.px,.1,this.pz,Ce[t.kind])}const o=t.kind==="skitter"?7:t.kind==="mire"?12:t.kind==="bell"?10:t.kind==="wight"?24:t.kind==="wraith"?16:t.kind==="husk"?14:t.kind==="bulwark"?15:13;this.hurt(o,t.mesh.position.x,t.mesh.position.z)}return}if(i<n&&(t.biteCd??0)<=0){const a=(t.kind==="skitter"?.22:t.kind==="wight"||t.kind==="husk"||t.kind==="bulwark"||t.kind==="mire"?.5:.36)*((s=t.affixes)!=null&&s.includes("hasted")?Ut.hastedWindup:1);t.bite=a,t.biteWind=a,ds("bite"),t.biteCd=a+.7,t.mesh.rotation.y=Math.atan2(this.px-t.mesh.position.x,this.pz-t.mesh.position.z),this.spawnFx("flash",t.mesh.position.x,1,t.mesh.position.z,Ce[t.kind])}}animateEnemy(t,e,i){var m;const n=(t.size??1)*Ut.enemyScale;if(t.burrowed||t.kind==="burrower"&&t.chargeState===1){t.mesh.scale.set(n*1.25,n*.16,n*1.25);return}let s=0,a=0,o=1,h=1,l=1;const c=x=>Math.sin(this.clock*61+t.phase*7)*x;if(o+=t.recoil*.22,l+=t.recoil*.22,h-=t.recoil*.18,(t.flinch??0)>0){t.flinch=Math.max(0,(t.flinch??0)-e);const x=(t.flinch??0)/.22,g=t.mesh.rotation.y,p=t.flinchX??0,M=t.flinchZ??0;s+=(p*Math.sin(g)+M*Math.cos(g))*.4*x,a-=(p*Math.cos(g)-M*Math.sin(g))*.4*x}if((t.bite??0)>0){const x=1-(t.bite??0)/(t.biteWind||.4);s-=.32*x,a+=c(.06*x*x),h-=.16*x,o+=.1*x,l+=.1*x}if((t.lunge??0)>0){t.lunge=Math.max(0,(t.lunge??0)-e);const x=(t.lunge??0)/.25;s+=.45*x,l*=1+.25*x,h*=1-.08*x}if(ul(t.kind)){if(t.chargeState===1){const x=1-t.chargeT/.5;s-=.4*x,a+=c(.08*x),h-=.12*x,o+=.1*x,l+=.1*x}else if(t.chargeState===2)s+=.38,l*=1.15,h*=.94;else if(t.chargeState===3){const x=t.chargeT/.6;s+=.3*x,h*=1-.1*x}}if(t.telegraph>0){t.telegraph=Math.max(0,t.telegraph-e);const x=1-t.telegraph/(t.telegraphMax||1),g=1+.12*x+Math.sin(this.clock*24)*.025*x;o*=g,h*=g,l*=g,s-=.12*x}const f=1-i;if(f>.3&&!hr(t.kind)){const x=!!((m=t.affixes)!=null&&m.length),g=Math.sin(this.clock*(x?1.8:2.6)+t.phase)*(x?.06:.035)*f;h*=1+g,o*=1-g*.5,l*=1-g*.5}const u=t.age??0,d=Wr(t.kind)||Xr(t.kind);if(u<.5){const x=u/.5;if(d){t.mesh.position.y+=Math.pow(1-x,2)*1.8;const g=.35+.65*x;o*=g,h*=g,l*=g}else t.mesh.position.y-=Math.pow(1-x,2)*1.3}else if(u<.7&&!d){const x=1+.12*Math.sin((u-.5)/.2*Math.PI);o*=x,h*=x,l*=x}t.mesh.rotation.x+=s,t.mesh.rotation.z+=a,t.mesh.scale.set(n*o,n*h,n*l)}stepEnemy(t,e){if(t.dummy){t.flash=Math.max(0,(t.flash??0)-e),t.recoil=Math.max(0,(t.recoil??0)-e*4),t.mesh.rotation.y=Math.atan2(this.px-t.mesh.position.x,this.pz-t.mesh.position.z);return}if(t.bossId){this.stepBoss(t,e);return}const i=this.px-t.mesh.position.x,n=this.pz-t.mesh.position.z,s=Math.hypot(i,n)||1,a=(t.frozen??0)>0?.05:t.slow>0?.42:1;let o=i/s*t.speed*a,h=n/s*t.speed*a;Bf(t.kind)&&(s<5?(o=-(i/s)*t.speed*a,h=-(n/s)*t.speed*a):s<7.5&&(o=-(n/s)*t.speed*.55*a,h=i/s*t.speed*.55*a));let l=!1;if(ul(t.kind))if(t.chargeState===0)t.shootCd=Math.max(0,t.shootCd-e),t.shootCd<=0&&s>1.8&&s<7.5&&(t.chargeState=1,t.chargeT=.5,t.shootCd=3.4,t.mesh.rotation.y=Math.atan2(i,n),this.spawnFx("flash",t.mesh.position.x,t.mesh.position.y+.9,t.mesh.position.z,Ce.husk));else if(t.chargeState===1)t.chargeT-=e,o=0,h=0,l=!0,t.chargeT<=0&&(t.chargeState=2,t.chargeT=.5);else if(t.chargeState===2){t.chargeT-=e;const m=Math.sin(t.mesh.rotation.y),x=Math.cos(t.mesh.rotation.y);o=m*t.speed*4.2,h=x*t.speed*4.2,l=!0,(t.chargeT<=0||this.blocked(t.mesh.position.x+o*e,t.mesh.position.z+h*e,t.r))&&(t.chargeState=3,t.chargeT=.6)}else t.chargeState===3&&(t.chargeT-=e,o*=.25,h*=.25,t.chargeT<=0&&(t.chargeState=0));if(t.kind==="burrower"){const m=Ce.burrower;if(t.chargeState===0)t.burrowed=!0,o*=1,h*=1,Math.random()<e*9&&this.burst(t.mesh.position.x,t.mesh.position.z,9071178,1),s<1.2&&t.spawnGrace<=0&&(t.chargeState=1,t.chargeT=.6,this.spawnShow("warn",t.mesh.position.x,t.mesh.position.z,m,0,1.35,0,.22,1,void 0,.6));else if(t.chargeState===1){if(o=0,h=0,t.chargeT-=e,t.chargeT<=0){t.chargeState=2,t.chargeT=2.2,t.burrowed=!1,t.biteCd=.9;const x=t.mesh.position.x,g=t.mesh.position.z;if(this.burst(x,g,9071178,12),this.spawnFx("shock",x,.08,g,m),Math.hypot(this.px-x,this.pz-g)<1.4){this.hurt(16,x,g);const p=Math.atan2(this.pz-g,this.px-x);this.knockX=Math.cos(p)*5.5,this.knockZ=Math.sin(p)*5.5}}}else o*=.35,h*=.35,t.chargeT-=e,t.chargeT<=0&&(t.chargeState=0,t.burrowed=!0,this.burst(t.mesh.position.x,t.mesh.position.z,9071178,8))}(t.bite??0)>0&&(o=0,h=0,l=!0),Xr(t.kind)&&s<6.5&&(o=0,h=0);for(const m of this.enemies){if(m===t)continue;const x=t.mesh.position.x-m.mesh.position.x,g=t.mesh.position.z-m.mesh.position.z,p=Math.hypot(x,g);p>0&&p<1.1&&(o+=x/p*1.2,h+=g/p*1.2)}const c=_h(t.mesh.position.x+o*e,t.mesh.position.z+h*e,t.r,t.mesh.position.x,t.mesh.position.z,this.walls,t.mesh.position.y);t.mesh.position.x=c.x,t.mesh.position.z=c.z;const f=Math.hypot(o,h),u=t.speed>0?Math.min(1,f/t.speed):0;if(t.mesh.rotation.order="YXZ",!l&&f>.05){let m=Math.atan2(o,h)-t.mesh.rotation.y;m=((m+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,t.mesh.rotation.y+=m*Math.min(1,e*11)}t.mesh.rotation.x=hr(t.kind)||Wr(t.kind)?0:Math.min(.22,.13*(f/Math.max(.01,t.speed)));const d=Cn(t.mesh.position.x,t.mesh.position.z,this.plats);if(hr(t.kind)?(t.mesh.position.y=d,t.mesh.rotation.y=this.clock*.5+t.phase,t.mesh.rotation.z=0):Wr(t.kind)?(t.mesh.position.y=d+.18+Math.sin(this.clock*2.2+t.phase)*.12,t.mesh.rotation.z=Math.sin(this.clock*1.8+t.phase)*.08):t.kind==="zombie"?(t.mesh.position.y=d,t.mesh.rotation.z=Math.sin(this.clock*7+t.phase)*.1):t.kind==="skitter"?(t.mesh.position.y=d+Math.abs(Math.sin(this.clock*22+t.phase))*.05,t.mesh.rotation.z=Math.sin(this.clock*30+t.phase)*.06):(t.mesh.position.y=d+Math.abs(Math.sin(this.clock*9+t.phase))*.05*u,t.mesh.rotation.z=0),t.age=(t.age??0)+e,t.recoil=Math.max(0,t.recoil-e*9),t.slow=Math.max(0,t.slow-e),t.frozen&&(t.frozen=Math.max(0,t.frozen-e)),t.spawnGrace=Math.max(0,t.spawnGrace-e),this.stepCurse(t,e),t.mendT!==void 0&&(t.mendT-=e,t.mendT<=0)){t.mendT=1;const m=$i.mending.color;this.spawnFx("ring",t.mesh.position.x,.08,t.mesh.position.z,m);for(const x of this.enemies)x===t||x.bossId||x.hp>=x.maxHp||Math.hypot(x.mesh.position.x-t.mesh.position.x,x.mesh.position.z-t.mesh.position.z)>Ut.mendingRadius||(x.hp=Math.min(x.maxHp,x.hp+x.maxHp*Ut.mendingShare),this.burst(x.mesh.position.x,x.mesh.position.z,m,2))}if(this.animateEnemy(t,e,u),t.flash>0&&(t.flash-=e),this.applyHitFlash(t),!hr(t.kind)&&!fl(t.kind)&&t.spawnGrace<=0&&!(t.kind==="burrower"&&t.chargeState!==2)&&this.stepBite(t,e),this.stepNewKinds(t,s,e),fl(t.kind)&&t.spawnGrace<=0&&Math.hypot(this.px-t.mesh.position.x,this.pz-t.mesh.position.z)<1.3){this.hurt(26,t.mesh.position.x,t.mesh.position.z),this.spawnShow("dome",t.mesh.position.x,t.mesh.position.z,Ce.cinder,0,1.1),this.burst(t.mesh.position.x,t.mesh.position.z,Ce.cinder,10),this.impact(t.mesh.position.x,t.mesh.position.z,Ce.cinder,!0),this.killEnemy(t);return}if(kf(t.kind)&&(t.shootCd-=e,t.shootCd<=0&&s<14&&this.enemies.length<9)){t.shootCd=4.4;const m=t.mesh.position.x,x=t.mesh.position.z;this.spawnShow("rune",m,x,Ce.binder,0,1),this.queueBeat(.55,()=>{this.enemies.includes(t)&&(this.spawnEnemy("zombie"),this.spawnFx("flash",m,.6,x,Ce.binder))})}if(Hf(t.kind)&&(t.shootCd-=e,t.shootCd<=0&&s<16&&(t.shootCd=3.8,t.telegraph=t.telegraphMax=1.1,this.spawnFx("flash",t.mesh.position.x,t.mesh.position.y+.6,t.mesh.position.z,Ce.gazer),this.queueBeat(1.1,()=>{if(!this.enemies.includes(t))return;const m=this.leadAngle(t.mesh.position.x,t.mesh.position.z,16,.6);this.spawnBullet(t.mesh.position.x,t.mesh.position.z,m,!1,{dmg:30,pierce:1,homing:0,ttl:3,kind:"enemy",y:t.mesh.position.y+.5,speed:16}),this.spawnFx("streak",t.mesh.position.x,t.mesh.position.y+.5,t.mesh.position.z,Ce.gazer,m)}))),Xr(t.kind)&&(t.shootCd-=e,t.shootCd<=0&&s<14)){t.shootCd=3.2,t.telegraph=t.telegraphMax=.6;const m=t.mesh.position.x,x=t.mesh.position.z;this.spawnFx("flash",m,t.mesh.position.y+.8,x,Ce.bell),this.spawnShow("rune",m,x,Ce.bell,0,.9),this.queueBeat(.6,()=>{if(!this.enemies.includes(t))return;const g=we(this.room)>=3?12:8;t.phase+=Math.PI/g;for(let p=0;p<g;p++){const M=t.phase+p/g*Math.PI*2;this.spawnBullet(t.mesh.position.x,t.mesh.position.z,M,!1,{dmg:12,pierce:0,homing:0,ttl:3,kind:"enemy",y:t.mesh.position.y+.7,speed:6.5})}this.spawnFx("ring",t.mesh.position.x,.08,t.mesh.position.z,Ce.bell)})}if(Gf(t.kind))t.shootCd-=e,t.shootCd<=0&&s<12&&(t.shootCd=t.kind==="wight"?.7:t.kind==="wraith"?1.05:1.4-this.room*.06,this.spawnBullet(t.mesh.position.x,t.mesh.position.z,this.leadAngle(t.mesh.position.x,t.mesh.position.z,10),!1,{dmg:t.kind==="wight"?18:14,pierce:0,homing:0,ttl:2.2,kind:"enemy",y:t.mesh.position.y+.5}));else if(Vf(t.kind)&&(t.shootCd-=e,t.shootCd<=0&&s<13)){t.shootCd=2.6,t.telegraph=t.telegraphMax=.7;const m=this.px,x=this.pz;this.spawnShow("rune",m,x,Ce.acolyte,0,1.15),this.queueBeat(.7,()=>{this.enemies.includes(t)&&(this.spawnShow("dome",m,x,Ce.acolyte,0,1.3),Math.hypot(this.px-m,this.pz-x)<1.5&&this.hurt(20,m,x))})}}stepNewKinds(t,e,i){if(t.spawnGrace>0)return;const n=t.mesh.position.x,s=t.mesh.position.z;if(t.kind==="censer")t.shootCd-=i,t.shootCd<=0&&e<12&&(t.shootCd=1.5,this.addZone("ash",n,s,1.25,3.4),this.burst(n,s,Ce.censer,3));else if(t.kind==="weaver"){if(t.shootCd-=i,t.shootCd<=0&&e<11){t.shootCd=3.4,t.telegraph=t.telegraphMax=.75;const a=this.px,o=this.pz;this.spawnShow("warn",a,o,Ce.weaver,0,1.6,0,.22,1,void 0,.75),this.spawnFx("streak",n,.9,s,Ce.weaver,Math.atan2(o-s,a-n)),this.queueBeat(.75,()=>{this.enemies.includes(t)&&this.addZone("web",a,o,1.65,4.5)})}}else if(t.kind==="tidecaller"&&(t.shootCd-=i,t.shootCd<=0&&e<13)){t.shootCd=4,t.telegraph=t.telegraphMax=.9;const a=Math.atan2(this.pz-s,this.px-n),o=Ce.tidecaller;this.spawnShow("lane",n,s,o,a,14,0,1.3,1,void 0,.9),this.queueBeat(.9,()=>{if(!this.enemies.includes(t))return;this.spawnFx("arc",n,.6,s,o,a,14),this.spawnFx("arc",n,.62,s,16777215,a,10);const h=(this.px-n)*Math.cos(a)+(this.pz-s)*Math.sin(a),l=Math.abs(-(this.px-n)*Math.sin(a)+(this.pz-s)*Math.cos(a));h>0&&h<14&&l<.75&&this.hurt(16,n,s)})}}addZone(t,e,i,n,s){const a=t==="ash"?Ce.censer:Ce.weaver,o=new Zt,h=new S(this.sharedGeo("zone-disc",()=>new Xe(1,28)),this.mat(new at({color:t==="ash"?3814452:a,transparent:!0,opacity:t==="ash"?.5:.22,depthWrite:!1,fog:!1})));h.rotation.x=-Math.PI/2,o.add(h);const l=new S(this.sharedGeo(t==="ash"?"zone-ring":"zone-web",()=>t==="ash"?new Ne(.88,1,32):new Ne(.2,1,12,3)),this.mat(new at({color:a,transparent:!0,opacity:t==="ash"?.6:.5,depthWrite:!1,fog:!1,wireframe:t==="web"})));l.rotation.x=-Math.PI/2,l.position.y=.01,o.add(l),o.position.set(e,.05,i),o.scale.setScalar(n),this.scene.add(o),this.zones.push({kind:t,x:e,z:i,r:n,ttl:s,max:s,tick:.2,mesh:o}),this.zones.length>12&&this.removeZone(this.zones[0])}removeZone(t){this.scene.remove(t.mesh),t.mesh.traverse(e=>{e instanceof S&&e.material.dispose()}),this.zones=this.zones.filter(e=>e!==t)}stepZones(t){this.webbed=Math.max(0,this.webbed-t);for(const e of[...this.zones]){e.ttl-=t,e.tick-=t,e.mesh.scale.setScalar(e.r*Math.min(1,(e.max-e.ttl)/.2)*Math.min(1,e.ttl/.4+.2));const i=Math.hypot(this.px-e.x,this.pz-e.z)<e.r;e.kind==="ash"?(Math.random()<t*3&&this.burst(e.x+(Math.random()-.5)*e.r,e.z+(Math.random()-.5)*e.r,9076856,1),e.tick<=0&&(e.tick=.5,i&&this.dashLeft<=0&&this.hurt(7,e.x,e.z))):i&&(this.webbed=.3),e.ttl<=0&&this.removeZone(e)}}}const Vr=11563263,L_=new N,Hc=new ot,D_=new Ki(new N(0,1,0),0);class z_ extends I_{constructor(){super(...arguments);L(this,"glaives",[]);L(this,"hammerDur",.62);L(this,"sickles",[]);L(this,"frostShards",[]);L(this,"frostNext",0);L(this,"frostFling",0);L(this,"frostR",0);L(this,"frostDmg",0);L(this,"frostTrail")}worldAim(){const e=Kc(),i=de.getState().touch;if(Math.hypot(e.ax,e.ay)>.25)return{x:e.ax,z:e.ay};const n=Math.hypot(i.ax,i.ay);if(n>.001)return{x:i.ax/n,z:i.ay/n};if(!this.pointer.mouse)return{x:this.aimX,z:this.aimZ};const s=this.renderer.domElement.getBoundingClientRect();Hc.set((this.pointer.x-s.left)/s.width*2-1,-((this.pointer.y-s.top)/s.height)*2+1),this.ray.setFromCamera(Hc,this.camera);const a=this.ray.ray.intersectPlane(D_,L_);if(a){const o=a.x-this.px,h=a.z-this.pz,l=Math.hypot(o,h)||1;return{x:o/l,z:h/l}}return{x:this.aimX,z:this.aimZ}}comboLen(){return 3}fire(){if(this.fireCd>0)return;const e=this.swapLeft>0&&this.runJob==="hunter"?1.25:1,i=this.comboLen(),n=this.combo;this.combo=(this.combo+1)%i,this.comboIdle=0,this.swingStep=n,this.swingFinisher=n===i-1;const s=1+.06*this.rushStacks;this.fireCd=this.job.fireMs/this.fireMul/e/s/Wf(this.masteryRank)/(this.setOn("wrath",3)&&this.hp<this.maxHp*.5?1.2:1)/1e3*(this.swingFinisher?1.32:1),this.skin==="warhammer"&&(this.fireCd*=1.9,this.hammerDur=Math.min(.62,this.fireCd*.95)),this.rares.has("phantom")&&++this.phantomCount%4===0&&(this.nova(this.px,this.pz,8,"bolt"),this.spawnFx("ring",this.px,.08,this.pz,Rt[2]),Yr());const a=this.worldAim();this.aimX=a.x,this.aimZ=a.z,this.attackT=1,Xf(this.skin);const o=Math.atan2(a.z,a.x);this.runJob==="reaper"&&this.skin==="twindaggers"?this.castDarkImpale(o,n):this.runJob==="reaper"&&this.skin==="chainsickle"?this.castChainSickle(o):this.runJob==="reaper"?this.swingReaper(o,n):this.runJob==="arcanist"&&this.skin==="prismshard"?this.castCurseBolt(o,n):this.runJob==="arcanist"&&this.skin==="frostorbit"?this.castFrostOrbit():this.runJob==="arcanist"?this.castArcanist(o,n):this.runJob==="hunter"&&this.skin==="twinfang"?this.castSnipeShot(o,n):this.runJob==="hunter"&&this.skin==="scattershot"?this.castScattershot(o):this.runJob==="hunter"?this.castHunter(o,n):this.runJob==="knight"&&this.skin==="dawnedge"?this.castDawnRush(o,n):this.runJob==="knight"&&this.skin==="warhammer"?this.castWarhammer(o):this.runJob==="knight"?this.castKnight(o,n):this.runJob==="wanderer"&&this.skin==="glaive"?this.castGlaive(o):this.castWanderer(o,n)}castGlaive(e){const i=this.classIndex,n=this.swingFinisher,s=Ut.pierceReach*this.bonusPierce(),a=this.hitDamage()*(1+i*.12)*.5*(n?1.15:1),o=5.6+i*.5+s*2,h=.6+i*.08+s,l=n?[e-.22,e+.22]:[e];for(const c of l)this.launchGlaive(c,o,h,a)}launchGlaive(e,i,n,s){let a=this.glaives.find(o=>!o.live);if(!a){const o=new Zt,h=new vi;for(let u=0;u<8;u++){const d=u%2===0?.55:.16,m=u/8*Math.PI*2;u===0?h.moveTo(Math.cos(m)*d,Math.sin(m)*d):h.lineTo(Math.cos(m)*d,Math.sin(m)*d)}h.closePath();const l=this.sharedGeo("glaive-star",()=>new Ma(h)),c=new S(l,this.mat(new at({color:2363436,fog:!1,side:$t,depthWrite:!1})));c.rotation.x=-Math.PI/2,c.scale.setScalar(1.18),c.position.y=-.08,c.renderOrder=2;const f=new S(l,this.mat(new at({color:jt.wanderer,fog:!1,side:$t})));f.rotation.x=-Math.PI/2,f.renderOrder=3,o.add(c,f),this.scene.add(o),a={mesh:o,x:0,z:0,dx:0,dz:0,t:0,out:0,dist:0,back:!1,r:0,dmg:0,hit:new Set,live:!1},this.glaives.push(a)}Object.assign(a,{x:this.px,z:this.pz,dx:Math.cos(e),dz:Math.sin(e),t:0,out:0,dist:i,back:!1,r:n,dmg:s,live:!0}),a.hit.clear(),a.mesh.parent||this.scene.add(a.mesh),a.mesh.visible=!0,a.mesh.scale.setScalar(n/.6),a.mesh.position.set(a.x,.9,a.z)}stepGlaives(e){for(const i of this.glaives){if(!i.live)continue;i.t+=e;const n=17;if(i.back){const s=this.px-i.x,a=this.pz-i.z,o=Math.hypot(s,a),h=(n+4)*e;if(o<=Math.max(.5,h)||i.t>3){i.live=!1,i.mesh.visible=!1,this.spawnFx("flash",this.px,1,this.pz,jt.wanderer),qf();continue}i.x+=s/o*h,i.z+=a/o*h}else{const s=i.x+i.dx*n*e,a=i.z+i.dz*n*e;i.out+=n*e,i.out>=i.dist||this.blocked(s,a,.2,0)?(i.back=!0,i.hit.clear()):(i.x=s,i.z=a)}i.mesh.position.set(i.x,.9,i.z),i.mesh.rotation.y+=e*24;for(const s of[...this.enemies])i.hit.has(s)||s.burrowed||Math.hypot(s.mesh.position.x-i.x,s.mesh.position.z-i.z)>i.r+s.r||(i.hit.add(s),this.damageOne(s,i.x,i.z,i.dmg),ia());Math.random()<e*(this.lite?14:34)&&this.burst(i.x,i.z,jt.wanderer,1)}}castWarhammer(e){const i=this.classIndex,n=this.swingFinisher,s=Ut.pierceReach*this.bonusPierce(),a=this.hitDamage()*(1+i*.12)*(n?1.3:1),o=this.px+Math.cos(e)*1.3,h=this.pz+Math.sin(e)*1.3,l=1.1+i*.1,c=6+i+Math.round(s*1.5),f=1.05;this.queueBeat(this.hammerDur*.36,()=>{const u=new Set;this.damageAround(o,h,l,a,m=>{u.add(m),this.staggerFrom(m,o,h,.6)}),this.spawnFx("shock",o,.08,h,jt.knight),this.spawnFx("flash",o,.6,h,jt.knight),this.spawnFx("ring",o,.07,h,2759216),this.burst(o,h,9075338,n?12:7),this.trauma=Math.min(1,this.trauma+(n?.35:.18)),this.camPunch=Math.min(1,this.camPunch+.3),hs();const d=n?[e-.38,e,e+.38]:[e];for(const m of d){const x=Math.cos(m),g=Math.sin(m);let p=!1;for(let M=1;M<=c;M++)this.queueBeat(M*.045,()=>{if(p)return;const v=o+x*f*M,_=h+g*f*M;if(this.blocked(v,_,.3,0)){p=!0,this.burst(v-x*.5,_-g*.5,9075338,5);return}this.spawnFx("streak",v,.15,_,2759216,m),this.burst(v,_,M%2?9075338:jt.knight,this.lite?2:4),M%2===0&&this.spawnFx("shock",v,.08,_,jt.knight);for(const b of[...this.enemies])u.has(b)||b.burrowed||Math.hypot(b.mesh.position.x-v,b.mesh.position.z-_)>.85+b.r||(u.add(b),this.damageOne(b,v,_,a*.7),this.staggerFrom(b,v,_,.4))})}})}staggerFrom(e,i,n,s){if(e.slow=Math.max(e.slow,.9),e.bossId||!this.enemies.includes(e))return;const a=e.mesh.position.x-i,o=e.mesh.position.z-n,h=Math.hypot(a,o)||1,l=e.mesh.position.x+a/h*s,c=e.mesh.position.z+o/h*s;this.blocked(l,c,.4,0)||e.mesh.position.set(l,e.mesh.position.y,c)}castScattershot(e){const i=this.classIndex,n=this.swingFinisher,s=5+i+this.extraPellets,a=this.hitDamage()*(1+Ut.tierDamage*i)*1.6/5,o=.62,h=this.job.bulletSpeed/mi*1.15,l=.26+Ut.pierceReach*this.bonusPierce()*.05,c=d=>{for(let m=0;m<s;m++){const x=e+(m/Math.max(1,s-1)-.5)*o+(Math.random()-.5)*.08+d;this.spawnBullet(this.px+Math.cos(x)*.55,this.pz+Math.sin(x)*.55,x,!0,{kind:"shard",dmg:a,pierce:0,ttl:l,speed:h*(.9+Math.random()*.2)})}};c(0);const f=this.px+Math.cos(e)*.7,u=this.pz+Math.sin(e)*.7;this.burst(f,u,jt.hunter,6),this.spawnFx("flash",f,.9,u,jt.hunter);for(const d of[-.2,0,.2])this.spawnFx("streak",f,.9,u,jt.hunter,e+d);if(n){const d=this.px-Math.cos(e)*.35,m=this.pz-Math.sin(e)*.35;this.blocked(d,m,.42,this.py)||(this.px=d,this.pz=m),this.burst(this.px,this.pz,14207176,5),this.trauma=Math.min(1,this.trauma+.12),this.queueBeat(.07,()=>c(.04)),this.queueBeat(.06,()=>{for(const x of this.enemies){if(x.bossId||x.burrowed)continue;const g=x.mesh.position.x-this.px,p=x.mesh.position.z-this.pz,M=Math.hypot(g,p);if(M>2.6||M<.01)continue;let v=Math.atan2(p,g)-e;if(v=((v+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,Math.abs(v)>.6)continue;const _=x.mesh.position.x+g/M*.9,b=x.mesh.position.z+p/M*.9;this.blocked(_,b,.4,0)||x.mesh.position.set(_,x.mesh.position.y,b)}})}}castChainSickle(e){const i=this.classIndex,n=this.swingFinisher,s=4.2+i*.3+Ut.pierceReach*this.bonusPierce(),a=n?.85:.55,o=n?2.2:1.6,h=this.hitDamage()*(1+i*.12)*(n?1.4:1),l=this.combo%2===0?1:-1;this.launchSickle(e,l,a,s),this.spawnFx("flash",this.px+Math.cos(e)*.6,1,this.pz+Math.sin(e)*.6,Vr),this.queueBeat(.13,()=>{for(const c of[...this.enemies]){if(c.burrowed)continue;const f=c.mesh.position.x-this.px,u=c.mesh.position.z-this.pz,d=Math.hypot(f,u);if(d<1.2-c.r||d>s+c.r)continue;let m=Math.atan2(u,f)-e;if(m=((m+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,Math.abs(m)>a+Math.atan2(c.r,Math.max(d,.01))||(this.damageOne(c,this.px,this.pz,h,M=>this.markEnemy(M,n)),this.burst(c.mesh.position.x,c.mesh.position.z,Vr,4),c.bossId||!this.enemies.includes(c)))continue;const x=Math.min(o,Math.max(0,d-1.1)),g=c.mesh.position.x-f/d*x,p=c.mesh.position.z-u/d*x;this.blocked(g,p,.4,0)||c.mesh.position.set(g,c.mesh.position.y,p)}})}launchSickle(e,i,n,s){let a=this.sickles.find(o=>!o.live);if(!a){const o=new Zt,h=this.sharedGeo("sickle-link",()=>new ie(.09,.025,5,10)),l=this.mat(new at({color:8014008,fog:!1})),c=[];for(let m=0;m<10;m++){const x=new S(h,l);x.rotation.set(Math.PI/2,m%2?Math.PI/2:0,0),o.add(x),c.push(x)}const f=new S(this.sharedGeo("sickle-hook",()=>new ie(.42,.075,6,18,Math.PI*1.15)),this.mat(new at({color:Vr,fog:!1,side:$t}))),u=new S(this.sharedGeo("sickle-hook-aura",()=>new ie(.42,.24,6,18,Math.PI*1.15)),this.mat(new at({color:10116351,transparent:!0,opacity:.35,depthWrite:!1,fog:!1,blending:pe})));f.add(u);const d=new S(this.sharedGeo("sickle-hook-rim",()=>new ie(.42,.11,6,18,Math.PI*1.15)),this.mat(new at({color:2363436,fog:!1,side:Ze})));f.add(d),o.add(f),this.scene.add(o),a={group:o,hook:f,links:c,t:0,ang:0,side:1,arc:0,reach:0,live:!1},this.sickles.push(a)}a.group.parent||this.scene.add(a.group),Object.assign(a,{t:0,ang:e,side:i,arc:n,reach:s,live:!0}),a.group.visible=!0}stepSickles(e){for(const a of this.sickles){if(!a.live)continue;a.t+=e;let o,h;const l=a.ang-a.side*a.arc;if(a.t<.07)o=a.reach*(a.t/.07),h=l;else if(a.t<.07+.12)o=a.reach,h=l+a.side*a.arc*2*((a.t-.07)/.12);else if(a.t<.07+.12+.07)o=a.reach*(1-(a.t-.07-.12)/.07),h=a.ang+a.side*a.arc;else{a.live=!1,a.group.visible=!1;continue}const c=this.px+Math.cos(h)*o,f=this.pz+Math.sin(h)*o;a.links.forEach((u,d)=>{const m=(d+1)/(a.links.length+1);u.position.set(this.px+(c-this.px)*m,.95,this.pz+(f-this.pz)*m),u.visible=o>.3}),a.hook.position.set(c,.95,f),(!this.lite||Math.random()<.5)&&this.burst(c,f,Math.random()<.5?Vr:6961832,1),a.hook.rotation.set(-Math.PI/2,0,-h+(a.side>0?-.6:Math.PI+.6))}}castFrostOrbit(){const e=this.classIndex,i=4+e;this.frostDmg=this.hitDamage()*(1+e*.1)*.42;const n=this.frostShards.filter(o=>o.live);for(const o of n)o.ttl=4;n.length<i&&this.addFrostShard(n.length),this.frostShards.filter(o=>o.live).forEach((o,h,l)=>o.target=h/l.length);const s=this.frostShards.filter(o=>o.live&&o.mode===0),a=this.swingFinisher?s.length:Math.min(s.length,1);for(let o=0;o<a;o++){const h=s[(this.frostNext+o)%s.length],l=this.nearestFoe(h.mesh.position.x,h.mesh.position.z,7.5);l&&(h.mode=1,h.foe=l,h.out=0,h.hitAt.delete(l),this.lite||this.burst(h.mesh.position.x,h.mesh.position.z,12577279,2))}this.frostNext+=a,this.swingFinisher&&(this.frostFling=.35,this.spawnFx("ring",this.px,.08,this.pz,12577279))}nearestFoe(e,i,n){let s=null,a=n;for(const o of this.enemies){const h=Math.hypot(o.mesh.position.x-e,o.mesh.position.z-i);h<a&&!o.burrowed&&(a=h,s=o)}return s}addFrostShard(e){let i=this.frostShards.find(s=>!s.live);if(!i){const s=new Zt,a=this.sharedGeo("frost-shard",()=>new Se(.22,0)),o=new S(a,this.mat(new at({color:2363436,fog:!1,side:Ze})));o.scale.setScalar(1.3);const h=new S(a,this.mat(new at({color:12577279,fog:!1})));h.scale.set(1,1.6,1),o.scale.set(1.3,2,1.3),s.add(o,h),this.scene.add(s),i={mesh:s,slot:0,target:0,ttl:0,hitAt:new Map,live:!1,mode:0,foe:null,out:0},this.frostShards.push(i)}i.mesh.parent||this.scene.add(i.mesh),i.live=!0,i.ttl=4;const n=this.frostShards.filter(s=>s.live&&s!==i).pop();i.slot=n?n.slot:e,i.target=i.slot,i.hitAt.clear(),i.mode=0,i.foe=null,i.mesh.visible=!0}stepFrost(e){this.frostFling=Math.max(0,this.frostFling-e);const i=this.frostShards.some(l=>l.live);i&&!this.frostTrail&&(this.frostTrail=new S(this.sharedGeo("frost-trail",()=>new Ne(.93,1,48)),this.mat(new at({color:12577279,transparent:!0,opacity:.3,depthWrite:!1,fog:!1,side:$t}))),this.frostTrail.rotation.x=-Math.PI/2),this.frostTrail&&(this.frostTrail.parent||this.scene.add(this.frostTrail),this.frostTrail.visible=i,i&&(this.frostTrail.position.set(this.px,this.py+.06,this.pz),this.frostTrail.scale.setScalar(Math.max(.1,this.frostR))));const n=this.classIndex,s=Ut.pierceReach*this.bonusPierce(),a=1.55+n*.12+s;this.frostR<=0&&(this.frostR=a),this.frostR+=(a*(this.frostFling>0?1.6:1)-this.frostR)*Math.min(1,e*12);const o=this.frostR,h=this.clock*3.2;for(const l of this.frostShards){if(!l.live)continue;if(l.ttl-=e,l.ttl<=0){l.live=!1,l.mesh.visible=!1;continue}let c=l.target-l.slot;c-=Math.round(c),l.slot+=c*Math.min(1,e*8);const f=h+l.slot*Math.PI*2,u=this.px+Math.cos(f)*o,d=this.pz+Math.sin(f)*o,m=.85+Math.sin(this.clock*6+l.slot*9)*.08;if(l.mode===0)l.mesh.position.set(u,m,d);else{l.out+=e;const p=l.foe;l.mode===1&&(!p||!this.enemies.includes(p)||l.out>.7)&&(l.mode=2);const M=l.mode===1&&p?p.mesh.position.x:u,v=l.mode===1&&p?p.mesh.position.z:d,_=M-l.mesh.position.x,b=v-l.mesh.position.z,T=Math.hypot(_,b),R=(l.mode===1?15:12)*e;if(l.mode===2&&T<=Math.max(R,.2))l.mode=0,l.foe=null,l.mesh.position.set(u,m,d);else{const w=Math.min(1,R/(T||1));l.mesh.position.set(l.mesh.position.x+_*w,m,l.mesh.position.z+b*w)}Math.random()<e*(this.lite?12:30)&&this.burst(l.mesh.position.x,l.mesh.position.z,12577279,1)}const x=l.mesh.position.x,g=l.mesh.position.z;l.mesh.rotation.y+=e*(l.mode?14:5),!this.lite&&Math.random()<e*14&&this.burst(x,g,12577279,1);for(const p of this.enemies){if(p.burrowed||Math.hypot(p.mesh.position.x-x,p.mesh.position.z-g)>.45+p.r||this.clock<(l.hitAt.get(p)??-1))continue;l.hitAt.set(p,this.clock+.35),p.slow=Math.max(p.slow,1.2);const M=l.mode===1&&p===l.foe;if(this.damageOne(p,x,g,this.frostDmg*(M?Ut.frostStrike:1)*(this.frostFling>0?1.3:1)),ia(),M&&(l.mode=2,this.spawnFx("flash",x,.85,g,15268095),this.burst(x,g,12577279,this.lite?3:6)),p.frostbite=(p.frostbite??0)+1,p.frostbite>=4&&this.enemies.includes(p)){p.frostbite=0,p.frozen=1.2;const v=p.mesh.position.x,_=p.mesh.position.z;this.spawnFx("shock",v,.08,_,12577279),this.spawnFx("flash",v,1,_,15268095),this.burst(v,_,12577279,10),this.damageAround(v,_,1.4,this.frostDmg*1.3)}}}}clearGlaives(){this.frostR=0;for(const e of this.sickles)e.live=!1,e.group.visible=!1;for(const e of this.frostShards)e.live=!1,e.mesh.visible=!1;for(const e of this.glaives)e.live=!1,e.mesh.visible=!1}swingReaper(e,i){const n=this.classIndex,s=this.rageLeft>0,a=Rt[1],o=3+n,h=this.swingFinisher,l=this.hitDamage()*(1+n*.12)*(h?1.15:.93+i*.07),c=l/(o+.6),f=i%2===0?-1:1,u=(h?1.7:1.18+i*.14)*(1+n*.07),d=this.wr("scythe_wide")?1.25:1,m=1.5*u*(s?1.15:1)*d,x=((h?1.75:1.3+i*.12)+n*.15+(s?.35:0)+Ut.pierceReach*this.bonusPierce())*d,g=.45*(h?1.35:1),p=.18,M=o>1?p/(o-1):0,v=.25,_=(g*2+v)/p,b=(m+x*.4)/1.25;this.spawnShow("sweep",this.px,this.pz,jt.reaper,e-f*(g+v),b,f*_),this.queueBeat(.03,()=>this.spawnShow("sweep",this.px,this.pz,9067712,e-f*(g+v),b*.8,f*_,0,.8));for(let T=0;T<o;T++){const R=o>1?T/(o-1):0,w=T===o-1,A=e+f*(-g+R*g*2);this.queueBeat(T*M,()=>{const P=this.px+Math.cos(A)*m,z=this.pz+Math.sin(A)*m;this.damageAround(P,z,x,c*(w?1.6:1),B=>this.markEnemy(B,w)),this.burst(P,z,jt.reaper,w?9:4),this.trauma=Math.min(1,this.trauma+(w?.12:.05)),this.camPunch=Math.min(1,this.camPunch+(w?.12:.04)),w&&(this.spawnFx("streak",P,.95,z,jt.reaper,A+Math.PI/2),this.burst(P,z,a,8),this.spawnFx("ring",P,.08,z,a),h&&this.spawnShow("rune",this.px,this.pz,jt.reaper,e,1.35),h&&this.wr("scythe_moon")&&this.spawnBullet(this.px+Math.cos(e)*.7,this.pz+Math.sin(e)*.7,e,!0,{kind:"wave",dmg:l*.8,pierce:6,ttl:.9,speed:13,y:this.py+.9}),n>=2&&h&&this.spawnShow("dome",P,z,a,0,.55,0),this.bloomKick=Math.min(1.2,this.bloomKick+.3+n*.05))})}}castDarkImpale(e,i){const n=this.classIndex,s=jt.reaper,a=this.swingFinisher,o=this.maxHp>0?this.hp/this.maxHp:1,h=1+Math.max(0,.5-o)*1.2,l=this.hitDamage()*(1.4+n*.2)*(a?1.35:.9+i*.12)*h,c=this.wr("bite_moon"),f=3+n*.25+(a?.5:i*.1)+(c?1.2:0)+Ut.pierceReach*this.bonusPierce(),u=(c?8:5)+this.bonusPierce(),d=new Map,m=[];let x=0;this.damageAround(this.px,this.pz,f,l,M=>{x+=Math.max(0,(d.get(M)??0)-Math.max(0,M.hp)),m.push(M),this.markEnemy(M,!0)},M=>(d.set(M,Math.max(0,M.hp)),1));const g=(a?4:3)+Math.floor(n/2);for(const M of m.slice(0,u)){const v=M.mesh.position.x,_=M.mesh.position.z,b=Math.random()<.5?-1:1,T=.7+M.r*.9;this.spawnFx("flash",v,1,_,16730730),this.burst(v,_,12593230,a?7:4);for(let R=0;R<g;R++)this.queueBeat(R*.035,()=>{this.spawnShow("bat",v,_,s,R/g*Math.PI*2+Math.random()*.4,.95+n*.05,b*(7+Math.random()*2.5),T,1,M)});this.burst(v,_,s,a?6:3),h>1.15&&this.spawnFx("flash",v,1.05,_,16734826),a&&this.burst(v,_,Rt[1],4)}if(!m.length)return;const p=m.slice(0,u);if(n>=1&&this.queueBeat(.35,()=>{for(const M of p)this.enemies.includes(M)&&(this.spawnFx("flash",M.mesh.position.x,1,M.mesh.position.z,16730730),this.damageOne(M,M.mesh.position.x,M.mesh.position.z,l*.35,void 0,!0))}),n>=2){const M=new Set(m);for(const v of p){let _=null,b=2.8;for(const R of this.enemies){if(M.has(R))continue;const w=Math.hypot(R.mesh.position.x-v.mesh.position.x,R.mesh.position.z-v.mesh.position.z);w<b&&(b=w,_=R)}if(!_)continue;const T=_;M.add(T),this.queueBeat(.25,()=>{if(this.enemies.includes(T)){for(let R=0;R<2;R++)this.spawnShow("bat",T.mesh.position.x,T.mesh.position.z,s,R*Math.PI,.9,8,.7+T.r*.9,1,T);this.spawnFx("flash",T.mesh.position.x,1,T.mesh.position.z,16730730),this.damageOne(T,T.mesh.position.x,T.mesh.position.z,l*.5)}})}}if(n>=3)for(let M=1;M<=3;M++)this.queueBeat(.4*M+.2,()=>{for(const v of p)this.enemies.includes(v)&&(this.burst(v.mesh.position.x,v.mesh.position.z,12593230,2),this.damageOne(v,v.mesh.position.x,v.mesh.position.z,l*.1,void 0,!0))});if(this.trauma=Math.min(1,this.trauma+(a?.11:.05)),this.camPunch=Math.min(1,this.camPunch+(a?.13:.05)),x>0){const M=o<.5,v=this.wr("bite_gorge"),_=(a?.016:.008)*(M?1.5:1)*(n>=3?2:1)*(v?1.5:1),b=this.overshield?this.maxHp*1.2:this.maxHp,T=Math.min(x*(v?.2:.12),this.maxHp*_,b-this.hp);T>0&&(this.hp+=T,this.spawnFx("ring",this.px,.08,this.pz,s))}a&&(this.bloomKick=Math.min(1.2,this.bloomKick+.22+n*.03))}castWanderer(e,i){if(this.skin==="arrowbolt"){this.castKnifeCombo(e,i);return}const n=this.classIndex,s=jt.wanderer,a=Rt[1],o=this.px+Math.cos(e)*.5,h=this.pz+Math.sin(e)*.5,l=this.job.pellets+this.extraPellets+1+n,c=this.hitDamage()*(1+Ut.tierDamage*n)*1.8/l;this.spawnFx("ring",this.px,.08,this.pz,s);for(let f=0;f<l;f++)this.queueBeat(f*.05,()=>{this.spawnBullet(this.px+Math.cos(e)*.55,this.pz+Math.sin(e)*.55,e,!0,{kind:"bolt",dmg:c})});i===2&&this.wr("dagger_fan")&&this.queueBeat(l*.05+.04,()=>{for(let f=0;f<5;f++){const u=e+(f-2)*.24;this.spawnBullet(this.px+Math.cos(u)*.55,this.pz+Math.sin(u)*.55,u,!0,{kind:"bolt",dmg:c*.6})}}),this.burst(o,h,s,3+i+n),this.spawnFx("streak",this.px+Math.cos(e)*.4,this.py+.9,this.pz+Math.sin(e)*.4,s,e),n>=1&&this.spawnFx("streak",this.px+Math.cos(e)*.65,this.py+.9,this.pz+Math.sin(e)*.65,a,e),this.trauma=Math.min(1,this.trauma+.03+n*.01),i===2&&(this.burst(o,h,a,6+n*2),this.bloomKick=Math.min(1.2,this.bloomKick+.2+n*.04),this.camPunch=Math.min(1,this.camPunch+.12+n*.03),n>=2&&this.spawnShow("rune",this.px,this.pz,a,e,.5))}castKnifeCombo(e,i){const n=this.classIndex,s=jt.wanderer,a=this.swingFinisher,o=this.wr("spin_long")?1.35:1,h=((a?3.4:2.6)+n*.25)*o,l=this.enemyOnLine(e,(6+n*.3)*o,.5),c=l?Math.min(7.5*o,l.d+l.e.r+1.3*o):h,f=this.startLunge(e,c,!0);this.lungeFinisher=a,this.lungeDmg=this.hitDamage()*(1.15+i*.1+n*.1)*(a?1.45:1),this.iFrames=Math.max(this.iFrames,f+.15),this.fireCd=Math.max(this.fireCd,(a?.54:.42)/this.fireMul),this.chargeFromX=this.px,this.chargeFromZ=this.pz,this.spawnShow("clone",this.px,this.pz,s,e,.9),this.spawnFx("arc",this.px,.9,this.pz,s,e,c),this.trauma=Math.min(1,this.trauma+(a?.08:.04))}enemyOnLine(e,i,n){let s=null;for(const a of this.enemies){if(!a.mesh.visible)continue;const o=a.mesh.position.x-this.px,h=a.mesh.position.z-this.pz,l=Math.hypot(o,h);if(l>i||s&&l>=s.d)continue;let c=Math.atan2(h,o)-e;c=((c+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,!(Math.abs(c)>n)&&(s={e:a,d:l})}return s}startLunge(e,i,n){const s=Math.max(.14,Math.min(.34,i/16));return this.lungeX=Math.cos(e),this.lungeZ=Math.sin(e),this.lungeSpd=i/s,this.lungeLeft=s,this.lungeHit=new Set,this.lungeBurst=n,this.lungeFromX=this.px,this.lungeFromZ=this.pz,this.dashLeft=0,this.chargeFromX=this.px,this.chargeFromZ=this.pz,s}stepLunge(){const e=1.5+this.classIndex*.15+(this.lungeFinisher?.3:0)+(this.wr("spin_long")?.4:0)+Ut.pierceReach*this.bonusPierce();for(const i of[...this.enemies]){if(this.lungeHit.has(i))continue;const n=i.mesh.position.x,s=i.mesh.position.z;Math.hypot(n-this.px,s-this.pz)>e+i.r||(this.cutEnemy(i,this.lungeDmg,this.lungeFinisher),this.camPunch=Math.min(1,this.camPunch+(this.lungeFinisher?.1:.04)))}}endLunge(){if(!this.lungeBurst)return;const e=jt.wanderer,i=this.lungeFinisher,n=1.8+this.classIndex*.2+(i?.5:0),s=this.lungeDmg*(i?.9:.6);for(const o of[...this.enemies])Math.hypot(o.mesh.position.x-this.px,o.mesh.position.z-this.pz)>n+o.r||(this.lungeHit.delete(o),this.cutEnemy(o,s,i));this.spawnFx("ring",this.px,.08,this.pz,e),this.spawnFx("shock",this.px,.08,this.pz,i?16773296:e),this.burst(this.px,this.pz,e,i?8:5),this.trauma=Math.min(1,this.trauma+(i?.14:.07)),this.camPunch=Math.min(1,this.camPunch+(i?.12:.05)),i&&(this.bloomKick=Math.min(1.2,this.bloomKick+.25));const a=this.classIndex;if(a>=2&&this.nova(this.px,this.pz,6+(i?2:0),"bolt"),a>=3&&i){const o=this.lungeFromX,h=this.lungeFromZ,l=this.px,c=this.pz,f=this.lungeDmg*.5;this.queueBeat(.25,()=>{const u=Math.hypot(l-o,c-h)||.01,d=(l-o)/u,m=(c-h)/u,x=Math.atan2(m,d);this.spawnShow("clone",o,h,Rt[2],x,.95),this.spawnFx("arc",o,.9,h,Rt[2],x,u),this.spawnFx("arc",o,.92,h,16777215,x,u*.7);for(const g of[...this.enemies]){const p=g.mesh.position.x-o,M=g.mesh.position.z-h,v=p*d+M*m,_=Math.abs(-p*m+M*d);v<-.5||v>u+.5||_>1.5+g.r||(this.spawnShow("cut",g.mesh.position.x,g.mesh.position.z,Rt[2],-.75,.9+g.r*.6,0,0,1,g),this.damageOne(g,o,h,f))}})}}cutEnemy(e,i,n){if(this.lungeHit.has(e))return;this.lungeHit.add(e);const s=jt.wanderer,a=e.mesh.position.x,o=e.mesh.position.z,h=.9+e.r*.6,l=(Math.random()-.5)*.3;this.spawnShow("cut",a,o,s,.75+l,h,0,0,1,e),this.queueBeat(.05,()=>this.spawnShow("cut",a,o,s,-.75+l,h,0,0,1,e)),n&&this.queueBeat(.1,()=>{this.spawnShow("cut",a,o,16773296,.08,h*1.35,0,0,1,e),this.spawnFx("flash",a,1,o,16773296)}),this.burst(a,o,s,n?7:4),this.damageOne(e,this.px,this.pz,i),this.lungeBurst&&this.runJob==="wanderer"&&this.classIndex>=1&&this.queueBeat(.18,()=>{this.enemies.includes(e)&&(this.spawnShow("cut",e.mesh.position.x,e.mesh.position.z,Rt[2],.1,h*1.1,0,0,.8,e),this.damageOne(e,e.mesh.position.x,e.mesh.position.z,i*.4))})}castArcanist(e,i){const n=this.classIndex,s=jt.arcanist,a=Rt[1],o=this.hitDamage()*(1+Ut.tierDamage*n)*(i===2?1.35:1+i*.12),h=this.px+Math.cos(e)*.55,l=this.pz+Math.sin(e)*.55;this.spawnShow("rune",this.px,this.pz,s,e,.4+n*.12),this.burst(h,l,s,4+i*2);const c=1+n+(i===2?1:0)+(this.wr("core_fork")?2:0)+this.bonusPierce();this.launchChainBolt(e,o,c,9.4+n*.6),this.trauma=Math.min(1,this.trauma+.04),i===2&&(this.burst(h,l,a,6),this.bloomKick=Math.min(1.2,this.bloomKick+.22),this.camPunch=Math.min(1,this.camPunch+.14))}castCurseBolt(e,i){const n=this.classIndex,s=jt.arcanist,a=this.swingFinisher,o=this.hitDamage()*(1+Ut.tierDamage*n)*(.95+i*.06)*(a?1.15:1),h=this.wr("prism_growth"),l=3+n+(a?2:0)+(h?2:0)+this.bonusPierce();this.rootLine(this.px,this.pz,e,6.5,o,new Set,a?1.25:1.05,(c,f,u)=>{if(!c){this.plantThorn(f,u);return}const d=new Set([c]),m=.9+l*.06;for(let x=0;x<l;x++){const g=e+(l>1?(x/(l-1)-.5)*m:0);this.rootLine(f,u,g,h?4.6:3.4,o*.45,d,.7,(p,M,v)=>this.plantThorn(M,v))}}),this.spawnShow("rune",this.px,this.pz,s,e,.35+n*.08,-6),this.burst(this.px+Math.cos(e)*.6,this.pz+Math.sin(e)*.6,8018496,a?6:3),this.trauma=Math.min(1,this.trauma+(a?.06:.03))}rootLine(e,i,n,s,a,o,h,l){const c=Math.cos(n),f=Math.sin(n),u=.6,d=Math.max(1,Math.floor(s/u));let m=!1;for(let x=1;x<=d;x++){const g=e+c*u*x,p=i+f*u*x,M=x===d;this.queueBeat(x*.025,()=>{if(m)return;if(this.blocked(g,p,.15)){m=!0,l(null,g-c*u,p-f*u);return}this.spawnShow("root",g,p,0,n+(Math.random()-.5)*1.2,h*(.85+Math.random()*.3),0,(Math.random()-.5)*.35),(x%2===0||M)&&this.burst(g,p,8018496,2);let v=null,_=1e9;for(const b of this.enemies){if(o.has(b)||!b.mesh.visible)continue;const T=Math.hypot(b.mesh.position.x-g,b.mesh.position.z-p);T<.65+b.r&&T<_&&(_=T,v=b)}if(v){m=!0;const b=v.mesh.position.x,T=v.mesh.position.z;this.spawnShow("root",b,T,0,n,h*1.35,0,0),this.spawnFx("shock",b,.08,T,jt.arcanist),this.damageOne(v,g-c,p-f,a),l(v,b,T);return}M&&(m=!0,l(null,g,p))})}}plantThorn(e,i){if(this.blocked(e,i,.2)){const a=Fi(e,i,.2,this.walls);e=a.x,i=a.z}const n=8+this.classIndex*3+(this.wr("prism_crown")?6:0);for(;this.thorns.length>=n;){const a=this.thorns.shift();a&&this.retireThorn(a.mesh)}const s=this.thornPool.pop()??this.makeThornMesh();s.rotation.y=Math.random()*Math.PI*2,s.position.set(e,0,i),s.scale.setScalar(.01),this.scene.add(s),this.thorns.push({mesh:s,x:e,z:i,ttl:6,age:0,tick:.5})}makeThornMesh(){this.thornMats??(this.thornMats=[this.mat(new at({color:Rt[2],fog:!1})),this.mat(new at({color:Rt[0],fog:!1})),this.mat(new at({color:Rt[1],fog:!1})),this.mat(new at({color:jt.arcanist,transparent:!0,opacity:.85,depthWrite:!1,fog:!1,side:$t}))]);const e=new Zt,i=this.sharedGeo("thorn-spike",()=>new te(.1,.62,5));for(let s=0;s<3;s++){const a=s/3*Math.PI*2+.4,o=new S(i,this.thornMats[s]);o.position.set(Math.cos(a)*.12,.26,Math.sin(a)*.12),o.rotation.set(Math.sin(a)*.45,0,-Math.cos(a)*.45),o.scale.set(1,.8+s*.25,1),e.add(o)}const n=new S(this.sharedGeo("thorn-ring",()=>new Ne(.3,.44,18)),this.thornMats[3]);return n.rotation.x=-Math.PI/2,n.position.y=.03,e.add(n),e}retireThorn(e){this.scene.remove(e),this.thornPool.push(e)}stepThorns(e){const i=this.job?this.hitDamage()*.2*(this.wr("prism_crown")?2:1):0;for(let n=this.thorns.length-1;n>=0;n--){const s=this.thorns[n];s.ttl-=e,s.age+=e,s.tick-=e;const a=Math.min(1,s.age/.15),o=Math.min(1,s.ttl);if(s.mesh.scale.setScalar(Math.max(.01,a*o)),s.tick<=0){s.tick=.5;for(const h of[...this.enemies])Math.hypot(h.mesh.position.x-s.x,h.mesh.position.z-s.z)<.55+h.r&&this.damageOne(h,s.x,s.z,i,void 0,!0)}s.ttl<=0&&(this.retireThorn(s.mesh),this.thorns.splice(n,1))}}clearThorns(){for(const e of this.thorns)this.retireThorn(e.mesh);this.thorns=[]}castHunter(e,i){const n=this.classIndex,s=jt.hunter,a=Rt[1],o=this.swingFinisher,h=this.px+Math.cos(e)*.5,l=this.pz+Math.sin(e)*.5,c=this.job.pellets+this.extraPellets+n,f=this.hitDamage()*(1+Ut.tierDamage*n)*1.6/c,u=this.wr("arrow_focus"),d=u?{kind:"shard",pierce:this.job.pierce+this.extraPierce+1,speed:this.job.bulletSpeed/mi*1.25}:{kind:"shard"},m=u?.55:1,x=(g,p)=>this.spawnBullet(this.px+Math.cos(g)*.55,this.pz+Math.sin(g)*.55,g,!0,{...d,dmg:p});if(!o&&i===0){const g=this.job.spread*.35*m;for(let p=0;p<c;p++){const M=e+(p-(c-1)/2)*g;this.queueBeat(p*.025,()=>x(M,f))}this.spawnFx("streak",h,.9,l,s,e),this.burst(h,l,s,3+n)}else if(o){this.spawnFx("flash",this.px,1.8,this.pz,a),this.spawnShow("pillar",this.px,this.pz,s,0,.35),this.burst(this.px,this.pz,a,6+n*2);let g=this.px+Math.cos(e)*4.5,p=this.pz+Math.sin(e)*4.5,M=8;for(const R of this.enemies){if(R.burrowed)continue;const w=R.mesh.position.x-this.px,A=R.mesh.position.z-this.pz,P=Math.hypot(w,A);let z=Math.atan2(A,w)-e;z=((z+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,P<M&&Math.abs(z)<.5&&(M=P,g=R.mesh.position.x,p=R.mesh.position.z)}const v=this.wr("arrow_rain"),_=(1.5+n*.12)*(v?1.3:1),b=v?5:3,T=this.hitDamage()*(1+Ut.tierDamage*n)*1.6*Ut.skyfall/3;this.spawnShow("warn",g,p,s,0,_);for(let R=0;R<b;R++)this.queueBeat(.3+R*.12,()=>{for(let w=0;w<(this.lite?3:5);w++){const A=Math.random()*Math.PI*2,P=Math.sqrt(Math.random())*_*.85;this.spawnShow("drop",g+Math.cos(A)*P,p+Math.sin(A)*P,w%2?a:s,e,.55)}this.queueBeat(.1,()=>{this.spawnFx("ring",g,.08,p,a),this.burst(g,p,s,4),this.damageAround(g,p,_,T)})});this.bloomKick=Math.min(1.2,this.bloomKick+.18+n*.04),this.camPunch=Math.min(1,this.camPunch+.1+n*.03)}else{const g=i%2===0?1:-1,p=c+1,M=this.job.spread*1.35*m;for(let v=0;v<p;v++){const _=g>0?v:p-1-v,b=e+(_-(p-1)/2)*M;this.queueBeat(v*.02,()=>x(b,f*c/p))}for(const v of[-1,0,1])this.spawnFx("streak",h,.9,l,a,e+v*M);this.burst(h,l,s,5+n)}this.trauma=Math.min(1,this.trauma+.025+n*.006)}castSnipeShot(e,i){const n=this.classIndex,s=jt.hunter,a=Rt[1],o=this.swingFinisher,h=o?Ut.railshot:1+i*.22,l=this.job.pierce+this.extraPierce+(o?4:i),c=this.hitDamage()*(1+Ut.tierDamage*n)*h,f=this.px+Math.cos(e)*.5,u=this.pz+Math.sin(e)*.5;o?(this.spawnFx("flash",f,.9,u,a),this.burst(f,u,a,4),this.queueBeat(.14,()=>{const x=this.aimX||this.aimZ?Math.atan2(this.aimZ,this.aimX):e,g=Math.cos(x),p=Math.sin(x),M=this.px+g*.5,v=this.pz+p*.5;let _=0;for(;_<11&&!this.blocked(M+g*(_+.4),v+p*(_+.4),.15,0);)_+=.4;this.spawnFx("arc",M,.9,v,16777215,x,_),this.spawnFx("arc",M,.88,v,s,x,_),this.spawnFx("flash",M,.9,v,16777215),this.spawnFx("flash",M+g*_,.9,v+p*_,s);for(const R of[...this.enemies]){if(R.burrowed)continue;const w=R.mesh.position.x-M,A=R.mesh.position.z-v,P=w*g+A*p,z=Math.abs(-w*p+A*g);P<0||P>_||z>.45+R.r||(this.damageOne(R,R.mesh.position.x,R.mesh.position.z,c),this.burst(R.mesh.position.x,R.mesh.position.z,s,4),R.slow=Math.max(R.slow,.6))}const b=this.px-g*.4,T=this.pz-p*.4;this.blocked(b,T,.42,this.py)||(this.px=b,this.pz=T),this.burst(this.px,this.pz,14207176,4),hs(),this.trauma=Math.min(1,this.trauma+.12),this.camPunch=Math.min(1,this.camPunch+.18),this.bloomKick=Math.min(1.2,this.bloomKick+.25)})):(this.spawnBullet(f,u,e,!0,{kind:"shard",dmg:c,pierce:l,speed:this.job.bulletSpeed/mi*(1.1+i*.1)}),this.spawnFx("arc",f,.9,u,s,e,2.2+i*1.4),this.spawnFx("streak",f,this.py+.9,u,a,e),this.burst(f,u,s,3+i),this.trauma=Math.min(1,this.trauma+.025+i*.015));const d=this.wr("fang_twin");if(n===0&&!d)return;const m=(o?c/Ut.railshot:c)*(n>=2||d?.85:.55);this.queueBeat(o?.22:.08,()=>{const x=e+(i%2===0?-1:1)*.12;this.spawnBullet(this.px+Math.cos(x)*.55,this.pz+Math.sin(x)*.55,x,!0,{kind:"shard",dmg:m,pierce:n>=2||d?l+2:0,speed:this.job.bulletSpeed/mi*1.2}),this.spawnFx("streak",this.px,this.py+.9,this.pz,a,x)})}castKnight(e,i){const n=this.classIndex,s=jt.knight,a=Rt[1],o=this.swingFinisher,h=1+n+this.extraPellets,l=this.job.spread+(o?.17:.1),c=this.hitDamage()*(1+Ut.tierDamage*n)*(o?1.3:.95+i*.08)*1.6/h,f=this.px+Math.cos(e)*.6,u=this.pz+Math.sin(e)*.6,d=this.wr("soul_far"),m=x=>{for(let g=0;g<h;g++){const p=e+(g-(h-1)/2)*l;this.spawnBullet(this.px+Math.cos(p)*.62,this.pz+Math.sin(p)*.62,p,!0,{kind:"wave",dmg:c*x,pierce:this.job.pierce+this.extraPierce+(d?2:0),ttl:(.8+n*.08)*(d?1.4:1),speed:this.job.bulletSpeed/mi,y:this.py+.9})}};m(1),this.wr("soul_twin")&&this.queueBeat(.14,()=>m(.45)),this.burst(f,u,s,3+i+n),this.spawnFx("streak",f,.95,u,s,e+Math.PI/2),this.trauma=Math.min(1,this.trauma+(o?.09:.04)),o&&(this.spawnShow("rune",this.px,this.pz,s,e,.7+n*.2),this.burst(f,u,a,7+n*2),this.bloomKick=Math.min(1.2,this.bloomKick+.18),this.camPunch=Math.min(1,this.camPunch+.12+n*.03))}castDawnRush(e,i){const n=this.classIndex,s=jt.knight,a=Rt[1],o=this.swingFinisher,h=this.hitDamage()*(o?1.5:1+i*.15),l=2.4+n*.2+(o?.4:0)+(this.wr("dawn_reach")?.8:0)+Ut.pierceReach*this.bonusPierce(),c=this.wr("dawn_consecrate"),f=this.px+Math.cos(e)*l*.5,u=this.pz+Math.sin(e)*l*.5,d=[];this.damageAround(this.px,this.pz,l,h,m=>{d.push(m),this.spawnShow("sworddrop",m.mesh.position.x,m.mesh.position.z,s,e,(o?1.35:1)+n*.08,0,.22,1,m)});for(const m of d)if(n>=1&&this.queueBeat(.22,()=>{this.enemies.includes(m)&&(this.spawnShow("sworddrop",m.mesh.position.x,m.mesh.position.z,a,e+.4,.85+n*.06,0,.22,1,m),this.damageOne(m,m.mesh.position.x,m.mesh.position.z,h*.45))}),n>=2||c){const x=m.mesh.position.x,g=m.mesh.position.z;this.queueBeat(.5,()=>this.fireFields.push({x,z:g,r:.95,ttl:c?3:1.6,tick:.1,dmg:h*.15,col:16761466}))}if(n>=3&&o){const m=this.enemies.filter(x=>!d.includes(x)).map(x=>({e:x,d:Math.hypot(x.mesh.position.x-this.px,x.mesh.position.z-this.pz)})).filter(x=>x.d<6.5).sort((x,g)=>x.d-g.d).slice(0,3);for(const{e:x}of m)this.spawnShow("sworddrop",x.mesh.position.x,x.mesh.position.z,s,e,1.2,0,.22,1,x),this.queueBeat(.35,()=>{this.enemies.includes(x)&&this.damageOne(x,x.mesh.position.x,x.mesh.position.z,h*.8)})}this.spawnShow("rune",this.px,this.pz,s,e,.7+n*.15,o?10:0),this.burst(f,u,s,o?8:4),this.spawnFx("ring",f,.08,u,s),this.trauma=Math.min(1,this.trauma+(o?.1:.04)),this.camPunch=Math.min(1,this.camPunch+(o?.14:.05)),o&&(this.burst(this.px,this.pz,a,8),this.bloomKick=Math.min(1.2,this.bloomKick+.22))}}const Gc=16762024;class N_ extends z_{constructor(){super(...arguments);L(this,"capeArcs",[])}castSoulWave(e,i,n){const s=jt.knight,a=Rt[1];this.iFrames=Math.max(this.iFrames,.35+n*.16);const o=n>=1?3:1,h=2+n;this.castSpinAoE({col:s,trail:a,ticks:h,dmgTotal:i*(1.3+n*.4),maxRadius:1.7+n*.4,onTick:l=>{const c=this.heading+l/h*Math.PI*2;for(let f=0;f<o;f++){const u=c+(f-(o-1)/2)*.32;this.spawnBullet(this.px+Math.cos(u)*.7,this.pz+Math.sin(u)*.7,u,!0,{kind:"wave",dmg:i*.65,pierce:99,ttl:.9+n*.08,speed:9.6,y:this.py+.92})}}}),!(n<2)&&(this.queueBeat(this.skillSpinMax+.05,()=>{this.castSpinAoE({col:a,trail:s,ticks:3,dmgTotal:i*1.6,maxRadius:2.2,duration:.35})}),!(n<3)&&this.queueBeat(this.skillSpinMax+.05+.35+.05,()=>{this.spawnShow("pillar",this.px,this.pz,a,0,1.6),this.castSpinAoE({col:s,trail:a,ticks:3,dmgTotal:i*(2+this.job.radianceDmg),maxRadius:2.6+this.job.radianceRadius,duration:.35})}))}castRadiantRush(e,i,n){const s=jt.knight,a=Rt[1];this.iFrames=Math.max(this.iFrames,.4+n*.08);const o=3+n,h=new Set;this.castSpinAoE({col:s,trail:a,ticks:o,dmgTotal:i*(2.6+n*.9),maxRadius:1.8+n*.45,onHit:l=>{h.has(l)||(h.add(l),this.spawnShow(this.skin==="warhammer"?"meteor":"sworddrop",l.mesh.position.x,l.mesh.position.z,s,e,1.1+n*.15,0,.22,1,l))},onEnd:()=>{this.nova(this.px,this.pz,8,"wave"),n>=1&&this.fireFields.push({x:this.px,z:this.pz,r:1.6+n*.3,dmg:i*.4,ttl:1.4,tick:.3})}}),!(n<2)&&(this.queueBeat(this.skillSpinMax+.1,()=>{this.damageAround(this.px,this.pz,2.6,i*1.3),this.spawnShow("dome",this.px,this.pz,s,0,.55),this.burst(this.px,this.pz,s,14),this.camPunch=Math.min(1,this.camPunch+.3)}),!(n<3)&&this.queueBeat(this.skillSpinMax+.1+.5,()=>{this.damageAround(this.px,this.pz,3.2+this.job.radianceRadius,i*(1.6+this.job.radianceDmg)),this.spawnShow("dome",this.px,this.pz,a,0,.8),this.nova(this.px,this.pz,10,"wave"),this.burst(this.px,this.pz,a,18),this.camPunch=Math.min(1,this.camPunch+.35),this.trauma=Math.min(1,this.trauma+.2)}))}spawnAlly(e,i,n,s,a,o,h,l){const c=new Zt,f=this.mat(new at({color:16774368,transparent:!0,opacity:.9,fog:!1}));if(l==="shadow"){const u=new Zt;Xu(u,"wanderer",this.kit,this.skin);const d=new Ot(1182234).lerp(new Ot(h),.25),m=this.mat(new at({color:d,transparent:!0,opacity:.65,fog:!1,depthWrite:!1}));u.traverse(x=>{x instanceof vs?x.intensity=0:x instanceof S&&(x.material=m)}),u.scale.setScalar(.88),c.add(u)}else if(l==="turret"){const u=new S(this.sharedGeo("ally-turret-base",()=>new qt(.26,.34,.28,10)),this.mat(new at({color:h,fog:!1})));u.position.y=.14,c.add(u);const d=new S(this.sharedGeo("ally-turret-core",()=>new Se(.17,0)),f);d.position.y=.42,c.add(d)}else{const u=this.mat(new at({color:2168112,transparent:!0,opacity:.94,fog:!1})),d=new S(this.sharedGeo("ally-wraith-robe",()=>new te(.22,.85,10)),u);d.position.y=.68,c.add(d);const m=new S(this.sharedGeo("ally-wraith-cloak",()=>new te(.32,.3,10)),u);m.position.y=.9,c.add(m);const x=this.mat(new at({color:h,transparent:!0,opacity:.95,fog:!1}));for(const p of[-1,1]){const M=new S(this.sharedGeo("ally-wraith-eye",()=>new wt(.045,6,6)),x);M.position.set(p*.07,.86,.17),c.add(M)}const g=new S(this.sharedGeo("ally-wraith-core",()=>new Se(.1,0)),f);g.position.y=1.18,c.add(g)}c.position.set(e,0,i),this.scene.add(c),this.allies.push({mesh:c,x:e,z:i,ttl:n,fireCd:.25,rate:a,dmg:s,range:o,col:h,kind:l}),this.spawnFx("flash",e,.9,i,h)}stepAllies(e){for(let i=this.allies.length-1;i>=0;i--){const n=this.allies[i];if(n.ttl-=e,n.fireCd-=e,n.kind==="shadow"){const s=this.px-this.aimX*1.15,a=this.pz-this.aimZ*1.15;n.x+=(s-n.x)*Math.min(1,e*5),n.z+=(a-n.z)*Math.min(1,e*5)}else if(n.kind==="wraith"){const s=this.nearestEnemy(n.x,n.z,n.range*1.8),a=s?s.mesh.position.x:this.px,o=s?s.mesh.position.z:this.pz,h=s?n.range*.55:2,l=Math.hypot(a-n.x,o-n.z);if(l>h){const c=Math.atan2(o-n.z,a-n.x),f=Math.min(l-h,e*(s?3.2:2.4));n.x+=Math.cos(c)*f,n.z+=Math.sin(c)*f,n.mesh.rotation.y=Math.PI/2-c}}if(n.mesh.position.set(n.x,Math.sin(this.clock*3+n.x*2)*.06,n.z),n.kind==="wraith"){const s=1+Math.sin(this.clock*3.5+n.x*3)*.12;n.mesh.scale.setScalar(s)}else n.mesh.rotation.y+=e*1.1;if(n.fireCd<=0){const s=this.nearestEnemy(n.x,n.z,n.range);if(s){n.fireCd=n.rate;const a=Math.atan2(s.mesh.position.z-n.z,s.mesh.position.x-n.x);this.spawnBullet(n.x,n.z,a,!0,{kind:"bolt",dmg:n.dmg,pierce:0,ttl:1.6,y:.85,speed:13}),this.spawnFx("streak",n.x,.85,n.z,n.col,a)}}n.ttl<=0&&(this.scene.remove(n.mesh),this.allies.splice(i,1))}}castActive(){if(!this.alive||this.skillCd>0)return;const e=Zc(this.runJob,this.classIndex,this.skin);this.skillCd=Math.max(2,e.cd-this.job.yCdReduction),this.skillMax=this.skillCd,this.attackT=1,this.skillSpinMax=.5,this.skillSpinT=this.skillSpinMax,Yf(this.runJob);const i=this.classIndex;Ys(40+i*28,.3+i*.2);const n=this.worldAim(),s=Math.atan2(n.z,n.x),a=this.hitDamage();this.runJob==="wanderer"&&this.skin==="arrowbolt"?this.castAssaulter(s,a,i):this.runJob==="wanderer"?this.castLanternRift(s,n,a,i):this.runJob==="arcanist"&&this.skin==="prismshard"?this.castSoulHarvest(s,a,i):this.runJob==="arcanist"?this.castPrismFall(s,n,a,i):this.runJob==="reaper"&&this.skin==="twindaggers"?this.castBloodImpale(s,a,i):this.runJob==="reaper"?this.castHarvest(s,n,a,i):this.runJob==="knight"&&this.skin==="dawnedge"?this.castRadiantRush(s,a,i):this.runJob==="knight"?this.castSoulWave(s,a,i):this.runJob==="hunter"&&this.skin==="twinfang"?this.castPiercingSnipe(s,a,i):this.castShardStorm(s,n,a,i),this.pushHud(e.name)}castSpinAoE(e){const{col:i,trail:n,ticks:s,onHit:a,onTick:o,onEnd:h}=e,l=e.maxRadius*Ut.spinRadius,c=e.dmgTotal*Ut.spinDamage,f=e.duration??this.skillSpinMax;this.skillSpinMax=f,this.skillSpinT=f,this.spawnFx("flash",this.px,1.1,this.pz,i),this.bloomKick=Math.min(1.2,this.bloomKick+.25);const u=c/s;for(let d=0;d<s;d++){const m=(d+1)/s,x=d===s-1,g=l*(.7+m*.3);this.queueBeat(f*m*.92,()=>{const p=Math.atan2(this.aimZ,this.aimX),M=this.capeSweepTargets(g,p);this.spawnCapeArc(g,p,x?n:i,x),Zf(x),x&&Xh("sweep");for(const v of M)this.damageOne(v,this.px,this.pz,u,_=>a==null?void 0:a(_,d));if(this.burst(this.px+Math.cos(p)*g*.5,this.pz+Math.sin(p)*g*.5,i,x?10:5),this.trauma=Math.min(1,this.trauma+(x?.14:.06)),x&&c>0)for(const v of M){if(v.bossId||v.burrowed||!this.enemies.includes(v))continue;const _=v.mesh.position.x-this.px,b=v.mesh.position.z-this.pz,T=Math.hypot(_,b);if(T<.01)continue;const R=Ut.spinKnockback*(1-T/(g+v.r)*.5),w=v.mesh.position.x+_/T*R,A=v.mesh.position.z+b/T*R;this.blocked(w,A,.4,0)||v.mesh.position.set(w,v.mesh.position.y,A)}o==null||o(d,g)})}this.camPunch=Math.min(1,this.camPunch+.4),this.hitstop=Math.max(this.hitstop,.05),h&&this.queueBeat(f,h)}capeSweepTargets(e,i){const n=[];for(const s of this.enemies){if(s.burrowed)continue;const a=s.mesh.position.x-this.px,o=s.mesh.position.z-this.pz,h=Math.hypot(a,o);if(!(h>e+s.r)){if(h>Ut.spinCloseReach+s.r){let l=Math.atan2(o,a)-i;if(l=((l+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,Math.abs(l)>Ut.spinArc/2+Math.atan2(s.r,Math.max(h,.01)))continue}n.push(s)}}return n}spawnCapeArc(e,i,n,s){let a=this.capeArcs.find(o=>o.t>=o.max);if(!a){const o=this.mat(new at({color:n,transparent:!0,opacity:.7,depthWrite:!1,fog:!1,side:$t})),h=new S(this.sharedGeo("cape-arc",()=>new Ne(.18,1,36,1,-2.6/2,Ut.spinArc)),o);h.rotation.x=-Math.PI/2;const l=this.mat(new at({color:2363436,transparent:!0,opacity:.9,depthWrite:!1,fog:!1,side:$t})),c=new S(this.sharedGeo("cape-arc-edge",()=>new Ne(.9,1.05,36,1,-2.6/2,Ut.spinArc)),l);c.rotation.x=-Math.PI/2,c.position.y=.005;const f=new Zt;f.add(h,c),f.renderOrder=3,this.scene.add(f),a={mesh:f,t:0,max:.26,r:1,mat:o,edge:l},this.capeArcs.push(a)}a.mat.color.setHex(n),a.mesh.parent||this.scene.add(a.mesh),a.t=0,a.max=s?.34:.24,a.r=e,a.mesh.visible=!0,a.mesh.position.set(this.px,this.py+.07,this.pz),a.mesh.scale.setScalar(e*.86),a.mesh.rotation.y=-i}stepCapeArcs(e){for(const i of this.capeArcs){if(i.t>=i.max)continue;i.t+=e;const n=Math.min(1,i.t/i.max);i.mesh.scale.setScalar(i.r*(.86+.14*n)),i.mat.opacity=.7*(1-n*n),i.edge.opacity=.9*(1-n*n),i.mesh.position.set(this.px,this.py+.07,this.pz),n>=1&&(i.mesh.visible=!1)}}castAssaulter(e,i,n){const s=jt.wanderer,a=Rt[1],o=()=>this.castSpinAoE({col:s,trail:a,ticks:2+n,dmgTotal:i*(2.6+n*.9),maxRadius:1.5+n*.3,onHit:f=>{this.isBackstab(f,e)&&(this.spawnFx("flash",f.mesh.position.x,1.05,f.mesh.position.z,16773296),this.burst(f.mesh.position.x,f.mesh.position.z,16773296,5))}}),h=this.enemyOnLine(e,5.5+n*1.2,.95);let l=0,c=null;if(h){c=h.e;const f=Math.atan2(h.e.mesh.position.z-this.pz,h.e.mesh.position.x-this.px);this.spawnShow("clone",this.px,this.pz,s,f,.85+n*.15),l=this.startLunge(f,Math.min(8,h.d+h.e.r+1.3),!1),this.lungeFinisher=!1,this.lungeDmg=i*.8,this.iFrames=Math.max(this.iFrames,l+.3),this.spawnFx("arc",this.px,.9,this.pz,s,f,h.d+h.e.r+1.3)}this.queueBeat(l,o),!(n<2)&&this.queueBeat(l+this.skillSpinMax+.06,()=>{let f=null,u=4;for(const m of this.enemies){if(m===c||!m.mesh.visible)continue;const x=Math.hypot(m.mesh.position.x-this.px,m.mesh.position.z-this.pz);x<u&&(u=x,f=m)}let d=0;if(f){const m=Math.atan2(f.mesh.position.z-this.pz,f.mesh.position.x-this.px);d=this.startLunge(m,Math.min(6,u+f.r+1.2),!1),this.lungeFinisher=!1,this.lungeDmg=i*.6,this.iFrames=Math.max(this.iFrames,d+.2)}this.queueBeat(d,()=>this.castSpinAoE({col:a,trail:s,ticks:1,dmgTotal:i*1.8,maxRadius:1.6,duration:.32})),!(n<3)&&this.queueBeat(d+.32,()=>{this.spawnAlly(this.px,this.pz,7+this.job.shadeTtl,i*(.55+this.job.shadeDmg),.8,8,s,"shadow")})})}castLanternRift(e,i,n,s){const a=jt.wanderer,o=Rt[1];if(this.castSpinAoE({col:a,trail:o,ticks:2+s,dmgTotal:n*(2.2+s*.85),maxRadius:1.7+s*.5,onTick:()=>this.nova(this.px,this.pz,3+s*2,"bolt")}),s===0){this.trauma=Math.min(1,this.trauma+.05);return}this.spawnShow("clone",this.px,this.pz,a,this.heading,.7+s*.25),this.echoT=.36+s*.08,this.echoX=this.px,this.echoZ=this.pz,!(s<2)&&(this.queueBeat(this.skillSpinMax+.05,()=>{this.spawnShow("pillar",this.px,this.pz,a,0,1.7),this.castSpinAoE({col:o,trail:a,ticks:2,dmgTotal:n*2.4,maxRadius:2.5,duration:.4})}),!(s<3)&&this.spawnAlly(this.px,this.pz,7.5+this.job.shadeTtl,n*(.5+this.job.shadeDmg),.85,8,a,"shadow"))}castSoulHarvest(e,i,n){const s=jt.arcanist,a=Rt[1];for(let o=0;o<6;o++){const h=e+o/6*Math.PI*2;this.plantThorn(this.px+Math.cos(h)*1.7,this.pz+Math.sin(h)*1.7)}this.castSpinAoE({col:s,trail:a,ticks:2,dmgTotal:i*1.2,maxRadius:1.7}),this.queueBeat(this.skillSpinMax*.9,()=>{const o=this.thorns.map(c=>({x:c.x,z:c.z}));this.clearThorns();const h=1.3+(n>=1?.45:0),l=i*(1.5+n*.3);for(const c of o)this.thornBurst(c.x,c.z,h,l,n>=1,s);if(o.length&&(this.trauma=Math.min(1,this.trauma+.25),this.camPunch=Math.min(1,this.camPunch+.35),this.hitstop=Math.max(this.hitstop,.05)),n>=2)for(const c of o.slice(0,8))for(let f=0;f<3;f++){const u=Math.random()*Math.PI*2;this.rootLine(c.x,c.z,u,2.5,i*.4,new Set,.6,(d,m,x)=>this.plantThorn(m,x))}n>=3&&this.queueBeat(.35,()=>{const c=h+.6+this.job.ascendRadius*.5,f=l*(.8+this.job.ascendPower);for(const u of o)this.thornBurst(u.x,u.z,c,f,!0,a);this.trauma=Math.min(1,this.trauma+.3)})})}thornBurst(e,i,n,s,a,o){this.spawnShow("pillar",e,i,o,0,.45),this.spawnFx("shock",e,.08,i,o),this.burst(e,i,Rt[Math.floor(Math.random()*3)],5),this.damageAround(e,i,n,s,h=>{a&&(h.slow=Math.max(h.slow,2))})}castPrismFall(e,i,n,s){const a=jt.arcanist,o=Rt[1];if(this.iFrames=Math.max(this.iFrames,.4+s*.22),this.castSpinAoE({col:a,trail:o,ticks:2+s,dmgTotal:n*(2+s*.9),maxRadius:1.7+s*.5,onEnd:()=>{const h=1.6+s*.4+this.job.ascendRadius,l=3+s*2;for(let c=0;c<l;c++){const f=e+c/l*Math.PI*2,u=this.px+Math.cos(f)*h,d=this.pz+Math.sin(f)*h;this.spawnShow("rune",u,d,Gc,0,.7),this.fireFields.push({x:u,z:d,r:1.1,ttl:1.4+s*.3,tick:.3,dmg:n*(.18+s*.04)})}this.burst(this.px,this.pz,Gc,10),this.nova(this.px,this.pz,5,"orb"),s>=3&&(this.nova(this.px,this.pz,Math.round(6*(1+this.job.ascendPower)),"orb"),this.bloomKick=Math.min(1.2,this.bloomKick+.25))}}),s===0){this.trauma=Math.min(1,this.trauma+.05);return}this.ward=Math.max(this.ward,1),this.petBoost=8+s*4,this.petFire=0,this.spawnShow("rune",this.petX,this.petZ,zi.summon.color,0,.9+s*.3),this.spawnShow("pillar",this.petX,this.petZ,zi.summon.color,0,.55+s*.35)}castBloodImpale(e,i,n){const s=jt.reaper,a=Rt[1],o=this.maxHp>0?this.hp/this.maxHp:1,h=1+Math.max(0,.5-o)*1.5,l=3+n,c=i*(2.6+n*.9)*h,f=c/l;let u=0;this.castSpinAoE({col:s,trail:a,ticks:l,dmgTotal:c,maxRadius:1.4+n*.32,onHit:d=>{u+=f,this.markEnemy(d,!0)},onEnd:()=>{if(u<=0)return;const d=Math.min(u*(.16+n*.05),this.maxHp-this.hp);d>0&&(this.hp+=d),this.spawnFx("ring",this.px,.08,this.pz,a)}}),!(n<2)&&this.queueBeat(this.skillSpinMax+.08,()=>{this.castSpinAoE({col:a,trail:s,ticks:2,dmgTotal:i*1.7*h,maxRadius:1.6+n*.2,duration:.3,onHit:d=>this.markEnemy(d,!0)})})}castHarvest(e,i,n,s){const a=jt.reaper,o=Rt[1],h=3+s;this.castSpinAoE({col:a,trail:o,ticks:h,dmgTotal:n*(2.4+s*.9),maxRadius:1.5+s*.35,onTick:l=>{this.spawnShow("crescent",this.px,this.pz,a,this.heading+l/h*Math.PI*2,1.1+s*.2,3.2)}}),s!==0&&(this.rageLeft=Math.max(this.rageLeft,2.4+s*1.4),this.ensureAura(),!(s<2)&&(this.iFrames=Math.max(this.iFrames,.5),this.queueBeat(this.skillSpinMax+.05,()=>{this.hp=Math.min(this.overshield?this.maxHp*1.2:this.maxHp,this.hp+14),this.spawnShow("pillar",this.px,this.pz,a,0,1.85),this.castSpinAoE({col:o,trail:a,ticks:3,dmgTotal:n*2.2,maxRadius:2.4,duration:.4})})))}castPiercingSnipe(e,i,n){const s=jt.hunter,a=Rt[1],o=this.job.bulletSpeed/mi*1.6,h=3+n*2,l=n>=1;this.castSpinAoE({col:s,trail:a,ticks:h,dmgTotal:0,maxRadius:1.4,onTick:c=>{const f=this.heading+c/h*Math.PI*2;if(this.spawnBullet(this.px+Math.cos(f)*.6,this.pz+Math.sin(f)*.6,f,!0,{kind:"shard",dmg:i*(1.7+n*.3),pierce:99,speed:o,ttl:1.6}),this.spawnFx("streak",this.px,this.py+.9,this.pz,s,f),l){const u=f+Math.PI/h;this.spawnBullet(this.px+Math.cos(u)*.6,this.pz+Math.sin(u)*.6,u,!0,{kind:"shard",dmg:i*1.3,pierce:99,speed:o,ttl:1.6}),this.spawnFx("streak",this.px,this.py+.9,this.pz,a,u)}}}),!(n<2)&&(this.queueBeat(this.skillSpinMax+.1,()=>{this.castSpinAoE({col:a,trail:s,ticks:h,dmgTotal:0,maxRadius:1.4,duration:.35,onTick:c=>{const f=this.heading+c/h*Math.PI*2+Math.PI/h;this.spawnBullet(this.px+Math.cos(f)*.6,this.pz+Math.sin(f)*.6,f,!0,{kind:"shard",dmg:i*1.4,pierce:99,speed:o,ttl:1.6})}})}),!(n<3)&&this.queueBeat(this.skillSpinMax+.1+.35,()=>{this.spawnAlly(this.px,this.pz,7+this.job.sentryTtl,i*(.6+this.job.sentryDmg),.6,9,s,"turret")}))}castShardStorm(e,i,n,s){const a=jt.hunter,o=Rt[1],h=3+s*3;this.castSpinAoE({col:a,trail:o,ticks:h,dmgTotal:0,maxRadius:1.6+s*.3,onTick:l=>{const c=this.heading+l/h*Math.PI*2,f=1.6+s*.6,u=this.px+Math.cos(c)*f,d=this.pz+Math.sin(c)*f;this.spawnShow("drop",u,d,a,c,.7+s*.3),this.spawnBullet(u,d,c,!0,{kind:"shard",dmg:n*(.85+s*.2),pierce:s,ttl:.5+s*.1})}}),s!==0&&(this.markLeft=3+s*2,this.ensureMark(),!(s<2)&&(this.queueBeat(this.skillSpinMax+.1,()=>{const l=this.px,c=this.pz;for(let f=0;f<8;f++){const u=f/8*Math.PI*2;this.spawnShow("drop",l+Math.cos(u)*1.8,c+Math.sin(u)*1.8,a,u,1.15)}this.damageAround(l,c,2.4,n*1.6),this.impact(l,c,a,!0),this.hitstop=Math.max(this.hitstop,.05),this.trauma=Math.min(1,this.trauma+.2),this.camPunch=Math.min(1,this.camPunch+.9)}),!(s<3)&&this.queueBeat(this.skillSpinMax+.1+.1,()=>{this.spawnAlly(this.px,this.pz,7+this.job.sentryTtl,n*(.6+this.job.sentryDmg),.6,9,a,"turret")})))}}class F_ extends N_{stepCurse(t,e){if(t.curse<=0||this.bossShielded(t))return;const i=this.hitDamage()*.32*t.curse*e;t.hp-=i,t.curseTtl-=e,t.curseTtl<=0&&(t.curse=0),t.hp<=0&&this.killEnemy(t)}killEnemy(t){var s,a,o,h;if(!this.enemies.includes(t))return;if(ia(),this.killRelics(t),this.lungeLeft>0&&this.wr("spin_momentum")&&(this.fireCd=0,this.spawnFx("ring",this.px,.08,this.pz,16773296)),this.kills+=1,this.unbanked.kills+=1,(s=t.affixes)!=null&&s.length&&(this.unbanked.elites+=1),t.bossId&&this.unbanked.bosses.push(t.bossId),this.addMastery(t.bossId?zs.boss:(a=t.affixes)!=null&&a.length?zs.elite:zs.foe),this.logKill(),Ys(50,.35),t.bossId){const l=Ji[t.bossId];this.hitstop=Math.max(this.hitstop,.35),this.trauma=1,this.bloomKick=Math.min(1.2,this.bloomKick+.6),Ys(400,1);for(const c of this.eBullets)c.live=!1,c.mesh.visible=!1;this.spawnShow("pillar",t.mesh.position.x,t.mesh.position.z,l,0,2),this.spawnFx("shock",t.mesh.position.x,.08,t.mesh.position.z,l),this.spawnFx("ring",t.mesh.position.x,.08,t.mesh.position.z,16777215);for(let c=0;c<3;c++)this.burst(t.mesh.position.x,t.mesh.position.z,c===1?16777215:l,8)}this.runJob==="reaper"&&this.classIndex>=3&&Math.random()<.28+this.job.raiseChance&&this.allies.filter(c=>c.kind==="wraith").length<10&&this.spawnAlly(t.mesh.position.x,t.mesh.position.z,14+this.job.wraithTtl,this.hitDamage()*(.5+this.job.wraithDmg),.8,7,jt.reaper,"wraith");const e=this.maxHp*Ut.killHealPerSec;this.killHealPool=Math.min(e,this.killHealPool+(this.clock-this.killHealAt)*e),this.killHealAt=this.clock;const i=Math.min(this.killHealPool,this.leech+(this.swapLeft>0&&this.runJob==="reaper"?4:0));if(i>0){this.killHealPool-=i;const l=this.overshield?this.maxHp*1.2:this.maxHp;this.hp=Math.min(l,this.hp+i)}const n=t.bossId?140:t.kind==="skitter"?5:t.kind==="mire"?26:t.kind==="bell"?22:t.kind==="wight"?80:t.kind==="anchor"?30:t.kind==="husk"||t.kind==="bulwark"?26:t.kind==="wraith"||t.kind==="acolyte"||t.kind==="binder"||t.kind==="gazer"?24:t.kind==="ghost"?18:t.kind==="cinder"?10:12;if(this.spawnShard(t.mesh.position.x,t.mesh.position.z,n),this.impact(t.mesh.position.x,t.mesh.position.z,t.bossId?Rt[3]:Ce[t.kind],!0),this.spawnFx("flash",t.mesh.position.x,1.1,t.mesh.position.z,16777215),Jf(),Xh(t.bossId?"boss":"kill"),this.feedPet(t.bossId?22:t.kind==="skitter"?1:t.kind==="mire"||t.kind==="bell"?4:t.kind==="wight"?14:t.kind==="anchor"?6:t.kind==="ghost"||t.kind==="wraith"||t.kind==="acolyte"||t.kind==="husk"||t.kind==="binder"||t.kind==="bulwark"||t.kind==="gazer"?4:t.kind==="cinder"?2:3),An(t.bossId?16:t.kind==="skitter"?0:t.kind==="mire"||t.kind==="bell"?2:t.kind==="wight"?8:t.kind==="anchor"?4:t.kind==="ghost"||t.kind==="wraith"||t.kind==="acolyte"||t.kind==="husk"||t.kind==="binder"||t.kind==="bulwark"||t.kind==="gazer"?2:(t.kind==="cinder",1)),(this.job.killBurst>0||this.relicSplinter)&&this.nova(t.mesh.position.x,t.mesh.position.z,5,"bolt"),this.addCorpse(t.mesh,this.px,this.pz,t.bossId?"fall":Kf(t.kind),t.bossId?Rt[3]:Ce[t.kind]),this.enemies=this.enemies.filter(l=>l!==t),t.kind==="mire"&&this.burstBrood(t.mesh.position.x,t.mesh.position.z,3,Ce.mire),(o=t.affixes)!=null&&o.includes("splitting")&&this.burstBrood(t.mesh.position.x,t.mesh.position.z,Ut.splittingBrood,$i.splitting.color),(h=t.affixes)!=null&&h.includes("volatile")){const l=t.mesh.position.x,c=t.mesh.position.z,f=$i.volatile.color;this.spawnShow("warn",l,c,f,0,Ut.volatileRadius),$f(),this.queueBeat(Ut.volatileDelay,()=>{this.spawnShow("dome",l,c,f,0,1.3),hs(),this.spawnFx("shock",l,.08,c,f),this.burst(l,c,f,14),this.trauma=Math.min(1,this.trauma+.3),Math.hypot(this.px-l,this.pz-c)<Ut.volatileRadius&&this.hurt(Ut.volatileDamage,l,c)})}this.roomIsBoss?this.enemies.length===0&&this.onClear():(this.roomKills+=1,this.pushHud(),this.roomKills>=this.roomTarget&&this.onClear())}advanceRoom(){const t=tn(this.room);if(this.room+=1,t.kind==="boss")this.swapRoom();else{const e=qs[we(this.room)];this.floorMat&&this.floorMat.color.setHex(e.floor)}tn(this.room).kind==="boss"?this.queueBeat(1.1,()=>this.spawnWave()):this.queueBeat(Ut.sigilDelay,()=>this.offerRooms())}swapRoom(){const t=qs[we(this.room)];this.floorMat&&this.floorMat.color.setHex(t.floor),we(this.room)!==we(this.room-1)&&this.retextureAct(we(this.room)),this.dressLayout(this.room);for(const n of this.enemies)this.scene.remove(n.mesh);this.enemies=[];for(const n of[...this.bullets,...this.eBullets])n.live=!1,n.mesh.visible=!1;this.fireFields=[],this.clearThorns();let e=0;for(const n of this.shards)n.live&&(e+=n.xp,n.live=!1,this.scene.remove(n.mesh));if(this.shards=[],e&&(this.addXp(e),$c()),this.blocked(this.px,this.pz,.45)){const n=Fi(this.px,this.pz,.45,this.walls);this.px=n.x,this.pz=n.z}this.safeX=this.px,this.safeZ=this.pz,this.py=Cn(this.px,this.pz,this.plats),this.dashLeft=0,this.player.position.set(this.px,this.py,this.pz);let i=0;for(const n of this.allies){if(n.kind==="turret"&&!this.blocked(n.x,n.z,.35))continue;const s=i++*2.4,a=n.kind==="turret"?{x:n.x,z:n.z}:{x:this.px+Math.cos(s)*1.6,z:this.pz+Math.sin(s)*1.6},o=this.blocked(a.x,a.z,.35)?Fi(a.x,a.z,.35,this.walls):a;n.x=o.x,n.z=o.z,n.mesh.position.set(n.x,0,n.z)}this.petX=this.px+1.4,this.petZ=this.pz}resolvePendingRelicUi(){const t=de.getState();t.setPendingRelicCount(this.pendingRelics.length+this.pendingPetTalents.length),t.setPendingKind(this.pendingRelics.length?"relic":"pet"),t.setUpgrades(this.pendingRelics[0]??this.pendingPetTalents[0]??[]),t.setReroll(this.pendingRelics.length?{free:this.freeRerolls,cost:Ra}:null)}killRelics(t){const e=t.mesh.position.x,i=t.mesh.position.z,n=this.hitDamage();if(this.rares.has("kindling")&&this.fireFields.push({x:e,z:i,r:1.1,ttl:2,tick:.1,dmg:n*.25,col:16756848}),this.rares.has("chainreact")&&!t.bossId){const s=Math.min(t.maxHp*.4,n*3);this.queueBeat(.08,()=>{this.spawnFx("shock",e,.08,i,16765088),Yr(),this.burst(e,i,16765088,6),this.damageAround(e,i,2,s)})}this.rares.has("bloodrush")&&(this.rushStacks=Math.min(5,this.rushStacks+1),this.rushT=3)}onHurt(){if(!this.rares.has("thunderguard"))return;const t=this.enemies.filter(i=>!i.bossId||!this.bossShielded(i)).map(i=>({e:i,d:Math.hypot(i.mesh.position.x-this.px,i.mesh.position.z-this.pz)})).filter(i=>i.d<6).sort((i,n)=>i.d-n.d).slice(0,3),e=this.hitDamage()*2;t.length&&Yr();for(const{e:i}of t){const n=i.mesh.position.x,s=i.mesh.position.z;this.spawnFx("streak",n,2.2,s,Rt[2],-Math.PI/2),this.spawnFx("flash",n,1,s,16777215),this.damageOne(i,n,s,e)}}dashRelics(){if(!this.rares.has("stormstep"))return;let t=null,e=9;for(const n of this.enemies){const s=Math.hypot(n.mesh.position.x-this.px,n.mesh.position.z-this.pz);s<e&&(e=s,t=n)}if(!t)return;const i=Math.atan2(t.mesh.position.z-this.pz,t.mesh.position.x-this.px);this.launchChainBolt(i,this.hitDamage()*1.2,3,16),Yr()}rollRelicCards(t,e=!1){var c;const i=new Set(this.relics),n=Object.values(wo).filter(f=>!i.has(f.title)),s=n.length>=this.relicCards?n:Object.values(wo);vo(s,"relics");const a=s.slice(0,this.relicCards),o=new Set(this.pendingRelics.flat().map(f=>f.id)),h=Mh.filter(f=>f.skin===this.skin&&!this.wrelics.has(f.id)&&!o.has(f.id));if(h.length&&(t||ze("relics")<Ut.weaponRelicChance)){const f=h[Math.floor(ze("relics")*h.length)];a[Math.floor(ze("relics")*a.length)]={id:f.id,title:f.title,body:f.body,tag:`${((c=Yc(f.skin))==null?void 0:c.name)??"Weapon"} relic`}}const l=Qc.filter(f=>!this.rares.has(f.id)&&!o.has(f.id));if(l.length&&(e||ze("relics")<Ut.rareRelicChance)){const f=a.map((d,m)=>Qf.has(d.id)?-1:m).filter(d=>d>=0),u=f[Math.floor(ze("relics")*f.length)];u!==void 0&&(a[u]=l[Math.floor(ze("relics")*l.length)])}return a.map(f=>{const u=__(f.id);if(!u)return f;const d=ei[u];return{...f,set:{name:d.name,color:d.color,have:d.members.filter(m=>this.heldIds.includes(m)).length,size:d.members.length}}})}rerollRelic(){if(this.pendingRelics.length){if(this.freeRerolls>0)this.freeRerolls-=1;else if(Be().ash>=Ra)So(Ra);else{this.pushHud("Not enough Ash to reroll");return}this.pendingRelics[0]=this.rollRelicCards(!1),jf(),this.resolvePendingRelicUi()}}onClear(){if(this.roomCleared)return;if(this.roomCleared=!0,this.runCleared+=1,!this.endless){const e=Be(),i=Math.min(dl,this.room+1);i>e.bestRoom&&(e.bestRoom=i,Pn(e))}if(this.addMastery(zs.chamber),this.bankRun(),jc(),this.addXp(40+this.room*12),this.feedPet(10+this.room*2),An(Ut.clearAshBase+this.room+this.curseAsh),this.room>=dl&&!this.endless){this.alive=!1,this.endRun(!0),this.finishRunLog("won"),this.summarize(!0),de.getState().setScreen("victory");return}if(this.room===td){const e=Be();e.jobs[this.runJob].cleared=!0,Pn(e)}if(ed(this.room)){this.choosing=!0,this.paused=!0,this.endRun(!1);const e=vo(Object.values(yo),"boons");de.getState().setUpgrades(e.slice(0,3)),de.getState().setScreen("rest"),this.pushHud(`${Mo[we(this.room)-1]} falls. The rift opens.`);return}const t=tn(this.room).kind;this.pendingRelics.push(this.rollRelicCards(t==="elite")),ds("relic"),t==="vault"&&this.pendingRelics.push(this.rollRelicCards(!1,!0)),this.resolvePendingRelicUi(),this.advanceRoom(),this.pushHud(this.pendingRelics.length>1?`Chamber cleared — ${this.pendingRelics.length} relics waiting`:"Chamber cleared — relic waiting")}}class U_ extends F_{constructor(){super(...arguments);L(this,"blades",[]);L(this,"caveIns",!1);L(this,"caveNext",0);L(this,"crack",null);L(this,"reliquary",null);L(this,"secretActs",new Set);L(this,"championPending",!1);L(this,"championActs",new Set);L(this,"spikeBit",new Map)}roomRand(e){let i=(Math.imul(this.room+1,2654435761)^Math.imul(this.runSeed,40503)^Math.imul(e,97))>>>0;return i=Math.imul(i^i>>>15,2246822507)>>>0,i=Math.imul(i^i>>>13,3266489909)>>>0,((i^i>>>16)>>>0)/4294967296}dressLayout(e){super.dressLayout(e),this.layoutFeatures(e)}clearFeatures(){for(const e of this.blades)this.scene.remove(e.group),this.scene.remove(e.track);this.blades=[],this.crack&&this.scene.remove(this.crack.group),this.reliquary&&this.scene.remove(this.reliquary.group),this.crack=null,this.reliquary=null,this.caveIns=!1,this.spikeBit.clear()}layoutFeatures(e){if(this.clearFeatures(),this.practiceSkin||tn(e).kind==="boss")return;const i=we(e);if(e>1&&this.roomRand(1)<.3+i*.05){const n=i>=3&&this.roomRand(2)<.5?2:1;for(let s=0;s<n;s++)this.placeBlade(10+s)}this.caveIns=i>=2&&this.roomRand(3)<.25,this.caveNext=3,!this.secretActs.has(i)&&e>1&&this.roomRand(4)<.22&&this.placeCrack(),this.championPending=e>2&&!this.championActs.has(i)&&this.roomRand(5)<.16}spawnFromQueue(){var n;const e=this.enemies.length;if(super.spawnFromQueue(),!this.championPending||this.enemies.length<=e)return;const i=this.enemies[e];i.kind==="skitter"||i.kind==="cinder"||i.kind==="anchor"||i.kind==="burrower"||(n=i.affixes)!=null&&n.length||(this.championPending=!1,this.makeChampion(i))}makeChampion(e){const i=["Grael","Morrow","Vesh","Ilka","Dunmere","Ketch","Ashlin","Harrow","Wren","Sorrel"],n=["quake","volley","brood"],s=n[Math.floor(this.roomRand(6)*n.length)],a=s==="quake"?"the Quaking":s==="volley"?"the Many-Eyed":"the Teeming",o=`${i[Math.floor(this.roomRand(7)*i.length)]} ${a}`;e.champion={name:o,move:s,cd:3},e.hp=e.maxHp=Math.round(e.maxHp*5),e.size=1.5,this.giveAffixes(e,1);const h=new S(this.sharedGeo("champ-crown",()=>new ie(.32,.05,6,20)),this.mat(new at({color:16765562,fog:!1})));h.rotation.x=Math.PI/2,h.position.y=2.2,h.name="champion-crown",e.mesh.add(h),this.spawnFx("shock",e.mesh.position.x,.08,e.mesh.position.z,16765562),id(),this.pushHud(`A champion: ${o}!`)}stepChampions(e){for(const i of this.enemies){const n=i.champion;if(!n)continue;const s=i.mesh.getObjectByName("champion-crown");if(s&&(s.rotation.z+=e*1.5),i.spawnGrace>0||(i.frozen??0)>0||(n.cd-=e,n.cd>0))continue;const a=i.mesh.position.x,o=i.mesh.position.z,h=we(this.room);if(n.move==="quake"){n.cd=5;const l=2.8;i.telegraph=i.telegraphMax=1,this.spawnShow("warn",a,o,16765562,0,l,0,.22,1,void 0,1),this.queueBeat(1,()=>{if(!this.enemies.includes(i))return;const c=i.mesh.position.x,f=i.mesh.position.z;if(this.spawnFx("shock",c,.08,f,16765562),this.spawnFx("ring",c,.08,f,16777215),this.burst(c,f,9075338,12),hs(),this.trauma=Math.min(1,this.trauma+.25),Math.hypot(this.px-c,this.pz-f)<l){this.hurt(18+h*3,c,f);const u=Math.atan2(this.pz-f,this.px-c);this.knockX=Math.cos(u)*7,this.knockZ=Math.sin(u)*7}})}else n.move==="volley"?(n.cd=4,i.telegraph=i.telegraphMax=.6,this.queueBeat(.6,()=>{if(!this.enemies.includes(i))return;const l=Math.random()*Math.PI;for(let c=0;c<10;c++){const f=l+c/10*Math.PI*2;this.spawnBullet(i.mesh.position.x+Math.cos(f)*.6,i.mesh.position.z+Math.sin(f)*.6,f,!1,{dmg:8+h*2})}this.spawnFx("flash",i.mesh.position.x,1.2,i.mesh.position.z,16765562)})):(n.cd=7,i.telegraph=i.telegraphMax=.5,this.queueBeat(.5,()=>{this.enemies.includes(i)&&this.enemies.length<16&&this.burstBrood(i.mesh.position.x,i.mesh.position.z,2,16765562)}))}}refreshSets(){const e=v_(this.heldIds);for(const i of ya){const n=w_(e[i]);if(n>(this.setTier[i]??0)){const s=ei[i];this.pushHud(`${s.name} set (${n}): ${n===3?s.three:s.two}`),this.spawnFx("ring",this.px,.08,this.pz,s.color),i==="hearth"&&n===2&&(this.hp=Math.min(this.maxHp+20,this.hp+20))}this.setTier[i]=n}}onClear(){super.onClear(),this.setOn("hearth",3)&&this.alive&&(this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.2),this.spawnFx("ring",this.px,.08,this.pz,ei.hearth.color))}killEnemy(e){const i=e.champion&&this.enemies.includes(e)?e.champion:null,n=this.enemies.includes(e),s=e.mesh.position.x,a=e.mesh.position.z,o=e.slow>0;if(super.killEnemy(e),n&&(this.setOn("pyre",3)&&(this.spawnFx("shock",s,.08,a,ei.pyre.color),this.burst(s,a,ei.pyre.color,this.lite?3:6),this.damageAround(s,a,1.4,this.hitDamage()*.5)),this.setOn("rime",3)&&o&&(this.spawnFx("shock",s,.08,a,ei.rime.color),this.burst(s,a,ei.rime.color,this.lite?3:6),this.damageAround(s,a,1.3,this.hitDamage()*.45,l=>l.slow=Math.max(l.slow,1.2)))),!i)return;const h=we(this.room);this.championActs.add(h),this.unbanked.champions+=1,this.pendingRelics.push(this.rollRelicCards(!1,!0)),this.resolvePendingRelicUi(),An(30+h*10),this.addMastery(zs.boss),this.spawnShow("pillar",e.mesh.position.x,e.mesh.position.z,16765562,0,1.2),this.pushHud(`${i.name} falls! A rare relic waits.`)}placeBlade(e){const i=Ti/2-Di-1.5;for(let n=0;n<12;n++){const s=(this.roomRand(e*31+n)*2-1)*i,a=(this.roomRand(e*37+n)*2-1)*i,o=this.roomRand(e*41+n)<.5;if(this.blocked(s,a,.6,0)||Math.hypot(s-this.px,a-this.pz)<3)continue;const h=b=>{let T=0;for(;T<6&&!this.blocked(s+(o?(T+.5)*b:0),a+(o?0:(T+.5)*b),.6,0);)T+=.5;return T},l=h(-1),c=h(1);if(l+c<5)continue;const f=o?s-l:s,u=o?a:a-l,d=o?s+c:s,m=o?a:a+c,x=Math.hypot(d-f,m-u),g=new S(this.sharedGeo("blade-track",()=>new Ge(1,.32)),this.mat(new at({color:5906480,transparent:!0,opacity:.55,depthWrite:!1,fog:!1})));g.rotation.set(-Math.PI/2,0,o?0:Math.PI/2),g.scale.set(x+1,1,1),g.position.set((f+d)/2,.05,(u+m)/2),this.scene.add(g);const p=new Zt,M=new Zt;M.add(new S(this.sharedGeo("blade-disc",()=>new qt(.5,.5,.07,20)),this.toon(12103880,0,0))),M.add(new S(this.sharedGeo("blade-rim",()=>new ie(.5,.05,6,24)),this.mat(new at({color:16743050,fog:!1})))),M.children[1].rotation.x=Math.PI/2;const v=this.sharedGeo("blade-tooth",()=>new te(.07,.18,4)),_=this.toon(15261936,0,0);for(let b=0;b<10;b++){const T=new S(v,_),R=b/10*Math.PI*2;T.position.set(Math.cos(R)*.58,0,Math.sin(R)*.58),T.rotation.set(0,-R,-Math.PI/2),M.add(T)}M.rotation.set(Math.PI/2,0,0),p.add(M),p.rotation.y=o?0:Math.PI/2,p.position.set(f,.55,u),this.scene.add(p),this.blades.push({group:p,ax:f,az:u,bx:d,bz:m,t:this.roomRand(e)*2,len:x,hitAt:new Map,track:g});return}}stepBlades(e){for(const i of this.blades){i.t+=e*(3/Math.max(1,i.len));const n=(1-Math.cos(i.t*Math.PI))/2,s=i.ax+(i.bx-i.ax)*n,a=i.az+(i.bz-i.az)*n;i.group.position.set(s,.55,a),i.group.children[0].rotation.y+=e*14,!this.lite&&Math.random()<e*10&&this.burst(s,a,16756896,1),Math.hypot(this.px-s,this.pz-a)<.75&&this.alive&&this.hurt(12+we(this.room)*2,s,a);for(const o of this.enemies)o.bossId||o.burrowed||Math.hypot(o.mesh.position.x-s,o.mesh.position.z-a)>.6+o.r||this.clock<(i.hitAt.get(o)??-1)||(i.hitAt.set(o,this.clock+.5),this.damageOne(o,s,a,22+this.room*5))}}stepCaveIns(e){if(!this.caveIns||this.roomCleared||!this.enemies.length||!this.alive||(this.caveNext-=e,this.caveNext>0))return;this.caveNext=3.5+Math.random()*1.5;const i=Math.random()<.4?2:1;for(let n=0;n<i;n++){const s=Math.random()*Math.PI*2,a=.6+Math.random()*2.2,o=this.px+Math.cos(s)*a,h=this.pz+Math.sin(s)*a;if(this.blocked(o,h,.3,0))continue;const l=1.1;this.spawnShow("warn",o,h,13148288,0,l),this.queueBeat(.75,()=>this.spawnShow("meteor",o,h,9075338,0,1.2)),this.queueBeat(1.05,()=>{this.spawnFx("shock",o,.08,h,13148288),this.burst(o,h,9075338,this.lite?5:10),hs(),this.trauma=Math.min(1,this.trauma+.15),this.damageAround(o,h,l,30+this.room*6),Math.hypot(this.px-o,this.pz-h)<l&&this.hurt(14+we(this.room)*2,o,h)})}}stepSpikesOnFoes(){for(const e of this.hazards){if(e.t%1.8<=1.32)continue;const n=Math.floor(e.t/1.8);let s=this.spikeBit.get(e);(!s||s.pulse!==n)&&(s={pulse:n,hit:new Set},this.spikeBit.set(e,s));for(const a of this.enemies)a.bossId||a.burrowed||s.hit.has(a)||Math.hypot(a.mesh.position.x-e.x,a.mesh.position.z-e.z)>.95+a.r*.5||(s.hit.add(a),this.damageOne(a,e.x,e.z,20+this.room*4))}}placeCrack(){const e=Ti/2-Di/2;for(let i=0;i<10;i++){const n=Math.floor(this.roomRand(50+i)*4),s=(this.roomRand(60+i)*2-1)*(e-3),a=n===0?1:n===1?-1:0,o=n===2?1:n===3?-1:0,h=a?a*e:s,l=o?o*e:s,c=h-a*1.1,f=l-o*1.1;if(this.blocked(c,f,.5,0))continue;const u=new Zt,d=this.mat(new at({color:16769696,fog:!1})),m=this.toon(2760752,0,0);let x=.15,g=0;for(let M=0;M<6;M++){const v=x+.28,_=(M%2?1:-1)*(.12+this.roomRand(70+M)*.12),b=new S(this.sharedGeo("crack-seg",()=>new It(.06,1,.06)),d);b.scale.y=Math.hypot(v-x,_-g),b.position.set((g+_)/2,(x+v)/2,0),b.rotation.z=-Math.atan2(_-g,v-x),u.add(b);const T=new S(this.sharedGeo("crack-chunk",()=>new It(.16,.12,.08)),m);T.position.set(g+(M%2?-.16:.16),x+.1,.02),T.rotation.z=M*.7,u.add(T),x=v,g=_}const p=new Gs(this.mat(new us({map:this.glowTex(),color:16765562,transparent:!0,opacity:.6,blending:pe,depthWrite:!1,fog:!1})));p.scale.set(1.2,2,1),p.position.y=.95,u.add(p),u.position.set(h-a*.02,0,l-o*.02),u.rotation.y=Math.atan2(-a,-o),this.scene.add(u),this.crack={group:u,x:c,z:f},this.pushHud("A crack glows in the wall.");return}}stepSecret(e){const i=this.crack;if(i){const s=i.group.children[i.group.children.length-1];s.material.opacity=.45+Math.sin(this.clock*3)*.2;const a=Math.hypot(this.px-i.x,this.pz-i.z),o=this.bullets.find(h=>h.live&&Math.hypot(h.mesh.position.x-i.x,h.mesh.position.z-i.z)<1.3);(this.dashLeft>0&&a<1.6||this.attackT>.85&&a<1.9||o)&&(o&&(o.live=!1,o.mesh.visible=!1),this.breakCrack())}const n=this.reliquary;n&&(n.group.children[1].position.y=.62+Math.sin(this.clock*2.4)*.05,n.group.rotation.y+=e*.6,this.clock>=n.readyAt&&Math.hypot(this.px-n.x,this.pz-n.z)<.95&&this.openReliquary())}breakCrack(){const e=this.crack;if(!e)return;this.crack=null,this.scene.remove(e.group),this.secretActs.add(we(this.room)),this.burst(e.x,e.z,9075338,this.lite?8:16),this.burst(e.x,e.z,16765562,8),this.spawnFx("shock",e.x,.08,e.z,16765562),hs(),this.trauma=Math.min(1,this.trauma+.2);const i=new Zt;i.add(new S(this.sharedGeo("reliq-box",()=>new It(.62,.4,.44)),this.toon(6965802,16765562,.15))),i.children[0].position.y=.2;const n=new S(this.sharedGeo("reliq-orb",()=>new Se(.14,0)),this.mat(new at({color:16769696,fog:!1})));i.add(n);const s=new S(this.sharedGeo("reliq-lid",()=>new It(.68,.08,.5)),this.toon(14198864,16765562,.3));s.position.y=.44,i.add(s),i.position.set(e.x,0,e.z),this.scene.add(i),this.reliquary={group:i,x:e.x,z:e.z,readyAt:this.clock+.6},this.pushHud("A hidden reliquary!")}openReliquary(){const e=this.reliquary;if(!e)return;this.reliquary=null,this.scene.remove(e.group),this.spawnFx("flash",e.x,.8,e.z,16769696),this.spawnFx("ring",e.x,.08,e.z,16765562),this.burst(e.x,e.z,16765562,12),jc();const i=Math.random();let n;if(i<.35){const s=25+we(this.room)*15;An(s),n=`The reliquary held ${s} Ash.`}else i<.65?(this.pendingRelics.push(this.rollRelicCards(!1)),this.resolvePendingRelicUi(),n="The reliquary held a relic."):i<.85?(this.hp=this.maxHp,this.spawnFx("shock",this.px,.08,this.pz,10477800),n="A healing font: you're mended."):(this.pendingRelics.push(this.rollRelicCards(!1,!0)),this.resolvePendingRelicUi(),n="The reliquary held a rare relic!");this.pushHud(n)}stepHazards(e){super.stepHazards(e),this.stepSpikesOnFoes(),this.stepBlades(e),this.stepCaveIns(e),this.stepSecret(e),this.stepChampions(e)}}const Vc=new N,gh=29,xh=19.5,O_=Math.hypot(gh,xh),B_=7;class k_ extends U_{constructor(e){super(e);L(this,"systemReduced",!1);this.bindApi(),this.applySettings(),this.renderer.setAnimationLoop(i=>this.tick(i))}startPlay(e){try{if(this.resetRun(e),nd("threshold","death"),!this.practiceSkin)for(const i of["move","dash","skill","familiar"])ds(i);de.getState().setScreen("play")}catch(i){pl("dive",i),this.bindApi(),this.alive=!1,this.paused=!0,de.getState().setScreen("hub")}}destroy(){var e,i,n,s,a,o;this.renderer.setAnimationLoop(null),this.clearSigils(),(e=this.sigilLayer)==null||e.remove(),(i=this.floatLayer)==null||i.remove(),this.unbindDom(),(n=this.resizeObs)==null||n.disconnect(),this.clearWorld(),(s=this.composer)==null||s.dispose(),this.toonRamp.dispose(),(a=this.starTex)==null||a.dispose(),(o=this.streakTex)==null||o.dispose();for(const h of this.keepGeo.values())h.dispose();this.keepGeo.clear(),Lc(),this.renderer.dispose(),this.renderer.domElement.remove(),de.getState().setApi(null)}resetRun(e){var a;this.alive=!1,this.paused=!0,this.clearWorld(),this.choosing=!1,this.practiceSkin=de.getState().practice,this.practiceHits=[],this.endless=!this.practiceSkin&&de.getState().endless&&sd(Be()),this.daily=!this.practiceSkin&&!this.endless&&de.getState().daily,rd(this.daily?ml():null);const i=this.endless||this.daily?1:Math.min(de.getState().act,Be().unlockedAct??1);this.room=ad(i),this.newcomer=!this.endless&&!this.practiceSkin&&i===1&&Be().bestRoom<3,this.kills=0,this.fireCd=0,this.dashCd=0,this.dashLeft=0,this.iFrames=0,this.hitstop=0,this.trauma=0,this.magnet=2.4,this.extraPellets=0,this.extraPierce=0,this.extraDmg=0,this.extraSpeed=0,this.forced.clear(),this.crystalOn=!1,this.swapLeft=0,this.relics=[],this.pendingRelics=[],this.pendingPetTalents=[],this.thorns=[],de.getState().setPendingRelicCount(0),this.curse="",this.curseHp=1,this.curseExtra=0,this.curseXp=1,this.curseDmg=1,this.curseAsh=0,this.nextCurse=null,this.clearSigils(),this.wrelics.clear(),this.zones=[],this.webbed=0,this.corpses=[],this.vaultActs.clear(),od(),this.px=0,this.pz=0,this.py=0,this.pvy=0,this.coyote=0,this.vx=0,this.vz=0,this.safeX=0,this.safeZ=0,this.relicHp=0,this.heldIds=[],this.setTier={},this.hpMul=1,this.relicFireMul=1,this.relicDashMul=1,this.relicLeech=0,this.relicIFrames=0,this.rares.clear(),this.rushStacks=0,this.rushT=0,this.phantomCount=0,this.runJob=e,this.hp=0,this.maxHp=0,this.applyBuild(),this.skillCd=0,this.rageLeft=0,this.markLeft=0,this.petBoost=0,this.echoT=0,this.fuse=null,this.relicEcho=!1,this.relicSplinter=!1,this.shotBounce=0,this.frost=!1,this.fury=!1,this.petCadence=1,this.overshield=!1,this.ward=0,this.wardMax=0,this.runSeed=this.daily?ml():Math.random()*4294967295>>>0||1,this.beats=[],this.combo=0,this.comboIdle=0,this.swingStep=0,this.swingFinisher=!1,this.reaperCombo=0;for(const o of this.shows)o.live=!1,o.mesh.visible=!1;const n=hd();for(const o of n){const h=ld(o);o==="vial-iron"&&(this.relicHp+=28,this.refreshStats(),this.hp+=28),o==="vial-pace"&&(this.extraSpeed+=28),o==="vial-spark"&&(this.extraDmg+=5),o==="vial-split"&&(this.extraPellets+=1),o==="vial-ward"&&(this.relicIFrames+=.18),h&&this.relics.push(h.name)}const s=Be();s.runs+=1,Pn(s),this.freeRerolls=Ca(s,"altar-reroll"),this.relicCards=3+Ca(s,"altar-choice"),this.oath=Xc(this.daily?[cd()]:ud(s)),fd(this.oath.reward),bd(),this.reviveUsed=!1,this.runCleared=0,this.runBigHit=0,this.runStartBest=this.endless?s.bestDepth??0:s.bestRoom,this.runStartClock=this.clock,this.unbanked={kills:0,elites:0,bosses:[],champions:0},this.masteryGain={},this.masteryRun={},this.masteryBase={[this.skin]:gl(s,this.skin)},this.masteryRank=this.practiceSkin?0:ta(this.masteryBase[this.skin]),this.pendingEvent=null,this.eventActs=new Set,this.secretActs=new Set,this.championActs=new Set,this.runLifeMul=1,this.eliteNext=!1,de.getState().setRunSummary(null),this.diedLog=void 0,this.emberLeft=this.oath.noRest?0:Ca(s,"altar-ember"),this.systemReduced=((a=window.matchMedia)==null?void 0:a.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,this.reduced=this.systemReduced||En().reducedMotion,this.buildChamber(),this.makePlayer(),this.makePet(),this.camera.position.set(this.px,gh,this.pz+xh),this.camera.lookAt(this.px,.5,this.pz),this.snapCam=!1,this.bindApi(),this.practiceSkin?this.spawnDummies():(this.beginRunLog(),this.spawnWave()),this.paused=!1,this.alive=!0}applyBuild(){var n,s;const e=Be();this.practiceSkin&&(e.weaponSkin[this.runJob]=this.practiceSkin),this.job=dd(this.runJob,e),this.skin=e.weaponSkin[this.runJob],(n=this.masteryBase)[s=this.skin]??(n[s]=gl(e,this.skin)),this.masteryRank=this.practiceSkin?0:ta(this.masteryBase[this.skin]),this.classIndex=e.jobs[this.runJob].classIndex;const i=this.maxHp>0&&this.hp>0?this.hp/this.maxHp:1;this.refreshStats(),this.hp=Math.max(1,Math.round(this.maxHp*i))}refreshStats(){this.fireMul=this.job.fireMul*this.relicFireMul*(this.setOn("tempest",2)?1.08:1),this.dashMul=this.job.dashMul*this.relicDashMul,this.leech=this.job.leech+this.relicLeech,this.extraIFrames=this.job.extraIFrames+this.relicIFrames,this.maxHp=Math.max(1,Math.round((this.job.hp+this.relicHp+(this.setOn("hearth",2)?20:0))*this.hpMul)),this.hp=Math.min(this.hp,this.overshield?this.maxHp*1.2:this.maxHp)}makePlayer(){var s;const e=Xu(this.player,this.runJob,this.kit,this.skin,pd(Be()));this.rigLegL=e.legL,this.rigLegR=e.legR,this.rigArmL=e.armL,this.rigArmR=e.armR,this.rigLamp=e.lamp,this.rigCape=e.cape,this.lantern=e.lantern,this.slash=e.slash;const i=Be(),n=md(i);if(n!=="none"&&this.player.add(JM(n,this.kit,jt[this.runJob])),this.trailColor=((s=gd(i))==null?void 0:s.color)??null,this.masteryRank>=2){const a=new Gs(this.mat(new us({map:this.glowTex(),color:this.masteryRank>=4?16765562:jt[this.runJob],transparent:!0,opacity:.85,blending:pe,depthWrite:!1,fog:!1})));a.scale.setScalar(this.masteryRank>=4?.75:.55),a.position.set(0,-.52,.12),(this.runJob==="hunter"?e.armL:e.armR).add(a)}this.player.position.set(this.px,0,this.pz),this.player.parent||this.scene.add(this.player),this.makePlayerMark()}makePlayerMark(){this.playerMark&&this.scene.remove(this.playerMark);const e=jt[this.runJob],i=new Zt,n=this.mat(new at({color:e,transparent:!0,opacity:.9,depthWrite:!1,fog:!1,side:$t})),s=new S(this.sharedGeo("player-mark-ring",()=>new Ne(.74,.9,40)),n);s.rotation.x=-Math.PI/2,i.add(s);const a=this.mat(new at({color:1313304,transparent:!0,opacity:.55,depthWrite:!1,fog:!1,side:$t})),o=new S(this.sharedGeo("player-mark-edge",()=>new Ne(.66,.98,40)),a);o.rotation.x=-Math.PI/2,o.position.y=-.01,o.renderOrder=1,i.add(o);const h=new S(this.sharedGeo("player-mark-chevron",()=>{const l=new vi;return l.moveTo(0,.32),l.lineTo(.26,-.06),l.lineTo(0,.06),l.lineTo(-.26,-.06),l.closePath(),new Ma(l)}),n);h.rotation.x=-Math.PI/2,h.position.z=1.12,i.add(h),i.renderOrder=2,this.scene.add(i),this.playerMark=i}clearWorld(){this.clearFloats(),this.clearGlaives();for(const e of[...this.bullets,...this.eBullets])this.scene.remove(e.mesh);for(const e of this.enemies)this.scene.remove(e.mesh);for(const e of this.shards)this.scene.remove(e.mesh);this.sparkMesh&&this.scene.remove(this.sparkMesh),this.sparkMesh=void 0,this.sparkTtl.fill(0),this.thornPool=[],this.thornMats=void 0;for(const e of this.fx)this.scene.remove(e.mesh);this.crystal&&this.scene.remove(this.crystal),this.pet&&this.scene.remove(this.pet),this.scene.remove(this.player),this.bullets=[],this.eBullets=[],this.enemies=[],this.shards=[],this.fx=[],this.walls=[],this.crystal=void 0,this.pet=void 0,this.petTwin=void 0,this.petKind=null,this.shows=[],this.beats=[],this.aura=void 0,this.playerMark=void 0,this.markSigil=void 0,this.roomLights=[],this.layoutRoot=new Zt,Lc();for(const e of this.mats)e.dispose();for(const e of this.geos)e.dispose();for(const e of this.texs)e.dispose();this.mats=[],this.geos=[],this.texs=[],this.scene.clear(),this.scene.fog=new sr(3814480,this.lite?.015:.01),this.scene.background=new Ot(3288132)}openEvent(e){this.pendingEvent=e,this.paused=!0,de.getState().setEvent({id:e,cost:qr(we(this.room))}),de.getState().setScreen("event")}resolveEvent(e){const i=this.pendingEvent;if(!i)return;this.pendingEvent=null,this.eventActs.add(we(this.room));let n=`${ss[i].title}: you walk on.`;if(e)if(i==="shrine")this.hpMul*=.8,this.refreshStats(),this.hp=Math.min(this.hp,this.maxHp),this.pendingRelics.push(this.rollRelicCards(!1,!0)),n="The shrine takes its due: a rare relic waits.";else if(i==="merchant"){const s=qr(we(this.room));Be().ash>=s&&(So(s),this.pendingRelics.push(this.rollRelicCards(!1)),n=`Paid ${s} Ash: a relic waits.`)}else if(i==="spring")this.hp=this.maxHp,this.spawnFx("shock",this.px,.08,this.pz,10477800),n="The spring mends you.";else if(i==="cache")this.pendingRelics.push(this.rollRelicCards(!1)),An(20),this.eliteNext=!0,n="A relic and 20 Ash. Something heard you.";else if(i==="gambler"){const s=qr(we(this.room));if(Be().ash>=s){So(s);const a=2+Math.floor(Math.random()*6)+Math.floor(Math.random()*6);a>=7?(An(s*2),n=`The dice come up ${a}: you win ${s*2} Ash!`):n=`The dice come up ${a}: the stake is lost.`}}else i==="altar"?(this.pendingRelics.push(this.rollRelicCards(!1,!0)),this.runLifeMul*=1.2,n="A rare relic waits. The ruin stirs, tougher than before."):i==="spirit"?(this.spawnAlly(this.px+.8,this.pz,120,this.hitDamage()*.6,.8,7,10477800,"wraith"),n="The lost spirit follows you."):i==="chest"&&(this.hp=Math.max(1,Math.round(this.hp-this.maxHp*.25)),this.pendingRelics.push(this.rollRelicCards(!1),this.rollRelicCards(!1)),n="The lock gives. Two relics wait.");de.getState().setEvent(null),de.getState().setScreen("play"),this.paused=!1,this.roomCleared=!0,this.resolvePendingRelicUi(),this.advanceRoom(),this.pushHud(n)}revive(){if(!(this.alive||this.reviveUsed||this.hp>0)){this.reviveUsed=!0,this.reopenRunLog(),this.hp=Math.ceil(this.maxHp*.5),this.iFrames=3;for(const e of this.eBullets)e.live=!1,e.mesh.visible=!1;for(const e of this.enemies){const i=e.mesh.position.x-this.px,n=e.mesh.position.z-this.pz,s=Math.hypot(i,n);if(s<4&&!e.bossId){const a=(4-s)/Math.max(.01,s),o=e.mesh.position.x+i*a,h=e.mesh.position.z+n*a;this.blocked(o,h,.4,0)||e.mesh.position.set(o,e.mesh.position.y,h)}}this.impact(this.px,this.pz,Rt[2],!1,!0),this.alive=!0,this.paused=!1,this.pushHud("You rise again."),de.getState().setScreen("play")}}bindApi(){de.getState().setApi({startRun:e=>this.startPlay(e),pickUpgrade:e=>this.applyUpgrade(e),pickPetTalent:e=>this.applyPetTalent(e),switchJob:e=>this.doSwitch(e),pause:()=>{!this.alive||this.choosing||(this.paused=!0,de.getState().setScreen("pause"))},resume:()=>{this.paused=!1,de.getState().setScreen("play")},abortToCamp:()=>{if(this.practiceSkin){this.alive=!1,this.paused=!0,this.practiceSkin=null,de.getState().setPractice(null);return}this.finishRunLog("left"),this.endRun(!1)},revive:()=>this.revive(),resolveEvent:e=>this.resolveEvent(e),canRevive:()=>!this.alive&&!this.reviveUsed&&this.hp<=0,applySettings:()=>this.applySettings(),rerollRelic:()=>this.rerollRelic(),setForcedKeys:e=>{this.forced=new Set(e)}})}applyUpgrade(e){if(!(e in yo?this.choosing:(this.pendingRelics[0]??[]).some(l=>l.id===e))){this.resolvePendingRelicUi();return}e==="damage"&&(this.extraDmg+=4),e==="firerate"&&(this.relicFireMul*=1.18),e==="vitality"&&(this.relicHp+=24,this.refreshStats(),this.hp=Math.min(this.maxHp,this.hp+40)),e==="haste"&&(this.extraSpeed+=22),e==="dash"&&(this.relicDashMul*=1.22),e==="pierce"&&(this.extraPierce+=1),e==="multishot"&&(this.extraPellets+=1),e==="leech"&&(this.relicLeech+=2),e==="magnet"&&(this.magnet+=1.6),e==="echo"&&(this.relicEcho=!0),e==="splinter"&&(this.relicSplinter=!0),e==="ward"&&(this.wardMax=Math.max(this.wardMax,1)),e==="bounce"&&(this.shotBounce+=1),e==="frost"&&(this.frost=!0),e==="fury"&&(this.fury=!0),e==="bond"&&(this.petCadence=Math.max(this.petCadence,1.7)),e==="overshield"&&(this.overshield=!0),e==="heartwood"&&(this.relicHp+=30,this.refreshStats(),this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.5)),e==="storm"&&(this.extraPellets+=2),e==="lantern"&&(this.wardMax=Math.max(this.wardMax,2)),e==="ashrite"&&(An(36),this.magnet+=2.2),e==="blood"&&(this.relicLeech+=4),e==="pace"&&(this.extraSpeed+=36,this.relicDashMul*=1.28);const s=Mh.find(l=>l.id===e);s&&this.wrelics.add(s.id);const a=Qc.find(l=>l.id===e);a&&this.rares.add(a.id),e==="glassheart"&&(this.hpMul*=.75);const o=yo[e],h=wo[e]??o??s??a;h&&!o&&!s&&(this.heldIds.push(e),this.refreshSets()),this.refreshStats(),h&&this.relics.push(h.title),h&&xd(e),h&&!o&&Md(),o?(this.choosing=!1,this.paused=!1,this.advanceRoom(),this.resolvePendingRelicUi(),de.getState().setScreen("play"),this.pushHud(tn(this.room).name)):(this.pendingRelics.shift(),this.resolvePendingRelicUi())}doSwitch(e){const i=this.hp/this.maxHp;this.runJob=e,this.applyBuild(),this.hp=Math.max(1,Math.round(this.maxHp*i)),this.makePlayer(),this.makePet(),this.swapLeft=8,this.crystalOn=!1,this.clearCrystal(),de.getState().setJob(e),de.getState().setScreen("play"),this.paused=!1,this.pushHud(Jc[e].swapHint)}applySettings(){const e=En();_d(e.music,e.sfx),this.reduced=this.systemReduced||e.reducedMotion,this.applyQuality()}tick(e){try{const i=Math.min((e-this.last)/1e3,.1);this.last=e,this.clock+=i,(!Number.isFinite(this.hp)||this.hp<=0)&&this.alive&&this.die(),this.job&&this.alive&&!this.paused&&(this.hitstop<=0||this.lungeLeft>0)?this.simulate(i):(this.hitstop=Math.max(0,this.hitstop-i),this.iFrames=Math.max(0,this.iFrames-i)),this.stepSparks(i),this.stepFx(i),this.stepCapeArcs(i),this.stepFloats(i),this.stepCorpses(i),this.paused&&this.stepShows(i),this.draw(i),this.composer&&!this.lite?this.composer.render():this.renderer.render(this.scene,this.camera)}catch(i){qc.getState().error?console.error("tick failed",i):pl("frame",i)}}simulate(e){var P;this.swapLeft=Math.max(0,this.swapLeft-e);const i=Kc(),n=En(),s=z=>yd(z,n).some(B=>this.held(B)),a=s("pause")||i.pause;a&&!this.escHeld&&de.getState().screen==="play"&&((P=de.getState().api)==null||P.pause()),this.escHeld=a,i.back&&xl.getState().tip&&xl.getState().dismiss();const o=de.getState().touch;let h=o.mx+i.mx,l=o.my+i.my;s("up")&&(l-=1),s("down")&&(l+=1),s("left")&&(h-=1),s("right")&&(h+=1);const c=Math.hypot(h,l);c>1&&(h/=c,l/=c);const f=(this.job.speed+this.extraSpeed)*(this.rageLeft>0?1.32:1)*(this.webbed>0?.5:1)/mi,u=h*f,d=l*f,m=s("dash")||o.dash||i.dash;let x=h,g=l;Math.hypot(x,g)<.1&&Math.hypot(i.ax,i.ay)>.2&&(x=i.ax,g=i.ay),m&&this.dashCd<=0&&this.dashLeft<=0&&Math.hypot(x,g)>.1&&(this.dashCd=this.job.dashMs/this.dashMul/1e3,this.dashLeft=.18,this.dashX=x,this.dashZ=g,this.iFrames=Math.max(this.iFrames,.24),vd(),this.dashRelics(),(this.job.dashBurst>0||this.relicEcho)&&this.nova(this.px,this.pz,6,this.runJob==="hunter"?"shard":"bolt"),this.trailColor!==null&&this.spawnFx("streak",this.px,.6,this.pz,this.trailColor,Math.atan2(g,x)),this.setOn("tempest",3)&&this.nova(this.px,this.pz,8,"bolt"));const p=this.job.dashSpeed/mi;if(this.dashLeft>0)this.vx=this.dashX*p,this.vz=this.dashZ*p,this.trailColor!==null&&this.burst(this.px,this.pz,this.trailColor,this.lite?1:3),this.dashLeft-=e;else if(this.lungeLeft>0)this.vx=this.lungeX*this.lungeSpd,this.vz=this.lungeZ*this.lungeSpd,this.lungeLeft-=e,this.lungeLeft<=0&&(this.vx*=.25,this.vz*=.25,this.endLunge());else{const z=1-Math.exp(-18*e);this.vx+=(u-this.vx)*z,this.vz+=(d-this.vz)*z}(this.dashLeft>0||this.lungeLeft>0)&&(this.knockX=this.knockZ=0);const M=this.px+(this.vx+this.knockX)*e,v=this.pz+(this.vz+this.knockZ)*e,_=Math.exp(-9*e);this.knockX*=_,this.knockZ*=_;const b=this.resolve(M,v,.42,this.py);(b.x!==M||b.z!==v)&&(this.knockX=this.knockZ=0,this.dashLeft=0,this.lungeLeft>0&&(this.lungeLeft=0,this.endLunge()),b.x===this.safeX&&(this.vx=0),b.z===this.safeZ&&(this.vz=0)),this.px=b.x,this.pz=b.z;const T=Cn(this.px,this.pz,this.plats);if(this.py+=(T-this.py)*Math.min(1,16*e),Math.abs(T-this.py)<.04&&(this.py=T),this.blocked(this.px,this.pz,.42,this.py)||(this.safeX=this.px,this.safeZ=this.pz),this.lungeLeft>0&&(this.chargeFromX=this.px,this.chargeFromZ=this.pz,this.stepLunge()),this.speedNow=Math.hypot(this.vx,this.vz)*mi,this.speedNow>8&&(this.heading=Math.atan2(-this.vx,-this.vz)),this.fireCd=Math.max(0,this.fireCd-e),this.comboIdle+=e,this.comboIdle>.55&&(this.combo=0),this.dashCd=Math.max(0,this.dashCd-e),this.iFrames=Math.max(0,this.iFrames-e),this.skillCd=Math.max(0,this.skillCd-e),this.rageLeft=Math.max(0,this.rageLeft-e),this.markLeft=Math.max(0,this.markLeft-e),this.petBoost=Math.max(0,this.petBoost-e),this.rushT=Math.max(0,this.rushT-e),this.rushT<=0&&(this.rushStacks=0),this.beats.length){const z=[];for(const B of this.beats)B.t-=e,B.t<=0?B.run():z.push(B);this.beats=z}this.practiceSkin||this.stepRoomSpawns(e),this.stepShows(e),this.echoT>0&&(this.echoT-=e,this.echoT<=0&&this.nova(this.echoX,this.echoZ,8,"bolt")),this.fuse&&(this.fuse.ttl-=e,this.fuse.ttl<=0&&(this.nova(this.fuse.x,this.fuse.z,10,"shard"),this.fuse=null));const R=s("skill")||i.skill||o.skill;R&&!this.skillHeld&&this.castActive(),this.skillHeld=!!R,(this.pointer.down||o.fire||i.fire||Math.hypot(o.ax,o.ay)>.35||Math.hypot(i.ax,i.ay)>.35)&&this.fire();const A=this.worldAim();this.aimX=A.x,this.aimZ=A.z,this.crystalOn&&this.crystal&&Math.hypot(this.px-this.crystal.position.x,this.pz-this.crystal.position.z)<1.3&&(this.pushHud("Hold E or X to shift job"),(s("swap")||i.interact)&&(this.paused=!0,de.getState().setSwitchable(wd.filter(z=>z!==this.runJob&&Sd(Be(),z))),de.getState().setScreen("jobswitch"))),this.stepProjectiles(this.bullets,e,!0),this.stepGlaives(e),this.stepFrost(e),this.stepSickles(e),this.stepProjectiles(this.eBullets,e,!1),this.stepFireFields(e),this.stepThorns(e),this.stepPet(e),this.stepHazards(e),this.stepZones(e),this.stepAllies(e),this.stepSigils(e);for(const z of this.enemies)this.stepEnemy(z,e);for(const z of this.shards){if(!z.live)continue;z.mesh.rotation.y+=e*3,z.mesh.position.y=.5+Math.sin(this.clock*4)*.08;const B=Math.hypot(this.px-z.mesh.position.x,this.pz-z.mesh.position.z);B<this.magnet&&(z.mesh.position.x+=(this.px-z.mesh.position.x)/(B||1)*8*e,z.mesh.position.z+=(this.pz-z.mesh.position.z)/(B||1)*8*e),B<.55&&(this.addXp(z.xp),$c(),z.live=!1,this.scene.remove(z.mesh),this.pushHud())}this.shards=this.shards.filter(z=>z.live),this.hudAcc+=e,this.hudAcc>.12&&(this.hudAcc=0,this.pushHud())}stepProjectiles(e,i,n){for(const s of e){if(!s.live)continue;if(s.ttl-=i,s.ttl<=0){s.live=!1,s.mesh.visible=!1;continue}s.mesh.position.x+=s.vx*i,s.mesh.position.z+=s.vz*i,s.kind==="orb"?s.mesh.rotation.y+=i*1.4:this.aimShot(s),s.kind==="bolt"&&n&&this.skin!=="arrowbolt"&&!this.lite&&Math.random()<i*30?(this.spawnFx("streak",s.mesh.position.x,s.mesh.position.y,s.mesh.position.z,16777215,Math.atan2(s.vz,s.vx)),this.burst(s.mesh.position.x,s.mesh.position.z,jt.wanderer,1)):s.kind==="chain"&&n&&this.skin!=="prismshard"&&!this.lite&&Math.random()<i*16?this.burst(s.mesh.position.x,s.mesh.position.z,Rt[Math.floor(Math.random()*3)],1):s.kind==="shard"&&n&&!this.lite&&Math.random()<i*10&&this.spawnFx("streak",s.mesh.position.x,s.mesh.position.y,s.mesh.position.z,jt.hunter,Math.atan2(s.vz,s.vx));const a=s.kind!=="slash"&&this.blocked(s.mesh.position.x,s.mesh.position.z,.12,s.mesh.position.y);if(a&&s.bounce>0){s.bounce-=1,s.mesh.position.x-=s.vx*i,s.mesh.position.z-=s.vz*i,this.blocked(s.mesh.position.x+s.vx*i,s.mesh.position.z,.12,s.mesh.position.y)?s.vx*=-1:s.vz*=-1,this.aimShot(s);continue}if(s.ttl<=0||a){s.live=!1,s.mesh.visible=!1;continue}if(n)for(const o of this.enemies){const h=Math.hypot(o.mesh.position.x-s.mesh.position.x,o.mesh.position.z-s.mesh.position.z),l=Math.abs(s.mesh.position.y-(o.mesh.position.y+.45));if(h<o.r+s.r&&l<1.2){if(s.kind!=="chain"&&s.chainSeen.includes(o))continue;if(this.hitEnemy(s,o),s.kind!=="chain"&&s.chainSeen.push(o),!s.live)break}}else Math.hypot(this.px-s.mesh.position.x,this.pz-s.mesh.position.z)<.5&&(this.hurt(s.dmg,s.mesh.position.x,s.mesh.position.z),s.live=!1,s.mesh.visible=!1)}}swingCurve(e){if(e<.22){const n=e/.22;return-.18*Math.sin(n*Math.PI*.5)}else if(e<.62){const n=(e-.22)/.4;return-.18+1.33*(1-(1-n)*(1-n)*(1-n))}return 1.15-.15*((e-.62)/.38)}castCurve(e){if(e<.3){const n=e/.3;return-.22*Math.sin(n*Math.PI*.5)}else if(e<.55){const n=(e-.3)/.25;return-.22+1.34*(1-(1-n)*(1-n)*(1-n))}return 1.12-.12*((e-.55)/.45)}hammerCurve(e){const i=n=>n*n*(3-2*n);if(e<.25)return i(e/.25);if(e<.36){const n=(e-.25)/.11;return 1-2*n*n}return e<.55?-1+Math.sin((e-.36)/.19*Math.PI)*.06:-1+i((e-.55)/.45)}hunterPose(e,i){return this.skin==="scattershot"?{lx:[-1.1,-1.35],ly:[.25,.1],lz:[0,0],rx:[-.9,-1.25],rz:[.25,.1],lean:.02,push:i?.24:.16,cape:.35}:this.skin==="twinfang"?i?{lx:[-1.4,-1.45],ly:[.12,0],lz:[0,0],rx:[.6,-1.3],rz:[.8,0],lean:.1,push:.22,cape:.6}:{lx:[-1.25,-1.35],ly:[.1,0],lz:[0,0],rx:[.2+e*.15,-1.2],rz:[.7,.05],lean:.06,push:.08+e*.04,cape:.3}:i?{lx:[-2.2,-2.6],ly:[0,0],lz:[.1,0],rx:[-1.6,-2.5],rz:[.4,0],lean:0,push:-.04,cape:.45}:e===1?{lx:[-1,-1],ly:[.55,-.55],lz:[0,0],rx:[-.4,-1],rz:[.5,0],lean:.14,push:.06,cape:.3}:{lx:[-.85,-1],ly:[.05,0],lz:[0,0],rx:[-.5,-1.1],rz:[.6,.1],lean:.04,push:.05,cape:.2}}draw(e){var B;const i=this.speedNow>24?Math.sin(this.clock*14)*.06:0;this.speedNow>60&&this.dashLeft<=0&&!this.lite&&(this.dustT-=e,this.dustT<=0&&(this.dustT=.24,this.burst(this.px-this.vx*.02,this.pz-this.vz*.02,14207176,2))),this.player.position.y=this.py+i;let s=Math.atan2(this.aimX,this.aimZ)-this.faceY;s=((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,this.faceY+=s*Math.min(1,e*28);const a=this.skillSpinT>0;let o=0;a?(this.skillSpinT=Math.max(0,this.skillSpinT-e),o=this.skillSpinMax>0?1-this.skillSpinT/this.skillSpinMax:1,this.player.rotation.y=this.faceY+o*Math.PI*2):this.player.rotation.y=this.faceY,this.player.scale.setScalar((this.dashLeft>0?.94:1)*Ut.playerScale),this.playerMark&&(this.playerMark.position.set(this.player.position.x,this.player.position.y+.05,this.player.position.z),this.playerMark.rotation.y=this.faceY);const h=this.runJob==="wanderer"&&this.skin==="arrowbolt",l=h,c=this.runJob==="reaper"&&this.skin==="twindaggers",f=this.runJob==="reaper"&&this.skin!=="twindaggers",u=((B=this.job)==null?void 0:B.melee)??!1,d=this.runJob==="knight"&&this.skin==="warhammer",m=this.runJob==="hunter"&&this.swingFinisher&&this.skin!=="scattershot";this.attackT=Math.max(0,this.attackT-e/(d?this.hammerDur:u||l?.26:m?.3:.2));const x=1-this.attackT,g=u||l?this.swingCurve(x):this.castCurve(x),p=Math.max(0,Math.min(1,g));l?(this.player.position.x=this.chargeFromX+(this.px-this.chargeFromX)*p,this.player.position.z=this.chargeFromZ+(this.pz-this.chargeFromZ)*p):(this.player.position.x=this.px,this.player.position.z=this.pz),this.player.rotation.x=0;const M=this.speedNow>28?Math.sin(this.clock*11):0,v=this.speedNow>28?.55:0;this.rigLegL.rotation.x=M*v,this.rigLegR.rotation.x=-M*v;const _=this.swingStep;if(this.rigCape.rotation.x=.08+Math.sin(this.clock*2.2)*.05+v*.1,this.rigCape.rotation.z=Math.sin(this.clock*1.6)*.04,a){const F=Math.sin(Math.min(1,o*3)*(Math.PI/2));this.rigArmL.rotation.x=0,this.rigArmL.rotation.y=0,this.rigArmL.rotation.z=1.3*F,this.rigArmR.rotation.x=0,this.rigArmR.rotation.y=0,this.rigArmR.rotation.z=-1.3*F,this.player.rotation.x=-.07*F,this.rigCape.rotation.x+=.7*F,this.rigCape.rotation.z+=Math.sin(o*Math.PI*5)*.5*F,this.rigLamp.rotation.x=Math.sin(this.clock*7)*.08-.3*F,this.lantern&&(this.lantern.intensity=1.1+1.3*F)}else if(d){const F=this.hammerCurve(x),D=Math.max(0,F),O=Math.max(0,-F),$=this.swingFinisher?1.15:1;this.rigArmR.rotation.x=M*v*.35*(1-D-O)+(1.75*D-1.45*O)*$,this.rigArmR.rotation.z=-.15*D+.3*O,this.rigArmL.rotation.x=-M*v*.55*(1-D-O)+(1.55*D-1.3*O)*$,this.rigArmL.rotation.y=0,this.rigArmL.rotation.z=-.35*(D+O),this.player.rotation.z=0;const k=O*(this.swingFinisher?.16:.1);this.player.position.x+=this.aimX*k,this.player.position.z+=this.aimZ*k,this.rigCape.rotation.x+=.25*D+.45*O,this.rigLamp.rotation.x=Math.sin(this.clock*7)*.08-.25*O,this.lantern&&(this.lantern.intensity=1.1+1.4*O)}else if(c){const F=this.swingFinisher,D=.55,O=-1.15,$=-M*v*.5+D+(O-D)*g;this.rigArmL.rotation.x=$,this.rigArmL.rotation.y=.12-.12*g,this.rigArmL.rotation.z=.55-1.05*g,this.rigArmR.rotation.x=M*v*.5+D+(O-D)*g,this.rigArmR.rotation.y=-.12+.12*g,this.rigArmR.rotation.z=-.55+1.05*g,this.player.rotation.z=0;const k=p*(1-p)*4*(F?.22:.14);this.player.position.x+=this.aimX*k,this.player.position.z+=this.aimZ*k,this.rigCape.rotation.x+=p*.4,this.lantern&&(this.lantern.intensity=.45+1.4*p*(1-p)*4)}else if(f){const F=this.swingFinisher,D=_%2===0?-1:1,O=F?1.35:D<0?1.05:-.95,$=F?-2.7:D<0?-1.9:1.7,k=F?-.3:D<0?-.35:.35,it=F?.45:D<0?.5:-.45,Y=O+($-O)*g,et=k+(it-k)*g;this.rigArmL.rotation.x=-M*v*.5+Y,this.rigArmL.rotation.y=0,this.rigArmL.rotation.z=et,this.rigArmR.rotation.x=M*v*.35+Y*.55,this.rigArmR.rotation.y=0,this.rigArmR.rotation.z=et*.5,this.player.rotation.z=(F?.22:D<0?.14:-.14)*p,F&&(this.player.rotation.y+=.4*p*(1-p)*4);const nt=p*(1-p)*4*(F?.2:.13);this.player.position.x+=this.aimX*nt,this.player.position.z+=this.aimZ*nt,this.rigCape.rotation.x+=p*.55,this.rigCape.rotation.z+=(D>0?-1:1)*p*.35}else if(u||h){const F=this.swingFinisher,D=_%2===0?-1:1,O=F?1:D<0?.85:-.85,$=F?-2.3:D<0?-1.3:1.15,k=F?-.4:D<0?-.3:.3,it=F?2.6:D<0?1.1:-1.35,Y=F?-.2:D<0?-.15:.25,et=F?.65:D<0?.55:-.5;this.rigArmL.rotation.x=-M*v*.55+O+($-O)*g,this.rigArmL.rotation.y=k+(it-k)*g,this.rigArmL.rotation.z=Y+(et-Y)*g,this.rigArmR.rotation.x=M*v*.35-.15*p,this.rigArmR.rotation.z=0,this.rigLamp.rotation.x=Math.sin(this.clock*7)*.08-(F?.45:.22)*p,this.lantern&&(this.lantern.intensity=1.1+(F?1.8:1.1)*p*(1-p)*4),this.player.rotation.z=(F?.18:D<0?.1:-.1)*p,F&&(this.player.rotation.y+=.35*p*(1-p)*4);const nt=p*(1-p)*4*(F?.16:.1);this.player.position.x+=this.aimX*nt,this.player.position.z+=this.aimZ*nt,this.rigCape.rotation.x+=p*.5,this.rigCape.rotation.z+=(D>0?-1:1)*p*.3}else{const F=this.swingFinisher,D=_%2===0?1:-1,O=this.runJob==="wanderer"?{lx:[.12,-.3],ly:[0,0],lz:[0,0],rx:[.9,-1.45],rz:[.28,-.5],lean:.12,push:.05,cape:.3}:this.runJob==="arcanist"&&this.skin==="prismshard"?{lx:[-.35,.6],ly:[.32,-.28],lz:[.4,-.18],rx:[-.3,.55],rz:[-.35,.22],lean:.12,push:.06,cape:.5}:this.runJob==="arcanist"?{lx:[.45,-.85],ly:[.22,-.08],lz:[-.18,.3],rx:[.45,-.85],rz:[.18,-.3],lean:-.08,push:.12,cape:.44}:this.runJob==="knight"?{lx:[.25,-.22],ly:[.1,-.05],lz:[0,0],rx:[1.15,-1.7],rz:[-.35,.6],lean:.18,push:-.07,cape:.38}:this.hunterPose(_,F),$=F&&this.runJob!=="hunter"?1.22:1,k=ht=>(ht[0]+(ht[1]-ht[0])*g)*$,it=-M*v*.55+k(O.lx),Y=k(O.ly)*D,et=k(O.lz),nt=M*v*.35+k(O.rx),Nt=k(O.rz);if(this.runJob==="hunter"){const ht=Math.min(1,e*26),ut=this.rigArmL.rotation,G=this.rigArmR.rotation;ut.set(ut.x+(it-ut.x)*ht,ut.y+(Y-ut.y)*ht,ut.z+(et-ut.z)*ht),G.x+=(nt-G.x)*ht,G.z+=(Nt-G.z)*ht}else this.rigArmL.rotation.set(it,Y,et),this.rigArmR.rotation.x=nt,this.rigArmR.rotation.z=Nt;this.rigLamp.rotation.x=Math.sin(this.clock*7)*.08-.22*p;const X=p*(1-p)*4;this.lantern&&(this.lantern.intensity=1.1+(F?1.7:1.1)*X),this.player.rotation.z=O.lean*D*p;const ct=X*O.push*(F?1.5:1);this.player.position.x-=this.aimX*ct,this.player.position.z-=this.aimZ*ct,this.rigCape.rotation.x+=p*O.cape,this.rigCape.rotation.z+=-D*p*.18}this.rigLamp.rotation.z=Math.sin(this.clock*9)*(.12+v*.12);for(let F=0;F<this.roomLights.length;F++){const D=this.roomLights[F];if(!D.visible)continue;const O=D.userData.base??D.intensity;D.intensity=O*(.92+Math.sin(this.clock*(2.3+F*.7)+F)*.08)}if(this.slash&&(this.slash.visible=!1),this.iFrames>0?this.player.visible=Math.floor(this.clock*24)%2===0:this.player.visible=!0,this.aura){const F=this.rageLeft>0;if(this.aura.visible=F,F){this.aura.position.set(this.px,.08,this.pz),this.aura.rotation.z=this.clock*3.2;const D=.9+Math.sin(this.clock*8)*.12;this.aura.scale.setScalar(D),this.aura.material.opacity=.45+Math.sin(this.clock*10)*.2}}if(this.markSigil){const F=this.markLeft>0;if(this.markSigil.visible=F,F){let D=this.enemies[0]??null,O=99;for(const $ of this.enemies){const k=Math.hypot($.mesh.position.x-this.px,$.mesh.position.z-this.pz);k<O&&(O=k,D=$)}D&&(this.markSigil.position.set(D.mesh.position.x,2.1+Math.sin(this.clock*6)*.1,D.mesh.position.z),this.markSigil.rotation.z=this.clock*4)}}this.crystal&&(this.crystal.rotation.y+=e*1.4,this.crystal.position.y=1.1+Math.sin(this.clock*3)*.12),this.hazeA&&(this.hazeA.position.x=-4+this.px*.04),this.hazeB&&(this.hazeB.position.z=5+this.pz*.05),this.farLayer.position.x=this.px*.12,this.farLayer.position.z=this.pz*.12;const b=this.reduced?0:this.camPunch*3.2,T=Math.tan(Tp.degToRad(this.camera.fov/2))*this.camera.aspect,R=Math.min(1.7,Math.max(1,B_/T/O_)),w=this.px,A=gh*R-b,P=this.pz+xh*R-b*.7,z=this.snapCam?1:1-Math.exp(-10*e);if(this.camera.position.x+=(w-this.camera.position.x)*z,this.camera.position.y+=(A-this.camera.position.y)*z,this.camera.position.z+=(P-this.camera.position.z)*z,this.snapCam=!1,this.trauma=Math.max(0,this.trauma-e*2.2),this.camPunch=Math.max(0,this.camPunch-e*5),this.bloom&&(this.bloom.strength=.22+this.bloomKick*.9),!this.reduced&&this.trauma>.04){const F=this.trauma*this.trauma*.1;this.camera.position.x+=Math.sin(this.clock*47)*Math.cos(this.clock*31)*F,this.camera.position.z+=Math.sin(this.clock*39+1.3)*F}Vc.set(this.px,this.py+.45,this.pz),this.camera.lookAt(Vc)}}function H_(r){const t=new k_(r);return{startPlay:e=>t.startPlay(e),destroy:()=>t.destroy()}}const W_=Object.freeze(Object.defineProperty({__proto__:null,createGame:H_},Symbol.toStringTag,{value:"Module"}));export{Xs as I,Dc as N,W_ as c};
