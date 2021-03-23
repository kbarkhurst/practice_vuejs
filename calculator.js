/* global Vue */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "I calculate:",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0,
      product: 0,
      showInfo: false,
      features: false,
      fruits: ["apple", "pear", "grapes"],
      newFruit: "",
    };
  },
  methods: {
    calculateSum: function() {
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    calculateProduct: function() {
      this.product = parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3);
    },
    addNewFruit: function() {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
  },
});