import { State } from './state'

export enum Mutations {
  // 例子
  exampleMutations = 'exampleMutations'
}

export const mutations = {
  // 定义mutations例子
  [Mutations.exampleMutations](state: State, payload: any) {
    // toDo
  }
}