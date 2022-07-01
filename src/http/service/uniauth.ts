import request from '../index'
import config from '../config'

const preUrl = '/api/uniauth'

const {
  uniauth: {
    defaultProject,
    projects
  }
} = config

// 获取用户默认项目信息
export const getDefaultProject = (
  params: {
    email: string
  }
) => {
  return request({
    url: preUrl + defaultProject,
    method: 'get',
    params
  })
}

// 获取所有项目信息
export const getProjects = (
  params: {
    email: string
  }
) => {
  return request({
    url: preUrl + projects,
    method: 'get',
    params
  })
}