import { Mutations } from './mutations'

export enum Actions {
  // 例子
  exampleAction = 'exampleAction'
}

export const actions = {
  // 定义actions的例子
  async [Actions.exampleAction]({ commit }: { commit: Function }) {
    // toDo

    commit(Mutations.exampleMutations)
  }
}