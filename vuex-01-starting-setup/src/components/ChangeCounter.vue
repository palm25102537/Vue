<template>
  <button @click="increment">Add 2</button>
  <button @click="increase({ value: 10 })">Add Ten</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increase', { value: 10 });
    // },
    ...mapActions('numbers', ['increment', 'increase']),
  },
};
</script>
