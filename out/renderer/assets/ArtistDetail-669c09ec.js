import { d as defineComponent, a as useRouter, r as ref, o as onMounted, ay as useAlbum, H as watch, e as resolveDirective, f as openBlock, h as createElementBlock, F as Fragment, k as renderList, l as withDirectives, i as createBaseVNode, t as toDisplayString, n as unref, az as dateTime, aA as useArtistDetailMv, v as vShow, aB as useArtistDetaildesc, ar as useRoute, y as useMusic, j as createVNode, w as withCtx, T as Transition, q as createCommentVNode, as as video_play_default, a7 as createTextVNode, av as time, g as createBlock, K as KeepAlive, aw as ElButton } from "./index-3d9a4c14.js";
import { a as ElTabPane, E as ElTabs } from "./el-tab-pane-51e4d210.js";
import { u as useArtist } from "./artist-9fa04616.js";
const _hoisted_1$3 = { class: "albums" };
const _hoisted_2$3 = ["onClick"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Album",
  props: ["id"],
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const data = ref([]);
    onMounted(async () => {
      data.value = await useAlbum(props.id);
    });
    watch(props, async () => {
      data.value = await useAlbum(props.id);
    });
    const toAlbumDetail = (id) => {
      router.push({ path: "albumdetail", query: { id } });
    };
    return (_ctx, _cache) => {
      const _directive_lazy = resolveDirective("lazy");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(data.value, (item) => {
          return openBlock(), createElementBlock("div", {
            class: "album",
            onClick: ($event) => toAlbumDetail(item.id)
          }, [
            withDirectives(createBaseVNode("img", null, null, 512), [
              [_directive_lazy, item.blurPicUrl]
            ]),
            createBaseVNode("div", null, toDisplayString(item.name), 1),
            createBaseVNode("div", null, toDisplayString(unref(dateTime)(item.publishTime)), 1)
          ], 8, _hoisted_2$3);
        }), 256))
      ]);
    };
  }
});
const Album_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "mvs" };
const _hoisted_2$2 = ["onClick"];
const _hoisted_3$2 = ["onMouseenter"];
const _hoisted_4$2 = ["onMouseenter"];
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z",
  fill: "currentColor",
  "p-id": "7407"
}, null, -1);
const _hoisted_6$1 = [
  _hoisted_5$1
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Video",
  props: ["id"],
  setup(__props) {
    const props = __props;
    const mvs = ref();
    const show = ref();
    const router = useRouter();
    onMounted(async () => {
      mvs.value = await useArtistDetailMv(props.id);
    });
    const hover = (index) => {
      show.value = index;
    };
    const tomvdetail = (id) => {
      router.push({ path: "mvdetail", query: { id } });
    };
    return (_ctx, _cache) => {
      const _directive_lazy = resolveDirective("lazy");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(mvs.value, (item) => {
          return openBlock(), createElementBlock("div", {
            class: "mv",
            onClick: ($event) => tomvdetail(item.id)
          }, [
            withDirectives(createBaseVNode("img", {
              onMouseenter: ($event) => hover(item.id),
              onMouseleave: _cache[0] || (_cache[0] = ($event) => hover(NaN))
            }, null, 40, _hoisted_3$2), [
              [_directive_lazy, item.imgurl]
            ]),
            createBaseVNode("div", null, toDisplayString(item.name), 1),
            withDirectives((openBlock(), createElementBlock("svg", {
              onMouseenter: ($event) => hover(item.id),
              onMouseleave: _cache[1] || (_cache[1] = ($event) => hover(NaN)),
              t: "1672478312764",
              class: "icon icon1",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "7406",
              width: "36",
              height: "36"
            }, _hoisted_6$1, 40, _hoisted_4$2)), [
              [vShow, show.value === item.id]
            ])
          ], 8, _hoisted_2$2);
        }), 256))
      ]);
    };
  }
});
const Video_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "descs" };
const _hoisted_2$1 = { class: "desc" };
const _hoisted_3$1 = { class: "title" };
const _hoisted_4$1 = { class: "content" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Desc",
  props: ["id"],
  setup(__props) {
    const props = __props;
    const descs = ref();
    onMounted(async () => {
      descs.value = await useArtistDetaildesc(props.id);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(descs.value, (item) => {
          return openBlock(), createElementBlock("div", _hoisted_2$1, [
            createBaseVNode("h3", _hoisted_3$1, toDisplayString(item.ti), 1),
            createBaseVNode("p", _hoisted_4$1, toDisplayString(item.txt), 1)
          ]);
        }), 256))
      ]);
    };
  }
});
const Desc_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "artistdetail" };
const _hoisted_2 = {
  key: 0,
  class: "title"
};
const _hoisted_3 = { class: "left" };
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "j" };
const _hoisted_6 = { class: "z" };
const _hoisted_7 = {
  key: 0,
  class: "data"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "tit" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "歌曲"),
  /* @__PURE__ */ createBaseVNode("span", { class: "album" }, "专辑"),
  /* @__PURE__ */ createBaseVNode("span", { class: "time" }, "时长")
], -1);
const _hoisted_9 = ["onMouseenter"];
const _hoisted_10 = { class: "name" };
const _hoisted_11 = { class: "n" };
const _hoisted_12 = { class: "icon" };
const _hoisted_13 = ["onClick"];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z",
  fill: "currentColor",
  "p-id": "6820"
}, null, -1);
const _hoisted_15 = [
  _hoisted_14
];
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("svg", {
  t: "1673072219191",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "7967",
  width: "14",
  height: "14"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M512 954.88c-243.712 0-442.88-199.168-442.88-442.88s199.168-442.88 442.88-442.88 442.88 199.168 442.88 442.88-199.168 442.88-442.88 442.88z m0-63.488c208.896 0 379.392-170.496 379.392-379.392s-170.496-379.392-379.392-379.392-379.392 170.496-379.392 379.392 170.496 379.392 379.392 379.392z m192-360.96h-363.52c-14.336 0-26.624-11.776-26.624-26.624V496.64c0-14.336 11.776-26.624 26.624-26.624h363.52c14.336 0 26.624 11.776 26.624 26.624v7.168c0 14.336-12.288 26.624-26.624 26.624z m-212.48 171.52l1.024-363.52c0-14.336 11.776-26.624 26.624-26.624h7.168c14.336 0 26.624 11.776 26.624 26.624l-1.024 363.52c0 14.336-11.776 26.624-26.624 26.624h-7.168c-14.848 0-26.624-11.776-26.624-26.624z",
    "p-id": "7968",
    fill: "currentColor"
  })
], -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("svg", {
  t: "1673072297019",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "9888",
  width: "14",
  height: "14"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M952.668146 646.354496l0-63.12786L638.032698 583.226636 638.032698 16.445242 382.906411 16.445242l0 566.980754L71.530208 583.425996l0 62.925479 440.567962 377.647518L952.668146 646.354496zM859.133756 646.354496 512.09817 939.920139l-346.021665-293.567657 283.07907 0L449.155575 79.915438l126.030181 0 0 566.43805L859.133756 646.353489z",
    "p-id": "9889",
    fill: "currentColor"
  })
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("svg", {
  t: "1673072353715",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "11973",
  width: "14",
  height: "14"
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
const _hoisted_19 = { class: "album" };
const _hoisted_20 = { class: "time" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArtistDetail",
  setup(__props) {
    const id = ref();
    const route = useRoute();
    id.value = route.query.id;
    const a = useArtist();
    const showindex = ref();
    const music = useMusic();
    const activeName = ref("first");
    onMounted(async () => {
      await a.getArtistTitle(id.value);
    });
    const handleClick = (tab, event) => {
      console.log(tab, event);
    };
    const play = (id2, i) => {
      music.getmp3(id2);
      music.index = i;
    };
    const showhover = (index) => {
      showindex.value = index;
    };
    const playAll = (songs) => {
      music.playAll(songs);
    };
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      const _directive_lazy = resolveDirective("lazy");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(Transition, null, {
          default: withCtx(() => [
            unref(a).artist.cover ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                withDirectives(createBaseVNode("img", null, null, 512), [
                  [_directive_lazy, unref(a).artist.cover]
                ])
              ]),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("h3", null, toDisplayString(unref(a).artist.name), 1),
                createBaseVNode("div", _hoisted_5, toDisplayString(unref(a).artist.briefDesc), 1),
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("span", null, "单曲数：" + toDisplayString(unref(a).artist.musicSize), 1),
                  createBaseVNode("span", null, "专辑数：" + toDisplayString(unref(a).artist.albumSize), 1),
                  createBaseVNode("span", null, "MV数： " + toDisplayString(unref(a).artistTitle.videoCount), 1)
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, null, {
          default: withCtx(() => [
            unref(a).artistData ? (openBlock(), createElementBlock("div", _hoisted_7, [
              withDirectives(createVNode(_component_el_button, {
                icon: unref(video_play_default),
                round: "",
                color: "#059669",
                onClick: _cache[0] || (_cache[0] = ($event) => playAll(unref(a).artistData))
              }, {
                default: withCtx(() => [
                  createTextVNode("播放全部")
                ]),
                _: 1
              }, 8, ["icon"]), [
                [vShow, activeName.value == "first"]
              ]),
              createVNode(_component_el_tabs, {
                modelValue: activeName.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => activeName.value = $event),
                class: "demo-tabs",
                onTabClick: handleClick
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_tab_pane, {
                    label: `歌曲${unref(a).artist.musicSize}`,
                    name: "first"
                  }, {
                    default: withCtx(() => [
                      _hoisted_8,
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(a).artistData, (item, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: index,
                          class: "song",
                          onMouseenter: ($event) => showhover(index),
                          onMouseleave: _cache[1] || (_cache[1] = ($event) => showhover(NaN))
                        }, [
                          createBaseVNode("div", _hoisted_10, [
                            createBaseVNode("div", _hoisted_11, toDisplayString(item.name), 1),
                            withDirectives(createBaseVNode("div", _hoisted_12, [
                              (openBlock(), createElementBlock("svg", {
                                onClick: ($event) => play(item.id, index),
                                t: "1673072060709",
                                class: "icon",
                                viewBox: "0 0 1024 1024",
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg",
                                "p-id": "6819",
                                width: "14",
                                height: "14"
                              }, _hoisted_15, 8, _hoisted_13)),
                              _hoisted_16,
                              _hoisted_17,
                              _hoisted_18
                            ], 512), [
                              [vShow, index == showindex.value]
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_19, toDisplayString(item.al.name), 1),
                          createBaseVNode("div", _hoisted_20, toDisplayString(unref(time)(item.dt / 1e3)), 1)
                        ], 40, _hoisted_9);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_el_tab_pane, {
                    lazy: true,
                    label: `专辑${unref(a).artist.albumSize}`,
                    name: "second"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(KeepAlive, null, [
                        activeName.value == "second" ? (openBlock(), createBlock(_sfc_main$3, {
                          key: 0,
                          id: id.value
                        }, null, 8, ["id"])) : createCommentVNode("", true)
                      ], 1024))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_el_tab_pane, {
                    lazy: true,
                    label: `视频${unref(a).artistTitle.videoCount}`,
                    name: "three"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(KeepAlive, null, [
                        activeName.value == "three" ? (openBlock(), createBlock(_sfc_main$2, {
                          key: 0,
                          id: id.value
                        }, null, 8, ["id"])) : createCommentVNode("", true)
                      ], 1024))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_el_tab_pane, {
                    lazy: true,
                    label: "详情",
                    name: "four"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(KeepAlive, null, [
                        activeName.value == "four" ? (openBlock(), createBlock(_sfc_main$1, {
                          key: 0,
                          id: id.value
                        }, null, 8, ["id"])) : createCommentVNode("", true)
                      ], 1024))
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
const ArtistDetail_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as default
};
