<template>
  <span class="editor--paragraph-child">
    <EditorSentence
      v-if="category == 'sentence'"
      :spans="props.spans"
      :fatigue="props.fatigue"
      :length="props.length"
      :percentage="props.percentage"
    />
    <EditorSpan v-else-if="category == 'span'" :content="props.content" />
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  category: String,
  spans: Object,
  content: String,
  fatigue: Number,
  length: String,
  percentage: Number,
})
</script>

<style lang="scss" scoped></style>
