<template>
    <ul>
        <learning-resource
         v-for="res in resources" 
         :key="res.id" 
        :title="res.title"
        :desc="res.desc"
        :link = "res.link"
        :id = "res.id"
         />
    </ul>
</template>

<script>
import LearningResource from './LearningResource.vue'
export default{
    components:{
        'learning-resource':LearningResource
    },
    inject:['resources']

}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>