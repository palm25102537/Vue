<template>
    <div>
        <base-card>      
            <div style="display:flex;">
                <base-button @click="setSelectTab('stored-resource')" :mode="storedResButtonMode">Stored Resource</base-button>
                <base-button @click="setSelectTab ('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
            </div>
        </base-card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import StoredResource from './StoredResource.vue'
import AddNewResource from './AddNewResource.vue'
export default {
    components:{
       'stored-resource': StoredResource,
        'add-resource': AddNewResource
    },
    data(){
       return{    
           selectedTab:'stored-resource',
           storeResource:[
                {
                    id:'official-guide',
                    title:'Official guide',
                    desc:'The official Vue doc',
                    link:'http://vuejs.org'
                },
                {
                    id:'google',
                    title:'Google',
                    desc:'Lear to google',
                    link:'http://google.org'
                }
            ]
        }
    },
    methods:{
        setSelectTab(tab){
            this.selectedTab = tab
        },
        addNewResource(title,desc,url){
            const newResource = {
                id: new Date().toISOString(),
                title,
                desc,
                url
            }
            this.storeResource.unshift(newResource)
            this.selectedTab = 'stored-resource'
        },
        removeResource(id){
            const idx = this.storeResource.findIndex((ele)=>ele.id === id)
            console.log(idx)
            this.storeResource.splice(idx,1)
        }
    },
    provide(){
        return {
            resources:this.storeResource,
            addResource:this.addNewResource,
            removeResource:this.removeResource
        }
    },
    computed:{
        storedResButtonMode(){
            return this.selectedTab === 'stored-resource'? null :'flat'
        },
        addResButtonMode(){
             return this.selectedTab === 'add-resource'? null :'flat'
        }
    }
}
</script>