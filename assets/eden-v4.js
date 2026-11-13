(()=>{var Fp=Object.defineProperty;var en=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Op=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},Bp=(i,e)=>{for(var t in e)Fp(i,t,{get:e[t],enumerable:!0})};function kp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=Zr("canvas");return i.style.display="block",i}function wu(...i){let e="THREE."+i.shift();js?js("log",e,...i):console.log(e,...i)}function $d(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=$d(i);let e="THREE."+i.shift();if(js)js("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=$d(i);let e="THREE."+i.shift();if(js)js("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Gr(...i){let e=i.join(" ");e in Fh||(Fh[e]=!0,We(...i))}function Zd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function fr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Au(i,e){return(i%e+e)%e}function Hp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Gp(i,e,t){return i!==e?(t-i)/(e-i):0}function Wr(i,e,t){return(1-t)*i+t*e}function Vp(i,e,t,n){return Wr(i,e,1-Math.exp(-t*n))}function Wp(i,e=1){return e-Math.abs(Au(i,e*2)-e)}function Xp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $p(i,e){return i+Math.random()*(e-i)}function Zp(i){return i*(.5-Math.random())}function Kp(i){i!==void 0&&(Oh=i);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jp(i){return i*Vr}function Qp(i){return i*er}function jp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function em(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),p=r((e-n)/2),h=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*p,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*p,a*c);break;case"ZXZ":i.set(l*p,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*u,a*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ru(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Jd(i,e){if(e.constructor===Float32Array)return i;let t=Ru(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Qd(i,e){if(e.constructor===Float32Array)return i;let t=Ru(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function nm(){let i={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qr]:{primaries:e,whitePoint:n,transfer:Yr,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),i}function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}function kc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Yc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ms.fromArray(i,r);let a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),u=n.dot(ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}function vm(i,e,t,n,s,r,o,a){let l;if(e.side===an?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ts,a),l===null)return null;ha.copy(a),ha.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:i}}function da(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,aa),i.getVertexPosition(l,la),i.getVertexPosition(c,ca);let u=vm(i,e,t,n,aa,la,ca,Jh);if(u){let p=new B;$i.getBarycoord(Jh,aa,la,ca,p),s&&(u.uv=$i.getInterpolatedAttribute(s,a,l,c,p,new Xe)),r&&(u.uv1=$i.getInterpolatedAttribute(r,a,l,c,p,new Xe)),o&&(u.normal=$i.getInterpolatedAttribute(o,a,l,c,p,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new B,materialIndex:0};$i.getNormal(aa,la,ca,h.normal),u.face=h,u.barycoord=p}return u}function ga(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Ba.fromBufferAttribute(a,s),ka.fromBufferAttribute(a,r),t.distanceSqToSegment(Ba,ka,jc,nd)>n)return;jc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(jc);if(!(c<e.near||c>e.far))return{distance:c,point:nd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function od(i,e,t,n,s,r,o){let a=su.distanceSqToPoint(i);if(a<t){let l=new B;su.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function Es(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ad(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ad(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=Es(i[t]);for(let s in n)e[s]=n[s]}return e}function ad(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}function $s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function ef(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Em(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Tm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=ef(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Em(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function ld(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function cd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function wm(){this._document.hidden===!1&&this.reset()}function fd(i,e){return i.distance-e.distance}function ou(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ou(r[o],e,t,!0)}}function Nu(i,e,t,n){let s=Um(n);switch(t){case xu:return i*e;case cl:return i*e/s.components*s.byteLength;case ul:return i*e/s.components*s.byteLength;case ns:return i*e*2/s.components*s.byteLength;case hl:return i*e*2/s.components*s.byteLength;case yu:return i*e*3/s.components*s.byteLength;case ei:return i*e*4/s.components*s.byteLength;case dl:return i*e*4/s.components*s.byteLength;case So:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(e,8)/4;case fl:case ml:return Math.max(i,8)*Math.max(e,8)/2;case _l:case vl:case yl:case Ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xl:case wo:case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ol:case Bl:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zl:case Hl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ao:case Gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Um(i){switch(i){case Nn:case mu:return{byteLength:1,components:1};case dr:case gu:case ln:return{byteLength:2,components:1};case al:case ll:return{byteLength:2,components:4};case jn:case ol:case Gn:return{byteLength:4,components:1};case _u:case vu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var pd,lu,md,fo,gd,cr,ts,an,bn,Ci,ur,ys,cu,uu,_d,Ms,vd,xd,yd,Md,Sd,bd,Ed,Td,hu,du,wd,Ad,Cd,Rd,Pd,Id,Ld,Nd,Dd,Ea,Ta,wa,Qs,Aa,Ca,Ra,Pa,fu,Ud,Fd,li,po,mo,go,_o,vo,xo,yo,pu,Ss,hr,il,sl,Ia,si,La,nn,Od,Mo,Sn,rl,Ri,Nn,mu,gu,dr,ol,jn,Gn,ln,al,ll,bs,_u,vu,xu,yu,ei,bi,Pi,cl,ul,ns,hl,dl,So,bo,Eo,To,fl,pl,ml,gl,_l,vl,xl,yl,Ml,wo,Sl,bl,El,Tl,wl,Al,Cl,Rl,Pl,Il,Ll,Nl,Dl,Ul,Fl,Ol,Bl,kl,zl,Hl,Ao,Gl,Xr,Na,Sa,eu,tu,nu,iu,Bd,Mu,kd,Ii,yn,qr,Yr,mt,ba,zd,Hd,Gd,Vd,Su,Wd,Xd,bu,Eu,qd,Vl,Tu,zn,$r,Fh,js,Kd,ri,dn,Oh,Vr,er,Co,Du,Xe,In,Uu,B,Dc,Bh,Fu,Je,Uc,kh,zh,lt,Os,Da,im,tr,sm,Oc,wn,Ou,It,Ua,Xt,Kr,Fa,nl,_t,Bs,$n,rm,om,Vi,Jo,Rn,Hh,Gh,Zi,nr,am,Vh,ks,_i,Qo,Ur,lm,cm,Wh,Xh,qh,Yh,um,zs,Bc,An,pn,hm,ir,jd,Wi,jo,je,fn,Jr,Zn,vi,zc,xi,Hs,Gs,$h,Hc,Gc,Vc,Wc,Xc,qc,$i,oi,yi,Kn,ea,Vs,Ws,Xs,Xi,qi,ps,Fr,ta,na,ms,Ht,ia,dm,Wt,Qr,jr,xt,fm,Or,$c,Hn,pm,kn,Zc,qs,Pn,Br,tn,Lt,Kc,mm,gm,Jn,_m,Ei,Mi,Jc,sa,ra,Ti,wi,Zh,gs,oa,Kh,aa,la,ca,Qc,ua,Jh,ha,vt,eo,vs,Ys,Qh,fa,jh,xm,kr,zr,to,_s,ym,pa,xs,ed,Oa,sr,Ba,ka,td,Hr,ma,jc,nd,za,id,sd,no,Ha,rd,su,_a,va,Ki,io,Ai,so,ro,rr,oo,Ga,ai,Qn,Ji,ao,Li,Sm,bm,ht,or,Va,Wa,Qi,Xa,qa,Ya,$a,Ln,ji,Za,Ka,Ja,lo,es,Qa,ja,tf,el,ya,Ma,ii,co,Yi,ud,hd,Mn,ar,Zs,Ks,lr,tl,uo,Iu,Am,Lu,Cm,Rm,Pm,Im,Lm,Nm,Dm,ru,At,cy,dd,ho,Bu,au,ku=en(()=>{pd=0,lu=1,md=2,fo=1,gd=2,cr=3,ts=0,an=1,bn=2,Ci=0,ur=1,ys=2,cu=3,uu=4,_d=5,Ms=100,vd=101,xd=102,yd=103,Md=104,Sd=200,bd=201,Ed=202,Td=203,hu=204,du=205,wd=206,Ad=207,Cd=208,Rd=209,Pd=210,Id=211,Ld=212,Nd=213,Dd=214,Ea=0,Ta=1,wa=2,Qs=3,Aa=4,Ca=5,Ra=6,Pa=7,fu=0,Ud=1,Fd=2,li=0,po=1,mo=2,go=3,_o=4,vo=5,xo=6,yo=7,pu=300,Ss=301,hr=302,il=303,sl=304,Ia=1e3,si=1001,La=1002,nn=1003,Od=1004,Mo=1005,Sn=1006,rl=1007,Ri=1008,Nn=1009,mu=1010,gu=1011,dr=1012,ol=1013,jn=1014,Gn=1015,ln=1016,al=1017,ll=1018,bs=1020,_u=35902,vu=35899,xu=1021,yu=1022,ei=1023,bi=1026,Pi=1027,cl=1028,ul=1029,ns=1030,hl=1031,dl=1033,So=33776,bo=33777,Eo=33778,To=33779,fl=35840,pl=35841,ml=35842,gl=35843,_l=36196,vl=37492,xl=37496,yl=37488,Ml=37489,wo=37490,Sl=37491,bl=37808,El=37809,Tl=37810,wl=37811,Al=37812,Cl=37813,Rl=37814,Pl=37815,Il=37816,Ll=37817,Nl=37818,Dl=37819,Ul=37820,Fl=37821,Ol=36492,Bl=36494,kl=36495,zl=36283,Hl=36284,Ao=36285,Gl=36286,Xr=2300,Na=2301,Sa=2302,eu=2303,tu=2400,nu=2401,iu=2402,Bd=3200,Mu=0,kd=1,Ii="",yn="srgb",qr="srgb-linear",Yr="linear",mt="srgb",ba=7680,zd=519,Hd=512,Gd=513,Vd=514,Su=515,Wd=516,Xd=517,bu=518,Eu=519,qd=35044,Vl=35048,Tu="300 es",zn=2e3,$r=2001;Fh={},js=null;Kd={[Ea]:Ea,[wa]:Ra,[Aa]:Aa,[Qs]:Ca,[Ta]:Ta,[Ra]:wa,[Pa]:Pa,[Ca]:Qs},ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,Vr=Math.PI/180,er=180/Math.PI;Co={DEG2RAD:Vr,RAD2DEG:er,generateUUID:fr,clamp:ut,euclideanModulo:Au,mapLinear:Hp,inverseLerp:Gp,lerp:Wr,damp:Vp,pingpong:Wp,smoothstep:Xp,smootherstep:qp,randInt:Yp,randFloat:$p,randFloatSpread:Zp,seededRandom:Kp,degToRad:Jp,radToDeg:Qp,isPowerOfTwo:jp,ceilPowerOfTwo:em,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:tm,normalize:Qd,denormalize:Jd},Du=class Du{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Du.prototype.isVector2=!0;Xe=Du,In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3],h=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(p!==x||l!==h||c!==m||u!==_){let f=l*h+c*m+u*_+p*x;f<0&&(h=-h,m=-m,_=-_,x=-x,f=-f);let d=1-a;if(f<.9995){let M=Math.acos(f),w=Math.sin(M);d=Math.sin(d*M)/w,a=Math.sin(a*M)/w,l=l*d+h*a,c=c*d+m*a,u=u*d+_*a,p=p*d+x*a}else{l=l*d+h*a,c=c*d+m*a,u=u*d+_*a,p=p*d+x*a;let M=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=M,c*=M,u*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[o],h=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*p+l*m-c*h,e[t+1]=l*_+u*h+c*p-a*m,e[t+2]=c*_+u*m+a*h-l*p,e[t+3]=u*_-a*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),p=a(r/2),h=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*p+c*m*_,this._y=c*m*p-h*u*_,this._z=c*u*_+h*m*p,this._w=c*u*p-h*m*_;break;case"YXZ":this._x=h*u*p+c*m*_,this._y=c*m*p-h*u*_,this._z=c*u*_-h*m*p,this._w=c*u*p+h*m*_;break;case"ZXY":this._x=h*u*p-c*m*_,this._y=c*m*p+h*u*_,this._z=c*u*_+h*m*p,this._w=c*u*p-h*m*_;break;case"ZYX":this._x=h*u*p-c*m*_,this._y=c*m*p+h*u*_,this._z=c*u*_-h*m*p,this._w=c*u*p+h*m*_;break;case"YZX":this._x=h*u*p+c*m*_,this._y=c*m*p+h*u*_,this._z=c*u*_-h*m*p,this._w=c*u*p-h*m*_;break;case"XZY":this._x=h*u*p-c*m*_,this._y=c*m*p-h*u*_,this._z=c*u*_+h*m*p,this._w=c*u*p+h*m*_;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],p=t[10],h=n+a+p;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>p){let m=2*Math.sqrt(1+n-a-p);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>p){let m=2*Math.sqrt(1+a-n-p);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+p-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uu=class Uu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+l*c+o*p-a*u,this.y=n+l*u+a*c-r*p,this.z=s+l*p+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uu.prototype.isVector3=!0;B=Uu,Dc=new B,Bh=new In,Fu=class Fu{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],p=n[7],h=n[2],m=n[5],_=n[8],x=s[0],f=s[3],d=s[6],M=s[1],w=s[4],S=s[7],A=s[2],E=s[5],g=s[8];return r[0]=o*x+a*M+l*A,r[3]=o*f+a*w+l*E,r[6]=o*d+a*S+l*g,r[1]=c*x+u*M+p*A,r[4]=c*f+u*w+p*E,r[7]=c*d+u*S+p*g,r[2]=h*x+m*M+_*A,r[5]=h*f+m*w+_*E,r[8]=h*d+m*S+_*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=u*o-a*c,h=a*l-u*r,m=c*r-o*l,_=t*p+n*h+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=p*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fu.prototype.isMatrix3=!0;Je=Fu,Uc=new Je,kh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);lt=nm();Da=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Os===void 0&&(Os=Zr("canvas")),Os.width=e.width,Os.height=e.height;let s=Os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},im=0,tr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fc(s[o].image)):r.push(Fc(s[o]))}else r=Fc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};sm=0,Oc=new B,wn=class i extends ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,s=si,r=Sn,o=Ri,a=ei,l=Nn,c=i.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=fr(),this.name="",this.source=new tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oc).x}get height(){return this.source.getSize(Oc).y}get depth(){return this.source.getSize(Oc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=pu;wn.DEFAULT_ANISOTROPY=1;Ou=class Ou{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],p=l[8],h=l[1],m=l[5],_=l[9],x=l[2],f=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-x)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+x)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,S=(m+1)/2,A=(d+1)/2,E=(u+h)/4,g=(p+x)/4,b=(_+f)/4;return w>S&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=g/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=g/r,s=b/r),this.set(n,s,r,t),this}let M=Math.sqrt((f-_)*(f-_)+(p-x)*(p-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(p-x)/M,this.z=(h-u)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ou.prototype.isVector4=!0;It=Ou,Ua=class extends ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new wn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new tr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends Ua{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Kr=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Fa=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},nl=class nl{constructor(e,t,n,s,r,o,a,l,c,u,p,h,m,_,x,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,p,h,m,_,x,f)}set(e,t,n,s,r,o,a,l,c,u,p,h,m,_,x,f){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=p,d[14]=h,d[3]=m,d[7]=_,d[11]=x,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let h=o*u,m=o*p,_=a*u,x=a*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=m+_*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,m=l*p,_=c*u,x=c*p;t[0]=h+x*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*p,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,m=l*p,_=c*u,x=c*p;t[0]=h-x*a,t[4]=-o*p,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,m=o*p,_=a*u,x=a*p;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+x,t[1]=l*p,t[5]=x*c+h,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-h*p,t[8]=_*p+m,t[1]=p,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*p+_,t[10]=h-x*p}else if(e.order==="XZY"){let h=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=h*p+x,t[5]=o*u,t[9]=m*p-_,t[2]=_*p-m,t[6]=a*u,t[10]=x*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rm,e,om)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Vi.crossVectors(n,Rn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Vi.crossVectors(n,Rn)),Vi.normalize(),Jo.crossVectors(Rn,Vi),s[0]=Vi.x,s[4]=Jo.x,s[8]=Rn.x,s[1]=Vi.y,s[5]=Jo.y,s[9]=Rn.y,s[2]=Vi.z,s[6]=Jo.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],p=n[5],h=n[9],m=n[13],_=n[2],x=n[6],f=n[10],d=n[14],M=n[3],w=n[7],S=n[11],A=n[15],E=s[0],g=s[4],b=s[8],N=s[12],R=s[1],D=s[5],k=s[9],X=s[13],P=s[2],W=s[6],Z=s[10],q=s[14],re=s[3],Y=s[7],ne=s[11],ie=s[15];return r[0]=o*E+a*R+l*P+c*re,r[4]=o*g+a*D+l*W+c*Y,r[8]=o*b+a*k+l*Z+c*ne,r[12]=o*N+a*X+l*q+c*ie,r[1]=u*E+p*R+h*P+m*re,r[5]=u*g+p*D+h*W+m*Y,r[9]=u*b+p*k+h*Z+m*ne,r[13]=u*N+p*X+h*q+m*ie,r[2]=_*E+x*R+f*P+d*re,r[6]=_*g+x*D+f*W+d*Y,r[10]=_*b+x*k+f*Z+d*ne,r[14]=_*N+x*X+f*q+d*ie,r[3]=M*E+w*R+S*P+A*re,r[7]=M*g+w*D+S*W+A*Y,r[11]=M*b+w*k+S*Z+A*ne,r[15]=M*N+w*X+S*q+A*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],p=e[6],h=e[10],m=e[14],_=e[3],x=e[7],f=e[11],d=e[15],M=l*m-c*h,w=a*m-c*p,S=a*h-l*p,A=o*m-c*u,E=o*h-l*u,g=o*p-a*u;return t*(x*M-f*w+d*S)-n*(_*M-f*A+d*E)+s*(_*w-x*A+d*g)-r*(_*S-x*E+f*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=e[9],h=e[10],m=e[11],_=e[12],x=e[13],f=e[14],d=e[15],M=t*a-n*o,w=t*l-s*o,S=t*c-r*o,A=n*l-s*a,E=n*c-r*a,g=s*c-r*l,b=u*x-p*_,N=u*f-h*_,R=u*d-m*_,D=p*f-h*x,k=p*d-m*x,X=h*d-m*f,P=M*X-w*k+S*D+A*R-E*N+g*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/P;return e[0]=(a*X-l*k+c*D)*W,e[1]=(s*k-n*X-r*D)*W,e[2]=(x*g-f*E+d*A)*W,e[3]=(h*E-p*g-m*A)*W,e[4]=(l*R-o*X-c*N)*W,e[5]=(t*X-s*R+r*N)*W,e[6]=(f*S-_*g-d*w)*W,e[7]=(u*g-h*S+m*w)*W,e[8]=(o*k-a*R+c*b)*W,e[9]=(n*R-t*k-r*b)*W,e[10]=(_*E-x*S+d*M)*W,e[11]=(p*S-u*E-m*M)*W,e[12]=(a*N-o*D-l*b)*W,e[13]=(t*D-n*N+s*b)*W,e[14]=(x*w-_*A-f*M)*W,e[15]=(u*A-p*w+h*M)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,p=a+a,h=r*c,m=r*u,_=r*p,x=o*u,f=o*p,d=a*p,M=l*c,w=l*u,S=l*p,A=n.x,E=n.y,g=n.z;return s[0]=(1-(x+d))*A,s[1]=(m+S)*A,s[2]=(_-w)*A,s[3]=0,s[4]=(m-S)*E,s[5]=(1-(h+d))*E,s[6]=(f+M)*E,s[7]=0,s[8]=(_+w)*g,s[9]=(f-M)*g,s[10]=(1-(h+x))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Bs.set(s[0],s[1],s[2]).length(),a=Bs.set(s[4],s[5],s[6]).length(),l=Bs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),$n.copy(this);let c=1/o,u=1/a,p=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=p,$n.elements[9]*=p,$n.elements[10]*=p,t.setFromRotationMatrix($n),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=zn,l=!1){let c=this.elements,u=2*r/(t-e),p=2*r/(n-s),h=(t+e)/(t-e),m=(n+s)/(n-s),_,x;if(l)_=r/(o-r),x=o*r/(o-r);else if(a===zn)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===$r)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=zn,l=!1){let c=this.elements,u=2/(t-e),p=2/(n-s),h=-(t+e)/(t-e),m=-(n+s)/(n-s),_,x;if(l)_=1/(o-r),x=o/(o-r);else if(a===zn)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===$r)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};nl.prototype.isMatrix4=!0;_t=nl,Bs=new B,$n=new _t,rm=new B(0,0,0),om=new B(1,1,1),Vi=new B,Jo=new B,Rn=new B,Hh=new _t,Gh=new In,Zi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],p=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zi.DEFAULT_ORDER="XYZ";nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},am=0,Vh=new B,ks=new In,_i=new _t,Qo=new B,Ur=new B,lm=new B,cm=new In,Wh=new B(1,0,0),Xh=new B(0,1,0),qh=new B(0,0,1),Yh={type:"added"},um={type:"removed"},zs={type:"childadded",child:null},Bc={type:"childremoved",child:null},An=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new Zi,n=new In,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Je}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qo.copy(e):Qo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ur,Qo,this.up):_i.lookAt(Qo,Ur,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(_i),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yh),zs.child=e,this.dispatchEvent(zs),zs.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(um),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yh),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,cm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};An.DEFAULT_UP=new B(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;pn=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},hm={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,n),d=this._getHandJoint(c,x);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},jo={h:0,s:0,l:0};je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Au(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=kc(o,r,e+1/3),this.g=kc(o,r,e),this.b=kc(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=yn){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){let n=jd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return lt.workingToColorSpace(fn.copy(this),e),Math.round(ut(fn.r*255,0,255))*65536+Math.round(ut(fn.g*255,0,255))*256+Math.round(ut(fn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(fn.copy(this),t);let n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=yn){lt.workingToColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,s=fn.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(jo);let n=Wr(Wi.h,jo.h,t),s=Wr(Wi.s,jo.s,t),r=Wr(Wi.l,jo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new je;je.NAMES=jd;Jr=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zn=new B,vi=new B,zc=new B,xi=new B,Hs=new B,Gs=new B,$h=new B,Hc=new B,Gc=new B,Vc=new B,Wc=new It,Xc=new It,qc=new It,$i=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),vi.subVectors(n,t),zc.subVectors(e,t);let o=Zn.dot(Zn),a=Zn.dot(vi),l=Zn.dot(zc),c=vi.dot(vi),u=vi.dot(zc),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let h=1/p,m=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Wc.setScalar(0),Xc.setScalar(0),qc.setScalar(0),Wc.fromBufferAttribute(e,t),Xc.fromBufferAttribute(e,n),qc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wc,r.x),o.addScaledVector(Xc,r.y),o.addScaledVector(qc,r.z),o}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),vi.subVectors(e,t),Zn.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Zn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Hs.subVectors(s,n),Gs.subVectors(r,n),Hc.subVectors(e,n);let l=Hs.dot(Hc),c=Gs.dot(Hc);if(l<=0&&c<=0)return t.copy(n);Gc.subVectors(e,s);let u=Hs.dot(Gc),p=Gs.dot(Gc);if(u>=0&&p<=u)return t.copy(s);let h=l*p-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(Hs,o);Vc.subVectors(e,r);let m=Hs.dot(Vc),_=Gs.dot(Vc);if(_>=0&&m<=_)return t.copy(r);let x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Gs,a);let f=u*_-m*p;if(f<=0&&p-u>=0&&m-_>=0)return $h.subVectors(r,s),a=(p-u)/(p-u+(m-_)),t.copy(s).addScaledVector($h,a);let d=1/(f+x+h);return o=x*d,a=h*d,t.copy(n).addScaledVector(Hs,o).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},oi=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),ta.subVectors(this.max,Fr),Vs.subVectors(e.a,Fr),Ws.subVectors(e.b,Fr),Xs.subVectors(e.c,Fr),Xi.subVectors(Ws,Vs),qi.subVectors(Xs,Ws),ps.subVectors(Vs,Xs);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-ps.z,ps.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,ps.z,0,-ps.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-ps.y,ps.x,0];return!Yc(t,Vs,Ws,Xs,ta)||(t=[1,0,0,0,1,0,0,0,1],!Yc(t,Vs,Ws,Xs,ta))?!1:(na.crossVectors(Xi,qi),t=[na.x,na.y,na.z],Yc(t,Vs,Ws,Xs,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new B,new B,new B,new B,new B,new B,new B,new B],Kn=new B,ea=new oi,Vs=new B,Ws=new B,Xs=new B,Xi=new B,qi=new B,ps=new B,Fr=new B,ta=new B,na=new B,ms=new B;Ht=new B,ia=new Xe,dm=0,Wt=class extends ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qd,this.updateRanges=[],this.gpuType=Gn,this.version=0,this._normalizationScale=e!==void 0?Ru(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Jd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qd(e,this.array)}},Qr=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},jr=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xt=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},fm=new oi,Or=new B,$c=new B,Hn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add($c)),this.expandByPoint(Or.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pm=0,kn=new _t,Zc=new An,qs=new B,Pn=new oi,Br=new oi,tn=new B,Lt=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kp(e)?jr:Qr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Pn.min,Br.min),Pn.expandByPoint(tn),tn.addVectors(Pn.max,Br.max),Pn.expandByPoint(tn)):(Pn.expandByPoint(Br.min),Pn.expandByPoint(Br.max))}Pn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tn.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),tn.add(qs)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)a[N]=new B,l[N]=new B;let u=new B,p=new B,h=new B,m=new Xe,_=new Xe,x=new Xe,f=new B,d=new B;function M(N,R,D){c[N]=c[R]=c[D]=1,u.fromBufferAttribute(n,N),p.fromBufferAttribute(n,R),h.fromBufferAttribute(n,D),m.fromBufferAttribute(r,N),_.fromBufferAttribute(r,R),x.fromBufferAttribute(r,D),p.sub(u),h.sub(u),_.sub(m),x.sub(m);let k=1/(_.x*x.y-x.x*_.y);isFinite(k)&&(f.copy(p).multiplyScalar(x.y).addScaledVector(h,-_.y).multiplyScalar(k),d.copy(h).multiplyScalar(_.x).addScaledVector(p,-x.x).multiplyScalar(k),a[N].add(f),a[R].add(f),a[D].add(f),l[N].add(d),l[R].add(d),l[D].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,R=w.length;N<R;++N){let D=w[N],k=D.start,X=D.count;for(let P=k,W=k+X;P<W;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let S=new B,A=new B,E=new B,g=new B;function b(N){E.fromBufferAttribute(s,N),g.copy(E);let R=a[N];S.copy(R),S.sub(E.multiplyScalar(E.dot(R))).normalize(),A.crossVectors(g,R);let k=A.dot(l[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,k)}for(let N=0,R=n.count;N<R;++N)c[N]&&b(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,p=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){let _=e.getX(h+0),x=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,f),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,p=a.normalized,h=new c.constructor(l.length*u),m=0,_=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let d=0;d<u;d++)h[_++]=c[m++]}return new Wt(h,u,p)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,p=c.length;u<p;u++){let h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){let m=c[p];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],p=r[c];for(let h=0,m=p.length;h<m;h++)u.push(p[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kc=new B,mm=new B,gm=new Je,Jn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Kc.subVectors(n,t).cross(mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gm.getNormalMatrix(e),s=this.coplanarPoint(Kc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},_m=0,Ei=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=ur,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=du,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mi=new B,Jc=new B,sa=new B,ra=new B,Ti=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jc.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),ra.copy(this.origin).sub(Jc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(sa),a=ra.dot(this.direction),l=-ra.dot(sa),c=ra.lengthSq(),u=Math.abs(1-o*o),p,h,m,_;if(u>0)if(p=o*l-a,h=o*a-l,_=r*u,p>=0)if(h>=-_)if(h<=_){let x=1/u;p*=x,h*=x,m=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h<=-_?(p=Math.max(0,-(-o*r+a)),h=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+h*(h+2*l)+c):h<=_?(p=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(p=Math.max(0,-(o*r+a)),h=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+h*(h+2*l)+c);else h=o>0?-r:r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Jc).addScaledVector(sa,h),m}intersectSphere(e,t){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,p=e.x-o.x,h=e.y-o.y,m=e.z-o.z,_=t.x-o.x,x=t.y-o.y,f=t.z-o.z,d=n.x-o.x,M=n.y-o.y,w=n.z-o.z,S=Math.abs(l),A=Math.abs(c),E=Math.abs(u),g,b,N,R,D,k,X,P,W,Z,q,re;if(S>=A&&S>=E?(N=l,k=p,W=_,re=d,l>=0?(g=c,b=u,R=h,D=m,X=x,P=f,Z=M,q=w):(g=u,b=c,R=m,D=h,X=f,P=x,Z=w,q=M)):A>=E?(N=c,k=h,W=x,re=M,c>=0?(g=u,b=l,R=m,D=p,X=f,P=_,Z=w,q=d):(g=l,b=u,R=p,D=m,X=_,P=f,Z=d,q=w)):(N=u,k=m,W=f,re=w,u>=0?(g=l,b=c,R=p,D=h,X=_,P=x,Z=d,q=M):(g=c,b=l,R=h,D=p,X=x,P=_,Z=M,q=d)),N===0)return null;let Y=g/N,ne=b/N,ie=1/N,De=R-Y*k,qe=D-ne*k,j=X-Y*W,Se=P-ne*W,Re=Z-Y*re,ke=q-ne*re,ve=Re*Se-ke*j,Ke=De*ke-qe*Re,Ct=j*qe-Se*De;if(s){if(ve<0||Ke<0||Ct<0)return null}else if((ve<0||Ke<0||Ct<0)&&(ve>0||Ke>0||Ct>0))return null;let Ge=ve+Ke+Ct;if(Ge===0)return null;let ct=ie*(ve*k+Ke*W+Ct*re);return(Ge>0?ct<0:ct>0)?null:this.at(ct/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wi=class extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zh=new _t,gs=new Ti,oa=new Hn,Kh=new B,aa=new B,la=new B,ca=new B,Qc=new B,ua=new B,Jh=new B,ha=new B,vt=class extends An{constructor(e=new Lt,t=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],p=r[l];u!==0&&(Qc.fromBufferAttribute(p,e),o?ua.addScaledVector(Qc,u):ua.addScaledVector(Qc.sub(t),u))}t.add(ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(oa.containsPoint(gs.origin)===!1&&(gs.intersectSphere(oa,Kh)===null||gs.origin.distanceToSquared(Kh)>(e.far-e.near)**2))&&(Zh.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){let f=h[_],d=o[f.materialIndex],M=Math.max(f.start,m.start),w=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let S=M,A=w;S<A;S+=3){let E=a.getX(S),g=a.getX(S+1),b=a.getX(S+2);s=da(this,d,e,n,c,u,p,E,g,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=_,d=x;f<d;f+=3){let M=a.getX(f),w=a.getX(f+1),S=a.getX(f+2);s=da(this,o,e,n,c,u,p,M,w,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){let f=h[_],d=o[f.materialIndex],M=Math.max(f.start,m.start),w=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=M,A=w;S<A;S+=3){let E=S,g=S+1,b=S+2;s=da(this,d,e,n,c,u,p,E,g,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=_,d=x;f<d;f+=3){let M=f,w=f+1,S=f+2;s=da(this,o,e,n,c,u,p,M,w,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};eo=class extends wn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=nn,u=nn,p,h){super(null,o,a,l,c,u,s,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vs=class extends Wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ys=new _t,Qh=new _t,fa=[],jh=new oi,xm=new _t,kr=new vt,zr=new Hn,to=class extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),jh.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(jh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),zr.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),e.ray.intersectsSphere(zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),Qh.multiplyMatrices(n,Ys),kr.matrixWorld=Qh,kr.raycast(e,fa);for(let o=0,a=fa.length;o<a;o++){let l=fa[o];l.instanceId=r,l.object=this,t.push(l)}fa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(s*this.count),s,this.count,cl,Gn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_s=new Hn,ym=new Xe(.5,.5),pa=new B,xs=class{constructor(e=new Jn,t=new Jn,n=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],p=r[5],h=r[6],m=r[7],_=r[8],x=r[9],f=r[10],d=r[11],M=r[12],w=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-o,m-u,d-_,A-M).normalize(),s[1].setComponents(c+o,m+u,d+_,A+M).normalize(),s[2].setComponents(c+a,m+p,d+x,A+w).normalize(),s[3].setComponents(c-a,m-p,d-x,A-w).normalize(),n)s[4].setComponents(l,h,f,S).normalize(),s[5].setComponents(c-l,m-h,d-f,A-S).normalize();else if(s[4].setComponents(c-l,m-h,d-f,A-S).normalize(),t===zn)s[5].setComponents(c+l,m+h,d+f,A+S).normalize();else if(t===$r)s[5].setComponents(l,h,f,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);let t=ym.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ed=new _t,Oa=class i{constructor(){this.coordinateSystem=zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ed.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new xs),n[s].setFromProjectionMatrix(ed,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new xs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},sr=class extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ba=new B,ka=new B,td=new _t,Hr=new Ti,ma=new Hn,jc=new B,nd=new B,za=class extends An{constructor(e=new Lt,t=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ba.fromBufferAttribute(t,s-1),ka.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ba.distanceTo(ka);e.setAttribute("lineDistance",new xt(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;td.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=m,f=_-1;x<f;x+=c){let d=u.getX(x),M=u.getX(x+1),w=ga(this,e,Hr,l,d,M,x);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(_-1),f=u.getX(m),d=ga(this,e,Hr,l,x,f,_-1);d&&t.push(d)}}else{let m=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=m,f=_-1;x<f;x+=c){let d=ga(this,e,Hr,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){let x=ga(this,e,Hr,l,_-1,m,_-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};id=new B,sd=new B,no=class extends za{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)id.fromBufferAttribute(t,s),sd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+id.distanceTo(sd);e.setAttribute("lineDistance",new xt(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ha=class extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rd=new _t,su=new Ti,_a=new Hn,va=new B,Ki=class extends An{constructor(e=new Lt,t=new Ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;rd.copy(s).invert(),su.copy(e.ray).applyMatrix4(rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=h,x=m;_<x;_++){let f=c.getX(_);va.fromBufferAttribute(p,f),od(va,f,l,s,e,t,this)}}else{let h=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let _=h,x=m;_<x;_++)va.fromBufferAttribute(p,_),od(va,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};io=class extends wn{constructor(e=[],t=Ss,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ai=class extends wn{constructor(e,t,n=jn,s,r,o,a=nn,l=nn,c,u=bi,p=1){if(u!==bi&&u!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:p};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},so=class extends Ai{constructor(e,t=jn,n=Ss,s,r,o=nn,a=nn,l,c=bi){let u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ro=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rr=class i extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],p=[],h=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(p,2));function _(x,f,d,M,w,S,A,E,g,b,N){let R=S/g,D=A/b,k=S/2,X=A/2,P=E/2,W=g+1,Z=b+1,q=0,re=0,Y=new B;for(let ne=0;ne<Z;ne++){let ie=ne*D-X;for(let De=0;De<W;De++){let qe=De*R-k;Y[x]=qe*M,Y[f]=ie*w,Y[d]=P,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[f]=0,Y[d]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),p.push(De/g),p.push(1-ne/b),q+=1}}for(let ne=0;ne<b;ne++)for(let ie=0;ie<g;ie++){let De=h+ie+W*ne,qe=h+ie+W*(ne+1),j=h+(ie+1)+W*(ne+1),Se=h+(ie+1)+W*ne;l.push(De,qe,Se),l.push(qe,j,Se),re+=6}a.addGroup(m,re,N),m+=re,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},oo=class i extends Lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],h=[],m=[],_=0,x=[],f=n/2,d=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(m,2));function M(){let S=new B,A=new B,E=0,g=(t-e)/n;for(let b=0;b<=r;b++){let N=[],R=b/r,D=R*(t-e)+e;for(let k=0;k<=s;k++){let X=k/s,P=X*l+a,W=Math.sin(P),Z=Math.cos(P);A.x=D*W,A.y=-R*n+f,A.z=D*Z,p.push(A.x,A.y,A.z),S.set(W,g,Z).normalize(),h.push(S.x,S.y,S.z),m.push(X,1-R),N.push(_++)}x.push(N)}for(let b=0;b<s;b++)for(let N=0;N<r;N++){let R=x[N][b],D=x[N+1][b],k=x[N+1][b+1],X=x[N][b+1];(e>0||N!==0)&&(u.push(R,D,X),E+=3),(t>0||N!==r-1)&&(u.push(D,k,X),E+=3)}c.addGroup(d,E,0),d+=E}function w(S){let A=_,E=new Xe,g=new B,b=0,N=S===!0?e:t,R=S===!0?1:-1;for(let k=1;k<=s;k++)p.push(0,f*R,0),h.push(0,R,0),m.push(.5,.5),_++;let D=_;for(let k=0;k<=s;k++){let P=k/s*l+a,W=Math.cos(P),Z=Math.sin(P);g.x=N*Z,g.y=f*R,g.z=N*W,p.push(g.x,g.y,g.z),h.push(0,R,0),E.x=W*.5+.5,E.y=Z*.5*R+.5,m.push(E.x,E.y),_++}for(let k=0;k<s;k++){let X=A+k,P=D+k;S===!0?u.push(P,P+1,X):u.push(P+1,P,X),b+=3}c.addGroup(d,b,S===!0?1:2),d+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ga=class i extends Lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let w=new B,S=new B,A=new B;for(let E=0;E<t.length;E+=3)m(t[E+0],w),m(t[E+1],S),m(t[E+2],A),l(w,S,A,M)}function l(M,w,S,A){let E=A+1,g=[];for(let b=0;b<=E;b++){g[b]=[];let N=M.clone().lerp(S,b/E),R=w.clone().lerp(S,b/E),D=E-b;for(let k=0;k<=D;k++)k===0&&b===E?g[b][k]=N:g[b][k]=N.clone().lerp(R,k/D)}for(let b=0;b<E;b++)for(let N=0;N<2*(E-b)-1;N++){let R=Math.floor(N/2);N%2===0?(h(g[b][R+1]),h(g[b+1][R]),h(g[b][R])):(h(g[b][R+1]),h(g[b+1][R+1]),h(g[b+1][R]))}}function c(M){let w=new B;for(let S=0;S<r.length;S+=3)w.x=r[S+0],w.y=r[S+1],w.z=r[S+2],w.normalize().multiplyScalar(M),r[S+0]=w.x,r[S+1]=w.y,r[S+2]=w.z}function u(){let M=new B;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let S=f(M)/2/Math.PI+.5,A=d(M)/Math.PI+.5;o.push(S,1-A)}_(),p()}function p(){for(let M=0;M<o.length;M+=6){let w=o[M+0],S=o[M+2],A=o[M+4],E=Math.max(w,S,A),g=Math.min(w,S,A);E>.9&&g<.1&&(w<.2&&(o[M+0]+=1),S<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function m(M,w){let S=M*3;w.x=e[S+0],w.y=e[S+1],w.z=e[S+2]}function _(){let M=new B,w=new B,S=new B,A=new B,E=new Xe,g=new Xe,b=new Xe;for(let N=0,R=0;N<r.length;N+=9,R+=6){M.set(r[N+0],r[N+1],r[N+2]),w.set(r[N+3],r[N+4],r[N+5]),S.set(r[N+6],r[N+7],r[N+8]),E.set(o[R+0],o[R+1]),g.set(o[R+2],o[R+3]),b.set(o[R+4],o[R+5]),A.copy(M).add(w).add(S).divideScalar(3);let D=f(A);x(E,R+0,M,D),x(g,R+2,w,D),x(b,R+4,S,D)}}function x(M,w,S,A){A<0&&M.x===1&&(o[w]=M.x-1),S.x===0&&S.z===0&&(o[w]=A/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},ai=class i extends Ga{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Qn=class i extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,p=e/a,h=t/l,m=[],_=[],x=[],f=[];for(let d=0;d<u;d++){let M=d*h-o;for(let w=0;w<c;w++){let S=w*p-r;_.push(S,-M,0),x.push(0,0,1),f.push(w/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let w=M+c*d,S=M+c*(d+1),A=M+1+c*(d+1),E=M+1+c*d;m.push(w,S,E),m.push(S,A,E)}this.setIndex(m),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ji=class i extends Lt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],p=e,h=(t-e)/s,m=new B,_=new Xe;for(let x=0;x<=s;x++){for(let f=0;f<=n;f++){let d=r+f/n*o;m.x=p*Math.cos(d),m.y=p*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}p+=h}for(let x=0;x<s;x++){let f=x*(n+1);for(let d=0;d<n;d++){let M=d+f,w=M,S=M+n+1,A=M+n+2,E=M+1;a.push(w,S,E),a.push(S,A,E)}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ao=class i extends Lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],p=new B,h=new B,m=[],_=[],x=[],f=[];for(let d=0;d<=n;d++){let M=[],w=d/n,S=o+w*a,A=e*Math.cos(S),E=Math.sqrt(e*e-A*A),g=0;d===0&&o===0?g=.5/t:d===n&&l===Math.PI&&(g=-.5/t);for(let b=0;b<=t;b++){let N=b/t,R=s+N*r;p.x=-E*Math.cos(R),p.y=A,p.z=E*Math.sin(R),_.push(p.x,p.y,p.z),h.copy(p).normalize(),x.push(h.x,h.y,h.z),f.push(N+g,1-w),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){let w=u[d][M+1],S=u[d][M],A=u[d+1][M],E=u[d+1][M+1];(d!==0||o>0)&&m.push(w,S,E),(d!==n-1||l<Math.PI)&&m.push(S,A,E)}this.setIndex(m),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};Li={clone:Es,merge:mn},Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ht=class extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=Mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new It().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},or=class extends ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Va=class extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wa=class extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Qi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xa=class extends Qi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nu:r=e,a=2*t-n;break;case iu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nu:o=e,l=2*n-t;break;case iu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,m=this._weightNext,_=(n-t)/(s-t),x=_*_,f=x*_,d=-h*f+2*h*x-h*_,M=(1+h)*f+(-1.5-2*h)*x+(-.5+h)*_+1,w=(-1-m)*f+(1.5+m)*x+.5*_,S=m*f-m*x;for(let A=0;A!==a;++A)r[A]=d*o[u+A]+M*o[c+A]+w*o[l+A]+S*o[p+A];return r}},qa=class extends Qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),p=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*p+o[l+h]*u;return r}},Ya=class extends Qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$a=class extends Qi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,p=this.outTangents;if(!u||!p){let _=(n-t)/(s-t),x=1-_;for(let f=0;f!==a;++f)r[f]=o[c+f]*x+o[l+f]*_;return r}let h=a*2,m=e-1;for(let _=0;_!==a;++_){let x=o[c+_],f=o[l+_],d=m*h+_*2,M=p[d],w=p[d+1],S=e*h+_*2,A=u[S],E=u[S+1],g=Tm(n,t,M,A,s);r[_]=ef(g,x,w,E,f)}return r}};Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$s(t,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$s(e.times,Array),values:$s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),xa(e.settings)&&(n.settings={inTangents:$s(e.settings.inTangents,Array),outTangents:$s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $a(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case Na:t=this.InterpolantFactoryMethodLinear;break;case Sa:t=this.InterpolantFactoryMethodSmooth;break;case eu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return Sa;case this.InterpolantFactoryMethodBezier:return eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;xa(this.settings)&&(ld(this.settings.inTangents,e),ld(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;xa(this.settings)&&(cd(this.settings.inTangents,e),cd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ze("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&zp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let p=a*n,h=p-n,m=p+n;for(let _=0;_!==n;++_){let x=t[p+_];if(x!==t[h+_]||x!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let p=a*n,h=o*n;for(let m=0;m!==n;++m)t[h+m]=t[p+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,xa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Na;ji=class extends Ln{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Xr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;Za=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};Za.prototype.ValueTypeName="color";Ka=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};Ka.prototype.ValueTypeName="number";Ja=class extends Qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}},lo=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}};lo.prototype.ValueTypeName="quaternion";lo.prototype.InterpolantFactoryMethodSmooth=void 0;es=class extends Ln{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Xr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;Qa=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};Qa.prototype.ValueTypeName="vector";ja=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=c.length;p<h;p+=2){let m=c[p],_=c[p+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tf=new ja,el=class{constructor(e){this.manager=e!==void 0?e:tf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};el.DEFAULT_MATERIAL_NAME="__DEFAULT";ya=new B,Ma=new In,ii=new B,co=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ya,Ma,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,Ma,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ya,Ma,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,Ma,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new B,ud=new Xe,hd=new Xe,Mn=class extends co{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,ud,hd),t.subVectors(hd,ud)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ar=class extends co{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zs=-90,Ks=1,lr=class extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(Zs,Ks,e,t);s.layers=this.layers,this.add(s);let r=new Mn(Zs,Ks,e,t);r.layers=this.layers,this.add(r);let o=new Mn(Zs,Ks,e,t);o.layers=this.layers,this.add(o);let a=new Mn(Zs,Ks,e,t);a.layers=this.layers,this.add(a);let l=new Mn(Zs,Ks,e,t);l.layers=this.layers,this.add(l);let c=new Mn(Zs,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},tl=class extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},uo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=wm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};Iu="\\[\\]\\.:\\/",Am=new RegExp("["+Iu+"]","g"),Lu="[^"+Iu+"]",Cm="[^"+Iu.replace("\\.","")+"]",Rm=/((?:WC+[\/:])*)/.source.replace("WC",Lu),Pm=/(WCOD+)?/.source.replace("WCOD",Cm),Im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),Lm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),Nm=new RegExp("^"+Rm+Pm+Im+Lm+"$"),Dm=["material","materials","bones","map"],ru=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Am,"")}static parseTrackName(e){let t=Nm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=ru;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];cy=new Float32Array(1),dd=new _t,ho=class{constructor(e,t,n=0,s=1/0){this.ray=new Ti(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dd),this}intersectObject(e,t=!0,n=[]){return ou(e,this,n,t),n.sort(fd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ou(e[s],this,n,t);return n.sort(fd),n}};Bu=class Bu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Bu.prototype.isMatrix2=!0;au=Bu;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function Ef(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Om(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,p=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let u=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,u);else{p.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<p.length;m++){let _=p[h],x=p[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,p[h]=x)}p.length=h+1;for(let m=0,_=p.length;m<_;m++){let x=p[m];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function v_(i,e,t,n,s,r){let o=new je(0),a=s===!0?0:1,l,c,u=null,p=0,h=null;function m(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let S=M.backgroundBlurriness>0;w=e.get(w,S)}return w}function _(M){let w=!1,S=m(M);S===null?f(o,a):S&&S.isColor&&(f(S,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,w){let S=m(w);S&&S.isCubeTexture?(c===void 0&&(c=new vt(new rr(1,1,1),new ht({name:"BackgroundCubeMaterial",uniforms:Es(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tf),c.material.toneMapped=lt.getTransfer(S.colorSpace)!==mt,(u!==S||p!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new vt(new Qn(2,2),new ht({name:"BackgroundMaterial",uniforms:Es(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=lt.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,p=S.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,w){M.getRGB(Wl,Pu(i)),t.buffers.color.setClear(Wl.r,Wl.g,Wl.b,w,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,f(o,a)},render:_,addToRenderList:x,dispose:d}}function x_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(D,k,X,P,W){let Z=!1,q=p(D,P,X,k);r!==q&&(r=q,c(r.object)),Z=m(D,P,X,W),Z&&_(D,P,X,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(D,k,X,P),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function p(D,k,X,P){let W=P.wireframe===!0,Z=n[k.id];Z===void 0&&(Z={},n[k.id]=Z);let q=D.isInstancedMesh===!0?D.id:0,re=Z[q];re===void 0&&(re={},Z[q]=re);let Y=re[X.id];Y===void 0&&(Y={},re[X.id]=Y);let ne=Y[W];return ne===void 0&&(ne=h(l()),Y[W]=ne),ne}function h(D){let k=[],X=[],P=[];for(let W=0;W<t;W++)k[W]=0,X[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:P,object:D,attributes:{},index:null}}function m(D,k,X,P){let W=r.attributes,Z=k.attributes,q=0,re=X.getAttributes();for(let Y in re)if(re[Y].location>=0){let ie=W[Y],De=Z[Y];if(De===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(De=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(De=D.instanceColor)),ie===void 0||ie.attribute!==De||De&&ie.data!==De.data)return!0;q++}return r.attributesNum!==q||r.index!==P}function _(D,k,X,P){let W={},Z=k.attributes,q=0,re=X.getAttributes();for(let Y in re)if(re[Y].location>=0){let ie=Z[Y];ie===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));let De={};De.attribute=ie,ie&&ie.data&&(De.data=ie.data),W[Y]=De,q++}r.attributes=W,r.attributesNum=q,r.index=P}function x(){let D=r.newAttributes;for(let k=0,X=D.length;k<X;k++)D[k]=0}function f(D){d(D,0)}function d(D,k){let X=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;X[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),W[D]!==k&&(i.vertexAttribDivisor(D,k),W[D]=k)}function M(){let D=r.newAttributes,k=r.enabledAttributes;for(let X=0,P=k.length;X<P;X++)k[X]!==D[X]&&(i.disableVertexAttribArray(X),k[X]=0)}function w(D,k,X,P,W,Z,q){q===!0?i.vertexAttribIPointer(D,k,X,W,Z):i.vertexAttribPointer(D,k,X,P,W,Z)}function S(D,k,X,P){x();let W=P.attributes,Z=X.getAttributes(),q=k.defaultAttributeValues;for(let re in Z){let Y=Z[re];if(Y.location>=0){let ne=W[re];if(ne===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){let ie=ne.normalized,De=ne.itemSize,qe=e.get(ne);if(qe===void 0)continue;let j=qe.buffer,Se=qe.type,Re=qe.bytesPerElement,ke=Se===i.INT||Se===i.UNSIGNED_INT||ne.gpuType===ol;if(ne.isInterleavedBufferAttribute){let ve=ne.data,Ke=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Ct=ne.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ge=0;Ge<Y.locationSize;Ge++)d(Y.location+Ge,ve.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ge=0;Ge<Y.locationSize;Ge++)f(Y.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Ge=0;Ge<Y.locationSize;Ge++)w(Y.location+Ge,De/Y.locationSize,Se,ie,Ke*Re,(Ct+De/Y.locationSize*Ge)*Re,ke)}else{if(ne.isInstancedBufferAttribute){for(let ve=0;ve<Y.locationSize;ve++)d(Y.location+ve,ne.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<Y.locationSize;ve++)f(Y.location+ve);i.bindBuffer(i.ARRAY_BUFFER,j);for(let ve=0;ve<Y.locationSize;ve++)w(Y.location+ve,De/Y.locationSize,Se,ie,De*Re,De/Y.locationSize*ve*Re,ke)}}else if(q!==void 0){let ie=q[re];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(Y.location,ie);break;case 3:i.vertexAttrib3fv(Y.location,ie);break;case 4:i.vertexAttrib4fv(Y.location,ie);break;default:i.vertexAttrib1fv(Y.location,ie)}}}}M()}function A(){N();for(let D in n){let k=n[D];for(let X in k){let P=k[X];for(let W in P){let Z=P[W];for(let q in Z)u(Z[q].object),delete Z[q];delete P[W]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let k=n[D.id];for(let X in k){let P=k[X];for(let W in P){let Z=P[W];for(let q in Z)u(Z[q].object),delete Z[q];delete P[W]}}delete n[D.id]}function g(D){for(let k in n){let X=n[k];for(let P in X){let W=X[P];if(W[D.id]===void 0)continue;let Z=W[D.id];for(let q in Z)u(Z[q].object),delete Z[q];delete W[D.id]}}}function b(D){for(let k in n){let X=n[k],P=D.isInstancedMesh===!0?D.id:0,W=X[P];if(W!==void 0){for(let Z in W){let q=W[Z];for(let re in q)u(q[re].object),delete q[re];delete W[Z]}delete X[P],Object.keys(X).length===0&&delete n[k]}}}function N(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:f,disableUnusedAttributes:M}}function y_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function M_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==ei&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let b=g===ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Nn&&g!==Gn&&!b&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:S,maxSamples:A,samples:E}}function S_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Jn,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let m=p.length!==0||h||n!==0||s;return s=h,n=p.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,m){let _=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!s||_===null||_.length===0||r&&!f)r?u(null):c();else{let M=r?0:n,w=M*4,S=d.clippingState||null;l.value=S,S=u(_,h,w,m);for(let A=0;A!==w;++A)S[A]=t[A];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,h,m,_){let x=p!==null?p.length:0,f=null;if(x!==0){if(f=l.value,_!==!0||f===null){let d=m+x*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<d)&&(f=new Float32Array(d));for(let w=0,S=m;w!==x;++w,S+=4)o.copy(p[w]).applyMatrix4(M,a),o.normal.toArray(f,S),f[S+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function sf(i,e,t){return new Io(i,{minFilter:Ri,generateMipmaps:e,type:ln,colorSpace:qr,depthBuffer:t})}function Lo(i,e,t){return new ht({name:i,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:an,blending:Ci,depthTest:!1,depthWrite:!1})}function C_(){return Lo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wf}u

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
	`)}function R_(){return Lo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Af}},`

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
	`)}function P_(){return Lo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${E_}
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
	`)}function rf(){return Lo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function of(){return Lo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function I_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?o(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===il||m===sl)if(e.has(h)){let _=e.get(h).texture;return a(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let x=new Io(_.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let m=h.mapping,_=m===il||m===sl,x=m===Ss||m===hr;if(_||x){let f=t.get(h),d=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new ql(i)),f=_?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{let M=h.image;return _&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new ql(i)),f=_?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function a(h,m){return m===il?h.mapping=Ss:m===sl&&(h.mapping=hr),h}function l(h){let m=0,_=6;for(let x=0;x<_;x++)h[x]!==void 0&&m++;return m===_}function c(h){let m=h.target;m.removeEventListener("dispose",c);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function L_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Gr("WebGLRenderer: "+n+" extension not supported."),s}}}function N_(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let f in _.attributes)e.remove(_.attributes[f]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);let x=r.get(_);x&&(e.remove(x),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(_){let x=_.attributes;for(let f in x)e.update(x[f],i.ARRAY_BUFFER)}function p(_){let x=_.index,f=_.attributes.position,d=0;if(f===void 0)return;let M=x!==null?x.array.length:f.array.length/3-1,w=f.count>=65535?jr:Qr,S=new w(Math.ceil(M/3)*6,1),A=S.array;if(x!==null){let g=x.array;d=x.version;for(let b=0,N=0;b<M;b+=3){let R=g[b+0],D=g[b+1],k=g[b+2];A[N++]=R,A[N++]=D,A[N++]=D,A[N++]=k,A[N++]=k,A[N++]=R}}else{d=f.version;for(let g=0,b=0;g<M;g+=3){let N=g+0,R=g+1,D=g+2;A[b++]=N,A[b++]=R,A[b++]=R,A[b++]=D,A[b++]=D,A[b++]=N}}S.version=d;let E=r.get(_);E&&e.remove(E),r.set(_,S)}function h(_){let x=r.get(_);if(x){let f=_.index;f!==null&&x.version<f.version&&p(_)}else p(_);return r.get(_)}function m(){for(let _ in s){let x=s[_].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:m}}function D_(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,h){i.drawElements(n,h,r,p*o),t.update(h,n,1)}function c(p,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,p*o,m),t.update(h,n,m))}function u(p,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,m);let x=0;for(let f=0;f<m;f++)x+=h[f];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function U_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function F_(i,e,t){let n=new WeakMap,s=new It;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==p){let N=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",N)};h!==void 0&&h.texture.dispose();let m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;m===!0&&(w=1),_===!0&&(w=2),x===!0&&(w=3);let S=a.attributes.position.count*w,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let E=new Float32Array(S*A*4*p),g=new Kr(E,S,A,p);g.type=Gn,g.needsUpdate=!0;let b=w*4;for(let R=0;R<p;R++){let D=f[R],k=d[R],X=M[R],P=S*A*4*R;for(let W=0;W<D.count;W++){let Z=W*b;m===!0&&(s.fromBufferAttribute(D,W),E[P+Z+0]=s.x,E[P+Z+1]=s.y,E[P+Z+2]=s.z,E[P+Z+3]=0),_===!0&&(s.fromBufferAttribute(k,W),E[P+Z+4]=s.x,E[P+Z+5]=s.y,E[P+Z+6]=s.z,E[P+Z+7]=0),x===!0&&(s.fromBufferAttribute(X,W),E[P+Z+8]=s.x,E[P+Z+9]=s.y,E[P+Z+10]=s.z,E[P+Z+11]=X.itemSize===4?s.w:1)}}h={count:p,texture:g,size:new Xe(S,A)},n.set(a,h),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function O_(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,p=c.geometry,h=e.get(c,p);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}function k_(i,e,t,n,s,r){let o=new Xt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Lt;u.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new xt([0,2,0,0,2,0],2));let p=new or({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new vt(u,p),m=new ar(-1,1,1,-1,0,1),_=null,x=null,f=!1,d,M=null,w=[],S=!1;this.setSize=function(A,E){o.setSize(A,E),a!==null&&a.setSize(A,E),l!==null&&l.setSize(A,E);for(let g=0;g<w.length;g++){let b=w[g];b.setSize&&b.setSize(A,E)}},this.setEffects=function(A){w=A,S=w.length>0&&w[0].isRenderPass===!0;let E=o.width,g=o.height;w.length>0&&a===null&&(a=new Xt(E,g,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new Xt(E,g,{type:ln,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(N=>N.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ai(E,g),r===!0&&(c.format=Pi,c.type=bs)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let N=0;N<w.length;N++){let R=w[N];R.setSize&&R.setSize(E,g),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,E){if(f||A.toneMapping===li&&w.length===0)return!1;if(M=E,E!==null){let g=E.width,b=E.height;(o.width!==g||o.height!==b)&&this.setSize(g,b)}return S===!1&&A.setRenderTarget(o),d=A.toneMapping,A.toneMapping=li,!0},this.hasRenderPass=function(){return S},this.end=function(A,E){A.toneMapping=d,f=!0;let g=o,b=a;for(let N=0;N<w.length;N++){let R=w[N];R.enabled!==!1&&(R.render(A,b,g,E),R.needsSwap!==!1&&(g=b,b=b===a?l:a))}if(_!==A.outputColorSpace||x!==A.toneMapping){_=A.outputColorSpace,x=A.toneMapping,p.defines={},lt.getTransfer(_)===mt&&(p.defines.SRGB_TRANSFER="");let N=B_[x];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(M),A.render(h,m),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}function mr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=af[s];if(r===void 0&&(r=new Float32Array(s),af[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $l(i,e){let t=lf[e];t===void 0&&(t=new Int32Array(e),lf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function z_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function G_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function W_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;hf.set(n),i.uniformMatrix2fv(this.addr,!1,hf),Yt(t,n)}}function X_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),Yt(t,n)}}function q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;cf.set(n),i.uniformMatrix4fv(this.addr,!1,cf),Yt(t,n)}}function Y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function J_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Zl(i){return i.version===0&&(i.compareFunction=Eu,i.needsUpdate=!0),i}function tv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Zl(Rf):r=Cf,t.setTexture2D(e||r,s)}function nv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lf,s)}function iv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Zl(Pf):r=Nf,t.setTextureCube(e||r,s)}function sv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||If,s)}function rv(i){switch(i){case 5126:return z_;case 35664:return H_;case 35665:return G_;case 35666:return V_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return $_;case 35668:case 35672:return Z_;case 35669:case 35673:return K_;case 5125:return J_;case 36294:return Q_;case 36295:return j_;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return sv}}function ov(i,e){i.uniform1fv(this.addr,e)}function av(i,e){let t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function lv(i,e){let t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function cv(i,e){let t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function uv(i,e){let t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hv(i,e){let t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dv(i,e){let t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fv(i,e){i.uniform1iv(this.addr,e)}function pv(i,e){i.uniform2iv(this.addr,e)}function mv(i,e){i.uniform3iv(this.addr,e)}function gv(i,e){i.uniform4iv(this.addr,e)}function _v(i,e){i.uniform1uiv(this.addr,e)}function vv(i,e){i.uniform2uiv(this.addr,e)}function xv(i,e){i.uniform3uiv(this.addr,e)}function yv(i,e){i.uniform4uiv(this.addr,e)}function Mv(i,e,t){let n=this.cache,s=e.length,r=$l(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Zl(Rf):o=Cf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Sv(i,e,t){let n=this.cache,s=e.length,r=$l(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Lf,r[o])}function bv(i,e,t){let n=this.cache,s=e.length,r=$l(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Zl(Pf):o=Nf;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Ev(i,e,t){let n=this.cache,s=e.length,r=$l(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||If,r[o])}function Tv(i){switch(i){case 5126:return ov;case 35664:return av;case 35665:return lv;case 35666:return cv;case 35674:return uv;case 35675:return hv;case 35676:return dv;case 5124:case 35670:return fv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return _v;case 36294:return vv;case 36295:return xv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Ev}}function df(i,e){i.seq.push(e),i.map[e.id]=e}function wv(i,e,t){let n=i.name,s=n.length;for(zu.lastIndex=0;;){let r=zu.exec(n),o=zu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){df(t,c===void 0?new Gu(a,i,e):new Vu(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Wu(a),df(t,p)),t=p}}}function ff(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function Rv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Pv(i){lt._getMatrix(pf,lt.workingColorSpace,i);let e=`mat3( ${pf.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Yr:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Rv(i.getShaderSource(e),a)}else return r}function Iv(i,e){let t=Pv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function Nv(i,e){let t=Lv[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dv(){lt.getLuminanceCoefficients(Xl);let i=Xl.x.toFixed(4),e=Xl.y.toFixed(4),t=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Fv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ov(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Po(i){return i!==""}function gf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function _f(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Xu(i){return i.replace(Bv,kv)}function kv(i,e){let t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xu(t)}function vf(i){return i.replace(zv,Hv)}function Hv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xf(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vv(i){return Gv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Xv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Wv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Yv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qv[i.combine]||"ENVMAP_BLENDING_NONE"}function $v(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Vv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Xv(t),p=Yv(t),h=Uv(t),m=Fv(r),_=s.createProgram(),x,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Po).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Po).join(`
`),f.length>0&&(f+=`
`)):(x=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),f=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?st.tonemapping_pars_fragment:"",t.toneMapping!==li?Nv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Iv("linearToOutputTexel",t.outputColorSpace),Dv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),o=Xu(o),o=gf(o,t),o=_f(o,t),a=Xu(a),a=gf(a,t),a=_f(a,t),o=vf(o),a=vf(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=d+x+o,w=d+f+a,S=ff(s,s.VERTEX_SHADER,M),A=ff(s,s.FRAGMENT_SHADER,w);s.attachShader(_,S),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(R){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(S)||"",X=s.getShaderInfoLog(A)||"",P=D.trim(),W=k.trim(),Z=X.trim(),q=!0,re=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,A);else{let Y=mf(s,S,"vertex"),ne=mf(s,A,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+Y+`
`+ne)}else P!==""?We("WebGLProgram: Program Info Log:",P):(W===""||Z==="")&&(re=!1);re&&(R.diagnostics={runnable:q,programLog:P,vertexShader:{log:W,prefix:x},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(S),s.deleteShader(A),g=new pr(s,_),b=Ov(s,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,Av)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=A,this}function Kv(i){return i===ns||i===wo||i===Ao}function Jv(i,e,t,n,s,r){let o=new nr,a=new qu,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,b,N,R,D,k){let X=R.fog,P=D.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,q=e.get(g.envMap||W,Z),re=h[g.type],Y=n.precision;g.precision!==null&&(Y=n.getMaxPrecision(g.precision),Y!==g.precision&&We("WebGLProgram.getParameters:",g.precision,"not supported, using",Y,"instead."));let ne=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ie=ne!==void 0?ne.length:0,De=0;P.morphAttributes.position!==void 0&&(De=1),P.morphAttributes.normal!==void 0&&(De=2),P.morphAttributes.color!==void 0&&(De=3);let qe,j,Se,Re;if(re){let ye=ui[re];qe=ye.vertexShader,j=ye.fragmentShader}else{qe=g.vertexShader,j=g.fragmentShader;let ye=a.getVertexShaderStage(g),pt=a.getFragmentShaderStage(g);a.update(g,ye,pt),Se=ye.id,Re=pt.id}let ke=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ke=D.isInstancedMesh===!0,Ct=D.isBatchedMesh===!0,Ge=!!g.map,ct=!!g.matcap,ft=!!q,it=ft&&q.isPMREMTexture===!0,Rt=!!g.aoMap,Ft=!!g.lightMap,sn=!!g.bumpMap&&g.wireframe===!1,Tt=!!g.normalMap,kt=!!g.displacementMap,Dt=!!g.emissiveMap,rn=!!g.metalnessMap,hn=!!g.roughnessMap,on=g.anisotropy>0,U=g.clearcoat>0,Gt=g.diffuseRoughness>0,yt=g.dispersion>0,gt=g.retroreflectivity>0,ge=g.iridescence>0,St=g.sheen>0,ze=g.transmission>0,Ye=on&&!!g.anisotropyMap,T=U&&!!g.clearcoatMap,v=U&&!!g.clearcoatNormalMap,z=U&&!!g.clearcoatRoughnessMap,oe=Gt&&!!g.diffuseRoughnessMap,te=ge&&!!g.iridescenceMap,de=ge&&!!g.iridescenceThicknessMap,fe=St&&!!g.sheenColorMap,Q=St&&!!g.sheenRoughnessMap,ee=!!g.specularMap,ae=!!g.specularColorMap,C=!!g.specularIntensityMap,J=ze&&!!g.transmissionMap,$=ze&&!!g.thicknessMap,pe=!!g.gradientMap,ce=!!g.alphaMap,me=g.alphaTest>0,Oe=!!g.alphaHash,et=!!g.extensions,le=li;g.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(le=i.toneMapping);let He=it?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,$e={shaderID:re,shaderType:g.type,shaderName:g.name,vertexShader:qe,fragmentShader:j,defines:g.defines,customVertexShaderID:Se,customFragmentShaderID:Re,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Y,batching:Ct,batchingColor:Ct&&D._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&D.instanceColor!==null,instancingMorph:Ke&&D.morphTexture!==null,outputColorSpace:ke===null?i.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ge,matcap:ct,envMap:ft,envMapMode:ft&&q.mapping,envMapPMREM:it,envMapMaxLod:it?He.length-1:null,envMapSize:it?He[0].width:null,aoMap:Rt,lightMap:Ft,bumpMap:sn,normalMap:Tt,displacementMap:kt,emissiveMap:Dt,normalMapObjectSpace:Tt&&g.normalMapType===kd,normalMapTangentSpace:Tt&&g.normalMapType===Mu,packedNormalMap:Tt&&g.normalMapType===Mu&&Kv(g.normalMap.format),metalnessMap:rn,roughnessMap:hn,anisotropy:on,anisotropyMap:Ye,clearcoat:U,clearcoatMap:T,clearcoatNormalMap:v,clearcoatRoughnessMap:z,diffuseRoughness:Gt,diffuseRoughnessMap:oe,dispersion:yt,retroreflection:gt,iridescence:ge,iridescenceMap:te,iridescenceThicknessMap:de,sheen:St,sheenColorMap:fe,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:ae,specularIntensityMap:C,transmission:ze,transmissionMap:J,thicknessMap:$,gradientMap:pe,opaque:g.transparent===!1&&g.blending===ur&&g.alphaToCoverage===!1,alphaMap:ce,alphaTest:me,alphaHash:Oe,combine:g.combine,mapUv:Ge&&m(g.map.channel),aoMapUv:Rt&&m(g.aoMap.channel),lightMapUv:Ft&&m(g.lightMap.channel),bumpMapUv:sn&&m(g.bumpMap.channel),normalMapUv:Tt&&m(g.normalMap.channel),displacementMapUv:kt&&m(g.displacementMap.channel),emissiveMapUv:Dt&&m(g.emissiveMap.channel),metalnessMapUv:rn&&m(g.metalnessMap.channel),roughnessMapUv:hn&&m(g.roughnessMap.channel),anisotropyMapUv:Ye&&m(g.anisotropyMap.channel),clearcoatMapUv:T&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:te&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Q&&m(g.sheenRoughnessMap.channel),specularMapUv:ee&&m(g.specularMap.channel),specularColorMapUv:ae&&m(g.specularColorMap.channel),specularIntensityMapUv:C&&m(g.specularIntensityMap.channel),transmissionMapUv:J&&m(g.transmissionMap.channel),thicknessMapUv:$&&m(g.thicknessMap.channel),alphaMapUv:ce&&m(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Tt||on),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Ge||ce),fog:!!X,useFog:g.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&Tt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:De,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Ge&&g.map.isVideoTexture===!0&&lt.getTransfer(g.map.colorSpace)===mt,decodeVideoTextureEmissive:Dt&&g.emissiveMap.isVideoTexture===!0&&lt.getTransfer(g.emissiveMap.colorSpace)===mt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===bn,flipSided:g.side===an,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:et&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&g.extensions.multiDraw===!0||Ct)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function x(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let N in g.defines)b.push(N),b.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(f(b,g),d(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function f(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function d(g,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function M(g){let b=h[g.type],N;if(b){let R=ui[b];N=Li.clone(R.uniforms)}else N=g.uniforms;return N}function w(g,b){let N=u.get(b);return N!==void 0?++N.usedTimes:(N=new $v(i,b,g,s),c.push(N),u.set(b,N)),N}function S(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){a.remove(g)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:M,acquireProgram:w,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:E}}function Qv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function yf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,_,x,f,d){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:m,material:_,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:f,group:d},i[e]=M):(M.id=h.id,M.object=h,M.geometry=m,M.material=_,M.materialVariant=o(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=f,M.group=d),e++,M}function l(h,m,_,x,f,d,M){M.reversedDepth===!0&&(f=-f);let w=a(h,m,_,x,f,d);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):t.push(w)}function c(h,m,_,x,f,d){let M=a(h,m,_,x,f,d);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,m){t.length>1&&t.sort(h||jv),n.length>1&&n.sort(m||yf),s.length>1&&s.sort(m||yf)}function p(){for(let h=e,m=i.length;h<m;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function ex(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Mf,i.set(n,[o])):s>=r.length?(o=new Mf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function tx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new je};break;case"SpotLight":t={position:new B,direction:new B,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function nx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function sx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rx(i){let e=new tx,t=nx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new _t,o=new _t;function a(c){let u=0,p=0,h=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,_=0,x=0,f=0,d=0,M=0,w=0,S=0,A=0,E=0,g=0,b=0,N=0,R=0;c.sort(sx);for(let k=0,X=c.length;k<X;k++){let P=c[k],W=P.color,Z=P.intensity,q=P.distance,re=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ns?re=P.shadow.map.texture:re=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=W.r*Z,p+=W.g*Z,h+=W.b*Z;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],Z);R++}else if(P.isSunLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ne=P.shadow,ie=t.get(P);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[_]=ie,n.sunShadowMap[_]=re;let De=ne.getViewportCount();for(let qe=0;qe<De;qe++)n.sunShadowMatrix[x+qe]=ne.getMatrix(qe),n.sunShadowCascade[x+qe]=ne._cascadeData[qe];x+=De,_++}n.sun[m]=Y,m++}else if(P.isDirectionalLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ne=P.shadow,ie=t.get(P);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,n.directionalShadow[f]=ie,n.directionalShadowMap[f]=re,n.directionalShadowMatrix[f]=P.shadow.matrix,A++}n.directional[f]=Y,f++}else if(P.isSpotLight){let Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(W).multiplyScalar(Z),Y.distance=q,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[M]=Y;let ne=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,ne.updateMatrices(P),P.castShadow&&N++),n.spotLightMatrix[M]=ne.matrix,P.castShadow){let ie=t.get(P);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,n.spotShadow[M]=ie,n.spotShadowMap[M]=re,g++}M++}else if(P.isRectAreaLight){let Y=e.get(P);Y.color.copy(W).multiplyScalar(Z),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=Y,w++}else if(P.isPointLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let ne=P.shadow,ie=t.get(P);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,ie.shadowCameraNear=ne.camera.near,ie.shadowCameraFar=ne.camera.far,n.pointShadow[d]=ie,n.pointShadowMap[d]=re,n.pointShadowMatrix[d]=P.shadow.matrix,E++}n.point[d]=Y,d++}else if(P.isHemisphereLight){let Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(Z),Y.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[S]=Y,S++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;let D=n.hash;(D.sunLength!==m||D.directionalLength!==f||D.pointLength!==d||D.spotLength!==M||D.rectAreaLength!==w||D.hemiLength!==S||D.numSunShadows!==_||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==g||D.numSpotMaps!==b||D.numLightProbes!==R)&&(n.sun.length=m,n.directional.length=f,n.spot.length=M,n.rectArea.length=w,n.point.length=d,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+b-N,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=R,D.sunLength=m,D.directionalLength=f,D.pointLength=d,D.spotLength=M,D.rectAreaLength=w,D.hemiLength=S,D.numSunShadows=_,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=g,D.numSpotMaps=b,D.numLightProbes=R,n.version=ix++)}function l(c,u){let p=0,h=0,m=0,_=0,x=0,f=0,d=u.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let S=c[M];if(S.isSunLight){let A=n.sun[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),p++}else if(S.isDirectionalLight){let A=n.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),h++}else if(S.isSpotLight){let A=n.spot[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),_++}else if(S.isRectAreaLight){let A=n.rectArea[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),o.identity(),r.copy(S.matrixWorld),r.premultiply(d),o.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let A=n.point[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){let A=n.hemi[f];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),f++}}}return{setup:a,setupView:l,state:n}}function Sf(i){let e=new rx(i),t=[],n=[],s=[];function r(p){u.camera=p,t.length=0,n.length=0,s.length=0}function o(p){p.isLightProbeGrid?s.push(p):t.push(p)}function a(p){n.push(p)}function l(){e.setup(t),s.sort((p,h)=>p.priority-h.priority||p.id-h.id)}function c(p){e.setupView(t,p)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ox(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Sf(i),e.set(s,[a])):r>=o.length?(a=new Sf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function hx(i,e,t){let n=new xs,s=new Xe,r=new Xe,o=new It,a=new Va,l=new Wa,c={},u=t.maxTextureSize,p={[ts]:an,[an]:ts,[bn]:bn},h=new ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ax,fragmentShader:lx}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let _=new Lt;_.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new vt(_,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let d=this.type;this.render=function(E,g,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;this.type===gd&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fo);let N=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ci),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let X=d!==this.type;X&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=E.length;P<W;P++){let Z=E[P],q=Z.shadow;if(q===void 0){We("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let re=q.getFrameExtents();s.multiply(re),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,q.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Y,q.map===null||X===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===cr){if(Z.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Xt(s.x,s.y,{format:ns,type:ln,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Ai(s.x,s.y,Gn),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=bi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=nn,q.map.depthTexture.magFilter=nn}else Z.isPointLight?(q.map=new Io(s.x),q.map.depthTexture=new so(s.x,jn)):(q.map=new Xt(s.x,s.y),q.map.depthTexture=new Ai(s.x,s.y,jn)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=bi,this.type===fo?(q.map.depthTexture.compareFunction=Y?bu:Su,q.map.depthTexture.minFilter=Sn,q.map.depthTexture.magFilter=Sn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=nn,q.map.depthTexture.magFilter=nn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ne=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,b);let ie=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:b.layers;for(let De=0;De<ne;De++){let qe=q.getCamera(De);if(Z.isPointLight){let j=q.camera,Se=q.matrix,Re=Z.distance||j.far;Re!==j.far&&(j.far=Re,j.updateProjectionMatrix()),Ro.setFromMatrixPosition(Z.matrixWorld),j.position.copy(Ro),Hu.copy(j.position),Hu.add(cx[De]),j.up.copy(ux[De]),j.lookAt(Hu),j.updateMatrixWorld(),Se.makeTranslation(-Ro.x,-Ro.y,-Ro.z),bf.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q._frustum.setFromProjectionMatrix(bf,j.coordinateSystem,j.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,De),i.clear();else{De===0&&(i.setRenderTarget(q.map),i.clear());let j=q.getViewport(De);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),k.viewport(o)}n=q.getFrustum(De),S(g,b,qe,Z,ie,this.type)}q.isPointLightShadow!==!0&&this.type===cr&&M(q,b),q.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(N,R,D)};function M(E,g){let b=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new Xt(s.x,s.y,{format:ns,type:ln}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(g,null,b,h,x,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(g,null,b,m,x,null)}function w(E,g,b,N){let R=null,D=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=b.isPointLight===!0?l:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let k=R.uuid,X=g.uuid,P=c[k];P===void 0&&(P={},c[k]=P);let W=P[X];W===void 0&&(W=R.clone(),P[X]=W,g.addEventListener("dispose",A)),R=W}if(R.visible=g.visible,R.wireframe=g.wireframe,N===cr?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:p[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let k=i.properties.get(R);k.light=b}return R}function S(E,g,b,N,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===cr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let P=e.update(E),W=E.material;if(Array.isArray(W)){let Z=P.groups;for(let q=0,re=Z.length;q<re;q++){let Y=Z[q],ne=W[Y.materialIndex];if(ne&&ne.visible){let ie=w(E,ne,N,D);E.onBeforeShadow(i,E,g,b,P,ie,Y),i.renderBufferDirect(b,null,P,ie,E,Y),E.onAfterShadow(i,E,g,b,P,ie,Y)}}}else if(W.visible){let Z=w(E,W,N,D);E.onBeforeShadow(i,E,g,b,P,Z,null),i.renderBufferDirect(b,null,P,Z,E,null),E.onAfterShadow(i,E,g,b,P,Z,null)}}let X=E.children;for(let P=0,W=X.length;P<W;P++)S(X[P],g,b,N,R,D)}function A(E){E.target.removeEventListener("dispose",A);for(let b in c){let N=c[b],R=E.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}function dx(i,e){function t(){let C=!1,J=new It,$=null,pe=new It(0,0,0,0);return{setMask:function(ce){$!==ce&&!C&&(i.colorMask(ce,ce,ce,ce),$=ce)},setLocked:function(ce){C=ce},setClear:function(ce,me,Oe,et,le){le===!0&&(ce*=et,me*=et,Oe*=et),J.set(ce,me,Oe,et),pe.equals(J)===!1&&(i.clearColor(ce,me,Oe,et),pe.copy(J))},reset:function(){C=!1,$=null,pe.set(-1,0,0,0)}}}function n(){let C=!1,J=!1,$=null,pe=null,ce=null;return{setReversed:function(me){if(J!==me){let Oe=e.get("EXT_clip_control");me?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),J=me;let et=ce;ce=null,this.setClear(et)}},getReversed:function(){return J},setTest:function(me){me?ve(i.DEPTH_TEST):Ke(i.DEPTH_TEST)},setMask:function(me){$!==me&&!C&&(i.depthMask(me),$=me)},setFunc:function(me){if(J&&(me=Kd[me]),pe!==me){switch(me){case Ea:i.depthFunc(i.NEVER);break;case Ta:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=me}},setLocked:function(me){C=me},setClear:function(me){ce!==me&&(ce=me,J&&(me=1-me),i.clearDepth(me))},reset:function(){C=!1,$=null,pe=null,ce=null,J=!1}}}function s(){let C=!1,J=null,$=null,pe=null,ce=null,me=null,Oe=null,et=null,le=null;return{setTest:function(He){C||(He?ve(i.STENCIL_TEST):Ke(i.STENCIL_TEST))},setMask:function(He){J!==He&&!C&&(i.stencilMask(He),J=He)},setFunc:function(He,$e,ye){($!==He||pe!==$e||ce!==ye)&&(i.stencilFunc(He,$e,ye),$=He,pe=$e,ce=ye)},setOp:function(He,$e,ye){(me!==He||Oe!==$e||et!==ye)&&(i.stencilOp(He,$e,ye),me=He,Oe=$e,et=ye)},setLocked:function(He){C=He},setClear:function(He){le!==He&&(i.clearStencil(He),le=He)},reset:function(){C=!1,J=null,$=null,pe=null,ce=null,me=null,Oe=null,et=null,le=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,u={},p={},h={},m=new WeakMap,_=[],x=null,f=!1,d=null,M=null,w=null,S=null,A=null,E=null,g=null,b=new je(0,0,0),N=0,R=!1,D=null,k=null,X=null,P=null,W=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,re=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=re>=1):Y.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=re>=2);let ne=null,ie={},De=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),j=new It().fromArray(De),Se=new It().fromArray(qe);function Re(C,J,$,pe){let ce=new Uint8Array(4),me=i.createTexture();i.bindTexture(C,me),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<$;Oe++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(J+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return me}let ke={};ke[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),ke[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ke[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ke[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(i.DEPTH_TEST),o.setFunc(Qs),sn(!1),Tt(lu),ve(i.CULL_FACE),Rt(Ci);function ve(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function Ke(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Ct(C,J){return h[C]!==J?(i.bindFramebuffer(C,J),h[C]=J,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=J),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Ge(C,J){let $=_,pe=!1;if(C){$=m.get(J),$===void 0&&($=[],m.set(J,$));let ce=C.textures;if($.length!==ce.length||$[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Oe=ce.length;me<Oe;me++)$[me]=i.COLOR_ATTACHMENT0+me;$.length=ce.length,pe=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,pe=!0);pe&&i.drawBuffers($)}function ct(C){return x!==C?(i.useProgram(C),x=C,!0):!1}let ft={[Ms]:i.FUNC_ADD,[vd]:i.FUNC_SUBTRACT,[xd]:i.FUNC_REVERSE_SUBTRACT};ft[yd]=i.MIN,ft[Md]=i.MAX;let it={[Sd]:i.ZERO,[bd]:i.ONE,[Ed]:i.SRC_COLOR,[hu]:i.SRC_ALPHA,[Pd]:i.SRC_ALPHA_SATURATE,[Cd]:i.DST_COLOR,[wd]:i.DST_ALPHA,[Td]:i.ONE_MINUS_SRC_COLOR,[du]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[Ad]:i.ONE_MINUS_DST_ALPHA,[Id]:i.CONSTANT_COLOR,[Ld]:i.ONE_MINUS_CONSTANT_COLOR,[Nd]:i.CONSTANT_ALPHA,[Dd]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(C,J,$,pe,ce,me,Oe,et,le,He){if(C===Ci){f===!0&&(Ke(i.BLEND),f=!1);return}if(f===!1&&(ve(i.BLEND),f=!0),C!==_d){if(C!==d||He!==R){if((M!==Ms||A!==Ms)&&(i.blendEquation(i.FUNC_ADD),M=Ms,A=Ms),He)switch(C){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",C);break}else switch(C){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cu:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uu:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",C);break}w=null,S=null,E=null,g=null,b.set(0,0,0),N=0,d=C,R=He}return}ce=ce||J,me=me||$,Oe=Oe||pe,(J!==M||ce!==A)&&(i.blendEquationSeparate(ft[J],ft[ce]),M=J,A=ce),($!==w||pe!==S||me!==E||Oe!==g)&&(i.blendFuncSeparate(it[$],it[pe],it[me],it[Oe]),w=$,S=pe,E=me,g=Oe),(et.equals(b)===!1||le!==N)&&(i.blendColor(et.r,et.g,et.b,le),b.copy(et),N=le),d=C,R=!1}function Ft(C,J){C.side===bn?Ke(i.CULL_FACE):ve(i.CULL_FACE);let $=C.side===an;J&&($=!$),sn($),C.blending===ur&&C.transparent===!1?Rt(Ci):Rt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let pe=C.stencilWrite;a.setTest(pe),pe&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Dt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):Ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function sn(C){D!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),D=C)}function Tt(C){C!==pd?(ve(i.CULL_FACE),C!==k&&(C===lu?i.cullFace(i.BACK):C===md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ke(i.CULL_FACE),k=C}function kt(C){C!==X&&(q&&i.lineWidth(C),X=C)}function Dt(C,J,$){C?(ve(i.POLYGON_OFFSET_FILL),(P!==J||W!==$)&&(P=J,W=$,o.getReversed()&&(J=-J,$=-$),i.polygonOffset(J,$))):Ke(i.POLYGON_OFFSET_FILL)}function rn(C){C?ve(i.SCISSOR_TEST):Ke(i.SCISSOR_TEST)}function hn(C){C===void 0&&(C=i.TEXTURE0+Z-1),ne!==C&&(i.activeTexture(C),ne=C)}function on(C,J,$){$===void 0&&(ne===null?$=i.TEXTURE0+Z-1:$=ne);let pe=ie[$];pe===void 0&&(pe={type:void 0,texture:void 0},ie[$]=pe),(pe.type!==C||pe.texture!==J)&&(ne!==$&&(i.activeTexture($),ne=$),i.bindTexture(C,J||ke[C]),pe.type=C,pe.texture=J)}function U(){let C=ie[ne];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Gt(){try{i.compressedTexImage2D(...arguments)}catch(C){Ze("WebGLState:",C)}}function yt(){try{i.compressedTexImage3D(...arguments)}catch(C){Ze("WebGLState:",C)}}function gt(){try{i.texSubImage2D(...arguments)}catch(C){Ze("WebGLState:",C)}}function ge(){try{i.texSubImage3D(...arguments)}catch(C){Ze("WebGLState:",C)}}function St(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Ze("WebGLState:",C)}}function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Ze("WebGLState:",C)}}function Ye(){try{i.texStorage2D(...arguments)}catch(C){Ze("WebGLState:",C)}}function T(){try{i.texStorage3D(...arguments)}catch(C){Ze("WebGLState:",C)}}function v(){try{i.texImage2D(...arguments)}catch(C){Ze("WebGLState:",C)}}function z(){try{i.texImage3D(...arguments)}catch(C){Ze("WebGLState:",C)}}function oe(C){return p[C]!==void 0?p[C]:i.getParameter(C)}function te(C,J){p[C]!==J&&(i.pixelStorei(C,J),p[C]=J)}function de(C){j.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),j.copy(C))}function fe(C){Se.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Se.copy(C))}function Q(C,J){let $=c.get(J);$===void 0&&($=new WeakMap,c.set(J,$));let pe=$.get(C);pe===void 0&&(pe=i.getUniformBlockIndex(J,C.name),i.uniformBlockBinding(J,pe,pe),$.set(C,pe))}function ee(C,J,$){let ce=c.get(J).get(C);l[ce]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,ce,$),l[ce]=$)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},ne=null,ie={},h={},l={},m=new WeakMap,_=[],x=null,f=!1,d=null,M=null,w=null,S=null,A=null,E=null,g=null,b=new je(0,0,0),N=0,R=!1,D=null,k=null,X=null,P=null,W=null,j.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Ke,bindFramebuffer:Ct,drawBuffers:Ge,useProgram:ct,setBlending:Rt,setMaterial:Ft,setFlipSided:sn,setCullFace:Tt,setLineWidth:kt,setPolygonOffset:Dt,setScissorTest:rn,activeTexture:hn,bindTexture:on,unbindTexture:U,compressedTexImage2D:Gt,compressedTexImage3D:yt,texImage2D:v,texImage3D:z,pixelStorei:te,getParameter:oe,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:Ye,texStorage3D:T,texSubImage2D:gt,texSubImage3D:ge,compressedTexSubImage2D:St,compressedTexSubImage3D:ze,scissor:de,viewport:fe,reset:ae}}function fx(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap,p=new Set,h,m=new WeakMap,_=new Set,x=new FinalizationRegistry(T=>_.delete(T)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,v){return f?new OffscreenCanvas(T,v):Zr("canvas")}function M(T,v,z){let oe=1,te=Ye(T);if((te.width>z||te.height>z)&&(oe=z/Math.max(te.width,te.height)),oe<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let de=Math.floor(oe*te.width),fe=Math.floor(oe*te.height);h===void 0&&(h=d(de,fe));let Q=v?d(de,fe):h;return Q.width=de,Q.height=fe,Q.getContext("2d").drawImage(T,0,0,de,fe),We("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+de+"x"+fe+")."),Q}else return"data"in T&&We("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function w(T){return T.generateMipmaps}function S(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,v,z,oe,te,de=!1){if(T!==null){if(i[T]!==void 0)return i[T];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let fe;oe&&(fe=e.get("EXT_texture_norm16"),fe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8),z===i.UNSIGNED_SHORT&&fe&&(Q=fe.R16_EXT),z===i.SHORT&&fe&&(Q=fe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),v===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8),z===i.UNSIGNED_SHORT&&fe&&(Q=fe.RG16_EXT),z===i.SHORT&&fe&&(Q=fe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),z===i.UNSIGNED_INT&&(Q=i.RG32UI),z===i.BYTE&&(Q=i.RG8I),z===i.SHORT&&(Q=i.RG16I),z===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),z===i.UNSIGNED_INT&&(Q=i.RGB32UI),z===i.BYTE&&(Q=i.RGB8I),z===i.SHORT&&(Q=i.RGB16I),z===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),z===i.BYTE&&(Q=i.RGBA8I),z===i.SHORT&&(Q=i.RGBA16I),z===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_SHORT&&fe&&(Q=fe.RGB16_EXT),z===i.SHORT&&fe&&(Q=fe.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),v===i.RGBA){let ee=de?Yr:lt.getTransfer(te);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=ee===mt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&fe&&(Q=fe.RGBA16_EXT),z===i.SHORT&&fe&&(Q=fe.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(T,v){let z;return T?v===null||v===jn||v===bs?z=i.DEPTH24_STENCIL8:v===Gn?z=i.DEPTH32F_STENCIL8:v===dr&&(z=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===jn||v===bs?z=i.DEPTH_COMPONENT24:v===Gn?z=i.DEPTH_COMPONENT32F:v===dr&&(z=i.DEPTH_COMPONENT16),z}function b(T,v){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==nn&&T.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function N(T){let v=new WeakRef(T);n.get(T).__ref=v,_.add(v),x.register(T,v,v)}function R(T){let v=n.get(T).__ref;v!==void 0&&(_.delete(v),x.unregister(v))}function D(T){X(T.target)}function k(T){P(T.target)}function X(T){T.removeEventListener("dispose",D),R(T),Z(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&p.delete(T)}function P(T){T.removeEventListener("dispose",k),R(T),re(T)}function W(){for(let T of _){let v=T.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):X(v))}_.clear(),p.clear()}function Z(T){let v=n.get(T);if(v.__webglInit===void 0)return;let z=T.source,oe=m.get(z);if(oe){let te=oe[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&q(T),Object.keys(oe).length===0&&m.delete(z)}n.remove(T)}function q(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let z=T.source,oe=m.get(z);delete oe[v.__cacheKey],o.memory.textures--}function re(T){let v=n.get(T);v.__depthDisposeCallback&&v.__depthDisposeCallback();let z=T.depthTexture;if(z&&z.renderTarget===T&&X(z),T.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(v.__webglFramebuffer[te]))for(let de=0;de<v.__webglFramebuffer[te].length;de++)i.deleteFramebuffer(v.__webglFramebuffer[te][de]);else i.deleteFramebuffer(v.__webglFramebuffer[te]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[te])}else{if(Array.isArray(v.__webglFramebuffer))for(let te=0;te<v.__webglFramebuffer.length;te++)i.deleteFramebuffer(v.__webglFramebuffer[te]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let te=0;te<v.__webglColorRenderbuffer.length;te++)v.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[te]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let oe=T.textures;for(let te=0,de=oe.length;te<de;te++){let fe=n.get(oe[te]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(oe[te])}n.remove(T)}let Y=0;function ne(){Y=0}function ie(){return Y}function De(T){Y=T}function qe(){let T=Y;return T>=s.maxTextures&&We("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,T}function j(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.mipmapsAutoUpdate),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Se(T,v){let z=n.get(T);if(T.isVideoTexture&&St(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let oe=T.image;if(oe===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(z,T,v);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function Re(T,v){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Ft(z,T,v);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function ke(T,v){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Ft(z,T,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function ve(T,v){let z=n.get(T);if(T.version>0&&z.__version!==T.version){sn(z,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}let Ke={[Ia]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},Ct={[nn]:i.NEAREST,[Od]:i.NEAREST_MIPMAP_NEAREST,[Mo]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[rl]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},Ge={[Hd]:i.NEVER,[Eu]:i.ALWAYS,[Gd]:i.LESS,[Su]:i.LEQUAL,[Vd]:i.EQUAL,[bu]:i.GEQUAL,[Wd]:i.GREATER,[Xd]:i.NOTEQUAL};function ct(T,v){if(v.type===Gn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===rl||v.magFilter===Mo||v.magFilter===Ri||v.minFilter===Sn||v.minFilter===rl||v.minFilter===Mo||v.minFilter===Ri)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ke[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ke[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ke[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ct[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ct[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===nn||v.minFilter!==Mo&&v.minFilter!==Ri||v.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ft(T,v){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",D),N(v));let oe=v.source,te=m.get(oe);te===void 0&&(te={},m.set(oe,te));let de=j(v);if(de!==T.__cacheKey){te[de]===void 0&&(te[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[de].usedTimes++;let fe=te[T.__cacheKey];fe!==void 0&&(te[T.__cacheKey].usedTimes--,fe.usedTimes===0&&q(v)),T.__cacheKey=de,T.__webglTexture=te[de].texture}return z}function it(T,v,z){return Math.floor(Math.floor(T/z)/v)}function Rt(T,v,z,oe){let de=T.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,oe,v.data);else{de.sort((C,J)=>C.start-J.start);let fe=0;for(let C=1;C<de.length;C++){let J=de[fe],$=de[C],pe=J.start+J.count,ce=it($.start,v.width,4),me=it(J.start,v.width,4);$.start<=pe+1&&ce===me&&it($.start+$.count-1,v.width,4)===ce?J.count=Math.max(J.count,$.start+$.count-J.start):(++fe,de[fe]=$)}de.length=fe+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let C=0,J=de.length;C<J;C++){let $=de[C],pe=Math.floor($.start/4),ce=Math.ceil($.count/4),me=pe%v.width,Oe=Math.floor(pe/v.width),et=ce,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,me),t.pixelStorei(i.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(i.TEXTURE_2D,0,me,Oe,et,le,z,oe,v.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function Ft(T,v,z){let oe=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(oe=i.TEXTURE_3D);let te=ft(T,v),de=v.source;t.bindTexture(oe,T.__webglTexture,i.TEXTURE0+z);let fe=n.get(de);if(de.version!==fe.__version||te===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let le=lt.getPrimaries(lt.workingColorSpace),He=v.colorSpace===Ii?null:lt.getPrimaries(v.colorSpace),$e=v.colorSpace===Ii||le===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ee=M(v.image,!1,s.maxTextureSize);ee=ze(v,ee);let ae=r.convert(v.format,v.colorSpace),C=r.convert(v.type),J=E(v.internalFormat,ae,C,v.normalized,v.colorSpace,v.isVideoTexture);ct(oe,v);let $,pe=v.mipmaps,ce=v.isVideoTexture!==!0,me=fe.__version===void 0||te===!0,Oe=de.dataReady,et=b(v,ee);if(v.isDepthTexture)J=g(v.format===Pi,v.type),me&&(ce?t.texStorage2D(i.TEXTURE_2D,1,J,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,J,ee.width,ee.height,0,ae,C,null));else if(v.isDataTexture)if(pe.length>0){ce&&me&&t.texStorage2D(i.TEXTURE_2D,et,J,pe[0].width,pe[0].height);for(let le=0,He=pe.length;le<He;le++)$=pe[le],ce?Oe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,$.width,$.height,ae,C,$.data):t.texImage2D(i.TEXTURE_2D,le,J,$.width,$.height,0,ae,C,$.data);v.generateMipmaps=!1}else ce?(me&&t.texStorage2D(i.TEXTURE_2D,et,J,ee.width,ee.height),Oe&&Rt(v,ee,ae,C)):t.texImage2D(i.TEXTURE_2D,0,J,ee.width,ee.height,0,ae,C,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ce&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,J,pe[0].width,pe[0].height,ee.depth);for(let le=0,He=pe.length;le<He;le++)if($=pe[le],v.format!==ei)if(ae!==null)if(ce){if(Oe)if(v.layerUpdates.size>0){let $e=Nu($.width,$.height,v.format,v.type);for(let ye of v.layerUpdates){let pt=$.data.subarray(ye*$e/$.data.BYTES_PER_ELEMENT,(ye+1)*$e/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,ye,$.width,$.height,1,ae,pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,$.width,$.height,ee.depth,ae,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,J,$.width,$.height,ee.depth,0,$.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,$.width,$.height,ee.depth,ae,C,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,J,$.width,$.height,ee.depth,0,ae,C,$.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ce&&me&&t.texStorage2D(i.TEXTURE_2D,et,J,pe[0].width,pe[0].height);for(let le=0,He=pe.length;le<He;le++)$=pe[le],v.format!==ei?ae!==null?ce?Oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,$.width,$.height,ae,$.data):t.compressedTexImage2D(i.TEXTURE_2D,le,J,$.width,$.height,0,$.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Oe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,$.width,$.height,ae,C,$.data):t.texImage2D(i.TEXTURE_2D,le,J,$.width,$.height,0,ae,C,$.data)}else if(v.isDataArrayTexture)if(ce){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,J,ee.width,ee.height,ee.depth),Oe)if(v.layerUpdates.size>0){let le=Nu(ee.width,ee.height,v.format,v.type);for(let He of v.layerUpdates){let $e=ee.data.subarray(He*le/ee.data.BYTES_PER_ELEMENT,(He+1)*le/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,He,ee.width,ee.height,1,ae,C,$e)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ae,C,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,ee.width,ee.height,ee.depth,0,ae,C,ee.data);else if(v.isData3DTexture)ce?(me&&t.texStorage3D(i.TEXTURE_3D,et,J,ee.width,ee.height,ee.depth),Oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ae,C,ee.data)):t.texImage3D(i.TEXTURE_3D,0,J,ee.width,ee.height,ee.depth,0,ae,C,ee.data);else if(v.isFramebufferTexture){if(me)if(ce)t.texStorage2D(i.TEXTURE_2D,et,J,ee.width,ee.height);else{let le=ee.width,He=ee.height;for(let $e=0;$e<et;$e++)t.texImage2D(i.TEXTURE_2D,$e,J,le,He,0,ae,C,null),le>>=1,He>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ee.parentNode!==le){le.appendChild(ee),p.add(v),le.onpaint=He=>{let $e=He.changedElements;for(let ye of p)$e.includes(ye.image)&&(ye.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let $e=i.RGBA,ye=i.RGBA,pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,$e,ye,pt,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pe.length>0){if(ce&&me){let le=Ye(pe[0]);t.texStorage2D(i.TEXTURE_2D,et,J,le.width,le.height)}for(let le=0,He=pe.length;le<He;le++)$=pe[le],ce?Oe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ae,C,$):t.texImage2D(i.TEXTURE_2D,le,J,ae,C,$);v.generateMipmaps=!1}else if(ce){if(me){let le=Ye(ee);t.texStorage2D(i.TEXTURE_2D,et,J,le.width,le.height)}Oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,C,ee)}else t.texImage2D(i.TEXTURE_2D,0,J,ae,C,ee);w(v)&&v.mipmapsAutoUpdate===!0&&S(oe),fe.__version=de.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function sn(T,v,z){if(v.image.length!==6)return;let oe=ft(T,v),te=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let de=n.get(te);if(te.version!==de.__version||oe===!0){t.activeTexture(i.TEXTURE0+z);let fe=lt.getPrimaries(lt.workingColorSpace),Q=v.colorSpace===Ii?null:lt.getPrimaries(v.colorSpace),ee=v.colorSpace===Ii||fe===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ae=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,J=[];for(let ye=0;ye<6;ye++)!ae&&!C?J[ye]=M(v.image[ye],!0,s.maxCubemapSize):J[ye]=C?v.image[ye].image:v.image[ye],J[ye]=ze(v,J[ye]);let $=J[0],pe=r.convert(v.format,v.colorSpace),ce=r.convert(v.type),me=E(v.internalFormat,pe,ce,v.normalized,v.colorSpace),Oe=v.isVideoTexture!==!0,et=de.__version===void 0||oe===!0,le=te.dataReady,He=b(v,$);ct(i.TEXTURE_CUBE_MAP,v);let $e;if(v.isDepthTexture){if(me=g(v.format===Pi,v.type),et)if(Oe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,me,$.width,$.height);else for(let ye=0;ye<6;ye++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,$.width,$.height,0,pe,ce,null)}else if(ae){Oe&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,me,$.width,$.height);for(let ye=0;ye<6;ye++){$e=J[ye].mipmaps;for(let pt=0;pt<$e.length;pt++){let bt=$e[pt];v.format!==ei?pe!==null?Oe?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt,0,0,bt.width,bt.height,pe,bt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt,me,bt.width,bt.height,0,bt.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt,0,0,bt.width,bt.height,pe,ce,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt,me,bt.width,bt.height,0,pe,ce,bt.data)}}}else{if($e=v.mipmaps,Oe&&et){$e.length>0&&He++;let ye=Ye(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,me,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(C){Oe?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,J[ye].width,J[ye].height,pe,ce,J[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,J[ye].width,J[ye].height,0,pe,ce,J[ye].data);for(let pt=0;pt<$e.length;pt++){let Vt=$e[pt].image[ye].image;Oe?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt+1,0,0,Vt.width,Vt.height,pe,ce,Vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt+1,me,Vt.width,Vt.height,0,pe,ce,Vt.data)}}else{Oe?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,pe,ce,J[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,pe,ce,J[ye]);for(let pt=0;pt<$e.length;pt++){let bt=$e[pt];Oe?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt+1,0,0,pe,ce,bt.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,pt+1,me,pe,ce,bt.image[ye])}}}w(v)&&v.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),de.__version=te.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Tt(T,v,z,oe,te,de){let fe=r.convert(z.format,z.colorSpace),Q=r.convert(z.type),ee=E(z.internalFormat,fe,Q,z.normalized,z.colorSpace),ae=n.get(v),C=n.get(z);if(C.__renderTarget=v,!ae.__hasExternalTextures){let J=Math.max(1,v.width>>de),$=Math.max(1,v.height>>de);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,de,ee,J,$,v.depth,0,fe,Q,null):t.texImage2D(te,de,ee,J,$,0,fe,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,te,C.__webglTexture,0,gt(v)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,te,C.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(T,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){let oe=v.depthTexture,te=oe&&oe.isDepthTexture?oe.type:null,de=g(v.stencilBuffer,te),fe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(v),de,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(v),de,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,de,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,T)}else{let oe=v.textures;for(let te=0;te<oe.length;te++){let de=oe[te],fe=r.convert(de.format,de.colorSpace),Q=r.convert(de.type),ee=E(de.internalFormat,fe,Q,de.normalized,de.colorSpace);ge(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(v),ee,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(v),ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ee,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(T,v,z){let oe=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(v.depthTexture);te.__renderTarget=v;let de=oe?v.depthTexture.image[0]:v.depthTexture.image;(!te.__webglTexture||de.width!==v.width||de.height!==v.height)&&(de.width=v.width,de.height=v.height,v.depthTexture.needsUpdate=!0),oe?ve(v.depthTexture,0):Se(v.depthTexture,0);let fe=te.__webglTexture,Q=gt(v),ee=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ae=v.depthTexture.format===Pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===bi)ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ee,fe,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ae,ee,fe,0);else if(v.depthTexture.format===Pi)ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ee,fe,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ae,ee,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rn(T){let v=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let oe=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),oe){let te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,oe.removeEventListener("dispose",te)};oe.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=oe}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let oe=0;oe<6;oe++)Dt(v.__webglFramebuffer[oe],T,oe);else T.texture.mipmaps.length>0?Dt(v.__webglFramebuffer[0],T,0):Dt(v.__webglFramebuffer,T,0);else if(z){v.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[oe]),v.__webglDepthbuffer[oe]===void 0)v.__webglDepthbuffer[oe]=i.createRenderbuffer(),kt(v.__webglDepthbuffer[oe],T,!1);else{let te=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,de)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),kt(v.__webglDepthbuffer,T,!1);else{let te=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function hn(T,v,z){let oe=n.get(T);v!==void 0&&Tt(oe.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&rn(T)}function on(T){let v=T.texture,z=n.get(T),oe=n.get(v);T.addEventListener("dispose",k),N(T);let te=T.textures,de=T.isWebGLCubeRenderTarget===!0,fe=te.length>1;if(fe||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=v.version,o.memory.textures++),de){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let ee=0;ee<v.mipmaps.length;ee++)z.__webglFramebuffer[Q][ee]=i.createFramebuffer()}else z.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(v.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)z.__webglFramebuffer[Q]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(fe)for(let Q=0,ee=te.length;Q<ee;Q++){let ae=n.get(te[Q]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ge(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<te.length;Q++){let ee=te[Q];z.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let ae=r.convert(ee.format,ee.colorSpace),C=r.convert(ee.type),J=E(ee.internalFormat,ae,C,ee.normalized,ee.colorSpace,T.isXRRenderTarget===!0),$=gt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,J,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),ct(i.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Tt(z.__webglFramebuffer[Q][ee],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else Tt(z.__webglFramebuffer[Q],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);w(v)?S(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Q=0,ee=te.length;Q<ee;Q++){let ae=te[Q],C=n.get(ae),J=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,C.__webglTexture),ct(J,ae),Tt(z.__webglFramebuffer,T,ae,i.COLOR_ATTACHMENT0+Q,J,0),w(ae)&&S(J)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,oe.__webglTexture),ct(Q,v),v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Tt(z.__webglFramebuffer[ee],T,v,i.COLOR_ATTACHMENT0,Q,ee);else Tt(z.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,Q,0);w(v)?S(Q):v.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&rn(T)}function U(T){let v=T.textures;for(let z=0,oe=v.length;z<oe;z++){let te=v[z];if(w(te)&&te.mipmapsAutoUpdate===!0){let de=A(T),fe=n.get(te).__webglTexture;t.bindTexture(de,fe),S(de),t.unbindTexture()}}}let Gt=[];function yt(T){if(T.samples>0){if(ge(T)===!1){let v=T.textures,z=T.width,oe=T.height,te=i.COLOR_BUFFER_BIT,de=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(T),Q=v.length>1;if(Q)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ae]);let C=n.get(v[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,z,oe,0,0,z,oe,te,i.NEAREST),l===!0&&(Gt.length=0,Gt.push(i.COLOR_ATTACHMENT0+ae),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Gt.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ae]);let C=n.get(v[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function gt(T){return Math.min(s.maxSamples,T.samples)}function ge(T){let v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function St(T){let v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function ze(T,v){let z=T.colorSpace,oe=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==qr&&z!==Ii&&(lt.getTransfer(z)===mt?(oe!==ei||te!==Nn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",z)),v}function Ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=qe,this.resetTextureUnits=ne,this.getTextureUnits=ie,this.setTextureUnits=De,this.setTexture2D=Se,this.setTexture2DArray=Re,this.setTexture3D=ke,this.setTextureCube=ve,this.rebindTextures=hn,this.setupRenderTarget=on,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=rn,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=ge,this.dispose=W}function px(i,e){function t(n,s=Ii){let r,o=lt.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mu)return i.BYTE;if(n===gu)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===xu)return i.ALPHA;if(n===yu)return i.RGB;if(n===ei)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===ns)return i.RG;if(n===hl)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===So||n===bo||n===Eo||n===To)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===vl||n===xl||n===yl||n===Ml||n===wo||n===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===vl)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yl)return r.COMPRESSED_R11_EAC;if(n===Ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wo)return r.COMPRESSED_RG11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bl||n===El||n===Tl||n===wl||n===Al||n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Nl||n===Dl||n===Ul||n===Fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ul)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ol||n===Bl||n===kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ol)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===Hl||n===Ao||n===Gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function vx(i,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Pu(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,M,w,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),u(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),h(f,d),d.isMeshPhysicalMaterial&&m(f,d,S)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),x(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,M,w):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===an&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===an&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let M=e.get(d),w=M.envMap,S=M.envMapRotation;w&&(f.envMap.value=w,f.envMapRotation.value.setFromMatrix4(_x.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Df),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,M,w){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*M,f.scale.value=w*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function h(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,M){f.ior.value=d.ior,d.diffuseRoughness>0&&(f.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function x(f,d){let M=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xx(i,e,t,n){let s={},r={};function o(M,w){let S=w.program;n.uniformBlockBinding(M,S,s[M.id])}function a(M,w){let S=s[M.id];S===void 0&&(_(M),S=l(M),s[M.id]=S,M.addEventListener("dispose",f));let A=w.program;n.updateUBOMapping(M,A);let E=e.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){let w=i.createBuffer(),S=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(M){let w=s[M.id],S=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,g=S.length;E<g;E++){let b=S[E];if(Array.isArray(b))for(let N=0,R=b.length;N<R;N++)u(b[N],E,N,A);else u(b,E,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,w,S,A){if(h(M,w,S,A)===!0){let E=M.__offset,g=M.value;if(Array.isArray(g)){let b=0;for(let N=0;N<g.length;N++){let R=g[N],D=x(R,!0);p(R,M.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function p(M,w,S){typeof M=="number"||typeof M=="boolean"?w[S]=M:M.isMatrix3?(w[S]=M.elements[0],w[S+1]=M.elements[1],w[S+2]=M.elements[2],w[S+3]=0,w[S+4]=M.elements[3],w[S+5]=M.elements[4],w[S+6]=M.elements[5],w[S+7]=0,w[S+8]=M.elements[6],w[S+9]=M.elements[7],w[S+10]=M.elements[8],w[S+11]=0):ArrayBuffer.isView(M)?w.set(M.subarray(0,w.length-S),S):M.toArray(w,S)}function h(M,w,S,A){let E=M.value,g=w+"_"+S;if(Array.isArray(E)){A[g]===void 0&&(A[g]=[]);let b=A[g],N=!1;for(let R=0;R<E.length;R++)m(E[R],b,R)===!0&&(N=!0);return N}return m(E,A,g)}function m(M,w,S){if(w[S]===void 0)return typeof M=="number"||typeof M=="boolean"?w[S]=M:ArrayBuffer.isView(M)?w[S]=M.slice():w[S]=M.clone(),!0;{let A=w[S];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return w[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function _(M){let w=M.uniforms,S=0,A=16;for(let g=0,b=w.length;g<b;g++){let N=Array.isArray(w[g])?w[g]:[w[g]];for(let R=0,D=N.length;R<D;R++){let k=N[R],X=Array.isArray(k.value)?k.value:[k.value],P=Array.isArray(w[g])||Array.isArray(k.value),W=S;for(let q=0,re=X.length;q<re;q++){let Y=X[q],ne=x(Y,P),ie=S%A,De=ie%ne.boundary,qe=ie+De;S+=De,qe!==0&&A-qe<ne.storage&&(S+=A-qe),q===0&&(W=S),S+=ne.storage}let Z=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new Z((S-W)/Float32Array.BYTES_PER_ELEMENT),k.__offset=W}}let E=S%A;return E>0&&(S+=A-E),M.__size=S,M.__cache={},this}function x(M,w){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):We("WebGLRenderer: Unsupported uniform value type.",M),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function f(M){let w=M.target;w.removeEventListener("dispose",f),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:d}}function Mx(){return ci===null&&(ci=new eo(yx,16,16,ns,ln),ci.name="DFG_LUT",ci.minFilter=Sn,ci.magFilter=Sn,ci.wrapS=si,ci.wrapT=si,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var Bm,km,zm,Hm,Gm,Vm,Wm,Xm,qm,Ym,$m,Zm,Km,Jm,Qm,jm,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,ug,hg,dg,fg,pg,mg,gg,_g,vg,xg,yg,Mg,Sg,bg,Eg,Tg,wg,Ag,Cg,Rg,Pg,Ig,Lg,Ng,Dg,Ug,Fg,Og,Bg,kg,zg,Hg,Gg,Vg,Wg,Xg,qg,Yg,$g,Zg,Kg,Jg,Qg,jg,e0,t0,n0,i0,s0,r0,o0,a0,l0,c0,u0,h0,d0,f0,p0,m0,g0,_0,v0,x0,y0,M0,S0,b0,E0,T0,w0,A0,C0,R0,P0,I0,L0,N0,D0,U0,F0,O0,B0,k0,z0,H0,G0,V0,W0,X0,q0,Y0,$0,Z0,K0,J0,Q0,j0,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,u_,h_,d_,f_,p_,m_,g_,st,Ae,ui,Wl,__,Tf,Io,nf,b_,E_,wf,Af,T_,w_,A_,ql,B_,Cf,Rf,Pf,If,Lf,Nf,af,lf,cf,uf,hf,Gu,Vu,Wu,zu,pr,Av,Cv,pf,Lv,Xl,Bv,zv,Gv,Wv,qv,Zv,qu,Yu,ix,ax,lx,cx,ux,bf,Ro,Hu,mx,gx,$u,Zu,_x,Df,yx,ci,Yl,Ni=en(()=>{ku();ku();Bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
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
#endif`,zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
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
#endif`,Xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
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
#endif`,Ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Km=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jm=`#ifdef USE_IRIDESCENCE
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
#endif`,Qm=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ag=`#define PI 3.141592653589793
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
} // validated`,lg=`vec3 transformedNormal = objectNormal;
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
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
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
}`,Tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dg=`PhysicalMaterial material;
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
#endif`,Ug=`uniform sampler2D dfgLUT;
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
}`,Fg=`
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yg=`#if defined( USE_POINTS_UV )
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
#endif`,$g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
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
#endif`,a0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S0=`float getShadowMask() {
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
}`,b0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform float backgroundBlurriness;
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,X0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`uniform float scale;
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
}`,K0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,Q0=`uniform vec3 diffuse;
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
}`,j0=`#define LAMBERT
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
}`,e_=`#define LAMBERT
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
}`,t_=`#define MATCAP
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
}`,n_=`#define MATCAP
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
}`,i_=`#define NORMAL
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
}`,s_=`#define NORMAL
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
}`,r_=`#define PHONG
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
}`,o_=`#define PHONG
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
}`,a_=`#define STANDARD
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
}`,l_=`#define STANDARD
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
}`,c_=`#define TOON
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
}`,u_=`#define TOON
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
}`,h_=`uniform float size;
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,p_=`uniform vec3 color;
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
}`,m_=`uniform float rotation;
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
}`,g_=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Bm,alphahash_pars_fragment:km,alphamap_fragment:zm,alphamap_pars_fragment:Hm,alphatest_fragment:Gm,alphatest_pars_fragment:Vm,aomap_fragment:Wm,aomap_pars_fragment:Xm,batching_pars_vertex:qm,batching_vertex:Ym,begin_vertex:$m,beginnormal_vertex:Zm,bsdfs:Km,iridescence_fragment:Jm,bumpmap_pars_fragment:Qm,clipping_planes_fragment:jm,clipping_planes_pars_fragment:eg,clipping_planes_pars_vertex:tg,clipping_planes_vertex:ng,color_fragment:ig,color_pars_fragment:sg,color_pars_vertex:rg,color_vertex:og,common:ag,defaultnormal_vertex:lg,displacementmap_pars_vertex:cg,displacementmap_vertex:ug,emissivemap_fragment:hg,emissivemap_pars_fragment:dg,colorspace_fragment:fg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:_g,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Rg,envmap_vertex:xg,fog_vertex:yg,fog_pars_vertex:Mg,fog_fragment:Sg,fog_pars_fragment:bg,gradientmap_pars_fragment:Eg,lightmap_pars_fragment:Tg,lights_lambert_fragment:wg,lights_lambert_pars_fragment:Ag,lights_pars_begin:Cg,lights_toon_fragment:Pg,lights_toon_pars_fragment:Ig,lights_phong_fragment:Lg,lights_phong_pars_fragment:Ng,lights_physical_fragment:Dg,lights_physical_pars_fragment:Ug,lights_fragment_begin:Fg,lights_fragment_maps:Og,lights_fragment_end:Bg,lightprobes_pars_fragment:kg,logdepthbuf_fragment:zg,logdepthbuf_pars_fragment:Hg,logdepthbuf_pars_vertex:Gg,logdepthbuf_vertex:Vg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:Yg,metalnessmap_fragment:$g,metalnessmap_pars_fragment:Zg,morphinstance_vertex:Kg,morphcolor_vertex:Jg,morphnormal_vertex:Qg,morphtarget_pars_vertex:jg,morphtarget_vertex:e0,normal_fragment_begin:t0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:s0,normal_vertex:r0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:a0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:u0,opaque_fragment:h0,packing:d0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:y0,shadowmap_vertex:M0,shadowmask_pars_fragment:S0,skinbase_vertex:b0,skinning_pars_vertex:E0,skinning_vertex:T0,skinnormal_vertex:w0,specularmap_fragment:A0,specularmap_pars_fragment:C0,tonemapping_fragment:R0,tonemapping_pars_fragment:P0,transmission_fragment:I0,transmission_pars_fragment:L0,uv_pars_fragment:N0,uv_pars_vertex:D0,uv_vertex:U0,worldpos_vertex:F0,background_vert:O0,background_frag:B0,backgroundCube_vert:k0,backgroundCube_frag:z0,cube_vert:H0,cube_frag:G0,depth_vert:V0,depth_frag:W0,distance_vert:X0,distance_frag:q0,equirect_vert:Y0,equirect_frag:$0,linedashed_vert:Z0,linedashed_frag:K0,meshbasic_vert:J0,meshbasic_frag:Q0,meshlambert_vert:j0,meshlambert_frag:e_,meshmatcap_vert:t_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:s_,meshphong_vert:r_,meshphong_frag:o_,meshphysical_vert:a_,meshphysical_frag:l_,meshtoon_vert:c_,meshtoon_frag:u_,points_vert:h_,points_frag:d_,shadow_vert:f_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},Ae={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ui={basic:{uniforms:mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:mn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:mn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:mn([Ae.points,Ae.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:mn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:mn([Ae.common,Ae.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:mn([Ae.sprite,Ae.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:mn([Ae.common,Ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:mn([Ae.lights,Ae.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ui.physical={uniforms:mn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};Wl={r:0,b:0,g:0},__=new _t,Tf=new Je;Tf.set(-1,0,0,0,1,0,0,0,1);Io=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new io(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rr(5,5,5),r=new ht({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Ci});r.uniforms.tEquirect.value=t;let o=new vt(s,r),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Sn),new lr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},nf=256,b_=3,E_=20,wf=256,Af=16,T_=3,w_=new B,A_=new je,ql=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lr(1,10,null),this._boxMesh=new vt(new rr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=w_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,h=l.autoClearColor,m=l.autoClearDepth,_=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(A_));let f=new lr(n,s,u);return f.position.copy(a),f.update(l,e),l.autoClear=p,l.autoClearColor=h,l.autoClearDepth=m,l.autoClearStencil=_,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(nf,Cu(e))}_fromTexture(e,t){e.mapping===Ss||e.mapping===hr?this._setSize(e.image.length===0?nf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=sf(e,!1,!1),n=Math.log2(e)-b_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=sf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ss||e.mapping===hr?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=C_(),this._integrationMaterial=R_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Af);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-T_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(wf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=P_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};B_={[po]:"LINEAR_TONE_MAPPING",[mo]:"REINHARD_TONE_MAPPING",[go]:"CINEON_TONE_MAPPING",[_o]:"ACES_FILMIC_TONE_MAPPING",[xo]:"AGX_TONE_MAPPING",[yo]:"NEUTRAL_TONE_MAPPING",[vo]:"CUSTOM_TONE_MAPPING"};Cf=new wn,Rf=new Ai(1,1),Pf=new so(1),If=new Kr,Lf=new Fa,Nf=new io,af=[],lf=[],cf=new Float32Array(16),uf=new Float32Array(9),hf=new Float32Array(4);Gu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rv(t.type)}},Vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tv(t.type)}},Wu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},zu=/(\w+)(\])?(\[|\.)?/g;pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);wv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};Av=37297,Cv=0;pf=new Je;Lv={[po]:"Linear",[mo]:"Reinhard",[go]:"Cineon",[_o]:"ACESFilmic",[xo]:"AgX",[yo]:"Neutral",[vo]:"Custom"};Xl=new B;Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Gv={[fo]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};Wv={[hr]:"ENVMAP_MODE_REFRACTION"};qv={[fu]:"ENVMAP_BLENDING_MULTIPLY",[Ud]:"ENVMAP_BLENDING_MIX",[Fd]:"ENVMAP_BLENDING_ADD"};Zv=0,qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yu(e),t.set(e,n)),n}},Yu=class{constructor(e){this.id=Zv++,this.code=e,this.usedTimes=0}};ix=0;ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
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
}`,cx=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],ux=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],bf=new _t,Ro=new B,Hu=new B;mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gx=`
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

}`,$u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ro(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ht({vertexShader:mx,fragmentShader:gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zu=class extends ri{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,h=null,m=null,_=null,x=typeof XRWebGLBinding<"u",f=new $u,d={},M=t.getContextAttributes(),w=null,S=null,A=[],E=[],g=new Xe,b=null,N=null,R=new Mn;R.viewport=new It;let D=new Mn;D.viewport=new It;let k=[R,D],X=new tl,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Se=A[j];return Se===void 0&&(Se=new ir,A[j]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(j){let Se=A[j];return Se===void 0&&(Se=new ir,A[j]=Se),Se.getGripSpace()},this.getHand=function(j){let Se=A[j];return Se===void 0&&(Se=new ir,A[j]=Se),Se.getHandSpace()};function Z(j){let Se=E.indexOf(j.inputSource);if(Se===-1)return;let Re=A[Se];Re!==void 0&&(Re.update(j.inputSource,j.frame,c||o),Re.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",re);for(let j=0;j<A.length;j++){let Se=E[j];Se!==null&&(E[j]=null,A[j].disconnect(Se))}P=null,W=null,f.reset();for(let j in d)delete d[j];if(e.setRenderTarget(w),m=null,h=null,p=null,s=null,S=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(g.width,g.height,!1),N!==null){let j=N.camera;j.fov=N.fov,j.zoom=N.zoom,j.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",re),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(g),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,ke=null,ve=null;M.depth&&(ve=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=M.stencil?Pi:bi,ke=M.stencil?bs:jn);let Ke={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Xt(h.textureWidth,h.textureHeight,{format:ei,type:Nn,depthTexture:new Ai(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Xt(m.framebufferWidth,m.framebufferHeight,{format:ei,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function re(j){for(let Se=0;Se<j.removed.length;Se++){let Re=j.removed[Se],ke=E.indexOf(Re);ke>=0&&(E[ke]=null,A[ke].disconnect(Re))}for(let Se=0;Se<j.added.length;Se++){let Re=j.added[Se],ke=E.indexOf(Re);if(ke===-1){for(let Ke=0;Ke<A.length;Ke++)if(Ke>=E.length){E.push(Re),ke=Ke;break}else if(E[Ke]===null){E[Ke]=Re,ke=Ke;break}if(ke===-1)break}let ve=A[ke];ve&&ve.connect(Re)}}function Y(j,Se){Se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Se=j.near,Re=j.far;f.texture!==null&&(f.depthNear>0&&(Se=f.depthNear),f.depthFar>0&&(Re=f.depthFar)),X.near=D.near=R.near=Se,X.far=D.far=R.far=Re,(P!==X.near||W!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),P=X.near,W=X.far),X.layers.mask=j.layers.mask|6,R.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let ke=j.parent,ve=X.cameras;Y(X,ke);for(let Ke=0;Ke<ve.length;Ke++)Y(ve[Ke],ke);X.projectionMatrix.copy(R.projectionMatrix),X.projectionMatrixInverse.copy(R.projectionMatrixInverse),N===null&&j.isPerspectiveCamera&&(N={camera:j,fov:j.fov,zoom:j.zoom}),ne(j,X,ke)};function ne(j,Se,Re){Re===null?j.matrix.copy(Se.matrixWorld):(j.matrix.copy(Re.matrixWorld),j.matrix.invert(),j.matrix.multiply(Se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Se.projectionMatrix),j.projectionMatrixInverse.copy(Se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=er*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(X)},this.getCameraTexture=function(j){return d[j]};let ie=null;function De(j,Se){if(u=Se.getViewerPose(c||o),_=Se,u!==null){let Re=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let ke=!1;Re.length!==X.cameras.length&&(X.cameras.length=0,ke=!0);for(let Ge=0;Ge<Re.length;Ge++){let ct=Re[Ge],ft=null;if(m!==null)ft=m.getViewport(ct);else{let Rt=p.getViewSubImage(h,ct);ft=Rt.viewport,Ge===0&&(e.setRenderTargetTextures(S,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(S))}let it=k[Ge];it===void 0&&(it=new Mn,it.layers.enable(Ge),it.viewport=new It,k[Ge]=it),it.matrix.fromArray(ct.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ct.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ft.x,ft.y,ft.width,ft.height),Ge===0&&(X.matrix.copy(it.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ke===!0&&X.cameras.push(it)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=n.getBinding();let Ge=p.getDepthInformation(Re[0]);Ge&&Ge.isValid&&Ge.texture&&f.init(Ge,s.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),p=n.getBinding();for(let Ge=0;Ge<Re.length;Ge++){let ct=Re[Ge].camera;if(ct){let ft=d[ct];ft||(ft=new ro,d[ct]=ft);let it=p.getCameraImage(ct);ft.sourceTexture=it}}}}for(let Re=0;Re<A.length;Re++){let ke=E[Re],ve=A[Re];ke!==null&&ve!==void 0&&ve.update(ke,Se,c||o)}ie&&ie(j,Se),Se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Se}),_=null}let qe=new Ef;qe.setAnimationLoop(De),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}},_x=new _t,Df=new Je;Df.set(-1,0,0,0,1,0,0,0,1);yx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;Yl=class{constructor(e={}){let{canvas:t=Yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Nn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let x=m,f=new Set([dl,hl,ul]),d=new Set([Nn,jn,dr,bs,al,ll]),M=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,E=null,g=[],b=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,k=null,X=null,P=null,W=null;this._outputColorSpace=yn;let Z=0,q=0,re=null,Y=-1,ne=null,ie=new It,De=new It,qe=null,j=new je(0),Se=0,Re=t.width,ke=t.height,ve=1,Ke=null,Ct=null,Ge=new It(0,0,Re,ke),ct=new It(0,0,Re,ke),ft=!1,it=new xs,Rt=new Oa,Ft=!1,sn=!1,Tt=new _t,kt=new B,Dt=new It,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},hn=!1;function on(){return re===null?ve:1}let U=n;function Gt(y,I){return t.getContext(y,I)}let yt,gt,ge,St,ze,Ye,T,v,z,oe,te,de,fe,Q,ee,ae,C,J,$,pe,ce,me,Oe;try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",ye,!1),U===null){let I="webgl2";if(U=Gt(I,y),U===null)throw Gt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(y){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ze("WebGLRenderer: "+y.message),y}function et(){yt=new L_(U),yt.init(),ce=new px(U,yt),gt=new M_(U,yt,e,ce),ge=new dx(U,yt),gt.reversedDepthBuffer&&h&&ge.buffers.depth.setReversed(!0),X=U.createFramebuffer(),P=U.createFramebuffer(),W=U.createFramebuffer(),St=new U_(U),ze=new Qv,Ye=new fx(U,yt,ge,ze,gt,ce,St),T=new I_(R),v=new Om(U),me=new x_(U,v),z=new N_(U,v,St,me),oe=new O_(U,z,v,me,St),J=new F_(U,gt,Ye),ee=new S_(ze),te=new Jv(R,T,yt,gt,me,ee),de=new vx(R,ze),fe=new ex,Q=new ox(yt),C=new v_(R,T,ge,oe,_,l),ae=new hx(R,oe,gt),Oe=new xx(U,St,gt,ge),$=new y_(U,yt,St),pe=new D_(U,yt,St),St.programs=te.programs,R.capabilities=gt,R.extensions=yt,R.properties=ze,R.renderLists=fe,R.shadowMap=ae,R.state=ge,R.info=St}x!==Nn&&(N=new k_(x,t.width,t.height,a,s,r));let le=new Zu(R,U);this.xr=le,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=yt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=yt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(y){y!==void 0&&(ve=y,this.setSize(Re,ke,!1))},this.getSize=function(y){return y.set(Re,ke)},this.setSize=function(y,I,V=!0){if(le.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=y,ke=I,t.width=Math.floor(y*ve),t.height=Math.floor(I*ve),V===!0&&(t.style.width=y+"px",t.style.height=I+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(Re*ve,ke*ve).floor()},this.setDrawingBufferSize=function(y,I,V){Re=y,ke=I,ve=V,t.width=Math.floor(y*V),t.height=Math.floor(I*V),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(x===Nn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ie)},this.getViewport=function(y){return y.copy(Ge)},this.setViewport=function(y,I,V,H){y.isVector4?Ge.set(y.x,y.y,y.z,y.w):Ge.set(y,I,V,H),ge.viewport(ie.copy(Ge).multiplyScalar(on()).round())},this.getScissor=function(y){return y.copy(ct)},this.setScissor=function(y,I,V,H){y.isVector4?ct.set(y.x,y.y,y.z,y.w):ct.set(y,I,V,H),ge.scissor(De.copy(ct).multiplyScalar(on()).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(y){ge.setScissorTest(ft=y)},this.setOpaqueSort=function(y){Ke=y},this.setTransparentSort=function(y){Ct=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,V=!0){let H=0;if(y){let G=!1;if(re!==null){let xe=re.texture.format;G=f.has(xe)}if(G){let xe=re.texture.type,Pe=d.has(xe),_e=C.getClearColor(),be=C.getClearAlpha(),Te=_e.r,Ve=_e.g,tt=_e.b;Pe?(M[0]=Te,M[1]=Ve,M[2]=tt,M[3]=be,U.clearBufferuiv(U.COLOR,0,M)):(w[0]=Te,w[1]=Ve,w[2]=tt,w[3]=be,U.clearBufferiv(U.COLOR,0,w))}else H|=U.COLOR_BUFFER_BIT}I&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),k=y},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),C.dispose(),fe.dispose(),Q.dispose(),Ye.dispose(),ze.dispose(),T.dispose(),oe.dispose(),z.dispose(),me.dispose(),Oe.dispose(),te.dispose(),le.dispose(),le.removeEventListener("sessionstart",mi),le.removeEventListener("sessionend",Cn),Jt.stop()};function He(y){y.preventDefault(),wu("WebGLRenderer: Context Lost."),D=!0}function $e(){wu("WebGLRenderer: Context Restored."),D=!1;let y=St.autoReset,I=ae.enabled,V=ae.autoUpdate,H=ae.needsUpdate,G=ae.type;et(),St.autoReset=y,ae.enabled=I,ae.autoUpdate=V,ae.needsUpdate=H,ae.type=G}function ye(y){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function pt(y){let I=y.target;I.removeEventListener("dispose",pt),bt(I)}function bt(y){Vt(y),ze.remove(y)}function Vt(y){let I=ze.get(y).programs;I!==void 0&&(I.forEach(function(V){te.releaseProgram(V)}),y.isShaderMaterial&&te.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,V,H,G,xe){I===null&&(I=rn);let Pe=G.isMesh&&G.matrixWorld.determinantAffine()<0,_e=$o(y,I,V,H,G);ge.setMaterial(H,Pe);let be=V.index,Te=1;if(H.wireframe===!0){if(be=z.getWireframeAttribute(V),be===void 0)return;Te=2}let Ve=V.drawRange,tt=V.attributes.position,Ie=Ve.start*Te,at=(Ve.start+Ve.count)*Te;xe!==null&&(Ie=Math.max(Ie,xe.start*Te),at=Math.min(at,(xe.start+xe.count)*Te)),be!==null?(Ie=Math.max(Ie,0),at=Math.min(at,be.count)):tt!=null&&(Ie=Math.max(Ie,0),at=Math.min(at,tt.count));let wt=at-Ie;if(wt<0||wt===1/0)return;me.setup(G,H,_e,V,be);let ot,nt=$;if(be!==null&&(ot=v.get(be),nt=pe,nt.setIndex(ot)),G.isMesh)H.wireframe===!0?(ge.setLineWidth(H.wireframeLinewidth*on()),nt.setMode(U.LINES)):nt.setMode(U.TRIANGLES);else if(G.isLine){let Ot=H.linewidth;Ot===void 0&&(Ot=1),ge.setLineWidth(Ot*on()),G.isLineSegments?nt.setMode(U.LINES):G.isLineLoop?nt.setMode(U.LINE_LOOP):nt.setMode(U.LINE_STRIP)}else G.isPoints?nt.setMode(U.POINTS):G.isSprite&&nt.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(yt.get("WEBGL_multi_draw"))nt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ot=G._multiDrawStarts,Ce=G._multiDrawCounts,Qt=G._multiDrawCount,dt=be?v.get(be).bytesPerElement:1,Tn=ze.get(H).currentProgram.getUniforms();for(let Pt=0;Pt<Qt;Pt++)Tn.setValue(U,"_gl_DrawID",Pt),nt.render(Ot[Pt]/dt,Ce[Pt])}else if(G.isInstancedMesh)nt.renderInstances(Ie,wt,G.count);else if(V.isInstancedBufferGeometry){let Ot=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ce=Math.min(V.instanceCount,Ot);nt.renderInstances(Ie,wt,Ce)}else nt.render(Ie,wt)};function Wo(y,I,V,H){k!==null&&y.isNodeMaterial&&k.setObject(H,y),Ft===!0&&ee.setState(y,V,!1),y.transparent===!0&&y.side===bn&&y.forceSinglePass===!1?(y.side=an,y.needsUpdate=!0,Gi(y,I,H),y.side=ts,y.needsUpdate=!0,Gi(y,I,H),y.side=bn):Gi(y,I,H)}this.compile=function(y,I,V=null){V===null&&(V=y),k!==null&&k.renderStart(y,I,V),E=Q.get(V),E.init(I),b.push(E),V.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),y!==V&&y.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),k!==null&&k.updateLights(E.state.lightsArray),sn=this.localClippingEnabled,Ft=ee.init(this.clippingPlanes,sn),Ft===!0&&ee.setGlobalState(this.clippingPlanes,I),k!==null&&ae.render(E.state.shadowsArray,V,I);let H=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let xe=G.material;if(xe)if(Array.isArray(xe))for(let Pe=0;Pe<xe.length;Pe++){let _e=xe[Pe];Wo(_e,V,I,G),H.add(_e)}else Wo(xe,V,I,G),H.add(xe)}),E=b.pop(),k!==null&&k.renderEnd(),H},this.compileAsync=function(y,I,V=null){let H=this.compile(y,I,V);return new Promise(G=>{function xe(){if(H.forEach(function(Pe){let be=ze.get(Pe).currentProgram;(be===void 0||be.isReady())&&H.delete(Pe)}),H.size===0){G(y);return}setTimeout(xe,10)}yt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Hi=null;function Ds(y){Hi&&Hi(y)}function mi(){Jt.stop()}function Cn(){Jt.start()}let Jt=new Ef;Jt.setAnimationLoop(Ds),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(y){Hi=y,le.setAnimationLoop(y),y===null?Jt.stop():Jt.start()},le.addEventListener("sessionstart",mi),le.addEventListener("sessionend",Cn),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(y,I);let V=le.enabled===!0&&le.isPresenting===!0,H=N!==null&&(re===null||V)&&N.begin(R,re);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(I),I=le.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,I,re),E=Q.get(y,b.length),E.init(I),E.state.textureUnits=Ye.getTextureUnits(),b.push(E),Tt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Rt.setFromArrayCamera(I):it.setFromProjectionMatrix(Tt,zn,I.reversedDepth),sn=this.localClippingEnabled,Ft=ee.init(this.clippingPlanes,sn),A=fe.get(y,g.length),A.init(),g.push(A),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Pe=R.xr.getDepthSensingMesh();Pe!==null&&Wn(Pe,I,-1/0,R.sortObjects)}Wn(y,I,0,R.sortObjects),A.finish(),k!==null&&k.updateLights(E.state.lightsArray),R.sortObjects===!0&&A.sort(Ke,Ct),hn=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,hn&&C.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),Ft===!0&&ee.beginShadows();let G=E.state.shadowsArray;if(ae.render(G,y,I),Ft===!0&&ee.endShadows(),(H&&N.hasRenderPass())===!1){let Pe=A.opaque,_e=A.transmissive;if(E.setupLights(),I.isArrayCamera){let be=I.cameras;if(_e.length>0)for(let Te=0,Ve=be.length;Te<Ve;Te++){let tt=be[Te];Xn(Pe,_e,y,tt)}hn&&C.render(y);for(let Te=0,Ve=be.length;Te<Ve;Te++){let tt=be[Te];Us(A,y,tt,tt.viewport)}}else _e.length>0&&Xn(Pe,_e,y,I),hn&&C.render(y),Us(A,y,I)}re!==null&&q===0&&(Ye.updateMultisampleRenderTarget(re),Ye.updateRenderTargetMipmap(re)),H&&N.end(R),y.isScene===!0&&y.onAfterRender(R,y,I),me.resetDefaultState(),Y=-1,ne=null,b.pop(),b.length>0?(E=b[b.length-1],Ye.setTextureUnits(E.state.textureUnits),Ft===!0&&ee.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,k!==null&&k.renderEnd()};function Wn(y,I,V,H){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){let Pe=I.isArrayCamera?Rt:it;if(!y.frustumCulled||y.intersectsFrustum(Pe)){H&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Tt);let _e=oe.update(y),be=y.material;be.visible&&A.push(y,_e,be,V,Dt.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){let Pe=I.isArrayCamera?Rt:it;if(!y.frustumCulled||y.intersectsFrustum(Pe)){let _e=oe.update(y),be=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Dt.copy(_e.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(Tt)),Array.isArray(be)){let Te=_e.groups;for(let Ve=0,tt=Te.length;Ve<tt;Ve++){let Ie=Te[Ve],at=be[Ie.materialIndex];at&&at.visible&&A.push(y,_e,at,V,Dt.z,Ie,I)}}else be.visible&&A.push(y,_e,be,V,Dt.z,null,I)}}}let xe=y.children;for(let Pe=0,_e=xe.length;Pe<_e;Pe++)Wn(xe[Pe],I,V,H)}function Us(y,I,V,H){let{opaque:G,transmissive:xe,transparent:Pe}=y;E.setupLightsView(V),Ft===!0&&ee.setGlobalState(R.clippingPlanes,V),H&&ge.viewport(ie.copy(H)),G.length>0&&Fs(G,I,V),xe.length>0&&Fs(xe,I,V),Pe.length>0&&Fs(Pe,I,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Xn(y,I,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let Ie=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Xt(1,1,{generateMipmaps:!0,type:Ie?ln:Nn,minFilter:Ri,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let xe=E.state.transmissionRenderTarget[H.id],Pe=H.viewport||ie;xe.setSize(Pe.z*R.transmissionResolutionScale,Pe.w*R.transmissionResolutionScale);let _e=R.getRenderTarget(),be=R.getActiveCubeFace(),Te=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(j),Se=R.getClearAlpha(),Se<1&&R.setClearColor(16777215,.5),R.clear(),hn&&C.render(V);let Ve=R.toneMapping;R.toneMapping=li;let tt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),Ft===!0&&ee.setGlobalState(R.clippingPlanes,H),Fs(y,V,H),Ye.updateMultisampleRenderTarget(xe),Ye.updateRenderTargetMipmap(xe),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let at=0,wt=I.length;at<wt;at++){let ot=I[at],{object:nt,geometry:Ot,material:Ce,group:Qt}=ot;if(Ce.side===bn&&nt.layers.test(H.layers)){let dt=Ce.side;Ce.side=an,Ce.needsUpdate=!0,Lr(nt,V,H,Ot,Ce,Qt),Ce.side=dt,Ce.needsUpdate=!0,Ie=!0}}Ie===!0&&(Ye.updateMultisampleRenderTarget(xe),Ye.updateRenderTargetMipmap(xe))}R.setRenderTarget(_e,be,Te),R.setClearColor(j,Se),tt!==void 0&&(H.viewport=tt),R.toneMapping=Ve}function Fs(y,I,V){let H=I.isScene===!0?I.overrideMaterial:null;for(let G=0,xe=y.length;G<xe;G++){let Pe=y[G],{object:_e,geometry:be,group:Te}=Pe,Ve=Pe.material;Ve.allowOverride===!0&&H!==null&&(Ve=H),_e.layers.test(V.layers)&&Lr(_e,I,V,be,Ve,Te)}}function Lr(y,I,V,H,G,xe){k!==null&&G.isNodeMaterial&&k.setObject(y,G),y.onBeforeRender(R,I,V,H,G,xe),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(R,I,V,H,y,xe),G.transparent===!0&&G.side===bn&&G.forceSinglePass===!1?(G.side=an,G.needsUpdate=!0,R.renderBufferDirect(V,I,H,G,y,xe),G.side=ts,G.needsUpdate=!0,R.renderBufferDirect(V,I,H,G,y,xe),G.side=bn):R.renderBufferDirect(V,I,H,G,y,xe),y.onAfterRender(R,I,V,H,G,xe)}function Xo(y){let I=0;for(let V of y)V.texture!==null&&I++;return I}function Gi(y,I,V){I.isScene!==!0&&(I=rn);let H=ze.get(y),G=E.state.lights,xe=E.state.shadowsArray,Pe=G.state.version,_e=te.getParameters(y,G.state,xe,I,V,E.state.lightProbeGridArray),be=te.getProgramCacheKey(_e),Te=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,H.fog=I.fog;let Ve=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=T.get(y.envMap||H.environment,Ve),H.envMapRotation=H.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",pt),Te=new Map,H.programs=Te,H.programVariants=new Map);let tt=Te.get(be);if(tt!==void 0){if(H.currentProgram===tt&&H.lightsStateVersion===Pe)return Yo(y,_e),tt}else _e.uniforms=te.getUniforms(y),k!==null&&y.isNodeMaterial&&k.build(y,V,_e),y.onBeforeCompile(_e,R),tt=te.acquireProgram(_e,be),Te.set(be,tt),H.uniforms=_e.uniforms;let Ie=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=ee.uniform),Yo(y,_e),H.needsLights=Tc(y),H.lightsStateVersion=Pe,H.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.sunLights.value=G.state.sun,Ie.sunLightShadows.value=G.state.sunShadow,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.sunShadowMatrix.value=G.state.sunShadowMatrix,Ie.sunShadowCascade.value=G.state.sunShadowCascade,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),H.numLightProbeGrids=Xo(E.state.lightProbeGridArray),H.currentProgram=tt,H.uniformsList=null,tt}function qo(y,I,V,H,G){let xe=ze.get(y),Pe=xe.currentProgram.id+","+H+","+G,_e=xe.programVariants.get(Pe);return _e===void 0?(_e=Gi(y,I,V),xe.programVariants.set(Pe,_e)):(xe.currentProgram=_e,xe.uniformsList=null,xe.outputColorSpace=H,xe.toneMapping=G),_e}function Nr(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=pr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Yo(y,I){let V=ze.get(y);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function $o(y,I,V,H,G){I.isScene!==!0&&(I=rn),Ye.resetTextureUnits();let xe=I.fog,Pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?I.environment:null,_e=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:lt.workingColorSpace,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Te=T.get(H.envMap||Pe,be),Ve=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,tt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!V.morphAttributes.position,at=!!V.morphAttributes.normal,wt=!!V.morphAttributes.color,ot=li;H.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ot=R.toneMapping);let nt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ot=nt!==void 0?nt.length:0,Ce=ze.get(H),Qt=E.state.lights;if(Ft===!0&&(sn===!0||y!==ne)){let Mt=y===ne&&H.id===Y;ee.setState(H,y,Mt)}let dt=!1,Tn=!1;H.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==Qt.state.version||G.isBatchedMesh&&Ce.batching===!1||!G.isBatchedMesh&&Ce.batching===!0||G.isBatchedMesh&&Ce.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ce.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ce.instancing===!1||!G.isInstancedMesh&&Ce.instancing===!0||G.isSkinnedMesh&&Ce.skinning===!1||!G.isSkinnedMesh&&Ce.skinning===!0||G.isInstancedMesh&&Ce.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ce.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ce.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ce.instancingMorph===!1&&G.morphTexture!==null||Ce.envMap!==Te||H.fog===!0&&Ce.fog!==xe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ee.numPlanes||Ce.numIntersection!==ee.numIntersection)||Ce.vertexAlphas!==Ve||Ce.vertexTangents!==tt||Ce.morphTargets!==Ie||Ce.morphNormals!==at||Ce.morphColors!==wt||Ce.morphTargetsCount!==Ot||Ce.numLightProbeGrids!==Xo(E.state.lightProbeGridArray)?dt=!0:(Ce.outputColorSpace!==_e||Ce.toneMapping!==ot)&&(Tn=!0):(dt=!0,Ce.__version=H.version);let Pt=Ce.currentProgram;(dt===!0||Tn===!0)&&(Pt=Tn===!0?qo(H,I,G,_e,ot):Gi(H,I,G),k&&H.isNodeMaterial&&k.onUpdateProgram(H,Pt,Ce));let ds=!1,jt=!1,gi=!1,ue=Pt.getUniforms(),Bt=Ce.uniforms;if(ge.useProgram(Pt.program)&&(ds=!0,jt=!0,gi=!0),H.id!==Y&&(Y=H.id,jt=!0),ds||ne!==y){ge.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ue.setValue(U,"projectionMatrix",y.projectionMatrix),ue.setValue(U,"viewMatrix",y.matrixWorldInverse);let zt=ue.map.cameraPosition;zt!==void 0&&zt.setValue(U,kt.setFromMatrixPosition(y.matrixWorld)),gt.logarithmicDepthBuffer&&ue.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ue.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),ne!==y&&(ne=y,jt=!0,gi=!0)}if(Ce.needsLights&&(Qt.state.sunShadowMap.length>0&&ue.setValue(U,"sunShadowMap",Qt.state.sunShadowMap,Ye),Qt.state.directionalShadowMap.length>0&&ue.setValue(U,"directionalShadowMap",Qt.state.directionalShadowMap,Ye),Qt.state.spotShadowMap.length>0&&ue.setValue(U,"spotShadowMap",Qt.state.spotShadowMap,Ye),Qt.state.pointShadowMap.length>0&&ue.setValue(U,"pointShadowMap",Qt.state.pointShadowMap,Ye)),G.isSkinnedMesh){ue.setOptional(U,G,"bindMatrix"),ue.setOptional(U,G,"bindMatrixInverse");let Mt=G.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),ue.setValue(U,"boneTexture",Mt.boneTexture,Ye))}G.isBatchedMesh&&(ue.setOptional(U,G,"batchingTexture"),ue.setValue(U,"batchingTexture",G._matricesTexture,Ye),ue.setOptional(U,G,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",G._indirectTexture,Ye),ue.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&ue.setValue(U,"batchingColorTexture",G._colorsTexture,Ye));let vn=V.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&J.update(G,V,Pt),(jt||Ce.receiveShadow!==G.receiveShadow)&&(Ce.receiveShadow=G.receiveShadow,ue.setValue(U,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&I.environment!==null&&(Bt.envMapIntensity.value=I.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=Mx()),jt){if(ue.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&Zo(Bt,gi),xe&&H.fog===!0&&de.refreshFogUniforms(Bt,xe),de.refreshMaterialUniforms(Bt,H,ve,ke,E.state.transmissionRenderTarget[y.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){let Mt=S,zt=0;for(let Yn of E.state.lightProbeGridArray)Yn.texture!==null&&(Mt.textures[zt]=Yn.texture,Mt.min[zt]=Yn.boundingBox.min,Mt.max[zt]=Yn.boundingBox.max,Mt.resolution[zt]=Yn.resolution,zt++);for(let Yn in Mt)Mt[Yn].length=zt;Bt.probesSH.value=Mt.textures,Bt.probesMin.value=Mt.min,Bt.probesMax.value=Mt.max,Bt.probesResolution.value=Mt.resolution}pr.upload(U,Nr(Ce),Bt,Ye)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(pr.upload(U,Nr(Ce),Bt,Ye),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ue.setValue(U,"center",G.center),ue.setValue(U,"modelViewMatrix",G.modelViewMatrix),ue.setValue(U,"normalMatrix",G.normalMatrix),ue.setValue(U,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let Mt=H.uniformsGroups;for(let zt=0,Yn=Mt.length;zt<Yn;zt++){let wc=Mt[zt];Oe.update(wc,Pt),Oe.bind(wc,Pt)}}return Pt}function Zo(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Tc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(y,I,V){let H=ze.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ze.get(y.texture).__webglTexture=I,ze.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let V=ze.get(y);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,V=0){re=y,Z=I,q=V;let H=null,G=!1,xe=!1;if(y){let _e=ze.get(y);if(_e.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(U.FRAMEBUFFER,_e.__webglFramebuffer),ie.copy(y.viewport),De.copy(y.scissor),qe=y.scissorTest,ge.viewport(ie),ge.scissor(De),ge.setScissorTest(qe),Y=-1;return}else if(_e.__webglFramebuffer===void 0)Ye.setupRenderTarget(y);else if(_e.__hasExternalTextures)Ye.rebindTextures(y,ze.get(y.texture).__webglTexture,ze.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ve=y.depthTexture;if(_e.__boundDepthTexture!==Ve){if(Ve!==null&&ze.has(Ve)&&(y.width!==Ve.image.width||y.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(y)}}let be=y.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(xe=!0);let Te=ze.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[I])?H=Te[I][V]:H=Te[I],G=!0):y.samples>0&&Ye.useMultisampledRTT(y)===!1?H=ze.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[V]:H=Te,ie.copy(y.viewport),De.copy(y.scissor),qe=y.scissorTest}else ie.copy(Ge).multiplyScalar(ve).floor(),De.copy(ct).multiplyScalar(ve).floor(),qe=ft;if(V!==0&&(H=X),ge.bindFramebuffer(U.FRAMEBUFFER,H)&&ge.drawBuffers(y,H),ge.viewport(ie),ge.scissor(De),ge.setScissorTest(qe),G){let _e=ze.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,_e.__webglTexture,V)}else if(xe){let _e=I;for(let be=0;be<y.textures.length;be++){let Te=ze.get(y.textures[be]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+be,Te.__webglTexture,V,_e)}}else if(y!==null&&V!==0){let _e=ze.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,V)}Y=-1};function qn(y){let I=ze.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=gt.textureFormatReadable(y.format),I.__typeReadable=gt.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,V,H,G,xe,Pe,_e=0){if(!(y&&y.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ze.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(be=be[Pe],Array.isArray(be)&&(be=be[0])),be){ge.bindFramebuffer(U.FRAMEBUFFER,be);try{let Te=y.textures[_e],Ve=Te.format,tt=Te.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);let Ie=qn(Te);if(Ie.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-H&&V>=0&&V<=y.height-G&&U.readPixels(I,V,H,G,ce.convert(Ve),ce.convert(tt),xe)}finally{let Te=re!==null?ze.get(re).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(y,I,V,H,G,xe,Pe,_e=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=ze.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(be=be[Pe],Array.isArray(be)&&(be=be[0])),be)if(I>=0&&I<=y.width-H&&V>=0&&V<=y.height-G){ge.bindFramebuffer(U.FRAMEBUFFER,be);let Te=y.textures[_e],Ve=Te.format,tt=Te.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);let Ie=qn(Te);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,xe.byteLength,U.STREAM_READ),U.readPixels(I,V,H,G,ce.convert(Ve),ce.convert(tt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let wt=re!==null?ze.get(re).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,wt);let ot=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Zd(U,ot,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(at),U.deleteSync(ot),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,V=0){let H=Math.pow(2,-V),G=Math.floor(y.image.width*H),xe=Math.floor(y.image.height*H),Pe=I!==null?I.x:0,_e=I!==null?I.y:0;Ye.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,Pe,_e,G,xe),ge.unbindTexture()},this.copyTextureToTexture=function(y,I,V=null,H=null,G=0,xe=0){let Pe,_e,be,Te,Ve,tt,Ie,at,wt,ot=y.isCompressedTexture?y.mipmaps[xe]:y.image;if(V!==null)Pe=V.max.x-V.min.x,_e=V.max.y-V.min.y,be=V.isBox3?V.max.z-V.min.z:1,Te=V.min.x,Ve=V.min.y,tt=V.isBox3?V.min.z:0;else{let ue=Math.pow(2,-G);Pe=Math.floor(ot.width*ue),_e=Math.floor(ot.height*ue),y.isDataArrayTexture?be=ot.depth:y.isData3DTexture?be=Math.floor(ot.depth*ue):be=1,Te=0,Ve=0,tt=0}H!==null?(Ie=H.x,at=H.y,wt=H.z):(Ie=0,at=0,wt=0);let nt=ce.convert(I.format),Ot=ce.convert(I.type),Ce;I.isData3DTexture?(Ye.setTexture3D(I,0),Ce=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ye.setTexture2DArray(I,0),Ce=U.TEXTURE_2D_ARRAY):(Ye.setTexture2D(I,0),Ce=U.TEXTURE_2D),ge.activeTexture(U.TEXTURE0),ge.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),ge.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ge.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);let Qt=ge.getParameter(U.UNPACK_ROW_LENGTH),dt=ge.getParameter(U.UNPACK_IMAGE_HEIGHT),Tn=ge.getParameter(U.UNPACK_SKIP_PIXELS),Pt=ge.getParameter(U.UNPACK_SKIP_ROWS),ds=ge.getParameter(U.UNPACK_SKIP_IMAGES);ge.pixelStorei(U.UNPACK_ROW_LENGTH,ot.width),ge.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot.height),ge.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),ge.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),ge.pixelStorei(U.UNPACK_SKIP_IMAGES,tt);let jt=y.isDataArrayTexture||y.isData3DTexture,gi=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let ue=ze.get(y),Bt=ze.get(I),vn=ze.get(ue.__renderTarget),Mt=ze.get(Bt.__renderTarget);ge.bindFramebuffer(U.READ_FRAMEBUFFER,vn.__webglFramebuffer),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let zt=0;zt<be;zt++)jt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ze.get(y).__webglTexture,G,tt+zt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ze.get(I).__webglTexture,xe,wt+zt)),U.blitFramebuffer(Te,Ve,Te+Pe,Ve+_e,Ie,at,Ie+Pe,at+_e,U.DEPTH_BUFFER_BIT,U.NEAREST);ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||ze.has(y)){let ue=ze.get(y),Bt=ze.get(I);ge.bindFramebuffer(U.READ_FRAMEBUFFER,P),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,W);for(let vn=0;vn<be;vn++)jt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ue.__webglTexture,G,tt+vn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ue.__webglTexture,G),gi?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bt.__webglTexture,xe,wt+vn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Bt.__webglTexture,xe),G!==0?U.blitFramebuffer(Te,Ve,Te+Pe,Ve+_e,Ie,at,Ie+Pe,at+_e,U.COLOR_BUFFER_BIT,U.NEAREST):gi?U.copyTexSubImage3D(Ce,xe,Ie,at,wt+vn,Te,Ve,Pe,_e):U.copyTexSubImage2D(Ce,xe,Ie,at,Te,Ve,Pe,_e);ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else gi?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Ce,xe,Ie,at,wt,Pe,_e,be,nt,Ot,ot.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,xe,Ie,at,wt,Pe,_e,be,nt,ot.data):U.texSubImage3D(Ce,xe,Ie,at,wt,Pe,_e,be,nt,Ot,ot):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,xe,Ie,at,Pe,_e,nt,Ot,ot.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,xe,Ie,at,ot.width,ot.height,nt,ot.data):U.texSubImage2D(U.TEXTURE_2D,xe,Ie,at,Pe,_e,nt,Ot,ot);ge.pixelStorei(U.UNPACK_ROW_LENGTH,Qt),ge.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt),ge.pixelStorei(U.UNPACK_SKIP_PIXELS,Tn),ge.pixelStorei(U.UNPACK_SKIP_ROWS,Pt),ge.pixelStorei(U.UNPACK_SKIP_IMAGES,ds),xe===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&U.generateMipmap(Ce),ge.unbindTexture()},this.initRenderTarget=function(y){ze.get(y).__webglFramebuffer===void 0&&Ye.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ye.setTextureCube(y,0):y.isData3DTexture?Ye.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ye.setTexture2DArray(y,0):Ye.setTexture2D(y,0),ge.unbindTexture()},this.resetState=function(){Z=0,q=0,re=null,ge.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}});var gr,Ku=en(()=>{gr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var Dn,bx,Ju,Ex,is,_r=en(()=>{Ni();Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},bx=new ar(-1,1,1,-1,0,1),Ju=class extends Lt{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}},Ex=new Ju,is=class{constructor(e){this._mesh=new vt(Ex,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Kl,Uf=en(()=>{Ni();_r();Kl=class extends Dn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Li.clone(e.uniforms),this.material=new ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new is(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var No,Jl,Ff=en(()=>{_r();No=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Jl=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Ql,Of=en(()=>{Ni();Ku();Uf();Ff();Ql=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Xe);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ln}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Kl(gr),this.copyPass.material.blending=Ci,this.timer=new uo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}No!==void 0&&(o instanceof No?n=!0:o instanceof Jl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var jl,Bf=en(()=>{Ni();_r();jl=class extends Dn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new je}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var kf,zf=en(()=>{Ni();kf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var vr,Hf=en(()=>{Ni();_r();Ku();zf();vr=class i extends Dn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256),this.clearColor=new je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,o,{type:ln,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new Xt(r,o,{type:ln,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let h=new Xt(r,o,{type:ln,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),o=Math.round(o/2)}let a=kf;this.highPassUniforms=Li.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Xe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Li.clone(gr.uniforms),this.blendMaterial=new ht({uniforms:this.copyUniforms,vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader,premultipliedAlpha:!0,blending:ys,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new je,this._oldClearAlpha=1,this._basic=new wi,this._fsQuad=new is(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Xe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new ht({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Xe(.5,.5)},direction:{value:new Xe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};vr.BlurDirectionX=new Xe(1,0);vr.BlurDirectionY=new Xe(0,1)});var Do,Gf=en(()=>{Do={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var ec,Vf=en(()=>{Ni();_r();Gf();ec=class extends Dn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Li.clone(Do.uniforms),this.material=new or({name:Do.name,uniforms:this.uniforms,vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader}),this._fsQuad=new is(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===po?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===mo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===go?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var tc,nc,cn,Wf=en(()=>{tc=`
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
`,nc=`
uniform float uScale; varying vec2 vUv;
void main(){ vUv=uv*2.-1.; vec4 mv=modelViewMatrix*vec4(0.,0.,0.,1.); mv.xy+=position.xy*uScale; gl_Position=projectionMatrix*mv; }`,cn=`
#include <tonemapping_fragment>
#include <colorspace_fragment>`});function Tx(i,e,t){let n=1+e,s,r,o;if(n<1e-6)s=1,r=0,o=0,n=0;else{s=t,r=0,o=-i;let a=1/Math.hypot(s,r,o,n);s*=a,r*=a,o*=a,n*=a}return[s,r,o,n]}function wx(i,e,t,n,s,r,o){let a=-i,l=-e,c=-t,u=n,p=u*s+l*o-c*r,h=u*r+c*s-a*o,m=u*o+a*r-l*s,_=-a*s-l*r-c*o;return[p*u+_*-a+h*-c-m*-l,h*u+_*-l+m*-a-p*-c,m*u+_*-c+p*-l-h*-a]}function Ax(i,e,t){let n=Math.PI/(1.5*(e+1)),s=1.5*n,r=Xf*n,o=[],a=2;for(let u=0;u<e;u++){let p=s*(u+1),h=2*Math.PI*Math.sin(p),m=u===0||u===e-1?t:Math.max(t,Math.round(h/r));o.push({theta:p,m}),a+=m}let l=o.map((u,p)=>({i:p,mid:Math.abs(u.theta-Math.PI/2)})).sort((u,p)=>u.mid-p.mid),c=0;for(;a!==i&&c++<2e4;){let u=l[(c-1)%l.length].i;u===0||u===o.length-1||(a<i?(o[u].m++,a++):o[u].m>6&&(o[u].m--,a--))}return{rings:o,n:a,dVert:s,size:n}}function qf(i=2e3,e=5,t=.038){let n=Ax(i,41,5);if(n.n!==i)throw new Error(`hex layout: planned ${n.n}, expected ${i}`);let s=new Float32Array(i*3),r=[],o=0,a=(x,f,d,M,w,S)=>{s[o*3]=x,s[o*3+1]=f,s[o*3+2]=d,r[o]={theta:M,phi:w,pole:S},o++};a(0,1,0,0,0,!0),n.rings.forEach((x,f)=>{let d=f%2*(Math.PI/x.m);for(let M=0;M<x.m;M++){let w=d+M*(2*Math.PI/x.m),S=x.theta;a(Math.sin(S)*Math.cos(w),Math.cos(S),Math.sin(S)*Math.sin(w),S,w,!1)}}),a(0,-1,0,Math.PI,0,!0);let l=new Int32Array(i*6),c=new Float64Array(i*6);for(let x=0;x<i;x++){let f=[-1,-1,-1,-1,-1,-1],d=[4,4,4,4,4,4],M=s[x*3],w=s[x*3+1],S=s[x*3+2];for(let A=0;A<i;A++){if(A===x)continue;let E=(M-s[A*3])**2+(w-s[A*3+1])**2+(S-s[A*3+2])**2;if(E>=d[5])continue;let g=5;for(;g>0&&E<d[g-1];)d[g]=d[g-1],f[g]=f[g-1],g--;d[g]=E,f[g]=A}for(let A=0;A<6;A++)l[x*6+A]=f[A],c[x*6+A]=Math.sqrt(d[A])}let u=[];for(let x=0;x<i;x++)u.push(c[x*6]);u.sort((x,f)=>x-f);let p=u[i>>1],h=p*e/Xf*(1-t),m=new Float32Array(i),_=new Float32Array(i);for(let x=0;x<i;x++){let f=s[x*3],d=s[x*3+1],M=s[x*3+2],[w,S,A,E]=Tx(f,d,M),g,b,N;if(r[x].pole){let P=l[x*6];g=s[P*3],b=s[P*3+1],N=s[P*3+2]}else{let P=d;g=-f*P,b=1-d*P,N=-M*P}let[R,,D]=wx(w,S,A,E,g,b,N),k=Math.atan2(D,R);m[x]=Math.PI/2-k;let X=c[x*6]/p;X<.97&&(X=.97),X>1.045&&(X=1.045),_[x]=X}return{pos:s,angles:m,scales:_,baseTR:h,pickCos:Math.cos(p*.9)}}var Xf,Yf=en(()=>{Xf=Math.sqrt(3)});function Zf(i,e){let t=e.mobile,n=new Yl({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1});window.__edenRenderers=window.__edenRenderers||[],window.__edenRenderers.push(n),n.info.autoReset=!1,n.setClearColor(131843,1),n.outputColorSpace=yn;let s=1.5,r=()=>Math.min(s,window.devicePixelRatio||1),o=r(),a=i.parentElement,l=!1,c=0,u=document.createElement("canvas");function p(){if(a)try{let O=i.width,K=i.height;if(O<2||K<2)return;let he=Math.min(960,O),we=Math.max(1,Math.round(K*(he/O)));u.width=he,u.height=we;let Ue=u.getContext("2d");if(!Ue)return;Ue.drawImage(i,0,0,he,we),a.style.backgroundColor="#020303",a.style.backgroundImage="url("+u.toDataURL("image/jpeg",.7)+")",a.style.backgroundSize="cover",a.style.backgroundPosition="center",l=!0,c=performance.now()}catch{a&&(a.style.backgroundColor="#020303")}}function h(){p(),i.style.transition="none",i.style.visibility="hidden"}function m(){i.style.visibility="visible"}let _=new Jr;_.fog=null;let x=new Mn(40,1,.1,3e3),f={uTime:{value:0},uPx:{value:600}};function d(O,K,he,we,Ue,Ee){let Fe=new Lt,Qe=new Float32Array(O*3),xn=new Float32Array(O),fs=new Float32Array(O*3);for(let Dr=0;Dr<O;Dr++){let Ac,Cc,Rc;if(Ee)Ac=(Math.random()-.5)*Ee[0],Cc=Ee[2]+Math.random()*(Ee[1]-Ee[2]),Rc=(Math.random()-.5)*Ee[3]-2;else{let Lc=Math.random()*2-1,Dh=Math.random()*Math.PI*2,Nc=K+Math.random()*(he-K),Uh=Math.sqrt(1-Lc*Lc);Ac=Math.cos(Dh)*Uh*Nc,Cc=Lc*Nc-25,Rc=Math.sin(Dh)*Uh*Nc}Qe.set([Ac,Cc,Rc],Dr*3),xn[Dr]=we+Math.pow(Math.random(),3)*(Ue-we);let Pc=Math.random(),Ic=Pc<.08?Le.lime:Pc<.16?Le.cyan:Pc<.2?Le.ember:Le.white;fs.set([Ic.r,Ic.g,Ic.b],Dr*3)}Fe.setAttribute("position",new Wt(Qe,3)),Fe.setAttribute("aSize",new Wt(xn,1)),Fe.setAttribute("aCol",new Wt(fs,3));let Ko=new ht({...En,uniforms:{...f,uDrift:{value:Ee?1:0},uA:{value:Ee?.55:.9}},vertexShader:`attribute float aSize; attribute vec3 aCol; uniform float uTime,uPx,uDrift; varying vec3 vC; varying float vT;
        void main(){ vec3 p=position; p.y+=sin(uTime*.2+p.x)*.3*uDrift; p.x+=cos(uTime*.15+p.z)*.3*uDrift;
          vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
          vT=.55+.45*sin(uTime*(1.+fract(aSize*7.)*2.)+aSize*40.); vC=aCol;
          gl_PointSize=clamp(aSize*uPx/(-mv.z),1.,6.); }`,fragmentShader:`uniform float uA; varying vec3 vC; varying float vT; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.0,d); gl_FragColor=vec4(vC*a*vT*uA,1.); ${cn} }`}),Nh=new Ki(Fe,Ko);return Nh.frustumCulled=!1,Nh}let M=d(t?1600:2600,500,900,1.2,4.5),w=d(t?500:1e3,0,0,.03,.09,[34,10,-70,26]);_.add(M,w);function S(O,K,he,we){let Ue=new ht({...En,uniforms:{uScale:{value:K},uC:{value:O.clone()},uA:{value:we},uP:{value:he}},vertexShader:nc,fragmentShader:`uniform vec3 uC; uniform float uA,uP; varying vec2 vUv; void main(){ float r=length(vUv); float a=pow(max(0.,1.-r),uP)*uA; gl_FragColor=vec4(uC*a,1.); ${cn} }`}),Ee=new vt(new Qn(2,2),Ue);return Ee.frustumCulled=!1,Ee.renderOrder=2,Ee}let A=new pn;[[-90,20,-260,150,Le.lime,.0022],[110,-40,-300,190,Le.cyan,.003],[-60,-80,-240,170,Le.ember,.003],[60,30,-350,140,Ts("#5A2CFF"),.005]].forEach(([O,K,he,we,Ue,Ee])=>{let Fe=S(Ue,we,2.2,Ee);Fe.position.set(O,K,he),A.add(Fe)}),_.add(A);let E=new pn;_.add(E);let g={...f,uEnergy:{value:.3},uWin:{value:0},uFlash:{value:0},uKick:{value:0},uA:{value:Le.lime.clone()},uB:{value:Le.cyan.clone()},uC:{value:Le.ember.clone()}};function b(O){return new ht({uniforms:O,vertexShader:tc+`uniform float uTime,uEnergy,uWin,uKick; varying vec3 vN,vV,vP; varying float vNoise;
        void main(){ vec3 p=position; float t=uTime*(1.+uWin*1.5);
          float n=snoise(normal*1.3+vec3(t*.22,t*.17,-t*.2)); float n2=snoise(normal*3.2-t*.45)*.45;
          float d=(n+n2)*(.03+.04*uEnergy+.07*uWin)+uKick*.12*(n*.5+.5);
          p+=normal*d; vNoise=n+n2; vP=p;
          vec4 mv=modelViewMatrix*vec4(p,1.); vV=-mv.xyz; vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*mv; }`,fragmentShader:tc+`uniform vec3 uA,uB,uC; uniform float uTime,uEnergy,uWin,uFlash,uKick; varying vec3 vN,vV,vP; varying float vNoise;
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
          gl_FragColor=vec4(col,1.); ${cn} }`})}let N=new vt(new ai(1.12,t?24:40),b(g));E.add(N);function R(O,K,he){return new ht({...En,side:an,uniforms:{uC:{value:O.clone()},uP:{value:K},uM:{value:he}},vertexShader:"varying vec3 vN,vV; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vV=-mv.xyz; vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*mv; }",fragmentShader:`uniform vec3 uC; uniform float uP,uM; varying vec3 vN,vV; void main(){ float i=pow(clamp(-dot(normalize(vN),normalize(vV)),0.,1.),uP); gl_FragColor=vec4(uC*i*uM,1.); ${cn} }`})}let D=new vt(new ai(1.5,6),R(Le.lime,3.4,.8));E.add(D);let k=S(Le.lime,4.2,4.2,.3);E.add(k);let X=S(Le.cyan,9,6,.05);E.add(X);function P(O,K={}){return new ht({...En,side:bn,uniforms:{...f,uC:{value:O.clone()},uN:{value:K.n||48},uDuty:{value:K.duty||.5},uSp:{value:K.sp||.05},uA:{value:K.a||.8},uR0:{value:K.r0},uR1:{value:K.r1}},vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 uC; uniform float uN,uDuty,uSp,uA,uTime,uR0,uR1; varying vec2 vP;
        void main(){ float a=atan(vP.y,vP.x)/6.2831853+.5; float r=(length(vP)-uR0)/(uR1-uR0);
          float d=step(fract(a*uN+uTime*uSp*uN),uDuty); float e=smoothstep(0.,.25,r)*smoothstep(1.,.75,r);
          float sweep=pow(fract(a-uTime*uSp*.6),8.);
          gl_FragColor=vec4(uC*(d*.75+sweep*1.4)*e*uA,1.); ${cn} }`})}function W(O,K,he,we){return new vt(new Ji(O,K,256,1),P(he,{...we,r0:O,r1:K}))}let Z=[W(1.55,1.6,Le.lime,{n:64,duty:.55,sp:.02,a:.9}),W(2.55,2.58,Le.cyan,{n:180,duty:.3,sp:-.01,a:.7}),W(3.1,3.14,Le.lime,{n:12,duty:.85,sp:.006,a:.22})];Z[0].rotation.set(1.2,.3,0),Z[1].rotation.set(1.42,-.5,.2),Z[2].rotation.set(.35,.9,0),Z.forEach(O=>E.add(O));let q={...f,uC:{value:Le.lime.clone()},uWin:g.uWin,uFlash:g.uFlash},re=new vt(new Qn(90,90,1,1),new ht({...En,uniforms:q,vertexShader:"varying vec2 vW; void main(){ vW=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uTime,uWin,uFlash; uniform vec3 uC; varying vec2 vW;
      float gl(vec2 p){ vec2 g=abs(fract(p-.5)-.5)/fwidth(p); return 1.-min(min(g.x,g.y),1.); }
      void main(){ float r=length(vW); float l=gl(vW*.7)*.6+gl(vW*.14)*.9; float fade=exp(-r*.075)*smoothstep(1.5,4.,r);
        float wave=exp(-pow((r-mod(uTime*6.,45.))*.35,2.))*.9; vec3 c=mix(uC,vec3(1.,.42,.1),uWin);
        gl_FragColor=vec4(c*l*fade*(.22+wave*.8+uFlash*1.5),1.); ${cn} }`}));re.rotation.x=-Math.PI/2,re.position.y=-3.3,re.frustumCulled=!1,E.add(re);let Y=new vt(new Qn(2,2),new ht({...En,uniforms:{uC:{value:Le.cyan.clone()},uA:{value:.35}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv*2.-1.; vec4 mv=modelViewMatrix*vec4(0.,0.,0.,1.); mv.xy+=position.xy*vec2(9.,.32); gl_Position=projectionMatrix*mv; }",fragmentShader:`uniform vec3 uC; uniform float uA; varying vec2 vUv; void main(){ float a=exp(-abs(vUv.y)*9.)*pow(1.-abs(vUv.x),3.)*uA; gl_FragColor=vec4((uC+vec3(.4))*a,1.); ${cn} }`}));Y.frustumCulled=!1,Y.renderOrder=4,E.add(Y);let ne={...f,uSec:{value:0},uCut:{value:-1},uScan:{value:-1},uWinOn:{value:0},uLime:{value:Le.lime.clone()},uEmber:{value:Le.ember.clone()}},ie=new vt(new Ji(1.9,2.04,360,1),new ht({...En,side:bn,uniforms:ne,vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uTime,uSec,uCut,uScan,uWinOn; uniform vec3 uLime,uEmber; varying vec2 vP;
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
        gl_FragColor=vec4(c*v*body,1.); ${cn} }`}));E.add(ie);let De=W(2.18,2.24,Le.lime,{n:240,duty:.25,sp:0,a:.35});E.add(De);let qe={uScale:{value:9},uK:{value:1},uC:{value:Le.lime.clone()}},j=new vt(new Qn(2,2),new ht({...En,uniforms:qe,vertexShader:nc,fragmentShader:`uniform float uK; uniform vec3 uC; varying vec2 vUv; void main(){ float r=length(vUv); float w=.03+uK*.1; float ring=exp(-pow((r-uK*.95)/w,2.)); float a=ring*(1.-uK)*(1.-uK)*1.3 + exp(-r*r*22.)*(1.-uK)*(1.-uK)*.5; gl_FragColor=vec4(mix(vec3(1.),uC,uK)*a,1.); ${cn} }`}));j.frustumCulled=!1,j.visible=!1,E.add(j);let Se=t?5e3:9e3,Re=new Lt,ke={position:3,aCtrl:3,aEnd:3,aT:2,aCol:3,aSize:1},ve={};for(let O in ke){ve[O]=new Float32Array(Se*ke[O]);let K=new Wt(ve[O],ke[O]);K.setUsage(Vl),Re.setAttribute(O,K)}ve.aT.fill(-999);let Ke=new ht({...En,uniforms:{...f,uDensity:{value:1}},vertexShader:`attribute vec3 aCtrl,aEnd,aCol; attribute vec2 aT; attribute float aSize; uniform float uTime,uPx,uDensity; varying vec3 vC; varying float vA;
      void main(){ float k=(uTime-aT.x)/aT.y; if(k<0.||k>1.||fract(float(gl_VertexID)*.618)>uDensity){ gl_Position=vec4(2.,2.,2.,1.); gl_PointSize=0.; vA=0.; return; }
        float e = aSize>0. ? k*k*(1.6-.6*k) : 1.-pow(1.-k,3.);
        vec3 p=mix(mix(position,aCtrl,e),mix(aCtrl,aEnd,e),e);
        vec4 mv=viewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
        vA = aSize>0. ? smoothstep(0.,.15,k)*(.6+.4*k) : (1.-k*k);
        vC=aCol; gl_PointSize=clamp(abs(aSize)*uPx/(-mv.z),0.,22.); }`,fragmentShader:`varying vec3 vC; varying float vA; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d); a*=a; gl_FragColor=vec4((vC+vec3(1.)*smoothstep(.18,0.,d)*.8)*a*vA*1.4,1.); ${cn} }`}),Ct=new Ki(Re,Ke);Ct.frustumCulled=!1,Ct.renderOrder=5,_.add(Ct);let Ge=0,ct=-1,ft=-1,it=!1;function Rt(O,K,he,we,Ue,Ee,Fe){let Qe=Ge;Ge=(Ge+1)%Se,ve.position.set([O.x,O.y,O.z],Qe*3),ve.aCtrl.set([K.x,K.y,K.z],Qe*3),ve.aEnd.set([he.x,he.y,he.z],Qe*3),ve.aT[Qe*2]=we,ve.aT[Qe*2+1]=Ue,ve.aCol.set([Ee.r,Ee.g,Ee.b],Qe*3),ve.aSize[Qe]=Fe,ct<0?ct=ft=Qe:Qe<ct?it=!0:ft=Math.max(ft,Qe)}function Ft(){if(!(ct<0)){for(let O in ke){let K=Re.attributes[O];it?K.clearUpdateRanges():K.addUpdateRange(ct*ke[O],(ft-ct+1)*ke[O]),K.needsUpdate=!0}ct=ft=-1,it=!1}}let sn=new B,Tt=new B,kt=()=>{let O=Math.random()*2-1,K=Math.random()*6.2832,he=Math.sqrt(1-O*O);return rt(Math.cos(K)*he,O,Math.sin(K)*he)},Dt=(O,K)=>O.clone().add(kt().multiplyScalar(K));function rn(O,K,he,we,Ue,Ee,Fe=0){let Qe=f.uTime.value+Fe,xn=O.clone().lerp(K,.45).add(kt().multiplyScalar(O.distanceTo(K)*.28));for(let fs=0;fs<he;fs++){let Ko=fs/he;Rt(Dt(O,.05),Dt(xn,.08*Ko),Dt(K,.04),Qe+fs*.011,Ee,we,Ue*(1-Ko*.75))}}function hn(O,K,he){return sn.set(O/ot*2-1,-(K/nt)*2+1,.5).unproject(x).sub(x.position).normalize(),x.position.clone().add(sn.multiplyScalar(he))}let on=new pn;_.add(on);let Gt=[Le.lime,Le.cyan,Le.ember].map((O,K)=>{let he=new pn,we={...f,uEnergy:{value:.4},uWin:{value:0},uFlash:{value:0},uKick:{value:0},uA:{value:O.clone()},uB:{value:(K===1?Le.white:Le.cyan).clone()},uC:{value:O.clone()}},Ue=new vt(new ai(.62,12),b(we));he.add(Ue),he.add(new vt(new ai(.86,4),R(O,3.4,.8))),he.add(S(O,3.2,4.5,.16));let Ee=W(1.05,1.09,O,{n:36,duty:.5,sp:.02*(K-1||1),a:.8});return Ee.rotation.x=1.3,he.add(Ee),on.add(he),{g:he,u:we,m:Ue}}),yt=5,gt=[],ge=[],St=[],ze=[];for(let O=0;O<yt;O++)gt.push(rt()),ge.push(rt()),St.push(rt()),ze.push(rt());let Ye={...f,uP0:{value:gt},uP1:{value:ge},uP2:{value:St},uP3:{value:ze},uCols:{value:[Le.lime,Le.cyan,Le.ember,Le.cyan,Le.ember].map(O=>O.clone())},uPulse:{value:0},uDensity:{value:1}},T=[560,380,320,360,360],v=T.reduce((O,K)=>O+K),z=new Lt,oe=new Float32Array(v*4),te=new Float32Array(v*3);{let O=0;T.forEach((K,he)=>{for(let we=0;we<K;we++,O++){oe.set([he,Math.random(),.12+Math.random()*.1,.4+Math.random()],O*4);let Ue=kt();te.set([Ue.x,Ue.y,Ue.z],O*3)}})}z.setAttribute("position",new Wt(te,3)),z.setAttribute("aS",new Wt(oe,4));let de=new Ki(z,new ht({...En,uniforms:Ye,vertexShader:`attribute vec4 aS; uniform vec3 uP0[5],uP1[5],uP2[5],uP3[5],uCols[5]; uniform float uTime,uPx,uPulse,uDensity; varying vec3 vC; varying float vA;
      void main(){ int c=int(aS.x+.5); if(fract(aS.y*7.3)>uDensity){ gl_Position=vec4(2.,2.,2.,1.); gl_PointSize=0.; return; }
        float k=fract(aS.y+uTime*aS.z*(c>2?.55:1.)); float u=1.-k;
        vec3 p=u*u*u*uP0[c]+3.*u*u*k*uP1[c]+3.*u*k*k*uP2[c]+k*k*k*uP3[c];
        p+=position*sin(k*3.1416)*(.18+.25*aS.w);
        vec4 mv=viewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
        vA=smoothstep(0.,.08,k)*smoothstep(1.,.85,k)*(.55+uPulse*.8); vC=uCols[c];
        gl_PointSize=clamp((.05+.05*aS.w)*uPx/(-mv.z),1.,10.); }`,fragmentShader:`varying vec3 vC; varying float vA; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d); gl_FragColor=vec4((vC+.4)*a*vA,1.); ${cn} }`}));de.frustumCulled=!1,_.add(de);let fe=new no(new Lt,new sr({color:7311136,...En,opacity:.5}));fe.frustumCulled=!1,_.add(fe);let Q=5;function ee(O){Q=xr(O*3.2,1.75,5.6),Gt.forEach((we,Ue)=>we.g.position.set((Ue-1)*Q,un.poolY,0));let K=rt(0,-1.5,0);for(let we=0;we<3;we++){let Ue=Gt[we].g.position;gt[we].copy(K),ge[we].set(0,-3.8,0),St[we].set(Ue.x,Ue.y+3.2,0),ze[we].copy(Ue).add(rt(0,.7,0))}gt[3].copy(Gt[1].g.position).add(rt(0,-.7,0)),ge[3].set(0,-13,2),St[3].set(0,un.planet.y+Un+4,2),ze[3].set(0,un.planet.y+Un+.3,0),gt[4].copy(Gt[2].g.position).add(rt(0,-.7,0)),ge[4].set(Q*1.4,-18,0),St[4].set(9,un.hole.y+4,0),ze[4].set(6.6,un.hole.y,0);let he=[];for(let we=0;we<yt;we++){let Ue=null;for(let Ee=0;Ee<=48;Ee++){let Fe=Ee/48,Qe=1-Fe,xn=gt[we].clone().multiplyScalar(Qe*Qe*Qe).add(ge[we].clone().multiplyScalar(3*Qe*Qe*Fe)).add(St[we].clone().multiplyScalar(3*Qe*Fe*Fe)).add(ze[we].clone().multiplyScalar(Fe*Fe*Fe));Ue&&he.push(Ue,xn),Ue=xn}}fe.geometry.dispose(),fe.geometry=new Lt().setFromPoints(he)}let ae=new pn;ae.position.copy(un.planet),_.add(ae);let C=qf(2e3,Un),J=2e3,$=C.baseTR,pe=new oo($,$,1,6,1,!1);pe.translate(0,.5,0);let ce=new Float32Array(J),me=new Float32Array(J),Oe=new Float32Array(J),et=new Float32Array(J).fill(-999),le=new Float32Array(J).fill(-999),He=new Float32Array(J),$e=O=>{let K=new vs(O,1);return K.setUsage(Vl),K},ye={aHeat:$e(ce),aMine:$e(me),aMinted:$e(Oe),aFlash:$e(et),aPing:$e(le),aIdx:$e(He)};for(let O in ye)pe.setAttribute(O,ye[O]);let pt={...f,uHover:{value:-1},uSel:{value:-1},uLime:{value:Le.lime.clone()}},bt=new to(pe,new ht({uniforms:pt,vertexShader:`attribute float aHeat,aMine,aMinted,aFlash,aPing,aIdx; uniform float uTime,uHover,uSel; uniform vec3 uLime;
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
        gl_FragColor=vec4(col,1.); ${cn} }`}),J),Vt=new Float32Array(J*3);{let O=new _t,K=new In,he=new In,we=rt(0,1,0),Ue=rt(1,1,1);for(let Ee=0;Ee<J;Ee++){let Fe=rt(C.pos[Ee*3],C.pos[Ee*3+1],C.pos[Ee*3+2]);Vt.set([Fe.x,Fe.y,Fe.z],Ee*3),K.setFromUnitVectors(we,Fe),he.setFromAxisAngle(we,C.angles[Ee]),K.multiply(he);let Qe=C.scales[Ee];Ue.set(Qe,1,Qe),O.compose(Fe.clone().multiplyScalar(Un),K,Ue),bt.setMatrixAt(Ee,O),He[Ee]=Ee}bt.instanceMatrix.needsUpdate=!0}bt.frustumCulled=!1,ae.add(bt),ae.add(new vt(new ai(Un-.02,5),new wi({color:66564}))),ae.add(new vt(new ai(Un*1.22,5),R(Le.cyan,3.6,.55)));let Wo=S(Le.cyan,Un*3.2,5,.03);ae.add(Wo);let Hi=W(Un*1.45,Un*1.47,Le.cyan,{n:110,duty:.5,sp:.004,a:.6});Hi.rotation.x=1.25,Hi.rotation.y=.25,ae.add(Hi);let Ds=W(Un*1.62,Un*1.63,Le.lime,{n:30,duty:.1,sp:-.003,a:.7});Ds.rotation.x=1.25,Ds.rotation.y=.25,ae.add(Ds);let mi=new pn;ae.remove(bt),mi.add(bt),ae.add(mi);let Cn=0,Jt=.25,Wn=.045,Us=!1,Xn=null;function Fs(O){let K=he=>Number.isFinite(he)?he:0;for(let he=0;he<J;he++){let we=O(he);ce[he]=K(we[0]),me[he]=K(we[1]),Oe[he]=K(we[2])}ye.aHeat.needsUpdate=ye.aMine.needsUpdate=ye.aMinted.needsUpdate=!0}function Lr(O){et[O]=f.uTime.value,ye.aFlash.needsUpdate=!0}function Xo(O){le[O]=f.uTime.value,ye.aPing.needsUpdate=!0}function Gi(O,K){return K.set(Vt[O*3],Vt[O*3+1],Vt[O*3+2]).multiplyScalar(Un+.3),bt.updateWorldMatrix(!0,!1),K.applyMatrix4(mi.matrixWorld)}let qo=new ho,Nr=new _t,Yo=new Hn(rt(),Un+.1),$o=new Xe,Zo=new Ti;function Tc(O,K){$o.set(O/ot*2-1,-(K/nt)*2+1),qo.setFromCamera($o,x),mi.updateWorldMatrix(!0,!1),Nr.copy(mi.matrixWorld).invert(),Zo.copy(qo.ray).applyMatrix4(Nr);let he=Zo.intersectSphere(Yo,Tt);if(!he)return-1;he.normalize();let we=-1,Ue=.9995-1,Ee=-2;for(let Fe=0;Fe<J;Fe++){let Qe=Vt[Fe*3]*he.x+Vt[Fe*3+1]*he.y+Vt[Fe*3+2]*he.z;Qe>Ee&&(Ee=Qe,we=Fe)}return Ee>C.pickCos?we:-1}let qn=new pn;qn.position.copy(un.hole),_.add(qn);let y=new pn;y.rotation.set(-Math.PI/2+.2,0,.12),qn.add(y);let I={...f,uFill:{value:.3},uKick:{value:0},uLime:{value:Le.lime.clone()}},V=new vt(new Ji(1.75,6.6,220,8),new ht({...En,side:bn,uniforms:I,vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:tc+`uniform float uTime,uKick; varying vec2 vP;
      void main(){ float r=length(vP); float a=atan(vP.y,vP.x); float rn=(r-1.75)/(6.6-1.75);
        float sw=a+uTime*(1.6/(r*r*.12+.3));
        float n=snoise(vec3(cos(sw)*r*.8,sin(sw)*r*.8,uTime*.12))*.5+.5;
        float st=.5+.5*sin(sw*22.+r*5.);
        float band=pow(1.-rn,1.8);
        vec3 c=mix(vec3(1.,.96,.82),vec3(1.,.5,.12),smoothstep(0.,.3,rn)); c=mix(c,vec3(.55,.08,.03),smoothstep(.3,1.,rn));
        float dop=1.+.75*sin(a+.6);
        float al=band*(.25+.85*n*n+.25*st*n)*smoothstep(0.,.05,rn)*smoothstep(1.,.75,rn);
        gl_FragColor=vec4(c*al*dop*(.85+uKick*1.2),1.); ${cn} }`}));y.add(V);let H=new vt(new Ji(7.2,7.32,360,1),new ht({...En,side:bn,uniforms:I,vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uFill,uTime; uniform vec3 uLime; varying vec2 vP; void main(){ float a=fract(atan(vP.x,-vP.y)/6.2831853); float s=fract(a*150.); float b=step(.2,s)*step(s,.8);
      float on=step(a,uFill); float head=exp(-abs(a-uFill)*90.); gl_FragColor=vec4((uLime*(on*.9+.06)+vec3(1.)*head*1.5)*b,1.); ${cn} }`}));y.add(H),qn.add(new vt(new ao(1.6,48,32),new wi({color:0})));let G=new vt(new Qn(2,2),new ht({...En,uniforms:{...I,uScale:{value:4.2}},vertexShader:nc,fragmentShader:`uniform float uTime,uKick; varying vec2 vUv; void main(){ float r=length(vUv)*4.2; float top=.45+.55*smoothstep(-.6,1.,vUv.y/max(length(vUv),.001));
      float photon=exp(-pow((r-1.66)/.035,2.))*2.2; float halo=exp(-(r-1.7)*1.6)*step(1.62,r)*.55*top;
      vec3 c=mix(vec3(1.,.9,.7),vec3(1.,.42,.1),clamp((r-1.66)*.9,0.,1.)); gl_FragColor=vec4(c*(photon+halo)*(1.+uKick),1.); ${cn} }`}));G.frustumCulled=!1,G.renderOrder=3,qn.add(G),qn.add(S(Le.ember,16,6,.05));let xe=t?700:1300,Pe=new Lt,_e=new Float32Array(xe*3);for(let O=0;O<xe;O++)_e.set([Math.random()*6.283,Math.random(),.05+Math.random()*.08],O*3);Pe.setAttribute("position",new Wt(_e,3));let be=new Ki(Pe,new ht({...En,uniforms:{...f,uKick:I.uKick,uDensity:{value:1}},vertexShader:`uniform float uTime,uPx,uKick,uDensity; varying float vK; void main(){ if(fract(position.y*9.1)>uDensity){ gl_Position=vec4(2.,2.,2.,1.); gl_PointSize=0.; return; }
      float k=fract(position.y+uTime*position.z*(1.+uKick*2.)); float r=mix(7.,1.62,k*k); float an=position.x+k*k*7.+uTime*.1;
      vec3 p=vec3(cos(an)*r,sin(an)*r,sin(position.x*13.)*.25*(1.-k)); vK=k;
      vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=clamp(.07*uPx/(-mv.z),1.,9.); }`,fragmentShader:`varying float vK; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d)*smoothstep(0.,.1,vK)*smoothstep(1.,.9,vK); vec3 c=mix(vec3(1.,.4,.1),vec3(1.,.95,.75),vK); gl_FragColor=vec4(c*a*1.3,1.); ${cn} }`}));be.frustumCulled=!1,y.add(be);let Te=null,Ve=null,tt=e.tier!=null?e.tier:t?1:2;function Ie(){Te=new Ql(n),Te.addPass(new jl(_,x)),Ve=new vr(new Xe(256,256),.55,.4,.7),t&&(Ve.radius=.1,Ve.strength=.38,Ve.threshold=.8),Te.addPass(Ve),Te.addPass(new ec)}tt>0&&Ie();function at(){let O=ot/nt,K=O<.9,he=(we,Ue)=>Math.max(Ue/Math.tan(Co.degToRad(20)),we/(Math.tan(Co.degToRad(20))*O));return[{p:rt(0,.25,K?he(2.6,3.3):8.2),t:rt(0,0,0),o:K?[0,-.12]:[.15,0]},{p:rt(0,-6,K?he(Q+1.25,5):15.5),t:rt(0,-7.4,0),o:K?[0,.02]:[0,0]},{p:rt(2.5,un.planet.y+2.5,K?he(6.2,7):18.5),t:un.planet.clone(),o:K?[0,-.17]:[.17,0]},{p:rt(0,un.hole.y+3.8,K?he(7.4,8):19),t:un.hole.clone(),o:K?[0,-.17]:[.18,-.02]},{p:rt(K?18:30,-18,K?95:62),t:rt(0,-24,0),o:[0,0]}]}let wt=[],ot=1,nt=1;function Ot(O){let K=Math.max(2,Math.round(window.innerWidth)&-2),he=Math.max(2,Math.round(window.innerHeight)&-2);if(!O&&K===ot&&he===nt&&n.getPixelRatio()===o)return;let we=l;we&&h(),ot=K,nt=he,n.setPixelRatio(o),n.setSize(ot,nt,!1),x.aspect=ot/nt,x.updateProjectionMatrix(),Te&&(Te.setPixelRatio(o),Te.setSize(ot,nt)),f.uPx.value=nt*o/(2*Math.tan(Co.degToRad(20))),ee(ot/nt),wt=at(),we&&m()}Ot();let Ce=0,Qt=0,dt=0,Tn=0,Pt=rt(),ds=rt(),jt=null;function gi(O,K,he){if(jt)return x.clearViewOffset(),x.position.copy(jt.p),x.lookAt(jt.t),E.visible=!1,on.visible=de.visible=fe.visible=!1,ae.visible=!0,qn.visible=!1,2;Ce=he?O:Ce+(O-Ce)*(1-Math.exp(-K*3.2));let we=xr(Math.floor(Ce),0,wt.length-2),Ue=Cx(xr(Ce-we,0,1)),Ee=wt[we],Fe=wt[we+1];Pt.copy(Ee.p).lerp(Fe.p,Ue),ds.copy(Ee.t).lerp(Fe.t,Ue);let Qe=Ee.o[0]+(Fe.o[0]-Ee.o[0])*Ue,xn=Ee.o[1]+(Fe.o[1]-Ee.o[1])*Ue;return Pt.x+=Qt*.35,Pt.y+=dt*.22,Tn>0&&(Pt.x+=(Math.random()-.5)*Tn*.12,Pt.y+=(Math.random()-.5)*Tn*.12,Tn=Math.max(0,Tn-K*2.5)),x.position.copy(Pt),x.lookAt(ds),x.setViewOffset(ot,nt,-Qe*ot,-xn*nt,ot,nt),Ce}let ue={energy:.3,win:0,sec:0,kick:0,flash:0,shockK:1,poolScale:[1,1,1],pulse:0,holeKick:0,fill:.3},Bt={js:0,frames:0},vn=!1,Mt=!1;function zt(O,K,he){if(vn)return;vn=!0;let we=performance.now();n.info.reset(),f.uTime.value+=he?0:O;let Ue=gi(K.sp,O,he);jt||(E.visible=Ue<1.9||Ue>3.3,on.visible=de.visible=fe.visible=Ue>.15&&Ue<3.5||Ue>3.3,ae.visible=Ue>1.05&&Ue<3.6||Ue>3.3,qn.visible=Ue>2.05),ue.energy+=(K.energy-ue.energy)*Math.min(1,O*2),ue.win+=((K.win?1:0)-ue.win)*Math.min(1,O*3),ue.kick=Math.max(0,ue.kick-O*1.8),ue.flash=Math.max(0,ue.flash-O*1.6),g.uEnergy.value=ue.energy,g.uWin.value=ue.win,g.uKick.value=ue.kick,g.uFlash.value=ue.flash*ue.flash;let Ee=K.win?.5+.5*Math.sin(f.uTime.value*(6+Math.max(0,K.sec-540)*.6)):0;if(N.scale.setScalar(1+ue.kick*.08+Ee*.03*ue.win+ue.flash*.12),D.material.uniforms.uC.value.copy(Le.lime).lerp(Le.ember,ue.win),D.material.uniforms.uM.value=.45+ue.energy*.25+ue.flash*1.2+Ee*.4,k.material.uniforms.uC.value.copy(Le.lime).lerp(Le.ember,ue.win),k.material.uniforms.uA.value=.1+ue.energy*.08+ue.flash*.45+Ee*.12*ue.win+ue.kick*.15,Y.material.uniforms.uA.value=.16+ue.flash*.8+ue.kick*.2+Ee*.1*ue.win,Y.material.uniforms.uC.value.copy(Le.cyan).lerp(Le.ember,ue.win),X.material.uniforms.uA.value=.012+ue.flash*.12+ue.energy*.01,Z[0].rotation.z+=O*(.25+ue.win*1.4),Z[1].rotation.z-=O*(.12+ue.win*.7),Z[2].rotation.z+=O*.05,De.rotation.z-=O*.02,ne.uSec.value=K.sec/10,ne.uWinOn.value=K.win?1:0,ie.lookAt(x.position),De.quaternion.copy(ie.quaternion),ue.shockK<1?(ue.shockK=Math.min(1,ue.shockK+O*.85),qe.uK.value=ue.shockK,j.visible=!0):j.visible=!1,ue.pulse=Math.max(0,ue.pulse-O*1.5),Ye.uPulse.value=ue.pulse,Gt.forEach((Fe,Qe)=>{let xn=.75+.5*K.poolScale[Qe];Fe.g.scale.setScalar(Fe.g.scale.x+(xn-Fe.g.scale.x)*Math.min(1,O*2)),Fe.u.uKick.value=Math.max(0,Fe.u.uKick.value-O*2)}),Xn&&!Us){let Fe=Math.min(1,O*3.5),Qe=Xn.y-Cn;Qe=Math.atan2(Math.sin(Qe),Math.cos(Qe)),Cn+=Qe*Fe,Jt+=(Xn.x-Jt)*Fe,Math.abs(Qe)<.002&&(Xn=null)}else Us||(Cn+=O*Wn,Wn+=(.045-Wn)*Math.min(1,O*.8));mi.rotation.set(Jt,Cn,0),Hi.rotation.z+=O*.02,Ds.rotation.z-=O*.015,ue.holeKick=Math.max(0,ue.holeKick-O*1.2),I.uKick.value=ue.holeKick,ue.fill+=(K.fill-ue.fill)*Math.min(1,O*3),I.uFill.value=ue.fill,G.material.uniforms.uKick.value=ue.holeKick,Ft(),Te&&tt>0&&!document.hidden?(Ve.strength=(t?.38:.55)+ue.flash*.5,Te.render(O)):document.hidden||n.render(_,x),Bt.js+=performance.now()-we,Bt.frames++,vn=!1,!document.hidden&&(!l||performance.now()-c>2e3)&&p(),i.style.visibility==="hidden"&&!Mt&&m()}let Yn=un.core;try{n.compile(_,x)}catch{}return i.addEventListener("webglcontextlost",O=>{O.preventDefault(),Mt=!0,i.style.transition="none",i.style.visibility="hidden",a&&(a.style.backgroundColor="#020303"),e.onContextLost&&e.onContextLost()}),{renderer:n,camera:x,scene:_,frame:zt,resize:Ot,timing:Bt,COL:Le,pickPlot:Tc,setPlots:Fs,plotFlash:Lr,plotPing:Xo,tileWorld:Gi,get tier(){return tt},setTier(O){tt=O,l&&h(),O===0?(Te&&Te.dispose&&Te.dispose(),Te=null,Ve=null,Ke.uniforms.uDensity.value=.6,Ye.uDensity.value=.6,be.material.uniforms.uDensity.value=.6):Te||Ie(),Ot(!0),l&&m()},nudgeDpr(O){return o},get dpr(){return o},stepDownQuality(){if(t)return!1;if(o>1.25+.001)o=Math.min(1.25,r());else if(o>1+.001)o=1;else return tt>0?(this.setTier(0),!0):!1;return l&&h(),Ot(!0),l&&m(),!0},snapshotPoster:p,holdCanvas:h,releaseCanvas:m,get lost(){return Mt},beamIn(O,K,he){let we=!!he,Ue=we?hn(he[0],he[1],4):kt().multiplyScalar(9+Math.random()*5).add(rt(0,0,-2)),Ee=we?70:Math.round(xr(14+Math.log10(K)*3,16,34)),Fe=O?Le.ember:Math.random()<.25?Le.cyan:Le.lime;rn(Ue,Yn,Ee,Fe,we?.55:.22+Math.log10(K)*.02,we?1.05:.85),e.later(()=>{ue.kick=Math.min(1.2,ue.kick+(we?1:.35)),we&&(ue.shockK=.35,qe.uC.value.copy(O?Le.ember:Le.lime));for(let Qe=0;Qe<(we?40:10);Qe++){let xn=kt();Rt(xn.clone().multiplyScalar(1.1),xn.clone().multiplyScalar(1.6),xn.clone().multiplyScalar(2.2+Math.random()),f.uTime.value,.5+Math.random()*.4,Fe,-.12)}},(we?1.05:.85)*900)},explode(O,K){ue.flash=1,ue.kick=1.4,ue.shockK=0,Tn=1,qe.uC.value.copy(O.rolled?Le.ember:Le.lime);let he=O.rolled?160:Math.min(t?520:900,200+O.addrs*40),we=f.uTime.value;for(let Ue=0;Ue<he;Ue++){let Ee=kt();Ee.z*=.35,Ee.normalize();let Fe=2.6+Math.random()*4.6,Qe=Math.random()<.6?Le.lime:Math.random()<.5?Le.gold:Le.white;Rt(Ee.clone().multiplyScalar(1.15),Ee.clone().multiplyScalar(Fe*.55).add(kt().multiplyScalar(.8)),Ee.clone().multiplyScalar(Fe),we+Math.random()*.08,1.3+Math.random()*1.2,O.rolled?Le.ember:Qe,-(.06+Math.random()*.1))}if(O.rolled||O.top.slice(0,6).forEach((Ue,Ee)=>{let Fe=kt();Fe.z=Math.abs(Fe.z)*.3;let Qe=Fe.clone().multiplyScalar(5+Ee*.6);rn(rt(0,0,0).add(Fe.clone().multiplyScalar(1.2)),Qe,30,Ee===0?Le.gold:Le.lime,.3,1.1,.05*Ee)}),K){let Ue=hn(K[0],K[1],4);for(let Ee=0;Ee<3;Ee++)rn(rt(0,0,0),Ue,40,Le.gold,.4,1.3,.15+Ee*.12)}},scan(O){ne.uScan.value=O},setCut(O){ne.uCut.value=O},income(){ue.pulse=Math.min(1.2,ue.pulse+.25)},poolKick(O){Gt[O].u.uKick.value=1},holeKick(O){ue.holeKick=Math.min(1.5,ue.holeKick+O);let K=f.uTime.value,he=un.hole;for(let we=0;we<40;we++){let Ue=Math.random()*6.283,Ee=6+Math.random()*2,Fe=rt(Math.cos(Ue)*Ee,(Math.random()-.5)*2.5,Math.sin(Ue)*Ee).add(he);Rt(Fe,Fe.clone().lerp(he,.5).add(rt(0,1,0)),he.clone(),K+Math.random()*.3,1.1+Math.random()*.5,Math.random()<.5?Le.ember:Le.gold,.16)}},plotBurst(O,K){Lr(O);let he=Gi(O,rt()),we=f.uTime.value,Ue=he.clone().sub(un.planet).normalize();for(let Ee=0;Ee<(K?90:26);Ee++){let Fe=he.clone().add(Ue.clone().multiplyScalar(.6+Math.random()*2.2)).add(kt().multiplyScalar(.6));Rt(he,he.clone().lerp(Fe,.5),Fe,we+Math.random()*.1,.9+Math.random()*.6,K?Le.lime:Math.random()<.5?Le.cyan:Le.white,-.12)}},claimFx(O){let K=hn(O[0],O[1],4);for(let he=0;he<4;he++)rn(rt(0,0,0),K,36,Le.gold,.35,1.2,he*.1)},drag(O,K,he){Us=he,he&&(Xn=null,Cn+=O*.006,Jt=xr(Jt+K*.004,-.9,.9),Wn=O*.006*30)},mouse(O,K){Qt=O,dt=K},focusPlot(O){let K=rt(Vt[O*3],Vt[O*3+1],Vt[O*3+2]);Xn={y:Math.atan2(K.x,K.z)*-1+Math.atan2(x.position.x-un.planet.x,x.position.z-un.planet.z),x:xr(Math.asin(K.y)*.9,-.9,.9)},Wn=0},setSelHover(O,K){pt.uSel.value=O,pt.uHover.value=K},setPlanetSpin(O,K){Xn=null,Wn=0,O!=null&&(Jt=O),K!=null&&(Cn=K)},shotPlanet(O){let K=un.planet;if(Xn=null,Wn=0,O==="off"||!O){jt=null;return}O==="whole"?(jt={p:rt(.15,K.y+.4,13.2),t:K.clone()},Jt=.18,Cn=.55):O==="zoom"?(jt={p:rt(.25,K.y+.2,8),t:K.clone()},Jt=.12,Cn=.72):O==="north"?(jt={p:rt(.15,K.y+10.2,3.2),t:rt(K.x,K.y+4.6,K.z)},Jt=0,Cn=.2):O==="south"&&(jt={p:rt(.15,K.y-10.2,3.2),t:rt(K.x,K.y-4.6,K.z)},Jt=0,Cn=.2)}}}var Ts,Le,En,rt,xr,Cx,un,Un,Kf=en(()=>{Ni();Of();Bf();Hf();Vf();Wf();Yf();Ts=i=>new je(i),Le={lime:Ts("#D0FF00"),cyan:Ts("#22E6FF"),ember:Ts("#FF6A1A"),gold:Ts("#FFC43D"),white:Ts("#ffffff"),red:Ts("#FF3B2E")},En={transparent:!0,depthWrite:!1,blending:ys},rt=(i,e,t)=>new B(i,e,t),xr=(i,e,t)=>Math.max(e,Math.min(t,i)),Cx=i=>i*i*(3-2*i),un={core:rt(0,0,0),poolY:-8.2,planet:rt(0,-25,0),hole:rt(0,-47,0)},Un=5});function Rx(i,e){return e?Object.entries(e).reduce((t,[n,s])=>t.replaceAll("{"+n+"}",String(s)),i):i}function F(i,e){let n=(Qu[Fn]||Qu.zh)[i]??Qu.zh[i]??i;return Rx(n,e)}function Px(){try{let i=new URLSearchParams(location.search).get("lang")||new URLSearchParams(location.search).get("language");if(i==="en"||i==="zh")return i}catch{}try{let i=localStorage.getItem(Jf);if(i==="en"||i==="zh")return i}catch{}return"zh"}function eh(){let i=document;i.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=F(n.getAttribute("data-i18n"))}),i.querySelectorAll("[data-i18n-html]").forEach(n=>{n.innerHTML=F(n.getAttribute("data-i18n-html"))}),i.querySelectorAll("[data-i18n-title]").forEach(n=>{n.setAttribute("title",F(n.getAttribute("data-i18n-title")))}),i.querySelectorAll("[data-i18n-aria]").forEach(n=>{n.setAttribute("aria-label",F(n.getAttribute("data-i18n-aria")))});let e=F("docTitle");document.title&&(document.title=e);let t=document.querySelector('meta[name="description"]');t&&t.setAttribute("content",F("docDesc")),document.documentElement.lang=Fn==="en"?"en":"zh-CN",document.querySelectorAll(".lang button").forEach(n=>{n.classList.toggle("on",n.getAttribute("data-lang")===Fn)})}function Ix(i){let e=i==="en"?"en":"zh";if(e===Fn){eh();return}Fn=e;try{localStorage.setItem(Jf,Fn)}catch{}eh();try{window.dispatchEvent(new CustomEvent("eden:lang",{detail:Fn}))}catch{}ju.forEach(t=>t(Fn))}function Qf(i){return ju.add(i),()=>ju.delete(i)}function jf(){Fn=Px(),eh(),document.querySelectorAll(".lang button").forEach(i=>{i.addEventListener("click",()=>Ix(i.getAttribute("data-lang")))})}var Qu,Jf,ju,Fn,ic=en(()=>{Qu={zh:{docTitle:"EDEN \xB7 \u8F6E\u6B21\u71C3\u70E7\u91D1\u5E93\uFF08\u9884\u89C8 \xB7 \u6A21\u62DF\u6570\u636E\uFF09",docDesc:"EDEN \u8F6E\u6B21\u71C3\u70E7\u91D1\u5E93 dapp \u9884\u89C8\u3002\u5168\u90E8\u4E3A\u672C\u5730\u6A21\u62DF\u6570\u636E\uFF0C\u4E0D\u8FDE\u94B1\u5305\u3001\u4E0D\u53D1\u4EA4\u6613\u3002",previewBadge:"\u9884\u89C8 \xB7 \u6A21\u62DF\u6570\u636E",previewNote:"\u4E0D\u8FDE\u94B1\u5305\u3001\u4E0D\u53D1\u4EA4\u6613\uFF0C\u6240\u6709\u6570\u5B57\u4E3A\u6D4F\u89C8\u5668\u672C\u5730\u6A21\u62DF\uFF1BUSDT \u4F30\u503C\u6309\u9884\u89C8\u6A21\u62DF\u4EF7 1 BNB = $612",brandTag:"\u8F6E\u6B21\u5956\u6C60\uFF0810 \u5206\u949F\u4E00\u8F6E\uFF09",nav1:"\u7194\u7089",nav2:"\u4E09\u6C60",nav3:"\u5730\u5757",nav4:"\u6258\u5E95",wallet:"\u8FDE\u63A5\u94B1\u5305",walletOn:"0x5eED\u2026beEF",kick:"BNB CHAIN \xB7 FLAP VAULT \xB7 \u8F6E\u6B21\u5956\u6C60\uFF0810 \u5206\u949F\u4E00\u8F6E\uFF09\xB7 \u7B2C",kickRound:"\u8F6E",tagHtml:"\u8F6E\u6B21\u5956\u6C60\uFF0810 \u5206\u949F\u4E00\u8F6E\uFF09\u3002\u653E\u51FA = min(\u5956\u6C60 \xD7 15%\uFF0C\u672C\u8F6E\u71C3\u70E7 \xD7 min(\u6258\u5E95\u4EF7, \u5E02\u4EF7) \xD7 1)\u3002<br><em>\u7B2C 0\u2013539 \u79D2\u786E\u5B9A\u8BA1\u5165\uFF0C\u7B2C 540\u2013599 \u79D2\u968F\u673A\u622A\u6B62</em>\uFF1B\u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF08\u6FC0\u6D3B\u4E0E\u5730\u5757\u7167\u5E38\uFF09\u3002",prizeLbl:"\u672C\u8F6E\u9884\u8BA1\u653E\u51FA",jackpotLine:"\u5934\u5956",jackpotLead:"\u9886\u5148",burnLine:"\u672C\u8F6E\u5DF2\u71C3\u70E7",burnLineRest:"/ 2,000,000 \xB7 \u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E",statBurned:"\u672C\u8F6E\u5DF2\u71C3\u70E7",statAddrs:"\u53C2\u4E0E\u5730\u5740",statMine:"\u4F60\u7684\u71C3\u70E7",ctaBurn:"\u7ACB\u5373\u71C3\u70E7",ctaPools:"\u94B1\u53BB\u54EA\u4E86 \u2193",clockLeft:"\u672C\u8F6E\u5269\u4F59",clockWin:"\u968F\u673A\u622A\u6B62 540\u2013599",clockCertain:"\u7B2C 0\u2013539 \u79D2\u786E\u5B9A\u8BA1\u5165",clockLate:"\u665A\u70E7\u53EF\u80FD\u987A\u5EF6\u5230\u4E0B\u4E00\u8F6E",clockPhaseCertain:"\u7B2C 0\u2013539 \u79D2\u786E\u5B9A\u8BA1\u5165 \xB7 \u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E",clockPhaseWin:"\u7B2C 540\u2013599 \u79D2\u968F\u673A\u622A\u6B62\uFF0C\u665A\u70E7\u53EF\u80FD\u987A\u5EF6\u5230\u4E0B\u4E00\u8F6E \xB7 \u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E",clockReveal:"\u63ED\u6653\u622A\u6B62\u79D2",clockRevealSub:"\u533A\u5757\u54C8\u5E0C\u51B3\u5B9A\uFF0C\u8C01\u4E5F\u6539\u4E0D\u4E86",clockCut:"\u622A\u6B62",clockCutSub:"\u7B2C {n} \u79D2\u843D\u9524",you:"\u4F60",cap:"\u5E02\u503C",perToken:"BNB / \u679A",tokenUnit:"\u679A",pxMkt:"\u5E02\u4EF7",pxFloor:"\u6258\u5E95\u4EF7",pxRef:"\u5956\u52B1\u53C2\u8003 min(\u6258\u5E95, \u5E02\u4EF7)",poolsKicker:"02 / \u7A0E\u53BB\u54EA\u4E86",poolsH:"\u4E00\u7B14\u7A0E\uFF0C\u4E09\u80A1\u80FD\u91CF",poolsP:"\u4E70\u5356\u5404 3% \u7A0E 100% \u8FDB\u91D1\u5E93 \xB7 0 \u8FD0\u8425 \xB7 0 \u9879\u76EE\u65B9\u5730\u5740",pool1n:"\u8F6E\u6B21\u5956\u6C60",pool1d:"10 \u5206\u949F\u4E00\u8F6E\uFF0C\u653E\u51FA min(\u6C60\xD715%, \u672C\u8F6E\u71C3\u70E7\xD7min(\u6258\u5E95,\u5E02\u4EF7)\xD71)\uFF1B50% \u5747\u5206\u300150% \u5934\u5956\uFF08\u2264\u6C60 5%\uFF0C\u6EE1 2 \u4EBA\uFF09",pool2n:"\u5730\u5757\u6C60",pool2d:"\u6BCF 30 \u5206\u949F\u4E00\u8F6E\uFF0C\u653E\u51FA 80%\uFF08\u6BCF\u5206\u949F\u5747\u5300\u91CA\u653E\uFF09\uFF0C20% \u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF1B\u6309\u5DF2\u6FC0\u6D3B\u6743\u91CD\u5206\u7EA2",pool3n:"\u6258\u5E95\u50A8\u5907",pool3dPre:"\u2248 ",pool3dSuf:" USDT \xB7 \u5168\u90E8\u7528\u4E8E\u6258\u5E95\u5151\u6362\uFF0C\u6362\u56DE\u7684\u5E01\u9500\u6BC1",plotsKicker:"03 / \u5730\u5757\u661F\u7403",plotsHHtml:"2000 \u5757\u5730\uFF0C<br>\u70E7\u5E01\u5373\u53D1\u3001\u7075\u9B42\u7ED1\u5B9A",plotsP:"\u5730\u5757\u53EA\u80FD\u70E7\u5E01\u83B7\u5F97\uFF0C\u6C38\u4E45\u7ED1\u5B9A\u71C3\u70E7\u5730\u5740\uFF0C\u4E0D\u53EF\u8F6C\u8BA9\u3001\u4E0D\u53EF\u4E70\u5356\u3002\u6BCF\u7B14\u6309\u9AD8\u6863\u4F18\u5148\u8D2A\u5FC3\u62C6\u5206\uFF1A\u666E\u901A 10 \u4E07\uFF08\u6743\u91CD 1.0\uFF09\u3001\u7A00\u6709 20 \u4E07\uFF082.2\uFF09\u3001\u53F2\u8BD7 30 \u4E07\uFF083.5\uFF09\u3002\u521B\u4E16 30 \u5206\u949F\u6BCF\u5206\u949F\u6700\u591A 20 \u5757\uFF08\u6700\u591A 600\uFF09\uFF0C\u4E4B\u540E\u7EE7\u7EED\u53D1\u5230 2000\u3002\u5730\u5757\u6C60\u6BCF 30 \u5206\u949F\u4E00\u8F6E\uFF0C\u653E\u51FA 80%\uFF08\u6BCF\u5206\u949F\u5747\u5300\u91CA\u653E\uFF09\uFF0C20% \u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF0C\u6309\u5DF2\u6FC0\u6D3B\u6743\u91CD\u5206\u7EA2\u3002\u6BCF 10 \u5206\u949F\u53EA\u9700\u6309\u6BCF 1 \u6743\u91CD\u70E7 1000 \u679A\u5373\u53EF\u6FC0\u6D3B\uFF1B\u51B7\u6E05\u65F6\u6BB5\u4E00\u540D\u5DF2\u6FC0\u6D3B\u5730\u4E3B\u5373\u53EF\u72EC\u5F97\u8BE5\u65F6\u6BB5\u5168\u90E8\u5206\u7EA2\u3002\u5730\u5757\u5206\u6210\u4E0D\u8FC7\u671F\uFF1B\u8F6E\u6B21\u5956\u52B1 30 \u5929\u4E0D\u9886\u8FC7\u671F\u3002",legendCommon:"\u666E\u901A 1.0",legendRare:"\u7A00\u6709 2.2",legendEpic:"\u53F2\u8BD7 3.5",legendMine:"\u6211\u7684",plotsHint:"\u62D6\u52A8\u661F\u7403\u65CB\u8F6C \xB7 \u70B9\u51FB\u5730\u5757\u67E5\u770B",roundKicker:"04 / \u6258\u5E95\u5151\u6362",roundHHtml:"\u91D1\u5E93\u6258\u5E95\uFF0C<br>\u6309\u6743\u91CD\u5151\u6362",roundP:"\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B\uFF0C\u6309\u5730\u5757\u6743\u91CD\u5206\u914D\u989D\u5EA6\u3002\u6211\u7684\u6258\u5E95\u989D\u5EA6 = \u6743\u91CD \xD7 \u6BCF\u6743\u91CD\u989D\u5EA6\u3002\u6BCF 1 \u6743\u91CD\u4E0A\u9650 = max(10 \u4E07, \u23082 \xD7 1500 \u4E07 \xF7 \u5168\u7F51\u5DF2\u53D1\u603B\u6743\u91CD\u2309)\uFF0C\u968F\u603B\u6743\u91CD\u5B9E\u65F6\u8BA1\u7B97\uFF0C\u5730\u5740\u989D\u5EA6\u5411\u4E0B\u53D6\u6574\u3002\u6258\u5E95\u7A0E 80% \u8FDB\u5F53\u524D\u6863\u300120% \u8FDB\u4E0B\u4E00\u6863\uFF1B\u5151\u6EE1\u7ACB\u523B\u5F00\u4E0B\u4E00\u6863\u3002\u6362\u56DE\u7684\u5E01 100% \u9500\u6BC1\uFF0C\u4E0D\u8BA1\u5165\u8F6E\u6B21\u5956\u6C60\u3001\u4E0D\u94F8\u5730\u5757\u3001\u4E0D\u8BA1\u5165\u6FC0\u6D3B\u3002\u6258\u5E95\u4E0D\u662F\u4FDD\u5E95\u6216\u5151\u4ED8\u627F\u8BFA\u3002",roundTop:"\u7B2C",roundTopSuf:"\u6863 \xB7 \u5F53\u524D\u6258\u5E95\u4EF7",quotaMath:"\u6211\u7684\u6258\u5E95\u989D\u5EA6 = \u6743\u91CD \xD7 \u6BCF\u6743\u91CD\u989D\u5EA6",roundSub:"\u4E0B\u4E00\u6863\u5956\u6C60",roundSub2:"BNB \xB7 \u672C\u6863\u5269\u4F59\u989D\u5EA6",roundSub3:" / 15M \xB7 \u6BCF\u6743\u91CD\u989D\u5EA6",roundSub4:" \xB7 \u4F60\u672C\u6863\u5269\u4F59",filled:"\u5DF2\u5151",filledOf:" / 15M",burnedCum:"\u7D2F\u8BA1\u6258\u5E95\u5151\u6362\u9500\u6BC1",sellBtn:"\u6309\u6258\u5E95\u4EF7\u5151\u6362",roundWarn:"\u26A0 \u6258\u5E95\u4EF7\u53EF\u80FD\u9AD8\u4E8E\u5E02\u4EF7\uFF0C\u8FD9\u65F6\u5730\u4E3B\u53EF\u80FD\u628A\u5F53\u524D\u6863\u989D\u5EA6\u5168\u90E8\u6362\u5B8C\uFF08\u5DF2\u77E5\u5E76\u63A5\u53D7\u7684\u98CE\u9669\uFF09\u3002",rulesKicker:"05 / \u4E00\u5C4F\u770B\u61C2",rulesH:"\u89C4\u5219\u5168\u90E8\u5199\u5728\u5408\u7EA6\u91CC",rule1s:"\u8F6E\u6B21\u5956\u6C60\uFF0810 \u5206\u949F\u4E00\u8F6E\uFF09\u3002\u7B2C 0\u2013539 \u79D2\u786E\u5B9A\u8BA1\u5165\uFF1B\u7B2C 540\u2013599 \u79D2\u968F\u673A\u622A\u6B62\uFF0C\u665A\u70E7\u53EF\u80FD\u987A\u5EF6\u5230\u4E0B\u4E00\u8F6E",rule2s:"\u653E\u51FA = min(\u8F6E\u6B21\u5956\u6C60\xD715%, \u672C\u8F6E\u71C3\u70E7\xD7min(\u6258\u5E95\u4EF7, \u5E02\u4EF7)\xD71)\u300250% \u6309\u4EFD\u989D\u5747\u5206\uFF0C50% \u5934\u5956\u7ED9\u71C3\u70E7\u6700\u591A\u4E14\u5148\u5230\u8005\uFF08\u4E0D\u8D85\u8FC7\u5956\u6C60 5%\uFF1B\u6709\u6548\u5730\u5740\u5C11\u4E8E 2 \u4EBA\u65F6\u5934\u5956\u7559\u6C60\uFF09",rule3s:"\u5355\u7B14\u6700\u5C11 1,000 \u679A\uFF1B\u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF0C\u6FC0\u6D3B\u4E0E\u5730\u5757\u7167\u5E38\u53D1\u653E",rule4s:"\u5730\u5757\u53EA\u80FD\u70E7\u5E01\u83B7\u5F97\uFF0C\u7075\u9B42\u7ED1\u5B9A\uFF0C\u4E0D\u53EF\u8F6C\u8BA9\u4E70\u5356\u3002\u8D2A\u5FC3\u62C6\u5206\uFF1A\u666E\u901A 10 \u4E07/1.0\u3001\u7A00\u6709 20 \u4E07/2.2\u3001\u53F2\u8BD7 30 \u4E07/3.5\u3002\u521B\u4E16 30 \u5206\u949F\u6BCF\u5206\u949F\u6700\u591A 20 \u5757\uFF08\u6700\u591A 600\uFF09\uFF0C\u4E4B\u540E\u53D1\u5230 2000",rule5s:"\u5730\u5757\u6C60\u6BCF 30 \u5206\u949F\u4E00\u8F6E\uFF0C\u653E\u51FA 80%\uFF08\u6BCF\u5206\u949F\u5747\u5300\u91CA\u653E\uFF09\uFF0C20% \u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF1B\u6309\u5DF2\u6FC0\u6D3B\u6743\u91CD\u5206\u7EA2\u3002\u6BCF 10 \u5206\u949F\u53EA\u9700\u6309\u6BCF 1 \u6743\u91CD\u70E7 1000 \u679A\u5373\u53EF\u6FC0\u6D3B\u3002\u51B7\u6E05\u65F6\u6BB5\u4E00\u540D\u5DF2\u6FC0\u6D3B\u5730\u4E3B\u5373\u53EF\u72EC\u5F97\u8BE5\u65F6\u6BB5\u5168\u90E8\u5206\u7EA2\u3002\u5730\u5757\u5206\u6210\u4E0D\u8FC7\u671F\uFF1B\u8F6E\u6B21\u5956\u52B1 30 \u5929\u4E0D\u9886\u8FC7\u671F\u3002",rule6s:"\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B\uFF0C\u6309\u5730\u5757\u6743\u91CD\u5206\u914D\u989D\u5EA6\u3002\u5151\u51FA\u7684\u5E01\u5168\u90E8\u9500\u6BC1\uFF0C\u4E0D\u8BA1\u5165\u8F6E\u6B21\u5956\u3001\u4E0D\u94F8\u5730\u3001\u4E0D\u8BA1\u5165\u6FC0\u6D3B\u300280%/20% \u5206\u5230\u5F53\u524D\u6863\u548C\u4E0B\u4E00\u6863\uFF0C\u5151\u6EE1\u7ACB\u523B\u5F00\u4E0B\u4E00\u6863",linkCustom:"Flap \u5B9A\u5236 UI \u9884\u89C8 \u2192",linkGeneric:"Flap \u901A\u7528\u91D1\u5E93\u9762\u677F \u2192",foot:"BNB Chain \xB7 Flap Tax Token V3 \xB7 \u7A0E 3% / 3% \xB7 \u9884\u89C8\u9875\uFF0C\u6240\u6709\u6570\u5B57\u4E3A\u6A21\u62DF",tabClaim:"\u9886\u53D6",tabPlot:"\u5730\u5757",tabRound:"\u6258\u5E95\u5151\u6362",close:"\u6536\u8D77",autoPlot:"\u81EA\u52A8\u8BA1\u5165\u4F60\u7684\u5730\u5757 \xB7 \u7075\u9B42\u7ED1\u5B9A",burnPhase:"\u7B2C 0\u2013539 \u79D2\u786E\u5B9A\u8BA1\u5165 / \u7B2C 540\u2013599 \u79D2\u968F\u673A\u622A\u6B62\uFF1B\u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E",burn:"\u71C3\u70E7",approve:"\u6388\u6743 EDEN",noscript:"\u9700\u8981\u542F\u7528 JavaScript \u624D\u80FD\u67E5\u770B EDEN \u9884\u89C8\u3002",langLabel:"\u8BED\u8A00",leadEmpty:"\u2014",quotaLine:"\u6211\u7684\u6258\u5E95\u989D\u5EA6 = {w} \xD7 {cap} = {total}\uFF08\u5DF2\u7528 {used}\uFF0C\u5269\u4F59 {left}\uFF09",tierOpen:"\u5F00\u653E\u4E2D \xB7 \u6258\u5E95\u65E0\u9700\u6FC0\u6D3B",tierOpening:"\u6B63\u5728\u5F00\u6863",tierWait:"\u521B\u4E16\u7ED3\u675F\u4E14\u6709\u5730\u5757\u540E\u5F00\u7B2C 1 \u6863",tickBurn:"\u7D2F\u8BA1\u71C3\u70E7",tickTax:"\u7D2F\u8BA1\u7A0E\u6536",tickFloor:"\u6258\u5E95\u4EF7",tickOpening:"\u5F00\u6863\u4E2D",tickAfterGenesis:"\u521B\u4E16\u7ED3\u675F\u540E\u5F00\u7B2C 1 \u6863",tickFilled:"\u672C\u6863\u5DF2\u5151",tickPlots:"\u5730\u5757\u5DF2\u53D1",tickWeight:"\u5168\u7F51\u6743\u91CD",tickTaxRate:"\u7A0E",tickTaxVal:"3% / 3% \u2192 100% \u91D1\u5E93",toastConnect:"\u5DF2\u6A21\u62DF\u8FDE\u63A5\u94B1\u5305\uFF1A5,000,000 EDEN \xB7 2.5 BNB\uFF08\u5047\u6570\u636E\uFF09",toastDisconnect:"\u5DF2\u65AD\u5F00\u6A21\u62DF\u94B1\u5305",toastConnectShort:"\u5DF2\u6A21\u62DF\u8FDE\u63A5\u94B1\u5305\uFF08\u5047\u6570\u636E\uFF09",toastApprove:"\u5DF2\u6A21\u62DF\u6388\u6743 EDEN \u7ED9\u91D1\u5E93\uFF08\u9996\u6B21\u4E00\u6B21\u5373\u53EF\uFF09",approving:"\u6388\u6743\u4E2D\u2026",previewTitle:"\u672C\u7B14\u9884\u89C8",previewCommon:"\u666E",previewRare:"\u7A00",previewEpic:"\u53F2",previewWeight:"\u6743\u91CD",previewBelow:"\u4F4E\u4E8E 1,000 \u679A",actOk:"\u672C\u7A97\u53E3\u5DF2\u6FC0\u6D3B \xB7 \u6743\u91CD {w}",actNeed:"\u8FD8\u5DEE {n} \u679A\u5373\u53EF\u6FC0\u6D3B\uFF08\u6BCF 1 \u6743\u91CD 1,000 \u679A / 10 \u5206\u949F\uFF09",chip1k:"1\u5343",chip30w:"30\u4E07",chip2m:"200\u4E07",sheetClaimTitle:"\u5F85\u9886",sheetYourPlots:"\u4F60\u7684\u5730\u5757",sheetAct:"\u6FC0\u6D3B",sheetActOn:"\u672C\u7A97\u53E3\u5DF2\u6FC0\u6D3B",sheetActOff:"\u672A\u6FC0\u6D3B\uFF0C\u8FD8\u5DEE {n}",claimBtn:"\u4E00\u952E\u9886\u53D6",claiming:"\u9886\u53D6\u4E2D\u2026",claimNote:"\u5730\u5757\u6C60\u6BCF 30 \u5206\u949F\u4E00\u8F6E\uFF0C\u653E\u51FA 80%\uFF08\u6BCF\u5206\u949F\u5747\u5300\u91CA\u653E\uFF09\uFF0C20% \u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF0C\u6309\u5DF2\u6FC0\u6D3B\u6743\u91CD\u5206\u7EA2\u3002\u6BCF 10 \u5206\u949F\u53EA\u9700\u6309\u6BCF 1 \u6743\u91CD\u70E7 1000 \u679A\u5373\u53EF\u6FC0\u6D3B\u3002\u672A\u6FC0\u6D3B\u4E0D\u5206\u7EA2\uFF0C\u4EFD\u989D\u5F52\u5DF2\u6FC0\u6D3B\u7684\u5730\u4E3B\uFF1B\u51B7\u6E05\u65F6\u6BB5\u4E00\u540D\u5DF2\u6FC0\u6D3B\u5730\u4E3B\u5373\u53EF\u72EC\u5F97\u8BE5\u65F6\u6BB5\u5168\u90E8\u5206\u7EA2\u3002\u5730\u5757\u5206\u6210\u4E0D\u8FC7\u671F\uFF1B\u8F6E\u6B21\u5956\u52B1 30 \u5929\u4E0D\u9886\u8FC7\u671F\u3002\u5730\u5757\u5728\u9886\u53D6\u6216\u89E6\u6478\u65F6\u61D2\u94F8\uFF0C\u6BCF\u7B14\u6700\u591A 50 \u5757\u3002",toastClaimed:"\u5DF2\u9886\u53D6 {bnb} BNB",toastClaimPlots:" + {n} \u5757\u5730",toastSim:"\uFF08\u6A21\u62DF\uFF09",needWallet:"\u8BF7\u5148\u8FDE\u63A5\u94B1\u5305\uFF08\u6A21\u62DF\uFF09",plot:"\u5730\u5757",mineMark:" \xB7 \u6211\u7684",plotTier:"\u6863\u4F4D",plotOwner:"\u5F52\u5C5E",plotYouBound:"\u4F60\uFF08\u7075\u9B42\u7ED1\u5B9A\uFF09",plotBound:"\uFF08\u7075\u9B42\u7ED1\u5B9A\uFF09",plotUnissued:"\u5C1A\u672A\u53D1\u653E",plotLastDiv:"\u4E0A\u671F\u5206\u6210",plotMine:"\u6211\u7684\u5730\u5757",plotActOff:"\u8FD8\u5DEE {n} \u679A",noPlots:"\u4F60\u8FD8\u6CA1\u6709\u5730\u5757\uFF0C\u71C3\u70E7\u5373\u53EF\u94F8\u9020",plotNote:"\u5730\u5757\u53EA\u80FD\u70E7\u5E01\u83B7\u5F97\uFF0C\u6C38\u4E45\u7ED1\u5B9A\u5730\u5740\uFF0C\u4E0D\u53EF\u8F6C\u8BA9\u3001\u4E0D\u53EF\u4E70\u5356\u3002\u6BCF 10 \u5206\u949F\u53EA\u9700\u6309\u6BCF 1 \u6743\u91CD\u70E7 1000 \u679A\u5373\u53EF\u6FC0\u6D3B\u3002\u51B7\u6E05\u65F6\u6BB5\u4E00\u540D\u5DF2\u6FC0\u6D3B\u5730\u4E3B\u5373\u53EF\u72EC\u5F97\u8BE5\u65F6\u6BB5\u5168\u90E8\u5206\u7EA2\u3002\u5730\u5757\u5206\u6210\u4E0D\u8FC7\u671F\u3002",tierN:"\u7B2C {id} \u6863 \xB7 \u5F53\u524D\u6258\u5E95\u4EF7",capLbl:"\u5E02\u503C",bnbPrice:"BNB \u4EF7",bnbEach:"BNB / \u679A",quotaLeft:"\u672C\u6863\u5269\u4F59\u989D\u5EA6",nextPool:"\u4E0B\u4E00\u6863\u5956\u6C60",capPerW:"\u6BCF\u6743\u91CD\u989D\u5EA6",myQuota:"\u6211\u7684\u6258\u5E95\u989D\u5EA6",yourLeft:"\u4F60\u672C\u6863\u5269\u4F59",yourEden:"\u4F60\u7684 EDEN",sellAmt:"\u5151\u6362\u6570\u91CF",sellOut:"\u53EF\u5F97",sellMin:"\u6700\u5C11\u6536\u5230\uFF08BNB\uFF09",sellDo:"\u6309\u6258\u5E95\u4EF7\u5151\u6362\uFF08\u5E01\u9500\u6BC1\uFF09",onlyHolders:"\u53EA\u6709\u5730\u4E3B\u80FD\u5151\u6362\u3002\u71C3\u70E7\u94F8\u5730\u540E\u5373\u53EF\u5151\uFF0C\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B\u3002",roundNote:"\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B\uFF0C\u6309\u5730\u5757\u6743\u91CD\u5206\u914D\u989D\u5EA6\u3002\u5151\u6EE1\u7ACB\u523B\u5F00\u4E0B\u4E00\u6863\u3002\u6362\u56DE\u7684 EDEN 100% \u9500\u6BC1\uFF0C\u4E0D\u8BA1\u5165\u8F6E\u6B21\u5956\u6C60\u3001\u4E0D\u94F8\u5730\u3001\u4E0D\u8BA1\u5165\u6FC0\u6D3B\u3002\u6258\u5E95\u4E0D\u662F\u4FDD\u5E95\u6216\u5151\u4ED8\u627F\u8BFA\u3002",roundRisk:"\u26A0 \u6258\u5E95\u4EF7\u53EF\u80FD\u9AD8\u4E8E\u5E02\u4EF7\uFF0C\u8FD9\u65F6\u5730\u4E3B\u53EF\u80FD\u628A\u5F53\u524D\u6863\u989D\u5EA6\u5168\u90E8\u6362\u5B8C\uFF08\u5DF2\u77E5\u5E76\u63A5\u53D7\u7684\u98CE\u9669\uFF09\u3002",usdNote:"USDT \u6309\u9884\u89C8\u6A21\u62DF BNB/USD \u4F30\u7B97\uFF0C\u53E3\u5F84\u4E0E\u76D8\u9762\u4E00\u81F4\uFF08\u5B8C\u6574\u5C0F\u6570\uFF0C\u4E0D\u7528\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF09\u3002",openingTier:"\u6B63\u5728\u5F00\u51FA\u7B2C 1 \u6863\u3002",waitTier:"\u521B\u4E16\u7ED3\u675F\u4E14\u6709\u5730\u5757\u540E\u5F00\u7B2C 1 \u6863\u3002",noTimer:"\u6CA1\u6709\u5012\u8BA1\u65F6\u3001\u6CA1\u6709\u5F00\u6863\u95E8\u69DB\u3002\u65B0\u4E00\u6863\u8D77\u59CB\u4EF7 = \u4E0B\u4E00\u6863\u5956\u6C60 \xF7 1500 \u4E07\uFF0C\u53EF\u80FD\u660E\u663E\u4F4E\u4E8E\u4E0A\u4E00\u6863\u3002",confirming:"\u786E\u8BA4\u4E2D\u2026",toastSell:"\u6258\u5E95\u5151\u6362 {take} \u679A\uFF0C\u6536\u5230 {out} BNB\uFF0C\u8FD9\u4E9B\u5E01\u5DF2\u9500\u6BC1\uFF08\u6A21\u62DF\uFF09",landlord:"\u5730\u4E3B",soulbound:" \xB7 \u7075\u9B42\u7ED1\u5B9A",transfer:"\u8F6C\u8BA9",noTransfer:"\u4E0D\u53EF\u8F6C\u8BA9\u3001\u4E0D\u53EF\u4E70\u5356",plotOnlyBurn:"\u5730\u5757\u53EA\u80FD\u70E7\u5E01\u83B7\u5F97\uFF0C\u6C38\u4E45\u7ED1\u5B9A\u71C3\u70E7\u5730\u5740\u3002",hoverUnissued:"\u5C1A\u672A\u53D1\u653E",hoverBound:"\u7075\u9B42\u7ED1\u5B9A\uFF0C\u4E0D\u53EF\u4E70\u5356",hoverWeight:"\u6743\u91CD",toastRoundOpen:"\u7B2C {id} \u6863\u6258\u5E95\u5151\u6362\u5F00\u542F\uFF1A\u5F53\u524D\u6258\u5E95\u4EF7 {usd}\uFF08\u5E02\u503C {cap}\uFF09",toastRoundWin:"\u7B2C {m} \u8F6E\uFF1A\u4F60\u5206\u5F97 {bnb} BNB",resMiss:"\u7B2C {m} \u8F6E \xB7 \u672A\u5230\u7EBF",resMissBody:"\u672C\u8F6E\u603B\u71C3\u70E7\u4F4E\u4E8E 200 \u4E07\u4E0D\u5F00\u5956\uFF0C\u5956\u91D1\u6EDA\u5165\u4E0B\u4E00\u8F6E\uFF08\u6FC0\u6D3B\u4E0E\u5730\u5757\u7167\u5E38\uFF09",resHit:"\u7B2C {m} \u8F6E \xB7 \u622A\u6B62 {cut} \u79D2",resSplit:"\u5747\u5206",resJack:"\u5934\u5956",resCounted:"\u8BA1\u5165",resMissed:"\u679A\u6CA1\u8D76\u4E0A\uFF0C\u5E76\u5165\u4E0B\u4E00\u8F6E",resYouGot:"\u4F60\u5206\u5F97 +{bnb} BNB",resYouMissed:"\u4F60\u8FD9\u6B21\u6CA1\u8D76\u4E0A\u622A\u6B62\uFF0C\u5DF2\u5E76\u5165\u4E0B\u4E00\u8F6E",toastBurned:"\u5DF2\u71C3\u70E7 {n} \u679A",errMin:"\u5355\u7B14\u6700\u5C11\u71C3\u70E7 1,000 \u679A",errWallet:"\u8BF7\u5148\u8FDE\u63A5\u94B1\u5305\uFF08\u6A21\u62DF\uFF09",errBal:"EDEN \u4F59\u989D\u4E0D\u8DB3",errNoTier:"\u5F53\u524D\u6863\u5C1A\u672A\u5F00\u51FA",errWaitTier:"\u521B\u4E16\u7ED3\u675F\u4E14\u6709\u5730\u5757\u540E\u5F00\u7B2C 1 \u6863",errHolders:"\u53EA\u6709\u5730\u4E3B\u80FD\u5151\u6362\uFF0C\u5730\u5757\u662F\u95E8\u7968\uFF1B\u6258\u5E95\u65E0\u9700\u6FC0\u6D3B",errQuotaYou:"\u4F60\u7684\u6258\u5E95\u989D\u5EA6\u5DF2\u7528\u5B8C",errQuotaTier:"\u672C\u6863\u989D\u5EA6\u5DF2\u5151\u6EE1\uFF0C\u5DF2\u5F00\u4E0B\u4E00\u6863",errMinOut:"\u53EF\u5F97 BNB \u4F4E\u4E8E\u4F60\u8BBE\u7684\u6700\u5C11\u6536\u5230\uFF0C\u672A\u6210\u4EA4",errNothing:"\u6682\u65F6\u6CA1\u6709\u53EF\u9886\u53D6\u7684",tierCommon:"\u666E\u901A",tierRare:"\u7A00\u6709",tierEpic:"\u53F2\u8BD7",common:"\u666E\u901A",rare:"\u7A00\u6709",epic:"\u53F2\u8BD7",autoPlotN:"\u81EA\u52A8\u8BA1\u5165\u4F60\u7684 {n} \u5757\u5730\uFF08\u666E {c} / \u7A00 {r} / \u53F2 {e} \xB7 \u6743\u91CD {w}\uFF09\uFF0C\u7075\u9B42\u7ED1\u5B9A",autoNone:"\u53EA\u53C2\u52A0\u8F6E\u6B21\u5956\u6C60",toastLateBurn:"\u968F\u673A\u7A97\u53E3\u5185\u70E7\u4E86 {n} \u679A\uFF1A\u7B2C 540\u2013599 \u79D2\u968F\u673A\u622A\u6B62\uFF0C\u665A\u70E7\u53EF\u80FD\u987A\u5EF6\u5230\u4E0B\u4E00\u8F6E",toastLazy:" \xB7 \u5F85\u63ED\u6653\u540E\u61D2\u94F8 {n} \u5757\u5730",toastBurnOk:"\u5DF2\u71C3\u70E7 {n} \u679A\uFF0C\u786E\u5B9A\u8BA1\u5165\u672C\u8F6E",toastMint:" \xB7 \u53D1\u5730 \u666E{c}/\u7A00{r}/\u53F2{e}",toastHavePlots:" \xB7 \u5DF2\u6709 {n} \u5757\u5730",toastPoolOnly:" \xB7 \u53EA\u53C2\u52A0\u8F6E\u6B21\u5956\u6C60",claimTotal:"\u53EF\u9886\u53D6\u5408\u8BA1",claimRound:"\u8F6E\u6B21\u5956\u52B1",claimPlot:"\u5730\u5757\u5206\u6210",claimPendingPlots:"\u5F85\u94F8\u5730\u5757",claimPendingN:"{n} \u5757\uFF08\u6BCF\u7B14\u6700\u591A 50\uFF09",myPlotsLine:"\u666E {c} / \u7A00 {r} / \u53F2 {e} \xB7 \u6743\u91CD {w}",weight:"\u6743\u91CD",unissued:"\u672A\u53D1\u653E",rule1n:"10 \u5206",rule3n:"200 \u4E07",spdTitle:"\u6A21\u62DF\u65F6\u95F4\u500D\u901F",walletTitle:"\u9884\u89C8\uFF1A\u6A21\u62DF\u8FDE\u63A5\uFF0C\u4E0D\u8C03\u7528\u4EFB\u4F55\u94B1\u5305",burnBarTitle:"200 \u4E07\u679A\u7EBF",feedAria:"\u5B9E\u65F6\u71C3\u70E7",sheetAria:"\u64CD\u4F5C\u9762\u677F",amtAria:"\u71C3\u70E7\u6570\u91CF",socialX:"X\uFF08\u63A8\u7279\uFF09",socialTg:"Telegram",dockCollapse:"\u6536\u8D77\u71C3\u70E7\u680F",dockExpand:"\u5C55\u5F00\u71C3\u70E7\u680F",dockReady:"\u5DF2\u5C31\u7EEA",walletShort:"\u8FDE\u63A5",moreMenu:"\u66F4\u591A"},en:{docTitle:"EDEN \xB7 Prize-round burn vault (preview \xB7 simulated data)",docDesc:"EDEN prize-round burn vault dapp preview. All figures are simulated locally; no wallet, no transactions.",previewBadge:"Preview \xB7 simulated data",previewNote:"No wallet, no transactions. Every figure is simulated in this browser. USDT estimates use the preview price 1 BNB = $612.",brandTag:"Prize pool (one round every 10 minutes)",nav1:"Forge",nav2:"Pools",nav3:"Plots",nav4:"Floor",wallet:"Connect wallet",walletOn:"0x5eED\u2026beEF",kick:"BNB CHAIN \xB7 FLAP VAULT \xB7 Prize pool (10-min rounds) \xB7 Round",kickRound:"",tagHtml:"Prize pool (one round every 10 minutes). Payout = min(pool \xD7 15%, this round\u2019s burn \xD7 min(floor, market) \xD7 1).<br><em>Seconds 0\u2013539 always count; seconds 540\u2013599 are a random cutoff</em>. A round under 2,000,000 tokens pays nothing and rolls the prize, while activation and plot minting still happen.",prizeLbl:"Expected payout this round",jackpotLine:"Jackpot",jackpotLead:"Leader",burnLine:"Burned this round",burnLineRest:"/ 2,000,000 \xB7 Under 2,000,000 tokens the prize rolls to the next round",statBurned:"Burned this round",statAddrs:"Addresses",statMine:"Your burn",ctaBurn:"Burn now",ctaPools:"Where the tax goes \u2193",clockLeft:"Time left",clockWin:"Random cutoff 540\u2013599",clockCertain:"Seconds 0\u2013539 always count",clockLate:"A late burn may roll into the next round",clockPhaseCertain:"Seconds 0\u2013539 always count \xB7 Under 2,000,000 tokens the prize rolls to the next round",clockPhaseWin:"Seconds 540\u2013599 are a random cutoff; a late burn may roll \xB7 Under 2,000,000 tokens the prize rolls to the next round",clockReveal:"Revealing the cutoff second",clockRevealSub:"Decided by the block hash; nobody can change it",clockCut:"Cutoff",clockCutSub:"Hammer at second {n}",you:"You",cap:"Market cap",perToken:"BNB / token",tokenUnit:"tokens",pxMkt:"Market",pxFloor:"Floor",pxRef:"Reward ref. min(floor, market)",poolsKicker:"02 / Where the tax goes",poolsH:"One tax, three flows",poolsP:"3% / 3% buy/sell tax, 100% into the vault \xB7 0 ops \xB7 0 project wallets",pool1n:"Prize pool",pool1d:"One round every 10 minutes. Payout = min(pool\xD715%, this round\u2019s burn\xD7min(floor, market)\xD71); 50% pro-rata, 50% jackpot (\u2264 5% of the pool, needs 2 addresses)",pool2n:"Plot pool",pool2d:"One round every 30 minutes, 80% released evenly over the minutes, 20% rolls; split by activated weight",pool3n:"Floor reserve",pool3dPre:"\u2248 ",pool3dSuf:" USDT \xB7 used only for floor redemptions; redeemed tokens are burned",plotsKicker:"03 / Plot planet",plotsHHtml:"2,000 plots,<br>minted by burning, soulbound",plotsP:"Plots can only be obtained by burning tokens. They are permanently bound to the burning address and cannot be transferred or sold. Each burn is split greedily, highest tier first: Common 100,000 (weight 1.0), Rare 200,000 (2.2), Epic 300,000 (3.5). Genesis lasts 30 minutes at up to 20 plots per minute (max 600), then issuance continues to 2,000. The plot pool runs 30-minute rounds, releasing 80% evenly over the minutes, 20% rolling over, split by activated weight. Every 10 minutes you only need to burn 1,000 tokens per 1.0 weight to activate; in a quiet window a single activated holder takes that period\u2019s whole dividend. Plot dividends never expire; unclaimed prize-round rewards expire after 30 days.",legendCommon:"Common 1.0",legendRare:"Rare 2.2",legendEpic:"Epic 3.5",legendMine:"Mine",plotsHint:"Drag to spin the planet \xB7 tap a plot for details",roundKicker:"04 / Floor redemption",roundHHtml:"Vault floor,<br>redeemed by weight",roundP:"Floor redemption needs no activation. Your quota = weight \xD7 quota per weight. The cap per 1.0 weight = max(100,000, \u23082 \xD7 15,000,000 \xF7 network issued weight\u2309), recomputed live, rounded down per address. 80% of the floor tax goes to the current tier, 20% to the next; a filled tier opens the next one at once. Redeemed tokens are 100% burned and do not count toward the prize pool, plot minting, or activation. The floor is not a guarantee or a promise to pay.",roundTop:"Tier",roundTopSuf:" \xB7 current floor price",quotaMath:"Your floor quota = weight \xD7 quota per weight",roundSub:"Next-tier pool",roundSub2:"BNB \xB7 quota left this tier",roundSub3:" / 15M \xB7 per-weight quota",roundSub4:" \xB7 your remaining this tier",filled:"Filled",filledOf:" / 15M",burnedCum:"Cumulative floor redemption burns",sellBtn:"Redeem at floor price",roundWarn:"\u26A0 The floor price may be above the market. Holders may then fill the current tier\u2019s quota (a known and accepted risk).",rulesKicker:"05 / One-screen rules",rulesH:"Every rule is in the contract",rule1s:"Prize pool (one round every 10 minutes). Seconds 0\u2013539 always count; seconds 540\u2013599 are a random cutoff, and a late burn may roll into the next round.",rule2s:"Payout = min(prize pool\xD715%, this round\u2019s burn\xD7min(floor, market)\xD71). 50% pro-rata, 50% jackpot to the largest (then earliest) burner (capped at 5% of the pool; jackpot stays in the pool if fewer than 2 addresses).",rule3s:"Minimum 1,000 tokens per burn. A round under 2,000,000 tokens pays nothing and rolls the prize; activation and plot minting still happen.",rule4s:"Plots are minted only by burning, soulbound, and cannot be transferred or sold. Greedy split: Common 100k/1.0, Rare 200k/2.2, Epic 300k/3.5. Genesis: 30 minutes, up to 20 plots per minute (max 600), then on to 2,000.",rule5s:"Plot pool: 30-minute rounds, 80% released evenly over the minutes, 20% rolls; split by activated weight. Every 10 minutes, burn 1,000 tokens per 1.0 weight to activate. In a quiet window a single activated holder takes that period\u2019s whole dividend. Plot dividends never expire; unclaimed prize-round rewards expire after 30 days.",rule6s:"Floor redemption needs no activation and is allocated by plot weight. Redeemed tokens are fully burned and do not count toward the prize, plots, or activation. 80%/20% splits into the current and next tier; a filled tier opens the next one at once.",linkCustom:"Flap custom UI preview \u2192",linkGeneric:"Flap generic vault panel \u2192",foot:"BNB Chain \xB7 Flap Tax Token V3 \xB7 tax 3% / 3% \xB7 preview page, all figures are simulated",tabClaim:"Claim",tabPlot:"Plots",tabRound:"Floor",close:"Close",autoPlot:"Automatically credited to your plots \xB7 soulbound",burnPhase:"Seconds 0\u2013539 always count / 540\u2013599 random cutoff; under 2,000,000 tokens the prize rolls to the next round",burn:"Burn",approve:"Approve EDEN",noscript:"JavaScript is required to view the EDEN preview.",langLabel:"Language",leadEmpty:"\u2014",quotaLine:"Your floor quota = {w} \xD7 {cap} = {total} (used {used}, left {left})",tierOpen:"Open \xB7 floor needs no activation",tierOpening:"Opening a tier",tierWait:"Tier 1 opens after genesis once at least one plot is issued",tickBurn:"Total burned",tickTax:"Total tax in",tickFloor:"Floor price",tickOpening:"Opening",tickAfterGenesis:"Opens after genesis",tickFilled:"Filled this tier",tickPlots:"Plots issued",tickWeight:"Network weight",tickTaxRate:"Tax",tickTaxVal:"3% / 3% \u2192 100% to vault",toastConnect:"Simulated wallet connected: 5,000,000 EDEN \xB7 2.5 BNB (fake data)",toastDisconnect:"Simulated wallet disconnected",toastConnectShort:"Simulated wallet connected (fake data)",toastApprove:"Simulated EDEN approval for the vault (once is enough)",approving:"Approving\u2026",previewTitle:"This burn",previewCommon:"C",previewRare:"R",previewEpic:"E",previewWeight:"Weight",previewBelow:"Below 1,000 tokens",actOk:"Activated this window \xB7 weight {w}",actNeed:"{n} more tokens to activate (1,000 per 1.0 weight / 10 min)",chip1k:"1k",chip30w:"300k",chip2m:"2M",sheetClaimTitle:"To claim",sheetYourPlots:"Your plots",sheetAct:"Activation",sheetActOn:"Activated this window",sheetActOff:"Not active, {n} short",claimBtn:"Claim all",claiming:"Claiming\u2026",claimNote:"Plot pool: 30-minute rounds, 80% released evenly over the minutes, 20% rolls, split by activated weight. Every 10 minutes, burn 1,000 tokens per 1.0 weight to activate. Inactive holders earn nothing; their share goes to active holders. In a quiet window a single activated holder takes that period\u2019s whole dividend. Plot dividends never expire; unclaimed prize-round rewards expire after 30 days. Plots are lazy-minted on claim or touch, 50 per transaction.",toastClaimed:"Claimed {bnb} BNB",toastClaimPlots:" + {n} plots",toastSim:" (simulated)",needWallet:"Connect the wallet first (simulated)",plot:"Plot",mineMark:" \xB7 mine",plotTier:"Tier",plotOwner:"Owner",plotYouBound:"You (soulbound)",plotBound:" (soulbound)",plotUnissued:"Not issued yet",plotLastDiv:"Last dividend",plotMine:"Your plots",plotActOff:"{n} tokens short",noPlots:"You have no plots yet. Burn to mint.",plotNote:"Plots can only be obtained by burning tokens, are permanently bound, and cannot be transferred or sold. Every 10 minutes, burn 1,000 tokens per 1.0 weight to activate. In a quiet window a single activated holder takes that period\u2019s whole dividend. Plot dividends never expire.",tierN:"Tier {id} \xB7 current floor price",capLbl:"Market cap",bnbPrice:"BNB price",bnbEach:"BNB / token",quotaLeft:"Quota left this tier",nextPool:"Next-tier pool",capPerW:"Quota per weight",myQuota:"Your floor quota",yourLeft:"Your remaining this tier",yourEden:"Your EDEN",sellAmt:"Redeem amount",sellOut:"You receive",sellMin:"Minimum received (BNB)",sellDo:"Redeem at floor (tokens burned)",onlyHolders:"Only plot holders can redeem. Mint a plot by burning, then redeem \u2014 no activation required.",roundNote:"Floor redemption needs no activation and is allocated by plot weight. A filled tier opens the next one at once. Redeemed EDEN is 100% burned and does not count toward the prize pool, plots, or activation. The floor is not a guarantee or a promise to pay.",roundRisk:"\u26A0 The floor price may be above the market. Holders may then fill the current tier\u2019s quota (a known and accepted risk).",usdNote:"USDT is estimated from the preview BNB/USD rate, with the same full-decimal style as the rest of the board (no scientific notation).",openingTier:"Opening tier 1.",waitTier:"Tier 1 opens after genesis once at least one plot is issued.",noTimer:"No countdown and no opening threshold. A new tier\u2019s starting price = next-tier pool \xF7 15M and may be much lower than the last.",confirming:"Confirming\u2026",toastSell:"Floor redeemed {take} tokens, received {out} BNB; those tokens were burned (simulated)",landlord:"Holder",soulbound:" \xB7 soulbound",transfer:"Transfer",noTransfer:"Cannot be transferred or sold",plotOnlyBurn:"Plots can only be obtained by burning tokens and stay bound to the burning address.",hoverUnissued:"Not issued yet",hoverBound:"Soulbound, cannot be sold",hoverWeight:"Weight",toastRoundOpen:"Tier {id} floor opened: current floor {usd} (market cap {cap})",toastRoundWin:"Round {m}: you received {bnb} BNB",resMiss:"Round {m} \xB7 threshold missed",resMissBody:"Under 2,000,000 tokens this round pays nothing and the prize rolls (activation and plots still work)",resHit:"Round {m} \xB7 cutoff at {cut}s",resSplit:"Split",resJack:"Jackpot",resCounted:"Counted",resMissed:"tokens missed the cutoff and rolled",resYouGot:"You received +{bnb} BNB",resYouMissed:"You missed the cutoff and rolled into the next round",toastBurned:"Burned {n} tokens",errMin:"Minimum burn is 1,000 tokens",errWallet:"Connect the wallet first (simulated)",errBal:"Not enough EDEN",errNoTier:"This tier is not open yet",errWaitTier:"Tier 1 opens after genesis once at least one plot is issued",errHolders:"Only plot holders can redeem; the plot is the ticket. Floor needs no activation.",errQuotaYou:"Your floor quota is used up",errQuotaTier:"This tier\u2019s quota is filled; the next tier is open",errMinOut:"BNB out is below your minimum; the trade did not execute",errNothing:"Nothing to claim right now",tierCommon:"Common",tierRare:"Rare",tierEpic:"Epic",common:"Common",rare:"Rare",epic:"Epic",autoPlotN:"Auto-credited to your {n} plots (C {c} / R {r} / E {e} \xB7 weight {w}), soulbound",autoNone:"Prize pool only",toastLateBurn:"Burned {n} tokens in the random window: seconds 540\u2013599 are a random cutoff, a late burn may roll",toastLazy:" \xB7 {n} plots will lazy-mint after the reveal",toastBurnOk:"Burned {n} tokens, counted in this round",toastMint:" \xB7 minted C{c}/R{r}/E{e}",toastHavePlots:" \xB7 you already have {n} plots",toastPoolOnly:" \xB7 prize pool only",claimTotal:"Total claimable",claimRound:"Prize-round rewards",claimPlot:"Plot dividends",claimPendingPlots:"Plots to mint",claimPendingN:"{n} plots (50 per transaction)",myPlotsLine:"C {c} / R {r} / E {e} \xB7 weight {w}",weight:"Weight",unissued:"Unissued",rule1n:"10 min",rule3n:"2M",spdTitle:"Simulation speed",walletTitle:"Preview: simulated connect, no real wallet",burnBarTitle:"2,000,000-token line",feedAria:"Live burns",sheetAria:"Action panel",amtAria:"Burn amount",socialX:"X (Twitter)",socialTg:"Telegram",dockCollapse:"Minimize burn bar",dockExpand:"Expand burn bar",dockReady:"Ready",walletShort:"Connect",moreMenu:"More"}},Jf="eden:lang",ju=new Set,Fn="zh"});var uc={};Bp(uc,{ADDRS:()=>Mr,ME:()=>Ut,N:()=>hi,P:()=>Be,S:()=>L,TIER:()=>On,TIER_NAME:()=>Sr,TIER_W:()=>nh,activationNeed:()=>op,addrOf:()=>ws,advance:()=>ch,capPerPlot:()=>Dx,capPerWeight:()=>Di,claimAll:()=>lh,doBurn:()=>oc,emit:()=>Fi,fullPoolBurn:()=>oh,genesisOver:()=>rp,jackpotEst:()=>Oo,lastPaid:()=>br,liveTierPrice:()=>Bn,marketPrice:()=>ac,minuteBurned:()=>os,minuteCap:()=>rh,myActivation:()=>Tr,myCap:()=>Er,myPlotDividends:()=>ih,myPlots:()=>Ui,myTierCounts:()=>Uo,myTierLeft:()=>Cs,myWeight:()=>ss,owner:()=>$t,plotTier:()=>gn,plotsFromBurn:()=>rc,prizeFor:()=>Fo,refFloorPrice:()=>ah,secOf:()=>As,seedMinute:()=>uh,sell:()=>cc,sellQuote:()=>lc,sub:()=>rs,tier1Ready:()=>Rs,totalWeight:()=>Nx,weightOf:()=>di});function rc(i){let e=i,t=Math.floor(e/Be.costE);e-=t*Be.costE;let n=Math.floor(e/Be.costR);e-=n*Be.costR;let s=Math.floor(e/Be.costC),r=t+n+s;if(r>Be.plotsMax){let a=r-Be.plotsMax;a>=s?(a-=s,s=0):(s-=a,a=0),a>=n?(a-=n,n=0):(n-=a,a=0),a>0&&(t=Math.max(0,t-a))}let o=[];for(let a=0;a<t;a++)o.push(On.EPIC);for(let a=0;a<n;a++)o.push(On.RARE);for(let a=0;a<s;a++)o.push(On.COMMON);return{epic:t,rare:n,common:s,n:t+n+s,tiers:o,weight:t*Be.wE+n*Be.wR+s*Be.wC}}function Lx(i){let t=(Math.imul(i+1,1664525)+1013904223>>>0)%8;return t<3?On.COMMON:t<6?On.RARE:On.EPIC}function sp(){let i=0,e=0;for(let t=0;t<L.plotsMinted;t++){let n=di(t);i+=n,$t[t]===Ut&&(e+=n)}return L.totalWeight=i,e}function Ui(){let i=[];for(let e=0;e<L.plotsMinted;e++)$t[e]===Ut&&i.push(e);return i}function Uo(){let i={common:0,rare:0,epic:0,weight:0};for(let e of Ui())gn[e]===1?i.common++:gn[e]===2?i.rare++:gn[e]===3&&i.epic++,i.weight+=di(e);return i}function op(i=Ut){let e=0;if(i===Ut)e=ss();else for(let t=0;t<L.plotsMinted;t++)$t[t]===i&&(e+=di(t));return e*Be.actPerWeight}function Tr(){let i=ss(),e=i*Be.actPerWeight,t=Math.floor(L.t/Be.actWindow);L.my.winId!==t&&(L.my.winId=t,L.my.winBurn=0);let n=L.my.winBurn||0,s=e>0&&n>=e;return{weight:i,need:e,burned:n,left:Math.max(0,e-n),active:s,window:t,costPer:Be.actPerWeight}}function ih(){let i=Uo(),e=Tr();return{plots:i.common+i.rare+i.epic,common:i.common,rare:i.rare,epic:i.epic,weight:i.weight,claimable:L.my.plotDiv,active:e.active,need:e.need,burned:e.burned,left:e.left,activeWeight:L.activeWeight,pool:L.plotPool,remaining:L.plotDivLeft}}function Ux(i){L.minutePool+=i*Be.split[0],L.plotPool+=i*Be.split[1];let e=i*Be.split[2];L.round?(L.round.pool+=e*.8,L.nextPool+=e*.2,L.round.price=Bn()):L.floorReserve+=e,L.taxIn+=i,Fi("income",i)}function ap(i,e){if(L.plotsMinted>=hi||L.plotsCommitted>=hi)return-1;let t=L.minute-L.startMinute,n=t<Be.genesisMinutes?(t+1)*Be.plotsPerMinute:hi;if(L.plotsCommitted>=Math.min(n,hi))return-1;let s=L.plotsMinted;return $t[s]=i,gn[s]=e,L.plotsMinted++,L.plotsCommitted++,L.totalWeight+=nh[e],s}function np(i,e){let t=Math.floor(L.t/Be.actWindow);if(i===Ut){L.my.winId!==t&&(L.my.winId=t,L.my.winBurn=0),L.my.winBurn+=e;let n=op(Ut);n>0&&L.my.winBurn>=n&&(L.my.actW=ss(),L.my.actWin=t)}}function oc(i,e){let t=As(L.t);if(e<Be.minBurnTx)throw new Error(F("errMin"));if(i===Ut){if(!L.wallet)throw new Error(F("errWallet"));if(e>L.my.tok)throw new Error(F("errBal"));L.my.tok-=e,L.my.minuteBurn+=e}np(i,e);let n={who:i,amount:e,sec:t,late:t>=Be.certain,minute:L.minute};L.cur.burns.push(n),n.late?L.cur.late+=e:L.cur.pre+=e;let s=(L.cur.agg.get(i)||0)+e;L.cur.agg.set(i,s),s>L.cur.leadAmt&&(L.cur.leadAmt=s,L.cur.lead=i),L.burnedTotal+=e;let r=rc(e),o=[];if(t<Be.certain)for(let a of r.tiers){let l=ap(i,a);l>=0&&(o.push(l),i===Ut&&(L.my.plotsPending=Math.max(0,L.my.plotsPending)))}else r.n&&i===Ut&&(L.my.plotsPending+=r.n);return i===Ut&&o.length&&np(i,0),Fi("burn",{...n,minted:o,preview:r}),{...n,minted:o,preview:r}}function ac(){return sh()*L.mktPrem}function rh(){return L.minutePool*Be.prizePct}function Fo(i){return Math.min(rh(),i*lp())}function oh(){let i=lp();return i>0?rh()/i:0}function ah(){return sh()}function Oo(i){let e=Fo(i),t=e*Be.jackpotShare,n=L.minutePool*Be.jackpotPoolCap,s=L.cur.agg.size;return s<Be.jackpotMinBurners?{release:e,jackpot:0,proRata:e*Be.jackpotShare,lead:L.cur.lead,leadAmt:L.cur.leadAmt,burners:s}:{release:e,jackpot:Math.min(t,n),proRata:e-Math.min(t,n),lead:L.cur.lead,leadAmt:L.cur.leadAmt,burners:s}}function Fx(){let i=Math.floor((L.t-1)/Be.prizeRound),e=Be.certain+Math.floor(Math.random()*61),t=L.cur.carry,n=0,s=0,r=0,o=new Map,a=null,l=0;for(let d of L.cur.burns)if(d.sec<e){t+=d.amount,d.who===Ut&&(n+=d.amount);let M=(o.get(d.who)||0)+d.amount;o.set(d.who,M),M>l&&(l=M,a=d.who)}else s+=d.amount,d.who===Ut&&(r+=d.amount);let c=0,u=0,p=!1,h=0,m=0,_=null;if(t<Be.minMinuteBurn)p=!0,s+=t,r+=n,n=0;else{c=Fo(t);let d=Oo(t),M=o.size;m=c*Be.jackpotShare,h=M>=Be.jackpotMinBurners?Math.min(c*Be.jackpotShare,L.minutePool*Be.jackpotPoolCap):0,h===0?m=c-0:m=c-h,L.minutePool-=m+h,u=t>0?n/t:0,L.my.claim+=m*u,a===Ut&&h>0&&(L.my.claim+=h),_=h>0?a:null}let x=[...o.entries()].sort((d,M)=>M[1]-d[1]).slice(0,6).map(([d,M])=>({w:d,a:M,bnb:p?0:m*M/t+(d===_?h:0)})),f={m:i,cutoff:e,total:t,prize:m+h,pro:m,jackpot:h,win:_,mine:m+h?m*u+(a===Ut?h:0):0,myIn:n,addrs:o.size,roll:s,rolled:p,plots:0,top:x,lead:a,leadAmt:l};L.lastCut={cutoff:e,t:L.t,m:i},L.minuteHist.unshift(f),L.minuteHist.length>8&&L.minuteHist.pop(),L.minute+=10,L.cur={burns:[],pre:0,late:0,carry:s,agg:new Map,lead:null,leadAmt:0},L.my.minuteBurn=r,Fi("minute",f)}function Ox(){let i=Math.floor(L.t/60);if(L.lastDivMin<0){L.lastDivMin=i;return}if(i===L.lastDivMin)return;let e=Math.min(4,i-L.lastDivMin);for(let t=0;t<e;t++){let n=L.lastDivMin+t,s=n%(Be.plotDivRound/60);if(s===0&&(L.plotPool+=L.plotDivLeft,L.plotDivBudget=L.plotPool*Be.plotRelease,L.plotPool-=L.plotDivBudget,L.plotDivLeft=L.plotDivBudget),L.activeWeight>0&&L.plotDivLeft>0){let r=Be.plotDivRound/60-s,o=L.plotDivLeft/Math.max(1,r);L.plotDivLeft-=o;let a=L.my.actWin===Math.floor(n*60/Be.actWindow)?L.my.actW:0;if(a>0){let l=o*(a/L.activeWeight);L.my.plotDiv+=l;let c=Ui(),u=c.length?l/c.length:0;c.forEach(p=>br[p]=u)}}}L.lastDivMin=i}function ip(i){L.roundId++,L.round={id:L.roundId,pool:i,paid:0,filled:0,openAt:L.t},L.round.price=Bn(),L.my.redeemTier!==L.roundId&&(L.my.redeemUsed=0,L.my.redeemTier=L.roundId),Fi("roundOpen",L.round)}function cp(){let i=L.round;if(i&&i.filled>=Be.quota-1e-6){L.roundHist.unshift({id:i.id,price:Bn()||i.price,filled:i.filled,why:"\u5151\u6EE1"}),L.roundHist.length>5&&L.roundHist.pop();let e=L.nextPool;L.nextPool=0,L.round=null,Fi("roundEnd",i),ip(e)}if(!L.round&&Rs()){let e=L.floorReserve*.8;L.nextPool+=L.floorReserve*.2,L.floorReserve=0,ip(e)}L.round&&(L.round.price=Bn())}function lc(i,e=Ut){let t=L.round;if(!t)return{take:0,out:0,left:0};let n=e===Ut?Cs():Math.floor((()=>{let o=0;for(let a=0;a<L.plotsMinted;a++)$t[a]===e&&(o+=di(a));return o})()*Di()),s=Math.max(0,Math.min(i,n,Be.quota-t.filled)),r=Bn();return{take:s,out:s*r,left:n,price:r}}function cc(i,e,t){let n=L.round;if(!n)throw new Error(Rs()?F("errNoTier"):F("errWaitTier"));let s=0;for(let o=0;o<L.plotsMinted;o++)$t[o]===i&&s++;if(s<=0)throw new Error(F("errHolders"));let r=lc(e,i);if(r.take<=0)throw new Error(r.left<=0?F("errQuotaYou"):F("errQuotaTier"));if(t&&r.out<t)throw new Error(F("errMinOut"));if(i===Ut){if(!L.wallet)throw new Error(F("errWallet"));if(r.take>L.my.tok)throw new Error(F("errBal"));L.my.tok-=r.take,L.my.bnb+=r.out,L.my.redeemUsed=(L.my.redeemTier===n.id?L.my.redeemUsed:0)+r.take,L.my.redeemTier=n.id}return n.filled+=r.take,n.paid+=r.out,n.price=Bn(),L.roundBurned+=r.take,Fi("sell",{who:i,...r}),cp(),r}function lh(){if(!L.wallet)throw new Error(F("errWallet"));let i=L.my.claim+L.my.plotDiv,e=Math.min(L.my.plotsPending,Be.maxLazyMint);if(i<=0&&!e)throw new Error(F("errNothing"));L.my.bnb+=i,L.my.claim=0,L.my.plotDiv=0;let t=[];for(let n=0;n<e&&L.plotsMinted<hi;n++){let s=ap(Ut,On.COMMON);s>=0&&t.push(s)}return L.my.plotsPending=Math.max(0,L.my.plotsPending-t.length),Fi("claim",{bnb:i,plots:t}),{bnb:i,plots:t}}function Bx(){L.t++;let i=As(L.t);i%60===0&&L.minute++,Math.random()<.45&&Ux(yr(.0015,.014));let e=i>=Be.certain?.55:.22;if(Math.random()<e){let t=Math.round(Math.exp(yr(Math.log(2e3),Math.log(24e5)))/1e3)*1e3;try{oc(Math.floor(Math.random()*Mr.length),t)}catch{}}if(Math.random()<.03&&L.round)try{cc(Math.floor(Math.random()*Mr.length),Math.round(yr(5e4,9e5)/1e3)*1e3)}catch{}i===0&&Fx(),Ox(),cp(),L.mktPrem=ep(L.mktPrem+yr(-.004,.0045),2.2,3.2),L.chg=ep(L.chg+yr(-.05,.05),-6,9),Fi("tick",i)}function ch(i){sc+=Math.min(i,.25)*L.speed;let e=0;for(;sc>=1&&e<600;)sc-=1,e++,Bx();return L.speed<=10?sc:0}function os(){return L.cur.carry+L.cur.pre+L.cur.late}function uh(){let i=As(L.t);for(let e=0;e<i;e++)if(Math.random()<.18){let t=Math.round(Math.exp(yr(Math.log(3e3),Math.log(12e5)))/1e3)*1e3,n=Math.floor(Math.random()*Mr.length),s={who:n,amount:t,sec:e,late:e>=Be.certain,minute:L.minute};L.cur.burns.push(s),s.late?L.cur.late+=t:L.cur.pre+=t;let r=(L.cur.agg.get(n)||0)+t;L.cur.agg.set(n,r),r>L.cur.leadAmt&&(L.cur.leadAmt=r,L.cur.lead=n)}os()<8e5&&(L.cur.carry+=115e4)}var Be,Ut,yr,ep,tp,Mr,ws,As,On,Sr,nh,L,hi,$t,br,gn,di,Bn,Nx,Di,ss,Er,Cs,Dx,rp,Rs,th,Fi,rs,sh,lp,sc,up=en(()=>{ic();Be={split:[.45,.3,.25],prizePct:.15,jackpotShare:.5,jackpotPoolCap:.05,jackpotMinBurners:2,prizeRound:600,certain:540,minMinuteBurn:2e6,minBurnTx:1e3,plotRelease:.8,quota:15e6,plotsMax:2e3,plotsPerMinute:20,genesisMinutes:30,costC:1e5,costR:2e5,costE:3e5,wC:1,wR:2.2,wE:3.5,actPerWeight:1e3,actWindow:600,plotDivRound:1800,minCapPerWeight:1e5,maxRedeemPlots:50,supply:1e9,bnbUsd:612,maxLazyMint:50},Ut=-1,yr=(i,e)=>i+Math.random()*(e-i),ep=(i,e,t)=>Math.max(e,Math.min(t,i)),tp=()=>Math.random().toString(16).slice(2,6).padEnd(4,"0"),Mr=Array.from({length:400},()=>`0x${tp()}\u2026${tp()}`),ws=i=>i===Ut?F("you"):Mr[i],As=i=>(i%Be.prizeRound+Be.prizeRound)%Be.prizeRound,On={COMMON:1,RARE:2,EPIC:3},Sr=new Proxy({},{get:(i,e)=>F({1:"tierCommon",2:"tierRare",3:"tierEpic"}[+e]||"plotUnissued")}),nh={1:Be.wC,2:Be.wR,3:Be.wE};L={t:312*600+120,speed:1,minute:1874,wallet:!1,approved:!1,minutePool:18.42,plotPool:9.37,taxIn:142.6,burnedTotal:4126e5,roundBurned:5831e4,plotsMinted:1680,plotsCommitted:1680,plotQuotaCarry:0,plotEma:0,roundId:3,round:null,roundHist:[],nextPool:.85,floorReserve:0,startMinute:0,startTime:0,cur:{burns:[],pre:0,carry:0,agg:new Map,late:0,lead:null,leadAmt:0},my:{tok:5e6,bnb:2.5,claim:0,credit:0,plotDiv:.0047,plotsPending:0,minuteBurn:0,hourBurn:0,winBurn:0,winId:-1,actW:0,actWin:-1,redeemUsed:0,redeemTier:3},sel:6,vol24:0,lastHourAt:0,lastCut:null,mktPrem:2.6,chg:3.2,minuteHist:[],hourBurn:new Map,openHours:3,totalWeight:0,activeWeight:0,actWindow:0,plotDivLeft:0,plotDivBudget:0,lastDivMin:-1};L.round={id:3,pool:3.42,paid:.86,filled:38e5,openAt:L.t-2.1*3600};L.round.price=(L.round.pool-L.round.paid)/(Be.quota-L.round.filled);L.roundHist=[{id:2,price:48e-8,filled:15e6,why:"\u5151\u6EE1"},{id:1,price:21e-8,filled:15e6,why:"\u5151\u6EE1"}];hi=Be.plotsMax,$t=new Int32Array(hi),br=new Float64Array(hi),gn=new Uint8Array(hi),di=i=>nh[gn[i]]||0;for(let i=0;i<hi;i++)$t[i]=Math.floor(Math.random()*Mr.length),gn[i]=i<L.plotsMinted?Lx(i):0;[5,40,232,880,1510].forEach((i,e)=>{$t[i]=Ut,gn[i]=[On.COMMON,On.RARE,On.EPIC,On.COMMON,On.RARE][e]});sp();L.my.actW=sp();L.my.actWin=Math.floor(L.t/Be.actWindow);L.actWindow=L.my.actWin;L.activeWeight=L.totalWeight*.22+L.my.actW;L.plotDivBudget=L.plotPool*Be.plotRelease;L.plotDivLeft=L.plotDivBudget*.55;Bn=()=>{let i=L.round;if(!i)return 0;let e=Be.quota-i.filled,t=i.pool-i.paid;return e>0?t/e:0},Nx=()=>L.totalWeight,Di=()=>Math.max(Be.minCapPerWeight,Math.ceil(2*Be.quota/Math.max(1e-9,L.totalWeight))),ss=()=>{let i=0;for(let e=0;e<L.plotsMinted;e++)$t[e]===Ut&&(i+=di(e));return i},Er=()=>Math.floor(ss()*Di()),Cs=()=>L.round?Math.max(0,Er()-(L.my.redeemTier===L.round.id?L.my.redeemUsed:0)):0,Dx=()=>Di(),rp=()=>L.minute-L.startMinute>=Be.genesisMinutes,Rs=()=>rp()&&L.plotsCommitted>=1;th={},Fi=(i,e)=>(th[i]||[]).forEach(t=>t(e)),rs=(i,e)=>(th[i]=th[i]||[]).push(e);sh=()=>L.round?Bn():L.roundHist[0]?L.roundHist[0].price:0;lp=()=>Math.min(sh()||0,ac()||0);sc=0});function as(i){return typeof i=="number"&&isFinite(i)}function hp(i,e){if(!as(i))return"0";let t=Math.max(0,Math.min(24,e|0)),n=i<0,s=Math.abs(i),r=1;for(let c=0;c<t;c++)r*=10;let o=Math.round(s*r),a=String(o);if(t===0)return(n?"-":"")+a;a.length<=t&&(a="0".repeat(t+1-a.length)+a);let l=a.length-t;return(n?"-":"")+a.slice(0,l)+"."+a.slice(l)}function kx(i){if(i.indexOf(".")<0)return i;let e=i.replace(/0+$/,"");return e.endsWith(".")&&(e=e.slice(0,-1)),e}function dp(i,e=5){if(!as(i)||i===0)return"0";let t=i<0,n=Math.abs(i),s=Math.max(1,e|0),r=Math.floor(Math.log10(n));if(!isFinite(r))return"0";let o=r>=0?Math.max(0,s-(r+1)):-r-1+s,a=hp(n,o);return a=kx(a),a.indexOf(".")<0&&n<1&&(a=hp(n,-r)),(t?"-":"")+a}function fp(i){return!as(i)||i<=0?"$0":i>=1e3?"$"+i.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"$"+dp(i,5)}function zx(i){if(!as(i)||i<=0)return"$0";let e=i,t=n=>(n>=100?n.toFixed(0):n>=10?n.toFixed(1):n.toFixed(2)).replace(/\.0+$/,"").replace(/(\.\d*?)0+$/,"$1");return e>=1e9?"$"+t(e/1e9)+"B":e>=1e6?"$"+t(e/1e6)+"M":e>=1e3?"$"+t(e/1e3)+"K":e>=1?"$"+e.toFixed(2):fp(e)}function hh(i){return!as(i)||i<=0?"0":dp(i,5)}function wr(i,e,t){let n=as(i)&&i>0?i:0,s=as(e)&&e>0?e:0,r=n&&s?n*s:0,o=r&&as(t)&&t>0?r*t:0;return{usd:s?fp(r):"",cap:s?zx(o):"",bnb:hh(n),usdNum:r,capNum:o,hasUsd:!!s}}function pp(i,e,t,n={}){let s=wr(i,e,t),r=n.unit||F("tokenUnit");if(!s.bnb||s.bnb==="0")return'<span class="px-na">\u2014</span>';let o=s.hasUsd?`<b class="px-usd">${s.usd}</b><span class="px-cap">${F("cap")} ${s.cap}</span>`:"",a=`<span class="px-bnb">${s.bnb} BNB / ${r}</span>`;return`<span class="px-block">${o}${a}</span>`}var mp=en(()=>{ic()});var ay=Op(()=>{Kf();up();mp();ic();var{S:se,P:Nt,ME:ki}=uc,Ne=(i,e=document)=>e.querySelector(i),Vn=(i,e=document)=>[...e.querySelectorAll(i)],us=new URLSearchParams(location.search),wh=matchMedia("(max-width:820px)").matches,Ar=matchMedia("(prefers-reduced-motion: reduce)").matches||us.get("still")==="1",Kt=(i,e=4)=>Number(i).toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e}),Et=i=>i>=1e9?(i/1e9).toFixed(2)+"B":i>=1e6?(i/1e6).toFixed(2)+"M":i>=1e3?(i/1e3).toFixed(i>=1e5?0:1)+"K":Math.round(i)+"",Tp=us.get("rec")==="1",ti={now:0,q:[]},Ps=(i,e)=>{let t={at:ti.now+e/1e3,fn:i,off:!1};return ti.q.push(t),t},Hx=i=>{i&&(i.off=!0)};function Gx(){if(!ti.q.length)return;let i=ti.q.filter(e=>e.at<=ti.now);i.length&&(ti.q=ti.q.filter(e=>e.at>ti.now),i.forEach(e=>!e.off&&e.fn()))}var Pr=i=>+String(i).replace(/[^\d.]/g,"")||0;us.get("t")&&(se.t=+us.get("t"));uh();var Me=null;try{Me=Zf(Ne("#gl"),{mobile:wh,later:Ps,tier:us.has("q")?+us.get("q"):void 0})}catch(i){console.error(i),document.body.classList.add("nogl")}Me&&Me.tier===0&&document.documentElement.classList.add("lowq");var Vx=Ne(".title span");Vx.innerHTML=[..."EDEN"].map((i,e)=>`<i class="ch" style="--i:${e}">${i}</i>`).join("");Vn(".sec").forEach(i=>Vn(".rv",i).forEach((e,t)=>e.style.setProperty("--d",t)));var Wx=Vn("#nav a"),Xx=new IntersectionObserver(i=>i.forEach(e=>{e.isIntersecting&&e.target.classList.add("in")}),{threshold:.18});Vn(".sec").forEach(i=>Xx.observe(i));var ls=[];function Ah(){let i=Vn(".sec"),e=document.documentElement.scrollHeight-innerHeight;ls=i.map(t=>Math.min(t.offsetTop,e))}Ah();addEventListener("resize",()=>{Ah(),Me&&Me.resize()});addEventListener("load",Ah);function qx(){let i=scrollY,e=0;for(;e<ls.length-1&&i>=ls[e+1];)e++;if(e>=ls.length-1)return ls.length-1;let t=Math.max(1,ls[e+1]-ls[e]),n=(i-ls[e])/t;return e+Math.min(1,Math.max(0,(n-.12)/.76))}var Yx=()=>Fo(os()),xc={minute:()=>se.minute,roundNo:()=>Math.floor(se.t/Nt.prizeRound),prize:Yx,fullBurn:()=>oh(),minutePool:()=>se.minutePool,plotPool:()=>se.plotPool,reserveAll:()=>se.floorReserve+(se.round?se.round.pool-se.round.paid:0)+(se.nextPool||0),reserveAllUsd:()=>xc.reserveAll()*Nt.bnbUsd,burned:()=>os(),addrs:()=>se.cur.agg.size,myBurn:()=>se.my.minuteBurn,roundId:()=>se.round?se.round.id:se.roundId,roundPool:()=>se.round?se.round.pool-se.round.paid:0,roundFilled:()=>se.round?se.round.filled:0,roundBurned:()=>se.roundBurned,nextPool:()=>se.nextPool||0,roundQuotaLeft:()=>se.round?Math.max(0,Nt.quota-se.round.filled):0,capPerPlot:()=>Di(),myTierLeft:()=>Cs(),jackpot:()=>Oo(os()).jackpot},$x=Vn("[data-k]").map(i=>({el:i,k:i.dataset.k,d:i.dataset.d!=null?+i.dataset.d:4,f:i.dataset.f,shown:null,last:""}));function wp(i){for(let l of $x){let c=xc[l.k]?xc[l.k]():0,u;l.f==="raw"?u=c:(l.shown==null||typeof c!="number"?l.shown=c:l.shown+=(c-l.shown)*Math.min(1,i*6),Math.abs(c-l.shown)<Math.abs(c)*1e-6&&(l.shown=c),u=l.f==="tok"?Et(l.shown):l.f==="px"?hh(l.shown):Kt(l.shown,l.d)),u!==l.last&&(l.el.textContent=u,l.last=u)}let e=os(),t=Math.min(1,e/Nt.minMinuteBurn);_p("#burnBar",`scaleX(${t.toFixed(3)})`);let n=Ne("#burnProg");n&&(n.textContent=`${Et(e)} / 2,000,000`),_p("#roundBar",`scaleX(${se.round?(se.round.filled/Nt.quota).toFixed(4):1})`);let s=se.my.claim+se.my.plotDiv>0||se.my.plotsPending>0;Ne("#claimDot").classList.toggle("on",s),Ne("#claimDot2").classList.toggle("on",s);let r=Oo(e),o=Ne("#leadTxt");o&&(o.textContent=r.lead==null?F("leadEmpty"):ws(r.lead)+" \xB7 "+Et(r.leadAmt));let a=Ne("#quotaMath");if(a&&se.round){let l=ss(),c=Di();a.textContent=F("quotaLine",{w:l.toFixed(1),cap:Et(c),total:Et(Er()),used:Et(Er()-Cs()),left:Et(Cs())})}Zx(),Vo(),Ih()}var gp={};function _p(i,e){gp[i]!==e&&(gp[i]=e,Ne(i).style.transform=e)}function dh(i,e){let t=wr(e,Nt.bnbUsd,Nt.supply);return e?`<div class="px-item"><span class="px-lab">${i}</span><b class="px-usd">${t.usd}</b><span class="px-cap">${F("cap")} ${t.cap}</span><span class="px-bnb">${t.bnb} ${F("perToken")}</span></div>`:`<div class="px-item"><span class="px-lab">${i}</span><span class="px-na">\u2014</span></div>`}var gh="";function Zx(){let i=ah(),e=ac(),t=Math.min(i||e,e||i),n=[Fn,i,e,se.round&&se.round.pool,se.round&&se.round.filled,se.nextPool].join();if(n===gh)return;gh=n;let s=Ne("#heroPrices");s&&(s.innerHTML=dh(F("pxMkt"),e)+dh(F("pxFloor"),i)+dh(F("pxRef"),t));let r=Ne("#tierPrice");r&&(r.innerHTML=se.round?pp(Bn(),Nt.bnbUsd,Nt.supply):'<span class="px-na">\u2014</span>');let o=Ne("#tierStatus");o&&(o.textContent=se.round?F("tierOpen"):Rs()?F("tierOpening"):F("tierWait"))}var Rr=Ne("#clock"),_h=Ne("#cN"),vh=Ne("#cPh"),xh=Ne("#cS"),yh=0,yc="";function vp(i){return String(i).padStart(2,"0")}function Ap(i){if(yh)return;let e=As(se.t)+i,t=e>=Nt.certain,n=Math.max(0,Math.ceil(Nt.prizeRound-e)),s=vp(n/60|0)+":"+vp(n%60),r=Fn+s+(t?"w":"c");if(r===yc)return;yc=r,_h.textContent=s,Rr.classList.toggle("win",t),Rr.classList.remove("scan","cut"),vh.textContent=t?F("clockWin"):F("clockLeft"),xh.textContent=t?F("clockLate"):F("clockCertain"),Ne("#burnBtn").classList.toggle("win",t);let o=Ne("#burnPhase");o&&(o.textContent=t?F("clockPhaseWin"):F("clockPhaseCertain"))}var fh=Ne("#feed");function Kx(i){if(wh||document.hidden)return;let e=document.createElement("div");for(e.className="fi"+(i.late?" late":"")+(i.who===ki?" me":""),e.innerHTML="<i></i><span></span><b></b>",e.children[1].textContent=ws(i.who),e.children[2].textContent=Et(i.amount),fh.prepend(e);fh.children.length>5;)fh.lastChild.remove()}function Ch(){let i=se.round?wr(Bn(),Nt.bnbUsd,Nt.supply):null,t=[[F("tickBurn"),Et(se.burnedTotal)+" EDEN"],[F("tickTax"),Kt(se.taxIn,2)+" BNB"],[F("tickFloor"),i?i.usd+" \xB7 "+F("cap")+" "+i.cap:Rs()?F("tickOpening"):F("tickAfterGenesis")],[F("tickFilled"),se.round?Et(se.round.filled)+" / 15M":"\u2014"],[F("tickPlots"),se.plotsMinted+" / 2000"],[F("tickWeight"),se.totalWeight.toFixed(1)],[F("tickTaxRate"),F("tickTaxVal")]].map(([n,s])=>`<span><i>\u25C6</i> ${n}<b>${s}</b></span>`).join("");Ne("#tk").innerHTML=t+t}function ni(i,e){let t=Ne("#toasts"),n=document.createElement("div");for(n.className="toast"+(e?" err":""),n.innerHTML=`<i>${e?"!":"\u2713"}</i><span></span>`,n.lastChild.textContent=i,t.appendChild(n);t.children.length>3;)t.firstChild.remove();setTimeout(()=>{n.classList.add("out"),setTimeout(()=>n.remove(),400)},e?3600:3e3)}var Mc=(i,e,t=700)=>new Promise(n=>{let s=i.innerHTML;i.disabled=!0,i.innerHTML=`<span>${e}</span>`,setTimeout(()=>{i.disabled=!1,i.innerHTML=s,n()},t)}),Rh=i=>{let e=i.getBoundingClientRect();return[e.left+e.width/2,e.top+e.height/2]},gc=Ne("#walletBtn");function Ph(){gc.classList.toggle("on",se.wallet);let i=gc.querySelector(".wb-full"),e=gc.querySelector(".wb-short");se.wallet?(i&&(i.textContent=F("walletOn")),e&&(e.textContent=F("walletOn"))):(i&&(i.textContent=F("wallet")),e&&(e.textContent=F("walletShort"))),Cp(),Rp(),Ns()}gc.onclick=()=>{se.wallet=!se.wallet,se.wallet||(se.approved=!1),Ph(),ni(se.wallet?F("toastConnect"):F("toastDisconnect"))};var Ls=Ne("#burnBtn");function Cp(){Ls.querySelector("span").textContent=se.wallet?se.approved?F("burn"):F("approve"):F("wallet")}var pi=Ne("#amt");function Rp(){let i=Ne("#autoPlot");if(!i)return;let e=Ui().length,t=Uo();i.textContent=e>0?F("autoPlotN",{n:e,c:t.common,r:t.rare,e:t.epic,w:t.weight.toFixed(1)}):F("autoNone")}function Vo(){let i=Ne("#burnPreview")||Ne("#tierPreview");if(!i)return;let e=Pr(pi.value),t=rc(e);i.innerHTML=`<div class="tp"><b>${F("previewTitle")}</b><span>${F("previewCommon")} ${t.common}</span><span>${F("previewRare")} ${t.rare}</span><span>${F("previewEpic")} ${t.epic}</span><span>${F("previewWeight")} ${t.weight.toFixed(1)}</span>${e&&e<Nt.minBurnTx?"<i>"+F("previewBelow")+"</i>":""}</div>`}function Ih(){let i=Ne("#actPrefill");if(!i)return;let e=Tr();if(e.need<=0){i.innerHTML="";return}if(e.active){i.innerHTML=`<button type="button" class="act-ok">${F("actOk",{w:e.weight.toFixed(1)})}</button>`;return}i.innerHTML=`<button type="button" id="actFill">${F("actNeed",{n:Et(e.left)})}</button>`;let t=Ne("#actFill");t&&(t.onclick=()=>{pi.value=Math.ceil(e.left).toLocaleString("en-US"),Vo()})}pi.addEventListener("input",()=>{let i=Pr(pi.value);pi.value=i?i.toLocaleString("en-US"):"",Vo(),Sc()});Vn(".dk-chips button").forEach(i=>i.onclick=()=>{let e=i.dataset.a==="max"?se.my.tok:+i.dataset.a;pi.value=Math.floor(e).toLocaleString("en-US"),Vo()});async function Jx(){if(!se.wallet){se.wallet=!0,Ph(),ni(F("toastConnectShort"));return}if(!se.approved){await Mc(Ls,F("approving"),900),se.approved=!0,Cp(),ni(F("toastApprove"));return}let i=Pr(pi.value);try{if(i<Nt.minBurnTx)throw new Error(F("errMin"));if(i>se.my.tok)throw new Error(F("errBal"));let e=Rh(Ls);await Mc(Ls,F("confirming"),650);let t=oc(ki,i);Me&&Me.beamIn(t.late,i,e),t.minted&&t.minted.forEach(r=>Me&&Me.plotBurst(r,!0)),bc();let n=t.preview,s=Ui().length;ni(t.late?F("toastLateBurn",{n:Et(i)})+(n&&n.n?F("toastLazy",{n:n.n}):""):F("toastBurnOk",{n:Et(i)})+(n&&n.n?F("toastMint",{c:n.common,r:n.rare,e:n.epic}):s?F("toastHavePlots",{n:s}):F("toastPoolOnly"))),Rp(),Ih()}catch(e){ni(e.message,!0)}}Ls.onclick=Jx;Ne("#heroBurn").onclick=()=>{zi("open"),pi.focus(),pi.select(),Ls.animate([{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}],{duration:500})};var Qx=Ne("#sheet"),Bo=Ne("#shBody"),_n=null;function Ir(i){_n=i===_n?null:i,_n&&zi("open"),Qx.classList.toggle("on",!!_n),Vn("#shTabs button[data-t]").forEach(e=>e.classList.toggle("on",e.dataset.t===_n)),Ns(!0)}Vn("[data-t]").forEach(i=>i.onclick=()=>Ir(i.dataset.t));Ne("#shX").onclick=()=>Ir(null);var Pp="eden:dock",ph=Ne("#dock"),Ho=Ne("#dockBack"),xp=Ne("#dockMin"),Mh=()=>matchMedia("(max-width:820px)").matches;function jx(){try{let i=localStorage.getItem(Pp);if(i==="open"||i==="min")return i}catch{}return Mh()?"min":"open"}var fi=jx();function Sc(){let i=Ne("#dockMinAmt");i&&(i.textContent=pi.value||"\u2014");let e=Ne("#dockMinStat");if(e){let t=Tr();e.textContent=t.need<=0||t.active?F("dockReady"):F("actNeed",{n:Et(t.left)})}}function zi(i,e=!0){if(fi=i==="min"?"min":"open",ph&&(ph.classList.toggle("min",fi==="min"),ph.classList.toggle("open",fi==="open")),fi==="min"&&_n&&Ir(null),Ho){let s=fi==="open"&&Mh();Ho.hidden=!s,Ho.classList.toggle("on",s)}let t=fi==="open",n=Ne("#dkPanel");if(n&&n.setAttribute("aria-hidden",t?"false":"true"),xp&&xp.setAttribute("aria-hidden",t?"true":"false"),document.documentElement.style.setProperty("--dockH",(fi==="min"?56:Mh()?118:76)+"px"),Sc(),e)try{localStorage.setItem(Pp,fi)}catch{}}zi(fi,!1);["dockExpand","dockExpand2"].forEach(i=>{let e=Ne("#"+i);e&&(e.onclick=()=>zi("open"))});var yp=Ne("#dockCollapse");yp&&(yp.onclick=()=>zi("min"));Ho&&(Ho.onclick=()=>{_n?Ir(null):zi("min")});(function(){let e=Ne("#dockHandle");if(!e)return;let t=null,n=o=>{t=o},s=o=>{t!=null&&o-t>36&&(t=null,zi("min"))},r=()=>{t=null};e.addEventListener("pointerdown",o=>{e.setPointerCapture(o.pointerId),n(o.clientY)}),e.addEventListener("pointermove",o=>s(o.clientY)),e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("click",()=>zi("min"))})();var Go=Ne("#moreBtn"),cs=Ne("#toolsPop");function Sh(i){!cs||!Go||(cs.classList.toggle("open",i),Go.setAttribute("aria-expanded",i?"true":"false"))}Go&&cs&&(Go.onclick=i=>{i.stopPropagation(),Sh(!cs.classList.contains("open"))},document.addEventListener("pointerdown",i=>{cs.classList.contains("open")&&(cs.contains(i.target)||Go.contains(i.target)||Sh(!1))}));document.addEventListener("keydown",i=>{if(i.key==="Escape"){if(cs&&cs.classList.contains("open")){Sh(!1);return}if(Is&&Is.classList.contains("on")){Is.classList.remove("on");return}if(_n){Ir(null);return}fi==="open"&&zi("min")}});var Mp="";function Ns(i){if(!_n)return;let e=se.sel-1,t=_n+"|"+se.wallet+"|"+(_n==="claim"?[se.my.claim,se.my.credit,se.my.plotDiv,se.my.plotsPending].map(s=>s.toFixed(6)):_n==="plot"?[e,$t[e],gn[e],Ui().length]:[se.round&&se.round.id,se.round&&se.round.filled|0,se.my.tok|0]).join(",");if(!i&&t===Mp)return;Mp=t;let n=document.activeElement;if(!(!i&&n&&Bo.contains(n)&&n.tagName==="INPUT"))if(_n==="claim"){let s=se.my.claim+se.my.plotDiv,r=ih();Bo.innerHTML=`<div class="sb-row"><div class="sb-k"><span>${F("claimTotal")}</span><b class="big">${Kt(s,5)} BNB</b></div>
      <div class="sb-k"><span>${F("claimRound")}</span><b>${Kt(se.my.claim,5)}</b></div><div class="sb-k"><span>${F("claimPlot")}</span><b>${Kt(se.my.plotDiv,5)}</b></div><div class="sb-k"><span>${F("claimPendingPlots")}</span><b>${F("claimPendingN",{n:se.my.plotsPending})}</b></div>
      <div class="sb-k"><span>${F("sheetYourPlots")}</span><b>${F("myPlotsLine",{c:r.common,r:r.rare,e:r.epic,w:r.weight.toFixed(1)})}</b></div>
      <div class="sb-k"><span>${F("sheetAct")}</span><b>${r.active?F("sheetActOn"):F("sheetActOff",{n:Et(r.left)})}</b></div>
      <div class="sb-act"><button class="btn-l" id="claimBtn">${F("claimBtn")}</button></div></div>
      <p class="sb-note">${F("claimNote")}</p>`,Ne("#claimBtn").onclick=async o=>{let a=o.currentTarget;try{if(!se.wallet)throw new Error(F("needWallet"));let l=Rh(a);await Mc(a,F("claiming"),700);let c=lh();Me&&Me.claimFx(l),c.plots.forEach(u=>Me&&Me.plotBurst(u,!0)),bc(),ni(F("toastClaimed",{bnb:Kt(c.bnb,5)})+(c.plots.length?F("toastClaimPlots",{n:c.plots.length}):"")+F("toastSim")),Ns(!0)}catch(l){ni(l.message,!0)}}}else if(_n==="plot"){let s=$t[e]===ki,r=Ui(),o=e<se.plotsMinted,a=o?Sr[gn[e]]:F("unissued"),l=o?di(e):0,c=Uo(),u=Tr();Bo.innerHTML=`<div class="sb-row"><div class="sb-k"><span>${F("plot")}</span><b>#${se.sel}${s?F("mineMark"):""}</b></div>
      <div class="sb-k"><span>${F("plotTier")}</span><b class="big">${a} \xB7 ${F("weight")} ${l.toFixed(1)}</b></div>
      <div class="sb-k"><span>${F("plotOwner")}</span><b>${o?s?F("plotYouBound"):ws($t[e])+F("plotBound"):F("plotUnissued")}</b></div>
      <div class="sb-k"><span>${F("plotLastDiv")}</span><b>${Kt(br[e],5)} BNB</b></div>
      <div class="sb-k"><span>${F("plotMine")}</span><b>${F("myPlotsLine",{c:c.common,r:c.rare,e:c.epic,w:c.weight.toFixed(1)})}</b></div>
      <div class="sb-k"><span>${F("sheetAct")}</span><b>${u.active?F("sheetActOn"):F("plotActOff",{n:Et(u.left)})}</b></div></div>
      <div class="chips">${r.map(p=>`<button data-p="${p+1}">#${p+1} ${Sr[gn[p]]}</button>`).join("")||'<span class="sb-note">'+F("noPlots")+"</span>"}</div>
      <p class="sb-note">${F("plotNote")}</p>`,Vn(".chips button[data-p]",Bo).forEach(p=>p.onclick=()=>Ip(+p.dataset.p,!0))}else{let s=se.round,r=Ui().length,o=s?wr(Bn(),Nt.bnbUsd,Nt.supply):null,a=s?Cs():0;if(Bo.innerHTML=s?`<div class="sb-row"><div class="sb-k"><span>${F("tierN",{id:s.id})}</span><b class="big" style="color:var(--ember)">${o.usd}</b></div>
      <div class="sb-k"><span>${F("capLbl")}</span><b>${o.cap}</b></div><div class="sb-k"><span>${F("bnbPrice")}</span><b>${o.bnb} ${F("bnbEach")}</b></div>
      <div class="sb-k"><span>${F("quotaLeft")}</span><b>${Et(Nt.quota-s.filled)}</b></div><div class="sb-k"><span>${F("nextPool")}</span><b>${Kt(se.nextPool||0,4)} BNB</b></div>
      <div class="sb-k"><span>${F("capPerW")}</span><b>${Et(Di())}</b></div>
      <div class="sb-k"><span>${F("myQuota")}</span><b>${ss().toFixed(1)} \xD7 ${Et(Di())} = ${Et(Er())}</b></div>
      <div class="sb-k"><span>${F("yourLeft")}</span><b>${Et(a)}</b></div>
      <div class="sb-k"><span>${F("yourEden")}</span><b>${Et(se.my.tok)}</b></div></div>
      ${r?`<div class="sb-row" style="margin-top:14px"><label class="sb-f">${F("sellAmt")}<input id="sellAmt" value="1,000,000"></label><div class="sb-k"><span>${F("sellOut")}</span><b id="sellOut">\u2014</b></div><label class="sb-f">${F("sellMin")}<input id="sellMin" value=""></label><div class="sb-act"><button class="btn-l" id="sellBtn">${F("sellDo")}</button></div></div>`:`<p class="sb-note">${F("onlyHolders")}</p>`}
      <p class="sb-note">${F("roundNote")}</p><p class="sb-note" style="color:var(--ember)">${F("roundRisk")}</p><p class="sb-note">${F("usdNote")}</p>`:`<p class="sb-note">${Rs()?F("openingTier"):F("waitTier")} ${F("noTimer")}</p>`,s){let l=()=>{let c=lc(Pr(Ne("#sellAmt").value));Ne("#sellOut").textContent=Kt(c.out,5)+" BNB \u2248 "+Kt(c.out*Nt.bnbUsd,2)+" USDT",Ne("#sellMin").dataset.touched||(Ne("#sellMin").value=Kt(c.out*.99,5))};Ne("#sellAmt").oninput=l,Ne("#sellMin").oninput=()=>Ne("#sellMin").dataset.touched=1,l(),Ne("#sellBtn").onclick=async c=>{let u=c.currentTarget;try{if(!se.wallet)throw new Error(F("needWallet"));await Mc(u,F("confirming"),700);let p=cc(ki,Pr(Ne("#sellAmt").value),Pr(Ne("#sellMin").value));ni(F("toastSell",{take:Et(p.take),out:Kt(p.out,5)})),Ns(!0)}catch(p){ni(p.message,!0)}}}}}Ne("#roundSell").onclick=()=>{_n!=="round"&&Ir("round")};function ey(i){let e=gn[i];return e===3?.92:e===2?.5:.12}function bc(){Me&&Me.setPlots(i=>[i<se.plotsMinted?ey(i):0,$t[i]===ki?1:0,i<se.plotsMinted?1:0])}bc();var ko=-1;function ty(i){let e=$t[i]===ki,t=i<se.plotsMinted,n=t?Sr[gn[i]]:F("unissued"),s=t?di(i):0;return`<div class="pl-h"><b>#${i+1}</b>${e?'<span class="mine">'+F("legendMine")+"</span>":""}<span>${t?F("landlord")+" "+ws($t[i])+F("soulbound"):F("plotUnissued")}</span></div>
    <div class="kv"><div><span>${F("plotTier")}</span><b class="hl">${n}</b></div><div><span>${F("weight")}</span><b>${s.toFixed(1)}</b></div>
    <div><span>${F("plotLastDiv")}</span><b>${Kt(br[i],5)} BNB</b></div><div><span>${F("transfer")}</span><b>${F("noTransfer")}</b></div></div>
    ${t?`<p class="hint">${F("plotOnlyBurn")}</p>`:""}`}var Sp="";function Ec(i){let e=se.sel-1,t=[Fn,e,$t[e],gn[e],se.plotsMinted>e].join();!i&&t===Sp||(Sp=t,Ne("#plotCard").innerHTML=ty(e),Me&&Me.setSelHover(e,ko))}function Ip(i,e){se.sel=i,Ec(!0),_n==="plot"&&Ns(!0),e&&Me&&Me.focusPlot(i-1)}Ec(!0);var hc=Ne("#hov"),_c=-1,zo=-1,bh=!1,Bi=null,hs=0,Lp=Ne("#gl");addEventListener("pointermove",i=>{_c=i.clientX,zo=i.clientY,bh=!0,Me&&Me.mouse(i.clientX/innerWidth-.5,-(i.clientY/innerHeight-.5)),Bi&&Me&&(Me.drag(i.clientX-Bi[0],i.clientY-Bi[1],!0),Bi=[i.clientX,i.clientY,Bi[2]+Math.abs(i.movementX||0)])},{passive:!0});Lp.addEventListener("pointerdown",i=>{Math.abs(hs-2)<.4&&(Bi=[i.clientX,i.clientY,0])});addEventListener("pointerup",i=>{if(Bi&&Me&&(Me.drag(0,0,!1),Bi[2]<6)){let e=Me.pickPlot(i.clientX,i.clientY);e>=0&&Ip(e+1)}Bi=null});function ny(){if(!bh||!Me)return;if(bh=!1,Math.abs(hs-2)>.35||zo<0){ko>=0&&(ko=-1,hc.classList.remove("on"),Me.setSelHover(se.sel-1,-1));return}let e=document.elementFromPoint(_c,zo)===Lp?Me.pickPlot(_c,zo):-1;if(e!==ko){if(ko=e,Me.setSelHover(se.sel-1,e),e>=0){let t=e<se.plotsMinted;hc.innerHTML=`<b>#${e+1}${$t[e]===ki?F("mineMark"):""}</b>${t?Sr[gn[e]]+" \xB7 "+F("hoverWeight")+" "+di(e).toFixed(1):F("hoverUnissued")}<br>${F("plotLastDiv")} ${Kt(br[e],5)} BNB<br>${t?F("hoverBound"):""}`}hc.classList.toggle("on",e>=0)}e>=0&&(hc.style.transform=`translate3d(${Math.min(_c+16,innerWidth-200)}px,${zo+16}px,0)`)}rs("burn",i=>{i.who!==ki&&hs<1.6&&Me&&Me.beamIn(i.late,i.amount),Kx(i)});rs("income",()=>Me&&Me.income());rs("sell",i=>Me&&Me.holeKick(i.who===ki?1.2:.35));rs("roundOpen",i=>{if(Me&&Me.holeKick(1.5),hs>2.5&&hs<3.5){let e=wr(Bn(),Nt.bnbUsd,Nt.supply);ni(F("toastRoundOpen",{id:i.id,usd:e.usd,cap:e.cap}))}});var iy=0;rs("tick",()=>{++iy%15===0&&bc()});var Is=Ne("#result"),bp=0;rs("minute",i=>{if(se.speed>10||hs>1.2||document.hidden){i.mine>0&&ni(F("toastRoundWin",{m:i.m,bnb:Kt(i.mine,5)})),Me&&hs<1.2&&(Me.setCut(i.cutoff),Me.explode(i),Ps(()=>Me.setCut(-1),1200));return}yh=1,Rr.classList.remove("win"),Rr.classList.add("scan"),vh.textContent=F("clockReveal"),xh.textContent=F("clockRevealSub");let t=se.speed>1?.5:1.5,n=ti.now,s=()=>{let o=540+Math.floor(Math.random()*61);_h.textContent=o,Me&&Me.scan(o/10),ti.now-n>t?r():Ps(s,70)};s();function r(){Me&&(Me.scan(-1),Me.setCut(i.cutoff/10)),Rr.classList.remove("scan"),Rr.classList.add("cut"),_h.textContent=i.cutoff,vh.textContent=F("clockCut"),xh.textContent=F("clockCutSub",{n:i.cutoff});let o=Ne("#flash"),a=Ne("#clock").getBoundingClientRect();o.style.setProperty("--fx",a.left+a.width/2+"px"),o.style.setProperty("--fy",a.top+a.height/2+"px"),Ar||(Cr=1);let l=i.mine>0?Rh(Ne('.dk-tabs button[data-t="claim"]').offsetParent?Ne('.dk-tabs button[data-t="claim"]'):Ls):null;Me&&Me.explode(i,l),Is.className="result on"+(i.rolled?" rolled":"");let c='<button type="button" class="rx" id="resX" aria-label="\xD7">\xD7</button>';Is.innerHTML=c+(i.rolled?`<div class="rbox"><div class="rk">${F("resMiss",{m:i.m})}</div><div class="rv1">${Et(i.total)} ${F("tokenUnit")}</div><div class="rv2">${F("resMissBody")}</div></div>`:`<div class="rbox"><div class="rk">${F("resHit",{m:i.m,cut:i.cutoff})}</div><div class="rv1">${Kt(i.prize,4)} BNB</div><div class="rv2">${F("resSplit")} ${Kt(i.pro||i.prize,4)} \xB7 ${F("resJack")} ${Kt(i.jackpot||0,4)} BNB${i.win!=null?" \u2192 "+ws(i.win):""} \xB7 ${F("resCounted")} ${Et(i.total)} ${F("tokenUnit")}${i.roll?" \xB7 "+Et(i.roll)+" "+F("resMissed"):""}</div>${i.mine>0?`<div class="rme">${F("resYouGot",{bnb:Kt(i.mine,5)})}</div>`:i.myIn===0&&se.my.minuteBurn>0?`<div class="rme">${F("resYouMissed")}</div>`:""}</div>`);let u=Ne("#resX");u&&(u.onclick=p=>{p.stopPropagation(),Is.classList.remove("on")}),Hx(bp),bp=Ps(()=>Is.classList.remove("on"),5200),Ps(()=>{yh=0,yc="",Me&&Me.setCut(-1)},se.speed>1?900:2600)}});Vn("#spd button").forEach(i=>i.onclick=()=>{se.speed=+i.dataset.s,Vn("#spd button").forEach(e=>e.classList.toggle("on",e===i))});var Eh=Ne("#dbg");us.get("debug")==="1"&&Eh.classList.add("on");var Th=performance.now(),dc=0,fc=1,vc=!0,Zt={frames:0,sum:0,worst:0,hist:[],tierLog:[]},pc=[],mh=0,Oi=[0,0,0],mc=[1,1,1];function sy(i){let e=Math.round(Math.min(3,i));Wx.forEach((t,n)=>t.classList.toggle("on",n===e))}var Ep=-1,Cr=0,ry=Ne("#flash");function Lh(i){if(!vc)return;requestAnimationFrame(Lh);let e=Math.min(.1,(i-Th)/1e3);Th=i,Np(e)}function Np(i){if(ti.now+=i,Gx(),Cr>0&&(Cr=Math.max(0,Cr-i*1.1),ry.style.opacity=(Cr*Cr*.35).toFixed(3)),Ar&&(fc+=i,fc<.5))return;let e=ch(Ar?fc:i);Ar&&(fc=0);let t=qx();hs=t;let n=As(se.t)+e;if(Me){let r=se.round;Oi[0]=se.minutePool,Oi[1]=se.plotPool,Oi[2]=xc.reserveAll();let o=Math.max(Oi[0],Oi[1],Oi[2])||1;mc[0]=Oi[0]/o,mc[1]=Oi[1]/o,mc[2]=Oi[2]/o,Me.frame(i,{sp:t,energy:.2+Math.min(.8,os()/7e6),win:n>=Nt.certain,sec:n,poolScale:mc,fill:r?r.filled/Nt.quota:1},Ar),ny()}dc+=i,dc>=.25&&(Ap(e),wp(dc),dc=0);let s=Math.round(Math.min(3,t));if(s!==Ep&&(Ep=s,sy(t)),Zt.frames++,Zt.sum+=i,Zt.worst=Math.max(Zt.worst,i),!wh&&!Ar&&!us.has("q")&&Me&&!Me.lost){pc.push(i);let r=0;for(let o of pc)r+=o;if(r>=1){let o=pc.length/r;pc=[],mh++,mh>3&&(o<40?Zt.low=(Zt.low||0)+1:Zt.low=0,Zt.low>=3&&Me.stepDownQuality()&&(mh=1,Zt.low=0,Zt.tierLog.push({t:performance.now(),tier:Me.tier,dpr:Me.dpr,fps:+o.toFixed(1)})))}}if(Eh.classList.contains("on")&&Zt.frames%20===0){let r=Me?Me.renderer.info.render:{};Eh.textContent=`fps ${(1/i).toFixed(0)}  dpr ${Me&&Me.dpr?Me.dpr.toFixed(2):"-"}  tier ${Me?Me.tier:"-"}
calls ${r.calls}  tris ${r.triangles}
js ${(Me?Me.timing.js/Math.max(1,Me.timing.frames):0).toFixed(2)}ms`}}Tp||requestAnimationFrame(Lh);var Dp=()=>{Ch(),Ec(),Ns(),Sc(),Ps(Dp,1e3)};Ps(Dp,1e3);Ch();function oy(i){if(!Tp){if(!i){vc=!1;return}vc||(vc=!0,Th=performance.now(),requestAnimationFrame(Lh))}}document.addEventListener("visibilitychange",()=>{if(document.hidden)try{Me&&Me.snapshotPoster&&Me.snapshotPoster(),Me&&Me.holdCanvas&&Me.holdCanvas()}catch{}oy(!document.hidden)});jf();function Up(){yc="",gh="",Ph(),Ap(0),wp(1),Ch(),Ec(!0),Ns(!0),Vo(),Ih(),Sc()}Qf(Up);Up();window.__eden={S:se,E:uc,G:Me,perf:Zt,stats(){let i=Me.renderer.info.render;return{calls:i.calls,triangles:i.triangles,points:i.points,tier:Me.tier,dpr:Me.dpr,jsAvgMs:Me.timing.js/Math.max(1,Me.timing.frames),frames:Zt.frames,avgDt:Zt.sum/Zt.frames,tierLog:Zt.tierLog}},step(i,e=1/30){for(let t=0;t<i;t++)Np(e)},resetTiming(){Me.timing.js=0,Me.timing.frames=0,Zt.frames=0,Zt.sum=0,Zt.worst=0}}});ay();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
