<template>
  <div>
    <Header />
    <GlobalDefalutLayout />
    <Footer />
  </div>
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'
import GlobalLayout from '@app/components/GlobalLayout.vue'

export default {
  name: 'GlobalLayout',
  components: {
    Header,
    Footer,
    GlobalDefalutLayout: GlobalLayout
  }
}
</script>

<style>

</style>
