<template>
  <div class="header">
    <slot name="left"></slot>
    <a class="location ellipsis"><span class="ellipsis">{{title}}</span></a>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'header-top',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.header
  font-size .3rem
  text-align center
  line-height .6rem
  position fixed
  top 0
  left 0
  width: 100%
  height .6rem
  z-index 200
  background-color $themeColor
  >a
    color #fff
    &.header-search
      position absolute
      left 0
      top 0
      width .5rem
      line-height .6rem
      padding 0 .15rem
      i
        font-size .3rem
    &.location
      position absolute
      width 50%
      left 50%
      top 0
      line-height .6rem
      transform translateX(-50%)
      font-size .25rem
    &.register
      position absolute
      right 0
      top 0
      line-height .6rem
      padding 0 .15rem
      font-size .1rem
</style>
