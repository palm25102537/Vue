const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
      lastName: '',
    };
  },
  watch: {
    //can use variable in data to name watcher
    // name(value) {
    //   this.fullName = value + ' ' + this.lastName
    // },
    // lastName(value) {
    //   this.fullName = this.name + ' ' + value
    // }
  },
  computed: {
    fullname() {
      return this.name + '' + this.lastName
      // return this.name + ' ' + 'Hongnak';
    } //call it as data property
    //Vue aware dependencise (name property changed)
  },
  methods: {
    // setName(event, lastName) {
    //   this.name = event.target.value + ' ' + lastName;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ""
    }
  }
});

app.mount('#events');
