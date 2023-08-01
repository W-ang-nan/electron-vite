import { R as buildProps, am as componentSizes, W as isNumber, an as iconPropType, ao as definePropType, d as defineComponent, a1 as useNamespace, r as ref, N as computed, V as isString, ap as addUnit, H as watch, f as openBlock, h as createElementBlock, a8 as normalizeStyle, n as unref, g as createBlock, w as withCtx, aq as resolveDynamicComponent, E as ElIcon, a5 as renderSlot, a4 as normalizeClass, a6 as _export_sfc, af as withInstall, ar as useRoute, u as useGetPlayList, y as useMusic, o as onMounted, j as createVNode, T as Transition, i as createBaseVNode, t as toDisplayString, F as Fragment, k as renderList, as as video_play_default, a7 as createTextVNode, at as caret_right_default, au as more_default, q as createCommentVNode, l as withDirectives, v as vShow, av as time, aw as ElButton } from "./index-3d9a4c14.js";
import { a as ElTabPane, E as ElTabs } from "./el-tab-pane-51e4d210.js";
const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val) => isNumber(val)
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: iconPropType
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: definePropType(String),
    default: "cover"
  }
});
const avatarEmits = {
  error: (evt) => evt instanceof Event
};
const _hoisted_1$1 = ["src", "alt", "srcset"];
const __default__ = defineComponent({
  name: "ElAvatar"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: avatarProps,
  emits: avatarEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("avatar");
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
      const { size, icon, shape } = props;
      const classList = [ns.b()];
      if (isString(size))
        classList.push(ns.m(size));
      if (icon)
        classList.push(ns.m("icon"));
      if (shape)
        classList.push(ns.m(shape));
      return classList;
    });
    const sizeStyle = computed(() => {
      const { size } = props;
      return isNumber(size) ? ns.cssVarBlock({
        size: addUnit(size) || ""
      }) : void 0;
    });
    const fitStyle = computed(() => ({
      objectFit: props.fit
    }));
    watch(() => props.src, () => hasLoadError.value = false);
    function handleError(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(avatarClass)),
        style: normalizeStyle(unref(sizeStyle))
      }, [
        (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          alt: _ctx.alt,
          srcset: _ctx.srcSet,
          style: normalizeStyle(unref(fitStyle)),
          onError: handleError
        }, null, 44, _hoisted_1$1)) : _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 6);
    };
  }
});
var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);
const ElAvatar = withInstall(Avatar);
const elAvatar = "";
const _hoisted_1 = { class: "playlistcon" };
const _hoisted_2 = {
  key: 0,
  class: "header"
};
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "title" };
const _hoisted_5 = { class: "h" };
const _hoisted_6 = { class: "z" };
const _hoisted_7 = { class: "name" };
const _hoisted_8 = { class: "txt" };
const _hoisted_9 = { class: "btn" };
const _hoisted_10 = {
  key: 0,
  class: "list"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "tit" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "歌曲"),
  /* @__PURE__ */ createBaseVNode("span", { class: "singer" }, "歌手"),
  /* @__PURE__ */ createBaseVNode("span", { class: "album" }, "专辑"),
  /* @__PURE__ */ createBaseVNode("span", { class: "time" }, "时长")
], -1);
const _hoisted_12 = ["onMouseenter"];
const _hoisted_13 = { class: "name" };
const _hoisted_14 = { class: "n" };
const _hoisted_15 = { class: "icon" };
const _hoisted_16 = ["onClick"];
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z",
  fill: "currentColor",
  "p-id": "6820"
}, null, -1);
const _hoisted_18 = [
  _hoisted_17
];
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("svg", {
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
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("svg", {
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
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("svg", {
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
const _hoisted_22 = { class: "singer" };
const _hoisted_23 = { class: "album" };
const _hoisted_24 = { class: "time" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Playlist",
  setup(__props) {
    const activeName = ref("first");
    const handleClick = (tab, event) => {
      console.log(tab, event);
    };
    const route = useRoute();
    const id = ref();
    const a = useGetPlayList();
    const songs = ref([]);
    const showindex = ref();
    const music = useMusic();
    onMounted(async () => {
      id.value = route.query.id;
      await a.getPlayList(id.value);
      songs.value = a.list;
    });
    const showhover = (index) => {
      showindex.value = index;
    };
    const play = (id2) => {
      music.getmp3(id2);
    };
    watch(a, () => {
      songs.value = a.list;
    });
    const playAll = (songs2) => {
      music.playAll(songs2);
    };
    return (_ctx, _cache) => {
      const _component_el_avatar = ElAvatar;
      const _component_el_button = ElButton;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(Transition, null, {
          default: withCtx(() => [
            unref(a).title.coverImgUrl ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("img", {
                src: unref(a).title.coverImgUrl
              }, null, 8, _hoisted_3),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, toDisplayString(unref(a).title.name), 1),
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_el_avatar, {
                    src: unref(a).creator.avatarUrl,
                    size: "small"
                  }, null, 8, ["src"]),
                  createBaseVNode("span", _hoisted_7, toDisplayString(unref(a).creator.nickname), 1),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(a).title.tags, (item) => {
                    return openBlock(), createElementBlock("span", null, "#" + toDisplayString(item), 1);
                  }), 256))
                ]),
                createBaseVNode("div", _hoisted_8, toDisplayString(unref(a).title.description), 1),
                createBaseVNode("div", _hoisted_9, [
                  createVNode(_component_el_button, {
                    icon: unref(video_play_default),
                    round: "",
                    color: "#059669",
                    onClick: _cache[0] || (_cache[0] = ($event) => playAll(songs.value))
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
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, null, {
          default: withCtx(() => [
            songs.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10, [
              createVNode(_component_el_tabs, {
                modelValue: activeName.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => activeName.value = $event),
                class: "demo-tabs",
                onTabClick: handleClick
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_tab_pane, {
                    label: "歌曲",
                    name: "first"
                  }, {
                    default: withCtx(() => [
                      _hoisted_11,
                      (openBlock(true), createElementBlock(Fragment, null, renderList(songs.value, (item, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: index,
                          class: "song",
                          onMouseenter: ($event) => showhover(index),
                          onMouseleave: _cache[1] || (_cache[1] = ($event) => showhover(NaN))
                        }, [
                          createBaseVNode("div", _hoisted_13, [
                            createBaseVNode("div", _hoisted_14, toDisplayString(item.name), 1),
                            withDirectives(createBaseVNode("div", _hoisted_15, [
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
                              }, _hoisted_18, 8, _hoisted_16)),
                              _hoisted_19,
                              _hoisted_20,
                              _hoisted_21
                            ], 512), [
                              [vShow, index == showindex.value]
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_22, toDisplayString(item.ar[0].name), 1),
                          createBaseVNode("div", _hoisted_23, toDisplayString(item.al.name), 1),
                          createBaseVNode("div", _hoisted_24, toDisplayString(unref(time)(item.dt / 1e3)), 1)
                        ], 40, _hoisted_12);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_tab_pane, {
                    disabled: true,
                    label: "评论",
                    name: "second"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Config")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const Playlist_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as default
};
