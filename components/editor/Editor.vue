<template>
  <div class="editor">
    <Paragraph 
      v-for="(paragraph, index) in props.paragraphs" 
      :key="index"
      :sentences="paragraph.sentences"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  paragraphs: Array,
})

</script>

<style>
.editor {
  white-space: pre;
}
</style>

<style scoped></style>
