<template>
  <div class="post">
    <div class="post--header" :style="{ backgroundColor: content.category.backgroundColor }">
      <div class="row">
        <div class="col-8-md col-7-lg">
          <ContentHeading1 v-typograph-content>{{ content.post.title }}</ContentHeading1>
        </div>
      </div>
      <div class="row">
        <div class="col-10-md col-8-lg">
          <ContentParagraph v-typograph-content>{{ content.post.description }}</ContentParagraph>
        </div>
      </div>
    </div>
    <div class="post--body">
      <div class="row">
        <div class="col-8-md col-7-lg">
          <ContentContainer :blocks="content.post.content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Meta
const content = useContent()
</script>

<style lang="scss">
@import "~/assets/scss/abstracts/_variables.scss";

.post {
  margin-bottom: 63px;

  &--header {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 81px;
    padding-bottom: 36px;
  }

  &--body {
    margin-left: 20px;
    margin-right: 20px;
  }

  .h2-wrapper {
    margin-bottom: 45px;
    margin-top: 63px;
  }

  .h3-wrapper {
    margin-top: 45px;
  }

  &--body .p-wrapper {
    margin-bottom: 36px;
  }
}

@media (min-width: $width-md) {
  .post {
    &--header {
      padding-left: 15vw;
      padding-right: 15vw;
    }

    &--body {
      margin-left: 15vw;
      margin-right: 15vw;
    }
  }
}
</style>
