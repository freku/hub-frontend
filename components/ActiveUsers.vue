<script setup>
const usersStore = useUsersStore();
</script>

<template>
  <div
    class="bg-theme-white shadow rounded space-x-[10px] flex justify-center items-center p-[10px]"
  >
    <UserStatus
      v-for="user in usersStore.users"
      :key="user.name"
      :user="user"
    />
  </div>
</template>
