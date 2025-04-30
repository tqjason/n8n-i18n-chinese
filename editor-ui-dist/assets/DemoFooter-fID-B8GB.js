import { L as LogsPanel } from "./LogsPanel-Bh2xT3fm.js";
import { d as defineComponent, p as useSettingsStore, U as useWorkflowsStore, q as computed, e as createBlock, f as createCommentVNode, m as unref, g as openBlock } from "./index-C5ZAIWc3.js";
import "./useClearExecutionButtonVisible-Ds4ZmiUq.js";
import "./useCanvasOperations-DEXS_bfW.js";
import "./RunData-BBgJR9Yf.js";
import "./FileSaver.min-KNC71-iC.js";
import "./useExecutionHelpers-De5Y9FWJ.js";
import "./dateFormatter-CzFASGnk.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFooter",
  setup(__props) {
    const { isNewLogsEnabled } = useSettingsStore();
    const workflowsStore = useWorkflowsStore();
    const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
    return (_ctx, _cache) => {
      return unref(isNewLogsEnabled) && hasExecutionData.value ? (openBlock(), createBlock(LogsPanel, {
        key: 0,
        "is-read-only": true
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
