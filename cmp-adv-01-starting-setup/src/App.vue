<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectComp('active-goal')">Active Goal</button>
    <button @click="setSelectComp('manage-goal')">Manage Goal</button>
    <!-- <active-goal v-if="selectedComp === 'active-goal'"/>
    <manage-goal v-if="selectedComp === 'manage-goal'"/> -->
    <keep-alive>
      <component :is="selectedComp"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ManageGoal from './components/ManageGoal.vue'
import ActiveGoal from './components/ActiveGoal.vue'
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
export default {
  components:{
    'the-header':TheHeader,
    // 'badge-list':BadgeList,
    // 'user-info':UserInfo,
    ActiveGoal,
    ManageGoal
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      selectedComp: 'active-goal'
    };
  },
  methods:{
    setSelectComp(cmp){
      this.selectedComp = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>