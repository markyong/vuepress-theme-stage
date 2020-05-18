<template>
  <div class="tags-wrap">
    <h2 class="title">标签云</h2>
    <ul>
      <li
        class="tag-item"
        v-for="(item, index) in $frontmatterKey.list"
        :key="index"
      >
        <router-link
          :to="item.name"
          :style="getFontSize(item.pages.length )
        ">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tags',

  methods: {
    getFontSize (val) {
      let fontSize = 12 + val
      fontSize = fontSize > 27 ? 27 : fontSize

      return {
        fontSize: fontSize + 'px'
      }
    }
  }
}
</script>

<style lang="stylus">
.tags-wrap
  width $contentWidth
  padding 17px 0 27px
  background-color #fff
  text-align center

  .title
    height 70px
    line-height 70px
    font-size 30px

  .tag-item
    padding 4px 7px
    margin 7px
    display inline-block
    transition all .57s ease
    &:hover
      background-color #def
</style>
