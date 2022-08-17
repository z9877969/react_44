import { createSlice } from "@reduxjs/toolkit";
import { addTodoError, addTodoRequest, addTodoSuccess } from "./todoActions";
import { getTodo } from "./todoOperations";

console.log("getTodo :>> ", getTodo);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    addTodo(state, { payload }) {
      return { ...state, items: [...state.items, payload] };
      //   state.items.push(payload);
    },
    removeTodo(state, { payload }) {
      return { ...state, items: state.items.filter((el) => el.id !== payload) };
    },
    updateStatusTodo(state, { payload }) {
      state.items = state.items.map((el) =>
        el.id !== payload ? el : { ...el, isDoneStatus: !el.isDoneStatus }
      );
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [addTodoRequest]: (state, action) => {
      state.isLoading = true;
    },
    [addTodoSuccess]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [addTodoError]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [getTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getTodo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { addTodo, removeTodo, updateStatusTodo, changeFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
