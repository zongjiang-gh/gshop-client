<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item" v-for="(star,index) in starClasses" :class="star" :key="index"></span>
  </div>
</template>

<script>
export default {
  name: 'star',
  props: {
    score: Number,
    size: Number
  },
  computed: {
    starClasses () {
     const CLASS_ON = 'on'
     const CLASS_HALF = 'half'
     const CLASS_OFF = 'off'
     let stars = []
     let on = this.score * 10;
     for (let i = 0; i < 5; i++) {
       if(on >= 10){
         stars.push(CLASS_ON)
       }else if(on >= 5){
         stars.push(CLASS_HALF)
       }else{
         stars.push(CLASS_OFF)
       }
       on-=10
     }
     return stars
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'

.star
  float left
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star48_on')
      &.half
        bg-image('./images/star48_half')
      &.off
        bg-image('./images/star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star36_on')
      &.half
        bg-image('./images/star36_half')
      &.off
        bg-image('./images/star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star24_on')
      &.half
        bg-image('./images/star24_half')
      &.off
        bg-image('./images/star24_off')
</style>
