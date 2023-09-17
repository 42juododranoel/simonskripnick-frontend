<template>
  <Editor />
</template>

<script setup lang="ts">
// Meta
const content = useContent()
content.$reset()

// Header
content.listCategories()
content.setDefaultCategory()
</script>
