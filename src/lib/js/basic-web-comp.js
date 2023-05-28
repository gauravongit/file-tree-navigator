function y() {
}
const ot = (t) => t;
function Fe(t) {
  return t();
}
function ze() {
  return /* @__PURE__ */ Object.create(null);
}
function Z(t) {
  t.forEach(Fe);
}
function fe(t) {
  return typeof t == "function";
}
function ee(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function st(t) {
  return Object.keys(t).length === 0;
}
const Je = typeof window < "u";
let at = Je ? () => window.performance.now() : () => Date.now(), Ee = Je ? (t) => requestAnimationFrame(t) : y;
const se = /* @__PURE__ */ new Set();
function Ke(t) {
  se.forEach((e) => {
    e.c(t) || (se.delete(e), e.f());
  }), se.size !== 0 && Ee(Ke);
}
function ct(t) {
  let e;
  return se.size === 0 && Ee(Ke), {
    promise: new Promise((n) => {
      se.add(e = { c: t, f: n });
    }),
    abort() {
      se.delete(e);
    }
  };
}
function c(t, e) {
  t.appendChild(e);
}
function Qe(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function ut(t) {
  const e = g("style");
  return ft(Qe(t), e), e.sheet;
}
function ft(t, e) {
  return c(t.head || t, e), e.sheet;
}
function E(t, e, n) {
  t.insertBefore(e, n || null);
}
function z(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Xe(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function g(t) {
  return document.createElement(t);
}
function F(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function W(t) {
  return document.createTextNode(t);
}
function N() {
  return W(" ");
}
function Ce() {
  return W("");
}
function le(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function o(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function dt(t) {
  return Array.from(t.childNodes);
}
function Me(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function Ne(t, e) {
  t.value = e ?? "";
}
function Se(t, e, n, l) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, l ? "important" : "");
}
function he(t, e, n) {
  for (let l = 0; l < t.options.length; l += 1) {
    const r = t.options[l];
    if (r.__value === e) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function je(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function Ye(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, l, e), r;
}
function te(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
const ge = /* @__PURE__ */ new Map();
let be = 0;
function ht(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function pt(t, e) {
  const n = { stylesheet: ut(e), rules: {} };
  return ge.set(t, n), n;
}
function Re(t, e, n, l, r, s, i, a = 0) {
  const u = 16.666 / l;
  let d = `{
`;
  for (let w = 0; w <= 1; w += u) {
    const $ = e + (n - e) * s(w);
    d += w * 100 + `%{${i($, 1 - $)}}
`;
  }
  const m = d + `100% {${i(n, 1 - n)}}
}`, p = `__svelte_${ht(m)}_${a}`, h = Qe(t), { stylesheet: f, rules: b } = ge.get(h) || pt(h, t);
  b[p] || (b[p] = !0, f.insertRule(`@keyframes ${p} ${m}`, f.cssRules.length));
  const v = t.style.animation || "";
  return t.style.animation = `${v ? `${v}, ` : ""}${p} ${l}ms linear ${r}ms 1 both`, be += 1, p;
}
function _t(t, e) {
  const n = (t.style.animation || "").split(", "), l = n.filter(
    e ? (s) => s.indexOf(e) < 0 : (s) => s.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), r = n.length - l.length;
  r && (t.style.animation = l.join(", "), be -= r, be || mt());
}
function mt() {
  Ee(() => {
    be || (ge.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && z(e);
    }), ge.clear());
  });
}
let de;
function ue(t) {
  de = t;
}
function gt() {
  if (!de)
    throw new Error("Function called outside component initialization");
  return de;
}
function bt() {
  const t = gt();
  return (e, n, { cancelable: l = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const s = Ye(e, n, { cancelable: l });
      return r.slice().forEach((i) => {
        i.call(t, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
const oe = [], ve = [];
let ae = [];
const xe = [], vt = /* @__PURE__ */ Promise.resolve();
let ke = !1;
function $t() {
  ke || (ke = !0, vt.then(P));
}
function re(t) {
  ae.push(t);
}
function Le(t) {
  xe.push(t);
}
const ye = /* @__PURE__ */ new Set();
let ie = 0;
function P() {
  if (ie !== 0)
    return;
  const t = de;
  do {
    try {
      for (; ie < oe.length; ) {
        const e = oe[ie];
        ie++, ue(e), yt(e.$$);
      }
    } catch (e) {
      throw oe.length = 0, ie = 0, e;
    }
    for (ue(null), oe.length = 0, ie = 0; ve.length; )
      ve.pop()();
    for (let e = 0; e < ae.length; e += 1) {
      const n = ae[e];
      ye.has(n) || (ye.add(n), n());
    }
    ae.length = 0;
  } while (oe.length);
  for (; xe.length; )
    xe.pop()();
  ke = !1, ye.clear(), ue(t);
}
function yt(t) {
  if (t.fragment !== null) {
    t.update(), Z(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(re);
  }
}
function wt(t) {
  const e = [], n = [];
  ae.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), ae = e;
}
let ce;
function xt() {
  return ce || (ce = Promise.resolve(), ce.then(() => {
    ce = null;
  })), ce;
}
function we(t, e, n) {
  t.dispatchEvent(Ye(`${e ? "intro" : "outro"}${n}`));
}
const pe = /* @__PURE__ */ new Set();
let U;
function _e() {
  U = {
    r: 0,
    c: [],
    p: U
    // parent group
  };
}
function me() {
  U.r || Z(U.c), U = U.p;
}
function H(t, e) {
  t && t.i && (pe.delete(t), t.i(e));
}
function S(t, e, n, l) {
  if (t && t.o) {
    if (pe.has(t))
      return;
    pe.add(t), U.c.push(() => {
      pe.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
const kt = { duration: 0 };
function Te(t, e, n, l) {
  const r = { direction: "both" };
  let s = e(t, n, r), i = l ? 0 : 1, a = null, u = null, d = null;
  function m() {
    d && _t(t, d);
  }
  function p(f, b) {
    const v = f.b - i;
    return b *= Math.abs(v), {
      a: i,
      b: f.b,
      d: v,
      duration: b,
      start: f.start,
      end: f.start + b,
      group: f.group
    };
  }
  function h(f) {
    const { delay: b = 0, duration: v = 300, easing: w = ot, tick: $ = y, css: C } = s || kt, A = {
      start: at() + b,
      b: f
    };
    f || (A.group = U, U.r += 1), a || u ? u = A : (C && (m(), d = Re(t, i, f, v, b, w, C)), f && $(0, 1), a = p(A, v), re(() => we(t, f, "start")), ct((x) => {
      if (u && x > u.start && (a = p(u, v), u = null, we(t, a.b, "start"), C && (m(), d = Re(t, i, a.b, a.duration, 0, w, s.css))), a) {
        if (x >= a.end)
          $(i = a.b, 1 - i), we(t, a.b, "end"), u || (a.b ? m() : --a.group.r || Z(a.group.c)), a = null;
        else if (x >= a.start) {
          const O = x - a.start;
          i = a.a + a.d * w(O / a.duration), $(i, 1 - i);
        }
      }
      return !!(a || u);
    }));
  }
  return {
    run(f) {
      fe(s) ? xt().then(() => {
        s = s(r), h(f);
      }) : h(f);
    },
    end() {
      m(), a = u = null;
    }
  };
}
function De(t, e, n) {
  const l = t.$$.props[e];
  l !== void 0 && (t.$$.bound[l] = n, n(t.$$.ctx[l]));
}
function Y(t) {
  t && t.c();
}
function J(t, e, n, l) {
  const { fragment: r, after_update: s } = t.$$;
  r && r.m(e, n), l || re(() => {
    const i = t.$$.on_mount.map(Fe).filter(fe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Z(i), t.$$.on_mount = [];
  }), s.forEach(re);
}
function K(t, e) {
  const n = t.$$;
  n.fragment !== null && (wt(n.after_update), Z(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ft(t, e) {
  t.$$.dirty[0] === -1 && (oe.push(t), $t(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ne(t, e, n, l, r, s, i, a = [-1]) {
  const u = de;
  ue(t);
  const d = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: y,
    not_equal: r,
    bound: ze(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: ze(),
    dirty: a,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  i && i(d.root);
  let m = !1;
  if (d.ctx = n ? n(t, e.props || {}, (p, h, ...f) => {
    const b = f.length ? f[0] : h;
    return d.ctx && r(d.ctx[p], d.ctx[p] = b) && (!d.skip_bound && d.bound[p] && d.bound[p](b), m && Ft(t, p)), h;
  }) : [], d.update(), m = !0, Z(d.before_update), d.fragment = l ? l(d.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = dt(e.target);
      d.fragment && d.fragment.l(p), p.forEach(z);
    } else
      d.fragment && d.fragment.c();
    e.intro && H(t.$$.fragment), J(t, e.target, e.anchor, e.customElement), P();
  }
  ue(u);
}
let Q;
typeof HTMLElement == "function" && (Q = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(Fe).filter(fe);
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
    K(this, 1), this.$destroy = y;
  }
  $on(t, e) {
    if (!fe(e))
      return y;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const l = n.indexOf(e);
      l !== -1 && n.splice(l, 1);
    };
  }
  $set(t) {
    this.$$set && !st(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
const V = {
  File: "File",
  Folder: "Folder"
}, $e = "Root";
let Et = {
  name: "Root",
  type: "Folder",
  expanded: !1,
  children: [
    {
      name: "Child 1",
      type: V.Folder,
      expanded: !1,
      children: [{ name: "Grand Child 1", type: "File" }]
    },
    {
      name: "Child 2",
      type: V.Folder,
      expanded: !1,
      children: [{ name: "Grand Child 2", type: "Folder" }]
    },
    { name: "Child 3", type: V.File }
  ]
};
function Ve(t, e, n) {
  const l = t.slice();
  return l[10] = e[n], l;
}
function Ae(t) {
  let e, n = (
    /*locationOptions*/
    t[0]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Ie(Ve(t, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      e = Ce();
    },
    m(r, s) {
      for (let i = 0; i < l.length; i += 1)
        l[i] && l[i].m(r, s);
      E(r, e, s);
    },
    p(r, s) {
      if (s & /*locationOptions, NodeType*/
      1) {
        n = /*locationOptions*/
        r[0];
        let i;
        for (i = 0; i < n.length; i += 1) {
          const a = Ve(r, n, i);
          l[i] ? l[i].p(a, s) : (l[i] = Ie(a), l[i].c(), l[i].m(e.parentNode, e));
        }
        for (; i < l.length; i += 1)
          l[i].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      Xe(l, r), r && z(e);
    }
  };
}
function Be(t) {
  let e, n = (
    /*option*/
    t[10].name + ""
  ), l, r;
  return {
    c() {
      e = g("option"), l = W(n), e.__value = r = /*option*/
      t[10].name, e.value = e.__value;
    },
    m(s, i) {
      E(s, e, i), c(e, l);
    },
    p(s, i) {
      i & /*locationOptions*/
      1 && n !== (n = /*option*/
      s[10].name + "") && Me(l, n), i & /*locationOptions*/
      1 && r !== (r = /*option*/
      s[10].name) && (e.__value = r, e.value = e.__value);
    },
    d(s) {
      s && z(e);
    }
  };
}
function Ie(t) {
  let e, n = (
    /*option*/
    t[10].type === V.Folder && Be(t)
  );
  return {
    c() {
      n && n.c(), e = Ce();
    },
    m(l, r) {
      n && n.m(l, r), E(l, e, r);
    },
    p(l, r) {
      /*option*/
      l[10].type === V.Folder ? n ? n.p(l, r) : (n = Be(l), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && z(e);
    }
  };
}
function Ct(t) {
  let e, n, l, r, s, i, a, u, d, m, p, h, f, b, v, w, $, C, A, x, O, X, R, G, k, B, _, M, j, L, I, Oe, T = (
    /*locationOptions*/
    t[0] && Ae(t)
  );
  return {
    c() {
      e = g("div"), n = g("div"), l = g("label"), l.textContent = "Name:", r = N(), s = g("div"), i = g("input"), a = N(), u = g("label"), u.textContent = "Type:", d = N(), m = g("div"), p = g("select"), h = g("option"), h.textContent = "File", f = g("option"), f.textContent = "Folder", b = N(), v = g("label"), v.textContent = "Location:", w = N(), $ = g("div"), C = g("select"), T && T.c(), A = N(), x = g("div"), O = g("button"), X = W("Save"), k = N(), B = g("button"), _ = W("Cancel"), j = N(), L = g("style"), L.textContent = `.main-container {
      display: flex;
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
    }`, this.c = y, o(l, "class", "form-label"), o(l, "for", "name"), o(i, "class", "form-input"), o(i, "type", "text"), o(i, "id", "name"), o(s, "class", "form-row"), o(u, "class", "form-label"), o(u, "for", "type"), h.__value = "File", h.value = h.__value, f.__value = "Folder", f.value = f.__value, o(p, "class", "form-input"), o(p, "id", "type"), /*type*/
      t[2] === void 0 && re(() => (
        /*select0_change_handler*/
        t[7].call(p)
      )), o(m, "class", "form-row"), o(v, "class", "form-label"), o(v, "for", "location"), o(C, "class", "form-input"), o(C, "id", "location"), /*location*/
      t[3] === void 0 && re(() => (
        /*select1_change_handler*/
        t[8].call(C)
      )), o($, "class", "form-row"), o(O, "class", R = "save-button " + /*name*/
      (t[1] ? "enabled-save-button " : "disabled-save-button")), O.disabled = G = !/*name*/
      t[1], o(B, "class", M = "cancel-button " + /*name*/
      (t[1] ? "enabled-cancel-button" : "")), o(x, "class", "form-buttons"), o(n, "class", "form-container"), o(e, "class", "main-container");
    },
    m(D, q) {
      E(D, e, q), c(e, n), c(n, l), c(n, r), c(n, s), c(s, i), Ne(
        i,
        /*name*/
        t[1]
      ), c(n, a), c(n, u), c(n, d), c(n, m), c(m, p), c(p, h), c(p, f), he(
        p,
        /*type*/
        t[2],
        !0
      ), c(n, b), c(n, v), c(n, w), c(n, $), c($, C), T && T.m(C, null), he(
        C,
        /*location*/
        t[3],
        !0
      ), c(n, A), c(n, x), c(x, O), c(O, X), c(x, k), c(x, B), c(B, _), c(e, j), c(e, L), I || (Oe = [
        le(
          i,
          "input",
          /*input_input_handler*/
          t[6]
        ),
        le(
          p,
          "change",
          /*select0_change_handler*/
          t[7]
        ),
        le(
          C,
          "change",
          /*select1_change_handler*/
          t[8]
        ),
        le(
          O,
          "click",
          /*save*/
          t[5]
        ),
        le(
          B,
          "click",
          /*cancel*/
          t[4]
        )
      ], I = !0);
    },
    p(D, [q]) {
      q & /*name*/
      2 && i.value !== /*name*/
      D[1] && Ne(
        i,
        /*name*/
        D[1]
      ), q & /*type*/
      4 && he(
        p,
        /*type*/
        D[2]
      ), /*locationOptions*/
      D[0] ? T ? T.p(D, q) : (T = Ae(D), T.c(), T.m(C, null)) : T && (T.d(1), T = null), q & /*location, locationOptions*/
      9 && he(
        C,
        /*location*/
        D[3]
      ), q & /*name*/
      2 && R !== (R = "save-button " + /*name*/
      (D[1] ? "enabled-save-button " : "disabled-save-button")) && o(O, "class", R), q & /*name*/
      2 && G !== (G = !/*name*/
      D[1]) && (O.disabled = G), q & /*name*/
      2 && M !== (M = "cancel-button " + /*name*/
      (D[1] ? "enabled-cancel-button" : "")) && o(B, "class", M);
    },
    i: y,
    o: y,
    d(D) {
      D && z(e), T && T.d(), I = !1, Z(Oe);
    }
  };
}
function Mt(t, e, n) {
  let { locationOptions: l } = e, r = "", s = V.File, i = $e;
  const a = bt();
  function u() {
    n(1, r = "");
  }
  function d() {
    const f = {
      name: r.charAt(0).toUpperCase() + r.slice(1),
      type: s,
      location: i
    };
    a("save", f), u();
  }
  function m() {
    r = this.value, n(1, r);
  }
  function p() {
    s = je(this), n(2, s);
  }
  function h() {
    i = je(this), n(3, i), n(0, l);
  }
  return t.$$set = (f) => {
    "locationOptions" in f && n(0, l = f.locationOptions);
  }, [
    l,
    r,
    s,
    i,
    u,
    d,
    m,
    p,
    h
  ];
}
class Ze extends Q {
  constructor(e) {
    super(), ne(
      this,
      {
        target: this.shadowRoot,
        props: te(this.attributes),
        customElement: !0
      },
      Mt,
      Ct,
      ee,
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
customElements.define("my-form", Ze);
function Ht(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Pe(t, { delay: e = 0, duration: n = 400, easing: l = Ht, axis: r = "y" } = {}) {
  const s = getComputedStyle(t), i = +s.opacity, a = r === "y" ? "height" : "width", u = parseFloat(s[a]), d = r === "y" ? ["top", "bottom"] : ["left", "right"], m = d.map(($) => `${$[0].toUpperCase()}${$.slice(1)}`), p = parseFloat(s[`padding${m[0]}`]), h = parseFloat(s[`padding${m[1]}`]), f = parseFloat(s[`margin${m[0]}`]), b = parseFloat(s[`margin${m[1]}`]), v = parseFloat(s[`border${m[0]}Width`]), w = parseFloat(s[`border${m[1]}Width`]);
  return {
    delay: e,
    duration: n,
    easing: l,
    css: ($) => `overflow: hidden;opacity: ${Math.min($ * 20, 1) * i};${a}: ${$ * u}px;padding-${d[0]}: ${$ * p}px;padding-${d[1]}: ${$ * h}px;margin-${d[0]}: ${$ * f}px;margin-${d[1]}: ${$ * b}px;border-${d[0]}-width: ${$ * v}px;border-${d[1]}-width: ${$ * w}px;`
  };
}
function Ot(t) {
  let e, n;
  return {
    c() {
      e = F("svg"), n = F("polyline"), this.c = y, o(n, "points", "9 18 15 12 9 6"), o(e, "xmlns", "http://www.w3.org/2000/svg"), o(e, "width", "24"), o(e, "height", "24"), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "stroke", "slategray"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round"), o(e, "class", "feather feather-chevron-right");
    },
    m(l, r) {
      E(l, e, r), c(e, n);
    },
    p: y,
    i: y,
    o: y,
    d(l) {
      l && z(e);
    }
  };
}
class et extends Q {
  constructor(e) {
    super(), ne(
      this,
      {
        target: this.shadowRoot,
        props: te(this.attributes),
        customElement: !0
      },
      null,
      Ot,
      ee,
      {},
      null
    ), e && e.target && E(e.target, this, e.anchor);
  }
}
customElements.define("my-closed-icon-svg", et);
function zt(t) {
  let e, n;
  return {
    c() {
      e = F("svg"), n = F("polyline"), this.c = y, o(n, "points", "6 9 12 15 18 9"), o(e, "xmlns", "http://www.w3.org/2000/svg"), o(e, "width", "24"), o(e, "height", "24"), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "stroke", "slategray"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round"), o(e, "class", "feather feather-chevron-down");
    },
    m(l, r) {
      E(l, e, r), c(e, n);
    },
    p: y,
    i: y,
    o: y,
    d(l) {
      l && z(e);
    }
  };
}
class tt extends Q {
  constructor(e) {
    super(), ne(
      this,
      {
        target: this.shadowRoot,
        props: te(this.attributes),
        customElement: !0
      },
      null,
      zt,
      ee,
      {},
      null
    ), e && e.target && E(e.target, this, e.anchor);
  }
}
customElements.define("my-opened-icon-svg", tt);
function Nt(t) {
  let e, n, l, r, s, i, a, u, d, m, p, h, f;
  return {
    c() {
      e = F("svg"), n = F("g"), l = F("g"), r = F("polygon"), s = F("path"), i = F("path"), a = F("path"), u = F("path"), d = F("path"), m = F("path"), p = F("path"), h = F("path"), f = F("polygon"), this.c = y, o(r, "fill", "#ffca28"), o(r, "points", "46,3.414 46,14 56.586,14 		"), o(s, "fill", "#ffca28"), o(s, "d", `M45,16c-0.553,0-1-0.447-1-1V2H8C6.896,2,6,2.896,6,4v56c0,1.104,0.896,2,2,2h48c1.104,0,2-0.896,2-2V16
			H45z`), o(i, "fill", "#394240"), o(i, "d", "M14,26c0,0.553,0.447,1,1,1h34c0.553,0,1-0.447,1-1s-0.447-1-1-1H15C14.447,25,14,25.447,14,26z"), o(a, "fill", "#394240"), o(a, "d", "M49,37H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,37,49,37z"), o(u, "fill", "#394240"), o(u, "d", "M49,43H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,43,49,43z"), o(d, "fill", "#394240"), o(d, "d", "M49,49H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,49,49,49z"), o(m, "fill", "#394240"), o(m, "d", "M49,31H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,31,49,31z"), o(p, "fill", "#394240"), o(p, "d", "M15,20h16c0.553,0,1-0.447,1-1s-0.447-1-1-1H15c-0.553,0-1,0.447-1,1S14.447,20,15,20z"), o(h, "fill", "#ffa000"), o(h, "d", `M59.706,14.292L45.708,0.294C45.527,0.112,45.277,0,45,0H8C5.789,0,4,1.789,4,4v56c0,2.211,1.789,4,4,4h48
		c2.211,0,4-1.789,4-4V15C60,14.723,59.888,14.473,59.706,14.292z M46,3.414L56.586,14H46V3.414z M58,60c0,1.104-0.896,2-2,2H8
		c-1.104,0-2-0.896-2-2V4c0-1.104,0.896-2,2-2h36v13c0,0.553,0.447,1,1,1h13V60z`), o(f, "opacity", "0.15"), o(f, "fill", "#ffa000"), o(f, "points", "46,3.414 56.586,14 46,14 	"), o(e, "version", "1.0"), o(e, "id", "Layer_1"), o(e, "xmlns", "http://www.w3.org/2000/svg"), o(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), o(e, "width", "18px"), o(e, "height", "18px"), o(e, "viewBox", "0 0 64 64"), o(e, "enable-background", "new 0 0 64 64"), o(e, "xml:space", "preserve");
    },
    m(b, v) {
      E(b, e, v), c(e, n), c(n, l), c(l, r), c(l, s), c(n, i), c(n, a), c(n, u), c(n, d), c(n, m), c(n, p), c(n, h), c(n, f);
    },
    p: y,
    i: y,
    o: y,
    d(b) {
      b && z(e);
    }
  };
}
class nt extends Q {
  constructor(e) {
    super(), ne(
      this,
      {
        target: this.shadowRoot,
        props: te(this.attributes),
        customElement: !0
      },
      null,
      Nt,
      ee,
      {},
      null
    ), e && e.target && E(e.target, this, e.anchor);
  }
}
customElements.define("my-file-icon-svg", nt);
function St(t) {
  let e, n, l;
  return {
    c() {
      e = F("svg"), n = F("path"), l = F("path"), this.c = y, o(n, "fill", "#ffa000"), o(n, "d", "M11.8 3.4H6.4L5.2 2.2h-3c-.66 0-1.2.54-1.2 1.2v2.4h12V4.6c0-.66-.54-1.2-1.2-1.2z"), o(l, "fill", "#ffca28"), o(l, "d", "M11.8 3.4H2.2c-.66 0-1.2.54-1.2 1.2v6c0 .66.54 1.2 1.2 1.2h9.6c.66 0 1.2-.54 1.2-1.2v-6c0-.66-.54-1.2-1.2-1.2z"), o(e, "width", "24px"), o(e, "height", "24px"), o(e, "viewBox", "0 0 14 14"), o(e, "role", "img"), o(e, "focusable", "false"), o(e, "aria-hidden", "true"), o(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, s) {
      E(r, e, s), c(e, n), c(e, l);
    },
    p: y,
    i: y,
    o: y,
    d(r) {
      r && z(e);
    }
  };
}
class lt extends Q {
  constructor(e) {
    super(), ne(
      this,
      {
        target: this.shadowRoot,
        props: te(this.attributes),
        customElement: !0
      },
      null,
      St,
      ee,
      {},
      null
    ), e && e.target && E(e.target, this, e.anchor);
  }
}
customElements.define("my-closed-folder-icon-svg", lt);
function jt(t) {
  let e, n, l;
  return {
    c() {
      e = F("svg"), n = F("path"), l = F("path"), this.c = y, o(n, "fill", "#ffa000"), o(n, "d", "M10.67276443 3.58608316H6.12087531L4.98290303 2.44811088h-2.8449307c-.62588475 0-1.13797228.51208753-1.13797228 1.13797228v6.82783368c0 .62588475.51208753 1.13797228 1.13797228 1.13797228h8.81928517c.48363822 0 .85347921-.369841.85347921-.85347921V4.72405544c0-.62588475-.51208753-1.13797228-1.13797228-1.13797228z"), o(l, "fill", "#ffca28"), o(l, "d", "M11.86763532 5.29304158H4.21477174c-.54053683 0-1.02417505.3982903-1.10952297.93882713l-.96727644 5.32002041h9.01843032c.54053683 0 1.02417505-.3982903 1.10952297-.93882713L12.9771583 6.630159c.14224653-.68278337-.3982903-1.33711743-1.10952298-1.33711743z"), o(e, "width", "24px"), o(e, "height", "24px"), o(e, "viewBox", "0 0 14 14"), o(e, "role", "img"), o(e, "focusable", "false"), o(e, "aria-hidden", "true"), o(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, s) {
      E(r, e, s), c(e, n), c(e, l);
    },
    p: y,
    i: y,
    o: y,
    d(r) {
      r && z(e);
    }
  };
}
class rt extends Q {
  constructor(e) {
    super(), ne(
      this,
      {
        target: this.shadowRoot,
        props: te(this.attributes),
        customElement: !0
      },
      null,
      jt,
      ee,
      {},
      null
    ), e && e.target && E(e.target, this, e.anchor);
  }
}
customElements.define("my-open-folder-icon-svg", rt);
function Ge(t, e, n) {
  const l = t.slice();
  return l[4] = e[n], l;
}
function Rt(t) {
  let e, n;
  return e = new tt({}), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, r) {
      J(e, l, r), n = !0;
    },
    i(l) {
      n || (H(e.$$.fragment, l), n = !0);
    },
    o(l) {
      S(e.$$.fragment, l), n = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Lt(t) {
  let e, n;
  return e = new et({}), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, r) {
      J(e, l, r), n = !0;
    },
    i(l) {
      n || (H(e.$$.fragment, l), n = !0);
    },
    o(l) {
      S(e.$$.fragment, l), n = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Tt(t) {
  let e, n, l;
  return n = new nt({}), {
    c() {
      e = g("div"), Y(n.$$.fragment), o(e, "class", "iconDiv");
    },
    m(r, s) {
      E(r, e, s), J(n, e, null), l = !0;
    },
    i(r) {
      l || (H(n.$$.fragment, r), l = !0);
    },
    o(r) {
      S(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && z(e), K(n);
    }
  };
}
function Dt(t) {
  let e, n, l;
  return n = new lt({}), {
    c() {
      e = g("div"), Y(n.$$.fragment), o(e, "class", "iconDiv");
    },
    m(r, s) {
      E(r, e, s), J(n, e, null), l = !0;
    },
    i(r) {
      l || (H(n.$$.fragment, r), l = !0);
    },
    o(r) {
      S(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && z(e), K(n);
    }
  };
}
function Vt(t) {
  let e, n, l;
  return n = new rt({}), {
    c() {
      e = g("div"), Y(n.$$.fragment), o(e, "class", "iconDiv");
    },
    m(r, s) {
      E(r, e, s), J(n, e, null), l = !0;
    },
    i(r) {
      l || (H(n.$$.fragment, r), l = !0);
    },
    o(r) {
      S(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && z(e), K(n);
    }
  };
}
function qe(t) {
  let e, n, l = (
    /*node*/
    t[0].children
  ), r = [];
  for (let i = 0; i < l.length; i += 1)
    r[i] = Ue(Ge(t, l, i));
  const s = (i) => S(r[i], 1, 1, () => {
    r[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      e = Ce();
    },
    m(i, a) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(i, a);
      E(i, e, a), n = !0;
    },
    p(i, a) {
      if (a & /*node, level*/
      3) {
        l = /*node*/
        i[0].children;
        let u;
        for (u = 0; u < l.length; u += 1) {
          const d = Ge(i, l, u);
          r[u] ? (r[u].p(d, a), H(r[u], 1)) : (r[u] = Ue(d), r[u].c(), H(r[u], 1), r[u].m(e.parentNode, e));
        }
        for (_e(), u = l.length; u < r.length; u += 1)
          s(u);
        me();
      }
    },
    i(i) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          H(r[a]);
        n = !0;
      }
    },
    o(i) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        S(r[a]);
      n = !1;
    },
    d(i) {
      Xe(r, i), i && z(e);
    }
  };
}
function Ue(t) {
  let e, n;
  return e = new He({
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
    m(l, r) {
      J(e, l, r), n = !0;
    },
    p(l, r) {
      const s = {};
      r & /*node*/
      1 && (s.node = /*child*/
      l[4]), r & /*level*/
      2 && (s.level = /*level*/
      l[1] + 1), e.$set(s);
    },
    i(l) {
      n || (H(e.$$.fragment, l), n = !0);
    },
    o(l) {
      S(e.$$.fragment, l), n = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function At(t) {
  var B;
  let e, n, l, r, s, i, a, u, d, m = (
    /*node*/
    ((B = t[0]) == null ? void 0 : B.name) + ""
  ), p, h, f, b, v, w, $, C;
  const A = [Lt, Rt], x = [];
  function O(_, M) {
    var j;
    return (
      /*node*/
      ((j = _[0]) == null ? void 0 : j.type) === V.Folder && !/*node*/
      _[0].expanded ? 0 : (
        /*node*/
        _[0] && /*node*/
        _[0].type === V.Folder ? 1 : -1
      )
    );
  }
  ~(l = O(t)) && (r = x[l] = A[l](t));
  const X = [Vt, Dt, Tt], R = [];
  function G(_, M) {
    var j, L, I;
    return (
      /*node*/
      ((j = _[0]) == null ? void 0 : j.type) === V.Folder && /*node*/
      _[0].expanded ? 0 : (
        /*node*/
        ((L = _[0]) == null ? void 0 : L.type) === V.Folder ? 1 : (
          /*node*/
          ((I = _[0]) == null ? void 0 : I.type) === V.File ? 2 : -1
        )
      )
    );
  }
  ~(i = G(t)) && (a = R[i] = X[i](t));
  let k = (
    /*node*/
    t[0] && /*node*/
    t[0].expanded && /*node*/
    t[0].children && qe(t)
  );
  return {
    c() {
      e = g("div"), n = g("li"), r && r.c(), s = N(), a && a.c(), u = N(), d = g("p"), p = W(m), f = N(), k && k.c(), b = N(), v = g("style"), v.textContent = `li {
      border-bottom: solid 2px #eee;
      margin: 0 0;
      padding: 0.5em;
      background: #fafafa;
      display: flex;
      align-items: center;
    }
    .iconDiv {
      margin-left: 5px;
      margin-top: 3px;
    }
    .nodeName {
      margin-left: 10px;
      font-family: circular;
      color: slategrey
    }`, this.c = y, o(d, "class", "nodeName"), Se(
        n,
        "padding-left",
        /*level*/
        t[1] * 2 + "rem"
      );
    },
    m(_, M) {
      E(_, e, M), c(e, n), ~l && x[l].m(n, null), c(n, s), ~i && R[i].m(n, null), c(n, u), c(n, d), c(d, p), c(e, f), k && k.m(e, null), c(e, b), c(e, v), w = !0, $ || (C = le(
        n,
        "click",
        /*toggle*/
        t[2]
      ), $ = !0);
    },
    p(_, [M]) {
      var I;
      let j = l;
      l = O(_), l !== j && (r && (_e(), S(x[j], 1, 1, () => {
        x[j] = null;
      }), me()), ~l ? (r = x[l], r || (r = x[l] = A[l](_), r.c()), H(r, 1), r.m(n, s)) : r = null);
      let L = i;
      i = G(_), i !== L && (a && (_e(), S(R[L], 1, 1, () => {
        R[L] = null;
      }), me()), ~i ? (a = R[i], a || (a = R[i] = X[i](_), a.c()), H(a, 1), a.m(n, u)) : a = null), (!w || M & /*node*/
      1) && m !== (m = /*node*/
      ((I = _[0]) == null ? void 0 : I.name) + "") && Me(p, m), (!w || M & /*level*/
      2) && Se(
        n,
        "padding-left",
        /*level*/
        _[1] * 2 + "rem"
      ), /*node*/
      _[0] && /*node*/
      _[0].expanded && /*node*/
      _[0].children ? k ? (k.p(_, M), M & /*node*/
      1 && H(k, 1)) : (k = qe(_), k.c(), H(k, 1), k.m(e, b)) : k && (_e(), S(k, 1, 1, () => {
        k = null;
      }), me());
    },
    i(_) {
      w || (H(r), H(a), re(() => {
        w && (h || (h = Te(n, Pe, {}, !0)), h.run(1));
      }), H(k), w = !0);
    },
    o(_) {
      S(r), S(a), h || (h = Te(n, Pe, {}, !1)), h.run(0), S(k), w = !1;
    },
    d(_) {
      _ && z(e), ~l && x[l].d(), ~i && R[i].d(), _ && h && h.end(), k && k.d(), $ = !1, C();
    }
  };
}
function Bt(t, e, n) {
  let { node: l } = e, { level: r = 0 } = e;
  const s = () => n(0, l);
  function i() {
    n(0, l.expanded = !l.expanded, l);
  }
  return t.$$set = (a) => {
    "node" in a && n(0, l = a.node), "level" in a && n(1, r = a.level);
  }, [l, r, i, s];
}
class He extends Q {
  constructor(e) {
    super(), ne(
      this,
      {
        target: this.shadowRoot,
        props: te(this.attributes),
        customElement: !0
      },
      Bt,
      At,
      ee,
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
customElements.define("my-tree-node", He);
function It(t) {
  var B;
  let e, n, l, r, s, i, a, u, d, m, p, h, f, b, v, w, $, C, A, x, O, X;
  p = new Ze({
    props: {
      locationOptions: [
        { name: $e, type: V.Folder },
        .../*tree_data*/
        ((B = t[0]) == null ? void 0 : B.children) || []
      ]
    }
  }), p.$on(
    "save",
    /*handleSave*/
    t[4]
  );
  function R(_) {
    t[6](_);
  }
  function G(_) {
    t[7](_);
  }
  let k = {};
  return (
    /*rerenderNode*/
    t[3] !== void 0 && (k.rerender = /*rerenderNode*/
    t[3]), /*tree_data*/
    t[0] !== void 0 && (k.node = /*tree_data*/
    t[0]), v = new He({ props: k }), ve.push(() => De(v, "rerender", R)), ve.push(() => De(v, "node", G)), {
      c() {
        e = g("div"), n = g("div"), l = g("div"), r = g("h3"), s = W("Hello, "), i = W(
          /*user_name*/
          t[1]
        ), a = W("!"), u = N(), d = g("button"), d.textContent = "Logout", m = N(), Y(p.$$.fragment), h = N(), f = g("div"), b = g("ul"), Y(v.$$.fragment), C = N(), A = g("style"), A.textContent = `:global(body) {
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

    h3 {
      color: #ffca28;
    }

    .headerDiv {
      display: flex;
      justify-content: center;
    }

    .header {
      width: 95%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      align-self: center;
    }

    .logout-button {
      background-color: #f44336;
      color: white;
      border: none;
      height: 3em;
      padding-left: 15px;
      padding-right: 15px;
      border-radius: 5px;
      cursor: pointer;
    }

    @media only screen and (min-width: 992px) {
      ul {
        width: 40%;
      }
      .header {
        width: 40%;
      }
    }`, this.c = y, o(d, "class", "logout-button"), o(l, "class", "header"), o(n, "class", "headerDiv"), o(f, "class", "list-container");
      },
      m(_, M) {
        E(_, e, M), c(e, n), c(n, l), c(l, r), c(r, s), c(r, i), c(r, a), c(l, u), c(l, d), c(e, m), J(p, e, null), c(e, h), c(e, f), c(f, b), J(v, b, null), c(e, C), c(e, A), x = !0, O || (X = le(d, "click", function() {
          fe(
            /*on_logout*/
            t[2]
          ) && t[2].apply(this, arguments);
        }), O = !0);
      },
      p(_, [M]) {
        var I;
        t = _, (!x || M & /*user_name*/
        2) && Me(
          i,
          /*user_name*/
          t[1]
        );
        const j = {};
        M & /*tree_data*/
        1 && (j.locationOptions = [
          { name: $e, type: V.Folder },
          .../*tree_data*/
          ((I = t[0]) == null ? void 0 : I.children) || []
        ]), p.$set(j);
        const L = {};
        !w && M & /*rerenderNode*/
        8 && (w = !0, L.rerender = /*rerenderNode*/
        t[3], Le(() => w = !1)), !$ && M & /*tree_data*/
        1 && ($ = !0, L.node = /*tree_data*/
        t[0], Le(() => $ = !1)), v.$set(L);
      },
      i(_) {
        x || (H(p.$$.fragment, _), H(v.$$.fragment, _), x = !0);
      },
      o(_) {
        S(p.$$.fragment, _), S(v.$$.fragment, _), x = !1;
      },
      d(_) {
        _ && z(e), K(p), K(v), O = !1, X();
      }
    }
  );
}
function We(t, e) {
  var n, l;
  for (let r = 0; r < t.length; r++)
    if (((l = (n = t[r]) == null ? void 0 : n.name) == null ? void 0 : l.toLowerCase()) === (e == null ? void 0 : e.toLowerCase()))
      return r;
  return !1;
}
function Pt(t, e, n) {
  let { user_name: l = "Gaurav" } = e, { update_files_structure: r } = e, { tree_data: s = Et } = e, { on_logout: i } = e, a;
  function u(h, f) {
    typeof We(h.children, f == null ? void 0 : f.name) == "number" ? alert("File or Folder with this name already exists at this location!") : (h.children.push({
      ...f,
      children: f.type === V.Folder ? [] : null
    }), h.expanded = !0, n(0, s.expanded = !0, s));
  }
  function d(h) {
    const f = h.detail;
    if ((f == null ? void 0 : f.location) === $e)
      u(s, f);
    else {
      const b = We(s.children, f == null ? void 0 : f.location);
      typeof b == "number" && u(s.children[b], f);
    }
    r(s), a();
  }
  function m(h) {
    a = h, n(3, a);
  }
  function p(h) {
    s = h, n(0, s);
  }
  return t.$$set = (h) => {
    "user_name" in h && n(1, l = h.user_name), "update_files_structure" in h && n(5, r = h.update_files_structure), "tree_data" in h && n(0, s = h.tree_data), "on_logout" in h && n(2, i = h.on_logout);
  }, [
    s,
    l,
    i,
    a,
    d,
    r,
    m,
    p
  ];
}
class it extends Q {
  constructor(e) {
    super(), ne(
      this,
      {
        target: this.shadowRoot,
        props: te(this.attributes),
        customElement: !0
      },
      Pt,
      It,
      ee,
      {
        user_name: 1,
        update_files_structure: 5,
        tree_data: 0,
        on_logout: 2
      },
      null
    ), e && (e.target && E(e.target, this, e.anchor), e.props && (this.$set(e.props), P()));
  }
  static get observedAttributes() {
    return ["user_name", "update_files_structure", "tree_data", "on_logout"];
  }
  get user_name() {
    return this.$$.ctx[1];
  }
  set user_name(e) {
    this.$$set({ user_name: e }), P();
  }
  get update_files_structure() {
    return this.$$.ctx[5];
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
  get on_logout() {
    return this.$$.ctx[2];
  }
  set on_logout(e) {
    this.$$set({ on_logout: e }), P();
  }
}
customElements.define("my-filetree-web-component", it);
const Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: it
}, Symbol.toStringTag, { value: "Module" }));
export {
  Gt as MyFileTreeComponent
};
