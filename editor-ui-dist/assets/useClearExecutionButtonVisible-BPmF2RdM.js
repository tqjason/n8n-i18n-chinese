import { U as useRoute, a2 as useSourceControlStore, T as useWorkflowsStore, q as computed, b as useRouter, bv as useNodeTypesStore, bN as START_NODE_TYPE } from "./index-CiIsbhGU.js";
import { c as useCanvasOperations } from "./useCanvasOperations-mslYXO4A.js";
function useClearExecutionButtonVisible() {
  const route = useRoute();
  const sourceControlStore = useSourceControlStore();
  const workflowsStore = useWorkflowsStore();
  const workflowExecutionData = computed(() => workflowsStore.workflowExecutionData);
  const isWorkflowRunning = computed(() => workflowsStore.isWorkflowRunning);
  const isReadOnlyRoute = computed(() => !!route?.meta?.readOnlyCanvas);
  const router = useRouter();
  const { editableWorkflow } = useCanvasOperations({ router });
  const nodeTypesStore = useNodeTypesStore();
  const isReadOnlyEnvironment = computed(() => sourceControlStore.preferences.branchReadOnly);
  const allTriggerNodesDisabled = computed(
    () => editableWorkflow.value.nodes.filter((node) => node.type === START_NODE_TYPE || nodeTypesStore.isTriggerNode(node.type)).every((node) => node.disabled)
  );
  return computed(
    () => !isReadOnlyRoute.value && !isReadOnlyEnvironment.value && !isWorkflowRunning.value && !allTriggerNodesDisabled.value && workflowExecutionData.value
  );
}
export {
  useClearExecutionButtonVisible as u
};
