const app = Vue.createApp({
  data() {
    return {
      counter: 50,
      name: '',
      confirmedName: '',
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
    },
    submitForm(){
      alert('Submitted!');
    },
    confirmedInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
