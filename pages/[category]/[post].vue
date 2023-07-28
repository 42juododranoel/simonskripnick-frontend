<template>
  <div class="row">
    <div class="col-8-md">
      <Heading1>{{ content.post.title }}</Heading1>
      <Content :blocks="content.post.content" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: "blog",
})

const content = useContent()
content.getCategory(route.params.category)
content.getPost(route.params.post)
</script>
