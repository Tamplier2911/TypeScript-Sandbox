import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios({
  method: "GET",
  url: `https://jsonplaceholder.typicode.com/todos/1`
})
  .then(res => {
    const todo = res.data as Todo;
    const { id, title, completed } = todo;
    logTodos(id, title, completed);
  })
  .catch(err => console.log(err.message));

const logTodos = (id: number, title: string, completed: boolean) => {
  console.log(`The todo with ID: ${id} 
    Task: ${title}
    Done: ${completed}`);
};
