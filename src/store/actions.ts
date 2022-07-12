import { Mutations } from './mutations'
import { getDefaultProject, updateDefaultProject } from '@/http/service/uniauth'

export enum Actions {
  // 获取并设置默认 projectId
  setDefaultProjectId = 'setDefaultProjectId',

  // 更新默认projectId
  updateDefaultProjectId = 'updateDefaultProjectId'
}

export const actions = {
  // 获取并设置默认 projectId
  async [Actions.setDefaultProjectId]({ commit }: { commit: Function }) {
    const projectId = (await getDefaultProject())?.data?.projectId || ''

    commit(Mutations.setProjectId, projectId)
  },

  // 更新默认projectId
  [Actions.updateDefaultProjectId]({ commit }: { commit: Function }, projectId: string) {
    updateDefaultProject({ projectId })

    commit(Mutations.setProjectId, projectId)
  }
}