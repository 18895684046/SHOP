import request from '../index'
import config from '../config'

const {
  goods: {
    goodsList,
    spuDetail,
  }
} = config

// 获取商品列表
export const getGoodsList = (params: { keyWord: string, pageNo?: number, pageSize?: number }) => {
  return request({
    url: goodsList,
    method: 'get',
    params
  })
}

// 获取 商品spu详情
export const getGoodsSpuDetail = (params: { spuCode: string}) => {
  return request({
    url: spuDetail,
    method: 'get',
    params
  })
}

