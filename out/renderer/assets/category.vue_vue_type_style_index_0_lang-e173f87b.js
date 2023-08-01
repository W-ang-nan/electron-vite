import { d as defineComponent, u as useGetPlayList, a as useRouter, r as ref, o as onMounted, aj as useTags, ak as useHigh, e as resolveDirective, f as openBlock, h as createElementBlock, j as createVNode, w as withCtx, T as Transition, i as createBaseVNode, F as Fragment, k as renderList, t as toDisplayString, q as createCommentVNode, l as withDirectives } from "./index-3d9a4c14.js";
const _hoisted_1 = { class: "category" };
const _hoisted_2 = {
  key: 0,
  class: "tags"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = {
  key: 0,
  class: "songs"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "title" }, "全部歌单", -1);
const _hoisted_6 = { class: "song" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "nick" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "category",
  setup(__props) {
    const a = useGetPlayList();
    const router = useRouter();
    const tags = ref();
    const active = ref("全部");
    const data = ref();
    onMounted(async () => {
      tags.value = await useTags();
      data.value = await useHigh(active.value);
    });
    const getdata = async (cat) => {
      data.value = await useHigh(cat);
    };
    const toplaylist = (id) => {
      router.push({ path: "playlist", query: { id } });
      a.getPlayList(id);
    };
    return (_ctx, _cache) => {
      const _directive_lazy = resolveDirective("lazy");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(Transition, null, {
          default: withCtx(() => [
            tags.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", {
                class: "tag",
                onClick: _cache[0] || (_cache[0] = ($event) => getdata("全部"))
              }, "全部"),
              (openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (item) => {
                return openBlock(), createElementBlock("div", {
                  class: "tag",
                  key: item.id,
                  onClick: ($event) => getdata(item.name)
                }, toDisplayString(item.name), 9, _hoisted_3);
              }), 128))
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, null, {
          default: withCtx(() => [
            data.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
              _hoisted_5,
              createBaseVNode("div", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(data.value, (item) => {
                  return openBlock(), createElementBlock("div", {
                    class: "item",
                    key: item.id,
                    onClick: ($event) => toplaylist(item.id)
                  }, [
                    withDirectives(createBaseVNode("img", null, null, 512), [
                      [_directive_lazy, item.coverImgUrl]
                    ]),
                    createBaseVNode("div", null, toDisplayString(item.name), 1),
                    createBaseVNode("div", _hoisted_8, toDisplayString(item.creator.nickname), 1)
                  ], 8, _hoisted_7);
                }), 128))
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const category_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as _
};
