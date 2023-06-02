function y() {
}
const ct = (t) => t;
function xe(t) {
  return t();
}
function Ne() {
  return /* @__PURE__ */ Object.create(null);
}
function X(t) {
  t.forEach(xe);
}
function ae(t) {
  return typeof t == "function";
}
function q(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function at(t) {
  return Object.keys(t).length === 0;
}
const Je = typeof window < "u";
let ut = Je ? () => window.performance.now() : () => Date.now(), Ee = Je ? (t) => requestAnimationFrame(t) : y;
const le = /* @__PURE__ */ new Set();
function Ke(t) {
  le.forEach((e) => {
    e.c(t) || (le.delete(e), e.f());
  }), le.size !== 0 && Ee(Ke);
}
function ft(t) {
  let e;
  return le.size === 0 && Ee(Ke), {
    promise: new Promise((n) => {
      le.add(e = { c: t, f: n });
    }),
    abort() {
      le.delete(e);
    }
  };
}
function d(t, e) {
  t.appendChild(e);
}
function Qe(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function dt(t) {
  const e = v("style");
  return ht(Qe(t), e), e.sheet;
}
function ht(t, e) {
  return d(t.head || t, e), e.sheet;
}
function k(t, e, n) {
  t.insertBefore(e, n || null);
}
function M(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Fe(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function v(t) {
  return document.createElement(t);
}
function F(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Q(t) {
  return document.createTextNode(t);
}
function O() {
  return Q(" ");
}
function Ce() {
  return Q("");
}
function Y(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function pt(t) {
  return Array.from(t.childNodes);
}
function Me(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function ze(t, e) {
  t.value = e ?? "";
}
function de(t, e, n) {
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
function Xe(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, l, e), r;
}
function W(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
const pe = /* @__PURE__ */ new Map();
let me = 0;
function mt(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function _t(t, e) {
  const n = { stylesheet: dt(e), rules: {} };
  return pe.set(t, n), n;
}
function Re(t, e, n, l, r, i, o, a = 0) {
  const s = 16.666 / l;
  let h = `{
`;
  for (let H = 0; H <= 1; H += s) {
    const w = e + (n - e) * i(H);
    h += H * 100 + `%{${o(w, 1 - w)}}
`;
  }
  const u = h + `100% {${o(n, 1 - n)}}
}`, f = `__svelte_${mt(u)}_${a}`, m = Qe(t), { stylesheet: p, rules: _ } = pe.get(m) || _t(m, t);
  _[f] || (_[f] = !0, p.insertRule(`@keyframes ${f} ${u}`, p.cssRules.length));
  const g = t.style.animation || "";
  return t.style.animation = `${g ? `${g}, ` : ""}${f} ${l}ms linear ${r}ms 1 both`, me += 1, f;
}
function gt(t, e) {
  const n = (t.style.animation || "").split(", "), l = n.filter(
    e ? (i) => i.indexOf(e) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), r = n.length - l.length;
  r && (t.style.animation = l.join(", "), me -= r, me || bt());
}
function bt() {
  Ee(() => {
    me || (pe.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && M(e);
    }), pe.clear());
  });
}
let ue;
function ce(t) {
  ue = t;
}
function Ye() {
  if (!ue)
    throw new Error("Function called outside component initialization");
  return ue;
}
function vt(t) {
  Ye().$$.on_mount.push(t);
}
function $t() {
  const t = Ye();
  return (e, n, { cancelable: l = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const i = Xe(e, n, { cancelable: l });
      return r.slice().forEach((o) => {
        o.call(t, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
const ne = [], ye = [];
let re = [];
const we = [], yt = /* @__PURE__ */ Promise.resolve();
let ke = !1;
function wt() {
  ke || (ke = !0, yt.then(N));
}
function Z(t) {
  re.push(t);
}
function kt(t) {
  we.push(t);
}
const ve = /* @__PURE__ */ new Set();
let te = 0;
function N() {
  if (te !== 0)
    return;
  const t = ue;
  do {
    try {
      for (; te < ne.length; ) {
        const e = ne[te];
        te++, ce(e), xt(e.$$);
      }
    } catch (e) {
      throw ne.length = 0, te = 0, e;
    }
    for (ce(null), ne.length = 0, te = 0; ye.length; )
      ye.pop()();
    for (let e = 0; e < re.length; e += 1) {
      const n = re[e];
      ve.has(n) || (ve.add(n), n());
    }
    re.length = 0;
  } while (ne.length);
  for (; we.length; )
    we.pop()();
  ke = !1, ve.clear(), ce(t);
}
function xt(t) {
  if (t.fragment !== null) {
    t.update(), X(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Z);
  }
}
function Et(t) {
  const e = [], n = [];
  re.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), re = e;
}
let se;
function Ft() {
  return se || (se = Promise.resolve(), se.then(() => {
    se = null;
  })), se;
}
function $e(t, e, n) {
  t.dispatchEvent(Xe(`${e ? "intro" : "outro"}${n}`));
}
const he = /* @__PURE__ */ new Set();
let K;
function oe() {
  K = {
    r: 0,
    c: [],
    p: K
    // parent group
  };
}
function ie() {
  K.r || X(K.c), K = K.p;
}
function x(t, e) {
  t && t.i && (he.delete(t), t.i(e));
}
function C(t, e, n, l) {
  if (t && t.o) {
    if (he.has(t))
      return;
    he.add(t), K.c.push(() => {
      he.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
const Ct = { duration: 0 };
function Se(t, e, n, l) {
  const r = { direction: "both" };
  let i = e(t, n, r), o = l ? 0 : 1, a = null, s = null, h = null;
  function u() {
    h && gt(t, h);
  }
  function f(p, _) {
    const g = p.b - o;
    return _ *= Math.abs(g), {
      a: o,
      b: p.b,
      d: g,
      duration: _,
      start: p.start,
      end: p.start + _,
      group: p.group
    };
  }
  function m(p) {
    const { delay: _ = 0, duration: g = 300, easing: H = ct, tick: w = y, css: b } = i || Ct, S = {
      start: ut() + _,
      b: p
    };
    p || (S.group = K, K.r += 1), a || s ? s = S : (b && (u(), h = Re(t, o, p, g, _, H, b)), p && w(0, 1), a = f(S, g), Z(() => $e(t, p, "start")), ft(($) => {
      if (s && $ > s.start && (a = f(s, g), s = null, $e(t, a.b, "start"), b && (u(), h = Re(t, o, a.b, a.duration, 0, H, i.css))), a) {
        if ($ >= a.end)
          w(o = a.b, 1 - o), $e(t, a.b, "end"), s || (a.b ? u() : --a.group.r || X(a.group.c)), a = null;
        else if ($ >= a.start) {
          const E = $ - a.start;
          o = a.a + a.d * H(E / a.duration), w(o, 1 - o);
        }
      }
      return !!(a || s);
    }));
  }
  return {
    run(p) {
      ae(i) ? Ft().then(() => {
        i = i(r), m(p);
      }) : m(p);
    },
    end() {
      u(), a = s = null;
    }
  };
}
function Mt(t, e, n) {
  const l = t.$$.props[e];
  l !== void 0 && (t.$$.bound[l] = n, n(t.$$.ctx[l]));
}
function U(t) {
  t && t.c();
}
function T(t, e, n, l) {
  const { fragment: r, after_update: i } = t.$$;
  r && r.m(e, n), l || Z(() => {
    const o = t.$$.on_mount.map(xe).filter(ae);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : X(o), t.$$.on_mount = [];
  }), i.forEach(Z);
}
function V(t, e) {
  const n = t.$$;
  n.fragment !== null && (Et(n.after_update), X(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ht(t, e) {
  t.$$.dirty[0] === -1 && (ne.push(t), wt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function G(t, e, n, l, r, i, o, a = [-1]) {
  const s = ue;
  ce(t);
  const h = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: y,
    not_equal: r,
    bound: Ne(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Ne(),
    dirty: a,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  o && o(h.root);
  let u = !1;
  if (h.ctx = n ? n(t, e.props || {}, (f, m, ...p) => {
    const _ = p.length ? p[0] : m;
    return h.ctx && r(h.ctx[f], h.ctx[f] = _) && (!h.skip_bound && h.bound[f] && h.bound[f](_), u && Ht(t, f)), m;
  }) : [], h.update(), u = !0, X(h.before_update), h.fragment = l ? l(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = pt(e.target);
      h.fragment && h.fragment.l(f), f.forEach(M);
    } else
      h.fragment && h.fragment.c();
    e.intro && x(t.$$.fragment), T(t, e.target, e.anchor, e.customElement), N();
  }
  ce(s);
}
let B;
typeof HTMLElement == "function" && (B = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(xe).filter(ae);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    X(this.$$.on_disconnect);
  }
  $destroy() {
    V(this, 1), this.$destroy = y;
  }
  $on(t, e) {
    if (!ae(e))
      return y;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const l = n.indexOf(e);
      l !== -1 && n.splice(l, 1);
    };
  }
  $set(t) {
    this.$$set && !at(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
const I = {
  File: "File",
  Folder: "Folder"
}, _e = "Root";
function Ae(t, e, n) {
  const l = t.slice();
  return l[10] = e[n], l;
}
function Ie(t) {
  let e, n = (
    /*locationOptions*/
    t[0]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Ve(Ae(t, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      e = Ce();
    },
    m(r, i) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(r, i);
      k(r, e, i);
    },
    p(r, i) {
      if (i & /*locationOptions, NodeType*/
      1) {
        n = /*locationOptions*/
        r[0];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Ae(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Ve(a), l[o].c(), l[o].m(e.parentNode, e));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      Fe(l, r), r && M(e);
    }
  };
}
function Te(t) {
  let e, n = (
    /*option*/
    t[10].name + ""
  ), l, r;
  return {
    c() {
      e = v("option"), l = Q(n), e.__value = r = /*option*/
      t[10].name, e.value = e.__value;
    },
    m(i, o) {
      k(i, e, o), d(e, l);
    },
    p(i, o) {
      o & /*locationOptions*/
      1 && n !== (n = /*option*/
      i[10].name + "") && Me(l, n), o & /*locationOptions*/
      1 && r !== (r = /*option*/
      i[10].name) && (e.__value = r, e.value = e.__value);
    },
    d(i) {
      i && M(e);
    }
  };
}
function Ve(t) {
  let e, n = (
    /*option*/
    t[10].type === I.Folder && Te(t)
  );
  return {
    c() {
      n && n.c(), e = Ce();
    },
    m(l, r) {
      n && n.m(l, r), k(l, e, r);
    },
    p(l, r) {
      /*option*/
      l[10].type === I.Folder ? n ? n.p(l, r) : (n = Te(l), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && M(e);
    }
  };
}
function Lt(t) {
  let e, n, l, r, i, o, a, s, h, u, f, m, p, _, g, H, w, b, S, $, E, z, P, L, D, A, ee, fe, Le, ge, be, Oe, j = (
    /*locationOptions*/
    t[0] && Ie(t)
  );
  return {
    c() {
      e = v("div"), n = v("div"), l = v("label"), l.textContent = "Name:", r = O(), i = v("div"), o = v("input"), a = O(), s = v("label"), s.textContent = "Type:", h = O(), u = v("div"), f = v("select"), m = v("option"), m.textContent = "File", p = v("option"), p.textContent = "Folder", _ = O(), g = v("label"), g.textContent = "Location:", H = O(), w = v("div"), b = v("select"), j && j.c(), S = O(), $ = v("div"), E = v("button"), z = Q("Save"), D = O(), A = v("button"), ee = Q("Cancel"), Le = O(), ge = v("style"), ge.textContent = `.main-container {
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
    }`, this.c = y, c(l, "class", "form-label"), c(l, "for", "name"), c(o, "class", "form-input"), c(o, "type", "text"), c(o, "id", "name"), c(i, "class", "form-row"), c(s, "class", "form-label"), c(s, "for", "type"), m.__value = "File", m.value = m.__value, p.__value = "Folder", p.value = p.__value, c(f, "class", "form-input"), c(f, "id", "type"), /*type*/
      t[2] === void 0 && Z(() => (
        /*select0_change_handler*/
        t[7].call(f)
      )), c(u, "class", "form-row"), c(g, "class", "form-label"), c(g, "for", "location"), c(b, "class", "form-input"), c(b, "id", "location"), /*location*/
      t[3] === void 0 && Z(() => (
        /*select1_change_handler*/
        t[8].call(b)
      )), c(w, "class", "form-row"), c(E, "class", P = "save-button " + /*name*/
      (t[1] ? "enabled-save-button " : "disabled-save-button")), E.disabled = L = !/*name*/
      t[1], c(A, "class", fe = "cancel-button " + /*name*/
      (t[1] ? "enabled-cancel-button" : "")), c($, "class", "form-buttons"), c(n, "class", "form-container"), c(e, "class", "main-container");
    },
    m(R, J) {
      k(R, e, J), d(e, n), d(n, l), d(n, r), d(n, i), d(i, o), ze(
        o,
        /*name*/
        t[1]
      ), d(n, a), d(n, s), d(n, h), d(n, u), d(u, f), d(f, m), d(f, p), de(
        f,
        /*type*/
        t[2],
        !0
      ), d(n, _), d(n, g), d(n, H), d(n, w), d(w, b), j && j.m(b, null), de(
        b,
        /*location*/
        t[3],
        !0
      ), d(n, S), d(n, $), d($, E), d(E, z), d($, D), d($, A), d(A, ee), d(e, Le), d(e, ge), be || (Oe = [
        Y(
          o,
          "input",
          /*input_input_handler*/
          t[6]
        ),
        Y(
          f,
          "change",
          /*select0_change_handler*/
          t[7]
        ),
        Y(
          b,
          "change",
          /*select1_change_handler*/
          t[8]
        ),
        Y(
          E,
          "click",
          /*save*/
          t[5]
        ),
        Y(
          A,
          "click",
          /*cancel*/
          t[4]
        )
      ], be = !0);
    },
    p(R, [J]) {
      J & /*name*/
      2 && o.value !== /*name*/
      R[1] && ze(
        o,
        /*name*/
        R[1]
      ), J & /*type*/
      4 && de(
        f,
        /*type*/
        R[2]
      ), /*locationOptions*/
      R[0] ? j ? j.p(R, J) : (j = Ie(R), j.c(), j.m(b, null)) : j && (j.d(1), j = null), J & /*location, locationOptions*/
      9 && de(
        b,
        /*location*/
        R[3]
      ), J & /*name*/
      2 && P !== (P = "save-button " + /*name*/
      (R[1] ? "enabled-save-button " : "disabled-save-button")) && c(E, "class", P), J & /*name*/
      2 && L !== (L = !/*name*/
      R[1]) && (E.disabled = L), J & /*name*/
      2 && fe !== (fe = "cancel-button " + /*name*/
      (R[1] ? "enabled-cancel-button" : "")) && c(A, "class", fe);
    },
    i: y,
    o: y,
    d(R) {
      R && M(e), j && j.d(), be = !1, X(Oe);
    }
  };
}
function Ot(t, e, n) {
  let { locationOptions: l } = e, r = "", i = I.File, o = _e;
  const a = $t();
  function s() {
    n(1, r = "");
  }
  function h() {
    const p = {
      name: r.charAt(0).toUpperCase() + r.slice(1),
      type: i,
      location: o
    };
    a("save", p), s();
  }
  function u() {
    r = this.value, n(1, r);
  }
  function f() {
    i = je(this), n(2, i);
  }
  function m() {
    o = je(this), n(3, o), n(0, l);
  }
  return t.$$set = (p) => {
    "locationOptions" in p && n(0, l = p.locationOptions);
  }, [
    l,
    r,
    i,
    o,
    s,
    h,
    u,
    f,
    m
  ];
}
class Ze extends B {
  constructor(e) {
    super(), G(
      this,
      {
        target: this.shadowRoot,
        props: W(this.attributes),
        customElement: !0
      },
      Ot,
      Lt,
      q,
      { locationOptions: 0 },
      null
    ), e && (e.target && k(e.target, this, e.anchor), e.props && (this.$set(e.props), N()));
  }
  static get observedAttributes() {
    return ["locationOptions"];
  }
  get locationOptions() {
    return this.$$.ctx[0];
  }
  set locationOptions(e) {
    this.$$set({ locationOptions: e }), N();
  }
}
customElements.define("my-form", Ze);
function Nt(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Be(t, { delay: e = 0, duration: n = 400, easing: l = Nt, axis: r = "y" } = {}) {
  const i = getComputedStyle(t), o = +i.opacity, a = r === "y" ? "height" : "width", s = parseFloat(i[a]), h = r === "y" ? ["top", "bottom"] : ["left", "right"], u = h.map((w) => `${w[0].toUpperCase()}${w.slice(1)}`), f = parseFloat(i[`padding${u[0]}`]), m = parseFloat(i[`padding${u[1]}`]), p = parseFloat(i[`margin${u[0]}`]), _ = parseFloat(i[`margin${u[1]}`]), g = parseFloat(i[`border${u[0]}Width`]), H = parseFloat(i[`border${u[1]}Width`]);
  return {
    delay: e,
    duration: n,
    easing: l,
    css: (w) => `overflow: hidden;opacity: ${Math.min(w * 20, 1) * o};${a}: ${w * s}px;padding-${h[0]}: ${w * f}px;padding-${h[1]}: ${w * m}px;margin-${h[0]}: ${w * p}px;margin-${h[1]}: ${w * _}px;border-${h[0]}-width: ${w * g}px;border-${h[1]}-width: ${w * H}px;`
  };
}
function zt(t) {
  let e, n, l, r, i, o, a, s, h, u, f, m, p;
  return {
    c() {
      e = F("svg"), n = F("g"), l = F("g"), r = F("polygon"), i = F("path"), o = F("path"), a = F("path"), s = F("path"), h = F("path"), u = F("path"), f = F("path"), m = F("path"), p = F("polygon"), this.c = y, c(r, "fill", "#ffca28"), c(r, "points", "46,3.414 46,14 56.586,14 		"), c(i, "fill", "#ffca28"), c(i, "d", `M45,16c-0.553,0-1-0.447-1-1V2H8C6.896,2,6,2.896,6,4v56c0,1.104,0.896,2,2,2h48c1.104,0,2-0.896,2-2V16
			H45z`), c(o, "fill", "#394240"), c(o, "d", "M14,26c0,0.553,0.447,1,1,1h34c0.553,0,1-0.447,1-1s-0.447-1-1-1H15C14.447,25,14,25.447,14,26z"), c(a, "fill", "#394240"), c(a, "d", "M49,37H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,37,49,37z"), c(s, "fill", "#394240"), c(s, "d", "M49,43H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,43,49,43z"), c(h, "fill", "#394240"), c(h, "d", "M49,49H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,49,49,49z"), c(u, "fill", "#394240"), c(u, "d", "M49,31H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h34c0.553,0,1-0.447,1-1S49.553,31,49,31z"), c(f, "fill", "#394240"), c(f, "d", "M15,20h16c0.553,0,1-0.447,1-1s-0.447-1-1-1H15c-0.553,0-1,0.447-1,1S14.447,20,15,20z"), c(m, "fill", "#ffa000"), c(m, "d", `M59.706,14.292L45.708,0.294C45.527,0.112,45.277,0,45,0H8C5.789,0,4,1.789,4,4v56c0,2.211,1.789,4,4,4h48
		c2.211,0,4-1.789,4-4V15C60,14.723,59.888,14.473,59.706,14.292z M46,3.414L56.586,14H46V3.414z M58,60c0,1.104-0.896,2-2,2H8
		c-1.104,0-2-0.896-2-2V4c0-1.104,0.896-2,2-2h36v13c0,0.553,0.447,1,1,1h13V60z`), c(p, "opacity", "0.15"), c(p, "fill", "#ffa000"), c(p, "points", "46,3.414 56.586,14 46,14 	"), c(e, "version", "1.0"), c(e, "id", "Layer_1"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), c(e, "width", "18px"), c(e, "height", "18px"), c(e, "viewBox", "0 0 64 64"), c(e, "enable-background", "new 0 0 64 64"), c(e, "xml:space", "preserve");
    },
    m(_, g) {
      k(_, e, g), d(e, n), d(n, l), d(l, r), d(l, i), d(n, o), d(n, a), d(n, s), d(n, h), d(n, u), d(n, f), d(n, m), d(n, p);
    },
    p: y,
    i: y,
    o: y,
    d(_) {
      _ && M(e);
    }
  };
}
class et extends B {
  constructor(e) {
    super(), G(
      this,
      {
        target: this.shadowRoot,
        props: W(this.attributes),
        customElement: !0
      },
      null,
      zt,
      q,
      {},
      null
    ), e && e.target && k(e.target, this, e.anchor);
  }
}
customElements.define("my-file-icon-svg", et);
function jt(t) {
  let e, n, l;
  return {
    c() {
      e = F("svg"), n = F("path"), l = F("path"), this.c = y, c(n, "fill", "#ffa000"), c(n, "d", "M11.8 3.4H6.4L5.2 2.2h-3c-.66 0-1.2.54-1.2 1.2v2.4h12V4.6c0-.66-.54-1.2-1.2-1.2z"), c(l, "fill", "#ffca28"), c(l, "d", "M11.8 3.4H2.2c-.66 0-1.2.54-1.2 1.2v6c0 .66.54 1.2 1.2 1.2h9.6c.66 0 1.2-.54 1.2-1.2v-6c0-.66-.54-1.2-1.2-1.2z"), c(e, "width", "24px"), c(e, "height", "24px"), c(e, "viewBox", "0 0 14 14"), c(e, "role", "img"), c(e, "focusable", "false"), c(e, "aria-hidden", "true"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, i) {
      k(r, e, i), d(e, n), d(e, l);
    },
    p: y,
    i: y,
    o: y,
    d(r) {
      r && M(e);
    }
  };
}
class tt extends B {
  constructor(e) {
    super(), G(
      this,
      {
        target: this.shadowRoot,
        props: W(this.attributes),
        customElement: !0
      },
      null,
      jt,
      q,
      {},
      null
    ), e && e.target && k(e.target, this, e.anchor);
  }
}
customElements.define("my-closed-folder-icon-svg", tt);
function Rt(t) {
  let e, n, l;
  return {
    c() {
      e = F("svg"), n = F("path"), l = F("path"), this.c = y, c(n, "fill", "#ffa000"), c(n, "d", "M10.67276443 3.58608316H6.12087531L4.98290303 2.44811088h-2.8449307c-.62588475 0-1.13797228.51208753-1.13797228 1.13797228v6.82783368c0 .62588475.51208753 1.13797228 1.13797228 1.13797228h8.81928517c.48363822 0 .85347921-.369841.85347921-.85347921V4.72405544c0-.62588475-.51208753-1.13797228-1.13797228-1.13797228z"), c(l, "fill", "#ffca28"), c(l, "d", "M11.86763532 5.29304158H4.21477174c-.54053683 0-1.02417505.3982903-1.10952297.93882713l-.96727644 5.32002041h9.01843032c.54053683 0 1.02417505-.3982903 1.10952297-.93882713L12.9771583 6.630159c.14224653-.68278337-.3982903-1.33711743-1.10952298-1.33711743z"), c(e, "width", "24px"), c(e, "height", "24px"), c(e, "viewBox", "0 0 14 14"), c(e, "role", "img"), c(e, "focusable", "false"), c(e, "aria-hidden", "true"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, i) {
      k(r, e, i), d(e, n), d(e, l);
    },
    p: y,
    i: y,
    o: y,
    d(r) {
      r && M(e);
    }
  };
}
class nt extends B {
  constructor(e) {
    super(), G(
      this,
      {
        target: this.shadowRoot,
        props: W(this.attributes),
        customElement: !0
      },
      null,
      Rt,
      q,
      {},
      null
    ), e && e.target && k(e.target, this, e.anchor);
  }
}
customElements.define("my-open-folder-icon-svg", nt);
function St(t) {
  let e, n, l;
  return n = new et({}), {
    c() {
      e = v("div"), U(n.$$.fragment), c(e, "class", "iconDiv");
    },
    m(r, i) {
      k(r, e, i), T(n, e, null), l = !0;
    },
    i(r) {
      l || (x(n.$$.fragment, r), l = !0);
    },
    o(r) {
      C(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && M(e), V(n);
    }
  };
}
function At(t) {
  let e, n, l;
  return n = new tt({}), {
    c() {
      e = v("div"), U(n.$$.fragment), c(e, "class", "iconDiv");
    },
    m(r, i) {
      k(r, e, i), T(n, e, null), l = !0;
    },
    i(r) {
      l || (x(n.$$.fragment, r), l = !0);
    },
    o(r) {
      C(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && M(e), V(n);
    }
  };
}
function It(t) {
  let e, n, l;
  return n = new nt({}), {
    c() {
      e = v("div"), U(n.$$.fragment), c(e, "class", "iconDiv");
    },
    m(r, i) {
      k(r, e, i), T(n, e, null), l = !0;
    },
    i(r) {
      l || (x(n.$$.fragment, r), l = !0);
    },
    o(r) {
      C(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && M(e), V(n);
    }
  };
}
function Tt(t) {
  let e, n, l, r, i, o;
  const a = [It, At, St], s = [];
  function h(u, f) {
    var m, p, _;
    return (
      /*node*/
      ((m = u[0]) == null ? void 0 : m.type) === I.Folder && /*node*/
      u[0].expanded ? 0 : (
        /*node*/
        ((p = u[0]) == null ? void 0 : p.type) === I.Folder ? 1 : (
          /*node*/
          ((_ = u[0]) == null ? void 0 : _.type) === I.File ? 2 : -1
        )
      )
    );
  }
  return ~(n = h(t)) && (l = s[n] = a[n](t)), {
    c() {
      e = v("div"), l && l.c(), r = O(), i = v("style"), i.textContent = `.iconDiv {
      margin-left: 5px;
      margin-top: 3px;
    }`, this.c = y;
    },
    m(u, f) {
      k(u, e, f), ~n && s[n].m(e, null), d(e, r), d(e, i), o = !0;
    },
    p(u, [f]) {
      let m = n;
      n = h(u), n !== m && (l && (oe(), C(s[m], 1, 1, () => {
        s[m] = null;
      }), ie()), ~n ? (l = s[n], l || (l = s[n] = a[n](u), l.c()), x(l, 1), l.m(e, r)) : l = null);
    },
    i(u) {
      o || (x(l), o = !0);
    },
    o(u) {
      C(l), o = !1;
    },
    d(u) {
      u && M(e), ~n && s[n].d();
    }
  };
}
function Vt(t, e, n) {
  let { node: l } = e;
  return t.$$set = (r) => {
    "node" in r && n(0, l = r.node);
  }, [l];
}
class lt extends B {
  constructor(e) {
    super(), G(
      this,
      {
        target: this.shadowRoot,
        props: W(this.attributes),
        customElement: !0
      },
      Vt,
      Tt,
      q,
      { node: 0 },
      null
    ), e && (e.target && k(e.target, this, e.anchor), e.props && (this.$set(e.props), N()));
  }
  static get observedAttributes() {
    return ["node"];
  }
  get node() {
    return this.$$.ctx[0];
  }
  set node(e) {
    this.$$set({ node: e }), N();
  }
}
customElements.define("my-tree-node-icon", lt);
function Bt(t) {
  let e, n;
  return {
    c() {
      e = F("svg"), n = F("polyline"), this.c = y, c(n, "points", "9 18 15 12 9 6"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "fill", "none"), c(e, "stroke", "slategray"), c(e, "stroke-width", "2"), c(e, "stroke-linecap", "round"), c(e, "stroke-linejoin", "round"), c(e, "class", "feather feather-chevron-right");
    },
    m(l, r) {
      k(l, e, r), d(e, n);
    },
    p: y,
    i: y,
    o: y,
    d(l) {
      l && M(e);
    }
  };
}
class rt extends B {
  constructor(e) {
    super(), G(
      this,
      {
        target: this.shadowRoot,
        props: W(this.attributes),
        customElement: !0
      },
      null,
      Bt,
      q,
      {},
      null
    ), e && e.target && k(e.target, this, e.anchor);
  }
}
customElements.define("my-closed-icon-svg", rt);
function Pt(t) {
  let e, n;
  return {
    c() {
      e = F("svg"), n = F("polyline"), this.c = y, c(n, "points", "6 9 12 15 18 9"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "fill", "none"), c(e, "stroke", "slategray"), c(e, "stroke-width", "2"), c(e, "stroke-linecap", "round"), c(e, "stroke-linejoin", "round"), c(e, "class", "feather feather-chevron-down");
    },
    m(l, r) {
      k(l, e, r), d(e, n);
    },
    p: y,
    i: y,
    o: y,
    d(l) {
      l && M(e);
    }
  };
}
class ot extends B {
  constructor(e) {
    super(), G(
      this,
      {
        target: this.shadowRoot,
        props: W(this.attributes),
        customElement: !0
      },
      null,
      Pt,
      q,
      {},
      null
    ), e && e.target && k(e.target, this, e.anchor);
  }
}
customElements.define("my-opened-icon-svg", ot);
function Dt(t) {
  let e, n;
  return e = new ot({}), {
    c() {
      U(e.$$.fragment);
    },
    m(l, r) {
      T(e, l, r), n = !0;
    },
    i(l) {
      n || (x(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Ut(t) {
  let e, n;
  return e = new rt({}), {
    c() {
      U(e.$$.fragment);
    },
    m(l, r) {
      T(e, l, r), n = !0;
    },
    i(l) {
      n || (x(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function qt(t) {
  let e, n, l, r;
  const i = [Ut, Dt], o = [];
  function a(s, h) {
    var u, f;
    return (
      /*node*/
      ((u = s[0]) == null ? void 0 : u.type) === I.Folder && !/*node*/
      s[0].expanded && /*level*/
      s[1] === 1 ? 0 : (
        /*node*/
        ((f = s[0]) == null ? void 0 : f.type) === I.Folder && /*level*/
        s[1] === 1 ? 1 : -1
      )
    );
  }
  return ~(n = a(t)) && (l = o[n] = i[n](t)), {
    c() {
      e = v("div"), l && l.c(), this.c = y;
    },
    m(s, h) {
      k(s, e, h), ~n && o[n].m(e, null), r = !0;
    },
    p(s, [h]) {
      let u = n;
      n = a(s), n !== u && (l && (oe(), C(o[u], 1, 1, () => {
        o[u] = null;
      }), ie()), ~n ? (l = o[n], l || (l = o[n] = i[n](s), l.c()), x(l, 1), l.m(e, null)) : l = null);
    },
    i(s) {
      r || (x(l), r = !0);
    },
    o(s) {
      C(l), r = !1;
    },
    d(s) {
      s && M(e), ~n && o[n].d();
    }
  };
}
function Wt(t, e, n) {
  let { node: l } = e, { level: r } = e;
  return t.$$set = (i) => {
    "node" in i && n(0, l = i.node), "level" in i && n(1, r = i.level);
  }, [l, r];
}
class it extends B {
  constructor(e) {
    super(), G(
      this,
      {
        target: this.shadowRoot,
        props: W(this.attributes),
        customElement: !0
      },
      Wt,
      qt,
      q,
      { node: 0, level: 1 },
      null
    ), e && (e.target && k(e.target, this, e.anchor), e.props && (this.$set(e.props), N()));
  }
  static get observedAttributes() {
    return ["node", "level"];
  }
  get node() {
    return this.$$.ctx[0];
  }
  set node(e) {
    this.$$set({ node: e }), N();
  }
  get level() {
    return this.$$.ctx[1];
  }
  set level(e) {
    this.$$set({ level: e }), N();
  }
}
customElements.define("my-tree-node-arrowicon", it);
function Pe(t, e, n) {
  const l = t.slice();
  return l[5] = e[n], l;
}
function De(t) {
  let e, n, l = (
    /*node*/
    t[0].children
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = Ue(Pe(t, l, o));
  const i = (o) => C(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = Ce();
    },
    m(o, a) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(o, a);
      k(o, e, a), n = !0;
    },
    p(o, a) {
      if (a & /*node, level*/
      3) {
        l = /*node*/
        o[0].children;
        let s;
        for (s = 0; s < l.length; s += 1) {
          const h = Pe(o, l, s);
          r[s] ? (r[s].p(h, a), x(r[s], 1)) : (r[s] = Ue(h), r[s].c(), x(r[s], 1), r[s].m(e.parentNode, e));
        }
        for (oe(), s = l.length; s < r.length; s += 1)
          i(s);
        ie();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          x(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        C(r[a]);
      n = !1;
    },
    d(o) {
      Fe(r, o), o && M(e);
    }
  };
}
function Ue(t) {
  let e, n;
  return e = new He({
    props: {
      node: (
        /*child*/
        t[5]
      ),
      level: (
        /*level*/
        t[1] + 1
      )
    }
  }), {
    c() {
      U(e.$$.fragment);
    },
    m(l, r) {
      T(e, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*node*/
      1 && (i.node = /*child*/
      l[5]), r & /*level*/
      2 && (i.level = /*level*/
      l[1] + 1), e.$set(i);
    },
    i(l) {
      n || (x(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Gt(t) {
  var S;
  let e, n, l, r, i, o, a, s = (
    /*node*/
    ((S = t[0]) == null ? void 0 : S.name) + ""
  ), h, u, f, m, p, _, g, H, w;
  l = new it({
    props: {
      node: (
        /*node*/
        t[0]
      ),
      level: (
        /*level*/
        t[1]
      )
    }
  }), i = new lt({ props: { node: (
    /*node*/
    t[0]
  ) } });
  let b = (
    /*node*/
    t[0] && /*node*/
    t[0].expanded && /*node*/
    t[0].children && De(t)
  );
  return {
    c() {
      e = v("div"), n = v("li"), U(l.$$.fragment), r = O(), U(i.$$.fragment), o = O(), a = v("p"), h = Q(s), m = O(), b && b.c(), p = O(), _ = v("style"), _.textContent = `li {
      border-bottom: solid 2px #eee;
      margin: 0 0;
      padding: 0.5em;
      background: #fafafa;
      display: flex;
      align-items: center;
    }
    .childListItem {
      border-bottom: solid 1px #eee;
      border-radius: 0px;
      border-bottom-left-radius: 2px;
      margin-left: 15%;
      width: 82%;
    }
    .paddingLeft {
      padding-left: 6%;
    }
    .nodeName {
      margin-left: 10px;
      font-family: circular;
      color: slategrey;
    }`, this.c = y, c(a, "class", "nodeName"), c(n, "class", u = /*level*/
      t[1] === 2 ? "childListItem" : (
        /*isFileOnRoot*/
        t[2] ? "paddingLeft" : ""
      ));
    },
    m($, E) {
      k($, e, E), d(e, n), T(l, n, null), d(n, r), T(i, n, null), d(n, o), d(n, a), d(a, h), d(e, m), b && b.m(e, null), d(e, p), d(e, _), g = !0, H || (w = Y(
        n,
        "click",
        /*toggle*/
        t[3]
      ), H = !0);
    },
    p($, [E]) {
      var L;
      const z = {};
      E & /*node*/
      1 && (z.node = /*node*/
      $[0]), E & /*level*/
      2 && (z.level = /*level*/
      $[1]), l.$set(z);
      const P = {};
      E & /*node*/
      1 && (P.node = /*node*/
      $[0]), i.$set(P), (!g || E & /*node*/
      1) && s !== (s = /*node*/
      ((L = $[0]) == null ? void 0 : L.name) + "") && Me(h, s), (!g || E & /*level, isFileOnRoot*/
      6 && u !== (u = /*level*/
      $[1] === 2 ? "childListItem" : (
        /*isFileOnRoot*/
        $[2] ? "paddingLeft" : ""
      ))) && c(n, "class", u), /*node*/
      $[0] && /*node*/
      $[0].expanded && /*node*/
      $[0].children ? b ? (b.p($, E), E & /*node*/
      1 && x(b, 1)) : (b = De($), b.c(), x(b, 1), b.m(e, p)) : b && (oe(), C(b, 1, 1, () => {
        b = null;
      }), ie());
    },
    i($) {
      g || (x(l.$$.fragment, $), x(i.$$.fragment, $), Z(() => {
        g && (f || (f = Se(n, Be, {}, !0)), f.run(1));
      }), x(b), g = !0);
    },
    o($) {
      C(l.$$.fragment, $), C(i.$$.fragment, $), f || (f = Se(n, Be, {}, !1)), f.run(0), C(b), g = !1;
    },
    d($) {
      $ && M(e), V(l), V(i), $ && f && f.end(), b && b.d(), H = !1, w();
    }
  };
}
function Jt(t, e, n) {
  let { node: l } = e, { level: r = 1 } = e;
  const i = () => n(0, l);
  let o = !1;
  vt(() => {
    n(2, o = (l == null ? void 0 : l.type) === I.File && r === 1);
  });
  function a() {
    n(0, l.expanded = !l.expanded, l);
  }
  return t.$$set = (s) => {
    "node" in s && n(0, l = s.node), "level" in s && n(1, r = s.level);
  }, [l, r, o, a, i];
}
class He extends B {
  constructor(e) {
    super(), G(
      this,
      {
        target: this.shadowRoot,
        props: W(this.attributes),
        customElement: !0
      },
      Jt,
      Gt,
      q,
      { node: 0, level: 1, rerender: 4 },
      null
    ), e && (e.target && k(e.target, this, e.anchor), e.props && (this.$set(e.props), N()));
  }
  static get observedAttributes() {
    return ["node", "level", "rerender"];
  }
  get node() {
    return this.$$.ctx[0];
  }
  set node(e) {
    this.$$set({ node: e }), N();
  }
  get level() {
    return this.$$.ctx[1];
  }
  set level(e) {
    this.$$set({ level: e }), N();
  }
  get rerender() {
    return this.$$.ctx[4];
  }
}
customElements.define("my-tree-node", He);
function qe(t, e, n) {
  const l = t.slice();
  return l[7] = e[n], l[8] = e, l[9] = n, l;
}
function Kt(t) {
  let e;
  return {
    c() {
      e = v("div"), e.innerHTML = '<img class="empty-state" src="./empty_state.jpg" alt="empty"/>', c(e, "class", "empty-state-container");
    },
    m(n, l) {
      k(n, e, l);
    },
    p: y,
    i: y,
    o: y,
    d(n) {
      n && M(e);
    }
  };
}
function Qt(t) {
  let e, n, l = (
    /*tree_data*/
    t[0]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = We(qe(t, l, o));
  const i = (o) => C(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      e = v("ul");
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
    },
    m(o, a) {
      k(o, e, a);
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(e, null);
      n = !0;
    },
    p(o, a) {
      if (a & /*tree_data*/
      1) {
        l = /*tree_data*/
        o[0];
        let s;
        for (s = 0; s < l.length; s += 1) {
          const h = qe(o, l, s);
          r[s] ? (r[s].p(h, a), x(r[s], 1)) : (r[s] = We(h), r[s].c(), x(r[s], 1), r[s].m(e, null));
        }
        for (oe(), s = l.length; s < r.length; s += 1)
          i(s);
        ie();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          x(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        C(r[a]);
      n = !1;
    },
    d(o) {
      o && M(e), Fe(r, o);
    }
  };
}
function We(t) {
  let e, n, l;
  function r(o) {
    t[5](
      o,
      /*tree_data_node*/
      t[7],
      /*each_value*/
      t[8],
      /*tree_data_node_index*/
      t[9]
    );
  }
  let i = {};
  return (
    /*tree_data_node*/
    t[7] !== void 0 && (i.node = /*tree_data_node*/
    t[7]), e = new He({ props: i }), ye.push(() => Mt(e, "node", r)), {
      c() {
        U(e.$$.fragment);
      },
      m(o, a) {
        T(e, o, a), l = !0;
      },
      p(o, a) {
        t = o;
        const s = {};
        !n && a & /*tree_data*/
        1 && (n = !0, s.node = /*tree_data_node*/
        t[7], kt(() => n = !1)), e.$set(s);
      },
      i(o) {
        l || (x(e.$$.fragment, o), l = !0);
      },
      o(o) {
        C(e.$$.fragment, o), l = !1;
      },
      d(o) {
        V(e, o);
      }
    }
  );
}
function Xt(t) {
  let e, n, l, r, i, o, a, s, h, u, f, m, p, _, g, H, w, b, S, $;
  f = new Ze({
    props: {
      locationOptions: [{ name: _e, type: I.Folder }, .../*tree_data*/
      t[0] || []]
    }
  }), f.$on(
    "save",
    /*handleSave*/
    t[3]
  );
  const E = [Qt, Kt], z = [];
  function P(L, D) {
    var A;
    return (
      /*tree_data*/
      (A = L[0]) != null && A.length ? 0 : 1
    );
  }
  return _ = P(t), g = z[_] = E[_](t), {
    c() {
      e = v("div"), n = v("div"), l = v("div"), r = v("h3"), i = Q("Hello, "), o = Q(
        /*user_name*/
        t[1]
      ), a = Q("!"), s = O(), h = v("button"), h.textContent = "Logout", u = O(), U(f.$$.fragment), m = O(), p = v("div"), g.c(), H = O(), w = v("style"), w.textContent = `:global(body) {
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
      background-color: #fafafa;
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

    .empty-state-container {
      border: 2px solid #ccc;
      overflow: hidden;
      border-radius: 10px;
      width: 95%;
      display: flex;
      justify-content: center;
      background-color: #fff;
    }

    .empty-state {
      width: 18em;
    }

    @media only screen and (min-width: 992px) {
      ul {
        width: 40%;
      }
      .header {
        width: 40%;
      }
      .empty-state-container {
        width: 40%;
      }
    }`, this.c = y, c(h, "class", "logout-button"), c(l, "class", "header"), c(n, "class", "headerDiv"), c(p, "class", "list-container");
    },
    m(L, D) {
      k(L, e, D), d(e, n), d(n, l), d(l, r), d(r, i), d(r, o), d(r, a), d(l, s), d(l, h), d(e, u), T(f, e, null), d(e, m), d(e, p), z[_].m(p, null), d(e, H), d(e, w), b = !0, S || ($ = Y(h, "click", function() {
        ae(
          /*on_logout*/
          t[2]
        ) && t[2].apply(this, arguments);
      }), S = !0);
    },
    p(L, [D]) {
      t = L, (!b || D & /*user_name*/
      2) && Me(
        o,
        /*user_name*/
        t[1]
      );
      const A = {};
      D & /*tree_data*/
      1 && (A.locationOptions = [{ name: _e, type: I.Folder }, .../*tree_data*/
      t[0] || []]), f.$set(A);
      let ee = _;
      _ = P(t), _ === ee ? z[_].p(t, D) : (oe(), C(z[ee], 1, 1, () => {
        z[ee] = null;
      }), ie(), g = z[_], g ? g.p(t, D) : (g = z[_] = E[_](t), g.c()), x(g, 1), g.m(p, null));
    },
    i(L) {
      b || (x(f.$$.fragment, L), x(g), b = !0);
    },
    o(L) {
      C(f.$$.fragment, L), C(g), b = !1;
    },
    d(L) {
      L && M(e), V(f), z[_].d(), S = !1, $();
    }
  };
}
function Ge(t, e) {
  var n, l;
  for (let r = 0; r < (t == null ? void 0 : t.length); r++)
    if (((l = (n = t[r]) == null ? void 0 : n.name) == null ? void 0 : l.toLowerCase()) === (e == null ? void 0 : e.toLowerCase()))
      return r;
  return !1;
}
function Yt(t, e, n) {
  let { user_name: l = "Gaurav" } = e, { update_files_structure: r = (u) => {
  } } = e, { tree_data: i = [] } = e, { on_logout: o } = e;
  function a(u, f) {
    const m = typeof f == "number" ? i[f].children : i, p = typeof Ge(m, u == null ? void 0 : u.name) == "number", _ = u.type === I.Folder;
    if (p) {
      alert("File or Folder with this name already exists at this location!");
      return;
    }
    typeof f != "number" ? n(0, i = [
      ...i,
      {
        ...u,
        children: _ ? [] : null
      }
    ]) : (n(
      0,
      i[f].children = [
        ...i[f].children,
        {
          ...u,
          children: _ ? [] : null
        }
      ],
      i
    ), n(0, i[f].expanded = !0, i));
  }
  function s(u) {
    const f = u.detail;
    if ((f == null ? void 0 : f.location) === _e)
      a(f);
    else {
      const m = Ge(i, f == null ? void 0 : f.location);
      typeof m == "number" && a(f, m);
    }
    r(i);
  }
  function h(u, f, m, p) {
    m[p] = u, n(0, i);
  }
  return t.$$set = (u) => {
    "user_name" in u && n(1, l = u.user_name), "update_files_structure" in u && n(4, r = u.update_files_structure), "tree_data" in u && n(0, i = u.tree_data), "on_logout" in u && n(2, o = u.on_logout);
  }, [
    i,
    l,
    o,
    s,
    r,
    h
  ];
}
class st extends B {
  constructor(e) {
    super(), G(
      this,
      {
        target: this.shadowRoot,
        props: W(this.attributes),
        customElement: !0
      },
      Yt,
      Xt,
      q,
      {
        user_name: 1,
        update_files_structure: 4,
        tree_data: 0,
        on_logout: 2
      },
      null
    ), e && (e.target && k(e.target, this, e.anchor), e.props && (this.$set(e.props), N()));
  }
  static get observedAttributes() {
    return ["user_name", "update_files_structure", "tree_data", "on_logout"];
  }
  get user_name() {
    return this.$$.ctx[1];
  }
  set user_name(e) {
    this.$$set({ user_name: e }), N();
  }
  get update_files_structure() {
    return this.$$.ctx[4];
  }
  set update_files_structure(e) {
    this.$$set({ update_files_structure: e }), N();
  }
  get tree_data() {
    return this.$$.ctx[0];
  }
  set tree_data(e) {
    this.$$set({ tree_data: e }), N();
  }
  get on_logout() {
    return this.$$.ctx[2];
  }
  set on_logout(e) {
    this.$$set({ on_logout: e }), N();
  }
}
customElements.define("my-filetree-web-component", st);
const Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: st
}, Symbol.toStringTag, { value: "Module" }));
export {
  Zt as MyFileTreeComponent
};
