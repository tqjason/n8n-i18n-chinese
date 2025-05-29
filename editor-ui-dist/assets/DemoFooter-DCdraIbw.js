import { L as LogsPanel } from "./LogsPanel-CHSctpIr.js";
import { d as defineComponent, p as useSettingsStore, Q as useWorkflowsStore, q as computed, e as createBlock, f as createCommentVNode, m as unref, g as openBlock } from "./index-CR5-01UX.js";
import "./useClearExecutionButtonVisible-eY59o3wq.js";
import "./RunData-DWJ1KA7L.js";
import "./FileSaver.min-C-VGwGQ3.js";
import "./useExecutionHelpers-DSWfA_CX.js";
import "./dateFormatter-B_7DtfUQ.js";
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
