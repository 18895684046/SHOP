import request from '@/http/index'
import config from './config'

const {
  category,
} = config

// 获取轮播图信息
export const getCategoryFunc = () => {
  return request({
    url: category,
    method: 'get'
  })
}
