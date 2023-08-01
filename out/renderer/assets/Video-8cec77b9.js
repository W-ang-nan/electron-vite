import { d as defineComponent, al as noFooter, f as openBlock, h as createElementBlock, s as pushScopeId, x as popScopeId, i as createBaseVNode, _ as _export_sfc } from "./index-3d9a4c14.js";
const _withScopeId = (n) => (pushScopeId("data-v-12db1c78"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "title" }, "开发中,理解万岁!!!", -1));
const _hoisted_2 = [
  _hoisted_1
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Video",
  setup(__props) {
    const footer = noFooter();
    footer.showFooter = false;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, _hoisted_2);
    };
  }
});
const Video_vue_vue_type_style_index_0_scoped_12db1c78_lang = "";
const Video = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-12db1c78"]]);
export {
  Video as default
};
