import { d as defineComponent, ar as useRoute, r as ref, o as onMounted, ax as useMvDetail, f as openBlock, h as createElementBlock, i as createBaseVNode } from "./index-3d9a4c14.js";
const _hoisted_1 = { class: "mvdetail" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MvDetail",
  setup(__props) {
    const route = useRoute();
    const id = ref();
    const data = ref();
    const video = ref();
    id.value = route.query.id;
    onMounted(async () => {
      data.value = await useMvDetail(id.value);
      video.value.src = data.value.url;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("video", {
          ref_key: "video",
          ref: video,
          autoplay: "",
          controls: "",
          class: "video"
        }, null, 512)
      ]);
    };
  }
});
const MvDetail_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as default
};
