<script setup>
const props = defineProps({
  active: {
    type: Number,
    required: true,
  },
});

defineEmits(["setActive"]);

const route = useRoute();

const isActive = (index) => {
  return props.active === index;
};
</script>

<template>
  <div class="flex">
    <NuxtLink
      :to="`/script/${route.params.name}/terminal`"
      @click="() => $emit('setActive', 0)"
      :class="{
        'bg-theme-gold': isActive(0),
        'double-shadow-left': isActive(0),
      }"
      class="grow flex justify-center items-center py-[10px] border-theme-dark-100 border rounded-l"
    >
      <p class="italic text-[14px]">TERMINAL</p>
    </NuxtLink>
    <NuxtLink
      :to="`/script/${route.params.name}/preview`"
      @click="() => $emit('setActive', 1)"
      :class="{
        'bg-theme-gold': isActive(1),
        'double-shadow-right': isActive(1),
      }"
      class="grow flex justify-center items-center py-[10px] border-theme-dark-100 border border-l-0"
    >
      <p class="italic text-[14px]">HISTORY</p>
    </NuxtLink>
    <NuxtLink
      :to="`/script/${route.params.name}/preview`"
      @click="() => $emit('setActive', 1)"
      :class="{
        'bg-theme-gold': isActive(1),
        'double-shadow-right': isActive(1),
      }"
      class="grow flex justify-center items-center py-[10px] border-theme-dark-100 border rounded-r border-l-0"
    >
      <p class="italic text-[14px]">PREVIEW</p>
    </NuxtLink>
  </div>
</template>

<style scoped>
.double-shadow-left {
  box-shadow: -2px 2px 0px 0px rgba(51, 65, 85, 1),
    -1px 1px 0px 0px rgba(51, 65, 85, 1);
}

.double-shadow-right {
  box-shadow: 1px 1px 0px 0px rgba(51, 65, 85, 1),
    2px 2px 0px 0px rgba(51, 65, 85, 1);
}
</style>
