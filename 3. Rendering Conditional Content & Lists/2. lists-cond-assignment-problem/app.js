const app = Vue.createApp({
   data() {
      return {
         enteredValue: '',
         tasks: [],
         taskListIsVisible: true
      };
   },
   computed: {
      buttonCaption(){
         return this.taskListIsVisible ? 'Hide Lists' : 'Show Lists';
      }
   },
   methods: {
      addTask() {
         this.tasks.push(this.enteredValue);
      },
      toggleTaskList(){
         this.taskListIsVisible = !this.taskListIsVisible;
      }
   }
});

app.mount('#assignment');