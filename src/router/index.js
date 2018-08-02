import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        footShow:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        footShow:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        footShow:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        footShow:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path:'goods',
          component: ShopGoods
        },
        {
          path:'info',
          component: ShopInfo
        },
        {
          path:'ratings',
          component: ShopRatings
        },
        {
          path:'',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
