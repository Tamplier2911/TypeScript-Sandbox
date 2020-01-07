"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"]({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/todos/1"
})
  .then(function(res) {
    var todo = res.data;
    var id = todo.id,
      title = todo.title,
      completed = todo.completed;
    logTodos(id, title, completed);
  })
  ["catch"](function(err) {
    return console.log(err.message);
  });
var logTodos = function(id, title, completed) {
  console.log(
    "The todo with ID: " +
      id +
      " \n    Task: " +
      title +
      "\n    Done: " +
      completed
  );
};
