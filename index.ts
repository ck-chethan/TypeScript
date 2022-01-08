import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
  const todo = response.data;
  
  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.Completed;
  console.log(`
    The Todo with ID: ${ID}
    The Todo with title: ${title}
    Is Todo completed: ${finished}
  `);
  
});