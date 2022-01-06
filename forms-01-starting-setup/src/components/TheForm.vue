<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid:usernameValidity === 'invalid'}">
      <label for="user-name">Your Name</label>
      <input @blur="validateName" v-model="username" id="user-name" name="user-name" type="text" />
      <p v-if="usernameValidity === 'invalid'">Please input the name</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input v-model='age' ref="ageInput" id="age" name="age" type="number" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select v-model="referrer" id="referrer" name="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input value="news" v-model="interest" v id="interest-news" name="interest" type="checkbox" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input value="tutorials" v-model="interest" id="interest-tutorials" name="interest" type="checkbox" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input value="nothing" v-model="interest" id="interest-nothing" name="interest" type="checkbox" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input value="video"  v-model="how" id="how-video" name="how" type="radio" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input value="blogs" v-model="how" id="how-blogs" name="how" type="radio" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input value="other" v-model="how" id="how-other" name="how" type="radio" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <RatingControl/>
    </div>
    <div class="form-control">
      <input v-model="confirm" type="checkbox" id="confirm-terms" name="confirm-terms" />
      <label>Confrim term of uses</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>
<script>
import RatingControl from './RatingControl.vue'
export default {
  components:{
    RatingControl
  },
  data(){
    return{
      username:'',
      age:null,
      referrer:'wom',
      interest:[], //multi checkboxes
      how:null,
      confirm:false ,//for single checkbox,
      usernameValidity:'pending'
    }
  },
  methods:{
    submitForm(){
      console.log('name'+this.username)
      this.username = ""
      console.log('age')
      console.log(this.age)
      console.log(this.$refs.ageInput.value)
      this.age = null
      console.log(this.referrer)
      this.referrer = 'wom'
      console.log(this.interest)
      console.log(this.how)
      this.interest = [];
      this.how = null
      console.log(this.confirm)
      this.confirm = false
    },
    validateName(){
      if(this.username === ''){
        this.usernameValidity = 'invalid'
      }else{
        this.usernameValidity = 'valid'
      }
    }
  }
}
</script>
<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

.form-control.invalid input{
  border-color:red;
}
.form-control.invalid label,p{
  color:red;
}
</style>