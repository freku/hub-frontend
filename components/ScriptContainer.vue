<script setup>
const route = useRoute();

defineEmits(["setActive"]);

const props = defineProps({
  active: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="grow flex flex-col min-h-0">
    <div
      class="flex justify-center items-center py-[15px] mx-[10px] border-b-2"
    >
      <p class="text-2xl">{{ route.params.name }}</p>
    </div>
    <div class="p-5 flex flex-col grow space-y-5 min-h-0">
      <Tabs :active="active" @set-active="$emit('setActive', $event)" />

      <slot />
    </div>
  </div>
</template>
