<template>
  <base-container title="Vuex">
    <the-counters></the-counters>
    <button @click="addOne">Add 1</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounters from './components/TheCounters.vue'
import ChangeCounter from './components/ChangeCounter.vue'

export default {
  components: {
    BaseContainer,
    TheCounters,
    ChangeCounter
  },
  data(){
    return{

    }
  },
  methods:{
    addOne(){
      this.$store.state.counter++;
    }
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