import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { State, state } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state,
  getters,
  mutations,
  actions
})

// 自定义useStore
export const useStore = () => {
  return baseUseStore(key)
}

export { Actions } from './actions'

export { Mutations } from './mutations'