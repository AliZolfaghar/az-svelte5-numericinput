typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const ie = 2, w = Symbol(), se = "http://www.w3.org/1999/xhtml", Dt = !1;
var ue = Array.isArray, fe = Array.prototype.indexOf, Nt = Object.defineProperty, st = Object.getOwnPropertyDescriptor, ae = Object.prototype, oe = Array.prototype, ce = Object.getPrototypeOf;
function ve(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function _e() {
  var t, e, n = new Promise((r, l) => {
    t = r, e = l;
  });
  return { promise: n, resolve: t, reject: e };
}
const x = 2, Et = 4, Mt = 8, nt = 16, rt = 32, z = 64, jt = 128, T = 256, ut = 512, E = 1024, N = 2048, j = 4096, ft = 8192, B = 16384, Lt = 32768, Rt = 1 << 17, he = 1 << 18, mt = 1 << 19, de = 1 << 20, wt = 1 << 21, bt = 1 << 22, U = 1 << 23, Q = Symbol("$state"), pe = Symbol("legacy props"), xt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function we() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function ge() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ye() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ee(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function me() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function be() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function xe() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function qt(t) {
  return t === this.v;
}
let Se = !1, O = null;
function at(t) {
  O = t;
}
function ke(t, e = !1, n) {
  O = {
    p: O,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Te(t) {
  var e = (
    /** @type {ComponentContext} */
    O
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      He(r);
  }
  return O = e.p, /** @type {T} */
  {};
}
function Ut() {
  return !0;
}
const Ne = /* @__PURE__ */ new WeakMap();
function Re(t) {
  var e = d;
  if (e === null)
    return h.f |= U, t;
  if ((e.f & Lt) === 0) {
    if ((e.f & jt) === 0)
      throw !e.parent && t instanceof Error && Yt(t), t;
    e.b.error(t);
  } else
    St(t, e);
}
function St(t, e) {
  for (; e !== null; ) {
    if ((e.f & jt) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Yt(t), t;
}
function Yt(t) {
  const e = Ne.get(t);
  e && (Nt(t, "message", {
    value: e.message
  }), Nt(t, "stack", {
    value: e.stack
  }));
}
let ot = [];
function Ae() {
  var t = ot;
  ot = [], ve(t);
}
function Oe(t) {
  ot.length === 0 && queueMicrotask(Ae), ot.push(t);
}
function Pe() {
  for (var t = (
    /** @type {Effect} */
    d.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && we(), t;
}
// @__NO_SIDE_EFFECTS__
function Bt(t) {
  var e = x | N, n = h !== null && (h.f & x) !== 0 ? (
    /** @type {Derived} */
    h
  ) : null;
  return d === null || n !== null && (n.f & T) !== 0 ? e |= T : d.f |= mt, {
    ctx: O,
    deps: null,
    effects: null,
    equals: qt,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      w
    ),
    wv: 0,
    parent: n ?? d,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ce(t, e) {
  let n = (
    /** @type {Effect | null} */
    d
  );
  n === null && ge();
  var r = (
    /** @type {Boundary} */
    n.b
  ), l = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Wt(
    /** @type {V} */
    w
  ), u = null, a = !h;
  return Ge(() => {
    try {
      var i = t();
      u && Promise.resolve(i).catch(() => {
      });
    } catch (v) {
      i = Promise.reject(v);
    }
    var f = () => i;
    l = u?.then(f, f) ?? Promise.resolve(i), u = l;
    var o = (
      /** @type {Batch} */
      g
    ), c = r.pending;
    a && (r.update_pending_count(1), c || o.increment());
    const p = (v, _ = void 0) => {
      u = null, c || o.activate(), _ ? _ !== xt && (s.f |= U, yt(s, _)) : ((s.f & U) !== 0 && (s.f ^= U), yt(s, v)), a && (r.update_pending_count(-1), c || o.decrement()), Kt();
    };
    if (l.then(p, (v) => p(null, v || "unknown")), o)
      return () => {
        queueMicrotask(() => o.neuter());
      };
  }), new Promise((i) => {
    function f(o) {
      function c() {
        o === l ? i(s) : f(l);
      }
      o.then(c, c);
    }
    f(l);
  });
}
function Vt(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      _t(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ie(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & x) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function kt(t) {
  var e, n = d;
  W(Ie(t));
  try {
    Vt(t), e = ne(t);
  } finally {
    W(n);
  }
  return e;
}
function Ht(t) {
  var e = kt(t);
  if (t.equals(e) || (t.v = e, t.wv = te()), !Z) {
    var n = (I || (t.f & T) !== 0) && t.deps !== null ? j : E;
    k(t, n);
  }
}
function Fe(t, e, n) {
  const r = Bt;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var l = g, s = (
    /** @type {Effect} */
    d
  ), u = De(), a = Pe();
  Promise.all(e.map((i) => /* @__PURE__ */ Ce(i))).then((i) => {
    l?.activate(), u();
    try {
      n([...t.map(r), ...i]);
    } catch (f) {
      (s.f & B) === 0 && St(f, s);
    }
    l?.deactivate(), Kt();
  }).catch((i) => {
    a.error(i);
  });
}
function De() {
  var t = d, e = h, n = O, r = g;
  return function() {
    W(t), M(e), at(n), r?.activate();
  };
}
function Kt() {
  W(null), M(null), at(null);
}
const dt = /* @__PURE__ */ new Set();
let g = null, At = /* @__PURE__ */ new Set(), ct = [];
function Gt() {
  const t = (
    /** @type {() => void} */
    ct.shift()
  );
  ct.length > 0 && queueMicrotask(Gt), t();
}
let X = [], Tt = null, gt = !1;
class $ {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  #f = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #l = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #t = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #a = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #o = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #n = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #i = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #r = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #e = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #s = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #c = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #v = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    X = [];
    for (const l of e)
      this.#h(l);
    if (this.#n.length === 0 && this.#t === 0) {
      this.#_();
      var n = this.#r, r = this.#e;
      this.#r = [], this.#e = [], this.#s = [], g = null, Ot(n), Ot(r), g === null ? g = this : dt.delete(this), this.#a?.resolve();
    } else
      this.#u(this.#r), this.#u(this.#e), this.#u(this.#s);
    for (const l of this.#n)
      G(l);
    for (const l of this.#i)
      G(l);
    this.#n = [], this.#i = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #h(e) {
    e.f ^= E;
    for (var n = e.first; n !== null; ) {
      var r = n.f, l = (r & (rt | z)) !== 0, s = l && (r & E) !== 0, u = s || (r & ft) !== 0 || this.skipped_effects.has(n);
      if (!u && n.fn !== null) {
        if (l)
          n.f ^= E;
        else if ((r & Et) !== 0)
          this.#e.push(n);
        else if ((r & E) === 0)
          if ((r & bt) !== 0) {
            var a = n.b?.pending ? this.#i : this.#n;
            a.push(n);
          } else ht(n) && ((n.f & nt) !== 0 && this.#s.push(n), G(n));
        var i = n.first;
        if (i !== null) {
          n = i;
          continue;
        }
      }
      var f = n.parent;
      for (n = n.next; n === null && f !== null; )
        n = f.next, f = f.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #u(e) {
    for (const n of e)
      ((n.f & N) !== 0 ? this.#c : this.#v).push(n), k(n, E);
    e.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.#f.has(e) || this.#f.set(e, n), this.current.set(e, e.v);
  }
  activate() {
    g = this;
  }
  deactivate() {
    g = null;
    for (const e of At)
      if (At.delete(e), e(), g !== null)
        break;
  }
  neuter() {
    this.#o = !0;
  }
  flush() {
    X.length > 0 ? Me() : this.#_(), g === this && (this.#t === 0 && dt.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #_() {
    if (!this.#o)
      for (const e of this.#l)
        e();
    this.#l.clear();
  }
  increment() {
    this.#t += 1;
  }
  decrement() {
    if (this.#t -= 1, this.#t === 0) {
      for (const e of this.#c)
        k(e, N), tt(e);
      for (const e of this.#v)
        k(e, j), tt(e);
      this.#r = [], this.#e = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#l.add(e);
  }
  settled() {
    return (this.#a ??= _e()).promise;
  }
  static ensure() {
    if (g === null) {
      const e = g = new $();
      dt.add(g), $.enqueue(() => {
        g === e && e.flush();
      });
    }
    return g;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    ct.length === 0 && queueMicrotask(Gt), ct.unshift(e);
  }
}
function Me() {
  var t = K;
  gt = !0;
  try {
    var e = 0;
    for (Pt(!0); X.length > 0; ) {
      var n = $.ensure();
      if (e++ > 1e3) {
        var r, l;
        je();
      }
      n.process(X), D.clear();
    }
  } finally {
    gt = !1, Pt(t), Tt = null;
  }
}
function je() {
  try {
    ye();
  } catch (t) {
    St(t, Tt);
  }
}
let q = null;
function Ot(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (B | ft)) === 0 && ht(r) && (q = [], G(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Xt(r) : r.fn = null), q?.length > 0)) {
        D.clear();
        for (const l of q)
          G(l);
        q = [];
      }
    }
    q = null;
  }
}
function tt(t) {
  for (var e = Tt = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (gt && e === d && (n & nt) !== 0)
      return;
    if ((n & (z | rt)) !== 0) {
      if ((n & E) === 0) return;
      e.f ^= E;
    }
  }
  X.push(e);
}
const D = /* @__PURE__ */ new Map();
function Wt(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: qt,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function P(t, e) {
  const n = Wt(t);
  return Qe(n), n;
}
function C(t, e, n = !1) {
  h !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!R || (h.f & Rt) !== 0) && Ut() && (h.f & (x | nt | bt | Rt)) !== 0 && !A?.includes(t) && xe();
  let r = n ? H(e) : e;
  return yt(t, r);
}
function yt(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    Z ? D.set(t, e) : D.set(t, n), t.v = e;
    var r = $.ensure();
    r.capture(t, n), (t.f & x) !== 0 && ((t.f & N) !== 0 && kt(
      /** @type {Derived} */
      t
    ), k(t, (t.f & T) === 0 ? E : j)), t.wv = te(), zt(t, N), d !== null && (d.f & E) !== 0 && (d.f & (rt | z)) === 0 && (S === null ? Xe([t]) : S.push(t));
  }
  return e;
}
function pt(t) {
  C(t, t.v + 1);
}
function zt(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, l = 0; l < r; l++) {
      var s = n[l], u = s.f, a = (u & N) === 0;
      a && k(s, e), (u & x) !== 0 ? zt(
        /** @type {Derived} */
        s,
        j
      ) : a && ((u & nt) !== 0 && q !== null && q.push(
        /** @type {Effect} */
        s
      ), tt(
        /** @type {Effect} */
        s
      ));
    }
}
function H(t) {
  if (typeof t != "object" || t === null || Q in t)
    return t;
  const e = ce(t);
  if (e !== ae && e !== oe)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ue(t), l = /* @__PURE__ */ P(0), s = Y, u = (a) => {
    if (Y === s)
      return a();
    var i = h, f = Y;
    M(null), It(s);
    var o = a();
    return M(i), It(f), o;
  };
  return r && n.set("length", /* @__PURE__ */ P(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, i, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && me();
        var o = n.get(i);
        return o === void 0 ? o = u(() => {
          var c = /* @__PURE__ */ P(f.value);
          return n.set(i, c), c;
        }) : C(o, f.value, !0), !0;
      },
      deleteProperty(a, i) {
        var f = n.get(i);
        if (f === void 0) {
          if (i in a) {
            const o = u(() => /* @__PURE__ */ P(w));
            n.set(i, o), pt(l);
          }
        } else
          C(f, w), pt(l);
        return !0;
      },
      get(a, i, f) {
        if (i === Q)
          return t;
        var o = n.get(i), c = i in a;
        if (o === void 0 && (!c || st(a, i)?.writable) && (o = u(() => {
          var v = H(c ? a[i] : w), _ = /* @__PURE__ */ P(v);
          return _;
        }), n.set(i, o)), o !== void 0) {
          var p = F(o);
          return p === w ? void 0 : p;
        }
        return Reflect.get(a, i, f);
      },
      getOwnPropertyDescriptor(a, i) {
        var f = Reflect.getOwnPropertyDescriptor(a, i);
        if (f && "value" in f) {
          var o = n.get(i);
          o && (f.value = F(o));
        } else if (f === void 0) {
          var c = n.get(i), p = c?.v;
          if (c !== void 0 && p !== w)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return f;
      },
      has(a, i) {
        if (i === Q)
          return !0;
        var f = n.get(i), o = f !== void 0 && f.v !== w || Reflect.has(a, i);
        if (f !== void 0 || d !== null && (!o || st(a, i)?.writable)) {
          f === void 0 && (f = u(() => {
            var p = o ? H(a[i]) : w, v = /* @__PURE__ */ P(p);
            return v;
          }), n.set(i, f));
          var c = F(f);
          if (c === w)
            return !1;
        }
        return o;
      },
      set(a, i, f, o) {
        var c = n.get(i), p = i in a;
        if (r && i === "length")
          for (var v = f; v < /** @type {Source<number>} */
          c.v; v += 1) {
            var _ = n.get(v + "");
            _ !== void 0 ? C(_, w) : v in a && (_ = u(() => /* @__PURE__ */ P(w)), n.set(v + "", _));
          }
        if (c === void 0)
          (!p || st(a, i)?.writable) && (c = u(() => /* @__PURE__ */ P(void 0)), C(c, H(f)), n.set(i, c));
        else {
          p = c.v !== w;
          var J = u(() => H(f));
          C(c, J);
        }
        var m = Reflect.getOwnPropertyDescriptor(a, i);
        if (m?.set && m.set.call(o, f), !p) {
          if (r && typeof i == "string") {
            var L = (
              /** @type {Source<number>} */
              n.get("length")
            ), V = Number(i);
            Number.isInteger(V) && V >= L.v && C(L, V + 1);
          }
          pt(l);
        }
        return !0;
      },
      ownKeys(a) {
        F(l);
        var i = Reflect.ownKeys(a).filter((c) => {
          var p = n.get(c);
          return p === void 0 || p.v !== w;
        });
        for (var [f, o] of n)
          o.v !== w && !(f in a) && i.push(f);
        return i;
      },
      setPrototypeOf() {
        be();
      }
    }
  );
}
var Le, qe, Ue;
// @__NO_SIDE_EFFECTS__
function Ye(t) {
  return qe.call(t);
}
// @__NO_SIDE_EFFECTS__
function Be(t) {
  return Ue.call(t);
}
function Zt(t) {
  var e = h, n = d;
  M(null), W(null);
  try {
    return t();
  } finally {
    M(e), W(n);
  }
}
function Ve(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function lt(t, e, n, r = !0) {
  var l = d;
  l !== null && (l.f & ft) !== 0 && (t |= ft);
  var s = {
    ctx: O,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | N,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: l,
    b: l && l.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      G(s), s.f |= Lt;
    } catch (i) {
      throw _t(s), i;
    }
  else e !== null && tt(s);
  if (r) {
    var u = s;
    if (n && u.deps === null && u.teardown === null && u.nodes_start === null && u.first === u.last && // either `null`, or a singular child
    (u.f & mt) === 0 && (u = u.first), u !== null && (u.parent = l, l !== null && Ve(u, l), h !== null && (h.f & x) !== 0 && (t & z) === 0)) {
      var a = (
        /** @type {Derived} */
        h
      );
      (a.effects ??= []).push(u);
    }
  }
  return s;
}
function He(t) {
  return lt(Et | de, t, !1);
}
function Ke(t) {
  return lt(Et, t, !1);
}
function Ge(t) {
  return lt(bt | mt, t, !0);
}
function We(t, e = 0) {
  return lt(Mt | e, t, !0);
}
function ze(t, e = [], n = []) {
  Fe(e, n, (r) => {
    lt(Mt, () => t(...r.map(F)), !0);
  });
}
function Jt(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Z, r = h;
    Ct(!0), M(null);
    try {
      e.call(null);
    } finally {
      Ct(n), M(r);
    }
  }
}
function Qt(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const l = n.ac;
    l !== null && Zt(() => {
      l.abort(xt);
    });
    var r = n.next;
    (n.f & z) !== 0 ? n.parent = null : _t(n, e), n = r;
  }
}
function Ze(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & rt) === 0 && _t(e), e = n;
  }
}
function _t(t, e = !0) {
  var n = !1;
  (e || (t.f & he) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Je(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Qt(t, e && !n), vt(t, 0), k(t, B);
  var r = t.transitions;
  if (r !== null)
    for (const s of r)
      s.stop();
  Jt(t);
  var l = t.parent;
  l !== null && l.first !== null && Xt(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Je(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Be(t)
    );
    t.remove(), t = n;
  }
}
function Xt(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
let K = !1;
function Pt(t) {
  K = t;
}
let Z = !1;
function Ct(t) {
  Z = t;
}
let h = null, R = !1;
function M(t) {
  h = t;
}
let d = null;
function W(t) {
  d = t;
}
let A = null;
function Qe(t) {
  h !== null && (A === null ? A = [t] : A.push(t));
}
let y = null, b = 0, S = null;
function Xe(t) {
  S = t;
}
let $t = 1, et = 0, Y = et;
function It(t) {
  Y = t;
}
let I = !1;
function te() {
  return ++$t;
}
function ht(t) {
  var e = t.f;
  if ((e & N) !== 0)
    return !0;
  if ((e & j) !== 0) {
    var n = t.deps, r = (e & T) !== 0;
    if (n !== null) {
      var l, s, u = (e & ut) !== 0, a = r && d !== null && !I, i = n.length;
      if ((u || a) && (d === null || (d.f & B) === 0)) {
        var f = (
          /** @type {Derived} */
          t
        ), o = f.parent;
        for (l = 0; l < i; l++)
          s = n[l], (u || !s?.reactions?.includes(f)) && (s.reactions ??= []).push(f);
        u && (f.f ^= ut), a && o !== null && (o.f & T) === 0 && (f.f ^= T);
      }
      for (l = 0; l < i; l++)
        if (s = n[l], ht(
          /** @type {Derived} */
          s
        ) && Ht(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || d !== null && !I) && k(t, E);
  }
  return !1;
}
function ee(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !A?.includes(t))
    for (var l = 0; l < r.length; l++) {
      var s = r[l];
      (s.f & x) !== 0 ? ee(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? k(s, N) : (s.f & E) !== 0 && k(s, j), tt(
        /** @type {Effect} */
        s
      ));
    }
}
function ne(t) {
  var e = y, n = b, r = S, l = h, s = I, u = A, a = O, i = R, f = Y, o = t.f;
  y = /** @type {null | Value[]} */
  null, b = 0, S = null, I = (o & T) !== 0 && (R || !K || h === null), h = (o & (rt | z)) === 0 ? t : null, A = null, at(t.ctx), R = !1, Y = ++et, t.ac !== null && (Zt(() => {
    t.ac.abort(xt);
  }), t.ac = null);
  try {
    t.f |= wt;
    var c = (
      /** @type {Function} */
      t.fn
    ), p = c(), v = t.deps;
    if (y !== null) {
      var _;
      if (vt(t, b), v !== null && b > 0)
        for (v.length = b + y.length, _ = 0; _ < y.length; _++)
          v[b + _] = y[_];
      else
        t.deps = v = y;
      if (!I || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (o & x) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (_ = b; _ < v.length; _++)
          (v[_].reactions ??= []).push(t);
    } else v !== null && b < v.length && (vt(t, b), v.length = b);
    if (Ut() && S !== null && !R && v !== null && (t.f & (x | j | N)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      S.length; _++)
        ee(
          S[_],
          /** @type {Effect} */
          t
        );
    return l !== null && l !== t && (et++, S !== null && (r === null ? r = S : r.push(.../** @type {Source[]} */
    S))), (t.f & U) !== 0 && (t.f ^= U), p;
  } catch (J) {
    return Re(J);
  } finally {
    t.f ^= wt, y = e, b = n, S = r, h = l, I = s, A = u, at(a), R = i, Y = f;
  }
}
function $e(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = fe.call(n, t);
    if (r !== -1) {
      var l = n.length - 1;
      l === 0 ? n = e.reactions = null : (n[r] = n[l], n.pop());
    }
  }
  n === null && (e.f & x) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (y === null || !y.includes(e)) && (k(e, j), (e.f & (T | ut)) === 0 && (e.f ^= ut), Vt(
    /** @type {Derived} **/
    e
  ), vt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function vt(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      $e(t, n[r]);
}
function G(t) {
  var e = t.f;
  if ((e & B) === 0) {
    k(t, E);
    var n = d, r = K;
    d = t, K = !0;
    try {
      (e & nt) !== 0 ? Ze(t) : Qt(t), Jt(t);
      var l = ne(t);
      t.teardown = typeof l == "function" ? l : null, t.wv = $t;
      var s;
      Dt && Se && (t.f & N) !== 0 && t.deps;
    } finally {
      K = r, d = n;
    }
  }
}
function F(t) {
  var e = t.f, n = (e & x) !== 0;
  if (h !== null && !R) {
    var r = d !== null && (d.f & B) !== 0;
    if (!r && !A?.includes(t)) {
      var l = h.deps;
      if ((h.f & wt) !== 0)
        t.rv < et && (t.rv = et, y === null && l !== null && l[b] === t ? b++ : y === null ? y = [t] : (!I || !y.includes(t)) && y.push(t));
      else {
        (h.deps ??= []).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [h] : s.includes(h) || s.push(h);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var u = (
      /** @type {Derived} */
      t
    ), a = u.parent;
    a !== null && (a.f & T) === 0 && (u.f ^= T);
  }
  if (Z) {
    if (D.has(t))
      return D.get(t);
    if (n) {
      u = /** @type {Derived} */
      t;
      var i = u.v;
      return ((u.f & E) === 0 && u.reactions !== null || re(u)) && (i = kt(u)), D.set(u, i), i;
    }
  } else n && (u = /** @type {Derived} */
  t, ht(u) && Ht(u));
  if ((t.f & U) !== 0)
    throw t.v;
  return t.v;
}
function re(t) {
  if (t.v === w) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (D.has(e) || (e.f & x) !== 0 && re(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function tn(t) {
  var e = R;
  try {
    return R = !0, t();
  } finally {
    R = e;
  }
}
const en = -7169;
function k(t, e) {
  t.f = t.f & en | e;
}
const nn = /* @__PURE__ */ new Set(), rn = /* @__PURE__ */ new Set();
function ln(t) {
  for (var e = 0; e < t.length; e++)
    nn.add(t[e]);
  for (var n of rn)
    n(t);
}
function sn(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function un(t, e) {
  var n = (
    /** @type {Effect} */
    d
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function fn(t, e) {
  var n = (e & ie) !== 0, r, l = !t.startsWith("<!>");
  return () => {
    r === void 0 && (r = sn(l ? t : "<!>" + t), r = /** @type {Node} */
    /* @__PURE__ */ Ye(r));
    var s = (
      /** @type {TemplateNode} */
      n || Le ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return un(s, s), s;
  };
}
function an(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function le(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var l = t.length;
    for (e = 0; e < l; e++) t[e] && (n = le(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function on() {
  for (var t, e, n = 0, r = "", l = arguments.length; n < l; n++) (t = arguments[n]) && (e = le(t)) && (r && (r += " "), r += e);
  return r;
}
function cn(t) {
  return typeof t == "object" ? on(t) : t ?? "";
}
function vn(t, e, n) {
  var r = t == null ? "" : "" + t;
  return r === "" ? null : r;
}
function _n(t, e, n, r, l, s) {
  var u = t.__className;
  if (u !== n || u === void 0) {
    var a = vn(n);
    a == null ? t.removeAttribute("class") : t.className = a, t.__className = n;
  }
  return s;
}
const hn = Symbol("is custom element"), dn = Symbol("is html");
function pn(t, e) {
  var n = wn(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function wn(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [hn]: t.nodeName.includes("-"),
      [dn]: t.namespaceURI === se
    }
  );
}
function Ft(t, e) {
  return t === e || t?.[Q] === e;
}
function gn(t = {}, e, n, r) {
  return Ke(() => {
    var l, s;
    return We(() => {
      l = s, s = [], tn(() => {
        t !== n(...s) && (e(t, ...s), l && Ft(n(...l), t) && e(null, ...l));
      });
    }), () => {
      Oe(() => {
        s && Ft(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let it = !1;
function yn(t) {
  var e = it;
  try {
    return it = !1, [t(), it];
  } finally {
    it = e;
  }
}
function En(t, e, n, r) {
  var l = (
    /** @type {V} */
    r
  ), s = !0, u = () => (s && (s = !1, l = /** @type {V} */
  r), l), a;
  {
    var i = Q in t || pe in t;
    a = st(t, e)?.set ?? (i && e in t ? (m) => t[e] = m : void 0);
  }
  var f, o = !1;
  [f, o] = yn(() => (
    /** @type {V} */
    t[e]
  )), f === void 0 && r !== void 0 && (f = u(), a && (Ee(), a(f)));
  var c;
  if (c = () => {
    var m = (
      /** @type {V} */
      t[e]
    );
    return m === void 0 ? u() : (s = !0, m);
  }, a) {
    var p = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(m, L) {
        return arguments.length > 0 ? ((!L || p || o) && a(L ? c() : m), m) : c();
      })
    );
  }
  var v = !1, _ = /* @__PURE__ */ Bt(() => (v = !1, c()));
  F(_);
  var J = (
    /** @type {Effect} */
    d
  );
  return (
    /** @type {() => V} */
    (function(m, L) {
      if (arguments.length > 0) {
        const V = L ? F(_) : H(m);
        return C(_, V), v = !0, l !== void 0 && (l = V), m;
      }
      return Z && v || (J.f & B) !== 0 ? _.v : F(_);
    })
  );
}
var mn = /* @__PURE__ */ fn('<input type="text" inputmode="decimal" autocomplete="off"/>');
function xn(t, e) {
  ke(e, !0);
  let n = En(e, "value", 15, 0), r;
  function l(a) {
    if (a === "" || isNaN(a)) return 0;
    const i = a?.toString().split(".");
    return i[0] = parseInt(i[0]).toString(), i[0] = i[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), i.join(".");
  }
  function s(a) {
    const f = a.target.value.replace(/,/g, "").replace(/[^\d.]/g, "");
    n(f);
    const o = l(f);
    r.value = o;
  }
  var u = mn();
  u.__input = s, u.__keyup = s, gn(u, (a) => r = a, () => r), ze(
    (a) => {
      _n(u, 1, cn(e.cssClass)), pn(u, a);
    },
    [() => l(n())]
  ), an(t, u), Te();
}
ln(["input", "keyup"]);
export {
  xn as NumericInput,
  xn as default
};
