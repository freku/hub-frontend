<script setup>
import { StatusCodes } from "http-status-codes";

const route = useRoute();

const layoutStore = useLayoutStore();
const usersStore = useUsersStore();

useLazyFetch("user", {
  method: "get",
  watch: [route],
  ...basicWithCredentials({ immediate: true }),
  onResponse({ response }) {
    setTimeout(async () => {
      if (response.status === StatusCodes.OK) {
        layoutStore.layout = "default";
      } else {
        layoutStore.layout = "login";
        return await navigateTo("/");
      }
    }, 750);
  },
});

const { data: users, refresh: fetchUsers } = useLazyFetch("users", {
  method: "get",
  ...basicWithCredentials(),
});

watch(
  () => layoutStore.layout,
  async (layout) => {
    if (layout === "default") {
      const socketStore = useSocketStore();

      await fetchUsers();
      usersStore.addUsers(users.value);

      if (socketStore.sockets.status.connected) {
        socketStore.disconnectStatus();
      }

      socketStore.connectStatus();
      console.log("🙈 status namespace connected");

      socketStore.statusSocket.on("user:joined", (id) => {
        console.log("🙈 user joined");
        usersStore.setUserActive(id);
      });

      socketStore.statusSocket.on("user:left", (id) => {
        console.log("🙈 user left");
        usersStore.setUserInactive(id);
      });
    }
  }
);
</script>

<template>
  <div class="text-theme-dark-100">
    <NuxtLayout :name="layoutStore.layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s cubic-bezier(0.22, 0.68, 0, 1.71);
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
