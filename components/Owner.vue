<template>
  <div class="owner">
    <div class="avatar-bg">
      <div class="index-page">
        <div class="banner">
          <div class="slide slide1">
            <div class="bg-wrapper">
              <div class="bg" id="container_left">
                <div id="canvas_left"></div>
              </div>
            </div>
          </div>
          <div class="slide slide2">
            <div class="bg-wrapper">
              <div class="bg" id="container_right">
                <div id="canvas_right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="avatar" src="/avatar.jpg">
    <div class="author">Mark</div>
    <div class="subtitle">喜新恋旧，败事不足</div>
    <div class="social">
      <a
        v-for="(item, index) in $themeConfig.social"
        :key="index"
        :href="item.link"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', item.text]" />
      </a>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faFacebook,
  faTwitter,
  faWeibo
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faFacebook, faTwitter, faWeibo)

export default {
  name: 'Owner',

  components: {
    FontAwesomeIcon
  },

  mounted () {
    import('../assets/js/avatar').then((module) => {
      module.default('container_left', 'canvas_left', '#42b983', '#137AB9')
      module.default('container_right', 'canvas_right', '#1BB980', '#41b883')
    })
  }
}
</script>

<style lang="stylus">
.owner
  height 210px
  margin-bottom 14px
  background-color $colorWhite
  position relative

  .avatar-bg
    height 172px

  .avatar
    width 110px
    height 110px
    position absolute
    left 50%
    top 8px
    transform translateX(-50%)
    border-radius 50%
    box-shadow 0 0 10px #ccc

  .author
    width 100%
    position absolute
    top 125px
    text-align center
    color $colorWhite
    font-size 18px

  .subtitle
    width 100%
    position absolute
    top 146px
    text-align center
    color $colorWhite
    font-size 15px

  .social
    height 38px
    line-height 38px
    text-align center

    a
      padding 0 4px
      font-size 24px
      &:hover
        color $themeColor
</style>
