<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="fetchData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && !error && results.length === 0">No Data Please start survey</p>
      <p v-else-if="!isLoading && error">{{error}}</p>
      <ul v-else-if="!isLoading && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data(){
    return {
      results:[],
      isLoading:false,
      error:null
    }
  },
  methods:{
    async fetchData(){
      this.isLoading = true;
      const results = [];
      try{
        const res =  await fetch('https://vue-demo-fbd64-default-rtdb.firebaseio.com/survey.json')
        const data = await res.json()
        for(const id in data){
          results.push({id:id,name:data[id].name,rating:data[id].rating})
        }
      }catch(err){
        this.error = 'Failed to fetch data - try again later'
        console.log(err)
        this.isLoading = false;
        return;
      }
      this.results = results
      this.isLoading = false;
    }   
  },
  beforeMount(){
    this.fetchData()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>