<template>
  <BookContainer/>
</template>

<script setup lang="ts">
// Meta
const route = useRoute()
const content = useContent()
content.$reset()

// Header
content.listCategories()
content.setDefaultCategory()

// Page
content.getBook(route.params.book)
</script>
