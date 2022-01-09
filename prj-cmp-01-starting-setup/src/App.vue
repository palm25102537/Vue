<template>
    <div>
        <the-header title="Remember me"></the-header>
        <stored-resource :resources="storeResource"/>
    </div>
</template>

<script >

import StoredResource from './component/StoredResource.vue'
import TheHeader from './component/Layouts/TheHeader.vue'

export default {
    components:{
        StoredResource,
        TheHeader,
    },
    data(){
        return{
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
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=The+Nautigal&display=swap');

*{
    box-sizing: border-box;
}

html {
    font-family: 'The Nautigal', cursive;
    font-size:20px;
}

body{
    margin:0;
}
</style>

