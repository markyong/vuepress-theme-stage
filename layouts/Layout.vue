<template>
  <div :class="{ about: isAbout }">
    <HomeLayout v-if="$pagination" />
    <Content class="post-content" v-else />
  </div>
</template>

<script>
export default {
  name: 'Layout',

  computed: {
    isAbout () {
      return this.$route.path === '/about/'
    }
  }
}
</script>

<style lang="stylus">
.about
  width $contentWidth
  padding 27px
  background-color $colorWhite

  h1
    padding 17px 0
    margin 0
    text-align center
    border-bottom 0 none
    font-size 30px
    font-weight 400
  p
    line-height 2
</style>
