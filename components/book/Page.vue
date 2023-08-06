<template>
  <div class="page" :class="{ 'page_with-leadin': withLeadin, 'page_with-initial': withInitial }">
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
