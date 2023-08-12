<template>
  <span class="editor--sentence" :class="'editor--sentence-'+ props.percentage">          
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

.editor--sentence-1 { background-color: lighten(#60da65, 18%) }

.editor--sentence-2 { background-color: lighten(#60c17e, 18%) }
.editor--sentence-3 { background-color: lighten(#60a798, 18%) }
.editor--sentence-4 { background-color: lighten(#609ea1, 18%) }
.editor--sentence-5 { background-color: lighten(#6085ba, 18%) }
.editor--sentence-6 { background-color: lighten(#6074cb, 18%) }
.editor--sentence-7 { background-color: lighten(#6b71c1, 18%) }
.editor--sentence-8 { background-color: lighten(#766db7, 18%) }
.editor--sentence-9 { background-color: lighten(#816aad, 18%) }
.editor--sentence-10 { background-color: lighten(#8d67a2, 18%) }
.editor--sentence-11 { background-color: lighten(#986398, 18%) }
.editor--sentence-12 { background-color: lighten(#a3608e, 18%) }

</style>
