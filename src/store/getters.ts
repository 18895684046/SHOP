import { State } from './state'

// 对外暴露处理后的state
export const getters = {
  exampleGetter(state: State) { return state.exampleGetter }
}