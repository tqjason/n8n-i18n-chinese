import { d as defineComponent, $ as useCssModule, q as computed, c as useI18n, h as resolveComponent, i as createElementBlock, f as createCommentVNode, g as openBlock, j as createVNode, e as createBlock, w as withCtx, l as createTextVNode, t as toDisplayString, m as unref, n as normalizeClass, F as Fragment, D as renderList, k as createBaseVNode, gC as INSIGHT_IMPACT_TYPES, gD as INSIGHTS_UNIT_IMPACT_MAPPING, _ as _export_sfc } from "./index-CiIsbhGU.js";
const smartDecimal = (value, decimals = 2) => {
  if (Number.isInteger(value)) {
    return value;
  }
  if (value.toString().split(".")[1].length <= decimals) {
    return value;
  }
  return Number(value.toFixed(decimals));
};
const _hoisted_1 = {
  key: 1,
  "data-test-id": "insights-summary-tabs"
};
const _hoisted_2 = ["data-test-id"];
const _hoisted_3 = { href: "#" };
const _hoisted_4 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsSummary",
  props: {
    summary: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    const i18n = useI18n();
    const $style = useCssModule();
    const summaryTitles = computed(() => ({
      total: i18n.baseText("insights.banner.title.total"),
      failed: i18n.baseText("insights.banner.title.failed"),
      failureRate: i18n.baseText("insights.banner.title.failureRate"),
      timeSaved: i18n.baseText("insights.banner.title.timeSaved"),
      averageRunTime: i18n.baseText("insights.banner.title.averageRunTime")
    }));
    const getSign = (n) => n > 0 ? "+" : void 0;
    const getImpactStyle = (id, value) => {
      const impact = INSIGHTS_UNIT_IMPACT_MAPPING[id];
      if (value === 0 || impact === INSIGHT_IMPACT_TYPES.NEUTRAL) {
        return $style.neutral;
      }
      if (impact === INSIGHT_IMPACT_TYPES.POSITIVE) {
        return value > 0 ? $style.positive : $style.negative;
      }
      if (impact === INSIGHT_IMPACT_TYPES.NEGATIVE) {
        return value < 0 ? $style.positive : $style.negative;
      }
      return $style.neutral;
    };
    return (_ctx, _cache) => {
      const _component_N8nHeading = resolveComponent("N8nHeading");
      const _component_N8nLoading = resolveComponent("N8nLoading");
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_N8nIcon = resolveComponent("N8nIcon");
      const _component_N8nTooltip = resolveComponent("N8nTooltip");
      return _ctx.summary.length ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref($style).insights)
      }, [
        createVNode(_component_N8nHeading, {
          bold: "",
          tag: "h3",
          size: "small",
          color: "text-light",
          class: "mb-xs"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.title", { interpolate: { count: 7 } })), 1)
          ]),
          _: 1
        }),
        _ctx.loading ? (openBlock(), createBlock(_component_N8nLoading, {
          key: 0,
          class: normalizeClass(unref($style).loading),
          cols: 5
        }, null, 8, ["class"])) : (openBlock(), createElementBlock("ul", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.summary, ({ id, value, deviation, unit }) => {
            return openBlock(), createElementBlock("li", {
              key: id,
              "data-test-id": `insights-summary-tab-${id}`
            }, [
              createBaseVNode("p", null, [
                createBaseVNode("strong", null, toDisplayString(summaryTitles.value[id]), 1),
                value === 0 && id === "timeSaved" ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(unref($style).empty)
                }, [
                  _cache[0] || (_cache[0] = createBaseVNode("em", null, "--", -1)),
                  createBaseVNode("small", null, [
                    createVNode(_component_N8nTooltip, { placement: "bottom" }, {
                      content: withCtx(() => [
                        createVNode(_component_i18n_t, { keypath: "insights.banner.timeSaved.tooltip" }, {
                          link: withCtx(() => [
                            createBaseVNode("a", _hoisted_3, toDisplayString(unref(i18n).baseText("insights.banner.timeSaved.tooltip.link.text")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_N8nIcon, {
                          class: normalizeClass(unref($style).icon),
                          icon: "info-circle"
                        }, null, 8, ["class"])
                      ]),
                      _: 1
                    })
                  ])
                ], 2)) : (openBlock(), createElementBlock("span", _hoisted_4, [
                  createBaseVNode("em", null, [
                    createTextVNode(toDisplayString(unref(smartDecimal)(value)) + " ", 1),
                    createBaseVNode("i", null, toDisplayString(unit), 1)
                  ]),
                  deviation !== null ? (openBlock(), createElementBlock("small", {
                    key: 0,
                    class: normalizeClass(getImpactStyle(id, deviation))
                  }, [
                    createVNode(_component_N8nIcon, {
                      class: normalizeClass([unref($style).icon, getImpactStyle(id, deviation)]),
                      icon: deviation === 0 ? "caret-right" : deviation > 0 ? "caret-up" : "caret-down"
                    }, null, 8, ["class", "icon"]),
                    createTextVNode(" " + toDisplayString(getSign(deviation)) + toDisplayString(unref(smartDecimal)(deviation)), 1)
                  ], 2)) : createCommentVNode("", true)
                ]))
              ])
            ], 8, _hoisted_2);
          }), 128))
        ]))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const insights = "_insights_1r55j_123";
const empty = "_empty_1r55j_165";
const icon = "_icon_1r55j_173";
const positive = "_positive_1r55j_206";
const negative = "_negative_1r55j_210";
const neutral = "_neutral_1r55j_214";
const loading = "_loading_1r55j_229";
const style0 = {
  insights,
  empty,
  icon,
  positive,
  negative,
  neutral,
  loading
};
const cssModules = {
  "$style": style0
};
const InsightsSummary = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  InsightsSummary as I
};
