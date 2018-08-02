<template>
<div id="app">
  <router-view></router-view>
  <FooterGuide v-show="$route.meta.footShow"></FooterGuide>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
(function (designWidth){
  var size = document.documentElement.clientWidth / (designWidth / 100);
  document.documentElement.style.fontSize = size + "px";
  document.body.style.fontsize = 14 + 'px';
})(430);
export default {
  name: 'app',
  components: {
    FooterGuide
  },
  created () {
    this.$store.dispatch('getLocation')
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
  font-size 14px
  position relative
</style>

