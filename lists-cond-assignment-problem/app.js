const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      task: '',
      isToggle: true,
    }
  },
  methods: {
    addTask() {
      if (this.task !== '') {
        this.tasks.push(this.task)
        this.task = ''
      }
    }
  },
  computed: {
    toggle() {
      return this.isToggle ? 'Hide List' : 'Show List'
    }
  }
})

app.mount('#assignment')