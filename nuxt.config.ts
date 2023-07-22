// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  target: "static",
  css: ['~/assets/main.css'],
  modules: [
    // pinia plugin
    '@pinia/nuxt',
  ],

  imports: {
    dirs: ['./stores'],
  },

  router: {
    base: '/typeflowrhyme/'
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
})
