import { createAction } from "@reduxjs/toolkit";

export const addTodoRequest = createAction("todo/addRequest");
export const addTodoSuccess = createAction("todo/addSuccess");
export const addTodoError = createAction("todo/addError");
