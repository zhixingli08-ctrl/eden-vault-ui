/* EDEN 分钟燃烧金库 · 玩法预览（纯本地模拟：不连钱包、不发交易）
   规则与合约常量一致：45/30/25 分账；分钟奖池每分钟放 2%；截止 = 45 + [0,15] 秒；单笔 ≥ 1 万、每分钟最低 10 万；
   限量回购每轮 1500 万枚、价格开轮锁定、24h 换轮、收进的币 100% 销毁；地块地板 = EMA×24（70/30），成交 +10%，每日 −5%，98/2。 */
(() => {
'use strict';
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const P = {split:[.45,.30,.25], minuteRelease:.02, certain:45, minMinuteBurn:1e5, minBurnTx:1e4, plotRelease:.02,
  quota:15e6, roundDur:86400, floorMult:24, emaKeep:.7, emaNew:.3, step:1.1, fee:.02, hourlyDecay:Math.pow(.95,1/24),
  minPlot:.001, plotsMax:3300, plotPrice:1e5, plotsPerMinute:110, supply:1e9, bnbUsd:612};
const ME = -1, MY_ADDR = '0xDemo…8a1F';
const rnd = (a,b)=>a+Math.random()*(b-a), clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const hex = () => Math.random().toString(16).slice(2,6);
const ADDRS = Array.from({length:400},()=>`0x${hex()}…${hex()}`);
const addrOf = o => o===ME? '你' : ADDRS[o];
const fmt = (n,d=4)=>Number(n).toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d});
const fmtInt = n => Math.round(n).toLocaleString('en-US');
const fmtTok = n => n>=1e9? (n/1e9).toFixed(2)+'B' : n>=1e6? (n/1e6).toFixed(2)+'M' : n>=1e3? (n/1e3).toFixed(n>=1e5?0:1)+'K' : Math.round(n)+'';
const hms = s => {s=Math.max(0,Math.floor(s));return [s/3600|0,(s%3600)/60|0,s%60].map(x=>String(x).padStart(2,'0')).join(':')};
const px = p => p<0.01? p.toFixed(5) : p<1? p.toFixed(4) : p.toFixed(3);
const ago = s => s<60? '刚刚' : s<3600? Math.round(s/60)+' 分钟前' : s<86400? (s/3600).toFixed(1)+' 小时前' : (s/86400).toFixed(1)+' 天前';
const parseNum = v => +String(v).replace(/[^\d.]/g,'') || 0;
const secOf = t => ((t%60)+60)%60;
const DPR = Math.min(2, window.devicePixelRatio||1);
const MOBILE = matchMedia('(max-width:640px)').matches;

/* =================== 模拟状态 =================== */
const S = {
  t:0, speed:1, minute:1874, wallet:false,
  minutePool:18.42, plotPool:9.37, floorReserve:0.83, taxIn:142.6, burnedTotal:412_600_000, roundBurned:58_310_000,
  plotsMinted:2061, plotEma:0, roundId:6, round:null, roundHist:[],
  cur:{burns:[], pre:0, carry:0, agg:new Map()},
  my:{tok:5_000_000, bnb:2.5, claim:0.0312, credit:0, plotsPending:0, minuteBurn:0},
  sel:7, floorHist:[], vol24:0, lastHourAt:0, burnMin:new Float64Array(1440), lastCut:null, mktPrem:2.6, chg:3.2,
};
S.plotEma = S.plotPool*P.plotRelease/S.plotsMinted;
S.round = {id:6, pool:4.62, paid:1.97, filled:15e6*1.97/4.62, openAt:-9.3*3600}; S.round.price=S.round.pool/P.quota;
S.roundHist=[{id:5,price:5.1e-7,filled:15e6,why:'收满'},{id:4,price:2.2e-7,filled:11.8e6,why:'24 小时到期'},{id:3,price:3.4e-7,filled:15e6,why:'收满'},{id:2,price:1.6e-7,filled:15e6,why:'收满'}];
for(let i=0;i<1440;i++) S.burnMin[i]=rnd(1.2e4,4.2e4);
const floorNow = () => Math.max(P.minPlot, S.plotEma*P.floorMult);
const H72=72*3600;
for(let h=96;h>=0;h--) S.floorHist.push({t:-h*3600, f:floorNow()*(1+.2*Math.sin(h/6.5)+rnd(-.05,.05))});
function floorAt(t){ if(t>=S.t-1) return floorNow(); let f=S.floorHist[0].f; for(const x of S.floorHist){ if(x.t<=t) f=x.f; else break; } return f; }

/* 地块：3300 块 */
const N=P.plotsMax, anchor=new Float64Array(N), anchorAt=new Float64Array(N), owner=new Int32Array(N), flashAt=new Float64Array(N).fill(-1e9), pulseAt=new Float64Array(N).fill(-1e9);
const trades=new Map();
const decayed=(a,at,t)=>a*Math.pow(P.hourlyDecay, Math.max(0,(t-at)/3600));
for(let i=0;i<N;i++){
  owner[i]=Math.floor(Math.random()*ADDRS.length);
  if(i>=S.plotsMinted || Math.random()<.4) continue;
  const list=[]; let t=-H72-rnd(0,30)*3600, a=0, at=0;
  const n=1+Math.floor(Math.random()*3.4);
  for(let k=0;k<n;k++){ t+=rnd(3,34)*3600; if(t>-120) break; const p=Math.max(floorAt(t), a? decayed(a,at,t):0); list.push({t,p}); a=p*P.step; at=t; }
  if(list.length){ trades.set(i,list); anchor[i]=a; anchorAt[i]=at; }
}
[6,41,233,1180].forEach(i=>owner[i]=ME);
function plotPrice(i,t=S.t){ const f=floorAt(t); if(!anchor[i]) return f;
  const list=trades.get(i); if(t>=S.t-1) return Math.max(f, decayed(anchor[i],anchorAt[i],t));
  let a=0,at=0; for(const x of list){ if(x.t<=t){a=x.p*P.step;at=x.t} else break; } return a? Math.max(f,decayed(a,at,t)) : f; }

/* =================== 事件总线 =================== */
const on={}; const emit=(e,d)=>(on[e]||[]).forEach(f=>f(d)); const sub=(e,f)=>(on[e]=on[e]||[]).push(f);

function income(bnb){ S.minutePool+=bnb*P.split[0]; S.plotPool+=bnb*P.split[1]; S.floorReserve+=bnb*P.split[2]; S.taxIn+=bnb; emit('income',bnb); }

function doBurn(who, amount, sec, plot){
  const b={who,amount,sec,plot,late:sec>=P.certain,minute:S.minute}; S.cur.burns.push(b);
  if(sec<P.certain) S.cur.pre+=amount;
  S.cur.agg.set(who,(S.cur.agg.get(who)||0)+amount);
  if(who===ME) S.my.minuteBurn+=amount;
  S.burnedTotal+=amount; S.burnMin[S.minute%1440]+=amount;
  if(plot>0 && plot<=N) pulseAt[plot-1]=S.t;
  emit('burn',b);
}
function endMinute(){
  const m=S.minute, cutoff=P.certain+Math.floor(Math.random()*16);
  let total=S.cur.pre+S.cur.carry, myIn=0, roll=0, myRoll=0, addrs=new Set();
  for(const b of S.cur.burns){
    if(b.sec<P.certain || b.sec<cutoff){ if(b.sec>=P.certain) total+=b.amount; if(b.who===ME) myIn+=b.amount; addrs.add(b.who); }
    else { roll+=b.amount; if(b.who===ME) myRoll+=b.amount; }
  }
  let prize=0, share=0, rolled=false;
  if(total<P.minMinuteBurn){ rolled=true; roll+=total; myRoll+=myIn; myIn=0; }
  else { prize=S.minutePool*P.minuteRelease; S.minutePool-=prize; share=myIn/total; S.my.claim+=prize*share;
    if(S.plotsMinted<N){ const iss=Math.min(P.plotsPerMinute, Math.floor(total/P.plotPrice), N-S.plotsMinted); S.plotsMinted+=iss; S.my.plotsPending+=Math.floor(iss*share); } }
  const res={m,cutoff,total,prize,mine:prize*share,addrs:addrs.size,roll,rolled};
  S.lastCut={cutoff,t:S.t};
  S.minute++; S.cur={burns:[],pre:0,carry:roll,agg:new Map()}; S.my.minuteBurn=myRoll; S.burnMin[S.minute%1440]=0;
  emit('minute',res);
}
function endHour(){ const pool=S.plotPool*P.plotRelease; S.plotPool-=pool; S.plotEma=S.plotEma*P.emaKeep+(pool/S.plotsMinted)*P.emaNew; S.floorHist.push({t:S.t,f:floorNow()}); if(S.floorHist.length>400) S.floorHist.shift(); }
function tickRound(){
  const r=S.round;
  if(r && (r.filled>=P.quota-1 || S.t-r.openAt>=P.roundDur)){ S.floorReserve+=r.pool-r.paid; S.roundHist.unshift({id:r.id,price:r.price,filled:r.filled,why:r.filled>=P.quota-1?'收满':'24 小时到期',fresh:true}); S.round=null; emit('roundEnd',r); }
  if(!S.round && S.floorReserve>0){ S.roundId++; S.round={id:S.roundId,pool:S.floorReserve,paid:0,filled:0,openAt:S.t,price:S.floorReserve/P.quota}; S.floorReserve=0; emit('roundOpen',S.round); }
}
function sellQuote(a){ const r=S.round; if(!r) return {take:0,out:0}; const take=Math.min(a,P.quota-r.filled); return {take, out:r.pool*(r.filled+take)/P.quota - r.pool*r.filled/P.quota}; }
function sell(who,a,minOut){
  const r=S.round; if(!r) throw new Error('当前没有开放的回购轮次');
  const q=sellQuote(a); if(q.take<=0||q.out<=0) throw new Error('本轮额度已收满，等下一轮');
  if(minOut && q.out<minOut) throw new Error('可得 BNB 低于你设的最少收到，未成交');
  if(who===ME){ if(q.take>S.my.tok) throw new Error('EDEN 余额不足'); S.my.tok-=q.take; S.my.bnb+=q.out; }
  r.filled+=q.take; r.paid+=q.out; S.burnedTotal+=q.take; S.roundBurned+=q.take;
  emit('sell',{who,...q}); tickRound(); return q;
}
function buyPlot(i,who,maxPrice){
  if(i>=S.plotsMinted) throw new Error('这块地还没发放');
  const price=plotPrice(i);
  if(owner[i]===who) throw new Error('这是你自己的地块');
  if(maxPrice!=null && price>maxPrice) throw new Error('当前价已高于你的最高愿付，未成交');
  if(who===ME){ if(S.my.bnb<price) throw new Error('BNB 余额不足'); S.my.bnb-=price; }
  const fee=price*P.fee; S.minutePool+=fee; if(owner[i]===ME) S.my.credit+=price-fee;
  const prev=owner[i];
  const list=trades.get(i)||[]; list.push({t:S.t,p:price}); trades.set(i,list);
  anchor[i]=price*P.step; anchorAt[i]=S.t; owner[i]=who; flashAt[i]=perfNow; S.vol24+=price;
  emit('plotBuy',{i,who,prev,price}); return price;
}

/* =================== 主循环 =================== */
let perfNow=performance.now(), last=perfNow, acc=0;
function stepSecond(){
  S.t++; const sec=secOf(S.t);
  if(Math.random()<.4) income(rnd(.0015,.012));
  if(Math.random()<(sec>=P.certain? .55:.24)) doBurn(Math.floor(Math.random()*ADDRS.length), Math.round(Math.exp(rnd(Math.log(1.2e4),Math.log(1.8e6)))/1e3)*1e3, sec, Math.random()<.6? 1+Math.floor(Math.random()*S.plotsMinted):0);
  if(Math.random()<.035 && S.round){ try{ sell(Math.floor(Math.random()*ADDRS.length), Math.round(rnd(5e4,9e5)/1e3)*1e3); }catch(e){} }
  if(Math.random()<.05){ const i=Math.floor(Math.random()*S.plotsMinted); try{ buyPlot(i, Math.floor(Math.random()*ADDRS.length)); }catch(e){} }
  if(sec===0) endMinute();
  if(S.t-S.lastHourAt>=3600){ S.lastHourAt=S.t; endHour(); }
  tickRound();
  S.mktPrem=clamp(S.mktPrem+rnd(-.004,.0045),2.2,3.2); S.chg=clamp(S.chg+rnd(-.05,.05),-6,9);
}
function frame(now){
  perfNow=now; const dt=Math.min(.1,(now-last)/1000); last=now; acc+=dt*S.speed;
  let n=0; while(acc>=1 && n<240){ acc-=1; n++; stepSecond(); }
  const frac=S.speed<=10? acc:0;
  if(n) renderNumbers();
  renderClock(frac);
  if(vis.furnace) drawFurnace(dt,frac);
  if(vis.pools) drawPools(dt);
  if(vis.map) drawMap();
  drawFx(dt);
  requestAnimationFrame(frame);
}

/* =================== 数字滚动 =================== */
const rollState=new WeakMap();
function roll(key,val){
  $$(`[data-roll="${key}"]`).forEach(el=>{
    const d=+(el.dataset.d||4); let o=rollState.get(el); if(!o){o={shown:val,target:val};rollState.set(el,o);el.textContent=fmt(val,d);return;}
    if(Math.abs(o.target-val)<Math.pow(10,-d-1)) return;
    const from=o.shown, t0=performance.now(); o.target=val;
    if(val>from){ el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
    const step=n=>{ if(o.target!==val) return; const k=Math.min(1,(n-t0)/650), e=1-Math.pow(1-k,3); o.shown=from+(val-from)*e; el.textContent=fmt(o.shown,d); if(k<1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  });
}
function tokUsd(){ const r=S.round; const base=r? r.price : 3e-7; return base*P.bnbUsd*S.mktPrem; }
function renderNumbers(){
  const prize=S.minutePool*P.minuteRelease;
  roll('prize',prize); roll('prizeUsd',prize*P.bnbUsd);
  roll('minutePool',S.minutePool); roll('plotPool',S.plotPool); roll('floorReserve',S.floorReserve); roll('taxIn',S.taxIn);
  roll('myClaim',S.my.claim+S.my.credit); roll('myClaim2',S.my.claim); roll('myCredit',S.my.credit);
  $('#minuteNo').textContent=fmtInt(S.minute);
  const burnedNow=S.cur.pre+S.cur.carry+S.cur.burns.filter(b=>b.late).reduce((a,b)=>a+b.amount,0);
  $('#hsBurned').textContent=fmtTok(burnedNow); $('#hsAddr').textContent=S.cur.agg.size; $('#hsTotal').textContent=fmtTok(S.burnedTotal);
  const u=tokUsd(); $('#tkPrice').textContent='$'+u.toFixed(7); const c=$('#tkChg'); c.textContent=(S.chg>=0?'+':'')+S.chg.toFixed(2)+'%'; c.className=S.chg>=0?'up':'down';
  $('#tkMcap').textContent='$'+fmtTok(u*(P.supply-S.burnedTotal)); $('#tkBurn24').textContent=fmtTok(S.burnMin.reduce((a,b)=>a+b,0));
  $('#balTok').textContent=fmtTok(S.my.tok); $('#myPlotsPending').textContent=S.my.plotsPending; $('#myPlotsN').textContent=countMine();
  renderRank(); renderEst(); renderRound(); renderPlotPanel(); renderMapStats();
  if(devOpen) renderDev();
}
let mineCache=-1,mineAt=-1; function countMine(){ if(mineAt!==S.t){ let c=0; for(let i=0;i<N;i++) if(owner[i]===ME) c++; mineCache=c; mineAt=S.t; } return mineCache; }

/* =================== 熔炉 =================== */
const fcv=$('#furnaceCv'), fctx=fcv.getContext('2d'); let FW=0,FH=0;
const embers=[]; const sparks=[];
function sizeCanvas(cv,ctx){ const r=cv.getBoundingClientRect(); const w=Math.max(1,r.width), h=Math.max(1,r.height); if(cv.width!==Math.round(w*DPR)||cv.height!==Math.round(h*DPR)){ cv.width=Math.round(w*DPR); cv.height=Math.round(h*DPR); } ctx.setTransform(DPR,0,0,DPR,0,0); return [w,h]; }
function spawnInbound(n,color){ for(let i=0;i<n;i++){ const a=Math.random()*Math.PI*2; embers.push({a, r:rnd(1.35,1.9), v:rnd(.35,.8), spin:rnd(.6,1.4)*(Math.random()<.5?-1:1), s:rnd(1,2.6), c:color||(Math.random()<.7?0:1), life:1}); } }
let coreKick=0, fShake=0;
function drawFurnace(dt,frac){
  const [w,h]=sizeCanvas(fcv,fctx); FW=w;FH=h; const g=fctx; g.clearRect(0,0,w,h);
  const sec=secOf(S.t)+frac, win=sec>=P.certain, heat=sec/60;
  const cx=w/2+(win? rnd(-1,1)*1.6*(sec-44)/16:0), cy=h/2+(win? rnd(-1,1)*1.6*(sec-44)/16:0), R=Math.min(w,h)*0.36;
  const T=perfNow/1000;
  // 背景热晕
  const hot=win? 1 : heat;
  const col=win? [255,70,40] : [255, 190-110*heat, 40-20*heat];
  let gr=g.createRadialGradient(cx,cy,R*.2,cx,cy,R*1.55);
  gr.addColorStop(0,`rgba(${col},${.30+.25*hot+coreKick*.3})`); gr.addColorStop(.55,`rgba(${col},${.10+.1*hot})`); gr.addColorStop(1,'rgba(0,0,0,0)');
  g.fillStyle=gr; g.fillRect(0,0,w,h);
  g.globalCompositeOperation='lighter';
  // 旋转能量环
  for(let k=0;k<3;k++){ const rr=R*(1.1+k*.075), rot=T*(k%2?-.25:.18)*(1+heat+(win?1.5:0));
    g.strokeStyle=`rgba(255,${200-k*40},80,${.10+.05*k+(win?.08:0)})`; g.lineWidth=1; g.setLineDash([2+k*6,10+k*8]); g.beginPath(); g.arc(cx,cy,rr,rot,rot+Math.PI*2); g.stroke(); }
  g.setLineDash([]);
  // 刻度环
  for(let i=0;i<60;i++){ const a=-Math.PI/2+i/60*Math.PI*2, lit=i<sec, isWin=i>=45, cur=Math.floor(sec)===i;
    const r1=R*(cur?.88:.92), r2=R*1.0; g.lineWidth=cur?3.2:2;
    g.strokeStyle= cur? 'rgba(255,250,230,1)' : lit? (isWin? 'rgba(255,80,50,.95)' : `rgba(255,${200-i*1.8},${60-i},.95)`) : (isWin? 'rgba(255,60,40,.22)':'rgba(255,220,150,.13)');
    g.beginPath(); g.moveTo(cx+Math.cos(a)*r1,cy+Math.sin(a)*r1); g.lineTo(cx+Math.cos(a)*r2,cy+Math.sin(a)*r2); g.stroke(); }
  // 窗口带
  const a45=-Math.PI/2+.75*Math.PI*2, a60=-Math.PI/2+Math.PI*2;
  g.strokeStyle=`rgba(255,60,40,${win? .35+.25*Math.sin(T*12):.16})`; g.lineWidth=R*.05; g.beginPath(); g.arc(cx,cy,R*1.045,a45,a60); g.stroke();
  // 进度弧（两层模拟发光）
  const aEnd=-Math.PI/2+sec/60*Math.PI*2;
  const lg=g.createLinearGradient(cx-R,cy-R,cx+R,cy+R); lg.addColorStop(0,'#FFF1B8'); lg.addColorStop(.5,win?'#FF5A2E':'#F0B90B'); lg.addColorStop(1,win?'#FF2A1A':'#FF6A1A');
  g.strokeStyle=lg; g.lineCap='round';
  g.globalAlpha=.25; g.lineWidth=R*.13; g.beginPath(); g.arc(cx,cy,R*.8,-Math.PI/2,aEnd); g.stroke();
  g.globalAlpha=1; g.lineWidth=R*.035; g.beginPath(); g.arc(cx,cy,R*.8,-Math.PI/2,aEnd); g.stroke();
  g.lineCap='butt';
  // 进度头
  const hx=cx+Math.cos(aEnd)*R*.8, hy=cy+Math.sin(aEnd)*R*.8; gr=g.createRadialGradient(hx,hy,0,hx,hy,R*.12); gr.addColorStop(0,'rgba(255,250,230,1)'); gr.addColorStop(1,'rgba(255,160,40,0)'); g.fillStyle=gr; g.beginPath(); g.arc(hx,hy,R*.12,0,7); g.fill();
  // 上一分钟截止标记
  if(S.lastCut && S.t-S.lastCut.t<12){ const a=-Math.PI/2+S.lastCut.cutoff/60*Math.PI*2, al=1-(S.t-S.lastCut.t)/12; g.strokeStyle=`rgba(255,90,60,${al})`; g.lineWidth=3; g.beginPath(); g.moveTo(cx+Math.cos(a)*R*.7,cy+Math.sin(a)*R*.7); g.lineTo(cx+Math.cos(a)*R*1.12,cy+Math.sin(a)*R*1.12); g.stroke(); }
  // 熔核
  const cr=R*(.6+coreKick*.04);
  gr=g.createRadialGradient(cx,cy,0,cx,cy,cr); gr.addColorStop(0,`rgba(255,245,215,${.5+.3*hot})`); gr.addColorStop(.35,`rgba(${col},${.35+.2*hot})`); gr.addColorStop(1,'rgba(40,10,0,0)');
  g.fillStyle=gr; g.beginPath(); g.arc(cx,cy,cr,0,7); g.fill();
  for(let k=0;k<4;k++){ const a=T*(.4+k*.17)+k*1.7, rr=R*.22, bx=cx+Math.cos(a)*rr, by=cy+Math.sin(a*1.3)*rr*.8;
    gr=g.createRadialGradient(bx,by,0,bx,by,R*.32); gr.addColorStop(0,`rgba(255,${150+k*20},40,${.16+.08*hot})`); gr.addColorStop(1,'rgba(255,120,20,0)'); g.fillStyle=gr; g.beginPath(); g.arc(bx,by,R*.32,0,7); g.fill(); }
  // 环境火星
  if(Math.random()<.5+heat) spawnInbound(1);
  if(win && Math.random()<.6) spawnInbound(1,1);
  for(let i=embers.length-1;i>=0;i--){ const e=embers[i]; e.r-=e.v*dt*(1+(1.9-e.r)); e.a+=e.spin*dt*(2-e.r);
    if(e.r<.5){ embers.splice(i,1); coreKick=Math.min(1,coreKick+.015); continue; }
    const x=cx+Math.cos(e.a)*R*e.r, y=cy+Math.sin(e.a)*R*e.r, al=clamp((1.9-e.r)*1.4,0,1)*clamp((e.r-.5)*3,0,1);
    g.fillStyle= e.c===2? `rgba(61,245,196,${al})` : e.c===1? `rgba(255,90,50,${al})` : `rgba(255,${200+Math.random()*40|0},90,${al})`;
    g.beginPath(); g.arc(x,y,e.s,0,7); g.fill(); }
  for(let i=sparks.length-1;i>=0;i--){ const s=sparks[i]; s.life-=dt*1.2; s.x+=s.vx*dt; s.y+=s.vy*dt; s.vy+=40*dt; if(s.life<=0){sparks.splice(i,1);continue;}
    g.fillStyle=`rgba(255,${190+s.h|0},90,${s.life})`; g.beginPath(); g.arc(cx+s.x,cy+s.y,1.4+s.life*1.6,0,7); g.fill(); }
  g.globalCompositeOperation='source-over';
  coreKick=Math.max(0,coreKick-dt*.8);
}
function furnaceBurst(n,mine){ for(let i=0;i<n;i++){ const a=Math.random()*Math.PI*2, v=rnd(60,260); sparks.push({x:0,y:0,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:rnd(.6,1.2),h:rnd(0,60)}); } coreKick=Math.min(1,coreKick+(mine?.8:.3)); }

/* 时钟文字 */
let lastWin=null;
function renderClock(frac){
  const sec=secOf(S.t)+frac, left=Math.max(0,60-sec), win=sec>=P.certain;
  $('#fSec').textContent=Math.ceil(left-1e-6)||60;
  if(win!==lastWin){ lastWin=win; $('.hero').classList.toggle('win',win); $('#phaseTxt').textContent=win?'随机截止窗口':'确定区';
    $('#fLabel').textContent=win?'截止点即将揭晓':'距本分钟截止'; }
  $('#fSub').textContent= win? `第 ${Math.floor(sec)} 秒 · 截止点在 45–60 秒之间` : `还有 ${Math.ceil(P.certain-sec)} 秒进入随机窗口`;
}

/* 排行与事件流 */
function renderRank(){
  const arr=[...S.cur.agg.entries()].sort((a,b)=>b[1]-a[1]).slice(0,5), max=arr.length?arr[0][1]:1, ol=$('#rank');
  $('#rankCount').textContent=S.cur.burns.length+' 笔';
  if(!arr.length){ ol.innerHTML='<li class="empty">本分钟还没有燃烧</li>'; return; }
  ol.innerHTML=arr.map(([w,v],k)=>`<li class="${w===ME?'me':''}"><span class="bar" style="width:${(v/max*100).toFixed(1)}%"></span><span class="n">${String(k+1).padStart(2,'0')}</span><span class="a">${addrOf(w)}</span><span class="v">${fmtTok(v)}</span></li>`).join('');
}
function pushEv(track,html,cls){ const el=document.createElement('span'); el.className='ev '+(cls||''); el.innerHTML=html; track.prepend(el); while(track.children.length>14) track.lastChild.remove(); }
sub('burn',b=>{ spawnInbound(b.who===ME?60:Math.min(30,4+b.amount/6e4), b.who===ME?2:(b.late?1:0));
  pushEv($('#stream'),`🔥 <span class="ad">${addrOf(b.who)}</span> 烧掉 <b>${fmtTok(b.amount)}</b><span class="s">${String(b.sec).padStart(2,'0')}s${b.plot?` · 过路 #${b.plot}`:''}</span>`, (b.who===ME?'me ':'')+(b.late?'win':'')); });

/* 揭晓演出 */
const rv=$('#reveal'); let rvBusy=false;
sub('minute',res=>{
  furnaceBurst(70);
  const msg = res.rolled? `本分钟总燃烧不到 10 万枚，整桶滚入下一分钟` : `计入 ${fmtTok(res.total)} 枚 · ${fmt(res.prize,4)} BNB 按比例分给 ${res.addrs} 个地址${res.mine>0?` · 你分得 ${fmt(res.mine,5)} BNB`:''}`;
  pushEv($('#stream'),`⚡ 第 ${res.m} 分钟截止于 <b>${res.cutoff}s</b><span class="s">${res.rolled?'未达线，滚入下一分钟':`截止后 ${fmtTok(res.roll)} 枚滚入下一分钟`}</span>`,'win');
  if(S.speed>10 || rvBusy || !vis.hero){ if(res.mine>0) toast(`第 ${res.m} 分钟：你分得 ${fmt(res.mine,5)} BNB`); return; }
  rvBusy=true; const short=S.speed>1; const bar=$('#rvBar'); if(!bar.children.length) bar.innerHTML='<i></i>'.repeat(16); const cells=[...bar.children]; cells.forEach(c=>c.className='');
  $('#rvK').textContent=`第 ${res.m} 分钟 · 截止点揭晓`; $('#rvSub').textContent='等待揭晓区块…'; rv.classList.remove('land'); rv.classList.add('on','spin');
  let n=0; const iv=setInterval(()=>{ const rn=45+Math.floor(Math.random()*16); $('#rvNum').textContent=rn; cells.forEach((c,k)=>c.className=k<=rn-45?'on':''); if(++n>(short?8:15)){ clearInterval(iv); cells.forEach((c,k)=>c.className= k<res.cutoff-45?'on': k===res.cutoff-45?'cut':'after');
    $('#rvNum').textContent=res.cutoff; rv.classList.remove('spin'); void rv.offsetWidth; rv.classList.add('land'); $('#rvSub').textContent=msg;
    $('#heroFlash').classList.remove('go'); void $('#heroFlash').offsetWidth; $('#heroFlash').classList.add('go');
    fxBurst(innerWidth/2, innerHeight/2, 140, res.mine>0);
    setTimeout(()=>{ rv.classList.remove('on','land'); rvBusy=false; }, short?1100:1700); } }, 65);
});

/* =================== 全屏特效层 =================== */
const fx=$('#fx'), fxc=fx.getContext('2d'); const fxp=[];
function fxBurst(x,y,n,gold=true){ for(let i=0;i<n;i++){ const a=Math.random()*Math.PI*2, v=rnd(120,620); fxp.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-120,life:rnd(.7,1.5),s:rnd(1.5,4),rot:Math.random()*6,vr:rnd(-8,8),c:Math.random()<.8? (gold?'#FCD535':'#FF8A3D') : (Math.random()<.5?'#FFF1B8':'#FF6A1A'),sq:Math.random()<.5}); } }
function fxStream(x1,y1,x2,y2,n,color){ for(let i=0;i<n;i++) fxp.push({x:x1+rnd(-20,20),y:y1+rnd(-8,8),tx:x2,ty:y2,t:-i*.012,dur:rnd(.6,1),life:1,s:rnd(1.5,3.2),c:color||'#FCD535',path:true,bend:rnd(-200,200)}); }
function drawFx(dt){
  if(!fxp.length){ if(fx._dirty){ fxc.clearRect(0,0,fx.width,fx.height); fx._dirty=false; } return; }
  sizeCanvas(fx,fxc); fxc.clearRect(0,0,innerWidth,innerHeight); fx._dirty=true; fxc.globalCompositeOperation='lighter';
  for(let i=fxp.length-1;i>=0;i--){ const p=fxp[i];
    if(p.path){ p.t+=dt/p.dur; if(p.t<0) continue; if(p.t>=1){ fxp.splice(i,1); continue; }
      const k=p.t, e=k*k*(3-2*k), mx=(p.x+p.tx)/2+p.bend, my=Math.min(p.y,p.ty)-120;
      const x=(1-e)*(1-e)*p.x+2*(1-e)*e*mx+e*e*p.tx, y=(1-e)*(1-e)*p.y+2*(1-e)*e*my+e*e*p.ty;
      fxc.fillStyle=p.c; fxc.globalAlpha=1-k*.4; fxc.beginPath(); fxc.arc(x,y,p.s,0,7); fxc.fill(); continue; }
    p.life-=dt; if(p.life<=0){ fxp.splice(i,1); continue; }
    p.vy+=520*dt; p.vx*=.985; p.x+=p.vx*dt; p.y+=p.vy*dt; p.rot+=p.vr*dt;
    fxc.globalAlpha=Math.min(1,p.life*1.4); fxc.fillStyle=p.c;
    if(p.sq){ fxc.save(); fxc.translate(p.x,p.y); fxc.rotate(p.rot); fxc.fillRect(-p.s,-p.s*.5,p.s*2,p.s); fxc.restore(); } else { fxc.beginPath(); fxc.arc(p.x,p.y,p.s,0,7); fxc.fill(); } }
  fxc.globalAlpha=1; fxc.globalCompositeOperation='source-over';
}

/* =================== 三池 =================== */
const pcv=$('#poolCv'), pctx=pcv.getContext('2d'); const flows=[]; let intakeKick=0;
const POOLC=[[240,185,11],[255,106,26],[61,245,196]];
sub('income',bnb=>{ if(!vis.pools) return; intakeKick=1; const n=Math.max(3,Math.round(bnb*900)); P.split.forEach((r,k)=>{ for(let i=0;i<Math.max(1,Math.round(n*r));i++) flows.push({k,t:-i*.05-Math.random()*.05,v:rnd(.55,.8),o:rnd(-1,1)}); }); });
function poolGeom(w,h){ const tw=Math.min(150,w*.2), ix=w/2, iy=MOBILE?70:80, ty=MOBILE?250:270, bot=h-(MOBILE?120:150);
  return {ix,iy,tanks:[1,3,5].map(k=>({x:w*k/6-tw/2,y:ty,w:tw,h:bot-ty}))}; }
function drawPools(dt){
  const [w,h]=sizeCanvas(pcv,pctx), g=pctx, G=poolGeom(w,h), T=perfNow/1000; g.clearRect(0,0,w,h);
  const vals=[S.minutePool,S.plotPool,S.floorReserve+(S.round?S.round.pool-S.round.paid:0)], mx=Math.max(...vals);
  // 入口
  intakeKick=Math.max(0,intakeKick-dt*1.5);
  let gr=g.createRadialGradient(G.ix,G.iy+60,0,G.ix,G.iy+60,90+intakeKick*30); gr.addColorStop(0,`rgba(252,213,53,${.35+intakeKick*.4})`); gr.addColorStop(1,'rgba(252,213,53,0)'); g.fillStyle=gr; g.beginPath(); g.arc(G.ix,G.iy+60,120,0,7); g.fill();
  g.fillStyle='#FFF1B8'; g.beginPath(); g.arc(G.ix,G.iy+60,5+intakeKick*3,0,7); g.fill();
  // 管道
  G.tanks.forEach((t,k)=>{ const x2=t.x+t.w/2, y2=t.y-4; g.strokeStyle=`rgba(${POOLC[k]},.18)`; g.lineWidth=10; g.beginPath(); g.moveTo(G.ix,G.iy+60); g.bezierCurveTo(G.ix,G.iy+150,x2,y2-90,x2,y2); g.stroke();
    g.strokeStyle=`rgba(${POOLC[k]},.55)`; g.lineWidth=1.5; g.setLineDash([4,10]); g.lineDashOffset=-T*40; g.stroke(); g.setLineDash([]);
    const mx_=(G.ix+x2)/2, my_=(G.iy+60+y2)/2; g.fillStyle=`rgba(${POOLC[k]},.9)`; g.font='600 12px JetBrains Mono, monospace'; g.textAlign='center'; g.fillText(['45%','30%','25%'][k], mx_+(k-1)*18, my_-4); });
  // 粒子
  g.globalCompositeOperation='lighter';
  for(let i=flows.length-1;i>=0;i--){ const f=flows[i]; f.t+=dt*f.v; if(f.t<0) continue; if(f.t>=1){ flows.splice(i,1); G.tanks[f.k].kick=1; continue; }
    const t=G.tanks[f.k], x2=t.x+t.w/2, y2=t.y-4, k=f.t, x0=G.ix,y0=G.iy+60, c1x=G.ix,c1y=G.iy+150,c2x=x2,c2y=y2-90;
    const x=Math.pow(1-k,3)*x0+3*Math.pow(1-k,2)*k*c1x+3*(1-k)*k*k*c2x+k*k*k*x2+f.o*3, y=Math.pow(1-k,3)*y0+3*Math.pow(1-k,2)*k*c1y+3*(1-k)*k*k*c2y+k*k*k*y2;
    g.fillStyle=`rgba(${POOLC[f.k]},.95)`; g.beginPath(); g.arc(x,y,2.2,0,7); g.fill(); g.fillStyle=`rgba(${POOLC[f.k]},.25)`; g.beginPath(); g.arc(x,y,6,0,7); g.fill(); }
  g.globalCompositeOperation='source-over';
  // 能量槽
  G.tanks.forEach((t,k)=>{ t.kick=Math.max(0,(t.kick||0)-dt*2); const lv=.2+.72*(vals[k]/mx), c=POOLC[k];
    const r=18; g.save(); g.beginPath(); g.roundRect? g.roundRect(t.x,t.y,t.w,t.h,r) : g.rect(t.x,t.y,t.w,t.h); g.clip();
    g.fillStyle='rgba(255,240,210,.03)'; g.fillRect(t.x,t.y,t.w,t.h);
    const sy=t.y+t.h*(1-lv);
    for(let L=0;L<2;L++){ g.beginPath(); g.moveTo(t.x,t.y+t.h);
      for(let x=0;x<=t.w;x+=4){ const yy=sy+Math.sin(x/t.w*Math.PI*2*(1.2+L*.5)+T*(2+L)+k)*(4+t.kick*6)*(L?0.7:1); g.lineTo(t.x+x,yy+L*4); }
      g.lineTo(t.x+t.w,t.y+t.h); g.closePath();
      const lg=g.createLinearGradient(0,sy,0,t.y+t.h); lg.addColorStop(0,`rgba(${c},${L?.55:.35})`); lg.addColorStop(1,`rgba(${c.map(v=>v*.25|0)},.9)`); g.fillStyle=lg; g.fill(); }
    // 气泡
    for(let b=0;b<6;b++){ const bx=t.x+((b*37+k*13)%t.w), by=t.y+t.h-((T*30*(1+b%3)+b*40)%(t.h*lv)); g.fillStyle=`rgba(255,255,255,${.12})`; g.beginPath(); g.arc(bx,by,1.5+b%2,0,7); g.fill(); }
    // 高光
    const hl=g.createLinearGradient(t.x,0,t.x+t.w,0); hl.addColorStop(0,'rgba(255,255,255,.10)'); hl.addColorStop(.25,'rgba(255,255,255,0)'); hl.addColorStop(.8,'rgba(255,255,255,0)'); hl.addColorStop(1,'rgba(255,255,255,.06)'); g.fillStyle=hl; g.fillRect(t.x,t.y,t.w,t.h);
    g.restore();
    g.strokeStyle=`rgba(${c},${.35+t.kick*.5})`; g.lineWidth=1.5; g.beginPath(); g.roundRect? g.roundRect(t.x,t.y,t.w,t.h,r) : g.rect(t.x,t.y,t.w,t.h); g.stroke();
    if(t.kick>0){ g.shadowColor=`rgb(${c})`; g.shadowBlur=20*t.kick; g.stroke(); g.shadowBlur=0; }
  });
}

/* =================== 限量回购 =================== */
const ringFg=$('#ringFg'); const CIRC=2*Math.PI*92;
function renderRound(){
  const r=S.round;
  if(!r){ $('#rId').textContent='—'; $('#rPrice').textContent='等待开轮'; $('#rPer').textContent='地板储备大于 0 时自动开新一轮'; roll('rPool',0); roll('rLeft',0); $('#rTime').textContent='—'; ringFg.style.strokeDashoffset=CIRC; $('#rPct').textContent='—'; $('#rFilled').textContent=''; $('#sellLeft').textContent='0'; return; }
  $('#rId').textContent=r.id; $('#rPrice').textContent=r.price.toExponential(3).replace('e-','×10⁻').replace(/⁻(\d+)/,(m,d)=>'⁻'+[...d].map(c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'[c]).join(''));
  $('#rPer').textContent=`≈ 每 100 万枚 ${fmt(r.price*1e6,4)} BNB`;
  roll('rPool',r.pool); roll('rLeft',r.pool-r.paid); $('#rTime').textContent=hms(P.roundDur-(S.t-r.openAt));
  const pct=r.filled/P.quota; ringFg.style.strokeDashoffset=CIRC*(1-pct); $('#rPct').textContent=(pct*100).toFixed(1)+'%'; $('#rFilled').textContent=`${fmtTok(r.filled)} / 15M`;
  $('#sellLeft').textContent=fmtTok(P.quota-r.filled);
  odo(S.roundBurned);
}
function renderHist(){ $('#rHist').innerHTML=S.roundHist.slice(0,4).map(h=>`<tr class="${h.fresh?'new':''}"><td>#${h.id}</td><td>${h.price.toExponential(2)}</td><td class="${h.why==='收满'?'full':''}">${fmtTok(h.filled)}</td><td>${h.why}</td></tr>`).join(''); S.roundHist.forEach(h=>h.fresh=false); }
sub('roundEnd',()=>{ renderHist(); toast('本轮回购结束，没花完的资金滚回地板储备'); });
sub('roundOpen',r=>toast(`第 ${r.id} 轮限量回购开轮：价格已锁定`));
let odoLast='';
function odo(v){ const s=fmtInt(v); if(s===odoLast) return; const el=$('#odo');
  if(el.children.length!==s.length){ el.innerHTML=[...s].map(c=>c===','?'<span class="sep">,</span>':'<span class="dg"><i>'+'0123456789'.split('').map(d=>`<span>${d}</span>`).join('')+'</i></span>').join(''); }
  [...s].forEach((c,k)=>{ const n=el.children[k]; if(c!==',' && n.firstChild) n.firstChild.style.transform=`translateY(${-40*+c}px)`; }); odoLast=s; }
const cru=$('#crucible');
function meltAt(x,y){ cru.classList.add('hot'); clearTimeout(cru._t); cru._t=setTimeout(()=>cru.classList.remove('hot'),1200); fxBurst(x,y,50,false); }
sub('sell',e=>{ if(e.who!==ME && vis.round){ const r=cru.getBoundingClientRect(); meltAt(r.left+r.width/2,r.top+10); } });
function coinsFly(from,to,n,done){ for(let i=0;i<n;i++){ const c=document.createElement('div'); c.className='coin'; c.textContent='E'; document.body.appendChild(c);
  const x1=from.x+rnd(-30,30), y1=from.y+rnd(-10,10), mx=(x1+to.x)/2+rnd(-120,120), my=Math.min(y1,to.y)-rnd(80,180);
  const a=c.animate([{transform:`translate(${x1}px,${y1}px) scale(.6)`,opacity:0},{transform:`translate(${mx}px,${my}px) scale(1.1) rotate(180deg)`,opacity:1,offset:.5},{transform:`translate(${to.x}px,${to.y}px) scale(.3) rotate(360deg)`,opacity:.9}],{duration:900+i*60,easing:'cubic-bezier(.5,0,.8,1)',delay:i*55});
  a.onfinish=()=>{ c.remove(); if(i===n-1) done&&done(); }; } }
function inView(el){ const r=el.getBoundingClientRect(); return r.bottom>0 && r.top<innerHeight; }

/* =================== 地块地图 =================== */
const mcv=$('#mapCv'), mctx=mcv.getContext('2d'); const COLS=MOBILE?50:75, ROWS=Math.ceil(N/COLS); let cell=10, gap=1.5, hover=-1;
const HEAT=[[42,29,14],[122,74,8],[240,185,11],[255,106,26],[255,241,184]];
function heatColor(h){ const x=clamp(h,0,1)*(HEAT.length-1), i=Math.min(HEAT.length-2,Math.floor(x)), f=x-i, a=HEAT[i], b=HEAT[i+1]; return `rgb(${a[0]+(b[0]-a[0])*f|0},${a[1]+(b[1]-a[1])*f|0},${a[2]+(b[2]-a[2])*f|0})`; }
function layoutMap(){ const w=mcv.parentElement.clientWidth; cell=(w-gap)/COLS; mcv.style.height=(cell*ROWS+gap)+'px'; }
function drawMap(){
  const [w,h]=sizeCanvas(mcv,mctx), g=mctx; g.clearRect(0,0,w,h); const f=floorNow(), L3=Math.log(2), now=perfNow;
  for(let i=0;i<N;i++){ const c=i%COLS, r=i/COLS|0, x=c*cell+gap, y=r*cell+gap, s=cell-gap;
    if(i>=S.plotsMinted){ g.fillStyle='#120e0a'; g.fillRect(x,y,s,s); continue; }
    if(owner[i]===ME){ g.fillStyle='#3DF5C4'; }
    else { const p=anchor[i]? Math.max(f,decayed(anchor[i],anchorAt[i],S.t)):f; g.fillStyle=heatColor(.12+Math.log(p/f)/L3+tex[i]); }
    g.fillRect(x,y,s,s);
    const pu=(S.t-pulseAt[i]); if(pu>=0 && pu<3){ g.fillStyle=`rgba(255,200,90,${.5*(1-pu/3)})`; g.fillRect(x-1,y-1,s+2,s+2); }
  }
  // 闪光 & 飘字
  g.globalCompositeOperation='lighter';
  for(const i of flashing){ const k=(now-flashAt[i])/1400; if(k>1){ flashing.delete(i); continue; }
    const c=i%COLS, r=i/COLS|0, x=c*cell+cell/2, y=r*cell+cell/2, rr=cell*(1+k*5);
    const gr=g.createRadialGradient(x,y,0,x,y,rr); gr.addColorStop(0,`rgba(255,250,230,${1-k})`); gr.addColorStop(.4,`rgba(252,213,53,${.6*(1-k)})`); gr.addColorStop(1,'rgba(255,106,26,0)'); g.fillStyle=gr; g.beginPath(); g.arc(x,y,rr,0,7); g.fill();
    g.fillStyle=`rgba(255,241,184,${1-k})`; g.font=`700 ${MOBILE?10:12}px JetBrains Mono, monospace`; g.textAlign='center'; g.fillText('+10%',x,y-cell-k*26); }
  g.globalCompositeOperation='source-over';
  const box=(i,col,lw)=>{ const c=i%COLS, r=i/COLS|0; g.strokeStyle=col; g.lineWidth=lw; g.strokeRect(c*cell+gap-1,r*cell+gap-1,cell-gap+2,cell-gap+2); };
  if(S.sel>=0) box(S.sel,`rgba(255,255,255,${.6+.4*Math.sin(now/200)})`,2);
  if(hover>=0) box(hover,'#fff',1.5);
}
const flashing=new Set(); const tex=new Float32Array(N).map(()=>rnd(-.06,.06));
sub('plotBuy',e=>{ flashing.add(e.i); flashAt[e.i]=perfNow;
  pushEv($('#deals'),`◆ <span class="ad">${addrOf(e.who)}</span> 买下 <b>#${e.i+1}</b> <span class="s">${px(e.price)} BNB → 新价 ${px(e.price*P.step)}</span>`, (e.who===ME?'me ':'')+'plot');
  if(e.i===S.sel){ const b=$('#bPrice'); b.classList.remove('jump'); void b.offsetWidth; b.classList.add('jump'); drawCurve(); }
  if(e.prev===ME && e.who!==ME) toast(`你的地块 #${e.i+1} 被买走，${fmt(e.price*(1-P.fee),5)} BNB 已记入卖地款`);
});
function idxAt(ev){ const r=mcv.getBoundingClientRect(), x=ev.clientX-r.left, y=ev.clientY-r.top; const c=Math.floor(x/cell), rr=Math.floor(y/cell); if(c<0||c>=COLS||rr<0||rr>=ROWS) return -1; const i=rr*COLS+c; return i<N? i:-1; }
const pcard=$('#pcard');
function showCard(i,ev){ if(i<0){ pcard.classList.remove('on'); return; }
  const f=floorNow(), p=i<S.plotsMinted? plotPrice(i):0, list=trades.get(i);
  $('#pcId').textContent='#'+(i+1); $('#pcZone').textContent=`创世分区 ${String(Math.floor(i/110)+1).padStart(2,'0')}`;
  $('#pcOwner').textContent= i>=S.plotsMinted? '尚未发放（随燃烧发放）' : owner[i]===ME? '地主：你' : '地主：'+addrOf(owner[i]);
  $('#pcPrice').textContent= i<S.plotsMinted? px(p)+' BNB':'—'; $('#pcFloor').textContent=px(f); $('#pcHour').textContent=(S.plotEma).toExponential(2);
  $('#pcLast').textContent= list? ago(S.t-list.at(-1).t) : '从未成交';
  spark($('#pcSpark'),i,true);
  const wr=mcv.parentElement.getBoundingClientRect(); let x=ev.clientX-wr.left+16, y=ev.clientY-wr.top+16;
  if(x+pcard.offsetWidth>wr.width) x=ev.clientX-wr.left-pcard.offsetWidth-16; if(x<0) x=4;
  if(y+pcard.offsetHeight>wr.height+40) y=ev.clientY-wr.top-pcard.offsetHeight-16;
  pcard.style.left=x+'px'; pcard.style.top=y+'px'; pcard.classList.add('on'); }
mcv.addEventListener('pointermove',ev=>{ hover=idxAt(ev); showCard(hover,ev); });
mcv.addEventListener('pointerleave',()=>{ hover=-1; pcard.classList.remove('on'); });
mcv.addEventListener('click',ev=>{ const i=idxAt(ev); if(i<0) return; if(i>=S.plotsMinted){ toast('这块地还没发放：创世期之后继续随燃烧发放',true); return; } S.sel=i; $('#maxPrice').value=''; renderPlotPanel(); drawCurve(); if(ev.pointerType!=='mouse'){ showCard(i,ev); clearTimeout(pcard._t); pcard._t=setTimeout(()=>pcard.classList.remove('on'),2200); } });
function series(i,n){ const t0=S.t-H72, pts=[], fl=[]; for(let k=0;k<=n;k++){ const t=t0+H72*k/n; pts.push(plotPrice(i,t)); fl.push(floorAt(t)); } return {pts,fl,t0}; }
function spark(cv,i,small){ const g=cv.getContext('2d'), w=cv.clientWidth||240, h=cv.clientHeight||64; cv.width=w*DPR; cv.height=h*DPR; g.setTransform(DPR,0,0,DPR,0,0);
  const n=small?60:160, {pts,fl,t0}=series(i,n), mx=Math.max(...pts)*1.1, mn=Math.min(...fl)*.9, X=k=>4+(w-8)*k/n, Y=v=>h-8-(h-16)*(v-mn)/(mx-mn||1);
  if(!small){ g.strokeStyle='rgba(255,240,210,.05)'; for(let k=1;k<4;k++){ g.beginPath(); g.moveTo(0,h*k/4); g.lineTo(w,h*k/4); g.stroke(); } }
  const lg=g.createLinearGradient(0,0,0,h); lg.addColorStop(0,'rgba(252,213,53,.35)'); lg.addColorStop(1,'rgba(252,213,53,0)');
  g.beginPath(); pts.forEach((v,k)=>k?g.lineTo(X(k),Y(v)):g.moveTo(X(k),Y(v))); g.lineTo(X(n),h); g.lineTo(X(0),h); g.fillStyle=lg; g.fill();
  g.strokeStyle='#FCD535'; g.lineWidth=small?1.5:2; g.beginPath(); pts.forEach((v,k)=>k?g.lineTo(X(k),Y(v)):g.moveTo(X(k),Y(v))); g.stroke();
  g.setLineDash([4,4]); g.strokeStyle='#3DF5C4'; g.lineWidth=1.2; g.beginPath(); fl.forEach((v,k)=>k?g.lineTo(X(k),Y(v)):g.moveTo(X(k),Y(v))); g.stroke(); g.setLineDash([]);
  for(const tr of (trades.get(i)||[])){ if(tr.t<t0) continue; const k=(tr.t-t0)/H72*n; g.fillStyle='#FF8A3D'; g.beginPath(); g.arc(X(k),Y(tr.p*P.step),small?2.5:3.5,0,7); g.fill(); }
  if(!small){ g.fillStyle='#8C8273'; g.font='10px JetBrains Mono, monospace'; g.textAlign='left'; g.fillText('−72h',6,h-2); g.textAlign='right'; g.fillText('现在',w-6,h-2); } }
function drawCurve(){ spark($('#bCurve'),S.sel,false); }
function renderPlotPanel(){ const i=S.sel, p=plotPrice(i);
  $('#bId').textContent='#'+(i+1); const o=$('#bOwner'); o.textContent=owner[i]===ME?'地主：你':'地主 '+addrOf(owner[i]); o.className='pill'+(owner[i]===ME?' me':'');
  $('#bPrice').textContent=px(p)+' BNB'; $('#bNext').textContent=px(p*P.step)+' BNB';
  const b=$('#buyBtn'); if(!b.classList.contains('busy')&&!b.classList.contains('ok')){ b.disabled=owner[i]===ME; b.querySelector('.cta-t').textContent=owner[i]===ME?'这是你的地块':'按当前价买入'; }
  if(S.t%4===0) drawCurve(); }
function renderMapStats(){ $('#mFloor').textContent=px(floorNow())+' BNB'; $('#mEma').textContent=S.plotEma.toExponential(2)+' BNB'; $('#mMinted').textContent=`${fmtInt(S.plotsMinted)} / 3300`; $('#mVol').textContent=fmt(S.vol24,3)+' BNB'; }

/* =================== 交易卡 =================== */
const tabs=$$('.t-tabs button'), ink=$('#tInk');
function setTab(t){ tabs.forEach((b,k)=>{ b.classList.toggle('on',b.dataset.t===t); if(b.dataset.t===t){ ink.style.width=b.offsetWidth+'px'; ink.style.transform=`translateX(${b.offsetLeft-4}px)`; } }); $$('.t-pane').forEach(p=>p.classList.toggle('on',p.dataset.p===t)); renderEst(); }
tabs.forEach(b=>b.onclick=()=>setTab(b.dataset.t));
const fmtInput=el=>{ const n=parseNum(el.value); el.value=n? fmtInt(n):''; };
['burnAmt','sellAmt'].forEach(id=>{ const el=$('#'+id); el.addEventListener('input',()=>{ const pos=el.value.length-el.selectionStart; fmtInput(el); el.setSelectionRange(el.value.length-pos,el.value.length-pos); renderEst(); }); });
$$('[data-pct]').forEach(b=>b.onclick=()=>{ $('#burnAmt').value=fmtInt(Math.floor(S.my.tok*+b.dataset.pct/1e3)*1e3); renderEst(); });
$$('[data-spct]').forEach(b=>b.onclick=()=>{ const left=S.round?P.quota-S.round.filled:0; $('#sellAmt').value=fmtInt(Math.floor(Math.min(S.my.tok,left)*+b.dataset.spct)); renderEst(); });
$('#routeRand').onclick=()=>{ $('#burnPlot').value=1+Math.floor(Math.random()*S.plotsMinted); };
function renderEst(){
  const a=parseNum($('#burnAmt').value), sec=secOf(S.t);
  const tot=S.cur.pre+S.cur.carry+S.cur.burns.filter(b=>b.late).reduce((x,b)=>x+b.amount,0);
  const share=a>0?(S.my.minuteBurn+a)/(tot+a):0;
  $('#estShare').textContent=(share*100).toFixed(2)+'%'; $('#estBnb').textContent=fmt(share*S.minutePool*P.minuteRelease,5)+' BNB';
  const m=$('#estMode'); if(sec>=P.certain){ m.textContent='随机窗口：截止点之后会计入下一分钟'; m.className='warn'; } else { m.textContent='确定计入本分钟'; m.className=''; }
  $('#burnNote').textContent= a&&a<P.minBurnTx? '单笔至少 1 万枚' : a>S.my.tok? 'EDEN 余额不足' : '单笔至少 1 万枚 · 币会转入销毁地址，不可撤回';
  const q=sellQuote(parseNum($('#sellAmt').value)); $('#sellOut').textContent=fmt(q.out,6)+' BNB';
}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function ensureWallet(){ if(S.wallet) return; const b=$('#walletBtn'); $('#walletTxt').textContent='连接中…'; await sleep(650); S.wallet=true; b.classList.add('on'); $('#walletTxt').textContent=MY_ADDR; toast('已连接模拟钱包：不会请求真实钱包'); }
$('#walletBtn').onclick=async()=>{ if(S.wallet){ S.wallet=false; $('#walletBtn').classList.remove('on'); $('#walletTxt').textContent='连接钱包'; toast('已断开模拟钱包'); return; } await ensureWallet(); };
async function runCta(btn, steps, fn, okText){
  if(btn.classList.contains('busy')) return; await ensureWallet();
  const t=btn.querySelector('.cta-t'), orig=t.textContent; btn.classList.add('busy');
  try{
    for(const s of steps||[]){ s.el.classList.add('act'); t.textContent=s.label; await sleep(520); s.el.classList.remove('act'); s.el.classList.add('done'); }
    t.textContent='确认中…'; await sleep(420);
    const res=fn(); btn.classList.remove('busy'); btn.classList.add('ok'); t.textContent=okText||'完成';
    const r=btn.getBoundingClientRect(); fxBurst(r.left+r.width/2, r.top+r.height/2, 90); if(res&&res.after) res.after(r); if(res&&res.msg) toast(res.msg);
    await sleep(1300);
  }catch(e){ btn.classList.remove('busy'); toast(e.message,true); }
  btn.classList.remove('ok'); t.textContent=orig; (steps||[]).forEach(s=>s.el.classList.remove('done','act')); renderNumbers();
}
const stepEls=$$('#burnSteps .st');
$('#burnBtn').onclick=()=>{ const a=parseNum($('#burnAmt').value), plot=parseNum($('#burnPlot').value);
  if(a<P.minBurnTx) return toast('单笔至少 1 万枚',true); if(a>S.my.tok) return toast('EDEN 余额不足',true);
  runCta($('#burnBtn'),[{el:stepEls[0],label:'授权 EDEN…'},{el:stepEls[1],label:'燃烧中…'}],()=>{ if(a>S.my.tok) throw new Error('EDEN 余额不足'); S.my.tok-=a; const sec=secOf(S.t); doBurn(ME,a,sec,plot>0&&plot<=S.plotsMinted?plot:0);
    return {msg:`已烧掉 ${fmtTok(a)} 枚 EDEN · 第 ${sec} 秒${sec>=P.certain?' · 处于随机窗口':''}`, after:r=>{ const fr=$('#furnace').getBoundingClientRect(); fxStream(r.left+r.width/2,r.top,fr.left+fr.width/2,fr.top+fr.height/2,60,'#3DF5C4'); setTimeout(()=>furnaceBurst(80,true),900); }}; },'已燃烧'); };
$('#claimBtn').onclick=()=>runCta($('#claimBtn'),null,()=>{ const b=S.my.claim+S.my.credit, n=S.my.plotsPending; if(b<=0&&!n) throw new Error('暂时没有可领取的');
  S.my.bnb+=b; S.my.claim=0; S.my.credit=0; for(let k=0,i=Math.floor(Math.random()*S.plotsMinted);k<n;i=(i+97)%S.plotsMinted){ if(owner[i]!==ME){ owner[i]=ME; flashing.add(i); flashAt[i]=perfNow; k++; } } S.my.plotsPending=0;
  return {msg:`已领取 ${fmt(b,5)} BNB${n?` 和 ${n} 块地`:''}`}; },'已领取');
$('#sellBtn').onclick=()=>{ const a=parseNum($('#sellAmt').value); const q=sellQuote(a); const minOut=parseNum($('#sellMin').value)||q.out*.995;
  runCta($('#sellBtn'),null,()=>{ const r=sell(ME,a,minOut); return {msg:`卖入 ${fmtTok(r.take)} 枚，收到 ${fmt(r.out,6)} BNB · 这些币已销毁`, after:br=>{
    const tgt= inView(cru)? (()=>{const c=cru.getBoundingClientRect(); return {x:c.left+c.width/2,y:c.top+12};})() : (()=>{const f=$('#furnace').getBoundingClientRect(); return {x:f.left+f.width/2,y:f.top+f.height/2};})();
    coinsFly({x:br.left+br.width/2,y:br.top},tgt,9,()=>{ meltAt(tgt.x,tgt.y); furnaceBurst(60); }); }}; },'已卖入'); };
$('#buyBtn').onclick=()=>{ const i=S.sel, p=plotPrice(i), mp=parseNum($('#maxPrice').value)||p*1.01;
  runCta($('#buyBtn'),null,()=>{ const paid=buyPlot(i,ME,mp); return {msg:`买下地块 #${i+1}，付 ${px(paid)} BNB；下一口价 ${px(paid*P.step)}`}; },'已买入'); };

/* 速度 / 快进 */
$$('#simctl [data-s]').forEach(b=>b.onclick=()=>{ S.speed=+b.dataset.s; $$('#simctl [data-s]').forEach(x=>x.classList.toggle('on',x===b)); });
$('#ff24').onclick=()=>{ for(let k=0;k<24;k++){ S.t+=3599; S.minute+=60; S.cur.carry=0; S.lastHourAt=S.t; endHour(); income(rnd(2,4)); S.vol24*=.9; stepSecond(); } renderHist(); renderNumbers(); drawCurve(); toast('已快进 24 小时：地块价按每日 5% 回落、地板价随分成更新、回购轮次按时换轮'); };

/* toast */
function toast(msg,err){ const box=$('#toasts'), t=document.createElement('div'); t.className='toast'+(err?' err':''); t.innerHTML=`<i>${err?'!':'✓'}</i><span></span>`; t.lastChild.textContent=msg; box.appendChild(t);
  while(box.children.length>3) box.firstChild.remove(); setTimeout(()=>{ t.classList.add('out'); setTimeout(()=>t.remove(),400); },2800); }

/* =================== 开发者 / schema =================== */
const SCH=(window.EDEN_SCHEMA||{}).vaultUISchema; let devOpen=false; const devViews=[];
function devValues(name,args){ const r=S.round, i=Math.max(0,(+args?.[0]||1)-1);
  switch(name){
    case 'poolInfo': return [S.minutePool,S.plotPool,S.floorReserve,r?r.pool-r.paid:0,S.my.claim+.84,.37,S.my.credit+.12];
    case 'minuteInfo': return [S.minute,{left:60-secOf(S.t)},S.minutePool*P.minuteRelease,S.cur.pre,N-S.plotsMinted];
    case 'roundInfo': return r?[r.id,r.price,P.quota-r.filled,r.pool-r.paid,{left:P.roundDur-(S.t-r.openAt)},true]:[S.roundId,0,0,0,{left:0},false];
    case 'userInfo': return [S.my.claim,S.my.plotsPending,countMine(),S.my.minuteBurn?1:0,S.my.credit];
    case 'plotMarket': return [addrOf(owner[i]),plotPrice(i),floorNow(),anchor[i]||0,trades.get(i)?{ago:S.t-trades.get(i).at(-1).t}:{ago:null}];
  } }
function devFmt(o,v){ if(v==null) return '—'; if(o.fieldType==='time') return v.ago!==undefined?(v.ago==null?'—':ago(v.ago)):'倒计时 '+hms(v.left); if(o.fieldType==='bool') return v?'是':'否'; if(typeof v==='string') return v;
  if(o.decimals===18) return v&&Math.abs(v)<1e-3? v.toExponential(3) : fmt(v,v>=1e5?0:6); return fmtInt(v); }
function buildDev(){ if(!SCH) return; $('#schemaType').textContent=SCH.vaultType; $('#schemaDesc').textContent=SCH.description;
  const box=$('#methods');
  SCH.methods.forEach(m=>{ const el=document.createElement('div'); el.className='m';
    el.innerHTML=`<div class="m-h"><span class="m-name">${m.name}</span><span class="m-t">${m.isWriteMethod?'写入':'只读'}</span></div><div class="m-d">${m.description}</div>`+
      m.inputs.map(i=>`<label>${i.description||i.name} <span class="mono">(${i.fieldType})</span><input data-n="${i.name}"></label>`).join('')+
      m.approvals.map(a=>`<div class="ap">先授权 ${a.tokenType}，数量取 ${a.amountFieldName}</div>`).join('');
    if(!m.isWriteMethod){ const tb=document.createElement('table'); tb.innerHTML=m.outputs.map(o=>`<tr><td>${o.description||o.name}</td><td data-o="${o.name}">—</td></tr>`).join(''); el.appendChild(tb); const v={m,tb,el}; devViews.push(v);
      if(m.inputs.length){ const b=document.createElement('button'); b.textContent='查询'; b.onclick=()=>fillDev(v); el.insertBefore(b,tb); } }
    else { const b=document.createElement('button'); b.textContent='模拟执行（不发交易）'; b.onclick=()=>toast(`开发者面板只展示 schema；请用上方的产品界面操作`); el.appendChild(b); }
    box.appendChild(el); }); }
function fillDev(v){ const args=v.m.inputs.map(i=>v.el.querySelector(`[data-n="${i.name}"]`).value); const vals=devValues(v.m.name,args); v.m.outputs.forEach((o,k)=>{ v.tb.querySelector(`[data-o="${o.name}"]`).textContent=vals?devFmt(o,vals[k]):'—'; }); }
function renderDev(){ devViews.forEach(fillDev); $('#descBanner').textContent=`description()：EDEN 分钟燃烧金库（Flap 税币金库）。税 3%/3% 全部进金库，分账 45/30/25，0 抽成。分钟奖池 ${fmt(S.minutePool,6)} BNB；地块池 ${fmt(S.plotPool,6)} BNB；地板储备 ${fmt(S.floorReserve,6)} BNB。`+(S.round?`第 ${S.round.id} 轮限量回购，价格 ${S.round.price.toExponential(3)} BNB/枚（开轮锁定），剩余额度 ${fmtInt(P.quota-S.round.filled)} 枚。`:'')+'限量回购，不是兑付承诺，没有硬地板；收进的币 100% 销毁。升级权只在 Flap Guardian。'; }
$('#devBox').addEventListener('toggle',e=>{ devOpen=e.target.open; if(devOpen) renderDev(); });

/* =================== 可见性 / 启动 =================== */
const vis={hero:true,furnace:true,pools:false,map:false,round:false};
const io=new IntersectionObserver(es=>es.forEach(e=>{ vis[e.target.dataset.vis]=e.isIntersecting; }),{rootMargin:'100px'});
[['hero','.hero'],['furnace','#furnace'],['pools','.pools'],['map','#mapCv'],['round','.round']].forEach(([k,s])=>{ const el=$(s); el.dataset.vis=k; io.observe(el); });
addEventListener('resize',()=>{ layoutMap(); drawCurve(); setTab($('.t-tabs .on').dataset.t); });
layoutMap(); buildDev(); renderHist();
for(let k=0;k<10;k++){ S.t++; doBurn(Math.floor(Math.random()*ADDRS.length), Math.round(rnd(2e4,9e5)/1e3)*1e3, secOf(S.t), 0); }
S.t+=22; for(let k=0;k<6;k++){ const i=Math.floor(Math.random()*S.plotsMinted); try{ buyPlot(i,Math.floor(Math.random()*ADDRS.length)); }catch(e){} }
for(let k=0;k<8;k++) income(rnd(.002,.01));
renderNumbers(); drawCurve(); requestAnimationFrame(()=>{ setTab('burn'); drawPools(0); drawMap(); });
requestAnimationFrame(frame);
window.__EDEN_SIM__=S;
})();
