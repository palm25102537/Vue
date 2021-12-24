const app = Vue.createApp({
  data() {
    return {
      count: 0,
      // result: ''
    }
  },
  methods: {
    add(val) {
      this.count = this.count + val
    },
  },
  watch: {
    // count(val) {
    //   if (val > 37) {
    //     this.result = 'Too much!'
    //   } else if (val < 37) {
    //     this.result = 'Not there yet'
    //   } else if (val === 37) {
    //     this.result = val
    //   }
    // }
    res() {
      const a = setTimeout(() => {
        this.count = 0
        clearTimeout(a)
      }, 5000)
    }
  },
  computed: {
    res() {
      if (this.count > 37) {
        return 'Too much'
      } else if (this.count === 37) {
        return this.count
      } else {
        return 'Not there yet'
      }
    }
  }
})

app.mount('#assignment')