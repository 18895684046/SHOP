import request from '../index'
import config from '../config'

const preUrl = '/api/uniauth'

const {
  uniauth: {
    defaultProject,
    projects,
    permissions
  }
} = config

// 获取用户默认项目信息
export const getDefaultProject = () => {
  return request({
    url: preUrl + defaultProject,
    method: 'get',
  })
}

// 更新默认项目id
export const updateDefaultProject = (data: { projectId: string }) => {
  return request({
    url: preUrl + defaultProject,
    method: 'put',
    data
  })
}

// 获取所有项目信息
export const getProjects = (params: { appName: string }) => {
  return request({
    url: preUrl + projects,
    method: 'get',
    params
  })
}

// 获取用户权限
export const getPermissions = (
  params: {
    appName: string,
    projectId: string,
    email: string
  }
) => {
  return request({
    url: preUrl + permissions,
    method: 'get',
    params
  })
}