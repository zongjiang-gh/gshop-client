<template>
  <section class="login">
    <div class="login-container">
      <div class="login-header">
        <h2 class="login-logo">硅谷外卖</h2>
        <div class="login-title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="computeTime>0" class="get_verification"
                      :class="{right_phone: isRightPhone}" @click.prevent="sendCode">
                {{computeTime>0 ? `已发送(${computeTime}s)`: '获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input :type="isShowPwd?'text':'password'" maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch_button" @click="isShowPwd=!isShowPwd" :class="isShowPwd?'on':'off'">
                  <div class="switch_circle" :class="{right: isShowPwd}"></div>
                  <span class="switch_text">{{isShowPwd ? 'abc' : ' . . . '}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha"
                @click="updateCaptcha" ref="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
    <!--<alert-tip :alert-text="alertText" v-if="alertShow" @closeTip="closeTip"/>-->
  </section>
</template>

<script>
import {reqSendCode,reqSmsLogin,reqPwdLogin} from '../../api'
import {Toast, MessageBox} from 'mint-ui'
// import AlertTip from '../../components/AlertTip/AlertTip.vue'
export default {
  name: 'login',
  data () {
    return {
      loginWay: true,
      phone: '',
      code: '',
      name: '',
      pwd: '',
      captcha: '',

      computeTime: 0,
      isShowPwd: false
    }
  },
  computed: {
    isRightPhone(){
      return /^1\d{10}$/.test(this.phone)
    }
  },
  components: {
    // AlertTip
  },
  methods: {
    showAlert (msg) {
      MessageBox.alert(msg,'提示')
    },
    async sendCode () {
      const {isRightPhone,phone,showAlert} = this
      if(isRightPhone){
        this.computeTime = 30
        const intervalId = setInterval(() => {
          this.computeTime--
          if(this.computeTime <= 0){
            clearInterval(intervalId)
            this.computeTime = 0
          }
        },1000)
        const result = await reqSendCode(phone)
        if(result.code === 0){
          Toast('短信已发送')
        }else{
          this.computeTime = 0
          showAlert(result.msg)
        }
      }
    },
    updateCaptcha () {
      this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
    },
    async login () {
      const {loginWay,phone,code,name,pwd,isRightPhone,showAlert,updateCaptcha} = this
      let {captcha,computeTime} = this
      let result = null
      if(loginWay){
        if(!isRightPhone){
          showAlert ('请输入正确的电话号码')
          return
        }
        else if(!/^\d{6}$/.test(code)){
          showAlert ('请输入正确的验证码')
          return
        }
        result = await reqSmsLogin(phone,code)
      }else{
        if(!name){
          showAlert ('请输入用户名')
          return
        }
        else if(!pwd){
          showAlert ('请输入密码')
          return
        }
        else if(!captcha){
          showAlert ('请输入验证码')
          return
        }
        result = await reqPwdLogin({name, pwd, captcha})
      }
      //返回结果后进行判断
      if(result.code === 0){
        this.$store.dispatch('saveUser',result.data)
        this.$router.replace('/profile')
      }else{
        showAlert(result.msg)
        computeTime = 0
      }
      !loginWay && updateCaptcha()
      captcha = ''
    }
  }
}
</script >

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.login
  width 100%
  height 100%
  background-color: #fff
  .login-container
    width 80%
    margin 0 auto
    padding-top 60px
    .login-header
      h2.login-logo
        font-size 40px
        font-weight bold
        color $themeColor
        text-align center
      .login-title
        padding: 40px
        text-align center
        >a
          color #333333
          font-size 14px
          padding-bottom 4px
          &.on
            color $themeColor
            font-weight: 700
            border-bottom 2px solid $themeColor
          &:first-child
            margin-right 40px

    .login_content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
              border 1px solid #02a774
          .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
              &.right_phone
                color black
          .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .switch_button
              font-size 12px
              border 1px solid #ddd
              border-radius 8px
              transition background-color .3s,border-color .3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color #fff
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background #02a774
              >.switch_circle
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                transition transform .3s
                &.right
                  transform translateX(27px)
          .login_hint
            margin-top 12px
            color #999
            font-size 14px
            line-height 20px
            >a
              color #02a774
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background #4cd96f
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
      .about_us
        display block
        font-size 12px
        margin-top 20px
        text-align center
        color #999
    .go_back
      position absolute
      top 5px
      left 5px
      width 30px
      height 30px
      >.iconfont
        font-size 20px
        color #999
</style>
