<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="relative">
      <img src="/img/pfp.jpg" alt="pfp" class="w-12 h-12 rounded-full" />
      <div
        class="absolute w-[10px] h-[10px] rounded-full z-10 bottom-[2.5px] right-[2.5px]"
        :class="{
          'bg-theme-green': user.active,
          'bg-theme-red': !user.active,
        }"
      ></div>
    </div>
    <p class="text-xs mt-[5px] text-theme-dark-100">{{ user.username }}</p>
  </div>
</template>
