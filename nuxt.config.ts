export default defineNuxtConfig({
  target: "static",
  css: ['~/assets/main.css'],
  modules: [
    '@pinia/nuxt',
  ],

  imports: {
    dirs: ['./stores'],
  },

  app: {
    baseURL: '/typeflowrhyme/',
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
})
