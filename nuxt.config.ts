export default defineNuxtConfig({
  pages: true,

  css: ["~/assets/scss/main.scss"],
  modules: [
    "@pinia/nuxt", 
    "@nuxtjs/sanity",
    "nuxt-proxy",
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

  proxy: {
    options: {
      target: "https://simonskripnick-editor.onrender.com",
      changeOrigin: true,
      pathFilter: [
        "/api/v1.0.0/analyzer/analyze-document",
      ]
    }
  }
})
