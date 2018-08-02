import {RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  RECEIVE_GOODS
} from './mutation-types'
import {reqLocation,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api'

export default {
  async getLocation ({commit,state}) {
    const {latitude,longitude} = state
    const geohash = `${latitude},${longitude}`
    const result = await reqLocation(geohash)
    commit(RECEIVE_ADDRESS,{address: result.data})
  },
  async getCategorys ({commit}) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS,{categorys: result.data})
  },
  async getShops ({commit,state}) {
    const {latitude,longitude} = state
    const result = await reqShops(latitude,longitude)
    commit(RECEIVE_SHOPS,{shops: result.data})
  },
  async getUserInfo ({commit}) {
    const result = await reqUser()
    if(result.code === 0){
      commit(RECEIVE_USER,{user: result.data})
    }
  },
  saveUser ({commit},user) {
    commit(RECEIVE_USER,{user})
  },
  async logout ({commit}) {
    const result = await reqLogout()
    if(result.code === 0){
      commit(RESET_USER)
    }
  },
  async getGoods ({commit}) {
    const result = await reqShopGoods()
    if(result.code === 0){
      commit(RECEIVE_GOODS,{goods: result.data})
    }
  },async getRating ({commit}) {
    const result = await reqShopRatings()
    if(result.code === 0){
      commit(RECEIVE_RATINGS,{ratings: result.data})
    }
  },
  async getInfo ({commit}) {
    const result = await reqShopInfo()
    if(result.code === 0){
      console.log(result)
      commit(RECEIVE_INFO,{info :result.data})
    }
  },
}
/*
const {latitude,longitude,keyword} = state
const result = await reqShopList({latitude,longitude,keyword})*/
