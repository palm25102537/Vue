<template>
    <li>
        <h2>{{name}} {{isFriendFavorite === '1'? '(Fav)': null}}</h2>
        <button @click="toggleDetails">{{toggle? 'Hide Details':'Show Details'}}</button>
        <button @click="toggleFav">{{isFriendFavorite === '1'? 'Unfav':'Fav'}}</button>
        <ul v-if="toggle">
            <li><strong>Phone: {{phoneNumber}}</strong></li>
            <li><strong>Email:</strong></li>
        </ul>
    </li>
</template>

<script>
export default {
    props:{
        name:{
            type:String,
            required:true
            },
        phoneNumber:{
            type:String,
            required:true
            },
        email:{
            type:String,
            required:true
            },
        isFavorite:{
            type:String,
            required:false,
            default:'0',
            validator: function(val){
                if(isNaN(val)){
                    alert('error')
                    return false
                }
                return val ==='1' || val === '0'
            }
        }
    },
    // props:{
    //     name:String,
    //     phoneNumber:String,
    //     email:String,
    //     isFavorite:String,
    // },
    // props:[
    //     'name',
    //     'phoneNumber',
    //     'email',
    //     'isFavorite'
    // ],
    data(){
        return {
            toggle:false,
            isFriendFavorite:this.isFavorite
        }
        },
    methods:{
        toggleDetails(){
            this.toggle = !this.toggle
            //Vue translate phone-number to phoneNumber
        },
        toggleFav(){
            if(this.isFriendFavorite === '1'){
                    this.isFriendFavorite = '0'
                }else if(this.isFriendFavorite === '0'){
                    this.isFriendFavorite = '1'
                    }  
        }
    }
}
</script>
