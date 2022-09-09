import { defineComponent as _, ref as p, openBlock as r, createElementBlock as l, toDisplayString as a, unref as d, renderSlot as u, createElementVNode as i } from "vue";
const m = { class: "vp-tool" }, f = /* @__PURE__ */ _({
  __name: "index",
  props: {
    msg: null
  },
  setup(o, { expose: t }) {
    const e = o;
    let n = p(e.msg);
    return t({
      updateMsg: (c) => {
        n.value = c;
      },
      props: e
    }), (c, O) => (r(), l("div", m, "hello " + a(d(n)), 1));
  }
});
const v = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [n, s] of t)
    e[n] = s;
  return e;
}, g = /* @__PURE__ */ v(f, [["__scopeId", "data-v-48b35af8"]]), x = { class: "vp-btn" }, b = /* @__PURE__ */ i("div", null, "\u6211\u662F", -1), h = /* @__PURE__ */ _({
  __name: "index",
  props: {
    msg: null
  },
  setup(o) {
    return (t, e) => (r(), l("div", x, [
      b,
      u(t.$slots, "default")
    ]));
  }
}), y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VpTool: g,
  VpBtn: h
}, Symbol.toStringTag, { value: "Module" })), j = (o) => ({
  install(t) {
    for (let [e, n] of Object.entries(y))
      t.component(e, n);
  }
});
export {
  j as default
};
