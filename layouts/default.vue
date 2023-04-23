<script setup></script>

<template>
  <div class="h-screen flex flex-col">
    <!-- Navbar with logo -->
    <div
      class="bg-theme-dark shadow flex justify-center items-center py-[38px]"
    >
      <NuxtLink to="/" class="text-theme-gold italic text-[32px]">HUB</NuxtLink>
    </div>
    <div
      class="bg-theme-dark-200 p-5 space-y-[20px] flex flex-col grow min-h-0"
    >
      <!-- Active users -->
      <ActiveUsers />

      <!-- Main Body -->
      <div class="bg-theme-white rounded shadow grow min-h-0 flex flex-col">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-height {
  height: calc(100% - 124px);
}

.main-body-height {
  height: calc(100% - 89px - 20px);
}
</style>
