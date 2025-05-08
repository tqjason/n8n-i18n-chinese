import { L as LogsPanel } from "./LogsPanel-Cm1E4fAx.js";
import { d as defineComponent, p as useSettingsStore, Q as useWorkflowsStore, q as computed, e as createBlock, f as createCommentVNode, m as unref, g as openBlock } from "./index-Bf46YES4.js";
import "./useClearExecutionButtonVisible-CCqB74wy.js";
import "./useCanvasOperations-DUYY7Kt8.js";
import "./RunData-DKyZV84f.js";
import "./FileSaver.min-URqW7Isj.js";
import "./useExecutionHelpers-D5JZslEc.js";
import "./dateFormatter-XTNcqYAz.js";
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
