const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      lastname: '',
    };
  },
  methods: {
    // If you are not going to bind it to event you should use event.
    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Suwal';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  },
  // The method you defiend in computed are called and executed differently.
  computed: {
    // We are going to use this like a data properties not like method.
    fullname() {
      if (this.name === '' || this.lastname === '') {
        return '';
      }
      return this.name + ' ' + this.lastname;
    }
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 200)
      }
    }
    // name(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + 'Suwal';
    //   }
    // }
  }
});

app.mount('#events');
