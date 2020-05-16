<template>
  <div class="post">
    <div
      class="post-item"
      v-for="(post, index) in posts"
      :key="index"
    >
      <div class="post-item-title">
        <a href="#">{{ post.title }}</a>
      </div>
      <div class="create">
        <span>创建于 {{ post.frontmatter.date }}</span>
        <span class="category">{{ post.frontmatter.category }}</span>
      </div>
      <div class="post-content" v-html="post.excerpt">
      </div>
      <div class="readmore">
        <a href="">阅读更多</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    posts: Array
  }
}
</script>

<style lang="stylus">
.post
  width $contentWidth
  padding-bottom 37px
  background-color $colorWhite
  .post-item
    padding 10px 27px 27px
    border-bottom 1px dashed #e1e1e1;
  
  .post-item-title
    font-size 25px
    margin 17px 0 14px
    font-weight 600

  .create
    padding-left 2px
    padding-bottom 14px

  .category
    margin-left 14px
    padding-left 20px
    position relative
    &::before
      content ''
      width 11px
      height 11px
      position absolute
      left 3px
      top 3px
      background-color $themeColor
      border-radius 50%
</style>
