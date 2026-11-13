(function () {
  var P = window.EdenPreview; if (!P) return;
  var $ = function (id) { return document.getElementById(id); };
  var HOST = {
    zh: {
      docTitle: "EDEN · Flap 定制金库 UI 预览（模拟数据）",
      docDesc: "EDEN 轮次燃烧金库按 Flap 官方定制金库 UI 模板实现的组件预览。全部为本地模拟数据，不连钱包、不发交易。",
      previewTag: "预览 · 模拟数据",
      previewTxt: "EDEN 定制金库 UI（Flap 官方模板组件 · three-r3f-v1 3D 能力）嵌在仿 flap.sh 代币页中；数据全部本地模拟，不连钱包、不发交易。USDT 估值用的 BNB 价格为<b>预览模拟价 $612</b>（正式版读链上 Chainlink BNB/USD 喂价，超过 1 小时未更新则只显示 BNB）。",
      simWallet: "模拟钱包",
      wrongNet: "错误网络",
      riskTitle: "宿主下发的 riskLevel",
      risk0: "风险: 未验证(0)",
      risk1: "风险: 1",
      risk2: "风险: 2",
      risk3: "风险: 3",
      risk4: "风险: 4",
      riskNone: "风险: 缺失",
      phaseTitle: "宿主下发的 marketPhase",
      phaseInternal: "内盘",
      phaseDex: "已上 DEX",
      phaseUnknown: "阶段未知",
      dappLink: "← 独立 dapp",
      menuAria: "菜单（预览中无效）",
      flapLogo: "FLAP（仿制字标）",
      langTitle: "切换组件语言（i18n.json en / zh）",
      walletTitle: "预览：模拟连接，不调用任何钱包",
      caTitle: "预览地址（未部署）",
      cuNote: "↑ 这一块是定制组件本体（src/vaults/eden-burn-vault/：Component.tsx + scene/ 3D 引擎）；下方四个标签切换镜头：反应堆 → 三池 → 地块星球（可拖动、点选地块）→ 托底兑换（黑洞）。上面的顶栏、面包屑、代币卡、「VAULT INFORMATION」由 flap.sh 宿主提供。",
      socialX: "X（推特）",
      socialTg: "Telegram",
      langBtn: "中文"
    },
    en: {
      docTitle: "EDEN · Flap custom vault UI preview (simulated data)",
      docDesc: "Preview of the EDEN prize-round burn vault built on the official Flap custom-vault UI template. All figures are simulated locally; no wallet, no transactions.",
      previewTag: "Preview · simulated data",
      previewTxt: "The EDEN custom vault UI (official Flap template component · three-r3f-v1 3D) is embedded in a mock flap.sh token page. All data is simulated locally; no wallet, no transactions. USDT estimates use the <b>preview price $612</b> (production reads the on-chain Chainlink BNB/USD feed and shows BNB only if the feed is older than 1 hour).",
      simWallet: "Simulated wallet",
      wrongNet: "Wrong network",
      riskTitle: "riskLevel from the host",
      risk0: "Risk: unverified (0)",
      risk1: "Risk: 1",
      risk2: "Risk: 2",
      risk3: "Risk: 3",
      risk4: "Risk: 4",
      riskNone: "Risk: missing",
      phaseTitle: "marketPhase from the host",
      phaseInternal: "Internal market",
      phaseDex: "Listed on DEX",
      phaseUnknown: "Phase unknown",
      dappLink: "← Standalone dapp",
      menuAria: "Menu (inactive in preview)",
      flapLogo: "FLAP (mock wordmark)",
      langTitle: "Switch component language (i18n.json en / zh)",
      walletTitle: "Preview: simulated connect, no real wallet",
      caTitle: "Preview address (not deployed)",
      cuNote: "↑ This block is the custom component (src/vaults/eden-burn-vault/: Component.tsx + scene/ 3D engine). The four tabs below move the camera: reactor → pools → plot planet (drag and select tiles) → floor redemption (black hole). The top bar, breadcrumb, token card, and “VAULT INFORMATION” are provided by the flap.sh host.",
      socialX: "X (Twitter)",
      socialTg: "Telegram",
      langBtn: "EN"
    }
  };
  function dict(locale) { return HOST[locale === "en" ? "en" : "zh"]; }
  function applyHost(locale) {
    var d = dict(locale);
    document.querySelectorAll("[data-h]").forEach(function (el) {
      var k = el.getAttribute("data-h");
      if (k && d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll("[data-h-html]").forEach(function (el) {
      var k = el.getAttribute("data-h-html");
      if (k && d[k] != null) el.innerHTML = d[k];
    });
    document.querySelectorAll("[data-h-title]").forEach(function (el) {
      var k = el.getAttribute("data-h-title");
      if (k && d[k] != null) el.setAttribute("title", d[k]);
    });
    document.querySelectorAll("[data-h-aria]").forEach(function (el) {
      var k = el.getAttribute("data-h-aria");
      if (k && d[k] != null) el.setAttribute("aria-label", d[k]);
    });
    document.title = d.docTitle;
    var desc = $("docDesc");
    if (desc) desc.setAttribute("content", d.docDesc);
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }
  var s = P.get();
  function sync(st) {
    s = st;
    applyHost(st.locale);
    $("langTxt").textContent = dict(st.locale).langBtn;
    $("connectTxt").textContent = st.wallet ? "0x5eED…beEF" : "Connect Wallet";
    $("connectBtn").classList.toggle("on", st.wallet);
    $("pvWallet").checked = st.wallet; $("pvNet").checked = st.wrongNetwork;
    $("pvRisk").value = st.risk === null ? "none" : String(st.risk); $("pvPhase").value = st.phase;
  }
  P.onChange(sync); sync(s);
  $("langBtn").onclick = function () { P.set({ locale: s.locale === "zh" ? "en" : "zh" }); };
  $("connectBtn").onclick = function () { P.set({ wallet: !s.wallet }); };
  $("pvWallet").onchange = function (e) { P.set({ wallet: e.target.checked }); };
  $("pvNet").onchange = function (e) { P.set({ wrongNetwork: e.target.checked }); };
  $("pvRisk").onchange = function (e) { var v = e.target.value; P.set({ risk: v === "none" ? null : Number(v) }); };
  $("pvPhase").onchange = function (e) { P.set({ phase: e.target.value }); };
})();
