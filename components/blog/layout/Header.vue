<template>
  <div class="header" :style="{ backgroundColor: category.backgroundColor }">
    <div class="header--body">
      <NuxtLink to="/">
        <img class="header--avatar" src="~/assets/images/me-circle.jpg" />
      </NuxtLink>
      <span class="header--content">
        <span class="header--name-emoji">
          <span class="header--name">{{ category.name }}</span>
          <span class="header--emoji">{{ category.emoji }}</span>
        </span>
        <span class="header--sections">
          <span
            v-for="(category, categoryIndex) in categories"
            :key="categoryIndex"
            class="header--section"
          >
            <Linkus :target="`/${category.slug.current}`">{{ category.title }}</Linkus>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  categories: Array,
  category: Object,
})
</script>

<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_variables.scss";

.header {
  padding-left: 20px;
  padding-right: 20px;

  &--body {
    padding-top: 9px;
    display: flex;
    flex-direction: row;
  }

  &--avatar {
    border-radius: 50%;
    width: 70px;
    height: auto;
  }

  &--content {
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    padding-top: 5px;
    font-family: $font-family-caption;
  }

  &--name-emoji {
    padding-left: 5px;
  }

  &--emoji {
    padding-left: 5px;
  }

  &--sections {
    display: flex;
    flex-direction: column;
  }

  &--section {
    padding-right: 5px;
    padding-left: 5px;
  }
}

@media (min-width: $width-md) {
  .header {
    padding-left: 15vw;
    padding-right: 15vw;

    &--sections {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
