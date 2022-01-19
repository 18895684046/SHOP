import request from '../index'
import config from '../config'

const {
  navbar
} = config

// 获取所有服务信息
export const getNavbar = () => {
  return request({
    url: navbar,
    method: 'get',
    params: {
      token: 1
    }
  })
}