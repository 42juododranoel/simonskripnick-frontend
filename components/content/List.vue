<template>
  <div class="list--wrapper">
    <ul v-if="listItem == 'bullet'">
      <ContentContainer :blocks="children" />
    </ul>
    <ol v-if="listItem == 'number'">
      <ContentContainer :blocks="children" />
    </ol>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  listItem: String,
  children: Array,
})
</script>

<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_variables.scss";

.list--wrapper {
  display: flex;
  margin-bottom: 18px;
  font-size: $font-size-sm;
  line-height: $line-height-sm;

  ul,
  ol {
    margin-top: -12px;
    margin-bottom: -7px;
  }
}
</style>
