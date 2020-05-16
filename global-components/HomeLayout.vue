<template>
  <div class="home-layout">
    <Post :posts="$pagination.pages" />
    <Sidebar />
  </div>
</template>

<script>
import Post from '@theme/components/Post'
import Sidebar from '@theme/components/Sidebar'

export default {
  name: 'HomeLayout',
  components: {
    Post,
    Sidebar
  }
}
</script>

<style lang="stylus">
.home-layout
  width 1020px
  margin 30px auto 0
  display flex
  justify-content space-between
</style>
