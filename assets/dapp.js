(function () {
  var P = window.EdenPreview; if (!P) return;
  var $ = function (id) { return document.getElementById(id); };
  var s = P.get();
  function sync(st) {
    s = st;
    $("langBtn").textContent = st.locale === "zh" ? "EN" : "中文";
    $("connectBtn").textContent = st.wallet ? "0x5eED…beEF" : (st.locale === "zh" ? "连接钱包" : "Connect");
    $("connectBtn").classList.toggle("on", st.wallet);
    document.documentElement.lang = st.locale === "zh" ? "zh-CN" : "en";
  }
  P.onChange(sync); sync(s);
  $("langBtn").onclick = function () { P.set({ locale: s.locale === "zh" ? "en" : "zh" }); };
  $("connectBtn").onclick = function () { P.set({ wallet: !s.wallet }); };
})();
