<script setup>
const layoutStore = useLayoutStore();
const showLoginForm = computed(() => layoutStore.layout === "login");

const hideLoginForm = () => {
  layoutStore.layout = "default";
};
</script>

<template>
  <LoginForm v-if="showLoginForm" @loggedin="hideLoginForm" />
  <PageWithScripts v-else />
</template>
