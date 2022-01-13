<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  data() {
    return {
      teamName: 'Test',
      members: [],
    };
  },
  inject:['users','teams'],
  props:['teamId'],
  created(){
    this.fetchTeam(this.teamId)
  },
  watch:{
    teamId(val){
      this.fetchTeam(val)
    }
  },
  methods:{
    fetchTeam(teamId){
    this.members=[]
    console.log(teamId)
    const idx = this.teams?.findIndex((ele)=>ele.id === teamId)
    this.teamName = this.teams[idx]?.name
    const members = this.teams[idx]?.members
    // members.forEach((ele)=>{
    //   this.users.forEach((item)=>{
    //     if(item.id === ele){
    //       this.members.push(item)
    //     }
    //   })
    // })
    members?.forEach((ele)=>{
      const user = this.users.find((item)=>item.id === ele)
      this.members.push(user)
    })
    }
  },

};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>