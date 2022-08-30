import { State } from './state'

// 对外暴露处理后的state
export const getters = {
  projectId(state: State) { return state.projectId },

  permissions(state: State) { return state.permissions }
}