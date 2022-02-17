import request from '@/http/index'
import config from './config'

const {
  apps
} = config

// 获取应用信息
export const getApps = () => {
  return request({
    url: apps,
    method: 'get'
  })
}
