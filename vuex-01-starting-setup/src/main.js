import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);

const counterModule = {
  namespaced: true, //extra options to tell vuex that entire module has detached from rest of store
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    }, // allow mutation to be asynchronous
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state) {
      const finalCounter = state.counter * 2;
      return finalCounter < 0 ? 0 : finalCounter > 100 ? 100 : finalCounter;
    },
  },
};

const store = createStore({
  //config store
  modules: {
    numbers: counterModule, //numbers = name spaced of counterModule
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
});

app.use(store);

app.mount('#app');
