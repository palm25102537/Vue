<template>
<button @click="addOne">Add one</button>
</template>

<script>
export default {
  methods:{
    addOne(){
      this.$store.commit('increase',{value:10})
    }
  },
}
</script>