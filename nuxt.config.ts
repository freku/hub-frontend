// @ts-nocheck
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: true,

  runtimeConfig: {
    public: {
      baseURL: 'http://localhost:3000/',
    },
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  imports: {
    dirs: ['componenets/**', 'stores/**'],
  },

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  modules: [
    '@pinia/nuxt',
  ],

  pinia: {
    autoImports: ['defineStore']
  }

  // TODO: add proxy for api endpoints (can it disable cors?)
  
  // TODO: use typescript and refactor code with it
  // typescript: {
  //   typeCheck: true,
  // }
})
