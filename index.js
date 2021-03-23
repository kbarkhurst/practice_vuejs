/* global Vue */
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    todos: [
      { text: 'Finish HW' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ],
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },
})