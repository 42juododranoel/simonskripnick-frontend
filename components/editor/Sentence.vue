<template>
  <span class="editor--sentence" :class="'editor--sentence-' + props.percentage">
    <EditorSpan
      v-for="(span, spanIndex) in props.spans.collection"
      :key="spanIndex"
      :content="span.content"
      :fatigue="span.fatigue"
    />
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  spans: Object,
  length: String,
  percentage: Number,
})
</script>

<style lang="scss" scoped>
.editor--sentence-1 {
  background-color: hsl(100, 100%, 85%);
}
.editor--sentence-2 {
  background-color: hsl(130, 100%, 85%);
}
.editor--sentence-3 {
  background-color: hsl(160, 100%, 85%);
}
.editor--sentence-4 {
  background-color: hsl(180, 100%, 85%);
}
.editor--sentence-5 {
  background-color: hsl(220, 100%, 85%);
}
.editor--sentence-6 {
  background-color: hsl(240, 100%, 85%);
}
.editor--sentence-7 {
  background-color: hsl(260, 100%, 85%);
}
.editor--sentence-8 {
  background-color: hsl(280, 100%, 85%);
}
.editor--sentence-9 {
  background-color: hsl(300, 100%, 85%);
}
.editor--sentence-10 {
  background-color: hsl(320, 100%, 85%);
}
.editor--sentence-11 {
  background-color: hsl(340, 100%, 85%);
}
.editor--sentence-12 {
  background-color: hsl(360, 100%, 85%);
}
</style>
