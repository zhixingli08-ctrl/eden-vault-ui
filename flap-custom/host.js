(function () {
  var P = window.EdenPreview; if (!P) return;
  var $ = function (id) { return document.getElementById(id); };
  var s = P.get();
  function sync(st) {
    s = st;
    $("langTxt").textContent = st.locale === "zh" ? "中文" : "EN";
    $("connectTxt").textContent = st.wallet ? "0x5eED…beEF" : "Connect Wallet";
    $("connectBtn").classList.toggle("on", st.wallet);
    $("pvWallet").checked = st.wallet; $("pvNet").checked = st.wrongNetwork;
    $("pvRisk").value = st.risk === null ? "none" : String(st.risk); $("pvPhase").value = st.phase;
    document.documentElement.lang = st.locale === "zh" ? "zh-CN" : "en";
  }
  P.onChange(sync); sync(s);
  $("langBtn").onclick = function () { P.set({ locale: s.locale === "zh" ? "en" : "zh" }); };
  $("connectBtn").onclick = function () { P.set({ wallet: !s.wallet }); };
  $("pvWallet").onchange = function (e) { P.set({ wallet: e.target.checked }); };
  $("pvNet").onchange = function (e) { P.set({ wrongNetwork: e.target.checked }); };
  $("pvRisk").onchange = function (e) { var v = e.target.value; P.set({ risk: v === "none" ? null : Number(v) }); };
  $("pvPhase").onchange = function (e) { P.set({ phase: e.target.value }); };
})();
