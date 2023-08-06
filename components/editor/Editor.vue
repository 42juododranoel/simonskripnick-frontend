<template>
  <div class="editor">
    <ContentParagraph 
      v-for="(ContentParagraph, index) in props.ContentParagraphs" 
      :key="index"
      :sentences="ContentParagraph.sentences"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  ContentParagraphs: Array,
})

</script>

<style>
.editor {
  white-space: pre;
}
</style>

<style scoped></style>
