<template>
  <div class="tag-wrap">
    <div class="tag-post-list">
      <ul>
        <li
          class="tag-post-item"
          v-for="(item, index) in $currentTag.pages"
          :key="index"
        >
          <time class="post-itme">{{ item.frontmatter.date }}</time>
          <router-link class="post-title" :to="item.path">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
      <div class="tag-key">{{ $currentTag.key }}</div>
    </div>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '@theme/components/Sidebar'

export default {
  name: 'Tag',

  components: {
    Sidebar
  }
}
</script>

<style lang="stylus">
.tag-wrap
  width $homePageWidth
  margin 30px auto 0
  display flex
  justify-content space-between
  align-items flex-start

  .tag-post-list
    width $contentWidth
    padding 7px 27px
    background-color $colorWhite
    position relative
    overflow hidden

  .tag-post-item
    height 77px
    padding-left 7px
    line-height 77px
    border-bottom 1px dashed #e1e1e1
    font-size 18px
    &:last-child
      margin-bottom 37px

    .post-title
      margin-left 27px
      font-size 18px
      &:hover
        color $themeColor

  .tag-key
    width 194px
    padding 2px 0
    position absolute
    top 44px
    right -44px
    transform rotateZ(45deg)
    background-color $themeColor
    font-size 18px
    text-align center
    color $colorWhite
</style>
