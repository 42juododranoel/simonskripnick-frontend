<template>
  <Editor />
</template>

<script setup lang="ts">
// Meta
const content = useContent()
content.$reset()

// Header
content.listCategories()

// Page

// Post Head
definePageMeta({
  layout: "blog",
})
</script>

<style lang="scss" scoped></style>
