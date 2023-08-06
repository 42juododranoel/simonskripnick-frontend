<template>
  <div class="post-list__item">
    <NuxtLink class="post-list__item--content" :to="path">
      <div class="post-list__item--title">
        <ContentHeading2 v-typograph-content>{{ title }}</ContentHeading2>
      </div>
      <div class="post-list__item--description">
        <ContentParagraph v-typograph-content>{{ description }}</ContentParagraph>
      </div>
    </NuxtLink>
    <div class="post-list__item--meta">
      <NuxtLink class="post-list__item--date" :to="path">
        <span>{{ date }}<span v-if="doShowCategory">,</span></span>
      </NuxtLink>
      <Linkus
        v-if="doShowCategory"
        class="post-list__item--category"
        prefix="#"
        :postfix="tags === undefined || tags.length == 0 ? undefined : ','"
        :target="`/${category.slug.current}`"
        v-typograph-content
      >
        {{ category.title }}
      </Linkus>
      <Linkus
        v-for="(tag, tagIndex) in tags"
        :key="tagIndex"
        class="post-list__item--tag"
        prefix="#"
        :postfix="tagIndex + 1 !== tags.length ? ',' : undefined"
        :target="`/${category.slug.current}/tags/${tag.slug.current}`"
        v-typograph-content
      >
        {{ tag.title }}
      </Linkus>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs"

const props = defineProps({
  title: String,
  description: String,
  slug: Object,
  category: Object,
  tags: Array,
  publishedAt: String,
  doShowCategory: Boolean,
  isHovering: Boolean,
  redirect: String,
})

const path = props.redirect ? props.redirect : `/${props.category.slug.current}/${props.slug.current}`

const publicationDate = dayjs(props.publishedAt)
const formatString = dayjs().year() === publicationDate.year() ? 'D MMMM' : 'D MMMM YYYY'
const date = publicationDate.format(formatString)
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.post-list__item {
  padding-bottom: 63px;

  &--meta {
    display: flex;
    flex-direction: row;
    margin-top: -11px;
    margin-bottom: -8px;
    font-family: $font-family-sans;
  }

  &--date,
  &--tag,
  &--category {
    padding-right: 5px;
    display: flex;
  }

  &--tag,
  &--category {
    padding-left: 5px;
  }

  &--title,
  &--description,
  &--date {
    transition: color 0.075s ease-in;
  }

  &--content {
    display: block;
    padding-bottom: 27px;

    .p-wrapper {
      margin-bottom: 0;
    }
  }

  &:hover {
    cursor: pointer;

    .post-list__item--title,
    .post-list__item--description,
    .post-list__item--date {
      color: var(--text-color-hover);
    }
  }
}
</style>
