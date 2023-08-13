<template>
  <span class="linkus--wrapper">
    <NuxtLink class="linkus--content" :to="target">
      <span v-if="prefix" class="linkus--prefix">{{ prefix }}</span>
      <span class="linkus--text"><slot/></span>
      <span v-if="postfix" class="linkus--postfix">{{ postfix }}</span>
    </NuxtLink>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  target: String,
  prefix: String,
  postfix: String,
})
</script>

<style lang="scss" scoped>
.linkus--wrapper {
  color: var(--linkus-text-color);

  .linkus--text {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: var(--linkus-underline-color);
  }

  .linkus--content {
    &:hover {
      color: var(--linkus-text-color-hover);

      .linkus--text {
        border-bottom-color: var(--linkus-underline-color-hover);
      }
    }

    &.nuxt-linkus-exact-active,
    &.nuxt-linkus-active {
      color: var(--linkus-text-color-active);
      font-weight: bold;

      .linkus--text {
        border-bottom-color: var(--linkus-underline-color-active);
      }
    }
  }
}
</style>
