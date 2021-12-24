const app = Vue.createApp({
  data() {
    return {
      input: '',
      isVisible: true,
      color: ''
    }
  },
  methods: {
    onInput(e) {
      const { value } = e.target
      this.input = value
    },
    toggleP() {
      this.isVisible = !this.isVisible
    },
    onConfirmColor(e) {
      const { value } = e.target
      this.color = value
    }
  },
  computed: {
    userClass() {
      return { [this.input]: true, visible: this.isVisible, hidden: !this.isVisible }
    },
  }
})

app.mount('#assignment')