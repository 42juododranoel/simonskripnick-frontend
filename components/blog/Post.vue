<template>
  <div class="post">
    <div class="row">
      <div class="col-8-md">
        <ContentHeading1 v-typograph-content>{{ title }}</ContentHeading1>
      </div>
    </div>
    <div class="row">
      <div class="col-10-md">
        <ContentParagraph v-typograph-content>{{ description }}</ContentParagraph>
      </div>
    </div>
    <div class="row">
      <div class="col-8-md post--content">
        <ContentContainer :blocks="content" />
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

  .post--content .p-wrapper {
    margin-bottom: 36px;
  }
}
</style>
