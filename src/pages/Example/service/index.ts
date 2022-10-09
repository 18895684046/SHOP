import request from '@/http/index'
import config from './config'

const {
  swipeList,
  allGoodsType,
  homeGoodsList
} = config

// 获取轮播图信息
export const getSwipeList = () => {
  return request({
    url: swipeList,
    method: 'get'
  })
}

// 获取首页商品分类
export const getGoodsType = () => {
  return request({
    url: allGoodsType,
    method: 'get'
  })
}

// 获取首页商品列表
export const getGoodsList = () => {
  return request({
    url: homeGoodsList,
    method: 'get'
  })
}
