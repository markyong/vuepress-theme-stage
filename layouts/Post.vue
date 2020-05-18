<template>
  <div class="post-wrap">
    <h1 class="title">{{ $frontmatter.title }}</h1>
    <div class="create">
      <span>创建于 {{ $frontmatter.date }}</span>
      <span class="category">{{ $frontmatter.category }}</span>
    </div>
    <Content class="post-content" />
    <ul class="tags">
      <li
        class="tag-item"
        v-for="(item, index) in $frontmatter.tags"
        :key="index"
      >
        <router-link :to="`/tag/${item}`">{{ item }}</router-link>
      </li>
    </ul>
    <div class="bottom-line"></div>
  </div>
</template>

<script>
export default {
  name: 'Post'
}
</script>

<style lang="stylus">
.post-wrap
  width $contentWidth
  padding 17px 27px
  background-color $colorWhite

  .title
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

  .tags
    padding-left 27px
    margin 27px 0
    font-size 12px

  .toc
    width $sidebarWidth
    background-color $colorWhite

  .tag-item
    height 20px
    padding 0 4px
    margin-right 24px
    display inline-block
    background #f1f8ff
    position relative
    a
      height 20px
      line-height 20px
      display inline-block
      color #777
      &:hover
        color $themeColor
    &:nth-child(even)
      &::before
        content: ''
        display inline-block
        border-right 20px solid #f1f8ff
        border-bottom 20px solid rgba(0, 0, 0, 0)
        position absolute
        left -20px
        top: 0px
      &::after
        content: ''
        display inline-block
        border-right 20px solid rgba(0, 0, 0, 0)
        border-top 20px solid #f1f8ff
        position absolute
        right  -20px
        top: 0px
    &:nth-child(odd)
      &::before
        content: ''
        display inline-block
        border-right 20px solid #f1f8ff
        border-top 20px solid rgba(0, 0, 0, 0)
        position absolute
        left -20px
        top: 0px
      &::after
        content: ''
        display inline-block
        border-right 20px solid rgba(0, 0, 0, 0)
        border-bottom 20px solid #f1f8ff
        position absolute
        right  -20px
        top: 0px

  .bottom-line
    width 100%
    border 1px dashed #ccc
    margin 17px 0
</style>
