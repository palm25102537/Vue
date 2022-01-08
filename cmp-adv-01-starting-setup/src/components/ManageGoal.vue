<template>
<div>
      <h2>Manage Goals</h2>
        <input ref="goal" type="text"/>
        <button @click="setGoal">Set Goal</button>
        <teleport to="body">
        <error-alert v-if="invalidInput" >
            <h2>Invalid Goal</h2>
            <p>Please input goal!</p>
            <button stlye="textAlign:center" @click="invalidInput = false">OK</button>
        </error-alert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
    components:{
        ErrorAlert
    },
    data(){
        return {
            invalidInput:false
        }
    },
    methods:{
        setGoal(){
      
            const val = this.$refs.goal.value
            if(val === ''){
                this.invalidInput = true
            }
        }
    }
}
</script>