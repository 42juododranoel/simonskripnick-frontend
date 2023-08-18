<template>
  <span class="editor--span" :class="`editor--span-index-${props.fatigue}`">{{
    props.content
  }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
  content: String,
  index: Number,
  fatigue: Number,
})
</script>

<style lang="scss" scoped>
@for $index from 0 through 100 {
  .editor--span-index-#{$index} {
    background-color: rgba(64, 64, 64, $index * 0.0125);
  }
}
</style>
