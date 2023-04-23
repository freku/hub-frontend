<script setup>
import { SCRIPT_STATUS } from "~/constants/SCRIPT_STATUS";

const props = defineProps({
  script: {
    type: Object,
    required: true,
  },
});

const isRunning = computed(() => {
  return props.script.status === SCRIPT_STATUS.RUNNING;
});
</script>

<template>
  <NuxtLink
    :to="'/script/' + script.name + '/terminal'"
    class="bg-theme-dark-200 p-[10px] shadow flex items-center justify-between rounded"
  >
    <div class="flex items-center space-x-">
      <IconsScript
        :class="{ 'text-theme-dark-100-transparent': isRunning }"
        class="w-[18px] h-[18px] mr-[10px]"
      />
      <p
        class="text-xs"
        :class="{ 'text-theme-dark-100-transparent': isRunning }"
      >
        {{ script.name }}
      </p>
    </div>

    <ScriptStatusBox :script="script" />
  </NuxtLink>
</template>
