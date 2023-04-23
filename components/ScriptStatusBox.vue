<script setup>
import { SCRIPT_STATUS } from "~/constants/SCRIPT_STATUS";

const props = defineProps({
  script: {
    type: Object,
    required: true,
  },
  textClass: {
    type: String,
    default: "text-xs",
  },
});

const isRunning = computed(() => {
  return props.script.status === SCRIPT_STATUS.RUNNING;
});

const runningStyles = computed(() => {
  if (isRunning.value) {
    return {
      "text-theme-gold": true,
      "gold-shadow": true,
    };
  }
});

const placeholder = computed(() => {
  if (isRunning.value) {
    return props.script.runBy.username;
  } else {
    return "IDLE";
  }
});
</script>

<template>
  <div
    class="px-[10px] py-[4px] space-x-[10px] flex items-center bg-theme-dark rounded shadow"
    :class="runningStyles"
  >
    <p
      class="italic"
      :class="{
        'text-theme-dark-200': !isRunning,
        'text-theme-gold': isRunning,
        [textClass]: true,
      }"
    >
      {{ placeholder }}
    </p>
    <IconsGear v-if="isRunning" class="w-3 h-3" />
  </div>
</template>
