import { defineStore } from "pinia"

export const useEditor = defineStore("editor", {
  state: () => ({
    content: "" as string,
    context: {} as object,
    paragraphs: {} as object,
  }),

  actions: {
    async analyze(content) {
      const { data } = await useFetch("/proxy/editor/api/v1.0.0/analyzer/analyze-content", {
        method: "POST",
        body: { content: content },
      })
      if (data.value) {
        this.content = data.value.content
        this.paragraphs = data.value.paragraphs
        this.context = data.value.context
      }
    },
  },
})
