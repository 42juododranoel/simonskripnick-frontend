<template>
  <div class="post-list">
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
        <div class="post-list--content">
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
})

const content = useContent()
</script>

<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_variables.scss";

.post-list {
  .post-list--header {
    margin-bottom: 72px;
  }

  .post-list--description {
    margin-bottom: 27px;
  }

  .post-list--tags {
    margin-bottom: 63px;
  }

  .post-list--tag {
    padding-right: 8px;
  }

  .post-list--tags-prefix {
    padding-right: 10px;
  }
}
</style>
