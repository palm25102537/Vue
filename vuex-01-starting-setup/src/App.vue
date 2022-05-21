<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counters></the-counters>
    <favorite-value />
    <change-counter></change-counter>
    <!-- <button @click="addOne">Add 2</button> -->
  </base-container>
  <base-container title="Auth">
    <user-auth />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounters from './components/TheCounters.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounters,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  data() {
    return {};
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
  methods: {
    addOne() {
      this.$store.dispatch('numbers/increment');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
