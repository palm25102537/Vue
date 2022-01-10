<template>
  <ul>
    <li :class="{active: activeOption === 'poor'}">
      <button  @click="activate('poor')" type="button">Poor</button>
    </li>
    <li :class="{active: activeOption === 'avg'}">
      <button  @click="activate('avg')" type="button">Average</button>
    </li>
    <li :class="{active: activeOption === 'great'}">
      <button  @click="activate('great')" type="button">Great</button>
    </li>
  </ul>
</template>
<script>
export default {
  data(){
    return {
      activeOption:null
    }
  },
  methods:{
    activate(option){
      console.log(option)
      this.activeOption = option
      console.log(this.activeOption)
    }
  }
}
</script>

<style scoped>
.active{
  border-color:#a00078
}
.active button{
  color:#a00078
}
 ul{
   list-style:none;
   margin: 0.5rem 0;
   padding: 0;
   display:flex;
 }

 li{
   margin:0 1rem;
   border: 1px solid #cccc;
   padding:1rem;
   display:flex;
   justify-content: center;
   align-items: center;
 }

 button{
   font:inherit;
   border:none;
   background-color: transparent;
   cursor: pointer;
 }

 
</style>