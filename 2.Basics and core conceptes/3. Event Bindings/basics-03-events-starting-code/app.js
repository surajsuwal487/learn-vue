const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    addCounter(num){
      this.counter = this.counter + num;
    },
    lessCounter(num){
      this.counter = this.counter - num;
    },
    setName(event, lastname){
      this.name = event.target.value + ' ' + lastname;
    }
  }
});

app.mount('#events');
