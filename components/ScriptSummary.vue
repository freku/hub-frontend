<script setup>
import { SCRIPT_STATUS } from "~/constants/SCRIPT_STATUS";
import { useScriptStore } from "~/stores/script";

const socketStore = useSocketStore();
const scriptStore = useScriptStore();
const route = useRoute();

socketStore.socket.on("script:status", (src) => {
  scriptStore.$patch({ script: src });
});

const { refresh: _runScript } = useLazyFetch("run-script", {
  method: "post",
  body: {
    scriptName: route.params.name,
  },
  ...basicWithCredentials(),
  ...redirectToLoginOnForbiddenResponse(),
});

const { refresh: _cancelScript } = useLazyFetch("cancel-script", {
  method: "post",
  body: {
    scriptName: route.params.name,
  },
  ...basicWithCredentials(),
  ...redirectToLoginOnForbiddenResponse(),
});

const lastRunDate = computed(() => {
  if (scriptStore.script) {
    return formattedLastRunTime(scriptStore.script.updatedAt);
  } else {
    return null;
  }
});

const runScript = () => {
  if (scriptStore.script.status !== SCRIPT_STATUS.RUNNING) {
    _runScript();
  }
};

const cancelScript = () => {
  if (scriptStore.script.status === SCRIPT_STATUS.RUNNING) {
    _cancelScript();
  }
};

const isRunning = computed(() => {
  return scriptStore.script.status === SCRIPT_STATUS.RUNNING;
});
// TODO: animation for buttons and script status box
</script>

<template>
  <div
    class="bg-theme-dark-200 space-y-[10px] rounded shadow p-[10px] flex flex-col"
  >
    <div class="flex justify-between items-center">
      <p class="text-xs">STATUS</p>

      <ScriptStatusBox v-if="scriptStore.script" :script="scriptStore.script" />
    </div>

    <div>
      <div class="flex justify-between items-center">
        <p class="text-xs">LAST RUN</p>

        <p class="text-xs">{{ lastRunDate }}</p>
      </div>
    </div>

    <div class="p-[5px] flex justify-center items-center space-x-5">
      <button
        @click="runScript"
        class="text-sm py-[5px] rounded shadow w-20 italic"
        :class="{
          'bg-theme-green': !isRunning,
          'bg-theme-green-transparent': isRunning,
          'text-theme-dark-100-transparent': isRunning,
        }"
      >
        RUN
      </button>
      <button
        @click="cancelScript"
        class="text-sm bg-theme-red py-[5px] rounded shadow w-20 italic"
        :class="{
          'bg-theme-red': isRunning,
          'bg-theme-red-transparent': !isRunning,
          'text-theme-dark-100-transparent': !isRunning,
        }"
      >
        CANCEL
      </button>
    </div>
  </div>
</template>
