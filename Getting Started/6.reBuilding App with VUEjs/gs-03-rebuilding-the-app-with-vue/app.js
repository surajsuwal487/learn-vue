//Here Vue is a global object.
//In globl vue object we can call createApp function.
//Create app take JS object where we cofigure vue app.
//We define required data by adding data property.
//A property name data which has a function as a value.
//That function must return an object.

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      //Here this refers to above return object.
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
}).mount('#app');



// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);