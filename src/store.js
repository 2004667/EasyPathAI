import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    loggedIn: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.loggedIn = true;
    },
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
  },
  getters: {
    user: state => state.user,
    loggedIn: state => state.loggedIn,
  },
})