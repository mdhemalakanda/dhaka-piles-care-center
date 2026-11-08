/* ============================================================
   DHAKA PILES CARE CENTER — i18n engine (BN default / EN)
   Usage contract: docs/FRONTEND_CONTRACT.md
   <el data-i18n="key">Bangla default</el>
   <el data-i18n-ph="key"> / data-i18n-alt="key" / data-i18n-aria="key"
   <title data-i18n="meta.page"> , <meta data-i18n-meta="meta.pageDesc">
   Dictionary: window.DPC_T = { bn:{...}, en:{...} } (built by scripts/build.mjs)
   ============================================================ */
(function () {
  "use strict";
  var STORAGE_KEY = "dpc_lang";

  var I18N = {
    lang: "bn",

    init: function () {
      var saved = null;
      try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
      this.lang = (saved === "en" || saved === "bn") ? saved : "bn";
      this.apply();
      this.wire();
    },

    t: function (key) {
      if (!key) return "";
      var dict = window.DPC_T || {};
      var v = (dict[this.lang] || {})[key];
      if (v === undefined) v = (dict.bn || {})[key];
      if (v === undefined) v = key;
      return v;
    },

    apply: function () {
      var self = this;
      document.documentElement.setAttribute("lang", this.lang);
      document.body.classList.toggle("lang-bn", this.lang === "bn");
      document.body.classList.toggle("lang-en", this.lang === "en");

      var nodes = document.querySelectorAll("[data-i18n]");
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        var txt = self.t(el.getAttribute("data-i18n"));
        if (el.hasAttribute("data-i18n-html")) { el.innerHTML = txt; }
        else { el.textContent = txt; }
      }
      swapAttr(document, "data-i18n-ph", "placeholder");
      swapAttr(document, "data-i18n-alt", "alt");
      swapAttr(document, "data-i18n-aria", "aria-label");
      swapAttr(document, "data-i18n-meta", "content");

      var sw = document.querySelectorAll(".lang-btn");
      for (var j = 0; j < sw.length; j++) {
        sw[j].classList.toggle("active", sw[j].getAttribute("data-set-lang") === self.lang);
      }
    },

    setLang: function (lang) {
      if (lang !== "bn" && lang !== "en") return;
      this.lang = lang;
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
      this.apply();
    },

    wire: function () {
      var self = this;
      var buttons = document.querySelectorAll(".lang-btn");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
          self.setLang(this.getAttribute("data-set-lang"));
        });
      }
    }
  };

  function swapAttr(root, attrName, target) {
    var els = root.querySelectorAll("[" + attrName + "]");
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute(attrName);
      els[i].setAttribute(target, I18N.t(key));
    }
  }

  function boot() { I18N.init(); }
  /* Deferred scripts run at readyState "interactive" — in that state we must WAIT
     for DOMContentLoaded so translations.js (also deferred) has set window.DPC_T. */
  if (document.readyState === "complete") {
    boot();
  } else {
    document.addEventListener("DOMContentLoaded", boot);
  }
  window.DPC_I18N = I18N;
})();
