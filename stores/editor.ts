import { defineStore } from "pinia"

export const useEditor = defineStore("editor", {
  state: () => ({
    document: {} as object,
  }),

  actions: {
    async analyze(document) {
      const { data } = useFetch("/proxy/editor/api/v1.0.0/analyzer/analyze-content", {
        method: "POST",
        body: document,
      })
      if (data.value) {
        this.document = data.value.document
      }
    },
  },
})
