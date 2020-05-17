<template>
  <aside class="sidebar">
    <Owner />
    <div
      class="nav"
      v-for="(item, index) in $themeConfig.nav"
      :key="index"
    >
      <router-link :to="item.link">{{ item.text }}</router-link>
    </div>
  </aside>
</template>

<script>
import Owner from './Owner'

export default {
  name: 'Sidebar',
  components: {
    Owner
  }
}
</script>

<style lang="stylus">
.sidebar
  width $sidebarWidth

  .nav
    height 46px
    padding-left 10px
    margin-bottom 14px
    line-height 46px
    background-color $colorWhite
    font-size 19px
</style>
