const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      task: ''
    }
  },
  methods: {
    addTask() {
      if (this.task !== '') {
        this.tasks.push(task)
      }
    }
  }
})

app.mount('#assignment')