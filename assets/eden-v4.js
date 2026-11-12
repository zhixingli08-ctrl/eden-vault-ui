(()=>{var jf=Object.defineProperty;var Je=(i,t,e)=>()=>{if(e)throw e[0];try{return i&&(t=i(i=0)),t}catch(n){throw e=[n],n}};var tp=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},ep=(i,t)=>{for(var e in t)jf(i,e,{get:t[e],enumerable:!0})};function np(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ip(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function md(){let i=Lr("canvas");return i.style.display="block",i}function jc(...i){let t="THREE."+i.shift();Us?Us("log",t,...i):console.log(t,...i)}function gd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=gd(i);let t="THREE."+i.shift();if(Us)Us("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function $t(...i){i=gd(i);let t="THREE."+i.shift();if(Us)Us("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Tr(...i){let t=i.join(" ");t in su||(su[t]=!0,Vt(...i))}function _d(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Zs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function th(i,t){return(i%t+t)%t}function sp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function rp(i,t,e){return i!==t?(e-i)/(t-i):0}function Ar(i,t,e){return(1-e)*i+e*t}function ap(i,t,e,n){return Ar(i,t,1-Math.exp(-e*n))}function op(i,t=1){return t-Math.abs(th(i,t*2)-t)}function lp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function up(i,t){return i+Math.random()*(t-i)}function dp(i){return i*(.5-Math.random())}function fp(i){i!==void 0&&(ru=i);let t=ru+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pp(i){return i*wr}function mp(i){return i*Fs}function gp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function _p(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function eh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*h,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vd(i,t){if(t.constructor===Float32Array)return i;let e=nh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function yd(i,t){if(t.constructor===Float32Array)return i;let e=nh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}function vp(){let i={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rr]:{primaries:t,whitePoint:n,transfer:Pr,toXYZ:ou,fromXYZ:lu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:ou,fromXYZ:lu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}function dc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function yc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ji.fromArray(i,r);let o=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Up(i,t,e,n,s,r,a,o){let l;if(t.side===Qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===zi,o),l===null)return null;Wa.copy(o),Wa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Wa);return c<e.near||c>e.far?null:{distance:c,point:Wa.clone(),object:i}}function Xa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ka),i.getVertexPosition(l,Ha),i.getVertexPosition(c,Ga);let h=Up(i,t,e,n,ka,Ha,Ga,vu);if(h){let f=new B;Li.getBarycoord(vu,ka,Ha,Ga,f),s&&(h.uv=Li.getInterpolatedAttribute(s,o,l,c,f,new Wt)),r&&(h.uv1=Li.getInterpolatedAttribute(r,o,l,c,f,new Wt)),a&&(h.normal=Li.getInterpolatedAttribute(a,o,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new B,materialIndex:0};Li.getNormal(ka,Ha,Ga,u.normal),h.face=u,h.barycoord=f}return h}function Za(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(xo.fromBufferAttribute(o,s),vo.fromBufferAttribute(o,r),e.distanceSqToSegment(xo,vo,wc,Eu)>n)return;wc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(wc);if(!(c<t.near||c>t.far))return{distance:c,point:Eu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function Cu(i,t,e,n,s,r,a){let o=Ic.distanceSqToPoint(i);if(o<e){let l=new B;Ic.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ru(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ru(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function Ru(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ih(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}function Ps(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Qa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Sd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Hp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Gp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Sd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Hp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function Pu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Iu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}function Vp(){this._document.hidden===!1&&this.reset()}function Uu(i,t){return i.distance-t.distance}function Dc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Dc(r[a],t,e,!0)}}function ah(i,t,e,n){let s=Qp(n);switch(e){case qc:return i*t;case Vo:return i*t/s.components*s.byteLength;case Wo:return i*t/s.components*s.byteLength;case ki:return i*t*2/s.components*s.byteLength;case Xo:return i*t*2/s.components*s.byteLength;case Yc:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case qo:return i*t*4/s.components*s.byteLength;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:case Ko:return Math.max(i,16)*Math.max(t,8)/4;case Yo:case Zo:return Math.max(i,8)*Math.max(t,8)/2;case Jo:case Qo:case tl:case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jo:case la:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _l:case xl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ca:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qp(i){switch(i){case bn:case Gc:return{byteLength:1,components:1};case $s:case Vc:case je:return{byteLength:2,components:1};case Ho:case Go:return{byteLength:2,components:4};case Gn:case ko:case Ln:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Fu,Uc,Ou,Zr,Bu,Xs,zi,Qe,fn,pi,qs,rs,Fc,Oc,zu,as,ku,Hu,Gu,Vu,Wu,Xu,qu,Yu,Bc,zc,$u,Zu,Ku,Ju,Qu,ju,td,ed,nd,io,so,ro,Ns,ao,oo,lo,co,kc,id,sd,Qn,Kr,Jr,Qr,jr,ta,ea,na,Hc,os,Ys,Oo,Bo,ho,$n,uo,qe,rd,ia,dn,zo,mi,bn,Gc,Vc,$s,ko,Gn,Ln,je,Ho,Go,ls,Wc,Xc,qc,Yc,Vn,hi,gi,Vo,Wo,ki,Xo,qo,sa,ra,aa,oa,Yo,$o,Zo,Ko,Jo,Qo,jo,tl,el,la,nl,il,sl,rl,al,ol,ll,cl,hl,ul,dl,fl,pl,ml,gl,_l,xl,vl,yl,Ml,ca,Sl,Cr,fo,eo,Ac,Cc,Rc,Pc,ad,$c,od,_i,hn,Rr,Pr,pe,no,ld,cd,hd,ud,Zc,dd,fd,Kc,Jc,pd,bl,Qc,Pn,Ir,su,Us,xd,Zn,sn,ru,wr,Fs,ha,oh,Wt,Mn,lh,B,oc,au,ch,Jt,lc,ou,lu,ae,vs,po,yp,Os,Mp,hc,mn,hh,Ce,mo,ke,Dr,go,Fo,me,ys,On,Sp,bp,Ai,Pa,vn,cu,hu,Di,Bs,Ep,uu,Ms,si,Ia,xr,Tp,wp,du,fu,pu,mu,Ap,Ss,uc,gn,an,Cp,zs,Md,Ci,La,Qt,rn,Nr,Bn,ri,fc,ai,bs,Es,gu,pc,mc,gc,_c,xc,vc,Li,Kn,oi,zn,Da,Ts,ws,As,Ri,Pi,Qi,vr,Na,Ua,ji,Fe,Fa,Rp,ze,Ur,Fr,xe,Pp,yr,Mc,In,Ip,Rn,Sc,Cs,yn,Mr,Xe,Re,bc,Lp,Dp,kn,Np,ui,li,Ec,Oa,Ba,ns,di,_u,ts,za,xu,ka,Ha,Ga,Tc,Va,vu,Wa,ge,Or,is,Rs,yu,qa,Mu,Fp,Sr,br,Br,es,Op,Ya,ss,Su,_o,ks,xo,vo,bu,Er,$a,wc,Eu,yo,Tu,wu,zr,Mo,Au,Ic,Ka,Ja,Ni,kr,fi,Hr,Gr,Hs,Vr,So,Jn,Hn,Ui,Wr,xi,zp,kp,he,Gs,bo,Eo,Fi,To,wo,Ao,Co,Sn,Oi,Ro,Po,Io,Xr,Bi,Lo,Do,bd,No,ja,to,Yn,qr,Ii,Lu,Du,un,Vs,Is,Ls,Ws,Uo,Yr,sh,Wp,rh,Xp,qp,Yp,$p,Zp,Kp,Jp,Lc,Ee,bv,Nu,$r,uh,Nc,dh=Je(()=>{Fu=0,Uc=1,Ou=2,Zr=1,Bu=2,Xs=3,zi=0,Qe=1,fn=2,pi=0,qs=1,rs=2,Fc=3,Oc=4,zu=5,as=100,ku=101,Hu=102,Gu=103,Vu=104,Wu=200,Xu=201,qu=202,Yu=203,Bc=204,zc=205,$u=206,Zu=207,Ku=208,Ju=209,Qu=210,ju=211,td=212,ed=213,nd=214,io=0,so=1,ro=2,Ns=3,ao=4,oo=5,lo=6,co=7,kc=0,id=1,sd=2,Qn=0,Kr=1,Jr=2,Qr=3,jr=4,ta=5,ea=6,na=7,Hc=300,os=301,Ys=302,Oo=303,Bo=304,ho=1e3,$n=1001,uo=1002,qe=1003,rd=1004,ia=1005,dn=1006,zo=1007,mi=1008,bn=1009,Gc=1010,Vc=1011,$s=1012,ko=1013,Gn=1014,Ln=1015,je=1016,Ho=1017,Go=1018,ls=1020,Wc=35902,Xc=35899,qc=1021,Yc=1022,Vn=1023,hi=1026,gi=1027,Vo=1028,Wo=1029,ki=1030,Xo=1031,qo=1033,sa=33776,ra=33777,aa=33778,oa=33779,Yo=35840,$o=35841,Zo=35842,Ko=35843,Jo=36196,Qo=37492,jo=37496,tl=37488,el=37489,la=37490,nl=37491,il=37808,sl=37809,rl=37810,al=37811,ol=37812,ll=37813,cl=37814,hl=37815,ul=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,_l=36492,xl=36494,vl=36495,yl=36283,Ml=36284,ca=36285,Sl=36286,Cr=2300,fo=2301,eo=2302,Ac=2303,Cc=2400,Rc=2401,Pc=2402,ad=3200,$c=0,od=1,_i="",hn="srgb",Rr="srgb-linear",Pr="linear",pe="srgb",no=7680,ld=519,cd=512,hd=513,ud=514,Zc=515,dd=516,fd=517,Kc=518,Jc=519,pd=35044,bl=35048,Qc="300 es",Pn=2e3,Ir=2001;su={},Us=null;xd={[io]:io,[ro]:lo,[ao]:ao,[Ns]:oo,[so]:so,[lo]:ro,[co]:co,[oo]:Ns},Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=1234567,wr=Math.PI/180,Fs=180/Math.PI;ha={DEG2RAD:wr,RAD2DEG:Fs,generateUUID:Zs,clamp:ce,euclideanModulo:th,mapLinear:sp,inverseLerp:rp,lerp:Ar,damp:ap,pingpong:op,smoothstep:lp,smootherstep:cp,randInt:hp,randFloat:up,randFloatSpread:dp,seededRandom:fp,degToRad:pp,radToDeg:mp,isPowerOfTwo:gp,ceilPowerOfTwo:_p,floorPowerOfTwo:eh,setQuaternionFromProperEuler:xp,normalize:yd,denormalize:vd},oh=class oh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;Wt=oh,Mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],p=r[a+1],_=r[a+2],M=r[a+3];if(f!==M||l!==u||c!==p||h!==_){let m=l*u+c*p+h*_+f*M;m<0&&(u=-u,p=-p,_=-_,M=-M,m=-m);let d=1-o;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);d=Math.sin(d*y)/w,o=Math.sin(o*y)/w,l=l*d+u*o,c=c*d+p*o,h=h*d+_*o,f=f*d+M*o}else{l=l*d+u*o,c=c*d+p*o,h=h*d+_*o,f=f*d+M*o;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*f+l*p-c*u,t[e+1]=l*_+h*u+c*f-o*p,t[e+2]=c*_+h*p+o*u-l*f,t[e+3]=h*_-o*f-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"YXZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"ZXY":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"ZYX":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"YZX":this._x=u*h*f+c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f-u*p*_;break;case"XZY":this._x=u*h*f-c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f+u*p*_;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lh=class lh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(au.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oc.copy(this).projectOnVector(t),this.sub(oc)}reflect(t){return this.sub(oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lh.prototype.isVector3=!0;B=lh,oc=new B,au=new Mn,ch=class ch{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],_=n[8],M=s[0],m=s[3],d=s[6],y=s[1],w=s[4],b=s[7],A=s[2],E=s[5],g=s[8];return r[0]=a*M+o*y+l*A,r[3]=a*m+o*w+l*E,r[6]=a*d+o*b+l*g,r[1]=c*M+h*y+f*A,r[4]=c*m+h*w+f*E,r[7]=c*d+h*b+f*g,r[2]=u*M+p*y+_*A,r[5]=u*m+p*w+_*E,r[8]=u*d+p*b+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,p=c*r-a*l,_=e*f+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=f*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lc.makeScale(t,e)),this}rotate(t){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lc.makeRotation(-t)),this}translate(t,e){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ch.prototype.isMatrix3=!0;Jt=ch,lc=new Jt,ou=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae=vp();po=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vs===void 0&&(vs=Lr("canvas")),vs.width=t.width,vs.height=t.height;let s=vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=vs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yp=0,Os=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cc(s[a].image)):r.push(cc(s[a]))}else r=cc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};Mp=0,hc=new B,mn=class i extends Zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=dn,a=mi,o=Vn,l=bn,c=i.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Zs(),this.name="",this.source=new Os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hc).x}get height(){return this.source.getSize(hc).y}get depth(){return this.source.getSize(hc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ho:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ho:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Hc;mn.DEFAULT_ANISOTROPY=1;hh=class hh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],_=l[9],M=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,b=(p+1)/2,A=(d+1)/2,E=(h+u)/4,g=(f+M)/4,S=(_+m)/4;return w>b&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=g/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=S/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=g/r,s=S/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-M)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hh.prototype.isVector4=!0;Ce=hh,mo=class extends Zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new mn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Os(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ke=class extends mo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Dr=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},go=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Fo=class Fo{constructor(t,e,n,s,r,a,o,l,c,h,f,u,p,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,p,_,M,m)}set(t,e,n,s,r,a,o,l,c,h,f,u,p,_,M,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=_,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ys.setFromMatrixColumn(t,0).length(),r=1/ys.setFromMatrixColumn(t,1).length(),a=1/ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*f,_=o*h,M=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+_*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*f,_=c*h,M=c*f;e[0]=u+M*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*f,_=c*h,M=c*f;e[0]=u-M*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*f,_=o*h,M=o*f;e[0]=l*h,e[4]=_*c-p,e[8]=u*c+M,e[1]=l*f,e[5]=M*c+u,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,_=o*l,M=o*c;e[0]=l*h,e[4]=M-u*f,e[8]=_*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*f+_,e[10]=u-M*f}else if(t.order==="XZY"){let u=a*l,p=a*c,_=o*l,M=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+M,e[5]=a*h,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*h,e[10]=M*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sp,t,bp)}lookAt(t,e,n){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ai.crossVectors(n,vn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ai.crossVectors(n,vn)),Ai.normalize(),Pa.crossVectors(vn,Ai),s[0]=Ai.x,s[4]=Pa.x,s[8]=vn.x,s[1]=Ai.y,s[5]=Pa.y,s[9]=vn.y,s[2]=Ai.z,s[6]=Pa.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],_=n[2],M=n[6],m=n[10],d=n[14],y=n[3],w=n[7],b=n[11],A=n[15],E=s[0],g=s[4],S=s[8],D=s[12],C=s[1],N=s[5],O=s[9],V=s[13],P=s[2],W=s[6],Z=s[10],X=s[14],rt=s[3],Y=s[7],tt=s[11],it=s[15];return r[0]=a*E+o*C+l*P+c*rt,r[4]=a*g+o*N+l*W+c*Y,r[8]=a*S+o*O+l*Z+c*tt,r[12]=a*D+o*V+l*X+c*it,r[1]=h*E+f*C+u*P+p*rt,r[5]=h*g+f*N+u*W+p*Y,r[9]=h*S+f*O+u*Z+p*tt,r[13]=h*D+f*V+u*X+p*it,r[2]=_*E+M*C+m*P+d*rt,r[6]=_*g+M*N+m*W+d*Y,r[10]=_*S+M*O+m*Z+d*tt,r[14]=_*D+M*V+m*X+d*it,r[3]=y*E+w*C+b*P+A*rt,r[7]=y*g+w*N+b*W+A*Y,r[11]=y*S+w*O+b*Z+A*tt,r[15]=y*D+w*V+b*X+A*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],p=t[14],_=t[3],M=t[7],m=t[11],d=t[15],y=l*p-c*u,w=o*p-c*f,b=o*u-l*f,A=a*p-c*h,E=a*u-l*h,g=a*f-o*h;return e*(M*y-m*w+d*b)-n*(_*y-m*A+d*E)+s*(_*w-M*A+d*g)-r*(_*b-M*E+m*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],p=t[11],_=t[12],M=t[13],m=t[14],d=t[15],y=e*o-n*a,w=e*l-s*a,b=e*c-r*a,A=n*l-s*o,E=n*c-r*o,g=s*c-r*l,S=h*M-f*_,D=h*m-u*_,C=h*d-p*_,N=f*m-u*M,O=f*d-p*M,V=u*d-p*m,P=y*V-w*O+b*N+A*C-E*D+g*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/P;return t[0]=(o*V-l*O+c*N)*W,t[1]=(s*O-n*V-r*N)*W,t[2]=(M*g-m*E+d*A)*W,t[3]=(u*E-f*g-p*A)*W,t[4]=(l*C-a*V-c*D)*W,t[5]=(e*V-s*C+r*D)*W,t[6]=(m*b-_*g-d*w)*W,t[7]=(h*g-u*b+p*w)*W,t[8]=(a*O-o*C+c*S)*W,t[9]=(n*C-e*O-r*S)*W,t[10]=(_*E-M*b+d*y)*W,t[11]=(f*b-h*E-p*y)*W,t[12]=(o*D-a*N-l*S)*W,t[13]=(e*N-n*D+s*S)*W,t[14]=(M*w-_*A-m*y)*W,t[15]=(h*A-f*w+u*y)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,p=r*h,_=r*f,M=a*h,m=a*f,d=o*f,y=l*c,w=l*h,b=l*f,A=n.x,E=n.y,g=n.z;return s[0]=(1-(M+d))*A,s[1]=(p+b)*A,s[2]=(_-w)*A,s[3]=0,s[4]=(p-b)*E,s[5]=(1-(u+d))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(_+w)*g,s[9]=(m-y)*g,s[10]=(1-(u+M))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ys.set(s[0],s[1],s[2]).length(),o=ys.set(s[4],s[5],s[6]).length(),l=ys.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);let c=1/a,h=1/o,f=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,e.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Pn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),_,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===Pn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ir)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),_,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===Pn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ir)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Fo.prototype.isMatrix4=!0;me=Fo,ys=new B,On=new me,Sp=new B(0,0,0),bp=new B(1,1,1),Ai=new B,Pa=new B,vn=new B,cu=new me,hu=new Mn,Di=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hu.setFromEuler(this),this.setFromQuaternion(hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ep=0,uu=new B,Ms=new Mn,si=new me,Ia=new B,xr=new B,Tp=new B,wp=new Mn,du=new B(1,0,0),fu=new B(0,1,0),pu=new B(0,0,1),mu={type:"added"},Ap={type:"removed"},Ss={type:"childadded",child:null},uc={type:"childremoved",child:null},gn=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new Di,n=new Mn,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Jt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(du,t)}rotateY(t){return this.rotateOnAxis(fu,t)}rotateZ(t){return this.rotateOnAxis(pu,t)}translateOnAxis(t,e){return uu.copy(t).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(du,t)}translateY(t){return this.translateOnAxis(fu,t)}translateZ(t){return this.translateOnAxis(pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ia.copy(t):Ia.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(xr,Ia,this.up):si.lookAt(Ia,xr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(si),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mu),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ap),uc.child=t,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mu),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,Tp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new B(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;an=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cp={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),d=this._getHandJoint(c,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},La={h:0,s:0,l:0};Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=th(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=dc(a,r,t+1/3),this.g=dc(a,r,t),this.b=dc(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let n=Md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return ae.workingToColorSpace(rn.copy(this),t),Math.round(ce(rn.r*255,0,255))*65536+Math.round(ce(rn.g*255,0,255))*256+Math.round(ce(rn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=hn){ae.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(La);let n=Ar(Ci.h,La.h,e),s=Ar(Ci.s,La.s,e),r=Ar(Ci.l,La.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Qt;Qt.NAMES=Md;Nr=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new B,ri=new B,fc=new B,ai=new B,bs=new B,Es=new B,gu=new B,pc=new B,mc=new B,gc=new B,_c=new Ce,xc=new Ce,vc=new Ce,Li=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),ri.subVectors(n,e),fc.subVectors(t,e);let a=Bn.dot(Bn),o=Bn.dot(ri),l=Bn.dot(fc),c=ri.dot(ri),h=ri.dot(fc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return _c.setScalar(0),xc.setScalar(0),vc.setScalar(0),_c.fromBufferAttribute(t,e),xc.fromBufferAttribute(t,n),vc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_c,r.x),a.addScaledVector(xc,r.y),a.addScaledVector(vc,r.z),a}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),ri.subVectors(t,e),Bn.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Bn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;bs.subVectors(s,n),Es.subVectors(r,n),pc.subVectors(t,n);let l=bs.dot(pc),c=Es.dot(pc);if(l<=0&&c<=0)return e.copy(n);mc.subVectors(t,s);let h=bs.dot(mc),f=Es.dot(mc);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(bs,a);gc.subVectors(t,r);let p=bs.dot(gc),_=Es.dot(gc);if(_>=0&&p<=_)return e.copy(r);let M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Es,o);let m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return gu.subVectors(r,s),o=(f-h)/(f-h+(p-_)),e.copy(s).addScaledVector(gu,o);let d=1/(m+M+u);return a=M*d,o=u*d,e.copy(n).addScaledVector(bs,a).addScaledVector(Es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox)),Da.applyMatrix4(t.matrixWorld),this.union(Da)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),Na.subVectors(this.max,vr),Ts.subVectors(t.a,vr),ws.subVectors(t.b,vr),As.subVectors(t.c,vr),Ri.subVectors(ws,Ts),Pi.subVectors(As,ws),Qi.subVectors(Ts,As);let e=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-Qi.z,Qi.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,Qi.z,0,-Qi.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-Qi.y,Qi.x,0];return!yc(e,Ts,ws,As,Na)||(e=[1,0,0,0,1,0,0,0,1],!yc(e,Ts,ws,As,Na))?!1:(Ua.crossVectors(Ri,Pi),e=[Ua.x,Ua.y,Ua.z],yc(e,Ts,ws,As,Na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},oi=[new B,new B,new B,new B,new B,new B,new B,new B],zn=new B,Da=new Kn,Ts=new B,ws=new B,As=new B,Ri=new B,Pi=new B,Qi=new B,vr=new B,Na=new B,Ua=new B,ji=new B;Fe=new B,Fa=new Wt,Rp=0,ze=class extends Zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pd,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=t!==void 0?nh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fa.fromBufferAttribute(this,e),Fa.applyMatrix3(t),this.setXY(e,Fa.x,Fa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):vd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):yd(t,this.array)}},Ur=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Fr=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}},xe=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Pp=new Kn,yr=new B,Mc=new B,In=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(Mc)),this.expandByPoint(yr.copy(t.center).sub(Mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ip=0,Rn=new me,Sc=new gn,Cs=new B,yn=new Kn,Mr=new Kn,Xe=new B,Re=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(np(t)?Fr:Ur)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Sc.lookAt(t),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(yn.min,Mr.min),yn.expandByPoint(Xe),Xe.addVectors(yn.max,Mr.max),yn.expandByPoint(Xe)):(yn.expandByPoint(Mr.min),yn.expandByPoint(Mr.max))}yn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(t,c),Xe.add(Cs)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new B,l[D]=new B;let h=new B,f=new B,u=new B,p=new Wt,_=new Wt,M=new Wt,m=new B,d=new B;function y(D,C,N){c[D]=c[C]=c[N]=1,h.fromBufferAttribute(n,D),f.fromBufferAttribute(n,C),u.fromBufferAttribute(n,N),p.fromBufferAttribute(r,D),_.fromBufferAttribute(r,C),M.fromBufferAttribute(r,N),f.sub(h),u.sub(h),_.sub(p),M.sub(p);let O=1/(_.x*M.y-M.x*_.y);isFinite(O)&&(m.copy(f).multiplyScalar(M.y).addScaledVector(u,-_.y).multiplyScalar(O),d.copy(u).multiplyScalar(_.x).addScaledVector(f,-M.x).multiplyScalar(O),o[D].add(m),o[C].add(m),o[N].add(m),l[D].add(d),l[C].add(d),l[N].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,C=w.length;D<C;++D){let N=w[D],O=N.start,V=N.count;for(let P=O,W=O+V;P<W;P+=3)y(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let b=new B,A=new B,E=new B,g=new B;function S(D){E.fromBufferAttribute(s,D),g.copy(E);let C=o[D];b.copy(C),b.sub(E.multiplyScalar(E.dot(C))).normalize(),A.crossVectors(g,C);let O=A.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,O)}for(let D=0,C=n.count;D<C;++D)c[D]&&S(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(t)for(let u=0,p=t.count;u<p;u+=3){let _=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let d=0;d<h;d++)u[_++]=c[p++]}return new ze(u,h,f)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},bc=new B,Lp=new B,Dp=new Jt,kn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bc.subVectors(n,e).cross(Lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(bc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Dp.getNormalMatrix(t),s=this.coplanarPoint(bc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Np=0,ui=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=qs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=zc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},li=new B,Ec=new B,Oa=new B,Ba=new B,ns=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ec.copy(t).add(e).multiplyScalar(.5),Oa.copy(e).sub(t).normalize(),Ba.copy(this.origin).sub(Ec);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Oa),o=Ba.dot(this.direction),l=-Ba.dot(Oa),c=Ba.lengthSq(),h=Math.abs(1-a*a),f,u,p,_;if(h>0)if(f=a*l-o,u=a*o-l,_=r*h,f>=0)if(u>=-_)if(u<=_){let M=1/h;f*=M,u*=M,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ec).addScaledVector(Oa,u),p}intersectSphere(t,e){if(t.radius<0)return null;li.subVectors(t.center,this.origin);let n=li.dot(this.direction),s=li.dot(li)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,p=t.z-a.z,_=e.x-a.x,M=e.y-a.y,m=e.z-a.z,d=n.x-a.x,y=n.y-a.y,w=n.z-a.z,b=Math.abs(l),A=Math.abs(c),E=Math.abs(h),g,S,D,C,N,O,V,P,W,Z,X,rt;if(b>=A&&b>=E?(D=l,O=f,W=_,rt=d,l>=0?(g=c,S=h,C=u,N=p,V=M,P=m,Z=y,X=w):(g=h,S=c,C=p,N=u,V=m,P=M,Z=w,X=y)):A>=E?(D=c,O=u,W=M,rt=y,c>=0?(g=h,S=l,C=p,N=f,V=m,P=_,Z=w,X=d):(g=l,S=h,C=f,N=p,V=_,P=m,Z=d,X=w)):(D=h,O=p,W=m,rt=w,h>=0?(g=l,S=c,C=f,N=u,V=_,P=M,Z=d,X=y):(g=c,S=l,C=u,N=f,V=M,P=_,Z=y,X=d)),D===0)return null;let Y=g/D,tt=S/D,it=1/D,Ft=C-Y*O,qt=N-tt*O,K=V-Y*W,yt=P-tt*W,Lt=Z-Y*rt,Ht=X-tt*rt,Et=Lt*yt-Ht*K,Kt=Ft*Ht-qt*Lt,Ie=K*qt-yt*Ft;if(s){if(Et<0||Kt<0||Ie<0)return null}else if((Et<0||Kt<0||Ie<0)&&(Et>0||Kt>0||Ie>0))return null;let Ot=Et+Kt+Ie;if(Ot===0)return null;let ue=it*(Et*O+Kt*W+Ie*rt);return(Ot>0?ue<0:ue>0)?null:this.at(ue/Ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},di=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_u=new me,ts=new ns,za=new In,xu=new B,ka=new B,Ha=new B,Ga=new B,Tc=new B,Va=new B,vu=new B,Wa=new B,ge=class extends gn{constructor(t=new Re,e=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Tc.fromBufferAttribute(f,t),a?Va.addScaledVector(Tc,h):Va.addScaledVector(Tc.sub(e),h))}e.add(Va)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(za.containsPoint(ts.origin)===!1&&(ts.intersectSphere(za,xu)===null||ts.origin.distanceToSquared(xu)>(t.far-t.near)**2))&&(_u.copy(r).invert(),ts.copy(t.ray).applyMatrix4(_u),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){let m=u[_],d=a[m.materialIndex],y=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,A=w;b<A;b+=3){let E=o.getX(b),g=o.getX(b+1),S=o.getX(b+2);s=Xa(this,d,t,n,c,h,f,E,g,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=_,d=M;m<d;m+=3){let y=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);s=Xa(this,a,t,n,c,h,f,y,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){let m=u[_],d=a[m.materialIndex],y=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,A=w;b<A;b+=3){let E=b,g=b+1,S=b+2;s=Xa(this,d,t,n,c,h,f,E,g,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,d=M;m<d;m+=3){let y=m,w=m+1,b=m+2;s=Xa(this,a,t,n,c,h,f,y,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};Or=class extends mn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=qe,h=qe,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},is=class extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Rs=new me,yu=new me,qa=[],Mu=new Kn,Fp=new me,Sr=new ge,br=new In,Br=class extends ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),Mu.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Mu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),br.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),t.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),yu.multiplyMatrices(n,Rs),Sr.matrixWorld=yu,Sr.raycast(t,qa);for(let a=0,o=qa.length;a<o;a++){let l=qa[a];l.instanceId=r,l.object=this,e.push(l)}qa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,Vo,Ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},es=new In,Op=new Wt(.5,.5),Ya=new B,ss=class{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],p=r[7],_=r[8],M=r[9],m=r[10],d=r[11],y=r[12],w=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,p-h,d-_,A-y).normalize(),s[1].setComponents(c+a,p+h,d+_,A+y).normalize(),s[2].setComponents(c+o,p+f,d+M,A+w).normalize(),s[3].setComponents(c-o,p-f,d-M,A-w).normalize(),n)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,p-u,d-m,A-b).normalize();else if(s[4].setComponents(c-l,p-u,d-m,A-b).normalize(),e===Pn)s[5].setComponents(c+l,p+u,d+m,A+b).normalize();else if(e===Ir)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);let e=Op.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ya.x=s.normal.x>0?t.max.x:t.min.x,Ya.y=s.normal.y>0?t.max.y:t.min.y,Ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Su=new me,_o=class i{constructor(){this.coordinateSystem=Pn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Su.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ss),n[s].setFromProjectionMatrix(Su,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ss),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}},ks=class extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xo=new B,vo=new B,bu=new me,Er=new ns,$a=new In,wc=new B,Eu=new B,yo=class extends gn{constructor(t=new Re,e=new ks){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)xo.fromBufferAttribute(e,s-1),vo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=xo.distanceTo(vo);t.setAttribute("lineDistance",new xe(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,t.ray.intersectsSphere($a)===!1)return;bu.copy(s).invert(),Er.copy(t.ray).applyMatrix4(bu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=c){let d=h.getX(M),y=h.getX(M+1),w=Za(this,t,Er,l,d,y,M);w&&e.push(w)}if(this.isLineLoop){let M=h.getX(_-1),m=h.getX(p),d=Za(this,t,Er,l,M,m,_-1);d&&e.push(d)}}else{let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=c){let d=Za(this,t,Er,l,M,M+1,M);d&&e.push(d)}if(this.isLineLoop){let M=Za(this,t,Er,l,_-1,p,_-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Tu=new B,wu=new B,zr=class extends yo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Tu.fromBufferAttribute(e,s),wu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tu.distanceTo(wu);t.setAttribute("lineDistance",new xe(n,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Mo=class extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Au=new me,Ic=new ns,Ka=new In,Ja=new B,Ni=class extends gn{constructor(t=new Re,e=new Mo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=r,t.ray.intersectsSphere(Ka)===!1)return;Au.copy(s).invert(),Ic.copy(t.ray).applyMatrix4(Au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=u,M=p;_<M;_++){let m=c.getX(_);Ja.fromBufferAttribute(f,m),Cu(Ja,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=u,M=p;_<M;_++)Ja.fromBufferAttribute(f,_),Cu(Ja,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};kr=class extends mn{constructor(t=[],e=os,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fi=class extends mn{constructor(t,e,n=Gn,s,r,a,o=qe,l=qe,c,h=hi,f=1){if(h!==hi&&h!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Hr=class extends fi{constructor(t,e=Gn,n=os,s,r,a=qe,o=qe,l,c=hi){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Gr=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Hs=class i extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2));function _(M,m,d,y,w,b,A,E,g,S,D){let C=b/g,N=A/S,O=b/2,V=A/2,P=E/2,W=g+1,Z=S+1,X=0,rt=0,Y=new B;for(let tt=0;tt<Z;tt++){let it=tt*N-V;for(let Ft=0;Ft<W;Ft++){let qt=Ft*C-O;Y[M]=qt*y,Y[m]=it*w,Y[d]=P,c.push(Y.x,Y.y,Y.z),Y[M]=0,Y[m]=0,Y[d]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Ft/g),f.push(1-tt/S),X+=1}}for(let tt=0;tt<S;tt++)for(let it=0;it<g;it++){let Ft=u+it+W*tt,qt=u+it+W*(tt+1),K=u+(it+1)+W*(tt+1),yt=u+(it+1)+W*tt;l.push(Ft,qt,yt),l.push(qt,K,yt),rt+=6}o.addGroup(p,rt,D),p+=rt,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Vr=class i extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],p=[],_=0,M=[],m=n/2,d=0;y(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(p,2));function y(){let b=new B,A=new B,E=0,g=(e-t)/n;for(let S=0;S<=r;S++){let D=[],C=S/r,N=C*(e-t)+t;for(let O=0;O<=s;O++){let V=O/s,P=V*l+o,W=Math.sin(P),Z=Math.cos(P);A.x=N*W,A.y=-C*n+m,A.z=N*Z,f.push(A.x,A.y,A.z),b.set(W,g,Z).normalize(),u.push(b.x,b.y,b.z),p.push(V,1-C),D.push(_++)}M.push(D)}for(let S=0;S<s;S++)for(let D=0;D<r;D++){let C=M[D][S],N=M[D+1][S],O=M[D+1][S+1],V=M[D][S+1];(t>0||D!==0)&&(h.push(C,N,V),E+=3),(e>0||D!==r-1)&&(h.push(N,O,V),E+=3)}c.addGroup(d,E,0),d+=E}function w(b){let A=_,E=new Wt,g=new B,S=0,D=b===!0?t:e,C=b===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,m*C,0),u.push(0,C,0),p.push(.5,.5),_++;let N=_;for(let O=0;O<=s;O++){let P=O/s*l+o,W=Math.cos(P),Z=Math.sin(P);g.x=D*Z,g.y=m*C,g.z=D*W,f.push(g.x,g.y,g.z),u.push(0,C,0),E.x=W*.5+.5,E.y=Z*.5*C+.5,p.push(E.x,E.y),_++}for(let O=0;O<s;O++){let V=A+O,P=N+O;b===!0?h.push(P,P+1,V):h.push(P+1,P,V),S+=3}c.addGroup(d,S,b===!0?1:2),d+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},So=class i extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let w=new B,b=new B,A=new B;for(let E=0;E<e.length;E+=3)p(e[E+0],w),p(e[E+1],b),p(e[E+2],A),l(w,b,A,y)}function l(y,w,b,A){let E=A+1,g=[];for(let S=0;S<=E;S++){g[S]=[];let D=y.clone().lerp(b,S/E),C=w.clone().lerp(b,S/E),N=E-S;for(let O=0;O<=N;O++)O===0&&S===E?g[S][O]=D:g[S][O]=D.clone().lerp(C,O/N)}for(let S=0;S<E;S++)for(let D=0;D<2*(E-S)-1;D++){let C=Math.floor(D/2);D%2===0?(u(g[S][C+1]),u(g[S+1][C]),u(g[S][C])):(u(g[S][C+1]),u(g[S+1][C+1]),u(g[S+1][C]))}}function c(y){let w=new B;for(let b=0;b<r.length;b+=3)w.x=r[b+0],w.y=r[b+1],w.z=r[b+2],w.normalize().multiplyScalar(y),r[b+0]=w.x,r[b+1]=w.y,r[b+2]=w.z}function h(){let y=new B;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let b=m(y)/2/Math.PI+.5,A=d(y)/Math.PI+.5;a.push(b,1-A)}_(),f()}function f(){for(let y=0;y<a.length;y+=6){let w=a[y+0],b=a[y+2],A=a[y+4],E=Math.max(w,b,A),g=Math.min(w,b,A);E>.9&&g<.1&&(w<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function p(y,w){let b=y*3;w.x=t[b+0],w.y=t[b+1],w.z=t[b+2]}function _(){let y=new B,w=new B,b=new B,A=new B,E=new Wt,g=new Wt,S=new Wt;for(let D=0,C=0;D<r.length;D+=9,C+=6){y.set(r[D+0],r[D+1],r[D+2]),w.set(r[D+3],r[D+4],r[D+5]),b.set(r[D+6],r[D+7],r[D+8]),E.set(a[C+0],a[C+1]),g.set(a[C+2],a[C+3]),S.set(a[C+4],a[C+5]),A.copy(y).add(w).add(b).divideScalar(3);let N=m(A);M(E,C+0,y,N),M(g,C+2,w,N),M(S,C+4,b,N)}}function M(y,w,b,A){A<0&&y.x===1&&(a[w]=y.x-1),b.x===0&&b.z===0&&(a[w]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Jn=class i extends So{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Hn=class i extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,p=[],_=[],M=[],m=[];for(let d=0;d<h;d++){let y=d*u-a;for(let w=0;w<c;w++){let b=w*f-r;_.push(b,-y,0),M.push(0,0,1),m.push(w/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){let w=y+c*d,b=y+c*(d+1),A=y+1+c*(d+1),E=y+1+c*d;p.push(w,b,E),p.push(b,A,E)}this.setIndex(p),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(M,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ui=class i extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],f=t,u=(e-t)/s,p=new B,_=new Wt;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}f+=u}for(let M=0;M<s;M++){let m=M*(n+1);for(let d=0;d<n;d++){let y=d+m,w=y,b=y+n+1,A=y+n+2,E=y+1;o.push(w,b,E),o.push(b,A,E)}}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Wr=class i extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new B,u=new B,p=[],_=[],M=[],m=[];for(let d=0;d<=n;d++){let y=[],w=d/n,b=a+w*o,A=t*Math.cos(b),E=Math.sqrt(t*t-A*A),g=0;d===0&&a===0?g=.5/e:d===n&&l===Math.PI&&(g=-.5/e);for(let S=0;S<=e;S++){let D=S/e,C=s+D*r;f.x=-E*Math.cos(C),f.y=A,f.z=E*Math.sin(C),_.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),m.push(D+g,1-w),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){let w=h[d][y+1],b=h[d][y],A=h[d+1][y],E=h[d+1][y+1];(d!==0||a>0)&&p.push(w,b,E),(d!==n-1||l<Math.PI)&&p.push(b,A,E)}this.setIndex(p),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(M,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};xi={clone:cs,merge:on},zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,he=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Gs=class extends he{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bo=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Eo=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};Fi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},To=class extends Fi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rc:r=t,o=2*e-n;break;case Pc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rc:a=t,l=2*n-e;break;case Pc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),M=_*_,m=M*_,d=-u*m+2*u*M-u*_,y=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*_+1,w=(-1-p)*m+(1.5+p)*M+.5*_,b=p*m-p*M;for(let A=0;A!==o;++A)r[A]=d*a[h+A]+y*a[c+A]+w*a[l+A]+b*a[f+A];return r}},wo=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Ao=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Co=class extends Fi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(n-e)/(s-e),M=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*_;return r}let u=o*2,p=t-1;for(let _=0;_!==o;++_){let M=a[c+_],m=a[l+_],d=p*u+_*2,y=f[d],w=f[d+1],b=t*u+_*2,A=h[b],E=h[b+1],g=Gp(n,e,y,A,s);r[_]=Sd(g,M,w,E,m)}return r}};Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ps(e,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ps(t.times,Array),values:Ps(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Qa(t.settings)&&(n.settings={inTangents:Ps(t.settings.inTangents,Array),outTangents:Ps(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Co(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case fo:e=this.InterpolantFactoryMethodLinear;break;case eo:e=this.InterpolantFactoryMethodSmooth;break;case Ac:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return eo;case this.InterpolantFactoryMethodBezier:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Qa(this.settings)&&(Pu(this.settings.inTangents,t),Pu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Qa(this.settings)&&(Iu(this.settings.inTangents,t),Iu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){$t("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ip(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===eo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,p=f+n;for(let _=0;_!==n;++_){let M=e[f+_];if(M!==e[u+_]||M!==e[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Qa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=fo;Oi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Cr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;Ro=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};Ro.prototype.ValueTypeName="color";Po=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};Po.prototype.ValueTypeName="number";Io=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Xr=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Io(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;Bi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Cr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;Lo=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};Lo.prototype.ValueTypeName="vector";Do=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bd=new Do,No=class{constructor(t){this.manager=t!==void 0?t:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};No.DEFAULT_MATERIAL_NAME="__DEFAULT";ja=new B,to=new Mn,Yn=new B,qr=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ja,to,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,to,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ja,to,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,to,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new B,Lu=new Wt,Du=new Wt,un=class extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,Lu,Du),e.subVectors(Du,Lu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vs=class extends qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Is=-90,Ls=1,Ws=class extends gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(Is,Ls,t,e);s.layers=this.layers,this.add(s);let r=new un(Is,Ls,t,e);r.layers=this.layers,this.add(r);let a=new un(Is,Ls,t,e);a.layers=this.layers,this.add(a);let o=new un(Is,Ls,t,e);o.layers=this.layers,this.add(o);let l=new un(Is,Ls,t,e);l.layers=this.layers,this.add(l);let c=new un(Is,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Uo=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Yr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Vp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};sh="\\[\\]\\.:\\/",Wp=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",Xp="[^"+sh.replace("\\.","")+"]",qp=/((?:WC+[\/:])*)/.source.replace("WC",rh),Yp=/(WCOD+)?/.source.replace("WCOD",Xp),$p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),Kp=new RegExp("^"+qp+Yp+$p+Zp+"$"),Jp=["material","materials","bones","map"],Lc=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wp,"")}static parseTrackName(t){let e=Kp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Jp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Lc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];bv=new Float32Array(1),Nu=new me,$r=class{constructor(t,e,n=0,s=1/0){this.ray=new ns(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nu),this}intersectObject(t,e=!0,n=[]){return Dc(t,this,n,e),n.sort(Uu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Dc(t[s],this,n,e);return n.sort(Uu),n}};uh=class uh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};uh.prototype.isMatrix2=!0;Nc=uh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function Xd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){let _=f[u],M=f[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,f[u]=M)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){let M=f[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function U0(i,t,e,n,s,r){let a=new Qt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function p(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let b=y.backgroundBlurriness>0;w=t.get(w,b)}return w}function _(y){let w=!1,b=p(y);b===null?m(a,o):b&&b.isColor&&(m(b,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,w){let b=p(w);b&&b.isCubeTexture?(c===void 0&&(c=new ge(new Hs(1,1,1),new he({name:"BackgroundCubeMaterial",uniforms:cs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(N0.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qd),c.material.toneMapped=ae.getTransfer(b.colorSpace)!==pe,(h!==b||f!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ge(new Hn(2,2),new he({name:"BackgroundMaterial",uniforms:cs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ae.getTransfer(b.colorSpace)!==pe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(El,ih(i)),e.buffers.color.setClear(El.r,El.g,El.b,w,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:_,addToRenderList:M,dispose:d}}function F0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,O,V,P,W){let Z=!1,X=f(N,P,V,O);r!==X&&(r=X,c(r.object)),Z=p(N,P,V,W),Z&&_(N,P,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(N,O,V,P),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,O,V,P){let W=P.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let X=N.isInstancedMesh===!0?N.id:0,rt=Z[X];rt===void 0&&(rt={},Z[X]=rt);let Y=rt[V.id];Y===void 0&&(Y={},rt[V.id]=Y);let tt=Y[W];return tt===void 0&&(tt=u(l()),Y[W]=tt),tt}function u(N){let O=[],V=[],P=[];for(let W=0;W<e;W++)O[W]=0,V[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:P,object:N,attributes:{},index:null}}function p(N,O,V,P){let W=r.attributes,Z=O.attributes,X=0,rt=V.getAttributes();for(let Y in rt)if(rt[Y].location>=0){let it=W[Y],Ft=Z[Y];if(Ft===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(Ft=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(Ft=N.instanceColor)),it===void 0||it.attribute!==Ft||Ft&&it.data!==Ft.data)return!0;X++}return r.attributesNum!==X||r.index!==P}function _(N,O,V,P){let W={},Z=O.attributes,X=0,rt=V.getAttributes();for(let Y in rt)if(rt[Y].location>=0){let it=Z[Y];it===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(it=N.instanceColor));let Ft={};Ft.attribute=it,it&&it.data&&(Ft.data=it.data),W[Y]=Ft,X++}r.attributes=W,r.attributesNum=X,r.index=P}function M(){let N=r.newAttributes;for(let O=0,V=N.length;O<V;O++)N[O]=0}function m(N){d(N,0)}function d(N,O){let V=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;V[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),W[N]!==O&&(i.vertexAttribDivisor(N,O),W[N]=O)}function y(){let N=r.newAttributes,O=r.enabledAttributes;for(let V=0,P=O.length;V<P;V++)O[V]!==N[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function w(N,O,V,P,W,Z,X){X===!0?i.vertexAttribIPointer(N,O,V,W,Z):i.vertexAttribPointer(N,O,V,P,W,Z)}function b(N,O,V,P){M();let W=P.attributes,Z=V.getAttributes(),X=O.defaultAttributeValues;for(let rt in Z){let Y=Z[rt];if(Y.location>=0){let tt=W[rt];if(tt===void 0&&(rt==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),rt==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor)),tt!==void 0){let it=tt.normalized,Ft=tt.itemSize,qt=t.get(tt);if(qt===void 0)continue;let K=qt.buffer,yt=qt.type,Lt=qt.bytesPerElement,Ht=yt===i.INT||yt===i.UNSIGNED_INT||tt.gpuType===ko;if(tt.isInterleavedBufferAttribute){let Et=tt.data,Kt=Et.isInterleavedBuffer===!0?Et.stride:Et.itemSize,Ie=tt.offset;if(Et.isInstancedInterleavedBuffer||Et.isInstancedBufferAttribute){for(let Ot=0;Ot<Y.locationSize;Ot++)d(Y.location+Ot,Et.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Ot=0;Ot<Y.locationSize;Ot++)m(Y.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Ot=0;Ot<Y.locationSize;Ot++)w(Y.location+Ot,Ft/Y.locationSize,yt,it,Kt*Lt,(Ie+Ft/Y.locationSize*Ot)*Lt,Ht)}else{if(tt.isInstancedBufferAttribute){for(let Et=0;Et<Y.locationSize;Et++)d(Y.location+Et,tt.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Et=0;Et<Y.locationSize;Et++)m(Y.location+Et);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Et=0;Et<Y.locationSize;Et++)w(Y.location+Et,Ft/Y.locationSize,yt,it,Ft*Lt,Ft/Y.locationSize*Et*Lt,Ht)}}else if(X!==void 0){let it=X[rt];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(Y.location,it);break;case 3:i.vertexAttrib3fv(Y.location,it);break;case 4:i.vertexAttrib4fv(Y.location,it);break;default:i.vertexAttrib1fv(Y.location,it)}}}}y()}function A(){D();for(let N in n){let O=n[N];for(let V in O){let P=O[V];for(let W in P){let Z=P[W];for(let X in Z)h(Z[X].object),delete Z[X];delete P[W]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let V in O){let P=O[V];for(let W in P){let Z=P[W];for(let X in Z)h(Z[X].object),delete Z[X];delete P[W]}}delete n[N.id]}function g(N){for(let O in n){let V=n[O];for(let P in V){let W=V[P];if(W[N.id]===void 0)continue;let Z=W[N.id];for(let X in Z)h(Z[X].object),delete Z[X];delete W[N.id]}}}function S(N){for(let O in n){let V=n[O],P=N.isInstancedMesh===!0?N.id:0,W=V[P];if(W!==void 0){for(let Z in W){let X=W[Z];for(let rt in X)h(X[rt].object),delete X[rt];delete W[Z]}delete V[P],Object.keys(V).length===0&&delete n[O]}}}function D(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function O0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function B0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==Vn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let S=g===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==bn&&g!==Ln&&!S&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,maxSamples:A,samples:E}}function z0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new kn,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){let _=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,w=y*4,b=d.clippingState||null;l.value=b,b=h(_,u,w,p);for(let A=0;A!==w;++A)b[A]=e[A];d.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,_){let M=f!==null?f.length:0,m=null;if(M!==0){if(m=l.value,_!==!0||m===null){let d=p+M*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,b=p;w!==M;++w,b+=4)a.copy(f[w]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function Td(i,t,e){return new fa(i,{minFilter:mi,generateMipmaps:t,type:je,colorSpace:Rr,depthBuffer:e})}function pa(i,t,e){return new he({name:i,uniforms:t,vertexShader:ie.cube_vert,fragmentShader:e,side:Qe,blending:pi,depthTest:!1,depthWrite:!1})}function X0(){return pa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yd}u

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
	`)}function q0(){return pa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$d}},`

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
	`)}function Y0(){return pa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${H0}
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
	`)}function wd(){return pa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ad(){return pa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Oo||p===Bo)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new fa(_.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,_=p===Oo||p===Bo,M=p===os||p===Ys;if(_||M){let m=e.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new wl(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return _&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new wl(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Oo?u.mapping=os:p===Bo&&(u.mapping=Ys),u}function l(u){let p=0,_=6;for(let M=0;M<_;M++)u[M]!==void 0&&p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Z0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Tr("WebGLRenderer: "+n+" extension not supported."),s}}}function K0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let M=r.get(_);M&&(t.remove(M),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function h(_){let M=_.attributes;for(let m in M)t.update(M[m],i.ARRAY_BUFFER)}function f(_){let M=_.index,m=_.attributes.position,d=0;if(m===void 0)return;let y=M!==null?M.array.length:m.array.length/3-1,w=m.count>=65535?Fr:Ur,b=new w(Math.ceil(y/3)*6,1),A=b.array;if(M!==null){let g=M.array;d=M.version;for(let S=0,D=0;S<y;S+=3){let C=g[S+0],N=g[S+1],O=g[S+2];A[D++]=C,A[D++]=N,A[D++]=N,A[D++]=O,A[D++]=O,A[D++]=C}}else{d=m.version;for(let g=0,S=0;g<y;g+=3){let D=g+0,C=g+1,N=g+2;A[S++]=D,A[S++]=C,A[S++]=C,A[S++]=N,A[S++]=N,A[S++]=D}}b.version=d;let E=r.get(_);E&&t.remove(E),r.set(_,b)}function u(_){let M=r.get(_);if(M){let m=_.index;m!==null&&M.version<m.version&&f(_)}else f(_);return r.get(_)}function p(){for(let _ in s){let M=s[_].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function J0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,f*a,p),e.update(u,n,p))}function h(f,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Q0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:$t("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function j0(i,t,e){let n=new WeakMap,s=new Ce;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let D=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],w=0;p===!0&&(w=1),_===!0&&(w=2),M===!0&&(w=3);let b=o.attributes.position.count*w,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*A*4*f),g=new Dr(E,b,A,f);g.type=Ln,g.needsUpdate=!0;let S=w*4;for(let C=0;C<f;C++){let N=m[C],O=d[C],V=y[C],P=b*A*4*C;for(let W=0;W<N.count;W++){let Z=W*S;p===!0&&(s.fromBufferAttribute(N,W),E[P+Z+0]=s.x,E[P+Z+1]=s.y,E[P+Z+2]=s.z,E[P+Z+3]=0),_===!0&&(s.fromBufferAttribute(O,W),E[P+Z+4]=s.x,E[P+Z+5]=s.y,E[P+Z+6]=s.z,E[P+Z+7]=0),M===!0&&(s.fromBufferAttribute(V,W),E[P+Z+8]=s.x,E[P+Z+9]=s.y,E[P+Z+10]=s.z,E[P+Z+11]=V.itemSize===4?s.w:1)}}u={count:f,texture:g,size:new Wt(b,A)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function t_(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}function n_(i,t,e,n,s,r){let a=new ke(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Re;h.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xe([0,2,0,0,2,0],2));let f=new Gs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ge(h,f),p=new Vs(-1,1,1,-1,0,1),_=null,M=null,m=!1,d,y=null,w=[],b=!1;this.setSize=function(A,E){a.setSize(A,E),o!==null&&o.setSize(A,E),l!==null&&l.setSize(A,E);for(let g=0;g<w.length;g++){let S=w[g];S.setSize&&S.setSize(A,E)}},this.setEffects=function(A){w=A,b=w.length>0&&w[0].isRenderPass===!0;let E=a.width,g=a.height;w.length>0&&o===null&&(o=new ke(E,g,{type:je,depthBuffer:!1,stencilBuffer:!1}),l=new ke(E,g,{type:je,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(D=>D.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new fi(E,g),r===!0&&(c.format=gi,c.type=ls)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let D=0;D<w.length;D++){let C=w[D];C.setSize&&C.setSize(E,g),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,E){if(m||A.toneMapping===Qn&&w.length===0)return!1;if(y=E,E!==null){let g=E.width,S=E.height;(a.width!==g||a.height!==S)&&this.setSize(g,S)}return b===!1&&A.setRenderTarget(a),d=A.toneMapping,A.toneMapping=Qn,!0},this.hasRenderPass=function(){return b},this.end=function(A,E){A.toneMapping=d,m=!0;let g=a,S=o;for(let D=0;D<w.length;D++){let C=w[D];C.enabled!==!1&&(C.render(A,S,g,E),C.needsSwap!==!1&&(g=S,S=S===o?l:o))}if(_!==A.outputColorSpace||M!==A.toneMapping){_=A.outputColorSpace,M=A.toneMapping,f.defines={},ae.getTransfer(_)===pe&&(f.defines.SRGB_TRANSFER="");let D=e_[M];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(y),A.render(u,p),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}function Js(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Cd[s];if(r===void 0&&(r=new Float32Array(s),Cd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cl(i,t){let e=Rd[t];e===void 0&&(e=new Int32Array(t),Rd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function i_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function o_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Ld.set(n),i.uniformMatrix2fv(this.addr,!1,Ld),Ge(e,n)}}function l_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Id.set(n),i.uniformMatrix3fv(this.addr,!1,Id),Ge(e,n)}}function c_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Pd.set(n),i.uniformMatrix4fv(this.addr,!1,Pd),Ge(e,n)}}function h_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function p_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function m_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function Rl(i){return i.version===0&&(i.compareFunction=Jc,i.needsUpdate=!0),i}function x_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Rl(Kd):r=Zd,e.setTexture2D(t||r,s)}function v_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jd,s)}function y_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Rl(Jd):r=tf,e.setTextureCube(t||r,s)}function M_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qd,s)}function S_(i){switch(i){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return a_;case 35674:return o_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}function b_(i,t){i.uniform1fv(this.addr,t)}function E_(i,t){let e=Js(t,this.size,2);i.uniform2fv(this.addr,e)}function T_(i,t){let e=Js(t,this.size,3);i.uniform3fv(this.addr,e)}function w_(i,t){let e=Js(t,this.size,4);i.uniform4fv(this.addr,e)}function A_(i,t){let e=Js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C_(i,t){let e=Js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function R_(i,t){let e=Js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function P_(i,t){i.uniform1iv(this.addr,t)}function I_(i,t){i.uniform2iv(this.addr,t)}function L_(i,t){i.uniform3iv(this.addr,t)}function D_(i,t){i.uniform4iv(this.addr,t)}function N_(i,t){i.uniform1uiv(this.addr,t)}function U_(i,t){i.uniform2uiv(this.addr,t)}function F_(i,t){i.uniform3uiv(this.addr,t)}function O_(i,t){i.uniform4uiv(this.addr,t)}function B_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Rl(Kd):a=Zd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function z_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jd,r[a])}function k_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Rl(Jd):a=tf;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function H_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qd,r[a])}function G_(i){switch(i){case 5126:return b_;case 35664:return E_;case 35665:return T_;case 35666:return w_;case 35674:return A_;case 35675:return C_;case 35676:return R_;case 5124:case 35670:return P_;case 35667:case 35671:return I_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return N_;case 36294:return U_;case 36295:return F_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return H_}}function Dd(i,t){i.seq.push(t),i.map[t.id]=t}function V_(i,t,e){let n=i.name,s=n.length;for(fh.lastIndex=0;;){let r=fh.exec(n),a=fh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dd(e,c===void 0?new mh(o,i,t):new gh(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new _h(o),Dd(e,f)),e=f}}}function Nd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function q_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Y_(i){ae._getMatrix(Ud,ae.workingColorSpace,i);let t=`mat3( ${Ud.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Pr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+q_(i.getShaderSource(t),o)}else return r}function $_(i,t){let e=Y_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function K_(i,t){let e=Z_[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function J_(){ae.getLuminanceCoefficients(Tl);let i=Tl.x.toFixed(4),t=Tl.y.toFixed(4),e=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function j_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function da(i){return i!==""}function Od(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Bd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function xh(i){return i.replace(ex,nx)}function nx(i,t){let e=ie[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return xh(e)}function zd(i){return i.replace(ix,sx)}function sx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ax(i){return rx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function lx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ox[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function hx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cx[i.combine]||"ENVMAP_BLENDING_NONE"}function ux(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ax(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=lx(e),f=hx(e),u=Q_(e),p=j_(r),_=s.createProgram(),M,m,d=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(da).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(da).join(`
`),m.length>0&&(m+=`
`)):(M=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),m=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?ie.tonemapping_pars_fragment:"",e.toneMapping!==Qn?K_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,$_("linearToOutputTexel",e.outputColorSpace),J_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(da).join(`
`)),a=xh(a),a=Od(a,e),a=Bd(a,e),o=xh(o),o=Od(o,e),o=Bd(o,e),a=zd(a),o=zd(o),e.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=d+M+a,w=d+m+o,b=Nd(s,s.VERTEX_SHADER,y),A=Nd(s,s.FRAGMENT_SHADER,w);s.attachShader(_,b),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(C){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(b)||"",V=s.getShaderInfoLog(A)||"",P=N.trim(),W=O.trim(),Z=V.trim(),X=!0,rt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,A);else{let Y=Fd(s,b,"vertex"),tt=Fd(s,A,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+Y+`
`+tt)}else P!==""?Vt("WebGLProgram: Program Info Log:",P):(W===""||Z==="")&&(rt=!1);rt&&(C.diagnostics={runnable:X,programLog:P,vertexShader:{log:W,prefix:M},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(b),s.deleteShader(A),g=new Ks(s,_),S=tx(s,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,W_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=X_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}function fx(i){return i===ki||i===la||i===ca}function px(i,t,e,n,s,r){let a=new Bs,o=new vh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,S,D,C,N,O){let V=C.fog,P=N.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,X=t.get(g.envMap||W,Z),rt=u[g.type],Y=n.precision;g.precision!==null&&(Y=n.getMaxPrecision(g.precision),Y!==g.precision&&Vt("WebGLProgram.getParameters:",g.precision,"not supported, using",Y,"instead."));let tt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,it=tt!==void 0?tt.length:0,Ft=0;P.morphAttributes.position!==void 0&&(Ft=1),P.morphAttributes.normal!==void 0&&(Ft=2),P.morphAttributes.color!==void 0&&(Ft=3);let qt,K,yt,Lt;if(rt){let mt=ti[rt];qt=mt.vertexShader,K=mt.fragmentShader}else{qt=g.vertexShader,K=g.fragmentShader;let mt=o.getVertexShaderStage(g),ne=o.getFragmentShaderStage(g);o.update(g,mt,ne),yt=mt.id,Lt=ne.id}let Ht=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Kt=N.isInstancedMesh===!0,Ie=N.isBatchedMesh===!0,Ot=!!g.map,ue=!!g.matcap,fe=!!X,ee=fe&&X.isPMREMTexture===!0,Le=!!g.aoMap,Ue=!!g.lightMap,Ne=!!g.bumpMap&&g.wireframe===!1,Me=!!g.normalMap,Ye=!!g.displacementMap,be=!!g.emissiveMap,Oe=!!g.metalnessMap,Be=!!g.roughnessMap,nn=g.anisotropy>0,U=g.clearcoat>0,cn=g.diffuseRoughness>0,ve=g.dispersion>0,ye=g.retroreflectivity>0,vt=g.iridescence>0,we=g.sheen>0,kt=g.transmission>0,Xt=nn&&!!g.anisotropyMap,T=U&&!!g.clearcoatMap,x=U&&!!g.clearcoatNormalMap,z=U&&!!g.clearcoatRoughnessMap,nt=cn&&!!g.diffuseRoughnessMap,et=vt&&!!g.iridescenceMap,ft=vt&&!!g.iridescenceThicknessMap,_t=we&&!!g.sheenColorMap,J=we&&!!g.sheenRoughnessMap,Q=!!g.specularMap,pt=!!g.specularColorMap,R=!!g.specularIntensityMap,j=kt&&!!g.transmissionMap,q=kt&&!!g.thicknessMap,dt=!!g.gradientMap,ct=!!g.alphaMap,ht=g.alphaTest>0,It=!!g.alphaHash,te=!!g.extensions,at=Qn;g.toneMapped&&(Ht===null||Ht.isXRRenderTarget===!0)&&(at=i.toneMapping);let Bt=ee?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Yt={shaderID:rt,shaderType:g.type,shaderName:g.name,vertexShader:qt,fragmentShader:K,defines:g.defines,customVertexShaderID:yt,customFragmentShaderID:Lt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Y,batching:Ie,batchingColor:Ie&&N._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&N.instanceColor!==null,instancingMorph:Kt&&N.morphTexture!==null,outputColorSpace:Ht===null?i.outputColorSpace:Ht.isXRRenderTarget===!0?Ht.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ot,matcap:ue,envMap:fe,envMapMode:fe&&X.mapping,envMapPMREM:ee,envMapMaxLod:ee?Bt.length-1:null,envMapSize:ee?Bt[0].width:null,aoMap:Le,lightMap:Ue,bumpMap:Ne,normalMap:Me,displacementMap:Ye,emissiveMap:be,normalMapObjectSpace:Me&&g.normalMapType===od,normalMapTangentSpace:Me&&g.normalMapType===$c,packedNormalMap:Me&&g.normalMapType===$c&&fx(g.normalMap.format),metalnessMap:Oe,roughnessMap:Be,anisotropy:nn,anisotropyMap:Xt,clearcoat:U,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:z,diffuseRoughness:cn,diffuseRoughnessMap:nt,dispersion:ve,retroreflection:ye,iridescence:vt,iridescenceMap:et,iridescenceThicknessMap:ft,sheen:we,sheenColorMap:_t,sheenRoughnessMap:J,specularMap:Q,specularColorMap:pt,specularIntensityMap:R,transmission:kt,transmissionMap:j,thicknessMap:q,gradientMap:dt,opaque:g.transparent===!1&&g.blending===qs&&g.alphaToCoverage===!1,alphaMap:ct,alphaTest:ht,alphaHash:It,combine:g.combine,mapUv:Ot&&p(g.map.channel),aoMapUv:Le&&p(g.aoMap.channel),lightMapUv:Ue&&p(g.lightMap.channel),bumpMapUv:Ne&&p(g.bumpMap.channel),normalMapUv:Me&&p(g.normalMap.channel),displacementMapUv:Ye&&p(g.displacementMap.channel),emissiveMapUv:be&&p(g.emissiveMap.channel),metalnessMapUv:Oe&&p(g.metalnessMap.channel),roughnessMapUv:Be&&p(g.roughnessMap.channel),anisotropyMapUv:Xt&&p(g.anisotropyMap.channel),clearcoatMapUv:T&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:et&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:J&&p(g.sheenRoughnessMap.channel),specularMapUv:Q&&p(g.specularMap.channel),specularColorMapUv:pt&&p(g.specularColorMap.channel),specularIntensityMapUv:R&&p(g.specularIntensityMap.channel),transmissionMapUv:j&&p(g.transmissionMap.channel),thicknessMapUv:q&&p(g.thicknessMap.channel),alphaMapUv:ct&&p(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Me||nn),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Ot||ct),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&Me===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Et,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Ft,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(mt=>mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:Ot&&g.map.isVideoTexture===!0&&ae.getTransfer(g.map.colorSpace)===pe,decodeVideoTextureEmissive:be&&g.emissiveMap.isVideoTexture===!0&&ae.getTransfer(g.emissiveMap.colorSpace)===pe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===fn,flipSided:g.side===Qe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:te&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&g.extensions.multiDraw===!0||Ie)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function M(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let D in g.defines)S.push(D),S.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(m(S,g),d(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function m(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function d(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function y(g){let S=u[g.type],D;if(S){let C=ti[S];D=xi.clone(C.uniforms)}else D=g.uniforms;return D}function w(g,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new ux(i,S,g,s),c.push(D),h.set(S,D)),D}function b(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:y,acquireProgram:w,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:E}}function mx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Hd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,M,m,d){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:d},i[t]=y):(y.id=u.id,y.object=u,y.geometry=p,y.material=_,y.materialVariant=a(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=m,y.group=d),t++,y}function l(u,p,_,M,m,d,y){y.reversedDepth===!0&&(m=-m);let w=o(u,p,_,M,m,d);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):e.push(w)}function c(u,p,_,M,m,d){let y=o(u,p,_,M,m,d);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,p){e.length>1&&e.sort(u||gx),n.length>1&&n.sort(p||Hd),s.length>1&&s.sort(p||Hd)}function f(){for(let u=t,p=i.length;u<p;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function _x(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Gd,i.set(n,[a])):s>=r.length?(a=new Gd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function xx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Qt};break;case"SpotLight":e={position:new B,direction:new B,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function vx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function Mx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sx(i){let t=new xx,e=vx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new me,a=new me;function o(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,_=0,M=0,m=0,d=0,y=0,w=0,b=0,A=0,E=0,g=0,S=0,D=0,C=0;c.sort(Mx);for(let O=0,V=c.length;O<V;O++){let P=c[O],W=P.color,Z=P.intensity,X=P.distance,rt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ki?rt=P.shadow.map.texture:rt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=W.r*Z,f+=W.g*Z,u+=W.b*Z;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],Z);C++}else if(P.isSunLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,it=e.get(P);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[_]=it,n.sunShadowMap[_]=rt;let Ft=tt.getViewportCount();for(let qt=0;qt<Ft;qt++)n.sunShadowMatrix[M+qt]=tt.getMatrix(qt),n.sunShadowCascade[M+qt]=tt._cascadeData[qt];M+=Ft,_++}n.sun[p]=Y,p++}else if(P.isDirectionalLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,it=e.get(P);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=P.shadow.matrix,A++}n.directional[m]=Y,m++}else if(P.isSpotLight){let Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(W).multiplyScalar(Z),Y.distance=X,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[y]=Y;let tt=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,tt.updateMatrices(P),P.castShadow&&D++),n.spotLightMatrix[y]=tt.matrix,P.castShadow){let it=e.get(P);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.spotShadow[y]=it,n.spotShadowMap[y]=rt,g++}y++}else if(P.isRectAreaLight){let Y=t.get(P);Y.color.copy(W).multiplyScalar(Z),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=Y,w++}else if(P.isPointLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let tt=P.shadow,it=e.get(P);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,it.shadowCameraNear=tt.camera.near,it.shadowCameraFar=tt.camera.far,n.pointShadow[d]=it,n.pointShadowMap[d]=rt,n.pointShadowMatrix[d]=P.shadow.matrix,E++}n.point[d]=Y,d++}else if(P.isHemisphereLight){let Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(Z),Y.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[b]=Y,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let N=n.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==d||N.spotLength!==y||N.rectAreaLength!==w||N.hemiLength!==b||N.numSunShadows!==_||N.numDirectionalShadows!==A||N.numPointShadows!==E||N.numSpotShadows!==g||N.numSpotMaps!==S||N.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=d,n.hemi.length=b,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+S-D,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=C,N.sunLength=p,N.directionalLength=m,N.pointLength=d,N.spotLength=y,N.rectAreaLength=w,N.hemiLength=b,N.numSunShadows=_,N.numDirectionalShadows=A,N.numPointShadows=E,N.numSpotShadows=g,N.numSpotMaps=S,N.numLightProbes=C,n.version=yx++)}function l(c,h){let f=0,u=0,p=0,_=0,M=0,m=0,d=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let b=c[y];if(b.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(d),f++}else if(b.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),u++}else if(b.isSpotLight){let A=n.spot[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),_++}else if(b.isRectAreaLight){let A=n.rectArea[M];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){let A=n.point[p];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function Vd(i){let t=new Sx(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function bx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Vd(i),t.set(s,[o])):r>=a.length?(o=new Vd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Cx(i,t,e){let n=new ss,s=new Wt,r=new Wt,a=new Ce,o=new bo,l=new Eo,c={},h=e.maxTextureSize,f={[zi]:Qe,[Qe]:zi,[fn]:fn},u=new he({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Ex,fragmentShader:Tx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new Re;_.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ge(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zr;let d=this.type;this.render=function(E,g,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Bu&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zr);let D=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(pi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=d!==this.type;V&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=E.length;P<W;P++){let Z=E[P],X=Z.shadow;if(X===void 0){Vt("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let rt=X.getFrameExtents();s.multiply(rt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,X.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Xs){if(Z.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new ke(s.x,s.y,{format:ki,type:je,minFilter:dn,magFilter:dn,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new fi(s.x,s.y,Ln),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=hi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=qe,X.map.depthTexture.magFilter=qe}else Z.isPointLight?(X.map=new fa(s.x),X.map.depthTexture=new Hr(s.x,Gn)):(X.map=new ke(s.x,s.y),X.map.depthTexture=new fi(s.x,s.y,Gn)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=hi,this.type===Zr?(X.map.depthTexture.compareFunction=Y?Kc:Zc,X.map.depthTexture.minFilter=dn,X.map.depthTexture.magFilter=dn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=qe,X.map.depthTexture.magFilter=qe);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let tt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Z.isPointLight!==!0&&X.updateMatrices(Z,S);let it=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:S.layers;for(let Ft=0;Ft<tt;Ft++){let qt=X.getCamera(Ft);if(Z.isPointLight){let K=X.camera,yt=X.matrix,Lt=Z.distance||K.far;Lt!==K.far&&(K.far=Lt,K.updateProjectionMatrix()),ua.setFromMatrixPosition(Z.matrixWorld),K.position.copy(ua),ph.copy(K.position),ph.add(wx[Ft]),K.up.copy(Ax[Ft]),K.lookAt(ph),K.updateMatrixWorld(),yt.makeTranslation(-ua.x,-ua.y,-ua.z),Wd.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Wd,K.coordinateSystem,K.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Ft),i.clear();else{Ft===0&&(i.setRenderTarget(X.map),i.clear());let K=X.getViewport(Ft);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),O.viewport(a)}n=X.getFrustum(Ft),b(g,S,qt,Z,it,this.type)}X.isPointLightShadow!==!0&&this.type===Xs&&y(X,S),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(D,C,N)};function y(E,g){let S=t.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new ke(s.x,s.y,{format:ki,type:je}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(g,null,S,u,M,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(g,null,S,p,M,null)}function w(E,g,S,D){let C=null,N=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=S.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let O=C.uuid,V=g.uuid,P=c[O];P===void 0&&(P={},c[O]=P);let W=P[V];W===void 0&&(W=C.clone(),P[V]=W,g.addEventListener("dispose",A)),C=W}if(C.visible=g.visible,C.wireframe=g.wireframe,D===Xs?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:f[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=S}return C}function b(E,g,S,D,C,N){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Xs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let P=t.update(E),W=E.material;if(Array.isArray(W)){let Z=P.groups;for(let X=0,rt=Z.length;X<rt;X++){let Y=Z[X],tt=W[Y.materialIndex];if(tt&&tt.visible){let it=w(E,tt,D,N);E.onBeforeShadow(i,E,g,S,P,it,Y),i.renderBufferDirect(S,null,P,it,E,Y),E.onAfterShadow(i,E,g,S,P,it,Y)}}}else if(W.visible){let Z=w(E,W,D,N);E.onBeforeShadow(i,E,g,S,P,Z,null),i.renderBufferDirect(S,null,P,Z,E,null),E.onAfterShadow(i,E,g,S,P,Z,null)}}let V=E.children;for(let P=0,W=V.length;P<W;P++)b(V[P],g,S,D,C,N)}function A(E){E.target.removeEventListener("dispose",A);for(let S in c){let D=c[S],C=E.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function Rx(i,t){function e(){let R=!1,j=new Ce,q=null,dt=new Ce(0,0,0,0);return{setMask:function(ct){q!==ct&&!R&&(i.colorMask(ct,ct,ct,ct),q=ct)},setLocked:function(ct){R=ct},setClear:function(ct,ht,It,te,at){at===!0&&(ct*=te,ht*=te,It*=te),j.set(ct,ht,It,te),dt.equals(j)===!1&&(i.clearColor(ct,ht,It,te),dt.copy(j))},reset:function(){R=!1,q=null,dt.set(-1,0,0,0)}}}function n(){let R=!1,j=!1,q=null,dt=null,ct=null;return{setReversed:function(ht){if(j!==ht){let It=t.get("EXT_clip_control");ht?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),j=ht;let te=ct;ct=null,this.setClear(te)}},getReversed:function(){return j},setTest:function(ht){ht?Et(i.DEPTH_TEST):Kt(i.DEPTH_TEST)},setMask:function(ht){q!==ht&&!R&&(i.depthMask(ht),q=ht)},setFunc:function(ht){if(j&&(ht=xd[ht]),dt!==ht){switch(ht){case io:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case ro:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case oo:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=ht}},setLocked:function(ht){R=ht},setClear:function(ht){ct!==ht&&(ct=ht,j&&(ht=1-ht),i.clearDepth(ht))},reset:function(){R=!1,q=null,dt=null,ct=null,j=!1}}}function s(){let R=!1,j=null,q=null,dt=null,ct=null,ht=null,It=null,te=null,at=null;return{setTest:function(Bt){R||(Bt?Et(i.STENCIL_TEST):Kt(i.STENCIL_TEST))},setMask:function(Bt){j!==Bt&&!R&&(i.stencilMask(Bt),j=Bt)},setFunc:function(Bt,Yt,mt){(q!==Bt||dt!==Yt||ct!==mt)&&(i.stencilFunc(Bt,Yt,mt),q=Bt,dt=Yt,ct=mt)},setOp:function(Bt,Yt,mt){(ht!==Bt||It!==Yt||te!==mt)&&(i.stencilOp(Bt,Yt,mt),ht=Bt,It=Yt,te=mt)},setLocked:function(Bt){R=Bt},setClear:function(Bt){at!==Bt&&(i.clearStencil(Bt),at=Bt)},reset:function(){R=!1,j=null,q=null,dt=null,ct=null,ht=null,It=null,te=null,at=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},f={},u={},p=new WeakMap,_=[],M=null,m=!1,d=null,y=null,w=null,b=null,A=null,E=null,g=null,S=new Qt(0,0,0),D=0,C=!1,N=null,O=null,V=null,P=null,W=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,rt=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=rt>=1):Y.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=rt>=2);let tt=null,it={},Ft=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),K=new Ce().fromArray(Ft),yt=new Ce().fromArray(qt);function Lt(R,j,q,dt){let ct=new Uint8Array(4),ht=i.createTexture();i.bindTexture(R,ht),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<q;It++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(j+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ht}let Ht={};Ht[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ht[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ht[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ht[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Et(i.DEPTH_TEST),a.setFunc(Ns),Ne(!1),Me(Uc),Et(i.CULL_FACE),Le(pi);function Et(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Kt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Ie(R,j){return u[R]!==j?(i.bindFramebuffer(R,j),u[R]=j,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=j),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Ot(R,j){let q=_,dt=!1;if(R){q=p.get(j),q===void 0&&(q=[],p.set(j,q));let ct=R.textures;if(q.length!==ct.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,It=ct.length;ht<It;ht++)q[ht]=i.COLOR_ATTACHMENT0+ht;q.length=ct.length,dt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,dt=!0);dt&&i.drawBuffers(q)}function ue(R){return M!==R?(i.useProgram(R),M=R,!0):!1}let fe={[as]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[Hu]:i.FUNC_REVERSE_SUBTRACT};fe[Gu]=i.MIN,fe[Vu]=i.MAX;let ee={[Wu]:i.ZERO,[Xu]:i.ONE,[qu]:i.SRC_COLOR,[Bc]:i.SRC_ALPHA,[Qu]:i.SRC_ALPHA_SATURATE,[Ku]:i.DST_COLOR,[$u]:i.DST_ALPHA,[Yu]:i.ONE_MINUS_SRC_COLOR,[zc]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[Zu]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[td]:i.ONE_MINUS_CONSTANT_COLOR,[ed]:i.CONSTANT_ALPHA,[nd]:i.ONE_MINUS_CONSTANT_ALPHA};function Le(R,j,q,dt,ct,ht,It,te,at,Bt){if(R===pi){m===!0&&(Kt(i.BLEND),m=!1);return}if(m===!1&&(Et(i.BLEND),m=!0),R!==zu){if(R!==d||Bt!==C){if((y!==as||A!==as)&&(i.blendEquation(i.FUNC_ADD),y=as,A=as),Bt)switch(R){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$t("WebGLState: Invalid blending: ",R);break}else switch(R){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fc:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oc:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",R);break}w=null,b=null,E=null,g=null,S.set(0,0,0),D=0,d=R,C=Bt}return}ct=ct||j,ht=ht||q,It=It||dt,(j!==y||ct!==A)&&(i.blendEquationSeparate(fe[j],fe[ct]),y=j,A=ct),(q!==w||dt!==b||ht!==E||It!==g)&&(i.blendFuncSeparate(ee[q],ee[dt],ee[ht],ee[It]),w=q,b=dt,E=ht,g=It),(te.equals(S)===!1||at!==D)&&(i.blendColor(te.r,te.g,te.b,at),S.copy(te),D=at),d=R,C=!1}function Ue(R,j){R.side===fn?Kt(i.CULL_FACE):Et(i.CULL_FACE);let q=R.side===Qe;j&&(q=!q),Ne(q),R.blending===qs&&R.transparent===!1?Le(pi):Le(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let dt=R.stencilWrite;o.setTest(dt),dt&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),be(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):Kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function Me(R){R!==Fu?(Et(i.CULL_FACE),R!==O&&(R===Uc?i.cullFace(i.BACK):R===Ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Kt(i.CULL_FACE),O=R}function Ye(R){R!==V&&(X&&i.lineWidth(R),V=R)}function be(R,j,q){R?(Et(i.POLYGON_OFFSET_FILL),(P!==j||W!==q)&&(P=j,W=q,a.getReversed()&&(j=-j,q=-q),i.polygonOffset(j,q))):Kt(i.POLYGON_OFFSET_FILL)}function Oe(R){R?Et(i.SCISSOR_TEST):Kt(i.SCISSOR_TEST)}function Be(R){R===void 0&&(R=i.TEXTURE0+Z-1),tt!==R&&(i.activeTexture(R),tt=R)}function nn(R,j,q){q===void 0&&(tt===null?q=i.TEXTURE0+Z-1:q=tt);let dt=it[q];dt===void 0&&(dt={type:void 0,texture:void 0},it[q]=dt),(dt.type!==R||dt.texture!==j)&&(tt!==q&&(i.activeTexture(q),tt=q),i.bindTexture(R,j||Ht[R]),dt.type=R,dt.texture=j)}function U(){let R=it[tt];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function cn(){try{i.compressedTexImage2D(...arguments)}catch(R){$t("WebGLState:",R)}}function ve(){try{i.compressedTexImage3D(...arguments)}catch(R){$t("WebGLState:",R)}}function ye(){try{i.texSubImage2D(...arguments)}catch(R){$t("WebGLState:",R)}}function vt(){try{i.texSubImage3D(...arguments)}catch(R){$t("WebGLState:",R)}}function we(){try{i.compressedTexSubImage2D(...arguments)}catch(R){$t("WebGLState:",R)}}function kt(){try{i.compressedTexSubImage3D(...arguments)}catch(R){$t("WebGLState:",R)}}function Xt(){try{i.texStorage2D(...arguments)}catch(R){$t("WebGLState:",R)}}function T(){try{i.texStorage3D(...arguments)}catch(R){$t("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){$t("WebGLState:",R)}}function z(){try{i.texImage3D(...arguments)}catch(R){$t("WebGLState:",R)}}function nt(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function et(R,j){f[R]!==j&&(i.pixelStorei(R,j),f[R]=j)}function ft(R){K.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),K.copy(R))}function _t(R){yt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),yt.copy(R))}function J(R,j){let q=c.get(j);q===void 0&&(q=new WeakMap,c.set(j,q));let dt=q.get(R);dt===void 0&&(dt=i.getUniformBlockIndex(j,R.name),i.uniformBlockBinding(j,dt,dt),q.set(R,dt))}function Q(R,j,q){let ct=c.get(j).get(R);l[ct]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,ct,q),l[ct]=q)}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},tt=null,it={},u={},l={},p=new WeakMap,_=[],M=null,m=!1,d=null,y=null,w=null,b=null,A=null,E=null,g=null,S=new Qt(0,0,0),D=0,C=!1,N=null,O=null,V=null,P=null,W=null,K.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Et,disable:Kt,bindFramebuffer:Ie,drawBuffers:Ot,useProgram:ue,setBlending:Le,setMaterial:Ue,setFlipSided:Ne,setCullFace:Me,setLineWidth:Ye,setPolygonOffset:be,setScissorTest:Oe,activeTexture:Be,bindTexture:nn,unbindTexture:U,compressedTexImage2D:cn,compressedTexImage3D:ve,texImage2D:x,texImage3D:z,pixelStorei:et,getParameter:nt,updateUBOMapping:J,uniformBlockBinding:Q,texStorage2D:Xt,texStorage3D:T,texSubImage2D:ye,texSubImage3D:vt,compressedTexSubImage2D:we,compressedTexSubImage3D:kt,scissor:ft,viewport:_t,reset:pt}}function Px(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,h=new WeakMap,f=new Set,u,p=new WeakMap,_=new Set,M=new FinalizationRegistry(T=>_.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,x){return m?new OffscreenCanvas(T,x):Lr("canvas")}function y(T,x,z){let nt=1,et=Xt(T);if((et.width>z||et.height>z)&&(nt=z/Math.max(et.width,et.height)),nt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ft=Math.floor(nt*et.width),_t=Math.floor(nt*et.height);u===void 0&&(u=d(ft,_t));let J=x?d(ft,_t):u;return J.width=ft,J.height=_t,J.getContext("2d").drawImage(T,0,0,ft,_t),Vt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ft+"x"+_t+")."),J}else return"data"in T&&Vt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function w(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,x,z,nt,et,ft=!1){if(T!==null){if(i[T]!==void 0)return i[T];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let _t;nt&&(_t=t.get("EXT_texture_norm16"),_t||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&_t&&(J=_t.R16_EXT),z===i.SHORT&&_t&&(J=_t.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),x===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&_t&&(J=_t.RG16_EXT),z===i.SHORT&&_t&&(J=_t.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&_t&&(J=_t.RGB16_EXT),z===i.SHORT&&_t&&(J=_t.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){let Q=ft?Pr:ae.getTransfer(et);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=Q===pe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&_t&&(J=_t.RGBA16_EXT),z===i.SHORT&&_t&&(J=_t.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function g(T,x){let z;return T?x===null||x===Gn||x===ls?z=i.DEPTH24_STENCIL8:x===Ln?z=i.DEPTH32F_STENCIL8:x===$s&&(z=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gn||x===ls?z=i.DEPTH_COMPONENT24:x===Ln?z=i.DEPTH_COMPONENT32F:x===$s&&(z=i.DEPTH_COMPONENT16),z}function S(T,x){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==qe&&T.minFilter!==dn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function D(T){let x=new WeakRef(T);n.get(T).__ref=x,_.add(x),M.register(T,x,x)}function C(T){let x=n.get(T).__ref;x!==void 0&&(_.delete(x),M.unregister(x))}function N(T){V(T.target)}function O(T){P(T.target)}function V(T){T.removeEventListener("dispose",N),C(T),Z(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}function P(T){T.removeEventListener("dispose",O),C(T),rt(T)}function W(){for(let T of _){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):V(x))}_.clear(),f.clear()}function Z(T){let x=n.get(T);if(x.__webglInit===void 0)return;let z=T.source,nt=p.get(z);if(nt){let et=nt[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&X(T),Object.keys(nt).length===0&&p.delete(z)}n.remove(T)}function X(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let z=T.source,nt=p.get(z);delete nt[x.__cacheKey],a.memory.textures--}function rt(T){let x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let z=T.depthTexture;if(z&&z.renderTarget===T&&V(z),T.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(x.__webglFramebuffer[et]))for(let ft=0;ft<x.__webglFramebuffer[et].length;ft++)i.deleteFramebuffer(x.__webglFramebuffer[et][ft]);else i.deleteFramebuffer(x.__webglFramebuffer[et]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[et])}else{if(Array.isArray(x.__webglFramebuffer))for(let et=0;et<x.__webglFramebuffer.length;et++)i.deleteFramebuffer(x.__webglFramebuffer[et]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let et=0;et<x.__webglColorRenderbuffer.length;et++)x.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[et]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let nt=T.textures;for(let et=0,ft=nt.length;et<ft;et++){let _t=n.get(nt[et]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(nt[et])}n.remove(T)}let Y=0;function tt(){Y=0}function it(){return Y}function Ft(T){Y=T}function qt(){let T=Y;return T>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,T}function K(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function yt(T,x){let z=n.get(T);if(T.isVideoTexture&&we(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let nt=T.image;if(nt===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(z,T,x);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function Lt(T,x){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Ue(z,T,x);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function Ht(T,x){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Ue(z,T,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function Et(T,x){let z=n.get(T);if(T.version>0&&z.__version!==T.version){Ne(z,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let Kt={[ho]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[uo]:i.MIRRORED_REPEAT},Ie={[qe]:i.NEAREST,[rd]:i.NEAREST_MIPMAP_NEAREST,[ia]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[zo]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},Ot={[cd]:i.NEVER,[Jc]:i.ALWAYS,[hd]:i.LESS,[Zc]:i.LEQUAL,[ud]:i.EQUAL,[Kc]:i.GEQUAL,[dd]:i.GREATER,[fd]:i.NOTEQUAL};function ue(T,x){if(x.type===Ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===dn||x.magFilter===zo||x.magFilter===ia||x.magFilter===mi||x.minFilter===dn||x.minFilter===zo||x.minFilter===ia||x.minFilter===mi)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Kt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Kt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Kt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ie[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ie[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ot[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qe||x.minFilter!==ia&&x.minFilter!==mi||x.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function fe(T,x){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",N),D(x));let nt=x.source,et=p.get(nt);et===void 0&&(et={},p.set(nt,et));let ft=K(x);if(ft!==T.__cacheKey){et[ft]===void 0&&(et[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),et[ft].usedTimes++;let _t=et[T.__cacheKey];_t!==void 0&&(et[T.__cacheKey].usedTimes--,_t.usedTimes===0&&X(x)),T.__cacheKey=ft,T.__webglTexture=et[ft].texture}return z}function ee(T,x,z){return Math.floor(Math.floor(T/z)/x)}function Le(T,x,z,nt){let ft=T.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,nt,x.data);else{ft.sort((R,j)=>R.start-j.start);let _t=0;for(let R=1;R<ft.length;R++){let j=ft[_t],q=ft[R],dt=j.start+j.count,ct=ee(q.start,x.width,4),ht=ee(j.start,x.width,4);q.start<=dt+1&&ct===ht&&ee(q.start+q.count-1,x.width,4)===ct?j.count=Math.max(j.count,q.start+q.count-j.start):(++_t,ft[_t]=q)}ft.length=_t+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,j=ft.length;R<j;R++){let q=ft[R],dt=Math.floor(q.start/4),ct=Math.ceil(q.count/4),ht=dt%x.width,It=Math.floor(dt/x.width),te=ct,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,It),e.texSubImage2D(i.TEXTURE_2D,0,ht,It,te,at,z,nt,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,pt)}}function Ue(T,x,z){let nt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(nt=i.TEXTURE_3D);let et=fe(T,x),ft=x.source;e.bindTexture(nt,T.__webglTexture,i.TEXTURE0+z);let _t=n.get(ft);if(ft.version!==_t.__version||et===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let at=ae.getPrimaries(ae.workingColorSpace),Bt=x.colorSpace===_i?null:ae.getPrimaries(x.colorSpace),Yt=x.colorSpace===_i||at===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=y(x.image,!1,s.maxTextureSize);Q=kt(x,Q);let pt=r.convert(x.format,x.colorSpace),R=r.convert(x.type),j=E(x.internalFormat,pt,R,x.normalized,x.colorSpace,x.isVideoTexture);ue(nt,x);let q,dt=x.mipmaps,ct=x.isVideoTexture!==!0,ht=_t.__version===void 0||et===!0,It=ft.dataReady,te=S(x,Q);if(x.isDepthTexture)j=g(x.format===gi,x.type),ht&&(ct?e.texStorage2D(i.TEXTURE_2D,1,j,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,pt,R,null));else if(x.isDataTexture)if(dt.length>0){ct&&ht&&e.texStorage2D(i.TEXTURE_2D,te,j,dt[0].width,dt[0].height);for(let at=0,Bt=dt.length;at<Bt;at++)q=dt[at],ct?It&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,q.width,q.height,pt,R,q.data):e.texImage2D(i.TEXTURE_2D,at,j,q.width,q.height,0,pt,R,q.data);x.generateMipmaps=!1}else ct?(ht&&e.texStorage2D(i.TEXTURE_2D,te,j,Q.width,Q.height),It&&Le(x,Q,pt,R)):e.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,pt,R,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ct&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,te,j,dt[0].width,dt[0].height,Q.depth);for(let at=0,Bt=dt.length;at<Bt;at++)if(q=dt[at],x.format!==Vn)if(pt!==null)if(ct){if(It)if(x.layerUpdates.size>0){let Yt=ah(q.width,q.height,x.format,x.type);for(let mt of x.layerUpdates){let ne=q.data.subarray(mt*Yt/q.data.BYTES_PER_ELEMENT,(mt+1)*Yt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,mt,q.width,q.height,1,pt,ne)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,Q.depth,pt,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,j,q.width,q.height,Q.depth,0,q.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?It&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,Q.depth,pt,R,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,j,q.width,q.height,Q.depth,0,pt,R,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ct&&ht&&e.texStorage2D(i.TEXTURE_2D,te,j,dt[0].width,dt[0].height);for(let at=0,Bt=dt.length;at<Bt;at++)q=dt[at],x.format!==Vn?pt!==null?ct?It&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,q.width,q.height,pt,q.data):e.compressedTexImage2D(i.TEXTURE_2D,at,j,q.width,q.height,0,q.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?It&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,q.width,q.height,pt,R,q.data):e.texImage2D(i.TEXTURE_2D,at,j,q.width,q.height,0,pt,R,q.data)}else if(x.isDataArrayTexture)if(ct){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,te,j,Q.width,Q.height,Q.depth),It)if(x.layerUpdates.size>0){let at=ah(Q.width,Q.height,x.format,x.type);for(let Bt of x.layerUpdates){let Yt=Q.data.subarray(Bt*at/Q.data.BYTES_PER_ELEMENT,(Bt+1)*at/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Bt,Q.width,Q.height,1,pt,R,Yt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,R,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,pt,R,Q.data);else if(x.isData3DTexture)ct?(ht&&e.texStorage3D(i.TEXTURE_3D,te,j,Q.width,Q.height,Q.depth),It&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,R,Q.data)):e.texImage3D(i.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,pt,R,Q.data);else if(x.isFramebufferTexture){if(ht)if(ct)e.texStorage2D(i.TEXTURE_2D,te,j,Q.width,Q.height);else{let at=Q.width,Bt=Q.height;for(let Yt=0;Yt<te;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,j,at,Bt,0,pt,R,null),at>>=1,Bt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),Q.parentNode!==at){at.appendChild(Q),f.add(x),at.onpaint=Bt=>{let Yt=Bt.changedElements;for(let mt of f)Yt.includes(mt.image)&&(mt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Yt=i.RGBA,mt=i.RGBA,ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Yt,mt,ne,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(dt.length>0){if(ct&&ht){let at=Xt(dt[0]);e.texStorage2D(i.TEXTURE_2D,te,j,at.width,at.height)}for(let at=0,Bt=dt.length;at<Bt;at++)q=dt[at],ct?It&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,pt,R,q):e.texImage2D(i.TEXTURE_2D,at,j,pt,R,q);x.generateMipmaps=!1}else if(ct){if(ht){let at=Xt(Q);e.texStorage2D(i.TEXTURE_2D,te,j,at.width,at.height)}It&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,R,Q)}else e.texImage2D(i.TEXTURE_2D,0,j,pt,R,Q);w(x)&&x.mipmapsAutoUpdate===!0&&b(nt),_t.__version=ft.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ne(T,x,z){if(x.image.length!==6)return;let nt=fe(T,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let ft=n.get(et);if(et.version!==ft.__version||nt===!0){e.activeTexture(i.TEXTURE0+z);let _t=ae.getPrimaries(ae.workingColorSpace),J=x.colorSpace===_i?null:ae.getPrimaries(x.colorSpace),Q=x.colorSpace===_i||_t===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let pt=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,j=[];for(let mt=0;mt<6;mt++)!pt&&!R?j[mt]=y(x.image[mt],!0,s.maxCubemapSize):j[mt]=R?x.image[mt].image:x.image[mt],j[mt]=kt(x,j[mt]);let q=j[0],dt=r.convert(x.format,x.colorSpace),ct=r.convert(x.type),ht=E(x.internalFormat,dt,ct,x.normalized,x.colorSpace),It=x.isVideoTexture!==!0,te=ft.__version===void 0||nt===!0,at=et.dataReady,Bt=S(x,q);ue(i.TEXTURE_CUBE_MAP,x);let Yt;if(x.isDepthTexture){if(ht=g(x.format===gi,x.type),te)if(It)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ht,q.width,q.height);else for(let mt=0;mt<6;mt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ht,q.width,q.height,0,dt,ct,null)}else if(pt){It&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,ht,q.width,q.height);for(let mt=0;mt<6;mt++){Yt=j[mt].mipmaps;for(let ne=0;ne<Yt.length;ne++){let Se=Yt[ne];x.format!==Vn?dt!==null?It?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne,0,0,Se.width,Se.height,dt,Se.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne,ht,Se.width,Se.height,0,Se.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne,0,0,Se.width,Se.height,dt,ct,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne,ht,Se.width,Se.height,0,dt,ct,Se.data)}}}else{if(Yt=x.mipmaps,It&&te){Yt.length>0&&Bt++;let mt=Xt(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,ht,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(R){It?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,j[mt].width,j[mt].height,dt,ct,j[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ht,j[mt].width,j[mt].height,0,dt,ct,j[mt].data);for(let ne=0;ne<Yt.length;ne++){let Cn=Yt[ne].image[mt].image;It?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne+1,0,0,Cn.width,Cn.height,dt,ct,Cn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne+1,ht,Cn.width,Cn.height,0,dt,ct,Cn.data)}}else{It?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,dt,ct,j[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ht,dt,ct,j[mt]);for(let ne=0;ne<Yt.length;ne++){let Se=Yt[ne];It?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne+1,0,0,dt,ct,Se.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne+1,ht,dt,ct,Se.image[mt])}}}w(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),ft.__version=et.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Me(T,x,z,nt,et,ft){let _t=r.convert(z.format,z.colorSpace),J=r.convert(z.type),Q=E(z.internalFormat,_t,J,z.normalized,z.colorSpace),pt=n.get(x),R=n.get(z);if(R.__renderTarget=x,!pt.__hasExternalTextures){let j=Math.max(1,x.width>>ft),q=Math.max(1,x.height>>ft);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,ft,Q,j,q,x.depth,0,_t,J,null):e.texImage2D(et,ft,Q,j,q,0,_t,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,et,R.__webglTexture,0,ye(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,et,R.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(T,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let nt=x.depthTexture,et=nt&&nt.isDepthTexture?nt.type:null,ft=g(x.stencilBuffer,et),_t=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(x),ft,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(x),ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,T)}else{let nt=x.textures;for(let et=0;et<nt.length;et++){let ft=nt[et],_t=r.convert(ft.format,ft.colorSpace),J=r.convert(ft.type),Q=E(ft.internalFormat,_t,J,ft.normalized,ft.colorSpace);vt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(x),Q,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(x),Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(T,x,z){let nt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(x.depthTexture);et.__renderTarget=x;let ft=nt?x.depthTexture.image[0]:x.depthTexture.image;(!et.__webglTexture||ft.width!==x.width||ft.height!==x.height)&&(ft.width=x.width,ft.height=x.height,x.depthTexture.needsUpdate=!0),nt?Et(x.depthTexture,0):yt(x.depthTexture,0);let _t=et.__webglTexture,J=ye(x),Q=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,pt=x.depthTexture.format===gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===hi)vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,Q,_t,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,pt,Q,_t,0);else if(x.depthTexture.format===gi)vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,Q,_t,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,pt,Q,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(T){let x=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let nt=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),nt){let et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,nt.removeEventListener("dispose",et)};nt.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=nt}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let nt=0;nt<6;nt++)be(x.__webglFramebuffer[nt],T,nt);else T.texture.mipmaps.length>0?be(x.__webglFramebuffer[0],T,0):be(x.__webglFramebuffer,T,0);else if(z){x.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[nt]),x.__webglDepthbuffer[nt]===void 0)x.__webglDepthbuffer[nt]=i.createRenderbuffer(),Ye(x.__webglDepthbuffer[nt],T,!1);else{let et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ft)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ye(x.__webglDepthbuffer,T,!1);else{let et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ft)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(T,x,z){let nt=n.get(T);x!==void 0&&Me(nt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Oe(T)}function nn(T){let x=T.texture,z=n.get(T),nt=n.get(x);T.addEventListener("dispose",O),D(T);let et=T.textures,ft=T.isWebGLCubeRenderTarget===!0,_t=et.length>1;if(_t||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=x.version,a.memory.textures++),ft){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let Q=0;Q<x.mipmaps.length;Q++)z.__webglFramebuffer[J][Q]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(_t)for(let J=0,Q=et.length;J<Q;J++){let pt=n.get(et[J]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&vt(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<et.length;J++){let Q=et[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let pt=r.convert(Q.format,Q.colorSpace),R=r.convert(Q.type),j=E(Q.internalFormat,pt,R,Q.normalized,Q.colorSpace,T.isXRRenderTarget===!0),q=ye(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,j,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),ue(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Me(z.__webglFramebuffer[J][Q],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else Me(z.__webglFramebuffer[J],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);w(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let J=0,Q=et.length;J<Q;J++){let pt=et[J],R=n.get(pt),j=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,R.__webglTexture),ue(j,pt),Me(z.__webglFramebuffer,T,pt,i.COLOR_ATTACHMENT0+J,j,0),w(pt)&&b(j)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,nt.__webglTexture),ue(J,x),x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Me(z.__webglFramebuffer[Q],T,x,i.COLOR_ATTACHMENT0,J,Q);else Me(z.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,J,0);w(x)?b(J):x.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&Oe(T)}function U(T){let x=T.textures;for(let z=0,nt=x.length;z<nt;z++){let et=x[z];if(w(et)&&et.mipmapsAutoUpdate===!0){let ft=A(T),_t=n.get(et).__webglTexture;e.bindTexture(ft,_t),b(ft),e.unbindTexture()}}}let cn=[];function ve(T){if(T.samples>0){if(vt(T)===!1){let x=T.textures,z=T.width,nt=T.height,et=i.COLOR_BUFFER_BIT,ft=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(T),J=x.length>1;if(J)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[pt]);let R=n.get(x[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,z,nt,0,0,z,nt,et,i.NEAREST),l===!0&&(cn.length=0,cn.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&cn.push(ft),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,cn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[pt]);let R=n.get(x[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,R,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ye(T){return Math.min(s.maxSamples,T.samples)}function vt(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function we(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function kt(T,x){let z=T.colorSpace,nt=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Rr&&z!==_i&&(ae.getTransfer(z)===pe?(nt!==Vn||et!==bn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",z)),x}function Xt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=qt,this.resetTextureUnits=tt,this.getTextureUnits=it,this.setTextureUnits=Ft,this.setTexture2D=yt,this.setTexture2DArray=Lt,this.setTexture3D=Ht,this.setTextureCube=Et,this.rebindTextures=Be,this.setupRenderTarget=nn,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=vt,this.dispose=W}function Ix(i,t){function e(n,s=_i){let r,a=ae.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===je)return i.HALF_FLOAT;if(n===qc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===Vn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===Vo)return i.RED;if(n===Wo)return i.RED_INTEGER;if(n===ki)return i.RG;if(n===Xo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===sa||n===ra||n===aa||n===oa)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===$o||n===Zo||n===Ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===Qo||n===jo||n===tl||n===el||n===la||n===nl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jo||n===Qo)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tl)return r.COMPRESSED_R11_EAC;if(n===el)return r.COMPRESSED_SIGNED_R11_EAC;if(n===la)return r.COMPRESSED_RG11_EAC;if(n===nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===il)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===al)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ul)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ml)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_l||n===xl||n===vl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_l)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===Ml||n===ca||n===Sl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function Ux(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ih(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,w,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),M(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Qe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Qe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=t.get(d),w=y.envMap,b=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ef),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=w*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,e(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){let y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fx(i,t,e,n){let s={},r={};function a(y,w){let b=w.program;n.uniformBlockBinding(y,b,s[y.id])}function o(y,w){let b=s[y.id];b===void 0&&(_(y),b=l(y),s[y.id]=b,y.addEventListener("dispose",m));let A=w.program;n.updateUBOMapping(y,A);let E=t.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let w=i.createBuffer(),b=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(y){let w=s[y.id],b=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,g=b.length;E<g;E++){let S=b[E];if(Array.isArray(S))for(let D=0,C=S.length;D<C;D++)h(S[D],E,D,A);else h(S,E,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,w,b,A){if(u(y,w,b,A)===!0){let E=y.__offset,g=y.value;if(Array.isArray(g)){let S=0;for(let D=0;D<g.length;D++){let C=g[D],N=M(C,!0);f(C,y.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,y.__data)}}function f(y,w,b){typeof y=="number"||typeof y=="boolean"?w[b]=y:y.isMatrix3?(w[b]=y.elements[0],w[b+1]=y.elements[1],w[b+2]=y.elements[2],w[b+3]=0,w[b+4]=y.elements[3],w[b+5]=y.elements[4],w[b+6]=y.elements[5],w[b+7]=0,w[b+8]=y.elements[6],w[b+9]=y.elements[7],w[b+10]=y.elements[8],w[b+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-b),b):y.toArray(w,b)}function u(y,w,b,A){let E=y.value,g=w+"_"+b;if(Array.isArray(E)){A[g]===void 0&&(A[g]=[]);let S=A[g],D=!1;for(let C=0;C<E.length;C++)p(E[C],S,C)===!0&&(D=!0);return D}return p(E,A,g)}function p(y,w,b){if(w[b]===void 0)return typeof y=="number"||typeof y=="boolean"?w[b]=y:ArrayBuffer.isView(y)?w[b]=y.slice():w[b]=y.clone(),!0;{let A=w[b];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return w[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function _(y){let w=y.uniforms,b=0,A=16;for(let g=0,S=w.length;g<S;g++){let D=Array.isArray(w[g])?w[g]:[w[g]];for(let C=0,N=D.length;C<N;C++){let O=D[C],V=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(w[g])||Array.isArray(O.value),W=b;for(let X=0,rt=V.length;X<rt;X++){let Y=V[X],tt=M(Y,P),it=b%A,Ft=it%tt.boundary,qt=it+Ft;b+=Ft,qt!==0&&A-qt<tt.storage&&(b+=A-qt),X===0&&(W=b),b+=tt.storage}let Z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Z((b-W)/Float32Array.BYTES_PER_ELEMENT),O.__offset=W}}let E=b%A;return E>0&&(b+=A-E),y.__size=b,y.__cache={},this}function M(y,w){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(y){let w=y.target;w.removeEventListener("dispose",m),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:d}}function Bx(){return jn===null&&(jn=new Or(Ox,16,16,ki,je),jn.name="DFG_LUT",jn.minFilter=dn,jn.magFilter=dn,jn.wrapS=$n,jn.wrapT=$n,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}var em,nm,im,sm,rm,am,om,lm,cm,hm,um,dm,fm,pm,mm,gm,_m,xm,vm,ym,Mm,Sm,bm,Em,Tm,wm,Am,Cm,Rm,Pm,Im,Lm,Dm,Nm,Um,Fm,Om,Bm,zm,km,Hm,Gm,Vm,Wm,Xm,qm,Ym,$m,Zm,Km,Jm,Qm,jm,tg,eg,ng,ig,sg,rg,ag,og,lg,cg,hg,ug,dg,fg,pg,mg,gg,_g,xg,vg,yg,Mg,Sg,bg,Eg,Tg,wg,Ag,Cg,Rg,Pg,Ig,Lg,Dg,Ng,Ug,Fg,Og,Bg,zg,kg,Hg,Gg,Vg,Wg,Xg,qg,Yg,$g,Zg,Kg,Jg,Qg,jg,t0,e0,n0,i0,s0,r0,a0,o0,l0,c0,h0,u0,d0,f0,p0,m0,g0,_0,x0,v0,y0,M0,S0,b0,E0,T0,w0,A0,C0,R0,P0,I0,L0,D0,ie,Tt,ti,El,N0,qd,fa,Ed,k0,H0,Yd,$d,G0,V0,W0,wl,e_,Zd,Kd,Jd,Qd,jd,tf,Cd,Rd,Pd,Id,Ld,mh,gh,_h,fh,Ks,W_,X_,Ud,Z_,Tl,ex,ix,rx,ox,cx,dx,vh,yh,yx,Ex,Tx,wx,Ax,Wd,ua,ph,Lx,Dx,Mh,Sh,Nx,ef,Ox,jn,Al,vi=Je(()=>{dh();dh();em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,om=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
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
#endif`,um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pm=`#ifdef USE_IRIDESCENCE
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
#endif`,mm=`#ifdef USE_BUMPMAP
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Em=`#define PI 3.141592653589793
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
} // validated`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
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
#endif`,Qm=`uniform sampler2D dfgLUT;
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
}`,jm=`
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
#endif`,tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hg=`#if defined( USE_POINTS_UV )
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
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pg=`#if defined( USE_MORPHCOLORS )
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
#endif`,mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
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
#endif`,_g=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
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
#endif`,Eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
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
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ug=`#ifdef USE_ROUGHNESSMAP
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
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zg=`float getShadowMask() {
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
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform float backgroundBlurriness;
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`#include <common>
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
}`,o0=`#if DEPTH_PACKING == 3200
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
}`,l0=`#define DISTANCE
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
}`,c0=`#define DISTANCE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`uniform float scale;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#define LAMBERT
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
}`,_0=`#define LAMBERT
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
}`,x0=`#define MATCAP
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
}`,v0=`#define MATCAP
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
}`,y0=`#define NORMAL
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
}`,M0=`#define NORMAL
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
}`,S0=`#define PHONG
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
}`,b0=`#define PHONG
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
}`,E0=`#define STANDARD
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
}`,T0=`#define STANDARD
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
}`,w0=`#define TOON
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
}`,A0=`#define TOON
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
}`,C0=`uniform float size;
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
}`,R0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,I0=`uniform vec3 color;
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
}`,L0=`uniform float rotation;
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
}`,D0=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:em,alphahash_pars_fragment:nm,alphamap_fragment:im,alphamap_pars_fragment:sm,alphatest_fragment:rm,alphatest_pars_fragment:am,aomap_fragment:om,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:hm,begin_vertex:um,beginnormal_vertex:dm,bsdfs:fm,iridescence_fragment:pm,bumpmap_pars_fragment:mm,clipping_planes_fragment:gm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:xm,clipping_planes_vertex:vm,color_fragment:ym,color_pars_fragment:Mm,color_pars_vertex:Sm,color_vertex:bm,common:Em,defaultnormal_vertex:Tm,displacementmap_pars_vertex:wm,displacementmap_vertex:Am,emissivemap_fragment:Cm,emissivemap_pars_fragment:Rm,colorspace_fragment:Pm,colorspace_pars_fragment:Im,envmap_fragment:Lm,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Nm,envmap_pars_vertex:Um,envmap_physical_pars_fragment:qm,envmap_vertex:Fm,fog_vertex:Om,fog_pars_vertex:Bm,fog_fragment:zm,fog_pars_fragment:km,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Wm,lights_pars_begin:Xm,lights_toon_fragment:Ym,lights_toon_pars_fragment:$m,lights_phong_fragment:Zm,lights_phong_pars_fragment:Km,lights_physical_fragment:Jm,lights_physical_pars_fragment:Qm,lights_fragment_begin:jm,lights_fragment_maps:tg,lights_fragment_end:eg,lightprobes_pars_fragment:ng,logdepthbuf_fragment:ig,logdepthbuf_pars_fragment:sg,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:ag,map_fragment:og,map_pars_fragment:lg,map_particle_fragment:cg,map_particle_pars_fragment:hg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:dg,morphinstance_vertex:fg,morphcolor_vertex:pg,morphnormal_vertex:mg,morphtarget_pars_vertex:gg,morphtarget_vertex:_g,normal_fragment_begin:xg,normal_fragment_maps:vg,normal_pars_fragment:yg,normal_pars_vertex:Mg,normal_vertex:Sg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:Eg,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:wg,iridescence_pars_fragment:Ag,opaque_fragment:Cg,packing:Rg,premultiplied_alpha_fragment:Pg,project_vertex:Ig,dithering_fragment:Lg,dithering_pars_fragment:Dg,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:Ug,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Og,shadowmap_vertex:Bg,shadowmask_pars_fragment:zg,skinbase_vertex:kg,skinning_pars_vertex:Hg,skinning_vertex:Gg,skinnormal_vertex:Vg,specularmap_fragment:Wg,specularmap_pars_fragment:Xg,tonemapping_fragment:qg,tonemapping_pars_fragment:Yg,transmission_fragment:$g,transmission_pars_fragment:Zg,uv_pars_fragment:Kg,uv_pars_vertex:Jg,uv_vertex:Qg,worldpos_vertex:jg,background_vert:t0,background_frag:e0,backgroundCube_vert:n0,backgroundCube_frag:i0,cube_vert:s0,cube_frag:r0,depth_vert:a0,depth_frag:o0,distance_vert:l0,distance_frag:c0,equirect_vert:h0,equirect_frag:u0,linedashed_vert:d0,linedashed_frag:f0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:g0,meshlambert_frag:_0,meshmatcap_vert:x0,meshmatcap_frag:v0,meshnormal_vert:y0,meshnormal_frag:M0,meshphong_vert:S0,meshphong_frag:b0,meshphysical_vert:E0,meshphysical_frag:T0,meshtoon_vert:w0,meshtoon_frag:A0,points_vert:C0,points_frag:R0,shadow_vert:P0,shadow_frag:I0,sprite_vert:L0,sprite_frag:D0},Tt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ti={basic:{uniforms:on([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:on([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:on([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:on([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:on([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:on([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:on([Tt.points,Tt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:on([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:on([Tt.common,Tt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:on([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:on([Tt.sprite,Tt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:on([Tt.common,Tt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:on([Tt.lights,Tt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};ti.physical={uniforms:on([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};El={r:0,b:0,g:0},N0=new me,qd=new Jt;qd.set(-1,0,0,0,1,0,0,0,1);fa=class extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new kr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hs(5,5,5),r=new he({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:pi});r.uniforms.tEquirect.value=e;let a=new ge(s,r),o=e.minFilter;return e.minFilter===mi&&(e.minFilter=dn),new Ws(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ed=256,k0=3,H0=20,Yd=256,$d=16,G0=3,V0=new B,W0=new Qt,wl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ws(1,10,null),this._boxMesh=new ge(new Hs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=V0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(W0));let m=new Ws(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=_,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ed,eh(t))}_fromTexture(t,e){t.mapping===os||t.mapping===Ys?this._setSize(t.image.length===0?Ed:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Td(t,!1,!1),n=Math.log2(t)-k0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Td(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===os||t.mapping===Ys?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=X0(),this._integrationMaterial=q0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/$d);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-G0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Yd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Y0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};e_={[Kr]:"LINEAR_TONE_MAPPING",[Jr]:"REINHARD_TONE_MAPPING",[Qr]:"CINEON_TONE_MAPPING",[jr]:"ACES_FILMIC_TONE_MAPPING",[ea]:"AGX_TONE_MAPPING",[na]:"NEUTRAL_TONE_MAPPING",[ta]:"CUSTOM_TONE_MAPPING"};Zd=new mn,Kd=new fi(1,1),Jd=new Hr(1),Qd=new Dr,jd=new go,tf=new kr,Cd=[],Rd=[],Pd=new Float32Array(16),Id=new Float32Array(9),Ld=new Float32Array(4);mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=S_(e.type)}},gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G_(e.type)}},_h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},fh=/(\w+)(\])?(\[|\.)?/g;Ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);V_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};W_=37297,X_=0;Ud=new Jt;Z_={[Kr]:"Linear",[Jr]:"Reinhard",[Qr]:"Cineon",[jr]:"ACESFilmic",[ea]:"AgX",[na]:"Neutral",[ta]:"Custom"};Tl=new B;ex=/^[ \t]*#include +<([\w\d./]+)>/gm;ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;rx={[Zr]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};ox={[Ys]:"ENVMAP_MODE_REFRACTION"};cx={[kc]:"ENVMAP_BLENDING_MULTIPLY",[id]:"ENVMAP_BLENDING_MIX",[sd]:"ENVMAP_BLENDING_ADD"};dx=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yh(t),e.set(t,n)),n}},yh=class{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}};yx=0;Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
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
}`,wx=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Ax=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Wd=new me,ua=new B,ph=new B;Lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
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

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new he({vertexShader:Lx,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends Zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,_=null,M=typeof XRWebGLBinding<"u",m=new Mh,d={},y=e.getContextAttributes(),w=null,b=null,A=[],E=[],g=new Wt,S=null,D=null,C=new un;C.viewport=new Ce;let N=new un;N.viewport=new Ce;let O=[C,N],V=new Uo,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let yt=A[K];return yt===void 0&&(yt=new zs,A[K]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(K){let yt=A[K];return yt===void 0&&(yt=new zs,A[K]=yt),yt.getGripSpace()},this.getHand=function(K){let yt=A[K];return yt===void 0&&(yt=new zs,A[K]=yt),yt.getHandSpace()};function Z(K){let yt=E.indexOf(K.inputSource);if(yt===-1)return;let Lt=A[yt];Lt!==void 0&&(Lt.update(K.inputSource,K.frame,c||a),Lt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",rt);for(let K=0;K<A.length;K++){let yt=E[K];yt!==null&&(E[K]=null,A[K].disconnect(yt))}P=null,W=null,m.reset();for(let K in d)delete d[K];if(t.setRenderTarget(w),p=null,u=null,f=null,s=null,b=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(g.width,g.height,!1),D!==null){let K=D.camera;K.fov=D.fov,K.zoom=D.zoom,K.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",rt),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Ht=null,Et=null;y.depth&&(Et=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=y.stencil?gi:hi,Ht=y.stencil?ls:Gn);let Kt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new ke(u.textureWidth,u.textureHeight,{format:Vn,type:bn,depthTexture:new fi(u.textureWidth,u.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Lt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ke(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(K){for(let yt=0;yt<K.removed.length;yt++){let Lt=K.removed[yt],Ht=E.indexOf(Lt);Ht>=0&&(E[Ht]=null,A[Ht].disconnect(Lt))}for(let yt=0;yt<K.added.length;yt++){let Lt=K.added[yt],Ht=E.indexOf(Lt);if(Ht===-1){for(let Kt=0;Kt<A.length;Kt++)if(Kt>=E.length){E.push(Lt),Ht=Kt;break}else if(E[Kt]===null){E[Kt]=Lt,Ht=Kt;break}if(Ht===-1)break}let Et=A[Ht];Et&&Et.connect(Lt)}}function Y(K,yt){yt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(yt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let yt=K.near,Lt=K.far;m.texture!==null&&(m.depthNear>0&&(yt=m.depthNear),m.depthFar>0&&(Lt=m.depthFar)),V.near=N.near=C.near=yt,V.far=N.far=C.far=Lt,(P!==V.near||W!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,W=V.far),V.layers.mask=K.layers.mask|6,C.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let Ht=K.parent,Et=V.cameras;Y(V,Ht);for(let Kt=0;Kt<Et.length;Kt++)Y(Et[Kt],Ht);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&K.isPerspectiveCamera&&(D={camera:K,fov:K.fov,zoom:K.zoom}),tt(K,V,Ht)};function tt(K,yt,Lt){Lt===null?K.matrix.copy(yt.matrixWorld):(K.matrix.copy(Lt.matrixWorld),K.matrix.invert(),K.matrix.multiply(yt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(yt.projectionMatrix),K.projectionMatrixInverse.copy(yt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(K){return d[K]};let it=null;function Ft(K,yt){if(h=yt.getViewerPose(c||a),_=yt,h!==null){let Lt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let Ht=!1;Lt.length!==V.cameras.length&&(V.cameras.length=0,Ht=!0);for(let Ot=0;Ot<Lt.length;Ot++){let ue=Lt[Ot],fe=null;if(p!==null)fe=p.getViewport(ue);else{let Le=f.getViewSubImage(u,ue);fe=Le.viewport,Ot===0&&(t.setRenderTargetTextures(b,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(b))}let ee=O[Ot];ee===void 0&&(ee=new un,ee.layers.enable(Ot),ee.viewport=new Ce,O[Ot]=ee),ee.matrix.fromArray(ue.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(fe.x,fe.y,fe.width,fe.height),Ot===0&&(V.matrix.copy(ee.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ht===!0&&V.cameras.push(ee)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let Ot=f.getDepthInformation(Lt[0]);Ot&&Ot.isValid&&Ot.texture&&m.init(Ot,s.renderState)}if(Et&&Et.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let Ot=0;Ot<Lt.length;Ot++){let ue=Lt[Ot].camera;if(ue){let fe=d[ue];fe||(fe=new Gr,d[ue]=fe);let ee=f.getCameraImage(ue);fe.sourceTexture=ee}}}}for(let Lt=0;Lt<A.length;Lt++){let Ht=E[Lt],Et=A[Lt];Ht!==null&&Et!==void 0&&Et.update(Ht,yt,c||a)}it&&it(K,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),_=null}let qt=new Xd;qt.setAnimationLoop(Ft),this.setAnimationLoop=function(K){it=K},this.dispose=function(){}}},Nx=new me,ef=new Jt;ef.set(-1,0,0,0,1,0,0,0,1);Ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jn=null;Al=class{constructor(t={}){let{canvas:e=md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=bn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let M=p,m=new Set([qo,Xo,Wo]),d=new Set([bn,Gn,$s,ls,Ho,Go]),y=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,E=null,g=[],S=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,O=null,V=null,P=null,W=null;this._outputColorSpace=hn;let Z=0,X=0,rt=null,Y=-1,tt=null,it=new Ce,Ft=new Ce,qt=null,K=new Qt(0),yt=0,Lt=e.width,Ht=e.height,Et=1,Kt=null,Ie=null,Ot=new Ce(0,0,Lt,Ht),ue=new Ce(0,0,Lt,Ht),fe=!1,ee=new ss,Le=new _o,Ue=!1,Ne=!1,Me=new me,Ye=new B,be=new Ce,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function nn(){return rt===null?Et:1}let U=n;function cn(v,I){return e.getContext(v,I)}let ve,ye,vt,we,kt,Xt,T,x,z,nt,et,ft,_t,J,Q,pt,R,j,q,dt,ct,ht,It;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),U===null){let I="webgl2";if(U=cn(I,v),U===null)throw cn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}te()}catch(v){throw e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),$t("WebGLRenderer: "+v.message),v}function te(){ve=new Z0(U),ve.init(),ct=new Ix(U,ve),ye=new B0(U,ve,t,ct),vt=new Rx(U,ve),ye.reversedDepthBuffer&&u&&vt.buffers.depth.setReversed(!0),V=U.createFramebuffer(),P=U.createFramebuffer(),W=U.createFramebuffer(),we=new Q0(U),kt=new mx,Xt=new Px(U,ve,vt,kt,ye,ct,we),T=new $0(C),x=new tm(U),ht=new F0(U,x),z=new K0(U,x,we,ht),nt=new t_(U,z,x,ht,we),j=new j0(U,ye,Xt),Q=new z0(kt),et=new px(C,T,ve,ye,ht,Q),ft=new Ux(C,kt),_t=new _x,J=new bx(ve),R=new U0(C,T,vt,nt,_,l),pt=new Cx(C,nt,ye),It=new Fx(U,we,ye,vt),q=new O0(U,ve,we),dt=new J0(U,ve,we),we.programs=et.programs,C.capabilities=ye,C.extensions=ve,C.properties=kt,C.renderLists=_t,C.shadowMap=pt,C.state=vt,C.info=we}M!==bn&&(D=new n_(M,e.width,e.height,o,s,r));let at=new Sh(C,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=ve.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ve.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(v){v!==void 0&&(Et=v,this.setSize(Lt,Ht,!1))},this.getSize=function(v){return v.set(Lt,Ht)},this.setSize=function(v,I,G=!0){if(at.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=v,Ht=I,e.width=Math.floor(v*Et),e.height=Math.floor(I*Et),G===!0&&(e.style.width=v+"px",e.style.height=I+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(Lt*Et,Ht*Et).floor()},this.setDrawingBufferSize=function(v,I,G){Lt=v,Ht=I,Et=G,e.width=Math.floor(v*G),e.height=Math.floor(I*G),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(M===bn){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(it)},this.getViewport=function(v){return v.copy(Ot)},this.setViewport=function(v,I,G,k){v.isVector4?Ot.set(v.x,v.y,v.z,v.w):Ot.set(v,I,G,k),vt.viewport(it.copy(Ot).multiplyScalar(nn()).round())},this.getScissor=function(v){return v.copy(ue)},this.setScissor=function(v,I,G,k){v.isVector4?ue.set(v.x,v.y,v.z,v.w):ue.set(v,I,G,k),vt.scissor(Ft.copy(ue).multiplyScalar(nn()).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(v){vt.setScissorTest(fe=v)},this.setOpaqueSort=function(v){Kt=v},this.setTransparentSort=function(v){Ie=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,G=!0){let k=0;if(v){let H=!1;if(rt!==null){let gt=rt.texture.format;H=m.has(gt)}if(H){let gt=rt.texture.type,St=d.has(gt),lt=R.getClearColor(),Mt=R.getClearAlpha(),Dt=lt.r,Zt=lt.g,re=lt.b;St?(y[0]=Dt,y[1]=Zt,y[2]=re,y[3]=Mt,U.clearBufferuiv(U.COLOR,0,y)):(w[0]=Dt,w[1]=Zt,w[2]=re,w[3]=Mt,U.clearBufferiv(U.COLOR,0,w))}else k|=U.COLOR_BUFFER_BIT}I&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),R.dispose(),_t.dispose(),J.dispose(),Xt.dispose(),kt.dispose(),T.dispose(),nt.dispose(),z.dispose(),ht.dispose(),It.dispose(),et.dispose(),at.dispose(),at.removeEventListener("sessionstart",Ta),at.removeEventListener("sessionend",pr),qn.stop()};function Bt(v){v.preventDefault(),jc("WebGLRenderer: Context Lost."),N=!0}function Yt(){jc("WebGLRenderer: Context Restored."),N=!1;let v=we.autoReset,I=pt.enabled,G=pt.autoUpdate,k=pt.needsUpdate,H=pt.type;te(),we.autoReset=v,pt.enabled=I,pt.autoUpdate=G,pt.needsUpdate=k,pt.type=H}function mt(v){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ne(v){let I=v.target;I.removeEventListener("dispose",ne),Se(I)}function Se(v){Cn(v),kt.remove(v)}function Cn(v){let I=kt.get(v).programs;I!==void 0&&(I.forEach(function(G){et.releaseProgram(G)}),v.isShaderMaterial&&et.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,G,k,H,gt){I===null&&(I=Oe);let St=H.isMesh&&H.matrixWorld.determinantAffine()<0,lt=Ca(v,I,G,k,H);vt.setMaterial(k,St);let Mt=G.index,Dt=1;if(k.wireframe===!0){if(Mt=z.getWireframeAttribute(G),Mt===void 0)return;Dt=2}let Zt=G.drawRange,re=G.attributes.position,Pt=Zt.start*Dt,jt=(Zt.start+Zt.count)*Dt;gt!==null&&(Pt=Math.max(Pt,gt.start*Dt),jt=Math.min(jt,(gt.start+gt.count)*Dt)),Mt!==null?(Pt=Math.max(Pt,0),jt=Math.min(jt,Mt.count)):re!=null&&(Pt=Math.max(Pt,0),jt=Math.min(jt,re.count));let Ae=jt-Pt;if(Ae<0||Ae===1/0)return;ht.setup(H,k,lt,G,Mt);let le,_e=q;if(Mt!==null&&(le=x.get(Mt),_e=dt,_e.setIndex(le)),H.isMesh)k.wireframe===!0?(vt.setLineWidth(k.wireframeLinewidth*nn()),_e.setMode(U.LINES)):_e.setMode(U.TRIANGLES);else if(H.isLine){let wt=k.linewidth;wt===void 0&&(wt=1),vt.setLineWidth(wt*nn()),H.isLineSegments?_e.setMode(U.LINES):H.isLineLoop?_e.setMode(U.LINE_LOOP):_e.setMode(U.LINE_STRIP)}else H.isPoints?_e.setMode(U.POINTS):H.isSprite&&_e.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))_e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let wt=H._multiDrawStarts,Nt=H._multiDrawCounts,Ze=H._multiDrawCount,de=Mt?x.get(Mt).bytesPerElement:1,wi=kt.get(k).currentProgram.getUniforms();for(let F=0;F<Ze;F++)wi.setValue(U,"_gl_DrawID",F),_e.render(wt[F]/de,Nt[F])}else if(H.isInstancedMesh)_e.renderInstances(Pt,Ae,H.count);else if(G.isInstancedBufferGeometry){let wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Nt=Math.min(G.instanceCount,wt);_e.renderInstances(Pt,Ae,Nt)}else _e.render(Pt,Ae)};function Fn(v,I,G,k){O!==null&&v.isNodeMaterial&&O.setObject(k,v),Ue===!0&&Q.setState(v,G,!1),v.transparent===!0&&v.side===fn&&v.forceSinglePass===!1?(v.side=Qe,v.needsUpdate=!0,Zi(v,I,k),v.side=zi,v.needsUpdate=!0,Zi(v,I,k),v.side=fn):Zi(v,I,k)}this.compile=function(v,I,G=null){G===null&&(G=v),O!==null&&O.renderStart(v,I,G),E=J.get(G),E.init(I),S.push(E),G.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),v!==G&&v.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),Ne=this.localClippingEnabled,Ue=Q.init(this.clippingPlanes,Ne),Ue===!0&&Q.setGlobalState(this.clippingPlanes,I),O!==null&&pt.render(E.state.shadowsArray,G,I);let k=new Set;return v.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let gt=H.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){let lt=gt[St];Fn(lt,G,I,H),k.add(lt)}else Fn(gt,G,I,H),k.add(gt)}),E=S.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(v,I,G=null){let k=this.compile(v,I,G);return new Promise(H=>{function gt(){if(k.forEach(function(St){let Mt=kt.get(St).currentProgram;(Mt===void 0||Mt.isReady())&&k.delete(St)}),k.size===0){H(v);return}setTimeout(gt,10)}ve.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let fr=null;function Ea(v){fr&&fr(v)}function Ta(){qn.stop()}function pr(){qn.start()}let qn=new Xd;qn.setAnimationLoop(Ea),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(v){fr=v,at.setAnimationLoop(v),v===null?qn.stop():qn.start()},at.addEventListener("sessionstart",Ta),at.addEventListener("sessionend",pr),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(v,I);let G=at.enabled===!0&&at.isPresenting===!0,k=D!==null&&(rt===null||G)&&D.begin(C,rt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(I),I=at.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,I,rt),E=J.get(v,S.length),E.init(I),E.state.textureUnits=Xt.getTextureUnits(),S.push(E),Me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Le.setFromArrayCamera(I):ee.setFromProjectionMatrix(Me,Pn,I.reversedDepth),Ne=this.localClippingEnabled,Ue=Q.init(this.clippingPlanes,Ne),A=_t.get(v,g.length),A.init(),g.push(A),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let St=C.xr.getDepthSensingMesh();St!==null&&xs(St,I,-1/0,C.sortObjects)}xs(v,I,0,C.sortObjects),A.finish(),O!==null&&O.updateLights(E.state.lightsArray),C.sortObjects===!0&&A.sort(Kt,Ie),Be=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Be&&R.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),Ue===!0&&Q.beginShadows();let H=E.state.shadowsArray;if(pt.render(H,v,I),Ue===!0&&Q.endShadows(),(k&&D.hasRenderPass())===!1){let St=A.opaque,lt=A.transmissive;if(E.setupLights(),I.isArrayCamera){let Mt=I.cameras;if(lt.length>0)for(let Dt=0,Zt=Mt.length;Dt<Zt;Dt++){let re=Mt[Dt];Aa(St,lt,v,re)}Be&&R.render(v);for(let Dt=0,Zt=Mt.length;Dt<Zt;Dt++){let re=Mt[Dt];wa(A,v,re,re.viewport)}}else lt.length>0&&Aa(St,lt,v,I),Be&&R.render(v),wa(A,v,I)}rt!==null&&X===0&&(Xt.updateMultisampleRenderTarget(rt),Xt.updateRenderTargetMipmap(rt)),k&&D.end(C),v.isScene===!0&&v.onAfterRender(C,v,I),ht.resetDefaultState(),Y=-1,tt=null,S.pop(),S.length>0?(E=S[S.length-1],Xt.setTextureUnits(E.state.textureUnits),Ue===!0&&Q.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,O!==null&&O.renderEnd()};function xs(v,I,G,k){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){let St=I.isArrayCamera?Le:ee;if(!v.frustumCulled||v.intersectsFrustum(St)){k&&be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Me);let lt=nt.update(v),Mt=v.material;Mt.visible&&A.push(v,lt,Mt,G,be.z,null,I)}}else if(v.isMesh||v.isLine||v.isPoints){let St=I.isArrayCamera?Le:ee;if(!v.frustumCulled||v.intersectsFrustum(St)){let lt=nt.update(v),Mt=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),be.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),be.copy(lt.boundingSphere.center)),be.applyMatrix4(v.matrixWorld).applyMatrix4(Me)),Array.isArray(Mt)){let Dt=lt.groups;for(let Zt=0,re=Dt.length;Zt<re;Zt++){let Pt=Dt[Zt],jt=Mt[Pt.materialIndex];jt&&jt.visible&&A.push(v,lt,jt,G,be.z,Pt,I)}}else Mt.visible&&A.push(v,lt,Mt,G,be.z,null,I)}}}let gt=v.children;for(let St=0,lt=gt.length;St<lt;St++)xs(gt[St],I,G,k)}function wa(v,I,G,k){let{opaque:H,transmissive:gt,transparent:St}=v;E.setupLightsView(G),Ue===!0&&Q.setGlobalState(C.clippingPlanes,G),k&&vt.viewport(it.copy(k)),H.length>0&&xn(H,I,G),gt.length>0&&xn(gt,I,G),St.length>0&&xn(St,I,G),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Aa(v,I,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Pt=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new ke(1,1,{generateMipmaps:!0,type:Pt?je:bn,minFilter:mi,samples:Math.max(4,ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let gt=E.state.transmissionRenderTarget[k.id],St=k.viewport||it;gt.setSize(St.z*C.transmissionResolutionScale,St.w*C.transmissionResolutionScale);let lt=C.getRenderTarget(),Mt=C.getActiveCubeFace(),Dt=C.getActiveMipmapLevel();C.setRenderTarget(gt),C.getClearColor(K),yt=C.getClearAlpha(),yt<1&&C.setClearColor(16777215,.5),C.clear(),Be&&R.render(G);let Zt=C.toneMapping;C.toneMapping=Qn;let re=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),Ue===!0&&Q.setGlobalState(C.clippingPlanes,k),xn(v,G,k),Xt.updateMultisampleRenderTarget(gt),Xt.updateRenderTargetMipmap(gt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let jt=0,Ae=I.length;jt<Ae;jt++){let le=I[jt],{object:_e,geometry:wt,material:Nt,group:Ze}=le;if(Nt.side===fn&&_e.layers.test(k.layers)){let de=Nt.side;Nt.side=Qe,Nt.needsUpdate=!0,Ti(_e,G,k,wt,Nt,Ze),Nt.side=de,Nt.needsUpdate=!0,Pt=!0}}Pt===!0&&(Xt.updateMultisampleRenderTarget(gt),Xt.updateRenderTargetMipmap(gt))}C.setRenderTarget(lt,Mt,Dt),C.setClearColor(K,yt),re!==void 0&&(k.viewport=re),C.toneMapping=Zt}function xn(v,I,G){let k=I.isScene===!0?I.overrideMaterial:null;for(let H=0,gt=v.length;H<gt;H++){let St=v[H],{object:lt,geometry:Mt,group:Dt}=St,Zt=St.material;Zt.allowOverride===!0&&k!==null&&(Zt=k),lt.layers.test(G.layers)&&Ti(lt,I,G,Mt,Zt,Dt)}}function Ti(v,I,G,k,H,gt){O!==null&&H.isNodeMaterial&&O.setObject(v,H),v.onBeforeRender(C,I,G,k,H,gt),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(C,I,G,k,v,gt),H.transparent===!0&&H.side===fn&&H.forceSinglePass===!1?(H.side=Qe,H.needsUpdate=!0,C.renderBufferDirect(G,I,k,H,v,gt),H.side=zi,H.needsUpdate=!0,C.renderBufferDirect(G,I,k,H,v,gt),H.side=fn):C.renderBufferDirect(G,I,k,H,v,gt),v.onAfterRender(C,I,G,k,H,gt)}function ii(v){let I=0;for(let G of v)G.texture!==null&&I++;return I}function Zi(v,I,G){I.isScene!==!0&&(I=Oe);let k=kt.get(v),H=E.state.lights,gt=E.state.shadowsArray,St=H.state.version,lt=et.getParameters(v,H.state,gt,I,G,E.state.lightProbeGridArray),Mt=et.getProgramCacheKey(lt),Dt=k.programs;k.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,k.fog=I.fog;let Zt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;k.envMap=T.get(v.envMap||k.environment,Zt),k.envMapRotation=k.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Dt===void 0&&(v.addEventListener("dispose",ne),Dt=new Map,k.programs=Dt,k.programVariants=new Map);let re=Dt.get(Mt);if(re!==void 0){if(k.currentProgram===re&&k.lightsStateVersion===St)return mr(v,lt),re}else lt.uniforms=et.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,G,lt),v.onBeforeCompile(lt,C),re=et.acquireProgram(lt,Mt),Dt.set(Mt,re),k.uniforms=lt.uniforms;let Pt=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Pt.clippingPlanes=Q.uniform),mr(v,lt),k.needsLights=gr(v),k.lightsStateVersion=St,k.needsLights&&(Pt.ambientLightColor.value=H.state.ambient,Pt.lightProbe.value=H.state.probe,Pt.sunLights.value=H.state.sun,Pt.sunLightShadows.value=H.state.sunShadow,Pt.directionalLights.value=H.state.directional,Pt.directionalLightShadows.value=H.state.directionalShadow,Pt.spotLights.value=H.state.spot,Pt.spotLightShadows.value=H.state.spotShadow,Pt.rectAreaLights.value=H.state.rectArea,Pt.ltc_1.value=H.state.rectAreaLTC1,Pt.ltc_2.value=H.state.rectAreaLTC2,Pt.pointLights.value=H.state.point,Pt.pointLightShadows.value=H.state.pointShadow,Pt.hemisphereLights.value=H.state.hemi,Pt.sunShadowMatrix.value=H.state.sunShadowMatrix,Pt.sunShadowCascade.value=H.state.sunShadowCascade,Pt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pt.spotLightMatrix.value=H.state.spotLightMatrix,Pt.spotLightMap.value=H.state.spotLightMap,Pt.pointShadowMatrix.value=H.state.pointShadowMatrix),k.numLightProbeGrids=ii(E.state.lightProbeGridArray),k.currentProgram=re,k.uniformsList=null,re}function jl(v,I,G,k,H){let gt=kt.get(v),St=gt.currentProgram.id+","+k+","+H,lt=gt.programVariants.get(St);return lt===void 0?(lt=Zi(v,I,G),gt.programVariants.set(St,lt)):(gt.currentProgram=lt,gt.uniformsList=null,gt.outputColorSpace=k,gt.toneMapping=H),lt}function Ki(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=Ks.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function mr(v,I){let G=kt.get(v);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function Ca(v,I,G,k,H){I.isScene!==!0&&(I=Oe),Xt.resetTextureUnits();let gt=I.fog,St=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?I.environment:null,lt=rt===null?C.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ae.workingColorSpace,Mt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Dt=T.get(k.envMap||St,Mt),Zt=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,re=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pt=!!G.morphAttributes.position,jt=!!G.morphAttributes.normal,Ae=!!G.morphAttributes.color,le=Qn;k.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(le=C.toneMapping);let _e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,wt=_e!==void 0?_e.length:0,Nt=kt.get(k),Ze=E.state.lights;if(Ue===!0&&(Ne===!0||v!==tt)){let At=v===tt&&k.id===Y;Q.setState(k,v,At)}let de=!1,wi=!1;k.version===Nt.__version?Nt.needsLights&&Nt.lightsStateVersion!==Ze.state.version||H.isBatchedMesh&&Nt.batching===!1||!H.isBatchedMesh&&Nt.batching===!0||H.isBatchedMesh&&Nt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Nt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Nt.instancing===!1||!H.isInstancedMesh&&Nt.instancing===!0||H.isSkinnedMesh&&Nt.skinning===!1||!H.isSkinnedMesh&&Nt.skinning===!0||H.isInstancedMesh&&Nt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Nt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Nt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Nt.instancingMorph===!1&&H.morphTexture!==null||Nt.envMap!==Dt||k.fog===!0&&Nt.fog!==gt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Q.numPlanes||Nt.numIntersection!==Q.numIntersection)||Nt.vertexAlphas!==Zt||Nt.vertexTangents!==re||Nt.morphTargets!==Pt||Nt.morphNormals!==jt||Nt.morphColors!==Ae||Nt.morphTargetsCount!==wt||Nt.numLightProbeGrids!==ii(E.state.lightProbeGridArray)?de=!0:(Nt.outputColorSpace!==lt||Nt.toneMapping!==le)&&(wi=!0):(de=!0,Nt.__version=k.version);let F=Nt.currentProgram;(de===!0||wi===!0)&&(F=wi===!0?jl(k,I,H,lt,le):Zi(k,I,H),O&&k.isNodeMaterial&&O.onUpdateProgram(k,F,Nt));let $=!1,xt=!1,bt=!1,ot=F.getUniforms(),ut=Nt.uniforms;if(vt.useProgram(F.program)&&($=!0,xt=!0,bt=!0),k.id!==Y&&(Y=k.id,xt=!0),$||tt!==v){vt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ot.setValue(U,"projectionMatrix",v.projectionMatrix),ot.setValue(U,"viewMatrix",v.matrixWorldInverse);let oe=ot.map.cameraPosition;oe!==void 0&&oe.setValue(U,Ye.setFromMatrixPosition(v.matrixWorld)),ye.logarithmicDepthBuffer&&ot.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ot.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),tt!==v&&(tt=v,xt=!0,bt=!0)}if(Nt.needsLights&&(Ze.state.sunShadowMap.length>0&&ot.setValue(U,"sunShadowMap",Ze.state.sunShadowMap,Xt),Ze.state.directionalShadowMap.length>0&&ot.setValue(U,"directionalShadowMap",Ze.state.directionalShadowMap,Xt),Ze.state.spotShadowMap.length>0&&ot.setValue(U,"spotShadowMap",Ze.state.spotShadowMap,Xt),Ze.state.pointShadowMap.length>0&&ot.setValue(U,"pointShadowMap",Ze.state.pointShadowMap,Xt)),H.isSkinnedMesh){ot.setOptional(U,H,"bindMatrix"),ot.setOptional(U,H,"bindMatrixInverse");let At=H.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ot.setValue(U,"boneTexture",At.boneTexture,Xt))}H.isBatchedMesh&&(ot.setOptional(U,H,"batchingTexture"),ot.setValue(U,"batchingTexture",H._matricesTexture,Xt),ot.setOptional(U,H,"batchingIdTexture"),ot.setValue(U,"batchingIdTexture",H._indirectTexture,Xt),ot.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&ot.setValue(U,"batchingColorTexture",H._colorsTexture,Xt));let Rt=G.morphAttributes;if((Rt.position!==void 0||Rt.normal!==void 0||Rt.color!==void 0)&&j.update(H,G,F),(xt||Nt.receiveShadow!==H.receiveShadow)&&(Nt.receiveShadow=H.receiveShadow,ot.setValue(U,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&I.environment!==null&&(ut.envMapIntensity.value=I.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=Bx()),xt){if(ot.setValue(U,"toneMappingExposure",C.toneMappingExposure),Nt.needsLights&&Ra(ut,bt),gt&&k.fog===!0&&ft.refreshFogUniforms(ut,gt),ft.refreshMaterialUniforms(ut,k,Et,Ht,E.state.transmissionRenderTarget[v.id]),Nt.needsLights&&Nt.numLightProbeGrids>0){let At=b,oe=0;for(let Ke of E.state.lightProbeGridArray)Ke.texture!==null&&(At.textures[oe]=Ke.texture,At.min[oe]=Ke.boundingBox.min,At.max[oe]=Ke.boundingBox.max,At.resolution[oe]=Ke.resolution,oe++);for(let Ke in At)At[Ke].length=oe;ut.probesSH.value=At.textures,ut.probesMin.value=At.min,ut.probesMax.value=At.max,ut.probesResolution.value=At.resolution}Ks.upload(U,Ki(Nt),ut,Xt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ks.upload(U,Ki(Nt),ut,Xt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ot.setValue(U,"center",H.center),ot.setValue(U,"modelViewMatrix",H.modelViewMatrix),ot.setValue(U,"normalMatrix",H.normalMatrix),ot.setValue(U,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let At=k.uniformsGroups;for(let oe=0,Ke=At.length;oe<Ke;oe++){let Ji=At[oe];It.update(Ji,F),It.bind(Ji,F)}}return F}function Ra(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function gr(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(v,I,G){let k=kt.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),kt.get(v.texture).__webglTexture=I,kt.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){let G=kt.get(v);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,G=0){rt=v,Z=I,X=G;let k=null,H=!1,gt=!1;if(v){let lt=kt.get(v);if(lt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(U.FRAMEBUFFER,lt.__webglFramebuffer),it.copy(v.viewport),Ft.copy(v.scissor),qt=v.scissorTest,vt.viewport(it),vt.scissor(Ft),vt.setScissorTest(qt),Y=-1;return}else if(lt.__webglFramebuffer===void 0)Xt.setupRenderTarget(v);else if(lt.__hasExternalTextures)Xt.rebindTextures(v,kt.get(v.texture).__webglTexture,kt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Zt=v.depthTexture;if(lt.__boundDepthTexture!==Zt){if(Zt!==null&&kt.has(Zt)&&(v.width!==Zt.image.width||v.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(v)}}let Mt=v.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(gt=!0);let Dt=kt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Dt[I])?k=Dt[I][G]:k=Dt[I],H=!0):v.samples>0&&Xt.useMultisampledRTT(v)===!1?k=kt.get(v).__webglMultisampledFramebuffer:Array.isArray(Dt)?k=Dt[G]:k=Dt,it.copy(v.viewport),Ft.copy(v.scissor),qt=v.scissorTest}else it.copy(Ot).multiplyScalar(Et).floor(),Ft.copy(ue).multiplyScalar(Et).floor(),qt=fe;if(G!==0&&(k=V),vt.bindFramebuffer(U.FRAMEBUFFER,k)&&vt.drawBuffers(v,k),vt.viewport(it),vt.scissor(Ft),vt.setScissorTest(qt),H){let lt=kt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,lt.__webglTexture,G)}else if(gt){let lt=I;for(let Mt=0;Mt<v.textures.length;Mt++){let Dt=kt.get(v.textures[Mt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Mt,Dt.__webglTexture,G,lt)}}else if(v!==null&&G!==0){let lt=kt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,lt.__webglTexture,G)}Y=-1};function $e(v){let I=kt.get(v);return(I.__readFormat!==v.format||I.__readType!==v.type)&&(I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=ye.textureFormatReadable(v.format),I.__typeReadable=ye.textureTypeReadable(v.type)),I}this.readRenderTargetPixels=function(v,I,G,k,H,gt,St,lt=0){if(!(v&&v.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=kt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){vt.bindFramebuffer(U.FRAMEBUFFER,Mt);try{let Dt=v.textures[lt],Zt=Dt.format,re=Dt.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+lt);let Pt=$e(Dt);if(Pt.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-k&&G>=0&&G<=v.height-H&&U.readPixels(I,G,k,H,ct.convert(Zt),ct.convert(re),gt)}finally{let Dt=rt!==null?kt.get(rt).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(v,I,G,k,H,gt,St,lt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=kt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(I>=0&&I<=v.width-k&&G>=0&&G<=v.height-H){vt.bindFramebuffer(U.FRAMEBUFFER,Mt);let Dt=v.textures[lt],Zt=Dt.format,re=Dt.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+lt);let Pt=$e(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,jt),U.bufferData(U.PIXEL_PACK_BUFFER,gt.byteLength,U.STREAM_READ),U.readPixels(I,G,k,H,ct.convert(Zt),ct.convert(re),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ae=rt!==null?kt.get(rt).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,Ae);let le=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await _d(U,le,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,jt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,gt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(jt),U.deleteSync(le),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,G=0){let k=Math.pow(2,-G),H=Math.floor(v.image.width*k),gt=Math.floor(v.image.height*k),St=I!==null?I.x:0,lt=I!==null?I.y:0;Xt.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,St,lt,H,gt),vt.unbindTexture()},this.copyTextureToTexture=function(v,I,G=null,k=null,H=0,gt=0){let St,lt,Mt,Dt,Zt,re,Pt,jt,Ae,le=v.isCompressedTexture?v.mipmaps[gt]:v.image;if(G!==null)St=G.max.x-G.min.x,lt=G.max.y-G.min.y,Mt=G.isBox3?G.max.z-G.min.z:1,Dt=G.min.x,Zt=G.min.y,re=G.isBox3?G.min.z:0;else{let ot=Math.pow(2,-H);St=Math.floor(le.width*ot),lt=Math.floor(le.height*ot),v.isDataArrayTexture?Mt=le.depth:v.isData3DTexture?Mt=Math.floor(le.depth*ot):Mt=1,Dt=0,Zt=0,re=0}k!==null?(Pt=k.x,jt=k.y,Ae=k.z):(Pt=0,jt=0,Ae=0);let _e=ct.convert(I.format),wt=ct.convert(I.type),Nt;I.isData3DTexture?(Xt.setTexture3D(I,0),Nt=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Xt.setTexture2DArray(I,0),Nt=U.TEXTURE_2D_ARRAY):(Xt.setTexture2D(I,0),Nt=U.TEXTURE_2D),vt.activeTexture(U.TEXTURE0),vt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),vt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),vt.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);let Ze=vt.getParameter(U.UNPACK_ROW_LENGTH),de=vt.getParameter(U.UNPACK_IMAGE_HEIGHT),wi=vt.getParameter(U.UNPACK_SKIP_PIXELS),F=vt.getParameter(U.UNPACK_SKIP_ROWS),$=vt.getParameter(U.UNPACK_SKIP_IMAGES);vt.pixelStorei(U.UNPACK_ROW_LENGTH,le.width),vt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le.height),vt.pixelStorei(U.UNPACK_SKIP_PIXELS,Dt),vt.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),vt.pixelStorei(U.UNPACK_SKIP_IMAGES,re);let xt=v.isDataArrayTexture||v.isData3DTexture,bt=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let ot=kt.get(v),ut=kt.get(I),Rt=kt.get(ot.__renderTarget),At=kt.get(ut.__renderTarget);vt.bindFramebuffer(U.READ_FRAMEBUFFER,Rt.__webglFramebuffer),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let oe=0;oe<Mt;oe++)xt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.get(v).__webglTexture,H,re+oe),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.get(I).__webglTexture,gt,Ae+oe)),U.blitFramebuffer(Dt,Zt,Dt+St,Zt+lt,Pt,jt,Pt+St,jt+lt,U.DEPTH_BUFFER_BIT,U.NEAREST);vt.bindFramebuffer(U.READ_FRAMEBUFFER,null),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||v.isRenderTargetTexture||kt.has(v)){let ot=kt.get(v),ut=kt.get(I);vt.bindFramebuffer(U.READ_FRAMEBUFFER,P),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,W);for(let Rt=0;Rt<Mt;Rt++)xt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ot.__webglTexture,H,re+Rt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ot.__webglTexture,H),bt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ut.__webglTexture,gt,Ae+Rt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ut.__webglTexture,gt),H!==0?U.blitFramebuffer(Dt,Zt,Dt+St,Zt+lt,Pt,jt,Pt+St,jt+lt,U.COLOR_BUFFER_BIT,U.NEAREST):bt?U.copyTexSubImage3D(Nt,gt,Pt,jt,Ae+Rt,Dt,Zt,St,lt):U.copyTexSubImage2D(Nt,gt,Pt,jt,Dt,Zt,St,lt);vt.bindFramebuffer(U.READ_FRAMEBUFFER,null),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else bt?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(Nt,gt,Pt,jt,Ae,St,lt,Mt,_e,wt,le.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(Nt,gt,Pt,jt,Ae,St,lt,Mt,_e,le.data):U.texSubImage3D(Nt,gt,Pt,jt,Ae,St,lt,Mt,_e,wt,le):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,gt,Pt,jt,St,lt,_e,wt,le.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,gt,Pt,jt,le.width,le.height,_e,le.data):U.texSubImage2D(U.TEXTURE_2D,gt,Pt,jt,St,lt,_e,wt,le);vt.pixelStorei(U.UNPACK_ROW_LENGTH,Ze),vt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de),vt.pixelStorei(U.UNPACK_SKIP_PIXELS,wi),vt.pixelStorei(U.UNPACK_SKIP_ROWS,F),vt.pixelStorei(U.UNPACK_SKIP_IMAGES,$),gt===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&U.generateMipmap(Nt),vt.unbindTexture()},this.initRenderTarget=function(v){kt.get(v).__webglFramebuffer===void 0&&Xt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Xt.setTextureCube(v,0):v.isData3DTexture?Xt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Xt.setTexture2DArray(v,0):Xt.setTexture2D(v,0),vt.unbindTexture()},this.resetState=function(){Z=0,X=0,rt=null,vt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}});var Qs,bh=Je(()=>{Qs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var En,kx,Eh,Hx,Hi,js=Je(()=>{vi();En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},kx=new Vs(-1,1,1,-1,0,1),Eh=class extends Re{constructor(){super(),this.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xe([0,2,0,0,2,0],2))}},Hx=new Eh,Hi=class{constructor(t){this._mesh=new ge(Hx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,kx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}});var Pl,nf=Je(()=>{vi();js();Pl=class extends En{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof he?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xi.clone(t.uniforms),this.material=new he({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Hi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var ma,Il,sf=Je(()=>{js();ma=class extends En{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Il=class extends En{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}});var Ll,rf=Je(()=>{vi();bh();nf();sf();Ll=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Wt);this._width=n.width,this._height=n.height,e=new ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pl(Qs),this.copyPass.material.blending=pi,this.timer=new Yr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ma!==void 0&&(a instanceof ma?n=!0:a instanceof Il&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Dl,af=Je(()=>{vi();js();Dl=class extends En{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}});var of,lf=Je(()=>{vi();of={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var tr,cf=Je(()=>{vi();js();bh();lf();tr=class i extends En{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Wt(t.x,t.y):new Wt(256,256),this.clearColor=new Qt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ke(r,a,{type:je,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new ke(r,a,{type:je,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new ke(r,a,{type:je,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=of;this.highPassUniforms=xi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new he({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Wt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xi.clone(Qs.uniforms),this.blendMaterial=new he({uniforms:this.copyUniforms,vertexShader:Qs.vertexShader,fragmentShader:Qs.fragmentShader,premultipliedAlpha:!0,blending:rs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qt,this._oldClearAlpha=1,this._basic=new di,this._fsQuad=new Hi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Wt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new he({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Wt(.5,.5)},direction:{value:new Wt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new he({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};tr.BlurDirectionX=new Wt(1,0);tr.BlurDirectionY=new Wt(0,1)});var ga,hf=Je(()=>{ga={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var Nl,uf=Je(()=>{vi();js();hf();Nl=class extends En{constructor(){super(),this.isOutputPass=!0,this.uniforms=xi.clone(ga.uniforms),this.material=new Gs({name:ga.name,uniforms:this.uniforms,vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader}),this._fsQuad=new Hi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Kr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===na?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ta&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var Ul,Fl,tn,df=Je(()=>{Ul=`
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
`,Fl=`
uniform float uScale; varying vec2 vUv;
void main(){ vUv=uv*2.-1.; vec4 mv=modelViewMatrix*vec4(0.,0.,0.,1.); mv.xy+=position.xy*uScale; gl_Position=projectionMatrix*mv; }`,tn=`
#include <tonemapping_fragment>
#include <colorspace_fragment>`});function Gx(i,t,e){let n=1+t,s,r,a;if(n<1e-6)s=1,r=0,a=0,n=0;else{s=e,r=0,a=-i;let o=1/Math.hypot(s,r,a,n);s*=o,r*=o,a*=o,n*=o}return[s,r,a,n]}function Vx(i,t,e,n,s,r,a){let o=-i,l=-t,c=-e,h=n,f=h*s+l*a-c*r,u=h*r+c*s-o*a,p=h*a+o*r-l*s,_=-o*s-l*r-c*a;return[f*h+_*-o+u*-c-p*-l,u*h+_*-l+p*-o-f*-c,p*h+_*-c+f*-l-u*-o]}function Wx(i,t,e){let n=Math.PI/(1.5*(t+1)),s=1.5*n,r=ff*n,a=[],o=2;for(let h=0;h<t;h++){let f=s*(h+1),u=2*Math.PI*Math.sin(f),p=h===0||h===t-1?e:Math.max(e,Math.round(u/r));a.push({theta:f,m:p}),o+=p}let l=a.map((h,f)=>({i:f,mid:Math.abs(h.theta-Math.PI/2)})).sort((h,f)=>h.mid-f.mid),c=0;for(;o!==i&&c++<2e4;){let h=l[(c-1)%l.length].i;h===0||h===a.length-1||(o<i?(a[h].m++,o++):a[h].m>6&&(a[h].m--,o--))}return{rings:a,n:o,dVert:s,size:n}}function pf(i=2e3,t=5,e=.038){let n=Wx(i,41,5);if(n.n!==i)throw new Error(`hex layout: planned ${n.n}, expected ${i}`);let s=new Float32Array(i*3),r=[],a=0,o=(M,m,d,y,w,b)=>{s[a*3]=M,s[a*3+1]=m,s[a*3+2]=d,r[a]={theta:y,phi:w,pole:b},a++};o(0,1,0,0,0,!0),n.rings.forEach((M,m)=>{let d=m%2*(Math.PI/M.m);for(let y=0;y<M.m;y++){let w=d+y*(2*Math.PI/M.m),b=M.theta;o(Math.sin(b)*Math.cos(w),Math.cos(b),Math.sin(b)*Math.sin(w),b,w,!1)}}),o(0,-1,0,Math.PI,0,!0);let l=new Int32Array(i*6),c=new Float64Array(i*6);for(let M=0;M<i;M++){let m=[-1,-1,-1,-1,-1,-1],d=[4,4,4,4,4,4],y=s[M*3],w=s[M*3+1],b=s[M*3+2];for(let A=0;A<i;A++){if(A===M)continue;let E=(y-s[A*3])**2+(w-s[A*3+1])**2+(b-s[A*3+2])**2;if(E>=d[5])continue;let g=5;for(;g>0&&E<d[g-1];)d[g]=d[g-1],m[g]=m[g-1],g--;d[g]=E,m[g]=A}for(let A=0;A<6;A++)l[M*6+A]=m[A],c[M*6+A]=Math.sqrt(d[A])}let h=[];for(let M=0;M<i;M++)h.push(c[M*6]);h.sort((M,m)=>M-m);let f=h[i>>1],u=f*t/ff*(1-e),p=new Float32Array(i),_=new Float32Array(i);for(let M=0;M<i;M++){let m=s[M*3],d=s[M*3+1],y=s[M*3+2],[w,b,A,E]=Gx(m,d,y),g,S,D;if(r[M].pole){let P=l[M*6];g=s[P*3],S=s[P*3+1],D=s[P*3+2]}else{let P=d;g=-m*P,S=1-d*P,D=-y*P}let[C,,N]=Vx(w,b,A,E,g,S,D),O=Math.atan2(N,C);p[M]=Math.PI/2-O;let V=c[M*6]/f;V<.97&&(V=.97),V>1.045&&(V=1.045),_[M]=V}return{pos:s,angles:p,scales:_,baseTR:u,pickCos:Math.cos(f*.9)}}var ff,mf=Je(()=>{ff=Math.sqrt(3)});function _f(i,t){let e=t.mobile,n=new Al({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1});n.info.autoReset=!1,n.setClearColor(131843,1),n.outputColorSpace=hn;let s=e?1:1.5,r=Math.min(s,window.devicePixelRatio||1),a=new Nr;a.fog=null;let o=new un(40,1,.1,3e3),l={uTime:{value:0},uPx:{value:600}};function c(F,$,xt,bt,ot,ut){let Rt=new Re,At=new Float32Array(F*3),oe=new Float32Array(F),Ke=new Float32Array(F*3);for(let _r=0;_r<F;_r++){let tc,ec,nc;if(ut)tc=(Math.random()-.5)*ut[0],ec=ut[2]+Math.random()*(ut[1]-ut[2]),nc=(Math.random()-.5)*ut[3]-2;else{let rc=Math.random()*2-1,nu=Math.random()*Math.PI*2,ac=$+Math.random()*(xt-$),iu=Math.sqrt(1-rc*rc);tc=Math.cos(nu)*iu*ac,ec=rc*ac-25,nc=Math.sin(nu)*iu*ac}At.set([tc,ec,nc],_r*3),oe[_r]=bt+Math.pow(Math.random(),3)*(ot-bt);let ic=Math.random(),sc=ic<.08?Ut.lime:ic<.16?Ut.cyan:ic<.2?Ut.ember:Ut.white;Ke.set([sc.r,sc.g,sc.b],_r*3)}Rt.setAttribute("position",new ze(At,3)),Rt.setAttribute("aSize",new ze(oe,1)),Rt.setAttribute("aCol",new ze(Ke,3));let Ji=new he({...pn,uniforms:{...l,uDrift:{value:ut?1:0},uA:{value:ut?.55:.9}},vertexShader:`attribute float aSize; attribute vec3 aCol; uniform float uTime,uPx,uDrift; varying vec3 vC; varying float vT;
        void main(){ vec3 p=position; p.y+=sin(uTime*.2+p.x)*.3*uDrift; p.x+=cos(uTime*.15+p.z)*.3*uDrift;
          vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
          vT=.55+.45*sin(uTime*(1.+fract(aSize*7.)*2.)+aSize*40.); vC=aCol;
          gl_PointSize=clamp(aSize*uPx/(-mv.z),1.,6.); }`,fragmentShader:`uniform float uA; varying vec3 vC; varying float vT; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.0,d); gl_FragColor=vec4(vC*a*vT*uA,1.); ${tn} }`}),eu=new Ni(Rt,Ji);return eu.frustumCulled=!1,eu}let h=c(e?1600:2600,500,900,1.2,4.5),f=c(e?500:1e3,0,0,.03,.09,[34,10,-70,26]);a.add(h,f);function u(F,$,xt,bt){let ot=new he({...pn,uniforms:{uScale:{value:$},uC:{value:F.clone()},uA:{value:bt},uP:{value:xt}},vertexShader:Fl,fragmentShader:`uniform vec3 uC; uniform float uA,uP; varying vec2 vUv; void main(){ float r=length(vUv); float a=pow(max(0.,1.-r),uP)*uA; gl_FragColor=vec4(uC*a,1.); ${tn} }`}),ut=new ge(new Hn(2,2),ot);return ut.frustumCulled=!1,ut.renderOrder=2,ut}let p=new an;[[-90,20,-260,150,Ut.lime,.0022],[110,-40,-300,190,Ut.cyan,.003],[-60,-80,-240,170,Ut.ember,.003],[60,30,-350,140,hs("#5A2CFF"),.005]].forEach(([F,$,xt,bt,ot,ut])=>{let Rt=u(ot,bt,2.2,ut);Rt.position.set(F,$,xt),p.add(Rt)}),a.add(p);let _=new an;a.add(_);let M={...l,uEnergy:{value:.3},uWin:{value:0},uFlash:{value:0},uKick:{value:0},uA:{value:Ut.lime.clone()},uB:{value:Ut.cyan.clone()},uC:{value:Ut.ember.clone()}};function m(F){return new he({uniforms:F,vertexShader:Ul+`uniform float uTime,uEnergy,uWin,uKick; varying vec3 vN,vV,vP; varying float vNoise;
        void main(){ vec3 p=position; float t=uTime*(1.+uWin*1.5);
          float n=snoise(normal*1.3+vec3(t*.22,t*.17,-t*.2)); float n2=snoise(normal*3.2-t*.45)*.45;
          float d=(n+n2)*(.03+.04*uEnergy+.07*uWin)+uKick*.12*(n*.5+.5);
          p+=normal*d; vNoise=n+n2; vP=p;
          vec4 mv=modelViewMatrix*vec4(p,1.); vV=-mv.xyz; vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*mv; }`,fragmentShader:Ul+`uniform vec3 uA,uB,uC; uniform float uTime,uEnergy,uWin,uFlash,uKick; varying vec3 vN,vV,vP; varying float vNoise;
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
          gl_FragColor=vec4(col,1.); ${tn} }`})}let d=new ge(new Jn(1.12,e?24:40),m(M));_.add(d);function y(F,$,xt){return new he({...pn,side:Qe,uniforms:{uC:{value:F.clone()},uP:{value:$},uM:{value:xt}},vertexShader:"varying vec3 vN,vV; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vV=-mv.xyz; vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*mv; }",fragmentShader:`uniform vec3 uC; uniform float uP,uM; varying vec3 vN,vV; void main(){ float i=pow(clamp(-dot(normalize(vN),normalize(vV)),0.,1.),uP); gl_FragColor=vec4(uC*i*uM,1.); ${tn} }`})}let w=new ge(new Jn(1.5,6),y(Ut.lime,3.4,.8));_.add(w);let b=u(Ut.lime,4.2,4.2,.3);_.add(b);let A=u(Ut.cyan,9,6,.05);_.add(A);function E(F,$={}){return new he({...pn,side:fn,uniforms:{...l,uC:{value:F.clone()},uN:{value:$.n||48},uDuty:{value:$.duty||.5},uSp:{value:$.sp||.05},uA:{value:$.a||.8},uR0:{value:$.r0},uR1:{value:$.r1}},vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 uC; uniform float uN,uDuty,uSp,uA,uTime,uR0,uR1; varying vec2 vP;
        void main(){ float a=atan(vP.y,vP.x)/6.2831853+.5; float r=(length(vP)-uR0)/(uR1-uR0);
          float d=step(fract(a*uN+uTime*uSp*uN),uDuty); float e=smoothstep(0.,.25,r)*smoothstep(1.,.75,r);
          float sweep=pow(fract(a-uTime*uSp*.6),8.);
          gl_FragColor=vec4(uC*(d*.75+sweep*1.4)*e*uA,1.); ${tn} }`})}function g(F,$,xt,bt){return new ge(new Ui(F,$,256,1),E(xt,{...bt,r0:F,r1:$}))}let S=[g(1.55,1.6,Ut.lime,{n:64,duty:.55,sp:.02,a:.9}),g(2.55,2.58,Ut.cyan,{n:180,duty:.3,sp:-.01,a:.7}),g(3.1,3.14,Ut.lime,{n:12,duty:.85,sp:.006,a:.22})];S[0].rotation.set(1.2,.3,0),S[1].rotation.set(1.42,-.5,.2),S[2].rotation.set(.35,.9,0),S.forEach(F=>_.add(F));let D={...l,uC:{value:Ut.lime.clone()},uWin:M.uWin,uFlash:M.uFlash},C=new ge(new Hn(90,90,1,1),new he({...pn,uniforms:D,vertexShader:"varying vec2 vW; void main(){ vW=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uTime,uWin,uFlash; uniform vec3 uC; varying vec2 vW;
      float gl(vec2 p){ vec2 g=abs(fract(p-.5)-.5)/fwidth(p); return 1.-min(min(g.x,g.y),1.); }
      void main(){ float r=length(vW); float l=gl(vW*.7)*.6+gl(vW*.14)*.9; float fade=exp(-r*.075)*smoothstep(1.5,4.,r);
        float wave=exp(-pow((r-mod(uTime*6.,45.))*.35,2.))*.9; vec3 c=mix(uC,vec3(1.,.42,.1),uWin);
        gl_FragColor=vec4(c*l*fade*(.22+wave*.8+uFlash*1.5),1.); ${tn} }`}));C.rotation.x=-Math.PI/2,C.position.y=-3.3,C.frustumCulled=!1,_.add(C);let N=new ge(new Hn(2,2),new he({...pn,uniforms:{uC:{value:Ut.cyan.clone()},uA:{value:.35}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv*2.-1.; vec4 mv=modelViewMatrix*vec4(0.,0.,0.,1.); mv.xy+=position.xy*vec2(9.,.32); gl_Position=projectionMatrix*mv; }",fragmentShader:`uniform vec3 uC; uniform float uA; varying vec2 vUv; void main(){ float a=exp(-abs(vUv.y)*9.)*pow(1.-abs(vUv.x),3.)*uA; gl_FragColor=vec4((uC+vec3(.4))*a,1.); ${tn} }`}));N.frustumCulled=!1,N.renderOrder=4,_.add(N);let O={...l,uSec:{value:0},uCut:{value:-1},uScan:{value:-1},uWinOn:{value:0},uLime:{value:Ut.lime.clone()},uEmber:{value:Ut.ember.clone()}},V=new ge(new Ui(1.9,2.04,360,1),new he({...pn,side:fn,uniforms:O,vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uTime,uSec,uCut,uScan,uWinOn; uniform vec3 uLime,uEmber; varying vec2 vP;
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
        gl_FragColor=vec4(c*v*body,1.); ${tn} }`}));_.add(V);let P=g(2.18,2.24,Ut.lime,{n:240,duty:.25,sp:0,a:.35});_.add(P);let W={uScale:{value:9},uK:{value:1},uC:{value:Ut.lime.clone()}},Z=new ge(new Hn(2,2),new he({...pn,uniforms:W,vertexShader:Fl,fragmentShader:`uniform float uK; uniform vec3 uC; varying vec2 vUv; void main(){ float r=length(vUv); float w=.03+uK*.1; float ring=exp(-pow((r-uK*.95)/w,2.)); float a=ring*(1.-uK)*(1.-uK)*1.3 + exp(-r*r*22.)*(1.-uK)*(1.-uK)*.5; gl_FragColor=vec4(mix(vec3(1.),uC,uK)*a,1.); ${tn} }`}));Z.frustumCulled=!1,Z.visible=!1,_.add(Z);let X=e?5e3:9e3,rt=new Re,Y={position:3,aCtrl:3,aEnd:3,aT:2,aCol:3,aSize:1},tt={};for(let F in Y){tt[F]=new Float32Array(X*Y[F]);let $=new ze(tt[F],Y[F]);$.setUsage(bl),rt.setAttribute(F,$)}tt.aT.fill(-999);let it=new he({...pn,uniforms:{...l,uDensity:{value:1}},vertexShader:`attribute vec3 aCtrl,aEnd,aCol; attribute vec2 aT; attribute float aSize; uniform float uTime,uPx,uDensity; varying vec3 vC; varying float vA;
      void main(){ float k=(uTime-aT.x)/aT.y; if(k<0.||k>1.||fract(float(gl_VertexID)*.618)>uDensity){ gl_Position=vec4(2.,2.,2.,1.); gl_PointSize=0.; vA=0.; return; }
        float e = aSize>0. ? k*k*(1.6-.6*k) : 1.-pow(1.-k,3.);
        vec3 p=mix(mix(position,aCtrl,e),mix(aCtrl,aEnd,e),e);
        vec4 mv=viewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
        vA = aSize>0. ? smoothstep(0.,.15,k)*(.6+.4*k) : (1.-k*k);
        vC=aCol; gl_PointSize=clamp(abs(aSize)*uPx/(-mv.z),0.,22.); }`,fragmentShader:`varying vec3 vC; varying float vA; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d); a*=a; gl_FragColor=vec4((vC+vec3(1.)*smoothstep(.18,0.,d)*.8)*a*vA*1.4,1.); ${tn} }`}),Ft=new Ni(rt,it);Ft.frustumCulled=!1,Ft.renderOrder=5,a.add(Ft);let qt=0,K=-1,yt=-1,Lt=!1;function Ht(F,$,xt,bt,ot,ut,Rt){let At=qt;qt=(qt+1)%X,tt.position.set([F.x,F.y,F.z],At*3),tt.aCtrl.set([$.x,$.y,$.z],At*3),tt.aEnd.set([xt.x,xt.y,xt.z],At*3),tt.aT[At*2]=bt,tt.aT[At*2+1]=ot,tt.aCol.set([ut.r,ut.g,ut.b],At*3),tt.aSize[At]=Rt,K<0?K=yt=At:At<K?Lt=!0:yt=Math.max(yt,At)}function Et(){if(!(K<0)){for(let F in Y){let $=rt.attributes[F];Lt?$.clearUpdateRanges():$.addUpdateRange(K*Y[F],(yt-K+1)*Y[F]),$.needsUpdate=!0}K=yt=-1,Lt=!1}}let Kt=new B,Ie=new B,Ot=()=>{let F=Math.random()*2-1,$=Math.random()*6.2832,xt=Math.sqrt(1-F*F);return se(Math.cos($)*xt,F,Math.sin($)*xt)},ue=(F,$)=>F.clone().add(Ot().multiplyScalar($));function fe(F,$,xt,bt,ot,ut,Rt=0){let At=l.uTime.value+Rt,oe=F.clone().lerp($,.45).add(Ot().multiplyScalar(F.distanceTo($)*.28));for(let Ke=0;Ke<xt;Ke++){let Ji=Ke/xt;Ht(ue(F,.05),ue(oe,.08*Ji),ue($,.04),At+Ke*.011,ut,bt,ot*(1-Ji*.75))}}function ee(F,$,xt){return Kt.set(F/St*2-1,-($/lt)*2+1,.5).unproject(o).sub(o.position).normalize(),o.position.clone().add(Kt.multiplyScalar(xt))}let Le=new an;a.add(Le);let Ne=[Ut.lime,Ut.cyan,Ut.ember].map((F,$)=>{let xt=new an,bt={...l,uEnergy:{value:.4},uWin:{value:0},uFlash:{value:0},uKick:{value:0},uA:{value:F.clone()},uB:{value:($===1?Ut.white:Ut.cyan).clone()},uC:{value:F.clone()}},ot=new ge(new Jn(.62,12),m(bt));xt.add(ot),xt.add(new ge(new Jn(.86,4),y(F,3.4,.8))),xt.add(u(F,3.2,4.5,.16));let ut=g(1.05,1.09,F,{n:36,duty:.5,sp:.02*($-1||1),a:.8});return ut.rotation.x=1.3,xt.add(ut),Le.add(xt),{g:xt,u:bt,m:ot}}),Me=5,Ye=[],be=[],Oe=[],Be=[];for(let F=0;F<Me;F++)Ye.push(se()),be.push(se()),Oe.push(se()),Be.push(se());let nn={...l,uP0:{value:Ye},uP1:{value:be},uP2:{value:Oe},uP3:{value:Be},uCols:{value:[Ut.lime,Ut.cyan,Ut.ember,Ut.cyan,Ut.ember].map(F=>F.clone())},uPulse:{value:0},uDensity:{value:1}},U=[560,380,320,360,360],cn=U.reduce((F,$)=>F+$),ve=new Re,ye=new Float32Array(cn*4),vt=new Float32Array(cn*3);{let F=0;U.forEach(($,xt)=>{for(let bt=0;bt<$;bt++,F++){ye.set([xt,Math.random(),.12+Math.random()*.1,.4+Math.random()],F*4);let ot=Ot();vt.set([ot.x,ot.y,ot.z],F*3)}})}ve.setAttribute("position",new ze(vt,3)),ve.setAttribute("aS",new ze(ye,4));let we=new Ni(ve,new he({...pn,uniforms:nn,vertexShader:`attribute vec4 aS; uniform vec3 uP0[5],uP1[5],uP2[5],uP3[5],uCols[5]; uniform float uTime,uPx,uPulse,uDensity; varying vec3 vC; varying float vA;
      void main(){ int c=int(aS.x+.5); if(fract(aS.y*7.3)>uDensity){ gl_Position=vec4(2.,2.,2.,1.); gl_PointSize=0.; return; }
        float k=fract(aS.y+uTime*aS.z*(c>2?.55:1.)); float u=1.-k;
        vec3 p=u*u*u*uP0[c]+3.*u*u*k*uP1[c]+3.*u*k*k*uP2[c]+k*k*k*uP3[c];
        p+=position*sin(k*3.1416)*(.18+.25*aS.w);
        vec4 mv=viewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
        vA=smoothstep(0.,.08,k)*smoothstep(1.,.85,k)*(.55+uPulse*.8); vC=uCols[c];
        gl_PointSize=clamp((.05+.05*aS.w)*uPx/(-mv.z),1.,10.); }`,fragmentShader:`varying vec3 vC; varying float vA; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d); gl_FragColor=vec4((vC+.4)*a*vA,1.); ${tn} }`}));we.frustumCulled=!1,a.add(we);let kt=new zr(new Re,new ks({color:7311136,...pn,opacity:.5}));kt.frustumCulled=!1,a.add(kt);let Xt=5;function T(F){Xt=er(F*3.2,1.75,5.6),Ne.forEach((bt,ot)=>bt.g.position.set((ot-1)*Xt,en.poolY,0));let $=se(0,-1.5,0);for(let bt=0;bt<3;bt++){let ot=Ne[bt].g.position;Ye[bt].copy($),be[bt].set(0,-3.8,0),Oe[bt].set(ot.x,ot.y+3.2,0),Be[bt].copy(ot).add(se(0,.7,0))}Ye[3].copy(Ne[1].g.position).add(se(0,-.7,0)),be[3].set(0,-13,2),Oe[3].set(0,en.planet.y+Tn+4,2),Be[3].set(0,en.planet.y+Tn+.3,0),Ye[4].copy(Ne[2].g.position).add(se(0,-.7,0)),be[4].set(Xt*1.4,-18,0),Oe[4].set(9,en.hole.y+4,0),Be[4].set(6.6,en.hole.y,0);let xt=[];for(let bt=0;bt<Me;bt++){let ot=null;for(let ut=0;ut<=48;ut++){let Rt=ut/48,At=1-Rt,oe=Ye[bt].clone().multiplyScalar(At*At*At).add(be[bt].clone().multiplyScalar(3*At*At*Rt)).add(Oe[bt].clone().multiplyScalar(3*At*Rt*Rt)).add(Be[bt].clone().multiplyScalar(Rt*Rt*Rt));ot&&xt.push(ot,oe),ot=oe}}kt.geometry.dispose(),kt.geometry=new Re().setFromPoints(xt)}let x=new an;x.position.copy(en.planet),a.add(x);let z=pf(2e3,Tn),nt=2e3,et=z.baseTR,ft=new Vr(et,et,1,6,1,!1);ft.translate(0,.5,0);let _t=new Float32Array(nt),J=new Float32Array(nt),Q=new Float32Array(nt),pt=new Float32Array(nt).fill(-999),R=new Float32Array(nt).fill(-999),j=new Float32Array(nt),q=F=>{let $=new is(F,1);return $.setUsage(bl),$},dt={aHeat:q(_t),aMine:q(J),aMinted:q(Q),aFlash:q(pt),aPing:q(R),aIdx:q(j)};for(let F in dt)ft.setAttribute(F,dt[F]);let ct={...l,uHover:{value:-1},uSel:{value:-1},uLime:{value:Ut.lime.clone()}},ht=new Br(ft,new he({uniforms:ct,vertexShader:`attribute float aHeat,aMine,aMinted,aFlash,aPing,aIdx; uniform float uTime,uHover,uSel; uniform vec3 uLime;
      varying vec3 vC,vN,vV; varying vec2 vL; varying float vTop,vGlow;
      void main(){ float fk=clamp((uTime-aFlash)/1.8,0.,1.); float fl=(1.-fk); fl*=fl;
        float pk=clamp((uTime-aPing)/1.2,0.,1.); float pg=(1.-pk)*(1.-pk);
        float hov=1.-step(.5,abs(aIdx-uHover)); float sel=1.-step(.5,abs(aIdx-uSel));
        float h=aMinted>.5 ? .05+aHeat*aHeat*.55+aMine*.16 : .015;
        h+=fl*1.1+hov*.22+sel*(.32+.06*sin(uTime*4.))+pg*.12;
        vec3 p=position; vTop=step(.99,p.y); p.y*=h; vL=position.xz/${et.toFixed(3)};
        vec4 mv=modelViewMatrix*instanceMatrix*vec4(p,1.); vV=-mv.xyz; gl_Position=projectionMatrix*mv;
        vN=normalize(normalMatrix*mat3(instanceMatrix)*normal);
        vec3 commonC=vec3(.18,.79,.72), rareC=vec3(.36,.48,1.), epicC=vec3(1.,.54,.14);
        vec3 c=aHeat<.3?commonC:(aHeat<.7?rareC:epicC);
        if(aMinted<.5) c=vec3(.06,.08,.08);
        c=mix(c,uLime,aMine*.72);
        vGlow=fl*2.2+pg*.8+hov*.9+sel*1.2+aMine*(.35+.35*sin(uTime*3.+aIdx));
        c=mix(c,vec3(1.),hov*.5); vC=c; }`,fragmentShader:`varying vec3 vC,vN,vV; varying vec2 vL; varying float vTop,vGlow;
      void main(){ vec2 q=abs(vL); float d=max(q.x, q.x*.5+q.y*.866)/.866; float edge=smoothstep(.72,.93,d);
        float ndv=max(dot(normalize(vN),normalize(vV)),0.);
        vec3 col = vTop>.5 ? vC*(.10+edge*.95) + vC*vGlow*(.35+edge*.8) : vC*(.05+.16*(1.-ndv)) + vC*vGlow*.2;
        gl_FragColor=vec4(col,1.); ${tn} }`}),nt),It=new Float32Array(nt*3);{let F=new me,$=new Mn,xt=new Mn,bt=se(0,1,0),ot=se(1,1,1);for(let ut=0;ut<nt;ut++){let Rt=se(z.pos[ut*3],z.pos[ut*3+1],z.pos[ut*3+2]);It.set([Rt.x,Rt.y,Rt.z],ut*3),$.setFromUnitVectors(bt,Rt),xt.setFromAxisAngle(bt,z.angles[ut]),$.multiply(xt);let At=z.scales[ut];ot.set(At,1,At),F.compose(Rt.clone().multiplyScalar(Tn),$,ot),ht.setMatrixAt(ut,F),j[ut]=ut}ht.instanceMatrix.needsUpdate=!0}ht.frustumCulled=!1,x.add(ht),x.add(new ge(new Jn(Tn-.02,5),new di({color:66564}))),x.add(new ge(new Jn(Tn*1.22,5),y(Ut.cyan,3.6,.55)));let te=u(Ut.cyan,Tn*3.2,5,.03);x.add(te);let at=g(Tn*1.45,Tn*1.47,Ut.cyan,{n:110,duty:.5,sp:.004,a:.6});at.rotation.x=1.25,at.rotation.y=.25,x.add(at);let Bt=g(Tn*1.62,Tn*1.63,Ut.lime,{n:30,duty:.1,sp:-.003,a:.7});Bt.rotation.x=1.25,Bt.rotation.y=.25,x.add(Bt);let Yt=new an;x.remove(ht),Yt.add(ht),x.add(Yt);let mt=0,ne=.25,Se=.045,Cn=!1,Fn=null;function fr(F){for(let $=0;$<nt;$++){let xt=F($);_t[$]=xt[0],J[$]=xt[1],Q[$]=xt[2]}dt.aHeat.needsUpdate=dt.aMine.needsUpdate=dt.aMinted.needsUpdate=!0}function Ea(F){pt[F]=l.uTime.value,dt.aFlash.needsUpdate=!0}function Ta(F){R[F]=l.uTime.value,dt.aPing.needsUpdate=!0}function pr(F,$){return $.set(It[F*3],It[F*3+1],It[F*3+2]).multiplyScalar(Tn+.3),ht.updateWorldMatrix(!0,!1),$.applyMatrix4(Yt.matrixWorld)}let qn=new $r,xs=new me,wa=new In(se(),Tn+.1);function Aa(F,$){qn.setFromCamera(new Wt(F/St*2-1,-($/lt)*2+1),o),Yt.updateWorldMatrix(!0,!1),xs.copy(Yt.matrixWorld).invert();let bt=qn.ray.clone().applyMatrix4(xs).intersectSphere(wa,Ie);if(!bt)return-1;bt.normalize();let ot=-1,ut=.9995-1,Rt=-2;for(let At=0;At<nt;At++){let oe=It[At*3]*bt.x+It[At*3+1]*bt.y+It[At*3+2]*bt.z;oe>Rt&&(Rt=oe,ot=At)}return Rt>z.pickCos?ot:-1}let xn=new an;xn.position.copy(en.hole),a.add(xn);let Ti=new an;Ti.rotation.set(-Math.PI/2+.2,0,.12),xn.add(Ti);let ii={...l,uFill:{value:.3},uKick:{value:0},uLime:{value:Ut.lime.clone()}},Zi=new ge(new Ui(1.75,6.6,220,8),new he({...pn,side:fn,uniforms:ii,vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:Ul+`uniform float uTime,uKick; varying vec2 vP;
      void main(){ float r=length(vP); float a=atan(vP.y,vP.x); float rn=(r-1.75)/(6.6-1.75);
        float sw=a+uTime*(1.6/(r*r*.12+.3));
        float n=snoise(vec3(cos(sw)*r*.8,sin(sw)*r*.8,uTime*.12))*.5+.5;
        float st=.5+.5*sin(sw*22.+r*5.);
        float band=pow(1.-rn,1.8);
        vec3 c=mix(vec3(1.,.96,.82),vec3(1.,.5,.12),smoothstep(0.,.3,rn)); c=mix(c,vec3(.55,.08,.03),smoothstep(.3,1.,rn));
        float dop=1.+.75*sin(a+.6);
        float al=band*(.25+.85*n*n+.25*st*n)*smoothstep(0.,.05,rn)*smoothstep(1.,.75,rn);
        gl_FragColor=vec4(c*al*dop*(.85+uKick*1.2),1.); ${tn} }`}));Ti.add(Zi);let jl=new ge(new Ui(7.2,7.32,360,1),new he({...pn,side:fn,uniforms:ii,vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uFill,uTime; uniform vec3 uLime; varying vec2 vP; void main(){ float a=fract(atan(vP.x,-vP.y)/6.2831853); float s=fract(a*150.); float b=step(.2,s)*step(s,.8);
      float on=step(a,uFill); float head=exp(-abs(a-uFill)*90.); gl_FragColor=vec4((uLime*(on*.9+.06)+vec3(1.)*head*1.5)*b,1.); ${tn} }`}));Ti.add(jl),xn.add(new ge(new Wr(1.6,48,32),new di({color:0})));let Ki=new ge(new Hn(2,2),new he({...pn,uniforms:{...ii,uScale:{value:4.2}},vertexShader:Fl,fragmentShader:`uniform float uTime,uKick; varying vec2 vUv; void main(){ float r=length(vUv)*4.2; float top=.45+.55*smoothstep(-.6,1.,vUv.y/max(length(vUv),.001));
      float photon=exp(-pow((r-1.66)/.035,2.))*2.2; float halo=exp(-(r-1.7)*1.6)*step(1.62,r)*.55*top;
      vec3 c=mix(vec3(1.,.9,.7),vec3(1.,.42,.1),clamp((r-1.66)*.9,0.,1.)); gl_FragColor=vec4(c*(photon+halo)*(1.+uKick),1.); ${tn} }`}));Ki.frustumCulled=!1,Ki.renderOrder=3,xn.add(Ki),xn.add(u(Ut.ember,16,6,.05));let mr=e?700:1300,Ca=new Re,Ra=new Float32Array(mr*3);for(let F=0;F<mr;F++)Ra.set([Math.random()*6.283,Math.random(),.05+Math.random()*.08],F*3);Ca.setAttribute("position",new ze(Ra,3));let gr=new Ni(Ca,new he({...pn,uniforms:{...l,uKick:ii.uKick,uDensity:{value:1}},vertexShader:`uniform float uTime,uPx,uKick,uDensity; varying float vK; void main(){ if(fract(position.y*9.1)>uDensity){ gl_Position=vec4(2.,2.,2.,1.); gl_PointSize=0.; return; }
      float k=fract(position.y+uTime*position.z*(1.+uKick*2.)); float r=mix(7.,1.62,k*k); float an=position.x+k*k*7.+uTime*.1;
      vec3 p=vec3(cos(an)*r,sin(an)*r,sin(position.x*13.)*.25*(1.-k)); vK=k;
      vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=clamp(.07*uPx/(-mv.z),1.,9.); }`,fragmentShader:`varying float vK; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d)*smoothstep(0.,.1,vK)*smoothstep(1.,.9,vK); vec3 c=mix(vec3(1.,.4,.1),vec3(1.,.95,.75),vK); gl_FragColor=vec4(c*a*1.3,1.); ${tn} }`}));gr.frustumCulled=!1,Ti.add(gr);let $e=null,v=null,I=t.tier!=null?t.tier:e?1:2;function G(){$e=new Ll(n),$e.addPass(new Dl(a,o)),v=new tr(new Wt(256,256),.55,.4,.7);let F=v.setSize.bind(v);v.setSize=($,xt)=>F(Math.round($*k),Math.round(xt*k)),e&&(v.radius=.1,v.strength=.38,v.threshold=.8),$e.addPass(v),$e.addPass(new Nl)}let k=I>=2?1:.6;I>0&&G();function H(){let F=St/lt,$=F<.9,xt=(bt,ot)=>Math.max(ot/Math.tan(ha.degToRad(20)),bt/(Math.tan(ha.degToRad(20))*F));return[{p:se(0,.25,$?xt(2.6,3.3):8.2),t:se(0,0,0),o:$?[0,-.22]:[.15,0]},{p:se(0,-6,$?xt(Xt+1.25,5):15.5),t:se(0,-7.4,0),o:$?[0,.02]:[0,0]},{p:se(2.5,en.planet.y+2.5,$?xt(6.2,7):18.5),t:en.planet.clone(),o:$?[0,-.17]:[.17,0]},{p:se(0,en.hole.y+3.8,$?xt(7.4,8):19),t:en.hole.clone(),o:$?[0,-.17]:[.18,-.02]},{p:se($?18:30,-18,$?95:62),t:se(0,-24,0),o:[0,0]}]}let gt=[],St=1,lt=1;function Mt(){St=window.innerWidth,lt=window.innerHeight,n.setPixelRatio(r),n.setSize(St,lt,!1),o.aspect=St/lt,o.updateProjectionMatrix(),$e&&($e.setPixelRatio(r),$e.setSize(St,lt)),l.uPx.value=lt*r/(2*Math.tan(ha.degToRad(20))),T(St/lt),gt=H()}Mt();let Dt=0,Zt=0,re=0,Pt=0,jt=se(),Ae=se(),le=null;function _e(F,$,xt){if(le)return o.clearViewOffset(),o.position.copy(le.p),o.lookAt(le.t),_.visible=!1,Le.visible=we.visible=kt.visible=!1,x.visible=!0,xn.visible=!1,2;Dt=xt?F:Dt+(F-Dt)*(1-Math.exp(-$*3.2));let bt=er(Math.floor(Dt),0,gt.length-2),ot=Xx(er(Dt-bt,0,1)),ut=gt[bt],Rt=gt[bt+1];jt.copy(ut.p).lerp(Rt.p,ot),Ae.copy(ut.t).lerp(Rt.t,ot);let At=ut.o[0]+(Rt.o[0]-ut.o[0])*ot,oe=ut.o[1]+(Rt.o[1]-ut.o[1])*ot;return jt.x+=Zt*.35,jt.y+=re*.22,Pt>0&&(jt.x+=(Math.random()-.5)*Pt*.12,jt.y+=(Math.random()-.5)*Pt*.12,Pt=Math.max(0,Pt-$*2.5)),o.position.copy(jt),o.lookAt(Ae),o.setViewOffset(St,lt,-At*St,-oe*lt,St,lt),Dt}let wt={energy:.3,win:0,sec:0,kick:0,flash:0,shockK:1,poolScale:[1,1,1],pulse:0,holeKick:0,fill:.3},Nt={js:0,frames:0};function Ze(F,$,xt){let bt=performance.now();n.info.reset(),l.uTime.value+=xt?0:F;let ot=_e($.sp,F,xt);le||(_.visible=ot<1.9||ot>3.3,Le.visible=we.visible=kt.visible=ot>.15&&ot<3.5||ot>3.3,x.visible=ot>1.05&&ot<3.6||ot>3.3,xn.visible=ot>2.05),wt.energy+=($.energy-wt.energy)*Math.min(1,F*2),wt.win+=(($.win?1:0)-wt.win)*Math.min(1,F*3),wt.kick=Math.max(0,wt.kick-F*1.8),wt.flash=Math.max(0,wt.flash-F*1.6),M.uEnergy.value=wt.energy,M.uWin.value=wt.win,M.uKick.value=wt.kick,M.uFlash.value=wt.flash*wt.flash;let ut=$.win?.5+.5*Math.sin(l.uTime.value*(6+Math.max(0,$.sec-540)*.6)):0;if(d.scale.setScalar(1+wt.kick*.08+ut*.03*wt.win+wt.flash*.12),w.material.uniforms.uC.value.copy(Ut.lime).lerp(Ut.ember,wt.win),w.material.uniforms.uM.value=.45+wt.energy*.25+wt.flash*1.2+ut*.4,b.material.uniforms.uC.value.copy(Ut.lime).lerp(Ut.ember,wt.win),b.material.uniforms.uA.value=.1+wt.energy*.08+wt.flash*.45+ut*.12*wt.win+wt.kick*.15,N.material.uniforms.uA.value=.16+wt.flash*.8+wt.kick*.2+ut*.1*wt.win,N.material.uniforms.uC.value.copy(Ut.cyan).lerp(Ut.ember,wt.win),A.material.uniforms.uA.value=.012+wt.flash*.12+wt.energy*.01,S[0].rotation.z+=F*(.25+wt.win*1.4),S[1].rotation.z-=F*(.12+wt.win*.7),S[2].rotation.z+=F*.05,P.rotation.z-=F*.02,O.uSec.value=$.sec/10,O.uWinOn.value=$.win?1:0,V.lookAt(o.position),P.quaternion.copy(V.quaternion),wt.shockK<1?(wt.shockK=Math.min(1,wt.shockK+F*.85),W.uK.value=wt.shockK,Z.visible=!0):Z.visible=!1,wt.pulse=Math.max(0,wt.pulse-F*1.5),nn.uPulse.value=wt.pulse,Ne.forEach((Rt,At)=>{let oe=.75+.5*$.poolScale[At];Rt.g.scale.setScalar(Rt.g.scale.x+(oe-Rt.g.scale.x)*Math.min(1,F*2)),Rt.u.uKick.value=Math.max(0,Rt.u.uKick.value-F*2)}),Fn&&!Cn){let Rt=Math.min(1,F*3.5),At=Fn.y-mt;At=Math.atan2(Math.sin(At),Math.cos(At)),mt+=At*Rt,ne+=(Fn.x-ne)*Rt,Math.abs(At)<.002&&(Fn=null)}else Cn||(mt+=F*Se,Se+=(.045-Se)*Math.min(1,F*.8));Yt.rotation.set(ne,mt,0),at.rotation.z+=F*.02,Bt.rotation.z-=F*.015,wt.holeKick=Math.max(0,wt.holeKick-F*1.2),ii.uKick.value=wt.holeKick,wt.fill+=($.fill-wt.fill)*Math.min(1,F*3),ii.uFill.value=wt.fill,Ki.material.uniforms.uKick.value=wt.holeKick,Et(),$e&&I>0?(v.strength=(e?.38:.55)+wt.flash*.5,$e.render(F)):n.render(a,o),Nt.js+=performance.now()-bt,Nt.frames++}let de=en.core;try{n.compile(a,o)}catch{}return{renderer:n,camera:o,scene:a,frame:Ze,resize:Mt,timing:Nt,COL:Ut,pickPlot:Aa,setPlots:fr,plotFlash:Ea,plotPing:Ta,tileWorld:pr,get tier(){return I},setTier(F){I=F,F===0?($e&&$e.dispose&&$e.dispose(),$e=null,it.uniforms.uDensity.value=.6,nn.uDensity.value=.6,gr.material.uniforms.uDensity.value=.6,r=Math.min(r,1)):(k=F>=2?1:.5,$e||G(),r=Math.min(s,window.devicePixelRatio||1)*(F>=2?1:.85)),Mt()},beamIn(F,$,xt){let bt=!!xt,ot=bt?ee(xt[0],xt[1],4):Ot().multiplyScalar(9+Math.random()*5).add(se(0,0,-2)),ut=bt?70:Math.round(er(14+Math.log10($)*3,16,34)),Rt=F?Ut.ember:Math.random()<.25?Ut.cyan:Ut.lime;fe(ot,de,ut,Rt,bt?.55:.22+Math.log10($)*.02,bt?1.05:.85),t.later(()=>{wt.kick=Math.min(1.2,wt.kick+(bt?1:.35)),bt&&(wt.shockK=.35,W.uC.value.copy(F?Ut.ember:Ut.lime));for(let At=0;At<(bt?40:10);At++){let oe=Ot();Ht(oe.clone().multiplyScalar(1.1),oe.clone().multiplyScalar(1.6),oe.clone().multiplyScalar(2.2+Math.random()),l.uTime.value,.5+Math.random()*.4,Rt,-.12)}},(bt?1.05:.85)*900)},explode(F,$){wt.flash=1,wt.kick=1.4,wt.shockK=0,Pt=1,W.uC.value.copy(F.rolled?Ut.ember:Ut.lime);let xt=F.rolled?160:Math.min(e?520:900,200+F.addrs*40),bt=l.uTime.value;for(let ot=0;ot<xt;ot++){let ut=Ot();ut.z*=.35,ut.normalize();let Rt=2.6+Math.random()*4.6,At=Math.random()<.6?Ut.lime:Math.random()<.5?Ut.gold:Ut.white;Ht(ut.clone().multiplyScalar(1.15),ut.clone().multiplyScalar(Rt*.55).add(Ot().multiplyScalar(.8)),ut.clone().multiplyScalar(Rt),bt+Math.random()*.08,1.3+Math.random()*1.2,F.rolled?Ut.ember:At,-(.06+Math.random()*.1))}if(F.rolled||F.top.slice(0,6).forEach((ot,ut)=>{let Rt=Ot();Rt.z=Math.abs(Rt.z)*.3;let At=Rt.clone().multiplyScalar(5+ut*.6);fe(se(0,0,0).add(Rt.clone().multiplyScalar(1.2)),At,30,ut===0?Ut.gold:Ut.lime,.3,1.1,.05*ut)}),$){let ot=ee($[0],$[1],4);for(let ut=0;ut<3;ut++)fe(se(0,0,0),ot,40,Ut.gold,.4,1.3,.15+ut*.12)}},scan(F){O.uScan.value=F},setCut(F){O.uCut.value=F},income(){wt.pulse=Math.min(1.2,wt.pulse+.25)},poolKick(F){Ne[F].u.uKick.value=1},holeKick(F){wt.holeKick=Math.min(1.5,wt.holeKick+F);let $=l.uTime.value,xt=en.hole;for(let bt=0;bt<40;bt++){let ot=Math.random()*6.283,ut=6+Math.random()*2,Rt=se(Math.cos(ot)*ut,(Math.random()-.5)*2.5,Math.sin(ot)*ut).add(xt);Ht(Rt,Rt.clone().lerp(xt,.5).add(se(0,1,0)),xt.clone(),$+Math.random()*.3,1.1+Math.random()*.5,Math.random()<.5?Ut.ember:Ut.gold,.16)}},plotBurst(F,$){Ea(F);let xt=pr(F,se()),bt=l.uTime.value,ot=xt.clone().sub(en.planet).normalize();for(let ut=0;ut<($?90:26);ut++){let Rt=xt.clone().add(ot.clone().multiplyScalar(.6+Math.random()*2.2)).add(Ot().multiplyScalar(.6));Ht(xt,xt.clone().lerp(Rt,.5),Rt,bt+Math.random()*.1,.9+Math.random()*.6,$?Ut.lime:Math.random()<.5?Ut.cyan:Ut.white,-.12)}},claimFx(F){let $=ee(F[0],F[1],4);for(let xt=0;xt<4;xt++)fe(se(0,0,0),$,36,Ut.gold,.35,1.2,xt*.1)},drag(F,$,xt){Cn=xt,xt&&(Fn=null,mt+=F*.006,ne=er(ne+$*.004,-.9,.9),Se=F*.006*30)},mouse(F,$){Zt=F,re=$},focusPlot(F){let $=se(It[F*3],It[F*3+1],It[F*3+2]);Fn={y:Math.atan2($.x,$.z)*-1+Math.atan2(o.position.x-en.planet.x,o.position.z-en.planet.z),x:er(Math.asin($.y)*.9,-.9,.9)},Se=0},setSelHover(F,$){ct.uSel.value=F,ct.uHover.value=$},setPlanetSpin(F,$){Fn=null,Se=0,F!=null&&(ne=F),$!=null&&(mt=$)},shotPlanet(F){let $=en.planet;if(Fn=null,Se=0,F==="off"||!F){le=null;return}F==="whole"?(le={p:se(.15,$.y+.4,13.2),t:$.clone()},ne=.18,mt=.55):F==="zoom"?(le={p:se(.25,$.y+.2,8),t:$.clone()},ne=.12,mt=.72):F==="north"?(le={p:se(.15,$.y+10.2,3.2),t:se($.x,$.y+4.6,$.z)},ne=0,mt=.2):F==="south"&&(le={p:se(.15,$.y-10.2,3.2),t:se($.x,$.y-4.6,$.z)},ne=0,mt=.2)}}}var hs,Ut,pn,se,er,Xx,en,Tn,xf=Je(()=>{vi();rf();af();cf();uf();df();mf();hs=i=>new Qt(i),Ut={lime:hs("#D0FF00"),cyan:hs("#22E6FF"),ember:hs("#FF6A1A"),gold:hs("#FFC43D"),white:hs("#ffffff"),red:hs("#FF3B2E")},pn={transparent:!0,depthWrite:!1,blending:rs},se=(i,t,e)=>new B(i,t,e),er=(i,t,e)=>Math.max(t,Math.min(e,i)),Xx=i=>i*i*(3-2*i),en={core:se(0,0,0),poolY:-8.2,planet:se(0,-25,0),hole:se(0,-47,0)},Tn=5});var Vl={};ep(Vl,{ADDRS:()=>ir,ME:()=>De,N:()=>ei,P:()=>zt,S:()=>L,TIER:()=>wn,TIER_NAME:()=>sr,TIER_W:()=>wh,activationNeed:()=>Tf,addrOf:()=>us,advance:()=>Dh,capPerPlot:()=>$x,capPerWeight:()=>yi,claimAll:()=>Lh,doBurn:()=>zl,emit:()=>Si,fullPoolBurn:()=>Ph,genesisOver:()=>Ef,jackpotEst:()=>ya,lastPaid:()=>rr,liveTierPrice:()=>An,marketPrice:()=>kl,minuteBurned:()=>Wi,minuteCap:()=>Rh,myActivation:()=>xa,myCap:()=>ar,myPlotDividends:()=>Ah,myPlots:()=>Mi,myTierCounts:()=>_a,myTierLeft:()=>fs,myWeight:()=>Gi,owner:()=>Ve,plotTier:()=>ln,plotsFromBurn:()=>Bl,prizeFor:()=>va,refFloorPrice:()=>Ih,secOf:()=>ds,seedMinute:()=>Nh,sell:()=>Gl,sellQuote:()=>Hl,sub:()=>Vi,tier1Ready:()=>ps,totalWeight:()=>Yx,weightOf:()=>ni});function Bl(i){let t=i,e=Math.floor(t/zt.costE);t-=e*zt.costE;let n=Math.floor(t/zt.costR);t-=n*zt.costR;let s=Math.floor(t/zt.costC),r=e+n+s;if(r>zt.plotsMax){let o=r-zt.plotsMax;o>=s?(o-=s,s=0):(s-=o,o=0),o>=n?(o-=n,n=0):(n-=o,o=0),o>0&&(e=Math.max(0,e-o))}let a=[];for(let o=0;o<e;o++)a.push(wn.EPIC);for(let o=0;o<n;o++)a.push(wn.RARE);for(let o=0;o<s;o++)a.push(wn.COMMON);return{epic:e,rare:n,common:s,n:e+n+s,tiers:a,weight:e*zt.wE+n*zt.wR+s*zt.wC}}function qx(){let i=Math.random();return i<.18?wn.EPIC:i<.45?wn.RARE:wn.COMMON}function bf(){let i=0,t=0;for(let e=0;e<L.plotsMinted;e++){let n=ni(e);i+=n,Ve[e]===De&&(t+=n)}return L.totalWeight=i,t}function Mi(){let i=[];for(let t=0;t<L.plotsMinted;t++)Ve[t]===De&&i.push(t);return i}function _a(){let i={common:0,rare:0,epic:0,weight:0};for(let t of Mi())ln[t]===1?i.common++:ln[t]===2?i.rare++:ln[t]===3&&i.epic++,i.weight+=ni(t);return i}function Tf(i=De){let t=0;if(i===De)t=Gi();else for(let e=0;e<L.plotsMinted;e++)Ve[e]===i&&(t+=ni(e));return t*zt.actPerWeight}function xa(){let i=Gi(),t=i*zt.actPerWeight,e=Math.floor(L.t/zt.actWindow);L.my.winId!==e&&(L.my.winId=e,L.my.winBurn=0);let n=L.my.winBurn||0,s=t>0&&n>=t;return{weight:i,need:t,burned:n,left:Math.max(0,t-n),active:s,window:e,costPer:zt.actPerWeight}}function Ah(){let i=_a(),t=xa();return{plots:i.common+i.rare+i.epic,common:i.common,rare:i.rare,epic:i.epic,weight:i.weight,claimable:L.my.plotDiv,active:t.active,need:t.need,burned:t.burned,left:t.left,activeWeight:L.activeWeight,pool:L.plotPool,remaining:L.plotDivLeft}}function Zx(i){L.minutePool+=i*zt.split[0],L.plotPool+=i*zt.split[1];let t=i*zt.split[2];L.round?(L.round.pool+=t*.8,L.nextPool+=t*.2,L.round.price=An()):L.floorReserve+=t,L.taxIn+=i,Si("income",i)}function wf(i,t){if(L.plotsMinted>=ei||L.plotsCommitted>=ei)return-1;let e=L.minute-L.startMinute,n=e<zt.genesisMinutes?(e+1)*zt.plotsPerMinute:ei;if(L.plotsCommitted>=Math.min(n,ei))return-1;let s=L.plotsMinted;return Ve[s]=i,ln[s]=t,L.plotsMinted++,L.plotsCommitted++,L.totalWeight+=wh[t],s}function Mf(i,t){let e=Math.floor(L.t/zt.actWindow);if(i===De){L.my.winId!==e&&(L.my.winId=e,L.my.winBurn=0),L.my.winBurn+=t;let n=Tf(De);n>0&&L.my.winBurn>=n&&(L.my.actW=Gi(),L.my.actWin=e)}}function zl(i,t){let e=ds(L.t);if(t<zt.minBurnTx)throw new Error("\u5355\u7B14\u6700\u5C11\u71C3\u70E7 1,000 \u679A");if(i===De){if(!L.wallet)throw new Error("\u8BF7\u5148\u8FDE\u63A5\u94B1\u5305\uFF08\u6A21\u62DF\uFF09");if(t>L.my.tok)throw new Error("EDEN \u4F59\u989D\u4E0D\u8DB3");L.my.tok-=t,L.my.minuteBurn+=t}Mf(i,t);let n={who:i,amount:t,sec:e,late:e>=zt.certain,minute:L.minute};L.cur.burns.push(n),n.late?L.cur.late+=t:L.cur.pre+=t;let s=(L.cur.agg.get(i)||0)+t;L.cur.agg.set(i,s),s>L.cur.leadAmt&&(L.cur.leadAmt=s,L.cur.lead=i),L.burnedTotal+=t;let r=Bl(t),a=[];if(e<zt.certain)for(let o of r.tiers){let l=wf(i,o);l>=0&&(a.push(l),i===De&&(L.my.plotsPending=Math.max(0,L.my.plotsPending)))}else r.n&&i===De&&(L.my.plotsPending+=r.n);return i===De&&a.length&&Mf(i,0),Si("burn",{...n,minted:a,preview:r}),{...n,minted:a,preview:r}}function kl(){return Ch()*L.mktPrem}function Rh(){return L.minutePool*zt.prizePct}function va(i){return Math.min(Rh(),i*Af())}function Ph(){let i=Af();return i>0?Rh()/i:0}function Ih(){return Ch()}function ya(i){let t=va(i),e=t*zt.jackpotShare,n=L.minutePool*zt.jackpotPoolCap,s=L.cur.agg.size;return s<zt.jackpotMinBurners?{release:t,jackpot:0,proRata:t*zt.jackpotShare,lead:L.cur.lead,leadAmt:L.cur.leadAmt,burners:s}:{release:t,jackpot:Math.min(e,n),proRata:t-Math.min(e,n),lead:L.cur.lead,leadAmt:L.cur.leadAmt,burners:s}}function Kx(){let i=Math.floor((L.t-1)/zt.prizeRound),t=zt.certain+Math.floor(Math.random()*61),e=L.cur.carry,n=0,s=0,r=0,a=new Map,o=null,l=0;for(let d of L.cur.burns)if(d.sec<t){e+=d.amount,d.who===De&&(n+=d.amount);let y=(a.get(d.who)||0)+d.amount;a.set(d.who,y),y>l&&(l=y,o=d.who)}else s+=d.amount,d.who===De&&(r+=d.amount);let c=0,h=0,f=!1,u=0,p=0,_=null;if(e<zt.minMinuteBurn)f=!0,s+=e,r+=n,n=0;else{c=va(e);let d=ya(e),y=a.size;p=c*zt.jackpotShare,u=y>=zt.jackpotMinBurners?Math.min(c*zt.jackpotShare,L.minutePool*zt.jackpotPoolCap):0,u===0?p=c-0:p=c-u,L.minutePool-=p+u,h=e>0?n/e:0,L.my.claim+=p*h,o===De&&u>0&&(L.my.claim+=u),_=u>0?o:null}let M=[...a.entries()].sort((d,y)=>y[1]-d[1]).slice(0,6).map(([d,y])=>({w:d,a:y,bnb:f?0:p*y/e+(d===_?u:0)})),m={m:i,cutoff:t,total:e,prize:p+u,pro:p,jackpot:u,win:_,mine:p+u?p*h+(o===De?u:0):0,myIn:n,addrs:a.size,roll:s,rolled:f,plots:0,top:M,lead:o,leadAmt:l};L.lastCut={cutoff:t,t:L.t,m:i},L.minuteHist.unshift(m),L.minuteHist.length>8&&L.minuteHist.pop(),L.minute+=10,L.cur={burns:[],pre:0,late:0,carry:s,agg:new Map,lead:null,leadAmt:0},L.my.minuteBurn=r,Si("minute",m)}function Jx(){let i=Math.floor(L.t/60);if(L.lastDivMin<0){L.lastDivMin=i;return}if(i===L.lastDivMin)return;let t=Math.min(4,i-L.lastDivMin);for(let e=0;e<t;e++){let n=L.lastDivMin+e,s=n%(zt.plotDivRound/60);if(s===0&&(L.plotPool+=L.plotDivLeft,L.plotDivBudget=L.plotPool*zt.plotRelease,L.plotPool-=L.plotDivBudget,L.plotDivLeft=L.plotDivBudget),L.activeWeight>0&&L.plotDivLeft>0){let r=zt.plotDivRound/60-s,a=L.plotDivLeft/Math.max(1,r);L.plotDivLeft-=a;let o=L.my.actWin===Math.floor(n*60/zt.actWindow)?L.my.actW:0;if(o>0){let l=a*(o/L.activeWeight);L.my.plotDiv+=l;let c=Mi(),h=c.length?l/c.length:0;c.forEach(f=>rr[f]=h)}}}L.lastDivMin=i}function Sf(i){L.roundId++,L.round={id:L.roundId,pool:i,paid:0,filled:0,openAt:L.t},L.round.price=An(),L.my.redeemTier!==L.roundId&&(L.my.redeemUsed=0,L.my.redeemTier=L.roundId),Si("roundOpen",L.round)}function Cf(){let i=L.round;if(i&&i.filled>=zt.quota-1e-6){L.roundHist.unshift({id:i.id,price:An()||i.price,filled:i.filled,why:"\u5151\u6EE1"}),L.roundHist.length>5&&L.roundHist.pop();let t=L.nextPool;L.nextPool=0,L.round=null,Si("roundEnd",i),Sf(t)}if(!L.round&&ps()){let t=L.floorReserve*.8;L.nextPool+=L.floorReserve*.2,L.floorReserve=0,Sf(t)}L.round&&(L.round.price=An())}function Hl(i,t=De){let e=L.round;if(!e)return{take:0,out:0,left:0};let n=t===De?fs():Math.floor((()=>{let a=0;for(let o=0;o<L.plotsMinted;o++)Ve[o]===t&&(a+=ni(o));return a})()*yi()),s=Math.max(0,Math.min(i,n,zt.quota-e.filled)),r=An();return{take:s,out:s*r,left:n,price:r}}function Gl(i,t,e){let n=L.round;if(!n)throw new Error(ps()?"\u5F53\u524D\u6863\u5C1A\u672A\u5F00\u51FA":"\u521B\u4E16\u7ED3\u675F\u4E14\u6709\u5730\u5757\u540E\u5F00\u7B2C 1 \u6863");let s=0;for(let a=0;a<L.plotsMinted;a++)Ve[a]===i&&s++;if(s<=0)throw new Error("\u53EA\u6709\u5730\u4E3B\u80FD\u5151\u6362\uFF0C\u5730\u5757\u662F\u95E8\u7968\uFF1B\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B");let r=Hl(t,i);if(r.take<=0)throw new Error(r.left<=0?"\u4F60\u7684\u6258\u5E95\u989D\u5EA6\u5DF2\u7528\u5B8C":"\u672C\u6863\u989D\u5EA6\u5DF2\u5151\u6EE1\uFF0C\u5DF2\u5F00\u4E0B\u4E00\u6863");if(e&&r.out<e)throw new Error("\u53EF\u5F97 BNB \u4F4E\u4E8E\u4F60\u8BBE\u7684\u6700\u5C11\u6536\u5230\uFF0C\u672A\u6210\u4EA4");if(i===De){if(!L.wallet)throw new Error("\u8BF7\u5148\u8FDE\u63A5\u94B1\u5305\uFF08\u6A21\u62DF\uFF09");if(r.take>L.my.tok)throw new Error("EDEN \u4F59\u989D\u4E0D\u8DB3");L.my.tok-=r.take,L.my.bnb+=r.out,L.my.redeemUsed=(L.my.redeemTier===n.id?L.my.redeemUsed:0)+r.take,L.my.redeemTier=n.id}return n.filled+=r.take,n.paid+=r.out,n.price=An(),L.roundBurned+=r.take,Si("sell",{who:i,...r}),Cf(),r}function Lh(){if(!L.wallet)throw new Error("\u8BF7\u5148\u8FDE\u63A5\u94B1\u5305\uFF08\u6A21\u62DF\uFF09");let i=L.my.claim+L.my.plotDiv,t=Math.min(L.my.plotsPending,zt.maxLazyMint);if(i<=0&&!t)throw new Error("\u6682\u65F6\u6CA1\u6709\u53EF\u9886\u53D6\u7684");L.my.bnb+=i,L.my.claim=0,L.my.plotDiv=0;let e=[];for(let n=0;n<t&&L.plotsMinted<ei;n++){let s=wf(De,wn.COMMON);s>=0&&e.push(s)}return L.my.plotsPending=Math.max(0,L.my.plotsPending-e.length),Si("claim",{bnb:i,plots:e}),{bnb:i,plots:e}}function Qx(){L.t++;let i=ds(L.t);i%60===0&&L.minute++,Math.random()<.45&&Zx(nr(.0015,.014));let t=i>=zt.certain?.55:.22;if(Math.random()<t){let e=Math.round(Math.exp(nr(Math.log(2e3),Math.log(24e5)))/1e3)*1e3;try{zl(Math.floor(Math.random()*ir.length),e)}catch{}}if(Math.random()<.03&&L.round)try{Gl(Math.floor(Math.random()*ir.length),Math.round(nr(5e4,9e5)/1e3)*1e3)}catch{}i===0&&Kx(),Jx(),Cf(),L.mktPrem=vf(L.mktPrem+nr(-.004,.0045),2.2,3.2),L.chg=vf(L.chg+nr(-.05,.05),-6,9),Si("tick",i)}function Dh(i){Ol+=Math.min(i,.25)*L.speed;let t=0;for(;Ol>=1&&t<600;)Ol-=1,t++,Qx();return L.speed<=10?Ol:0}function Wi(){return L.cur.carry+L.cur.pre+L.cur.late}function Nh(){let i=ds(L.t);for(let t=0;t<i;t++)if(Math.random()<.18){let e=Math.round(Math.exp(nr(Math.log(3e3),Math.log(12e5)))/1e3)*1e3,n=Math.floor(Math.random()*ir.length),s={who:n,amount:e,sec:t,late:t>=zt.certain,minute:L.minute};L.cur.burns.push(s),s.late?L.cur.late+=e:L.cur.pre+=e;let r=(L.cur.agg.get(n)||0)+e;L.cur.agg.set(n,r),r>L.cur.leadAmt&&(L.cur.leadAmt=r,L.cur.lead=n)}Wi()<8e5&&(L.cur.carry+=115e4)}var zt,De,nr,vf,yf,ir,us,ds,wn,sr,wh,L,ei,Ve,rr,ln,ni,An,Yx,yi,Gi,ar,fs,$x,Ef,ps,Th,Si,Vi,Ch,Af,Ol,Rf=Je(()=>{zt={split:[.45,.3,.25],prizePct:.15,jackpotShare:.5,jackpotPoolCap:.05,jackpotMinBurners:2,prizeRound:600,certain:540,minMinuteBurn:2e6,minBurnTx:1e3,plotRelease:.8,quota:15e6,plotsMax:2e3,plotsPerMinute:20,genesisMinutes:30,costC:1e5,costR:2e5,costE:3e5,wC:1,wR:2.2,wE:3.5,actPerWeight:1e3,actWindow:600,plotDivRound:1800,minCapPerWeight:1e5,maxRedeemPlots:50,supply:1e9,bnbUsd:612,maxLazyMint:50},De=-1,nr=(i,t)=>i+Math.random()*(t-i),vf=(i,t,e)=>Math.max(t,Math.min(e,i)),yf=()=>Math.random().toString(16).slice(2,6).padEnd(4,"0"),ir=Array.from({length:400},()=>`0x${yf()}\u2026${yf()}`),us=i=>i===De?"\u4F60":ir[i],ds=i=>(i%zt.prizeRound+zt.prizeRound)%zt.prizeRound,wn={COMMON:1,RARE:2,EPIC:3},sr={1:"\u666E\u901A",2:"\u7A00\u6709",3:"\u53F2\u8BD7"},wh={1:zt.wC,2:zt.wR,3:zt.wE};L={t:312*600+120,speed:1,minute:1874,wallet:!1,approved:!1,minutePool:18.42,plotPool:9.37,taxIn:142.6,burnedTotal:4126e5,roundBurned:5831e4,plotsMinted:1680,plotsCommitted:1680,plotQuotaCarry:0,plotEma:0,roundId:3,round:null,roundHist:[],nextPool:.85,floorReserve:0,startMinute:0,startTime:0,cur:{burns:[],pre:0,carry:0,agg:new Map,late:0,lead:null,leadAmt:0},my:{tok:5e6,bnb:2.5,claim:0,credit:0,plotDiv:.0047,plotsPending:0,minuteBurn:0,hourBurn:0,winBurn:0,winId:-1,actW:0,actWin:-1,redeemUsed:0,redeemTier:3},sel:6,vol24:0,lastHourAt:0,lastCut:null,mktPrem:2.6,chg:3.2,minuteHist:[],hourBurn:new Map,openHours:3,totalWeight:0,activeWeight:0,actWindow:0,plotDivLeft:0,plotDivBudget:0,lastDivMin:-1};L.round={id:3,pool:3.42,paid:.86,filled:38e5,openAt:L.t-2.1*3600};L.round.price=(L.round.pool-L.round.paid)/(zt.quota-L.round.filled);L.roundHist=[{id:2,price:48e-8,filled:15e6,why:"\u5151\u6EE1"},{id:1,price:21e-8,filled:15e6,why:"\u5151\u6EE1"}];ei=zt.plotsMax,Ve=new Int32Array(ei),rr=new Float64Array(ei),ln=new Uint8Array(ei),ni=i=>wh[ln[i]]||0;for(let i=0;i<ei;i++)Ve[i]=Math.floor(Math.random()*ir.length),ln[i]=i<L.plotsMinted?qx():0;[5,40,232,880,1510].forEach((i,t)=>{Ve[i]=De,ln[i]=[wn.COMMON,wn.RARE,wn.EPIC,wn.COMMON,wn.RARE][t]});bf();L.my.actW=bf();L.my.actWin=Math.floor(L.t/zt.actWindow);L.actWindow=L.my.actWin;L.activeWeight=L.totalWeight*.22+L.my.actW;L.plotDivBudget=L.plotPool*zt.plotRelease;L.plotDivLeft=L.plotDivBudget*.55;An=()=>{let i=L.round;if(!i)return 0;let t=zt.quota-i.filled,e=i.pool-i.paid;return t>0?e/t:0},Yx=()=>L.totalWeight,yi=()=>Math.max(zt.minCapPerWeight,Math.ceil(2*zt.quota/Math.max(1e-9,L.totalWeight))),Gi=()=>{let i=0;for(let t=0;t<L.plotsMinted;t++)Ve[t]===De&&(i+=ni(t));return i},ar=()=>Math.floor(Gi()*yi()),fs=()=>L.round?Math.max(0,ar()-(L.my.redeemTier===L.round.id?L.my.redeemUsed:0)):0,$x=()=>yi(),Ef=()=>L.minute-L.startMinute>=zt.genesisMinutes,ps=()=>Ef()&&L.plotsCommitted>=1;Th={},Si=(i,t)=>(Th[i]||[]).forEach(e=>e(t)),Vi=(i,t)=>(Th[i]=Th[i]||[]).push(t);Ch=()=>L.round?An():L.roundHist[0]?L.roundHist[0].price:0;Af=()=>Math.min(Ch()||0,kl()||0);Ol=0});function Xi(i){return typeof i=="number"&&isFinite(i)}function Pf(i,t){if(!Xi(i))return"0";let e=Math.max(0,Math.min(24,t|0)),n=i<0,s=Math.abs(i),r=1;for(let c=0;c<e;c++)r*=10;let a=Math.round(s*r),o=String(a);if(e===0)return(n?"-":"")+o;o.length<=e&&(o="0".repeat(e+1-o.length)+o);let l=o.length-e;return(n?"-":"")+o.slice(0,l)+"."+o.slice(l)}function jx(i){if(i.indexOf(".")<0)return i;let t=i.replace(/0+$/,"");return t.endsWith(".")&&(t=t.slice(0,-1)),t}function If(i,t=5){if(!Xi(i)||i===0)return"0";let e=i<0,n=Math.abs(i),s=Math.max(1,t|0),r=Math.floor(Math.log10(n));if(!isFinite(r))return"0";let a=r>=0?Math.max(0,s-(r+1)):-r-1+s,o=Pf(n,a);return o=jx(o),o.indexOf(".")<0&&n<1&&(o=Pf(n,-r)),(e?"-":"")+o}function Lf(i){return!Xi(i)||i<=0?"$0":i>=1e3?"$"+i.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"$"+If(i,5)}function tv(i){if(!Xi(i)||i<=0)return"$0";let t=i,e=n=>(n>=100?n.toFixed(0):n>=10?n.toFixed(1):n.toFixed(2)).replace(/\.0+$/,"").replace(/(\.\d*?)0+$/,"$1");return t>=1e9?"$"+e(t/1e9)+"B":t>=1e6?"$"+e(t/1e6)+"M":t>=1e3?"$"+e(t/1e3)+"K":t>=1?"$"+t.toFixed(2):Lf(t)}function Uh(i){return!Xi(i)||i<=0?"0":If(i,5)}function or(i,t,e){let n=Xi(i)&&i>0?i:0,s=Xi(t)&&t>0?t:0,r=n&&s?n*s:0,a=r&&Xi(e)&&e>0?r*e:0;return{usd:s?Lf(r):"",cap:s?tv(a):"",bnb:Uh(n),usdNum:r,capNum:a,hasUsd:!!s}}function Df(i,t,e,n={}){let s=or(i,t,e),r=n.unit||"\u679A";if(!s.bnb||s.bnb==="0")return'<span class="px-na">\u2014</span>';let a=s.hasUsd?`<b class="px-usd">${s.usd}</b><span class="px-cap">\u5E02\u503C ${s.cap}</span>`:"",o=`<span class="px-bnb">${s.bnb} BNB / ${r}</span>`;return`<span class="px-block">${a}${o}</span>`}var Nf=Je(()=>{});var Mv=tp(()=>{xf();Rf();Nf();var{S:st,P:Pe,ME:Nn}=Vl,Gt=(i,t=document)=>t.querySelector(i),Un=(i,t=document)=>[...t.querySelectorAll(i)],Yi=new URLSearchParams(location.search),Vf=matchMedia("(max-width:820px)").matches,lr=matchMedia("(prefers-reduced-motion: reduce)").matches||Yi.get("still")==="1",We=(i,t=4)=>Number(i).toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t}),Te=i=>i>=1e9?(i/1e9).toFixed(2)+"B":i>=1e6?(i/1e6).toFixed(2)+"M":i>=1e3?(i/1e3).toFixed(i>=1e5?0:1)+"K":Math.round(i)+"",Wf=Yi.get("rec")==="1",Wn={now:0,q:[]},gs=(i,t)=>{let e={at:Wn.now+t/1e3,fn:i,off:!1};return Wn.q.push(e),e},ev=i=>{i&&(i.off=!0)};function nv(){if(!Wn.q.length)return;let i=Wn.q.filter(t=>t.at<=Wn.now);i.length&&(Wn.q=Wn.q.filter(t=>t.at>Wn.now),i.forEach(t=>!t.off&&t.fn()))}var ur=i=>+String(i).replace(/[^\d.]/g,"")||0;Yi.get("t")&&(st.t=+Yi.get("t"));Nh();var Ct=null;try{Ct=_f(Gt("#gl"),{mobile:Vf,later:gs,tier:Yi.has("q")?+Yi.get("q"):void 0})}catch(i){console.error(i),document.body.classList.add("nogl")}Ct&&Ct.tier===0&&document.documentElement.classList.add("lowq");var iv=Gt(".title span");iv.innerHTML=[..."EDEN"].map((i,t)=>`<i class="ch" style="--i:${t}">${i}</i>`).join("");Un(".sec").forEach(i=>Un(".rv",i).forEach((t,e)=>t.style.setProperty("--d",e)));var sv=Un("#nav a"),rv=new IntersectionObserver(i=>i.forEach(t=>{t.isIntersecting&&t.target.classList.add("in")}),{threshold:.18});Un(".sec").forEach(i=>rv.observe(i));var qi=[];function Zh(){let i=Un(".sec"),t=document.documentElement.scrollHeight-innerHeight;qi=i.map(e=>Math.min(e.offsetTop,t))}Zh();addEventListener("resize",()=>{Zh(),Ct&&Ct.resize()});addEventListener("load",Zh);function av(){let i=scrollY,t=0;for(;t<qi.length-1&&i>=qi[t+1];)t++;if(t>=qi.length-1)return qi.length-1;let e=Math.max(1,qi[t+1]-qi[t]),n=(i-qi[t])/e;return t+Math.min(1,Math.max(0,(n-.12)/.76))}var ov=()=>va(Wi()),Zl={minute:()=>st.minute,roundNo:()=>Math.floor(st.t/Pe.prizeRound),prize:ov,fullBurn:()=>Ph(),minutePool:()=>st.minutePool,plotPool:()=>st.plotPool,reserveAll:()=>st.floorReserve+(st.round?st.round.pool-st.round.paid:0)+(st.nextPool||0),reserveAllUsd:()=>Zl.reserveAll()*Pe.bnbUsd,burned:()=>Wi(),addrs:()=>st.cur.agg.size,myBurn:()=>st.my.minuteBurn,roundId:()=>st.round?st.round.id:st.roundId,roundPool:()=>st.round?st.round.pool-st.round.paid:0,roundFilled:()=>st.round?st.round.filled:0,roundBurned:()=>st.roundBurned,nextPool:()=>st.nextPool||0,roundQuotaLeft:()=>st.round?Math.max(0,Pe.quota-st.round.filled):0,capPerPlot:()=>yi(),myTierLeft:()=>fs(),jackpot:()=>ya(Wi()).jackpot},lv=Un("[data-k]").map(i=>({el:i,k:i.dataset.k,d:i.dataset.d!=null?+i.dataset.d:4,f:i.dataset.f,shown:null,last:""}));function cv(i){for(let l of lv){let c=Zl[l.k]?Zl[l.k]():0,h;l.f==="raw"?h=c:(l.shown==null||typeof c!="number"?l.shown=c:l.shown+=(c-l.shown)*Math.min(1,i*6),Math.abs(c-l.shown)<Math.abs(c)*1e-6&&(l.shown=c),h=l.f==="tok"?Te(l.shown):l.f==="px"?Uh(l.shown):We(l.shown,l.d)),h!==l.last&&(l.el.textContent=h,l.last=h)}let t=Wi(),e=Math.min(1,t/Pe.minMinuteBurn);Ff("#burnBar",`scaleX(${e.toFixed(3)})`);let n=Gt("#burnProg");n&&(n.textContent=`${Te(t)} / 2,000,000`),Ff("#roundBar",`scaleX(${st.round?(st.round.filled/Pe.quota).toFixed(4):1})`);let s=st.my.claim+st.my.plotDiv>0||st.my.plotsPending>0;Gt("#claimDot").classList.toggle("on",s),Gt("#claimDot2").classList.toggle("on",s);let r=ya(t),a=Gt("#leadTxt");a&&(a.textContent=r.lead==null?"\u2014":(r.lead===Nn?"\u4F60":us(r.lead))+" \xB7 "+Te(r.leadAmt));let o=Gt("#quotaMath");if(o&&st.round){let l=Gi(),c=yi();o.textContent=`\u6211\u7684\u6258\u5E95\u989D\u5EA6 = ${l.toFixed(1)} \xD7 ${Te(c)} = ${Te(ar())}\uFF08\u5DF2\u7528 ${Te(ar()-fs())}\uFF0C\u5269\u4F59 ${Te(fs())}\uFF09`}hv(),Jl(),$f()}var Uf={};function Ff(i,t){Uf[i]!==t&&(Uf[i]=t,Gt(i).style.transform=t)}function Fh(i,t){let e=or(t,Pe.bnbUsd,Pe.supply);return t?`<div class="px-item"><span class="px-lab">${i}</span><b class="px-usd">${e.usd}</b><span class="px-cap">\u5E02\u503C ${e.cap}</span><span class="px-bnb">${e.bnb} BNB / \u679A</span></div>`:`<div class="px-item"><span class="px-lab">${i}</span><span class="px-na">\u2014</span></div>`}var Of="";function hv(){let i=Ih(),t=kl(),e=Math.min(i||t,t||i),n=[i,t,st.round&&st.round.pool,st.round&&st.round.filled,st.nextPool].join();if(n===Of)return;Of=n;let s=Gt("#heroPrices");s&&(s.innerHTML=Fh("\u5E02\u4EF7",t)+Fh("\u6258\u5E95\u4EF7",i)+Fh("\u5956\u52B1\u53C2\u8003 min(\u6258\u5E95, \u5E02\u4EF7)",e));let r=Gt("#tierPrice");r&&(r.innerHTML=st.round?Df(An(),Pe.bnbUsd,Pe.supply):'<span class="px-na">\u2014</span>');let a=Gt("#tierStatus");a&&(a.textContent=st.round?"\u5F00\u653E\u4E2D \xB7 \u6258\u5E95\u65E0\u9700\u6FC0\u6D3B":ps()?"\u6B63\u5728\u5F00\u6863":"\u521B\u4E16\u7ED3\u675F\u4E14\u6709\u5730\u5757\u540E\u5F00\u7B2C 1 \u6863")}var hr=Gt("#clock"),kh=Gt("#cN"),Hh=Gt("#cPh"),Gh=Gt("#cS"),Vh=0,Wh="";function Bf(i){return String(i).padStart(2,"0")}function uv(i){if(Vh)return;let t=ds(st.t)+i,e=t>=Pe.certain,n=Math.max(0,Math.ceil(Pe.prizeRound-t)),s=Bf(n/60|0)+":"+Bf(n%60),r=s+(e?"w":"c");if(r===Wh)return;Wh=r,kh.textContent=s,hr.classList.toggle("win",e),hr.classList.remove("scan","cut"),Hh.textContent=e?"\u968F\u673A\u622A\u6B62 540\u2013599":"\u672C\u8F6E\u5269\u4F59",Gh.textContent=e?"\u665A\u70E7\u53EF\u80FD\u987A\u5EF6\u5230\u4E0B\u4E00\u8F6E":"\u7B2C 0\u2013539 \u79D2\u786E\u5B9A\u8BA1\u5165",Gt("#burnBtn").classList.toggle("win",e);let a=Gt("#burnPhase");a&&(a.textContent=e?"\u7B2C 540\u2013599 \u79D2\u968F\u673A\u622A\u6B62\uFF0C\u665A\u70E7\u53EF\u80FD\u987A\u5EF6\u5230\u4E0B\u4E00\u8F6E \xB7 \u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E":"\u7B2C 0\u2013539 \u79D2\u786E\u5B9A\u8BA1\u5165 \xB7 \u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E")}var Oh=Gt("#feed");function dv(i){if(Vf||document.hidden)return;let t=document.createElement("div");for(t.className="fi"+(i.late?" late":"")+(i.who===Nn?" me":""),t.innerHTML="<i></i><span></span><b></b>",t.children[1].textContent=i.who===Nn?"\u4F60":us(i.who),t.children[2].textContent=Te(i.amount),Oh.prepend(t);Oh.children.length>5;)Oh.lastChild.remove()}function Xf(){let i=st.round?or(An(),Pe.bnbUsd,Pe.supply):null,e=[["\u7D2F\u8BA1\u71C3\u70E7",Te(st.burnedTotal)+" EDEN"],["\u7D2F\u8BA1\u7A0E\u6536",We(st.taxIn,2)+" BNB"],["\u6258\u5E95\u4EF7",i?i.usd+" \xB7 \u5E02\u503C "+i.cap:ps()?"\u5F00\u6863\u4E2D":"\u521B\u4E16\u7ED3\u675F\u540E\u5F00\u7B2C 1 \u6863"],["\u672C\u6863\u5DF2\u5151",st.round?Te(st.round.filled)+" / 15M":"\u2014"],["\u5730\u5757\u5DF2\u53D1",st.plotsMinted+" / 2000"],["\u5168\u7F51\u6743\u91CD",st.totalWeight.toFixed(1)],["\u7A0E","3% / 3% \u2192 100% \u91D1\u5E93"]].map(([n,s])=>`<span><i>\u25C6</i> ${n}<b>${s}</b></span>`).join("");Gt("#tk").innerHTML=e+e}function Xn(i,t){let e=Gt("#toasts"),n=document.createElement("div");for(n.className="toast"+(t?" err":""),n.innerHTML=`<i>${t?"!":"\u2713"}</i><span></span>`,n.lastChild.textContent=i,e.appendChild(n);e.children.length>3;)e.firstChild.remove();setTimeout(()=>{n.classList.add("out"),setTimeout(()=>n.remove(),400)},t?3600:3e3)}var Kl=(i,t,e=700)=>new Promise(n=>{let s=i.innerHTML;i.disabled=!0,i.innerHTML=`<span>${t}</span>`,setTimeout(()=>{i.disabled=!1,i.innerHTML=s,n()},e)}),Kh=i=>{let t=i.getBoundingClientRect();return[t.left+t.width/2,t.top+t.height/2]},Xh=Gt("#walletBtn");function Jh(){Xh.classList.toggle("on",st.wallet),Xh.lastChild.textContent=st.wallet?"0x5eED\u2026beEF":"\u8FDE\u63A5\u94B1\u5305",qf(),Yf(),dr()}Xh.onclick=()=>{st.wallet=!st.wallet,st.wallet||(st.approved=!1),Jh(),Xn(st.wallet?"\u5DF2\u6A21\u62DF\u8FDE\u63A5\u94B1\u5305\uFF1A5,000,000 EDEN \xB7 2.5 BNB\uFF08\u5047\u6570\u636E\uFF09":"\u5DF2\u65AD\u5F00\u6A21\u62DF\u94B1\u5305")};var _s=Gt("#burnBtn");function qf(){_s.firstChild.textContent=st.wallet?st.approved?"\u71C3\u70E7":"\u6388\u6743 EDEN":"\u8FDE\u63A5\u94B1\u5305"}var Ei=Gt("#amt");function Yf(){let i=Gt("#autoPlot");if(!i)return;let t=Mi().length,e=_a();i.textContent=t>0?`\u81EA\u52A8\u8BA1\u5165\u4F60\u7684 ${t} \u5757\u5730\uFF08\u666E ${e.common} / \u7A00 ${e.rare} / \u53F2 ${e.epic} \xB7 \u6743\u91CD ${e.weight.toFixed(1)}\uFF09\uFF0C\u7075\u9B42\u7ED1\u5B9A`:"\u53EA\u53C2\u52A0\u8F6E\u6B21\u5956\u6C60"}function Jl(){let i=Gt("#burnPreview")||Gt("#tierPreview");if(!i)return;let t=ur(Ei.value),e=Bl(t);i.innerHTML=`<div class="tp"><b>\u672C\u7B14\u9884\u89C8</b><span>\u666E ${e.common}</span><span>\u7A00 ${e.rare}</span><span>\u53F2 ${e.epic}</span><span>\u6743\u91CD ${e.weight.toFixed(1)}</span>${t&&t<Pe.minBurnTx?"<i>\u4F4E\u4E8E 1,000 \u679A</i>":""}</div>`}function $f(){let i=Gt("#actPrefill");if(!i)return;let t=xa();if(t.need<=0){i.innerHTML="";return}if(t.active){i.innerHTML=`<button type="button" class="act-ok">\u672C\u7A97\u53E3\u5DF2\u6FC0\u6D3B \xB7 \u6743\u91CD ${t.weight.toFixed(1)}</button>`;return}i.innerHTML=`<button type="button" id="actFill">\u8FD8\u5DEE ${Te(t.left)} \u679A\u5373\u53EF\u6FC0\u6D3B\uFF08\u6BCF 1 \u6743\u91CD 1,000 \u679A / 10 \u5206\u949F\uFF09</button>`;let e=Gt("#actFill");e&&(e.onclick=()=>{Ei.value=Math.ceil(t.left).toLocaleString("en-US"),Jl()})}Ei.addEventListener("input",()=>{let i=ur(Ei.value);Ei.value=i?i.toLocaleString("en-US"):"",Jl()});Un(".dk-chips button").forEach(i=>i.onclick=()=>{let t=i.dataset.a==="max"?st.my.tok:+i.dataset.a;Ei.value=Math.floor(t).toLocaleString("en-US"),Jl()});async function fv(){if(!st.wallet){st.wallet=!0,Jh(),Xn("\u5DF2\u6A21\u62DF\u8FDE\u63A5\u94B1\u5305\uFF08\u5047\u6570\u636E\uFF09");return}if(!st.approved){await Kl(_s,"\u6388\u6743\u4E2D\u2026",900),st.approved=!0,qf(),Xn("\u5DF2\u6A21\u62DF\u6388\u6743 EDEN \u7ED9\u91D1\u5E93\uFF08\u9996\u6B21\u4E00\u6B21\u5373\u53EF\uFF09");return}let i=ur(Ei.value);try{if(i<Pe.minBurnTx)throw new Error("\u5355\u7B14\u6700\u5C11\u71C3\u70E7 1,000 \u679A");if(i>st.my.tok)throw new Error("EDEN \u4F59\u989D\u4E0D\u8DB3");let t=Kh(_s);await Kl(_s,"\u786E\u8BA4\u4E2D\u2026",650);let e=zl(Nn,i);Ct&&Ct.beamIn(e.late,i,t),e.minted&&e.minted.forEach(r=>Ct&&Ct.plotBurst(r,!0)),Ql();let n=e.preview,s=Mi().length;Xn(e.late?`\u968F\u673A\u7A97\u53E3\u5185\u70E7\u4E86 ${Te(i)} \u679A\uFF1A\u7B2C 540\u2013599 \u79D2\u968F\u673A\u622A\u6B62\uFF0C\u665A\u70E7\u53EF\u80FD\u987A\u5EF6\u5230\u4E0B\u4E00\u8F6E`+(n&&n.n?` \xB7 \u5F85\u63ED\u6653\u540E\u61D2\u94F8 ${n.n} \u5757\u5730`:""):`\u5DF2\u71C3\u70E7 ${Te(i)} \u679A\uFF0C\u786E\u5B9A\u8BA1\u5165\u672C\u8F6E`+(n&&n.n?` \xB7 \u53D1\u5730 \u666E${n.common}/\u7A00${n.rare}/\u53F2${n.epic}`:s?` \xB7 \u5DF2\u6709 ${s} \u5757\u5730`:" \xB7 \u53EA\u53C2\u52A0\u8F6E\u6B21\u5956\u6C60")),Yf(),$f()}catch(t){Xn(t.message,!0)}}_s.onclick=fv;Gt("#heroBurn").onclick=()=>{Ei.focus(),Ei.select(),_s.animate([{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}],{duration:500})};var pv=Gt("#sheet"),Ma=Gt("#shBody"),Dn=null;function Qh(i){Dn=i===Dn?null:i,pv.classList.toggle("on",!!Dn),Un("#shTabs button[data-t]").forEach(t=>t.classList.toggle("on",t.dataset.t===Dn)),dr(!0)}Un("[data-t]").forEach(i=>i.onclick=()=>Qh(i.dataset.t));Gt("#shX").onclick=()=>Qh(null);var zf="";function dr(i){if(!Dn)return;let t=st.sel-1,e=Dn+"|"+st.wallet+"|"+(Dn==="claim"?[st.my.claim,st.my.credit,st.my.plotDiv,st.my.plotsPending].map(s=>s.toFixed(6)):Dn==="plot"?[t,Ve[t],ln[t],Mi().length]:[st.round&&st.round.id,st.round&&st.round.filled|0,st.my.tok|0]).join(",");if(!i&&e===zf)return;zf=e;let n=document.activeElement;if(!(!i&&n&&Ma.contains(n)&&n.tagName==="INPUT"))if(Dn==="claim"){let s=st.my.claim+st.my.plotDiv,r=Ah();Ma.innerHTML=`<div class="sb-row"><div class="sb-k"><span>\u53EF\u9886\u53D6\u5408\u8BA1</span><b class="big">${We(s,5)} BNB</b></div>
      <div class="sb-k"><span>\u8F6E\u6B21\u5956\u52B1</span><b>${We(st.my.claim,5)}</b></div><div class="sb-k"><span>\u5730\u5757\u5206\u6210</span><b>${We(st.my.plotDiv,5)}</b></div><div class="sb-k"><span>\u5F85\u94F8\u5730\u5757</span><b>${st.my.plotsPending} \u5757\uFF08\u6BCF\u7B14\u6700\u591A 50\uFF09</b></div>
      <div class="sb-k"><span>\u4F60\u7684\u5730\u5757</span><b>\u666E ${r.common} / \u7A00 ${r.rare} / \u53F2 ${r.epic} \xB7 \u6743\u91CD ${r.weight.toFixed(1)}</b></div>
      <div class="sb-k"><span>\u6FC0\u6D3B</span><b>${r.active?"\u672C\u7A97\u53E3\u5DF2\u6FC0\u6D3B":"\u672A\u6FC0\u6D3B\uFF0C\u8FD8\u5DEE "+Te(r.left)}</b></div>
      <div class="sb-act"><button class="btn-l" id="claimBtn">\u4E00\u952E\u9886\u53D6</button></div></div>
      <p class="sb-note">\u5730\u5757\u6C60\u6BCF 30 \u5206\u949F\u4E00\u8F6E\uFF0C\u653E\u51FA 80%\uFF08\u6BCF\u5206\u949F\u5747\u5300\u91CA\u653E\uFF09\uFF0C20% \u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF0C\u6309\u5DF2\u6FC0\u6D3B\u6743\u91CD\u5206\u7EA2\u3002\u6BCF 10 \u5206\u949F\u53EA\u9700\u6309\u6BCF 1 \u6743\u91CD\u70E7 1000 \u679A\u5373\u53EF\u6FC0\u6D3B\u3002\u672A\u6FC0\u6D3B\u4E0D\u5206\u7EA2\uFF0C\u4EFD\u989D\u5F52\u5DF2\u6FC0\u6D3B\u7684\u5730\u4E3B\uFF1B\u51B7\u6E05\u65F6\u6BB5\u4E00\u540D\u5DF2\u6FC0\u6D3B\u5730\u4E3B\u5373\u53EF\u72EC\u5F97\u8BE5\u65F6\u6BB5\u5168\u90E8\u5206\u7EA2\u3002\u5730\u5757\u5206\u6210\u4E0D\u8FC7\u671F\uFF1B\u8F6E\u6B21\u5956\u52B1 30 \u5929\u4E0D\u9886\u8FC7\u671F\u3002\u5730\u5757\u5728\u9886\u53D6\u6216\u89E6\u6478\u65F6\u61D2\u94F8\uFF0C\u6BCF\u7B14\u6700\u591A 50 \u5757\u3002</p>`,Gt("#claimBtn").onclick=async a=>{let o=a.currentTarget;try{if(!st.wallet)throw new Error("\u8BF7\u5148\u8FDE\u63A5\u94B1\u5305\uFF08\u6A21\u62DF\uFF09");let l=Kh(o);await Kl(o,"\u9886\u53D6\u4E2D\u2026",700);let c=Lh();Ct&&Ct.claimFx(l),c.plots.forEach(h=>Ct&&Ct.plotBurst(h,!0)),Ql(),Xn(`\u5DF2\u9886\u53D6 ${We(c.bnb,5)} BNB${c.plots.length?` + ${c.plots.length} \u5757\u5730`:""}\uFF08\u6A21\u62DF\uFF09`),dr(!0)}catch(l){Xn(l.message,!0)}}}else if(Dn==="plot"){let s=Ve[t]===Nn,r=Mi(),a=t<st.plotsMinted,o=a?sr[ln[t]]:"\u672A\u53D1\u653E",l=a?ni(t):0,c=_a(),h=xa();Ma.innerHTML=`<div class="sb-row"><div class="sb-k"><span>\u5730\u5757</span><b>#${st.sel}${s?" \xB7 \u6211\u7684":""}</b></div>
      <div class="sb-k"><span>\u6863\u4F4D</span><b class="big">${o} \xB7 \u6743\u91CD ${l.toFixed(1)}</b></div>
      <div class="sb-k"><span>\u5F52\u5C5E</span><b>${a?s?"\u4F60\uFF08\u7075\u9B42\u7ED1\u5B9A\uFF09":us(Ve[t])+"\uFF08\u7075\u9B42\u7ED1\u5B9A\uFF09":"\u5C1A\u672A\u53D1\u653E"}</b></div>
      <div class="sb-k"><span>\u4E0A\u671F\u5206\u6210</span><b>${We(rr[t],5)} BNB</b></div>
      <div class="sb-k"><span>\u6211\u7684\u5730\u5757</span><b>\u666E ${c.common} / \u7A00 ${c.rare} / \u53F2 ${c.epic} \xB7 \u6743\u91CD ${c.weight.toFixed(1)}</b></div>
      <div class="sb-k"><span>\u6FC0\u6D3B</span><b>${h.active?"\u672C\u7A97\u53E3\u5DF2\u6FC0\u6D3B":"\u8FD8\u5DEE "+Te(h.left)+" \u679A"}</b></div></div>
      <div class="chips">${r.map(f=>`<button data-p="${f+1}">#${f+1} ${sr[ln[f]]}</button>`).join("")||'<span class="sb-note">\u4F60\u8FD8\u6CA1\u6709\u5730\u5757\uFF0C\u71C3\u70E7\u5373\u53EF\u94F8\u9020</span>'}</div>
      <p class="sb-note">\u5730\u5757\u53EA\u80FD\u70E7\u5E01\u83B7\u5F97\uFF0C\u6C38\u4E45\u7ED1\u5B9A\u5730\u5740\uFF0C\u4E0D\u53EF\u8F6C\u8BA9\u3001\u4E0D\u53EF\u4E70\u5356\u3002\u6BCF 10 \u5206\u949F\u53EA\u9700\u6309\u6BCF 1 \u6743\u91CD\u70E7 1000 \u679A\u5373\u53EF\u6FC0\u6D3B\u3002\u51B7\u6E05\u65F6\u6BB5\u4E00\u540D\u5DF2\u6FC0\u6D3B\u5730\u4E3B\u5373\u53EF\u72EC\u5F97\u8BE5\u65F6\u6BB5\u5168\u90E8\u5206\u7EA2\u3002</p>`,Un(".chips button[data-p]",Ma).forEach(f=>f.onclick=()=>Zf(+f.dataset.p,!0))}else{let s=st.round,r=Mi().length,a=s?or(An(),Pe.bnbUsd,Pe.supply):null,o=s?fs():0;if(Ma.innerHTML=s?`<div class="sb-row"><div class="sb-k"><span>\u7B2C ${s.id} \u6863 \xB7 \u5F53\u524D\u6258\u5E95\u4EF7</span><b class="big" style="color:var(--ember)">${a.usd}</b></div>
      <div class="sb-k"><span>\u5E02\u503C</span><b>${a.cap}</b></div><div class="sb-k"><span>BNB \u4EF7</span><b>${a.bnb} BNB / \u679A</b></div>
      <div class="sb-k"><span>\u672C\u6863\u5269\u4F59\u989D\u5EA6</span><b>${Te(Pe.quota-s.filled)}</b></div><div class="sb-k"><span>\u4E0B\u4E00\u6863\u5956\u6C60</span><b>${We(st.nextPool||0,4)} BNB</b></div>
      <div class="sb-k"><span>\u6BCF\u6743\u91CD\u989D\u5EA6</span><b>${Te(yi())}</b></div>
      <div class="sb-k"><span>\u6211\u7684\u6258\u5E95\u989D\u5EA6</span><b>${Gi().toFixed(1)} \xD7 ${Te(yi())} = ${Te(ar())}</b></div>
      <div class="sb-k"><span>\u4F60\u672C\u6863\u5269\u4F59</span><b>${Te(o)}</b></div>
      <div class="sb-k"><span>\u4F60\u7684 EDEN</span><b>${Te(st.my.tok)}</b></div></div>
      ${r?'<div class="sb-row" style="margin-top:14px"><label class="sb-f">\u5151\u6362\u6570\u91CF<input id="sellAmt" value="1,000,000"></label><div class="sb-k"><span>\u53EF\u5F97</span><b id="sellOut">\u2014</b></div><label class="sb-f">\u6700\u5C11\u6536\u5230\uFF08BNB\uFF09<input id="sellMin" value=""></label><div class="sb-act"><button class="btn-l" id="sellBtn">\u6309\u6258\u5E95\u4EF7\u5151\u6362\uFF08\u5E01\u9500\u6BC1\uFF09</button></div></div>':'<p class="sb-note">\u53EA\u6709\u5730\u4E3B\u80FD\u5151\u6362\u3002\u71C3\u70E7\u94F8\u5730\u540E\u5373\u53EF\u5151\uFF0C\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B\u3002</p>'}
      <p class="sb-note">\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B\uFF0C\u6309\u5730\u5757\u6743\u91CD\u5206\u914D\u989D\u5EA6\u3002\u5151\u6EE1\u7ACB\u523B\u5F00\u4E0B\u4E00\u6863\u3002\u6362\u56DE\u7684 EDEN 100% \u9500\u6BC1\uFF0C\u4E0D\u8BA1\u5165\u8F6E\u6B21\u5956\u6C60\u3001\u4E0D\u94F8\u5730\u3001\u4E0D\u8BA1\u5165\u6FC0\u6D3B\u3002\u6258\u5E95\u4E0D\u662F\u4FDD\u5E95\u6216\u5151\u4ED8\u627F\u8BFA\u3002</p><p class="sb-note" style="color:var(--ember)">\u26A0 \u6258\u5E95\u4EF7\u53EF\u80FD\u9AD8\u4E8E\u5E02\u4EF7\uFF0C\u8FD9\u65F6\u5730\u4E3B\u53EF\u80FD\u628A\u5F53\u524D\u6863\u989D\u5EA6\u5168\u90E8\u6362\u5B8C\uFF08\u5DF2\u77E5\u5E76\u63A5\u53D7\u7684\u98CE\u9669\uFF09\u3002</p><p class="sb-note">USDT \u6309\u9884\u89C8\u6A21\u62DF BNB/USD \u4F30\u7B97\uFF0C\u53E3\u5F84\u4E0E\u76D8\u9762\u4E00\u81F4\uFF08\u5B8C\u6574\u5C0F\u6570\uFF0C\u4E0D\u7528\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF09\u3002</p>`:`<p class="sb-note">${ps()?"\u6B63\u5728\u5F00\u51FA\u7B2C 1 \u6863\u3002":"\u521B\u4E16\u7ED3\u675F\u4E14\u6709\u5730\u5757\u540E\u5F00\u7B2C 1 \u6863\u3002"}\u6CA1\u6709\u5012\u8BA1\u65F6\u3001\u6CA1\u6709\u5F00\u6863\u95E8\u69DB\u3002\u65B0\u4E00\u6863\u8D77\u59CB\u4EF7 = \u4E0B\u4E00\u6863\u5956\u6C60 \xF7 1500 \u4E07\uFF0C\u53EF\u80FD\u660E\u663E\u4F4E\u4E8E\u4E0A\u4E00\u6863\u3002</p>`,s){let l=()=>{let c=Hl(ur(Gt("#sellAmt").value));Gt("#sellOut").textContent=We(c.out,5)+" BNB \u2248 "+We(c.out*Pe.bnbUsd,2)+" USDT",Gt("#sellMin").dataset.touched||(Gt("#sellMin").value=We(c.out*.99,5))};Gt("#sellAmt").oninput=l,Gt("#sellMin").oninput=()=>Gt("#sellMin").dataset.touched=1,l(),Gt("#sellBtn").onclick=async c=>{let h=c.currentTarget;try{if(!st.wallet)throw new Error("\u8BF7\u5148\u8FDE\u63A5\u94B1\u5305\uFF08\u6A21\u62DF\uFF09");await Kl(h,"\u786E\u8BA4\u4E2D\u2026",700);let f=Gl(Nn,ur(Gt("#sellAmt").value),ur(Gt("#sellMin").value));Xn(`\u6258\u5E95\u5151\u6362 ${Te(f.take)} \u679A\uFF0C\u6536\u5230 ${We(f.out,5)} BNB\uFF0C\u8FD9\u4E9B\u5E01\u5DF2\u9500\u6BC1\uFF08\u6A21\u62DF\uFF09`),dr(!0)}catch(f){Xn(f.message,!0)}}}}}Gt("#roundSell").onclick=()=>{Dn!=="round"&&Qh("round")};function mv(i){let t=ln[i];return t===3?.92:t===2?.5:.12}function Ql(){Ct&&Ct.setPlots(i=>[i<st.plotsMinted?mv(i):0,Ve[i]===Nn?1:0,i<st.plotsMinted?1:0])}Ql();var Sa=-1;function gv(i){let t=Ve[i]===Nn,e=i<st.plotsMinted,n=e?sr[ln[i]]:"\u672A\u53D1\u653E",s=e?ni(i):0;return`<div class="pl-h"><b>#${i+1}</b>${t?'<span class="mine">\u6211\u7684</span>':""}<span>${e?"\u5730\u4E3B "+us(Ve[i])+" \xB7 \u7075\u9B42\u7ED1\u5B9A":"\u5C1A\u672A\u53D1\u653E"}</span></div>
    <div class="kv"><div><span>\u6863\u4F4D</span><b class="hl">${n}</b></div><div><span>\u6743\u91CD</span><b>${s.toFixed(1)}</b></div>
    <div><span>\u4E0A\u671F\u5206\u6210</span><b>${We(rr[i],5)} BNB</b></div><div><span>\u8F6C\u8BA9</span><b>\u4E0D\u53EF\u8F6C\u8BA9\u3001\u4E0D\u53EF\u4E70\u5356</b></div></div>
    ${e?'<p class="hint">\u5730\u5757\u53EA\u80FD\u70E7\u5E01\u83B7\u5F97\uFF0C\u6C38\u4E45\u7ED1\u5B9A\u71C3\u70E7\u5730\u5740\u3002</p>':""}`}var kf="";function jh(i){let t=st.sel-1,e=[t,Ve[t],ln[t],st.plotsMinted>t].join();!i&&e===kf||(kf=e,Gt("#plotCard").innerHTML=gv(t),Ct&&Ct.setSelHover(t,Sa))}function Zf(i,t){st.sel=i,jh(!0),Dn==="plot"&&dr(!0),t&&Ct&&Ct.focusPlot(i-1)}jh(!0);var Wl=Gt("#hov"),Yl=-1,ba=-1,qh=!1,bi=null,$i=0,Kf=Gt("#gl");addEventListener("pointermove",i=>{Yl=i.clientX,ba=i.clientY,qh=!0,Ct&&Ct.mouse(i.clientX/innerWidth-.5,-(i.clientY/innerHeight-.5)),bi&&Ct&&(Ct.drag(i.clientX-bi[0],i.clientY-bi[1],!0),bi=[i.clientX,i.clientY,bi[2]+Math.abs(i.movementX||0)])},{passive:!0});Kf.addEventListener("pointerdown",i=>{Math.abs($i-2)<.4&&(bi=[i.clientX,i.clientY,0])});addEventListener("pointerup",i=>{if(bi&&Ct&&(Ct.drag(0,0,!1),bi[2]<6)){let t=Ct.pickPlot(i.clientX,i.clientY);t>=0&&Zf(t+1)}bi=null});function _v(){if(!qh||!Ct)return;if(qh=!1,Math.abs($i-2)>.35||ba<0){Sa>=0&&(Sa=-1,Wl.classList.remove("on"),Ct.setSelHover(st.sel-1,-1));return}let t=document.elementFromPoint(Yl,ba)===Kf?Ct.pickPlot(Yl,ba):-1;if(t!==Sa){if(Sa=t,Ct.setSelHover(st.sel-1,t),t>=0){let e=t<st.plotsMinted;Wl.innerHTML=`<b>#${t+1}${Ve[t]===Nn?" \xB7 \u6211\u7684":""}</b>${e?sr[ln[t]]+" \xB7 \u6743\u91CD "+ni(t).toFixed(1):"\u5C1A\u672A\u53D1\u653E"}<br>\u4E0A\u671F\u5206\u6210 ${We(rr[t],5)} BNB<br>${e?"\u7075\u9B42\u7ED1\u5B9A\uFF0C\u4E0D\u53EF\u4E70\u5356":""}`}Wl.classList.toggle("on",t>=0)}t>=0&&(Wl.style.transform=`translate3d(${Math.min(Yl+16,innerWidth-200)}px,${ba+16}px,0)`)}Vi("burn",i=>{i.who!==Nn&&$i<1.6&&Ct&&Ct.beamIn(i.late,i.amount),dv(i)});Vi("income",()=>Ct&&Ct.income());Vi("sell",i=>Ct&&Ct.holeKick(i.who===Nn?1.2:.35));Vi("roundOpen",i=>{if(Ct&&Ct.holeKick(1.5),$i>2.5&&$i<3.5){let t=or(An(),Pe.bnbUsd,Pe.supply);Xn(`\u7B2C ${i.id} \u6863\u6258\u5E95\u5151\u6362\u5F00\u542F\uFF1A\u5F53\u524D\u6258\u5E95\u4EF7 ${t.usd}\uFF08\u5E02\u503C ${t.cap}\uFF09`)}});var xv=0;Vi("tick",()=>{++xv%15===0&&Ql()});var Bh=Gt("#result"),Hf=0;Vi("minute",i=>{if(st.speed>10||$i>1.2||document.hidden){i.mine>0&&Xn(`\u7B2C ${i.m} \u5206\u949F\uFF1A\u4F60\u5206\u5F97 ${We(i.mine,5)} BNB`),Ct&&$i<1.2&&(Ct.setCut(i.cutoff),Ct.explode(i),gs(()=>Ct.setCut(-1),1200));return}Vh=1,hr.classList.remove("win"),hr.classList.add("scan"),Hh.textContent="\u63ED\u6653\u622A\u6B62\u79D2",Gh.textContent="\u533A\u5757\u54C8\u5E0C\u51B3\u5B9A\uFF0C\u8C01\u4E5F\u6539\u4E0D\u4E86";let e=st.speed>1?.5:1.5,n=Wn.now,s=()=>{let a=540+Math.floor(Math.random()*61);kh.textContent=a,Ct&&Ct.scan(a/10),Wn.now-n>e?r():gs(s,70)};s();function r(){Ct&&(Ct.scan(-1),Ct.setCut(i.cutoff/10)),hr.classList.remove("scan"),hr.classList.add("cut"),kh.textContent=i.cutoff,Hh.textContent="\u622A\u6B62",Gh.textContent=`\u7B2C ${i.cutoff} \u79D2\u843D\u9524`;let a=Gt("#flash"),o=Gt("#clock").getBoundingClientRect();a.style.setProperty("--fx",o.left+o.width/2+"px"),a.style.setProperty("--fy",o.top+o.height/2+"px"),lr||(cr=1);let l=i.mine>0?Kh(Gt('.dk-tabs button[data-t="claim"]').offsetParent?Gt('.dk-tabs button[data-t="claim"]'):_s):null;Ct&&Ct.explode(i,l),Bh.className="result on"+(i.rolled?" rolled":""),Bh.innerHTML=i.rolled?`<div class="rbox"><div class="rk">\u7B2C ${i.m} \u8F6E \xB7 \u672A\u5230\u7EBF</div><div class="rv1">${Te(i.total)} \u679A</div><div class="rv2">\u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF08\u6FC0\u6D3B\u4E0E\u5730\u5757\u7167\u5E38\uFF09</div></div>`:`<div class="rbox"><div class="rk">\u7B2C ${i.m} \u8F6E \xB7 \u622A\u6B62 ${i.cutoff} \u79D2</div><div class="rv1">${We(i.prize,4)} BNB</div><div class="rv2">\u5747\u5206 ${We(i.pro||i.prize,4)} \xB7 \u5934\u5956 ${We(i.jackpot||0,4)} BNB${i.win!=null?" \u2192 "+(i.win===Nn?"\u4F60":us(i.win)):""} \xB7 \u8BA1\u5165 ${Te(i.total)} \u679A${i.roll?` \xB7 ${Te(i.roll)} \u679A\u6CA1\u8D76\u4E0A\uFF0C\u5E76\u5165\u4E0B\u4E00\u8F6E`:""}</div>${i.mine>0?`<div class="rme">\u4F60\u5206\u5F97 +${We(i.mine,5)} BNB</div>`:i.myIn===0&&st.my.minuteBurn>0?'<div class="rme">\u4F60\u8FD9\u6B21\u6CA1\u8D76\u4E0A\u622A\u6B62\uFF0C\u5DF2\u5E76\u5165\u4E0B\u4E00\u8F6E</div>':""}</div>`,ev(Hf),Hf=gs(()=>Bh.classList.remove("on"),5200),gs(()=>{Vh=0,Wh="",Ct&&Ct.setCut(-1)},st.speed>1?900:2600)}});Un("#spd button").forEach(i=>i.onclick=()=>{st.speed=+i.dataset.s,Un("#spd button").forEach(t=>t.classList.toggle("on",t===i))});var Yh=Gt("#dbg");Yi.get("debug")==="1"&&Yh.classList.add("on");var $h=performance.now(),Xl=0,ql=1,$l=!0,_n={frames:0,sum:0,worst:0,hist:[],tierLog:[]},ms=[],zh=0;function vv(i){let t=Math.round(Math.min(3,i));sv.forEach((e,n)=>e.classList.toggle("on",n===t))}var Gf=-1,cr=0,yv=Gt("#flash");function tu(i){if(!$l)return;requestAnimationFrame(tu);let t=Math.min(.1,(i-$h)/1e3);$h=i,Jf(t)}function Jf(i){if(Wn.now+=i,nv(),cr>0&&(cr=Math.max(0,cr-i*1.1),yv.style.opacity=(cr*cr*.35).toFixed(3)),lr&&(ql+=i,ql<.5))return;let t=Dh(lr?ql:i);lr&&(ql=0);let e=av();$i=e;let n=ds(st.t)+t;if(Ct){let r=st.round,a=[st.minutePool,st.plotPool,Zl.reserveAll()],o=Math.max(...a);Ct.frame(i,{sp:e,energy:.2+Math.min(.8,Wi()/7e6),win:n>=Pe.certain,sec:n,poolScale:a.map(l=>l/o),fill:r?r.filled/Pe.quota:1},lr),_v()}uv(t),Xl+=i,Xl>1/15&&(cv(Xl),Xl=0);let s=Math.round(Math.min(3,e));if(s!==Gf&&(Gf=s,vv(e)),_n.frames++,_n.sum+=i,_n.worst=Math.max(_n.worst,i),Ct&&!lr&&!Yi.has("q")&&(zh+=i,zh>2.5&&(ms.push(i),ms.length>=90||ms.length>=12&&ms.reduce((r,a)=>r+a)>1.5))){let r=ms.reduce((a,o)=>a+o)/ms.length;ms=[],r>.02&&Ct.tier>0&&(Ct.setTier(Ct.tier-1),_n.tierLog.push({at:performance.now()|0,tier:Ct.tier,avgMs:+(r*1e3).toFixed(1)}),Ct.tier===0&&document.documentElement.classList.add("lowq"),zh=0)}if(Yh.classList.contains("on")&&_n.frames%20===0){let r=Ct?Ct.renderer.info.render:{};Yh.textContent=`fps ${(1/i).toFixed(0)}  tier ${Ct?Ct.tier:"-"}
calls ${r.calls}  tris ${r.triangles}
js ${(Ct?Ct.timing.js/Math.max(1,Ct.timing.frames):0).toFixed(2)}ms`}}Wf||requestAnimationFrame(tu);var Qf=()=>{Xf(),jh(),dr(),gs(Qf,1e3)};gs(Qf,1e3);Xf();document.addEventListener("visibilitychange",()=>{Wf||(document.hidden?$l=!1:$l||($l=!0,$h=performance.now(),requestAnimationFrame(tu)))});Jh();window.__eden={S:st,E:Vl,G:Ct,perf:_n,stats(){let i=Ct.renderer.info.render;return{calls:i.calls,triangles:i.triangles,points:i.points,tier:Ct.tier,jsAvgMs:Ct.timing.js/Math.max(1,Ct.timing.frames),frames:_n.frames,avgDt:_n.sum/_n.frames,tierLog:_n.tierLog}},step(i,t=1/30){for(let e=0;e<i;e++)Jf(t)},resetTiming(){Ct.timing.js=0,Ct.timing.frames=0,_n.frames=0,_n.sum=0,_n.worst=0}}});Mv();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
