<script setup>
import { useTabsStore } from "~/stores/tabs";

const route = useRoute();

const tabsStore = useTabsStore();
tabsStore.active = 0;

const socketStore = useSocketStore();

socketStore.connect({
  scriptName: route.params.name,
});

onUnmounted(() => {
  socketStore.disconnect();
});
</script>

<template>
  <div class="grow flex flex-col min-h-0 space-y-5">
    <ScriptSummary />

    <Terminal />
  </div>
</template>
