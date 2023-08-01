import { R as buildProps, S as useSizeProp, U as UPDATE_MODEL_EVENT, V as isString, W as isNumber, X as isBoolean, Y as CHANGE_EVENT, r as ref, Z as inject, N as computed, $ as useFormSize, a0 as useFormDisabled, d as defineComponent, a1 as useNamespace, f as openBlock, h as createElementBlock, i as createBaseVNode, l as withDirectives, a2 as vModelRadio, n as unref, a3 as isRef, a4 as normalizeClass, a5 as renderSlot, m as withModifiers, a6 as _export_sfc, I as nextTick, a7 as createTextVNode, t as toDisplayString, a8 as normalizeStyle, a9 as useId, aa as useFormItem, ab as useFormItemInputId, o as onMounted, G as provide, ac as reactive, ad as toRefs, H as watch, ae as debugWarn, af as withInstall, ag as withNoopInstall, ah as defineStore, ai as useArtistapi, g as createBlock, w as withCtx, k as renderList, F as Fragment, a as useRouter, e as resolveDirective, j as createVNode, T as Transition, v as vShow, q as createCommentVNode } from "./index-3d9a4c14.js";
import { u as useArtist } from "./artist-9fa04616.js";
const radioPropsBase = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
});
const radioProps = buildProps({
  ...radioPropsBase,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
});
const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const radioGroupKey = Symbol("radioGroupKey");
const useRadio = (props, emit) => {
  const radioRef = ref();
  const radioGroup = inject(radioGroupKey, void 0);
  const isGroup = computed(() => !!radioGroup);
  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroup.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emit && emit(UPDATE_MODEL_EVENT, val);
      }
      radioRef.value.checked = props.modelValue === props.label;
    }
  });
  const size = useFormSize(computed(() => radioGroup == null ? void 0 : radioGroup.size));
  const disabled = useFormDisabled(computed(() => radioGroup == null ? void 0 : radioGroup.disabled));
  const focus = ref(false);
  const tabIndex = computed(() => {
    return disabled.value || isGroup.value && modelValue.value !== props.label ? -1 : 0;
  });
  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue
  };
};
const _hoisted_1$3 = ["value", "name", "disabled"];
const __default__$2 = defineComponent({
  name: "ElRadio"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: radioProps,
  emits: radioEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, radioGroup, focus, size, disabled, modelValue } = useRadio(props, emit);
    function handleChange() {
      nextTick(() => emit("change", modelValue.value));
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).is("disabled", unref(disabled)),
          unref(ns).is("focus", unref(focus)),
          unref(ns).is("bordered", _ctx.border),
          unref(ns).is("checked", unref(modelValue) === _ctx.label),
          unref(ns).m(unref(size))
        ])
      }, [
        createBaseVNode("span", {
          class: normalizeClass([
            unref(ns).e("input"),
            unref(ns).is("disabled", unref(disabled)),
            unref(ns).is("checked", unref(modelValue) === _ctx.label)
          ])
        }, [
          withDirectives(createBaseVNode("input", {
            ref_key: "radioRef",
            ref: radioRef,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
            class: normalizeClass(unref(ns).e("original")),
            value: _ctx.label,
            name: _ctx.name || ((_a = unref(radioGroup)) == null ? void 0 : _a.name),
            disabled: unref(disabled),
            type: "radio",
            onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
            onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
            onChange: handleChange
          }, null, 42, _hoisted_1$3), [
            [vModelRadio, unref(modelValue)]
          ]),
          createBaseVNode("span", {
            class: normalizeClass(unref(ns).e("inner"))
          }, null, 2)
        ], 2),
        createBaseVNode("span", {
          class: normalizeClass(unref(ns).e("label")),
          onKeydown: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
const radioButtonProps = buildProps({
  ...radioPropsBase,
  name: {
    type: String,
    default: ""
  }
});
const _hoisted_1$2 = ["value", "name", "disabled"];
const __default__$1 = defineComponent({
  name: "ElRadioButton"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: radioButtonProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, focus, size, disabled, modelValue, radioGroup } = useRadio(props);
    const activeStyle = computed(() => {
      return {
        backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
        color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
      };
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns).b("button"),
          unref(ns).is("active", unref(modelValue) === _ctx.label),
          unref(ns).is("disabled", unref(disabled)),
          unref(ns).is("focus", unref(focus)),
          unref(ns).bm("button", unref(size))
        ])
      }, [
        withDirectives(createBaseVNode("input", {
          ref_key: "radioRef",
          ref: radioRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original-radio")),
          value: _ctx.label,
          type: "radio",
          name: _ctx.name || ((_a = unref(radioGroup)) == null ? void 0 : _a.name),
          disabled: unref(disabled),
          onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
          onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false)
        }, null, 42, _hoisted_1$2), [
          [vModelRadio, unref(modelValue)]
        ]),
        createBaseVNode("span", {
          class: normalizeClass(unref(ns).be("button", "inner")),
          style: normalizeStyle(unref(modelValue) === _ctx.label ? unref(activeStyle) : {}),
          onKeydown: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var RadioButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
const radioGroupProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const radioGroupEmits = radioEmits;
const _hoisted_1$1 = ["id", "aria-label", "aria-labelledby"];
const __default__ = defineComponent({
  name: "ElRadioGroup"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const radioId = useId();
    const radioGroupRef = ref();
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => emit("change", value));
    };
    onMounted(() => {
      const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
      const firstLabel = radios[0];
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0;
      }
    });
    const name = computed(() => {
      return props.name || radioId.value;
    });
    provide(radioGroupKey, reactive({
      ...toRefs(props),
      changeEvent,
      name
    }));
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(groupId),
        ref_key: "radioGroupRef",
        ref: radioGroupRef,
        class: normalizeClass(unref(ns).b("group")),
        role: "radiogroup",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "radio-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? unref(formItem).labelId : void 0
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$1);
    };
  }
});
var RadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
withInstall(Radio, {
  RadioButton,
  RadioGroup
});
const ElRadioGroup = withNoopInstall(RadioGroup);
const ElRadioButton = withNoopInstall(RadioButton);
const area = ref([
  { name: "全部", area: -1 },
  { name: "华语", area: 7 },
  { name: "欧美", area: 96 },
  { name: "日本", area: 8 },
  { name: "韩国", area: 16 },
  { name: "其他", area: 0 }
]);
const type = ref([
  { name: "全部", type: -1 },
  { name: "男歌手", type: 1 },
  { name: "女歌手", type: 2 },
  { name: "乐队组合", type: 3 }
]);
const initial = ref([
  { name: "热门", initial: -1 },
  { name: "A", initial: "a" },
  { name: "B", initial: "b" },
  { name: "C", initial: "c" },
  { name: "D", initial: "d" },
  { name: "E", initial: "e" },
  { name: "F", initial: "f" },
  { name: "G", initial: "g" },
  { name: "H", initial: "h" },
  { name: "I", initial: "i" },
  { name: "J", initial: "j" },
  { name: "K", initial: "k" },
  { name: "L", initial: "l" },
  { name: "M", initial: "m" },
  { name: "N", initial: "n" },
  { name: "O", initial: "o" },
  { name: "P", initial: "p" },
  { name: "Q", initial: "q" },
  { name: "R", initial: "r" },
  { name: "S", initial: "s" },
  { name: "T", initial: "t" },
  { name: "U", initial: "u" },
  { name: "V", initial: "v" },
  { name: "W", initial: "w" },
  { name: "X", initial: "x" },
  { name: "Y", initial: "y" },
  { name: "Z", initial: "z" },
  { name: "#", initial: 0 }
]);
const elRadioGroup = "";
const elRadioButton = "";
const loadAdd = defineStore("loadAdd", {
  state: () => {
    return {
      limitAdd: 0,
      showLode: true
    };
  },
  getters: {},
  actions: {}
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Tab",
  props: ["types"],
  emits: ["artists"],
  setup(__props, { emit }) {
    const props = __props;
    const tabPosition = ref("全部");
    const area2 = ref(-1);
    const type2 = ref(-1);
    const initial2 = ref(-1);
    const artists = ref();
    const getartist = (item) => {
      if (Reflect.has(item, "area")) {
        area2.value = item.area;
        sessionStorage.setItem("area", area2.value);
      } else if (Reflect.has(item, "type")) {
        type2.value = item.type;
        sessionStorage.setItem("type", type2.value);
      } else if (Reflect.has(item, "initial")) {
        initial2.value = item.initial;
        sessionStorage.setItem("initial", initial2.value);
      }
    };
    const loading = loadAdd();
    onMounted(async () => {
      sessionStorage.setItem("area", area2.value);
      sessionStorage.setItem("type", type2.value);
      sessionStorage.setItem("initial", initial2.value);
      artists.value = await useArtistapi(sessionStorage.getItem("area"), sessionStorage.getItem("type"), sessionStorage.getItem("initial"));
      emit("artists", artists.value);
    });
    watch([area2, type2, initial2], async () => {
      artists.value = await useArtistapi(sessionStorage.getItem("area"), sessionStorage.getItem("type"), sessionStorage.getItem("initial"));
      emit("artists", artists.value);
      loading.limitAdd = 0;
      loading.showLode = true;
    });
    watch(() => loading.limitAdd, async (newValue) => {
      if (newValue == 0)
        return;
      if (newValue <= 40) {
        let songs = await useArtistapi(sessionStorage.getItem("area"), sessionStorage.getItem("type"), sessionStorage.getItem("initial"), newValue + 60);
        artists.value = songs;
        emit("artists", artists.value);
      }
      if (newValue >= 40) {
        loading.showLode = false;
      } else {
        loading.showLode = true;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_radio_button = ElRadioButton;
      const _component_el_radio_group = ElRadioGroup;
      return openBlock(), createBlock(_component_el_radio_group, {
        modelValue: tabPosition.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tabPosition.value = $event)
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.types, (item) => {
            return openBlock(), createBlock(_component_el_radio_button, {
              label: item.name,
              onClick: ($event) => getartist(item)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.name), 1)
              ]),
              _: 2
            }, 1032, ["label", "onClick"]);
          }), 256))
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Tab_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "artist" };
const _hoisted_2 = { class: "items" };
const _hoisted_3 = {
  key: 0,
  class: "datas"
};
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { alt: "" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "artist",
  setup(__props) {
    const tabs = ref([{ id: "1", name: "语种：", type: area }, { id: "2", name: "分类：", type }, { id: "3", name: "筛选：", type: initial }]);
    const artist = ref();
    const a = useArtist();
    const router = useRouter();
    const getArtists = (artists) => {
      artist.value = artists;
    };
    const Artists = (id) => {
      a.getArtistTitle(id);
      router.push({ path: "/artistdetail", query: { id } });
    };
    const loading = loadAdd();
    const load = () => {
      loading.limitAdd += 10;
    };
    return (_ctx, _cache) => {
      const _directive_lazy = resolveDirective("lazy");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (item) => {
            return openBlock(), createElementBlock("div", {
              class: "item",
              key: item.id
            }, [
              createBaseVNode("span", null, toDisplayString(item.name), 1),
              createVNode(_sfc_main$1, {
                types: item.type,
                onArtists: getArtists
              }, null, 8, ["types"])
            ]);
          }), 128))
        ]),
        createVNode(Transition, null, {
          default: withCtx(() => [
            artist.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(artist.value, (item) => {
                return openBlock(), createElementBlock("div", {
                  class: "data",
                  onClick: ($event) => Artists(item.id),
                  key: item.id
                }, [
                  withDirectives(createBaseVNode("img", _hoisted_5, null, 512), [
                    [_directive_lazy, item.img1v1Url]
                  ]),
                  createBaseVNode("div", null, toDisplayString(item.name), 1)
                ], 8, _hoisted_4);
              }), 128)),
              withDirectives(createBaseVNode("div", {
                class: "loading",
                onClick: load
              }, "加载更多", 512), [
                [vShow, unref(loading).showLode]
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const artist_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as _
};
