/* EDEN · flap.sh 通用金库页预览
   渲染规则逐条对照 flap.sh 前端（2026-11-11 抓取的生产包，dpl_G12CD6jy5o5PGuDBwxhjgWUTGUh9）：
   - Vault Data 只放「无输入的 view」，按 schema 顺序，单列；每 10 秒重读；time 字段每秒刷新相对时间
   - write 全部放进折叠的 Advanced actions；未验证金库展开后先倒数 5 秒；两列网格
   - 文案按「English / 中文」规则取一侧（复刻 flap.sh 的拆分函数）
   全部数据为本地模拟，不连钱包、不发交易。 */
(function(){
'use strict';
const SCH=(window.EDEN_SCHEMA||{}).vaultUISchema;
const $=(s,r=document)=>r.querySelector(s);
const h=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- flap.sh 的双语拆分（逐字复刻 module 58686） ---------- */
const CJK=/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/,LAT=/[A-Za-z]/,WORD=/[A-Za-z][A-Za-z0-9]*/g,SEP=/\s+\/\s+/g;
function wordsIn(e,t){const n=new Set((t.match(WORD)||[]).map(x=>x.toLowerCase()));return (e.match(WORD)||[]).every(x=>n.has(x.toLowerCase()));}
function pick(e,lang){
  if(!e) return e==null?'':e;
  const pairs=[];let m;SEP.lastIndex=0;
  while((m=SEP.exec(e))!==null){const L=e.slice(0,m.index).trim(),R=e.slice(m.index+m[0].length).trim();if(L&&R)pairs.push({left:L,right:R});}
  let p=null;
  if(pairs.length){
    const a=pairs.filter(x=>LAT.test(x.left)&&!CJK.test(x.left)&&CJK.test(x.right)&&wordsIn(x.right,x.left));
    if(a.length)p=a[a.length-1];
    else{const b=pairs.filter(x=>CJK.test(x.left)&&LAT.test(x.right)&&!CJK.test(x.right)&&wordsIn(x.left,x.right));
      if(b.length)p=b[0];
      else if(pairs.length===1){const n=s=>s.replace(/\s+/g,' ').toLowerCase();if(n(pairs[0].left)===n(pairs[0].right))p=pairs[0];}}
  }
  if(!p) return e;
  const leftZh=CJK.test(p.left);const en=leftZh?p.right:p.left,zh=leftZh?p.left:p.right;
  return lang==='zh'?zh:en;
}

/* ---------- flap.sh 界面文案（取自其 i18n 包原文；中文包为其繁体原文） ---------- */
const T={
 en:{tokens:'Tokens',taxInfo:'Tax Info',vaultInformation:'Vault Information',factoryCreator:'Vault Developer',factoryCreatorMissing:'Not available',viewVaultDetail:'View Vault Detail',
   vaultNoticeDescription:'All tax collected from this token has been sent to a vault. The vault manages fee distribution according to its configuration.',
   unverified:'Unverified',vaultAddress:'Vault Address',
   unverifiedWarning:"This vault is not verified. All the UIs below are automatically generated from the vault's on-chain schema and have not been audited. The information displayed may not be accurate — please do your own research and trade this token with caution.",
   liveDataTitle:'Vault Data',liveDataDescription:'Read-only values are loaded from the vault schema and refreshed automatically.',
   readBadge:'Read',actionBadge:'Action',methodLoading:'Loading...',dangerousZone:'Advanced actions',advancedActionsReveal:'Review the warning before showing transaction actions.',
   dangerousZoneWarning:'The write methods below will ask you to send transactions. These UIs are automatically generated and have not been audited. Do your own research before acting.',
   countdownMessage:'Showing write methods in',noInputsRequired:'No inputs required.',executeButton:'Execute',executing:'Executing...',
   approveToken:'Approve {token}',approvingToken:'Approving {token}...',approvalSuccessful:'{token} approved',taxTokenLabel:'Tax Token',
   transactionSuccessful:'Transaction successful',transactionConfirmed:'Transaction confirmed',executionFailed:'Execution failed',connect:'Connect Wallet'},
 zh:{tokens:'代幣',taxInfo:'稅收詳情',vaultInformation:'稅收金庫信息',factoryCreator:'金庫开发者',factoryCreatorMissing:'暂无信息',viewVaultDetail:'查看工厂',
   vaultNoticeDescription:'從該代幣收取的所有稅費已發送到稅收金庫。稅收金庫根據其配置管理費用分配。',
   unverified:'未驗證',vaultAddress:'稅收金庫地址',
   unverifiedWarning:'此稅收金庫尚未驗證。以下所有介面均從稅收金庫的鏈上架構自動生成，且未經審計。顯示的資訊可能不準確 — 請自行研究並謹慎交易此代幣。',
   liveDataTitle:'稅收金庫數據',liveDataDescription:'只讀數據會根據稅收金庫 schema 自動載入並定時刷新。',
   readBadge:'讀取',actionBadge:'操作',methodLoading:'正在載入...',dangerousZone:'進階操作',advancedActionsReveal:'顯示交易操作前，請先閱讀風險提示。',
   dangerousZoneWarning:'以下寫入方法會要求您發送交易。這些介面是自動生成的，尚未經過審計。操作前請自行研究。',
   countdownMessage:'將在以下時間後顯示寫入方法',noInputsRequired:'無需填寫參數。',executeButton:'執行',executing:'執行中...',
   approveToken:'批准 {token}',approvingToken:'正在批准 {token}...',approvalSuccessful:'{token} 已批准',taxTokenLabel:'稅費代幣',
   transactionSuccessful:'交易成功',transactionConfirmed:'交易已確認',executionFailed:'執行失敗',connect:'Connect Wallet'}
};
let LANG='zh';const t=k=>T[LANG][k]||T.en[k]||k;

/* ---------- 模拟链上状态（全部 BigInt wei） ---------- */
const E18=10n**18n,W=x=>BigInt(Math.round(x*1e6))*10n**12n;
const now=()=>Math.floor(Date.now()/1000);
const START=Math.floor(Date.now()/60000)*60-1286*60; // 已运行约 21 小时
const S={minutePool:W(38.4218),plotPool:W(21.5803),floorReserve:W(4.1906),minuteUnclaimed:W(2.3517),plotUnclaimed:W(1.0442),sellerCredits:W(0.3125),
  burnedThisMinute:W(412000),plotsLeft:1873n,lastMinute:-1,
  round:{id:7n,pool:W(3.6),quota:15000000n*E18,filled:6420000n*E18,endsAt:now()+11*3600+1260},
  me:{pendingBnb:W(0.084213),pendingPlots:2n,plotCount:5n,openRecords:7n,credit:W(0.0461),allowance:0n,plots:[12n,845n,1290n,2001n,3017n]},
  plotPrice:id=>W(0.001)+W((Number(id)%97)*0.00037)};
const curMinute=()=>Math.floor((now()-START)/60);
function step(){
  const m=curMinute();
  if(S.lastMinute>=0&&m!==S.lastMinute){const pay=S.minutePool*2n/100n;S.minutePool-=pay;S.minuteUnclaimed+=pay;S.burnedThisMinute=0n;if(Math.random()<.5&&S.plotsLeft>0n)S.plotsLeft-=1n;}
  S.lastMinute=m;
  const tax=W(0.0021*(0.6+Math.random()));          // 每秒税收入账（模拟）
  S.minutePool+=tax*45n/100n;S.plotPool+=tax*30n/100n;S.floorReserve+=tax*25n/100n;
  if(Math.random()<.35)S.burnedThisMinute+=W(10000+Math.random()*90000);
}
step();setInterval(step,1000);
let WALLET=false;
const roundPrice=()=>S.round.pool*E18/S.round.quota;
const READ={
  minuteInfo:()=>{const m=curMinute(),p=roundPrice();let cap=S.minutePool*2n/100n;if(cap>2n*E18)cap=2n*E18;const byBurn=S.burnedThisMinute*p*2n/E18;return [BigInt(m),BigInt(START+(m+1)*60),byBurn<cap?byBurn:cap,S.burnedThisMinute,S.plotsLeft,p>0n?(cap*E18+p*2n-1n)/(p*2n):0n];},
  myInfo:()=>WALLET?[S.me.pendingBnb,S.me.pendingPlots,S.me.plotCount,S.me.openRecords,S.me.credit]:[0n,0n,0n,0n,0n], // 未连钱包时 msg.sender = 0
  roundInfo:()=>{const p=roundPrice(),q=S.round.quota-S.round.filled;return [S.round.id,p,q,q*p/E18,BigInt(S.round.endsAt),q>0n&&now()<S.round.endsAt];},
  poolInfo:()=>{const q=S.round.quota-S.round.filled;return [S.minutePool,S.plotPool,S.floorReserve,q*roundPrice()/E18,S.minuteUnclaimed,S.plotUnclaimed,S.sellerCredits];}
};

/* ---------- 格式化（flap.sh 的 formatUnits 全精度 + time 相对时间，英文硬编码） ---------- */
function formatUnits(v,d){const neg=v<0n;if(neg)v=-v;let s=v.toString().padStart(d+1,'0');const i=s.slice(0,s.length-d),f=s.slice(s.length-d).replace(/0+$/,'');return (neg?'-':'')+i+(f?'.'+f:'');}
function rel(ts){const d=ts-now(),n=Math.abs(d),w=d>=0?'later':'ago';if(n<60)return n+' seconds '+w;if(n<3600)return Math.floor(n/60)+' min '+w;if(n<86400)return Math.floor(n/3600)+' hours '+w;return Math.floor(n/86400)+' days '+w;}
function fmt(v,f){
  if(v==null)return '—';
  if(typeof v==='bigint'){if(f.fieldType==='time'){const n=Number(v);if(n===0)return '—';return new Date(n*1000).toLocaleString()+' ('+rel(n)+')';}
    return f.decimals>0?formatUnits(v,f.decimals):v.toString();}
  if(typeof v==='boolean')return v?'Yes':'No';
  return String(v);
}

/* ---------- 图标 ---------- */
const IC={
 info:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>',
 warn:'<svg viewBox="0 0 24 24"><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/></svg>',
 copy:'<svg viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12"/><path d="M16 8V4H4v12h4"/></svg>',
 ext:'<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/></svg>',
 shield:'<svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M12 8v5M12 16h.01"/></svg>',
 chev:'<svg class="chev" viewBox="0 0 24 24"><path d="M6 15l6-6 6 6"/></svg>',
 ok:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>'
};

/* ---------- toast ---------- */
function toast(msg,kind,sub){const e=h('div','toast '+(kind||''),'<span class="d"></span><div>'+esc(msg)+(sub?'<em>'+esc(sub)+'</em>':'')+'</div>');$('#toasts').appendChild(e);setTimeout(()=>e.remove(),4200);}

/* ---------- 渲染 ---------- */
const VAULT_ADDR='0xEDE0000000000000000000000000000000000000';
let advOpen=false,advCountdown=null,advShown=false,cdTimer=null;
const readCards=[];
const formState={};

function render(){
  document.documentElement.lang=LANG==='zh'?'zh-CN':'en';
  $('#langTxt').textContent=LANG==='zh'?'中文':'EN';
  document.querySelectorAll('[data-i]').forEach(el=>{el.textContent=t(el.dataset.i);});
  const root=$('#vaultRoot');root.innerHTML='';readCards.length=0;
  if(!SCH){root.textContent='schema.js 未加载';return;}
  const methods=SCH.methods||[];
  const views=methods.filter(m=>!m.isWriteMethod&&m.inputs.length===0);
  const writes=methods.filter(m=>m.isWriteMethod);

  // 金库卡片
  const c=h('section','card vcard');
  c.innerHTML=`<div class="vh"><span class="vtype">${esc(pick(SCH.vaultType.trim(),LANG)||'Custom Vault')}</span><span class="risk-b">${IC.info}${esc(t('unverified'))}</span></div>
   <p class="vdesc">${esc(pick(SCH.description.trim(),LANG))}</p>
   <div class="vaddr"><p>${esc(t('vaultAddress'))}</p><div class="row"><span class="a" title="预览占位地址：金库尚未部署">${VAULT_ADDR}</span>${IC.copy}${IC.ext}</div></div>
   <div class="warnbox">${IC.warn}<span>${esc(t('unverifiedWarning'))}</span></div>`;
  root.appendChild(c);

  // Vault Data
  if(views.length){
    const s=h('section','sec');
    s.innerHTML=`<div class="sec-h"><h4>${esc(t('liveDataTitle'))}</h4><p>${esc(t('liveDataDescription'))}</p></div>`;
    const g=h('div','grid');
    views.forEach(m=>{const card=h('div','card r');card.innerHTML=`<div class="m-top"><h4 class="m-name" title="${esc(m.name)}">${esc(m.name)}</h4><span class="badge">${esc(t('readBadge'))}</span></div>`+
      (m.description?`<p class="m-desc">${esc(pick(m.description,LANG))}</p>`:'')+`<div class="loading"><span class="spin"></span>${esc(t('methodLoading'))}</div>`;
      g.appendChild(card);readCards.push({m,card,data:null});});
    s.appendChild(g);root.appendChild(s);
    setTimeout(()=>readCards.forEach(doRead),650);
  }

  // Advanced actions
  if(writes.length){
    const a=h('section','card adv'+(advOpen?' open':''));
    a.innerHTML=`<button type="button" class="adv-btn"><div class="adv-l"><span class="adv-ic"><i></i><i></i><i></i><i></i>${IC.shield}</span><div><p class="adv-t">${esc(t('dangerousZone'))}</p><p class="adv-s">${esc(t('advancedActionsReveal'))}</p></div></div>${IC.chev}</button><div class="adv-body"></div>`;
    $('.adv-btn',a).onclick=toggleAdv;
    root.appendChild(a);
    renderAdvBody(a,writes);
  }
}

function doRead(rc){
  const f=READ[rc.m.name];rc.data=f?f():null;paintRead(rc);
}
function paintRead(rc){
  const {m,card}=rc;let box=card.querySelector('.kv,.loading');if(box)box.remove();
  const kv=h('div','kv');const v=rc.data;
  if(v==null){kv.innerHTML='<div class="r"><span class="k">—</span></div>';}
  const outs=m.outputs;
  const vals=outs.length===1?[v]:v;
  outs.forEach((o,i)=>{const r=h('div','r');r.innerHTML=`<span class="k" title="${esc(o.name)}">${esc(pick(o.description,LANG)||o.name||('Output '+(i+1)))}</span><span class="v">${esc(fmt(vals[i],o))}</span>`;kv.appendChild(r);});
  card.appendChild(kv);
}
setInterval(()=>readCards.forEach(doRead),10000);                                     // flap.sh：每 10 秒重读
setInterval(()=>readCards.forEach(rc=>{if(rc.data&&rc.m.outputs.some(o=>o.fieldType==='time'))paintRead(rc);}),1000); // time 字段每秒刷新

function toggleAdv(){
  advOpen=!advOpen;
  if(advOpen){advShown=false;advCountdown=5;clearInterval(cdTimer);cdTimer=setInterval(()=>{advCountdown--;if(advCountdown<=0){clearInterval(cdTimer);advShown=true;}renderAdvBody();},1000);}
  else{clearInterval(cdTimer);advShown=false;advCountdown=null;}
  const a=$('.adv');a.classList.toggle('open',advOpen);renderAdvBody();
}
function renderAdvBody(a,writes){
  a=a||$('.adv');writes=writes||SCH.methods.filter(m=>m.isWriteMethod);
  const b=$('.adv-body',a);b.innerHTML='';if(!advOpen)return;
  b.appendChild(h('div','adv-warn',esc(t('dangerousZoneWarning'))));
  if(!advShown){b.appendChild(h('div','adv-cd',`${esc(t('countdownMessage'))} <b>${advCountdown}s</b>`));return;}
  const g=h('div','grid two');writes.forEach(m=>g.appendChild(writeCard(m)));b.appendChild(g);
}

function placeholderOf(f,label,desc){
  if(f.fieldType.startsWith('uint')&&f.decimals>0)return `${desc||label} (with ${f.decimals} decimals)`;
  if(f.fieldType==='address')return '0x...';
  return desc!=null&&desc!==''?desc:'Enter '+label;
}
function writeCard(m){
  const st=formState[m.name]||(formState[m.name]={vals:{},err:null,ok:null,busy:false,approving:false});
  const card=h('div','card w');
  let html=`<div class="m-top"><h4 class="m-name" title="${esc(m.name)}">${esc(m.name)}</h4><span class="badge">${esc(t('actionBadge'))}</span></div>`;
  if(m.description)html+=`<p class="m-desc">${esc(pick(m.description,LANG))}</p>`;
  card.innerHTML=html;
  if(m.inputs.length){
    const fs=h('div','fields');
    m.inputs.forEach(f=>{const desc=pick(f.description,LANG);const d=h('div','fld');
      const type=(f.fieldType.startsWith('uint')&&!(f.decimals>0))?'number':'text';
      d.innerHTML=`<label>${esc(f.name)}${desc?`<span>${esc(desc)}</span>`:''}</label><input type="${type}" autocomplete="off" spellcheck="false" placeholder="${esc(placeholderOf(f,f.name,desc))}">`;
      const inp=$('input',d);inp.value=st.vals[f.name]||'';
      inp.oninput=()=>{st.vals[f.name]=inp.value;st.err=null;const bad=invalid(f,inp.value);inp.setAttribute('aria-invalid',bad?'true':'false');
        let er=$('.err',d);if(bad&&!er){er=h('span','err');d.appendChild(er);}if(er){if(bad)er.textContent='Invalid '+f.fieldType+' format';else er.remove();}
        clearTimeout(st.apT);st.apT=setTimeout(()=>{refreshBtn(card,m,st);},600);};
      fs.appendChild(d);});
    card.appendChild(fs);
  }else{
    card.appendChild(h('div','noin',`<p>${esc(m.name)}</p><div>${esc(t('noInputsRequired'))}</div>`));
  }
  const btn=h('button','exec');btn.type='button';card.appendChild(btn);
  if(st.err)card.appendChild(h('div','txerr',esc(st.err)));
  if(st.ok)card.appendChild(h('div','txok',`${IC.ok}<span>${esc(t('transactionConfirmed'))}: <span style="font-family:var(--mono)">${st.ok.slice(0,10)}...${st.ok.slice(-8)}</span></span>`));
  refreshBtn(card,m,st);
  btn.onclick=()=>onExec(card,m,st);
  return card;
}
function invalid(f,v){if(v==null||v==='')return false;
  if(f.fieldType==='address')return !/^0x[0-9a-fA-F]{40}$/.test(v.trim());
  if(f.fieldType.startsWith('uint')||f.fieldType==='msg.value'){return f.decimals>0?!/^\d*\.?\d*$/.test(v.trim()):!/^\d+$/.test(v.trim());}
  return false;}
function needsApproval(m,st){
  if(!WALLET||!m.approvals.length)return false;
  const ap=m.approvals[0];if(ap.tokenType!=='taxToken')return false;
  const f=m.inputs.find(x=>x.name===ap.amountFieldName);if(!f)return false;
  let amt;try{amt=parseUnits(st.vals[f.name]||'',f.decimals);}catch(e){return false;}
  return amt>0n&&S.me.allowance<amt;
}
function refreshBtn(card,m,st){
  const btn=$('.exec',card);if(!btn)return;
  if(st.approving){btn.disabled=true;btn.innerHTML=`<span class="spin"></span>${esc(t('approvingToken').replace('{token}',t('taxTokenLabel')))}`;return;}
  if(st.busy){btn.disabled=true;btn.innerHTML=`<span class="spin"></span>${esc(t('executing'))}`;return;}
  btn.disabled=false;
  btn.textContent=needsApproval(m,st)?t('approveToken').replace('{token}',t('taxTokenLabel')):t('executeButton');
}
function parseUnits(s,d){s=String(s).trim();if(!/^\d*\.?\d*$/.test(s)||s===''||s==='.')throw new Error('bad');const [i,f='']=s.split('.');if(f.length>d)throw new Error('too many decimals');return BigInt(i||'0')*10n**BigInt(d)+BigInt((f+'0'.repeat(d)).slice(0,d)||'0');}

/* flap.sh 的参数编码校验（module 53467 eo()）*/
function encodeArgs(m,st){
  const bad=m.inputs.findIndex((f,i)=>f.fieldType==='msg.value'&&i!==0);
  if(bad!==-1)throw new Error('Invalid schema: "msg.value" field type is only valid at index 0, found at index '+bad+'.');
  let value;
  if(m.inputs[0]&&m.inputs[0].fieldType==='msg.value'){const f=m.inputs[0];const v=(st.vals[f.name]||'').trim();if(v==='')throw new Error('Field "'+f.name+'" is required.');value=f.decimals>0?parseUnits(v,f.decimals):BigInt(v);}
  const args=(value!==undefined?m.inputs.slice(1):m.inputs).map(f=>{const n=(st.vals[f.name]||'').trim();
    if(f.fieldType==='bool')return !!st.vals[f.name];
    if((f.decimals>0||/^uint|^time$/.test(f.fieldType))&&n==='')throw new Error('Field "'+f.name+'" is required and must be a valid number.');
    if(f.decimals>0)return parseUnits(n,f.decimals);
    if(/^uint|^time$/.test(f.fieldType)){if(!/^\d+$/.test(n))throw new Error('Field "'+f.name+'" must be a valid integer.');return BigInt(n);}
    if(f.fieldType==='address'&&!/^0x[0-9a-fA-F]{40}$/.test(n))throw new Error('Invalid address "'+n+'".');
    return n;});
  return {args,value};
}
const revert=(fn,why)=>`The contract function "${fn}" reverted with the following reason:\n${why}（模拟）`;

/* 模拟 simulateContract：按 EDEN 合约的真实规则/错误名判断 */
function simulate(m,a,v){
  const r=S.round;
  switch(m.name){
    case 'burn': if(a[0]<10000n*E18)return revert('burn','BelowMinBurn()'); if(a[1]>3300n)return revert('burn','BadPlot()'); return null;
    case 'claimNext': if(a[0]===0n||a[0]>50n)return revert('claimNext','RangeTooLarge()'); if(S.me.openRecords===0n)return revert('claimNext','ZeroPayout()'); return null;
    case 'buyPlot':{ if(a[0]===0n||a[0]>3300n)return revert('buyPlot','BadPlot()'); if(S.me.plots.includes(a[0]))return revert('buyPlot','CannotBuyOwnPlot()');
      const p=S.plotPrice(a[0]); if(p>a[1])return revert('buyPlot',`PriceAboveMax(${p}, ${a[1]})`); if(v<p)return revert('buyPlot','InsufficientValue()'); return null;}
    case 'sellToRound':{ const q=r.quota-r.filled; if(q===0n||now()>=r.endsAt)return revert('sellToRound','RoundNotOpen()'); const take=a[0]>q?q:a[0]; const pay=take*roundPrice()/E18;
      if(pay<a[1])return revert('sellToRound',`SlippageBnbOut(${pay}, ${a[1]})`); return null;}
    case 'claimPlot': if(a[0]===0n||a[0]>3300n)return revert('claimPlot','BadPlot()'); return null;
    case 'accruePlot': if(a[0]===0n||a[0]>3300n)return revert('accruePlot','BadPlot()'); if(a[1]===0n||a[1]>100n)return revert('accruePlot','RangeTooLarge()'); return null;
    case 'withdrawCredit': if(S.me.credit===0n)return revert('withdrawCredit','NothingToWithdraw()'); return null;
    case 'transferPlot': if(!S.me.plots.includes(a[0]))return revert('transferPlot','NotPlotOwner()'); if(/^0x0{40}$/i.test(a[1]))return revert('transferPlot','ZeroAddress()'); return null;
    case 'settle': if(a[0]===0n||a[0]>64n)return revert('settle','RangeTooLarge()'); return null;
    default: return null;
  }
}
function applyEffect(m,a,v){
  switch(m.name){
    case 'burn': S.burnedThisMinute+=a[0]; S.me.allowance-=a[0]; S.me.openRecords+=1n; break;
    case 'claimNext': S.minuteUnclaimed-=S.me.pendingBnb<S.minuteUnclaimed?S.me.pendingBnb:0n; S.me.pendingBnb=0n; S.me.plotCount+=S.me.pendingPlots; S.me.pendingPlots=0n; S.me.openRecords=0n; break;
    case 'buyPlot':{ const p=S.plotPrice(a[0]); S.minutePool+=p*2n/100n; S.sellerCredits+=p*98n/100n; S.me.plots.push(a[0]); S.me.plotCount+=1n; break;}
    case 'sellToRound':{ const q=S.round.quota-S.round.filled; const take=a[0]>q?q:a[0]; S.round.filled+=take; S.me.allowance-=take; break;}
    case 'withdrawCredit': S.me.credit=0n; break;
    case 'transferPlot': S.me.plots=S.me.plots.filter(x=>x!==a[0]); S.me.plotCount-=1n; break;
  }
}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const fakeHash=()=>'0x'+Array.from(crypto.getRandomValues(new Uint8Array(32)),b=>b.toString(16).padStart(2,'0')).join('');

async function onExec(card,m,st){
  if(!WALLET){toast('预览提示：先打开顶部「模拟已连接钱包」','', 'flap.sh 上未连钱包时点按钮不会发出交易');return;}
  if(needsApproval(m,st)){
    st.approving=true;refreshBtn(card,m,st);toast(t('approvingToken').replace('{token}',t('taxTokenLabel')),'','模拟 · 不发交易');
    await sleep(1300);S.me.allowance=10n**30n;st.approving=false;toast(t('approvalSuccessful').replace('{token}',t('taxTokenLabel')),'ok','模拟 · 不发交易');
    refreshBtn(card,m,st);return;
  }
  st.err=null;st.ok=null;let enc;
  try{enc=encodeArgs(m,st);}catch(e){st.err=e.message;rerender(card,m);return;}
  const why=simulate(m,enc.args,enc.value);
  if(why){st.err=why;rerender(card,m);return;}
  st.busy=true;refreshBtn(card,m,st);
  await sleep(1500);
  applyEffect(m,enc.args,enc.value);st.busy=false;st.ok=fakeHash();
  toast(t('transactionSuccessful'),'ok','模拟 · 不发交易');
  rerender(card,m);readCards.forEach(doRead);
}
function rerender(card,m){const n=writeCard(m);card.replaceWith(n);}

/* ---------- 预览注释 ---------- */
function notes(){
  const all=SCH.methods,hidden=all.filter(m=>!m.isWriteMethod&&m.inputs.length>0).map(m=>m.name);
  $('#pvNotes').innerHTML=`
  <h5>flap.sh 固定、项目方改不了的</h5><ul>
   <li>页面位置：代币页 → <code>Tax Info</code> → 金库信息；顶部「代币使用稅收金庫系統」提示、风险徽标（未审计显示「未驗證」+ 橙色警告）、金库地址卡。</li>
   <li>只读区「稅收金庫數據」：只显示<b>无输入</b>的 view，单列，每 10 秒自动重读；数字按 <code>decimals</code> 全精度显示，<code>time</code> 显示本地时间 +「N min later」，bool 显示 Yes/No。</li>
   <li>写操作全部收在「進階操作」里，默认折叠；未验证金库展开后要倒数 5 秒才出现表单；两列卡片，每张：方法名（合约函数名原样）+ 说明 + 输入框（标签 = 参数名，灰字/占位 = 说明）+ 一个荧光绿按钮。</li>
   <li>需要授权的方法（<code>approvals</code>）按钮会先变成「批准 稅費代幣」，授权完再变「執行」。</li>
   <li>链上 <code>description()</code> 的实时文案，flap.sh 通用页<b>不显示</b>（只在读不到 schema 时兜底）。</li></ul>
  <h5>来自 EDEN 合约 schema 的</h5><ul>
   <li>金库类型名、总说明、每个方法和字段的说明（「English / 中文」双语，flap.sh 按界面语言取一侧，右上角可切换验证）。</li>
   <li>方法顺序：只读 ${all.filter(m=>!m.isWriteMethod&&!m.inputs.length).map(m=>'<code>'+m.name+'</code>').join(' → ')}；写 ${all.filter(m=>m.isWriteMethod).map(m=>'<code>'+m.name+'</code>').join(' → ')}。</li>
   <li><code>myInfo</code> 用连接钱包地址做查询（未连钱包时全是 0）。</li>
   <li>带输入的查询 ${hidden.map(x=>'<code>'+x+'</code>').join('、')} 在当前 flap.sh 上<b>不显示</b>（留在 schema 里给按规范渲染的前端）。</li></ul>
  <h5>本页是模拟</h5><ul><li>数字是浏览器本地模拟；「执行」只走模拟流程（报错用合约真实错误名），不连钱包、不发交易。金库地址是占位。</li></ul>`;
}

/* ---------- 事件 ---------- */
$('#langBtn').onclick=()=>{LANG=LANG==='zh'?'en':'zh';render();};
$('#connectBtn').onclick=()=>toast('预览模式：不连接钱包','', '需要看「已连接」效果请勾选顶部「模拟已连接钱包」');
$('#pvWallet').onchange=e=>{WALLET=e.target.checked;const b=$('#connectBtn');b.classList.toggle('on',WALLET);$('#connectTxt').textContent=WALLET?'0x7a3F...c91D':'Connect Wallet';
  readCards.forEach(doRead);if(advShown)renderAdvBody();};
const q=new URLSearchParams(location.search);
if(q.get('lang')==='en')LANG='en';
if(q.get('wallet')==='1'){WALLET=true;$('#pvWallet').checked=true;$('#connectBtn').classList.add('on');$('#connectTxt').textContent='0x7a3F...c91D';}
render();notes();
if(q.get('adv')==='1'){advOpen=true;advShown=true;$('.adv').classList.add('open');renderAdvBody();}
window.__FLAP_PREVIEW__={S,pick,render};
})();
