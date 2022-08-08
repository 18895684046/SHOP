import request from '../index'
import config from '../config'

const {
  navbar
} = config

const isProd = import.meta.env.MODE === 'production'

// 获取所有服务信息
export const getNavbar = () => {
  return request({
    url: navbar,
    method: 'get',
    params: isProd ? {
      timestamp: new Date().getTime()
    } : {
      token: 1,
      timestamp: new Date().getTime()
    }
  })
}