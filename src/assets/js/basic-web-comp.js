function g() {
}
const it = (t) => t;
function Ee(t) {
  return t();
}
function ze() {
  return /* @__PURE__ */ Object.create(null);
}
function Z(t) {
  t.forEach(Ee);
}
function pe(t) {
  return typeof t == "function";
}
function J(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function ot(t) {
  return Object.keys(t).length === 0;
}
const De = typeof window < "u";
let st = De ? () => window.performance.now() : () => Date.now(), Fe = De ? (t) => requestAnimationFrame(t) : g;
const ie = /* @__PURE__ */ new Set();
function Je(t) {
  ie.forEach((e) => {
    e.c(t) || (ie.delete(e), e.f());
  }), ie.size !== 0 && Fe(Je);
}
function ct(t) {
  let e;
  return ie.size === 0 && Fe(Je), {
    promise: new Promise((n) => {
      ie.add(e = { c: t, f: n });
    }),
    abort() {
      ie.delete(e);
    }
  };
}
function u(t, e) {
  t.appendChild(e);
}
function Ke(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function at(t) {
  const e = v("style");
  return ut(Ke(t), e), e.sheet;
}
function ut(t, e) {
  return u(t.head || t, e), e.sheet;
}
function E(t, e, n) {
  t.insertBefore(e, n || null);
}
function z(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Qe(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function v(t) {
  return document.createElement(t);
}
function F(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function W(t) {
  return document.createTextNode(t);
}
function j() {
  return W(" ");
}
function Ce() {
  return W("");
}
function re(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function o(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function ft(t) {
  return Array.from(t.childNodes);
}
function Me(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function Se(t, e) {
  t.value = e ?? "";
}
function q(t, e, n, r) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function ue(t, e, n) {
  for (let r = 0; r < t.options.length; r += 1) {
    const l = t.options[r];
    if (l.__value === e) {
      l.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function He(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function Xe(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const l = document.createEvent("CustomEvent");
  return l.initCustomEvent(t, n, r, e), l;
}
function K(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
const _e = /* @__PURE__ */ new Map();
let me = 0;
function dt(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function ht(t, e) {
  const n = { stylesheet: at(e), rules: {} };
  return _e.set(t, n), n;
}
function je(t, e, n, r, l, s, i, c = 0) {
  const f = 16.666 / r;
  let d = `{
`;
  for (let x = 0; x <= 1; x += f) {
    const $ = e + (n - e) * s(x);
    d += x * 100 + `%{${i($, 1 - $)}}
`;
  }
  const _ = d + `100% {${i(n, 1 - n)}}
}`, a = `__svelte_${dt(_)}_${c}`, h = Ke(t), { stylesheet: p, rules: y } = _e.get(h) || ht(h, t);
  y[a] || (y[a] = !0, p.insertRule(`@keyframes ${a} ${_}`, p.cssRules.length));
  const w = t.style.animation || "";
  return t.style.animation = `${w ? `${w}, ` : ""}${a} ${r}ms linear ${l}ms 1 both`, me += 1, a;
}
function pt(t, e) {
  const n = (t.style.animation || "").split(", "), r = n.filter(
    e ? (s) => s.indexOf(e) < 0 : (s) => s.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), l = n.length - r.length;
  l && (t.style.animation = r.join(", "), me -= l, me || _t());
}
function _t() {
  Fe(() => {
    me || (_e.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && z(e);
    }), _e.clear());
  });
}
let ae;
function ce(t) {
  ae = t;
}
function mt() {
  if (!ae)
    throw new Error("Function called outside component initialization");
  return ae;
}
function gt() {
  const t = mt();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const s = Xe(e, n, { cancelable: r });
      return l.slice().forEach((i) => {
        i.call(t, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
const le = [], ge = [];
let oe = [];
const xe = [], bt = /* @__PURE__ */ Promise.resolve();
let ke = !1;
function vt() {
  ke || (ke = !0, bt.then(P));
}
function ee(t) {
  oe.push(t);
}
function Ne(t) {
  xe.push(t);
}
const ye = /* @__PURE__ */ new Set();
let ne = 0;
function P() {
  if (ne !== 0)
    return;
  const t = ae;
  do {
    try {
      for (; ne < le.length; ) {
        const e = le[ne];
        ne++, ce(e), $t(e.$$);
      }
    } catch (e) {
      throw le.length = 0, ne = 0, e;
    }
    for (ce(null), le.length = 0, ne = 0; ge.length; )
      ge.pop()();
    for (let e = 0; e < oe.length; e += 1) {
      const n = oe[e];
      ye.has(n) || (ye.add(n), n());
    }
    oe.length = 0;
  } while (le.length);
  for (; xe.length; )
    xe.pop()();
  ke = !1, ye.clear(), ce(t);
}
function $t(t) {
  if (t.fragment !== null) {
    t.update(), Z(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ee);
  }
}
function yt(t) {
  const e = [], n = [];
  oe.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), oe = e;
}
let se;
function wt() {
  return se || (se = Promise.resolve(), se.then(() => {
    se = null;
  })), se;
}
function we(t, e, n) {
  t.dispatchEvent(Xe(`${e ? "intro" : "outro"}${n}`));
}
const fe = /* @__PURE__ */ new Set();
let U;
function de() {
  U = {
    r: 0,
    c: [],
    p: U
    // parent group
  };
}
function he() {
  U.r || Z(U.c), U = U.p;
}
function O(t, e) {
  t && t.i && (fe.delete(t), t.i(e));
}
function S(t, e, n, r) {
  if (t && t.o) {
    if (fe.has(t))
      return;
    fe.add(t), U.c.push(() => {
      fe.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
const xt = { duration: 0 };
function Re(t, e, n, r) {
  const l = { direction: "both" };
  let s = e(t, n, l), i = r ? 0 : 1, c = null, f = null, d = null;
  function _() {
    d && pt(t, d);
  }
  function a(p, y) {
    const w = p.b - i;
    return y *= Math.abs(w), {
      a: i,
      b: p.b,
      d: w,
      duration: y,
      start: p.start,
      end: p.start + y,
      group: p.group
    };
  }
  function h(p) {
    const { delay: y = 0, duration: w = 300, easing: x = it, tick: $ = g, css: M } = s || xt, T = {
      start: st() + y,
      b: p
    };
    p || (T.group = U, U.r += 1), c || f ? f = T : (M && (_(), d = je(t, i, p, w, y, x, M)), p && $(0, 1), c = a(T, w), ee(() => we(t, p, "start")), ct((C) => {
      if (f && C > f.start && (c = a(f, w), f = null, we(t, c.b, "start"), M && (_(), d = je(t, i, c.b, c.duration, 0, x, s.css))), c) {
        if (C >= c.end)
          $(i = c.b, 1 - i), we(t, c.b, "end"), f || (c.b ? _() : --c.group.r || Z(c.group.c)), c = null;
        else if (C >= c.start) {
          const b = C - c.start;
          i = c.a + c.d * x(b / c.duration), $(i, 1 - i);
        }
      }
      return !!(c || f);
    }));
  }
  return {
    run(p) {
      pe(s) ? wt().then(() => {
        s = s(l), h(p);
      }) : h(p);
    },
    end() {
      _(), c = f = null;
    }
  };
}
function Te(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function Y(t) {
  t && t.c();
}
function G(t, e, n, r) {
  const { fragment: l, after_update: s } = t.$$;
  l && l.m(e, n), r || ee(() => {
    const i = t.$$.on_mount.map(Ee).filter(pe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Z(i), t.$$.on_mount = [];
  }), s.forEach(ee);
}
function D(t, e) {
  const n = t.$$;
  n.fragment !== null && (yt(n.after_update), Z(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function kt(t, e) {
  t.$$.dirty[0] === -1 && (le.push(t), vt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Q(t, e, n, r, l, s, i, c = [-1]) {
  const f = ae;
  ce(t);
  const d = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: g,
    not_equal: l,
    bound: ze(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: ze(),
    dirty: c,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  i && i(d.root);
  let _ = !1;
  if (d.ctx = n ? n(t, e.props || {}, (a, h, ...p) => {
    const y = p.length ? p[0] : h;
    return d.ctx && l(d.ctx[a], d.ctx[a] = y) && (!d.skip_bound && d.bound[a] && d.bound[a](y), _ && kt(t, a)), h;
  }) : [], d.update(), _ = !0, Z(d.before_update), d.fragment = r ? r(d.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = ft(e.target);
      d.fragment && d.fragment.l(a), a.forEach(z);
    } else
      d.fragment && d.fragment.c();
    e.intro && O(t.$$.fragment), G(t, e.target, e.anchor, e.customElement), P();
  }
  ce(f);
}
let B;
typeof HTMLElement == "function" && (B = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(Ee).filter(pe);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    Z(this.$$.on_disconnect);
  }
  $destroy() {
    D(this, 1), this.$destroy = g;
  }
  $on(t, e) {
    if (!pe(e))
      return g;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !ot(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function Et(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Le(t, { delay: e = 0, duration: n = 400, easing: r = Et, axis: l = "y" } = {}) {
  const s = getComputedStyle(t), i = +s.opacity, c = l === "y" ? "height" : "width", f = parseFloat(s[c]), d = l === "y" ? ["top", "bottom"] : ["left", "right"], _ = d.map(($) => `${$[0].toUpperCase()}${$.slice(1)}`), a = parseFloat(s[`padding${_[0]}`]), h = parseFloat(s[`padding${_[1]}`]), p = parseFloat(s[`margin${_[0]}`]), y = parseFloat(s[`margin${_[1]}`]), w = parseFloat(s[`border${_[0]}Width`]), x = parseFloat(s[`border${_[1]}Width`]);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: ($) => `overflow: hidden;opacity: ${Math.min($ * 20, 1) * i};${c}: ${$ * f}px;padding-${d[0]}: ${$ * a}px;padding-${d[1]}: ${$ * h}px;margin-${d[0]}: ${$ * p}px;margin-${d[1]}: ${$ * y}px;border-${d[0]}-width: ${$ * w}px;border-${d[1]}-width: ${$ * x}px;`
  };
}
function Ft(t) {
  let e, n;
  return {
    c() {
      e = F("svg"), n = F("polyline"), this.c = g, o(n, "points", "9 18 15 12 9 6"), o(e, "xmlns", "http://www.w3.org/2000/svg"), o(e, "width", "24"), o(e, "height", "24"), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "stroke", "slategray"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round"), o(e, "class", "feather feather-chevron-right");
    },
    m(r, l) {
      E(r, e, l), u(e, n);
    },
    p: g,
    i: g,
    o: g,
    d(r) {
      r && z(e);
    }
  };
}
class Ye extends B {
  constructor(e) {
    super(), Q(
      this,
      {
        target: this.shadowRoot,
        props: K(this.attributes),
        customElement: !0
      },
      null,
      Ft,
      J,
      {},
      null
    ), e && e.target && E(e.target, this, e.anchor);
  }
}
customElements.define("my-closed-icon-svg", Ye);
function Ct(t) {
  let e, n;
  return {
    c() {
      e = F("svg"), n = F("polyline"), this.c = g, o(n, "points", "6 9 12 15 18 9"), o(e, "xmlns", "http://www.w3.org/2000/svg"), o(e, "width", "24"), o(e, "height", "24"), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "stroke", "slategray"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round"), o(e, "class", "feather feather-chevron-down");
    },
    m(r, l) {
      E(r, e, l), u(e, n);
    },
    p: g,
    i: g,
    o: g,
    d(r) {
      r && z(e);
    }
  };
}
class Ze extends B {
  constructor(e) {
    super(), Q(
      this,
      {
        target: this.shadowRoot,
        props: K(this.attributes),
        customElement: !0
      },
      null,
      Ct,
      J,
      {},
      null
    ), e && e.target && E(e.target, this, e.anchor);
  }
}
customElements.define("my-opened-icon-svg", Ze);
function Mt(t) {
  let e, n, r, l, s, i, c, f, d, _, a, h, p;
  return {
    c() {
      e = F("svg"), n = F("g"), r = F("g"), l = F("polygon"), s = F("path"), i = F("path"), c = F("path"), f = F("path"), d = F("path"), _ = F("path"), a = F("path"), h = F("path"), p = F("polygon"), this.c = g, o(l, "fill", "#ffca28"), o(l, "points", "46,3.414 46,14 56.586,14 		"), o(s, "fill", "#ffca28"), o(s, "d", `M45,16c-0.553,0-1-0.447-1-1V2H8C6.896,2,6,2.896,6,4v56c0,1.104,0.896,2,2,2h48c1.104,0,2-0.896,2-2V16
			H45z`), o(i, "fill", "#394240"), o(i, "d", "M14,26c0,0.553,0.447,1,1,1h34c0.553,0,1-0.447,1-1s-0.447-1-1-1H15C14.447,25,14,25.447,14,26z"), o(c, "fill", "#394240"), o(c, "d", "M49,37H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,37,49,37z"), o(f, "fill", "#394240"), o(f, "d", "M49,43H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,43,49,43z"), o(d, "fill", "#394240"), o(d, "d", "M49,49H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,49,49,49z"), o(_, "fill", "#394240"), o(_, "d", "M49,31H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,31,49,31z"), o(a, "fill", "#394240"), o(a, "d", "M15,20h16c0.553,0,1-0.447,1-1s-0.447-1-1-1H15c-0.553,0-1,0.447-1,1S14.447,20,15,20z"), o(h, "fill", "#ffa000"), o(h, "d", `M59.706,14.292L45.708,0.294C45.527,0.112,45.277,0,45,0H8C5.789,0,4,1.789,4,4v56c0,2.211,1.789,4,4,4h48
		c2.211,0,4-1.789,4-4V15C60,14.723,59.888,14.473,59.706,14.292z M46,3.414L56.586,14H46V3.414z M58,60c0,1.104-0.896,2-2,2H8
		c-1.104,0-2-0.896-2-2V4c0-1.104,0.896-2,2-2h36v13c0,0.553,0.447,1,1,1h13V60z`), o(p, "opacity", "0.15"), o(p, "fill", "#ffa000"), o(p, "points", "46,3.414 56.586,14 46,14 	"), o(e, "version", "1.0"), o(e, "id", "Layer_1"), o(e, "xmlns", "http://www.w3.org/2000/svg"), o(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), o(e, "width", "18px"), o(e, "height", "18px"), o(e, "viewBox", "0 0 64 64"), o(e, "enable-background", "new 0 0 64 64"), o(e, "xml:space", "preserve");
    },
    m(y, w) {
      E(y, e, w), u(e, n), u(n, r), u(r, l), u(r, s), u(n, i), u(n, c), u(n, f), u(n, d), u(n, _), u(n, a), u(n, h), u(n, p);
    },
    p: g,
    i: g,
    o: g,
    d(y) {
      y && z(e);
    }
  };
}
class et extends B {
  constructor(e) {
    super(), Q(
      this,
      {
        target: this.shadowRoot,
        props: K(this.attributes),
        customElement: !0
      },
      null,
      Mt,
      J,
      {},
      null
    ), e && e.target && E(e.target, this, e.anchor);
  }
}
customElements.define("my-file-icon-svg", et);
function Ot(t) {
  let e, n, r;
  return {
    c() {
      e = F("svg"), n = F("path"), r = F("path"), this.c = g, o(n, "fill", "#ffa000"), o(n, "d", "M11.8 3.4H6.4L5.2 2.2h-3c-.66 0-1.2.54-1.2 1.2v2.4h12V4.6c0-.66-.54-1.2-1.2-1.2z"), o(r, "fill", "#ffca28"), o(r, "d", "M11.8 3.4H2.2c-.66 0-1.2.54-1.2 1.2v6c0 .66.54 1.2 1.2 1.2h9.6c.66 0 1.2-.54 1.2-1.2v-6c0-.66-.54-1.2-1.2-1.2z"), o(e, "width", "24px"), o(e, "height", "24px"), o(e, "viewBox", "0 0 14 14"), o(e, "role", "img"), o(e, "focusable", "false"), o(e, "aria-hidden", "true"), o(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, s) {
      E(l, e, s), u(e, n), u(e, r);
    },
    p: g,
    i: g,
    o: g,
    d(l) {
      l && z(e);
    }
  };
}
class tt extends B {
  constructor(e) {
    super(), Q(
      this,
      {
        target: this.shadowRoot,
        props: K(this.attributes),
        customElement: !0
      },
      null,
      Ot,
      J,
      {},
      null
    ), e && e.target && E(e.target, this, e.anchor);
  }
}
customElements.define("my-closed-folder-icon-svg", tt);
function zt(t) {
  let e, n, r;
  return {
    c() {
      e = F("svg"), n = F("path"), r = F("path"), this.c = g, o(n, "fill", "#ffa000"), o(n, "d", "M10.67276443 3.58608316H6.12087531L4.98290303 2.44811088h-2.8449307c-.62588475 0-1.13797228.51208753-1.13797228 1.13797228v6.82783368c0 .62588475.51208753 1.13797228 1.13797228 1.13797228h8.81928517c.48363822 0 .85347921-.369841.85347921-.85347921V4.72405544c0-.62588475-.51208753-1.13797228-1.13797228-1.13797228z"), o(r, "fill", "#ffca28"), o(r, "d", "M11.86763532 5.29304158H4.21477174c-.54053683 0-1.02417505.3982903-1.10952297.93882713l-.96727644 5.32002041h9.01843032c.54053683 0 1.02417505-.3982903 1.10952297-.93882713L12.9771583 6.630159c.14224653-.68278337-.3982903-1.33711743-1.10952298-1.33711743z"), o(e, "width", "24px"), o(e, "height", "24px"), o(e, "viewBox", "0 0 14 14"), o(e, "role", "img"), o(e, "focusable", "false"), o(e, "aria-hidden", "true"), o(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, s) {
      E(l, e, s), u(e, n), u(e, r);
    },
    p: g,
    i: g,
    o: g,
    d(l) {
      l && z(e);
    }
  };
}
class nt extends B {
  constructor(e) {
    super(), Q(
      this,
      {
        target: this.shadowRoot,
        props: K(this.attributes),
        customElement: !0
      },
      null,
      zt,
      J,
      {},
      null
    ), e && e.target && E(e.target, this, e.anchor);
  }
}
customElements.define("my-open-folder-icon-svg", nt);
function Ve(t, e, n) {
  const r = t.slice();
  return r[4] = e[n], r;
}
function St(t) {
  let e, n;
  return e = new Ze({}), {
    c() {
      Y(e.$$.fragment);
    },
    m(r, l) {
      G(e, r, l), n = !0;
    },
    i(r) {
      n || (O(e.$$.fragment, r), n = !0);
    },
    o(r) {
      S(e.$$.fragment, r), n = !1;
    },
    d(r) {
      D(e, r);
    }
  };
}
function Ht(t) {
  let e, n;
  return e = new Ye({}), {
    c() {
      Y(e.$$.fragment);
    },
    m(r, l) {
      G(e, r, l), n = !0;
    },
    i(r) {
      n || (O(e.$$.fragment, r), n = !0);
    },
    o(r) {
      S(e.$$.fragment, r), n = !1;
    },
    d(r) {
      D(e, r);
    }
  };
}
function jt(t) {
  let e, n, r;
  return n = new et({}), {
    c() {
      e = v("div"), Y(n.$$.fragment), q(e, "margin-left", "10px");
    },
    m(l, s) {
      E(l, e, s), G(n, e, null), r = !0;
    },
    i(l) {
      r || (O(n.$$.fragment, l), r = !0);
    },
    o(l) {
      S(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && z(e), D(n);
    }
  };
}
function Nt(t) {
  let e, n, r;
  return n = new tt({}), {
    c() {
      e = v("div"), Y(n.$$.fragment), q(e, "margin-left", "5px");
    },
    m(l, s) {
      E(l, e, s), G(n, e, null), r = !0;
    },
    i(l) {
      r || (O(n.$$.fragment, l), r = !0);
    },
    o(l) {
      S(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && z(e), D(n);
    }
  };
}
function Rt(t) {
  let e, n, r;
  return n = new nt({}), {
    c() {
      e = v("div"), Y(n.$$.fragment), q(e, "margin-left", "5px");
    },
    m(l, s) {
      E(l, e, s), G(n, e, null), r = !0;
    },
    i(l) {
      r || (O(n.$$.fragment, l), r = !0);
    },
    o(l) {
      S(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && z(e), D(n);
    }
  };
}
function Ae(t) {
  let e, n, r = (
    /*node*/
    t[0].children
  ), l = [];
  for (let i = 0; i < r.length; i += 1)
    l[i] = Pe(Ve(t, r, i));
  const s = (i) => S(l[i], 1, 1, () => {
    l[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = Ce();
    },
    m(i, c) {
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(i, c);
      E(i, e, c), n = !0;
    },
    p(i, c) {
      if (c & /*node, level*/
      3) {
        r = /*node*/
        i[0].children;
        let f;
        for (f = 0; f < r.length; f += 1) {
          const d = Ve(i, r, f);
          l[f] ? (l[f].p(d, c), O(l[f], 1)) : (l[f] = Pe(d), l[f].c(), O(l[f], 1), l[f].m(e.parentNode, e));
        }
        for (de(), f = r.length; f < l.length; f += 1)
          s(f);
        he();
      }
    },
    i(i) {
      if (!n) {
        for (let c = 0; c < r.length; c += 1)
          O(l[c]);
        n = !0;
      }
    },
    o(i) {
      l = l.filter(Boolean);
      for (let c = 0; c < l.length; c += 1)
        S(l[c]);
      n = !1;
    },
    d(i) {
      Qe(l, i), i && z(e);
    }
  };
}
function Pe(t) {
  let e, n;
  return e = new be({
    props: {
      node: (
        /*child*/
        t[4]
      ),
      level: (
        /*level*/
        t[1] + 1
      )
    }
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(r, l) {
      G(e, r, l), n = !0;
    },
    p(r, l) {
      const s = {};
      l & /*node*/
      1 && (s.node = /*child*/
      r[4]), l & /*level*/
      2 && (s.level = /*level*/
      r[1] + 1), e.$set(s);
    },
    i(r) {
      n || (O(e.$$.fragment, r), n = !0);
    },
    o(r) {
      S(e.$$.fragment, r), n = !1;
    },
    d(r) {
      D(e, r);
    }
  };
}
function Tt(t) {
  let e, n, r, l, s, i, c, f, d, _ = (
    /*node*/
    (t[0] && /*node*/
    t[0].data) + ""
  ), a, h, p, y, w, x, $, M;
  const T = [Ht, St], C = [];
  function b(m, A) {
    return (
      /*node*/
      m[0] && /*node*/
      m[0].type === "Folder" && !/*node*/
      m[0].expanded ? 0 : (
        /*node*/
        m[0] && /*node*/
        m[0].type === "Folder" ? 1 : -1
      )
    );
  }
  ~(r = b(t)) && (l = C[r] = T[r](t));
  const L = [Rt, Nt, jt], H = [];
  function V(m, A) {
    return (
      /*node*/
      m[0] && /*node*/
      m[0].type === "Folder" && /*node*/
      m[0].expanded ? 0 : (
        /*node*/
        m[0] && /*node*/
        m[0].type === "Folder" ? 1 : (
          /*node*/
          m[0] && /*node*/
          m[0].type === "File" ? 2 : -1
        )
      )
    );
  }
  ~(i = V(t)) && (c = H[i] = L[i](t));
  let k = (
    /*node*/
    t[0] && /*node*/
    t[0].expanded && /*node*/
    t[0].children && Ae(t)
  );
  return {
    c() {
      e = v("div"), n = v("li"), l && l.c(), s = j(), c && c.c(), f = j(), d = v("p"), a = W(_), p = j(), k && k.c(), y = j(), w = v("style"), w.textContent = `li {
      border-bottom: solid 2px #eee;
      margin: 0 0;
      padding: 0.5em;
      background: #fafafa;
      display: flex;
      align-items:center;
    }`, this.c = g, q(d, "margin-left", "10px"), q(d, "font-family", "circular"), q(d, "color", "slategrey"), q(
        n,
        "padding-left",
        /*level*/
        t[1] * 2 + "rem"
      );
    },
    m(m, A) {
      E(m, e, A), u(e, n), ~r && C[r].m(n, null), u(n, s), ~i && H[i].m(n, null), u(n, f), u(n, d), u(d, a), u(e, p), k && k.m(e, null), u(e, y), u(e, w), x = !0, $ || (M = re(
        n,
        "click",
        /*toggle*/
        t[2]
      ), $ = !0);
    },
    p(m, [A]) {
      let X = r;
      r = b(m), r !== X && (l && (de(), S(C[X], 1, 1, () => {
        C[X] = null;
      }), he()), ~r ? (l = C[r], l || (l = C[r] = T[r](m), l.c()), O(l, 1), l.m(n, s)) : l = null);
      let te = i;
      i = V(m), i !== te && (c && (de(), S(H[te], 1, 1, () => {
        H[te] = null;
      }), he()), ~i ? (c = H[i], c || (c = H[i] = L[i](m), c.c()), O(c, 1), c.m(n, f)) : c = null), (!x || A & /*node*/
      1) && _ !== (_ = /*node*/
      (m[0] && /*node*/
      m[0].data) + "") && Me(a, _), (!x || A & /*level*/
      2) && q(
        n,
        "padding-left",
        /*level*/
        m[1] * 2 + "rem"
      ), /*node*/
      m[0] && /*node*/
      m[0].expanded && /*node*/
      m[0].children ? k ? (k.p(m, A), A & /*node*/
      1 && O(k, 1)) : (k = Ae(m), k.c(), O(k, 1), k.m(e, y)) : k && (de(), S(k, 1, 1, () => {
        k = null;
      }), he());
    },
    i(m) {
      x || (O(l), O(c), ee(() => {
        x && (h || (h = Re(n, Le, {}, !0)), h.run(1));
      }), O(k), x = !0);
    },
    o(m) {
      S(l), S(c), h || (h = Re(n, Le, {}, !1)), h.run(0), S(k), x = !1;
    },
    d(m) {
      m && z(e), ~r && C[r].d(), ~i && H[i].d(), m && h && h.end(), k && k.d(), $ = !1, M();
    }
  };
}
function Lt(t, e, n) {
  let { node: r } = e, { level: l = 0 } = e;
  function s() {
    n(0, r.expanded = !r.expanded, r);
  }
  const i = () => n(0, r);
  return t.$$set = (c) => {
    "node" in c && n(0, r = c.node), "level" in c && n(1, l = c.level);
  }, [r, l, s, i];
}
class be extends B {
  constructor(e) {
    super(), Q(
      this,
      {
        target: this.shadowRoot,
        props: K(this.attributes),
        customElement: !0
      },
      Lt,
      Tt,
      J,
      { node: 0, level: 1, rerender: 3 },
      null
    ), e && (e.target && E(e.target, this, e.anchor), e.props && (this.$set(e.props), P()));
  }
  static get observedAttributes() {
    return ["node", "level", "rerender"];
  }
  get node() {
    return this.$$.ctx[0];
  }
  set node(e) {
    this.$$set({ node: e }), P();
  }
  get level() {
    return this.$$.ctx[1];
  }
  set level(e) {
    this.$$set({ level: e }), P();
  }
  get rerender() {
    return this.$$.ctx[3];
  }
}
customElements.define("my-tree-node", be);
const Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: be
}, Symbol.toStringTag, { value: "Module" }));
function Vt(t) {
  return {
    c() {
      this.c = g;
    },
    m: g,
    p: g,
    i: g,
    o: g,
    d: g
  };
}
class At extends B {
  constructor(e) {
    super(), Q(
      this,
      {
        target: this.shadowRoot,
        props: K(this.attributes),
        customElement: !0
      },
      null,
      Vt,
      J,
      {},
      null
    ), e && e.target && E(e.target, this, e.anchor);
  }
}
const Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: At
}, Symbol.toStringTag, { value: "Module" }));
function Be(t, e, n) {
  const r = t.slice();
  return r[10] = e[n], r;
}
function Ie(t) {
  let e, n = (
    /*locationOptions*/
    t[0]
  ), r = [];
  for (let l = 0; l < n.length; l += 1)
    r[l] = Ue(Be(t, n, l));
  return {
    c() {
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      e = Ce();
    },
    m(l, s) {
      for (let i = 0; i < r.length; i += 1)
        r[i] && r[i].m(l, s);
      E(l, e, s);
    },
    p(l, s) {
      if (s & /*locationOptions*/
      1) {
        n = /*locationOptions*/
        l[0];
        let i;
        for (i = 0; i < n.length; i += 1) {
          const c = Be(l, n, i);
          r[i] ? r[i].p(c, s) : (r[i] = Ue(c), r[i].c(), r[i].m(e.parentNode, e));
        }
        for (; i < r.length; i += 1)
          r[i].d(1);
        r.length = n.length;
      }
    },
    d(l) {
      Qe(r, l), l && z(e);
    }
  };
}
function qe(t) {
  let e, n = (
    /*option*/
    t[10].data + ""
  ), r, l;
  return {
    c() {
      e = v("option"), r = W(n), e.__value = l = /*option*/
      t[10].data, e.value = e.__value;
    },
    m(s, i) {
      E(s, e, i), u(e, r);
    },
    p(s, i) {
      i & /*locationOptions*/
      1 && n !== (n = /*option*/
      s[10].data + "") && Me(r, n), i & /*locationOptions*/
      1 && l !== (l = /*option*/
      s[10].data) && (e.__value = l, e.value = e.__value);
    },
    d(s) {
      s && z(e);
    }
  };
}
function Ue(t) {
  let e, n = (
    /*option*/
    t[10].type === "Folder" && qe(t)
  );
  return {
    c() {
      n && n.c(), e = Ce();
    },
    m(r, l) {
      n && n.m(r, l), E(r, e, l);
    },
    p(r, l) {
      /*option*/
      r[10].type === "Folder" ? n ? n.p(r, l) : (n = qe(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(r) {
      n && n.d(r), r && z(e);
    }
  };
}
function Pt(t) {
  let e, n, r, l, s, i, c, f, d, _, a, h, p, y, w, x, $, M, T, C, b, L, H, V, k, m, A, X, te, ve, $e, Oe, N = (
    /*locationOptions*/
    t[0] && Ie(t)
  );
  return {
    c() {
      e = v("div"), n = v("div"), r = v("label"), r.textContent = "Name:", l = j(), s = v("div"), i = v("input"), c = j(), f = v("label"), f.textContent = "Type:", d = j(), _ = v("div"), a = v("select"), h = v("option"), h.textContent = "File", p = v("option"), p.textContent = "Folder", y = j(), w = v("label"), w.textContent = "Location:", x = j(), $ = v("div"), M = v("select"), N && N.c(), T = j(), C = v("div"), b = v("button"), L = W("Save"), k = j(), m = v("button"), A = W("Cancel"), te = j(), ve = v("style"), ve.textContent = `.main-container {
      display:flex; 
      justify-content: center;
    }

    .form-container {
      display: flex;
      background-color: #fafafa;
      width: 95%;
      flex-direction: column;
      gap: 10px;
      border: 2px solid #ccc;
      border-radius: 10px;
      padding-top: 10px;
      padding-bottom: 15px;
      align-items: center;
    }

    @media only screen and (min-width: 992px) {
      .form-container {
        width: 40%;
      }
    }

    .form-row {
      display: flex;
      align-items: center;
      width: 90%;
      gap: 10px;
    }

    .form-label {
      font-family: circular;
      width: 100px;
      color: #a4a198;
      align-self: flex-start;
      margin-left: 5%;
    }

    .form-input {
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      flex: 1;
    }

    .form-buttons {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      gap: 10px;
    }

    .save-button {
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }

    .cancel-button {
      background-color: #ccc;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }

    .disabled-save-button {
      cursor: not-allowed;
      background-color: #ccc;
    }
    .enabled-save-button {
      background-color: #4caf50;
    }
    .enabled-cancel-button {
      background-color: #f44336;
    }

    input {
      height: 2em;
    }

    select {
      height: 3em;
    }`, this.c = g, o(r, "class", "form-label"), o(r, "for", "name"), o(i, "class", "form-input"), o(i, "type", "text"), o(i, "id", "name"), o(s, "class", "form-row"), o(f, "class", "form-label"), o(f, "for", "type"), h.__value = "File", h.value = h.__value, p.__value = "Folder", p.value = p.__value, o(a, "class", "form-input"), o(a, "id", "type"), /*type*/
      t[2] === void 0 && ee(() => (
        /*select0_change_handler*/
        t[7].call(a)
      )), o(_, "class", "form-row"), o(w, "class", "form-label"), o(w, "for", "location"), o(M, "class", "form-input"), o(M, "id", "location"), /*location*/
      t[3] === void 0 && ee(() => (
        /*select1_change_handler*/
        t[8].call(M)
      )), o($, "class", "form-row"), o(b, "class", H = "save-button " + /*name*/
      (t[1] ? "enabled-save-button " : "disabled-save-button")), b.disabled = V = !/*name*/
      t[1], o(m, "class", X = "cancel-button " + /*name*/
      (t[1] ? "enabled-cancel-button" : "")), o(C, "class", "form-buttons"), o(n, "class", "form-container"), o(e, "class", "main-container");
    },
    m(R, I) {
      E(R, e, I), u(e, n), u(n, r), u(n, l), u(n, s), u(s, i), Se(
        i,
        /*name*/
        t[1]
      ), u(n, c), u(n, f), u(n, d), u(n, _), u(_, a), u(a, h), u(a, p), ue(
        a,
        /*type*/
        t[2],
        !0
      ), u(n, y), u(n, w), u(n, x), u(n, $), u($, M), N && N.m(M, null), ue(
        M,
        /*location*/
        t[3],
        !0
      ), u(n, T), u(n, C), u(C, b), u(b, L), u(C, k), u(C, m), u(m, A), u(e, te), u(e, ve), $e || (Oe = [
        re(
          i,
          "input",
          /*input_input_handler*/
          t[6]
        ),
        re(
          a,
          "change",
          /*select0_change_handler*/
          t[7]
        ),
        re(
          M,
          "change",
          /*select1_change_handler*/
          t[8]
        ),
        re(
          b,
          "click",
          /*save*/
          t[5]
        ),
        re(
          m,
          "click",
          /*cancel*/
          t[4]
        )
      ], $e = !0);
    },
    p(R, [I]) {
      I & /*name*/
      2 && i.value !== /*name*/
      R[1] && Se(
        i,
        /*name*/
        R[1]
      ), I & /*type*/
      4 && ue(
        a,
        /*type*/
        R[2]
      ), /*locationOptions*/
      R[0] ? N ? N.p(R, I) : (N = Ie(R), N.c(), N.m(M, null)) : N && (N.d(1), N = null), I & /*location, locationOptions*/
      9 && ue(
        M,
        /*location*/
        R[3]
      ), I & /*name*/
      2 && H !== (H = "save-button " + /*name*/
      (R[1] ? "enabled-save-button " : "disabled-save-button")) && o(b, "class", H), I & /*name*/
      2 && V !== (V = !/*name*/
      R[1]) && (b.disabled = V), I & /*name*/
      2 && X !== (X = "cancel-button " + /*name*/
      (R[1] ? "enabled-cancel-button" : "")) && o(m, "class", X);
    },
    i: g,
    o: g,
    d(R) {
      R && z(e), N && N.d(), $e = !1, Z(Oe);
    }
  };
}
const We = "Root";
function Bt(t, e, n) {
  let r = "", l = "File", s = We, { locationOptions: i } = e;
  console.log(i);
  const c = gt();
  function f() {
    n(1, r = ""), n(2, l = "File"), n(3, s = We);
  }
  function d() {
    const p = {
      data: r.charAt(0).toUpperCase() + r.slice(1),
      type: l,
      location: s
    };
    c("save", p), f();
  }
  function _() {
    r = this.value, n(1, r);
  }
  function a() {
    l = He(this), n(2, l);
  }
  function h() {
    s = He(this), n(3, s), n(0, i);
  }
  return t.$$set = (p) => {
    "locationOptions" in p && n(0, i = p.locationOptions);
  }, [
    i,
    r,
    l,
    s,
    f,
    d,
    _,
    a,
    h
  ];
}
class rt extends B {
  constructor(e) {
    super(), Q(
      this,
      {
        target: this.shadowRoot,
        props: K(this.attributes),
        customElement: !0
      },
      Bt,
      Pt,
      J,
      { locationOptions: 0 },
      null
    ), e && (e.target && E(e.target, this, e.anchor), e.props && (this.$set(e.props), P()));
  }
  static get observedAttributes() {
    return ["locationOptions"];
  }
  get locationOptions() {
    return this.$$.ctx[0];
  }
  set locationOptions(e) {
    this.$$set({ locationOptions: e }), P();
  }
}
customElements.define("my-form", rt);
function It(t) {
  var C;
  let e, n, r, l, s, i, c, f, d, _, a, h, p, y, w, x;
  c = new rt({
    props: {
      locationOptions: [
        { data: "Root", type: "Folder" },
        .../*tree_data*/
        ((C = t[0]) == null ? void 0 : C.children) || []
      ]
    }
  }), c.$on(
    "save",
    /*handleSave*/
    t[3]
  );
  function $(b) {
    t[5](b);
  }
  function M(b) {
    t[6](b);
  }
  let T = {};
  return (
    /*rerenderNode*/
    t[2] !== void 0 && (T.rerender = /*rerenderNode*/
    t[2]), /*tree_data*/
    t[0] !== void 0 && (T.node = /*tree_data*/
    t[0]), a = new be({ props: T }), ge.push(() => Te(a, "rerender", $)), ge.push(() => Te(a, "node", M)), {
      c() {
        e = v("div"), n = v("h2"), r = W("Hello, "), l = W(
          /*name*/
          t[1]
        ), s = W("!"), i = j(), Y(c.$$.fragment), f = j(), d = v("div"), _ = v("ul"), Y(a.$$.fragment), y = j(), w = v("style"), w.textContent = `:global(body) {
      margin: 0 0;
    }

    .list-container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      border: 2px solid #ccc;
      overflow: hidden;
      border-radius: 1em;
      width: 95%;
    }

    h2 {
      color: #7d7979;
    }

    @media only screen and (min-width: 992px) {
      ul {
        width: 40%;
      }
    }`, this.c = g, q(n, "text-align", "center"), o(d, "class", "list-container");
      },
      m(b, L) {
        E(b, e, L), u(e, n), u(n, r), u(n, l), u(n, s), u(e, i), G(c, e, null), u(e, f), u(e, d), u(d, _), G(a, _, null), u(e, y), u(e, w), x = !0;
      },
      p(b, [L]) {
        var k;
        (!x || L & /*name*/
        2) && Me(
          l,
          /*name*/
          b[1]
        );
        const H = {};
        L & /*tree_data*/
        1 && (H.locationOptions = [{ data: "Root", type: "Folder" }, .../*tree_data*/
        ((k = b[0]) == null ? void 0 : k.children) || []]), c.$set(H);
        const V = {};
        !h && L & /*rerenderNode*/
        4 && (h = !0, V.rerender = /*rerenderNode*/
        b[2], Ne(() => h = !1)), !p && L & /*tree_data*/
        1 && (p = !0, V.node = /*tree_data*/
        b[0], Ne(() => p = !1)), a.$set(V);
      },
      i(b) {
        x || (O(c.$$.fragment, b), O(a.$$.fragment, b), x = !0);
      },
      o(b) {
        S(c.$$.fragment, b), S(a.$$.fragment, b), x = !1;
      },
      d(b) {
        b && z(e), D(c), D(a);
      }
    }
  );
}
function Ge(t, e) {
  var n, r;
  for (let l = 0; l < t.length; l++)
    if (((r = (n = t[l]) == null ? void 0 : n.data) == null ? void 0 : r.toLowerCase()) === (e == null ? void 0 : e.toLowerCase()))
      return l;
  return !1;
}
function qt(t, e, n) {
  let { name: r = "Gaurav" } = e, { update_files_structure: l } = e, { tree_data: s } = e, i;
  console.log("tree", s);
  function c(a, h) {
    typeof Ge(a.children, h == null ? void 0 : h.data) == "number" ? alert("File or Folder with this name already exists at this location!") : (a.children.push({
      ...h,
      children: h.type === "Folder" ? [] : null
    }), a.expanded = !0, n(0, s.expanded = !0, s));
  }
  function f(a) {
    const h = a.detail;
    if ((h == null ? void 0 : h.location) === "Root")
      c(s, h);
    else {
      const p = Ge(s.children, h == null ? void 0 : h.location);
      typeof p == "number" && c(s.children[p], h);
    }
    l(s), i();
  }
  function d(a) {
    i = a, n(2, i);
  }
  function _(a) {
    s = a, n(0, s);
  }
  return t.$$set = (a) => {
    "name" in a && n(1, r = a.name), "update_files_structure" in a && n(4, l = a.update_files_structure), "tree_data" in a && n(0, s = a.tree_data);
  }, [
    s,
    r,
    i,
    f,
    l,
    d,
    _
  ];
}
class lt extends B {
  constructor(e) {
    super(), Q(
      this,
      {
        target: this.shadowRoot,
        props: K(this.attributes),
        customElement: !0
      },
      qt,
      It,
      J,
      {
        name: 1,
        update_files_structure: 4,
        tree_data: 0
      },
      null
    ), e && (e.target && E(e.target, this, e.anchor), e.props && (this.$set(e.props), P()));
  }
  static get observedAttributes() {
    return ["name", "update_files_structure", "tree_data"];
  }
  get name() {
    return this.$$.ctx[1];
  }
  set name(e) {
    this.$$set({ name: e }), P();
  }
  get update_files_structure() {
    return this.$$.ctx[4];
  }
  set update_files_structure(e) {
    this.$$set({ update_files_structure: e }), P();
  }
  get tree_data() {
    return this.$$.ctx[0];
  }
  set tree_data(e) {
    this.$$set({ tree_data: e }), P();
  }
}
customElements.define("my-filetree-web-component", lt);
const Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Gt as MyFileTreeComponent,
  Ut as Node,
  Wt as Tree
};
