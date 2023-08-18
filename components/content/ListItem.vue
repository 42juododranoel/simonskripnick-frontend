<template>
  <span class="list-item--wrapper">
    <li><slot /></li>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({})
</script>

<style lang="scss" scoped>
.list-item--wrapper {
}
</style>
