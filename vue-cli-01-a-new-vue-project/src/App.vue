<template>
    <section>
        <header>
          <h1>My Friends</h1>
        </header>
        <new-friend @add-contact = "addContact"/>
    <ul>
        <friend-contact
          v-for="friend in friends"
          :key = "friend.id"
          :name = "friend.name"
          :phone-number= "friend.phone"
          :email = "friend.email"
          :is-favorite = "friend.isFavorite"
          @toggle-favorite = "toggleFavorite"
          :id = "friend.id"
          @delete = "deleteContact"
        />
        <!-- <friend-contact
            name="Palm2"
            phone-number="0123456"
            email="plam2@localhost.com"
            :is-favorite = true 
            />
        <friend-contact
            name="Palm3"
            phone-number="0123456"
            email="plam2@localhost.com"
            :is-favorite = false
            /> -->
     </ul>
    </section>
</template>

<script>
import NewFriend from './components/NewFriend.vue'
export default  {
  components: { NewFriend },
    data(){
        return {
            friends:[
                {
                id:'manuel',
                name:'Manuel Lorenz',
                phone:'0123 45678 90',
                email:'manuel@localhost.com',
                isFavorite:true,
                },
                {
                id:'julie',
                name:'Julie Lorenz',
                phone:'0123 45678 90',
                email:'Julie@localhost.com',
                isFavorite:false
                }
            ]
        }
    },
    methods:{
      toggleFavorite(friendId){
        const friend = this.friends.find((ele)=>ele.id === friendId)
        friend.isFavorite = !friend.isFavorite
      },
      addContact(name,phone,email){
        const newFriend = {
          id:new Date().toISOString(),
          name,
          phone,
          email,
          isFavorite:false
        }
        this.friends.push(newFriend)
      },
      deleteContact(friendId){
        const idx = this.friends.findIndex((ele)=>ele.id === friendId)
        this.friends.splice(idx,1)
      }

    }    
}
</script>
<style >
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>