import { createStore } from 'vuex'

const getDefaultUser = () => {
  return {
    firstName: '',
    lastName: '',
    middleName: '',
    dob: ''
  }
}

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    user: getDefaultUser(),
  },
  mutations: {
    resetUserState(state) {
      Object.assign(state.user, getDefaultUser())
    },
    updateFirstName(state, payload) {
      state.user.firstName = payload
    },
    updateLastName(state, payload) {
      state.user.lastName = payload
    },
    updateMiddleName(state, payload) {
      state.user.middleName = payload
    },
    updateDob(state, payload) {
      state.user.dob = payload
    },
  },
  actions: {
    resetUserState({ commit }) {
      commit('resetUserState')
    },
  },
  modules: {},
})
