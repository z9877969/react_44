import axios from "axios";

export const addTodoApi = (todo) => {
  return axios
    .post("https://test-37436-default-rtdb.firebaseio.com/todo.json", todo)
    .then((resp) => ({ ...todo, id: resp.data.name }));
};

export const getTodoApi = () => {
  return axios
    .get("https://test-37436-default-rtdb.firebaseio.com/todo.json")
    .then((resp) =>
      Object.entries(resp.data).map(([id, todo]) => ({ id, ...todo }))
    );
};
