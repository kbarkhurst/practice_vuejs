/* global Vue, axios */

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

console.log('Hello from JavaScript!');

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      todos: [],
      title: ""
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        console.log(response.data);
        this.todos = response.data;
      });
  },
  methods: {
    createTodo: function() {
      var params = { userId: 1, title: this.title, completed: false};
      axios.post("https://jsonplaceholder.typicode.com/todos", params).then(response => { 
        console.log(response.data);
        this.todos.push(response.data);
        this.title = "";
      });
    }
  }
});