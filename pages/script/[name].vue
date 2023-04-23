<script setup>
import { useScriptStore } from "~/stores/script";
import { useTabsStore } from "~/stores/tabs";

const router = useRouter();
const route = useRoute();
const tabsStore = useTabsStore();
const scriptStore = useScriptStore();

if (route.path === `/script/${route.params.name}`) {
  router.push(`/script/${route.params.name}/terminal`);
}

const setActive = (index) => {
  tabsStore.active = index;
};

await useLazyFetch(`script/${route.params.name}`, {
  method: "get",
  ...basicWithCredentials({ immediate: true }),
  onResponse({ response }) {
    scriptStore.$patch({ script: response._data });
  },
});
</script>

<template>
  <ScriptContainer :active="tabsStore.active" @set-active="setActive">
    <NuxtPage />
  </ScriptContainer>
</template>
