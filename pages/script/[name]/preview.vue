<script setup>
import { useTabsStore } from "~/stores/tabs";

const tabsStore = useTabsStore();
tabsStore.active = 1;

const scriptStore = useScriptStore();
</script>

<template>
  <highlightjs
    language="bash"
    :code="scriptStore.script.content ?? ''"
    class="rounded shadow overflow-auto text-xs"
  />
</template>

<style>
.hljs {
  padding: 10px !important;
}
</style>
