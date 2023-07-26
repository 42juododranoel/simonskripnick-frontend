<template>
  <div class="paragraph">
    <Sentence 
      v-for="(sentence, index) in props.sentences" 
      :key="index"
      :words="sentence.words"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  sentences: Array,
})
</script>

<style></style>

<style scoped></style>
