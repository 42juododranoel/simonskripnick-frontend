<template>
  <div class="post">
    <div class="row">
      <div class="col-8-md">
        <Heading1>{{ title }}</Heading1>
      </div>
    </div>
    <div class="row">
      <div class="col-10-md">
        <Paragraph>{{ description }}</Paragraph>
      </div>
    </div>
    <div class="row">
      <div class="col-8-md">
        <Content :blocks="content" />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">  
const props = defineProps({
  title: String,
  description: String,
  content: Array,
})
</script>

<style lang="scss">
@import '~/assets/scss/abstracts/_variables.scss';

.post {
  margin-bottom: 63px;

  .h2-wrapper {
    margin-bottom: 45px;
    margin-top: 63px;
  }

  .h3-wrapper {
    margin-top: 45px;
  }
}
</style>
