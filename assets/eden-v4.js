(()=>{var Gm=Object.defineProperty;var Kt=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var Wm=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},bd=(n,e)=>{for(var t in e)Gm(n,t,{get:e[t],enumerable:!0})};function Xm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ff(){let n=fo("canvas");return n.style.display="block",n}function sh(...n){let e="THREE."+n.shift();hr?hr("log",e,...n):console.log(e,...n)}function Bf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qe(...n){n=Bf(n);let e="THREE."+n.shift();if(hr)hr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Je(...n){n=Bf(n);let e="THREE."+n.shift();if(hr)hr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ro(...n){let e=n.join(" ");e in wd||(wd[e]=!0,qe(...n))}function Of(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Er(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function rh(n,e){return(n%e+e)%e}function Ym(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function $m(n,e,t){return n!==e?(t-n)/(e-n):0}function ao(n,e,t){return(1-t)*n+t*e}function Zm(n,e,t,i){return ao(n,e,1-Math.exp(-t*i))}function Km(n,e=1){return e-Math.abs(rh(n,e*2)-e)}function Jm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Qm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function eg(n,e){return n+Math.random()*(e-n)}function tg(n){return n*(.5-Math.random())}function ng(n){n!==void 0&&(Ed=n);let e=Ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ig(n){return n*oo}function sg(n){return n*dr}function rg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function og(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function oh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ag(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*p,a*u,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ah(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zf(n,e){if(e.constructor===Float32Array)return n;let t=ah(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Hf(n,e){if(e.constructor===Float32Array)return n;let t=ah(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}function lg(){let n={enabled:!0,workingColorSpace:co,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[co]:{primaries:e,whitePoint:i,transfer:uo,toXYZ:Ad,fromXYZ:Cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Ad,fromXYZ:Cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),n}function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function pu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}function vu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Eu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ts.fromArray(n,r);let a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),u=i.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}function wg(n,e,t,i,s,r,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===us,a),l===null)return null;Fa.copy(a),Fa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:n}}function Ba(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,La),n.getVertexPosition(l,Na),n.getVertexPosition(c,Da);let u=wg(n,e,t,i,La,Na,Da,kd);if(u){let d=new k;is.getBarycoord(kd,La,Na,Da,d),s&&(u.uv=is.getInterpolatedAttribute(s,a,l,c,d,new Ye)),r&&(u.uv1=is.getInterpolatedAttribute(r,a,l,c,d,new Ye)),o&&(u.normal=is.getInterpolatedAttribute(o,a,l,c,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new k,materialIndex:0};is.getNormal(La,Na,Da,h.normal),u.face=h,u.barycoord=d}return u}function Ha(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(cl.fromBufferAttribute(a,s),ul.fromBufferAttribute(a,r),t.distanceSqToSegment(cl,ul,Iu,Wd)>i)return;Iu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Iu);if(!(c<e.near||c>e.far))return{distance:c,point:Wd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}function $d(n,e,t,i,s,r,o){let a=Fu.distanceSqToPoint(n);if(a<t){let l=new k;Fu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function Us(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Zd(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Zd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Mn(n){let e={};for(let t=0;t<n.length;t++){let i=Us(n[t]);for(let s in i)e[s]=i[s]}return e}function Zd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ag(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}function or(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Wa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Gf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Pg(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Ig(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Gf(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Pg(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function Kd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Jd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}function Lg(){this._document.hidden===!1&&this.reset()}function tf(n,e){return n.distance-e.distance}function Ou(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Ou(r[o],e,t,!0)}}function hh(n,e,t,i){let s=Hg(i);switch(t){case Ju:return n*e;case Dl:return n*e/s.components*s.byteLength;case Ul:return n*e/s.components*s.byteLength;case hs:return n*e*2/s.components*s.byteLength;case Fl:return n*e*2/s.components*s.byteLength;case Qu:return n*e*3/s.components*s.byteLength;case oi:return n*e*4/s.components*s.byteLength;case Bl:return n*e*4/s.components*s.byteLength;case ko:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ho:case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:case Hl:return Math.max(n,16)*Math.max(e,8)/4;case Ol:case zl:return Math.max(n,8)*Math.max(e,8)/2;case Vl:case Gl:case Xl:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Go:case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lc:case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wo:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hg(n){switch(n){case zn:case Yu:return{byteLength:1,components:1};case wr:case $u:case fn:return{byteLength:2,components:1};case Ll:case Nl:return{byteLength:2,components:4};case ri:case Il:case $n:return{byteLength:4,components:1};case Zu:case Ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var nf,zu,sf,Po,rf,Mr,us,dn,Rn,Fi,Sr,Is,Hu,Vu,of,Ls,af,lf,cf,uf,hf,df,ff,pf,Gu,Wu,mf,gf,vf,xf,_f,yf,Mf,Sf,bf,Za,Ka,Ja,ur,Qa,ja,el,tl,Xu,wf,Ef,mi,Io,Lo,No,Do,Uo,Fo,Bo,qu,Ns,br,Cl,Rl,nl,hi,il,ln,Tf,Oo,Cn,Pl,Bi,zn,Yu,$u,wr,Il,ri,$n,fn,Ll,Nl,Ds,Zu,Ku,Ju,Qu,oi,Ii,Oi,Dl,Ul,hs,Fl,Bl,ko,zo,Ho,Vo,Ol,kl,zl,Hl,Vl,Gl,Wl,Xl,ql,Go,Yl,$l,Zl,Kl,Jl,Ql,jl,ec,tc,nc,ic,sc,rc,oc,ac,lc,cc,uc,hc,dc,Wo,fc,lo,sl,Ya,Lu,Nu,Du,Uu,Af,ju,Cf,ki,Tn,co,uo,vt,$a,Rf,Pf,If,Lf,eh,Nf,Df,th,nh,Uf,pc,ih,qn,ho,wd,hr,kf,di,xn,Ed,oo,dr,Xo,dh,Ye,On,fh,k,du,Td,ph,je,fu,Ad,Cd,ut,Zs,rl,cg,fr,ug,mu,Ln,mh,Ut,ol,Qt,po,al,Al,_t,Ks,ei,hg,dg,Qi,Sa,Fn,Rd,Pd,ss,pr,fg,Id,Js,Ei,ba,Qr,pg,mg,Ld,Nd,Dd,Ud,gg,Qs,gu,Nn,yn,vg,mr,Vf,ji,wa,tt,_n,mo,ti,Ti,xu,Ai,js,er,Fd,_u,yu,Mu,Su,bu,wu,is,fi,Ci,ni,Ea,tr,nr,ir,es,ts,Es,jr,Ta,Aa,Ts,Yt,Ca,xg,Jt,go,vo,Mt,_g,eo,Tu,Yn,yg,Xn,Au,sr,Bn,to,an,Ft,Cu,Mg,Sg,ii,bg,Li,Ri,Ru,Ra,Pa,Ni,Di,Bd,As,Ia,Od,La,Na,Da,Pu,Ua,kd,Fa,yt,xo,Rs,rr,zd,Oa,Hd,Eg,no,io,_o,Cs,Tg,ka,Ps,Vd,ll,gr,cl,ul,Gd,so,za,Iu,Wd,hl,Xd,qd,yo,dl,Yd,Fu,Va,Ga,rs,Mo,Ui,So,bo,vr,wo,fl,pi,si,os,Eo,zi,Cg,Rg,ft,xr,pl,ml,as,gl,vl,xl,_l,kn,ls,yl,Ml,Sl,To,cs,bl,wl,Wf,El,Xa,qa,ui,Ao,ns,Qd,jd,An,_r,ar,lr,yr,Tl,Co,ch,Ng,uh,Dg,Ug,Fg,Bg,Og,kg,zg,Bu,Pt,XM,ef,Ro,gh,ku,vh=Kt(()=>{nf=0,zu=1,sf=2,Po=1,rf=2,Mr=3,us=0,dn=1,Rn=2,Fi=0,Sr=1,Is=2,Hu=3,Vu=4,of=5,Ls=100,af=101,lf=102,cf=103,uf=104,hf=200,df=201,ff=202,pf=203,Gu=204,Wu=205,mf=206,gf=207,vf=208,xf=209,_f=210,yf=211,Mf=212,Sf=213,bf=214,Za=0,Ka=1,Ja=2,ur=3,Qa=4,ja=5,el=6,tl=7,Xu=0,wf=1,Ef=2,mi=0,Io=1,Lo=2,No=3,Do=4,Uo=5,Fo=6,Bo=7,qu=300,Ns=301,br=302,Cl=303,Rl=304,nl=1e3,hi=1001,il=1002,ln=1003,Tf=1004,Oo=1005,Cn=1006,Pl=1007,Bi=1008,zn=1009,Yu=1010,$u=1011,wr=1012,Il=1013,ri=1014,$n=1015,fn=1016,Ll=1017,Nl=1018,Ds=1020,Zu=35902,Ku=35899,Ju=1021,Qu=1022,oi=1023,Ii=1026,Oi=1027,Dl=1028,Ul=1029,hs=1030,Fl=1031,Bl=1033,ko=33776,zo=33777,Ho=33778,Vo=33779,Ol=35840,kl=35841,zl=35842,Hl=35843,Vl=36196,Gl=37492,Wl=37496,Xl=37488,ql=37489,Go=37490,Yl=37491,$l=37808,Zl=37809,Kl=37810,Jl=37811,Ql=37812,jl=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,lc=36492,cc=36494,uc=36495,hc=36283,dc=36284,Wo=36285,fc=36286,lo=2300,sl=2301,Ya=2302,Lu=2303,Nu=2400,Du=2401,Uu=2402,Af=3200,ju=0,Cf=1,ki="",Tn="srgb",co="srgb-linear",uo="linear",vt="srgb",$a=7680,Rf=519,Pf=512,If=513,Lf=514,eh=515,Nf=516,Df=517,th=518,nh=519,Uf=35044,pc=35048,ih="300 es",qn=2e3,ho=2001;wd={},hr=null;kf={[Za]:Za,[Ja]:el,[Qa]:Qa,[ur]:ja,[Ka]:Ka,[el]:Ja,[tl]:tl,[ja]:ur},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ed=1234567,oo=Math.PI/180,dr=180/Math.PI;Xo={DEG2RAD:oo,RAD2DEG:dr,generateUUID:Er,clamp:dt,euclideanModulo:rh,mapLinear:Ym,inverseLerp:$m,lerp:ao,damp:Zm,pingpong:Km,smoothstep:Jm,smootherstep:Qm,randInt:jm,randFloat:eg,randFloatSpread:tg,seededRandom:ng,degToRad:ig,radToDeg:sg,isPowerOfTwo:rg,ceilPowerOfTwo:og,floorPowerOfTwo:oh,setQuaternionFromProperEuler:ag,normalize:Hf,denormalize:zf},dh=class dh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;Ye=dh,On=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3];if(d!==_||l!==h||c!==p||u!==v){let m=l*h+c*p+u*v+d*_;m<0&&(h=-h,p=-p,v=-v,_=-_,m=-m);let f=1-a;if(m<.9995){let M=Math.acos(m),T=Math.sin(M);f=Math.sin(f*M)/T,a=Math.sin(a*M)/T,l=l*f+h*a,c=c*f+p*a,u=u*f+v*a,d=d*f+_*a}else{l=l*f+h*a,c=c*f+p*a,u=u*f+v*a,d=d*f+_*a;let M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+u*d+l*p-c*h,e[t+1]=l*v+u*h+c*d-a*p,e[t+2]=c*v+u*p+a*h-l*d,e[t+3]=u*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fh=class fh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return du.copy(this).projectOnVector(e),this.sub(du)}reflect(e){return this.sub(du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fh.prototype.isVector3=!0;k=fh,du=new k,Td=new On,ph=class ph{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],_=s[0],m=s[3],f=s[6],M=s[1],T=s[4],S=s[7],A=s[2],w=s[5],g=s[8];return r[0]=o*_+a*M+l*A,r[3]=o*m+a*T+l*w,r[6]=o*f+a*S+l*g,r[1]=c*_+u*M+d*A,r[4]=c*m+u*T+d*w,r[7]=c*f+u*S+d*g,r[2]=h*_+p*M+v*A,r[5]=h*m+p*T+v*w,r[8]=h*f+p*S+v*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,v=t*d+i*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return e[0]=d*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ro("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fu.makeScale(e,t)),this}rotate(e){return ro("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fu.makeRotation(-e)),this}translate(e,t){return ro("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ph.prototype.isMatrix3=!0;je=ph,fu=new je,Ad=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ut=lg();rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zs===void 0&&(Zs=fo("canvas")),Zs.width=e.width,Zs.height=e.height;let s=Zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Zs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cg=0,fr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Er(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pu(s[o].image)):r.push(pu(s[o]))}else r=pu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};ug=0,mu=new k,Ln=class n extends di{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=hi,s=hi,r=Cn,o=Bi,a=oi,l=zn,c=n.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Er(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(mu).x}get height(){return this.source.getSize(mu).y}get depth(){return this.source.getSize(mu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nl:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nl:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=qu;Ln.DEFAULT_ANISOTROPY=1;mh=class mh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,S=(p+1)/2,A=(f+1)/2,w=(u+h)/4,g=(d+_)/4,b=(v+m)/4;return T>S&&T>A?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=w/i,r=g/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=g/r,s=b/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mh.prototype.isVector4=!0;Ut=mh,ol=class extends di{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Ln({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends ol{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},po=class extends Ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},al=class extends Ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Al=class Al{constructor(e,t,i,s,r,o,a,l,c,u,d,h,p,v,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,p,v,_,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,p,v,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Al().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,p=o*d,v=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,v=c*u,_=c*d;t[0]=h+_*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,v=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,p=o*d,v=a*u,_=a*d;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=v*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+v,t[10]=h-_*d}else if(e.order==="XZY"){let h=o*l,p=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hg,e,dg)}lookAt(e,t,i){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Qi.crossVectors(i,Fn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Qi.crossVectors(i,Fn)),Qi.normalize(),Sa.crossVectors(Fn,Qi),s[0]=Qi.x,s[4]=Sa.x,s[8]=Fn.x,s[1]=Qi.y,s[5]=Sa.y,s[9]=Fn.y,s[2]=Qi.z,s[6]=Sa.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],_=i[6],m=i[10],f=i[14],M=i[3],T=i[7],S=i[11],A=i[15],w=s[0],g=s[4],b=s[8],D=s[12],R=s[1],U=s[5],B=s[9],X=s[13],L=s[2],W=s[6],Z=s[10],q=s[14],re=s[3],Y=s[7],ne=s[11],se=s[15];return r[0]=o*w+a*R+l*L+c*re,r[4]=o*g+a*U+l*W+c*Y,r[8]=o*b+a*B+l*Z+c*ne,r[12]=o*D+a*X+l*q+c*se,r[1]=u*w+d*R+h*L+p*re,r[5]=u*g+d*U+h*W+p*Y,r[9]=u*b+d*B+h*Z+p*ne,r[13]=u*D+d*X+h*q+p*se,r[2]=v*w+_*R+m*L+f*re,r[6]=v*g+_*U+m*W+f*Y,r[10]=v*b+_*B+m*Z+f*ne,r[14]=v*D+_*X+m*q+f*se,r[3]=M*w+T*R+S*L+A*re,r[7]=M*g+T*U+S*W+A*Y,r[11]=M*b+T*B+S*Z+A*ne,r[15]=M*D+T*X+S*q+A*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],_=e[7],m=e[11],f=e[15],M=l*p-c*h,T=a*p-c*d,S=a*h-l*d,A=o*p-c*u,w=o*h-l*u,g=o*d-a*u;return t*(_*M-m*T+f*S)-i*(v*M-m*A+f*w)+s*(v*T-_*A+f*g)-r*(v*S-_*w+m*g)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],_=e[13],m=e[14],f=e[15],M=t*a-i*o,T=t*l-s*o,S=t*c-r*o,A=i*l-s*a,w=i*c-r*a,g=s*c-r*l,b=u*_-d*v,D=u*m-h*v,R=u*f-p*v,U=d*m-h*_,B=d*f-p*_,X=h*f-p*m,L=M*X-T*B+S*U+A*R-w*D+g*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return e[0]=(a*X-l*B+c*U)*W,e[1]=(s*B-i*X-r*U)*W,e[2]=(_*g-m*w+f*A)*W,e[3]=(h*w-d*g-p*A)*W,e[4]=(l*R-o*X-c*D)*W,e[5]=(t*X-s*R+r*D)*W,e[6]=(m*S-v*g-f*T)*W,e[7]=(u*g-h*S+p*T)*W,e[8]=(o*B-a*R+c*b)*W,e[9]=(i*R-t*B-r*b)*W,e[10]=(v*w-_*S+f*M)*W,e[11]=(d*S-u*w-p*M)*W,e[12]=(a*D-o*U-l*b)*W,e[13]=(t*U-i*D+s*b)*W,e[14]=(_*T-v*A-m*M)*W,e[15]=(u*A-d*T+h*M)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,v=r*d,_=o*u,m=o*d,f=a*d,M=l*c,T=l*u,S=l*d,A=i.x,w=i.y,g=i.z;return s[0]=(1-(_+f))*A,s[1]=(p+S)*A,s[2]=(v-T)*A,s[3]=0,s[4]=(p-S)*w,s[5]=(1-(h+f))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(v+T)*g,s[9]=(m-M)*g,s[10]=(1-(h+_))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ks.set(s[0],s[1],s[2]).length(),a=Ks.set(s[4],s[5],s[6]).length(),l=Ks.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ei.copy(this);let c=1/o,u=1/a,d=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,t.setFromRotationMatrix(ei),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=qn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s),v,_;if(l)v=r/(o-r),_=o*r/(o-r);else if(a===qn)v=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ho)v=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=qn,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s),v,_;if(l)v=1/(o-r),_=o/(o-r);else if(a===qn)v=-2/(o-r),_=-(o+r)/(o-r);else if(a===ho)v=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Al.prototype.isMatrix4=!0;_t=Al,Ks=new k,ei=new _t,hg=new k(0,0,0),dg=new k(1,1,1),Qi=new k,Sa=new k,Fn=new k,Rd=new _t,Pd=new On,ss=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pd.setFromEuler(this),this.setFromQuaternion(Pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ss.DEFAULT_ORDER="XYZ";pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fg=0,Id=new k,Js=new On,Ei=new _t,ba=new k,Qr=new k,pg=new k,mg=new On,Ld=new k(1,0,0),Nd=new k(0,1,0),Dd=new k(0,0,1),Ud={type:"added"},gg={type:"removed"},Qs={type:"childadded",child:null},gu={type:"childremoved",child:null},Nn=class n extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new ss,i=new On,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new je}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return Id.copy(e).applyQuaternion(this.quaternion),this.position.add(Id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ba.copy(e):ba.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Qr,ba,this.up):Ei.lookAt(ba,Qr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Ei),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ud),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gg),gu.child=e,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ud),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,pg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nn.DEFAULT_UP=new k(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;yn=class extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},vg={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new yn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},wa={h:0,s:0,l:0};tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=rh(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=vu(o,r,e+1/3),this.g=vu(o,r,e),this.b=vu(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=Tn){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){let i=Vf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return ut.workingToColorSpace(_n.copy(this),e),Math.round(dt(_n.r*255,0,255))*65536+Math.round(dt(_n.g*255,0,255))*256+Math.round(dt(_n.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(_n.copy(this),t);let i=_n.r,s=_n.g,r=_n.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Tn){ut.workingToColorSpace(_n.copy(this),e);let t=_n.r,i=_n.g,s=_n.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(wa);let i=ao(ji.h,wa.h,t),s=ao(ji.s,wa.s,t),r=ao(ji.l,wa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new tt;tt.NAMES=Vf;mo=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ti=new k,Ti=new k,xu=new k,Ai=new k,js=new k,er=new k,Fd=new k,_u=new k,yu=new k,Mu=new k,Su=new Ut,bu=new Ut,wu=new Ut,is=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ti.subVectors(s,t),Ti.subVectors(i,t),xu.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Ti),l=ti.dot(xu),c=Ti.dot(Ti),u=Ti.dot(xu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Su.setScalar(0),bu.setScalar(0),wu.setScalar(0),Su.fromBufferAttribute(e,t),bu.fromBufferAttribute(e,i),wu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Su,r.x),o.addScaledVector(bu,r.y),o.addScaledVector(wu,r.z),o}static isFrontFacing(e,t,i,s){return ti.subVectors(i,t),Ti.subVectors(e,t),ti.cross(Ti).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ti.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;js.subVectors(s,i),er.subVectors(r,i),_u.subVectors(e,i);let l=js.dot(_u),c=er.dot(_u);if(l<=0&&c<=0)return t.copy(i);yu.subVectors(e,s);let u=js.dot(yu),d=er.dot(yu);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(js,o);Mu.subVectors(e,r);let p=js.dot(Mu),v=er.dot(Mu);if(v>=0&&p<=v)return t.copy(r);let _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(er,a);let m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return Fd.subVectors(r,s),a=(d-u)/(d-u+(p-v)),t.copy(s).addScaledVector(Fd,a);let f=1/(m+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(js,o).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ea.copy(i.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Ta.subVectors(this.max,jr),tr.subVectors(e.a,jr),nr.subVectors(e.b,jr),ir.subVectors(e.c,jr),es.subVectors(nr,tr),ts.subVectors(ir,nr),Es.subVectors(tr,ir);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Es.z,Es.y,es.z,0,-es.x,ts.z,0,-ts.x,Es.z,0,-Es.x,-es.y,es.x,0,-ts.y,ts.x,0,-Es.y,Es.x,0];return!Eu(t,tr,nr,ir,Ta)||(t=[1,0,0,0,1,0,0,0,1],!Eu(t,tr,nr,ir,Ta))?!1:(Aa.crossVectors(es,ts),t=[Aa.x,Aa.y,Aa.z],Eu(t,tr,nr,ir,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ci=[new k,new k,new k,new k,new k,new k,new k,new k],ni=new k,Ea=new fi,tr=new k,nr=new k,ir=new k,es=new k,ts=new k,Es=new k,jr=new k,Ta=new k,Aa=new k,Ts=new k;Yt=new k,Ca=new Ye,xg=0,Jt=class extends di{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uf,this.updateRanges=[],this.gpuType=$n,this.version=0,this._normalizationScale=e!==void 0?ah(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hf(e,this.array)}},go=class extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},vo=class extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Mt=class extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},_g=new fi,eo=new k,Tu=new k,Yn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):_g.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);let t=eo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(eo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Tu)),this.expandByPoint(eo.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yg=0,Xn=new _t,Au=new Nn,sr=new k,Bn=new fi,to=new fi,an=new k,Ft=class n extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xm(e)?vo:go)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Bn.min,to.min),Bn.expandByPoint(an),an.addVectors(Bn.max,to.max),Bn.expandByPoint(an)):(Bn.expandByPoint(to.min),Bn.expandByPoint(to.max))}Bn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(sr.fromBufferAttribute(e,c),an.add(sr)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Jt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)a[D]=new k,l[D]=new k;let u=new k,d=new k,h=new k,p=new Ye,v=new Ye,_=new Ye,m=new k,f=new k;function M(D,R,U){c[D]=c[R]=c[U]=1,u.fromBufferAttribute(i,D),d.fromBufferAttribute(i,R),h.fromBufferAttribute(i,U),p.fromBufferAttribute(r,D),v.fromBufferAttribute(r,R),_.fromBufferAttribute(r,U),d.sub(u),h.sub(u),v.sub(p),_.sub(p);let B=1/(v.x*_.y-_.x*v.y);isFinite(B)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(h,-v.y).multiplyScalar(B),f.copy(h).multiplyScalar(v.x).addScaledVector(d,-_.x).multiplyScalar(B),a[D].add(m),a[R].add(m),a[U].add(m),l[D].add(f),l[R].add(f),l[U].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,R=T.length;D<R;++D){let U=T[D],B=U.start,X=U.count;for(let L=B,W=B+X;L<W;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let S=new k,A=new k,w=new k,g=new k;function b(D){w.fromBufferAttribute(s,D),g.copy(w);let R=a[D];S.copy(R),S.sub(w.multiplyScalar(w.dot(R))).normalize(),A.crossVectors(g,R);let B=A.dot(l[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,B)}for(let D=0,R=i.count;D<R;++D)c[D]&&b(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){let v=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new Jt(h,u,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cu=new k,Mg=new k,Sg=new je,ii=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Cu.subVectors(i,t).cross(Mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Cu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sg.getNormalMatrix(e),s=this.coplanarPoint(Cu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bg=0,Li=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=Sr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Wu,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ii().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ri=new k,Ru=new k,Ra=new k,Pa=new k,Ni=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ru.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),Pa.copy(this.origin).sub(Ru);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ra),a=Pa.dot(this.direction),l=-Pa.dot(Ra),c=Pa.lengthSq(),u=Math.abs(1-o*o),d,h,p,v;if(u>0)if(d=o*l-a,h=o*a-l,v=r*u,d>=0)if(h>=-v)if(h<=v){let _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ru).addScaledVector(Ra,h),p}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let i=Ri.dot(this.direction),s=Ri.dot(Ri)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,p=e.z-o.z,v=t.x-o.x,_=t.y-o.y,m=t.z-o.z,f=i.x-o.x,M=i.y-o.y,T=i.z-o.z,S=Math.abs(l),A=Math.abs(c),w=Math.abs(u),g,b,D,R,U,B,X,L,W,Z,q,re;if(S>=A&&S>=w?(D=l,B=d,W=v,re=f,l>=0?(g=c,b=u,R=h,U=p,X=_,L=m,Z=M,q=T):(g=u,b=c,R=p,U=h,X=m,L=_,Z=T,q=M)):A>=w?(D=c,B=h,W=_,re=M,c>=0?(g=u,b=l,R=p,U=d,X=m,L=v,Z=T,q=f):(g=l,b=u,R=d,U=p,X=v,L=m,Z=f,q=T)):(D=u,B=p,W=m,re=T,u>=0?(g=l,b=c,R=d,U=h,X=v,L=_,Z=f,q=M):(g=c,b=l,R=h,U=d,X=_,L=v,Z=M,q=f)),D===0)return null;let Y=g/D,ne=b/D,se=1/D,Ue=R-Y*B,$e=U-ne*B,j=X-Y*W,be=L-ne*W,Ie=Z-Y*re,ze=q-ne*re,_e=Ie*be-ze*j,Qe=Ue*ze-$e*Ie,Lt=j*$e-be*Ue;if(s){if(_e<0||Qe<0||Lt<0)return null}else if((_e<0||Qe<0||Lt<0)&&(_e>0||Qe>0||Lt>0))return null;let We=_e+Qe+Lt;if(We===0)return null;let ht=se*(_e*B+Qe*W+Lt*re);return(We>0?ht<0:ht>0)?null:this.at(ht/We,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Di=class extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bd=new _t,As=new Ni,Ia=new Yn,Od=new k,La=new k,Na=new k,Da=new k,Pu=new k,Ua=new k,kd=new k,Fa=new k,yt=class extends Nn{constructor(e=new Ft,t=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Pu.fromBufferAttribute(d,e),o?Ua.addScaledVector(Pu,u):Ua.addScaledVector(Pu.sub(t),u))}t.add(Ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(Ia.containsPoint(As.origin)===!1&&(As.intersectSphere(Ia,Od)===null||As.origin.distanceToSquared(Od)>(e.far-e.near)**2))&&(Bd.copy(r).invert(),As.copy(e.ray).applyMatrix4(Bd),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){let m=h[v],f=o[m.materialIndex],M=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,A=T;S<A;S+=3){let w=a.getX(S),g=a.getX(S+1),b=a.getX(S+2);s=Ba(this,f,e,i,c,u,d,w,g,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=v,f=_;m<f;m+=3){let M=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);s=Ba(this,o,e,i,c,u,d,M,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){let m=h[v],f=o[m.materialIndex],M=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,A=T;S<A;S+=3){let w=S,g=S+1,b=S+2;s=Ba(this,f,e,i,c,u,d,w,g,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,f=_;m<f;m+=3){let M=m,T=m+1,S=m+2;s=Ba(this,o,e,i,c,u,d,M,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};xo=class extends Ln{constructor(e=null,t=1,i=1,s,r,o,a,l,c=ln,u=ln,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rs=class extends Jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new _t,zd=new _t,Oa=[],Hd=new fi,Eg=new _t,no=new yt,io=new Yn,_o=class extends yt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Eg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),Hd.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(Hd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),io.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(no.geometry=this.geometry,no.material=this.material,no.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(i),e.ray.intersectsSphere(io)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),zd.multiplyMatrices(i,rr),no.matrixWorld=zd,no.raycast(e,Oa);for(let o=0,a=Oa.length;o<a;o++){let l=Oa[o];l.instanceId=r,l.object=this,t.push(l)}Oa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new xo(new Float32Array(s*this.count),s,this.count,Dl,$n));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new Yn,Tg=new Ye(.5,.5),ka=new k,Ps=class{constructor(e=new ii,t=new ii,i=new ii,s=new ii,r=new ii,o=new ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],v=r[8],_=r[9],m=r[10],f=r[11],M=r[12],T=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-o,p-u,f-v,A-M).normalize(),s[1].setComponents(c+o,p+u,f+v,A+M).normalize(),s[2].setComponents(c+a,p+d,f+_,A+T).normalize(),s[3].setComponents(c-a,p-d,f-_,A-T).normalize(),i)s[4].setComponents(l,h,m,S).normalize(),s[5].setComponents(c-l,p-h,f-m,A-S).normalize();else if(s[4].setComponents(c-l,p-h,f-m,A-S).normalize(),t===qn)s[5].setComponents(c+l,p+h,f+m,A+S).normalize();else if(t===ho)s[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);let t=Tg.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Vd=new _t,ll=class n{constructor(){this.coordinateSystem=qn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Vd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ps),i[s].setFromProjectionMatrix(Vd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ps),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}},gr=class extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},cl=new k,ul=new k,Gd=new _t,so=new Ni,za=new Yn,Iu=new k,Wd=new k,hl=class extends Nn{constructor(e=new Ft,t=new gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)cl.fromBufferAttribute(t,s-1),ul.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=cl.distanceTo(ul);e.setAttribute("lineDistance",new Mt(i,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;Gd.copy(s).invert(),so.copy(e.ray).applyMatrix4(Gd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=p,m=v-1;_<m;_+=c){let f=u.getX(_),M=u.getX(_+1),T=Ha(this,e,so,l,f,M,_);T&&t.push(T)}if(this.isLineLoop){let _=u.getX(v-1),m=u.getX(p),f=Ha(this,e,so,l,_,m,v-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let _=p,m=v-1;_<m;_+=c){let f=Ha(this,e,so,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){let _=Ha(this,e,so,l,v-1,p,v-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Xd=new k,qd=new k,yo=class extends hl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Xd.fromBufferAttribute(t,s),qd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Xd.distanceTo(qd);e.setAttribute("lineDistance",new Mt(i,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},dl=class extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yd=new _t,Fu=new Ni,Va=new Yn,Ga=new k,rs=class extends Nn{constructor(e=new Ft,t=new dl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;Yd.copy(s).invert(),Fu.copy(e.ray).applyMatrix4(Yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=h,_=p;v<_;v++){let m=c.getX(v);Ga.fromBufferAttribute(d,m),$d(Ga,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=h,_=p;v<_;v++)Ga.fromBufferAttribute(d,v),$d(Ga,v,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Mo=class extends Ln{constructor(e=[],t=Ns,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ui=class extends Ln{constructor(e,t,i=ri,s,r,o,a=ln,l=ln,c,u=Ii,d=1){if(u!==Ii&&u!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},So=class extends Ui{constructor(e,t=ri,i=Ns,s,r,o=ln,a=ln,l,c=Ii){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},bo=class extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vr=class n extends Ft{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(d,2));function v(_,m,f,M,T,S,A,w,g,b,D){let R=S/g,U=A/b,B=S/2,X=A/2,L=w/2,W=g+1,Z=b+1,q=0,re=0,Y=new k;for(let ne=0;ne<Z;ne++){let se=ne*U-X;for(let Ue=0;Ue<W;Ue++){let $e=Ue*R-B;Y[_]=$e*M,Y[m]=se*T,Y[f]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[f]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(Ue/g),d.push(1-ne/b),q+=1}}for(let ne=0;ne<b;ne++)for(let se=0;se<g;se++){let Ue=h+se+W*ne,$e=h+se+W*(ne+1),j=h+(se+1)+W*(ne+1),be=h+(se+1)+W*ne;l.push(Ue,$e,be),l.push($e,j,be),re+=6}a.addGroup(p,re,D),p+=re,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},wo=class n extends Ft{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],v=0,_=[],m=i/2,f=0;M(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(p,2));function M(){let S=new k,A=new k,w=0,g=(t-e)/i;for(let b=0;b<=r;b++){let D=[],R=b/r,U=R*(t-e)+e;for(let B=0;B<=s;B++){let X=B/s,L=X*l+a,W=Math.sin(L),Z=Math.cos(L);A.x=U*W,A.y=-R*i+m,A.z=U*Z,d.push(A.x,A.y,A.z),S.set(W,g,Z).normalize(),h.push(S.x,S.y,S.z),p.push(X,1-R),D.push(v++)}_.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){let R=_[D][b],U=_[D+1][b],B=_[D+1][b+1],X=_[D][b+1];(e>0||D!==0)&&(u.push(R,U,X),w+=3),(t>0||D!==r-1)&&(u.push(U,B,X),w+=3)}c.addGroup(f,w,0),f+=w}function T(S){let A=v,w=new Ye,g=new k,b=0,D=S===!0?e:t,R=S===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*R,0),h.push(0,R,0),p.push(.5,.5),v++;let U=v;for(let B=0;B<=s;B++){let L=B/s*l+a,W=Math.cos(L),Z=Math.sin(L);g.x=D*Z,g.y=m*R,g.z=D*W,d.push(g.x,g.y,g.z),h.push(0,R,0),w.x=W*.5+.5,w.y=Z*.5*R+.5,p.push(w.x,w.y),v++}for(let B=0;B<s;B++){let X=A+B,L=U+B;S===!0?u.push(L,L+1,X):u.push(L+1,L,X),b+=3}c.addGroup(f,b,S===!0?1:2),f+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fl=class n extends Ft{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let T=new k,S=new k,A=new k;for(let w=0;w<t.length;w+=3)p(t[w+0],T),p(t[w+1],S),p(t[w+2],A),l(T,S,A,M)}function l(M,T,S,A){let w=A+1,g=[];for(let b=0;b<=w;b++){g[b]=[];let D=M.clone().lerp(S,b/w),R=T.clone().lerp(S,b/w),U=w-b;for(let B=0;B<=U;B++)B===0&&b===w?g[b][B]=D:g[b][B]=D.clone().lerp(R,B/U)}for(let b=0;b<w;b++)for(let D=0;D<2*(w-b)-1;D++){let R=Math.floor(D/2);D%2===0?(h(g[b][R+1]),h(g[b+1][R]),h(g[b][R])):(h(g[b][R+1]),h(g[b+1][R+1]),h(g[b+1][R]))}}function c(M){let T=new k;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(M),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function u(){let M=new k;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];let S=m(M)/2/Math.PI+.5,A=f(M)/Math.PI+.5;o.push(S,1-A)}v(),d()}function d(){for(let M=0;M<o.length;M+=6){let T=o[M+0],S=o[M+2],A=o[M+4],w=Math.max(T,S,A),g=Math.min(T,S,A);w>.9&&g<.1&&(T<.2&&(o[M+0]+=1),S<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function p(M,T){let S=M*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function v(){let M=new k,T=new k,S=new k,A=new k,w=new Ye,g=new Ye,b=new Ye;for(let D=0,R=0;D<r.length;D+=9,R+=6){M.set(r[D+0],r[D+1],r[D+2]),T.set(r[D+3],r[D+4],r[D+5]),S.set(r[D+6],r[D+7],r[D+8]),w.set(o[R+0],o[R+1]),g.set(o[R+2],o[R+3]),b.set(o[R+4],o[R+5]),A.copy(M).add(T).add(S).divideScalar(3);let U=m(A);_(w,R+0,M,U),_(g,R+2,T,U),_(b,R+4,S,U)}}function _(M,T,S,A){A<0&&M.x===1&&(o[T]=M.x-1),S.x===0&&S.z===0&&(o[T]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},pi=class n extends fl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},si=class n extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,p=[],v=[],_=[],m=[];for(let f=0;f<u;f++){let M=f*h-o;for(let T=0;T<c;T++){let S=T*d-r;v.push(S,-M,0),_.push(0,0,1),m.push(T/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let T=M+c*f,S=M+c*(f+1),A=M+1+c*(f+1),w=M+1+c*f;p.push(T,S,w),p.push(S,A,w)}this.setIndex(p),this.setAttribute("position",new Mt(v,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},os=class n extends Ft{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,p=new k,v=new Ye;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let f=r+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,u.push(v.x,v.y)}d+=h}for(let _=0;_<s;_++){let m=_*(i+1);for(let f=0;f<i;f++){let M=f+m,T=M,S=M+i+1,A=M+i+2,w=M+1;a.push(T,S,w),a.push(S,A,w)}}this.setIndex(a),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Eo=class n extends Ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new k,h=new k,p=[],v=[],_=[],m=[];for(let f=0;f<=i;f++){let M=[],T=f/i,S=o+T*a,A=e*Math.cos(S),w=Math.sqrt(e*e-A*A),g=0;f===0&&o===0?g=.5/t:f===i&&l===Math.PI&&(g=-.5/t);for(let b=0;b<=t;b++){let D=b/t,R=s+D*r;d.x=-w*Math.cos(R),d.y=A,d.z=w*Math.sin(R),v.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(D+g,1-T),M.push(c++)}u.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){let T=u[f][M+1],S=u[f][M],A=u[f+1][M],w=u[f+1][M+1];(f!==0||o>0)&&p.push(T,S,w),(f!==i-1||l<Math.PI)&&p.push(S,A,w)}this.setIndex(p),this.setAttribute("position",new Mt(v,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};zi={clone:Us,merge:Mn},Cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ft=class extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cg,this.fragmentShader=Rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[i].value=new je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xr=class extends ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pl=class extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ml=class extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};as=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gl=class extends as{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nu,endingEnd:Nu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Du:r=e,a=2*t-i;break;case Uu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Du:o=e,l=2*i-t;break;case Uu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,v=(i-t)/(s-t),_=v*v,m=_*v,f=-h*m+2*h*_-h*v,M=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*v+1,T=(-1-p)*m+(1.5+p)*_+.5*v,S=p*m-p*_;for(let A=0;A!==a;++A)r[A]=f*o[u+A]+M*o[c+A]+T*o[l+A]+S*o[d+A];return r}},vl=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},xl=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_l=class extends as{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let v=(i-t)/(s-t),_=1-v;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*v;return r}let h=a*2,p=e-1;for(let v=0;v!==a;++v){let _=o[c+v],m=o[l+v],f=p*h+v*2,M=d[f],T=d[f+1],S=e*h+v*2,A=u[S],w=u[S+1],g=Ig(i,t,M,A,s);r[v]=Gf(g,_,T,w,m)}return r}};kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=or(t,this.TimeBufferType),this.values=or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:or(e.times,Array),values:or(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Wa(e.settings)&&(i.settings={inTangents:or(e.settings.inTangents,Array),outTangents:or(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _l(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case lo:t=this.InterpolantFactoryMethodDiscrete;break;case sl:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break;case Lu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return Ya;case this.InterpolantFactoryMethodBezier:return Lu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Wa(this.settings)&&(Kd(this.settings.inTangents,e),Kd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Wa(this.settings)&&(Jd(this.settings.inTangents,e),Jd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&qm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ya,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let v=0;v!==i;++v){let _=t[d+v];if(_!==t[h+v]||_!==t[p+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=sl;ls=class extends kn{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=lo;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;yl=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};yl.prototype.ValueTypeName="color";Ml=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};Ml.prototype.ValueTypeName="number";Sl=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)On.slerpFlat(r,0,o,c-a,o,c,l);return r}},To=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}};To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;cs=class extends kn{constructor(e,t,i){super(e,t,i)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=lo;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;bl=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};bl.prototype.ValueTypeName="vector";wl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wf=new wl,El=class{constructor(e){this.manager=e!==void 0?e:Wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};El.DEFAULT_MATERIAL_NAME="__DEFAULT";Xa=new k,qa=new On,ui=new k,Ao=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,qa,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Xa,qa,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new k,Qd=new Ye,jd=new Ye,An=class extends Ao{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Qd,jd),t.subVectors(jd,Qd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(oo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_r=class extends Ao{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ar=-90,lr=1,yr=class extends Nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new An(ar,lr,e,t);s.layers=this.layers,this.add(s);let r=new An(ar,lr,e,t);r.layers=this.layers,this.add(r);let o=new An(ar,lr,e,t);o.layers=this.layers,this.add(o);let a=new An(ar,lr,e,t);a.layers=this.layers,this.add(a);let l=new An(ar,lr,e,t);l.layers=this.layers,this.add(l);let c=new An(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Tl=class extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Co=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Lg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};ch="\\[\\]\\.:\\/",Ng=new RegExp("["+ch+"]","g"),uh="[^"+ch+"]",Dg="[^"+ch.replace("\\.","")+"]",Ug=/((?:WC+[\/:])*)/.source.replace("WC",uh),Fg=/(WCOD+)?/.source.replace("WCOD",Dg),Bg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),Og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),kg=new RegExp("^"+Ug+Fg+Bg+Og+"$"),zg=["material","materials","bones","map"],Bu=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ng,"")}static parseTrackName(e){let t=kg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);zg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Bu;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];XM=new Float32Array(1),ef=new _t,Ro=class{constructor(e,t,i=0,s=1/0){this.ray=new Ni(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(e,t=!0,i=[]){return Ou(e,this,i,t),i.sort(tf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ou(e[s],this,i,t);return i.sort(tf),i}};gh=class gh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};gh.prototype.isMatrix2=!0;ku=gh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function dp(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Gg(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){let v=d[h],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){let _=d[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function wx(n,e,t,i,s,r){let o=new tt(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function p(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let S=M.backgroundBlurriness>0;T=e.get(T,S)}return T}function v(M){let T=!1,S=p(M);S===null?m(o,a):S&&S.isColor&&(m(S,1),T=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,T){let S=p(T);S&&S.isCubeTexture?(c===void 0&&(c=new yt(new vr(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:Us(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bx.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fp),c.material.toneMapped=ut.getTransfer(S.colorSpace)!==vt,(u!==S||d!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new yt(new si(2,2),new ft({name:"BackgroundMaterial",uniforms:Us(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ut.getTransfer(S.colorSpace)!==vt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,T){M.getRGB(mc,lh(n)),t.buffers.color.setClear(mc.r,mc.g,mc.b,T,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:v,addToRenderList:_,dispose:f}}function Ex(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(U,B,X,L,W){let Z=!1,q=d(U,L,X,B);r!==q&&(r=q,c(r.object)),Z=p(U,L,X,W),Z&&v(U,L,X,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(U,B,X,L),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,B,X,L){let W=L.wireframe===!0,Z=i[B.id];Z===void 0&&(Z={},i[B.id]=Z);let q=U.isInstancedMesh===!0?U.id:0,re=Z[q];re===void 0&&(re={},Z[q]=re);let Y=re[X.id];Y===void 0&&(Y={},re[X.id]=Y);let ne=Y[W];return ne===void 0&&(ne=h(l()),Y[W]=ne),ne}function h(U){let B=[],X=[],L=[];for(let W=0;W<t;W++)B[W]=0,X[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:L,object:U,attributes:{},index:null}}function p(U,B,X,L){let W=r.attributes,Z=B.attributes,q=0,re=X.getAttributes();for(let Y in re)if(re[Y].location>=0){let se=W[Y],Ue=Z[Y];if(Ue===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Ue=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Ue=U.instanceColor)),se===void 0||se.attribute!==Ue||Ue&&se.data!==Ue.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function v(U,B,X,L){let W={},Z=B.attributes,q=0,re=X.getAttributes();for(let Y in re)if(re[Y].location>=0){let se=Z[Y];se===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(se=U.instanceColor));let Ue={};Ue.attribute=se,se&&se.data&&(Ue.data=se.data),W[Y]=Ue,q++}r.attributes=W,r.attributesNum=q,r.index=L}function _(){let U=r.newAttributes;for(let B=0,X=U.length;B<X;B++)U[B]=0}function m(U){f(U,0)}function f(U,B){let X=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;X[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),W[U]!==B&&(n.vertexAttribDivisor(U,B),W[U]=B)}function M(){let U=r.newAttributes,B=r.enabledAttributes;for(let X=0,L=B.length;X<L;X++)B[X]!==U[X]&&(n.disableVertexAttribArray(X),B[X]=0)}function T(U,B,X,L,W,Z,q){q===!0?n.vertexAttribIPointer(U,B,X,W,Z):n.vertexAttribPointer(U,B,X,L,W,Z)}function S(U,B,X,L){_();let W=L.attributes,Z=X.getAttributes(),q=B.defaultAttributeValues;for(let re in Z){let Y=Z[re];if(Y.location>=0){let ne=W[re];if(ne===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor)),ne!==void 0){let se=ne.normalized,Ue=ne.itemSize,$e=e.get(ne);if($e===void 0)continue;let j=$e.buffer,be=$e.type,Ie=$e.bytesPerElement,ze=be===n.INT||be===n.UNSIGNED_INT||ne.gpuType===Il;if(ne.isInterleavedBufferAttribute){let _e=ne.data,Qe=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,Lt=ne.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let We=0;We<Y.locationSize;We++)f(Y.location+We,_e.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let We=0;We<Y.locationSize;We++)m(Y.location+We);n.bindBuffer(n.ARRAY_BUFFER,j);for(let We=0;We<Y.locationSize;We++)T(Y.location+We,Ue/Y.locationSize,be,se,Qe*Ie,(Lt+Ue/Y.locationSize*We)*Ie,ze)}else{if(ne.isInstancedBufferAttribute){for(let _e=0;_e<Y.locationSize;_e++)f(Y.location+_e,ne.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let _e=0;_e<Y.locationSize;_e++)m(Y.location+_e);n.bindBuffer(n.ARRAY_BUFFER,j);for(let _e=0;_e<Y.locationSize;_e++)T(Y.location+_e,Ue/Y.locationSize,be,se,Ue*Ie,Ue/Y.locationSize*_e*Ie,ze)}}else if(q!==void 0){let se=q[re];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(Y.location,se);break;case 3:n.vertexAttrib3fv(Y.location,se);break;case 4:n.vertexAttrib4fv(Y.location,se);break;default:n.vertexAttrib1fv(Y.location,se)}}}}M()}function A(){D();for(let U in i){let B=i[U];for(let X in B){let L=B[X];for(let W in L){let Z=L[W];for(let q in Z)u(Z[q].object),delete Z[q];delete L[W]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;let B=i[U.id];for(let X in B){let L=B[X];for(let W in L){let Z=L[W];for(let q in Z)u(Z[q].object),delete Z[q];delete L[W]}}delete i[U.id]}function g(U){for(let B in i){let X=i[B];for(let L in X){let W=X[L];if(W[U.id]===void 0)continue;let Z=W[U.id];for(let q in Z)u(Z[q].object),delete Z[q];delete W[U.id]}}}function b(U){for(let B in i){let X=i[B],L=U.isInstancedMesh===!0?U.id:0,W=X[L];if(W!==void 0){for(let Z in W){let q=W[Z];for(let re in q)u(q[re].object),delete q[re];delete W[Z]}delete X[L],Object.keys(X).length===0&&delete i[B]}}}function D(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Tx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ax(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==oi&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let b=g===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==zn&&g!==$n&&!b&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:S,maxSamples:A,samples:w}}function Cx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ii,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{let M=r?0:i,T=M*4,S=f.clippingState||null;l.value=S,S=u(v,h,T,p);for(let A=0;A!==T;++A)S[A]=t[A];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,v!==!0||m===null){let f=p+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,S=p;T!==_;++T,S+=4)o.copy(d[T]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function qf(n,e,t){return new $o(n,{minFilter:Bi,generateMipmaps:e,type:fn,colorSpace:co,depthBuffer:t})}function Zo(n,e,t){return new ft({name:n,uniforms:e,vertexShader:ot.cube_vert,fragmentShader:t,side:dn,blending:Fi,depthTest:!1,depthWrite:!1})}function Dx(){return Zo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ux(){return Zo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fx(){return Zo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Px}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Yf(){return Zo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function $f(){return Zo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Cl||p===Rl)if(e.has(h)){let v=e.get(h).texture;return a(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let _=new $o(v.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,v=p===Cl||p===Rl,_=p===Ns||p===br;if(v||_){let m=t.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new vc(n)),m=v?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return v&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new vc(n)),m=v?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Cl?h.mapping=Ns:p===Rl&&(h.mapping=br),h}function l(h){let p=0,v=6;for(let _=0;_<v;_++)h[_]!==void 0&&p++;return p===v}function c(h){let p=h.target;p.removeEventListener("dispose",c);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Ox(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ro("WebGLRenderer: "+i+" extension not supported."),s}}}function kx(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(v=>delete s[v]);function a(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(let m in v.attributes)e.remove(v.attributes[m]);v.removeEventListener("dispose",a),delete s[v.id],o.unregister(v);let _=r.get(v);_&&(e.remove(_),r.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(v,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(v){let _=v.attributes;for(let m in _)e.update(_[m],n.ARRAY_BUFFER)}function d(v){let _=v.index,m=v.attributes.position,f=0;if(m===void 0)return;let M=_!==null?_.array.length:m.array.length/3-1,T=m.count>=65535?vo:go,S=new T(Math.ceil(M/3)*6,1),A=S.array;if(_!==null){let g=_.array;f=_.version;for(let b=0,D=0;b<M;b+=3){let R=g[b+0],U=g[b+1],B=g[b+2];A[D++]=R,A[D++]=U,A[D++]=U,A[D++]=B,A[D++]=B,A[D++]=R}}else{f=m.version;for(let g=0,b=0;g<M;g+=3){let D=g+0,R=g+1,U=g+2;A[b++]=D,A[b++]=R,A[b++]=R,A[b++]=U,A[b++]=U,A[b++]=D}}S.version=f;let w=r.get(v);w&&e.remove(w),r.set(v,S)}function h(v){let _=r.get(v);if(_){let m=v.index;m!==null&&_.version<m.version&&d(v)}else d(v);return r.get(v)}function p(){for(let v in s){let _=s[v].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function zx(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*o,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Hx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Vx(n,e,t){let i=new WeakMap,s=new Ut;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let D=function(){g.dispose(),i.delete(a),a.removeEventListener("dispose",D)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;p===!0&&(T=1),v===!0&&(T=2),_===!0&&(T=3);let S=a.attributes.position.count*T,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let w=new Float32Array(S*A*4*d),g=new po(w,S,A,d);g.type=$n,g.needsUpdate=!0;let b=T*4;for(let R=0;R<d;R++){let U=m[R],B=f[R],X=M[R],L=S*A*4*R;for(let W=0;W<U.count;W++){let Z=W*b;p===!0&&(s.fromBufferAttribute(U,W),w[L+Z+0]=s.x,w[L+Z+1]=s.y,w[L+Z+2]=s.z,w[L+Z+3]=0),v===!0&&(s.fromBufferAttribute(B,W),w[L+Z+4]=s.x,w[L+Z+5]=s.y,w[L+Z+6]=s.z,w[L+Z+7]=0),_===!0&&(s.fromBufferAttribute(X,W),w[L+Z+8]=s.x,w[L+Z+9]=s.y,w[L+Z+10]=s.z,w[L+Z+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:g,size:new Ye(S,A)},i.set(a,h),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Gx(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}function Xx(n,e,t,i,s,r){let o=new Qt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ft;u.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Mt([0,2,0,0,2,0],2));let d=new xr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new yt(u,d),p=new _r(-1,1,1,-1,0,1),v=null,_=null,m=!1,f,M=null,T=[],S=!1;this.setSize=function(A,w){o.setSize(A,w),a!==null&&a.setSize(A,w),l!==null&&l.setSize(A,w);for(let g=0;g<T.length;g++){let b=T[g];b.setSize&&b.setSize(A,w)}},this.setEffects=function(A){T=A,S=T.length>0&&T[0].isRenderPass===!0;let w=o.width,g=o.height;T.length>0&&a===null&&(a=new Qt(w,g,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new Qt(w,g,{type:fn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(D=>D.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ui(w,g),r===!0&&(c.format=Oi,c.type=Ds)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let D=0;D<T.length;D++){let R=T[D];R.setSize&&R.setSize(w,g),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,w){if(m||A.toneMapping===mi&&T.length===0)return!1;if(M=w,w!==null){let g=w.width,b=w.height;(o.width!==g||o.height!==b)&&this.setSize(g,b)}return S===!1&&A.setRenderTarget(o),f=A.toneMapping,A.toneMapping=mi,!0},this.hasRenderPass=function(){return S},this.end=function(A,w){A.toneMapping=f,m=!0;let g=o,b=a;for(let D=0;D<T.length;D++){let R=T[D];R.enabled!==!1&&(R.render(A,b,g,w),R.needsSwap!==!1&&(g=b,b=b===a?l:a))}if(v!==A.outputColorSpace||_!==A.toneMapping){v=A.outputColorSpace,_=A.toneMapping,d.defines={},ut.getTransfer(v)===vt&&(d.defines.SRGB_TRANSFER="");let D=Wx[_];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(M),A.render(h,p),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}function Ar(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Zf[s];if(r===void 0&&(r=new Float32Array(s),Zf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _c(n,e){let t=Kf[e];t===void 0&&(t=new Int32Array(e),Kf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function $x(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function Zx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function Kx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;jf.set(i),n.uniformMatrix2fv(this.addr,!1,jf),en(t,i)}}function Jx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;Qf.set(i),n.uniformMatrix3fv(this.addr,!1,Qf),en(t,i)}}function Qx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;Jf.set(i),n.uniformMatrix4fv(this.addr,!1,Jf),en(t,i)}}function jx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function t_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function n_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function i_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function r_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function o_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function yc(n){return n.version===0&&(n.compareFunction=nh,n.needsUpdate=!0),n}function a_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=yc(vp):r=gp,t.setTexture2D(e||r,s)}function l_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||yp,s)}function c_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=yc(xp):r=Mp,t.setTextureCube(e||r,s)}function u_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||_p,s)}function h_(n){switch(n){case 5126:return qx;case 35664:return Yx;case 35665:return $x;case 35666:return Zx;case 35674:return Kx;case 35675:return Jx;case 35676:return Qx;case 5124:case 35670:return jx;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return u_}}function d_(n,e){n.uniform1fv(this.addr,e)}function f_(n,e){let t=Ar(e,this.size,2);n.uniform2fv(this.addr,t)}function p_(n,e){let t=Ar(e,this.size,3);n.uniform3fv(this.addr,t)}function m_(n,e){let t=Ar(e,this.size,4);n.uniform4fv(this.addr,t)}function g_(n,e){let t=Ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v_(n,e){let t=Ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function x_(n,e){let t=Ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function __(n,e){n.uniform1iv(this.addr,e)}function y_(n,e){n.uniform2iv(this.addr,e)}function M_(n,e){n.uniform3iv(this.addr,e)}function S_(n,e){n.uniform4iv(this.addr,e)}function b_(n,e){n.uniform1uiv(this.addr,e)}function w_(n,e){n.uniform2uiv(this.addr,e)}function E_(n,e){n.uniform3uiv(this.addr,e)}function T_(n,e){n.uniform4uiv(this.addr,e)}function A_(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=yc(vp):o=gp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function C_(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yp,r[o])}function R_(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=yc(xp):o=Mp;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function P_(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_p,r[o])}function I_(n){switch(n){case 5126:return d_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return v_;case 35676:return x_;case 5124:case 35670:return __;case 35667:case 35671:return y_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return b_;case 36294:return w_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return P_}}function ep(n,e){n.seq.push(e),n.map[e.id]=e}function L_(n,e,t){let i=n.name,s=i.length;for(xh.lastIndex=0;;){let r=xh.exec(i),o=xh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ep(t,c===void 0?new yh(a,n,e):new Mh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Sh(a),ep(t,d)),t=d}}}function tp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function U_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function F_(n){ut._getMatrix(np,ut.workingColorSpace,n);let e=`mat3( ${np.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case uo:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ip(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+U_(n.getShaderSource(e),a)}else return r}function B_(n,e){let t=F_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function k_(n,e){let t=O_[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function z_(){ut.getLuminanceCoefficients(gc);let n=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function V_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function G_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yo(n){return n!==""}function sp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function rp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function bh(n){return n.replace(W_,X_)}function X_(n,e){let t=ot[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return bh(t)}function op(n){return n.replace(q_,Y_)}function Y_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ap(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z_(n){return $_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function J_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":K_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function j_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Q_[n.combine]||"ENVMAP_BLENDING_NONE"}function ey(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Z_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=J_(t),d=j_(t),h=H_(t),p=V_(r),v=s.createProgram(),_,m,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Yo).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Yo).join(`
`),m.length>0&&(m+=`
`)):(_=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),m=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ot.tonemapping_pars_fragment:"",t.toneMapping!==mi?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,B_("linearToOutputTexel",t.outputColorSpace),z_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yo).join(`
`)),o=bh(o),o=sp(o,t),o=rp(o,t),a=bh(a),a=sp(a,t),a=rp(a,t),o=op(o),a=op(a),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=f+_+o,T=f+m+a,S=tp(s,s.VERTEX_SHADER,M),A=tp(s,s.FRAGMENT_SHADER,T);s.attachShader(v,S),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(R){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(S)||"",X=s.getShaderInfoLog(A)||"",L=U.trim(),W=B.trim(),Z=X.trim(),q=!0,re=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,S,A);else{let Y=ip(s,S,"vertex"),ne=ip(s,A,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+Y+`
`+ne)}else L!==""?qe("WebGLProgram: Program Info Log:",L):(W===""||Z==="")&&(re=!1);re&&(R.diagnostics={runnable:q,programLog:L,vertexShader:{log:W,prefix:_},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(S),s.deleteShader(A),g=new Tr(s,v),b=G_(s,v)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(v,N_)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=A,this}function ny(n){return n===hs||n===Go||n===Wo}function iy(n,e,t,i,s,r){let o=new pr,a=new wh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function v(g,b,D,R,U,B){let X=R.fog,L=U.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,q=e.get(g.envMap||W,Z),re=h[g.type],Y=i.precision;g.precision!==null&&(Y=i.getMaxPrecision(g.precision),Y!==g.precision&&qe("WebGLProgram.getParameters:",g.precision,"not supported, using",Y,"instead."));let ne=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,se=ne!==void 0?ne.length:0,Ue=0;L.morphAttributes.position!==void 0&&(Ue=1),L.morphAttributes.normal!==void 0&&(Ue=2),L.morphAttributes.color!==void 0&&(Ue=3);let $e,j,be,Ie;if(re){let Me=vi[re];$e=Me.vertexShader,j=Me.fragmentShader}else{$e=g.vertexShader,j=g.fragmentShader;let Me=a.getVertexShaderStage(g),gt=a.getFragmentShaderStage(g);a.update(g,Me,gt),be=Me.id,Ie=gt.id}let ze=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Qe=U.isInstancedMesh===!0,Lt=U.isBatchedMesh===!0,We=!!g.map,ht=!!g.matcap,mt=!!q,rt=mt&&q.isPMREMTexture===!0,Nt=!!g.aoMap,kt=!!g.lightMap,cn=!!g.bumpMap&&g.wireframe===!1,Ct=!!g.normalMap,Xt=!!g.displacementMap,Bt=!!g.emissiveMap,un=!!g.metalnessMap,vn=!!g.roughnessMap,hn=g.anisotropy>0,F=g.clearcoat>0,$t=g.diffuseRoughness>0,St=g.dispersion>0,xt=g.retroreflectivity>0,ve=g.iridescence>0,Tt=g.sheen>0,He=g.transmission>0,Ze=hn&&!!g.anisotropyMap,E=F&&!!g.clearcoatMap,x=F&&!!g.clearcoatNormalMap,z=F&&!!g.clearcoatRoughnessMap,oe=$t&&!!g.diffuseRoughnessMap,te=ve&&!!g.iridescenceMap,de=ve&&!!g.iridescenceThicknessMap,pe=Tt&&!!g.sheenColorMap,Q=Tt&&!!g.sheenRoughnessMap,ee=!!g.specularMap,ae=!!g.specularColorMap,P=!!g.specularIntensityMap,J=He&&!!g.transmissionMap,$=He&&!!g.thicknessMap,me=!!g.gradientMap,ce=!!g.alphaMap,ge=g.alphaTest>0,Oe=!!g.alphaHash,nt=!!g.extensions,le=mi;g.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(le=n.toneMapping);let Ve=rt?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Ke={shaderID:re,shaderType:g.type,shaderName:g.name,vertexShader:$e,fragmentShader:j,defines:g.defines,customVertexShaderID:be,customFragmentShaderID:Ie,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Y,batching:Lt,batchingColor:Lt&&U._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&U.instanceColor!==null,instancingMorph:Qe&&U.morphTexture!==null,outputColorSpace:ze===null?n.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:We,matcap:ht,envMap:mt,envMapMode:mt&&q.mapping,envMapPMREM:rt,envMapMaxLod:rt?Ve.length-1:null,envMapSize:rt?Ve[0].width:null,aoMap:Nt,lightMap:kt,bumpMap:cn,normalMap:Ct,displacementMap:Xt,emissiveMap:Bt,normalMapObjectSpace:Ct&&g.normalMapType===Cf,normalMapTangentSpace:Ct&&g.normalMapType===ju,packedNormalMap:Ct&&g.normalMapType===ju&&ny(g.normalMap.format),metalnessMap:un,roughnessMap:vn,anisotropy:hn,anisotropyMap:Ze,clearcoat:F,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:z,diffuseRoughness:$t,diffuseRoughnessMap:oe,dispersion:St,retroreflection:xt,iridescence:ve,iridescenceMap:te,iridescenceThicknessMap:de,sheen:Tt,sheenColorMap:pe,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:ae,specularIntensityMap:P,transmission:He,transmissionMap:J,thicknessMap:$,gradientMap:me,opaque:g.transparent===!1&&g.blending===Sr&&g.alphaToCoverage===!1,alphaMap:ce,alphaTest:ge,alphaHash:Oe,combine:g.combine,mapUv:We&&p(g.map.channel),aoMapUv:Nt&&p(g.aoMap.channel),lightMapUv:kt&&p(g.lightMap.channel),bumpMapUv:cn&&p(g.bumpMap.channel),normalMapUv:Ct&&p(g.normalMap.channel),displacementMapUv:Xt&&p(g.displacementMap.channel),emissiveMapUv:Bt&&p(g.emissiveMap.channel),metalnessMapUv:un&&p(g.metalnessMap.channel),roughnessMapUv:vn&&p(g.roughnessMap.channel),anisotropyMapUv:Ze&&p(g.anisotropyMap.channel),clearcoatMapUv:E&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:te&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:Q&&p(g.sheenRoughnessMap.channel),specularMapUv:ee&&p(g.specularMap.channel),specularColorMapUv:ae&&p(g.specularColorMap.channel),specularIntensityMapUv:P&&p(g.specularIntensityMap.channel),transmissionMapUv:J&&p(g.transmissionMap.channel),thicknessMapUv:$&&p(g.thicknessMap.channel),alphaMapUv:ce&&p(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ct||hn),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(We||ce),fog:!!X,useFog:g.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&Ct===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ue,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:We&&g.map.isVideoTexture===!0&&ut.getTransfer(g.map.colorSpace)===vt,decodeVideoTextureEmissive:Bt&&g.emissiveMap.isVideoTexture===!0&&ut.getTransfer(g.emissiveMap.colorSpace)===vt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Rn,flipSided:g.side===dn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:nt&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&g.extensions.multiDraw===!0||Lt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function _(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let D in g.defines)b.push(D),b.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(m(b,g),f(b,g),b.push(n.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function m(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function f(g,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function M(g){let b=h[g.type],D;if(b){let R=vi[b];D=zi.clone(R.uniforms)}else D=g.uniforms;return D}function T(g,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new ey(n,b,g,s),c.push(D),u.set(b,D)),D}function S(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){a.remove(g)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:M,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:w}}function sy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ry(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function lp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,v,_,m,f){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:v,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:f},n[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=v,M.materialVariant=o(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=m,M.group=f),e++,M}function l(h,p,v,_,m,f,M){M.reversedDepth===!0&&(m=-m);let T=a(h,p,v,_,m,f);v.transmission>0?i.push(T):v.transparent===!0?s.push(T):t.push(T)}function c(h,p,v,_,m,f){let M=a(h,p,v,_,m,f);v.transmission>0?i.unshift(M):v.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,p){t.length>1&&t.sort(h||ry),i.length>1&&i.sort(p||lp),s.length>1&&s.sort(p||lp)}function d(){for(let h=e,p=n.length;h<p;h++){let v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function oy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new cp,n.set(i,[o])):s>=r.length?(o=new cp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ay(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new tt};break;case"SpotLight":t={position:new k,direction:new k,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function ly(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function uy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hy(n){let e=new ay,t=ly(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new _t,o=new _t;function a(c){let u=0,d=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,v=0,_=0,m=0,f=0,M=0,T=0,S=0,A=0,w=0,g=0,b=0,D=0,R=0;c.sort(uy);for(let B=0,X=c.length;B<X;B++){let L=c[B],W=L.color,Z=L.intensity,q=L.distance,re=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hs?re=L.shadow.map.texture:re=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=W.r*Z,d+=W.g*Z,h+=W.b*Z;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],Z);R++}else if(L.isSunLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,se=t.get(L);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[v]=se,i.sunShadowMap[v]=re;let Ue=ne.getViewportCount();for(let $e=0;$e<Ue;$e++)i.sunShadowMatrix[_+$e]=ne.getMatrix($e),i.sunShadowCascade[_+$e]=ne._cascadeData[$e];_+=Ue,v++}i.sun[p]=Y,p++}else if(L.isDirectionalLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,se=t.get(L);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,i.directionalShadow[m]=se,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=L.shadow.matrix,A++}i.directional[m]=Y,m++}else if(L.isSpotLight){let Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(W).multiplyScalar(Z),Y.distance=q,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[M]=Y;let ne=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,ne.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[M]=ne.matrix,L.castShadow){let se=t.get(L);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,i.spotShadow[M]=se,i.spotShadowMap[M]=re,g++}M++}else if(L.isRectAreaLight){let Y=e.get(L);Y.color.copy(W).multiplyScalar(Z),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[T]=Y,T++}else if(L.isPointLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let ne=L.shadow,se=t.get(L);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,se.shadowCameraNear=ne.camera.near,se.shadowCameraFar=ne.camera.far,i.pointShadow[f]=se,i.pointShadowMap[f]=re,i.pointShadowMatrix[f]=L.shadow.matrix,w++}i.point[f]=Y,f++}else if(L.isHemisphereLight){let Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(Z),Y.groundColor.copy(L.groundColor).multiplyScalar(Z),i.hemi[S]=Y,S++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==f||U.spotLength!==M||U.rectAreaLength!==T||U.hemiLength!==S||U.numSunShadows!==v||U.numDirectionalShadows!==A||U.numPointShadows!==w||U.numSpotShadows!==g||U.numSpotMaps!==b||U.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=m,i.spot.length=M,i.rectArea.length=T,i.point.length=f,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+b-D,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,U.sunLength=p,U.directionalLength=m,U.pointLength=f,U.spotLength=M,U.rectAreaLength=T,U.hemiLength=S,U.numSunShadows=v,U.numDirectionalShadows=A,U.numPointShadows=w,U.numSpotShadows=g,U.numSpotMaps=b,U.numLightProbes=R,i.version=cy++)}function l(c,u){let d=0,h=0,p=0,v=0,_=0,m=0,f=u.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let S=c[M];if(S.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(f),d++}else if(S.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),h++}else if(S.isSpotLight){let A=i.spot[v];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),v++}else if(S.isRectAreaLight){let A=i.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),o.identity(),r.copy(S.matrixWorld),r.premultiply(f),o.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let A=i.point[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:i}}function up(n){let e=new hy(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function dy(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new up(n),e.set(s,[a])):r>=o.length?(a=new up(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function vy(n,e,t){let i=new Ps,s=new Ye,r=new Ye,o=new Ut,a=new pl,l=new ml,c={},u=t.maxTextureSize,d={[us]:dn,[dn]:us,[Rn]:Rn},h=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:fy,fragmentShader:py}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let v=new Ft;v.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new yt(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let f=this.type;this.render=function(w,g,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===rf&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Po);let D=n.getRenderTarget(),R=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Fi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=f!==this.type;X&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=w.length;L<W;L++){let Z=w[L],q=Z.shadow;if(q===void 0){qe("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let re=q.getFrameExtents();s.multiply(re),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,q.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Y,q.map===null||X===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Mr){if(Z.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Qt(s.x,s.y,{format:hs,type:fn,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Ui(s.x,s.y,$n),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=Ii,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ln,q.map.depthTexture.magFilter=ln}else Z.isPointLight?(q.map=new $o(s.x),q.map.depthTexture=new So(s.x,ri)):(q.map=new Qt(s.x,s.y),q.map.depthTexture=new Ui(s.x,s.y,ri)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=Ii,this.type===Po?(q.map.depthTexture.compareFunction=Y?th:eh,q.map.depthTexture.minFilter=Cn,q.map.depthTexture.magFilter=Cn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ln,q.map.depthTexture.magFilter=ln);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ne=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,b);let se=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:b.layers;for(let Ue=0;Ue<ne;Ue++){let $e=q.getCamera(Ue);if(Z.isPointLight){let j=q.camera,be=q.matrix,Ie=Z.distance||j.far;Ie!==j.far&&(j.far=Ie,j.updateProjectionMatrix()),qo.setFromMatrixPosition(Z.matrixWorld),j.position.copy(qo),_h.copy(j.position),_h.add(my[Ue]),j.up.copy(gy[Ue]),j.lookAt(_h),j.updateMatrixWorld(),be.makeTranslation(-qo.x,-qo.y,-qo.z),hp.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q._frustum.setFromProjectionMatrix(hp,j.coordinateSystem,j.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,Ue),n.clear();else{Ue===0&&(n.setRenderTarget(q.map),n.clear());let j=q.getViewport(Ue);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),B.viewport(o)}i=q.getFrustum(Ue),S(g,b,$e,Z,se,this.type)}q.isPointLightShadow!==!0&&this.type===Mr&&M(q,b),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(D,R,U)};function M(w,g){let b=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Qt(s.x,s.y,{format:hs,type:fn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(g,null,b,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(g,null,b,p,_,null)}function T(w,g,b,D){let R=null,U=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)R=U;else if(R=b.isPointLight===!0?l:a,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let B=R.uuid,X=g.uuid,L=c[B];L===void 0&&(L={},c[B]=L);let W=L[X];W===void 0&&(W=R.clone(),L[X]=W,g.addEventListener("dispose",A)),R=W}if(R.visible=g.visible,R.wireframe=g.wireframe,D===Mr?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:d[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=n.properties.get(R);B.light=b}return R}function S(w,g,b,D,R,U){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===Mr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let L=e.update(w),W=w.material;if(Array.isArray(W)){let Z=L.groups;for(let q=0,re=Z.length;q<re;q++){let Y=Z[q],ne=W[Y.materialIndex];if(ne&&ne.visible){let se=T(w,ne,D,U);w.onBeforeShadow(n,w,g,b,L,se,Y),n.renderBufferDirect(b,null,L,se,w,Y),w.onAfterShadow(n,w,g,b,L,se,Y)}}}else if(W.visible){let Z=T(w,W,D,U);w.onBeforeShadow(n,w,g,b,L,Z,null),n.renderBufferDirect(b,null,L,Z,w,null),w.onAfterShadow(n,w,g,b,L,Z,null)}}let X=w.children;for(let L=0,W=X.length;L<W;L++)S(X[L],g,b,D,R,U)}function A(w){w.target.removeEventListener("dispose",A);for(let b in c){let D=c[b],R=w.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function xy(n,e){function t(){let P=!1,J=new Ut,$=null,me=new Ut(0,0,0,0);return{setMask:function(ce){$!==ce&&!P&&(n.colorMask(ce,ce,ce,ce),$=ce)},setLocked:function(ce){P=ce},setClear:function(ce,ge,Oe,nt,le){le===!0&&(ce*=nt,ge*=nt,Oe*=nt),J.set(ce,ge,Oe,nt),me.equals(J)===!1&&(n.clearColor(ce,ge,Oe,nt),me.copy(J))},reset:function(){P=!1,$=null,me.set(-1,0,0,0)}}}function i(){let P=!1,J=!1,$=null,me=null,ce=null;return{setReversed:function(ge){if(J!==ge){let Oe=e.get("EXT_clip_control");ge?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),J=ge;let nt=ce;ce=null,this.setClear(nt)}},getReversed:function(){return J},setTest:function(ge){ge?_e(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(ge){$!==ge&&!P&&(n.depthMask(ge),$=ge)},setFunc:function(ge){if(J&&(ge=kf[ge]),me!==ge){switch(ge){case Za:n.depthFunc(n.NEVER);break;case Ka:n.depthFunc(n.ALWAYS);break;case Ja:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case Qa:n.depthFunc(n.EQUAL);break;case ja:n.depthFunc(n.GEQUAL);break;case el:n.depthFunc(n.GREATER);break;case tl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=ge}},setLocked:function(ge){P=ge},setClear:function(ge){ce!==ge&&(ce=ge,J&&(ge=1-ge),n.clearDepth(ge))},reset:function(){P=!1,$=null,me=null,ce=null,J=!1}}}function s(){let P=!1,J=null,$=null,me=null,ce=null,ge=null,Oe=null,nt=null,le=null;return{setTest:function(Ve){P||(Ve?_e(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(Ve){J!==Ve&&!P&&(n.stencilMask(Ve),J=Ve)},setFunc:function(Ve,Ke,Me){($!==Ve||me!==Ke||ce!==Me)&&(n.stencilFunc(Ve,Ke,Me),$=Ve,me=Ke,ce=Me)},setOp:function(Ve,Ke,Me){(ge!==Ve||Oe!==Ke||nt!==Me)&&(n.stencilOp(Ve,Ke,Me),ge=Ve,Oe=Ke,nt=Me)},setLocked:function(Ve){P=Ve},setClear:function(Ve){le!==Ve&&(n.clearStencil(Ve),le=Ve)},reset:function(){P=!1,J=null,$=null,me=null,ce=null,ge=null,Oe=null,nt=null,le=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},p=new WeakMap,v=[],_=null,m=!1,f=null,M=null,T=null,S=null,A=null,w=null,g=null,b=new tt(0,0,0),D=0,R=!1,U=null,B=null,X=null,L=null,W=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,re=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=re>=1):Y.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=re>=2);let ne=null,se={},Ue=n.getParameter(n.SCISSOR_BOX),$e=n.getParameter(n.VIEWPORT),j=new Ut().fromArray(Ue),be=new Ut().fromArray($e);function Ie(P,J,$,me){let ce=new Uint8Array(4),ge=n.createTexture();n.bindTexture(P,ge),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<$;Oe++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(J+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return ge}let ze={};ze[n.TEXTURE_2D]=Ie(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=Ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[n.TEXTURE_2D_ARRAY]=Ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=Ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(n.DEPTH_TEST),o.setFunc(ur),cn(!1),Ct(zu),_e(n.CULL_FACE),Nt(Fi);function _e(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function Qe(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function Lt(P,J){return h[P]!==J?(n.bindFramebuffer(P,J),h[P]=J,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=J),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=J),!0):!1}function We(P,J){let $=v,me=!1;if(P){$=p.get(J),$===void 0&&($=[],p.set(J,$));let ce=P.textures;if($.length!==ce.length||$[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Oe=ce.length;ge<Oe;ge++)$[ge]=n.COLOR_ATTACHMENT0+ge;$.length=ce.length,me=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,me=!0);me&&n.drawBuffers($)}function ht(P){return _!==P?(n.useProgram(P),_=P,!0):!1}let mt={[Ls]:n.FUNC_ADD,[af]:n.FUNC_SUBTRACT,[lf]:n.FUNC_REVERSE_SUBTRACT};mt[cf]=n.MIN,mt[uf]=n.MAX;let rt={[hf]:n.ZERO,[df]:n.ONE,[ff]:n.SRC_COLOR,[Gu]:n.SRC_ALPHA,[_f]:n.SRC_ALPHA_SATURATE,[vf]:n.DST_COLOR,[mf]:n.DST_ALPHA,[pf]:n.ONE_MINUS_SRC_COLOR,[Wu]:n.ONE_MINUS_SRC_ALPHA,[xf]:n.ONE_MINUS_DST_COLOR,[gf]:n.ONE_MINUS_DST_ALPHA,[yf]:n.CONSTANT_COLOR,[Mf]:n.ONE_MINUS_CONSTANT_COLOR,[Sf]:n.CONSTANT_ALPHA,[bf]:n.ONE_MINUS_CONSTANT_ALPHA};function Nt(P,J,$,me,ce,ge,Oe,nt,le,Ve){if(P===Fi){m===!0&&(Qe(n.BLEND),m=!1);return}if(m===!1&&(_e(n.BLEND),m=!0),P!==of){if(P!==f||Ve!==R){if((M!==Ls||A!==Ls)&&(n.blendEquation(n.FUNC_ADD),M=Ls,A=Ls),Ve)switch(P){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Is:n.blendFunc(n.ONE,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Je("WebGLState: Invalid blending: ",P);break}else switch(P){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hu:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vu:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",P);break}T=null,S=null,w=null,g=null,b.set(0,0,0),D=0,f=P,R=Ve}return}ce=ce||J,ge=ge||$,Oe=Oe||me,(J!==M||ce!==A)&&(n.blendEquationSeparate(mt[J],mt[ce]),M=J,A=ce),($!==T||me!==S||ge!==w||Oe!==g)&&(n.blendFuncSeparate(rt[$],rt[me],rt[ge],rt[Oe]),T=$,S=me,w=ge,g=Oe),(nt.equals(b)===!1||le!==D)&&(n.blendColor(nt.r,nt.g,nt.b,le),b.copy(nt),D=le),f=P,R=!1}function kt(P,J){P.side===Rn?Qe(n.CULL_FACE):_e(n.CULL_FACE);let $=P.side===dn;J&&($=!$),cn($),P.blending===Sr&&P.transparent===!1?Nt(Fi):Nt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let me=P.stencilWrite;a.setTest(me),me&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Bt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function cn(P){U!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),U=P)}function Ct(P){P!==nf?(_e(n.CULL_FACE),P!==B&&(P===zu?n.cullFace(n.BACK):P===sf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),B=P}function Xt(P){P!==X&&(q&&n.lineWidth(P),X=P)}function Bt(P,J,$){P?(_e(n.POLYGON_OFFSET_FILL),(L!==J||W!==$)&&(L=J,W=$,o.getReversed()&&(J=-J,$=-$),n.polygonOffset(J,$))):Qe(n.POLYGON_OFFSET_FILL)}function un(P){P?_e(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function vn(P){P===void 0&&(P=n.TEXTURE0+Z-1),ne!==P&&(n.activeTexture(P),ne=P)}function hn(P,J,$){$===void 0&&(ne===null?$=n.TEXTURE0+Z-1:$=ne);let me=se[$];me===void 0&&(me={type:void 0,texture:void 0},se[$]=me),(me.type!==P||me.texture!==J)&&(ne!==$&&(n.activeTexture($),ne=$),n.bindTexture(P,J||ze[P]),me.type=P,me.texture=J)}function F(){let P=se[ne];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $t(){try{n.compressedTexImage2D(...arguments)}catch(P){Je("WebGLState:",P)}}function St(){try{n.compressedTexImage3D(...arguments)}catch(P){Je("WebGLState:",P)}}function xt(){try{n.texSubImage2D(...arguments)}catch(P){Je("WebGLState:",P)}}function ve(){try{n.texSubImage3D(...arguments)}catch(P){Je("WebGLState:",P)}}function Tt(){try{n.compressedTexSubImage2D(...arguments)}catch(P){Je("WebGLState:",P)}}function He(){try{n.compressedTexSubImage3D(...arguments)}catch(P){Je("WebGLState:",P)}}function Ze(){try{n.texStorage2D(...arguments)}catch(P){Je("WebGLState:",P)}}function E(){try{n.texStorage3D(...arguments)}catch(P){Je("WebGLState:",P)}}function x(){try{n.texImage2D(...arguments)}catch(P){Je("WebGLState:",P)}}function z(){try{n.texImage3D(...arguments)}catch(P){Je("WebGLState:",P)}}function oe(P){return d[P]!==void 0?d[P]:n.getParameter(P)}function te(P,J){d[P]!==J&&(n.pixelStorei(P,J),d[P]=J)}function de(P){j.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),j.copy(P))}function pe(P){be.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),be.copy(P))}function Q(P,J){let $=c.get(J);$===void 0&&($=new WeakMap,c.set(J,$));let me=$.get(P);me===void 0&&(me=n.getUniformBlockIndex(J,P.name),n.uniformBlockBinding(J,me,me),$.set(P,me))}function ee(P,J,$){let ce=c.get(J).get(P);l[ce]!==$&&(n.bindBufferBase(n.UNIFORM_BUFFER,ce,$),l[ce]=$)}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,se={},h={},l={},p=new WeakMap,v=[],_=null,m=!1,f=null,M=null,T=null,S=null,A=null,w=null,g=null,b=new tt(0,0,0),D=0,R=!1,U=null,B=null,X=null,L=null,W=null,j.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_e,disable:Qe,bindFramebuffer:Lt,drawBuffers:We,useProgram:ht,setBlending:Nt,setMaterial:kt,setFlipSided:cn,setCullFace:Ct,setLineWidth:Xt,setPolygonOffset:Bt,setScissorTest:un,activeTexture:vn,bindTexture:hn,unbindTexture:F,compressedTexImage2D:$t,compressedTexImage3D:St,texImage2D:x,texImage3D:z,pixelStorei:te,getParameter:oe,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:Ze,texStorage3D:E,texSubImage2D:xt,texSubImage3D:ve,compressedTexSubImage2D:Tt,compressedTexSubImage3D:He,scissor:de,viewport:pe,reset:ae}}function _y(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap,d=new Set,h,p=new WeakMap,v=new Set,_=new FinalizationRegistry(E=>v.delete(E)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,x){return m?new OffscreenCanvas(E,x):fo("canvas")}function M(E,x,z){let oe=1,te=Ze(E);if((te.width>z||te.height>z)&&(oe=z/Math.max(te.width,te.height)),oe<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let de=Math.floor(oe*te.width),pe=Math.floor(oe*te.height);h===void 0&&(h=f(de,pe));let Q=x?f(de,pe):h;return Q.width=de,Q.height=pe,Q.getContext("2d").drawImage(E,0,0,de,pe),qe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+de+"x"+pe+")."),Q}else return"data"in E&&qe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function T(E){return E.generateMipmaps}function S(E){n.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(E,x,z,oe,te,de=!1){if(E!==null){if(n[E]!==void 0)return n[E];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let pe;oe&&(pe=e.get("EXT_texture_norm16"),pe||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===n.RED&&(z===n.FLOAT&&(Q=n.R32F),z===n.HALF_FLOAT&&(Q=n.R16F),z===n.UNSIGNED_BYTE&&(Q=n.R8),z===n.UNSIGNED_SHORT&&pe&&(Q=pe.R16_EXT),z===n.SHORT&&pe&&(Q=pe.R16_SNORM_EXT)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.R8UI),z===n.UNSIGNED_SHORT&&(Q=n.R16UI),z===n.UNSIGNED_INT&&(Q=n.R32UI),z===n.BYTE&&(Q=n.R8I),z===n.SHORT&&(Q=n.R16I),z===n.INT&&(Q=n.R32I)),x===n.RG&&(z===n.FLOAT&&(Q=n.RG32F),z===n.HALF_FLOAT&&(Q=n.RG16F),z===n.UNSIGNED_BYTE&&(Q=n.RG8),z===n.UNSIGNED_SHORT&&pe&&(Q=pe.RG16_EXT),z===n.SHORT&&pe&&(Q=pe.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RG8UI),z===n.UNSIGNED_SHORT&&(Q=n.RG16UI),z===n.UNSIGNED_INT&&(Q=n.RG32UI),z===n.BYTE&&(Q=n.RG8I),z===n.SHORT&&(Q=n.RG16I),z===n.INT&&(Q=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),z===n.UNSIGNED_INT&&(Q=n.RGB32UI),z===n.BYTE&&(Q=n.RGB8I),z===n.SHORT&&(Q=n.RGB16I),z===n.INT&&(Q=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),z===n.UNSIGNED_INT&&(Q=n.RGBA32UI),z===n.BYTE&&(Q=n.RGBA8I),z===n.SHORT&&(Q=n.RGBA16I),z===n.INT&&(Q=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_SHORT&&pe&&(Q=pe.RGB16_EXT),z===n.SHORT&&pe&&(Q=pe.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),x===n.RGBA){let ee=de?uo:ut.getTransfer(te);z===n.FLOAT&&(Q=n.RGBA32F),z===n.HALF_FLOAT&&(Q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Q=ee===vt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&pe&&(Q=pe.RGBA16_EXT),z===n.SHORT&&pe&&(Q=pe.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(E,x){let z;return E?x===null||x===ri||x===Ds?z=n.DEPTH24_STENCIL8:x===$n?z=n.DEPTH32F_STENCIL8:x===wr&&(z=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ri||x===Ds?z=n.DEPTH_COMPONENT24:x===$n?z=n.DEPTH_COMPONENT32F:x===wr&&(z=n.DEPTH_COMPONENT16),z}function b(E,x){return T(E)===!0||E.isFramebufferTexture&&E.minFilter!==ln&&E.minFilter!==Cn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function D(E){let x=new WeakRef(E);i.get(E).__ref=x,v.add(x),_.register(E,x,x)}function R(E){let x=i.get(E).__ref;x!==void 0&&(v.delete(x),_.unregister(x))}function U(E){X(E.target)}function B(E){L(E.target)}function X(E){E.removeEventListener("dispose",U),R(E),Z(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&d.delete(E)}function L(E){E.removeEventListener("dispose",B),R(E),re(E)}function W(){for(let E of v){let x=E.deref();x!==void 0&&(x.isRenderTarget===!0?L(x):X(x))}v.clear(),d.clear()}function Z(E){let x=i.get(E);if(x.__webglInit===void 0)return;let z=E.source,oe=p.get(z);if(oe){let te=oe[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&q(E),Object.keys(oe).length===0&&p.delete(z)}i.remove(E)}function q(E){let x=i.get(E);n.deleteTexture(x.__webglTexture);let z=E.source,oe=p.get(z);delete oe[x.__cacheKey],o.memory.textures--}function re(E){let x=i.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();let z=E.depthTexture;if(z&&z.renderTarget===E&&X(z),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let de=0;de<x.__webglFramebuffer[te].length;de++)n.deleteFramebuffer(x.__webglFramebuffer[te][de]);else n.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)n.deleteFramebuffer(x.__webglFramebuffer[te]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let oe=E.textures;for(let te=0,de=oe.length;te<de;te++){let pe=i.get(oe[te]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(oe[te])}i.remove(E)}let Y=0;function ne(){Y=0}function se(){return Y}function Ue(E){Y=E}function $e(){let E=Y;return E>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,E}function j(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function be(E,x){let z=i.get(E);if(E.isVideoTexture&&Tt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){let oe=E.image;if(oe===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{kt(z,E,x);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function Ie(E,x){let z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){kt(z,E,x);return}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function ze(E,x){let z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){kt(z,E,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function _e(E,x){let z=i.get(E);if(E.version>0&&z.__version!==E.version){cn(z,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}let Qe={[nl]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[il]:n.MIRRORED_REPEAT},Lt={[ln]:n.NEAREST,[Tf]:n.NEAREST_MIPMAP_NEAREST,[Oo]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[Pl]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},We={[Pf]:n.NEVER,[nh]:n.ALWAYS,[If]:n.LESS,[eh]:n.LEQUAL,[Lf]:n.EQUAL,[th]:n.GEQUAL,[Nf]:n.GREATER,[Df]:n.NOTEQUAL};function ht(E,x){if(x.type===$n&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Cn||x.magFilter===Pl||x.magFilter===Oo||x.magFilter===Bi||x.minFilter===Cn||x.minFilter===Pl||x.minFilter===Oo||x.minFilter===Bi)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Qe[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Qe[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Qe[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Lt[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Lt[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,We[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ln||x.minFilter!==Oo&&x.minFilter!==Bi||x.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function mt(E,x){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",U),D(x));let oe=x.source,te=p.get(oe);te===void 0&&(te={},p.set(oe,te));let de=j(x);if(de!==E.__cacheKey){te[de]===void 0&&(te[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[de].usedTimes++;let pe=te[E.__cacheKey];pe!==void 0&&(te[E.__cacheKey].usedTimes--,pe.usedTimes===0&&q(x)),E.__cacheKey=de,E.__webglTexture=te[de].texture}return z}function rt(E,x,z){return Math.floor(Math.floor(E/z)/x)}function Nt(E,x,z,oe){let de=E.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,oe,x.data);else{de.sort((P,J)=>P.start-J.start);let pe=0;for(let P=1;P<de.length;P++){let J=de[pe],$=de[P],me=J.start+J.count,ce=rt($.start,x.width,4),ge=rt(J.start,x.width,4);$.start<=me+1&&ce===ge&&rt($.start+$.count-1,x.width,4)===ce?J.count=Math.max(J.count,$.start+$.count-J.start):(++pe,de[pe]=$)}de.length=pe+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let P=0,J=de.length;P<J;P++){let $=de[P],me=Math.floor($.start/4),ce=Math.ceil($.count/4),ge=me%x.width,Oe=Math.floor(me/x.width),nt=ce,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(n.TEXTURE_2D,0,ge,Oe,nt,le,z,oe,x.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function kt(E,x,z){let oe=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(oe=n.TEXTURE_3D);let te=mt(E,x),de=x.source;t.bindTexture(oe,E.__webglTexture,n.TEXTURE0+z);let pe=i.get(de);if(de.version!==pe.__version||te===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let le=ut.getPrimaries(ut.workingColorSpace),Ve=x.colorSpace===ki?null:ut.getPrimaries(x.colorSpace),Ke=x.colorSpace===ki||le===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let ee=M(x.image,!1,s.maxTextureSize);ee=He(x,ee);let ae=r.convert(x.format,x.colorSpace),P=r.convert(x.type),J=w(x.internalFormat,ae,P,x.normalized,x.colorSpace,x.isVideoTexture);ht(oe,x);let $,me=x.mipmaps,ce=x.isVideoTexture!==!0,ge=pe.__version===void 0||te===!0,Oe=de.dataReady,nt=b(x,ee);if(x.isDepthTexture)J=g(x.format===Oi,x.type),ge&&(ce?t.texStorage2D(n.TEXTURE_2D,1,J,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,J,ee.width,ee.height,0,ae,P,null));else if(x.isDataTexture)if(me.length>0){ce&&ge&&t.texStorage2D(n.TEXTURE_2D,nt,J,me[0].width,me[0].height);for(let le=0,Ve=me.length;le<Ve;le++)$=me[le],ce?Oe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,$.width,$.height,ae,P,$.data):t.texImage2D(n.TEXTURE_2D,le,J,$.width,$.height,0,ae,P,$.data);x.generateMipmaps=!1}else ce?(ge&&t.texStorage2D(n.TEXTURE_2D,nt,J,ee.width,ee.height),Oe&&Nt(x,ee,ae,P)):t.texImage2D(n.TEXTURE_2D,0,J,ee.width,ee.height,0,ae,P,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ce&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,J,me[0].width,me[0].height,ee.depth);for(let le=0,Ve=me.length;le<Ve;le++)if($=me[le],x.format!==oi)if(ae!==null)if(ce){if(Oe)if(x.layerUpdates.size>0){let Ke=hh($.width,$.height,x.format,x.type);for(let Me of x.layerUpdates){let gt=$.data.subarray(Me*Ke/$.data.BYTES_PER_ELEMENT,(Me+1)*Ke/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,Me,$.width,$.height,1,ae,gt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,$.width,$.height,ee.depth,ae,$.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,J,$.width,$.height,ee.depth,0,$.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,$.width,$.height,ee.depth,ae,P,$.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,J,$.width,$.height,ee.depth,0,ae,P,$.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ce&&ge&&t.texStorage2D(n.TEXTURE_2D,nt,J,me[0].width,me[0].height);for(let le=0,Ve=me.length;le<Ve;le++)$=me[le],x.format!==oi?ae!==null?ce?Oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,$.width,$.height,ae,$.data):t.compressedTexImage2D(n.TEXTURE_2D,le,J,$.width,$.height,0,$.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Oe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,$.width,$.height,ae,P,$.data):t.texImage2D(n.TEXTURE_2D,le,J,$.width,$.height,0,ae,P,$.data)}else if(x.isDataArrayTexture)if(ce){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,J,ee.width,ee.height,ee.depth),Oe)if(x.layerUpdates.size>0){let le=hh(ee.width,ee.height,x.format,x.type);for(let Ve of x.layerUpdates){let Ke=ee.data.subarray(Ve*le/ee.data.BYTES_PER_ELEMENT,(Ve+1)*le/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ve,ee.width,ee.height,1,ae,P,Ke)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ae,P,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,J,ee.width,ee.height,ee.depth,0,ae,P,ee.data);else if(x.isData3DTexture)ce?(ge&&t.texStorage3D(n.TEXTURE_3D,nt,J,ee.width,ee.height,ee.depth),Oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ae,P,ee.data)):t.texImage3D(n.TEXTURE_3D,0,J,ee.width,ee.height,ee.depth,0,ae,P,ee.data);else if(x.isFramebufferTexture){if(ge)if(ce)t.texStorage2D(n.TEXTURE_2D,nt,J,ee.width,ee.height);else{let le=ee.width,Ve=ee.height;for(let Ke=0;Ke<nt;Ke++)t.texImage2D(n.TEXTURE_2D,Ke,J,le,Ve,0,ae,P,null),le>>=1,Ve>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ee.parentNode!==le){le.appendChild(ee),d.add(x),le.onpaint=Ve=>{let Ke=Ve.changedElements;for(let Me of d)Ke.includes(Me.image)&&(Me.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{let Ke=n.RGBA,Me=n.RGBA,gt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ke,Me,gt,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(me.length>0){if(ce&&ge){let le=Ze(me[0]);t.texStorage2D(n.TEXTURE_2D,nt,J,le.width,le.height)}for(let le=0,Ve=me.length;le<Ve;le++)$=me[le],ce?Oe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ae,P,$):t.texImage2D(n.TEXTURE_2D,le,J,ae,P,$);x.generateMipmaps=!1}else if(ce){if(ge){let le=Ze(ee);t.texStorage2D(n.TEXTURE_2D,nt,J,le.width,le.height)}Oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,P,ee)}else t.texImage2D(n.TEXTURE_2D,0,J,ae,P,ee);T(x)&&x.mipmapsAutoUpdate===!0&&S(oe),pe.__version=de.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function cn(E,x,z){if(x.image.length!==6)return;let oe=mt(E,x),te=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+z);let de=i.get(te);if(te.version!==de.__version||oe===!0){t.activeTexture(n.TEXTURE0+z);let pe=ut.getPrimaries(ut.workingColorSpace),Q=x.colorSpace===ki?null:ut.getPrimaries(x.colorSpace),ee=x.colorSpace===ki||pe===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ae=x.isCompressedTexture||x.image[0].isCompressedTexture,P=x.image[0]&&x.image[0].isDataTexture,J=[];for(let Me=0;Me<6;Me++)!ae&&!P?J[Me]=M(x.image[Me],!0,s.maxCubemapSize):J[Me]=P?x.image[Me].image:x.image[Me],J[Me]=He(x,J[Me]);let $=J[0],me=r.convert(x.format,x.colorSpace),ce=r.convert(x.type),ge=w(x.internalFormat,me,ce,x.normalized,x.colorSpace),Oe=x.isVideoTexture!==!0,nt=de.__version===void 0||oe===!0,le=te.dataReady,Ve=b(x,$);ht(n.TEXTURE_CUBE_MAP,x);let Ke;if(x.isDepthTexture){if(ge=g(x.format===Oi,x.type),nt)if(Oe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ge,$.width,$.height);else for(let Me=0;Me<6;Me++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,$.width,$.height,0,me,ce,null)}else if(ae){Oe&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,ge,$.width,$.height);for(let Me=0;Me<6;Me++){Ke=J[Me].mipmaps;for(let gt=0;gt<Ke.length;gt++){let At=Ke[gt];x.format!==oi?me!==null?Oe?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt,0,0,At.width,At.height,me,At.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt,ge,At.width,At.height,0,At.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt,0,0,At.width,At.height,me,ce,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt,ge,At.width,At.height,0,me,ce,At.data)}}}else{if(Ke=x.mipmaps,Oe&&nt){Ke.length>0&&Ve++;let Me=Ze(J[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,ge,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(P){Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,J[Me].width,J[Me].height,me,ce,J[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,J[Me].width,J[Me].height,0,me,ce,J[Me].data);for(let gt=0;gt<Ke.length;gt++){let Zt=Ke[gt].image[Me].image;Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt+1,0,0,Zt.width,Zt.height,me,ce,Zt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt+1,ge,Zt.width,Zt.height,0,me,ce,Zt.data)}}else{Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,me,ce,J[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,me,ce,J[Me]);for(let gt=0;gt<Ke.length;gt++){let At=Ke[gt];Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt+1,0,0,me,ce,At.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,gt+1,ge,me,ce,At.image[Me])}}}T(x)&&x.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),de.__version=te.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ct(E,x,z,oe,te,de){let pe=r.convert(z.format,z.colorSpace),Q=r.convert(z.type),ee=w(z.internalFormat,pe,Q,z.normalized,z.colorSpace),ae=i.get(x),P=i.get(z);if(P.__renderTarget=x,!ae.__hasExternalTextures){let J=Math.max(1,x.width>>de),$=Math.max(1,x.height>>de);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,de,ee,J,$,x.depth,0,pe,Q,null):t.texImage2D(te,de,ee,J,$,0,pe,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ve(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,te,P.__webglTexture,0,xt(x)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,te,P.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(E,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){let oe=x.depthTexture,te=oe&&oe.isDepthTexture?oe.type:null,de=g(x.stencilBuffer,te),pe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ve(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(x),de,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(x),de,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,de,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,E)}else{let oe=x.textures;for(let te=0;te<oe.length;te++){let de=oe[te],pe=r.convert(de.format,de.colorSpace),Q=r.convert(de.type),ee=w(de.internalFormat,pe,Q,de.normalized,de.colorSpace);ve(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(x),ee,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(x),ee,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ee,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(E,x,z){let oe=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=i.get(x.depthTexture);te.__renderTarget=x;let de=oe?x.depthTexture.image[0]:x.depthTexture.image;(!te.__webglTexture||de.width!==x.width||de.height!==x.height)&&(de.width=x.width,de.height=x.height,x.depthTexture.needsUpdate=!0),oe?_e(x.depthTexture,0):be(x.depthTexture,0);let pe=te.__webglTexture,Q=xt(x),ee=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,ae=x.depthTexture.format===Oi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ii)ve(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ee,pe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,ae,ee,pe,0);else if(x.depthTexture.format===Oi)ve(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ee,pe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,ae,ee,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function un(E){let x=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let oe=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),oe){let te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,oe.removeEventListener("dispose",te)};oe.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=oe}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let oe=0;oe<6;oe++)Bt(x.__webglFramebuffer[oe],E,oe);else E.texture.mipmaps.length>0?Bt(x.__webglFramebuffer[0],E,0):Bt(x.__webglFramebuffer,E,0);else if(z){x.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[oe]),x.__webglDepthbuffer[oe]===void 0)x.__webglDepthbuffer[oe]=n.createRenderbuffer(),Xt(x.__webglDepthbuffer[oe],E,!1);else{let te=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,de)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Xt(x.__webglDepthbuffer,E,!1);else{let te=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,de)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function vn(E,x,z){let oe=i.get(E);x!==void 0&&Ct(oe.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&un(E)}function hn(E){let x=E.texture,z=i.get(E),oe=i.get(x);E.addEventListener("dispose",B),D(E);let te=E.textures,de=E.isWebGLCubeRenderTarget===!0,pe=te.length>1;if(pe||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=x.version,o.memory.textures++),de){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let ee=0;ee<x.mipmaps.length;ee++)z.__webglFramebuffer[Q][ee]=n.createFramebuffer()}else z.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)z.__webglFramebuffer[Q]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(pe)for(let Q=0,ee=te.length;Q<ee;Q++){let ae=i.get(te[Q]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&ve(E)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<te.length;Q++){let ee=te[Q];z.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let ae=r.convert(ee.format,ee.colorSpace),P=r.convert(ee.type),J=w(ee.internalFormat,ae,P,ee.normalized,ee.colorSpace,E.isXRRenderTarget===!0),$=xt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,$,J,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Xt(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),ht(n.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)Ct(z.__webglFramebuffer[Q][ee],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else Ct(z.__webglFramebuffer[Q],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);T(x)?S(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let Q=0,ee=te.length;Q<ee;Q++){let ae=te[Q],P=i.get(ae),J=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,P.__webglTexture),ht(J,ae),Ct(z.__webglFramebuffer,E,ae,n.COLOR_ATTACHMENT0+Q,J,0),T(ae)&&S(J)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,oe.__webglTexture),ht(Q,x),x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)Ct(z.__webglFramebuffer[ee],E,x,n.COLOR_ATTACHMENT0,Q,ee);else Ct(z.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,Q,0);T(x)?S(Q):x.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&un(E)}function F(E){let x=E.textures;for(let z=0,oe=x.length;z<oe;z++){let te=x[z];if(T(te)&&te.mipmapsAutoUpdate===!0){let de=A(E),pe=i.get(te).__webglTexture;t.bindTexture(de,pe),S(de),t.unbindTexture()}}}let $t=[];function St(E){if(E.samples>0){if(ve(E)===!1){let x=E.textures,z=E.width,oe=E.height,te=n.COLOR_BUFFER_BIT,de=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(E),Q=x.length>1;if(Q)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ae]);let P=i.get(x[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,z,oe,0,0,z,oe,te,n.NEAREST),l===!0&&($t.length=0,$t.push(n.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&$t.push(de),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ae]);let P=i.get(x[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,P,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function xt(E){return Math.min(s.maxSamples,E.samples)}function ve(E){let x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(E){let x=o.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function He(E,x){let z=E.colorSpace,oe=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==co&&z!==ki&&(ut.getTransfer(z)===vt?(oe!==oi||te!==zn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",z)),x}function Ze(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=$e,this.resetTextureUnits=ne,this.getTextureUnits=se,this.setTextureUnits=Ue,this.setTexture2D=be,this.setTexture2DArray=Ie,this.setTexture3D=ze,this.setTextureCube=_e,this.rebindTextures=vn,this.setupRenderTarget=hn,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=un,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ve,this.dispose=W}function yy(n,e){function t(i,s=ki){let r,o=ut.getTransfer(s);if(i===zn)return n.UNSIGNED_BYTE;if(i===Ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ku)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yu)return n.BYTE;if(i===$u)return n.SHORT;if(i===wr)return n.UNSIGNED_SHORT;if(i===Il)return n.INT;if(i===ri)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===fn)return n.HALF_FLOAT;if(i===Ju)return n.ALPHA;if(i===Qu)return n.RGB;if(i===oi)return n.RGBA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===Oi)return n.DEPTH_STENCIL;if(i===Dl)return n.RED;if(i===Ul)return n.RED_INTEGER;if(i===hs)return n.RG;if(i===Fl)return n.RG_INTEGER;if(i===Bl)return n.RGBA_INTEGER;if(i===ko||i===zo||i===Ho||i===Vo)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ol||i===kl||i===zl||i===Hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===Go||i===Yl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vl||i===Gl)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xl)return r.COMPRESSED_R11_EAC;if(i===ql)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Go)return r.COMPRESSED_RG11_EAC;if(i===Yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$l||i===Zl||i===Kl||i===Jl||i===Ql||i===jl||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$l)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ac)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===cc||i===uc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lc)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hc||i===dc||i===Wo||i===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function wy(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,lh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,T,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===dn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===dn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f),T=M.envMap,S=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sp),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ey(n,e,t,i){let s={},r={};function o(M,T){let S=T.program;i.uniformBlockBinding(M,S,s[M.id])}function a(M,T){let S=s[M.id];S===void 0&&(v(M),S=l(M),s[M.id]=S,M.addEventListener("dispose",m));let A=T.program;i.updateUBOMapping(M,A);let w=e.render.frame;r[M.id]!==w&&(c(M),r[M.id]=w)}function l(M){let T=n.createBuffer(),S=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,S,A),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(M){let T=s[M.id],S=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,g=S.length;w<g;w++){let b=S[w];if(Array.isArray(b))for(let D=0,R=b.length;D<R;D++)u(b[D],w,D,A);else u(b,w,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(M,T,S,A){if(h(M,T,S,A)===!0){let w=M.__offset,g=M.value;if(Array.isArray(g)){let b=0;for(let D=0;D<g.length;D++){let R=g[D],U=_(R,!0);d(R,M.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,M.__data)}}function d(M,T,S){typeof M=="number"||typeof M=="boolean"?T[S]=M:M.isMatrix3?(T[S]=M.elements[0],T[S+1]=M.elements[1],T[S+2]=M.elements[2],T[S+3]=0,T[S+4]=M.elements[3],T[S+5]=M.elements[4],T[S+6]=M.elements[5],T[S+7]=0,T[S+8]=M.elements[6],T[S+9]=M.elements[7],T[S+10]=M.elements[8],T[S+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-S),S):M.toArray(T,S)}function h(M,T,S,A){let w=M.value,g=T+"_"+S;if(Array.isArray(w)){A[g]===void 0&&(A[g]=[]);let b=A[g],D=!1;for(let R=0;R<w.length;R++)p(w[R],b,R)===!0&&(D=!0);return D}return p(w,A,g)}function p(M,T,S){if(T[S]===void 0)return typeof M=="number"||typeof M=="boolean"?T[S]=M:ArrayBuffer.isView(M)?T[S]=M.slice():T[S]=M.clone(),!0;{let A=T[S];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return T[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function v(M){let T=M.uniforms,S=0,A=16;for(let g=0,b=T.length;g<b;g++){let D=Array.isArray(T[g])?T[g]:[T[g]];for(let R=0,U=D.length;R<U;R++){let B=D[R],X=Array.isArray(B.value)?B.value:[B.value],L=Array.isArray(T[g])||Array.isArray(B.value),W=S;for(let q=0,re=X.length;q<re;q++){let Y=X[q],ne=_(Y,L),se=S%A,Ue=se%ne.boundary,$e=se+Ue;S+=Ue,$e!==0&&A-$e<ne.storage&&(S+=A-$e),q===0&&(W=S),S+=ne.storage}let Z=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Z((S-W)/Float32Array.BYTES_PER_ELEMENT),B.__offset=W}}let w=S%A;return w>0&&(S+=A-w),M.__size=S,M.__cache={},this}function _(M,T){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(M){let T=M.target;T.removeEventListener("dispose",m),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:f}}function Ay(){return gi===null&&(gi=new xo(Ty,16,16,hs,fn),gi.name="DFG_LUT",gi.minFilter=Cn,gi.magFilter=Cn,gi.wrapS=hi,gi.wrapT=hi,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var Wg,Xg,qg,Yg,$g,Zg,Kg,Jg,Qg,jg,e0,t0,n0,i0,s0,r0,o0,a0,l0,c0,u0,h0,d0,f0,p0,m0,g0,v0,x0,_0,y0,M0,S0,b0,w0,E0,T0,A0,C0,R0,P0,I0,L0,N0,D0,U0,F0,B0,O0,k0,z0,H0,V0,G0,W0,X0,q0,Y0,$0,Z0,K0,J0,Q0,j0,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,uv,hv,dv,fv,pv,mv,gv,vv,xv,_v,yv,Mv,Sv,bv,wv,Ev,Tv,Av,Cv,Rv,Pv,Iv,Lv,Nv,Dv,Uv,Fv,Bv,Ov,kv,zv,Hv,Vv,Gv,Wv,Xv,qv,Yv,$v,Zv,Kv,Jv,Qv,jv,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,ux,hx,dx,fx,px,mx,gx,vx,xx,_x,yx,Mx,Sx,ot,Ce,vi,mc,bx,fp,$o,Xf,Rx,Px,pp,mp,Ix,Lx,Nx,vc,Wx,gp,vp,xp,_p,yp,Mp,Zf,Kf,Jf,Qf,jf,yh,Mh,Sh,xh,Tr,N_,D_,np,O_,gc,W_,q_,$_,K_,Q_,ty,wh,Eh,cy,fy,py,my,gy,hp,qo,_h,My,Sy,Th,Ah,by,Sp,Ty,gi,xc,Hi=Kt(()=>{vh();vh();Wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xg=`#ifdef USE_ALPHAHASH
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
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
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
#endif`,Jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qg=`#ifdef USE_BATCHING
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
#endif`,jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i0=`#ifdef USE_IRIDESCENCE
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
#endif`,s0=`#ifdef USE_BUMPMAP
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,f0=`#define PI 3.141592653589793
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
} // validated`,p0=`vec3 transformedNormal = objectNormal;
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
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
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
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,U0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,H0=`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,V0=`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j0=`#if defined( USE_POINTS_UV )
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
#endif`,ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iv=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`#ifdef USE_MORPHTARGETS
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
#endif`,ov=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dv=`#ifdef USE_NORMALMAP
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
#endif`,fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_v=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cv=`float getShadowMask() {
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
}`,Rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pv=`#ifdef USE_SKINNING
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
#endif`,Iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lv=`#ifdef USE_SKINNING
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
#endif`,Nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bv=`#ifdef USE_TRANSMISSION
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
#endif`,Ov=`#ifdef USE_TRANSMISSION
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
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wv=`uniform sampler2D t2D;
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
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`#include <common>
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
}`,Kv=`#if DEPTH_PACKING == 3200
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
}`,Jv=`#define DISTANCE
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
}`,Qv=`#define DISTANCE
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`uniform float scale;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#define LAMBERT
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
}`,ox=`#define LAMBERT
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
}`,ax=`#define MATCAP
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
}`,lx=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,ux=`#define NORMAL
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
}`,hx=`#define PHONG
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
}`,dx=`#define PHONG
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
}`,fx=`#define STANDARD
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
}`,px=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,mx=`#define TOON
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
}`,gx=`#define TOON
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
}`,vx=`uniform float size;
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
}`,xx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,yx=`uniform vec3 color;
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
}`,Mx=`uniform float rotation;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Wg,alphahash_pars_fragment:Xg,alphamap_fragment:qg,alphamap_pars_fragment:Yg,alphatest_fragment:$g,alphatest_pars_fragment:Zg,aomap_fragment:Kg,aomap_pars_fragment:Jg,batching_pars_vertex:Qg,batching_vertex:jg,begin_vertex:e0,beginnormal_vertex:t0,bsdfs:n0,iridescence_fragment:i0,bumpmap_pars_fragment:s0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:o0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:l0,color_fragment:c0,color_pars_fragment:u0,color_pars_vertex:h0,color_vertex:d0,common:f0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:v0,emissivemap_pars_fragment:x0,colorspace_fragment:_0,colorspace_pars_fragment:y0,envmap_fragment:M0,envmap_common_pars_fragment:S0,envmap_pars_fragment:b0,envmap_pars_vertex:w0,envmap_physical_pars_fragment:U0,envmap_vertex:E0,fog_vertex:T0,fog_pars_vertex:A0,fog_fragment:C0,fog_pars_fragment:R0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:I0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:N0,lights_pars_begin:D0,lights_toon_fragment:F0,lights_toon_pars_fragment:B0,lights_phong_fragment:O0,lights_phong_pars_fragment:k0,lights_physical_fragment:z0,lights_physical_pars_fragment:H0,lights_fragment_begin:V0,lights_fragment_maps:G0,lights_fragment_end:W0,lightprobes_pars_fragment:X0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:Z0,map_fragment:K0,map_pars_fragment:J0,map_particle_fragment:Q0,map_particle_pars_fragment:j0,metalnessmap_fragment:ev,metalnessmap_pars_fragment:tv,morphinstance_vertex:nv,morphcolor_vertex:iv,morphnormal_vertex:sv,morphtarget_pars_vertex:rv,morphtarget_vertex:ov,normal_fragment_begin:av,normal_fragment_maps:lv,normal_pars_fragment:cv,normal_pars_vertex:uv,normal_vertex:hv,normalmap_pars_fragment:dv,clearcoat_normal_fragment_begin:fv,clearcoat_normal_fragment_maps:pv,clearcoat_pars_fragment:mv,iridescence_pars_fragment:gv,opaque_fragment:vv,packing:xv,premultiplied_alpha_fragment:_v,project_vertex:yv,dithering_fragment:Mv,dithering_pars_fragment:Sv,roughnessmap_fragment:bv,roughnessmap_pars_fragment:wv,shadowmap_pars_fragment:Ev,shadowmap_pars_vertex:Tv,shadowmap_vertex:Av,shadowmask_pars_fragment:Cv,skinbase_vertex:Rv,skinning_pars_vertex:Pv,skinning_vertex:Iv,skinnormal_vertex:Lv,specularmap_fragment:Nv,specularmap_pars_fragment:Dv,tonemapping_fragment:Uv,tonemapping_pars_fragment:Fv,transmission_fragment:Bv,transmission_pars_fragment:Ov,uv_pars_fragment:kv,uv_pars_vertex:zv,uv_vertex:Hv,worldpos_vertex:Vv,background_vert:Gv,background_frag:Wv,backgroundCube_vert:Xv,backgroundCube_frag:qv,cube_vert:Yv,cube_frag:$v,depth_vert:Zv,depth_frag:Kv,distance_vert:Jv,distance_frag:Qv,equirect_vert:jv,equirect_frag:ex,linedashed_vert:tx,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:sx,meshlambert_vert:rx,meshlambert_frag:ox,meshmatcap_vert:ax,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:ux,meshphong_vert:hx,meshphong_frag:dx,meshphysical_vert:fx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:vx,points_frag:xx,shadow_vert:_x,shadow_frag:yx,sprite_vert:Mx,sprite_frag:Sx},Ce={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},vi={basic:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Mn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Mn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Mn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Mn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Mn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Mn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:Mn([Ce.common,Ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:Mn([Ce.lights,Ce.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};vi.physical={uniforms:Mn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};mc={r:0,b:0,g:0},bx=new _t,fp=new je;fp.set(-1,0,0,0,1,0,0,0,1);$o=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Mo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vr(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Fi});r.uniforms.tEquirect.value=t;let o=new yt(s,r),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Cn),new yr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Xf=256,Rx=3,Px=20,pp=256,mp=16,Ix=3,Lx=new k,Nx=new tt,vc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new yr(1,10,null),this._boxMesh=new yt(new vr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Lx}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,v=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Nx));let m=new yr(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=v,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Xf,oh(e))}_fromTexture(e,t){e.mapping===Ns||e.mapping===br?this._setSize(e.image.length===0?Xf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=qf(e,!1,!1),i=Math.log2(e)-Rx;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=qf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ns||e.mapping===br?(this._cubemapMaterial===null&&(this._cubemapMaterial=$f()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Yf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Dx(),this._integrationMaterial=Ux());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/mp);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Ix)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(pp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Fx());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};Wx={[Io]:"LINEAR_TONE_MAPPING",[Lo]:"REINHARD_TONE_MAPPING",[No]:"CINEON_TONE_MAPPING",[Do]:"ACES_FILMIC_TONE_MAPPING",[Fo]:"AGX_TONE_MAPPING",[Bo]:"NEUTRAL_TONE_MAPPING",[Uo]:"CUSTOM_TONE_MAPPING"};gp=new Ln,vp=new Ui(1,1),xp=new So(1),_p=new po,yp=new al,Mp=new Mo,Zf=[],Kf=[],Jf=new Float32Array(16),Qf=new Float32Array(9),jf=new Float32Array(4);yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=h_(t.type)}},Mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I_(t.type)}},Sh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},xh=/(\w+)(\])?(\[|\.)?/g;Tr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);L_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};N_=37297,D_=0;np=new je;O_={[Io]:"Linear",[Lo]:"Reinhard",[No]:"Cineon",[Do]:"ACESFilmic",[Fo]:"AgX",[Bo]:"Neutral",[Uo]:"Custom"};gc=new k;W_=/^[ \t]*#include +<([\w\d./]+)>/gm;q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;$_={[Po]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};K_={[br]:"ENVMAP_MODE_REFRACTION"};Q_={[Xu]:"ENVMAP_BLENDING_MULTIPLY",[wf]:"ENVMAP_BLENDING_MIX",[Ef]:"ENVMAP_BLENDING_ADD"};ty=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Eh(e),t.set(e,i)),i}},Eh=class{constructor(e){this.id=ty++,this.code=e,this.usedTimes=0}};cy=0;fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,py=`uniform sampler2D shadow_pass;
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
}`,my=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],gy=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],hp=new _t,qo=new k,_h=new k;My=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sy=`
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

}`,Th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new bo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ft({vertexShader:My,fragmentShader:Sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends di{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null,_=typeof XRWebGLBinding<"u",m=new Th,f={},M=t.getContextAttributes(),T=null,S=null,A=[],w=[],g=new Ye,b=null,D=null,R=new An;R.viewport=new Ut;let U=new An;U.viewport=new Ut;let B=[R,U],X=new Tl,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let be=A[j];return be===void 0&&(be=new mr,A[j]=be),be.getTargetRaySpace()},this.getControllerGrip=function(j){let be=A[j];return be===void 0&&(be=new mr,A[j]=be),be.getGripSpace()},this.getHand=function(j){let be=A[j];return be===void 0&&(be=new mr,A[j]=be),be.getHandSpace()};function Z(j){let be=w.indexOf(j.inputSource);if(be===-1)return;let Ie=A[be];Ie!==void 0&&(Ie.update(j.inputSource,j.frame,c||o),Ie.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",re);for(let j=0;j<A.length;j++){let be=w[j];be!==null&&(w[j]=null,A[j].disconnect(be))}L=null,W=null,m.reset();for(let j in f)delete f[j];if(e.setRenderTarget(T),p=null,h=null,d=null,s=null,S=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(g.width,g.height,!1),D!==null){let j=D.camera;j.fov=D.fov,j.zoom=D.zoom,j.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",re),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(g),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,ze=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=M.stencil?Oi:Ii,ze=M.stencil?Ds:ri);let Qe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Qe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Qt(h.textureWidth,h.textureHeight,{format:oi,type:zn,depthTexture:new Ui(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ie={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qt(p.framebufferWidth,p.framebufferHeight,{format:oi,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(j){for(let be=0;be<j.removed.length;be++){let Ie=j.removed[be],ze=w.indexOf(Ie);ze>=0&&(w[ze]=null,A[ze].disconnect(Ie))}for(let be=0;be<j.added.length;be++){let Ie=j.added[be],ze=w.indexOf(Ie);if(ze===-1){for(let Qe=0;Qe<A.length;Qe++)if(Qe>=w.length){w.push(Ie),ze=Qe;break}else if(w[Qe]===null){w[Qe]=Ie,ze=Qe;break}if(ze===-1)break}let _e=A[ze];_e&&_e.connect(Ie)}}function Y(j,be){be===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(be.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let be=j.near,Ie=j.far;m.texture!==null&&(m.depthNear>0&&(be=m.depthNear),m.depthFar>0&&(Ie=m.depthFar)),X.near=U.near=R.near=be,X.far=U.far=R.far=Ie,(L!==X.near||W!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),L=X.near,W=X.far),X.layers.mask=j.layers.mask|6,R.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;let ze=j.parent,_e=X.cameras;Y(X,ze);for(let Qe=0;Qe<_e.length;Qe++)Y(_e[Qe],ze);X.projectionMatrix.copy(R.projectionMatrix),X.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&j.isPerspectiveCamera&&(D={camera:j,fov:j.fov,zoom:j.zoom}),ne(j,X,ze)};function ne(j,be,Ie){Ie===null?j.matrix.copy(be.matrixWorld):(j.matrix.copy(Ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(be.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(be.projectionMatrix),j.projectionMatrixInverse.copy(be.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=dr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(j){return f[j]};let se=null;function Ue(j,be){if(u=be.getViewerPose(c||o),v=be,u!==null){let Ie=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ze=!1;Ie.length!==X.cameras.length&&(X.cameras.length=0,ze=!0);for(let We=0;We<Ie.length;We++){let ht=Ie[We],mt=null;if(p!==null)mt=p.getViewport(ht);else{let Nt=d.getViewSubImage(h,ht);mt=Nt.viewport,We===0&&(e.setRenderTargetTextures(S,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(S))}let rt=B[We];rt===void 0&&(rt=new An,rt.layers.enable(We),rt.viewport=new Ut,B[We]=rt),rt.matrix.fromArray(ht.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ht.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(mt.x,mt.y,mt.width,mt.height),We===0&&(X.matrix.copy(rt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ze===!0&&X.cameras.push(rt)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let We=d.getDepthInformation(Ie[0]);We&&We.isValid&&We.texture&&m.init(We,s.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let We=0;We<Ie.length;We++){let ht=Ie[We].camera;if(ht){let mt=f[ht];mt||(mt=new bo,f[ht]=mt);let rt=d.getCameraImage(ht);mt.sourceTexture=rt}}}}for(let Ie=0;Ie<A.length;Ie++){let ze=w[Ie],_e=A[Ie];ze!==null&&_e!==void 0&&_e.update(ze,be,c||o)}se&&se(j,be),be.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:be}),v=null}let $e=new dp;$e.setAnimationLoop(Ue),this.setAnimationLoop=function(j){se=j},this.dispose=function(){}}},by=new _t,Sp=new je;Sp.set(-1,0,0,0,1,0,0,0,1);Ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;xc=class{constructor(e={}){let{canvas:t=Ff(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=zn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;let _=p,m=new Set([Bl,Fl,Ul]),f=new Set([zn,ri,wr,Ds,Ll,Nl]),M=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,w=null,g=[],b=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,B=null,X=null,L=null,W=null;this._outputColorSpace=Tn;let Z=0,q=0,re=null,Y=-1,ne=null,se=new Ut,Ue=new Ut,$e=null,j=new tt(0),be=0,Ie=t.width,ze=t.height,_e=1,Qe=null,Lt=null,We=new Ut(0,0,Ie,ze),ht=new Ut(0,0,Ie,ze),mt=!1,rt=new Ps,Nt=new ll,kt=!1,cn=!1,Ct=new _t,Xt=new k,Bt=new Ut,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vn=!1;function hn(){return re===null?_e:1}let F=i;function $t(y,N){return t.getContext(y,N)}let St,xt,ve,Tt,He,Ze,E,x,z,oe,te,de,pe,Q,ee,ae,P,J,$,me,ce,ge,Oe;try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Me,!1),F===null){let N="webgl2";if(F=$t(N,y),F===null)throw $t(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(y){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Je("WebGLRenderer: "+y.message),y}function nt(){St=new Ox(F),St.init(),ce=new yy(F,St),xt=new Ax(F,St,e,ce),ve=new xy(F,St),xt.reversedDepthBuffer&&h&&ve.buffers.depth.setReversed(!0),X=F.createFramebuffer(),L=F.createFramebuffer(),W=F.createFramebuffer(),Tt=new Hx(F),He=new sy,Ze=new _y(F,St,ve,He,xt,ce,Tt),E=new Bx(R),x=new Gg(F),ge=new Ex(F,x),z=new kx(F,x,Tt,ge),oe=new Gx(F,z,x,ge,Tt),J=new Vx(F,xt,Ze),ee=new Cx(He),te=new iy(R,E,St,xt,ge,ee),de=new wy(R,He),pe=new oy,Q=new dy(St),P=new wx(R,E,ve,oe,v,l),ae=new vy(R,oe,xt),Oe=new Ey(F,Tt,xt,ve),$=new Tx(F,St,Tt),me=new zx(F,St,Tt),Tt.programs=te.programs,R.capabilities=xt,R.extensions=St,R.properties=He,R.renderLists=pe,R.shadowMap=ae,R.state=ve,R.info=Tt}_!==zn&&(D=new Xx(_,t.width,t.height,a,s,r));let le=new Ah(R,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let y=St.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=St.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(y){y!==void 0&&(_e=y,this.setSize(Ie,ze,!1))},this.getSize=function(y){return y.set(Ie,ze)},this.setSize=function(y,N,G=!0){if(le.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=y,ze=N,t.width=Math.floor(y*_e),t.height=Math.floor(N*_e),G===!0&&(t.style.width=y+"px",t.style.height=N+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Ie*_e,ze*_e).floor()},this.setDrawingBufferSize=function(y,N,G){Ie=y,ze=N,_e=G,t.width=Math.floor(y*G),t.height=Math.floor(N*G),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(_===zn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(se)},this.getViewport=function(y){return y.copy(We)},this.setViewport=function(y,N,G,H){y.isVector4?We.set(y.x,y.y,y.z,y.w):We.set(y,N,G,H),ve.viewport(se.copy(We).multiplyScalar(hn()).round())},this.getScissor=function(y){return y.copy(ht)},this.setScissor=function(y,N,G,H){y.isVector4?ht.set(y.x,y.y,y.z,y.w):ht.set(y,N,G,H),ve.scissor(Ue.copy(ht).multiplyScalar(hn()).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(y){ve.setScissorTest(mt=y)},this.setOpaqueSort=function(y){Qe=y},this.setTransparentSort=function(y){Lt=y},this.getClearColor=function(y){return y.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,G=!0){let H=0;if(y){let V=!1;if(re!==null){let ye=re.texture.format;V=m.has(ye)}if(V){let ye=re.texture.type,Le=f.has(ye),xe=P.getClearColor(),we=P.getClearAlpha(),Te=xe.r,Xe=xe.g,it=xe.b;Le?(M[0]=Te,M[1]=Xe,M[2]=it,M[3]=we,F.clearBufferuiv(F.COLOR,0,M)):(T[0]=Te,T[1]=Xe,T[2]=it,T[3]=we,F.clearBufferiv(F.COLOR,0,T))}else H|=F.COLOR_BUFFER_BIT}N&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),P.dispose(),pe.dispose(),Q.dispose(),Ze.dispose(),He.dispose(),E.dispose(),oe.dispose(),z.dispose(),ge.dispose(),Oe.dispose(),te.dispose(),le.dispose(),le.removeEventListener("sessionstart",bi),le.removeEventListener("sessionend",Un),sn.stop()};function Ve(y){y.preventDefault(),sh("WebGLRenderer: Context Lost."),U=!0}function Ke(){sh("WebGLRenderer: Context Restored."),U=!1;let y=Tt.autoReset,N=ae.enabled,G=ae.autoUpdate,H=ae.needsUpdate,V=ae.type;nt(),Tt.autoReset=y,ae.enabled=N,ae.autoUpdate=G,ae.needsUpdate=H,ae.type=V}function Me(y){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function gt(y){let N=y.target;N.removeEventListener("dispose",gt),At(N)}function At(y){Zt(y),He.remove(y)}function Zt(y){let N=He.get(y).programs;N!==void 0&&(N.forEach(function(G){te.releaseProgram(G)}),y.isShaderMaterial&&te.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,G,H,V,ye){N===null&&(N=un);let Le=V.isMesh&&V.matrixWorld.determinantAffine()<0,xe=_a(y,N,G,H,V);ve.setMaterial(H,Le);let we=G.index,Te=1;if(H.wireframe===!0){if(we=z.getWireframeAttribute(G),we===void 0)return;Te=2}let Xe=G.drawRange,it=G.attributes.position,Ne=Xe.start*Te,ct=(Xe.start+Xe.count)*Te;ye!==null&&(Ne=Math.max(Ne,ye.start*Te),ct=Math.min(ct,(ye.start+ye.count)*Te)),we!==null?(Ne=Math.max(Ne,0),ct=Math.min(ct,we.count)):it!=null&&(Ne=Math.max(Ne,0),ct=Math.min(ct,it.count));let Rt=ct-Ne;if(Rt<0||Rt===1/0)return;ge.setup(V,H,xe,G,we);let lt,st=$;if(we!==null&&(lt=x.get(we),st=me,st.setIndex(lt)),V.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*hn()),st.setMode(F.LINES)):st.setMode(F.TRIANGLES);else if(V.isLine){let zt=H.linewidth;zt===void 0&&(zt=1),ve.setLineWidth(zt*hn()),V.isLineSegments?st.setMode(F.LINES):V.isLineLoop?st.setMode(F.LINE_LOOP):st.setMode(F.LINE_STRIP)}else V.isPoints?st.setMode(F.POINTS):V.isSprite&&st.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(St.get("WEBGL_multi_draw"))st.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let zt=V._multiDrawStarts,Re=V._multiDrawCounts,rn=V._multiDrawCount,pt=we?x.get(we).bytesPerElement:1,In=He.get(H).currentProgram.getUniforms();for(let Dt=0;Dt<rn;Dt++)In.setValue(F,"_gl_DrawID",Dt),st.render(zt[Dt]/pt,Re[Dt])}else if(V.isInstancedMesh)st.renderInstances(Ne,Rt,V.count);else if(G.isInstancedBufferGeometry){let zt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Re=Math.min(G.instanceCount,zt);st.renderInstances(Ne,Rt,Re)}else st.render(Ne,Rt)};function ma(y,N,G,H){B!==null&&y.isNodeMaterial&&B.setObject(H,y),kt===!0&&ee.setState(y,G,!1),y.transparent===!0&&y.side===Rn&&y.forceSinglePass===!1?(y.side=dn,y.needsUpdate=!0,Ji(y,N,H),y.side=us,y.needsUpdate=!0,Ji(y,N,H),y.side=Rn):Ji(y,N,H)}this.compile=function(y,N,G=null){G===null&&(G=y),B!==null&&B.renderStart(y,N,G),w=Q.get(G),w.init(N),b.push(w),G.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),y!==G&&y.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),cn=this.localClippingEnabled,kt=ee.init(this.clippingPlanes,cn),kt===!0&&ee.setGlobalState(this.clippingPlanes,N),B!==null&&ae.render(w.state.shadowsArray,G,N);let H=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ye=V.material;if(ye)if(Array.isArray(ye))for(let Le=0;Le<ye.length;Le++){let xe=ye[Le];ma(xe,G,N,V),H.add(xe)}else ma(ye,G,N,V),H.add(ye)}),w=b.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(y,N,G=null){let H=this.compile(y,N,G);return new Promise(V=>{function ye(){if(H.forEach(function(Le){let we=He.get(Le).currentProgram;(we===void 0||we.isReady())&&H.delete(Le)}),H.size===0){V(y);return}setTimeout(ye,10)}St.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ki=null;function qs(y){Ki&&Ki(y)}function bi(){sn.stop()}function Un(){sn.start()}let sn=new dp;sn.setAnimationLoop(qs),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(y){Ki=y,le.setAnimationLoop(y),y===null?sn.stop():sn.start()},le.addEventListener("sessionstart",bi),le.addEventListener("sessionend",Un),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(y,N);let G=le.enabled===!0&&le.isPresenting===!0,H=D!==null&&(re===null||G)&&D.begin(R,re);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(N),N=le.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,N,re),w=Q.get(y,b.length),w.init(N),w.state.textureUnits=Ze.getTextureUnits(),b.push(w),Ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?Nt.setFromArrayCamera(N):rt.setFromProjectionMatrix(Ct,qn,N.reversedDepth),cn=this.localClippingEnabled,kt=ee.init(this.clippingPlanes,cn),A=pe.get(y,g.length),A.init(),g.push(A),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Le=R.xr.getDepthSensingMesh();Le!==null&&Kn(Le,N,-1/0,R.sortObjects)}Kn(y,N,0,R.sortObjects),A.finish(),B!==null&&B.updateLights(w.state.lightsArray),R.sortObjects===!0&&A.sort(Qe,Lt),vn=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,vn&&P.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),kt===!0&&ee.beginShadows();let V=w.state.shadowsArray;if(ae.render(V,y,N),kt===!0&&ee.endShadows(),(H&&D.hasRenderPass())===!1){let Le=A.opaque,xe=A.transmissive;if(w.setupLights(),N.isArrayCamera){let we=N.cameras;if(xe.length>0)for(let Te=0,Xe=we.length;Te<Xe;Te++){let it=we[Te];Jn(Le,xe,y,it)}vn&&P.render(y);for(let Te=0,Xe=we.length;Te<Xe;Te++){let it=we[Te];Ys(A,y,it,it.viewport)}}else xe.length>0&&Jn(Le,xe,y,N),vn&&P.render(y),Ys(A,y,N)}re!==null&&q===0&&(Ze.updateMultisampleRenderTarget(re),Ze.updateRenderTargetMipmap(re)),H&&D.end(R),y.isScene===!0&&y.onAfterRender(R,y,N),ge.resetDefaultState(),Y=-1,ne=null,b.pop(),b.length>0?(w=b[b.length-1],Ze.setTextureUnits(w.state.textureUnits),kt===!0&&ee.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,B!==null&&B.renderEnd()};function Kn(y,N,G,H){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){let Le=N.isArrayCamera?Nt:rt;if(!y.frustumCulled||y.intersectsFrustum(Le)){H&&Bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ct);let xe=oe.update(y),we=y.material;we.visible&&A.push(y,xe,we,G,Bt.z,null,N)}}else if(y.isMesh||y.isLine||y.isPoints){let Le=N.isArrayCamera?Nt:rt;if(!y.frustumCulled||y.intersectsFrustum(Le)){let xe=oe.update(y),we=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Bt.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Bt.copy(xe.boundingSphere.center)),Bt.applyMatrix4(y.matrixWorld).applyMatrix4(Ct)),Array.isArray(we)){let Te=xe.groups;for(let Xe=0,it=Te.length;Xe<it;Xe++){let Ne=Te[Xe],ct=we[Ne.materialIndex];ct&&ct.visible&&A.push(y,xe,ct,G,Bt.z,Ne,N)}}else we.visible&&A.push(y,xe,we,G,Bt.z,null,N)}}}let ye=y.children;for(let Le=0,xe=ye.length;Le<xe;Le++)Kn(ye[Le],N,G,H)}function Ys(y,N,G,H){let{opaque:V,transmissive:ye,transparent:Le}=y;w.setupLightsView(G),kt===!0&&ee.setGlobalState(R.clippingPlanes,G),H&&ve.viewport(se.copy(H)),V.length>0&&$s(V,N,G),ye.length>0&&$s(ye,N,G),Le.length>0&&$s(Le,N,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Jn(y,N,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Ne=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Qt(1,1,{generateMipmaps:!0,type:Ne?fn:zn,minFilter:Bi,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let ye=w.state.transmissionRenderTarget[H.id],Le=H.viewport||se;ye.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);let xe=R.getRenderTarget(),we=R.getActiveCubeFace(),Te=R.getActiveMipmapLevel();R.setRenderTarget(ye),R.getClearColor(j),be=R.getClearAlpha(),be<1&&R.setClearColor(16777215,.5),R.clear(),vn&&P.render(G);let Xe=R.toneMapping;R.toneMapping=mi;let it=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),kt===!0&&ee.setGlobalState(R.clippingPlanes,H),$s(y,G,H),Ze.updateMultisampleRenderTarget(ye),Ze.updateRenderTargetMipmap(ye),St.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ct=0,Rt=N.length;ct<Rt;ct++){let lt=N[ct],{object:st,geometry:zt,material:Re,group:rn}=lt;if(Re.side===Rn&&st.layers.test(H.layers)){let pt=Re.side;Re.side=dn,Re.needsUpdate=!0,Zr(st,G,H,zt,Re,rn),Re.side=pt,Re.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ze.updateMultisampleRenderTarget(ye),Ze.updateRenderTargetMipmap(ye))}R.setRenderTarget(xe,we,Te),R.setClearColor(j,be),it!==void 0&&(H.viewport=it),R.toneMapping=Xe}function $s(y,N,G){let H=N.isScene===!0?N.overrideMaterial:null;for(let V=0,ye=y.length;V<ye;V++){let Le=y[V],{object:xe,geometry:we,group:Te}=Le,Xe=Le.material;Xe.allowOverride===!0&&H!==null&&(Xe=H),xe.layers.test(G.layers)&&Zr(xe,N,G,we,Xe,Te)}}function Zr(y,N,G,H,V,ye){B!==null&&V.isNodeMaterial&&B.setObject(y,V),y.onBeforeRender(R,N,G,H,V,ye),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(R,N,G,H,y,ye),V.transparent===!0&&V.side===Rn&&V.forceSinglePass===!1?(V.side=dn,V.needsUpdate=!0,R.renderBufferDirect(G,N,H,V,y,ye),V.side=us,V.needsUpdate=!0,R.renderBufferDirect(G,N,H,V,y,ye),V.side=Rn):R.renderBufferDirect(G,N,H,V,y,ye),y.onAfterRender(R,N,G,H,V,ye)}function ga(y){let N=0;for(let G of y)G.texture!==null&&N++;return N}function Ji(y,N,G){N.isScene!==!0&&(N=un);let H=He.get(y),V=w.state.lights,ye=w.state.shadowsArray,Le=V.state.version,xe=te.getParameters(y,V.state,ye,N,G,w.state.lightProbeGridArray),we=te.getProgramCacheKey(xe),Te=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let Xe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=E.get(y.envMap||H.environment,Xe),H.envMapRotation=H.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",gt),Te=new Map,H.programs=Te,H.programVariants=new Map);let it=Te.get(we);if(it!==void 0){if(H.currentProgram===it&&H.lightsStateVersion===Le)return xa(y,xe),it}else xe.uniforms=te.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,G,xe),y.onBeforeCompile(xe,R),it=te.acquireProgram(xe,we),Te.set(we,it),H.uniforms=xe.uniforms;let Ne=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ne.clippingPlanes=ee.uniform),xa(y,xe),H.needsLights=iu(y),H.lightsStateVersion=Le,H.needsLights&&(Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.sunLights.value=V.state.sun,Ne.sunLightShadows.value=V.state.sunShadow,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.sunShadowMatrix.value=V.state.sunShadowMatrix,Ne.sunShadowCascade.value=V.state.sunShadowCascade,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=ga(w.state.lightProbeGridArray),H.currentProgram=it,H.uniformsList=null,it}function va(y,N,G,H,V){let ye=He.get(y),Le=ye.currentProgram.id+","+H+","+V,xe=ye.programVariants.get(Le);return xe===void 0?(xe=Ji(y,N,G),ye.programVariants.set(Le,xe)):(ye.currentProgram=xe,ye.uniformsList=null,ye.outputColorSpace=H,ye.toneMapping=V),xe}function Kr(y){if(y.uniformsList===null){let N=y.currentProgram.getUniforms();y.uniformsList=Tr.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function xa(y,N){let G=He.get(y);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function _a(y,N,G,H,V){N.isScene!==!0&&(N=un),Ze.resetTextureUnits();let ye=N.fog,Le=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,xe=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ut.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Te=E.get(H.envMap||Le,we),Xe=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,it=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!G.morphAttributes.position,ct=!!G.morphAttributes.normal,Rt=!!G.morphAttributes.color,lt=mi;H.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(lt=R.toneMapping);let st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,zt=st!==void 0?st.length:0,Re=He.get(H),rn=w.state.lights;if(kt===!0&&(cn===!0||y!==ne)){let bt=y===ne&&H.id===Y;ee.setState(H,y,bt)}let pt=!1,In=!1;H.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==rn.state.version||V.isBatchedMesh&&Re.batching===!1||!V.isBatchedMesh&&Re.batching===!0||V.isBatchedMesh&&Re.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Re.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Re.instancing===!1||!V.isInstancedMesh&&Re.instancing===!0||V.isSkinnedMesh&&Re.skinning===!1||!V.isSkinnedMesh&&Re.skinning===!0||V.isInstancedMesh&&Re.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Re.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Re.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Re.instancingMorph===!1&&V.morphTexture!==null||Re.envMap!==Te||H.fog===!0&&Re.fog!==ye||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ee.numPlanes||Re.numIntersection!==ee.numIntersection)||Re.vertexAlphas!==Xe||Re.vertexTangents!==it||Re.morphTargets!==Ne||Re.morphNormals!==ct||Re.morphColors!==Rt||Re.morphTargetsCount!==zt||Re.numLightProbeGrids!==ga(w.state.lightProbeGridArray)?pt=!0:(Re.outputColorSpace!==xe||Re.toneMapping!==lt)&&(In=!0):(pt=!0,Re.__version=H.version);let Dt=Re.currentProgram;(pt===!0||In===!0)&&(Dt=In===!0?va(H,N,V,xe,lt):Ji(H,N,V),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Dt,Re));let bs=!1,on=!1,wi=!1,ue=Dt.getUniforms(),Ht=Re.uniforms;if(ve.useProgram(Dt.program)&&(bs=!0,on=!0,wi=!0),H.id!==Y&&(Y=H.id,on=!0),bs||ne!==y){ve.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ue.setValue(F,"projectionMatrix",y.projectionMatrix),ue.setValue(F,"viewMatrix",y.matrixWorldInverse);let qt=ue.map.cameraPosition;qt!==void 0&&qt.setValue(F,Xt.setFromMatrixPosition(y.matrixWorld)),xt.logarithmicDepthBuffer&&ue.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ue.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),ne!==y&&(ne=y,on=!0,wi=!0)}if(Re.needsLights&&(rn.state.sunShadowMap.length>0&&ue.setValue(F,"sunShadowMap",rn.state.sunShadowMap,Ze),rn.state.directionalShadowMap.length>0&&ue.setValue(F,"directionalShadowMap",rn.state.directionalShadowMap,Ze),rn.state.spotShadowMap.length>0&&ue.setValue(F,"spotShadowMap",rn.state.spotShadowMap,Ze),rn.state.pointShadowMap.length>0&&ue.setValue(F,"pointShadowMap",rn.state.pointShadowMap,Ze)),V.isSkinnedMesh){ue.setOptional(F,V,"bindMatrix"),ue.setOptional(F,V,"bindMatrixInverse");let bt=V.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ue.setValue(F,"boneTexture",bt.boneTexture,Ze))}V.isBatchedMesh&&(ue.setOptional(F,V,"batchingTexture"),ue.setValue(F,"batchingTexture",V._matricesTexture,Ze),ue.setOptional(F,V,"batchingIdTexture"),ue.setValue(F,"batchingIdTexture",V._indirectTexture,Ze),ue.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&ue.setValue(F,"batchingColorTexture",V._colorsTexture,Ze));let wn=G.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&J.update(V,G,Dt),(on||Re.receiveShadow!==V.receiveShadow)&&(Re.receiveShadow=V.receiveShadow,ue.setValue(F,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Ht.envMapIntensity.value=N.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=Ay()),on){if(ue.setValue(F,"toneMappingExposure",R.toneMappingExposure),Re.needsLights&&ya(Ht,wi),ye&&H.fog===!0&&de.refreshFogUniforms(Ht,ye),de.refreshMaterialUniforms(Ht,H,_e,ze,w.state.transmissionRenderTarget[y.id]),Re.needsLights&&Re.numLightProbeGrids>0){let bt=S,qt=0;for(let jn of w.state.lightProbeGridArray)jn.texture!==null&&(bt.textures[qt]=jn.texture,bt.min[qt]=jn.boundingBox.min,bt.max[qt]=jn.boundingBox.max,bt.resolution[qt]=jn.resolution,qt++);for(let jn in bt)bt[jn].length=qt;Ht.probesSH.value=bt.textures,Ht.probesMin.value=bt.min,Ht.probesMax.value=bt.max,Ht.probesResolution.value=bt.resolution}Tr.upload(F,Kr(Re),Ht,Ze)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Tr.upload(F,Kr(Re),Ht,Ze),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ue.setValue(F,"center",V.center),ue.setValue(F,"modelViewMatrix",V.modelViewMatrix),ue.setValue(F,"normalMatrix",V.normalMatrix),ue.setValue(F,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let bt=H.uniformsGroups;for(let qt=0,jn=bt.length;qt<jn;qt++){let su=bt[qt];Oe.update(su,Dt),Oe.bind(su,Dt)}}return Dt}function ya(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.sunLights.needsUpdate=N,y.sunLightShadows.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function iu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(y,N,G){let H=He.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),He.get(y.texture).__webglTexture=N,He.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){let G=He.get(y);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,G=0){re=y,Z=N,q=G;let H=null,V=!1,ye=!1;if(y){let xe=He.get(y);if(xe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(F.FRAMEBUFFER,xe.__webglFramebuffer),se.copy(y.viewport),Ue.copy(y.scissor),$e=y.scissorTest,ve.viewport(se),ve.scissor(Ue),ve.setScissorTest($e),Y=-1;return}else if(xe.__webglFramebuffer===void 0)Ze.setupRenderTarget(y);else if(xe.__hasExternalTextures)Ze.rebindTextures(y,He.get(y.texture).__webglTexture,He.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Xe=y.depthTexture;if(xe.__boundDepthTexture!==Xe){if(Xe!==null&&He.has(Xe)&&(y.width!==Xe.image.width||y.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(y)}}let we=y.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);let Te=He.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?H=Te[N][G]:H=Te[N],V=!0):y.samples>0&&Ze.useMultisampledRTT(y)===!1?H=He.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[G]:H=Te,se.copy(y.viewport),Ue.copy(y.scissor),$e=y.scissorTest}else se.copy(We).multiplyScalar(_e).floor(),Ue.copy(ht).multiplyScalar(_e).floor(),$e=mt;if(G!==0&&(H=X),ve.bindFramebuffer(F.FRAMEBUFFER,H)&&ve.drawBuffers(y,H),ve.viewport(se),ve.scissor(Ue),ve.setScissorTest($e),V){let xe=He.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,G)}else if(ye){let xe=N;for(let we=0;we<y.textures.length;we++){let Te=He.get(y.textures[we]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+we,Te.__webglTexture,G,xe)}}else if(y!==null&&G!==0){let xe=He.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,G)}Y=-1};function Qn(y){let N=He.get(y);return(N.__readFormat!==y.format||N.__readType!==y.type)&&(N.__readFormat=y.format,N.__readType=y.type,N.__formatReadable=xt.textureFormatReadable(y.format),N.__typeReadable=xt.textureTypeReadable(y.type)),N}this.readRenderTargetPixels=function(y,N,G,H,V,ye,Le,xe=0){if(!(y&&y.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=He.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Le!==void 0&&(we=we[Le],Array.isArray(we)&&(we=we[0])),we){ve.bindFramebuffer(F.FRAMEBUFFER,we);try{let Te=y.textures[xe],Xe=Te.format,it=Te.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe);let Ne=Qn(Te);if(Ne.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-H&&G>=0&&G<=y.height-V&&F.readPixels(N,G,H,V,ce.convert(Xe),ce.convert(it),ye)}finally{let Te=re!==null?He.get(re).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(y,N,G,H,V,ye,Le,xe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=He.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Le!==void 0&&(we=we[Le],Array.isArray(we)&&(we=we[0])),we)if(N>=0&&N<=y.width-H&&G>=0&&G<=y.height-V){ve.bindFramebuffer(F.FRAMEBUFFER,we);let Te=y.textures[xe],Xe=Te.format,it=Te.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe);let Ne=Qn(Te);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.bufferData(F.PIXEL_PACK_BUFFER,ye.byteLength,F.STREAM_READ),F.readPixels(N,G,H,V,ce.convert(Xe),ce.convert(it),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Rt=re!==null?He.get(re).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Rt);let lt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Of(F,lt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ye),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ct),F.deleteSync(lt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,G=0){let H=Math.pow(2,-G),V=Math.floor(y.image.width*H),ye=Math.floor(y.image.height*H),Le=N!==null?N.x:0,xe=N!==null?N.y:0;Ze.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,Le,xe,V,ye),ve.unbindTexture()},this.copyTextureToTexture=function(y,N,G=null,H=null,V=0,ye=0){let Le,xe,we,Te,Xe,it,Ne,ct,Rt,lt=y.isCompressedTexture?y.mipmaps[ye]:y.image;if(G!==null)Le=G.max.x-G.min.x,xe=G.max.y-G.min.y,we=G.isBox3?G.max.z-G.min.z:1,Te=G.min.x,Xe=G.min.y,it=G.isBox3?G.min.z:0;else{let ue=Math.pow(2,-V);Le=Math.floor(lt.width*ue),xe=Math.floor(lt.height*ue),y.isDataArrayTexture?we=lt.depth:y.isData3DTexture?we=Math.floor(lt.depth*ue):we=1,Te=0,Xe=0,it=0}H!==null?(Ne=H.x,ct=H.y,Rt=H.z):(Ne=0,ct=0,Rt=0);let st=ce.convert(N.format),zt=ce.convert(N.type),Re;N.isData3DTexture?(Ze.setTexture3D(N,0),Re=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ze.setTexture2DArray(N,0),Re=F.TEXTURE_2D_ARRAY):(Ze.setTexture2D(N,0),Re=F.TEXTURE_2D),ve.activeTexture(F.TEXTURE0),ve.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),ve.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ve.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let rn=ve.getParameter(F.UNPACK_ROW_LENGTH),pt=ve.getParameter(F.UNPACK_IMAGE_HEIGHT),In=ve.getParameter(F.UNPACK_SKIP_PIXELS),Dt=ve.getParameter(F.UNPACK_SKIP_ROWS),bs=ve.getParameter(F.UNPACK_SKIP_IMAGES);ve.pixelStorei(F.UNPACK_ROW_LENGTH,lt.width),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt.height),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,Te),ve.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,it);let on=y.isDataArrayTexture||y.isData3DTexture,wi=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){let ue=He.get(y),Ht=He.get(N),wn=He.get(ue.__renderTarget),bt=He.get(Ht.__renderTarget);ve.bindFramebuffer(F.READ_FRAMEBUFFER,wn.__webglFramebuffer),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let qt=0;qt<we;qt++)on&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.get(y).__webglTexture,V,it+qt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.get(N).__webglTexture,ye,Rt+qt)),F.blitFramebuffer(Te,Xe,Te+Le,Xe+xe,Ne,ct,Ne+Le,ct+xe,F.DEPTH_BUFFER_BIT,F.NEAREST);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||He.has(y)){let ue=He.get(y),Ht=He.get(N);ve.bindFramebuffer(F.READ_FRAMEBUFFER,L),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,W);for(let wn=0;wn<we;wn++)on?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ue.__webglTexture,V,it+wn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ue.__webglTexture,V),wi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,ye,Rt+wn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ht.__webglTexture,ye),V!==0?F.blitFramebuffer(Te,Xe,Te+Le,Xe+xe,Ne,ct,Ne+Le,ct+xe,F.COLOR_BUFFER_BIT,F.NEAREST):wi?F.copyTexSubImage3D(Re,ye,Ne,ct,Rt+wn,Te,Xe,Le,xe):F.copyTexSubImage2D(Re,ye,Ne,ct,Te,Xe,Le,xe);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else wi?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(Re,ye,Ne,ct,Rt,Le,xe,we,st,zt,lt.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Re,ye,Ne,ct,Rt,Le,xe,we,st,lt.data):F.texSubImage3D(Re,ye,Ne,ct,Rt,Le,xe,we,st,zt,lt):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ye,Ne,ct,Le,xe,st,zt,lt.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ye,Ne,ct,lt.width,lt.height,st,lt.data):F.texSubImage2D(F.TEXTURE_2D,ye,Ne,ct,Le,xe,st,zt,lt);ve.pixelStorei(F.UNPACK_ROW_LENGTH,rn),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,In),ve.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,bs),ye===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(Re),ve.unbindTexture()},this.initRenderTarget=function(y){He.get(y).__webglFramebuffer===void 0&&Ze.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ze.setTextureCube(y,0):y.isData3DTexture?Ze.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ze.setTexture2DArray(y,0):Ze.setTexture2D(y,0),ve.unbindTexture()},this.resetState=function(){Z=0,q=0,re=null,ve.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}});var Cr,Ch=Kt(()=>{Cr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var Hn,Ry,Rh,Py,ds,Rr=Kt(()=>{Hi();Hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ry=new _r(-1,1,1,-1,0,1),Rh=class extends Ft{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}},Py=new Rh,ds=class{constructor(e){this._mesh=new yt(Py,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ry)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Mc,bp=Kt(()=>{Hi();Rr();Mc=class extends Hn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zi.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ds(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var Ko,Sc,wp=Kt(()=>{Rr();Ko=class extends Hn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Sc=class extends Hn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var bc,Ep=Kt(()=>{Hi();Ch();bp();wp();bc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ye);this._width=i.width,this._height=i.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mc(Cr),this.copyPass.material.blending=Fi,this.timer=new Co}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ko!==void 0&&(o instanceof Ko?i=!0:o instanceof Sc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var wc,Tp=Kt(()=>{Hi();Rr();wc=class extends Hn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new tt}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var Ap,Cp=Kt(()=>{Hi();Ap={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new tt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var Pr,Rp=Kt(()=>{Hi();Rr();Ch();Cp();Pr=class n extends Hn{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ye(e.x,e.y):new Ye(256,256),this.clearColor=new tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,o,{type:fn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Qt(r,o,{type:fn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new Qt(r,o,{type:fn,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),o=Math.round(o/2)}let a=Ap;this.highPassUniforms=zi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ye(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=zi.clone(Cr.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader,premultipliedAlpha:!0,blending:Is,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new tt,this._oldClearAlpha=1,this._basic=new Di,this._fsQuad=new ds(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ye(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new ft({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ye(.5,.5)},direction:{value:new Ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Pr.BlurDirectionX=new Ye(1,0);Pr.BlurDirectionY=new Ye(0,1)});var Jo,Pp=Kt(()=>{Jo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var Ec,Ip=Kt(()=>{Hi();Rr();Pp();Ec=class extends Hn{constructor(){super(),this.isOutputPass=!0,this.uniforms=zi.clone(Jo.uniforms),this.material=new xr({name:Jo.name,uniforms:this.uniforms,vertexShader:Jo.vertexShader,fragmentShader:Jo.fragmentShader}),this._fsQuad=new ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Io?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===No?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Uo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var Tc,Ac,pn,Lp=Kt(()=>{Tc=`
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.); const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.; vec4 s1=floor(b1)*2.+1.; vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.); m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float hash21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vnoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x),mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x),f.y);}
`,Ac=`
uniform float uScale; varying vec2 vUv;
void main(){ vUv=uv*2.-1.; vec4 mv=modelViewMatrix*vec4(0.,0.,0.,1.); mv.xy+=position.xy*uScale; gl_Position=projectionMatrix*mv; }`,pn=`
#include <tonemapping_fragment>
#include <colorspace_fragment>`});function Iy(n,e,t){let i=1+e,s,r,o;if(i<1e-6)s=1,r=0,o=0,i=0;else{s=t,r=0,o=-n;let a=1/Math.hypot(s,r,o,i);s*=a,r*=a,o*=a,i*=a}return[s,r,o,i]}function Ly(n,e,t,i,s,r,o){let a=-n,l=-e,c=-t,u=i,d=u*s+l*o-c*r,h=u*r+c*s-a*o,p=u*o+a*r-l*s,v=-a*s-l*r-c*o;return[d*u+v*-a+h*-c-p*-l,h*u+v*-l+p*-a-d*-c,p*u+v*-c+d*-l-h*-a]}function Ny(n,e,t){let i=Math.PI/(1.5*(e+1)),s=1.5*i,r=Np*i,o=[],a=2;for(let u=0;u<e;u++){let d=s*(u+1),h=2*Math.PI*Math.sin(d),p=u===0||u===e-1?t:Math.max(t,Math.round(h/r));o.push({theta:d,m:p}),a+=p}let l=o.map((u,d)=>({i:d,mid:Math.abs(u.theta-Math.PI/2)})).sort((u,d)=>u.mid-d.mid),c=0;for(;a!==n&&c++<2e4;){let u=l[(c-1)%l.length].i;u===0||u===o.length-1||(a<n?(o[u].m++,a++):o[u].m>6&&(o[u].m--,a--))}return{rings:o,n:a,dVert:s,size:i}}function Dp(n=2e3,e=5,t=.038){let i=Ny(n,41,5);if(i.n!==n)throw new Error(`hex layout: planned ${i.n}, expected ${n}`);let s=new Float32Array(n*3),r=[],o=0,a=(_,m,f,M,T,S)=>{s[o*3]=_,s[o*3+1]=m,s[o*3+2]=f,r[o]={theta:M,phi:T,pole:S},o++};a(0,1,0,0,0,!0),i.rings.forEach((_,m)=>{let f=m%2*(Math.PI/_.m);for(let M=0;M<_.m;M++){let T=f+M*(2*Math.PI/_.m),S=_.theta;a(Math.sin(S)*Math.cos(T),Math.cos(S),Math.sin(S)*Math.sin(T),S,T,!1)}}),a(0,-1,0,Math.PI,0,!0);let l=new Int32Array(n*6),c=new Float64Array(n*6);for(let _=0;_<n;_++){let m=[-1,-1,-1,-1,-1,-1],f=[4,4,4,4,4,4],M=s[_*3],T=s[_*3+1],S=s[_*3+2];for(let A=0;A<n;A++){if(A===_)continue;let w=(M-s[A*3])**2+(T-s[A*3+1])**2+(S-s[A*3+2])**2;if(w>=f[5])continue;let g=5;for(;g>0&&w<f[g-1];)f[g]=f[g-1],m[g]=m[g-1],g--;f[g]=w,m[g]=A}for(let A=0;A<6;A++)l[_*6+A]=m[A],c[_*6+A]=Math.sqrt(f[A])}let u=[];for(let _=0;_<n;_++)u.push(c[_*6]);u.sort((_,m)=>_-m);let d=u[n>>1],h=d*e/Np*(1-t),p=new Float32Array(n),v=new Float32Array(n);for(let _=0;_<n;_++){let m=s[_*3],f=s[_*3+1],M=s[_*3+2],[T,S,A,w]=Iy(m,f,M),g,b,D;if(r[_].pole){let L=l[_*6];g=s[L*3],b=s[L*3+1],D=s[L*3+2]}else{let L=f;g=-m*L,b=1-f*L,D=-M*L}let[R,,U]=Ly(T,S,A,w,g,b,D),B=Math.atan2(U,R);p[_]=Math.PI/2-B;let X=c[_*6]/d;X<.97&&(X=.97),X>1.045&&(X=1.045),v[_]=X}return{pos:s,angles:p,scales:v,baseTR:h,pickCos:Math.cos(d*.9)}}var Np,Up=Kt(()=>{Np=Math.sqrt(3)});function Bp(n,e){let t=e.mobile,i=new xc({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1});window.__edenRenderers=window.__edenRenderers||[],window.__edenRenderers.push(i),i.info.autoReset=!1,i.setClearColor(131843,1),i.outputColorSpace=Tn;let s=1.5,r=()=>Math.min(s,window.devicePixelRatio||1),o=r(),a=n.parentElement,l=!1,c=0,u=document.createElement("canvas");function d(){if(a)try{let O=n.width,K=n.height;if(O<2||K<2)return;let he=Math.min(960,O),Ae=Math.max(1,Math.round(K*(he/O)));u.width=he,u.height=Ae;let Fe=u.getContext("2d");if(!Fe)return;Fe.drawImage(n,0,0,he,Ae),a.style.backgroundColor="#020303",a.style.backgroundImage="url("+u.toDataURL("image/jpeg",.7)+")",a.style.backgroundSize="cover",a.style.backgroundPosition="center",l=!0,c=performance.now()}catch{a&&(a.style.backgroundColor="#020303")}}function h(){d(),n.style.transition="none",n.style.visibility="hidden"}function p(){n.style.visibility="visible"}let v=new mo;v.fog=null;let _=new An(40,1,.1,3e3),m={uTime:{value:0},uPx:{value:600}};function f(O,K,he,Ae,Fe,Ee){let Be=new Ft,et=new Float32Array(O*3),En=new Float32Array(O),ws=new Float32Array(O*3);for(let Jr=0;Jr<O;Jr++){let ru,ou,au;if(Ee)ru=(Math.random()-.5)*Ee[0],ou=Ee[2]+Math.random()*(Ee[1]-Ee[2]),au=(Math.random()-.5)*Ee[3]-2;else{let uu=Math.random()*2-1,Md=Math.random()*Math.PI*2,hu=K+Math.random()*(he-K),Sd=Math.sqrt(1-uu*uu);ru=Math.cos(Md)*Sd*hu,ou=uu*hu-25,au=Math.sin(Md)*Sd*hu}et.set([ru,ou,au],Jr*3),En[Jr]=Ae+Math.pow(Math.random(),3)*(Fe-Ae);let lu=Math.random(),cu=lu<.08?De.lime:lu<.16?De.cyan:lu<.2?De.ember:De.white;ws.set([cu.r,cu.g,cu.b],Jr*3)}Be.setAttribute("position",new Jt(et,3)),Be.setAttribute("aSize",new Jt(En,1)),Be.setAttribute("aCol",new Jt(ws,3));let Ma=new ft({...Pn,uniforms:{...m,uDrift:{value:Ee?1:0},uA:{value:Ee?.55:.9}},vertexShader:`attribute float aSize; attribute vec3 aCol; uniform float uTime,uPx,uDrift; varying vec3 vC; varying float vT;
        void main(){ vec3 p=position; p.y+=sin(uTime*.2+p.x)*.3*uDrift; p.x+=cos(uTime*.15+p.z)*.3*uDrift;
          vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
          vT=.55+.45*sin(uTime*(1.+fract(aSize*7.)*2.)+aSize*40.); vC=aCol;
          gl_PointSize=clamp(aSize*uPx/(-mv.z),1.,6.); }`,fragmentShader:`uniform float uA; varying vec3 vC; varying float vT; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.0,d); gl_FragColor=vec4(vC*a*vT*uA,1.); ${pn} }`}),yd=new rs(Be,Ma);return yd.frustumCulled=!1,yd}let M=f(t?1600:2600,500,900,1.2,4.5),T=f(t?500:1e3,0,0,.03,.09,[34,10,-70,26]);v.add(M,T);function S(O,K,he,Ae){let Fe=new ft({...Pn,uniforms:{uScale:{value:K},uC:{value:O.clone()},uA:{value:Ae},uP:{value:he}},vertexShader:Ac,fragmentShader:`uniform vec3 uC; uniform float uA,uP; varying vec2 vUv; void main(){ float r=length(vUv); float a=pow(max(0.,1.-r),uP)*uA; gl_FragColor=vec4(uC*a,1.); ${pn} }`}),Ee=new yt(new si(2,2),Fe);return Ee.frustumCulled=!1,Ee.renderOrder=2,Ee}let A=new yn;[[-90,20,-260,150,De.lime,.0022],[110,-40,-300,190,De.cyan,.003],[-60,-80,-240,170,De.ember,.003],[60,30,-350,140,Fs("#5A2CFF"),.005]].forEach(([O,K,he,Ae,Fe,Ee])=>{let Be=S(Fe,Ae,2.2,Ee);Be.position.set(O,K,he),A.add(Be)}),v.add(A);let w=new yn;v.add(w);let g={...m,uEnergy:{value:.3},uWin:{value:0},uFlash:{value:0},uKick:{value:0},uA:{value:De.lime.clone()},uB:{value:De.cyan.clone()},uC:{value:De.ember.clone()}};function b(O){return new ft({uniforms:O,vertexShader:Tc+`uniform float uTime,uEnergy,uWin,uKick; varying vec3 vN,vV,vP; varying float vNoise;
        void main(){ vec3 p=position; float t=uTime*(1.+uWin*1.5);
          float n=snoise(normal*1.3+vec3(t*.22,t*.17,-t*.2)); float n2=snoise(normal*3.2-t*.45)*.45;
          float d=(n+n2)*(.03+.04*uEnergy+.07*uWin)+uKick*.12*(n*.5+.5);
          p+=normal*d; vNoise=n+n2; vP=p;
          vec4 mv=modelViewMatrix*vec4(p,1.); vV=-mv.xyz; vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*mv; }`,fragmentShader:Tc+`uniform vec3 uA,uB,uC; uniform float uTime,uEnergy,uWin,uFlash,uKick; varying vec3 vN,vV,vP; varying float vNoise;
        void main(){ vec3 n=normalize(vN), v=normalize(vV); float ndv=max(dot(n,v),0.); float f=pow(1.-ndv,2.4);
          float t=uTime*(1.+uWin*2.);
          float vein=1.-abs(snoise(vP*1.7+vec3(0.,t*.35,t*.12)));
          float vein2=1.-abs(snoise(vP*4.1-vec3(t*.5,0.,0.)));
          float v1=pow(vein,14.)*1.7+pow(vein2,20.)*.8+pow(vein,4.)*.12;
          vec3 hue=mix(uA,uC,uWin);
          vec3 base=mix(vec3(.004,.012,.006), hue*.06, smoothstep(-.6,.8,vNoise));
          vec3 col=base + hue*v1*(.6+uEnergy*.7+uKick*1.6);
          col+=mix(uB,hue,.35+uWin*.5)*f*(.55+uEnergy*.35);
          col+=vec3(1.,1.,.85)*pow(ndv,7.)*(.25+uEnergy*.5)*pow(vein,3.);
          col*=1.+uFlash*1.6;
          gl_FragColor=vec4(col,1.); ${pn} }`})}let D=new yt(new pi(1.12,t?24:40),b(g));w.add(D);function R(O,K,he){return new ft({...Pn,side:dn,uniforms:{uC:{value:O.clone()},uP:{value:K},uM:{value:he}},vertexShader:"varying vec3 vN,vV; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vV=-mv.xyz; vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*mv; }",fragmentShader:`uniform vec3 uC; uniform float uP,uM; varying vec3 vN,vV; void main(){ float i=pow(clamp(-dot(normalize(vN),normalize(vV)),0.,1.),uP); gl_FragColor=vec4(uC*i*uM,1.); ${pn} }`})}let U=new yt(new pi(1.5,6),R(De.lime,3.4,.8));w.add(U);let B=S(De.lime,4.2,4.2,.3);w.add(B);let X=S(De.cyan,9,6,.05);w.add(X);function L(O,K={}){return new ft({...Pn,side:Rn,uniforms:{...m,uC:{value:O.clone()},uN:{value:K.n||48},uDuty:{value:K.duty||.5},uSp:{value:K.sp||.05},uA:{value:K.a||.8},uR0:{value:K.r0},uR1:{value:K.r1}},vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 uC; uniform float uN,uDuty,uSp,uA,uTime,uR0,uR1; varying vec2 vP;
        void main(){ float a=atan(vP.y,vP.x)/6.2831853+.5; float r=(length(vP)-uR0)/(uR1-uR0);
          float d=step(fract(a*uN+uTime*uSp*uN),uDuty); float e=smoothstep(0.,.25,r)*smoothstep(1.,.75,r);
          float sweep=pow(fract(a-uTime*uSp*.6),8.);
          gl_FragColor=vec4(uC*(d*.75+sweep*1.4)*e*uA,1.); ${pn} }`})}function W(O,K,he,Ae){return new yt(new os(O,K,256,1),L(he,{...Ae,r0:O,r1:K}))}let Z=[W(1.55,1.6,De.lime,{n:64,duty:.55,sp:.02,a:.9}),W(2.55,2.58,De.cyan,{n:180,duty:.3,sp:-.01,a:.7}),W(3.1,3.14,De.lime,{n:12,duty:.85,sp:.006,a:.22})];Z[0].rotation.set(1.2,.3,0),Z[1].rotation.set(1.42,-.5,.2),Z[2].rotation.set(.35,.9,0),Z.forEach(O=>w.add(O));let q={...m,uC:{value:De.lime.clone()},uWin:g.uWin,uFlash:g.uFlash},re=new yt(new si(90,90,1,1),new ft({...Pn,uniforms:q,vertexShader:"varying vec2 vW; void main(){ vW=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uTime,uWin,uFlash; uniform vec3 uC; varying vec2 vW;
      float gl(vec2 p){ vec2 g=abs(fract(p-.5)-.5)/fwidth(p); return 1.-min(min(g.x,g.y),1.); }
      void main(){ float r=length(vW); float l=gl(vW*.7)*.6+gl(vW*.14)*.9; float fade=exp(-r*.075)*smoothstep(1.5,4.,r);
        float wave=exp(-pow((r-mod(uTime*6.,45.))*.35,2.))*.9; vec3 c=mix(uC,vec3(1.,.42,.1),uWin);
        gl_FragColor=vec4(c*l*fade*(.22+wave*.8+uFlash*1.5),1.); ${pn} }`}));re.rotation.x=-Math.PI/2,re.position.y=-3.3,re.frustumCulled=!1,w.add(re);let Y=new yt(new si(2,2),new ft({...Pn,uniforms:{uC:{value:De.cyan.clone()},uA:{value:.35}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv*2.-1.; vec4 mv=modelViewMatrix*vec4(0.,0.,0.,1.); mv.xy+=position.xy*vec2(9.,.32); gl_Position=projectionMatrix*mv; }",fragmentShader:`uniform vec3 uC; uniform float uA; varying vec2 vUv; void main(){ float a=exp(-abs(vUv.y)*9.)*pow(1.-abs(vUv.x),3.)*uA; gl_FragColor=vec4((uC+vec3(.4))*a,1.); ${pn} }`}));Y.frustumCulled=!1,Y.renderOrder=4,w.add(Y);let ne={...m,uSec:{value:0},uCut:{value:-1},uScan:{value:-1},uWinOn:{value:0},uLime:{value:De.lime.clone()},uEmber:{value:De.ember.clone()}},se=new yt(new os(1.9,2.04,360,1),new ft({...Pn,side:Rn,uniforms:ne,vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uTime,uSec,uCut,uScan,uWinOn; uniform vec3 uLime,uEmber; varying vec2 vP;
      float h(float x){ return fract(sin(x*91.7)*43758.5); }
      void main(){ float a=atan(vP.x,vP.y)/6.2831853; a=fract(a); float s=a*60.; float seg=floor(s); float g=fract(s);
        float r=(length(vP)-1.9)/.14; float body=step(.14,g)*step(g,.86)*smoothstep(0.,.18,r)*smoothstep(1.,.82,r);
        float win=step(54.,seg);
        float lit=step(seg+1.,uSec+.001);
        float cur=step(seg,uSec)*step(uSec,seg+1.);
        vec3 c=mix(uLime,uEmber,win);
        float base=.07+win*.06;
        float flick=win*uWinOn*(.35+.65*step(.55,h(seg+floor(uTime*14.))));
        float v=base + lit*(win>.5?.6:.7) + cur*(1.2+.6*sin(uTime*20.)) + flick*.6;
        if(uCut>=0.){ float after=step(uCut,seg)*win; v=mix(v,.05,after); if(abs(seg-uCut)<.5){ c=vec3(1.); v=2.6; } }
        if(uScan>=0. && abs(seg-uScan)<.5){ c=vec3(1.,.95,.8); v=2.4; }
        float tick=step(.97,fract(a*12.))*step(r,.0)*0.;
        gl_FragColor=vec4(c*v*body,1.); ${pn} }`}));w.add(se);let Ue=W(2.18,2.24,De.lime,{n:240,duty:.25,sp:0,a:.35});w.add(Ue);let $e={uScale:{value:9},uK:{value:1},uC:{value:De.lime.clone()}},j=new yt(new si(2,2),new ft({...Pn,uniforms:$e,vertexShader:Ac,fragmentShader:`uniform float uK; uniform vec3 uC; varying vec2 vUv; void main(){ float r=length(vUv); float w=.03+uK*.1; float ring=exp(-pow((r-uK*.95)/w,2.)); float a=ring*(1.-uK)*(1.-uK)*1.3 + exp(-r*r*22.)*(1.-uK)*(1.-uK)*.5; gl_FragColor=vec4(mix(vec3(1.),uC,uK)*a,1.); ${pn} }`}));j.frustumCulled=!1,j.visible=!1,w.add(j);let be=t?5e3:9e3,Ie=new Ft,ze={position:3,aCtrl:3,aEnd:3,aT:2,aCol:3,aSize:1},_e={};for(let O in ze){_e[O]=new Float32Array(be*ze[O]);let K=new Jt(_e[O],ze[O]);K.setUsage(pc),Ie.setAttribute(O,K)}_e.aT.fill(-999);let Qe=new ft({...Pn,uniforms:{...m,uDensity:{value:1}},vertexShader:`attribute vec3 aCtrl,aEnd,aCol; attribute vec2 aT; attribute float aSize; uniform float uTime,uPx,uDensity; varying vec3 vC; varying float vA;
      void main(){ float k=(uTime-aT.x)/aT.y; if(k<0.||k>1.||fract(float(gl_VertexID)*.618)>uDensity){ gl_Position=vec4(2.,2.,2.,1.); gl_PointSize=0.; vA=0.; return; }
        float e = aSize>0. ? k*k*(1.6-.6*k) : 1.-pow(1.-k,3.);
        vec3 p=mix(mix(position,aCtrl,e),mix(aCtrl,aEnd,e),e);
        vec4 mv=viewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
        vA = aSize>0. ? smoothstep(0.,.15,k)*(.6+.4*k) : (1.-k*k);
        vC=aCol; gl_PointSize=clamp(abs(aSize)*uPx/(-mv.z),0.,22.); }`,fragmentShader:`varying vec3 vC; varying float vA; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d); a*=a; gl_FragColor=vec4((vC+vec3(1.)*smoothstep(.18,0.,d)*.8)*a*vA*1.4,1.); ${pn} }`}),Lt=new rs(Ie,Qe);Lt.frustumCulled=!1,Lt.renderOrder=5,v.add(Lt);let We=0,ht=-1,mt=-1,rt=!1;function Nt(O,K,he,Ae,Fe,Ee,Be){let et=We;We=(We+1)%be,_e.position.set([O.x,O.y,O.z],et*3),_e.aCtrl.set([K.x,K.y,K.z],et*3),_e.aEnd.set([he.x,he.y,he.z],et*3),_e.aT[et*2]=Ae,_e.aT[et*2+1]=Fe,_e.aCol.set([Ee.r,Ee.g,Ee.b],et*3),_e.aSize[et]=Be,ht<0?ht=mt=et:et<ht?rt=!0:mt=Math.max(mt,et)}function kt(){if(!(ht<0)){for(let O in ze){let K=Ie.attributes[O];rt?K.clearUpdateRanges():K.addUpdateRange(ht*ze[O],(mt-ht+1)*ze[O]),K.needsUpdate=!0}ht=mt=-1,rt=!1}}let cn=new k,Ct=new k,Xt=()=>{let O=Math.random()*2-1,K=Math.random()*6.2832,he=Math.sqrt(1-O*O);return at(Math.cos(K)*he,O,Math.sin(K)*he)},Bt=(O,K)=>O.clone().add(Xt().multiplyScalar(K));function un(O,K,he,Ae,Fe,Ee,Be=0){let et=m.uTime.value+Be,En=O.clone().lerp(K,.45).add(Xt().multiplyScalar(O.distanceTo(K)*.28));for(let ws=0;ws<he;ws++){let Ma=ws/he;Nt(Bt(O,.05),Bt(En,.08*Ma),Bt(K,.04),et+ws*.011,Ee,Ae,Fe*(1-Ma*.75))}}function vn(O,K,he){return cn.set(O/lt*2-1,-(K/st)*2+1,.5).unproject(_).sub(_.position).normalize(),_.position.clone().add(cn.multiplyScalar(he))}let hn=new yn;v.add(hn);let $t=[De.lime,De.cyan,De.ember].map((O,K)=>{let he=new yn,Ae={...m,uEnergy:{value:.4},uWin:{value:0},uFlash:{value:0},uKick:{value:0},uA:{value:O.clone()},uB:{value:(K===1?De.white:De.cyan).clone()},uC:{value:O.clone()}},Fe=new yt(new pi(.62,12),b(Ae));he.add(Fe),he.add(new yt(new pi(.86,4),R(O,3.4,.8))),he.add(S(O,3.2,4.5,.16));let Ee=W(1.05,1.09,O,{n:36,duty:.5,sp:.02*(K-1||1),a:.8});return Ee.rotation.x=1.3,he.add(Ee),hn.add(he),{g:he,u:Ae,m:Fe}}),St=5,xt=[],ve=[],Tt=[],He=[];for(let O=0;O<St;O++)xt.push(at()),ve.push(at()),Tt.push(at()),He.push(at());let Ze={...m,uP0:{value:xt},uP1:{value:ve},uP2:{value:Tt},uP3:{value:He},uCols:{value:[De.lime,De.cyan,De.ember,De.cyan,De.ember].map(O=>O.clone())},uPulse:{value:0},uDensity:{value:1}},E=[560,380,320,360,360],x=E.reduce((O,K)=>O+K),z=new Ft,oe=new Float32Array(x*4),te=new Float32Array(x*3);{let O=0;E.forEach((K,he)=>{for(let Ae=0;Ae<K;Ae++,O++){oe.set([he,Math.random(),.12+Math.random()*.1,.4+Math.random()],O*4);let Fe=Xt();te.set([Fe.x,Fe.y,Fe.z],O*3)}})}z.setAttribute("position",new Jt(te,3)),z.setAttribute("aS",new Jt(oe,4));let de=new rs(z,new ft({...Pn,uniforms:Ze,vertexShader:`attribute vec4 aS; uniform vec3 uP0[5],uP1[5],uP2[5],uP3[5],uCols[5]; uniform float uTime,uPx,uPulse,uDensity; varying vec3 vC; varying float vA;
      void main(){ int c=int(aS.x+.5); if(fract(aS.y*7.3)>uDensity){ gl_Position=vec4(2.,2.,2.,1.); gl_PointSize=0.; return; }
        float k=fract(aS.y+uTime*aS.z*(c>2?.55:1.)); float u=1.-k;
        vec3 p=u*u*u*uP0[c]+3.*u*u*k*uP1[c]+3.*u*k*k*uP2[c]+k*k*k*uP3[c];
        p+=position*sin(k*3.1416)*(.18+.25*aS.w);
        vec4 mv=viewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
        vA=smoothstep(0.,.08,k)*smoothstep(1.,.85,k)*(.55+uPulse*.8); vC=uCols[c];
        gl_PointSize=clamp((.05+.05*aS.w)*uPx/(-mv.z),1.,10.); }`,fragmentShader:`varying vec3 vC; varying float vA; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d); gl_FragColor=vec4((vC+.4)*a*vA,1.); ${pn} }`}));de.frustumCulled=!1,v.add(de);let pe=new yo(new Ft,new gr({color:7311136,...Pn,opacity:.5}));pe.frustumCulled=!1,v.add(pe);let Q=5;function ee(O){Q=Ir(O*3.2,1.75,5.6),$t.forEach((Ae,Fe)=>Ae.g.position.set((Fe-1)*Q,mn.poolY,0));let K=at(0,-1.5,0);for(let Ae=0;Ae<3;Ae++){let Fe=$t[Ae].g.position;xt[Ae].copy(K),ve[Ae].set(0,-3.8,0),Tt[Ae].set(Fe.x,Fe.y+3.2,0),He[Ae].copy(Fe).add(at(0,.7,0))}xt[3].copy($t[1].g.position).add(at(0,-.7,0)),ve[3].set(0,-13,2),Tt[3].set(0,mn.planet.y+Vn+4,2),He[3].set(0,mn.planet.y+Vn+.3,0),xt[4].copy($t[2].g.position).add(at(0,-.7,0)),ve[4].set(Q*1.4,-18,0),Tt[4].set(9,mn.hole.y+4,0),He[4].set(6.6,mn.hole.y,0);let he=[];for(let Ae=0;Ae<St;Ae++){let Fe=null;for(let Ee=0;Ee<=48;Ee++){let Be=Ee/48,et=1-Be,En=xt[Ae].clone().multiplyScalar(et*et*et).add(ve[Ae].clone().multiplyScalar(3*et*et*Be)).add(Tt[Ae].clone().multiplyScalar(3*et*Be*Be)).add(He[Ae].clone().multiplyScalar(Be*Be*Be));Fe&&he.push(Fe,En),Fe=En}}pe.geometry.dispose(),pe.geometry=new Ft().setFromPoints(he)}let ae=new yn;ae.position.copy(mn.planet),v.add(ae);let P=Dp(2e3,Vn),J=2e3,$=P.baseTR,me=new wo($,$,1,6,1,!1);me.translate(0,.5,0);let ce=new Float32Array(J),ge=new Float32Array(J),Oe=new Float32Array(J),nt=new Float32Array(J).fill(-999),le=new Float32Array(J).fill(-999),Ve=new Float32Array(J),Ke=O=>{let K=new Rs(O,1);return K.setUsage(pc),K},Me={aHeat:Ke(ce),aMine:Ke(ge),aMinted:Ke(Oe),aFlash:Ke(nt),aPing:Ke(le),aIdx:Ke(Ve)};for(let O in Me)me.setAttribute(O,Me[O]);let gt={...m,uHover:{value:-1},uSel:{value:-1},uLime:{value:De.lime.clone()}},At=new _o(me,new ft({uniforms:gt,vertexShader:`attribute float aHeat,aMine,aMinted,aFlash,aPing,aIdx; uniform float uTime,uHover,uSel; uniform vec3 uLime;
      varying vec3 vC,vN,vV; varying vec2 vL; varying float vTop,vGlow;
      void main(){ float fk=clamp((uTime-aFlash)/1.8,0.,1.); float fl=(1.-fk); fl*=fl;
        float pk=clamp((uTime-aPing)/1.2,0.,1.); float pg=(1.-pk)*(1.-pk);
        float hov=1.-step(.5,abs(aIdx-uHover)); float sel=1.-step(.5,abs(aIdx-uSel));
        float ht=min(aHeat,.35);
        float h=aMinted>.5 ? .05+ht*ht*.55+aMine*.16 : .015;
        h+=fl*1.1+hov*.22+sel*(.32+.06*sin(uTime*4.))+pg*.12;
        vec3 p=position; vTop=step(.99,p.y); p.y*=h; vL=position.xz/${$.toFixed(3)};
        vec4 mv=modelViewMatrix*instanceMatrix*vec4(p,1.); vV=-mv.xyz; gl_Position=projectionMatrix*mv;
        vN=normalize(normalMatrix*mat3(instanceMatrix)*normal+1e-6);
        // Tier hues kept; luminance <= v5 common-tile (dark cyan face). No extra epic emissive.
        vec3 commonC=vec3(.030,.261,.321), rareC=vec3(.149,.083,.269), epicC=vec3(.178,.095,.025);
        vec3 c=aHeat<.3?commonC:(aHeat<.7?rareC:epicC);
        if(aMinted<.5) c=vec3(.06,.08,.08);
        c=mix(c,uLime,aMine*.9);
        vGlow=fl*2.2+pg*.8+hov*.9+sel*1.2+aMine*(.35+.35*sin(uTime*3.+aIdx));
        c=mix(c,vec3(1.),hov*.5); vC=c; }`,fragmentShader:`varying vec3 vC,vN,vV; varying vec2 vL; varying float vTop,vGlow;
      void main(){ vec2 q=abs(vL); float d=max(q.x, q.x*.5+q.y*.866)/.866; float edge=smoothstep(.72,.93,d);
        float ndv=max(dot(normalize(vN),normalize(vV+1e-6)),0.);
        vec3 col = vTop>.5 ? vC*(.10+edge*.95) + vC*vGlow*(.35+edge*.8) : vC*(.05+.16*(1.-ndv)) + vC*vGlow*.2;
        col=max(col,0.); if(!(col.r==col.r)||!(col.g==col.g)||!(col.b==col.b)) col=vec3(0.); col=min(col,vec3(16.));
        gl_FragColor=vec4(col,1.); ${pn} }`}),J),Zt=new Float32Array(J*3);{let O=new _t,K=new On,he=new On,Ae=at(0,1,0),Fe=at(1,1,1);for(let Ee=0;Ee<J;Ee++){let Be=at(P.pos[Ee*3],P.pos[Ee*3+1],P.pos[Ee*3+2]);Zt.set([Be.x,Be.y,Be.z],Ee*3),K.setFromUnitVectors(Ae,Be),he.setFromAxisAngle(Ae,P.angles[Ee]),K.multiply(he);let et=P.scales[Ee];Fe.set(et,1,et),O.compose(Be.clone().multiplyScalar(Vn),K,Fe),At.setMatrixAt(Ee,O),Ve[Ee]=Ee}At.instanceMatrix.needsUpdate=!0}At.frustumCulled=!1,ae.add(At),ae.add(new yt(new pi(Vn-.02,5),new Di({color:66564}))),ae.add(new yt(new pi(Vn*1.22,5),R(De.cyan,3.6,.55)));let ma=S(De.cyan,Vn*3.2,5,.03);ae.add(ma);let Ki=W(Vn*1.45,Vn*1.47,De.cyan,{n:110,duty:.5,sp:.004,a:.6});Ki.rotation.x=1.25,Ki.rotation.y=.25,ae.add(Ki);let qs=W(Vn*1.62,Vn*1.63,De.lime,{n:30,duty:.1,sp:-.003,a:.7});qs.rotation.x=1.25,qs.rotation.y=.25,ae.add(qs);let bi=new yn;ae.remove(At),bi.add(At),ae.add(bi);let Un=0,sn=.25,Kn=.045,Ys=!1,Jn=null;function $s(O){let K=he=>Number.isFinite(he)?he:0;for(let he=0;he<J;he++){let Ae=O(he);ce[he]=K(Ae[0]),ge[he]=K(Ae[1]),Oe[he]=K(Ae[2])}Me.aHeat.needsUpdate=Me.aMine.needsUpdate=Me.aMinted.needsUpdate=!0}function Zr(O){nt[O]=m.uTime.value,Me.aFlash.needsUpdate=!0}function ga(O){le[O]=m.uTime.value,Me.aPing.needsUpdate=!0}function Ji(O,K){return K.set(Zt[O*3],Zt[O*3+1],Zt[O*3+2]).multiplyScalar(Vn+.3),At.updateWorldMatrix(!0,!1),K.applyMatrix4(bi.matrixWorld)}let va=new Ro,Kr=new _t,xa=new Yn(at(),Vn+.1),_a=new Ye,ya=new Ni;function iu(O,K){_a.set(O/lt*2-1,-(K/st)*2+1),va.setFromCamera(_a,_),bi.updateWorldMatrix(!0,!1),Kr.copy(bi.matrixWorld).invert(),ya.copy(va.ray).applyMatrix4(Kr);let he=ya.intersectSphere(xa,Ct);if(!he)return-1;he.normalize();let Ae=-1,Fe=.9995-1,Ee=-2;for(let Be=0;Be<J;Be++){let et=Zt[Be*3]*he.x+Zt[Be*3+1]*he.y+Zt[Be*3+2]*he.z;et>Ee&&(Ee=et,Ae=Be)}return Ee>P.pickCos?Ae:-1}let Qn=new yn;Qn.position.copy(mn.hole),v.add(Qn);let y=new yn;y.rotation.set(-Math.PI/2+.2,0,.12),Qn.add(y);let N={...m,uFill:{value:.3},uKick:{value:0},uLime:{value:De.lime.clone()}},G=new yt(new os(1.75,6.6,220,8),new ft({...Pn,side:Rn,uniforms:N,vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:Tc+`uniform float uTime,uKick; varying vec2 vP;
      void main(){ float r=length(vP); float a=atan(vP.y,vP.x); float rn=(r-1.75)/(6.6-1.75);
        float sw=a+uTime*(1.6/(r*r*.12+.3));
        float n=snoise(vec3(cos(sw)*r*.8,sin(sw)*r*.8,uTime*.12))*.5+.5;
        float st=.5+.5*sin(sw*22.+r*5.);
        float band=pow(1.-rn,1.8);
        vec3 c=mix(vec3(1.,.96,.82),vec3(1.,.5,.12),smoothstep(0.,.3,rn)); c=mix(c,vec3(.55,.08,.03),smoothstep(.3,1.,rn));
        float dop=1.+.75*sin(a+.6);
        float al=band*(.25+.85*n*n+.25*st*n)*smoothstep(0.,.05,rn)*smoothstep(1.,.75,rn);
        gl_FragColor=vec4(c*al*dop*(.85+uKick*1.2),1.); ${pn} }`}));y.add(G);let H=new yt(new os(7.2,7.32,360,1),new ft({...Pn,side:Rn,uniforms:N,vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uFill,uTime; uniform vec3 uLime; varying vec2 vP; void main(){ float a=fract(atan(vP.x,-vP.y)/6.2831853); float s=fract(a*150.); float b=step(.2,s)*step(s,.8);
      float on=step(a,uFill); float head=exp(-abs(a-uFill)*90.); gl_FragColor=vec4((uLime*(on*.9+.06)+vec3(1.)*head*1.5)*b,1.); ${pn} }`}));y.add(H),Qn.add(new yt(new Eo(1.6,48,32),new Di({color:0})));let V=new yt(new si(2,2),new ft({...Pn,uniforms:{...N,uScale:{value:4.2}},vertexShader:Ac,fragmentShader:`uniform float uTime,uKick; varying vec2 vUv; void main(){ float r=length(vUv)*4.2; float top=.45+.55*smoothstep(-.6,1.,vUv.y/max(length(vUv),.001));
      float photon=exp(-pow((r-1.66)/.035,2.))*2.2; float halo=exp(-(r-1.7)*1.6)*step(1.62,r)*.55*top;
      vec3 c=mix(vec3(1.,.9,.7),vec3(1.,.42,.1),clamp((r-1.66)*.9,0.,1.)); gl_FragColor=vec4(c*(photon+halo)*(1.+uKick),1.); ${pn} }`}));V.frustumCulled=!1,V.renderOrder=3,Qn.add(V),Qn.add(S(De.ember,16,6,.05));let ye=t?700:1300,Le=new Ft,xe=new Float32Array(ye*3);for(let O=0;O<ye;O++)xe.set([Math.random()*6.283,Math.random(),.05+Math.random()*.08],O*3);Le.setAttribute("position",new Jt(xe,3));let we=new rs(Le,new ft({...Pn,uniforms:{...m,uKick:N.uKick,uDensity:{value:1}},vertexShader:`uniform float uTime,uPx,uKick,uDensity; varying float vK; void main(){ if(fract(position.y*9.1)>uDensity){ gl_Position=vec4(2.,2.,2.,1.); gl_PointSize=0.; return; }
      float k=fract(position.y+uTime*position.z*(1.+uKick*2.)); float r=mix(7.,1.62,k*k); float an=position.x+k*k*7.+uTime*.1;
      vec3 p=vec3(cos(an)*r,sin(an)*r,sin(position.x*13.)*.25*(1.-k)); vK=k;
      vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=clamp(.07*uPx/(-mv.z),1.,9.); }`,fragmentShader:`varying float vK; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d)*smoothstep(0.,.1,vK)*smoothstep(1.,.9,vK); vec3 c=mix(vec3(1.,.4,.1),vec3(1.,.95,.75),vK); gl_FragColor=vec4(c*a*1.3,1.); ${pn} }`}));we.frustumCulled=!1,y.add(we);let Te=null,Xe=null,it=e.tier!=null?e.tier:t?1:2;function Ne(){Te=new bc(i),Te.addPass(new wc(v,_)),Xe=new Pr(new Ye(256,256),.55,.4,.7),t&&(Xe.radius=.1,Xe.strength=.38,Xe.threshold=.8),Te.addPass(Xe),Te.addPass(new Ec)}it>0&&Ne();function ct(){let O=lt/st,K=O<.9,he=(Ae,Fe)=>Math.max(Fe/Math.tan(Xo.degToRad(20)),Ae/(Math.tan(Xo.degToRad(20))*O));return[{p:at(0,.25,K?he(2.6,3.3):8.2),t:at(0,0,0),o:K?[0,-.12]:[.15,0]},{p:at(0,-6,K?he(Q+1.25,5):15.5),t:at(0,-7.4,0),o:K?[0,.02]:[0,0]},{p:at(2.5,mn.planet.y+2.5,K?he(6.2,7):18.5),t:mn.planet.clone(),o:K?[0,-.17]:[.17,0]},{p:at(0,mn.hole.y+3.8,K?he(7.4,8):19),t:mn.hole.clone(),o:K?[0,-.17]:[.18,-.02]},{p:at(K?18:30,-18,K?95:62),t:at(0,-24,0),o:[0,0]}]}let Rt=[],lt=1,st=1;function zt(O){let K=Math.max(2,Math.round(window.innerWidth)&-2),he=Math.max(2,Math.round(window.innerHeight)&-2);if(!O&&K===lt&&he===st&&i.getPixelRatio()===o)return;let Ae=l;Ae&&h(),lt=K,st=he,i.setPixelRatio(o),i.setSize(lt,st,!1),_.aspect=lt/st,_.updateProjectionMatrix(),Te&&(Te.setPixelRatio(o),Te.setSize(lt,st)),m.uPx.value=st*o/(2*Math.tan(Xo.degToRad(20))),ee(lt/st),Rt=ct(),Ae&&p()}zt();let Re=0,rn=0,pt=0,In=0,Dt=at(),bs=at(),on=null;function wi(O,K,he){if(on)return _.clearViewOffset(),_.position.copy(on.p),_.lookAt(on.t),w.visible=!1,hn.visible=de.visible=pe.visible=!1,ae.visible=!0,Qn.visible=!1,2;Re=he?O:Re+(O-Re)*(1-Math.exp(-K*3.2));let Ae=Ir(Math.floor(Re),0,Rt.length-2),Fe=Dy(Ir(Re-Ae,0,1)),Ee=Rt[Ae],Be=Rt[Ae+1];Dt.copy(Ee.p).lerp(Be.p,Fe),bs.copy(Ee.t).lerp(Be.t,Fe);let et=Ee.o[0]+(Be.o[0]-Ee.o[0])*Fe,En=Ee.o[1]+(Be.o[1]-Ee.o[1])*Fe;return Dt.x+=rn*.35,Dt.y+=pt*.22,In>0&&(Dt.x+=(Math.random()-.5)*In*.12,Dt.y+=(Math.random()-.5)*In*.12,In=Math.max(0,In-K*2.5)),_.position.copy(Dt),_.lookAt(bs),_.setViewOffset(lt,st,-et*lt,-En*st,lt,st),Re}let ue={energy:.3,win:0,sec:0,kick:0,flash:0,shockK:1,poolScale:[1,1,1],pulse:0,holeKick:0,fill:.3},Ht={js:0,frames:0},wn=!1,bt=!1;function qt(O,K,he){if(wn)return;wn=!0;let Ae=performance.now();i.info.reset(),m.uTime.value+=he?0:O;let Fe=wi(K.sp,O,he);on||(w.visible=Fe<1.9||Fe>3.3,hn.visible=de.visible=pe.visible=Fe>.15&&Fe<3.5||Fe>3.3,ae.visible=Fe>1.05&&Fe<3.6||Fe>3.3,Qn.visible=Fe>2.05),ue.energy+=(K.energy-ue.energy)*Math.min(1,O*2),ue.win+=((K.win?1:0)-ue.win)*Math.min(1,O*3),ue.kick=Math.max(0,ue.kick-O*1.8),ue.flash=Math.max(0,ue.flash-O*1.6),g.uEnergy.value=ue.energy,g.uWin.value=ue.win,g.uKick.value=ue.kick,g.uFlash.value=ue.flash*ue.flash;let Ee=K.win?.5+.5*Math.sin(m.uTime.value*(6+Math.max(0,K.sec-540)*.6)):0;if(D.scale.setScalar(1+ue.kick*.08+Ee*.03*ue.win+ue.flash*.12),U.material.uniforms.uC.value.copy(De.lime).lerp(De.ember,ue.win),U.material.uniforms.uM.value=.45+ue.energy*.25+ue.flash*1.2+Ee*.4,B.material.uniforms.uC.value.copy(De.lime).lerp(De.ember,ue.win),B.material.uniforms.uA.value=.1+ue.energy*.08+ue.flash*.45+Ee*.12*ue.win+ue.kick*.15,Y.material.uniforms.uA.value=.16+ue.flash*.8+ue.kick*.2+Ee*.1*ue.win,Y.material.uniforms.uC.value.copy(De.cyan).lerp(De.ember,ue.win),X.material.uniforms.uA.value=.012+ue.flash*.12+ue.energy*.01,Z[0].rotation.z+=O*(.25+ue.win*1.4),Z[1].rotation.z-=O*(.12+ue.win*.7),Z[2].rotation.z+=O*.05,Ue.rotation.z-=O*.02,ne.uSec.value=K.sec/10,ne.uWinOn.value=K.win?1:0,se.lookAt(_.position),Ue.quaternion.copy(se.quaternion),ue.shockK<1?(ue.shockK=Math.min(1,ue.shockK+O*.85),$e.uK.value=ue.shockK,j.visible=!0):j.visible=!1,ue.pulse=Math.max(0,ue.pulse-O*1.5),Ze.uPulse.value=ue.pulse,$t.forEach((Be,et)=>{let En=.75+.5*K.poolScale[et];Be.g.scale.setScalar(Be.g.scale.x+(En-Be.g.scale.x)*Math.min(1,O*2)),Be.u.uKick.value=Math.max(0,Be.u.uKick.value-O*2)}),Jn&&!Ys){let Be=Math.min(1,O*3.5),et=Jn.y-Un;et=Math.atan2(Math.sin(et),Math.cos(et)),Un+=et*Be,sn+=(Jn.x-sn)*Be,Math.abs(et)<.002&&(Jn=null)}else Ys||(Un+=O*Kn,Kn+=(.045-Kn)*Math.min(1,O*.8));bi.rotation.set(sn,Un,0),Ki.rotation.z+=O*.02,qs.rotation.z-=O*.015,ue.holeKick=Math.max(0,ue.holeKick-O*1.2),N.uKick.value=ue.holeKick,ue.fill+=(K.fill-ue.fill)*Math.min(1,O*3),N.uFill.value=ue.fill,V.material.uniforms.uKick.value=ue.holeKick,kt(),Te&&it>0&&!document.hidden?(Xe.strength=(t?.38:.55)+ue.flash*.5,Te.render(O)):document.hidden||i.render(v,_),Ht.js+=performance.now()-Ae,Ht.frames++,wn=!1,!document.hidden&&(!l||performance.now()-c>2e3)&&d(),n.style.visibility==="hidden"&&!bt&&p()}let jn=mn.core;try{i.compile(v,_)}catch{}return n.addEventListener("webglcontextlost",O=>{O.preventDefault(),bt=!0,n.style.transition="none",n.style.visibility="hidden",a&&(a.style.backgroundColor="#020303"),e.onContextLost&&e.onContextLost()}),{renderer:i,camera:_,scene:v,frame:qt,resize:zt,timing:Ht,COL:De,pickPlot:iu,setPlots:$s,plotFlash:Zr,plotPing:ga,tileWorld:Ji,get tier(){return it},setTier(O){it=O,l&&h(),O===0?(Te&&Te.dispose&&Te.dispose(),Te=null,Xe=null,Qe.uniforms.uDensity.value=.6,Ze.uDensity.value=.6,we.material.uniforms.uDensity.value=.6):Te||Ne(),zt(!0),l&&p()},nudgeDpr(O){return o},get dpr(){return o},stepDownQuality(){if(t)return!1;if(o>1.25+.001)o=Math.min(1.25,r());else if(o>1+.001)o=1;else return it>0?(this.setTier(0),!0):!1;return l&&h(),zt(!0),l&&p(),!0},snapshotPoster:d,holdCanvas:h,releaseCanvas:p,get lost(){return bt},beamIn(O,K,he){let Ae=!!he,Fe=Ae?vn(he[0],he[1],4):Xt().multiplyScalar(9+Math.random()*5).add(at(0,0,-2)),Ee=Ae?70:Math.round(Ir(14+Math.log10(K)*3,16,34)),Be=O?De.ember:Math.random()<.25?De.cyan:De.lime;un(Fe,jn,Ee,Be,Ae?.55:.22+Math.log10(K)*.02,Ae?1.05:.85),e.later(()=>{ue.kick=Math.min(1.2,ue.kick+(Ae?1:.35)),Ae&&(ue.shockK=.35,$e.uC.value.copy(O?De.ember:De.lime));for(let et=0;et<(Ae?40:10);et++){let En=Xt();Nt(En.clone().multiplyScalar(1.1),En.clone().multiplyScalar(1.6),En.clone().multiplyScalar(2.2+Math.random()),m.uTime.value,.5+Math.random()*.4,Be,-.12)}},(Ae?1.05:.85)*900)},explode(O,K){ue.flash=1,ue.kick=1.4,ue.shockK=0,In=1,$e.uC.value.copy(O.rolled?De.ember:De.lime);let he=O.rolled?160:Math.min(t?520:900,200+O.addrs*40),Ae=m.uTime.value;for(let Fe=0;Fe<he;Fe++){let Ee=Xt();Ee.z*=.35,Ee.normalize();let Be=2.6+Math.random()*4.6,et=Math.random()<.6?De.lime:Math.random()<.5?De.gold:De.white;Nt(Ee.clone().multiplyScalar(1.15),Ee.clone().multiplyScalar(Be*.55).add(Xt().multiplyScalar(.8)),Ee.clone().multiplyScalar(Be),Ae+Math.random()*.08,1.3+Math.random()*1.2,O.rolled?De.ember:et,-(.06+Math.random()*.1))}if(O.rolled||O.top.slice(0,6).forEach((Fe,Ee)=>{let Be=Xt();Be.z=Math.abs(Be.z)*.3;let et=Be.clone().multiplyScalar(5+Ee*.6);un(at(0,0,0).add(Be.clone().multiplyScalar(1.2)),et,30,Ee===0?De.gold:De.lime,.3,1.1,.05*Ee)}),K){let Fe=vn(K[0],K[1],4);for(let Ee=0;Ee<3;Ee++)un(at(0,0,0),Fe,40,De.gold,.4,1.3,.15+Ee*.12)}},scan(O){ne.uScan.value=O},setCut(O){ne.uCut.value=O},income(){ue.pulse=Math.min(1.2,ue.pulse+.25)},poolKick(O){$t[O].u.uKick.value=1},holeKick(O){ue.holeKick=Math.min(1.5,ue.holeKick+O);let K=m.uTime.value,he=mn.hole;for(let Ae=0;Ae<40;Ae++){let Fe=Math.random()*6.283,Ee=6+Math.random()*2,Be=at(Math.cos(Fe)*Ee,(Math.random()-.5)*2.5,Math.sin(Fe)*Ee).add(he);Nt(Be,Be.clone().lerp(he,.5).add(at(0,1,0)),he.clone(),K+Math.random()*.3,1.1+Math.random()*.5,Math.random()<.5?De.ember:De.gold,.16)}},plotBurst(O,K){Zr(O);let he=Ji(O,at()),Ae=m.uTime.value,Fe=he.clone().sub(mn.planet).normalize();for(let Ee=0;Ee<(K?90:26);Ee++){let Be=he.clone().add(Fe.clone().multiplyScalar(.6+Math.random()*2.2)).add(Xt().multiplyScalar(.6));Nt(he,he.clone().lerp(Be,.5),Be,Ae+Math.random()*.1,.9+Math.random()*.6,K?De.lime:Math.random()<.5?De.cyan:De.white,-.12)}},claimFx(O){let K=vn(O[0],O[1],4);for(let he=0;he<4;he++)un(at(0,0,0),K,36,De.gold,.35,1.2,he*.1)},drag(O,K,he){Ys=he,he&&(Jn=null,Un+=O*.006,sn=Ir(sn+K*.004,-.9,.9),Kn=O*.006*30)},mouse(O,K){rn=O,pt=K},focusPlot(O){let K=at(Zt[O*3],Zt[O*3+1],Zt[O*3+2]);Jn={y:Math.atan2(K.x,K.z)*-1+Math.atan2(_.position.x-mn.planet.x,_.position.z-mn.planet.z),x:Ir(Math.asin(K.y)*.9,-.9,.9)},Kn=0},setSelHover(O,K){gt.uSel.value=O,gt.uHover.value=K},setPlanetSpin(O,K){Jn=null,Kn=0,O!=null&&(sn=O),K!=null&&(Un=K)},shotPlanet(O){let K=mn.planet;if(Jn=null,Kn=0,O==="off"||!O){on=null;return}O==="whole"?(on={p:at(.15,K.y+.4,13.2),t:K.clone()},sn=.18,Un=.55):O==="zoom"?(on={p:at(.25,K.y+.2,8),t:K.clone()},sn=.12,Un=.72):O==="north"?(on={p:at(.15,K.y+10.2,3.2),t:at(K.x,K.y+4.6,K.z)},sn=0,Un=.2):O==="south"&&(on={p:at(.15,K.y-10.2,3.2),t:at(K.x,K.y-4.6,K.z)},sn=0,Un=.2)}}}var Fs,De,Pn,at,Ir,Dy,mn,Vn,Op=Kt(()=>{Hi();Ep();Tp();Rp();Ip();Lp();Up();Fs=n=>new tt(n),De={lime:Fs("#D0FF00"),cyan:Fs("#22E6FF"),ember:Fs("#FF6A1A"),gold:Fs("#FFC43D"),white:Fs("#ffffff"),red:Fs("#FF3B2E")},Pn={transparent:!0,depthWrite:!1,blending:Is},at=(n,e,t)=>new k(n,e,t),Ir=(n,e,t)=>Math.max(e,Math.min(t,n)),Dy=n=>n*n*(3-2*n),mn={core:at(0,0,0),poolY:-8.2,planet:at(0,-25,0),hole:at(0,-47,0)},Vn=5});function Uy(n,e){return e?Object.entries(e).reduce((t,[i,s])=>t.replaceAll("{"+i+"}",String(s)),n):n}function I(n,e){let i=(Cc[Sn]||Cc.en)[n]??Cc.en[n]??Cc.zh[n]??n;return Uy(i,e)}function Fy(){try{let n=new URLSearchParams(location.search).get("lang")||new URLSearchParams(location.search).get("language");if(n==="en"||n==="zh")return n}catch{}try{let n=localStorage.getItem(kp);if(n==="en"||n==="zh")return n}catch{}return"en"}function Ih(){let n=document;n.querySelectorAll("[data-i18n]").forEach(i=>{i.textContent=I(i.getAttribute("data-i18n"))}),n.querySelectorAll("[data-i18n-html]").forEach(i=>{i.innerHTML=I(i.getAttribute("data-i18n-html"))}),n.querySelectorAll("[data-i18n-title]").forEach(i=>{i.setAttribute("title",I(i.getAttribute("data-i18n-title")))}),n.querySelectorAll("[data-i18n-aria]").forEach(i=>{i.setAttribute("aria-label",I(i.getAttribute("data-i18n-aria")))});let e=I("docTitle");document.title&&(document.title=e);let t=document.querySelector('meta[name="description"]');t&&t.setAttribute("content",I("docDesc")),document.documentElement.lang=Sn==="en"?"en":"zh-CN",document.querySelectorAll(".lang button").forEach(i=>{i.classList.toggle("on",i.getAttribute("data-lang")===Sn)})}function By(n){let e=n==="en"?"en":"zh";if(e===Sn){Ih();return}Sn=e;try{localStorage.setItem(kp,Sn)}catch{}Ih();try{window.dispatchEvent(new CustomEvent("eden:lang",{detail:Sn}))}catch{}Ph.forEach(t=>t(Sn))}function zp(n){return Ph.add(n),()=>Ph.delete(n)}function Hp(){Sn=Fy(),Ih(),document.querySelectorAll(".lang button").forEach(n=>{n.addEventListener("click",()=>By(n.getAttribute("data-lang")))})}var Cc,kp,Ph,Sn,Rc=Kt(()=>{Cc={zh:{docTitle:"EDEN \xB7 \u8F6E\u6B21\u71C3\u70E7\u91D1\u5E93",docDesc:"EDEN \u8F6E\u6B21\u71C3\u70E7\u91D1\u5E93\u3002\u53D1\u884C\u524D\u663E\u793A\u5373\u5C06\u4E0A\u7EBF\uFF1B\u53D1\u884C\u540E\u81EA\u52A8\u540C\u6B65\u94FE\u4E0A\u5B9E\u65F6\u6570\u636E\u3002\u4E0D\u8FDE\u94B1\u5305\u3001\u4E0D\u53D1\u4EA4\u6613\uFF0C\u9875\u9762\u4E0D\u5C55\u793A\u5408\u7EA6\u5730\u5740\u3002",previewBadge:"\u5373\u5C06\u4E0A\u7EBF",previewNote:"\u6B63\u5F0F\u4EE3\u5E01\u5C1A\u672A\u53D1\u884C\u3002\u672C\u9875\u4F1A\u81EA\u52A8\u53D1\u73B0\u91D1\u5E93\u5E76\u540C\u6B65\u94FE\u4E0A\u6570\u636E\uFF1B\u53D1\u884C\u540E\u6570\u5B57\u6765\u81EA BSC\uFF0CUSDT \u4F30\u503C\u6309 Chainlink BNB/USD\u3002\u4E0D\u5C55\u793A\u5408\u7EA6\u5730\u5740\u3002",previewBadgeLive:"\u94FE\u4E0A\u5B9E\u65F6",previewNoteLive:"\u6570\u636E\u6765\u81EA BSC \u53EA\u8BFB\u540C\u6B65\uFF0C\u7EA6\u6BCF 12 \u79D2\u66F4\u65B0\uFF1B\u6807\u7B7E\u9875\u9690\u85CF\u65F6\u6682\u505C\u3002USDT \u4F30\u503C\u6309 Chainlink BNB/USD\u3002\u71C3\u70E7\u3001\u9886\u53D6\u548C\u5151\u6362\u8BF7\u5230 Flap\u3002\u672C\u9875\u4E0D\u5C55\u793A\u5408\u7EA6\u5730\u5740\u3002",previewBadgeErr:"\u540C\u6B65\u4E2D",previewNoteSync:"\u6B63\u5728\u4ECE BSC \u8BFB\u53D6\u94FE\u4E0A\u6570\u636E\uFF0C\u51E0\u79D2\u540E\u81EA\u52A8\u663E\u793A\u3002USDT \u4F30\u503C\u6309 Chainlink BNB/USD\u3002\u672C\u9875\u4E0D\u5C55\u793A\u5408\u7EA6\u5730\u5740\u3002",previewNoteErr:"\u94FE\u4E0A\u540C\u6B65\u6682\u65F6\u5931\u8D25\uFF0C\u6B63\u5728\u6362\u8282\u70B9\u91CD\u8BD5\u3002\u4E0B\u9762\u7684\u89C4\u5219\u8BF4\u660E\u4ECD\u6709\u6548\uFF1B\u6570\u5B57\u4F1A\u5728\u6062\u590D\u540E\u81EA\u52A8\u51FA\u73B0\u3002",flapCta:"\u5728 Flap \u6253\u5F00\u91D1\u5E93",flapCtaSoon:"\u5373\u5C06\u4E0A\u7EBF",soon:"\u5373\u5C06\u4E0A\u7EBF",syncing:"\u540C\u6B65\u4E2D",naValue:"\u6682\u65E0",clockPrestart:"\u8DDD\u5F00\u76D8",clockSoon:"\u5373\u5C06\u4E0A\u7EBF",usdSyncing:"USDT \u6C47\u7387\u540C\u6B65\u4E2D",statMineLive:"\u4E2A\u4EBA\u6570\u636E\u8BF7\u5230 Flap \u67E5\u770B",statAddrsLive:"\u4EE5\u94FE\u4E0A\u5934\u5956\u9886\u5148\u4E3A\u51C6",brandTag:"\u8F6E\u6B21\u5956\u6C60\uFF0810 \u5206\u949F\u4E00\u8F6E\uFF09",nav1:"\u7194\u7089",nav2:"\u4E09\u6C60",nav3:"\u5730\u5757",nav4:"\u6258\u5E95",wallet:"\u8FDE\u63A5\u94B1\u5305",walletOn:"0x5eED\u2026beEF",kick:"BNB CHAIN \xB7 FLAP VAULT \xB7 \u8F6E\u6B21\u5956\u6C60\uFF0810 \u5206\u949F\u4E00\u8F6E\uFF09\xB7 \u7B2C",kickRound:"\u8F6E",tagHtml:"\u8F6E\u6B21\u5956\u6C60\uFF0810 \u5206\u949F\u4E00\u8F6E\uFF09\u3002\u653E\u51FA = min(\u5956\u6C60 \xD7 15%\uFF0C\u672C\u8F6E\u71C3\u70E7 \xD7 min(\u6258\u5E95\u4EF7, \u5E02\u4EF7) \xD7 1)\u3002<br><em>\u7B2C 0\u2013539 \u79D2\u786E\u5B9A\u8BA1\u5165\uFF0C\u7B2C 540\u2013599 \u79D2\u968F\u673A\u622A\u6B62</em>\uFF1B\u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF08\u6FC0\u6D3B\u4E0E\u5730\u5757\u7167\u5E38\uFF09\u3002",prizeLbl:"\u672C\u8F6E\u9884\u8BA1\u653E\u51FA",jackpotLine:"\u5934\u5956",jackpotLead:"\u9886\u5148",burnLine:"\u672C\u8F6E\u5DF2\u71C3\u70E7",burnLineRest:"/ 2,000,000 \xB7 \u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E",statBurned:"\u672C\u8F6E\u5DF2\u71C3\u70E7",statAddrs:"\u53C2\u4E0E\u5730\u5740",statMine:"\u4F60\u7684\u71C3\u70E7",ctaBurn:"\u7ACB\u5373\u71C3\u70E7",ctaPools:"\u94B1\u53BB\u54EA\u4E86 \u2193",clockLeft:"\u672C\u8F6E\u5269\u4F59",clockWin:"\u968F\u673A\u622A\u6B62 540\u2013599",clockCertain:"\u7B2C 0\u2013539 \u79D2\u786E\u5B9A\u8BA1\u5165",clockLate:"\u665A\u70E7\u53EF\u80FD\u987A\u5EF6\u5230\u4E0B\u4E00\u8F6E",clockPhaseCertain:"\u7B2C 0\u2013539 \u79D2\u786E\u5B9A\u8BA1\u5165 \xB7 \u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E",clockPhaseWin:"\u7B2C 540\u2013599 \u79D2\u968F\u673A\u622A\u6B62\uFF0C\u665A\u70E7\u53EF\u80FD\u987A\u5EF6\u5230\u4E0B\u4E00\u8F6E \xB7 \u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E",clockReveal:"\u63ED\u6653\u622A\u6B62\u79D2",clockRevealSub:"\u533A\u5757\u54C8\u5E0C\u51B3\u5B9A\uFF0C\u8C01\u4E5F\u6539\u4E0D\u4E86",clockCut:"\u622A\u6B62",clockCutSub:"\u7B2C {n} \u79D2\u843D\u9524",you:"\u4F60",cap:"\u5E02\u503C",perToken:"BNB / \u679A",tokenUnit:"\u679A",pxMkt:"\u5E02\u4EF7",pxFloor:"\u6258\u5E95\u4EF7",pxRef:"\u5956\u52B1\u53C2\u8003 min(\u6258\u5E95, \u5E02\u4EF7)",poolsKicker:"02 / \u7A0E\u53BB\u54EA\u4E86",poolsH:"\u4E00\u7B14\u7A0E\uFF0C\u4E09\u80A1\u80FD\u91CF",poolsP:"\u4E70\u5356\u5404 3% \u7A0E 100% \u8FDB\u91D1\u5E93 \xB7 0 \u8FD0\u8425 \xB7 0 \u9879\u76EE\u65B9\u5730\u5740",pool1n:"\u8F6E\u6B21\u5956\u6C60",pool1d:"10 \u5206\u949F\u4E00\u8F6E\uFF0C\u653E\u51FA min(\u6C60\xD715%, \u672C\u8F6E\u71C3\u70E7\xD7min(\u6258\u5E95,\u5E02\u4EF7)\xD71)\uFF1B50% \u5747\u5206\u300150% \u5934\u5956\uFF08\u2264\u6C60 5%\uFF0C\u6EE1 2 \u4EBA\uFF09",pool2n:"\u5730\u5757\u6C60",pool2d:"\u6BCF 30 \u5206\u949F\u4E00\u8F6E\uFF0C\u653E\u51FA 80%\uFF08\u6BCF\u5206\u949F\u5747\u5300\u91CA\u653E\uFF09\uFF0C20% \u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF1B\u6309\u5DF2\u6FC0\u6D3B\u6743\u91CD\u5206\u7EA2",pool3n:"\u6258\u5E95\u50A8\u5907",pool3dPre:"\u2248 ",pool3dSuf:" USDT \xB7 \u5168\u90E8\u7528\u4E8E\u6258\u5E95\u5151\u6362\uFF0C\u6362\u56DE\u7684\u5E01\u9500\u6BC1",plotsKicker:"03 / \u5730\u5757\u661F\u7403",plotsHHtml:"2000 \u5757\u5730\uFF0C<br>\u70E7\u5E01\u5373\u53D1\u3001\u7075\u9B42\u7ED1\u5B9A",plotsP:"\u5730\u5757\u53EA\u80FD\u70E7\u5E01\u83B7\u5F97\uFF0C\u6C38\u4E45\u7ED1\u5B9A\u71C3\u70E7\u5730\u5740\uFF0C\u4E0D\u53EF\u8F6C\u8BA9\u3001\u4E0D\u53EF\u4E70\u5356\u3002\u6BCF\u7B14\u6309\u9AD8\u6863\u4F18\u5148\u8D2A\u5FC3\u62C6\u5206\uFF1A\u666E\u901A 10 \u4E07\uFF08\u6743\u91CD 1.0\uFF09\u3001\u7A00\u6709 20 \u4E07\uFF082.2\uFF09\u3001\u53F2\u8BD7 30 \u4E07\uFF083.5\uFF09\u3002\u521B\u4E16 30 \u5206\u949F\u6BCF\u5206\u949F\u6700\u591A 20 \u5757\uFF08\u6700\u591A 600\uFF09\uFF0C\u4E4B\u540E\u7EE7\u7EED\u53D1\u5230 2000\u3002\u5730\u5757\u6C60\u6BCF 30 \u5206\u949F\u4E00\u8F6E\uFF0C\u653E\u51FA 80%\uFF08\u6BCF\u5206\u949F\u5747\u5300\u91CA\u653E\uFF09\uFF0C20% \u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF0C\u6309\u5DF2\u6FC0\u6D3B\u6743\u91CD\u5206\u7EA2\u3002\u6BCF 10 \u5206\u949F\u53EA\u9700\u6309\u6BCF 1 \u6743\u91CD\u70E7 1000 \u679A\u5373\u53EF\u6FC0\u6D3B\uFF1B\u51B7\u6E05\u65F6\u6BB5\u4E00\u540D\u5DF2\u6FC0\u6D3B\u5730\u4E3B\u5373\u53EF\u72EC\u5F97\u8BE5\u65F6\u6BB5\u5168\u90E8\u5206\u7EA2\u3002\u5730\u5757\u5206\u6210\u4E0D\u8FC7\u671F\uFF1B\u8F6E\u6B21\u5956\u52B1 30 \u5929\u4E0D\u9886\u8FC7\u671F\u3002",legendCommon:"\u666E\u901A 1.0",legendRare:"\u7A00\u6709 2.2",legendEpic:"\u53F2\u8BD7 3.5",legendMine:"\u6211\u7684",plotsHint:"\u62D6\u52A8\u661F\u7403\u65CB\u8F6C \xB7 \u70B9\u51FB\u5730\u5757\u67E5\u770B",roundKicker:"04 / \u6258\u5E95\u5151\u6362",roundHHtml:"\u91D1\u5E93\u6258\u5E95\uFF0C<br>\u6309\u6743\u91CD\u5151\u6362",roundP:"\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B\uFF0C\u6309\u5730\u5757\u6743\u91CD\u5206\u914D\u989D\u5EA6\u3002\u6211\u7684\u6258\u5E95\u989D\u5EA6 = \u6743\u91CD \xD7 \u6BCF\u6743\u91CD\u989D\u5EA6\u3002\u6BCF 1 \u6743\u91CD\u4E0A\u9650 = max(10 \u4E07, \u23082 \xD7 1500 \u4E07 \xF7 \u5168\u7F51\u5DF2\u53D1\u603B\u6743\u91CD\u2309)\uFF0C\u968F\u603B\u6743\u91CD\u5B9E\u65F6\u8BA1\u7B97\uFF0C\u5730\u5740\u989D\u5EA6\u5411\u4E0B\u53D6\u6574\u3002\u6258\u5E95\u7A0E 80% \u8FDB\u5F53\u524D\u6863\u300120% \u8FDB\u4E0B\u4E00\u6863\uFF1B\u5151\u6EE1\u7ACB\u523B\u5F00\u4E0B\u4E00\u6863\u3002\u6362\u56DE\u7684\u5E01 100% \u9500\u6BC1\uFF0C\u4E0D\u8BA1\u5165\u8F6E\u6B21\u5956\u6C60\u3001\u4E0D\u94F8\u5730\u5757\u3001\u4E0D\u8BA1\u5165\u6FC0\u6D3B\u3002\u6258\u5E95\u4E0D\u662F\u4FDD\u5E95\u6216\u5151\u4ED8\u627F\u8BFA\u3002",roundTop:"\u7B2C",roundTopSuf:"\u6863 \xB7 \u5F53\u524D\u6258\u5E95\u4EF7",quotaMath:"\u6211\u7684\u6258\u5E95\u989D\u5EA6 = \u6743\u91CD \xD7 \u6BCF\u6743\u91CD\u989D\u5EA6",roundSub:"\u4E0B\u4E00\u6863\u5956\u6C60",roundSub2:"BNB \xB7 \u672C\u6863\u5269\u4F59\u989D\u5EA6",roundSub3:" / 15M \xB7 \u6BCF\u6743\u91CD\u989D\u5EA6",roundSub4:" \xB7 \u4F60\u672C\u6863\u5269\u4F59",filled:"\u5DF2\u5151",filledOf:" / 15M",burnedCum:"\u7D2F\u8BA1\u6258\u5E95\u5151\u6362\u9500\u6BC1",sellBtn:"\u6309\u6258\u5E95\u4EF7\u5151\u6362",roundWarn:"\u26A0 \u6258\u5E95\u4EF7\u53EF\u80FD\u9AD8\u4E8E\u5E02\u4EF7\uFF0C\u8FD9\u65F6\u5730\u4E3B\u53EF\u80FD\u628A\u5F53\u524D\u6863\u989D\u5EA6\u5168\u90E8\u6362\u5B8C\uFF08\u5DF2\u77E5\u5E76\u63A5\u53D7\u7684\u98CE\u9669\uFF09\u3002",rulesKicker:"05 / \u4E00\u5C4F\u770B\u61C2",rulesH:"\u89C4\u5219\u5168\u90E8\u5199\u5728\u5408\u7EA6\u91CC",rule1s:"\u8F6E\u6B21\u5956\u6C60\uFF0810 \u5206\u949F\u4E00\u8F6E\uFF09\u3002\u7B2C 0\u2013539 \u79D2\u786E\u5B9A\u8BA1\u5165\uFF1B\u7B2C 540\u2013599 \u79D2\u968F\u673A\u622A\u6B62\uFF0C\u665A\u70E7\u53EF\u80FD\u987A\u5EF6\u5230\u4E0B\u4E00\u8F6E",rule2s:"\u653E\u51FA = min(\u8F6E\u6B21\u5956\u6C60\xD715%, \u672C\u8F6E\u71C3\u70E7\xD7min(\u6258\u5E95\u4EF7, \u5E02\u4EF7)\xD71)\u300250% \u6309\u4EFD\u989D\u5747\u5206\uFF0C50% \u5934\u5956\u7ED9\u71C3\u70E7\u6700\u591A\u4E14\u5148\u5230\u8005\uFF08\u4E0D\u8D85\u8FC7\u5956\u6C60 5%\uFF1B\u6709\u6548\u5730\u5740\u5C11\u4E8E 2 \u4EBA\u65F6\u5934\u5956\u7559\u6C60\uFF09",rule3s:"\u5355\u7B14\u6700\u5C11 1,000 \u679A\uFF1B\u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF0C\u6FC0\u6D3B\u4E0E\u5730\u5757\u7167\u5E38\u53D1\u653E",rule4s:"\u5730\u5757\u53EA\u80FD\u70E7\u5E01\u83B7\u5F97\uFF0C\u7075\u9B42\u7ED1\u5B9A\uFF0C\u4E0D\u53EF\u8F6C\u8BA9\u4E70\u5356\u3002\u8D2A\u5FC3\u62C6\u5206\uFF1A\u666E\u901A 10 \u4E07/1.0\u3001\u7A00\u6709 20 \u4E07/2.2\u3001\u53F2\u8BD7 30 \u4E07/3.5\u3002\u521B\u4E16 30 \u5206\u949F\u6BCF\u5206\u949F\u6700\u591A 20 \u5757\uFF08\u6700\u591A 600\uFF09\uFF0C\u4E4B\u540E\u53D1\u5230 2000",rule5s:"\u5730\u5757\u6C60\u6BCF 30 \u5206\u949F\u4E00\u8F6E\uFF0C\u653E\u51FA 80%\uFF08\u6BCF\u5206\u949F\u5747\u5300\u91CA\u653E\uFF09\uFF0C20% \u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF1B\u6309\u5DF2\u6FC0\u6D3B\u6743\u91CD\u5206\u7EA2\u3002\u6BCF 10 \u5206\u949F\u53EA\u9700\u6309\u6BCF 1 \u6743\u91CD\u70E7 1000 \u679A\u5373\u53EF\u6FC0\u6D3B\u3002\u51B7\u6E05\u65F6\u6BB5\u4E00\u540D\u5DF2\u6FC0\u6D3B\u5730\u4E3B\u5373\u53EF\u72EC\u5F97\u8BE5\u65F6\u6BB5\u5168\u90E8\u5206\u7EA2\u3002\u5730\u5757\u5206\u6210\u4E0D\u8FC7\u671F\uFF1B\u8F6E\u6B21\u5956\u52B1 30 \u5929\u4E0D\u9886\u8FC7\u671F\u3002",rule6s:"\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B\uFF0C\u6309\u5730\u5757\u6743\u91CD\u5206\u914D\u989D\u5EA6\u3002\u5151\u51FA\u7684\u5E01\u5168\u90E8\u9500\u6BC1\uFF0C\u4E0D\u8BA1\u5165\u8F6E\u6B21\u5956\u3001\u4E0D\u94F8\u5730\u3001\u4E0D\u8BA1\u5165\u6FC0\u6D3B\u300280%/20% \u5206\u5230\u5F53\u524D\u6863\u548C\u4E0B\u4E00\u6863\uFF0C\u5151\u6EE1\u7ACB\u523B\u5F00\u4E0B\u4E00\u6863",linkCustom:"\u5728 Flap \u6253\u5F00\u91D1\u5E93 \u2192",linkGeneric:"\u89C4\u5219\u8BF4\u660E \u2191",foot:"BNB Chain \xB7 Flap Tax Token V3 \xB7 \u7A0E 3% / 3% \xB7 \u94FE\u4E0A\u53EA\u8BFB\u540C\u6B65\uFF0C\u4E0D\u5C55\u793A\u5408\u7EA6\u5730\u5740",tabClaim:"\u9886\u53D6",tabPlot:"\u5730\u5757",tabRound:"\u6258\u5E95\u5151\u6362",close:"\u6536\u8D77",autoPlot:"\u81EA\u52A8\u8BA1\u5165\u4F60\u7684\u5730\u5757 \xB7 \u7075\u9B42\u7ED1\u5B9A",burnPhase:"\u7B2C 0\u2013539 \u79D2\u786E\u5B9A\u8BA1\u5165 / \u7B2C 540\u2013599 \u79D2\u968F\u673A\u622A\u6B62\uFF1B\u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E",burn:"\u71C3\u70E7",approve:"\u6388\u6743 EDEN",noscript:"\u9700\u8981\u542F\u7528 JavaScript \u624D\u80FD\u67E5\u770B EDEN \u9884\u89C8\u3002",langLabel:"\u8BED\u8A00",leadEmpty:"\u6682\u65E0\u9886\u5148",quotaLine:"\u6211\u7684\u6258\u5E95\u989D\u5EA6 = {w} \xD7 {cap} = {total}\uFF08\u5DF2\u7528 {used}\uFF0C\u5269\u4F59 {left}\uFF09",tierOpen:"\u5F00\u653E\u4E2D \xB7 \u6258\u5E95\u65E0\u9700\u6FC0\u6D3B",tierOpening:"\u6B63\u5728\u5F00\u6863",tierWait:"\u521B\u4E16\u7ED3\u675F\u4E14\u6709\u5730\u5757\u540E\u5F00\u7B2C 1 \u6863",tickBurn:"\u7D2F\u8BA1\u71C3\u70E7",tickTax:"\u7D2F\u8BA1\u7A0E\u6536",tickFloor:"\u6258\u5E95\u4EF7",tickOpening:"\u5F00\u6863\u4E2D",tickAfterGenesis:"\u521B\u4E16\u7ED3\u675F\u540E\u5F00\u7B2C 1 \u6863",payZeroMkt:"\u5408\u7EA6\u5F53\u524D\u9884\u4F30\u4E3A 0\uFF1A\u5E02\u4EF7\u8FD8\u6CA1\u6709\u4E24\u6B21\u89C2\u6D4B\uFF08\u9996\u6B21\u89C2\u6D4B\u53EA\u8BB0\u8D26\uFF09\uFF0C\u672C\u8F6E\u6309\u71C3\u70E7\u653E\u51FA 0\u3002",payZeroQueued:"\u5408\u7EA6\u5F53\u524D\u9884\u4F30\u4E3A 0\uFF1A\u5956\u6C60\u91CC\u7684 {pool} BNB \u7A0E\u6536\u8FD8\u5728\u5408\u7EA6\u7684\u5F85\u5165\u6C60\u961F\u5217\u91CC\uFF0C\u5C1A\u672A\u8BA1\u5165\u672C\u8F6E\u53EF\u653E\u51FA\u7684\u90E8\u5206\u3002",payLast:"\u4E0A\u4E00\u8F6E\uFF08\u7B2C {n} \u8F6E\uFF09\u5B9E\u9645\u653E\u51FA {bnb} BNB\u3002",tickFilled:"\u672C\u6863\u5DF2\u5151",tickPlots:"\u5730\u5757\u5DF2\u53D1",tickWeight:"\u5168\u7F51\u6743\u91CD",tickTaxRate:"\u7A0E",tickTaxVal:"3% / 3% \u2192 100% \u91D1\u5E93",toastConnect:"\u5DF2\u6A21\u62DF\u8FDE\u63A5\u94B1\u5305\uFF1A5,000,000 EDEN \xB7 2.5 BNB\uFF08\u5047\u6570\u636E\uFF09",toastDisconnect:"\u5DF2\u65AD\u5F00\u6A21\u62DF\u94B1\u5305",toastConnectShort:"\u5DF2\u6A21\u62DF\u8FDE\u63A5\u94B1\u5305\uFF08\u5047\u6570\u636E\uFF09",toastApprove:"\u5DF2\u6A21\u62DF\u6388\u6743 EDEN \u7ED9\u91D1\u5E93\uFF08\u9996\u6B21\u4E00\u6B21\u5373\u53EF\uFF09",approving:"\u6388\u6743\u4E2D\u2026",previewTitle:"\u672C\u7B14\u9884\u89C8",previewCommon:"\u666E",previewRare:"\u7A00",previewEpic:"\u53F2",previewWeight:"\u6743\u91CD",previewBelow:"\u4F4E\u4E8E 1,000 \u679A",actOk:"\u672C\u7A97\u53E3\u5DF2\u6FC0\u6D3B \xB7 \u6743\u91CD {w}",actNeed:"\u8FD8\u5DEE {n} \u679A\u5373\u53EF\u6FC0\u6D3B\uFF08\u6BCF 1 \u6743\u91CD 1,000 \u679A / 10 \u5206\u949F\uFF09",chip1k:"1\u5343",chip30w:"30\u4E07",chip2m:"200\u4E07",sheetClaimTitle:"\u5F85\u9886",sheetYourPlots:"\u4F60\u7684\u5730\u5757",sheetAct:"\u6FC0\u6D3B",sheetActOn:"\u672C\u7A97\u53E3\u5DF2\u6FC0\u6D3B",sheetActOff:"\u672A\u6FC0\u6D3B\uFF0C\u8FD8\u5DEE {n}",claimBtn:"\u4E00\u952E\u9886\u53D6",claiming:"\u9886\u53D6\u4E2D\u2026",claimNote:"\u5730\u5757\u6C60\u6BCF 30 \u5206\u949F\u4E00\u8F6E\uFF0C\u653E\u51FA 80%\uFF08\u6BCF\u5206\u949F\u5747\u5300\u91CA\u653E\uFF09\uFF0C20% \u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF0C\u6309\u5DF2\u6FC0\u6D3B\u6743\u91CD\u5206\u7EA2\u3002\u6BCF 10 \u5206\u949F\u53EA\u9700\u6309\u6BCF 1 \u6743\u91CD\u70E7 1000 \u679A\u5373\u53EF\u6FC0\u6D3B\u3002\u672A\u6FC0\u6D3B\u4E0D\u5206\u7EA2\uFF0C\u4EFD\u989D\u5F52\u5DF2\u6FC0\u6D3B\u7684\u5730\u4E3B\uFF1B\u51B7\u6E05\u65F6\u6BB5\u4E00\u540D\u5DF2\u6FC0\u6D3B\u5730\u4E3B\u5373\u53EF\u72EC\u5F97\u8BE5\u65F6\u6BB5\u5168\u90E8\u5206\u7EA2\u3002\u5730\u5757\u5206\u6210\u4E0D\u8FC7\u671F\uFF1B\u8F6E\u6B21\u5956\u52B1 30 \u5929\u4E0D\u9886\u8FC7\u671F\u3002\u5730\u5757\u5728\u9886\u53D6\u6216\u89E6\u6478\u65F6\u61D2\u94F8\uFF0C\u6BCF\u7B14\u6700\u591A 50 \u5757\u3002",toastClaimed:"\u5DF2\u9886\u53D6 {bnb} BNB",toastClaimPlots:" + {n} \u5757\u5730",toastSim:"\uFF08\u6A21\u62DF\uFF09",needWallet:"\u8BF7\u5148\u8FDE\u63A5\u94B1\u5305\uFF08\u6A21\u62DF\uFF09",plot:"\u5730\u5757",mineMark:" \xB7 \u6211\u7684",plotTier:"\u6863\u4F4D",plotOwner:"\u5F52\u5C5E",plotYouBound:"\u4F60\uFF08\u7075\u9B42\u7ED1\u5B9A\uFF09",plotBound:"\uFF08\u7075\u9B42\u7ED1\u5B9A\uFF09",plotUnissued:"\u5C1A\u672A\u53D1\u653E",plotLastDiv:"\u4E0A\u671F\u5206\u6210",plotMine:"\u6211\u7684\u5730\u5757",plotActOff:"\u8FD8\u5DEE {n} \u679A",noPlots:"\u4F60\u8FD8\u6CA1\u6709\u5730\u5757\uFF0C\u71C3\u70E7\u5373\u53EF\u94F8\u9020",plotNote:"\u5730\u5757\u53EA\u80FD\u70E7\u5E01\u83B7\u5F97\uFF0C\u6C38\u4E45\u7ED1\u5B9A\u5730\u5740\uFF0C\u4E0D\u53EF\u8F6C\u8BA9\u3001\u4E0D\u53EF\u4E70\u5356\u3002\u6BCF 10 \u5206\u949F\u53EA\u9700\u6309\u6BCF 1 \u6743\u91CD\u70E7 1000 \u679A\u5373\u53EF\u6FC0\u6D3B\u3002\u51B7\u6E05\u65F6\u6BB5\u4E00\u540D\u5DF2\u6FC0\u6D3B\u5730\u4E3B\u5373\u53EF\u72EC\u5F97\u8BE5\u65F6\u6BB5\u5168\u90E8\u5206\u7EA2\u3002\u5730\u5757\u5206\u6210\u4E0D\u8FC7\u671F\u3002",tierN:"\u7B2C {id} \u6863 \xB7 \u5F53\u524D\u6258\u5E95\u4EF7",capLbl:"\u5E02\u503C",bnbPrice:"BNB \u4EF7",bnbEach:"BNB / \u679A",quotaLeft:"\u672C\u6863\u5269\u4F59\u989D\u5EA6",nextPool:"\u4E0B\u4E00\u6863\u5956\u6C60",capPerW:"\u6BCF\u6743\u91CD\u989D\u5EA6",myQuota:"\u6211\u7684\u6258\u5E95\u989D\u5EA6",yourLeft:"\u4F60\u672C\u6863\u5269\u4F59",yourEden:"\u4F60\u7684 EDEN",sellAmt:"\u5151\u6362\u6570\u91CF",sellOut:"\u53EF\u5F97",sellMin:"\u6700\u5C11\u6536\u5230\uFF08BNB\uFF09",sellDo:"\u6309\u6258\u5E95\u4EF7\u5151\u6362\uFF08\u5E01\u9500\u6BC1\uFF09",onlyHolders:"\u53EA\u6709\u5730\u4E3B\u80FD\u5151\u6362\u3002\u71C3\u70E7\u94F8\u5730\u540E\u5373\u53EF\u5151\uFF0C\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B\u3002",roundNote:"\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B\uFF0C\u6309\u5730\u5757\u6743\u91CD\u5206\u914D\u989D\u5EA6\u3002\u5151\u6EE1\u7ACB\u523B\u5F00\u4E0B\u4E00\u6863\u3002\u6362\u56DE\u7684 EDEN 100% \u9500\u6BC1\uFF0C\u4E0D\u8BA1\u5165\u8F6E\u6B21\u5956\u6C60\u3001\u4E0D\u94F8\u5730\u3001\u4E0D\u8BA1\u5165\u6FC0\u6D3B\u3002\u6258\u5E95\u4E0D\u662F\u4FDD\u5E95\u6216\u5151\u4ED8\u627F\u8BFA\u3002",roundRisk:"\u26A0 \u6258\u5E95\u4EF7\u53EF\u80FD\u9AD8\u4E8E\u5E02\u4EF7\uFF0C\u8FD9\u65F6\u5730\u4E3B\u53EF\u80FD\u628A\u5F53\u524D\u6863\u989D\u5EA6\u5168\u90E8\u6362\u5B8C\uFF08\u5DF2\u77E5\u5E76\u63A5\u53D7\u7684\u98CE\u9669\uFF09\u3002",usdNote:"USDT \u4F30\u503C\u6309 Chainlink BNB/USD \u5582\u4EF7\uFF0C\u5B8C\u6574\u5C0F\u6570\u663E\u793A\uFF0C\u4E0D\u7528\u79D1\u5B66\u8BA1\u6570\u6CD5\u3002",openingTier:"\u6B63\u5728\u5F00\u51FA\u7B2C 1 \u6863\u3002",waitTier:"\u521B\u4E16\u7ED3\u675F\u4E14\u6709\u5730\u5757\u540E\u5F00\u7B2C 1 \u6863\u3002",noTimer:"\u6CA1\u6709\u5012\u8BA1\u65F6\u3001\u6CA1\u6709\u5F00\u6863\u95E8\u69DB\u3002\u65B0\u4E00\u6863\u8D77\u59CB\u4EF7 = \u4E0B\u4E00\u6863\u5956\u6C60 \xF7 1500 \u4E07\uFF0C\u53EF\u80FD\u660E\u663E\u4F4E\u4E8E\u4E0A\u4E00\u6863\u3002",confirming:"\u786E\u8BA4\u4E2D\u2026",toastSell:"\u6258\u5E95\u5151\u6362 {take} \u679A\uFF0C\u6536\u5230 {out} BNB\uFF0C\u8FD9\u4E9B\u5E01\u5DF2\u9500\u6BC1\uFF08\u6A21\u62DF\uFF09",landlord:"\u5730\u4E3B",soulbound:" \xB7 \u7075\u9B42\u7ED1\u5B9A",transfer:"\u8F6C\u8BA9",noTransfer:"\u4E0D\u53EF\u8F6C\u8BA9\u3001\u4E0D\u53EF\u4E70\u5356",plotOnlyBurn:"\u5730\u5757\u53EA\u80FD\u70E7\u5E01\u83B7\u5F97\uFF0C\u6C38\u4E45\u7ED1\u5B9A\u71C3\u70E7\u5730\u5740\u3002",hoverUnissued:"\u5C1A\u672A\u53D1\u653E",hoverBound:"\u7075\u9B42\u7ED1\u5B9A\uFF0C\u4E0D\u53EF\u4E70\u5356",hoverWeight:"\u6743\u91CD",toastRoundOpen:"\u7B2C {id} \u6863\u6258\u5E95\u5151\u6362\u5F00\u542F\uFF1A\u5F53\u524D\u6258\u5E95\u4EF7 {usd}\uFF08\u5E02\u503C {cap}\uFF09",toastRoundWin:"\u7B2C {m} \u8F6E\uFF1A\u4F60\u5206\u5F97 {bnb} BNB",resMiss:"\u7B2C {m} \u8F6E \xB7 \u672A\u5230\u7EBF",resMissBody:"\u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF08\u6FC0\u6D3B\u4E0E\u5730\u5757\u7167\u5E38\uFF09",resHit:"\u7B2C {m} \u8F6E \xB7 \u622A\u6B62 {cut} \u79D2",resSplit:"\u5747\u5206",resJack:"\u5934\u5956",resCounted:"\u8BA1\u5165",resMissed:"\u679A\u6CA1\u8D76\u4E0A\uFF0C\u5E76\u5165\u4E0B\u4E00\u8F6E",resYouGot:"\u4F60\u5206\u5F97 +{bnb} BNB",resYouMissed:"\u4F60\u8FD9\u6B21\u6CA1\u8D76\u4E0A\u622A\u6B62\uFF0C\u5DF2\u5E76\u5165\u4E0B\u4E00\u8F6E",toastBurned:"\u5DF2\u71C3\u70E7 {n} \u679A",errMin:"\u5355\u7B14\u6700\u5C11\u71C3\u70E7 1,000 \u679A",errWallet:"\u8BF7\u5148\u8FDE\u63A5\u94B1\u5305\uFF08\u6A21\u62DF\uFF09",errBal:"EDEN \u4F59\u989D\u4E0D\u8DB3",errNoTier:"\u5F53\u524D\u6863\u5C1A\u672A\u5F00\u51FA",errWaitTier:"\u521B\u4E16\u7ED3\u675F\u4E14\u6709\u5730\u5757\u540E\u5F00\u7B2C 1 \u6863",errHolders:"\u53EA\u6709\u5730\u4E3B\u80FD\u5151\u6362\uFF0C\u5730\u5757\u662F\u95E8\u7968\uFF1B\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B",errQuotaYou:"\u4F60\u7684\u6258\u5E95\u989D\u5EA6\u5DF2\u7528\u5B8C",errQuotaTier:"\u672C\u6863\u989D\u5EA6\u5DF2\u5151\u6EE1\uFF0C\u5DF2\u5F00\u4E0B\u4E00\u6863",errMinOut:"\u53EF\u5F97 BNB \u4F4E\u4E8E\u4F60\u8BBE\u7684\u6700\u5C11\u6536\u5230\uFF0C\u672A\u6210\u4EA4",errNothing:"\u6682\u65F6\u6CA1\u6709\u53EF\u9886\u53D6\u7684",tierCommon:"\u666E\u901A",tierRare:"\u7A00\u6709",tierEpic:"\u53F2\u8BD7",common:"\u666E\u901A",rare:"\u7A00\u6709",epic:"\u53F2\u8BD7",autoPlotN:"\u81EA\u52A8\u8BA1\u5165\u4F60\u7684 {n} \u5757\u5730\uFF08\u666E {c} / \u7A00 {r} / \u53F2 {e} \xB7 \u6743\u91CD {w}\uFF09\uFF0C\u7075\u9B42\u7ED1\u5B9A",autoNone:"\u53EA\u53C2\u52A0\u8F6E\u6B21\u5956\u6C60",toastLateBurn:"\u968F\u673A\u7A97\u53E3\u5185\u70E7\u4E86 {n} \u679A\uFF1A\u7B2C 540\u2013599 \u79D2\u968F\u673A\u622A\u6B62\uFF0C\u665A\u70E7\u53EF\u80FD\u987A\u5EF6\u5230\u4E0B\u4E00\u8F6E",toastLazy:" \xB7 \u5F85\u63ED\u6653\u540E\u61D2\u94F8 {n} \u5757\u5730",toastBurnOk:"\u5DF2\u71C3\u70E7 {n} \u679A\uFF0C\u786E\u5B9A\u8BA1\u5165\u672C\u8F6E",toastMint:" \xB7 \u53D1\u5730 \u666E{c}/\u7A00{r}/\u53F2{e}",toastHavePlots:" \xB7 \u5DF2\u6709 {n} \u5757\u5730",toastPoolOnly:" \xB7 \u53EA\u53C2\u52A0\u8F6E\u6B21\u5956\u6C60",claimTotal:"\u53EF\u9886\u53D6\u5408\u8BA1",claimRound:"\u8F6E\u6B21\u5956\u52B1",claimPlot:"\u5730\u5757\u5206\u6210",claimPendingPlots:"\u5F85\u94F8\u5730\u5757",claimPendingN:"{n} \u5757\uFF08\u6BCF\u7B14\u6700\u591A 50\uFF09",myPlotsLine:"\u666E {c} / \u7A00 {r} / \u53F2 {e} \xB7 \u6743\u91CD {w}",weight:"\u6743\u91CD",unissued:"\u672A\u53D1\u653E",rule1n:"10 \u5206",rule3n:"200 \u4E07",spdTitle:"\u6A21\u62DF\u65F6\u95F4\u500D\u901F",walletTitle:"\u5B98\u7F51\u53EA\u8BFB\uFF0C\u8BF7\u5728 Flap \u8FDE\u63A5\u94B1\u5305",burnBarTitle:"200 \u4E07\u679A\u7EBF",feedAria:"\u5B9E\u65F6\u71C3\u70E7",sheetAria:"\u64CD\u4F5C\u9762\u677F",amtAria:"\u71C3\u70E7\u6570\u91CF",socialX:"X\uFF08\u63A8\u7279\uFF09",socialTg:"Telegram",dockCollapse:"\u6536\u8D77\u71C3\u70E7\u680F",dockExpand:"\u5C55\u5F00\u71C3\u70E7\u680F",dockReady:"\u5DF2\u5C31\u7EEA",walletShort:"\u8FDE\u63A5",moreMenu:"\u66F4\u591A"},en:{docTitle:"EDEN \xB7 Round Burn Vault",docDesc:"EDEN round burn vault. Coming soon until launch; then the page syncs live on-chain data. No wallet, no transactions, no contract addresses on the page.",previewBadge:"Coming soon",previewNote:"The official token has not launched yet. This page will discover the vault automatically and sync BSC data after launch. USDT estimates use the Chainlink BNB/USD feed. Contract addresses are never shown.",previewBadgeLive:"Live on-chain",previewNoteLive:"Read-only BSC data, refreshed about every 12 seconds; paused while this tab is hidden. USDT estimates use Chainlink BNB/USD. Burn, claim and redeem on Flap. Contract addresses are not shown.",previewBadgeErr:"Syncing",previewNoteSync:"Reading BSC on-chain data; figures appear in a few seconds. USDT estimates use Chainlink BNB/USD. Contract addresses are not shown.",previewNoteErr:"On-chain sync failed temporarily; retrying other RPC endpoints. The rules below still apply; figures will appear automatically when the connection returns.",flapCta:"Open the vault on Flap",flapCtaSoon:"Coming soon",soon:"Coming soon",syncing:"Syncing",naValue:"n/a",clockPrestart:"Until open",clockSoon:"Coming soon",usdSyncing:"USDT rate syncing",statMineLive:"Check your burns on Flap",statAddrsLive:"See the jackpot leader on-chain",brandTag:"Prize pool (one round every 10 minutes)",nav1:"Forge",nav2:"Pools",nav3:"Plots",nav4:"Floor",wallet:"Connect wallet",walletOn:"0x5eED\u2026beEF",kick:"BNB CHAIN \xB7 FLAP VAULT \xB7 10-min prize \xB7 Round",kickRound:"",tagHtml:"Prize pool (one round every 10 minutes). Payout = min(pool \xD7 15%, this round's burn \xD7 min(floor, market) \xD7 1).<br><em>Seconds 0\u2013539 always count; seconds 540\u2013599 are a random cutoff</em>. A round under 2,000,000 tokens pays nothing and rolls the prize, while activation and plot minting still happen.",prizeLbl:"Expected payout this round",jackpotLine:"Jackpot",jackpotLead:"Leader",burnLine:"Burned this round",burnLineRest:"/ 2,000,000 \xB7 Under 2,000,000 tokens the prize rolls to the next round",statBurned:"Burned this round",statAddrs:"Addresses",statMine:"Your burn",ctaBurn:"Burn now",ctaPools:"Where the tax goes \u2193",clockLeft:"Time left",clockWin:"Random cutoff 540\u2013599",clockCertain:"Seconds 0\u2013539 always count",clockLate:"A late burn may roll into the next round",clockPhaseCertain:"Seconds 0\u2013539 always count \xB7 Under 2,000,000 tokens the prize rolls to the next round",clockPhaseWin:"Seconds 540\u2013599 are a random cutoff; a late burn may roll \xB7 Under 2,000,000 tokens the prize rolls to the next round",clockReveal:"Revealing the cutoff second",clockRevealSub:"Decided by the block hash; nobody can change it",clockCut:"Cutoff",clockCutSub:"Hammer at second {n}",you:"You",cap:"Market cap",perToken:"BNB / token",tokenUnit:"tokens",pxMkt:"Market",pxFloor:"Floor",pxRef:"Reward ref. min(floor, market)",poolsKicker:"02 / Where the tax goes",poolsH:"One tax, three flows",poolsP:"3% / 3% buy/sell tax, 100% into the vault \xB7 0 ops \xB7 0 project wallets",pool1n:"Prize pool",pool1d:"One round every 10 minutes. Payout = min(pool\xD715%, this round's burn\xD7min(floor, market)\xD71); 50% pro-rata, 50% jackpot (\u2264 5% of the pool, needs 2 addresses)",pool2n:"Plot pool",pool2d:"One round every 30 minutes, 80% released evenly over the minutes, 20% rolls; split by activated weight",pool3n:"Floor reserve",pool3dPre:"\u2248 ",pool3dSuf:" USDT \xB7 used only for floor redemptions; redeemed tokens are burned",plotsKicker:"03 / Plot planet",plotsHHtml:"2,000 plots,<br>minted by burning, soulbound",plotsP:"Plots can only be obtained by burning tokens. They are permanently bound to the burning address and cannot be transferred or sold. Each burn is split greedily, highest tier first: Common 100,000 (weight 1.0), Rare 200,000 (2.2), Epic 300,000 (3.5). Genesis lasts 30 minutes at up to 20 plots per minute (max 600), then issuance continues to 2,000. The plot pool runs 30-minute rounds, releasing 80% evenly over the minutes, 20% rolling over, split by activated weight. Every 10 minutes you only need to burn 1,000 tokens per 1.0 weight to activate; in a quiet window a single activated holder takes that period's whole dividend. Plot dividends never expire; unclaimed prize-round rewards expire after 30 days.",legendCommon:"Common 1.0",legendRare:"Rare 2.2",legendEpic:"Epic 3.5",legendMine:"Mine",plotsHint:"Drag to spin the planet \xB7 tap a plot for details",roundKicker:"04 / Floor redemption",roundHHtml:"Vault floor,<br>redeemed by weight",roundP:"Floor redemption needs no activation. Your quota = weight \xD7 quota per weight. The cap per 1.0 weight = max(100,000, \u23082 \xD7 15,000,000 \xF7 network issued weight\u2309), recomputed live, rounded down per address. 80% of the floor tax goes to the current tier, 20% to the next; a filled tier opens the next one at once. Redeemed tokens are 100% burned and do not count toward the prize pool, plot minting, or activation. The floor is not a guarantee or a promise to pay.",roundTop:"Tier",roundTopSuf:" \xB7 current floor price",quotaMath:"Your floor quota = weight \xD7 quota per weight",roundSub:"Next-tier pool",roundSub2:"BNB \xB7 quota left this tier",roundSub3:" / 15M \xB7 per-weight quota",roundSub4:" \xB7 your remaining this tier",filled:"Filled",filledOf:" / 15M",burnedCum:"Cumulative floor redemption burns",sellBtn:"Redeem at floor price",roundWarn:"\u26A0 The floor price may be above the market. Holders may then fill the current tier's quota (a known and accepted risk).",rulesKicker:"05 / One-screen rules",rulesH:"Every rule is in the contract",rule1s:"Prize pool (one round every 10 minutes). Seconds 0\u2013539 always count; seconds 540\u2013599 are a random cutoff, and a late burn may roll into the next round.",rule2s:"Payout = min(prize pool\xD715%, this round's burn\xD7min(floor, market)\xD71). 50% pro-rata, 50% jackpot to the largest (then earliest) burner (capped at 5% of the pool; jackpot stays in the pool if fewer than 2 addresses).",rule3s:"Minimum 1,000 tokens per burn. A round under 2,000,000 tokens pays nothing and rolls the prize; activation and plot minting still happen.",rule4s:"Plots are minted only by burning, soulbound, and cannot be transferred or sold. Greedy split: Common 100k/1.0, Rare 200k/2.2, Epic 300k/3.5. Genesis: 30 minutes, up to 20 plots per minute (max 600), then on to 2,000.",rule5s:"Plot pool: 30-minute rounds, 80% released evenly over the minutes, 20% rolls; split by activated weight. Every 10 minutes, burn 1,000 tokens per 1.0 weight to activate. In a quiet window a single activated holder takes that period's whole dividend. Plot dividends never expire; unclaimed prize-round rewards expire after 30 days.",rule6s:"Floor redemption needs no activation and is allocated by plot weight. Redeemed tokens are fully burned and do not count toward the prize, plots, or activation. 80%/20% splits into the current and next tier; a filled tier opens the next one at once.",linkCustom:"Open the vault on Flap \u2192",linkGeneric:"Rules \u2191",foot:"BNB Chain \xB7 Flap Tax Token V3 \xB7 3% / 3% tax \xB7 live read-only sync, no contract addresses shown",tabClaim:"Claim",tabPlot:"Plots",tabRound:"Floor",close:"Close",autoPlot:"Automatically credited to your plots \xB7 soulbound",burnPhase:"Seconds 0\u2013539 always count / 540\u2013599 random cutoff; under 2,000,000 tokens the prize rolls to the next round",burn:"Burn",approve:"Approve EDEN",noscript:"JavaScript is required to view EDEN.",langLabel:"Language",leadEmpty:"No leader yet",quotaLine:"Your floor quota = {w} \xD7 {cap} = {total} (used {used}, left {left})",tierOpen:"Open \xB7 floor needs no activation",tierOpening:"Opening a tier",tierWait:"Tier 1 opens after genesis once at least one plot is issued",tickBurn:"Total burned",tickTax:"Total tax in",tickFloor:"Floor price",tickOpening:"Opening",tickAfterGenesis:"Opens after genesis",payZeroMkt:"Contract estimate is 0: the market price has not had two observations yet (the first is only recorded), so this round releases 0 by burn.",payZeroQueued:"Contract estimate is 0: the {pool} BNB in the prize pool is still in the contract's pending queue and not yet counted as releasable this round.",payLast:"Last round (#{n}) actually paid {bnb} BNB.",tickFilled:"Filled this tier",tickPlots:"Plots issued",tickWeight:"Network weight",tickTaxRate:"Tax",tickTaxVal:"3% / 3% \u2192 100% to vault",toastConnect:"Simulated wallet connected: 5,000,000 EDEN \xB7 2.5 BNB (fake data)",toastDisconnect:"Simulated wallet disconnected",toastConnectShort:"Simulated wallet connected (fake data)",toastApprove:"Simulated EDEN approval for the vault (once is enough)",approving:"Approving\u2026",previewTitle:"This burn",previewCommon:"C",previewRare:"R",previewEpic:"E",previewWeight:"Weight",previewBelow:"Below 1,000 tokens",actOk:"Activated this window \xB7 weight {w}",actNeed:"{n} more tokens to activate (1,000 per 1.0 weight / 10 min)",chip1k:"1k",chip30w:"300k",chip2m:"2M",sheetClaimTitle:"To claim",sheetYourPlots:"Your plots",sheetAct:"Activation",sheetActOn:"Activated this window",sheetActOff:"Not active, {n} short",claimBtn:"Claim all",claiming:"Claiming\u2026",claimNote:"Plot pool: 30-minute rounds, 80% released evenly over the minutes, 20% rolls, split by activated weight. Every 10 minutes, burn 1,000 tokens per 1.0 weight to activate. Inactive holders earn nothing; their share goes to active holders. In a quiet window a single activated holder takes that period's whole dividend. Plot dividends never expire; unclaimed prize-round rewards expire after 30 days. Plots are lazy-minted on claim or touch, 50 per transaction.",toastClaimed:"Claimed {bnb} BNB",toastClaimPlots:" + {n} plots",toastSim:" (simulated)",needWallet:"Connect the wallet first (simulated)",plot:"Plot",mineMark:" \xB7 mine",plotTier:"Tier",plotOwner:"Owner",plotYouBound:"You (soulbound)",plotBound:" (soulbound)",plotUnissued:"Not issued yet",plotLastDiv:"Last dividend",plotMine:"Your plots",plotActOff:"{n} tokens short",noPlots:"You have no plots yet. Burn to mint.",plotNote:"Plots can only be obtained by burning tokens, are permanently bound, and cannot be transferred or sold. Every 10 minutes, burn 1,000 tokens per 1.0 weight to activate. In a quiet window a single activated holder takes that period's whole dividend. Plot dividends never expire.",tierN:"Tier {id} \xB7 current floor price",capLbl:"Market cap",bnbPrice:"BNB price",bnbEach:"BNB / token",quotaLeft:"Quota left this tier",nextPool:"Next-tier pool",capPerW:"Quota per weight",myQuota:"Your floor quota",yourLeft:"Your remaining this tier",yourEden:"Your EDEN",sellAmt:"Redeem amount",sellOut:"You receive",sellMin:"Minimum received (BNB)",sellDo:"Redeem at floor (tokens burned)",onlyHolders:"Only plot holders can redeem. Mint a plot by burning, then redeem \u2014 no activation required.",roundNote:"Floor redemption needs no activation and is allocated by plot weight. A filled tier opens the next one at once. Redeemed EDEN is 100% burned and does not count toward the prize pool, plots, or activation. The floor is not a guarantee or a promise to pay.",roundRisk:"\u26A0 The floor price may be above the market. Holders may then fill the current tier's quota (a known and accepted risk).",usdNote:"USDT estimates use the Chainlink BNB/USD feed, shown as plain decimals, never scientific notation.",openingTier:"Opening tier 1.",waitTier:"Tier 1 opens after genesis once at least one plot is issued.",noTimer:"No countdown and no opening threshold. A new tier's starting price = next-tier pool \xF7 15M and may be much lower than the last.",confirming:"Confirming\u2026",toastSell:"Floor redeemed {take} tokens, received {out} BNB; those tokens were burned (simulated)",landlord:"Holder",soulbound:" \xB7 soulbound",transfer:"Transfer",noTransfer:"Cannot be transferred or sold",plotOnlyBurn:"Plots can only be obtained by burning tokens and stay bound to the burning address.",hoverUnissued:"Not issued yet",hoverBound:"Soulbound, cannot be sold",hoverWeight:"Weight",toastRoundOpen:"Tier {id} floor opened: current floor {usd} (market cap {cap})",toastRoundWin:"Round {m}: you received {bnb} BNB",resMiss:"Round {m} \xB7 threshold missed",resMissBody:"Under 2,000,000 tokens this round pays nothing and the prize rolls (activation and plots still work)",resHit:"Round {m} \xB7 cutoff at {cut}s",resSplit:"Split",resJack:"Jackpot",resCounted:"Counted",resMissed:"tokens missed the cutoff and rolled",resYouGot:"You received +{bnb} BNB",resYouMissed:"You missed the cutoff and rolled into the next round",toastBurned:"Burned {n} tokens",errMin:"Minimum burn is 1,000 tokens",errWallet:"Connect the wallet first (simulated)",errBal:"Not enough EDEN",errNoTier:"This tier is not open yet",errWaitTier:"Tier 1 opens after genesis once at least one plot is issued",errHolders:"Only plot holders can redeem; the plot is the ticket. Floor needs no activation.",errQuotaYou:"Your floor quota is used up",errQuotaTier:"This tier's quota is filled; the next tier is open",errMinOut:"BNB out is below your minimum; the trade did not execute",errNothing:"Nothing to claim right now",tierCommon:"Common",tierRare:"Rare",tierEpic:"Epic",common:"Common",rare:"Rare",epic:"Epic",autoPlotN:"Auto-credited to your {n} plots (C {c} / R {r} / E {e} \xB7 weight {w}), soulbound",autoNone:"Prize pool only",toastLateBurn:"Burned {n} tokens in the random window: seconds 540\u2013599 are a random cutoff, a late burn may roll",toastLazy:" \xB7 {n} plots will lazy-mint after the reveal",toastBurnOk:"Burned {n} tokens, counted in this round",toastMint:" \xB7 minted C{c}/R{r}/E{e}",toastHavePlots:" \xB7 you already have {n} plots",toastPoolOnly:" \xB7 prize pool only",claimTotal:"Total claimable",claimRound:"Prize-round rewards",claimPlot:"Plot dividends",claimPendingPlots:"Plots to mint",claimPendingN:"{n} plots (50 per transaction)",myPlotsLine:"C {c} / R {r} / E {e} \xB7 weight {w}",weight:"Weight",unissued:"Unissued",rule1n:"10 min",rule3n:"2M",spdTitle:"Simulation speed",walletTitle:"This site is read-only; connect your wallet on Flap",burnBarTitle:"2,000,000-token line",feedAria:"Live burns",sheetAria:"Action panel",amtAria:"Burn amount",socialX:"X (Twitter)",socialTg:"Telegram",dockCollapse:"Minimize burn bar",dockExpand:"Expand burn bar",dockReady:"Ready",walletShort:"Connect",moreMenu:"More"}},kp="eden:lang",Ph=new Set,Sn="en"});var na={};bd(na,{ADDRS:()=>Nr,ME:()=>Ot,N:()=>xi,P:()=>ke,S:()=>C,TIER:()=>Gn,TIER_NAME:()=>Dr,TIER_W:()=>Nh,activationNeed:()=>$p,addrOf:()=>Bs,advance:()=>kh,capPerPlot:()=>zy,capPerWeight:()=>Vi,chainMode:()=>Ge,claimAll:()=>Oh,doBurn:()=>Nc,emit:()=>Wi,fullPoolBurn:()=>Uc,genesisOver:()=>Yp,jackpotEst:()=>ta,lastPaid:()=>ks,liveTierPrice:()=>fs,marketPrice:()=>Dc,minuteBurned:()=>Xi,minuteCap:()=>Fh,myActivation:()=>Fr,myCap:()=>Ur,myPlotDividends:()=>Dh,myPlots:()=>Gi,myTierCounts:()=>jo,myTierLeft:()=>zs,myWeight:()=>ps,owner:()=>Vt,plotTier:()=>gn,plotsFromBurn:()=>Lc,prizeFor:()=>ea,refFloorPrice:()=>Bh,resetToEmpty:()=>Oc,secOf:()=>Os,seedMinute:()=>Xy,sell:()=>Bc,sellQuote:()=>Fc,setChainMode:()=>Ic,sub:()=>ms,tier1Ready:()=>Qo,totalWeight:()=>ky,weightOf:()=>_i});function Ic(n){Ge=n}function Lc(n){let e=n,t=Math.floor(e/ke.costE);e-=t*ke.costE;let i=Math.floor(e/ke.costR);e-=i*ke.costR;let s=Math.floor(e/ke.costC),r=t+i+s;if(r>ke.plotsMax){let a=r-ke.plotsMax;a>=s?(a-=s,s=0):(s-=a,a=0),a>=i?(a-=i,i=0):(i-=a,a=0),a>0&&(t=Math.max(0,t-a))}let o=[];for(let a=0;a<t;a++)o.push(Gn.EPIC);for(let a=0;a<i;a++)o.push(Gn.RARE);for(let a=0;a<s;a++)o.push(Gn.COMMON);return{epic:t,rare:i,common:s,n:t+i+s,tiers:o,weight:t*ke.wE+i*ke.wR+s*ke.wC}}function Oy(n){let t=(Math.imul(n+1,1664525)+1013904223>>>0)%8;return t<3?Gn.COMMON:t<6?Gn.RARE:Gn.EPIC}function qp(){let n=0,e=0;for(let t=0;t<C.plotsMinted;t++){let i=_i(t);n+=i,Vt[t]===Ot&&(e+=i)}return C.totalWeight=n,e}function Gi(){let n=[];for(let e=0;e<C.plotsMinted;e++)Vt[e]===Ot&&n.push(e);return n}function jo(){let n={common:0,rare:0,epic:0,weight:0};for(let e of Gi())gn[e]===1?n.common++:gn[e]===2?n.rare++:gn[e]===3&&n.epic++,n.weight+=_i(e);return n}function $p(n=Ot){let e=0;if(n===Ot)e=ps();else for(let t=0;t<C.plotsMinted;t++)Vt[t]===n&&(e+=_i(t));return e*ke.actPerWeight}function Fr(){let n=ps(),e=n*ke.actPerWeight,t=Math.floor(C.t/ke.actWindow);C.my.winId!==t&&(C.my.winId=t,C.my.winBurn=0);let i=C.my.winBurn||0,s=e>0&&i>=e;return{weight:n,need:e,burned:i,left:Math.max(0,e-i),active:s,window:t,costPer:ke.actPerWeight}}function Dh(){let n=jo(),e=Fr();return{plots:n.common+n.rare+n.epic,common:n.common,rare:n.rare,epic:n.epic,weight:n.weight,claimable:C.my.plotDiv,active:e.active,need:e.need,burned:e.burned,left:e.left,activeWeight:C.activeWeight,pool:C.plotPool,remaining:C.plotDivLeft}}function Hy(n){C.minutePool+=n*ke.split[0],C.plotPool+=n*ke.split[1];let e=n*ke.split[2];C.round?(C.round.pool+=e*.8,C.nextPool+=e*.2,C.round.price=fs()):C.floorReserve+=e,C.taxIn+=n,Wi("income",n)}function Zp(n,e){if(C.plotsMinted>=xi||C.plotsCommitted>=xi)return-1;let t=C.minute-C.startMinute,i=t<ke.genesisMinutes?(t+1)*ke.plotsPerMinute:xi;if(C.plotsCommitted>=Math.min(i,xi))return-1;let s=C.plotsMinted;return Vt[s]=n,gn[s]=e,C.plotsMinted++,C.plotsCommitted++,C.totalWeight+=Nh[e],s}function Wp(n,e){let t=Math.floor(C.t/ke.actWindow);if(n===Ot){C.my.winId!==t&&(C.my.winId=t,C.my.winBurn=0),C.my.winBurn+=e;let i=$p(Ot);i>0&&C.my.winBurn>=i&&(C.my.actW=ps(),C.my.actWin=t)}}function Nc(n,e){let t=Os(C.t);if(e<ke.minBurnTx)throw new Error(I("errMin"));if(n===Ot){if(!C.wallet)throw new Error(I("errWallet"));if(e>C.my.tok)throw new Error(I("errBal"));C.my.tok-=e,C.my.minuteBurn+=e}Wp(n,e);let i={who:n,amount:e,sec:t,late:t>=ke.certain,minute:C.minute};C.cur.burns.push(i),i.late?C.cur.late+=e:C.cur.pre+=e;let s=(C.cur.agg.get(n)||0)+e;C.cur.agg.set(n,s),s>C.cur.leadAmt&&(C.cur.leadAmt=s,C.cur.lead=n),C.burnedTotal+=e;let r=Lc(e),o=[];if(t<ke.certain)for(let a of r.tiers){let l=Zp(n,a);l>=0&&(o.push(l),n===Ot&&(C.my.plotsPending=Math.max(0,C.my.plotsPending)))}else r.n&&n===Ot&&(C.my.plotsPending+=r.n);return n===Ot&&o.length&&Wp(n,0),Wi("burn",{...i,minted:o,preview:r}),{...i,minted:o,preview:r}}function Dc(){return Uh()*C.mktPrem}function Fh(){return C.minutePool*ke.prizePct}function ea(n){return Math.min(Fh(),n*Kp())}function Uc(){let n=Kp();return n>0?Fh()/n:0}function Bh(){return Uh()}function ta(n){let e=ea(n),t=e*ke.jackpotShare,i=C.minutePool*ke.jackpotPoolCap,s=C.cur.agg.size;return s<ke.jackpotMinBurners?{release:e,jackpot:0,proRata:e*ke.jackpotShare,lead:C.cur.lead,leadAmt:C.cur.leadAmt,burners:s}:{release:e,jackpot:Math.min(t,i),proRata:e-Math.min(t,i),lead:C.cur.lead,leadAmt:C.cur.leadAmt,burners:s}}function Vy(){let n=Math.floor((C.t-1)/ke.prizeRound),e=ke.certain+Math.floor(Math.random()*61),t=C.cur.carry,i=0,s=0,r=0,o=new Map,a=null,l=0;for(let f of C.cur.burns)if(f.sec<e){t+=f.amount,f.who===Ot&&(i+=f.amount);let M=(o.get(f.who)||0)+f.amount;o.set(f.who,M),M>l&&(l=M,a=f.who)}else s+=f.amount,f.who===Ot&&(r+=f.amount);let c=0,u=0,d=!1,h=0,p=0,v=null;if(t<ke.minMinuteBurn)d=!0,s+=t,r+=i,i=0;else{c=ea(t);let f=ta(t),M=o.size;p=c*ke.jackpotShare,h=M>=ke.jackpotMinBurners?Math.min(c*ke.jackpotShare,C.minutePool*ke.jackpotPoolCap):0,h===0?p=c-0:p=c-h,C.minutePool-=p+h,u=t>0?i/t:0,C.my.claim+=p*u,a===Ot&&h>0&&(C.my.claim+=h),v=h>0?a:null}let _=[...o.entries()].sort((f,M)=>M[1]-f[1]).slice(0,6).map(([f,M])=>({w:f,a:M,bnb:d?0:p*M/t+(f===v?h:0)})),m={m:n,cutoff:e,total:t,prize:p+h,pro:p,jackpot:h,win:v,mine:p+h?p*u+(a===Ot?h:0):0,myIn:i,addrs:o.size,roll:s,rolled:d,plots:0,top:_,lead:a,leadAmt:l};C.lastCut={cutoff:e,t:C.t,m:n},C.minuteHist.unshift(m),C.minuteHist.length>8&&C.minuteHist.pop(),C.minute+=10,C.cur={burns:[],pre:0,late:0,carry:s,agg:new Map,lead:null,leadAmt:0},C.my.minuteBurn=r,Wi("minute",m)}function Gy(){let n=Math.floor(C.t/60);if(C.lastDivMin<0){C.lastDivMin=n;return}if(n===C.lastDivMin)return;let e=Math.min(4,n-C.lastDivMin);for(let t=0;t<e;t++){let i=C.lastDivMin+t,s=i%(ke.plotDivRound/60);if(s===0&&(C.plotPool+=C.plotDivLeft,C.plotDivBudget=C.plotPool*ke.plotRelease,C.plotPool-=C.plotDivBudget,C.plotDivLeft=C.plotDivBudget),C.activeWeight>0&&C.plotDivLeft>0){let r=ke.plotDivRound/60-s,o=C.plotDivLeft/Math.max(1,r);C.plotDivLeft-=o;let a=C.my.actWin===Math.floor(i*60/ke.actWindow)?C.my.actW:0;if(a>0){let l=o*(a/C.activeWeight);C.my.plotDiv+=l;let c=Gi(),u=c.length?l/c.length:0;c.forEach(d=>ks[d]=u)}}}C.lastDivMin=n}function Xp(n){C.roundId++,C.round={id:C.roundId,pool:n,paid:0,filled:0,openAt:C.t},C.round.price=fs(),C.my.redeemTier!==C.roundId&&(C.my.redeemUsed=0,C.my.redeemTier=C.roundId),Wi("roundOpen",C.round)}function Jp(){let n=C.round;if(n&&n.filled>=ke.quota-1e-6){C.roundHist.unshift({id:n.id,price:fs()||n.price,filled:n.filled,why:"\u5151\u6EE1"}),C.roundHist.length>5&&C.roundHist.pop();let e=C.nextPool;C.nextPool=0,C.round=null,Wi("roundEnd",n),Xp(e)}if(!C.round&&Qo()){let e=C.floorReserve*.8;C.nextPool+=C.floorReserve*.2,C.floorReserve=0,Xp(e)}C.round&&(C.round.price=fs())}function Fc(n,e=Ot){let t=C.round;if(!t)return{take:0,out:0,left:0};let i=e===Ot?zs():Math.floor((()=>{let o=0;for(let a=0;a<C.plotsMinted;a++)Vt[a]===e&&(o+=_i(a));return o})()*Vi()),s=Math.max(0,Math.min(n,i,ke.quota-t.filled)),r=fs();return{take:s,out:s*r,left:i,price:r}}function Bc(n,e,t){let i=C.round;if(!i)throw new Error(Qo()?I("errNoTier"):I("errWaitTier"));let s=0;for(let o=0;o<C.plotsMinted;o++)Vt[o]===n&&s++;if(s<=0)throw new Error(I("errHolders"));let r=Fc(e,n);if(r.take<=0)throw new Error(r.left<=0?I("errQuotaYou"):I("errQuotaTier"));if(t&&r.out<t)throw new Error(I("errMinOut"));if(n===Ot){if(!C.wallet)throw new Error(I("errWallet"));if(r.take>C.my.tok)throw new Error(I("errBal"));C.my.tok-=r.take,C.my.bnb+=r.out,C.my.redeemUsed=(C.my.redeemTier===i.id?C.my.redeemUsed:0)+r.take,C.my.redeemTier=i.id}return i.filled+=r.take,i.paid+=r.out,i.price=fs(),C.roundBurned+=r.take,Wi("sell",{who:n,...r}),Jp(),r}function Oh(){if(!C.wallet)throw new Error(I("errWallet"));let n=C.my.claim+C.my.plotDiv,e=Math.min(C.my.plotsPending,ke.maxLazyMint);if(n<=0&&!e)throw new Error(I("errNothing"));C.my.bnb+=n,C.my.claim=0,C.my.plotDiv=0;let t=[];for(let i=0;i<e&&C.plotsMinted<xi;i++){let s=Zp(Ot,Gn.COMMON);s>=0&&t.push(s)}return C.my.plotsPending=Math.max(0,C.my.plotsPending-t.length),Wi("claim",{bnb:n,plots:t}),{bnb:n,plots:t}}function Wy(){C.t++;let n=Os(C.t);n%60===0&&C.minute++,Math.random()<.45&&Hy(Lr(.0015,.014));let e=n>=ke.certain?.55:.22;if(Math.random()<e){let t=Math.round(Math.exp(Lr(Math.log(2e3),Math.log(24e5)))/1e3)*1e3;try{Nc(Math.floor(Math.random()*Nr.length),t)}catch{}}if(Math.random()<.03&&C.round)try{Bc(Math.floor(Math.random()*Nr.length),Math.round(Lr(5e4,9e5)/1e3)*1e3)}catch{}n===0&&Vy(),Gy(),Jp(),C.mktPrem=Vp(C.mktPrem+Lr(-.004,.0045),2.2,3.2),C.chg=Vp(C.chg+Lr(-.05,.05),-6,9),Wi("tick",n)}function Oc(){C.t=0,C.speed=0,C.minute=0,C.wallet=!1,C.approved=!1,C.minutePool=0,C.plotPool=0,C.taxIn=0,C.burnedTotal=0,C.roundBurned=0,C.plotsMinted=0,C.plotsCommitted=0,C.plotQuotaCarry=0,C.plotEma=0,C.roundId=0,C.round=null,C.roundHist=[],C.nextPool=0,C.floorReserve=0,C.startMinute=0,C.startTime=0,C.cur={burns:[],pre:0,carry:0,agg:new Map,late:0,lead:null,leadAmt:0},C.my={tok:0,bnb:0,claim:0,credit:0,plotDiv:0,plotsPending:0,minuteBurn:0,hourBurn:0,winBurn:0,winId:-1,actW:0,actWin:-1,redeemUsed:0,redeemTier:0},C.sel=1,C.vol24=0,C.lastHourAt=0,C.lastCut=null,C.mktPrem=1,C.chg=0,C.minuteHist=[],C.hourBurn=new Map,C.openHours=0,C.totalWeight=0,C.activeWeight=0,C.actWindow=0,C.plotDivLeft=0,C.plotDivBudget=0,C.lastDivMin=-1,typeof Vt<"u"&&(Vt.fill(0),gn.fill(0),ks.fill(0))}function kh(n){if(Ge==="soon"||Ge==="error"||Ge==="sync"||Ge==="live")return Ge==="live"&&C.startTime,0;Pc+=Math.min(n,.25)*C.speed;let e=0;for(;Pc>=1&&e<600;)Pc-=1,e++,Wy();return C.speed<=10?Pc:0}function Xi(){return C.cur.carry+C.cur.pre+C.cur.late}function Xy(){let n=Os(C.t);for(let e=0;e<n;e++)if(Math.random()<.18){let t=Math.round(Math.exp(Lr(Math.log(3e3),Math.log(12e5)))/1e3)*1e3,i=Math.floor(Math.random()*Nr.length),s={who:i,amount:t,sec:e,late:e>=ke.certain,minute:C.minute};C.cur.burns.push(s),s.late?C.cur.late+=t:C.cur.pre+=t;let r=(C.cur.agg.get(i)||0)+t;C.cur.agg.set(i,r),r>C.cur.leadAmt&&(C.cur.leadAmt=r,C.cur.lead=i)}Xi()<8e5&&(C.cur.carry+=115e4)}var Ge,ke,Ot,Lr,Vp,Gp,Nr,Bs,Os,Gn,Dr,Nh,C,xi,Vt,ks,gn,_i,fs,ky,Vi,ps,Ur,zs,zy,Yp,Qo,Lh,Wi,ms,Uh,Kp,Pc,Qp=Kt(()=>{Rc();Ge=null;ke={split:[.45,.3,.25],prizePct:.15,jackpotShare:.5,jackpotPoolCap:.05,jackpotMinBurners:2,prizeRound:600,certain:540,minMinuteBurn:2e6,minBurnTx:1e3,plotRelease:.8,quota:15e6,plotsMax:2e3,plotsPerMinute:20,genesisMinutes:30,costC:1e5,costR:2e5,costE:3e5,wC:1,wR:2.2,wE:3.5,actPerWeight:1e3,actWindow:600,plotDivRound:1800,minCapPerWeight:1e5,maxRedeemPlots:50,supply:1e9,bnbUsd:612,maxLazyMint:50},Ot=-1,Lr=(n,e)=>n+Math.random()*(e-n),Vp=(n,e,t)=>Math.max(e,Math.min(t,n)),Gp=()=>Math.random().toString(16).slice(2,6).padEnd(4,"0"),Nr=Array.from({length:400},()=>`0x${Gp()}\u2026${Gp()}`),Bs=n=>n===Ot?I("you"):Nr[n],Os=n=>(n%ke.prizeRound+ke.prizeRound)%ke.prizeRound,Gn={COMMON:1,RARE:2,EPIC:3},Dr=new Proxy({},{get:(n,e)=>I({1:"tierCommon",2:"tierRare",3:"tierEpic"}[+e]||"plotUnissued")}),Nh={1:ke.wC,2:ke.wR,3:ke.wE};C={t:312*600+120,speed:1,minute:1874,wallet:!1,approved:!1,minutePool:18.42,plotPool:9.37,taxIn:142.6,burnedTotal:4126e5,roundBurned:5831e4,plotsMinted:1680,plotsCommitted:1680,plotQuotaCarry:0,plotEma:0,roundId:3,round:null,roundHist:[],nextPool:.85,floorReserve:0,startMinute:0,startTime:0,cur:{burns:[],pre:0,carry:0,agg:new Map,late:0,lead:null,leadAmt:0},my:{tok:5e6,bnb:2.5,claim:0,credit:0,plotDiv:.0047,plotsPending:0,minuteBurn:0,hourBurn:0,winBurn:0,winId:-1,actW:0,actWin:-1,redeemUsed:0,redeemTier:3},sel:6,vol24:0,lastHourAt:0,lastCut:null,mktPrem:2.6,chg:3.2,minuteHist:[],hourBurn:new Map,openHours:3,totalWeight:0,activeWeight:0,actWindow:0,plotDivLeft:0,plotDivBudget:0,lastDivMin:-1};C.round={id:3,pool:3.42,paid:.86,filled:38e5,openAt:C.t-2.1*3600};C.round.price=(C.round.pool-C.round.paid)/(ke.quota-C.round.filled);C.roundHist=[{id:2,price:48e-8,filled:15e6,why:"\u5151\u6EE1"},{id:1,price:21e-8,filled:15e6,why:"\u5151\u6EE1"}];xi=ke.plotsMax,Vt=new Int32Array(xi),ks=new Float64Array(xi),gn=new Uint8Array(xi),_i=n=>Nh[gn[n]]||0;for(let n=0;n<xi;n++)Vt[n]=Math.floor(Math.random()*Nr.length),gn[n]=n<C.plotsMinted?Oy(n):0;[5,40,232,880,1510].forEach((n,e)=>{Vt[n]=Ot,gn[n]=[Gn.COMMON,Gn.RARE,Gn.EPIC,Gn.COMMON,Gn.RARE][e]});qp();C.my.actW=qp();C.my.actWin=Math.floor(C.t/ke.actWindow);C.actWindow=C.my.actWin;C.activeWeight=C.totalWeight*.22+C.my.actW;C.plotDivBudget=C.plotPool*ke.plotRelease;C.plotDivLeft=C.plotDivBudget*.55;fs=()=>{let n=C.round;if(!n)return 0;let e=ke.quota-n.filled,t=n.pool-n.paid;return e>0?t/e:0},ky=()=>C.totalWeight,Vi=()=>Math.max(ke.minCapPerWeight,Math.ceil(2*ke.quota/Math.max(1e-9,C.totalWeight))),ps=()=>{let n=0;for(let e=0;e<C.plotsMinted;e++)Vt[e]===Ot&&(n+=_i(e));return n},Ur=()=>Math.floor(ps()*Vi()),zs=()=>C.round?Math.max(0,Ur()-(C.my.redeemTier===C.round.id?C.my.redeemUsed:0)):0,zy=()=>Vi(),Yp=()=>C.minute-C.startMinute>=ke.genesisMinutes,Qo=()=>Yp()&&C.plotsCommitted>=1;Lh={},Wi=(n,e)=>(Lh[n]||[]).forEach(t=>t(e)),ms=(n,e)=>(Lh[n]=Lh[n]||[]).push(e);Uh=()=>C.round?fs():C.roundHist[0]?C.roundHist[0].price:0;Kp=()=>Math.min(Uh()||0,Dc()||0);Pc=0});function gs(n){return typeof n=="number"&&isFinite(n)}function jp(n,e){if(!gs(n))return"0";let t=Math.max(0,Math.min(24,e|0)),i=n<0,s=Math.abs(n),r=1;for(let c=0;c<t;c++)r*=10;let o=Math.round(s*r),a=String(o);if(t===0)return(i?"-":"")+a;a.length<=t&&(a="0".repeat(t+1-a.length)+a);let l=a.length-t;return(i?"-":"")+a.slice(0,l)+"."+a.slice(l)}function qy(n){if(n.indexOf(".")<0)return n;let e=n.replace(/0+$/,"");return e.endsWith(".")&&(e=e.slice(0,-1)),e}function em(n,e=5){if(!gs(n)||n===0)return"0";let t=n<0,i=Math.abs(n),s=Math.max(1,e|0),r=Math.floor(Math.log10(i));if(!isFinite(r))return"0";let o=r>=0?Math.max(0,s-(r+1)):-r-1+s,a=jp(i,o);return a=qy(a),a.indexOf(".")<0&&i<1&&(a=jp(i,-r)),(t?"-":"")+a}function tm(n){return!gs(n)||n<=0?"$0":n>=1e3?"$"+n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"$"+em(n,5)}function Yy(n){if(!gs(n)||n<=0)return"$0";let e=n,t=i=>(i>=100?i.toFixed(0):i>=10?i.toFixed(1):i.toFixed(2)).replace(/\.0+$/,"").replace(/(\.\d*?)0+$/,"$1");return e>=1e9?"$"+t(e/1e9)+"B":e>=1e6?"$"+t(e/1e6)+"M":e>=1e3?"$"+t(e/1e3)+"K":e>=1?"$"+e.toFixed(2):tm(e)}function zh(n){return!gs(n)||n<=0?"0":em(n,5)}function Br(n,e,t){let i=gs(n)&&n>0?n:0,s=gs(e)&&e>0?e:0,r=i&&s?i*s:0,o=r&&gs(t)&&t>0?r*t:0;return{usd:s?tm(r):"",cap:s?Yy(o):"",bnb:zh(i),usdNum:r,capNum:o,hasUsd:!!s}}function nm(n,e,t,i={}){let s=Br(n,e,t),r=i.unit||I("tokenUnit");if(!s.bnb||s.bnb==="0")return`<span class="px-na">${i.empty||I("naValue")}</span>`;let o=s.hasUsd?`<b class="px-usd">${s.usd}</b><span class="px-cap">${I("cap")} ${s.cap}</span>`:"",a=`<span class="px-bnb">${s.bnb} BNB / ${r}</span>`;return`<span class="px-block">${o}${a}</span>`}function wt(n){if(n==null)return 0;let e=typeof n=="bigint"?n:BigInt(n);if(e===0n)return 0;let t=e<0n,i=t?-e:e,s=Number(i/1000000000000000000n),r=Number(i%1000000000000000000n)/1e18,o=s+r;return t?-o:o}var Hh=Kt(()=>{Rc()});var ed={};bd(ed,{BURNED_TOPIC:()=>$y,DISCOVER_MS:()=>Kh,FACTORY:()=>Zh,FACTORY_START_BLOCK:()=>Vc,FEED:()=>Wh,GENESIS_S:()=>pm,MINUTE_SETTLED_TOPIC:()=>dm,MULTICALL3:()=>lm,OWNER:()=>cm,POLL_MS:()=>mm,PORTAL:()=>um,PRIZE_ROUND_S:()=>fm,SEED:()=>Xh,VAULT_CREATED_TOPIC:()=>hm,applyToSim:()=>Jh,clockView:()=>oa,decodeAggregate3:()=>xm,dumpSafe:()=>jh,encodeAggregate3:()=>gm,flapUrl:()=>ra,nowChain:()=>zr,onChange:()=>Gc,shortAddr:()=>ym,start:()=>Qh,state:()=>fe,stop:()=>_M});function Jy(){try{let n=location.hostname;return n==="localhost"||n==="127.0.0.1"||n==="::1"}catch{return!1}}function Qy(){if(Jy())try{let n=new URLSearchParams(location.search).get("rpc");if(n&&/^https?:\/\/(127\.0\.0\.1|localhost|\[::1\])[:/]/i.test(n))return[n.replace(/\/$/,"")]}catch{}return null}function jy(){return Qy()}function Wn(n){return String(n).replace(/^0x/i,"").padStart(64,"0")}function Or(n){return BigInt(n).toString(16).padStart(64,"0")}function eM(n){return String(n).replace(/^0x/i,"").toLowerCase().padStart(64,"0")}function tM(n){return Or(n?1:0)}function nM(n){let e=String(n).replace(/^0x/i,""),t=e.length%2?"0"+e:e,i=(64-t.length%64)%64;return Or(t.length/2)+t+"0".repeat(i)}function gm(n){let e=n.length,t=n.map(o=>eM(o.to)+tM(o.allowFailure!==!1)+Or(96)+nM(o.data)),i=e*32,s="",r="";for(let o of t)s+=Or(i),r+=o,i+=o.length/2;return"0x"+tn.aggregate3.slice(2)+Or(32)+Or(e)+s+r}function ai(n,e){return n.slice(e*64,e*64+64)}function Gt(n){return BigInt("0x"+n)}function vm(n){return("0x"+n.slice(24)).toLowerCase()}function iM(n){return Gt(n)!==0n}function xm(n){let e=String(n).replace(/^0x/i,"");if(e.length<128)return[];let t=Number(Gt(ai(e,0)))/32,i=Number(Gt(ai(e,t))),s=[];for(let r=0;r<i;r++){let o=t+1+Number(Gt(ai(e,t+1+r)))/32,a=iM(ai(e,o)),l=Number(Gt(ai(e,o+1)))/32,c=o+l,u=Number(Gt(ai(e,c))),d=e.slice((c+1)*64,(c+1)*64+u*2);s.push({ok:a,data:"0x"+d})}return s}function kr(n,e){let t=String(n).replace(/^0x/i,""),i=[];for(let s=0;s<e;s++)i.push(Gt(Wn(t.slice(s*64,s*64+64)||"0")));return i}function sM(n){let e=kr(n,9);return{minute:Number(e[0]),endsAt:Number(e[1]),estPool:e[2],burnedThisMinute:e[3],plotsLeft:Number(e[4]),fullPoolBurn:e[5],estJackpot:e[6],leadUser:vm(Wn(String(n).replace(/^0x/i,"").slice(448,512)||"0")),leadBurned:e[8]}}function rM(n){let e=kr(n,5);return{minute:Number(e[0]),second:Number(e[1]),certain:e[2]!==0n,certainSecondsLeft:Number(e[3]),randomSecondsLeft:Number(e[4])}}function oM(n){let e=kr(n,6);return{roundId:Number(e[0]),price:e[1],quotaLeft:e[2],poolLeft:e[3],endsAt:Number(e[4]),open:e[5]!==0n}}function aM(n){let e=kr(n,6);return{spot:e[0],obsPrev:e[1],obsLast:e[2],obsMinute:e[3],used:e[4],floorPrice:e[5]}}function lM(n){let e=kr(n,4);return{refPool:e[0],price:e[1],decaying:e[2]!==0n,decayStart:Number(e[3])}}function cM(n){let e=String(n).replace(/^0x/i,""),t=BigInt("0x"+ai(e,1)),i=t>=1n<<255n?t-(1n<<256n):t,s=Number(Gt(ai(e,3)));return{answer:i,updatedAt:s}}function qh(n){let e=sm.get(n);return e||(e={ok:0,fail:0,ms:1500,until:0},sm.set(n,e)),e}function uM(n){let e=Date.now();return n.map((t,i)=>({u:t,i,h:qh(t)})).sort((t,i)=>{let s=t.h.until>e?1:0,r=i.h.until>e?1:0;if(s!==r)return s-r;let o=t.h.ms+t.h.fail*4e3-t.h.ok*50,a=i.h.ms+i.h.fail*4e3-i.h.ok*50;return o-a||t.i-i.i}).map(t=>t.u)}async function rm(n,e,t,i){let s=Date.now(),r=typeof AbortController<"u"?new AbortController:null,o=setTimeout(()=>{try{r&&r.abort()}catch{}},i);try{let a=await fetch(n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:e,params:t}),signal:r?r.signal:void 0,cache:"no-store",credentials:"omit"});if(!a.ok)throw new Error("HTTP "+a.status);let l=await a.json();if(l.error)throw new Error(l.error.message||JSON.stringify(l.error));if(!("result"in l))throw new Error("no result");let c=qh(n);return c.ok++,c.fail=Math.max(0,c.fail-1),c.until=0,c.ms=c.ms*.6+(Date.now()-s)*.4,im.set(n,(im.get(n)||0)+1),l.result}catch(a){let l=qh(n),c=String(a&&a.name==="AbortError"?"timeout":a&&a.message||a);throw/limit|range|exceed|not supported/i.test(c)||(l.fail++,l.until=Date.now()+Math.min(12e4,8e3*l.fail)),new Error(n.replace(/^https?:\/\//,"")+": "+c)}finally{clearTimeout(o)}}async function sa(n,e,{timeout:t=9e3,hedgeMs:i=1200,logs:s=!1}={}){let r=jy(),o=uM(r||(s?Ky:Zy));if(s){let a=[];for(let l of o)try{return await rm(l,n,e,t)}catch(c){a.push(c.message)}throw new Error(a.slice(0,4).join(" \xB7 "))}return new Promise((a,l)=>{let c=[],u=0,d=0,h=!1,p=0,v=()=>{if(h||u>=o.length)return;let m=o[u++];d++,rm(m,n,e,t).then(f=>{h||(h=!0,clearTimeout(p),a(f))},f=>{d--,c.push(f.message),!h&&(u<o.length?(clearTimeout(p),v(),_()):d===0&&(h=!0,clearTimeout(p),l(new Error(c.slice(0,4).join(" \xB7 ")))))})},_=()=>{clearTimeout(p),u<o.length&&(p=setTimeout(()=>{v(),_()},i))};v(),_()})}function om(n){return"0x"+BigInt(n).toString(16)}function Yh(n){return("0x"+String(n).slice(-40)).toLowerCase()}async function _m(n){let e=typeof n.fromBlock=="bigint"||typeof n.fromBlock=="number"?Number(n.fromBlock):parseInt(n.fromBlock,16),t=n.toBlock==="latest"?await sa("eth_blockNumber",[]):n.toBlock,i=parseInt(t,16),s=Math.min(5e4,Math.max(1,i-e+1)),r=e,o=[];for(;r<=i;){let a=Math.min(r+s-1,i);try{let l=await sa("eth_getLogs",[{fromBlock:om(r),toBlock:om(a),address:n.address,topics:n.topics}],{logs:!0});if(!Array.isArray(l))throw new Error("bad getLogs result");o.push(...l||[]),r=a+1}catch(l){let c=String(l&&l.message||l);if(s>2e3&&/limit|range|too many|exceed/i.test(c)){s=Math.max(2e3,Math.floor(s/2));continue}throw l}}return{logs:o,toBlock:i}}function zr(){return fe.chainTime?fe.chainTime+(Date.now()-fe.localAt)/1e3:Math.floor(Date.now()/1e3)}function ra(){return fe.token?"https://flap.sh/bnb/"+fe.token:""}function ym(n){return!n||n==="0x0000000000000000000000000000000000000000"?"":n.slice(0,6)+"\u2026"+n.slice(-4)}function oa(){let n=fe.snap,e=zr();if(fe.mode!=="live"||!n)return{kind:"soon",left:0,sec:0,win:!1,started:!1};if(!n.started)return{kind:"prestart",left:Math.max(0,Math.ceil(n.startTime-e)),sec:0,win:!1,started:!1};let t=600,i=(e%t+t)%t,s=i>=540;return{kind:"round",left:Math.max(0,Math.ceil(t-i)),sec:i,win:s,started:!0,minute:n.minute}}function Hc(n,e){return String(n||"").toLowerCase()===String(e||"").toLowerCase()}function hM(n){return!n||/^0x0+$/i.test(n)}function dM(n){return!(hM(n)||Hc(n,um)||Hc(n,Zh))}async function fM(n){let e=n.topics&&n.topics[3]?Yh(n.topics[3]):"";if(dM(e))return e;let t=n.transactionHash;if(!t)return e||"";let i=await sa("eth_getTransactionByHash",[t]);return i&&i.from?String(i.from).toLowerCase():e||""}async function pM(){let{logs:n,toBlock:e}=await _m({fromBlock:Vc,toBlock:"latest",address:Zh,topics:[hm]});if(fe.lastBlock=e,!n.length)return!1;n.sort((s,r)=>{let o=parseInt(s.blockNumber,16)-parseInt(r.blockNumber,16);return o||parseInt(s.logIndex,16)-parseInt(r.logIndex,16)});let t=[];for(let s of n){let r=await fM(s);Hc(r,cm)&&t.push(s)}if(!t.length)return!1;let i=t[0];return fe.vault=Yh(i.topics[1]),fe.token=Yh(i.topics[2]),!0}async function mM(){if(!(!fe.vault||Date.now()-am<Kh)){am=Date.now();try{let n=parseInt(await sa("eth_blockNumber",[]),16),e=Math.max(Vc,n-2e4),{logs:t}=await _m({fromBlock:e,toBlock:"0x"+n.toString(16),address:fe.vault,topics:[dm]});if(!t.length)return;t.sort((r,o)=>parseInt(r.blockNumber,16)-parseInt(o.blockNumber,16)||parseInt(r.logIndex,16)-parseInt(o.logIndex,16));let i=null;for(let r of t){let o=Number(BigInt(r.topics[1]));(!i||o>=i.id)&&(i={id:o,l:r})}let s=String(i.l.data).replace(/^0x/i,"");fe.lastSettled={round:i.id,burn:wt(Gt(ai(s,0))),paidBnb:wt(Gt(ai(s,1))),paid:Gt(ai(s,3))!==0n}}catch{}}}async function gM(n){let e=gm(n),t=await sa("eth_call",[{to:lm,data:e},"latest"]);return xm(t)}async function vM(){let n=fe.vault,e=fe.token,t=[{to:n,data:tn.poolInfo},{to:n,data:tn.minuteInfo},{to:n,data:tn.minutePhase},{to:n,data:tn.roundInfo},{to:n,data:tn.nextTierPool},{to:n,data:tn.plotsMinted},{to:n,data:tn.plotsCommitted},{to:n,data:tn.totalBurned},{to:n,data:tn.plotFloorPrice},{to:n,data:tn.startTime},{to:n,data:tn.marketInfo},{to:n,data:tn.refInfo},{to:n,data:tn.totalPlotWeight},{to:n,data:tn.accountedQuote},{to:Wh,data:tn.latestRoundData},{to:Wh,data:tn.decimals},{to:n,data:tn.taxToken}];e&&t.push({to:e,data:tn.totalSupply});let i=await gM(t),s=U=>{if(!i[U]||!i[U].ok||!i[U].data||i[U].data==="0x")throw new Error("view failed #"+U);return i[U].data},r=kr(s(0),6),o=sM(s(1)),a=rM(s(2)),l=oM(s(3)),c=Gt(Wn(s(4).slice(2))),u=Number(Gt(Wn(s(5).slice(2)))),d=Number(Gt(Wn(s(6).slice(2)))),h=Gt(Wn(s(7).slice(2))),p=i[8]&&i[8].ok&&i[8].data&&i[8].data!=="0x"?Gt(Wn(i[8].data.slice(2))):0n,v=Number(Gt(Wn(s(9).slice(2)))),_=aM(s(10)),m=lM(s(11)),f=Gt(Wn(s(12).slice(2))),M=Gt(Wn(s(13).slice(2))),T=cM(s(14));if(i[16]&&i[16].ok&&i[16].data&&i[16].data.length>=66){let U=vm(Wn(i[16].data.slice(2,66)));if(e&&!Hc(U,e)){let B=new Error("vault/token mismatch");throw B.mismatch=!0,B}}let S=8;i[15]&&i[15].ok&&(S=Number(Gt(Wn(i[15].data.slice(2)))));let A=0n;e&&i[17]&&i[17].ok&&(A=Gt(Wn(i[17].data.slice(2))));let w=T.answer>0n?Number(T.answer)/10**S:0,g=Math.floor(Date.now()/1e3);fe.chainTime=o.endsAt&&o.minute>=0&&v&&g>=v?o.endsAt-Math.max(0,600-(a.second||0)):g,o.endsAt&&v&&g>=v?fe.chainTime=o.endsAt-(600-a.second):fe.chainTime=g,fe.localAt=Date.now();let b=15e6,D=wt(l.quotaLeft),R={started:zr()>=v&&v>0,startTime:v,minute:o.minute,endsAt:o.endsAt,estPool:wt(o.estPool),burnedThisMinute:wt(o.burnedThisMinute),plotsLeft:o.plotsLeft,fullPoolBurn:o.fullPoolBurn===(1n<<256n)-1n?0:wt(o.fullPoolBurn),estJackpot:wt(o.estJackpot),leadShort:ym(o.leadUser),leadBurned:wt(o.leadBurned),phase:a,minutePool:wt(r[0]),plotPool:wt(r[1]),floorReserve:wt(r[2]),roundPoolLeft:wt(r[3]),minuteUnclaimed:wt(r[4]),plotUnclaimed:wt(r[5]),nextPool:wt(c),plotsMinted:u,plotsCommitted:d,plotsTotal:2e3,totalBurned:wt(h),plotFloorPrice:wt(p),market:{spot:wt(_.spot),used:wt(_.used),floorPrice:wt(_.floorPrice)},refPrice:wt(m.price),totalWeight:Number(f)/10,accountedQuote:wt(M),bnbUsd:w,supply:wt(A),round:l.open?{id:l.roundId,price:wt(l.price),quotaLeft:D,pool:wt(l.poolLeft),paid:0,filled:Math.max(0,b-D),open:!0}:null,roundId:l.roundId};return R.firstRound=v?Math.floor(v/fm):0,R.roundNo=R.started?Math.max(1,o.minute-R.firstRound+1):0,R.genesisEndsAt=v+pm,R.marketUsed=wt(_.used),R.lastSettled=fe.lastSettled,fe.snap=R,R}function Jh(n){let{S:e,P:t,owner:i,plotTier:s,N:r}=n,o=fe.snap;if(!o||fe.mode!=="live")return;o.bnbUsd>0&&(t.bnbUsd=o.bnbUsd),o.supply>0&&(t.supply=o.supply),t.prizeRound=600,t.certain=540,t.minMinuteBurn=2e6,t.minBurnTx=1e3,t.genesisMinutes=30,t.prizePct=.15,e.minutePool=o.minutePool,e.plotPool=o.plotPool,e.floorReserve=Math.max(0,o.floorReserve-o.nextPool),e.nextPool=o.nextPool,e.taxIn=o.accountedQuote,e.burnedTotal=o.totalBurned,e.plotsMinted=Math.max(0,Math.min(r,o.plotsMinted)),e.plotsCommitted=Math.max(0,Math.min(r,o.plotsCommitted)),e.totalWeight=o.totalWeight,e.minute=o.started?o.minute:0;let a=zr();if(o.started?e.t=o.minute*600+a%600:e.t=0,o.round?(e.round={id:o.round.id,pool:o.round.pool,paid:0,filled:o.round.filled,openAt:0,price:o.round.price},e.roundId=o.round.id):e.round=null,e.cur.pre=o.burnedThisMinute,e.cur.late=0,e.cur.carry=0,e.cur.leadAmt=o.leadBurned,e.cur.lead=o.leadShort?-2:null,e.plotEma=o.plotFloorPrice,i&&s){let l=e.plotsMinted;for(let c=0;c<r;c++)c>=l?(i[c]=0,s[c]=0):s[c]||(s[c]=1,i[c]=1)}}function Gc(n){Mm.push(n)}function kc(){Mm.forEach(n=>{try{n(fe)}catch(e){console.error(e)}})}async function ia(){if(!(Vh||document.hidden)){Vh=!0;try{if(!fe.vault&&!await pM()){fe.mode="soon",fe.error="",fe.snap=null,kc();return}mM().catch(()=>{}),await vM(),fe.mode="live",fe.error="",kc()}catch(n){fe.error=n&&n.message||String(n),n&&n.mismatch&&fe.seeded&&(fe.seeded=!1,fe.vault=null,fe.token=null,fe.snap=null),fe.snap||(fe.mode=fe.mode==="sync"?"sync":"error"),kc(),xM()}finally{Vh=!1}}}function xM(){if(Gh||fe.mode==="live")return;zc++,zc>=3&&fe.mode==="sync"&&(fe.mode="error",kc());let n=Math.min(15e3,2e3*zc);Gh=setTimeout(()=>{Gh=0,ia()},n)}function Qh(){$h||($h=!0,Gc(n=>{n.mode==="live"&&(zc=0)}),ia(),Sm=setInterval(()=>{fe.vault&&ia()},mm),bm=setInterval(()=>{fe.vault||ia()},Kh),document.addEventListener("visibilitychange",()=>{document.hidden||ia()}))}function _M(){$h=!1,clearInterval(Sm),clearInterval(bm)}function jh(){return{mode:fe.mode,error:fe.error,hasVault:!!fe.vault,hasToken:!!fe.token,flap:fe.mode==="live"?"https://flap.sh/bnb/<token>":"",snap:fe.snap&&{started:fe.snap.started,minute:fe.snap.minute,estPool:fe.snap.estPool,burned:fe.snap.burnedThisMinute,minutePool:fe.snap.minutePool,plotPool:fe.snap.plotPool,plotsMinted:fe.snap.plotsMinted,bnbUsd:fe.snap.bnbUsd,roundOpen:!!(fe.snap.round&&fe.snap.round.open)}}}var Zh,Wh,lm,Vc,cm,um,hm,$y,dm,Xh,fm,pm,mm,Kh,tn,Zy,Ky,im,sm,fe,am,Mm,Sm,bm,$h,Vh,Gh,zc,wm=Kt(()=>{Hh();Zh="0x6177B26F2D14893DEe0e15B3CfBa643db6DF1E54",Wh="0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE",lm="0xcA11bde05977b3631167028862bE2a173976CA11",Vc=133355070,cm="0x5C7eDb6061756142076caBcD2da78dbCD91d2074",um="0x90497450f2a706f1951b5bdda52B4E5d16f34C06",hm="0x897c133dfbfe1f6239e98b4ffd7e4f6c86a62350a131a7a37790419f58af02f9",$y="0xf1b8071d85a68dbc6b0a9b8ff17e44602315ec457cdf743f3eee37cf4a6dd38e",dm="0x650fa6d41c3cd0c1c1cc9c8c3b4d0b49fcd765a9b9aa36af0e89e802d3ee223b",Xh={vault:"0xa774e5fab3ac5a2c173f68cfdb06af69ced142ee",token:"0x9a4f5ee9e6c6aad95974a3c7ac3b8575c6867777",block:133526495,tx:"0xf89d15263493019a59bb02e47308b4b44897b8b74c7e7b7ef6b79e0857d53fed"},fm=600,pm=1800,mm=12e3,Kh=6e4,tn={poolInfo:"0x5a2f3d09",minuteInfo:"0x9591a77e",minutePhase:"0xe48b5049",roundInfo:"0xcace12e6",nextTierPool:"0xa1e2ccea",plotsMinted:"0xfa3f5103",plotsCommitted:"0x029e2695",totalBurned:"0xd89135cd",plotFloorPrice:"0x7b006de5",startTime:"0x78e97925",taxToken:"0x1fc928ae",marketInfo:"0x031bee00",refInfo:"0x809bec11",totalPlotWeight:"0xfa81aa98",accountedQuote:"0x1bb3bff3",plotTier:"0xb548bf20",totalSupply:"0x18160ddd",decimals:"0x313ce567",latestRoundData:"0xfeaf968c",aggregate3:"0x82ad56cb"},Zy=["https://bsc-dataseed.bnbchain.org","https://bsc-dataseed1.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-rpc.publicnode.com","https://bsc-dataseed2.bnbchain.org","https://bsc-dataseed.binance.org","https://bsc-dataseed2.defibit.io","https://bsc-dataseed1.ninicoin.io","https://rpc-bsc.48.club","https://0.48.club","https://1rpc.io/bnb","https://bsc.rpc.blxrbdn.com","https://bsc-mainnet.public.blastapi.io"],Ky=["https://bsc-rpc.publicnode.com","https://rpc-bsc.48.club","https://0.48.club","https://bsc.rpc.blxrbdn.com"];im=new Map;sm=new Map;fe={mode:"sync",error:"",vault:Xh.vault,token:Xh.token,seeded:!0,snap:null,chainTime:0,localAt:0,lastBlock:Vc,lastSettled:null,feed:[]};am=0;Mm=[];Sm=0,bm=0,$h=!1,Vh=!1;Gh=0,zc=0});var GM=Wm(()=>{Op();Qp();Hh();Rc();wm();var{S:ie,P:It,ME:$i}=na,Yr=()=>Ge==="live"&&fe.snap&&fe.snap.round?fe.snap.round.price:Ge?0:Yr(),Qc=()=>{if(Ge==="live"&&fe.snap){let n=fe.snap;return n.started&&zr()>=n.genesisEndsAt&&n.plotsCommitted>=1}return Qo()},yM=()=>{if(Ge==="live"&&fe.snap){let n=fe.snap;return n.round?n.round.price:n.refPrice}return Yr()},Pe=(n,e=document)=>e.querySelector(n),Zn=(n,e=document)=>[...e.querySelectorAll(n)],_s=new URLSearchParams(location.search),hd=matchMedia("(max-width:820px)").matches,Hr=matchMedia("(prefers-reduced-motion: reduce)").matches||_s.get("still")==="1",Wt=(n,e=4)=>Number(n).toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e}),Et=n=>n>=1e9?(n/1e9).toFixed(2)+"B":n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(n>=1e5?0:1)+"K":Math.round(n)+"",Nm=_s.get("rec")==="1",ci={now:0,q:[]},Vs=(n,e)=>{let t={at:ci.now+e/1e3,fn:n,off:!1};return ci.q.push(t),t},MM=n=>{n&&(n.off=!0)};function SM(){if(!ci.q.length)return;let n=ci.q.filter(e=>e.at<=ci.now);n.length&&(ci.q=ci.q.filter(e=>e.at>ci.now),n.forEach(e=>!e.off&&e.fn()))}var qr=n=>+String(n).replace(/[^\d.]/g,"")||0;_s.get("t")&&(ie.t=+_s.get("t"));Ic("sync");Oc();document.body.classList.add("sync","chain");var Se=null;try{Se=Bp(Pe("#gl"),{mobile:hd,later:Vs,tier:_s.has("q")?+_s.get("q"):void 0})}catch(n){console.error(n),document.body.classList.add("nogl")}Se&&Se.tier===0&&document.documentElement.classList.add("lowq");var bM=Pe(".title span");bM.innerHTML=[..."EDEN"].map((n,e)=>`<i class="ch" style="--i:${e}">${n}</i>`).join("");Zn(".sec").forEach(n=>Zn(".rv",n).forEach((e,t)=>e.style.setProperty("--d",t)));var wM=Zn("#nav a"),EM=new IntersectionObserver(n=>n.forEach(e=>{e.isIntersecting&&e.target.classList.add("in")}),{threshold:.18});Zn(".sec").forEach(n=>EM.observe(n));var vs=[];function dd(){let n=Zn(".sec"),e=document.documentElement.scrollHeight-innerHeight;vs=n.map(t=>Math.min(t.offsetTop,e))}dd();addEventListener("resize",()=>{dd(),Se&&Se.resize()});addEventListener("load",dd);function TM(){let n=scrollY,e=0;for(;e<vs.length-1&&n>=vs[e+1];)e++;if(e>=vs.length-1)return vs.length-1;let t=Math.max(1,vs[e+1]-vs[e]),i=(n-vs[e])/t;return e+Math.min(1,Math.max(0,(i-.12)/.76))}var Dm=()=>ea(Xi()),ys={minute:()=>ie.minute,roundNo:()=>Math.floor(ie.t/It.prizeRound),prize:Dm,fullBurn:()=>Uc(),minutePool:()=>ie.minutePool,plotPool:()=>ie.plotPool,reserveAll:()=>ie.floorReserve+(ie.round?ie.round.pool-ie.round.paid:0)+(ie.nextPool||0),reserveAllUsd:()=>ys.reserveAll()*It.bnbUsd,burned:()=>Xi(),addrs:()=>ie.cur.agg.size,myBurn:()=>ie.my.minuteBurn,roundId:()=>ie.round?ie.round.id:ie.roundId,roundPool:()=>ie.round?ie.round.pool-ie.round.paid:0,roundFilled:()=>ie.round?ie.round.filled:0,roundBurned:()=>ie.roundBurned,nextPool:()=>ie.nextPool||0,roundQuotaLeft:()=>ie.round?Math.max(0,It.quota-ie.round.filled):0,capPerPlot:()=>Vi(),myTierLeft:()=>zs(),jackpot:()=>Ge==="live"&&fe.snap?fe.snap.estJackpot:Ge?0:ta(Xi()).jackpot};function Ws(){return Ge==="live"?I("syncing"):Ge==="error"||Ge==="sync"?I("syncing"):Ge?I("soon"):I("naValue")}var AM=Dm,CM=()=>Ge==="live"&&fe.snap?fe.snap.estPool:Ge?0:AM();ys.prize=CM;ys.burned=()=>Ge==="live"&&fe.snap?fe.snap.burnedThisMinute:Ge?0:Xi();ys.roundNo=()=>Ge==="live"&&fe.snap?fe.snap.roundNo:Ge?0:Math.floor(ie.t/It.prizeRound);ys.fullBurn=()=>Ge==="live"&&fe.snap?fe.snap.fullPoolBurn:Ge?0:Uc();var RM=Zn("[data-k]").map(n=>({el:n,k:n.dataset.k,d:n.dataset.d!=null?+n.dataset.d:4,f:n.dataset.f,shown:null,last:""}));function fd(n){let e=!!Ge,t=e&&Ge==="live"&&fe.snap,i=e&&!t;for(let d of RM){let h;if(i)h=Ws();else if(Ge==="live"&&(d.k==="myBurn"||d.k==="addrs"))h=I(d.k==="myBurn"?"statMineLive":"statAddrsLive");else{let p=ys[d.k]?ys[d.k]():0;d.f==="raw"?h=p:(d.shown==null||typeof p!="number"?d.shown=p:d.shown+=(p-d.shown)*Math.min(1,n*6),Math.abs(p-d.shown)<Math.abs(p)*1e-6&&(d.shown=p),h=d.f==="tok"?Et(d.shown):d.f==="px"?zh(d.shown):Wt(d.shown,d.d))}h!==d.last&&(d.el.textContent=h,d.last=h)}let s=t?fe.snap.burnedThisMinute:e?0:Xi(),r=i?0:Math.min(1,s/It.minMinuteBurn);Tm("#burnBar",`scaleX(${r.toFixed(3)})`);let o=Pe("#burnProg");o&&(o.textContent=i?Ws():`${Et(s)} / 2,000,000`),Tm("#roundBar",`scaleX(${ie.round?(ie.round.filled/It.quota).toFixed(4):i?0:1})`);let a=ie.my.claim+ie.my.plotDiv>0||ie.my.plotsPending>0;Pe("#claimDot").classList.toggle("on",a),Pe("#claimDot2").classList.toggle("on",a);let l=Pe("#payNote");if(l){let d="";if(t){let h=fe.snap;h.started&&h.estPool<=0&&(h.burnedThisMinute<It.minMinuteBurn?d="":h.marketUsed>0?h.minutePool>0&&(d=I("payZeroQueued",{pool:Wt(h.minutePool,4)})):d=I("payZeroMkt"));let p=h.lastSettled;p&&p.paid&&(d+=(d?" ":"")+I("payLast",{n:Math.max(1,p.round-h.firstRound+1),bnb:Wt(p.paidBnb,4)}))}l.textContent!==d&&(l.textContent=d),l.hidden=!d}let c=Pe("#leadTxt");if(c)if(i)c.textContent=Ws();else if(t){let d=fe.snap;c.textContent=d.leadShort?d.leadShort+" \xB7 "+Et(d.leadBurned):I("leadEmpty")}else{let d=ta(s);c.textContent=d.lead==null?I("leadEmpty"):Bs(d.lead)+" \xB7 "+Et(d.leadAmt)}let u=Pe("#quotaMath");if(u&&ie.round){let d=ps(),h=Vi();u.textContent=I("quotaLine",{w:d.toFixed(1),cap:Et(h),total:Et(Ur()),used:Et(Ur()-zs()),left:Et(zs())})}PM(),da(),vd()}var Em={};function Tm(n,e){Em[n]!==e&&(Em[n]=e,Pe(n).style.transform=e)}function td(n,e){let t=Br(e,It.bnbUsd,It.supply);return e?`<div class="px-item"><span class="px-lab">${n}</span><b class="px-usd">${t.usd}</b><span class="px-cap">${I("cap")} ${t.cap}</span><span class="px-bnb">${t.bnb} ${I("perToken")}</span></div>`:`<div class="px-item"><span class="px-lab">${n}</span><span class="px-na">${Ws()}</span></div>`}var jc="";function PM(){let n=Ge==="live"?fe.snap:null,e=n?n.market.floorPrice||n.refPrice||n.round&&n.round.price||0:Bh(),t=n?n.market.used||n.market.spot||0:Dc(),i=Math.min(e||t,t||e),s=[Sn,e,t,ie.round&&ie.round.pool,ie.round&&ie.round.filled,ie.nextPool].join();if(s===jc)return;jc=s;let r=Pe("#heroPrices");r&&(r.innerHTML=td(I("pxMkt"),t)+td(I("pxFloor"),e)+td(I("pxRef"),i));let o=Pe("#tierPrice");o&&(o.innerHTML=ie.round?nm(Yr(),It.bnbUsd,It.supply,{empty:Ws()}):`<span class="px-na">${Ws()}</span>`);let a=Pe("#tierStatus");a&&(a.textContent=Ge&&Ge!=="live"?Ws():ie.round?I("tierOpen"):Qc()?I("tierOpening"):I("tierWait"))}var Mi=Pe("#clock"),Gr=Pe("#cN"),Wr=Pe("#cPh"),Xr=Pe("#cS"),rd=0,li="";function Hs(n){return String(n).padStart(2,"0")}function pd(n){if(rd)return;if(Ge&&Ge!=="live"){let a="--:--",l=Sn+"soon";l!==li&&(li=l,Gr.textContent=a),Mi.classList.remove("win","scan","cut"),Wr.textContent=Ge==="soon"?I("clockSoon"):I("syncing"),Xr.textContent=I("previewBadge");let c=Pe("#burnPhase");c&&(c.textContent=I("flapCtaSoon"));return}if(Ge==="live"){let a=oa();if(a.kind==="prestart"){let d=Hs(a.left/3600|0)+":"+Hs(a.left%3600/60|0)+":"+Hs(a.left%60),h=Sn+"pre"+d;if(h===li)return;li=h,Gr.textContent=d,Mi.classList.remove("win","scan","cut"),Wr.textContent=I("clockPrestart"),Xr.textContent=I("flapCta");return}let l=Hs(a.left/60|0)+":"+Hs(a.left%60),c=Sn+l+(a.win?"w":"c");if(c===li)return;li=c,Gr.textContent=l,Mi.classList.toggle("win",a.win),Mi.classList.remove("scan","cut"),Wr.textContent=a.win?I("clockWin"):I("clockLeft"),Xr.textContent=a.win?I("clockLate"):I("clockCertain");let u=Pe("#burnPhase");u&&(u.textContent=a.win?I("clockPhaseWin"):I("clockPhaseCertain"));return}let e=Os(ie.t)+n,t=e>=It.certain,i=Math.max(0,Math.ceil(It.prizeRound-e)),s=Hs(i/60|0)+":"+Hs(i%60),r=Sn+s+(t?"w":"c");if(r===li)return;li=r,Gr.textContent=s,Mi.classList.toggle("win",t),Mi.classList.remove("scan","cut"),Wr.textContent=t?I("clockWin"):I("clockLeft"),Xr.textContent=t?I("clockLate"):I("clockCertain"),Pe("#burnBtn").classList.toggle("win",t);let o=Pe("#burnPhase");o&&(o.textContent=t?I("clockPhaseWin"):I("clockPhaseCertain"))}var nd=Pe("#feed");function IM(n){if(hd||document.hidden)return;let e=document.createElement("div");for(e.className="fi"+(n.late?" late":"")+(n.who===$i?" me":""),e.innerHTML="<i></i><span></span><b></b>",e.children[1].textContent=Bs(n.who),e.children[2].textContent=Et(n.amount),nd.prepend(e);nd.children.length>5;)nd.lastChild.remove()}function tu(){let n=!!Ge&&Ge!=="live",e=n?0:ie.round?Yr():Ge==="live"?yM():0,t=e>0?Br(e,It.bnbUsd,It.supply):null,i=t&&!ie.round?" \xB7 "+(Qc()?I("tickOpening"):I("tickAfterGenesis")):"",r=(n?[[I("tickTaxRate"),I("tickTaxVal")],Ge==="soon"?[I("previewBadge"),I("soon")]:[I("previewBadgeErr"),I("syncing")]]:[[I("tickBurn"),Et(ie.burnedTotal)+" EDEN"],[I("tickTax"),Wt(ie.taxIn,2)+" BNB"],[I("tickFloor"),t?t.usd+" \xB7 "+I("cap")+" "+t.cap+i:Qc()?I("tickOpening"):I("tickAfterGenesis")],[I("tickFilled"),ie.round?Et(ie.round.filled)+" / 15M":I("naValue")],[I("tickPlots"),ie.plotsMinted+" / 2000"],[I("tickWeight"),ie.totalWeight.toFixed(1)],[I("tickTaxRate"),I("tickTaxVal")]]).map(([o,a])=>`<span><i>\u25C6</i> ${o}<b>${a}</b></span>`).join("");Pe("#tk").innerHTML=r+r}function Dn(n,e){let t=Pe("#toasts"),i=document.createElement("div");for(i.className="toast"+(e?" err":""),i.innerHTML=`<i>${e?"!":"\u2713"}</i><span></span>`,i.lastChild.textContent=n,t.appendChild(i);t.children.length>3;)t.firstChild.remove();setTimeout(()=>{i.classList.add("out"),setTimeout(()=>i.remove(),400)},e?3600:3e3)}var eu=(n,e,t=700)=>new Promise(i=>{let s=n.innerHTML;n.disabled=!0,n.innerHTML=`<span>${e}</span>`,setTimeout(()=>{n.disabled=!1,n.innerHTML=s,i()},t)}),md=n=>{let e=n.getBoundingClientRect();return[e.left+e.width/2,e.top+e.height/2]},Zc=Pe("#walletBtn");function gd(){Zc.classList.toggle("on",ie.wallet);let n=Zc.querySelector(".wb-full"),e=Zc.querySelector(".wb-short");ie.wallet?(n&&(n.textContent=I("walletOn")),e&&(e.textContent=I("walletOn"))):(n&&(n.textContent=I("wallet")),e&&(e.textContent=I("walletShort"))),Um(),Fm(),Ms()}Zc.onclick=()=>{if(Ge){let n=ra();n?window.open(n,"_blank","noopener,noreferrer"):Dn(I("flapCtaSoon"));return}ie.wallet=!ie.wallet,ie.wallet||(ie.approved=!1),gd(),Dn(ie.wallet?I("toastConnect"):I("toastDisconnect"))};var Xs=Pe("#burnBtn");function Um(){Xs.querySelector("span").textContent=ie.wallet?ie.approved?I("burn"):I("approve"):I("wallet")}var Si=Pe("#amt");function Fm(){let n=Pe("#autoPlot");if(!n)return;let e=Gi().length,t=jo();n.textContent=e>0?I("autoPlotN",{n:e,c:t.common,r:t.rare,e:t.epic,w:t.weight.toFixed(1)}):I("autoNone")}function da(){let n=Pe("#burnPreview")||Pe("#tierPreview");if(!n)return;let e=qr(Si.value),t=Lc(e);n.innerHTML=`<div class="tp"><b>${I("previewTitle")}</b><span>${I("previewCommon")} ${t.common}</span><span>${I("previewRare")} ${t.rare}</span><span>${I("previewEpic")} ${t.epic}</span><span>${I("previewWeight")} ${t.weight.toFixed(1)}</span>${e&&e<It.minBurnTx?"<i>"+I("previewBelow")+"</i>":""}</div>`}function vd(){let n=Pe("#actPrefill");if(!n)return;let e=Fr();if(e.need<=0){n.innerHTML="";return}if(e.active){n.innerHTML=`<button type="button" class="act-ok">${I("actOk",{w:e.weight.toFixed(1)})}</button>`;return}n.innerHTML=`<button type="button" id="actFill">${I("actNeed",{n:Et(e.left)})}</button>`;let t=Pe("#actFill");t&&(t.onclick=()=>{Si.value=Math.ceil(e.left).toLocaleString("en-US"),da()})}Si.addEventListener("input",()=>{let n=qr(Si.value);Si.value=n?n.toLocaleString("en-US"):"",da(),nu()});Zn(".dk-chips button").forEach(n=>n.onclick=()=>{let e=n.dataset.a==="max"?ie.my.tok:+n.dataset.a;Si.value=Math.floor(e).toLocaleString("en-US"),da()});async function LM(){if(Ge){let e=ra();e?window.open(e,"_blank","noopener,noreferrer"):Dn(I("flapCtaSoon"));return}if(!ie.wallet){ie.wallet=!0,gd(),Dn(I("toastConnectShort"));return}if(!ie.approved){await eu(Xs,I("approving"),900),ie.approved=!0,Um(),Dn(I("toastApprove"));return}let n=qr(Si.value);try{if(n<It.minBurnTx)throw new Error(I("errMin"));if(n>ie.my.tok)throw new Error(I("errBal"));let e=md(Xs);await eu(Xs,I("confirming"),650);let t=Nc($i,n);Se&&Se.beamIn(t.late,n,e),t.minted&&t.minted.forEach(r=>Se&&Se.plotBurst(r,!0)),fa();let i=t.preview,s=Gi().length;Dn(t.late?I("toastLateBurn",{n:Et(n)})+(i&&i.n?I("toastLazy",{n:i.n}):""):I("toastBurnOk",{n:Et(n)})+(i&&i.n?I("toastMint",{c:i.common,r:i.rare,e:i.epic}):s?I("toastHavePlots",{n:s}):I("toastPoolOnly"))),Fm(),vd()}catch(e){Dn(e.message,!0)}}Xs.onclick=LM;Pe("#heroBurn").onclick=()=>{if(Ge){let n=document.querySelector("a.flap-cta:not(.off)");if(n&&n.href&&!n.href.endsWith("#")){n.click();return}Dn(I("flapCtaSoon"));return}Zi("open"),Si.focus(),Si.select(),Xs.animate([{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}],{duration:500})};var NM=Pe("#sheet"),aa=Pe("#shBody"),bn=null;function $r(n){bn=n===bn?null:n,bn&&Zi("open"),NM.classList.toggle("on",!!bn),Zn("#shTabs button[data-t]").forEach(e=>e.classList.toggle("on",e.dataset.t===bn)),Ms(!0)}Zn("[data-t]").forEach(n=>n.onclick=()=>$r(n.dataset.t));Pe("#shX").onclick=()=>$r(null);var Bm="eden:dock",id=Pe("#dock"),ua=Pe("#dockBack"),Am=Pe("#dockMin"),od=()=>matchMedia("(max-width:820px)").matches;function DM(){try{let n=localStorage.getItem(Bm);if(n==="open"||n==="min")return n}catch{}return od()?"min":"open"}var yi=DM();function nu(){let n=Pe("#dockMinAmt");n&&(n.textContent=Ge?Ge==="live"?I("flapCta"):I("flapCtaSoon"):Si.value||I("naValue"));let e=Pe("#dockMinStat");if(e){let t=Fr();e.textContent=t.need<=0||t.active?I("dockReady"):I("actNeed",{n:Et(t.left)})}}function Zi(n,e=!0){if(yi=n==="min"?"min":"open",id&&(id.classList.toggle("min",yi==="min"),id.classList.toggle("open",yi==="open")),yi==="min"&&bn&&$r(null),ua){let s=yi==="open"&&od();ua.hidden=!s,ua.classList.toggle("on",s)}let t=yi==="open",i=Pe("#dkPanel");if(i&&i.setAttribute("aria-hidden",t?"false":"true"),Am&&Am.setAttribute("aria-hidden",t?"true":"false"),document.documentElement.style.setProperty("--dockH",(yi==="min"?56:od()?118:76)+"px"),nu(),e)try{localStorage.setItem(Bm,yi)}catch{}}Zi(yi,!1);["dockExpand","dockExpand2"].forEach(n=>{let e=Pe("#"+n);e&&(e.onclick=()=>Zi("open"))});var Cm=Pe("#dockCollapse");Cm&&(Cm.onclick=()=>Zi("min"));ua&&(ua.onclick=()=>{bn?$r(null):Zi("min")});(function(){let e=Pe("#dockHandle");if(!e)return;let t=null,i=o=>{t=o},s=o=>{t!=null&&o-t>36&&(t=null,Zi("min"))},r=()=>{t=null};e.addEventListener("pointerdown",o=>{e.setPointerCapture(o.pointerId),i(o.clientY)}),e.addEventListener("pointermove",o=>s(o.clientY)),e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("click",()=>Zi("min"))})();var ha=Pe("#moreBtn"),xs=Pe("#toolsPop");function ad(n){!xs||!ha||(xs.classList.toggle("open",n),ha.setAttribute("aria-expanded",n?"true":"false"))}ha&&xs&&(ha.onclick=n=>{n.stopPropagation(),ad(!xs.classList.contains("open"))},document.addEventListener("pointerdown",n=>{xs.classList.contains("open")&&(xs.contains(n.target)||ha.contains(n.target)||ad(!1))}));document.addEventListener("keydown",n=>{if(n.key==="Escape"){if(xs&&xs.classList.contains("open")){ad(!1);return}if(Gs&&Gs.classList.contains("on")){Gs.classList.remove("on");return}if(bn){$r(null);return}yi==="open"&&Zi("min")}});var Rm="";function Ms(n){if(!bn)return;let e=ie.sel-1,t=bn+"|"+ie.wallet+"|"+(bn==="claim"?[ie.my.claim,ie.my.credit,ie.my.plotDiv,ie.my.plotsPending].map(s=>s.toFixed(6)):bn==="plot"?[e,Vt[e],gn[e],Gi().length]:[ie.round&&ie.round.id,ie.round&&ie.round.filled|0,ie.my.tok|0]).join(",");if(!n&&t===Rm)return;Rm=t;let i=document.activeElement;if(!(!n&&i&&aa.contains(i)&&i.tagName==="INPUT"))if(bn==="claim"){let s=ie.my.claim+ie.my.plotDiv,r=Dh();aa.innerHTML=`<div class="sb-row"><div class="sb-k"><span>${I("claimTotal")}</span><b class="big">${Wt(s,5)} BNB</b></div>
      <div class="sb-k"><span>${I("claimRound")}</span><b>${Wt(ie.my.claim,5)}</b></div><div class="sb-k"><span>${I("claimPlot")}</span><b>${Wt(ie.my.plotDiv,5)}</b></div><div class="sb-k"><span>${I("claimPendingPlots")}</span><b>${I("claimPendingN",{n:ie.my.plotsPending})}</b></div>
      <div class="sb-k"><span>${I("sheetYourPlots")}</span><b>${I("myPlotsLine",{c:r.common,r:r.rare,e:r.epic,w:r.weight.toFixed(1)})}</b></div>
      <div class="sb-k"><span>${I("sheetAct")}</span><b>${r.active?I("sheetActOn"):I("sheetActOff",{n:Et(r.left)})}</b></div>
      <div class="sb-act"><button class="btn-l" id="claimBtn">${I("claimBtn")}</button></div></div>
      <p class="sb-note">${I("claimNote")}</p>`,Pe("#claimBtn").onclick=async o=>{let a=o.currentTarget;try{if(!ie.wallet)throw new Error(I("needWallet"));let l=md(a);await eu(a,I("claiming"),700);let c=Oh();Se&&Se.claimFx(l),c.plots.forEach(u=>Se&&Se.plotBurst(u,!0)),fa(),Dn(I("toastClaimed",{bnb:Wt(c.bnb,5)})+(c.plots.length?I("toastClaimPlots",{n:c.plots.length}):"")+I("toastSim")),Ms(!0)}catch(l){Dn(l.message,!0)}}}else if(bn==="plot"){let s=Vt[e]===$i,r=Gi(),o=e<ie.plotsMinted,a=o?Dr[gn[e]]:I("unissued"),l=o?_i(e):0,c=jo(),u=Fr();aa.innerHTML=`<div class="sb-row"><div class="sb-k"><span>${I("plot")}</span><b>#${ie.sel}${s?I("mineMark"):""}</b></div>
      <div class="sb-k"><span>${I("plotTier")}</span><b class="big">${a} \xB7 ${I("weight")} ${l.toFixed(1)}</b></div>
      <div class="sb-k"><span>${I("plotOwner")}</span><b>${o?s?I("plotYouBound"):Bs(Vt[e])+I("plotBound"):I("plotUnissued")}</b></div>
      <div class="sb-k"><span>${I("plotLastDiv")}</span><b>${Wt(ks[e],5)} BNB</b></div>
      <div class="sb-k"><span>${I("plotMine")}</span><b>${I("myPlotsLine",{c:c.common,r:c.rare,e:c.epic,w:c.weight.toFixed(1)})}</b></div>
      <div class="sb-k"><span>${I("sheetAct")}</span><b>${u.active?I("sheetActOn"):I("plotActOff",{n:Et(u.left)})}</b></div></div>
      <div class="chips">${r.map(d=>`<button data-p="${d+1}">#${d+1} ${Dr[gn[d]]}</button>`).join("")||'<span class="sb-note">'+I("noPlots")+"</span>"}</div>
      <p class="sb-note">${I("plotNote")}</p>`,Zn(".chips button[data-p]",aa).forEach(d=>d.onclick=()=>Om(+d.dataset.p,!0))}else{let s=ie.round,r=Gi().length,o=s?Br(Yr(),It.bnbUsd,It.supply):null,a=s?zs():0;if(aa.innerHTML=s?`<div class="sb-row"><div class="sb-k"><span>${I("tierN",{id:s.id})}</span><b class="big" style="color:var(--ember)">${o.usd}</b></div>
      <div class="sb-k"><span>${I("capLbl")}</span><b>${o.cap}</b></div><div class="sb-k"><span>${I("bnbPrice")}</span><b>${o.bnb} ${I("bnbEach")}</b></div>
      <div class="sb-k"><span>${I("quotaLeft")}</span><b>${Et(It.quota-s.filled)}</b></div><div class="sb-k"><span>${I("nextPool")}</span><b>${Wt(ie.nextPool||0,4)} BNB</b></div>
      <div class="sb-k"><span>${I("capPerW")}</span><b>${Et(Vi())}</b></div>
      <div class="sb-k"><span>${I("myQuota")}</span><b>${ps().toFixed(1)} \xD7 ${Et(Vi())} = ${Et(Ur())}</b></div>
      <div class="sb-k"><span>${I("yourLeft")}</span><b>${Et(a)}</b></div>
      <div class="sb-k"><span>${I("yourEden")}</span><b>${Et(ie.my.tok)}</b></div></div>
      ${r?`<div class="sb-row" style="margin-top:14px"><label class="sb-f">${I("sellAmt")}<input id="sellAmt" value="1,000,000"></label><div class="sb-k"><span>${I("sellOut")}</span><b id="sellOut">\u2014</b></div><label class="sb-f">${I("sellMin")}<input id="sellMin" value=""></label><div class="sb-act"><button class="btn-l" id="sellBtn">${I("sellDo")}</button></div></div>`:`<p class="sb-note">${I("onlyHolders")}</p>`}
      <p class="sb-note">${I("roundNote")}</p><p class="sb-note" style="color:var(--ember)">${I("roundRisk")}</p><p class="sb-note">${I("usdNote")}</p>`:`<p class="sb-note">${Qc()?I("openingTier"):I("waitTier")} ${I("noTimer")}</p>`,s){let l=()=>{let c=Fc(qr(Pe("#sellAmt").value));Pe("#sellOut").textContent=Wt(c.out,5)+" BNB \u2248 "+Wt(c.out*It.bnbUsd,2)+" USDT",Pe("#sellMin").dataset.touched||(Pe("#sellMin").value=Wt(c.out*.99,5))};Pe("#sellAmt").oninput=l,Pe("#sellMin").oninput=()=>Pe("#sellMin").dataset.touched=1,l(),Pe("#sellBtn").onclick=async c=>{let u=c.currentTarget;try{if(!ie.wallet)throw new Error(I("needWallet"));await eu(u,I("confirming"),700);let d=Bc($i,qr(Pe("#sellAmt").value),qr(Pe("#sellMin").value));Dn(I("toastSell",{take:Et(d.take),out:Wt(d.out,5)})),Ms(!0)}catch(d){Dn(d.message,!0)}}}}}Pe("#roundSell").onclick=()=>{bn!=="round"&&$r("round")};function UM(n){let e=gn[n];return e===3?.92:e===2?.5:.12}function fa(){Se&&Se.setPlots(n=>[n<ie.plotsMinted?UM(n):0,Vt[n]===$i?1:0,n<ie.plotsMinted?1:0])}fa();var la=-1;function FM(n){let e=Vt[n]===$i,t=n<ie.plotsMinted,i=t?Dr[gn[n]]:I("unissued"),s=t?_i(n):0;return`<div class="pl-h"><b>#${n+1}</b>${e?'<span class="mine">'+I("legendMine")+"</span>":""}<span>${t?I("landlord")+" "+Bs(Vt[n])+I("soulbound"):I("plotUnissued")}</span></div>
    <div class="kv"><div><span>${I("plotTier")}</span><b class="hl">${i}</b></div><div><span>${I("weight")}</span><b>${s.toFixed(1)}</b></div>
    <div><span>${I("plotLastDiv")}</span><b>${Wt(ks[n],5)} BNB</b></div><div><span>${I("transfer")}</span><b>${I("noTransfer")}</b></div></div>
    ${t?`<p class="hint">${I("plotOnlyBurn")}</p>`:""}`}var Pm="";function pa(n){let e=ie.sel-1,t=[Sn,e,Vt[e],gn[e],ie.plotsMinted>e].join();!n&&t===Pm||(Pm=t,Pe("#plotCard").innerHTML=FM(e),Se&&Se.setSelHover(e,la))}function Om(n,e){ie.sel=n,pa(!0),bn==="plot"&&Ms(!0),e&&Se&&Se.focusPlot(n-1)}pa(!0);var Wc=Pe("#hov"),Kc=-1,ca=-1,ld=!1,Yi=null,Ss=0,km=Pe("#gl");addEventListener("pointermove",n=>{Kc=n.clientX,ca=n.clientY,ld=!0,Se&&Se.mouse(n.clientX/innerWidth-.5,-(n.clientY/innerHeight-.5)),Yi&&Se&&(Se.drag(n.clientX-Yi[0],n.clientY-Yi[1],!0),Yi=[n.clientX,n.clientY,Yi[2]+Math.abs(n.movementX||0)])},{passive:!0});km.addEventListener("pointerdown",n=>{Math.abs(Ss-2)<.4&&(Yi=[n.clientX,n.clientY,0])});addEventListener("pointerup",n=>{if(Yi&&Se&&(Se.drag(0,0,!1),Yi[2]<6)){let e=Se.pickPlot(n.clientX,n.clientY);e>=0&&Om(e+1)}Yi=null});function BM(){if(!ld||!Se)return;if(ld=!1,Math.abs(Ss-2)>.35||ca<0){la>=0&&(la=-1,Wc.classList.remove("on"),Se.setSelHover(ie.sel-1,-1));return}let e=document.elementFromPoint(Kc,ca)===km?Se.pickPlot(Kc,ca):-1;if(e!==la){if(la=e,Se.setSelHover(ie.sel-1,e),e>=0){let t=e<ie.plotsMinted;Wc.innerHTML=`<b>#${e+1}${Vt[e]===$i?I("mineMark"):""}</b>${t?Dr[gn[e]]+" \xB7 "+I("hoverWeight")+" "+_i(e).toFixed(1):I("hoverUnissued")}<br>${I("plotLastDiv")} ${Wt(ks[e],5)} BNB<br>${t?I("hoverBound"):""}`}Wc.classList.toggle("on",e>=0)}e>=0&&(Wc.style.transform=`translate3d(${Math.min(Kc+16,innerWidth-200)}px,${ca+16}px,0)`)}ms("burn",n=>{n.who!==$i&&Ss<1.6&&Se&&Se.beamIn(n.late,n.amount),IM(n)});ms("income",()=>Se&&Se.income());ms("sell",n=>Se&&Se.holeKick(n.who===$i?1.2:.35));ms("roundOpen",n=>{if(Se&&Se.holeKick(1.5),Ss>2.5&&Ss<3.5){let e=Br(Yr(),It.bnbUsd,It.supply);Dn(I("toastRoundOpen",{id:n.id,usd:e.usd,cap:e.cap}))}});var OM=0;ms("tick",()=>{++OM%15===0&&fa()});var Gs=Pe("#result"),Im=0;ms("minute",n=>{if(ie.speed>10||Ss>1.2||document.hidden){n.mine>0&&Dn(I("toastRoundWin",{m:n.m,bnb:Wt(n.mine,5)})),Se&&Ss<1.2&&(Se.setCut(n.cutoff),Se.explode(n),Vs(()=>Se.setCut(-1),1200));return}rd=1,Mi.classList.remove("win"),Mi.classList.add("scan"),Wr.textContent=I("clockReveal"),Xr.textContent=I("clockRevealSub");let t=ie.speed>1?.5:1.5,i=ci.now,s=()=>{let o=540+Math.floor(Math.random()*61);Gr.textContent=o,Se&&Se.scan(o/10),ci.now-i>t?r():Vs(s,70)};s();function r(){Se&&(Se.scan(-1),Se.setCut(n.cutoff/10)),Mi.classList.remove("scan"),Mi.classList.add("cut"),Gr.textContent=n.cutoff,Wr.textContent=I("clockCut"),Xr.textContent=I("clockCutSub",{n:n.cutoff});let o=Pe("#flash"),a=Pe("#clock").getBoundingClientRect();o.style.setProperty("--fx",a.left+a.width/2+"px"),o.style.setProperty("--fy",a.top+a.height/2+"px"),Hr||(Vr=1);let l=n.mine>0?md(Pe('.dk-tabs button[data-t="claim"]').offsetParent?Pe('.dk-tabs button[data-t="claim"]'):Xs):null;Se&&Se.explode(n,l),Gs.className="result on"+(n.rolled?" rolled":"");let c='<button type="button" class="rx" id="resX" aria-label="\xD7">\xD7</button>';Gs.innerHTML=c+(n.rolled?`<div class="rbox"><div class="rk">${I("resMiss",{m:n.m})}</div><div class="rv1">${Et(n.total)} ${I("tokenUnit")}</div><div class="rv2">${I("resMissBody")}</div></div>`:`<div class="rbox"><div class="rk">${I("resHit",{m:n.m,cut:n.cutoff})}</div><div class="rv1">${Wt(n.prize,4)} BNB</div><div class="rv2">${I("resSplit")} ${Wt(n.pro||n.prize,4)} \xB7 ${I("resJack")} ${Wt(n.jackpot||0,4)} BNB${n.win!=null?" \u2192 "+Bs(n.win):""} \xB7 ${I("resCounted")} ${Et(n.total)} ${I("tokenUnit")}${n.roll?" \xB7 "+Et(n.roll)+" "+I("resMissed"):""}</div>${n.mine>0?`<div class="rme">${I("resYouGot",{bnb:Wt(n.mine,5)})}</div>`:n.myIn===0&&ie.my.minuteBurn>0?`<div class="rme">${I("resYouMissed")}</div>`:""}</div>`);let u=Pe("#resX");u&&(u.onclick=d=>{d.stopPropagation(),Gs.classList.remove("on")}),MM(Im),Im=Vs(()=>Gs.classList.remove("on"),5200),Vs(()=>{rd=0,li="",Se&&Se.setCut(-1)},ie.speed>1?900:2600)}});Zn("#spd button").forEach(n=>n.onclick=()=>{ie.speed=+n.dataset.s,Zn("#spd button").forEach(e=>e.classList.toggle("on",e===n))});var cd=Pe("#dbg");_s.get("debug")==="1"&&cd.classList.add("on");var ud=performance.now(),Xc=0,qc=1,Jc=!0,nn={frames:0,sum:0,worst:0,hist:[],tierLog:[]},Yc=[],sd=0,qi=[0,0,0],$c=[1,1,1];function kM(n){let e=Math.round(Math.min(3,n));wM.forEach((t,i)=>t.classList.toggle("on",i===e))}var Lm=-1,Vr=0,zM=Pe("#flash");function xd(n){if(!Jc)return;requestAnimationFrame(xd);let e=Math.min(.1,(n-ud)/1e3);ud=n,zm(e)}function zm(n){if(ci.now+=n,SM(),Vr>0&&(Vr=Math.max(0,Vr-n*1.1),zM.style.opacity=(Vr*Vr*.35).toFixed(3)),Hr&&(qc+=n,qc<.5))return;let e=kh(Hr?qc:n);Hr&&(qc=0);let t=TM();Ss=t;let i=Os(ie.t)+e;if(Se){let r=ie.round;qi[0]=ie.minutePool,qi[1]=ie.plotPool,qi[2]=ys.reserveAll();let o=Math.max(qi[0],qi[1],qi[2])||1;$c[0]=qi[0]/o,$c[1]=qi[1]/o,$c[2]=qi[2]/o;let a=Ge==="live"&&fe.snap?fe.snap.burnedThisMinute:Ge?0:Xi(),l=Ge==="live"?oa().win:Ge?!1:i>=It.certain,c=Ge==="live"?oa().sec:Ge?0:i;Se.frame(n,{sp:t,energy:.2+Math.min(.8,a/7e6),win:l,sec:c,poolScale:$c,fill:r?r.filled/It.quota:Ge&&Ge!=="live"?0:1},Hr),BM()}Xc+=n,Xc>=.25&&(pd(e),fd(Xc),Xc=0);let s=Math.round(Math.min(3,t));if(s!==Lm&&(Lm=s,kM(t)),nn.frames++,nn.sum+=n,nn.worst=Math.max(nn.worst,n),!hd&&!Hr&&!_s.has("q")&&Se&&!Se.lost){Yc.push(n);let r=0;for(let o of Yc)r+=o;if(r>=1){let o=Yc.length/r;Yc=[],sd++,sd>3&&(o<40?nn.low=(nn.low||0)+1:nn.low=0,nn.low>=3&&Se.stepDownQuality()&&(sd=1,nn.low=0,nn.tierLog.push({t:performance.now(),tier:Se.tier,dpr:Se.dpr,fps:+o.toFixed(1)})))}}if(cd.classList.contains("on")&&nn.frames%20===0){let r=Se?Se.renderer.info.render:{};cd.textContent=`fps ${(1/n).toFixed(0)}  dpr ${Se&&Se.dpr?Se.dpr.toFixed(2):"-"}  tier ${Se?Se.tier:"-"}
calls ${r.calls}  tris ${r.triangles}
js ${(Se?Se.timing.js/Math.max(1,Se.timing.frames):0).toFixed(2)}ms`}}Nm||requestAnimationFrame(xd);var Hm=()=>{tu(),pa(),Ms(),nu(),Vs(Hm,1e3)};Vs(Hm,1e3);tu();function HM(n){if(!Nm){if(!n){Jc=!1;return}Jc||(Jc=!0,ud=performance.now(),requestAnimationFrame(xd))}}document.addEventListener("visibilitychange",()=>{if(document.hidden)try{Se&&Se.snapshotPoster&&Se.snapshotPoster(),Se&&Se.holdCanvas&&Se.holdCanvas()}catch{}HM(!document.hidden)});Hp();function Vm(){li="",jc="",gd(),pd(0),fd(1),tu(),pa(!0),Ms(!0),da(),vd(),nu(),_d()}zp(Vm);Vm();function VM(){let n=ra(),e=n?I("flapCta"):I("flapCtaSoon");document.querySelectorAll("a.flap-cta").forEach(t=>{t.textContent=e,t.setAttribute("data-i18n",n?"flapCta":"flapCtaSoon"),n?(t.href=n,t.removeAttribute("aria-disabled"),t.classList.remove("off")):(t.href="#hero",t.setAttribute("aria-disabled","true"),t.classList.add("off"))})}function _d(){let n=Ge||"soon";document.body.classList.remove("soon","live","error","sync"),document.body.classList.add("chain",n);let e=document.querySelector(".pv b"),t=document.querySelector(".pv span"),i=n==="live"?"previewBadgeLive":n==="soon"?"previewBadge":"previewBadgeErr",s=n==="live"?"previewNoteLive":n==="error"?"previewNoteErr":n==="sync"?"previewNoteSync":"previewNote";e&&(e.setAttribute("data-i18n",i),e.textContent=I(i)),t&&(t.setAttribute("data-i18n",s),t.textContent=I(s)),document.title=I("docTitle")+" \xB7 "+I(i),VM();let r=document.querySelector('[data-k="myBurn"]');r&&n!=="live"?r.textContent=n==="soon"?I("soon"):I("syncing"):r&&n==="live"&&(r.textContent=I("statMineLive"));let o=document.querySelector('[data-k="addrs"]');o&&n==="live"&&(o.textContent=I("statAddrsLive"))}Gc(()=>{Ic(fe.mode),fe.mode==="live"?Jh(na):fe.mode!=="live"&&Oc(),_d(),li="",jc="",pd(0),fd(1),tu(),pa(!0),Ms(!0),fa()});Qh();_d();window.__eden={S:ie,E:na,G:Se,Live:ed,perf:nn,stats(){let n=Se.renderer.info.render;return{calls:n.calls,triangles:n.triangles,points:n.points,tier:Se.tier,dpr:Se.dpr,jsAvgMs:Se.timing.js/Math.max(1,Se.timing.frames),frames:nn.frames,avgDt:nn.sum/nn.frames,tierLog:nn.tierLog}},step(n,e=1/30){for(let t=0;t<n;t++)zm(e)},resetTiming(){Se.timing.js=0,Se.timing.frames=0,nn.frames=0,nn.sum=0,nn.worst=0},live:()=>jh()}});GM();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
