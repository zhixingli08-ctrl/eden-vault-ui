/* EDEN 分钟燃烧金库 · 预览站（纯本地模拟，不连钱包、不发交易）
   参数与合约常量一致：分账 45/30/25、分钟奖池每分钟放 2%、截止 45+[0,15] 秒、最低燃烧线 10 万枚、
   轮次额度 1500 万枚、24h 换轮、地块地板 = EMA×24（70/30）、成交 +10%、每日 -5%、98/2。 */
(() => {
'use strict';
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const P = {split:[.45,.30,.25], minuteRelease:.02, certain:45, window:15, minMinuteBurn:1e5, minBurnTx:1e4,
  plotRelease:.02, quota:15e6, roundDur:86400, floorMult:24, emaKeep:.7, emaNew:.3, step:1.1, fee:.02,
  hourlyDecay:Math.pow(.95,1/24), minPlot:.001, plotsMax:3300, plotPrice:1e5, plotsPerMinute:110};
const ME = '0xDemo…8a1F';
const rnd = (a,b)=>a+Math.random()*(b-a);
const addr = () => '0x'+Math.random().toString(16).slice(2,6)+'…'+Math.random().toString(16).slice(2,6);
const fmt = (n,d=4)=>Number(n).toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d});
const fmtTok = n => n>=1e6? (n/1e6).toFixed(2)+'M' : n>=1e3? Math.round(n/1e3)+'K' : Math.round(n)+'';
const fmtInt = n => Math.round(n).toLocaleString('en-US');
const hms = s => {s=Math.max(0,Math.floor(s));const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(x).padStart(2,'0')}`};
const pxFmt = p => p<0.01? p.toFixed(6) : p.toFixed(4);

/* ---------------- 模拟状态 ---------------- */
const S = {
  t: 0, speed: 1, minute: 1874,
  minutePool: 18.42, plotPool: 9.37, floorReserve: 0.83, burnedTotal: 412_600_000,
  plotsMinted: 1980, plotEma: 0, // BNB / 每块 / 每小时
  round: null, roundId: 6,
  cur: {burns:[], pre:0, carry:0}, // 本分钟
  my: {tok: 5_000_000, bnb: 2.5, claim: 0.0312, credit: 0, plotsPending: 0, minuteBurn: 0},
  plots: [], sel: 0, floorHist: [], vol: 0, lastHourAt: 0,
};
S.plotEma = S.plotPool*P.plotRelease/S.plotsMinted;
const floorNow = () => Math.max(P.minPlot, S.plotEma*P.floorMult);
function openRound(){
  S.roundId++; S.round = {id:S.roundId, pool:S.floorReserve, paid:0, filled:0, openAt:S.t, price:S.floorReserve/P.quota};
  S.floorReserve = 0;
}
S.round = {id:S.roundId, pool:4.62, paid:1.97, filled:15e6*1.97/4.62, openAt:-9.3*3600, price:4.62/15e6};

/* 地块：显示前 220 块，预造 72 小时成交史 */
const H72 = 72*3600;
for (let h=72; h>=0; h--) S.floorHist.push({t:-h*3600, f: floorNow()*(1+0.18*Math.sin(h/7)+rnd(-.04,.04))});
function floorAt(t){let f=S.floorHist[0].f;for(const x of S.floorHist){if(x.t<=t)f=x.f;else break}return f}
for (let i=0;i<220;i++){
  const trades=[]; let tt=-H72-rnd(0,40)*3600;
  const n = Math.random()<.35?0:Math.floor(rnd(1,5));
  let p = floorAt(-H72)*rnd(1,1.3);
  for(let k=0;k<n;k++){ tt += rnd(4,30)*3600; if(tt>-60) break; p = Math.max(priceRaw(p*P.step,trades.length?trades.at(-1).t:tt,tt), floorAt(tt)); trades.push({t:tt,p}); }
  S.plots.push({id:i+1, owner: Math.random()<.01? ME : addr(), trades, hot:0});
}
S.plots[6].owner=ME; S.plots[41].owner=ME;
S.roundHist=[{id:5,price:5.1e-7,filled:15e6,paid:7.65,pool:7.65,why:'收满'},{id:4,price:2.2e-7,filled:11.8e6,paid:2.61,pool:3.3,why:'24h 超时'},{id:3,price:3.4e-7,filled:15e6,paid:5.1,pool:5.1,why:'收满'}];
function priceRaw(anchor, at, t){return anchor*Math.pow(P.hourlyDecay, Math.max(0,(t-at)/3600))}
function plotPriceAt(pl,t){
  const tr = pl.trades.filter(x=>x.t<=t); const f = t>=S.t-1? floorNow(): floorAt(t);
  if(!tr.length) return f;
  const last = tr.at(-1); return Math.max(f, priceRaw(last.p*P.step, last.t, t));
}
const plotPrice = pl => plotPriceAt(pl,S.t);

/* ---------------- 收入 / 分钟 / 小时 / 轮次 ---------------- */
function income(bnb){ S.minutePool+=bnb*P.split[0]; S.plotPool+=bnb*P.split[1]; S.floorReserve+=bnb*P.split[2]; }
function secOf(t){ return ((t%60)+60)%60 }

function doBurn(who, amount, sec, plot){
  S.cur.burns.unshift({who, amount, sec, plot, late: sec>=P.certain});
  if(S.cur.burns.length>60) S.cur.burns.pop();
  if(sec<P.certain) S.cur.pre+=amount;
  if(who===ME) S.my.minuteBurn+=amount;
  S.burnedTotal+=amount;
  addFeed(who, amount, sec);
  spawnEmbers(sec, who===ME? 26:10+Math.min(20,amount/1e5));
}

function endMinute(){
  const m=S.minute, burns=S.cur.burns.slice();
  const cutoff = P.certain + Math.floor(Math.random()*16); // 合约：45 + keccak(blockhash…) % 16
  revealAnim(cutoff);
  let total=S.cur.pre+S.cur.carry, myIn=0, rollNext=0, myRoll=0;
  for(const b of burns){ if(b.sec<P.certain){ if(b.who===ME) myIn+=b.amount; continue;}
    if(b.sec<cutoff){ total+=b.amount; if(b.who===ME) myIn+=b.amount; } else { rollNext+=b.amount; if(b.who===ME) myRoll+=b.amount; } }
  let msg;
  if(total < P.minMinuteBurn){ msg=`第 ${m} 分钟未到 10 万枚线，整桶滚到下一个结算分钟`; rollNext+=total; myRoll+=myIn; }
  else {
    const prize=S.minutePool*P.minuteRelease; S.minutePool-=prize;
    const share = myIn/total; S.my.claim+=prize*share;
    if(S.plotsMinted<P.plotsMax){ const issued=Math.min(P.plotsPerMinute, Math.floor(total/P.plotPrice), P.plotsMax-S.plotsMinted); S.plotsMinted+=issued; S.my.plotsPending+=Math.floor(issued*share); }
    msg = myIn? `第 ${m} 分钟截止于第 ${cutoff} 秒 · 你分到 ${fmt(prize*share,5)} BNB` : `第 ${m} 分钟截止于第 ${cutoff} 秒 · 奖池 ${fmt(prize,4)} BNB 已分`;
  }
  markLate(cutoff);
  S.minute++; S.cur={burns:[], pre:0, carry:rollNext}; S.my.minuteBurn=myRoll;
  S.pendingSub = `第 ${m} 分钟截止 ${cutoff}s · 截止后 ${fmtTok(rollNext)} 枚滚入下一分钟`;
  toast(msg);
}

function endHour(){
  const pool=S.plotPool*P.plotRelease; S.plotPool-=pool;
  const avg=pool/S.plotsMinted; S.plotEma = S.plotEma*P.emaKeep + avg*P.emaNew;
  S.floorHist.push({t:S.t, f:floorNow()});
}

function tickRound(){
  const r=S.round;
  if(r && (r.filled>=P.quota-1 || S.t-r.openAt>=P.roundDur)){ S.floorReserve += r.pool-r.paid; S.round=null; S.roundHist.unshift({id:r.id,price:r.price,filled:r.filled,paid:r.paid,pool:r.pool,why:r.filled>=P.quota-1?'收满':'24h 超时',fresh:true}); renderHist(); toast(`第 ${r.id} 轮结束，未花完的 ${fmt(r.pool-r.paid,4)} BNB 滚回地板储备`); }
  if(!S.round && S.floorReserve>0) { openRound(); flashBar(); }
}
function sellQuote(amount){
  const r=S.round; if(!r) return {take:0,out:0};
  const take=Math.min(amount, P.quota-r.filled);
  const out = r.pool*(r.filled+take)/P.quota - r.pool*r.filled/P.quota;
  return {take,out};
}
function sell(who, amount, minOut){
  const r=S.round; if(!r) throw new Error('当前没有开放的轮次');
  const {take,out}=sellQuote(amount);
  if(take<=0||out<=0) throw new Error('ZeroPayout：本轮额度已满');
  if(minOut && out<minOut) throw new Error('SlippageBnbOut：实际可得低于 minBnbOut');
  r.filled+=take; r.paid+=out; S.burnedTotal+=take;
  if(who===ME){ S.my.tok-=take; S.my.bnb+=out; }
  flashBar(); tickRound();
  return {take,out};
}

function buyPlot(pl, who, maxPrice){
  const price=plotPrice(pl);
  if(pl.owner===who) throw new Error('CannotBuyOwnPlot：不能买自己的地块');
  if(maxPrice!=null && price>maxPrice) throw new Error('PriceAboveMax：当前价已高于你的最高愿付价');
  if(who===ME){ if(S.my.bnb<price) throw new Error('InsufficientValue：BNB 不够'); S.my.bnb-=price; }
  const fee=price*P.fee; S.minutePool+=fee;
  if(pl.owner===ME) S.my.credit+=price-fee;
  pl.trades.push({t:S.t, p:price}); pl.owner=who; pl.hot=S.t; S.vol+=price;
  plotFlash(pl, price);
  return price;
}

/* ---------------- 主循环 ---------------- */
let last=performance.now(), acc=0;
function loop(now){
  const dt=Math.min(.25,(now-last)/1000); last=now; acc+=dt*S.speed;
  let steps=0;
  while(acc>=1 && steps<200){ acc-=1; steps++; stepSecond(); }
  const frac = S.speed<=10? acc : 0;
  renderClock(frac); drawEmbers(dt);
  requestAnimationFrame(loop);
}
function stepSecond(){
  S.t++;
  const sec=secOf(S.t);
  if(Math.random()<.35) income(rnd(.0015,.012));
  const pBurn = sec>=P.certain? .5 : .22;
  if(Math.random()<pBurn) doBurn(addr(), Math.round(Math.exp(rnd(Math.log(1.2e4),Math.log(1.6e6)))/1000)*1000, sec, Math.random()<.5?Math.floor(rnd(1,221)):0);
  if(Math.random()<.04 && S.round) { try{ sell(addr(), Math.round(rnd(5e4,9e5)/1e3)*1e3); }catch(e){} }
  if(Math.random()<.035){ const pl=S.plots[Math.floor(rnd(0,220))]; try{ buyPlot(pl, addr()); }catch(e){} }
  if(sec===0) endMinute();
  if(S.t-S.lastHourAt>=3600){ S.lastHourAt=S.t; endHour(); }
  tickRound();
  if(S.speed<=10 || S.t%Math.ceil(S.speed/10)===0) renderAll();
}

/* ---------------- 渲染 ---------------- */
const rollers=new Map();
function roll(key, val, d=4){
  $$(`[data-roll="${key}"]`).forEach(el=>{
    const o=rollers.get(el)||{v:val,shown:val}; const from=o.shown;
    if(Math.abs(from-val)<1e-12){ el.textContent=fmt(val,d); rollers.set(el,o); return; }
    const t0=performance.now(); o.v=val; rollers.set(el,o);
    if(val>from+1e-9){ el.classList.remove('roll-up'); void el.offsetWidth; el.classList.add('roll-up'); }
    const anim=(n)=>{ const k=Math.min(1,(n-t0)/600), e=1-Math.pow(1-k,3); o.shown=from+(val-from)*e; el.textContent=fmt(o.shown,d); if(k<1&&o.v===val) requestAnimationFrame(anim); };
    requestAnimationFrame(anim);
  });
}
function renderAll(){
  roll('minutePrize', S.minutePool*P.minuteRelease, 4);
  roll('minutePool', S.minutePool, 3); roll('plotPool', S.plotPool, 3); roll('floorReserve', S.floorReserve, 3);
  roll('myClaim', S.my.claim, 5); roll('myCredit', S.my.credit, 5);
  $('#minuteBadge').textContent=`第 ${fmtInt(S.minute)} 分钟`;
  const burned = S.cur.pre + S.cur.burns.filter(b=>b.late).reduce((a,b)=>a+b.amount,0) + S.cur.carry;
  $('#burnedNow').textContent=fmtTok(burned)+(S.cur.carry?`（含上分钟滚入 ${fmtTok(S.cur.carry)}）`:''); $('#burnersNow').textContent=new Set(S.cur.burns.map(b=>b.who)).size;
  $('#myTok').textContent=fmtInt(S.my.tok); $('#myBnb').textContent=fmt(S.my.bnb,4); $('#myPlotsPending').textContent=S.my.plotsPending;
  renderRound(); renderPlots(); renderQuotes(); renderSchemaValues();
}
function renderClock(frac){
  const sec=secOf(S.t)+frac, left=60-sec;
  $('#secLeft').textContent=Math.ceil(left)%61;
  const c=$('#secLeft').parentElement; c.classList.toggle('hot', sec>=P.certain);
  const st=$('#clockState');
  if(sec<P.certain){ st.textContent=`进行中 · 确定区（第 0–45 秒）· 还剩 ${Math.ceil(P.certain-sec)} 秒进入随机窗口`; st.classList.remove('win'); }
  else { st.textContent='随机截止窗口 · 截止点在本分钟结束后揭晓，截止后的燃烧滚入下一分钟'; st.classList.add('win'); }
  $('#tlHead').style.left = (sec/60*100)+'%';
  $('#tlCut').classList.toggle('stale', sec>=8);
}
function renderRound(){
  const r=S.round;
  if(!r){ $('#roundBadge').textContent='无开放轮次'; $('#roundPrice').textContent='—'; roll('roundPool',0); roll('roundLeft',0); $('#roundTime').textContent='—';
    $('#roundFill').style.width='0%'; $('#roundFilled').textContent='0'; $('#roundQuota').textContent='—'; return; }
  $('#roundBadge').textContent=`第 ${r.id} 轮`;
  $('#roundPrice').textContent=r.price.toExponential(3);
  roll('roundPool', r.pool, 4); roll('roundLeft', r.pool-r.paid, 4);
  $('#roundTime').textContent=hms(P.roundDur-(S.t-r.openAt));
  const pct=r.filled/P.quota*100; $('#roundFill').style.width=pct+'%'; $('#roundGlow').style.left=`calc(${pct}% - 20px)`;
  $('#roundFilled').textContent=fmtTok(r.filled); $('#roundQuota').textContent=fmtTok(P.quota-r.filled);
}
function flashBar(){ const g=$('#roundGlow'); g.classList.add('on'); clearTimeout(g._t); g._t=setTimeout(()=>g.classList.remove('on'),900); }
function renderQuotes(){
  const a=+($('#burnAmt').value||0), sec=secOf(S.t);
  const tot = S.cur.pre + S.cur.carry + S.cur.burns.filter(b=>b.late).reduce((x,b)=>x+b.amount,0);
  const share = a>0? (S.my.minuteBurn+a)/(tot+a) : 0;
  $('#burnQuote').innerHTML = a<P.minBurnTx? '<span style="color:var(--red)">单笔至少 1 万枚</span>' :
    `按当前燃烧量估算占比 <b>${(share*100).toFixed(2)}%</b> ≈ <b>${fmt(share*S.minutePool*P.minuteRelease,5)}</b> BNB` + (sec>=P.certain? ' · <span style="color:var(--warn)">现在在随机窗口，若落在截止点之后将滚入下一分钟</span>':'' );
  const s=+($('#sellAmt').value||0), q=sellQuote(s);
  $('#sellQuote').innerHTML = !S.round? '当前没有开放的轮次' : `实际收入 <b>${fmtInt(q.take)}</b> 枚（剩余额度上限） · 可得 <b>${fmt(q.out,6)}</b> BNB · 这些币会 100% 销毁`;
}
function renderHist(){ const tb=$('#roundHist tbody'); tb.innerHTML=S.roundHist.slice(0,4).map(r=>`<tr class="${r.fresh?'new':''}"><td>#${r.id}</td><td>${r.price.toExponential(2)}</td><td class="${r.why==='收满'?'full':''}">${fmtTok(r.filled)}</td><td>${fmt(r.paid,2)} / ${fmt(r.pool,2)}</td><td>${r.why}</td></tr>`).join(''); S.roundHist.forEach(r=>r.fresh=false); }
/* 地块 */
function renderPlots(){
  const grid=$('#plots');
  if(!grid.children.length){ S.plots.forEach((pl,i)=>{ const d=document.createElement('div'); d.className='plot'; d.title=`地块 #${pl.id}`; d.onclick=()=>{S.sel=i; renderPlots(); drawCurve(); $('#maxPrice').value='';}; grid.appendChild(d); }); }
  const f=floorNow();
  S.plots.forEach((pl,i)=>{ const d=grid.children[i]; const p=plotPrice(pl), heat=Math.min(1,Math.log(p/f)/Math.log(2.2));
    d.classList.toggle('me', pl.owner===ME); d.classList.toggle('sel', i===S.sel);
    if(pl.owner!==ME) d.style.background = heat>0.02? `rgba(255,${Math.round(209-80*heat)},${Math.round(102-60*heat)},${(0.12+0.6*heat).toFixed(2)})` : ''; else d.style.background='';
  });
  $('#plotCount').textContent=`${fmtInt(S.plotsMinted)} / 3300 已发（显示前 220）`;
  $('#floorPx').textContent=pxFmt(f)+' BNB'; $('#emaPx').textContent=S.plotEma.toExponential(3);
  $('#myPlots').textContent=S.plots.filter(p=>p.owner===ME).length; $('#vol').textContent=fmt(S.vol,3);
  const pl=S.plots[S.sel], p=plotPrice(pl);
  $('#pdId').textContent=`地块 #${pl.id}`; $('#pdOwner').textContent = pl.owner===ME? '持有人：你' : `持有人：${pl.owner}`;
  $('#pdOwner').className = 'pill'+(pl.owner===ME?' lime':'');
  const pdp=$('#pdPrice'); if(pdp.textContent!==pxFmt(p)+' BNB') pdp.textContent=pxFmt(p)+' BNB';
  $('#pdFloor').textContent=pxFmt(f)+' BNB';
  $('#pdLast').textContent = pl.trades.length? `${pxFmt(pl.trades.at(-1).p)} · ${agoText(S.t-pl.trades.at(-1).t)}` : '从未成交';
  const b=$('#buyBtn'); b.disabled = pl.owner===ME; b.textContent = pl.owner===ME? '这是你的地块（不能自买）' : `按当前价 ${pxFmt(p)} BNB 买入 · 成交后 ${pxFmt(p*P.step)}`;
  if(S.t%3===0) drawCurve();
}
function agoText(s){ return s<3600? Math.round(s/60)+' 分钟前' : s<86400? (s/3600).toFixed(1)+' 小时前' : (s/86400).toFixed(1)+' 天前'; }
function plotFlash(pl, price){
  const i=S.plots.indexOf(pl), d=$('#plots').children[i]; if(!d) return;
  d.classList.remove('flash'); void d.offsetWidth; d.classList.add('flash');
  const u=document.createElement('span'); u.className='up'; u.textContent='+10%'; d.appendChild(u); setTimeout(()=>u.remove(),1400);
  if(i===S.sel){ const p=$('#pdPrice'); p.classList.remove('jump'); void p.offsetWidth; p.classList.add('jump'); drawCurve(); }
}
function drawCurve(){
  const c=$('#curve'), dpr=window.devicePixelRatio||1, w=c.clientWidth, h=150; c.width=w*dpr; c.height=h*dpr;
  const g=c.getContext('2d'); g.scale(dpr,dpr); g.clearRect(0,0,w,h);
  const pl=S.plots[S.sel], t0=S.t-H72, N=180, pts=[], fl=[];
  for(let k=0;k<=N;k++){ const t=t0+H72*k/N; pts.push(plotPriceAt(pl,t)); fl.push(t>=S.t-1?floorNow():floorAt(t)); }
  const mx=Math.max(...pts,...fl)*1.12, mn=Math.min(...fl)*0.85;
  const X=k=>8+(w-16)*k/N, Y=v=>h-14-(h-28)*(v-mn)/(mx-mn||1);
  g.strokeStyle='#1b1d20'; g.lineWidth=1; for(let k=1;k<4;k++){ g.beginPath(); g.moveTo(0,h*k/4); g.lineTo(w,h*k/4); g.stroke(); }
  const grad=g.createLinearGradient(0,0,0,h); grad.addColorStop(0,'rgba(208,255,0,.28)'); grad.addColorStop(1,'rgba(208,255,0,0)');
  g.beginPath(); pts.forEach((v,k)=>k?g.lineTo(X(k),Y(v)):g.moveTo(X(k),Y(v))); g.lineTo(X(N),h); g.lineTo(X(0),h); g.closePath(); g.fillStyle=grad; g.fill();
  g.strokeStyle='#D0FF00'; g.lineWidth=2; g.beginPath(); pts.forEach((v,k)=>k?g.lineTo(X(k),Y(v)):g.moveTo(X(k),Y(v))); g.stroke();
  g.setLineDash([5,4]); g.strokeStyle='#2EDEDB'; g.beginPath(); fl.forEach((v,k)=>k?g.lineTo(X(k),Y(v)):g.moveTo(X(k),Y(v))); g.stroke(); g.setLineDash([]);
  for(const tr of pl.trades){ if(tr.t<t0) continue; const k=(tr.t-t0)/H72*N; g.fillStyle='#FFD166'; g.beginPath(); g.arc(X(k),Y(tr.p*P.step),3.5,0,7); g.fill(); }
  g.fillStyle='#84888C'; g.font='10px ui-monospace,monospace'; g.fillText('-72h',8,h-2); g.fillText('现在',w-30,h-2);
  g.fillStyle='#D0FF00'; g.fillText(pxFmt(pts[N]),w-70,Math.max(12,Y(pts[N])-6));
}
/* 燃烧流 + 余烬 */
function addFeed(who, amount, sec){
  const li=document.createElement('li'); li.className=(who===ME?'me ':'')+(sec>=P.certain?'late':'');
  li.dataset.sec=sec; li.dataset.minute=S.minute;
  li.innerHTML=`<span class="sec">${String(Math.floor(sec)).padStart(2,'0')}s</span><span class="mono">${who===ME?'你':who}</span><span class="amt">🔥 ${fmtTok(amount)}</span><span class="tag">${sec>=P.certain?'窗口 · 待揭晓':'确定计入'}</span>`;
  const f=$('#feed'); f.prepend(li); while(f.children.length>14) f.lastChild.remove();
}
function markLate(cutoff){
  $$('#feed li').forEach(li=>{ if(+li.dataset.minute!==S.minute || li.dataset.sec<P.certain) return;
    const tag=li.querySelector('.tag'); if(+li.dataset.sec>=cutoff){ li.classList.add('rolled'); tag.textContent='截止后 · 滚入下一分钟'; } else tag.textContent='截止前 · 计入'; });
}
const embers=[]; let ectx;
function spawnEmbers(sec,n){ for(let i=0;i<n;i++) embers.push({x:sec/60+rnd(-.004,.004), y:1, vx:rnd(-.02,.02), vy:rnd(.25,.9), life:1, hue: sec>=P.certain? 40: 75+rnd(-10,10)}); }
function drawEmbers(dt){
  const c=$('#embers'); if(!ectx){ ectx=c.getContext('2d'); }
  const w=c.clientWidth,h=c.clientHeight, dpr=window.devicePixelRatio||1; if(c.width!==w*dpr){ c.width=w*dpr; c.height=h*dpr; }
  ectx.setTransform(dpr,0,0,dpr,0,0); ectx.clearRect(0,0,w,h); ectx.globalCompositeOperation='lighter';
  for(let i=embers.length-1;i>=0;i--){ const e=embers[i]; e.life-=dt*1.1; e.y-=e.vy*dt; e.x+=e.vx*dt; if(e.life<=0){embers.splice(i,1);continue;}
    const r=1+2.5*e.life; ectx.fillStyle=`hsla(${e.hue},100%,${55+20*e.life}%,${e.life})`; ectx.beginPath(); ectx.arc(e.x*w, e.y*h, r, 0, 7); ectx.fill(); }
  ectx.globalCompositeOperation='source-over';
}
function revealAnim(cutoff){
  const box=$('#reveal'), reel=$('#reel'); box.classList.remove('done'); box.classList.add('spin'); reel.classList.add('spin');
  $('#revealSub').textContent='等待揭晓区块（结束后 +3 块）…'; $('#tlCut').classList.remove('show');
  let n=0; const iv=setInterval(()=>{ reel.firstElementChild.textContent=45+Math.floor(Math.random()*16); if(++n>14){ clearInterval(iv);
    reel.classList.remove('spin'); box.classList.remove('spin'); box.classList.add('done'); reel.firstElementChild.textContent=cutoff+'s';
    const cut=$('#tlCut'); cut.style.left=(cutoff/60*100)+'%'; cut.dataset.l=`上一分钟截止 ${cutoff}s`; cut.classList.toggle('left', cutoff>=52); cut.classList.remove('stale'); cut.classList.add('show'); if(S.pendingSub) $('#revealSub').textContent=S.pendingSub; spawnEmbers(cutoff,40); } }, 80);
}
/* 提示 */
function toast(msg, err){ const t=$('#toast'); t.textContent=msg; t.className='toast on'+(err?' err':''); clearTimeout(t._t); t._t=setTimeout(()=>t.className='toast',2600); }

/* ---------------- 用户操作（只改本地模拟） ---------------- */
function act(fn){ try{ const m=fn(); if(m) toast(m); renderAll(); }catch(e){ toast(e.message,true); } }
const A = {
  burn(amount, plotId){ amount=+amount; if(!(amount>=P.minBurnTx)) throw new Error('单笔至少 1 万枚'); if(amount>S.my.tok) throw new Error('EDEN 余额不足');
    S.my.tok-=amount; doBurn(ME, amount, secOf(S.t), +plotId||0); return `已模拟：授权 → burn(${fmtInt(amount)}) · 在第 ${secOf(S.t)} 秒`; },
  claimNext(){ if(S.my.claim<=0 && !S.my.plotsPending) throw new Error('暂无可领'); const b=S.my.claim; S.my.bnb+=b; S.my.claim=0;
    const n=S.my.plotsPending; for(let i=0;i<n;i++){ const pl=S.plots.find(p=>p.owner!==ME && Math.random()<.02); if(pl) pl.owner=ME; } S.my.plotsPending=0;
    return `已领取 ${fmt(b,5)} BNB`+(n?` 和 ${n} 块地`:''); },
  withdrawCredit(){ if(S.my.credit<=0) throw new Error('没有待领的卖地款'); const c=S.my.credit; S.my.bnb+=c; S.my.credit=0; return `已领取卖地款 ${fmt(c,5)} BNB`; },
  sellToRound(amount, minOut){ amount=+amount; if(sellQuote(amount).take>S.my.tok) throw new Error('EDEN 余额不足'); const r=sell(ME, amount, +minOut||0); return `卖入 ${fmtInt(r.take)} 枚，收到 ${fmt(r.out,6)} BNB，已销毁`; },
  buyPlot(id, maxPrice){ const pl=S.plots[(+id||1)-1]; if(!pl) throw new Error('预览只模拟前 220 块'); const p=buyPlot(pl, ME, maxPrice===''||maxPrice==null? null : +maxPrice); return `买下地块 #${pl.id}，付 ${pxFmt(p)} BNB；新价 ${pxFmt(p*P.step)}`; },
  claimPlot(id){ const pl=S.plots[(+id||1)-1]; if(!pl||pl.owner!==ME) throw new Error('只能领自己地块的分成'); const d=S.plotEma*rnd(2,8); S.my.bnb+=d; S.plotPool=Math.max(0,S.plotPool-d); return `地块 #${pl.id} 领到 ${fmt(d,6)} BNB`; },
  transferPlot(id,to){ const pl=S.plots[(+id||1)-1]; if(!pl||pl.owner!==ME) throw new Error('不是你的地块'); pl.owner=to||addr(); return `地块 #${pl.id} 已转给 ${pl.owner}`; },
  settle(){ return '已推进结算（模拟中每秒自动推进）'; },
  sync(){ return '已对账：新到账 BNB 按 45/30/25 分入三池'; },
};
$$('.tab').forEach(b=>b.onclick=()=>{ $$('.tab').forEach(x=>x.classList.toggle('on',x===b)); $$('.tabpane').forEach(p=>p.classList.toggle('on',p.dataset.pane===b.dataset.tab)); });
$('[data-fill="burnAmt"]').onclick=()=>{ $('#burnAmt').value=S.my.tok; renderQuotes(); };
$('#burnBtn').onclick=()=>act(()=>A.burn($('#burnAmt').value,$('#burnPlot').value));
$('#claimBtn').onclick=()=>act(A.claimNext); $('#withdrawBtn').onclick=()=>act(A.withdrawCredit);
$('#sellBtn').onclick=()=>act(()=>A.sellToRound($('#sellAmt').value,$('#sellMin').value));
$('#buyBtn').onclick=()=>act(()=>A.buyPlot(S.sel+1, $('#maxPrice').value));
$('#ff24').onclick=()=>act(()=>{ for(let i=0;i<24;i++){ S.t+=3600-1; S.minute+=60; S.cur.carry=0; S.lastHourAt=S.t; endHour(); income(rnd(2,4)); stepSecond(); } return '已快进 24 小时：地块价按每日 5% 回落、地板随 EMA 更新、轮次超时换轮'; });
['burnAmt','sellAmt'].forEach(id=>$('#'+id).addEventListener('input',renderQuotes));
$$('#speed button').forEach(b=>b.onclick=()=>{ S.speed=+b.dataset.s; $$('#speed button').forEach(x=>x.classList.toggle('on',x===b)); });

/* ---------------- 按 Flap 规则渲染 vaultUISchema ---------------- */
const SCH = window.EDEN_SCHEMA.vaultUISchema;
$('#schemaType').textContent=SCH.vaultType; $('#vaultType').textContent=SCH.vaultType; $('#schemaDesc').textContent=SCH.description;
function liveDescription(){
  const r=S.round;
  return `EDEN 分钟燃烧金库（Flap 税币金库）。税 3%/3% 全部进金库，分账：分钟奖池 45% / 地块池 30% / 地板储备 25%。工厂和项目方 0 抽成，没有任何收款地址。`+
   `分钟奖池 ${fmt(S.minutePool,6)} BNB；地块池 ${fmt(S.plotPool,6)} BNB；地板储备（下一轮用）${fmt(S.floorReserve,6)} BNB。当前第 ${S.minute} 分钟。`+
   (r? `轮次回购：第 ${r.id} 轮，价格 ${r.price.toExponential(3)} BNB/枚（开轮锁定），剩余额度 ${fmtInt(P.quota-r.filled)} 枚，剩余池子 ${fmt(r.pool-r.paid,6)} BNB。` : '轮次回购：当前没有开放的轮次。')+
   `轮次回购是「限量回购」，不是兑付承诺，没有硬地板；收进来的币 100% 销毁。地块地板价 ${pxFmt(floorNow())} BNB，成交后涨 10%，没人买每天回落 5%，成交款 98% 给卖家、2% 进分钟奖池。地块 ${S.plotsMinted} / 3300；累计销毁 ${fmtInt(S.burnedTotal)} 枚。本金库是 beacon 代理，升级权只在 Flap Guardian。`;
}
function viewValues(name, args){
  const r=S.round, pl=args&&S.plots[(+args[0]||1)-1];
  switch(name){
    case 'poolInfo': return [S.minutePool,S.plotPool,S.floorReserve,r?r.pool-r.paid:0,S.my.claim+0.84,0.37,S.my.credit+0.12];
    case 'minuteInfo': return [S.minute, {time: 60-secOf(S.t)}, S.minutePool*P.minuteRelease, S.cur.pre, P.plotsMax-S.plotsMinted];
    case 'roundInfo': return r? [r.id, r.price, P.quota-r.filled, r.pool-r.paid, {time:P.roundDur-(S.t-r.openAt)}, true] : [S.roundId,0,0,0,{time:0},false];
    case 'userInfo': return [S.my.claim, S.my.plotsPending, S.plots.filter(p=>p.owner===ME).length, S.my.minuteBurn?1:0, S.my.credit];
    case 'plotMarket': if(!pl) return null; return [pl.owner, plotPrice(pl), floorNow(), pl.trades.length? pl.trades.at(-1).p*P.step:0, pl.trades.length? {ago:S.t-pl.trades.at(-1).t}:{ago:null}];
  }
}
function fmtOut(o,v){
  if(v==null) return '—';
  if(o.fieldType==='time') return v.ago!==undefined? (v.ago==null?'—':agoText(v.ago)) : `倒计时 ${hms(v.time)}`;
  if(o.fieldType==='bool') return v? '是':'否';
  if(o.fieldType==='address') return v;
  if(o.decimals===18) return (v!==0 && Math.abs(v)<1e-3)? v.toExponential(3) : fmt(v, v>=1e5? 0:6);
  return fmtInt(v);
}
const viewEls=[];
function renderSchema(){
  const box=$('#methods');
  SCH.methods.forEach(m=>{
    const el=document.createElement('div'); el.className='m'+(m.isWriteMethod?' w':'');
    el.innerHTML=`<div class="m-h"><span class="m-name">${m.name}(${m.inputs.filter(i=>i.fieldType!=='msg.value').map(i=>i.name).join(', ')})</span><span class="pill tag-w ${m.isWriteMethod?'lime':'cyan'}">${m.isWriteMethod?'写入':'只读'}</span></div><div class="m-desc">${m.description}</div>`;
    const inputs=m.inputs.map(i=>{ const l=document.createElement('label'); l.className='field';
      const lab = i.fieldType==='msg.value'? `${i.description||i.name}（随交易发送 BNB，msg.value，不参与 ABI 编码）` : `${i.description||i.name} · ${i.fieldType}`;
      l.innerHTML=`<span>${lab}</span><input data-n="${i.name}" placeholder="${i.name}">`; return l; });
    if(inputs.length){ const f=document.createElement('div'); f.className='fields'; inputs.forEach(x=>f.appendChild(x)); el.appendChild(f); }
    if(!m.isWriteMethod){
      const tbl=document.createElement('table'); m.outputs.forEach(o=>{ const tr=document.createElement('tr'); tr.innerHTML=`<td>${o.description||o.name}</td><td data-o="${o.name}">—</td>`; tbl.appendChild(tr); });
      if(m.inputs.length){ const b=document.createElement('button'); b.className='btn'; b.textContent='查询'; const ent={m,tbl,args:null};
        b.onclick=()=>{ ent.args=m.inputs.map(i=>el.querySelector(`[data-n="${i.name}"]`).value); if(m.name==='userInfo'&&!ent.args[0]) ent.args[0]=ME; fillView(ent); };
        el.appendChild(b); viewEls.push(ent); if(m.name==='userInfo'){ el.querySelector('input').value=ME; ent.args=[ME]; } if(m.name==='plotMarket'){ el.querySelector('input').value='7'; ent.args=['7']; } }
      else viewEls.push({m,tbl,args:[]});
      el.appendChild(tbl);
    } else {
      if(m.approvals.length) m.approvals.forEach(a=>{ const n=document.createElement('div'); n.className='appr'; n.textContent=`① 先授权 ${a.tokenType}（数量取「${a.amountFieldName}」字段）→ ② 再执行`; el.appendChild(n); });
      const b=document.createElement('button'); b.className='btn primary'; b.textContent='执行（模拟）';
      b.onclick=()=>{ const v=m.inputs.map(i=>el.querySelector(`[data-n="${i.name}"]`).value);
        act(()=>{ switch(m.name){
          case 'burn': return A.burn(v[0], v[1]); case 'claimNext': return A.claimNext(); case 'sellToRound': return A.sellToRound(v[0], v[1]);
          case 'buyPlot': { const pl=S.plots[(+v[0]||1)-1]; if(v[2]!=='' && pl && +v[2]<plotPrice(pl)) throw new Error('InsufficientValue：msg.value 低于当前价'); return A.buyPlot(v[0], v[1]); }
          case 'claimPlot': return A.claimPlot(v[0]); case 'withdrawCredit': return A.withdrawCredit(); case 'transferPlot': return A.transferPlot(v[0], v[1]);
          case 'settle': return A.settle(); case 'sync': return A.sync(); } }); };
      el.appendChild(b);
    }
    box.appendChild(el);
  });
}
function fillView(ent){ const vals=viewValues(ent.m.name, ent.args); ent.m.outputs.forEach((o,k)=>{ const td=ent.tbl.querySelector(`[data-o="${o.name}"]`); td.textContent= vals? fmtOut(o, vals[k]) : '—'; }); }
let lastBanner=0;
function renderSchemaValues(){
  viewEls.forEach(e=>{ if(e.args) fillView(e); });
  if(S.t-lastBanner>=5 || !lastBanner){ lastBanner=S.t||1; const b=$('#descBanner'); b.textContent=liveDescription(); b.classList.remove('tick'); void b.offsetWidth; b.classList.add('tick'); }
}

renderSchema(); renderHist(); renderAll(); drawCurve(); window.addEventListener('resize', drawCurve);
// 预热：先放几笔燃烧，让首屏有内容
for(let i=0;i<9;i++){ S.t++; doBurn(addr(), Math.round(rnd(2e4,9e5)/1e3)*1e3, secOf(S.t), 0); }
S.t+=24; renderAll();
requestAnimationFrame(loop);
window.__EDEN_SIM__=S;
})();
