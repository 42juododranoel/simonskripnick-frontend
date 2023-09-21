<template>
  <div
    class="page"
    :class="{
      'page__leadin': withLeadin,
      'page__initial': withInitial,
    }"
  >
    <ContentContainer :blocks="content" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  content: Array,
  withLeadin: Boolean,
  withInitial: Boolean,
})
</script>
