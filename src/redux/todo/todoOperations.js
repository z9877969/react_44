import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodoApi, getTodoApi } from "../../utils/firebaseApi";
import { addTodoRequest, addTodoSuccess, addTodoError } from "./todoActions";

export const addTodo = (todo) => (dispatch, getState) => {
  dispatch(addTodoRequest());

  addTodoApi(todo)
    .then((newTodo) => dispatch(addTodoSuccess(newTodo)))
    .catch((err) => dispatch(addTodoError(err.message)));
};

export const getTodo = createAsyncThunk("todo/get", async (_, thunkApi) => {
  // "todo/get/pending"
  console.log("thunkApi :>> ", thunkApi);
  try {
    const todo = await getTodoApi();
    return todo; // todo/get/fullfield
  } catch (error) {
    return thunkApi.rejectWithValue(error.message); // todo/get/rejected
  }
});
