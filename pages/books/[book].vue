<template>
  <div
    class="book"
    :class="`book_${content.book.slug.current}`"
    :style="{
      '--paper-color': content.book.paperColor,
      '--text-color': content.book.textColor,
      '--gradient-target-sm': content.book.paperColor,
      '--gradient-target-md': content.book.gradientTarget,
    }"
  >
    <BookNode
      v-for="(node, nodeIndex) in content.book.nodes"
      :key="nodeIndex"
      :type="node._type"
      :index="nodeIndex + 1"
      :first-page="node.firstPage"
      :second-page="node.secondPage"
      :first-image="node.firstImage"
      :second-image="node.secondImage"
      :title="node.title"
      :subtitle="node.subtitle"
      :middle="node.middle"
      :number="node.number"
      :image="node.image"
    />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: "book",
})

const content = useContent()
content.getBook(route.params.book)
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.book {
  color: var(--text-color);
  --gradient-target: var(--gradient-target-sm);
}

@media (min-width: $width-md) {
  .book {
    --gradient-target: var(--gradient-target-md);
  }
}
</style>
