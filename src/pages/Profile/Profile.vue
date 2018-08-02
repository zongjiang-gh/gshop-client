<template>
  <section class="self">
    <header-top :title="'我的'" />
    <router-link class="self-number" :to="user._id?'/user':'/login'" tag="div">
      <a href="javascript:;" class="clearFix">
        <div class="self-image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top" v-if="!user.phone">{{user.name || '登录/注册'}}</p>
          <p>
          <span class="user-icon">
          <i class="iconfont icon-shouji icon-mobile"></i>
          </span>
            <span class="icon-mobile-number">{{user.phone || '暂无绑定手机号'}}</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
          </span>
      </a>
    </router-link>
    <section class="self-info-data">
      <ul class="info-data-list clearFix">
        <a href="jsvascript:;" class="info-data-link">
          <span class="info-data-top"><span>0.00</span>元</span>
          <span class="info-data-bottom">我的余额</span>
        </a>

        <a href="jsvascript:;" class="info-data-link">
          <span class="info-data-top"><span>0</span>个</span>
          <span class="info-data-bottom">我的优惠</span>
        </a>

        <a href="jsvascript:;" class="info-data-link">
          <span class="info-data-top"><span>0</span>分</span>
          <span class="info-data-bottom">我的积分</span>
        </a>

      </ul>
    </section>
    <section class="self-my-order">
      <a href="javascript:;" class="my-order">
          <span>
          <i class="iconfont icon-order-s"></i>
          </span>
        <div class="my-order-div">
          <span>我的订单</span>
          <span class="my-order-icon">
          <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <a href="javascript:;" class="my-order">
          <span>
          <i class="iconfont icon-jifen"></i>
          </span>
        <div class="my-order-div">
          <span>积分商城</span>
          <span class="my-order-icon">
          <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <a href="javascript:;" class="my-order">
          <span>
          <i class="iconfont icon-vip"></i>
          </span>
        <div class="my-order-div">
          <span>硅谷外卖会员卡</span>
          <span class="my-order-icon">
          <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="self-my-order">
      <a href="javascript:;" class="my-order">
          <span>
          <i class="iconfont icon-fuwu"></i>
          </span>
        <div class="my-order-div">
          <span>硅谷外卖会员卡</span>
          <span class="my-order-icon">
          <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="self-my-order">
      <mt-button type="danger" style="width: 100%" @click="logout" v-if="user._id">退出登录</mt-button>
    </section>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import {mapState} from 'vuex'
import {MessageBox} from 'mint-ui'
export default {
  name: 'profile',
  components: {
    HeaderTop
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    logout () {
      MessageBox.confirm('确认要退出吗?')
        .then(({action }) => {
            this.$store.dispatch('logout')
          });

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'

.self
  color #fff
  width: 100%
  overflow hidden
  .self-number
    margin-top: 0.62rem
    width: 100%
    >a
      display block
      position: relative
      background-color: $themeColor
      padding 20px 10px
      color #fff
      .self-image
        float left
        width .8rem
        height .8rem
        border-radius 50%
        overflow hidden
        vertical-align top
        color #7e8c8d
        i
          background #e4e4e4
          font-size 0.8rem
      .user-info
        float left
        margin-top 8px
        margin-left 15px
        >p
          font-weight 700
          font-size 18px
          .user-icon
            display: inline-block
            margin-left -15px
            margin-right 5px
            width 20px
            height 20px
          .icon-mobile
            font-size 30px
            vertical-align text-top
          .icon-mobile-number
            font-size 14px
            color #fff
        .user-info-top
          padding-bottom 8px
      >span.arrow
        width: 12px
        height 12px
        position: absolute
        right 15px
        top 40%
  .self-info-data
    bottom-border-1px(e4e4e4)
    .info-data-link
      float: left
      width: 33%
      text-align center
      border-right 1px solid #f1f1f1
      .info-data-top
        display block
        font-size 14px
        color #333333
        padding 15px 5px 10px
        >span
          display inline-block
          font-size 30px
          color #ffd930
          font-weight 700
          line-height 30px
      .info-data-bottom
        display inline-block
        font-size: 14px
        color #666666
        font-weight 400
        padding-bottom 10px

      &:nth-child(2) .info-data-top >span
        color #ff5f3e
      &:nth-child(3) .info-data-top >span
        color #6ac20b
  .self-my-order
    width: 100%
    position relative
    margin-top: 10px
    background: #ffffff
    .my-order
      display flex
      align-items center
      padding-left: 15px
      >span
        display flex
        align-items center
        width 20px
        height 20px
        .iconfont
          margin-left -10px
          font-size 30px
          color: $themeColor
      .my-order-div
        width: 100%
        border-bottom 1px solid #f1f1f1
        padding 18px 10px 18px 0
        font-size 16px
        color #333333
        display flex
        justify-content space-between
        .my-order-icon
          width: 10px
          height: 10px
      &:nth-child(2) >span .iconfont
        color: #ff5f3e
      &:nth-child(3) >span .iconfont
        color: #f90
</style>
