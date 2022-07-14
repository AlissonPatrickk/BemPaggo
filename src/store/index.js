import { createStore } from 'vuex'

export default createStore({
  state: {
    formValue: {
      react: false,
      vue: false,
      angular: false,
      quantidade: {
        number: 0 
      }
    },

  },
  getters: {
  },
  mutations: {
    valuesItem(state, payload) {
      state.formValue = payload
    }
  },
  actions: {
    valuesItem(context, payload) {
      context.commit('valuesItem', payload)
    },
  },
  modules: {
  }
})
