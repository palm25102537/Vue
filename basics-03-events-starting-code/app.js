const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num
      console.log('work')
    },
    reduce(num) {
      if (this.counter > 0) {
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
