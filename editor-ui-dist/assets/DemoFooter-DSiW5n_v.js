import { L as LogsPanel } from "./LogsPanel-CS0tuh-e.js";
import { d as defineComponent, p as useSettingsStore, Q as useWorkflowsStore, q as computed, e as createBlock, f as createCommentVNode, m as unref, g as openBlock } from "./index-D8v8gZjG.js";
import "./useClearExecutionButtonVisible-Bp0MHmpE.js";
import "./useCanvasOperations-DPk5Yp03.js";
import "./RunData-BMYKP5yG.js";
import "./FileSaver.min-D380euQa.js";
import "./useExecutionHelpers-D4KiXGYA.js";
import "./dateFormatter-DAU-vxUn.js";
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
