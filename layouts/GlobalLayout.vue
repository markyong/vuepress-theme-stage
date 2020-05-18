<template>
  <div>
    <Header />
    <div class="content-wrap">
      <GlobalDefalutLayout />
      <Sidebar />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Sidebar from '@theme/components/Sidebar'

export default {
  name: 'GlobalLayout',
  components: {
    Header,
    Footer,
    GlobalDefalutLayout: GlobalLayout,
    Sidebar
  }
}
</script>

<style lang="stylus">
.content-wrap
  width $homePageWidth
  margin 30px auto 0
  display flex
  justify-content space-between
  align-items flex-start
</style>
