import { createStore } from 'vuex'

const saveStatePlugin = (store) => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('user', JSON.stringify(state.user));
    localStorage.setItem('loggedIn', state.loggedIn);
  });
};

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loggedIn: JSON.parse(localStorage.getItem('loggedIn')) || false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.loggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.loggedIn = false;
      localStorage.removeItem('user');
      localStorage.removeItem('loggedIn');
    },
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    user: state => state.user,
    loggedIn: state => state.loggedIn,
  },
  plugins: [saveStatePlugin],
})