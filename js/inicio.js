! function a(r, i, o) {
  function l(t, e) {
    if (!i[t]) {
      if (!r[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (d) return d(t, !0);
        throw (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", n
      }
      n = i[t] = {
        exports: {}
      }, r[t][0].call(n.exports, function (e) {
        return l(r[t][1][e] || e)
      }, n, n.exports, a, r, i, o)
    }
    return i[t].exports
  }
  for (var d = "function" == typeof require && require, e = 0; e < o.length; e++) l(o[e]);
  return l
}({
  1: [function (e, t, n) {
    "use strict";
    var a, o = (a = e("../legal-modal")) && a.__esModule ? a : {
      default: a
    };
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    function l() {
      var e = null === (e = document) || void 0 === e ? void 0 : e.querySelector(".kv-check-scroll");
      return e && null != e && e.querySelector(".kv-ee-navigation") ? e : null
    }

    function d(e, t, n) {
      var a, r, i = document.createElement("div");
      return i.classList.add("kv-ee-banner-content"), i.append((a = e, (r = document.createElement("p")).innerHTML = a.bannerText, r)), i.append(function (e, t, n) {
        var a = document.createElement("div");
        a.classList.add("kv-ee-banner-buttons");
        var r = document.createElement("span");
        r.classList.add("kv-ee-banner-button"), r.innerHTML = n.localize("designer.siteSettings.legal.fields.privacyPolicy.privacyPolicyText.label"), r.addEventListener("click", function () {
          (0, o.default)(t)
        });
        n = document.createElement("span");
        return n.classList.add("kv-ee-banner-button"), n.innerHTML = e.agreeButtonText, n.addEventListener("click", function () {
          var e, t = null === (e = document.body) || void 0 === e ? void 0 : e.querySelector(".kv-ee-gdpr-banner");
          t && (t.classList.remove("kv-ee-show"), (e = l()) && (e.style.top = "0"), setTimeout(function () {
            document.body.removeChild(t), window.localStorage.setItem("cookieDisclaimer", !0)
          }, e ? 200 : 0))
        }), a.append(r), a.append(n), a
      }(e, t, n)), i
    }

    function r(e, t, n) {
      var a = document.createElement("div");
      a.classList.add("kv-ee-gdpr-banner"), a.classList.add("kv-ee-".concat(e.bannerPosition)), a.classList.add("kv-ee-show");
      var r, i = "top" === e.bannerPosition;
      (r = l()) && i && (r.style.top = "74px", r.style.transition = "top 200ms ease-in-out", a.classList.add("kv-ee-header-fixed")), a.append((r = e, e = t, t = n, (n = document.createElement("div")).classList.add("kv-ee-banner-container"), n.append(d(r, e, t)), n)), i ? document.body.prepend(a) : document.body.append(a)
    }
    n.default = r
  }, {
    "../legal-modal": 4
  }],
  2: [function (e, t, n) {
    "use strict";
    var a, r = (a = e("./gdpr-banner")) && a.__esModule ? a : {
      default: a
    };
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    r = r.default;
    n.default = r
  }, {
    "./gdpr-banner": 1
  }],
  3: [function (e, t, n) {
    "use strict";
    var a = i(e("./legal-modal")),
      r = i(e("./gdpr-banner"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function c(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) || function (e, t) {
        var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
        if (null != n) {
          var a, r, i = [],
            o = !0,
            l = !1;
          try {
            for (n = n.call(e); !(o = (a = n.next()).done) && (i.push(a.value), !t || i.length !== t); o = !0);
          } catch (e) {
            l = !0, r = e
          } finally {
            try {
              o || null == n.return || n.return()
            } finally {
              if (l) throw r
            }
          }
          return i
        }
      }(e, t) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
      return a
    }

    function l(e, t) {
      for (var n, a = 0; a < t.length; a++)(n = t[a]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
    var d, u, s, e = (d = v, (u = [{
      key: "getNiceName",
      value: function (e) {
        return "termsofservice" === e ? this.builderApi.localize("designer.siteSettings.legal.fields.termsOfService.termsOfServiceText.label") : "privacypolicy" === e ? this.builderApi.localize("designer.siteSettings.legal.fields.privacyPolicy.privacyPolicyText.label") : ""
      }
    }, {
      key: "getLegalText",
      value: function (e, t) {
        return "termsofservice" === t ? e.termsOfServiceText : "privacypolicy" === t ? e.privacyPolicyText : ""
      }
    }, {
      key: "buildLegalElement",
      value: function (e, t, n) {
        var a = document.createElement("a");
        return a.id = e, a.key = t, a.href = "#".concat(e), a.classList.add(e), a.innerHTML = n, a.style.marginRight = "8px", a.style.cursor = "pointer", a
      }
    }, {
      key: "doEUCitizenCall",
      value: function () {
        var e = window._site && window._site.environment || "",
          t = window._site && window._site.partnerId || 0,
          n = window._site && window._site.useHostingApi || !1,
          a = "";
        return (100 <= t || n) && e && (a = "dev" === e ? "https://hostingapi.latest.mywebsitebuilder.com" : "prod" === e ? "https://hostingapi.mywebsitebuilder.com" : "https://hostingapi.".concat(e, ".mywebsitebuilder.com")), this.fetch(a + "/v1.0/policy/info").then(function (e) {
          return e.json()
        })
      }
    }, {
      key: "registerGdprBanner",
      value: function (e, t, n) {
        this.isRuntimeSite && this.isPrivacyPolicy(e) && t.showCookieBanner && this.testLocalStorage() && !window.localStorage.getItem("cookieDisclaimer") && (0, r.default)(t, n, this.builderApi)
      }
    }, {
      key: "isPrivacyPolicy",
      value: function (e) {
        return "privacypolicy" === e
      }
    }, {
      key: "testLocalStorage",
      value: function () {
        try {
          return window.localStorage.setItem("testLS", !0), window.localStorage.removeItem("testLS"), !0
        } catch (e) {
          return !1
        }
      }
    }, {
      key: "handleLegalModal",
      value: function (e, t) {
        window.location.hash === "#".concat(e) && (0, a.default)(t)
      }
    }, {
      key: "afterRender",
      value: function (e, t, n) {
        var d = this;
        setTimeout(function () {
          var e = n.global.legal,
            o = n.global.companyName,
            l = null == t ? void 0 : t.querySelector(".kv-ee-legal-placeholder");
          Object.entries(e).map(function (e, t) {
            var n, a = c(e, 2),
              r = a[0],
              e = a[1],
              i = r.toLowerCase();
            null != l && l.querySelector(".".concat(i)) || (a = d.getNiceName(i), r = d.getLegalText(e, i), t = d.buildLegalElement(i, t, a), 0 < r.length && (l.append(t), n = {
              data: r,
              displayName: a,
              companyName: o,
              id: i
            }, d.registerGdprBanner(i, e, n), window.addEventListener("hashchange", function () {
              d.handleLegalModal(i, n)
            }), d.isRuntimeSite && d.handleLegalModal(i, n)))
          }), l && (l.dataset.type = "legal")
        }, 1)
      }
    }]) && l(d.prototype, u), s && l(d, s), v);

    function v(e, t) {
      var n = this;
      (function (e) {
        if (!(e instanceof v)) throw new TypeError("Cannot call a class as a function")
      })(this), this.builderApi = e, this.isRuntimeSite = t.isRuntimeSite, this.fetch = e.fetch, e.editor && setTimeout(function () {
        e.editor.refreshFeatures && e.editor.refreshFeatures(), e.editor.getAllControlsForFeature(n).forEach(function (e) {
          e.render()
        })
      }, 1)
    }
    window.__features = window.__features || {}, window.__features.legal = e
  }, {
    "./gdpr-banner": 2,
    "./legal-modal": 4
  }],
  4: [function (e, t, n) {
    "use strict";
    var a, r = (a = e("./legal-modal")) && a.__esModule ? a : {
      default: a
    };
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    r = r.default;
    n.default = r
  }, {
    "./legal-modal": 5
  }],
  5: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    function i() {
      var e, t = null === (e = document.body) || void 0 === e ? void 0 : e.querySelector(".kv-ee-legal-modal");
      t && (t.classList.add("kv-ee-animate-out"), setTimeout(function () {
        document.body.removeChild(t), document.body.style.overflow = "", window.history.replaceState({}, document.title, window.location.href.split("#")[0])
      }, 250))
    }

    function o(e, t, n) {
      var a = document.createElement("div");
      return a.classList.add("kv-ee-modal-content"), a.append(function (e) {
        var t = document.createElement("div");
        t.classList.add("kv-ee-modal-header");
        var n = document.createElement("h2");
        n.innerHTML = e;
        e = document.createElement("span");
        return e.classList.add("kv-ee-close"), e.innerHTML = "&times;", e.addEventListener("click", i), t.append(n), t.append(e), t
      }(t)), a.append(function (e) {
        var t = document.createElement("div");
        t.classList.add("kv-ee-modal-body");
        var n = e.includes("<p>") ? document.createElement("div") : document.createElement("p");
        return n.innerText = e, t.append(n), t
      }(e)), a.append(function (e) {
        var t = document.createElement("div");
        t.classList.add("kv-ee-modal-footer");
        var n = (new Date).getFullYear(),
          a = document.createElement("span");
        return a.innerHTML = e ? "&copy; ".concat(n, " ").concat(e) : "Copyright ".concat(n), t.append(a), t
      }(n)), a.addEventListener("click", function (e) {
        e.preventDefault(), e.stopPropagation()
      }), a
    }

    function a(e) {
      var t = e.data,
        n = e.displayName,
        a = e.companyName,
        r = e.id;
      (e = document.createElement("div")).classList.add("kv-ee-legal-modal"), e.id = r, e.append(o(t, n, a)), e.classList.add("kv-ee-animate-in"), e.addEventListener("click", i), window.addEventListener("keydown", l), document.body.append(e), document.body.style.overflow = "hidden"
    }
    var l = function (e) {
      27 === e.keyCode && (window.removeEventListener("keydown", l), i())
    };
    n.default = a
  }, {}]
}, {}, [3]);;
! function n(o, r, a) {
  function s(t, e) {
    if (!r[t]) {
      if (!o[t]) {
        var i = "function" == typeof require && require;
        if (!e && i) return i(t, !0);
        if (l) return l(t, !0);
        throw (i = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", i
      }
      i = r[t] = {
        exports: {}
      }, o[t][0].call(i.exports, function (e) {
        return s(o[t][1][e] || e)
      }, i, i.exports, n, o, r, a)
    }
    return r[t].exports
  }
  for (var l = "function" == typeof require && require, e = 0; e < a.length; e++) s(a[e]);
  return s
}({
  1: [function (e, t, i) {
    "use strict";

    function o(e) {
      return function (e) {
        if (Array.isArray(e)) return n(e)
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }(e) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return n(e, t);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" === (i = "Object" === i && e.constructor ? e.constructor.name : i) || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(e, t) : void 0
        }
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function n(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
      return n
    }

    function r(e, t) {
      for (var i, n = 0; n < t.length; n++)(i = t[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }

    function a(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e
    }
    var s, l, u, d = (s = c, (l = [{
      key: "registerWindowEvent",
      value: function () {}
    }, {
      key: "unregisterWindowEvent",
      value: function () {
        var e;
        "undefined" == typeof window || !window._zoomUpdateEvents || 0 <= (e = window._zoomUpdateEvents.indexOf(this.triggerWindowEvent)) && window._zoomUpdateEvents.splice(e, 1)
      }
    }, {
      key: "dispose",
      value: function () {
        this.recheckMode = null, this.unregisterWindowEvent()
      }
    }, {
      key: "afterRender",
      value: function (e, t) {
        var i, n, o = this;
        !t.parentElement || ((n = (i = t.parentElement.parentElement).querySelectorAll("li")) || n.length) && (this.builderApi.isInOnboarding() ? i.classList.add("kv-ee-no-animation") : i.classList.remove("kv-ee-no-animation"), this.settings.isCarouselSection ? setTimeout(function () {
          o.checkMobileMode(i), o.setHeaderHeight(e, t)
        }, 300) : !this.builderApi.isInOnboarding() || t.offsetHeight ? (this.checkMobileMode(i), this.setHeaderHeight(e, t), window.addEventListener("resize", function () {
          o.__resizeTimeout && window.clearTimeout(o.__resizeTimeout), o.__resizeTimeout = window.setTimeout(function () {
            o.checkMobileMode(i), o.setHeaderHeight(e, t)
          }, o.resizeWaitTimeout)
        }), this.recheckMode = this.builderApi.debounce(function () {
          o.checkMobileMode(i), o.setHeaderHeight(e, t)
        }, 300)) : setTimeout(function () {
          o.checkMobileMode(i), o.setHeaderHeight(e, t)
        }, 2e3))
      }
    }, {
      key: "setSectionPadding",
      value: function (e, t) {
        e.nextElementSibling.querySelector(".kv-background").style.top = -t + "px"
      }
    }, {
      key: "setHeaderHeightInternal",
      value: function (e, t) {
        var i = "navigation" === this.builderApi.controller.parentController.model.category && this.isRuntimeSite;
        if (0 < e.offsetHeight || i) {
          i = this.builderApi.controller.parentController.model.layout.section.id;
          if ("dubemo66" === i) return n = e.querySelector("header"), void(t.style.height = n.offsetHeight + "px");
          var n = (n = e.querySelector(".kv-ee-navigation") || e.querySelector("header")).offsetHeight,
            e = this.isPreviewOrPublishedWebsite && "navigation-1" === i && !this.settings.model._toggle["global.logo"] ? Math.ceil(n + e.offsetHeight) : Math.max(n, e.offsetHeight);
          t.style.height = e + "px", document.documentElement.style.setProperty("--navigation-height", e + "px")
        }
      }
    }, {
      key: "setHeaderHeight",
      value: function (e, r) {
        var a = this,
          e = e.model.isFloatingSection || !1 === e.model.cover && !0 === e.model.fixedNavigation;
        r.parentElement && e && !this.settings.isCarouselSection && function () {
          for (var e = r.parentElement.parentElement, t = r.querySelectorAll("img"), i = 0; i < t.length; i++) {
            var n = t[i].src,
              o = new window.Image;
            o.onload = function () {
              setTimeout(function () {
                a.setHeaderHeightInternal(r, e)
              })
            }, o.src = n
          }
          a.setHeaderHeightInternal(r, e), setTimeout(function () {
            r.classList.contains("kv-scrolled") || a.setHeaderHeightInternal(r, e)
          }, 1e3)
        }()
      }
    }, {
      key: "getNavigationWidth",
      value: function (e) {
        var t = 0;
        return e.forEach(function (e) {
          t += e.offsetWidth
        }), t + 40
      }
    }, {
      key: "determineContainerWidth",
      value: function (e, t) {
        var i = e.querySelector("nav") || e,
          n = e.querySelector('[data-dynamic-navigation-element="logo"]'),
          o = e.querySelector('[data-dynamic-navigation-element="calltoactionbutton"]'),
          o = o ? o.offsetWidth : 0,
          n = n ? n.offsetWidth : 0,
          i = i.offsetWidth - o;
        return {
          containerSize: i,
          logoWidth: n,
          ctaWidth: o,
          headerWith: e.offsetWidth,
          navigationToWide: t + n + o >= e.offsetWidth - 20,
          headerToWide: i + n >= e.offsetWidth
        }
      }
    }, {
      key: "shouldMinimizeMenu",
      value: function (e) {
        if (((null == e ? void 0 : e.clientWidth) || window.innerWidth) < this.mobileBreakpoint) return !0;
        var t = e.querySelectorAll(".kv-ee-menu-item-wrapper > li");
        this.currentElementWidth = this.getNavigationWidth(t);
        var i = this.determineContainerWidth(e, this.currentElementWidth),
          t = i.containerSize,
          e = i.headerToWide,
          i = i.navigationToWide;
        return t < 100 && !this.builderApi.controller.getSiteController().hasSectionBasedNavigation() || e || i
      }
    }, {
      key: "checkMobileMode",
      value: function (e) {
        var t = (t = e.querySelector(".kv-ee-check-mobile")) || e;
        window.innerWidth < this.mobileBreakpoint ? t.classList.contains("kv-ee-mobile") || t.classList.add("kv-ee-mobile") : (t.classList.remove("kv-ee-mobile"), e = this.shouldMinimizeMenu(e), t = t.classList, e && t.add("kv-ee-mobile"), e || t.remove("kv-ee-mobile"))
      }
    }, {
      key: "updateProperty",
      value: function (e, t, i) {
        var n;
        "layout.section.id" !== t || (t = o((n = document.querySelector(".kv-page-content")).classList).find(function (e) {
          return e.includes("with-navigation")
        })) && (n.classList.remove(t), n.classList.add("kv-ee-with-" + i))
      }
    }]) && r(s.prototype, l), u && r(s, u), c);

    function c(e, t) {
      var i = this;
      (function (e) {
        if (!(e instanceof c)) throw new TypeError("Cannot call a class as a function")
      })(this), a(this, "getRenderModel", function () {
        return {}
      }), a(this, "triggerWindowEvent", function () {
        i.recheckMode && i.recheckMode()
      }), this.isRuntimeSite = t.isRuntimeSite, this.builderApi = e, this.currentElementWidth = 0, this.checkTimeout = 0, this.settings = t;
      e = !this.editor && window.self !== window.top;
      this.isPreviewOrPublishedWebsite = t.isRuntimeSite, this.mobileBreakpoint = 991, this.resizeWaitTimeout = e ? 0 : 300, "undefined" != typeof window && (window._zoomUpdateEvents = window._zoomUpdateEvents || [], window._zoomUpdateEvents.push(this.triggerWindowEvent))
    }
    window.__features = window.__features || {}, window.__features.navigation = d
  }, {}]
}, {}, [1]);;
! function n(r, o, a) {
  function u(t, e) {
    if (!o[t]) {
      if (!r[t]) {
        var i = "function" == typeof require && require;
        if (!e && i) return i(t, !0);
        if (c) return c(t, !0);
        throw (i = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", i
      }
      i = o[t] = {
        exports: {}
      }, r[t][0].call(i.exports, function (e) {
        return u(r[t][1][e] || e)
      }, i, i.exports, n, r, o, a)
    }
    return o[t].exports
  }
  for (var c = "function" == typeof require && require, e = 0; e < a.length; e++) u(a[e]);
  return u
}({
  1: [function (e, t, i) {
    "use strict";

    function n(e, t) {
      for (var i, n = 0; n < t.length; n++)(i = t[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
    var r, o, a, u = (r = c, (o = [{
      key: "getStrippedAccountname",
      value: function (e) {
        var t, e = e && e.accounts && e.accounts.facebook || "facebook";
        return e = (e = e.value ? e.value : e) && -1 < e.indexOf("/") && (t = (t = e.split("/"))[t.length - 1] || t[t.length - 2]) ? t : e
      }
    }, {
      key: "setIframeUrl",
      value: function (e, t) {
        var i, n, r = !(null == e || !e.querySelector) && e.querySelector("iframe");
        r && (i = r.getAttribute("data-src"), this.facebookAccount && (i = i.replace("__facebook_account__", this.facebookAccount)), n = 500, 0 < window.innerWidth && (n = window.innerWidth - 30), e = 500 < window.innerWidth || 0 === window.innerWidth ? 500 : n, n = this.replaceQueryParameter(i, "height", t.height || 500), n = this.replaceQueryParameter(i, "width", e), r.width = e, t.width = e, r.src = n, r.style.display = "none", this.iframeHeight = r.offsetHeight, r.style.display = "block")
      }
    }, {
      key: "initializeForSection",
      value: function () {}
    }, {
      key: "updateProperty",
      value: function () {}
    }, {
      key: "replaceQueryParameter",
      value: function (e, t, i) {
        var n = e.split("&" + t + "=");
        return 1 < n.length ? n[0] + "&" + t + "=" + i + "&" + n[1].split(/&(.+)/)[1] : e + "&" + t + "=" + i
      }
    }, {
      key: "afterRender",
      value: function (e, t, i) {
        e = e.controller.getSiteController().getGlobalBinding();
        this.facebookAccount = this.getStrippedAccountname(e), this.setIframeUrl(t, i)
      }
    }]) && n(r.prototype, o), a && n(r, a), c);

    function c(e, t) {
      var i = this;
      (function (e) {
        if (!(e instanceof c)) throw new TypeError("Cannot call a class as a function")
      })(this), this.builderApi = e, this.isRuntimeSite = t.isRuntimeSite;
      var n = !this.editor && window.self !== window.top;
      this.resizeWaitTimeout = n ? 0 : 300;
      n = t.model;
      n.fbFeedHeight = n.fbFeedHeight || "500", void 0 === n.fbTimeline && (n.fbTimeline = !0), void 0 === n.fbMessages && (n.fbMessages = !1), void 0 === n.fbHideCover && (n.fbHideCover = !0), void 0 === n.fbEvents && (n.fbEvents = !1);
      e = e.controller.getSiteController().getGlobalBinding();
      this.facebookAccount = this.getStrippedAccountname(e), window.addEventListener("resize", function () {
        i.__resizeTimeout && window.clearTimeout(i.__resizeTimeout), i.__resizeTimeout = window.setTimeout(function () {
          i.setIframeUrl(t.view.element, t.model)
        }, i.resizeWaitTimeout)
      })
    }
    window.__features = window.__features || {}, window.__features["facebook-page-plugin"] = u
  }, {}]
}, {}, [1]);;
! function o(n, i, a) {
  function c(t, e) {
    if (!i[t]) {
      if (!n[t]) {
        var r = "function" == typeof require && require;
        if (!e && r) return r(t, !0);
        if (s) return s(t, !0);
        throw (r = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", r
      }
      r = i[t] = {
        exports: {}
      }, n[t][0].call(r.exports, function (e) {
        return c(n[t][1][e] || e)
      }, r, r.exports, o, n, i, a)
    }
    return i[t].exports
  }
  for (var s = "function" == typeof require && require, e = 0; e < a.length; e++) c(a[e]);
  return c
}({
  1: [function (e, t, r) {
    "use strict";

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function n(e, t) {
      for (var r, o = 0; o < t.length; o++)(r = t[o]).enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
    var i, a, c, s = (i = l, (a = [{
      key: "validateForm",
      value: function (e) {
        var n = this,
          i = {
            data: [],
            errors: []
          };
        return e.forEach(function (e) {
          var t = e.getAttribute("id"),
            r = e.value,
            o = e.dataset.namelabel;
          if (!t.includes("g-recaptcha-response"))
            if ("fieldSubscribe" === t && (r = "none" === e.style.display || e.checked), n.isEmpty(r)) i.errors.push({
              key: t,
              errorMessage: "required"
            });
            else {
              if ("fieldEmail" === t) {
                if (r = "string" == typeof r && r.replace(/\s+/g, ""), !/^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test((r + "").toLowerCase())) return void i.errors.push({
                  key: t,
                  errorMessage: "invalidEmail"
                });
                r = r.replace(/\s+/g, "")
              }
              i.data.push({
                name: o,
                field: t,
                value: r,
                type: n.mapInputType(t)
              })
            }
        }), i
      }
    }, {
      key: "showSuccesMessage",
      value: function (e) {
        var t = e.querySelector(".kv-ee-contact-form-success");
        t && t.classList.add("kv-ee-show"), this.setButtonState(e.querySelector(".kv-ee-button.kv-ee-submit"), this.builderApi.localize("editorTemplates.features.subscription.sent")), e.classList.add(this.promoCodeClass)
      }
    }, {
      key: "handlePreview",
      value: function (e) {
        var t;
        document.querySelector(".kv-ee-preview-form-container") || (t = e.querySelector(".kv-ee-form-container") || e) && ((e = document && document.createElement("div")).className = "kv-ee-preview-form-container", e.innerHTML = this.builderApi.localize("editorTemplates.features.form.preview.message"), t.querySelector(".kv-ee-preview-form-container") || t.appendChild(e))
      }
    }, {
      key: "confirmForm",
      value: function (e, t, r, o, n, i) {
        var a, c = this,
          s = this.builderApi.controller.model,
          l = s.theme.fonts.heading.name,
          s = s.theme.fonts.body.name,
          i = i.backgroundControl.controller.getCssId(),
          d = this.builderApi.showModal({
            content: '<div class="'.concat(i, '">\n        <div style="background-color: var(--kv-ee-card); padding: 24px 24px 4px 24px; border-radius: 4px; max-height: 50vh; overflow: scroll;">\n          <h3 style="font-family: ').concat(l, '; font-weight: bold; color: var(--kv-ee-text1-card);">\n            ').concat(this.builderApi.localize("editorTemplates.features.confirm.confirmTitle"), '\n          </h3>\n          <p style="font-family: ').concat(s, '; color: rgba(var(--kv-ee-text1-card-rgb), 0.6);">\n            ').concat(this.builderApi.localize("editorTemplates.features.confirm.confirmMessage"), '\n          </p>\n          <div style="padding: 16px; background-color: #F6F6F6; border-radius: 4px; margin-bottom: 24px;" id="kv-ee-input-data"></div>\n            <div style="\n              border-top: 1px solid rgba(0,0,0,0.04);\n              display: flex;\n              justify-content: flex-end;\n              margin-left: -24px;\n              margin-right: -24px;\n              padding: 8px;"\n            >\n              <button style="\n                background-color: var(--kv-ee-text1-accent1);\n                border: 1px solid rgba(var(--kv-ee-accent1-rgb), 0.5);\n                border-radius: 4px;\n                color: var(--kv-ee-accent1);\n                font-size: 16px;\n                font-weight: 700;\n                height: 40px;\n                padding: 5px 15px;\n                margin-right: 8px;"\n                id="kv-ee-closeButton"\n              >\n                ').concat(this.builderApi.localize("editorTemplates.features.confirm.confirmCancel"), '\n            </button>\n            <button style="\n              background-color: var(--kv-ee-accent1);\n              border: var(--kv-ee-accent1);\n              color:  var(--kv-ee-text1-accent1);\n              font-size: 16px;\n              font-weight: 700;\n              height: 40px;\n              padding: 6px 16px;\n              min-width: auto;\n              border-radius: 4px;\n              cursor: pointer;\n              margin-right: 4px;"\n              id="kv-ee-confirmButton"\n            >\n              ').concat(this.builderApi.localize("editorTemplates.features.confirm.Accept"), "\n            </button>\n          </div>\n        </div>\n      </div>"),
            fullscreenOnMobile: !0,
            onClose: null
          }),
          l = document.getElementById("kv-ee-input-data");
        l && (s = document.createElement("table"), a = document.createElement("tbody"), e.forEach(function (e) {
          var t, r, o;
          "fieldSubscribe" !== e.field && (t = document.createElement("tr"), (o = document.createElement("td")).style.color = "rgba(0, 0, 0, 0.6)", o.style.padding = window.innerWidth < 768 ? "6px 12px" : "8px 16px", o.style.verticalAlign = "top", r = document.createTextNode(e.name), o.appendChild(r), t.appendChild(o), (o = document.createElement("td")).style.maxWidth = "300px", e = document.createTextNode(e.value), o.appendChild(e), t.appendChild(o), a.appendChild(t))
        }), s.appendChild(a), l.appendChild(s)), document.getElementById("kv-ee-confirmButton").onclick = function () {
          return c.closeAndSubmitForm(e, t, r, o, n, d)
        }, document.getElementById("kv-ee-closeButton").onclick = function () {
          return c.builderApi.closeModal(d)
        }
      }
    }, {
      key: "closeAndSubmitForm",
      value: function (e, t, r, o, n, i) {
        this.builderApi.closeModal(i), this.submitForm(e, t, r, o, n)
      }
    }, {
      key: "submitForm",
      value: function (e, r, t, o, n) {
        var i = this,
          a = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : {};
        if (!this.editor && window.self !== window.top) return this.setButtonState(o.target, this.builderApi.localize("editorTemplates.features.form.preview.button")), void this.handlePreview(r);
        e.forEach(function (e) {
          e.name && (e.name = e.name.slice(0, 254))
        });
        var c = window._site && window._site.siteId || "",
          s = window._site && window._site.partnerId || 0,
          l = window._site && window._site.useHostingApi || !1,
          d = n.env.env || window._site && window._site.environment || "",
          u = "/v1.0/contactform";
        (100 <= s || l) && (u = "dev" === d || "latest" === d ? "https://hostingapi.latest.mywebsitebuilder.com" + u : "qa" === d ? "https://hostingapi.qa.mywebsitebuilder.com" + u : "uat" === d ? "https://hostingapi.uat.mywebsitebuilder.com" + u : "https://hostingapi.mywebsitebuilder.com" + u);
        var p = r.querySelector("form"),
          s = r.querySelector(".kv-ee-hidden-form-data").dataset.sectionid,
          l = !!r.querySelector('[data-type="subscribe"]'),
          d = !!r.querySelector('[data-type="promotion"]'),
          e = {
            fields: e,
            site_id: c,
            recaptcha_code: t,
            section_id: s,
            form_id: s,
            is_subscription: l || d,
            contact_list_id: e.contactList
          };
        this.setButtonState(o.target, this.builderApi.localize("editorTemplates.features.subscription.sending")), n.fetch(u, {
          method: "POST",
          body: JSON.stringify(e),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(function (e) {
          if (!e.ok) throw new Error(e.statusText);
          var t = r.querySelector(".kv-ee-contact-form-success"),
            e = r.closest("section");
          t && t.classList.add("kv-ee-show"), i.setButtonState(o.target, i.builderApi.localize("editorTemplates.features.subscription.sent")), p.reset(), a.promoCode ? (i.useLocalStorage && window.localStorage.setItem("showpromo", !0), e.classList.add(i.promoCodeClass)) : t.addEventListener("click", function () {
            t.classList.remove("kv-ee-show")
          }), e.classList.add("submitted")
        }).catch(function () {
          i.setButtonState(o.target, i.builderApi.localize("editorTemplates.features.subscription.sendingError"))
        })
      }
    }, {
      key: "clearErrors",
      value: function (e, t) {
        var r = this,
          o = t.querySelector(".kv-ee-error-captcha-container");
        e && e.length && e.forEach(function (e) {
          r.setErrorStyling(t.querySelector(".kv-ee-" + e.id + "-container"), !1)
        }), o && o.setAttribute("style", "display: none")
      }
    }, {
      key: "showErrors",
      value: function (e, t, r) {
        var o = this;
        e && e.length && e.forEach(function (e) {
          o.setErrorStyling(t.querySelector(".kv-ee-" + e.key + "-container"), !0, e.errorMessage)
        }), r || ((e = t.querySelector(".kv-ee-error-captcha-container")) ? e.setAttribute("style", "display: block") : (r = t.querySelector(".kv-ee-captcha-field-wrapper"), (e = document.createElement("div")).className = "kv-ee-error-captcha-container", e.innerHTML = this.builderApi.localize("editorTemplates.features.subscription.couldNotVerify"), r.appendChild(e)))
      }
    }, {
      key: "isEmpty",
      value: function (e) {
        return null == e || "object" === o(e) && 0 === Object.keys(e).length || "string" == typeof e && 0 === e.trim().length
      }
    }, {
      key: "tryRenderCaptcha",
      value: function (e, t) {
        var r, o = this;
        window.hasCaptcha || (window.captchaInstanceQueue = [], window.onCaptchaLoadCallback = function () {
          window.captchaInstanceQueue.forEach(function (e) {
            o.renderCaptcha(e, t)
          })
        }, (r = document.createElement("script")).src = "https://www.google.com/recaptcha/api.js?onload=onCaptchaLoadCallback", r.setAttribute("async", !0), r.setAttribute("defer", !0), document.body.appendChild(r), window.hasCaptcha = !0), window.grecaptcha ? this.renderCaptcha(e, t) : window.captchaInstanceQueue.push(e)
      }
    }, {
      key: "renderCaptcha",
      value: function (e, t) {
        e = e.querySelector(".kv-ee-captcha-field-wrapper");
        window.grecaptcha && e && !e.querySelector("iframe") && (e.innerHTML = "", e = window.grecaptcha.render(e, {
          sitekey: "6Lewpm8UAAAAAKlR7x35yQOUTW6uJ65zbm96VqiL",
          callback: window.onCaptchaSubmit
        }), t._captchaWidgetId = e)
      }
    }, {
      key: "validateCaptcha",
      value: function (e, t) {
        return window.grecaptcha ? window.grecaptcha && window.grecaptcha.getResponse(e._captchaWidgetId) : (this.tryRenderCaptcha(t, e), !1)
      }
    }, {
      key: "setErrorStyling",
      value: function (e, t, r) {
        var o;
        e && (o = e.querySelector("input") || e.querySelector("textarea"), e = e.querySelector(".kv-ee-error-container"), o && e && (t && o ? (o.style.cssText = "border: 3px solid #F44336; border-radius: .25rem; box-sizing: border-box; outline: 0;", e.innerHTML = this.builderApi.localize("editorTemplates.features.subscription.".concat(r || "required"))) : (o.style.cssText = "", e.innerHTML = "")))
      }
    }, {
      key: "setButtonState",
      value: function (e, t) {
        e && (e.innerHTML = t)
      }
    }, {
      key: "mapInputType",
      value: function (e) {
        return "fieldFirstName" !== e && "fieldlastName" !== e ? "fieldPhone" === e ? 6 : "fieldDate" === e ? 4 : "fieldEmail" === e ? 3 : 1 : 8
      }
    }]) && n(i.prototype, a), c && n(i, c), l);

    function l(e, t) {
      (function (e) {
        if (!(e instanceof l)) throw new TypeError("Cannot call a class as a function")
      })(this), this.builderApi = e, this.view = t.view, this.localStorageHelper = this.builderApi.localStorageHelper, this.isTestMode = window.self !== window.top || !!e.editor, this.useLocalStorage = this.localStorageHelper.supportsLocalStorage && !this.isTestMode, this.promoCodeClass = "show-promo-code"
    }
    window.__features = window.__features || {}, window.__features["form-core"] = s
  }, {}]
}, {}, [1]);;
! function i(n, o, s) {
  function a(e, t) {
    if (!o[e]) {
      if (!n[e]) {
        var r = "function" == typeof require && require;
        if (!t && r) return r(e, !0);
        if (c) return c(e, !0);
        throw (r = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND", r
      }
      r = o[e] = {
        exports: {}
      }, n[e][0].call(r.exports, function (t) {
        return a(n[e][1][t] || t)
      }, r, r.exports, i, n, o, s)
    }
    return o[e].exports
  }
  for (var c = "function" == typeof require && require, t = 0; t < s.length; t++) a(s[t]);
  return a
}({
  1: [function (t, e, r) {
    "use strict";

    function i(t) {
      return function (t) {
        if (Array.isArray(t)) return n(t)
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
      }(t) || function (t, e) {
        if (t) {
          if ("string" == typeof t) return n(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return "Map" === (r = "Object" === r && t.constructor ? t.constructor.name : r) || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
        }
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function n(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, i = Array(e); r < e; r++) i[r] = t[r];
      return i
    }

    function o(t, e) {
      for (var r, i = 0; i < e.length; i++)(r = e[i]).enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
    var s, a, c, u = (s = l, (a = [{
      key: "initializeForSection",
      value: function () {}
    }, {
      key: "updateProperty",
      value: function () {}
    }, {
      key: "afterRender",
      value: function (t, e) {
        var r = this,
          i = e.querySelector('form [data-type="button"]'),
          n = t.controller.parentController;
        !this.isForPreview && this.isRuntimeSite && i && (i.removeAttribute("href"), i.dataset.href = "", i.addEventListener("click", function (t) {
          r.handleFormSubmission(t, n, e)
        }), e.addEventListener("click", function () {
          r.formCore.tryRenderCaptcha(e, n)
        }))
      }
    }, {
      key: "fetchContactLists",
      value: function (t) {
        return this.fetch("".concat(t).concat(this.builderApi.getSiteId(), "/lists?exclude_system_lists=true&exclude_all_contacts=true")).then(function (t) {
          return t.json()
        })
      }
    }, {
      key: "onLoadListIds",
      value: function () {
        var e = this,
          r = {
            label: this.builderApi.localize("editorTemplates.features.subscription.allContacts"),
            value: ""
          };
        return this.builderApi.getSiteId() && this.contactsApi && !this.contactsListsOptions ? this.fetchContactLists(this.contactsApi).then(function (t) {
          return e.contactsListsOptions = [r].concat(i(t.map(function (t) {
            return {
              label: t.name,
              value: t.id
            }
          }))), e.contactsListsOptions
        }).catch(function () {
          return [r]
        }) : this.contactsListsOptions ? Promise.resolve(this.contactsListsOptions) : Promise.resolve([r])
      }
    }, {
      key: "handleFormSubmission",
      value: function (t, e, r) {
        var i, n, o;
        t.preventDefault(), "localhost" !== window.location.hostname && (n = r.querySelectorAll("input, textarea"), this.formCore.clearErrors(n, r), i = (o = this.formCore.validateForm(n)).data, n = o.errors, o = this.formCore.validateCaptcha(e, r), 0 < n.length || !o ? this.formCore.showErrors(n, r, o) : this.formCore.submitForm(i, r, o, t, this.builderApi, e.model.binding))
      }
    }]) && o(s.prototype, a), c && o(s, c), l);

    function l(t, e, r) {
      (function (t) {
        if (!(t instanceof l)) throw new TypeError("Cannot call a class as a function")
      })(this), this.builderApi = t, this.formCore = r["form-core"], this.isForPreview = t.isForPreview, this.isRuntimeSite = !t.editor, this.fetch = t.fetch, this.builderApi.apiUrl && !e.isWordpress && (this.contactsApi = this.builderApi.apiUrl("v2.0/", "contacts"))
    }
    window.__features = window.__features || {}, window.__features.subscription = u
  }, {}]
}, {}, [1]);;
! function i(r, n, s) {
  function l(t, e) {
    if (!n[t]) {
      if (!r[t]) {
        var o = "function" == typeof require && require;
        if (!e && o) return o(t, !0);
        if (a) return a(t, !0);
        throw (o = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", o
      }
      o = n[t] = {
        exports: {}
      }, r[t][0].call(o.exports, function (e) {
        return l(r[t][1][e] || e)
      }, o, o.exports, i, r, n, s)
    }
    return n[t].exports
  }
  for (var a = "function" == typeof require && require, e = 0; e < s.length; e++) l(s[e]);
  return l
}({
  1: [function (e, t, o) {
    "use strict";

    function i(e, t) {
      for (var o, i = 0; i < t.length; i++)(o = t[i]).enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }

    function r(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e
    }
    var n, s, l, a = (n = u, (s = [{
      key: "dispose",
      value: function () {}
    }, {
      key: "getDisplayTime",
      value: function (e) {
        return 1e3 * parseInt(e.popoverTiming) || 0
      }
    }, {
      key: "rerender",
      value: function () {
        this.view.requestRender()
      }
    }, {
      key: "setTooltip",
      value: function () {
        var e = "";
        this.model.showPopover && (e = "leaveSite" === this.model.popoverDisplay ? this.builderApi.localize("editorTemplates.features.popover.tooltip.leaveSite") : (void 0 === this.model.popoverTiming && (this.model.popoverTiming = 10), 0 < parseInt(this.model.popoverTiming) ? this.builderApi.localize("editorTemplates.features.popover.tooltip.afterX").replace("{time}", this.model.popoverTiming) : this.builderApi.localize("editorTemplates.features.popover.tooltip.immediately"))), this.editorContext.setSectionToolTip(this.builderApi.controller.parentController, e)
      }
    }, {
      key: "showModal",
      value: function (e) {
        var t = this;
        this.builderApi.showModal({
          fullScreen: !0,
          content: e,
          closeButton: e.querySelector(".kv-ee-feature-modal-close-button"),
          onClose: this.model.promoCode ? function () {
            t.nextSectionElement.parentElement.insertBefore(e, t.nextSectionElement), e.classList.remove("kv-ee-popover-mode")
          } : null
        }), this.mouseLeaveListener && document.body.removeEventListener("mouseleave", this.mouseLeaveListener), this.localStorageHelper.supportsLocalStorage && !this.isTestMode && window.localStorage.setItem(this.getUniqueId(), !0)
      }
    }, {
      key: "initializeForSection",
      value: function (e, t) {
        var o, i = this;
        this.inPopoverMode && (o = e.domElement.parentElement.parentElement, this.nextSectionElement = o.nextElementSibling, this.hasShownPopover() ? this.hasShownPopover() && t.promoCode ? this.useLocalStorage && window.localStorage.getItem("showpromo") ? this.view.features.subscription.formCore.showSuccesMessage(o) : o.style.display = "none" : this.hasShownPopover() && (o.style.display = "none") : (o.classList.add("kv-ee-popover-mode"), "leaveSite" === t.popoverDisplay ? setTimeout(function () {
          i.mouseLeaveListener = function () {
            return i.showModal(o)
          }, i.listener = document.body.addEventListener("mouseleave", i.mouseLeaveListener)
        }, 3e3) : (o.style.display = "none", t = this.getDisplayTime(t), setTimeout(function () {
          i.showModal(o), o.style.display = "flex"
        }, t))))
      }
    }, {
      key: "updateProperty",
      value: function (e, t, o) {
        return void 0 === o || (this.setTooltip(), !1)
      }
    }, {
      key: "getRenderModel",
      value: function () {}
    }, {
      key: "afterRender",
      value: function () {}
    }]) && i(n.prototype, s), l && i(n, l), u);

    function u(e, t) {
      var o = this;
      (function (e) {
        if (!(e instanceof u)) throw new TypeError("Cannot call a class as a function")
      })(this), r(this, "getUniqueId", function () {
        return o.builderApi.getPageUri() + "-" + o.view.id
      }), r(this, "hasShownPopover", function () {
        return !!o.useLocalStorage && window.localStorage.getItem(o.getUniqueId())
      }), this.builderApi = e, this.model = e.controller.model, this.editMode = !!e.editor, this.viewerMode = !this.editMode, this.view = t.view, this.isTestMode = window.self !== window.top || !!e.editor, this.viewerMode && this.model.showPopover && (this.inPopoverMode = !0), this.editorContext = e.controller.editorContext, this.editMode && this.setTooltip(), this.localStorageHelper = this.builderApi.localStorageHelper, this.useLocalStorage = this.localStorageHelper.supportsLocalStorage && !this.isTestMode
    }
    window.__features = window.__features || {}, window.__features.popover = a
  }, {}]
}, {}, [1]);;
! function n(r, a, i) {
  function c(t, e) {
    if (!a[t]) {
      if (!r[t]) {
        var o = "function" == typeof require && require;
        if (!e && o) return o(t, !0);
        if (s) return s(t, !0);
        throw (o = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", o
      }
      o = a[t] = {
        exports: {}
      }, r[t][0].call(o.exports, function (e) {
        return c(r[t][1][e] || e)
      }, o, o.exports, n, r, a, i)
    }
    return a[t].exports
  }
  for (var s = "function" == typeof require && require, e = 0; e < i.length; e++) c(i[e]);
  return c
}({
  1: [function (e, t, o) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = {
      country: "United States",
      state: "MA",
      city: "Burlington",
      street: "10 Corporate Drive",
      zip: "01803",
      isDefault: !(o.default = void 0),
      coordinate: {
        lat: 42.49587,
        lng: -71.19342
      }
    };
    o.default = n
  }, {}],
  2: [function (e, t, o) {
    "use strict";
    var n, P = (n = e("./default-address")) && n.__esModule ? n : {
        default: n
      },
      r = e("./secondary-adress-unit-types");

    function a(t, e) {
      var o, n = Object.keys(t);
      return Object.getOwnPropertySymbols && (o = Object.getOwnPropertySymbols(t), e && (o = o.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      })), n.push.apply(n, o)), n
    }

    function w(n) {
      for (var r, e = 1; e < arguments.length; e++) r = null == arguments[e] ? {} : arguments[e], e % 2 ? a(Object(r), !0).forEach(function (e) {
        var t, o;
        t = n, e = r[o = e], o in t ? Object.defineProperty(t, o, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[o] = e
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function (e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      });
      return n
    }
    window.__features = window.__features || {}, window.__features.googlemaps = function (u, f) {
      function m() {
        return !1 !== f.model.isInteractiveMap
      }

      function y(e) {
        if (!e) return null;
        var t = (t = (w({}, e).street || "").toLowerCase()).split("#")[0];
        return Object.keys(r.RANGE_ABBREVIATION_UNIT_TYPES).forEach(function (e) {
          t = t.replace(" ".concat(e.toLowerCase(), " "), r.RANGE_ABBREVIATION_UNIT_TYPES[e])
        }), Object.keys(r.ABBREVIATION_UNIT_TYPES).forEach(function (e) {
          t = t.replace(new RegExp("(".concat(e.toLowerCase(), ")+(.*[0-9])")), r.RANGE_ABBREVIATION_UNIT_TYPES[e])
        }), w(w({}, e), {}, {
          street: t
        })
      }

      function g(c) {
        return new Promise(function (o, n) {
          var e, t, r, a, i;
          c.coordinate ? o(c.coordinate) : (t = y(e = c), r = t.street, a = void 0 === r ? "" : r, i = t.city, e = void 0 === i ? "" : i, r = t.zip, i = void 0 === r ? "" : r, r = void 0 === (r = t.state) ? "" : r, t = void 0 === (t = t.country) ? "" : t, t = "".concat(a, "\n").concat(e, " ").concat(i, " ").concat(r, "\n").concat(t), (new s.Geocoder).geocode({
            address: t
          }, function (e, t) {
            t === s.GeocoderStatus.OK ? (e = e[0].geometry.location.toJSON(), o(e)) : n(t)
          }))
        })
      }
      var O = !u.editor,
        e = f.view.controller.parentController,
        v = "poi" === e.model.category || e.model.locations,
        e = u.storage.siteController.model.apiKeys,
        e = e && e.googleMapsApiKey && O ? e.googleMapsApiKey : "AIzaSyB9h1UbkBdHO94Lkl-3vCMCpdIDeIKP_nA",
        E = "https://maps.googleapis.com/maps/api/staticmap?key=".concat(e),
        s = {},
        T = -1;
      return {
        afterRender: function (e, t, o) {
          var n, r, i, a, c, s, l, d, p;
          m() && (e.hasOwnProperty("data") || (e.data = {}), v && !o.locations && (o.locations = [P.default]), a = null !== t.closest(".kv-ee-left-section-panel"), n = t.querySelector('*[data-type="googlemaps"]'), e.data.minZoomLevel = null, !a && v && (c = window._site && window._site.partnerId || 0, r = "https://components.mywebsitebuilder.com/extern/maps-app/poi-express".concat(100 <= c ? "-" + c : "", ".html"), i = o._sectionId + "_" + Date.now(), n.onload = function () {
            var r, a;
            r = e, a = o.locations, new Promise(function (t, o) {
              var n = JSON.stringify(a),
                e = r.data.hasOwnProperty("locations") ? r.data.locations : "";
              n === e && r.data.hasOwnProperty("results") ? t(r.data.results) : Promise.all(a.map(g)).then(function (e) {
                t(e), r.data.results = e, r.data.locations = n
              }).catch(function (e) {
                o(e)
              })
            }).then(function (e) {
              e && n.contentWindow.postMessage(JSON.stringify({
                mapData: {
                  locations: o.locations,
                  zoomLevel: o.zoomLevel || 14,
                  isRuntimeSite: O,
                  mapType: o.mapType,
                  grayscale: o.grayscale,
                  zoomControl: o.zoomControl,
                  id: i
                }
              }), "*")
            }).catch(function (e) {
              console.error("GoogleMapsError", e)
            })
          }, window.addEventListener("message", function (e) {
            try {
              !r.includes(e.origin) || (o = JSON.parse(e.data)).id && o.id === i && o.zoomLevel && (20 < (t = o.zoomLevel) && f.view.domElement ? (o = f.view.domElement.querySelect("iframe")) && o.contentWindow.postMessage(JSON.stringify({
                settings: {
                  property: "zoomLevel",
                  value: 20
                }
              }), "*") : (!!f.view.domElement && f.view.domElement.closest("section").classList.contains("kv-selected") && T !== t && u.editor && u.editor.storeModelProperty("zoomLevel", t), T = t))
            } catch (e) {
              console.error(e)
            }
            var t, o
          }), n.src = r), f.isThumbnail ? (d = (l = {
            element: n
          }).element, p = "".concat(E, "&zoom=15&size=640x640&scale=2&center=").concat(P.default.coordinate.lat, ",").concat(P.default.coordinate.lng), (l = document.createElement("div")).classList.add("kv-ee-maps-preview-image"), l.style = "background-image:url('".concat(p, "');width:100%;height:100%;background-size:cover;background-position:center;"), d.replaceWith(l)) : o.hasOwnProperty("locations") && 0 < o.locations.length || (t = w({}, P.default), v || (s = function (e) {
            var t = e.globalLocationId,
              e = e.global;
            if (t && e.locations) return e.locations[t];
            if (e && e.address && 0 < Object.keys(e.address).length) return e;
            if ((null == e || !e.globalLocationId) && e.locations) return e.locations[1];
            if (null != e && e.globalLocationId && e.locations) {
              t = e.locations[e.globalLocationId];
              return t && t.address || e.locations[1]
            }
          }(o)) && s.address && 0 < Object.keys(s.address).length && (t = s.address), a = n, c = o, d = y(p = t), l = d.street, s = void 0 === l ? "" : l, t = d.city, p = void 0 === t ? "" : t, l = d.zip, t = void 0 === l ? "" : l, l = void 0 === (l = d.state) ? "" : l, d = d.country, p = (l = (l = [s, t, l, p, void 0 === d ? "" : d].filter(Boolean).join(",")) || "".concat(P.default.street, " ").concat(P.default.city, " ").concat(P.default.state, " ").concat(P.default.country)).replace(/\s/g, "+"), d = (d = c.mapTypeEmbed || c.mapType) && "roadmap" !== d ? "satellite" : "roadmap", c = c.zoomLevel || 14, c = "https://components.mywebsitebuilder.com/extern/maps-app/embed-place-express.html?q=".concat(p, "&zoom=").concat(c, "&mapType=").concat(d, "&center=none"), (d = document.createElement("iframe")).src = c, d.style = "width: 100%; height: 100%; border: none;", d.ariaLabel = "Google Maps - " + l, d.title = "Google Maps - " + l, a.replaceWith(d)))
        },
        updateProperty: function (e, t, o) {
          var n = m();
          if (null == o || !n) return !1;
          if (v) {
            e = e.element.querySelector('*[data-type="googlemaps"]');
            return !!["zoomLevel", "mapType", "grayscale", "zoomControl"].includes(t) && (e.contentWindow.postMessage(JSON.stringify({
              settings: {
                property: t,
                value: o
              }
            }), "*"), !0)
          }
          return !1
        }
      }
    }
  }, {
    "./default-address": 1,
    "./secondary-adress-unit-types": 3
  }],
  3: [function (e, t, o) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.RANGE_ABBREVIATION_UNIT_TYPES = o.ABBREVIATION_UNIT_TYPES = void 0;
    o.ABBREVIATION_UNIT_TYPES = {
      FRNT: "Front",
      LOWR: "Lower",
      REAR: "Rear",
      SIDE: "Side",
      UPPR: "Upper"
    };
    o.RANGE_ABBREVIATION_UNIT_TYPES = {
      APT: "Apartment",
      APART: "Apartment",
      BSMT: "Basement",
      BLDG: "Building",
      DEPT: "Department",
      DEPARTMENT: "Department",
      DEP: "Department",
      DEPART: "Department",
      DEPARTM: "Department",
      DEPARTMNT: "Department",
      DPT: "Department",
      FL: "Floor",
      FLR: "Floor",
      HNGR: "Hanger",
      KEY: "Key",
      KY: "Key",
      LOT: "Lot",
      PIER: "Pier",
      RM: "Room",
      SLIP: "Slip",
      SPC: "Space",
      STE: "Suite",
      SPACE: "Space",
      SP: "Space",
      STOP: "Stop",
      TRLR: "Trailer",
      TRLRS: "Trailer",
      UNIT: "Unit",
      OFC: "Office",
      OFFICE: "Office",
      OFCE: "Office",
      OFF: "Office",
      OFFC: "Office",
      LBBY: "Lobby",
      PH: "Penthouse"
    }
  }, {}]
}, {}, [2]);;
! function a(n, o, i) {
  function l(t, e) {
    if (!o[t]) {
      if (!n[t]) {
        var r = "function" == typeof require && require;
        if (!e && r) return r(t, !0);
        if (s) return s(t, !0);
        throw (r = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", r
      }
      r = o[t] = {
        exports: {}
      }, n[t][0].call(r.exports, function (e) {
        return l(n[t][1][e] || e)
      }, r, r.exports, a, n, o, i)
    }
    return o[t].exports
  }
  for (var s = "function" == typeof require && require, e = 0; e < i.length; e++) l(i[e]);
  return l
}({
  1: [function (e, t, r) {
    "use strict";
    var a, c = (a = e("./styles/grayScale")) && a.__esModule ? a : {
      default: a
    };

    function o(t, e) {
      var r, a = Object.keys(t);
      return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      })), a.push.apply(a, r)), a
    }

    function i(a) {
      for (var n, e = 1; e < arguments.length; e++) n = null == arguments[e] ? {} : arguments[e], e % 2 ? o(Object(n), !0).forEach(function (e) {
        var t, r;
        t = a, e = n[r = e], r in t ? Object.defineProperty(t, r, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[r] = e
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function (e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(n, e))
      });
      return a
    }
    window.__features = window.__features || {}, window.__features["googlemaps-static"] = function (a, n) {
      function o(e, t, r, a) {
        function n(e, t) {
          l += "&".concat(e, "=").concat(encodeURIComponent(t))
        }

        function o(e, t) {
          return "".concat(e, ",").concat(t)
        }
        var i = e || [];
        "string" == typeof i && (i = JSON.parse(i));
        var l = "https://maps.googleapis.com/maps/api/staticmap?size=".concat(640, "x").concat(640, "&scale=").concat(2),
          s = i.map(function (e) {
            return e.coordinate.lat
          }),
          e = (Math.min.apply(null, s) + Math.max.apply(null, s)) / 2,
          s = i.map(function (e) {
            return e.coordinate.lng
          });
        return n("center", o(e, (Math.min.apply(null, s) + Math.max.apply(null, s)) / 2)), n("zoom", t || 14), n("maptype", r || "roadmap"), a && n("style", JSON.stringify(c.default)), i.forEach(function (e) {
          var t = "default_green" === e.marker ? "green" : "red";
          n("markers", "markers=color:".concat(t, "|label:|").concat(o(e.coordinate.lat, e.coordinate.lng))), n("key", p)
        }), l
      }
      var e = a.storage.siteController.model.apiKeys,
        p = e && e.googleMapsApiKey ? e.googleMapsApiKey : "AIzaSyB9h1UbkBdHO94Lkl-3vCMCpdIDeIKP_nA";
      return {
        afterRender: function (e, t, r) {
          !1 === n.model.isInteractiveMap && (!a.editor || n.isThumbnail || a.editor.storeModelProperty("mapUrl", r.locations ? o(r.locations, r.zoomLevel, r.mapType, r.grayscale) : ""))
        },
        getRenderModel: function (e) {
          if (e && e.locations) {
            var t = o(e.locations, e.zoom, e.mapTypeId);
            return i(i({}, e), {}, {
              mapUrl: t
            })
          }
          return e
        }
      }
    }
  }, {
    "./styles/grayScale": 2
  }],
  2: [function (e, t, r) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = void 0;
    var a = [{
      featureType: "administrative",
      elementTypeelementType: "all",
      stylersstylers: [{
        saturation: "-100"
      }]
    }, {
      featureType: "administrative.province",
      elementType: "all",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "landscape",
      elementType: "all",
      stylers: [{
        saturation: -100
      }, {
        lightness: 65
      }, {
        visibility: "on"
      }]
    }, {
      featureType: "poi",
      elementType: "all",
      stylers: [{
        saturation: -100
      }, {
        lightness: "50"
      }, {
        visibility: "simplified"
      }]
    }, {
      featureType: "road",
      elementType: "all",
      stylers: [{
        saturation: "-100"
      }]
    }, {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{
        visibility: "simplified"
      }]
    }, {
      featureType: "road.arterial",
      elementType: "all",
      stylers: [{
        lightness: "30"
      }]
    }, {
      featureType: "road.local",
      elementType: "all",
      stylers: [{
        lightness: "40"
      }]
    }, {
      featureType: "transit",
      elementType: "all",
      stylers: [{
        saturation: -100
      }, {
        visibility: "simplified"
      }]
    }, {
      featureType: "water",
      elementType: "geometry",
      stylers: [{
        hue: "#ffff00"
      }, {
        lightness: -25
      }, {
        saturation: -97
      }]
    }, {
      featureType: "water",
      elementType: "labels",
      stylers: [{
        lightness: -25
      }, {
        saturation: -100
      }]
    }];
    r.default = a
  }, {}]
}, {}, [1]);;
window._featureSettings = {
  "legal": {
    "settings": {}
  },
  "translations": {
    "designer.siteSettings.legal.fields.termsOfService.termsOfServiceText.label": "Termos de Serviço",
    "designer.siteSettings.legal.fields.privacyPolicy.privacyPolicyText.label": "Política de Privacidade ",
    "editorTemplates.features.legal.sitemap": "Mapa do site",
    "editorTemplates.features.subscription.couldNotVerify": "Não foi possível verificar se você é um humano",
    "editorTemplates.features.subscription.sent": "Enviado!",
    "editorTemplates.features.subscription.sending": "Enviando...",
    "editorTemplates.features.subscription.sendingError": "Erro no envio",
    "editorTemplates.features.subscription.required": "Este campo é obrigatório.",
    "editorTemplates.features.subscription.invalidEmail": "Formato inválido",
    "editorTemplates.features.subscription.subscribe": "Ao marcar esta caixa e enviar suas informações, você está nos dando permissão de lhe enviar e-mails. Você pode cancelar a qualquer momento.",
    "editorTemplates.features.subscription.subscribeToggle": "Ao selecionar esta caixa e enviar seus dados, você nos autoriza a te enviar e-mails. Você pode cancelar a qualquer momento.",
    "editorTemplates.features.subscription.allContacts": "Todos os contatos",
    "editorTemplates.features.form.preview.button": "Não enviado!",
    "editorTemplates.features.form.preview.message": "Os formulários não podem ser enviados enquanto no modo de visualização",
    "editorTemplates.features.confirm.Accept": "Enviar mensagem",
    "editorTemplates.features.confirm.confirmCancel": "Voltar",
    "editorTemplates.features.confirm.confirmMessage": "Você está prestes a enviar uma mensagem com as seguintes informações:",
    "editorTemplates.features.confirm.confirmTitle": "Enviar esta mensagem?"
  },
  "navigation": {
    "settings": {}
  },
  "facebook-page-plugin": {
    "settings": {}
  },
  "form-core": {
    "settings": {}
  },
  "subscription": {
    "settings": {
      "dependingGlobalFeatures": ["form-core"]
    }
  },
  "popover": {
    "settings": {}
  },
  "googlemaps": {
    "settings": {}
  },
  "googlemaps-static": {
    "settings": {}
  }
};