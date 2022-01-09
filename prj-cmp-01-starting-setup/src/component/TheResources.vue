<template>
    <div>
        <base-card>
            <base-button @click="setSelectTab('stored-resource')">Stored Resource</base-button>
            <base-button @click="setSelectTab ('add-resource')">Add Resource</base-button>
        </base-card>
        <component :is="selectedTab"></component>
    </div>
</template>

<script>
export default {
    data(){
       return{    
           selectedTab:'stored-resource'
            }
    },
    methods:{
        setSelectTab(tab){
            this.selectedTab = tab
        }
    }
}
</script>