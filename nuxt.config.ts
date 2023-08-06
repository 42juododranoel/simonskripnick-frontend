export default defineNuxtConfig({
  pages: true,
  
  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/custom.scss'
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/sanity', 
  ],

  imports: {
    dirs: ['./stores'],
  },

  app: {
    head: {
      title: "Simon Skripnick’s Website",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  sanity: {
    projectId: 'g03uathm',
    dataset: 'production',
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  nitro: {
    routeRules: {
      '/proxy/editor/**': {proxy: {to: 'https://simonskripnick-editor.onrender.com/**'}},
    }
  }
})
