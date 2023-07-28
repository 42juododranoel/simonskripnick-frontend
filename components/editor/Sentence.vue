<template>
  <span class="sentence">
    <Word 
      v-for="(word, index) in props.words" 
      :key="index"
      :content="word.content"
    />  
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  words: Array,
})
</script>

<style></style>

<style scoped></style>
