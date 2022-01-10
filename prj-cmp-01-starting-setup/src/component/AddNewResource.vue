<template>  
        <base-dialog v-if="inputInvalid" title="Invalid Input" confirmText="Close" @close="confirmError">
            <template #default>
                <p>Unfortunately,some input value is invalid</p>
                <p>Please check all input and make sure your input is correct</p>
            </template>
            <!-- <template #action>
                <base-button @click="inputInvalid = false">Okay</base-button>
            </template> -->
        </base-dialog>
   <base-card>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label :class="{error:formValidateState.titleValidity === 'invalid'}" for="title">Title</label>
            <input @blur="validateTitle" ref="title" id="title" name="title" type="text"/>
            <div style="height:40px;">
                <p class="error" v-if="formValidateState.titleValidity === 'invalid'">Please input the title!</p>
             </div>
        </div>
         <div class="form-control">
            <label for="desc" :class="{error:formValidateState.descValidity === 'invalid'}">Description</label>
            <input @blur="validateDesc" ref="desc" id="desc" name="desc" type="text"/>
            <div style="height:40px;">
                <p class="error" v-if="formValidateState.descValidity === 'invalid'">Please input the description!</p>
             </div>
        </div>
         <div class="form-control">
            <label for="link" :class="{error:formValidateState.linkValidity === 'invalid'}">Link</label>
            <input @blur="validateLink" ref="link" id="link" name="link" type="text"/>
             <div style="height:40px;">
                <p class="error" v-if="formValidateState.linkValidity === 'invalid'">Please input the link!</p>
             </div>
        </div>
        <div>
            <base-button type="submit">Add Resource</base-button>
        </div>
    </form>
   </base-card>
</template>

<script>
export default {
    inject:['resources','addResource'],
    methods:{
        submitForm(){
            console.log(this.$refs.title.value)
            const title = this.$refs.title.value
            const desc = this.$refs.desc.value
            const link = this.$refs.link.value
            if(this.formValidateState.titleValidity === 'invalid' || this.formValidateState.descValidity === 'invalid' || this.formValidateState.linkValidity === 'invalid'){
                return
            }
            if(title.trim()===''||desc.trim()===''||link.trim()===""){
                this.inputInvalid = true;
                return;
            }
            this.addResource(title,desc,link)
        },
        validateTitle(){
            const title = this.$refs.title.value
            console.log(title)
            if(title === ''){
                this.formValidateState.titleValidity = 'invalid'
            }else{
                this.formValidateState.titleValidity = 'valid'
            }
        },
        validateDesc(){
            const desc = this.$refs.desc.value
            if(desc === ''){
                this.formValidateState.descValidity = 'invalid'
            }else{
                this.formValidateState.descValidity = 'valid'
            }
        },
        validateLink(){
            const link = this.$refs.link.value
            if(link === ''){
                this.formValidateState.linkValidity = 'invalid'
            }else{
                this.formValidateState.linkValidity = 'valid'
            }
        },
        confirmError(){
            this.inputInvalid = false
        }
    },
    data(){
        return {
            formValidateState:{
                titleValidity:'pending',
                descValidity:'pending',
                linkValidity:'pending'
            },
            inputInvalid:false
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
.error{
    color:red;
}
</style>