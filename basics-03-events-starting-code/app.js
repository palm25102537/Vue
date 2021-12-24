const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirm: ''
    };
  },
  methods: {
    confirmInput(e) {
      this.confirm = this.name
    },
    submit() {
      console.log('can access')
      console.log('loading...')
    },
    add(num) {
      this.counter = this.counter + num
      console.log('work')
    },
    reduce(num) {
      if (this.counter - num > 0) {
        console.log('working')
        this.counter = this.counter - num
      } else {
        this.counter = 0
      }
    },
    setName(e, lastName) {
      const { value } = e.target
      if (value === '') {
        this.name = ""
      } else {
        this.name = `${value}  ${lastName}`
      }

    }
  }
});

app.mount('#events');
