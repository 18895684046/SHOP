import { State } from './state'

export enum Mutations {
  // 设置 projectId
  setProjectId = 'setProjectId'
}


export const mutations = {
  // 设置 projectId
  [Mutations.setProjectId](state: State, projectId: string) {
    sessionStorage.setItem('projectId', projectId)
    state.projectId = projectId
  }
}