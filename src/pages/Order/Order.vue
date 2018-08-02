<template>
  <section class="orders">
    <header-top :title="'订单列表'" />
    <section class="order-no-login">
      <img src="./images/person.png" alt="person">
      <h3>登陆后查看外卖订单</h3>
      <button>立即登录</button>
    </section>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  name: 'order',
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'

.orders
  .order-no-login
    padding-top: 1.4rem
    width: 60%
    margin 0 auto
    text-align center
    >img
      display block
      width 100%
      height: 30%
    >h3
      padding 10px
      font-size 17px
      color #6a6a6a
    >button
      display: inline-block
      background-color: $themeColor
      font-size 14px
      color #ffffff
      border: 0
      outline: none
      border-radius 5px
      padding 10px 20px
</style>
