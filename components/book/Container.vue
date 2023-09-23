<template>
  <div
    class="book"
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
// Meta
const content = useContent()
</script>

<style lang="scss">
@import "~/assets/scss/abstracts/_variables.scss";

.book {
  color: var(--text-color);
  font-family: $font-family-serif;
  --gradient-target: var(--gradient-target-sm);

  .p-wrapper {
    text-indent: 27px;
  }

  .page__leadin {
    .p-wrapper:first-of-type {
      text-indent: unset;
    }
  }

  .page__initial {
    .p-wrapper:first-of-type {
      p::first-letter {
        font-size: 150%;
      }
    }
  }

}

@media (min-width: $width-md) {
  .book {
    --gradient-target: var(--gradient-target-md);
  }
}
</style>
