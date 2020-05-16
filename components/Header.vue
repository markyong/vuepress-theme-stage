<template>
  <header id="header">
    <div class="header-main">
      <h1 class="title">{{ $site.title }}</h1>
      <div class="wrap">
        <div class="header-image" id="header-image">
        </div>
        <div class="text">How goes the world with you?</div>
      </div>
    </div>
  </header>
</template>

<script>
import headerBg from '../assets/default-header.jpg'

export default {
  name: 'Header',
  mounted () {
    this.initWater()
  },
  methods: {
    initWater () {
      const settings = {
        image: headerBg,
        rippleRadius: 2,
        width: 1020,
        height: 300,
        delay: 1,
        auto: true
      }
      const navImg = document.getElementById('header-image')
      const waterRippleEffect = new WaterRippleEffect(navImg, settings)
      navImg.addEventListener('click', function () {
        const { layerX, layerY } = e
        waterRippleEffect.disturb(layerX, layerY)
      })
      navImg.addEventListener('mousemove', function (e) {
        const { layerX, layerY } = e
        waterRippleEffect.disturb(layerX, layerY)
      })
    }
  }
}
</script>

<style lang="stylus">
#header
  height 450px

  .header-main
    height 435px
    background-color $themeColor

  .title
    height 110px
    line-height 110px
    text-align center
    color $colorWhite
    font-weight 700
    font-size 35px

  .wrap
    width $homePageWidth
    height 350px
    margin 0 auto
    box-shadow 0 0 2px rgba(0, 0, 0, .7)
    background-color $themeColor

  .header-image
    width $homePageWidth
    height 300px
    margin 0 auto

  .text
    width $homePageWidth
    height 50px
    line-height 50px
    text-align center
    color $colorWhite
    font-size 19px
</style>
