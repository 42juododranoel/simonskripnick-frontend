<template>
  <div class="node">
    <BookSpread
      v-if="type == 'spread'"
      :index="index"
      :first-page="firstPage"
      :second-page="secondPage"
      :first-image="firstImage"
      :second-image="secondImage"
    />
    <BookChapter
      v-else-if="type == 'chapter'"
      :image="image"
      :title="title"
      :subtitle="subtitle"
      :number="number"
    />
    <BookCover
      v-else-if="type == 'cover'"
      :title="title"
      :subtitle="subtitle"
      :image="image"
      :middle="middle"
    />
    <BookVolume v-else-if="type == 'volume'" :image="image" :title="title" />
    <div v-else>{{ type }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: String,
  index: Number,
  firstPage: Object,
  secondPage: Object,
  firstImage: Object,
  secondImage: Object,
  title: String,
  subtitle: String,
  number: Number,
  image: Object,
  middle: String,
})
</script>

<style lang="scss" scoped>
.node {
  display: grid;
  grid-template-rows: minmax(100vh, min-content);
  border-bottom: 1px solid #bebebe;
}
</style>
