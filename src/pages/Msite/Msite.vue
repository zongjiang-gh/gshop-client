<template>
  <section class="msite">
    <header-top :title="address.name">
      <a class="header-search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </a>
      <a class="register" slot="right">
        <span>登录 | 注册</span>
      </a>
    </header-top>
    <nav class="msite_nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index" >
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImgUrl + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <shop-list />
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
import {mapState} from 'vuex'
export default {
  name: 'msite',
  data () {
    return {
      baseImgUrl:'https://fuss10.elemecdn.com'
    }
  },
  mounted () {
    this.$store.dispatch('getCategorys')
  },
  components: {
    HeaderTop,
    ShopList
  },
  computed: {
    ...mapState(['address','categorys']),
    categorysArr (val) {
      const arr = []
      let smallArr = []
      this.categorys.forEach((c,index) => {
        smallArr.push(c)
        if(smallArr.length === 8 || index === (this.categorys.length -1)){
          arr.push(smallArr)
          smallArr = []
        }
      })
      return arr
    }
  },
  watch:{
    categorys(val){
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        });
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl'
.msite
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top .6rem
    height 2.7rem
    background #ffffff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width .7rem
                height .7rem
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
</style>
