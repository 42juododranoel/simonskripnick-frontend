<template>
  <span class="ahref--wrapper">
    <NuxtLink class="ahref--content" :to="target" :force="true">
      <span v-if="prefix" class="ahref--prefix">{{ prefix }}</span>
      <span class="ahref--text"><slot /></span>
      <span v-if="postfix" class="ahref--postfix">{{ postfix }}</span>
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

.ahref {
  &--wrapper {
    color: var(--ahref-text-color);
  }

  &--prefix {
    margin-right: 1px;
  }

  &--text {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: var(--ahref-underline-color);
  }

  &--content {
    &:hover {
      color: var(--ahref-text-color-hover);

      .ahref--text {
        border-bottom-color: var(--ahref-underline-color-hover);
      }
    }

    &.nuxt-ahref-exact-active,
    &.nuxt-ahref-active {
      color: var(--ahref-text-color-active);
      font-weight: bold;

      .ahref--text {
        border-bottom-color: var(--ahref-underline-color-active);
      }
    }
  }

}
</style>
