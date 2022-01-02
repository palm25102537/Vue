<template>
    <li>
        <h2>{{name}} {{isFavorite === true ? '(Fav)': null}}</h2>
        <button @click="toggleDetails">{{toggle? 'Hide Details':'Show Details'}}</button>
        <button @click="toggleFav">{{isFavorite === true ? 'Unfav':'Fav'}}</button>
        <ul v-if="toggle">
            <li><strong>Phone: {{phoneNumber}}</strong></li>
            <li><strong>Email: {{email}}</strong></li>
        </ul>
        <button @click="deleteFriend(id)">Delete</button>
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
            type:Boolean,
            required:false,
            default:false,
            // validator: function(val){
            //     if(isNaN(val)){
            //         alert('error')
            //         return false
            //     }
            //     return val ==='1' || val === '0'
            // }
        },
        id:{
            type:String,
            required:true
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
            // isFriendFavorite:this.isFavorite
        }
        },
    methods:{
        toggleDetails(){
            this.toggle = !this.toggle
            //Vue translate phone-number to phoneNumber
        },
        toggleFav(){
            // this.isFriendFavorite = !this.isFriendFavorite
            this.$emit('toggle-favorite',this.id)
        },
        deleteFriend(){
            this.$emit('delete',this.id)
        }
    },
    emits:{
        'toggle-favorite':(id)=>{
            if(id){
                return true
            }else{
                console.warn('friend id is needed')
                return false
            }
        },
        'delete':null
    }
}
</script>
