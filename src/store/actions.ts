import Cookies from 'js-cookie'
import { Mutations } from './mutations'
import { getDefaultProject } from '@/http/service/uniauth'

export enum Actions {
  // 获取并设置默认 projectId
  setDefaultProjectId = 'setDefaultProjectId'
}

export const actions = {
  // 获取并设置默认 projectId
  async [Actions.setDefaultProjectId]({ commit }: { commit: Function }) {
    const email = Cookies.get('email')
    const projectId = sessionStorage.getItem('projectId') || (await getDefaultProject({ email }))?.data?.projectId || ''

    commit(Mutations.setProjectId, projectId)
  }
}