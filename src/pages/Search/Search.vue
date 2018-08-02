<template>
  <section class="search">
    <header-top :title="'搜索'" />
    <form class="search-form clearFix" action="#">
      <input type="search" name="search" placeholder="请输入商家或者美食名称" class="search_input">
      <input type="submit" name="submit" class="search-submit">
    </form>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

export default {
  name: 'search',
  components: {
    HeaderTop
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'

.search
  color #fff
  overflow hidden
  .search-form
    margin-top .6rem
    background-color #fff
    padding 12px 8px
    > input
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
    .search_input
      float left
      width 79%
      border 4px solid #f2f2f2
      font-size 14px
      color #333333
      background-color #f2f2f2
    .search-submit
      float right
      width 18%
      border 4px solid $themeColor
      font-size 16px
      color #ffffff
      background-color $themeColor
</style>
