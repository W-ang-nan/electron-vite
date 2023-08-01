import { d as defineComponent, r as ref, o as onMounted, Q as useToplist, u as useGetPlayList, a as useRouter, e as resolveDirective, f as openBlock, g as createBlock, w as withCtx, T as Transition, h as createElementBlock, i as createBaseVNode, F as Fragment, k as renderList, l as withDirectives, v as vShow, t as toDisplayString, n as unref, p as math, q as createCommentVNode } from "./index-3d9a4c14.js";
const _hoisted_1 = {
  key: 0,
  class: "toplist"
};
const _hoisted_2 = { class: "official" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", null, "官方榜", -1);
const _hoisted_4 = { class: "items" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "left" };
const _hoisted_7 = ["onMouseenter"];
const _hoisted_8 = {
  t: "1672389561177",
  class: "icon icon1",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2675",
  width: "40",
  height: "40"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z",
  fill: "currentColor",
  "p-id": "2676"
}, null, -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = { class: "play" };
const _hoisted_12 = { class: "num" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("svg", {
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
    fill: "#FFFFFF",
    "p-id": "4201"
  })
], -1);
const _hoisted_14 = { class: "right" };
const _hoisted_15 = { class: "title" };
const _hoisted_16 = { class: "name" };
const _hoisted_17 = { class: "characteristic" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("h3", null, "特色榜", -1);
const _hoisted_19 = { class: "summary" };
const _hoisted_20 = ["onClick"];
const _hoisted_21 = ["onMouseenter"];
const _hoisted_22 = {
  t: "1672389561177",
  class: "icon icon1",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2675",
  width: "40",
  height: "40"
};
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z",
  fill: "currentColor",
  "p-id": "2676"
}, null, -1);
const _hoisted_24 = [
  _hoisted_23
];
const _hoisted_25 = { class: "play" };
const _hoisted_26 = { class: "name" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "toplist",
  setup(__props) {
    const toplist = ref([]);
    const toplist2 = ref([]);
    const hover = ref();
    const hover2 = ref();
    onMounted(async () => {
      const data = await useToplist();
      toplist.value = data.slice(0, 4);
      toplist2.value = data.slice(4);
    });
    const Hoverclass = (id) => {
      hover.value = id;
    };
    const Hoverclass2 = (id) => {
      hover2.value = id;
    };
    const a = useGetPlayList();
    const router = useRouter();
    const push = (id) => {
      router.push({ path: "/playlist", query: { id } });
      a.getPlayList(id);
    };
    return (_ctx, _cache) => {
      const _directive_lazy = resolveDirective("lazy");
      return openBlock(), createBlock(Transition, null, {
        default: withCtx(() => [
          toplist.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              createBaseVNode("div", _hoisted_4, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(toplist.value, (item) => {
                  return openBlock(), createElementBlock("div", {
                    class: "item",
                    key: item.id,
                    onClick: ($event) => push(item.id)
                  }, [
                    createBaseVNode("div", _hoisted_6, [
                      withDirectives(createBaseVNode("img", {
                        onMouseenter: ($event) => Hoverclass(item.id),
                        onMouseleave: _cache[0] || (_cache[0] = ($event) => Hoverclass(NaN))
                      }, null, 40, _hoisted_7), [
                        [_directive_lazy, item.coverImgUrl]
                      ]),
                      withDirectives((openBlock(), createElementBlock("svg", _hoisted_8, _hoisted_10, 512)), [
                        [vShow, hover.value === item.id]
                      ]),
                      withDirectives(createBaseVNode("div", _hoisted_11, null, 512), [
                        [vShow, hover.value === item.id]
                      ]),
                      withDirectives(createBaseVNode("div", _hoisted_12, [
                        _hoisted_13,
                        createBaseVNode("span", null, toDisplayString(unref(math)(item.playCount)), 1)
                      ], 512), [
                        [vShow, !(hover.value === item.id)]
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("div", _hoisted_15, toDisplayString(item.name), 1),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.tracks, (i, index) => {
                        return openBlock(), createElementBlock("div", _hoisted_16, toDisplayString(index + 1) + " " + toDisplayString(i.first) + " - " + toDisplayString(i.second), 1);
                      }), 256))
                    ])
                  ], 8, _hoisted_5);
                }), 128))
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              _hoisted_18,
              createBaseVNode("div", _hoisted_19, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(toplist2.value, (item) => {
                  return openBlock(), createElementBlock("div", {
                    class: "t",
                    onClick: ($event) => push(item.id)
                  }, [
                    withDirectives(createBaseVNode("img", {
                      onMouseenter: ($event) => Hoverclass2(item.id),
                      onMouseleave: _cache[1] || (_cache[1] = ($event) => Hoverclass2(NaN))
                    }, null, 40, _hoisted_21), [
                      [_directive_lazy, item.coverImgUrl]
                    ]),
                    withDirectives((openBlock(), createElementBlock("svg", _hoisted_22, _hoisted_24, 512)), [
                      [vShow, hover2.value === item.id]
                    ]),
                    withDirectives(createBaseVNode("div", _hoisted_25, null, 512), [
                      [vShow, hover2.value === item.id]
                    ]),
                    createBaseVNode("div", _hoisted_26, toDisplayString(item.name), 1)
                  ], 8, _hoisted_20);
                }), 256))
              ])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const toplist_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as _
};
