const app = Vue.createApp({
   data() {
      return {
         name: '',
         confirmedInput: '',
      }
   },
   methods: {
      showAlert() {
         alert('Button is clicked');
      },
      setName(event) {
         this.name = event.target.value;
      },
      confirmInput() {
         this.confirmedInput = this.name;
      }
   }
});

app.mount('#assignment');