<script setup>
import { StatusCodes } from "http-status-codes";

const emit = defineEmits(["loggedin"]);

const email = ref("");
const password = ref("");

const {
  data: response,
  pending: loading,
  error,
  execute: loginSubmit,
} = await useFetch("login", {
  method: "post",
  watch: false,
  body: {
    email: email,
    password: password,
  },
  ...basicWithCredentials(),
  onResponse({ response }) {
    if (response.status === StatusCodes.OK) {
      emit("loggedin");
    }
  },
});
loading.value = false;
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <div class="text-center pb-[30px]">
      <p class="text-theme-gold text-5xl italic">HUB</p>
    </div>
    <form @submit.prevent="loginSubmit" class="w-64 flex flex-col items-center">
      <Input
        type="email"
        placeholder="E-mail"
        class="mb-[10px]"
        v-model="email"
        :has-error="Boolean(error)"
      />
      <Input
        type="password"
        placeholder="Password"
        class="mb-[20px]"
        v-model="password"
        :has-error="Boolean(error)"
      />

      <button
        :class="{
          'bg-theme-gold': !loading,
          'bg-theme-gold-transparent': loading,
        }"
        class="w-full shadow-md rounded italic py-[10px] text-xs text-theme-dark-100"
      >
        Submit
      </button>

      <p
        :class="{ invisible: !error }"
        class="text-theme-red font-sans text-xs text-center py-[10px]"
      >
        {{ error?.data?.message ?? "Something in the waaaay" }}
      </p>
    </form>
  </div>
</template>
