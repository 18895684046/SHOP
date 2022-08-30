import { State } from './state'

export enum Mutations {
  // 设置 projectId
  setProjectId = 'setProjectId',

  // 设置用户权限
  setPermissions = 'setPermissions'
}


export const mutations = {
  // 设置 projectId
  [Mutations.setProjectId](state: State, projectId: string) {
    state.projectId = projectId
  },

  // 设置用户权限
  [Mutations.setPermissions](state: State, permissions: string[]) {
    state.permissions = permissions
  }
}