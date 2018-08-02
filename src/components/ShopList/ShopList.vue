<template>
  <div class="msite-shop-list">
    <div class="shop-list-title">
      <i class="iconfont icon-xuanxiang"></i>
      <span>附近商家</span>
    </div>
    <div class="shop-container">
      <ul class="shop-list" v-if="shops.length">
        <li class="shop-li" v-for="(shop,index) in shops" :key="index">
          <router-link href="javascript:;" class="clearFix" to="/shop" >
            <div class="shop-li-left">
              <img :src="baseImgPath + shop.image_path" alt="shopImg">
            </div>
            <div class="shop-li-right">
              <div class="shop-detail-header clearFix">
                <h4 class="shop-title ellipsis">
                 {{shop.name}}
                </h4>
                <ul class="shop-detail-ul clearFix">
                  <li class="supports" v-for="(support,index) in shop.supports" :key="index">{{support.icon_name}}</li>
                </ul>
              </div>
              <div class="shop-rating-order clearFix">
                <div class="shop-rating-order-left">
                  <Star :score="shop.rating" :size="24"/>
                  <div class="rating">
                    {{shop.rating}}
                  </div>
                  <div class="order">
                    月售{{shop.recent_order_num}}单
                  </div>
                </div>
                <div class="shop-rating-order-right">
                  <span class="delivery delivery-left">{{shop.delivery_mode.text}}</span>
                  <span class="delivery delivery-right">准时达</span>
                </div>
              </div>
              <div class="shop-distance">
                <p class="shop-delivery-msg">
                  <span>¥{{shop.float_minimum_order_amount}}起送</span>
                  <span class="segmentation">/</span>
                  <span>配送费约¥{{shop.float_delivery_fee}}</span>
                </p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <ul v-else>
        <li v-for="i in 8" :key="i"><img src="./images/shop_back.svg" alt="futureImg"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Star from '../Star/Star.vue'
export default {
  name: 'shop-list',
  data () {
    return {
      baseImgPath: 'https://fuss10.elemecdn.com'
    }
  },
  computed: {
    ...mapState(['shops'])
  },
  mounted () {
    this.$store.dispatch('getShops')
  },
  components:{
    Star
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.msite-shop-list
  margin-top 10px
  background #fff
  .shop-list-title
    padding 10px 10px 0
    span
      font-size 14px
      color #999
      line-height 20px
  .shop-container
    margin-bottom .5rem
    .shop-list .shop-li
      width 100%
      position relative
      >a
        display block
        box-sizing border-box
        padding 15px 8px
        width 100%
        .shop-li-left
          float left
          box-sizing border-box
          width 23%
          height 75px
          padding-right 10px
          img
            display block
            width 100%
            height 100%
        .shop-li-right
          float right
          width 77%
          .shop-detail-header
            width 100%
            .shop-title
              float left
              width 140px
              color #333
              font-size 16px
              line-height 16px
              font-weight 700
              &::before
                content '品牌'
                display inline-block
                font-size 11px
                line-height 11px
                color #333
                background #ffd930
                padding 2px 2px
                border-radius 2px
                margin-right 5px
            .shop-detail-ul
              float right
              margin-top 3px
              .supports
                float left
                font-size 10px
                color #999999
                border 1px solid #f1f1f1
                padding 0 2px
                border-radius 2px
          .shop-rating-order
            width 100%
            margin-top 18px
            margin-bottom 8px
            .shop-rating-order-left
              float left
              color #ff9a0d
              .rating
                float left
                font-size 10px
                color #ff6000
                margin-left:4px
              .order
                float left
                font-size 10px
                color #666
                transform scale(0.8)
            .shop-rating-order-right
              float right
              font-size 0
              .delivery
                transform-origin 35px 0
                transform scale(0.7)
                display inline-block
                font-size 12px
                padding 1px
                border-radius 2px
              .delivery-left
                color #ffffff
                margin-right -10px
                background-color $themeColor
                border 1px solid $themeColor
              .delivery-right
                color $themeColor
                border 1px solid $themeColor
          .shop-distance
            width 100%
            font-size 12px
            float left
            transform-origin 0
            transform scale(0.9)
            color #666
            .segmentation
              color #ccc
</style>
