const app = Vue.createApp({
    data(){
       return {
           msg:'Welcome',
           output:'',
           confirmText:''
        }
    },
    methods:{
        alertMsg(){
            alert(this.msg)
        },
        showMsg(e){
            const {value} = e.target
            this.output = value
        },
        enterToShowMsg(e){
            const {value} = e.target
            this.confirmText = value
        }
    }
})

app.mount('#assignment')