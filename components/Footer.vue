<template>
  <footer id="footer">
    <div class="copyright">&copy; Mark 2019</div>
    <div>
      Powered by <a href="https://vuepress.vuejs.org/" target="_blank">Vuepress</a>.
      Theme by <a href="https://github.com/markyong/vuepress-theme-stage" target="_blank">Stage</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="stylus">
#footer
  width $homePageWidth
  padding 57px 0 27px
  margin 0 auto
  text-align center
  .copyright
    padding-bottom 7px
  a
    color #17a167
</style>
