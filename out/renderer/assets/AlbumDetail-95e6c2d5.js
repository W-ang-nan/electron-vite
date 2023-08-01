import { d as defineComponent, ar as useRoute, r as ref, y as useMusic, o as onMounted, aE as useAlbumDetail, e as resolveDirective, f as openBlock, h as createElementBlock, i as createBaseVNode, l as withDirectives, t as toDisplayString, n as unref, j as createVNode, w as withCtx, aw as ElButton, az as dateTime, a7 as createTextVNode, as as video_play_default, at as caret_right_default, au as more_default, F as Fragment, k as renderList, v as vShow, av as time } from "./index-3d9a4c14.js";
import { E as ElTabs, a as ElTabPane } from "./el-tab-pane-51e4d210.js";
const _hoisted_1 = { class: "albumdetail" };
const _hoisted_2 = { class: "header" };
const _hoisted_3 = { class: "img" };
const _hoisted_4 = { class: "title" };
const _hoisted_5 = { class: "t" };
const _hoisted_6 = { class: "t" };
const _hoisted_7 = { class: "btn" };
const _hoisted_8 = { class: "list" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "tit" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "歌曲"),
  /* @__PURE__ */ createBaseVNode("span", { class: "singer" }, "歌手"),
  /* @__PURE__ */ createBaseVNode("span", { class: "time" }, "时长")
], -1);
const _hoisted_10 = ["onMouseenter"];
const _hoisted_11 = { class: "name" };
const _hoisted_12 = { class: "n" };
const _hoisted_13 = { class: "icon" };
const _hoisted_14 = ["onClick"];
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z",
  fill: "currentColor",
  "p-id": "6820"
}, null, -1);
const _hoisted_16 = [
  _hoisted_15
];
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("svg", {
  t: "1673072219191",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "7967",
  width: "16",
  height: "16"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M512 954.88c-243.712 0-442.88-199.168-442.88-442.88s199.168-442.88 442.88-442.88 442.88 199.168 442.88 442.88-199.168 442.88-442.88 442.88z m0-63.488c208.896 0 379.392-170.496 379.392-379.392s-170.496-379.392-379.392-379.392-379.392 170.496-379.392 379.392 170.496 379.392 379.392 379.392z m192-360.96h-363.52c-14.336 0-26.624-11.776-26.624-26.624V496.64c0-14.336 11.776-26.624 26.624-26.624h363.52c14.336 0 26.624 11.776 26.624 26.624v7.168c0 14.336-12.288 26.624-26.624 26.624z m-212.48 171.52l1.024-363.52c0-14.336 11.776-26.624 26.624-26.624h7.168c14.336 0 26.624 11.776 26.624 26.624l-1.024 363.52c0 14.336-11.776 26.624-26.624 26.624h-7.168c-14.848 0-26.624-11.776-26.624-26.624z",
    "p-id": "7968",
    fill: "currentColor"
  })
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("svg", {
  t: "1673072297019",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "9888",
  width: "16",
  height: "16"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M952.668146 646.354496l0-63.12786L638.032698 583.226636 638.032698 16.445242 382.906411 16.445242l0 566.980754L71.530208 583.425996l0 62.925479 440.567962 377.647518L952.668146 646.354496zM859.133756 646.354496 512.09817 939.920139l-346.021665-293.567657 283.07907 0L449.155575 79.915438l126.030181 0 0 566.43805L859.133756 646.353489z",
    "p-id": "9889",
    fill: "currentColor"
  })
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("svg", {
  t: "1673072353715",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "11973",
  width: "16",
  height: "16"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M558.1 537.1",
    fill: "#9CA3AF",
    "p-id": "11974"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M256.3 512.2m-63.8 0a63.8 63.8 0 1 0 127.6 0 63.8 63.8 0 1 0-127.6 0Z",
    fill: "#9CA3AF",
    "p-id": "11975"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M512.3 512.2m-63.8 0a63.8 63.8 0 1 0 127.6 0 63.8 63.8 0 1 0-127.6 0Z",
    fill: "#9CA3AF",
    "p-id": "11976"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M767.7 512.2m-63.8 0a63.8 63.8 0 1 0 127.6 0 63.8 63.8 0 1 0-127.6 0Z",
    fill: "#9CA3AF",
    "p-id": "11977"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M512.1 114.7c53.7 0 105.7 10.5 154.7 31.2 47.3 20 89.8 48.7 126.4 85.2 36.5 36.5 65.2 79 85.2 126.4 20.7 49 31.2 101 31.2 154.7S899.1 618 878.4 666.9c-20 47.3-48.7 89.8-85.2 126.4-36.5 36.5-79 65.2-126.4 85.2-49 20.7-101 31.2-154.7 31.2s-105.7-10.5-154.7-31.2c-47.3-20-89.8-48.7-126.4-85.2-36.5-36.5-65.2-79-85.2-126.4-20.7-49-31.2-101-31.2-154.7s10.5-105.7 31.2-154.7c20-47.3 48.7-89.8 85.2-126.4 36.5-36.5 79-65.2 126.4-85.2 49-20.7 101-31.2 154.7-31.2m0-50C265 64.7 64.6 265.1 64.6 512.2S265 959.7 512.1 959.7s447.5-200.4 447.5-447.5S759.2 64.7 512.1 64.7z",
    fill: "currentColor",
    "p-id": "11978"
  })
], -1);
const _hoisted_20 = { class: "singer" };
const _hoisted_21 = { class: "time" };
const _hoisted_22 = { class: "desc" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AlbumDetail",
  setup(__props) {
    const route = useRoute();
    const id = ref();
    const title = ref();
    const artist = ref();
    const data = ref([]);
    const showindex = ref();
    const music = useMusic();
    id.value = route.query.id;
    onMounted(async () => {
      const { album, songs } = await useAlbumDetail(id.value);
      title.value = album;
      artist.value = album.artist;
      data.value = songs;
      console.log(title.value, data.value);
    });
    const activeName = ref("first");
    const handleClick = (tab, event) => {
      console.log(tab, event);
    };
    const showhover = (index) => {
      showindex.value = index;
    };
    const play = (id2) => {
      music.getmp3(id2);
    };
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      const _directive_lazy = resolveDirective("lazy");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            withDirectives(createBaseVNode("img", null, null, 512), [
              [_directive_lazy, title.value?.blurPicUrl]
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("h3", null, toDisplayString(title.value?.name), 1),
            createBaseVNode("div", _hoisted_5, toDisplayString(title.value?.artist.name), 1),
            createBaseVNode("div", _hoisted_6, toDisplayString(unref(dateTime)(title.value?.publishTime)), 1),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_el_button, {
                icon: unref(video_play_default),
                round: "",
                color: "#059669"
              }, {
                default: withCtx(() => [
                  createTextVNode("播放全部")
                ]),
                _: 1
              }, 8, ["icon"]),
              createVNode(_component_el_button, {
                icon: unref(caret_right_default),
                round: ""
              }, {
                default: withCtx(() => [
                  createTextVNode("收藏")
                ]),
                _: 1
              }, 8, ["icon"]),
              createVNode(_component_el_button, {
                icon: unref(more_default),
                round: ""
              }, null, 8, ["icon"])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          createVNode(_component_el_tabs, {
            modelValue: activeName.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => activeName.value = $event),
            class: "demo-tabs",
            onTabClick: handleClick
          }, {
            default: withCtx(() => [
              createVNode(_component_el_tab_pane, {
                label: "歌曲",
                name: "first"
              }, {
                default: withCtx(() => [
                  _hoisted_9,
                  (openBlock(true), createElementBlock(Fragment, null, renderList(data.value, (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "song",
                      onMouseenter: ($event) => showhover(index),
                      onMouseleave: _cache[0] || (_cache[0] = ($event) => showhover(NaN))
                    }, [
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("div", _hoisted_12, toDisplayString(item.name), 1),
                        withDirectives(createBaseVNode("div", _hoisted_13, [
                          (openBlock(), createElementBlock("svg", {
                            onClick: ($event) => play(item.id),
                            t: "1673072060709",
                            class: "icon",
                            viewBox: "0 0 1024 1024",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "p-id": "6819",
                            width: "16",
                            height: "16"
                          }, _hoisted_16, 8, _hoisted_14)),
                          _hoisted_17,
                          _hoisted_18,
                          _hoisted_19
                        ], 512), [
                          [vShow, index == showindex.value]
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_20, toDisplayString(item.ar[0].name), 1),
                      createBaseVNode("div", _hoisted_21, toDisplayString(unref(time)(item.dt / 1e3)), 1)
                    ], 40, _hoisted_10);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_el_tab_pane, {
                label: "专辑详情",
                name: "second"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_22, toDisplayString(title.value?.description), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
const AlbumDetail_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as default
};
