<template>
    <div>
        <the-header title="Remember me"></the-header>
        <the-resources/>
    </div>
</template>

<script >


import TheHeader from './component/Layouts/TheHeader.vue'
import TheResources from './component/TheResources.vue'
export default {
    components:{
        TheHeader,
        TheResources
    },

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

