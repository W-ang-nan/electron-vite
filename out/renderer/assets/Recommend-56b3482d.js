import { T as Title, M as Mv } from "./Mv-1772b41e.js";
import { d as defineComponent, o as onMounted, u as useGetPlayList, a as useRouter, r as ref, b as useSongsheet, c as resolveComponent, e as resolveDirective, f as openBlock, g as createBlock, w as withCtx, h as createElementBlock, i as createBaseVNode, j as createVNode, F as Fragment, k as renderList, l as withDirectives, m as withModifiers, t as toDisplayString, v as vShow, n as unref, p as math, q as createCommentVNode, T as Transition, E as ElIcon, s as pushScopeId, x as popScopeId, _ as _export_sfc, y as useMusic, z as useNewmusic, A as onActivated } from "./index-3d9a4c14.js";
const _withScopeId$2 = (n) => (pushScopeId("data-v-1e97b9fa"), n = n(), popScopeId(), n);
const _hoisted_1$2 = {
  key: 0,
  class: "con"
};
const _hoisted_2$1 = { class: "tit" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", null, " 你的专属歌单 ", -1));
const _hoisted_4$1 = { class: "tent" };
const _hoisted_5$1 = ["onClick"];
const _hoisted_6$1 = ["alt", "onMouseenter", "onMouseleave"];
const _hoisted_7$1 = { class: "name" };
const _hoisted_8$1 = ["onMouseenter"];
const _hoisted_9 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("path", {
  d: "M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z",
  fill: "currentColor",
  "p-id": "2676"
}, null, -1));
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = { class: "title" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("svg", {
  t: "1672392970575",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4200",
  width: "12",
  height: "12"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M896 554.666667h-85.333333V426.666667a298.666667 298.666667 0 1 0-597.333334 0v128H128A85.426667 85.426667 0 0 0 42.666667 640v170.666667a85.426667 85.426667 0 0 0 85.333333 85.333333h106.666667a21.333333 21.333333 0 0 0 21.333333-21.333333V426.666667c0-141.16 114.84-256 256-256s256 114.84 256 256v448a21.333333 21.333333 0 0 0 21.333333 21.333333h106.666667a85.426667 85.426667 0 0 0 85.333333-85.333333V640a85.426667 85.426667 0 0 0-85.333333-85.333333z",
    fill: "#515151",
    "p-id": "4201"
  })
], -1));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Songsheet",
  setup(__props) {
    onMounted(async () => {
      Songsheet2();
    });
    const a = useGetPlayList();
    const router = useRouter();
    const push = (id) => {
      router.push({ path: "/playlist", query: { id } });
      a.getPlayList(id);
    };
    const hover = ref();
    const show = ref(false);
    const Hoverclass = (item) => {
      show.value = !show.value;
      hover.value = item.id;
    };
    const Songsheets = ref([]);
    const Songsheet2 = async () => {
      Songsheets.value = await useSongsheet();
    };
    return (_ctx, _cache) => {
      const _component_ArrowRight = resolveComponent("ArrowRight");
      const _component_el_icon = ElIcon;
      const _directive_lazy = resolveDirective("lazy");
      return openBlock(), createBlock(Transition, null, {
        default: withCtx(() => [
          Songsheets.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2$1, [
              _hoisted_3$1,
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_ArrowRight)
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_4$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Songsheets.value, (item) => {
                return openBlock(), createElementBlock("div", {
                  class: "top",
                  key: item.id,
                  onClick: ($event) => push(item.id)
                }, [
                  withDirectives(createBaseVNode("img", {
                    alt: item.name,
                    onMouseenter: withModifiers(($event) => Hoverclass(item), ["stop"]),
                    onMouseleave: withModifiers(Hoverclass, ["stop"])
                  }, null, 40, _hoisted_6$1), [
                    [_directive_lazy, item.picUrl]
                  ]),
                  createBaseVNode("div", _hoisted_7$1, toDisplayString(item.name), 1),
                  withDirectives((openBlock(), createElementBlock("svg", {
                    onMouseenter: withModifiers(($event) => Hoverclass(item), ["stop"]),
                    t: "1672389561177",
                    class: "icon icon1",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "2675",
                    width: "40",
                    height: "40"
                  }, _hoisted_10, 40, _hoisted_8$1)), [
                    [vShow, hover.value === item.id]
                  ]),
                  withDirectives(createBaseVNode("div", _hoisted_11, [
                    _hoisted_12,
                    createBaseVNode("div", null, toDisplayString(unref(math)(item.playCount)), 1)
                  ], 512), [
                    [vShow, !(hover.value === item.id)]
                  ])
                ], 8, _hoisted_5$1);
              }), 128))
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const Songsheet_vue_vue_type_style_index_0_scoped_1e97b9fa_lang = "";
const Songsheet = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1e97b9fa"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-19499cc8"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  key: 0,
  class: "con"
};
const _hoisted_2 = { class: "tit" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", null, " 推荐新音乐 ", -1));
const _hoisted_4 = { class: "tent" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { alt: "" };
const _hoisted_7 = { class: "name" };
const _hoisted_8 = { style: { "color": "#94A3BF" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Newmusic",
  setup(__props) {
    onMounted(async () => {
      await getnewmusic();
    });
    const a = useMusic();
    const play = async (id) => {
      a.getmp3(id);
    };
    const newmusics = ref([]);
    const getnewmusic = async () => {
      newmusics.value = await useNewmusic();
    };
    return (_ctx, _cache) => {
      const _component_ArrowRight = resolveComponent("ArrowRight");
      const _component_el_icon = ElIcon;
      const _directive_lazy = resolveDirective("lazy");
      return openBlock(), createBlock(Transition, null, {
        default: withCtx(() => [
          newmusics.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_ArrowRight)
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(newmusics.value, (item) => {
                return openBlock(), createElementBlock("div", {
                  class: "item",
                  key: item.id,
                  onClick: ($event) => play(item.id)
                }, [
                  withDirectives(createBaseVNode("img", _hoisted_6, null, 512), [
                    [_directive_lazy, item.picUrl]
                  ]),
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("div", null, toDisplayString(item.name), 1),
                    createBaseVNode("div", _hoisted_8, toDisplayString(item.song.artists[0].name), 1)
                  ])
                ], 8, _hoisted_5);
              }), 128))
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const Newmusic_vue_vue_type_style_index_0_scoped_19499cc8_lang = "";
const Newmusic = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-19499cc8"]]);
const _withScopeId = (n) => (pushScopeId("data-v-794cd8dd"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "title" }, "推荐", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Recommend",
  setup(__props) {
    onActivated(() => {
      window.scrollTo(0, 0);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createVNode(Title),
        createVNode(Songsheet),
        createVNode(Newmusic),
        createVNode(Mv)
      ]);
    };
  }
});
const Recommend_vue_vue_type_style_index_0_scoped_794cd8dd_lang = "";
const Recommend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-794cd8dd"]]);
export {
  Recommend as default
};
