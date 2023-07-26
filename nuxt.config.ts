export default defineNuxtConfig({
  target: "static",
  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/custom.scss'
  ],
  modules: [
    '@pinia/nuxt',
  ],

  imports: {
    dirs: ['./stores'],
  },

  app: {
    baseURL: '/simonskripnick-frontend/',
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
})
