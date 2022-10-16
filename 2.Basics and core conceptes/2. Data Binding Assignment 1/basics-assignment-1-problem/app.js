const app = Vue.createApp({
   data() {
      return {
         name: 'Suraj Suwal',
         age: 23,
         imageUrl: "https://image.shutterstock.com/image-photo/hand-browsing-on-internet-medical-600w-1936475815.jpg",
      }
   },
   methods: {
      calculateAge() {
         return this.age + 5;
      },
      calculateRandom() {
         return Math.random();
      }
   }
});

app.mount('#assignment');