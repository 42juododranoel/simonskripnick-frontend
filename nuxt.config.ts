export default defineNuxtConfig({
  pages: true,

  css: ["~/assets/scss/main.scss"],
  modules: [
    "@pinia/nuxt", 
    "@nuxtjs/sanity", 
    ["@nuxtjs/google-fonts", {
      families: {
        "Fira Code": true,
        "PT Sans": true,
        "PT Serif": true,
        "PT Sans Caption": {
          wght: [700],
        }
      }
    }]
  ],

  imports: {
    dirs: ["./stores"],
  },

  app: {
    head: {
      title: "Simon Skripnick’s Blog",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  sanity: {
    projectId: "g03uathm",
    dataset: "production",
  },

  nitro: {
    routeRules: {
      "/proxy/editor/**": {
        proxy: { to: "https://simonskripnick-editor.onrender.com/**" },
      },
    },
  },
})
