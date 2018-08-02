<template>
<footer class="footer">
  <nav>
    <a :class="{active: isisCurrent('/msite')}" @click="goTo('/msite')">
      <span>
        <i class="iconfont icon-waimai"></i>
        <span>外卖</span>
      </span>
    </a>
    <a :class="{active: isisCurrent('/search')}" @click="goTo('/search')">
      <span>
        <i class="iconfont icon-sousuo"></i>
        <span>搜索</span>
      </span>
    </a>
    <a :class="{active: isisCurrent('/order')}" @click="goTo('/order')">
      <span>
        <i class="iconfont icon-order-s"></i>
        <span>订单</span>
      </span>
    </a>
    <a :class="{active: isisCurrent('/profile')}" @click="goTo('/profile')">
      <span>
        <i class="iconfont icon-geren"></i>
        <span>我的</span>
      </span>
    </a>
  </nav>
</footer>
</template>

<script>
export default {
  name: 'footer-guide',
  methods: {
    goTo (path) {
      this.$router.replace(path)
    },
    isisCurrent (path) {
      return this.$route.path === path
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.footer
  top-border-1px(#e4e4e4)
  font-size .3rem
  position fixed
  bottom 0
  left 0
  right 0
  line-height .5rem
  z-index 20
  background-color: #fff
  padding-top 5px
  nav
    width 100%
    display flex
    flex-wrap nowrap
    justify-content space-around
    a
      width 25%;
      text-align center
      display inline-block;
      span
        display inline-block
        font-size .12rem
        line-height .3rem
        i
          display block
          font-size .3rem
        span
          display block
          vertical-align bottom
      &:nth-child(3)
        i
          font-size: .5rem
      &.active
        color $themeColor
</style>
