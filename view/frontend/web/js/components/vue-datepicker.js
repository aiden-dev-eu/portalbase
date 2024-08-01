import { openBlock as h, createElementBlock as C, createElementVNode as ee, reactive as bt, computed as F, unref as i, ref as W, onMounted as Fe, nextTick as $t, watch as Dt, toRef as an, defineComponent as Ue, renderSlot as H, createCommentVNode as M, normalizeClass as ye, withKeys as oe, createBlock as ce, withModifiers as Ge, normalizeStyle as ut, normalizeProps as Ye, mergeProps as Te, Fragment as ie, createTextVNode as We, toDisplayString as Se, renderList as De, createVNode as qe, Transition as ft, withCtx as re, onBeforeUpdate as qn, onUnmounted as sn, withDirectives as St, vShow as Ct, createSlots as Be, isRef as nt, guardReactiveProps as Ze, resolveDynamicComponent as Pt, useSlots as un, getCurrentScope as Jn, onScopeDispose as Qn, Teleport as ea } from "vue";
import { isBefore as cn, isEqual as Yn, isAfter as dn, setHours as Vn, setMinutes as Ln, setSeconds as En, setMilliseconds as fn, parse as ln, isValid as Nt, isDate as ta, format as pt, getMonth as he, getDay as na, getYear as ge, getHours as Ke, getMinutes as xe, getSeconds as dt, parseISO as aa, startOfWeek as pn, endOfWeek as la, setMonth as Rt, setYear as rt, addDays as ct, set as Re, add as Fn, addMonths as at, subMonths as kt, getISOWeek as ra, differenceInCalendarDays as oa, eachDayOfInterval as kn, addYears as sa, subYears as ia, sub as ua } from "date-fns";
const ot = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, r] of n)
    a[t] = r;
  return a;
}, ca = {}, da = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, fa = /* @__PURE__ */ ee("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }, null, -1), va = /* @__PURE__ */ ee("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), ma = /* @__PURE__ */ ee("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), ya = /* @__PURE__ */ ee("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" }, null, -1), ha = [
  fa,
  va,
  ma,
  ya
];
function ga(e, n) {
  return h(), C("svg", da, ha);
}
const Et = /* @__PURE__ */ ot(ca, [["render", ga]]), pa = {}, ka = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, wa = /* @__PURE__ */ ee("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }, null, -1), ba = /* @__PURE__ */ ee("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), $a = [
  wa,
  ba
];
function Da(e, n) {
  return h(), C("svg", ka, $a);
}
const Ma = /* @__PURE__ */ ot(pa, [["render", Da]]), _a = {}, Aa = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Ta = /* @__PURE__ */ ee("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), Sa = [
  Ta
];
function Ca(e, n) {
  return h(), C("svg", Aa, Sa);
}
const wn = /* @__PURE__ */ ot(_a, [["render", Ca]]), Pa = {}, Na = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Ra = /* @__PURE__ */ ee("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" }, null, -1), Ia = [
  Ra
];
function Oa(e, n) {
  return h(), C("svg", Na, Ia);
}
const bn = /* @__PURE__ */ ot(Pa, [["render", Oa]]), Ba = {}, Ya = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Va = /* @__PURE__ */ ee("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }, null, -1), La = /* @__PURE__ */ ee("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), Ea = [
  Va,
  La
];
function Fa(e, n) {
  return h(), C("svg", Ya, Ea);
}
const Un = /* @__PURE__ */ ot(Ba, [["render", Fa]]), Ua = {}, Ha = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Wa = /* @__PURE__ */ ee("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), za = [
  Wa
];
function ja(e, n) {
  return h(), C("svg", Ha, za);
}
const Hn = /* @__PURE__ */ ot(Ua, [["render", ja]]), Ka = {}, xa = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Ga = /* @__PURE__ */ ee("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), Za = [
  Ga
];
function Xa(e, n) {
  return h(), C("svg", xa, Za);
}
const Wn = /* @__PURE__ */ ot(Ka, [["render", Xa]]), $n = (e, n) => {
  const a = ln(e, n.slice(0, e.length), new Date());
  return Nt(a) && ta(a) ? a : null;
}, qa = (e, n) => {
  if (typeof n == "string")
    return $n(e, n);
  if (Array.isArray(n)) {
    let a = null;
    for (const t of n)
      if (a = $n(e, t), a)
        break;
    return a;
  }
  return typeof n == "function" ? n(e) : null;
}, w = (e) => e ? new Date(e) : new Date(), Ja = (e, n) => {
  if (n) {
    const t = (e.getMonth() + 1).toString().padStart(2, "0"), r = e.getDate().toString().padStart(2, "0"), d = e.getHours().toString().padStart(2, "0"), g = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${t}-${r}T${d}:${g}:00.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, ze = (e) => {
  let n = w(JSON.parse(JSON.stringify(e)));
  return n = Vn(n, 0), n = Ln(n, 0), n = En(n, 0), n = fn(n, 0), n;
}, Le = (e, n, a, t) => {
  let r = e ? w(e) : w();
  return (n || n === 0) && (r = Vn(r, +n)), (a || a === 0) && (r = Ln(r, +a)), (t || t === 0) && (r = En(r, +t)), fn(r, 0);
}, Pe = (e, n) => !e || !n ? !1 : cn(ze(e), ze(n)), pe = (e, n) => !e || !n ? !1 : Yn(ze(e), ze(n)), Oe = (e, n) => !e || !n ? !1 : dn(ze(e), ze(n)), zn = (e, n, a) => e && e[0] && e[1] ? Oe(a, e[0]) && Pe(a, e[1]) : e && e[0] && n ? Oe(a, e[0]) && Pe(a, n) || Pe(a, e[0]) && Oe(a, n) : !1, gt = bt({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), jn = () => {
  const e = (t) => {
    gt.menuFocused = t;
  }, n = (t) => {
    gt.shiftKeyInMenu !== t && (gt.shiftKeyInMenu = t);
  };
  return {
    control: F(() => ({ shiftKeyInMenu: gt.shiftKeyInMenu, menuFocused: gt.menuFocused })),
    setMenuFocused: e,
    setShiftKey: n
  };
};
function vn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ot = {}, Qa = {
  get exports() {
    return Ot;
  },
  set exports(e) {
    Ot = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    if (t === null || t === !0 || t === !1)
      return NaN;
    var r = Number(t);
    return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
  }
  e.exports = n.default;
})(Qa, Ot);
const el = /* @__PURE__ */ vn(Ot);
var Bt = {}, tl = {
  get exports() {
    return Bt;
  },
  set exports(e) {
    Bt = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    var r = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return r.setUTCFullYear(t.getFullYear()), t.getTime() - r.getTime();
  }
  e.exports = n.default;
})(tl, Bt);
const Dn = /* @__PURE__ */ vn(Bt);
function nl(e, n) {
  var a = ol(n);
  return a.formatToParts ? ll(a, e) : rl(a, e);
}
var al = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function ll(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], r = 0; r < a.length; r++) {
      var d = al[a[r].type];
      d >= 0 && (t[d] = parseInt(a[r].value, 10));
    }
    return t;
  } catch (g) {
    if (g instanceof RangeError)
      return [NaN];
    throw g;
  }
}
function rl(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var xt = {};
function ol(e) {
  if (!xt[e]) {
    var n = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date("2014-06-25T04:00:00.123Z")), a = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    xt[e] = a ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return xt[e];
}
function mn(e, n, a, t, r, d, g) {
  var $ = new Date(0);
  return $.setUTCFullYear(e, n, a), $.setUTCHours(t, r, d, g), $;
}
var Mn = 36e5, sl = 6e4, Gt = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function yn(e, n, a) {
  var t, r;
  if (e === "" || (t = Gt.timezoneZ.exec(e), t))
    return 0;
  var d;
  if (t = Gt.timezoneHH.exec(e), t)
    return d = parseInt(t[1], 10), _n(d) ? -(d * Mn) : NaN;
  if (t = Gt.timezoneHHMM.exec(e), t) {
    d = parseInt(t[1], 10);
    var g = parseInt(t[2], 10);
    return _n(d, g) ? (r = Math.abs(d) * Mn + g * sl, d > 0 ? -r : r) : NaN;
  }
  if (cl(e)) {
    n = new Date(n || Date.now());
    var $ = a ? n : il(n), B = rn($, e), R = a ? B : ul(n, B, e);
    return -R;
  }
  return NaN;
}
function il(e) {
  return mn(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function rn(e, n) {
  var a = nl(e, n), t = mn(
    a[0],
    a[1] - 1,
    a[2],
    a[3] % 24,
    a[4],
    a[5],
    0
  ).getTime(), r = e.getTime(), d = r % 1e3;
  return r -= d >= 0 ? d : 1e3 + d, t - r;
}
function ul(e, n, a) {
  var t = e.getTime(), r = t - n, d = rn(new Date(r), a);
  if (n === d)
    return n;
  r -= d - n;
  var g = rn(new Date(r), a);
  return d === g ? d : Math.max(d, g);
}
function _n(e, n) {
  return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59);
}
var An = {};
function cl(e) {
  if (An[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), An[e] = !0, !0;
  } catch {
    return !1;
  }
}
var Kn = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Zt = 36e5, Tn = 6e4, dl = 2, Ie = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    /^([+-]\d{3})$/,
    /^([+-]\d{4})$/
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    /^([+-]\d{5})/,
    /^([+-]\d{6})/
  ],
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  timeZone: Kn
};
function on(e, n) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return new Date(NaN);
  var a = n || {}, t = a.additionalDigits == null ? dl : el(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return new Date(NaN);
  var r = fl(e), d = vl(r.date, t), g = d.year, $ = d.restDateString, B = ml($, g);
  if (isNaN(B))
    return new Date(NaN);
  if (B) {
    var R = B.getTime(), U = 0, S;
    if (r.time && (U = yl(r.time), isNaN(U)))
      return new Date(NaN);
    if (r.timeZone || a.timeZone) {
      if (S = yn(r.timeZone || a.timeZone, new Date(R + U)), isNaN(S))
        return new Date(NaN);
    } else
      S = Dn(new Date(R + U)), S = Dn(new Date(R + U + S));
    return new Date(R + U + S);
  } else
    return new Date(NaN);
}
function fl(e) {
  var n = {}, a = Ie.dateTimePattern.exec(e), t;
  if (a ? (n.date = a[1], t = a[3]) : (a = Ie.datePattern.exec(e), a ? (n.date = a[1], t = a[2]) : (n.date = null, t = e)), t) {
    var r = Ie.timeZone.exec(t);
    r ? (n.time = t.replace(r[1], ""), n.timeZone = r[1].trim()) : n.time = t;
  }
  return n;
}
function vl(e, n) {
  var a = Ie.YYY[n], t = Ie.YYYYY[n], r;
  if (r = Ie.YYYY.exec(e) || t.exec(e), r) {
    var d = r[1];
    return {
      year: parseInt(d, 10),
      restDateString: e.slice(d.length)
    };
  }
  if (r = Ie.YY.exec(e) || a.exec(e), r) {
    var g = r[1];
    return {
      year: parseInt(g, 10) * 100,
      restDateString: e.slice(g.length)
    };
  }
  return {
    year: null
  };
}
function ml(e, n) {
  if (n === null)
    return null;
  var a, t, r, d;
  if (e.length === 0)
    return t = new Date(0), t.setUTCFullYear(n), t;
  if (a = Ie.MM.exec(e), a)
    return t = new Date(0), r = parseInt(a[1], 10) - 1, Cn(n, r) ? (t.setUTCFullYear(n, r), t) : new Date(NaN);
  if (a = Ie.DDD.exec(e), a) {
    t = new Date(0);
    var g = parseInt(a[1], 10);
    return pl(n, g) ? (t.setUTCFullYear(n, 0, g), t) : new Date(NaN);
  }
  if (a = Ie.MMDD.exec(e), a) {
    t = new Date(0), r = parseInt(a[1], 10) - 1;
    var $ = parseInt(a[2], 10);
    return Cn(n, r, $) ? (t.setUTCFullYear(n, r, $), t) : new Date(NaN);
  }
  if (a = Ie.Www.exec(e), a)
    return d = parseInt(a[1], 10) - 1, Pn(n, d) ? Sn(n, d) : new Date(NaN);
  if (a = Ie.WwwD.exec(e), a) {
    d = parseInt(a[1], 10) - 1;
    var B = parseInt(a[2], 10) - 1;
    return Pn(n, d, B) ? Sn(n, d, B) : new Date(NaN);
  }
  return null;
}
function yl(e) {
  var n, a, t;
  if (n = Ie.HH.exec(e), n)
    return a = parseFloat(n[1].replace(",", ".")), Xt(a) ? a % 24 * Zt : NaN;
  if (n = Ie.HHMM.exec(e), n)
    return a = parseInt(n[1], 10), t = parseFloat(n[2].replace(",", ".")), Xt(a, t) ? a % 24 * Zt + t * Tn : NaN;
  if (n = Ie.HHMMSS.exec(e), n) {
    a = parseInt(n[1], 10), t = parseInt(n[2], 10);
    var r = parseFloat(n[3].replace(",", "."));
    return Xt(a, t, r) ? a % 24 * Zt + t * Tn + r * 1e3 : NaN;
  }
  return null;
}
function Sn(e, n, a) {
  n = n || 0, a = a || 0;
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var r = t.getUTCDay() || 7, d = n * 7 + a + 1 - r;
  return t.setUTCDate(t.getUTCDate() + d), t;
}
var hl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], gl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function xn(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Cn(e, n, a) {
  if (n < 0 || n > 11)
    return !1;
  if (a != null) {
    if (a < 1)
      return !1;
    var t = xn(e);
    if (t && a > gl[n] || !t && a > hl[n])
      return !1;
  }
  return !0;
}
function pl(e, n) {
  if (n < 1)
    return !1;
  var a = xn(e);
  return !(a && n > 366 || !a && n > 365);
}
function Pn(e, n, a) {
  return !(n < 0 || n > 52 || a != null && (a < 0 || a > 6));
}
function Xt(e, n, a) {
  return !(e != null && (e < 0 || e >= 25) || n != null && (n < 0 || n >= 60) || a != null && (a < 0 || a >= 60));
}
var Yt = {}, kl = {
  get exports() {
    return Yt;
  },
  set exports(e) {
    Yt = e;
  }
}, Vt = {}, wl = {
  get exports() {
    return Vt;
  },
  set exports(e) {
    Vt = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t, r) {
    if (t == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var d in r)
      Object.prototype.hasOwnProperty.call(r, d) && (t[d] = r[d]);
    return t;
  }
  e.exports = n.default;
})(wl, Vt);
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = r;
  var a = t(Vt);
  function t(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function r(d) {
    return (0, a.default)({}, d);
  }
  e.exports = n.default;
})(kl, Yt);
const bl = /* @__PURE__ */ vn(Yt);
function $l(e, n, a) {
  var t = on(e, a), r = yn(n, t, !0), d = new Date(t.getTime() - r), g = new Date(0);
  return g.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), g.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()), g;
}
function Dl(e, n, a) {
  if (typeof e == "string" && !e.match(Kn)) {
    var t = bl(a);
    return t.timeZone = n, on(e, t);
  }
  var r = on(e, a), d = mn(
    r.getFullYear(),
    r.getMonth(),
    r.getDate(),
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ).getTime(), g = yn(n, new Date(d));
  return new Date(d + g);
}
const Ml = (e, n = 3) => {
  const a = [];
  for (let t = 0; t < e.length; t += n)
    a.push([e[t], e[t + 1], e[t + 2]]);
  return a;
}, _l = (e, n) => {
  const a = [1, 2, 3, 4, 5, 6, 7].map((d) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(new Date(`2017-01-0${d}T00:00:00+00:00`)).slice(0, 2)), t = a.slice(0, n), r = a.slice(n + 1, a.length);
  return [a[n]].concat(...r).concat(...t);
}, Al = (e) => {
  const n = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    n.push({ value: +a, text: `${a}` });
  return n;
}, Tl = (e, n) => {
  const a = new Intl.DateTimeFormat(e, { month: n, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const d = r < 10 ? `0${r}` : r;
    return new Date(`2017-${d}-01T00:00:00+00:00`);
  }).map((r, d) => ({
    text: a.format(r),
    value: d
  }));
}, Sl = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Ce = (e) => {
  const n = i(e);
  return (n == null ? void 0 : n.$el) ?? n;
}, Cl = (e) => Object.assign({ type: "dot" }, e), Gn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Lt = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Me = (e) => e, Nn = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Rn = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), Pl = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (n) => `Increment ${n}`,
    decrementValue: (n) => `Decrement ${n}`,
    openTpOverlay: (n) => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e
), Nl = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, Rl = (e, n, a) => e || (typeof a == "string" ? a : n), Il = (e) => typeof e == "boolean" ? e ? Rn({}) : !1 : Rn(e), Ol = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), Bl = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), Ve = (e) => {
  const n = () => {
    if (e.partialRange)
      return null;
    throw new Error(Lt.prop("partial-range"));
  }, a = F(() => ({
    ariaLabels: Pl(e.ariaLabels),
    textInputOptions: Object.assign(Ol(), e.textInputOptions),
    multiCalendars: Nl(e.multiCalendars),
    previewFormat: Rl(e.previewFormat, e.format, d()),
    filters: Bl(e.filters),
    transitions: Il(e.transitions),
    startTime: u()
  })), t = (l) => {
    if (e.range)
      return l();
    throw new Error(Lt.prop("range"));
  }, r = () => {
    const l = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${l}` : `hh:mm${l} aa`;
  }, d = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? r() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${r()}` : "MM/dd/yyyy", g = (l, v) => {
    if (typeof e.format == "function")
      return e.format(l);
    const k = v || d(), N = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(l) ? `${pt(l[0], k, N)} ${e.modelAuto && !l[1] ? "" : a.value.textInputOptions.rangeSeparator || "-"} ${l[1] ? pt(l[1], k, N) : ""}` : pt(l, k, N);
  }, $ = (l) => e.timezone ? $l(l, e.timezone) : l, B = (l) => e.timezone ? Dl(l, e.timezone) : l, R = F(() => (l) => {
    var v;
    return (v = e.hideNavigation) == null ? void 0 : v.includes(l);
  }), U = (l) => {
    const v = e.maxDate ? Oe($(l), $(w(e.maxDate))) : !1, k = e.minDate ? Pe($(l), $(w(e.minDate))) : !1, N = Y(l, e.disabledDates), fe = a.value.filters.months.map(($e) => +$e).includes(he(l)), y = e.disabledWeekDays.length ? e.disabledWeekDays.some(($e) => +$e === na(l)) : !1, c = e.allowedDates.length ? !e.allowedDates.some(($e) => pe($(w($e)), $(l))) : !1, I = ge(l), ve = I < +e.yearRange[0] || I > +e.yearRange[1];
    return !(v || k || N || fe || ve || y || c);
  }, S = (l) => {
    const v = {
      hours: Ke(w()),
      minutes: xe(w()),
      seconds: dt(w())
    };
    return Object.assign(v, l);
  }, u = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [S(e.startTime[0]), S(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? S(e.startTime) : null, T = (l) => !U(l), z = (l) => Array.isArray(l) ? Nt(l[0]) && (l[1] ? Nt(l[1]) : !0) : l ? Nt(l) : !1, V = (l) => l instanceof Date ? l : aa(l), J = (l) => {
    const v = pn($(l), { weekStartsOn: +e.weekStart }), k = la($(l), { weekStartsOn: +e.weekStart });
    return [v, k];
  }, Y = (l, v) => Array.isArray(v) ? v.some((k) => pe($(w(k)), $(l))) : v(l), L = (l, v, k) => {
    let N = l ? w(l) : w();
    return (v || v === 0) && (N = Rt(N, v)), k && (N = rt(N, k)), N;
  }, P = (l) => Re(w(), { hours: Ke(l), minutes: xe(l), seconds: dt(l) }), x = (l) => Re(w(), {
    hours: +l.hours || 0,
    minutes: +l.minutes || 0,
    seconds: +l.seconds || 0
  }), Q = (l, v, k, N) => {
    if (!l)
      return !0;
    if (N) {
      const ue = k === "max" ? cn(l, v) : dn(l, v), fe = { seconds: 0, milliseconds: 0 };
      return ue || Yn(Re(l, fe), Re(v, fe));
    }
    return k === "max" ? l.getTime() <= v.getTime() : l.getTime() >= v.getTime();
  }, ae = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, f = (l) => Array.isArray(l) ? [l[0] ? P(l[0]) : null, l[1] ? P(l[1]) : null] : P(l), D = (l) => {
    const v = e.maxTime ? x(e.maxTime) : w(e.maxDate);
    return Array.isArray(l) ? Q(l[0], v, "max", !!e.maxDate) && Q(l[1], v, "max", !!e.maxDate) : Q(l, v, "max", !!e.maxDate);
  }, E = (l, v) => {
    const k = e.minTime ? x(e.minTime) : w(e.minDate);
    return Array.isArray(l) ? Q(l[0], k, "min", !!e.minDate) && Q(l[1], k, "min", !!e.minDate) && v : Q(l, k, "min", !!e.minDate) && v;
  }, G = (l) => {
    let v = !0;
    if (!l || ae())
      return !0;
    const k = !e.minDate && !e.maxDate ? f(l) : l;
    return (e.maxTime || e.maxDate) && (v = D(Me(k))), (e.minTime || e.minDate) && (v = E(Me(k), v)), v;
  }, O = (l, v) => {
    const k = w(JSON.parse(JSON.stringify(l))), N = [];
    for (let ue = 0; ue < 7; ue++) {
      const fe = ct(k, ue), y = he(fe) !== v;
      N.push({
        text: e.hideOffsetDates && y ? "" : fe.getDate(),
        value: fe,
        current: !y,
        classData: {}
      });
    }
    return N;
  }, X = (l, v) => {
    const k = [], N = w($(new Date(v, l))), ue = w($(new Date(v, l + 1, 0))), fe = pn(N, { weekStartsOn: e.weekStart }), y = (c) => {
      const I = O(c, l);
      if (k.push({ days: I }), !k[k.length - 1].days.some(
        (ve) => pe(ze(ve.value), ze(ue))
      )) {
        const ve = ct(c, 7);
        y(ve);
      }
    };
    if (y(fe), e.sixWeeks && k.length < 6) {
      const c = 6 - k.length;
      for (let I = 1; I <= c; I++) {
        const ve = k[k.length - 1], $e = ve.days[ve.days.length - 1], be = O(ct($e.value, 1), he(N));
        k.push({ days: be });
      }
    }
    return k;
  }, p = (l, v, k) => [Re(w(l), { date: 1 }), Re(w(), { month: v, year: k, date: 1 })], s = (l, v) => Pe(...p(e.minDate, l, v)) || pe(...p(e.minDate, l, v)), _ = (l, v) => Oe(...p(e.maxDate, l, v)) || pe(...p(e.maxDate, l, v)), A = (l, v, k) => {
    let N = !1;
    return e.maxDate && k && _(l, v) && (N = !0), e.minDate && !k && s(l, v) && (N = !0), N;
  };
  return {
    checkPartialRangeValue: n,
    checkRangeEnabled: t,
    getZonedDate: $,
    getZonedToUtc: B,
    formatDate: g,
    getDefaultPattern: d,
    validateDate: U,
    getDefaultStartTime: u,
    isDisabled: T,
    isValidDate: z,
    sanitizeDate: V,
    getWeekFromDate: J,
    matchDate: Y,
    setDateMonthOrYear: L,
    isValidTime: G,
    getCalendarDays: X,
    validateMonthYearInRange: (l, v, k, N) => {
      let ue = !1;
      return N ? e.minDate && e.maxDate ? ue = A(l, v, k) : (e.minDate && s(l, v) || e.maxDate && _(l, v)) && (ue = !0) : ue = !0, ue;
    },
    validateMaxDate: _,
    validateMinDate: s,
    defaults: a,
    hideNavigationButtons: R
  };
}, me = bt({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), qt = W(null), Tt = W(!1), Jt = W(!1), Qt = W(!1), en = W(!1), Ne = W(0), Ae = W(0), Je = () => {
  const e = F(() => Tt.value ? [...me.selectionGrid, me.actionRow].filter((Y) => Y.length) : Jt.value ? [
    ...me.timePicker[0],
    ...me.timePicker[1],
    en.value ? [] : [qt.value],
    me.actionRow
  ].filter((Y) => Y.length) : Qt.value ? [...me.monthPicker, me.actionRow] : [me.monthYear, ...me.calendar, me.time, me.actionRow].filter((Y) => Y.length)), n = (Y) => {
    Ne.value = Y ? Ne.value + 1 : Ne.value - 1;
    let L = null;
    e.value[Ae.value] && (L = e.value[Ae.value][Ne.value]), L || (Ne.value = Y ? Ne.value - 1 : Ne.value + 1);
  }, a = (Y) => {
    if (Ae.value === 0 && !Y || Ae.value === e.value.length && Y)
      return;
    Ae.value = Y ? Ae.value + 1 : Ae.value - 1, e.value[Ae.value] ? e.value[Ae.value] && !e.value[Ae.value][Ne.value] && Ne.value !== 0 && (Ne.value = e.value[Ae.value].length - 1) : Ae.value = Y ? Ae.value - 1 : Ae.value + 1;
  }, t = (Y) => {
    let L = null;
    e.value[Ae.value] && (L = e.value[Ae.value][Ne.value]), L ? L.focus({ preventScroll: !Tt.value }) : Ne.value = Y ? Ne.value - 1 : Ne.value + 1;
  }, r = () => {
    n(!0), t(!0);
  }, d = () => {
    n(!1), t(!1);
  }, g = () => {
    a(!1), t(!0);
  }, $ = () => {
    a(!0), t(!0);
  }, B = (Y, L) => {
    me[L] = Y;
  }, R = (Y, L) => {
    me[L] = Y;
  }, U = () => {
    Ne.value = 0, Ae.value = 0;
  };
  return {
    buildMatrix: B,
    buildMultiLevelMatrix: R,
    setTimePickerBackRef: (Y) => {
      qt.value = Y;
    },
    setSelectionGrid: (Y) => {
      Tt.value = Y, U(), Y || (me.selectionGrid = []);
    },
    setTimePicker: (Y, L = !1) => {
      Jt.value = Y, en.value = L, U(), Y || (me.timePicker[0] = [], me.timePicker[1] = []);
    },
    setTimePickerElements: (Y, L = 0) => {
      me.timePicker[L] = Y;
    },
    arrowRight: r,
    arrowLeft: d,
    arrowUp: g,
    arrowDown: $,
    clearArrowNav: () => {
      me.monthYear = [], me.calendar = [], me.time = [], me.actionRow = [], me.selectionGrid = [], me.timePicker[0] = [], me.timePicker[1] = [], Tt.value = !1, Jt.value = !1, en.value = !1, Qt.value = !1, U(), qt.value = null;
    },
    setMonthPicker: (Y) => {
      Qt.value = Y, U();
    },
    refSets: me
  };
}, In = (e) => Array.isArray(e), tt = (e) => Array.isArray(e), On = (e) => Array.isArray(e) && e.length === 2, Yl = (e, n, a, t, r) => {
  const {
    getDefaultStartTime: d,
    isDisabled: g,
    sanitizeDate: $,
    getWeekFromDate: B,
    setDateMonthOrYear: R,
    validateMonthYearInRange: U,
    defaults: S
  } = Ve(e), u = F({
    get: () => e.internalModelValue,
    set: (o) => {
      !e.readonly && !e.disabled && n("update:internal-model-value", o);
    }
  }), T = W([]), z = W([{ month: he(w()), year: ge(w()) }]), V = bt({
    hours: e.range ? [Ke(w()), Ke(w())] : Ke(w()),
    minutes: e.range ? [xe(w()), xe(w())] : xe(w()),
    seconds: e.range ? [0, 0] : 0
  }), J = F(
    () => (o) => z.value[o] ? z.value[o].month : 0
  ), Y = F(
    () => (o) => z.value[o] ? z.value[o].year : 0
  ), L = F(() => e.flow ? r.value === e.flow.length : !0), P = (o, b, j) => {
    z.value[o].month = b === null ? z.value[o].month : b, z.value[o].year = j === null ? z.value[o].year : j;
  }, x = (o, b) => {
    V[o] = b;
  };
  Fe(() => {
    u.value || (e.startDate && (P(0, he(w(e.startDate)), ge(w(e.startDate))), S.value.multiCalendars && mt(0)), S.value.startTime && _()), Q(!0);
  });
  const Q = (o = !1) => {
    if (u.value)
      return Array.isArray(u.value) ? G(o) : f(u.value);
    if (e.timePicker)
      return O();
    if (e.monthPicker && !e.range)
      return X();
    if (e.yearPicker && !e.range)
      return p();
    if (S.value.multiCalendars)
      return ae(w(), o);
  }, ae = (o, b = !1) => {
    if ((!S.value.multiCalendars || !e.multiStatic || b) && P(0, he(o), ge(o)), S.value.multiCalendars)
      for (let j = 1; j < S.value.multiCalendars; j++) {
        const ne = Re(w(), { month: J.value(j - 1), year: Y.value(j - 1) }), m = Fn(ne, { months: 1 });
        z.value[j] = { month: he(m), year: ge(m) };
      }
  }, f = (o) => {
    ae(o), x("hours", Ke(o)), x("minutes", xe(o)), x("seconds", dt(o));
  }, D = (o, b) => {
    ae(o[0], b);
    const j = (ne, m) => [
      ne(o[0]),
      o[1] ? ne(o[1]) : V[m][1]
    ];
    x("hours", j(Ke, "hours")), x("minutes", j(xe, "minutes")), x("seconds", j(dt, "seconds"));
  }, E = (o, b) => {
    if (e.range && !e.multiDates)
      return D(o, b);
    if (e.multiDates) {
      const j = o[o.length - 1];
      return f(j);
    }
  }, G = (o) => {
    const b = u.value;
    E(b, o), S.value.multiCalendars && e.multiCalendarsSolo && K();
  }, O = () => {
    if (_(), !e.range)
      u.value = Le(w(), V.hours, V.minutes, s());
    else {
      const o = V.hours, b = V.minutes;
      u.value = [
        Le(w(), o[0], b[0], s()),
        Le(w(), o[1], b[1], s(!1))
      ];
    }
  }, X = () => {
    u.value = R(w(), J.value(0), Y.value(0));
  }, p = () => {
    u.value = w();
  }, s = (o = !0) => e.enableSeconds ? Array.isArray(V.seconds) ? o ? V.seconds[0] : V.seconds[1] : V.seconds : 0, _ = () => {
    const o = d();
    if (o) {
      const b = Array.isArray(o), j = b ? [+o[0].hours, +o[1].hours] : +o.hours, ne = b ? [+o[0].minutes, +o[1].minutes] : +o.minutes, m = b ? [+o[0].seconds, +o[1].seconds] : +o.seconds;
      x("hours", j), x("minutes", ne), e.enableSeconds && x("seconds", m);
    }
  }, A = () => Array.isArray(u.value) && u.value.length ? u.value[u.value.length - 1] : null, K = () => {
    if (Array.isArray(u.value) && u.value.length === 2) {
      const o = w(
        w(u.value[1] ? u.value[1] : at(u.value[0], 1))
      ), [b, j] = [he(u.value[0]), ge(u.value[0])], [ne, m] = [he(u.value[1]), ge(u.value[1])];
      (b !== ne || b === ne && j !== m) && e.multiCalendarsSolo && P(1, he(o), ge(o));
    }
  }, l = (o) => {
    const b = at(o, 1);
    return { month: he(b), year: ge(b) };
  }, v = (o) => {
    const b = he(w(o)), j = ge(w(o));
    if (P(0, b, j), S.value.multiCalendars > 0)
      for (let ne = 1; ne < S.value.multiCalendars; ne++) {
        const m = l(
          Re(w(o), { year: J.value(ne - 1), month: Y.value(ne - 1) })
        );
        P(ne, m.month, m.year);
      }
  }, k = (o) => {
    if (u.value && Array.isArray(u.value))
      if (u.value.some((b) => pe(o, b))) {
        const b = u.value.filter((j) => !pe(j, o));
        u.value = b.length ? b : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > u.value.length || !e.multiDatesLimit) && u.value.push(o);
    else
      u.value = [o];
  }, N = (o, b) => {
    const j = Oe(o, b) ? b : o, ne = Oe(b, o) ? b : o;
    return kn({ start: j, end: ne });
  }, ue = (o) => {
    if (Array.isArray(u.value) && u.value[0]) {
      const b = oa(o, u.value[0]), j = N(u.value[0], o), ne = j.length === 1 ? 0 : j.filter((Z) => g(Z)).length, m = Math.abs(b) - ne;
      if (e.minRange && e.maxRange)
        return m >= +e.minRange && m <= +e.maxRange;
      if (e.minRange)
        return m >= +e.minRange;
      if (e.maxRange)
        return m <= +e.maxRange;
    }
    return !0;
  }, fe = (o) => Array.isArray(u.value) && u.value.length === 2 ? e.fixedStart && (Oe(o, u.value[0]) || pe(o, u.value[0])) ? [u.value[0], o] : e.fixedEnd && (Pe(o, u.value[1]) || pe(o, u.value[1])) ? [o, u.value[1]] : u.value : [], y = () => {
    e.autoApply && L.value && n("auto-apply");
  }, c = () => {
    e.autoApply && n("select-date");
  }, I = (o) => !kn({ start: o[0], end: o[1] }).some((j) => g(j)), ve = (o) => (u.value = B(w(o.value)), y()), $e = (o) => {
    const b = Le(w(o.value), V.hours, V.minutes, s());
    e.multiDates ? k(b) : u.value = b, a(), y();
  }, be = () => {
    T.value = u.value ? u.value.slice() : [], T.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (T.value = []);
  }, He = (o, b) => {
    const j = [w(o.value), ct(w(o.value), +e.autoRange)];
    I(j) && (b && v(o.value), T.value = j);
  }, Xe = (o) => {
    T.value = fe(w(o.value));
  }, te = (o) => e.noDisabledRange ? N(T.value[0], o).some((j) => g(j)) : !1, le = (o, b) => {
    if (be(), e.autoRange)
      return He(o, b);
    if (e.fixedStart || e.fixedEnd)
      return Xe(o);
    T.value[0] ? ue(w(o.value)) && !te(o.value) && (Pe(w(o.value), w(T.value[0])) ? T.value.unshift(w(o.value)) : T.value[1] = w(o.value)) : T.value[0] = w(o.value);
  }, ke = (o) => {
    T.value[o] = Le(
      T.value[o],
      V.hours[o],
      V.minutes[o],
      s(o !== 1)
    );
  }, de = () => {
    T.value.length && (T.value[0] && !T.value[1] ? ke(0) : (ke(0), ke(1), a()), u.value = T.value.slice(), T.value[0] && T.value[1] && e.autoApply && n("auto-apply"), T.value[0] && !T.value[1] && e.modelAuto && e.autoApply && n("auto-apply"));
  }, vt = (o, b = !1) => {
    if (!(g(o.value) || !o.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return ve(o);
      if (!e.range)
        return $e(o);
      tt(V.hours) && tt(V.minutes) && !e.multiDates && (le(o, b), de());
    }
  }, je = (o) => {
    const b = o.find((j) => j.current);
    return b ? ra(b.value) : "";
  }, mt = (o) => {
    for (let b = o - 1; b >= 0; b--) {
      const j = kt(Re(w(), { month: J.value(b + 1), year: Y.value(b + 1) }), 1);
      P(b, he(j), ge(j));
    }
    for (let b = o + 1; b <= S.value.multiCalendars - 1; b++) {
      const j = at(Re(w(), { month: J.value(b - 1), year: Y.value(b - 1) }), 1);
      P(b, he(j), ge(j));
    }
  }, et = (o) => R(w(), J.value(o), Y.value(o)), yt = (o) => Le(o, V.hours, V.minutes, s()), Ut = (o, b) => {
    const j = e.monthPicker ? J.value(o) !== b.month || !b.fromNav : Y.value(o) !== b.year;
    if (P(o, b.month, b.year), S.value.multiCalendars && !e.multiCalendarsSolo && mt(o), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (j) {
          let ne = u.value ? u.value.slice() : [];
          ne.length === 2 && ne[1] !== null && (ne = []), ne.length ? Pe(et(o), ne[0]) ? ne.unshift(et(o)) : ne[1] = et(o) : ne = [et(o)], u.value = ne;
        }
      } else
        u.value = et(o);
    n("update-month-year", { instance: o, month: b.month, year: b.year }), t(e.multiCalendarsSolo ? o : void 0);
  }, Ht = async (o = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await $t();
      const b = e.monthPicker ? o : !1;
      e.range ? n("auto-apply", b || !u.value || u.value.length === 1) : n("auto-apply", b);
    }
    a();
  }, Mt = (o, b) => {
    const j = Re(w(), { month: J.value(b), year: Y.value(b) }), ne = o < 0 ? at(j, 1) : kt(j, 1);
    U(he(ne), ge(ne), o < 0, e.preventMinMaxNavigation) && (P(b, he(ne), ge(ne)), S.value.multiCalendars && !e.multiCalendarsSolo && mt(b), t());
  }, ht = (o) => {
    In(o) && In(u.value) && tt(V.hours) && tt(V.minutes) ? (o[0] && u.value[0] && (u.value[0] = Le(o[0], V.hours[0], V.minutes[0], s())), o[1] && u.value[1] && (u.value[1] = Le(o[1], V.hours[1], V.minutes[1], s(!1)))) : e.multiDates && Array.isArray(u.value) ? u.value[u.value.length - 1] = yt(o) : !e.range && !On(o) && (u.value = yt(o)), n("time-update");
  }, Wt = (o, b = !0, j = !1) => {
    const ne = b ? o : V.hours, m = !b && !j ? o : V.minutes, Z = j ? o : V.seconds;
    if (e.range && On(u.value) && tt(ne) && tt(m) && tt(Z) && !e.disableTimeRangeValidation) {
      const we = (Ee) => Le(u.value[Ee], ne[Ee], m[Ee], Z[Ee]), _e = (Ee) => fn(u.value[Ee], 0);
      if (pe(u.value[0], u.value[1]) && (dn(we(0), _e(1)) || cn(we(1), _e(0))))
        return;
    }
    if (x("hours", ne), x("minutes", m), x("seconds", Z), u.value)
      if (e.multiDates) {
        const we = A();
        we && ht(we);
      } else
        ht(u.value);
    else
      e.timePicker && ht(e.range ? [w(), w()] : w());
    a();
  }, zt = (o, b) => {
    e.monthChangeOnScroll && Mt(e.monthChangeOnScroll !== "inverse" ? -o.deltaY : o.deltaY, b);
  }, jt = (o, b, j = !1) => {
    e.monthChangeOnArrows && e.vertical === j && _t(o, b);
  }, _t = (o, b) => {
    Mt(o === "right" ? -1 : 1, b);
  };
  return {
    time: V,
    month: J,
    year: Y,
    modelValue: u,
    calendars: z,
    monthYearSelect: Ht,
    isDisabled: g,
    updateTime: Wt,
    getWeekNum: je,
    selectDate: vt,
    updateMonthYear: Ut,
    handleScroll: zt,
    getMarker: (o) => e.markers.find((b) => pe($(o.value), $(b.date))),
    handleArrow: jt,
    handleSwipe: _t,
    selectCurrentDate: () => {
      e.range ? u.value && Array.isArray(u.value) && u.value[0] ? u.value = Pe(w(), u.value[0]) ? [w(), u.value[0]] : [u.value[0], w()] : u.value = [w()] : u.value = w(), c();
    },
    presetDateRange: (o, b) => {
      b || o.length && o.length <= 2 && e.range && (u.value = o.map((j) => w(j)), c());
    }
  };
}, Vl = (e, n, a) => {
  const t = W(), {
    getZonedToUtc: r,
    getZonedDate: d,
    formatDate: g,
    getDefaultPattern: $,
    checkRangeEnabled: B,
    checkPartialRangeValue: R,
    isValidDate: U,
    setDateMonthOrYear: S,
    defaults: u
  } = Ve(n), T = W("");
  Dt(t, () => {
    e("internal-model-change", t.value);
  });
  const z = (y) => {
    const c = y || w();
    return {
      hours: Ke(c),
      minutes: xe(c),
      seconds: n.enableSeconds ? dt(c) : 0
    };
  }, V = (y) => ({ month: he(y), year: ge(y) }), J = (y) => Array.isArray(y) ? B(() => [
    rt(w(), y[0]),
    y[1] ? rt(w(), y[1]) : R()
  ]) : rt(w(), +y), Y = (y) => Array.isArray(y) ? [
    Le(null, +y[0].hours, +y[0].minutes, y[0].seconds),
    Le(null, +y[1].hours, +y[1].minutes, y[1].seconds)
  ] : Le(null, y.hours, y.minutes, y == null ? void 0 : y.seconds), L = (y) => Array.isArray(y) ? B(() => [
    S(null, +y[0].month, +y[0].year),
    y[1] ? S(null, +y[1].month, +y[1].year) : R()
  ]) : S(null, +y.month, +y.year), P = (y) => {
    if (Array.isArray(y))
      return y.map((c) => K(c));
    throw new Error(Lt.dateArr("multi-dates"));
  }, x = (y) => {
    if (Array.isArray(y))
      return [w(y[0]), w(y[1])];
    throw new Error(Lt.dateArr("week-picker"));
  }, Q = (y) => n.modelAuto ? Array.isArray(y) ? [K(y[0]), K(y[1])] : n.autoApply ? [K(y)] : [K(y), null] : Array.isArray(y) ? B(() => [
    K(y[0]),
    y[1] ? K(y[1]) : R()
  ]) : K(y), ae = () => {
    Array.isArray(t.value) && n.range && t.value.length === 1 && t.value.push(R());
  }, f = () => {
    const y = t.value;
    return [
      l(y[0]),
      y[1] ? l(y[1]) : R()
    ];
  }, D = () => t.value[1] ? f() : l(Me(t.value[0])), E = () => (t.value || []).map((y) => l(y)), G = () => (ae(), n.modelAuto ? D() : n.multiDates ? E() : Array.isArray(t.value) ? B(() => f()) : l(Me(t.value))), O = (y) => y ? n.timePicker ? Y(Me(y)) : n.monthPicker ? L(Me(y)) : n.yearPicker ? J(Me(y)) : n.multiDates ? P(Me(y)) : n.weekPicker ? x(Me(y)) : Q(Me(y)) : null, X = (y) => {
    const c = O(y);
    U(Me(c)) ? (t.value = Me(c), A()) : (t.value = null, T.value = "");
  }, p = () => {
    var c;
    const y = (I) => {
      var ve;
      return pt(I, (ve = u.value.textInputOptions) == null ? void 0 : ve.format);
    };
    return `${y(t.value[0])} ${(c = u.value.textInputOptions) == null ? void 0 : c.rangeSeparator} ${t.value[1] ? y(t.value[1]) : ""}`;
  }, s = () => {
    var y;
    return a.value && t.value ? Array.isArray(t.value) ? p() : pt(t.value, (y = u.value.textInputOptions) == null ? void 0 : y.format) : g(t.value);
  }, _ = () => {
    var y;
    return t.value ? n.multiDates ? t.value.map((c) => g(c)).join("; ") : n.textInput && typeof ((y = u.value.textInputOptions) == null ? void 0 : y.format) == "string" ? s() : g(t.value) : "";
  }, A = () => {
    !n.format || typeof n.format == "string" ? T.value = _() : T.value = n.format(t.value);
  }, K = (y) => {
    if (n.utc) {
      const c = new Date(y);
      return n.utc === "preserve" ? new Date(c.getTime() + c.getTimezoneOffset() * 6e4) : c;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? d(new Date(y)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? ln(y, $(), new Date()) : d(ln(y, n.modelType, new Date())) : d(new Date(y));
  }, l = (y) => n.utc ? Ja(y, n.utc === "preserve") : n.modelType ? n.modelType === "timestamp" ? +r(y) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? g(r(y)) : g(r(y), n.modelType) : r(y), v = (y) => {
    e("update:model-value", y);
  }, k = (y) => Array.isArray(t.value) ? [
    y(t.value[0]),
    t.value[1] ? y(t.value[1]) : R()
  ] : y(Me(t.value)), N = (y) => v(Me(k(y)));
  return {
    inputValue: T,
    internalModelValue: t,
    checkBeforeEmit: () => t.value ? n.range ? n.partialRange ? t.value.length >= 1 : t.value.length === 2 : !!t.value : !1,
    parseExternalModelValue: X,
    formatInputValue: A,
    emitModelValue: () => (A(), n.monthPicker ? N(V) : n.timePicker ? N(z) : n.yearPicker ? N(ge) : n.weekPicker ? v(t.value) : v(G()))
  };
}, Ll = (e, n) => {
  const { validateMonthYearInRange: a, validateMaxDate: t, validateMinDate: r, defaults: d } = Ve(e), g = (S, u) => {
    let T = S;
    return d.value.filters.months.includes(he(T)) ? (T = u ? at(S, 1) : kt(S, 1), g(T, u)) : T;
  }, $ = (S, u) => {
    let T = S;
    return d.value.filters.years.includes(ge(T)) ? (T = u ? sa(S, 1) : ia(S, 1), $(T, u)) : T;
  }, B = (S) => {
    const u = Re(new Date(), { month: e.month, year: e.year });
    let T = S ? at(u, 1) : kt(u, 1), z = he(T), V = ge(T);
    d.value.filters.months.includes(z) && (T = g(T, S), z = he(T), V = ge(T)), d.value.filters.years.includes(V) && (T = $(T, S), V = ge(T)), a(z, V, S, e.preventMinMaxNavigation) && R(z, V);
  }, R = (S, u) => {
    n("update-month-year", { month: S, year: u });
  }, U = F(() => (S) => {
    if (!e.preventMinMaxNavigation || S && !e.maxDate || !S && !e.minDate)
      return !1;
    const u = Re(new Date(), { month: e.month, year: e.year }), T = S ? at(u, 1) : kt(u, 1), z = [he(T), ge(T)];
    return S ? !t(...z) : !r(...z);
  });
  return { handleMonthYearChange: B, isDisabled: U, updateMonthYear: R };
};
var It = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(It || {});
const El = (e, n, a, t) => {
  const r = W({
    top: "0",
    left: "0",
    transform: "none"
  }), d = W(!1), g = an(t, "teleportCenter");
  Dt(g, () => {
    J();
  });
  const $ = (f) => {
    const D = f.getBoundingClientRect();
    return {
      left: D.left + window.scrollX,
      top: D.top + window.scrollY
    };
  }, B = (f) => {
    const D = f.getBoundingClientRect();
    let E = 0, G = 0;
    for (; f && !isNaN(f.offsetLeft) && !isNaN(f.offsetTop); )
      E += f.offsetLeft - f.scrollLeft, G = D.top + f.scrollTop, f = f.offsetParent;
    return { top: G, left: E };
  }, R = (f, D) => {
    r.value.left = `${f + D}px`, r.value.transform = "translateX(-100%)";
  }, U = (f) => {
    r.value.left = `${f}px`, r.value.transform = "translateX(0)";
  }, S = (f, D, E = !1) => {
    t.position === It.left && U(f), t.position === It.right && R(f, D), t.position === It.center && (r.value.left = `${f + D / 2}px`, r.value.transform = E ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, u = (f) => {
    const { width: D, height: E } = f.getBoundingClientRect(), { top: G, left: O } = t.altPosition ? B(f) : $(f);
    return { top: G, left: O, width: D, height: E };
  }, T = () => {
    const f = Ce(n);
    if (f) {
      const { top: D, left: E, width: G, height: O } = u(f);
      r.value.top = `${D + O / 2}px`, r.value.transform = "translateY(-50%)", S(E, G, !0);
    }
  }, z = () => {
    r.value.left = "50%", r.value.top = "50%", r.value.transform = "translate(-50%, -50%)", r.value.position = "fixed";
  }, V = () => {
    const f = Ce(n);
    r.value = t.altPosition(f);
  }, J = (f = !0) => {
    if (!t.inline)
      return g.value ? z() : t.altPosition && typeof t.altPosition != "boolean" ? V() : (f && a("recalculate-position"), ae());
  }, Y = ({
    inputEl: f,
    menuEl: D,
    left: E,
    width: G
  }) => {
    window.screen.width > 768 && S(E, G), x(f, D);
  }, L = (f, D) => {
    const { top: E, left: G, height: O, width: X } = u(f);
    r.value.top = `${O + E + +t.offset}px`, Y({ inputEl: f, menuEl: D, left: G, width: X }), d.value = !1;
  }, P = (f, D) => {
    const { top: E, left: G, width: O } = u(f), { height: X } = D.getBoundingClientRect();
    r.value.top = `${E - X - +t.offset}px`, Y({ inputEl: f, menuEl: D, left: G, width: O }), d.value = !0;
  }, x = (f, D) => {
    if (t.autoPosition) {
      const { left: E, width: G } = u(f), { left: O, right: X } = D.getBoundingClientRect();
      if (O < 0)
        return U(E);
      if (X > document.documentElement.clientWidth)
        return R(E, G);
    }
  }, Q = (f, D) => {
    const { height: E } = D.getBoundingClientRect(), { top: G, height: O } = f.getBoundingClientRect(), p = window.innerHeight - G - O, s = G;
    return E <= p ? L(f, D) : E > p && E <= s ? P(f, D) : p >= s ? L(f, D) : P(f, D);
  }, ae = () => {
    const f = Ce(n), D = Ce(e);
    if (f && D)
      return t.autoPosition ? Q(f, D) : L(f, D);
  };
  return { openOnTop: d, menuPosition: r, setMenuPosition: J, setInitialPosition: T };
}, it = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["action"] }
], Fl = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Ul = {
  all: () => it,
  monthYear: () => it.filter((e) => e.use.includes("month-year")),
  input: () => Fl,
  timePicker: () => it.filter((e) => e.use.includes("time")),
  action: () => it.filter((e) => e.use.includes("action")),
  calendar: () => it.filter((e) => e.use.includes("calendar")),
  menu: () => it.filter((e) => e.use.includes("menu"))
}, lt = (e, n, a) => {
  const t = [];
  return Ul[n]().forEach((r) => {
    e[r.name] && t.push(r.name);
  }), a && a.length && a.forEach((r) => {
    r.slot && t.push(r.slot);
  }), t;
}, Ft = (e) => ({ transitionName: F(() => (a) => e && typeof e != "boolean" ? a ? e.open : e.close : ""), showTransition: !!e }), Qe = {
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  teleport: { type: [String, Object], default: "body" },
  altPosition: { type: [Boolean, Function], default: !1 },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  monthYearComponent: { type: Object, default: null },
  timePickerComponent: { type: Object, default: null },
  actionRowComponent: { type: Object, default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: { type: Boolean, default: !1 },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: Boolean, default: !1 }
}, Hl = ["aria-label", "aria-disabled", "aria-readonly"], Wl = {
  key: 1,
  class: "dp__input_wrap"
}, zl = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], jl = {
  key: 2,
  class: "dp__input_icon"
}, Kl = {
  key: 4,
  class: "dp__clear_icon"
}, xl = /* @__PURE__ */ Ue({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Qe
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { getDefaultPattern: r, isValidDate: d, defaults: g } = Ve(t), $ = W(), B = W(null), R = W(!1), U = F(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !t.textInput,
        dp__disabled: t.disabled,
        dp__input_readonly: !t.textInput,
        dp__input: !0,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: t.state,
        dp__input_invalid: t.state === !1,
        dp__input_focus: R.value || t.isMenuOpen,
        dp__input_reg: !t.textInput,
        [t.inputClassName]: !!t.inputClassName
      })
    ), S = () => {
      a("set-input-date", null), t.autoApply && (a("set-empty-date"), $.value = null);
    }, u = (f) => {
      var D;
      return qa(f, ((D = g.value.textInputOptions) == null ? void 0 : D.format) || r());
    }, T = (f) => {
      const { rangeSeparator: D } = g.value.textInputOptions;
      if (t.range) {
        const [E, G] = f.split(`${D}`);
        if (E && G) {
          const O = u(E.trim()), X = u(G.trim());
          $.value = O && X ? [O, X] : null;
        }
      } else if (t.multiDates) {
        const E = f.split(";");
        $.value = E.map((G) => u(G.trim())).filter((G) => G);
      } else
        $.value = u(f);
    }, z = (f) => {
      var E;
      const { value: D } = f.target;
      D !== "" ? (((E = g.value.textInputOptions) == null ? void 0 : E.openMenu) && !t.isMenuOpen && a("open"), T(D), a("set-input-date", $.value)) : S(), a("update:input-value", D);
    }, V = () => {
      var f, D;
      ((f = g.value.textInputOptions) == null ? void 0 : f.enterSubmit) && d($.value) && t.inputValue !== "" ? (a("set-input-date", $.value, !0), $.value = null) : ((D = g.value.textInputOptions) == null ? void 0 : D.enterSubmit) && t.inputValue === "" && ($.value = null, a("clear"));
    }, J = () => {
      var f, D;
      ((f = g.value.textInputOptions) == null ? void 0 : f.tabSubmit) && d($.value) && t.inputValue !== "" ? (a("set-input-date", $.value, !0), $.value = null) : ((D = g.value.textInputOptions) == null ? void 0 : D.tabSubmit) && t.inputValue === "" && ($.value = null, a("clear"));
    }, Y = () => {
      R.value = !0, a("focus");
    }, L = (f) => {
      var D;
      f.preventDefault(), f.stopImmediatePropagation(), f.stopPropagation(), t.textInput && ((D = g.value.textInputOptions) == null ? void 0 : D.openMenu) && !t.inlineWithInput ? t.isMenuOpen ? g.value.textInputOptions.enterSubmit && a("select-date") : a("open") : t.textInput || a("toggle");
    }, P = () => {
      R.value = !1, t.isMenuOpen || a("blur"), t.autoApply && t.textInput && $.value && (a("set-input-date", $.value), a("select-date"), $.value = null);
    }, x = () => {
      a("clear");
    }, Q = (f) => {
      t.textInput || f.preventDefault();
    };
    return n({
      focusInput: () => {
        B.value && B.value.focus({ preventScroll: !0 });
      }
    }), (f, D) => {
      var E;
      return h(), C("div", {
        onClick: L,
        "aria-label": (E = i(g).ariaLabels) == null ? void 0 : E.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": f.disabled,
        "aria-readonly": f.readonly
      }, [
        f.$slots.trigger && !f.$slots["dp-input"] && !f.inline ? H(f.$slots, "trigger", { key: 0 }) : M("", !0),
        !f.$slots.trigger && (!f.inline || f.inlineWithInput) ? (h(), C("div", Wl, [
          f.$slots["dp-input"] && !f.$slots.trigger && !f.inline ? H(f.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: z,
            onEnter: V,
            onTab: J,
            onClear: x
          }) : M("", !0),
          f.$slots["dp-input"] ? M("", !0) : (h(), C("input", {
            key: 1,
            ref_key: "inputRef",
            ref: B,
            id: f.uid ? `dp-input-${f.uid}` : void 0,
            name: f.name,
            class: ye(i(U)),
            inputmode: f.textInput ? "text" : "none",
            placeholder: f.placeholder,
            disabled: f.disabled,
            readonly: f.readonly,
            required: f.required,
            value: e.inputValue,
            autocomplete: f.autocomplete,
            onInput: z,
            onKeydown: [
              oe(L, ["enter"]),
              oe(J, ["tab"])
            ],
            onBlur: P,
            onFocus: Y,
            onKeypress: Q
          }, null, 42, zl)),
          f.$slots["input-icon"] && !f.hideInputIcon ? (h(), C("span", jl, [
            H(f.$slots, "input-icon")
          ])) : M("", !0),
          !f.$slots["input-icon"] && !f.hideInputIcon && !f.$slots["dp-input"] ? (h(), ce(i(Et), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : M("", !0),
          f.$slots["clear-icon"] && e.inputValue && f.clearable && !f.disabled && !f.readonly ? (h(), C("span", Kl, [
            H(f.$slots, "clear-icon", { clear: x })
          ])) : M("", !0),
          f.clearable && !f.$slots["clear-icon"] && e.inputValue && !f.disabled && !f.readonly ? (h(), ce(i(Ma), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: Ge(x, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : M("", !0)
        ])) : M("", !0)
      ], 8, Hl);
    };
  }
}), Gl = { class: "dp__selection_preview" }, Zl = { class: "dp__action_buttons" }, Xl = ["onKeydown"], ql = /* @__PURE__ */ Ue({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Qe
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: n }) {
    const a = e, { formatDate: t, isValidTime: r, defaults: d } = Ve(a), { buildMatrix: g } = Je(), $ = W(null), B = W(null);
    Fe(() => {
      a.arrowNavigation && g([Ce($), Ce(B)], "actionRow");
    });
    const R = F(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), U = F(() => !u.value || !T.value || !R.value), S = F(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: U.value
    })), u = F(() => !a.enableTimePicker || a.ignoreTimeValidation ? !0 : r(a.internalModelValue)), T = F(() => a.monthPicker ? Y(a.internalModelValue) : !0), z = () => {
      const P = d.value.previewFormat;
      return a.timePicker || a.monthPicker, P(Me(a.internalModelValue));
    }, V = () => {
      const P = a.internalModelValue;
      return d.value.multiCalendars > 0 ? `${t(P[0])} - ${t(P[1])}` : [t(P[0]), t(P[1])];
    }, J = F(() => !a.internalModelValue || !a.menuMount ? "" : typeof d.value.previewFormat == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? V() : a.multiDates ? a.internalModelValue.map((P) => `${t(P)}`) : a.modelAuto ? `${t(a.internalModelValue[0])}` : `${t(a.internalModelValue[0])} -` : t(a.internalModelValue) : z()), Y = (P) => {
      if (!a.monthPicker)
        return !0;
      let x = !0;
      return a.minDate && a.maxDate ? Oe(w(P), w(a.minDate)) && Pe(w(P), w(a.maxDate)) : (a.minDate && (x = Oe(w(P), w(a.minDate))), a.maxDate && (x = Pe(w(P), w(a.maxDate))), x);
    }, L = () => {
      u.value && T.value && R.value ? n("select-date") : n("invalid-select");
    };
    return (P, x) => (h(), C("div", {
      class: "dp__action_row",
      style: ut(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      P.$slots["action-row"] ? H(P.$slots, "action-row", Ye(Te({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: i(U),
        selectDate: () => P.$emit("select-date"),
        closePicker: () => P.$emit("close-picker")
      }))) : (h(), C(ie, { key: 1 }, [
        ee("div", Gl, [
          P.$slots["action-preview"] ? H(P.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : M("", !0),
          P.$slots["action-preview"] ? M("", !0) : (h(), C(ie, { key: 1 }, [
            Array.isArray(i(J)) ? M("", !0) : (h(), C(ie, { key: 0 }, [
              We(Se(i(J)), 1)
            ], 64)),
            Array.isArray(i(J)) ? (h(!0), C(ie, { key: 1 }, De(i(J), (Q, ae) => (h(), C("div", { key: ae }, Se(Q), 1))), 128)) : M("", !0)
          ], 64))
        ]),
        ee("div", Zl, [
          P.$slots["action-select"] ? H(P.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : M("", !0),
          P.$slots["action-select"] ? M("", !0) : (h(), C(ie, { key: 1 }, [
            P.inline ? M("", !0) : (h(), C("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: $,
              tabindex: "0",
              onClick: x[0] || (x[0] = (Q) => P.$emit("close-picker")),
              onKeydown: [
                x[1] || (x[1] = oe((Q) => P.$emit("close-picker"), ["enter"])),
                x[2] || (x[2] = oe((Q) => P.$emit("close-picker"), ["space"]))
              ]
            }, Se(P.cancelText), 545)),
            ee("span", {
              class: ye(i(S)),
              tabindex: "0",
              onKeydown: [
                oe(L, ["enter"]),
                oe(L, ["space"])
              ],
              onClick: L,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: B
            }, Se(P.selectText), 43, Xl)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), Jl = ["aria-label"], Ql = {
  class: "dp__calendar_header",
  role: "row"
}, er = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, tr = /* @__PURE__ */ ee("div", { class: "dp__calendar_header_separator" }, null, -1), nr = ["aria-label"], ar = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, lr = { class: "dp__cell_inner" }, rr = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseover"], or = /* @__PURE__ */ ee("div", { class: "dp__arrow_bottom_tp" }, null, -1), sr = /* @__PURE__ */ Ue({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: !1 },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Qe
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMultiLevelMatrix: r } = Je(), { setDateMonthOrYear: d, defaults: g } = Ve(t), $ = W(null), B = W({ bottom: "", left: "", transform: "" }), R = W([]), U = W(null), S = W(!0), u = W(""), T = W({ startX: 0, endX: 0, startY: 0, endY: 0 }), z = F(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : _l(t.locale, +t.weekStart));
    Fe(() => {
      a("mount", { cmp: "calendar", refs: R }), t.noSwipe || U.value && (U.value.addEventListener("touchstart", D, { passive: !1 }), U.value.addEventListener("touchend", E, { passive: !1 }), U.value.addEventListener("touchmove", G, { passive: !1 })), t.monthChangeOnScroll && U.value && U.value.addEventListener("wheel", p, { passive: !1 });
    });
    const V = (s) => s ? t.vertical ? "vNext" : "next" : t.vertical ? "vPrevious" : "previous", J = (s, _) => {
      if (t.transitions) {
        const A = ze(d(w(), t.month, t.year));
        u.value = Oe(ze(d(w(), s, _)), A) ? g.value.transitions[V(!0)] : g.value.transitions[V(!1)], S.value = !1, $t(() => {
          S.value = !0;
        });
      }
    }, Y = F(
      () => ({
        dp__calendar_wrap: !0,
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), L = F(() => (s) => {
      const _ = Cl(s);
      return {
        dp__marker_dot: _.type === "dot",
        dp__marker_line: _.type === "line"
      };
    }), P = F(() => (s) => pe(s, $.value)), x = F(() => ({
      dp__calendar: !0,
      dp__calendar_next: g.value.multiCalendars > 0 && t.instance !== 0
    })), Q = F(() => t.specificMode ? { height: `${t.modeHeight}px` } : void 0), ae = (s, _, A) => {
      var K, l;
      if (a("set-hover-date", s), (l = (K = s.marker) == null ? void 0 : K.tooltip) != null && l.length) {
        const v = Ce(R.value[_][A]);
        if (v) {
          const { width: k, height: N } = v.getBoundingClientRect();
          B.value = {
            bottom: `${N}px`,
            left: `${k / 2}px`,
            transform: "translateX(-50%)"
          }, $.value = s.value;
        }
      }
    }, f = () => {
      $.value = null;
    }, D = (s) => {
      T.value.startX = s.changedTouches[0].screenX, T.value.startY = s.changedTouches[0].screenY;
    }, E = (s) => {
      T.value.endX = s.changedTouches[0].screenX, T.value.endY = s.changedTouches[0].screenY, O();
    }, G = (s) => {
      t.vertical && !t.inline && s.preventDefault();
    }, O = () => {
      const s = t.vertical ? "Y" : "X";
      Math.abs(T.value[`start${s}`] - T.value[`end${s}`]) > 10 && a("handle-swipe", T.value[`start${s}`] > T.value[`end${s}`] ? "right" : "left");
    }, X = (s, _, A) => {
      s && (Array.isArray(R.value[_]) ? R.value[_][A] = s : R.value[_] = [s]), t.arrowNavigation && r(R.value, "calendar");
    }, p = (s) => {
      t.monthChangeOnScroll && (s.preventDefault(), a("handle-scroll", s));
    };
    return n({ triggerTransition: J }), (s, _) => {
      var A;
      return h(), C("div", {
        class: ye(i(x))
      }, [
        ee("div", {
          style: ut(i(Q))
        }, [
          e.specificMode ? M("", !0) : (h(), C("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: U,
            class: ye(i(Y)),
            role: "grid",
            "aria-label": (A = i(g).ariaLabels) == null ? void 0 : A.calendarWrap
          }, [
            ee("div", Ql, [
              s.weekNumbers ? (h(), C("div", er, Se(s.weekNumName), 1)) : M("", !0),
              (h(!0), C(ie, null, De(i(z), (K, l) => (h(), C("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: l,
                "data-test": "calendar-header"
              }, [
                s.$slots["calendar-header"] ? H(s.$slots, "calendar-header", {
                  key: 0,
                  day: K,
                  index: l
                }) : M("", !0),
                s.$slots["calendar-header"] ? M("", !0) : (h(), C(ie, { key: 1 }, [
                  We(Se(K), 1)
                ], 64))
              ]))), 128))
            ]),
            tr,
            qe(ft, {
              name: u.value,
              css: !!s.transitions
            }, {
              default: re(() => {
                var K;
                return [
                  S.value ? (h(), C("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (K = i(g).ariaLabels) == null ? void 0 : K.calendarDays
                  }, [
                    (h(!0), C(ie, null, De(e.mappedDates, (l, v) => (h(), C("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: v
                    }, [
                      s.weekNumbers ? (h(), C("div", ar, [
                        ee("div", lr, Se(e.getWeekNum(l.days)), 1)
                      ])) : M("", !0),
                      (h(!0), C(ie, null, De(l.days, (k, N) => {
                        var ue, fe, y;
                        return h(), C("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (c) => X(c, v, N),
                          key: N + v,
                          "aria-selected": k.classData.dp__active_date || k.classData.dp__range_start || k.classData.dp__range_start,
                          "aria-disabled": k.classData.dp__cell_disabled,
                          "aria-label": (fe = (ue = i(g).ariaLabels) == null ? void 0 : ue.day) == null ? void 0 : fe.call(ue, k),
                          tabindex: "0",
                          "data-test": k.value,
                          onClick: Ge((c) => s.$emit("select-date", k), ["stop", "prevent"]),
                          onKeydown: [
                            oe((c) => s.$emit("select-date", k), ["enter"]),
                            oe((c) => s.$emit("handle-space", k), ["space"])
                          ],
                          onMouseover: (c) => ae(k, v, N),
                          onMouseleave: f
                        }, [
                          ee("div", {
                            class: ye(["dp__cell_inner", k.classData])
                          }, [
                            s.$slots.day ? H(s.$slots, "day", {
                              key: 0,
                              day: +k.text,
                              date: k.value
                            }) : M("", !0),
                            s.$slots.day ? M("", !0) : (h(), C(ie, { key: 1 }, [
                              We(Se(k.text), 1)
                            ], 64)),
                            k.marker && (s.hideOffsetDates ? k.current : !0) ? (h(), C("div", {
                              key: 2,
                              class: ye(i(L)(k.marker)),
                              style: ut(k.marker.color ? { backgroundColor: k.marker.color } : {})
                            }, null, 6)) : M("", !0),
                            i(P)(k.value) ? (h(), C("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              style: ut(B.value)
                            }, [
                              (y = k.marker) != null && y.tooltip ? (h(), C("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: _[0] || (_[0] = Ge(() => {
                                }, ["stop"]))
                              }, [
                                (h(!0), C(ie, null, De(k.marker.tooltip, (c, I) => (h(), C("div", {
                                  key: I,
                                  class: "dp__tooltip_text"
                                }, [
                                  s.$slots["marker-tooltip"] ? H(s.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltop: c,
                                    day: k.value
                                  }) : M("", !0),
                                  s.$slots["marker-tooltip"] ? M("", !0) : (h(), C(ie, { key: 1 }, [
                                    ee("div", {
                                      class: "dp__tooltip_mark",
                                      style: ut(c.color ? { backgroundColor: c.color } : {})
                                    }, null, 4),
                                    ee("div", null, Se(c.text), 1)
                                  ], 64))
                                ]))), 128)),
                                or
                              ])) : M("", !0)
                            ], 4)) : M("", !0)
                          ], 2)
                        ], 40, rr);
                      }), 128))
                    ]))), 128))
                  ], 8, nr)) : M("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, Jl))
        ], 4)
      ], 2);
    };
  }
}), ir = ["aria-label", "aria-disabled"], tn = /* @__PURE__ */ Ue({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const a = W(null);
    return Fe(() => n("set-ref", a)), (t, r) => (h(), C("div", {
      class: "dp__month_year_col_nav",
      onClick: r[0] || (r[0] = (d) => t.$emit("activate")),
      onKeydown: [
        r[1] || (r[1] = oe((d) => t.$emit("activate"), ["enter"])),
        r[2] || (r[2] = oe((d) => t.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: a
    }, [
      ee("div", {
        class: ye(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        H(t.$slots, "default")
      ], 2)
    ], 40, ir));
  }
}), ur = ["onKeydown"], cr = { class: "dp__selection_grid_header" }, dr = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], fr = ["aria-label", "onKeydown"], wt = /* @__PURE__ */ Ue({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setSelectionGrid: r, buildMultiLevelMatrix: d, setMonthPicker: g } = Je(), { hideNavigationButtons: $ } = Ve(t), B = W(!1), R = W(null), U = W(null), S = W([]), u = W(), T = W(null);
    qn(() => {
      R.value = null;
    }), Fe(() => {
      $t().then(() => f()), V(), z(!0);
    }), sn(() => z(!1));
    const z = (s) => {
      var _;
      t.arrowNavigation && ((_ = t.headerRefs) != null && _.length ? g(s) : r(s));
    }, V = () => {
      const s = Ce(U);
      s && (t.textInput || s.focus({ preventScroll: !0 }), B.value = s.clientHeight < s.scrollHeight);
    }, J = F(
      () => ({
        dp__overlay: !0
      })
    ), Y = F(() => ({
      dp__overlay_col: !0
    })), L = (s) => t.skipActive ? !1 : s.value === t.modelValue, P = F(() => t.items.map((s) => s.filter((_) => _).map((_) => {
      var l, v, k;
      const A = t.disabledValues.some((N) => N === _.value) || ae(_.value), K = (l = t.multiModelValue) != null && l.length ? (v = t.multiModelValue) == null ? void 0 : v.some(
        (N) => pe(
          N,
          rt(
            t.monthPicker ? Rt(new Date(), _.value) : new Date(),
            t.monthPicker ? t.year : _.value
          )
        )
      ) : L(_);
      return {
        ..._,
        className: {
          dp__overlay_cell_active: K,
          dp__overlay_cell: !K,
          dp__overlay_cell_disabled: A,
          dp__overlay_cell_active_disabled: A && K,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (k = t.multiModelValue) != null && k.length ? E(_.value) : !1
        }
      };
    }))), x = F(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: B.value,
        dp__button_bottom: t.autoApply
      })
    ), Q = F(() => {
      var s, _;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((s = t.items) == null ? void 0 : s.length) <= 6,
        dp__container_block: ((_ = t.items) == null ? void 0 : _.length) > 6
      };
    }), ae = (s) => {
      const _ = t.maxValue || t.maxValue === 0, A = t.minValue || t.minValue === 0;
      return !_ && !A ? !1 : _ && A ? +s > +t.maxValue || +s < +t.minValue : _ ? +s > +t.maxValue : A ? +s < +t.minValue : !1;
    }, f = () => {
      const s = Ce(R);
      if (s) {
        const _ = Ce(U);
        _ && (_.scrollTop = s.offsetTop - _.offsetTop - (_.getBoundingClientRect().height / 2 - s.getBoundingClientRect().height));
      }
    }, D = (s) => {
      !t.disabledValues.some((_) => _ === s) && !ae(s) && (a("update:model-value", s), a("selected"));
    }, E = (s) => {
      const _ = t.monthPicker ? t.year : s;
      return zn(
        t.multiModelValue,
        rt(
          t.monthPicker ? Rt(new Date(), u.value || 0) : new Date(),
          t.monthPicker ? _ : u.value || _
        ),
        rt(t.monthPicker ? Rt(new Date(), s) : new Date(), _)
      );
    }, G = () => {
      a("toggle"), a("reset-flow");
    }, O = () => {
      t.escClose && G();
    }, X = (s, _, A, K) => {
      s && (_.value === +t.modelValue && !t.disabledValues.includes(_.value) && (R.value = s), t.arrowNavigation && (Array.isArray(S.value[A]) ? S.value[A][K] = s : S.value[A] = [s], p()));
    }, p = () => {
      var _, A;
      const s = (_ = t.headerRefs) != null && _.length ? [t.headerRefs].concat(S.value) : S.value.concat([t.skipButtonRef ? [] : [T.value]]);
      d(Me(s), (A = t.headerRefs) != null && A.length ? "monthPicker" : "selectionGrid");
    };
    return n({ focusGrid: V }), (s, _) => {
      var A;
      return h(), C("div", {
        ref_key: "gridWrapRef",
        ref: U,
        class: ye(i(J)),
        role: "dialog",
        tabindex: "0",
        onKeydown: oe(O, ["esc"])
      }, [
        ee("div", {
          class: ye(i(Q)),
          role: "grid"
        }, [
          ee("div", cr, [
            H(s.$slots, "header")
          ]),
          s.$slots.overlay ? H(s.$slots, "overlay", { key: 0 }) : (h(), C(ie, { key: 1 }, [
            (h(!0), C(ie, null, De(i(P), (K, l) => (h(), C("div", {
              class: "dp__overlay_row",
              key: l,
              role: "row"
            }, [
              (h(!0), C(ie, null, De(K, (v, k) => (h(), C("div", {
                role: "gridcell",
                class: ye(i(Y)),
                key: v.value,
                "aria-selected": v.value === e.modelValue && !e.disabledValues.includes(v.value),
                "aria-disabled": v.className.dp__overlay_cell_disabled,
                ref_for: !0,
                ref: (N) => X(N, v, l, k),
                tabindex: "0",
                "data-test": v.text,
                onClick: (N) => D(v.value),
                onKeydown: [
                  oe((N) => D(v.value), ["enter"]),
                  oe((N) => D(v.value), ["space"])
                ],
                onMouseover: (N) => u.value = v.value
              }, [
                ee("div", {
                  class: ye(v.className)
                }, [
                  s.$slots.item ? H(s.$slots, "item", {
                    key: 0,
                    item: v
                  }) : M("", !0),
                  s.$slots.item ? M("", !0) : (h(), C(ie, { key: 1 }, [
                    We(Se(v.text), 1)
                  ], 64))
                ], 2)
              ], 42, dr))), 128))
            ]))), 128)),
            s.$slots["button-icon"] ? St((h(), C("div", {
              key: 0,
              role: "button",
              "aria-label": (A = e.ariaLabels) == null ? void 0 : A.toggleOverlay,
              class: ye(i(x)),
              tabindex: "0",
              ref_key: "toggleButton",
              ref: T,
              onClick: G,
              onKeydown: oe(G, ["enter"])
            }, [
              H(s.$slots, "button-icon")
            ], 42, fr)), [
              [Ct, !i($)(e.type)]
            ]) : M("", !0)
          ], 64))
        ], 2)
      ], 42, ur);
    };
  }
}), vr = ["aria-label"], Bn = /* @__PURE__ */ Ue({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: !1 },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e, { emit: n }) {
    const a = e, { transitionName: t, showTransition: r } = Ft(a.transitions), d = W(null);
    return Fe(() => n("set-ref", d)), (g, $) => (h(), C(ie, null, [
      ee("div", {
        class: "dp__month_year_select",
        onClick: $[0] || ($[0] = (B) => g.$emit("toggle")),
        onKeydown: [
          $[1] || ($[1] = oe((B) => g.$emit("toggle"), ["enter"])),
          $[2] || ($[2] = oe((B) => g.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: d
      }, [
        H(g.$slots, "default")
      ], 40, vr),
      qe(ft, {
        name: i(t)(e.showSelectionGrid),
        css: i(r)
      }, {
        default: re(() => [
          e.showSelectionGrid ? (h(), ce(wt, Te({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type,
            arrowNavigation: e.arrowNavigation,
            textInput: e.textInput,
            autoApply: e.autoApply,
            ariaLabels: e.ariaLabels,
            hideNavigation: e.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": $[3] || ($[3] = (B) => g.$emit("update:model-value", B)),
            onToggle: $[4] || ($[4] = (B) => g.$emit("toggle"))
          }), Be({
            "button-icon": re(() => [
              g.$slots["calendar-icon"] ? H(g.$slots, "calendar-icon", { key: 0 }) : M("", !0),
              g.$slots["calendar-icon"] ? M("", !0) : (h(), ce(i(Et), { key: 1 }))
            ]),
            _: 2
          }, [
            g.$slots[e.slotName] ? {
              name: "item",
              fn: re(({ item: B }) => [
                H(g.$slots, e.slotName, { item: B })
              ]),
              key: "0"
            } : void 0,
            g.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: re(() => [
                H(g.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            g.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: re(() => [
                H(g.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : M("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), mr = { class: "dp__month_year_row" }, yr = { class: "dp__month_year_wrap" }, hr = { class: "dp__month_picker_header" }, gr = ["aria-label"], pr = ["aria-label"], kr = ["aria-label"], wr = /* @__PURE__ */ Ue({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...Qe
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { defaults: r } = Ve(t), { transitionName: d, showTransition: g } = Ft(r.value.transitions), { buildMatrix: $ } = Je(), { handleMonthYearChange: B, isDisabled: R, updateMonthYear: U } = Ll(t, a), S = W(!1), u = W(!1), T = W([null, null, null, null]), z = W(null), V = W(null), J = W(null);
    Fe(() => {
      a("mount");
    });
    const Y = (c) => ({
      get: () => t[c],
      set: (I) => {
        const ve = c === "month" ? "year" : "month";
        a("update-month-year", { [c]: I, [ve]: t[ve] }), a("month-year-select", c === "year"), c === "month" ? k(!0) : N(!0);
      }
    }), L = F(Y("month")), P = F(Y("year")), x = (c) => {
      const I = ge(w(c));
      return t.year === I;
    }, Q = F(() => t.monthPicker ? Array.isArray(t.disabledDates) ? t.disabledDates.map((c) => w(c)).filter((c) => x(c)).map((c) => he(c)) : [] : []), ae = F(() => (c) => {
      const I = c === "month";
      return {
        showSelectionGrid: (I ? S : u).value,
        items: (I ? A : K).value,
        disabledValues: r.value.filters[I ? "months" : "years"].concat(Q.value),
        minValue: (I ? G : D).value,
        maxValue: (I ? O : E).value,
        headerRefs: I && t.monthPicker ? [z.value, V.value, J.value] : [],
        escClose: t.escClose,
        transitions: r.value.transitions,
        ariaLabels: r.value.ariaLabels,
        textInput: t.textInput,
        autoApply: t.autoApply,
        arrowNavigation: t.arrowNavigation,
        hideNavigation: t.hideNavigation
      };
    }), f = F(() => (c) => ({
      month: t.month,
      year: t.year,
      items: c === "month" ? t.months : t.years,
      instance: t.instance,
      updateMonthYear: U,
      toggle: c === "month" ? k : N
    })), D = F(() => t.minDate ? ge(w(t.minDate)) : null), E = F(() => t.maxDate ? ge(w(t.maxDate)) : null), G = F(() => {
      if (t.minDate && D.value) {
        if (D.value > t.year)
          return 12;
        if (D.value === t.year)
          return he(w(t.minDate));
      }
      return null;
    }), O = F(() => t.maxDate && E.value ? E.value < t.year ? -1 : E.value === t.year ? he(w(t.maxDate)) : null : null), X = F(() => t.range && t.internalModelValue && (t.monthPicker || t.yearPicker) ? t.internalModelValue : []), p = (c) => c.reverse(), s = (c, I = !1) => {
      const ve = [], $e = (be) => I ? p(be) : be;
      for (let be = 0; be < c.length; be += 3) {
        const He = [c[be], c[be + 1], c[be + 2]];
        ve.push($e(He));
      }
      return I ? ve.reverse() : ve;
    }, _ = F(() => {
      const c = t.months.find((I) => I.value === t.month);
      return c || { text: "", value: 0 };
    }), A = F(() => s(t.months)), K = F(() => s(t.years, t.reverseYears)), l = F(() => r.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === 0 : !0), v = F(() => r.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === r.value.multiCalendars - 1 : !0), k = (c = !1) => {
      ue(c), S.value = !S.value, S.value || a("overlay-closed");
    }, N = (c = !1) => {
      ue(c), u.value = !u.value, u.value || a("overlay-closed");
    }, ue = (c) => {
      c || a("reset-flow");
    }, fe = (c = !1) => {
      R.value(c) || a("update-month-year", {
        year: c ? t.year + 1 : t.year - 1,
        month: t.month,
        fromNav: !0
      });
    }, y = (c, I) => {
      t.arrowNavigation && (T.value[I] = Ce(c), $(T.value, "monthYear"));
    };
    return n({
      toggleMonthPicker: k,
      toggleYearPicker: N
    }), (c, I) => {
      var ve, $e, be, He, Xe;
      return h(), C("div", mr, [
        c.$slots["month-year"] ? H(c.$slots, "month-year", Ye(Te({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: i(U), handleMonthYearChange: i(B), instance: e.instance }))) : (h(), C(ie, { key: 1 }, [
          !c.monthPicker && !c.yearPicker ? (h(), C(ie, { key: 0 }, [
            i(l) && !c.vertical ? (h(), ce(tn, {
              key: 0,
              "aria-label": (ve = i(r).ariaLabels) == null ? void 0 : ve.prevMonth,
              disabled: i(R)(!1),
              onActivate: I[0] || (I[0] = (te) => i(B)(!1)),
              onSetRef: I[1] || (I[1] = (te) => y(te, 0))
            }, {
              default: re(() => [
                c.$slots["arrow-left"] ? H(c.$slots, "arrow-left", { key: 0 }) : M("", !0),
                c.$slots["arrow-left"] ? M("", !0) : (h(), ce(i(wn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : M("", !0),
            ee("div", yr, [
              qe(Bn, Te({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": ($e = i(r).ariaLabels) == null ? void 0 : $e.openMonthsOverlay,
                modelValue: i(L),
                "onUpdate:modelValue": I[2] || (I[2] = (te) => nt(L) ? L.value = te : null)
              }, i(ae)("month"), {
                onToggle: k,
                onSetRef: I[3] || (I[3] = (te) => y(te, 1))
              }), Be({
                default: re(() => [
                  c.$slots.month ? H(c.$slots, "month", Ye(Te({ key: 0 }, i(_)))) : M("", !0),
                  c.$slots.month ? M("", !0) : (h(), C(ie, { key: 1 }, [
                    We(Se(i(_).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                c.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: re(() => [
                    H(c.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                c.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: re(({ item: te }) => [
                    H(c.$slots, "month-overlay-value", {
                      text: te.text,
                      value: te.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                c.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: re(() => [
                    H(c.$slots, "month-overlay", Ye(Ze(i(f)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                c.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: re(() => [
                    H(c.$slots, "month-overlay-header", { toggle: k })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              qe(Bn, Te({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (be = i(r).ariaLabels) == null ? void 0 : be.openYearsOverlay,
                modelValue: i(P),
                "onUpdate:modelValue": I[4] || (I[4] = (te) => nt(P) ? P.value = te : null)
              }, i(ae)("year"), {
                onToggle: N,
                onSetRef: I[5] || (I[5] = (te) => y(te, 2))
              }), Be({
                default: re(() => [
                  c.$slots.year ? H(c.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : M("", !0),
                  c.$slots.year ? M("", !0) : (h(), C(ie, { key: 1 }, [
                    We(Se(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                c.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: re(() => [
                    H(c.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                c.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: re(({ item: te }) => [
                    H(c.$slots, "year-overlay-value", {
                      text: te.text,
                      value: te.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                c.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: re(() => [
                    H(c.$slots, "year-overlay", Ye(Ze(i(f)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                c.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: re(() => [
                    H(c.$slots, "year-overlay-header", { toggle: N })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            i(l) && c.vertical ? (h(), ce(tn, {
              key: 1,
              "aria-label": (He = i(r).ariaLabels) == null ? void 0 : He.prevMonth,
              disabled: i(R)(!1),
              onActivate: I[6] || (I[6] = (te) => i(B)(!1))
            }, {
              default: re(() => [
                c.$slots["arrow-up"] ? H(c.$slots, "arrow-up", { key: 0 }) : M("", !0),
                c.$slots["arrow-up"] ? M("", !0) : (h(), ce(i(Hn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : M("", !0),
            i(v) ? (h(), ce(tn, {
              key: 2,
              ref: "rightIcon",
              disabled: i(R)(!0),
              "aria-label": (Xe = i(r).ariaLabels) == null ? void 0 : Xe.nextMonth,
              onActivate: I[7] || (I[7] = (te) => i(B)(!0)),
              onSetRef: I[8] || (I[8] = (te) => y(te, 3))
            }, {
              default: re(() => [
                c.$slots[c.vertical ? "arrow-down" : "arrow-right"] ? H(c.$slots, c.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : M("", !0),
                c.$slots[c.vertical ? "arrow-down" : "arrow-right"] ? M("", !0) : (h(), ce(Pt(c.vertical ? i(Wn) : i(bn)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : M("", !0)
          ], 64)) : M("", !0),
          c.monthPicker ? (h(), ce(wt, Te({ key: 1 }, i(ae)("month"), {
            "skip-active": c.range,
            year: e.year,
            "multi-model-value": i(X),
            "month-picker": "",
            modelValue: i(L),
            "onUpdate:modelValue": I[17] || (I[17] = (te) => nt(L) ? L.value = te : null),
            onToggle: k,
            onSelected: I[18] || (I[18] = (te) => c.$emit("overlay-closed"))
          }), Be({
            header: re(() => {
              var te, le, ke;
              return [
                ee("div", hr, [
                  ee("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: z,
                    onClick: I[9] || (I[9] = (de) => fe(!1)),
                    onKeydown: I[10] || (I[10] = oe((de) => fe(!1), ["enter"]))
                  }, [
                    ee("div", {
                      class: ye(["dp__inner_nav", { dp__inner_nav_disabled: i(R)(!1) }]),
                      role: "button",
                      "aria-label": (te = i(r).ariaLabels) == null ? void 0 : te.prevMonth
                    }, [
                      c.$slots["arrow-left"] ? H(c.$slots, "arrow-left", { key: 0 }) : M("", !0),
                      c.$slots["arrow-left"] ? M("", !0) : (h(), ce(i(wn), { key: 1 }))
                    ], 10, gr)
                  ], 544),
                  ee("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: V,
                    "aria-label": (le = i(r).ariaLabels) == null ? void 0 : le.openYearsOverlay,
                    tabindex: "0",
                    onClick: I[11] || (I[11] = () => N(!1)),
                    onKeydown: I[12] || (I[12] = oe(() => N(!1), ["enter"]))
                  }, [
                    c.$slots.year ? H(c.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : M("", !0),
                    c.$slots.year ? M("", !0) : (h(), C(ie, { key: 1 }, [
                      We(Se(e.year), 1)
                    ], 64))
                  ], 40, pr),
                  ee("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: J,
                    onClick: I[13] || (I[13] = (de) => fe(!0)),
                    onKeydown: I[14] || (I[14] = oe((de) => fe(!0), ["enter"]))
                  }, [
                    ee("div", {
                      class: ye(["dp__inner_nav", { dp__inner_nav_disabled: i(R)(!0) }]),
                      role: "button",
                      "aria-label": (ke = i(r).ariaLabels) == null ? void 0 : ke.nextMonth
                    }, [
                      c.$slots["arrow-right"] ? H(c.$slots, "arrow-right", { key: 0 }) : M("", !0),
                      c.$slots["arrow-right"] ? M("", !0) : (h(), ce(i(bn), { key: 1 }))
                    ], 10, kr)
                  ], 544)
                ]),
                qe(ft, {
                  name: i(d)(u.value),
                  css: i(g)
                }, {
                  default: re(() => [
                    u.value ? (h(), ce(wt, Te({ key: 0 }, i(ae)("year"), {
                      modelValue: i(P),
                      "onUpdate:modelValue": I[15] || (I[15] = (de) => nt(P) ? P.value = de : null),
                      onToggle: N,
                      onSelected: I[16] || (I[16] = (de) => c.$emit("overlay-closed"))
                    }), Be({
                      "button-icon": re(() => [
                        c.$slots["calendar-icon"] ? H(c.$slots, "calendar-icon", { key: 0 }) : M("", !0),
                        c.$slots["calendar-icon"] ? M("", !0) : (h(), ce(i(Et), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      c.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: re(({ item: de }) => [
                          H(c.$slots, "year-overlay-value", {
                            text: de.text,
                            value: de.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : M("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            c.$slots["month-overlay-value"] ? {
              name: "item",
              fn: re(({ item: te }) => [
                H(c.$slots, "month-overlay-value", {
                  text: te.text,
                  value: te.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : M("", !0),
          c.yearPicker ? (h(), ce(wt, Te({ key: 2 }, i(ae)("year"), {
            modelValue: i(P),
            "onUpdate:modelValue": I[19] || (I[19] = (te) => nt(P) ? P.value = te : null),
            "multi-model-value": i(X),
            "skip-active": c.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: N,
            onSelected: I[20] || (I[20] = (te) => c.$emit("overlay-closed"))
          }), Be({ _: 2 }, [
            c.$slots["year-overlay-value"] ? {
              name: "item",
              fn: re(({ item: te }) => [
                H(c.$slots, "year-overlay-value", {
                  text: te.text,
                  value: te.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : M("", !0)
        ], 64))
      ]);
    };
  }
}), br = {
  key: 0,
  class: "dp__time_input"
}, $r = ["aria-label", "onKeydown", "onClick"], Dr = ["aria-label", "onKeydown", "onClick"], Mr = ["aria-label", "onKeydown", "onClick"], _r = { key: 0 }, Ar = ["aria-label", "onKeydown"], Tr = /* @__PURE__ */ Ue({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...Qe
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setTimePickerElements: r, setTimePickerBackRef: d } = Je(), { defaults: g } = Ve(t), { transitionName: $, showTransition: B } = Ft(g.value.transitions), R = bt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), U = W("AM"), S = W(null), u = W([]);
    Fe(() => {
      a("mounted");
    });
    const T = (p, s) => Fn(Re(w(), p), s), z = (p, s) => ua(Re(w(), p), s), V = F(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !t.enableSeconds && t.is24,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    ), J = F(() => {
      const p = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return t.enableSeconds ? p.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : p;
    }), Y = F(() => J.value.filter((p) => !p.separator)), L = F(() => (p) => {
      if (p === "hours") {
        const s = D(t.hours);
        return { text: s < 10 ? `0${s}` : `${s}`, value: s };
      }
      return { text: t[p] < 10 ? `0${t[p]}` : `${t[p]}`, value: t[p] };
    }), P = (p) => {
      const s = t.is24 ? 24 : 12, _ = p === "hours" ? s : 60, A = +t[`${p}GridIncrement`], K = p === "hours" && !t.is24 ? A : 0, l = [];
      for (let v = K; v < _; v += A)
        l.push({ value: v, text: v < 10 ? `0${v}` : `${v}` });
      return p === "hours" && !t.is24 && l.push({ value: 0, text: "12" }), Ml(l);
    }, x = (p) => t[`no${p[0].toUpperCase() + p.slice(1)}Overlay`], Q = (p) => {
      x(p) || (R[p] = !R[p], R[p] || a("overlay-closed"));
    }, ae = (p) => p === "hours" ? Ke : p === "minutes" ? xe : dt, f = (p, s = !0) => {
      const _ = s ? T : z;
      a(
        `update:${p}`,
        ae(p)(_({ [p]: +t[p] }, { [p]: +t[`${p}Increment`] }))
      );
    }, D = (p) => t.is24 ? p : (p >= 12 ? U.value = "PM" : U.value = "AM", Sl(p)), E = () => {
      U.value === "PM" ? (U.value = "AM", a("update:hours", t.hours - 12)) : (U.value = "PM", a("update:hours", t.hours + 12));
    }, G = (p) => {
      R[p] = !0;
    }, O = (p, s, _) => {
      if (p && t.arrowNavigation) {
        Array.isArray(u.value[s]) ? u.value[s][_] = p : u.value[s] = [p];
        const A = u.value.reduce(
          (K, l) => l.map((v, k) => [...K[k] || [], l[k]]),
          []
        );
        d(t.closeTimePickerBtn), S.value && (A[1] = A[1].concat(S.value)), r(A, t.order);
      }
    }, X = (p, s) => p === "hours" && !t.is24 ? a(`update:${p}`, U.value === "PM" ? s + 12 : s) : a(`update:${p}`, s);
    return n({ openChildCmp: G }), (p, s) => {
      var _;
      return p.disabled ? M("", !0) : (h(), C("div", br, [
        (h(!0), C(ie, null, De(i(J), (A, K) => {
          var l, v, k;
          return h(), C("div", {
            key: K,
            class: ye(i(V))
          }, [
            A.separator ? (h(), C(ie, { key: 0 }, [
              We(" : ")
            ], 64)) : (h(), C(ie, { key: 1 }, [
              ee("div", {
                class: "dp__inc_dec_button",
                role: "button",
                "aria-label": (l = i(g).ariaLabels) == null ? void 0 : l.incrementValue(A.type),
                tabindex: "0",
                onKeydown: [
                  oe((N) => f(A.type), ["enter"]),
                  oe((N) => f(A.type), ["space"])
                ],
                onClick: (N) => f(A.type),
                ref_for: !0,
                ref: (N) => O(N, K, 0)
              }, [
                p.$slots["arrow-up"] ? H(p.$slots, "arrow-up", { key: 0 }) : M("", !0),
                p.$slots["arrow-up"] ? M("", !0) : (h(), ce(i(Hn), { key: 1 }))
              ], 40, $r),
              ee("div", {
                role: "button",
                "aria-label": (v = i(g).ariaLabels) == null ? void 0 : v.openTpOverlay(A.type),
                class: ye(x(A.type) ? "" : "dp__time_display"),
                tabindex: "0",
                onKeydown: [
                  oe((N) => Q(A.type), ["enter"]),
                  oe((N) => Q(A.type), ["space"])
                ],
                onClick: (N) => Q(A.type),
                ref_for: !0,
                ref: (N) => O(N, K, 1)
              }, [
                p.$slots[A.type] ? H(p.$slots, A.type, {
                  key: 0,
                  text: i(L)(A.type).text,
                  value: i(L)(A.type).value
                }) : M("", !0),
                p.$slots[A.type] ? M("", !0) : (h(), C(ie, { key: 1 }, [
                  We(Se(i(L)(A.type).text), 1)
                ], 64))
              ], 42, Dr),
              ee("div", {
                class: "dp__inc_dec_button",
                role: "button",
                "aria-label": (k = i(g).ariaLabels) == null ? void 0 : k.decrementValue(A.type),
                tabindex: "0",
                onKeydown: [
                  oe((N) => f(A.type, !1), ["enter"]),
                  oe((N) => f(A.type, !1), ["space"])
                ],
                onClick: (N) => f(A.type, !1),
                ref_for: !0,
                ref: (N) => O(N, K, 2)
              }, [
                p.$slots["arrow-down"] ? H(p.$slots, "arrow-down", { key: 0 }) : M("", !0),
                p.$slots["arrow-down"] ? M("", !0) : (h(), ce(i(Wn), { key: 1 }))
              ], 40, Mr)
            ], 64))
          ], 2);
        }), 128)),
        p.is24 ? M("", !0) : (h(), C("div", _r, [
          p.$slots["am-pm-button"] ? H(p.$slots, "am-pm-button", {
            key: 0,
            toggle: E,
            value: U.value
          }) : M("", !0),
          p.$slots["am-pm-button"] ? M("", !0) : (h(), C("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: S,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (_ = i(g).ariaLabels) == null ? void 0 : _.amPmButton,
            tabindex: "0",
            onClick: E,
            onKeydown: [
              oe(Ge(E, ["prevent"]), ["enter"]),
              oe(Ge(E, ["prevent"]), ["space"])
            ]
          }, Se(U.value), 41, Ar))
        ])),
        (h(!0), C(ie, null, De(i(Y), (A, K) => (h(), ce(ft, {
          key: K,
          name: i($)(R[A.type]),
          css: i(B)
        }, {
          default: re(() => [
            R[A.type] ? (h(), ce(wt, {
              key: 0,
              items: P(A.type),
              "disabled-values": i(g).filters.times[A.type],
              "esc-close": p.escClose,
              "aria-labels": i(g).ariaLabels,
              "hide-navigation": p.hideNavigation,
              "onUpdate:modelValue": (l) => X(A.type, l),
              onSelected: (l) => Q(A.type),
              onToggle: (l) => Q(A.type),
              onResetFlow: s[0] || (s[0] = (l) => p.$emit("reset-flow")),
              type: A.type
            }, Be({
              "button-icon": re(() => [
                p.$slots["clock-icon"] ? H(p.$slots, "clock-icon", { key: 0 }) : M("", !0),
                p.$slots["clock-icon"] ? M("", !0) : (h(), ce(i(Un), { key: 1 }))
              ]),
              _: 2
            }, [
              p.$slots[`${A.type}-overlay-value`] ? {
                name: "item",
                fn: re(({ item: l }) => [
                  H(p.$slots, `${A.type}-overlay-value`, {
                    text: l.text,
                    value: l.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : M("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Sr = ["aria-label"], Cr = { class: "dp__overlay_container dp__container_flex" }, Pr = {
  key: 1,
  class: "dp__overlay_row"
}, Nr = ["aria-label"], Rr = /* @__PURE__ */ Ue({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Qe
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-closed"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMatrix: r, setTimePicker: d } = Je(), g = un(), { hideNavigationButtons: $, defaults: B } = Ve(t), { transitionName: R, showTransition: U } = Ft(B.value.transitions), S = W(null), u = W(null), T = W([]), z = W(null);
    Fe(() => {
      a("mount"), !t.timePicker && t.arrowNavigation ? r([Ce(S.value)], "time") : d(!0, t.timePicker);
    });
    const V = F(() => t.range && t.modelAuto ? Gn(t.internalModelValue) : !0), J = W(!1), Y = (O) => ({
      hours: Array.isArray(t.hours) ? t.hours[O] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[O] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[O] : t.seconds
    }), L = F(() => {
      const O = [];
      if (t.range)
        for (let X = 0; X < 2; X++)
          O.push(Y(X));
      else
        O.push(Y(0));
      return O;
    }), P = (O, X = !1, p = "") => {
      X || a("reset-flow"), J.value = O, t.arrowNavigation && (d(O), O || a("overlay-closed")), $t(() => {
        p !== "" && T.value[0] && T.value[0].openChildCmp(p);
      });
    }, x = F(() => ({
      dp__button: !0,
      dp__button_bottom: t.autoApply
    })), Q = lt(g, "timePicker"), ae = (O, X, p) => t.range ? X === 0 ? [O, L.value[1][p]] : [L.value[0][p], O] : O, f = (O) => {
      a("update:hours", O);
    }, D = (O) => {
      a("update:minutes", O);
    }, E = (O) => {
      a("update:seconds", O);
    }, G = () => {
      z.value && t.arrowNavigation && z.value.focus({ preventScroll: !0 });
    };
    return n({ toggleTimePicker: P }), (O, X) => {
      var p;
      return h(), C("div", null, [
        O.timePicker ? M("", !0) : St((h(), C("div", {
          key: 0,
          class: ye(i(x)),
          role: "button",
          "aria-label": (p = i(B).ariaLabels) == null ? void 0 : p.openTimePicker,
          tabindex: "0",
          ref_key: "openTimePickerBtn",
          ref: S,
          onKeydown: [
            X[0] || (X[0] = oe((s) => P(!0), ["enter"])),
            X[1] || (X[1] = oe((s) => P(!0), ["space"]))
          ],
          onClick: X[2] || (X[2] = (s) => P(!0))
        }, [
          O.$slots["clock-icon"] ? H(O.$slots, "clock-icon", { key: 0 }) : M("", !0),
          O.$slots["clock-icon"] ? M("", !0) : (h(), ce(i(Un), { key: 1 }))
        ], 42, Sr)), [
          [Ct, !i($)("time")]
        ]),
        qe(ft, {
          name: i(R)(J.value),
          css: i(U)
        }, {
          default: re(() => {
            var s;
            return [
              J.value || O.timePicker ? (h(), C("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: z,
                tabindex: "0"
              }, [
                ee("div", Cr, [
                  O.$slots["time-picker-overlay"] ? H(O.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: f,
                    setMinutes: D,
                    setSeconds: E
                  }) : M("", !0),
                  O.$slots["time-picker-overlay"] ? M("", !0) : (h(), C("div", Pr, [
                    (h(!0), C(ie, null, De(i(L), (_, A) => St((h(), ce(Tr, Te({ key: A }, {
                      ...O.$props,
                      order: A,
                      hours: _.hours,
                      minutes: _.minutes,
                      seconds: _.seconds,
                      closeTimePickerBtn: u.value,
                      disabled: A === 0 ? O.fixedStart : O.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: T,
                      "onUpdate:hours": (K) => f(ae(K, A, "hours")),
                      "onUpdate:minutes": (K) => D(ae(K, A, "minutes")),
                      "onUpdate:seconds": (K) => E(ae(K, A, "seconds")),
                      onMounted: G,
                      onOverlayClosed: G
                    }), Be({ _: 2 }, [
                      De(i(Q), (K, l) => ({
                        name: K,
                        fn: re((v) => [
                          H(O.$slots, K, Ye(Ze(v)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Ct, A === 0 ? !0 : i(V)]
                    ])), 128))
                  ])),
                  O.timePicker ? M("", !0) : St((h(), C("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: u,
                    class: ye(i(x)),
                    role: "button",
                    "aria-label": (s = i(B).ariaLabels) == null ? void 0 : s.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      X[3] || (X[3] = oe((_) => P(!1), ["enter"])),
                      X[4] || (X[4] = oe((_) => P(!1), ["space"]))
                    ],
                    onClick: X[5] || (X[5] = (_) => P(!1))
                  }, [
                    O.$slots["calendar-icon"] ? H(O.$slots, "calendar-icon", { key: 0 }) : M("", !0),
                    O.$slots["calendar-icon"] ? M("", !0) : (h(), ce(i(Et), { key: 1 }))
                  ], 42, Nr)), [
                    [Ct, !i($)("time")]
                  ])
                ])
              ], 512)) : M("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Ir = (e, n) => {
  const { isDisabled: a, matchDate: t, getWeekFromDate: r } = Ve(n), d = W(null), g = W(w()), $ = (l) => {
    !l.current && n.hideOffsetDates || (d.value = l.value);
  }, B = () => {
    d.value = null;
  }, R = (l) => Array.isArray(e.value) && n.range && e.value[0] && d.value ? l ? Oe(d.value, e.value[0]) : Pe(d.value, e.value[0]) : !0, U = (l, v) => {
    const k = () => e.value ? v ? e.value[0] || null : e.value[1] : null, N = e.value && Array.isArray(e.value) ? k() : null;
    return pe(w(l.value), N);
  }, S = (l) => {
    const v = Array.isArray(e.value) ? e.value[0] : null;
    return l ? !Pe(d.value || null, v) : !0;
  }, u = (l, v = !0) => (n.range || n.weekPicker) && Array.isArray(e.value) ? n.hideOffsetDates && !l.current ? !1 : pe(w(l.value), e.value[v ? 0 : 1]) : n.range ? U(l, v) && S(v) || pe(l.value, Array.isArray(e.value) ? e.value[0] : null) && R(v) : !1, T = (l, v, k) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? l ? !1 : k ? Oe(e.value[0], v.value) : Pe(e.value[0], v.value) : !1, z = (l) => !e.value || n.hideOffsetDates && !l.current ? !1 : n.range ? n.modelAuto && Array.isArray(e.value) ? pe(l.value, e.value[0] ? e.value[0] : g.value) : !1 : n.multiDates && Array.isArray(e.value) ? e.value.some((v) => pe(v, l.value)) : pe(l.value, e.value ? e.value : g.value), V = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (d.value) {
        if (n.hideOffsetDates && !l.current)
          return !1;
        const v = ct(d.value, +n.autoRange), k = r(w(d.value));
        return n.weekPicker ? pe(k[1], w(l.value)) : pe(v, w(l.value));
      }
      return !1;
    }
    return !1;
  }, J = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (d.value) {
        const v = ct(d.value, +n.autoRange);
        if (n.hideOffsetDates && !l.current)
          return !1;
        const k = r(w(d.value));
        return n.weekPicker ? Oe(l.value, k[0]) && Pe(l.value, k[1]) : Oe(l.value, d.value) && Pe(l.value, v);
      }
      return !1;
    }
    return !1;
  }, Y = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (d.value) {
        if (n.hideOffsetDates && !l.current)
          return !1;
        const v = r(w(d.value));
        return n.weekPicker ? pe(v[0], l.value) : pe(d.value, l.value);
      }
      return !1;
    }
    return !1;
  }, L = (l) => zn(e.value, d.value, l.value), P = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, x = () => n.modelAuto ? Gn(n.internalModelValue) : !0, Q = (l) => {
    if (Array.isArray(e.value) && e.value.length || n.weekPicker)
      return !1;
    const v = n.range ? !u(l) && !u(l, !1) : !0;
    return !a(l.value) && !z(l) && !(!l.current && n.hideOffsetDates) && v;
  }, ae = (l) => n.range ? n.modelAuto ? P() && z(l) : !1 : z(l), f = (l) => n.highlight ? t(l.value, n.highlight) : !1, D = (l) => a(l.value) && n.highlightDisabledDays === !1, E = (l) => n.highlightWeekDays && n.highlightWeekDays.includes(l.value.getDay()), G = (l) => (n.range || n.weekPicker) && (n.multiCalendars > 0 ? l.current : !0) && x() && !(!l.current && n.hideOffsetDates) && !z(l) ? L(l) : !1, O = (l) => ({
    dp__cell_offset: !l.current,
    dp__pointer: !n.disabled && !(!l.current && n.hideOffsetDates) && !a(l.value),
    dp__cell_disabled: a(l.value),
    dp__cell_highlight: !D(l) && (f(l) || E(l)) && !ae(l),
    dp__cell_highlight_active: !D(l) && (f(l) || E(l)) && ae(l),
    dp__today: !n.noToday && pe(l.value, g.value) && l.current
  }), X = (l) => ({
    dp__active_date: ae(l),
    dp__date_hover: Q(l)
  }), p = (l) => ({
    ...s(l),
    ..._(l),
    dp__range_between_week: G(l) && n.weekPicker
  }), s = (l) => ({
    dp__range_start: n.multiCalendars > 0 ? l.current && u(l) && x() : u(l) && x(),
    dp__range_end: n.multiCalendars > 0 ? l.current && u(l, !1) && x() : u(l, !1) && x(),
    dp__range_between: G(l) && !n.weekPicker,
    dp__date_hover_start: T(Q(l), l, !0),
    dp__date_hover_end: T(Q(l), l, !1)
  }), _ = (l) => ({
    ...s(l),
    dp__cell_auto_range: J(l),
    dp__cell_auto_range_start: Y(l),
    dp__cell_auto_range_end: V(l)
  }), A = (l) => n.range ? n.autoRange ? _(l) : n.modelAuto ? { ...X(l), ...s(l) } : s(l) : n.weekPicker ? p(l) : X(l);
  return {
    setHoverDate: $,
    clearHoverDate: B,
    getDayClassData: (l) => ({
      ...O(l),
      ...A(l),
      [n.dayClass ? n.dayClass(l.value) : ""]: !0,
      [n.calendarCellClassName]: !!n.calendarCellClassName
    })
  };
}, Or = ["id", "onKeydown"], Br = {
  key: 0,
  class: "dp__sidebar_left"
}, Yr = {
  key: 1,
  class: "dp__preset_ranges"
}, Vr = ["onClick"], Lr = {
  key: 2,
  class: "dp__sidebar_right"
}, Er = {
  key: 3,
  class: "dp__now_wrap"
}, Fr = /* @__PURE__ */ Ue({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Qe
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setMenuFocused: r, setShiftKey: d, control: g } = jn(), { getCalendarDays: $, defaults: B } = Ve(t), R = un(), U = W(null), S = bt({
      timePicker: !!(!t.enableTimePicker || t.timePicker || t.monthPicker),
      monthYearInput: !!t.timePicker,
      calendar: !1
    }), u = W([]), T = W([]), z = W(null), V = W(null), J = W(0), Y = W(!1), L = W(0);
    Fe(() => {
      var Z;
      Y.value = !0, !((Z = t.presetRanges) != null && Z.length) && !R["left-sidebar"] && !R["right-sidebar"] && je();
      const m = Ce(V);
      if (m && !t.textInput && !t.inline && (r(!0), D()), m) {
        const we = (_e) => {
          !t.monthYearComponent && !t.timePickerComponent && !Object.keys(R).length && _e.preventDefault(), _e.stopImmediatePropagation(), _e.stopPropagation();
        };
        m.addEventListener("pointerdown", we), m.addEventListener("mousedown", we);
      }
      document.addEventListener("resize", je);
    }), sn(() => {
      document.removeEventListener("resize", je);
    });
    const { arrowRight: P, arrowLeft: x, arrowDown: Q, arrowUp: ae } = Je(), f = (m) => {
      m || m === 0 ? T.value[m].triggerTransition(
        p.value(m),
        s.value(m)
      ) : T.value.forEach(
        (Z, we) => Z.triggerTransition(p.value(we), s.value(we))
      );
    }, D = () => {
      const m = Ce(V);
      m && m.focus({ preventScroll: !0 });
    }, E = () => {
      var m;
      ((m = t.flow) == null ? void 0 : m.length) && L.value !== -1 && (L.value += 1, a("flow-step", L.value), b());
    }, G = () => {
      L.value = -1;
    }, {
      calendars: O,
      modelValue: X,
      month: p,
      year: s,
      time: _,
      updateTime: A,
      updateMonthYear: K,
      selectDate: l,
      getWeekNum: v,
      monthYearSelect: k,
      handleScroll: N,
      handleArrow: ue,
      handleSwipe: fe,
      getMarker: y,
      selectCurrentDate: c,
      presetDateRange: I
    } = Yl(t, a, E, f, L), { setHoverDate: ve, clearHoverDate: $e, getDayClassData: be } = Ir(X, t);
    Dt(
      O,
      () => {
        t.openOnTop && setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const He = lt(R, "calendar"), Xe = lt(R, "action"), te = lt(R, "timePicker"), le = lt(R, "monthYear"), ke = F(() => t.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), de = F(() => Al(t.yearRange)), vt = F(() => Tl(t.locale, t.monthNameFormat)), je = () => {
      const m = Ce(U);
      m && (J.value = m.getBoundingClientRect().width);
    }, mt = F(() => (m) => $(p.value(m), s.value(m))), et = F(
      () => B.value.multiCalendars > 0 && t.range ? [...Array(B.value.multiCalendars).keys()] : [0]
    ), yt = F(
      () => (m) => m === 1
    ), Ut = F(() => t.monthPicker || t.timePicker || t.yearPicker), Ht = F(
      () => ({
        dp__flex_display: B.value.multiCalendars > 0
      })
    ), Mt = F(() => ({
      dp__instance_calendar: B.value.multiCalendars > 0
    })), ht = F(() => ({
      dp__menu_disabled: t.disabled,
      dp__menu_readonly: t.readonly
    })), Wt = F(
      () => (m) => jt(mt, m)
    ), zt = F(
      () => ({
        dp__menu: !0,
        dp__menu_index: !t.inline,
        dp__relative: t.inline,
        [t.menuClassName]: !!t.menuClassName
      })
    ), jt = (m, Z) => m.value(Z).map((we) => ({
      ...we,
      days: we.days.map((_e) => (_e.marker = y(_e), _e.classData = be(_e), _e))
    })), _t = (m) => {
      m.stopPropagation(), m.stopImmediatePropagation();
    }, hn = () => {
      t.escClose && a("close-picker");
    }, gn = (m, Z = !1) => {
      l(m, Z), t.spaceConfirm && a("select-date");
    }, At = (m) => {
      var Z;
      (Z = t.flow) != null && Z.length && (S[m] = !0, Object.keys(S).filter((we) => !S[we]).length || b());
    }, o = (m, Z, we, _e, ...Ee) => {
      if (t.flow[L.value] === m) {
        const q = _e ? Z.value[0] : Z.value;
        q && q[we](...Ee);
      }
    }, b = () => {
      o("month", u, "toggleMonthPicker", !0, !0), o("year", u, "toggleYearPicker", !0, !0), o("calendar", z, "toggleTimePicker", !1, !1, !0), o("time", z, "toggleTimePicker", !1, !0, !0);
      const m = t.flow[L.value];
      (m === "hours" || m === "minutes" || m === "seconds") && o(m, z, "toggleTimePicker", !1, !0, !0, m);
    }, j = (m) => {
      if (t.arrowNavigation) {
        if (m === "up")
          return ae();
        if (m === "down")
          return Q();
        if (m === "left")
          return x();
        if (m === "right")
          return P();
      } else
        m === "left" || m === "up" ? ue("left", 0, m === "up") : ue("right", 0, m === "down");
    }, ne = (m) => {
      d(m.shiftKey), !t.disableMonthYearSelect && m.code === "Tab" && m.target.classList.contains("dp__menu") && g.value.shiftKeyInMenu && (m.preventDefault(), m.stopImmediatePropagation(), a("close-picker"));
    };
    return n({
      updateMonthYear: K
    }), (m, Z) => {
      var we;
      return h(), ce(ft, {
        appear: "",
        name: (we = i(B).transitions) == null ? void 0 : we.menuAppear,
        mode: "out-in",
        css: !!m.transitions
      }, {
        default: re(() => {
          var _e, Ee;
          return [
            ee("div", {
              id: m.uid ? `dp-menu-${m.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: V,
              role: "dialog",
              class: ye(i(zt)),
              onMouseleave: Z[12] || (Z[12] = (...q) => i($e) && i($e)(...q)),
              onClick: _t,
              onKeydown: [
                oe(hn, ["esc"]),
                Z[13] || (Z[13] = oe(Ge((q) => j("left"), ["prevent"]), ["left"])),
                Z[14] || (Z[14] = oe(Ge((q) => j("up"), ["prevent"]), ["up"])),
                Z[15] || (Z[15] = oe(Ge((q) => j("down"), ["prevent"]), ["down"])),
                Z[16] || (Z[16] = oe(Ge((q) => j("right"), ["prevent"]), ["right"])),
                ne
              ]
            }, [
              (m.disabled || m.readonly) && m.inline ? (h(), C("div", {
                key: 0,
                class: ye(i(ht))
              }, null, 2)) : M("", !0),
              !m.inline && !m.teleportCenter ? (h(), C("div", {
                key: 1,
                class: ye(i(ke))
              }, null, 2)) : M("", !0),
              ee("div", {
                class: ye({
                  dp__menu_content_wrapper: ((_e = m.presetRanges) == null ? void 0 : _e.length) || !!m.$slots["left-sidebar"] || !!m.$slots["right-sidebar"]
                })
              }, [
                m.$slots["left-sidebar"] ? (h(), C("div", Br, [
                  H(m.$slots, "left-sidebar")
                ])) : M("", !0),
                (Ee = m.presetRanges) != null && Ee.length ? (h(), C("div", Yr, [
                  (h(!0), C(ie, null, De(m.presetRanges, (q, st) => (h(), C("div", {
                    key: st,
                    style: ut(q.style || {}),
                    class: "dp__preset_range",
                    onClick: (se) => i(I)(q.range, !!q.slot)
                  }, [
                    q.slot ? H(m.$slots, q.slot, {
                      key: 0,
                      presetDateRange: i(I),
                      label: q.label,
                      range: q.range
                    }) : (h(), C(ie, { key: 1 }, [
                      We(Se(q.label), 1)
                    ], 64))
                  ], 12, Vr))), 128))
                ])) : M("", !0),
                ee("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: U,
                  role: "document"
                }, [
                  ee("div", {
                    class: ye(i(Ht))
                  }, [
                    (h(!0), C(ie, null, De(i(et), (q, st) => (h(), C("div", {
                      key: q,
                      class: ye(i(Mt))
                    }, [
                      !m.disableMonthYearSelect && !m.timePicker ? (h(), ce(Pt(m.monthYearComponent ? m.monthYearComponent : wr), Te({
                        key: 0,
                        ref_for: !0,
                        ref: (se) => {
                          se && (u.value[st] = se);
                        },
                        months: i(vt),
                        years: i(de),
                        month: i(p)(q),
                        year: i(s)(q),
                        instance: q,
                        "internal-model-value": e.internalModelValue
                      }, m.$props, {
                        onMount: Z[0] || (Z[0] = (se) => At("monthYearInput")),
                        onResetFlow: G,
                        onUpdateMonthYear: (se) => i(K)(q, se),
                        onMonthYearSelect: i(k),
                        onOverlayClosed: D
                      }), Be({ _: 2 }, [
                        De(i(le), (se, Xn) => ({
                          name: se,
                          fn: re((Kt) => [
                            H(m.$slots, se, Ye(Ze(Kt)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : M("", !0),
                      qe(sr, Te({
                        ref_for: !0,
                        ref: (se) => {
                          se && (T.value[st] = se);
                        },
                        "specific-mode": i(Ut),
                        "get-week-num": i(v),
                        instance: q,
                        "mapped-dates": i(Wt)(q),
                        month: i(p)(q),
                        year: i(s)(q)
                      }, m.$props, {
                        "flow-step": L.value,
                        "onUpdate:flow-step": Z[1] || (Z[1] = (se) => L.value = se),
                        onSelectDate: (se) => i(l)(se, !i(yt)(q)),
                        onHandleSpace: (se) => gn(se, !i(yt)(q)),
                        onSetHoverDate: Z[2] || (Z[2] = (se) => i(ve)(se)),
                        onHandleScroll: (se) => i(N)(se, q),
                        onHandleSwipe: (se) => i(fe)(se, q),
                        onMount: Z[3] || (Z[3] = (se) => At("calendar")),
                        onResetFlow: G
                      }), Be({ _: 2 }, [
                        De(i(He), (se, Xn) => ({
                          name: se,
                          fn: re((Kt) => [
                            H(m.$slots, se, Ye(Ze({ ...Kt })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  ee("div", null, [
                    m.$slots["time-picker"] ? H(m.$slots, "time-picker", Ye(Te({ key: 0 }, { time: i(_), updateTime: i(A) }))) : (h(), C(ie, { key: 1 }, [
                      m.enableTimePicker && !m.monthPicker && !m.weekPicker ? (h(), ce(Pt(m.timePickerComponent ? m.timePickerComponent : Rr), Te({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: z,
                        hours: i(_).hours,
                        minutes: i(_).minutes,
                        seconds: i(_).seconds,
                        "internal-model-value": e.internalModelValue
                      }, m.$props, {
                        onMount: Z[4] || (Z[4] = (q) => At("timePicker")),
                        "onUpdate:hours": Z[5] || (Z[5] = (q) => i(A)(q)),
                        "onUpdate:minutes": Z[6] || (Z[6] = (q) => i(A)(q, !1)),
                        "onUpdate:seconds": Z[7] || (Z[7] = (q) => i(A)(q, !1, !0)),
                        onResetFlow: G,
                        onOverlayClosed: D
                      }), Be({ _: 2 }, [
                        De(i(te), (q, st) => ({
                          name: q,
                          fn: re((se) => [
                            H(m.$slots, q, Ye(Ze(se)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : M("", !0)
                    ], 64))
                  ])
                ], 512),
                m.$slots["right-sidebar"] ? (h(), C("div", Lr, [
                  H(m.$slots, "right-sidebar")
                ])) : M("", !0),
                m.showNowButton ? (h(), C("div", Er, [
                  m.$slots["now-button"] ? H(m.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: i(c)
                  }) : M("", !0),
                  m.$slots["now-button"] ? M("", !0) : (h(), C("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: Z[8] || (Z[8] = (...q) => i(c) && i(c)(...q))
                  }, Se(m.nowButtonLabel), 1))
                ])) : M("", !0)
              ], 2),
              !m.autoApply || m.keepActionRow ? (h(), ce(Pt(m.actionRowComponent ? m.actionRowComponent : ql), Te({
                key: 2,
                "menu-mount": Y.value,
                "calendar-width": J.value,
                "internal-model-value": e.internalModelValue
              }, m.$props, {
                onClosePicker: Z[9] || (Z[9] = (q) => m.$emit("close-picker")),
                onSelectDate: Z[10] || (Z[10] = (q) => m.$emit("select-date")),
                onInvalidSelect: Z[11] || (Z[11] = (q) => m.$emit("invalid-select"))
              }), Be({ _: 2 }, [
                De(i(Xe), (q, st) => ({
                  name: q,
                  fn: re((se) => [
                    H(m.$slots, q, Ye(Ze({ ...se })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : M("", !0)
            ], 42, Or)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), Ur = typeof window < "u" ? window : void 0, nn = () => {
}, Hr = (e) => Jn() ? (Qn(e), !0) : !1, Wr = (e, n, a, t) => {
  if (!e)
    return nn;
  let r = nn;
  const d = Dt(
    () => i(e),
    ($) => {
      r(), $ && ($.addEventListener(n, a, t), r = () => {
        $.removeEventListener(n, a, t), r = nn;
      });
    },
    { immediate: !0, flush: "post" }
  ), g = () => {
    d(), r();
  };
  return Hr(g), g;
}, zr = (e, n, a, t = {}) => {
  const { window: r = Ur, event: d = "pointerdown" } = t;
  return r ? Wr(r, d, ($) => {
    const B = Ce(e), R = Ce(n);
    !B || !R || B === $.target || $.composedPath().includes(B) || $.composedPath().includes(R) || a($);
  }, { passive: !0 }) : void 0;
}, jr = /* @__PURE__ */ Ue({
  __name: "VueDatePicker",
  props: {
    ...Qe
  },
  emits: [
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = un(), d = W(!1), g = an(t, "modelValue"), $ = an(t, "timezone"), B = W(null), R = W(null), U = W(!1), { setMenuFocused: S, setShiftKey: u } = jn(), { clearArrowNav: T } = Je(), { validateDate: z, isValidTime: V, defaults: J } = Ve(t);
    Fe(() => {
      E(t.modelValue), t.inline || (window.addEventListener("scroll", _), window.addEventListener("resize", A)), t.inline && (d.value = !0);
    }), sn(() => {
      t.inline || (window.removeEventListener("scroll", _), window.removeEventListener("resize", A));
    });
    const Y = lt(r, "all", t.presetRanges), L = lt(r, "input");
    Dt(
      [g, $],
      () => {
        E(g.value);
      },
      { deep: !0 }
    );
    const { openOnTop: P, menuPosition: x, setMenuPosition: Q, setInitialPosition: ae } = El(
      B,
      R,
      a,
      t
    ), {
      inputValue: f,
      internalModelValue: D,
      parseExternalModelValue: E,
      emitModelValue: G,
      formatInputValue: O,
      checkBeforeEmit: X
    } = Vl(a, t, U), p = F(
      () => ({
        dp__main: !0,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: t.inline,
        dp__flex_display_with_input: t.inlineWithInput
      })
    ), s = F(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), _ = () => {
      d.value && (t.closeOnScroll ? y() : t.autoPosition ? Q() : window.removeEventListener("scroll", _));
    }, A = () => {
      d.value && Q();
    }, K = () => {
      !t.disabled && !t.readonly && (ae(), d.value = !0, $t().then(() => {
        Q(), d.value && a("open");
      }), d.value || fe(), E(t.modelValue));
    }, l = () => {
      f.value = "", fe(), a("update:model-value", null), a("cleared"), y();
    }, v = () => {
      const le = D.value;
      return !le || !Array.isArray(le) && z(le) ? !0 : Array.isArray(le) ? le.length === 2 && z(le[0]) && z(le[1]) ? !0 : z(le[0]) : !1;
    }, k = () => {
      X() && v() ? (G(), y()) : a("invalid-select", D.value);
    }, N = (le) => {
      G(), t.closeOnAutoApply && !le && y();
    }, ue = (le = !1) => {
      t.autoApply && V(D.value) && v() && (t.range && Array.isArray(D.value) ? (t.partialRange || D.value.length === 2) && N(le) : N(le));
    }, fe = () => {
      t.textInput || (D.value = null);
    }, y = () => {
      t.inline || (d.value && (d.value = !1, S(!1), u(!1), T(), a("closed"), ae(), f.value && E(g.value)), fe(), R.value && R.value.focusInput());
    }, c = (le, ke) => {
      if (!le) {
        D.value = null;
        return;
      }
      D.value = le, ke && (k(), a("text-submit"));
    }, I = () => {
      t.autoApply && V(D.value) && G();
    }, ve = () => d.value ? y() : K(), $e = (le) => {
      D.value = le;
    }, be = F(() => t.textInput && J.value.textInputOptions.format), He = () => {
      be.value && (U.value = !0, O()), a("focus");
    }, Xe = () => {
      be.value && (U.value = !1, O()), a("blur");
    }, te = (le) => {
      B.value && B.value.updateMonthYear(0, {
        month: Nn(le.month),
        year: Nn(le.year)
      });
    };
    return zr(
      B,
      R,
      t.onClickOutside ? () => t.onClickOutside(v) : y
    ), n({
      closeMenu: y,
      selectDate: k,
      clearValue: l,
      openMenu: K,
      onScroll: _,
      formatInputValue: O,
      updateInternalModelValue: $e,
      setMonthYear: te
    }), (le, ke) => (h(), C("div", {
      class: ye(i(p))
    }, [
      qe(xl, Te({
        ref_key: "inputRef",
        ref: R,
        "is-menu-open": d.value,
        "input-value": i(f),
        "onUpdate:input-value": ke[0] || (ke[0] = (de) => nt(f) ? f.value = de : null)
      }, le.$props, {
        onClear: l,
        onOpen: K,
        onSetInputDate: c,
        onSetEmptyDate: i(G),
        onSelectDate: k,
        onToggle: ve,
        onClose: y,
        onFocus: He,
        onBlur: Xe
      }), Be({ _: 2 }, [
        De(i(L), (de, vt) => ({
          name: de,
          fn: re((je) => [
            H(le.$slots, de, Ye(Ze(je)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      d.value ? (h(), ce(ea, {
        key: 0,
        to: le.teleport,
        disabled: le.inline
      }, [
        d.value ? (h(), ce(Fr, Te({
          key: 0,
          ref_key: "dpMenuRef",
          ref: B,
          class: i(s),
          style: i(x),
          "open-on-top": i(P)
        }, le.$props, {
          "internal-model-value": i(D),
          "onUpdate:internal-model-value": ke[1] || (ke[1] = (de) => nt(D) ? D.value = de : null),
          onClosePicker: y,
          onSelectDate: k,
          onAutoApply: ue,
          onTimeUpdate: I,
          onFlowStep: ke[2] || (ke[2] = (de) => le.$emit("flow-step", de)),
          onUpdateMonthYear: ke[3] || (ke[3] = (de) => le.$emit("update-month-year", de)),
          onInvalidSelect: ke[4] || (ke[4] = (de) => le.$emit("invalid-select", i(D))),
          onRecalculatePosition: i(Q)
        }), Be({ _: 2 }, [
          De(i(Y), (de, vt) => ({
            name: de,
            fn: re((je) => [
              H(le.$slots, de, Ye(Ze({ ...je })))
            ])
          }))
        ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : M("", !0)
      ], 8, ["to", "disabled"])) : M("", !0)
    ], 2));
  }
}), Zn = /* @__PURE__ */ (() => {
  const e = jr;
  return e.install = (n) => {
    n.component("Vue3DatePicker", e);
  }, e;
})(), Kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Kr).forEach(([e, n]) => {
  e !== "default" && (Zn[e] = n);
});
export {
  Zn as default
};
