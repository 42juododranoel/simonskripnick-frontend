<template>
  <div class="post-list">
    <div class="post-list--header" v-if="props.doShowHeader" :style="{ backgroundColor: content.category.backgroundColor }">
      <div class="row">
        <div class="col-8-md">
          <ContentHeading1 v-typograph-content v-if="content.category.title">{{
            content.category.title
          }}</ContentHeading1>
          <div v-if="content.tags.length" class="post-list--tags">
            <span class="post-list--tags-prefix">Tags:</span>
            <span class="post-list--tags-content">
              <Linkus
                v-for="(tag, tagIndex) in content.tags"
                :key="tagIndex"
                class="post-list--tag"
                prefix="#"
                :postfix="tagIndex + 1 !== content.tags.length ? ',' : undefined"
                :target="`/${tag.category.slug.current}/tags/${tag.slug.current}`"
                v-typograph-content
              >
                {{ tag.title }}
              </Linkus>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="post-list--content">
      <div class="row">
        <div class="col-8-md">
          <div v-for="(post, postIndex) in content.posts" :key="postIndex">
            <BlogPostListItem
              :title="post.title"
              :description="post.description"
              :slug="post.slug"
              :tags="post.labels"
              :category="post.category"
              :do-show-category="props.doShowCategory"
              :published-at="post.publishedAt"
              :redirect="post.redirect"
            />
          </div>        
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  doShowCategory: Boolean,
  doShowHeader: Boolean,
})

const content = useContent()
</script>

<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_variables.scss";

.post-list {
  &--header {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 81px;
    padding-bottom: 36px;
  }

  &--content {
    margin-top: 54px;
    margin-left: 20px;
    margin-right: 20px;
  }

  &--description {
    margin-bottom: 27px;
  }

  &--tag {
    padding-right: 8px;
  }

  &--tags-prefix {
    padding-right: 10px;
  }
}

@media (min-width: $width-md) {
  .post-list {
    &--header {
      padding-left: 15vw;
      padding-right: 15vw;
    }

    &--content {
      margin-left: 15vw;
      margin-right: 15vw;
    }
  }
}

</style>
