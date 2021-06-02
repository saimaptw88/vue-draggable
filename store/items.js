// import { get } from 'core-js/core/dict'

export const state = () => {
  return {
    items: [],
  }
}

export const mutations = {
  setItems(state, data) {
    state.items = data
  },
}

export const actions = {
  async updates({ commit }, items) {
    const response = await this.$axios.patch('/updates', items)
    commit('setItems', response.data)
  },

  async get({ commit }) {
    const response = await this.$axios.get('/item')
    commit('setItems', response.data)
  },
}
