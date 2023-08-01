import { d as defineComponent, r as ref, A as onActivated, f as openBlock, h as createElementBlock, j as createVNode, w as withCtx, i as createBaseVNode, g as createBlock, q as createCommentVNode, K as KeepAlive } from "./index-3d9a4c14.js";
import { E as ElTabs, a as ElTabPane } from "./el-tab-pane-51e4d210.js";
import { _ as _sfc_main$3 } from "./artist.vue_vue_type_style_index_0_lang-44eb2371.js";
import { _ as _sfc_main$4 } from "./category.vue_vue_type_style_index_0_lang-e173f87b.js";
import { _ as _sfc_main$1 } from "./picked.vue_vue_type_script_setup_true_lang-68b6d033.js";
import { _ as _sfc_main$2 } from "./toplist.vue_vue_type_style_index_0_lang-2961982b.js";
import "./artist-9fa04616.js";
import "./Mv-1772b41e.js";
const _hoisted_1 = { class: "music" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", { class: "musictit" }, "音乐馆", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Music",
  setup(__props) {
    const activeName = ref("Picked");
    const handleClick = (tab, event) => {
      console.log(tab, event);
      console.log(activeName.value);
    };
    onActivated(() => {
      window.scrollTo(0, 0);
    });
    return (_ctx, _cache) => {
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_el_tabs, {
          modelValue: activeName.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeName.value = $event),
          class: "demo-tabs",
          onTabClick: handleClick
        }, {
          default: withCtx(() => [
            createVNode(_component_el_tab_pane, {
              label: "精选",
              name: "Picked"
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(KeepAlive, null, [
                  activeName.value == "Picked" ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true)
                ], 1024))
              ]),
              _: 1
            }),
            createVNode(_component_el_tab_pane, {
              label: "排行",
              name: "Toplist",
              lazy: true
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(KeepAlive, null, [
                  activeName.value == "Toplist" ? (openBlock(), createBlock(_sfc_main$2, { key: 0 })) : createCommentVNode("", true)
                ], 1024))
              ]),
              _: 1
            }),
            createVNode(_component_el_tab_pane, {
              label: "歌手",
              name: "Artist",
              lazy: true
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(KeepAlive, null, [
                  activeName.value == "Artist" ? (openBlock(), createBlock(_sfc_main$3, { key: 0 })) : createCommentVNode("", true)
                ], 1024))
              ]),
              _: 1
            }),
            createVNode(_component_el_tab_pane, {
              label: "分类歌单",
              name: "Category",
              lazy: true
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(KeepAlive, null, [
                  activeName.value == "Category" ? (openBlock(), createBlock(_sfc_main$4, { key: 0 })) : createCommentVNode("", true)
                ], 1024))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
const Music_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as default
};
