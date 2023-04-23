<script setup>
defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  hasError: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="w-full font-sans rounded p-[10px] mb-[10px] bg-theme-dark-100 shadow-md text-theme-white-transparent text-xs"
    :class="{ 'border border-theme-red': hasError }"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
