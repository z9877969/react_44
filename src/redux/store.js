import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./counter/counterSlice";
import todo from "./todo/todoSlice";

// const customLogger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.group("action: ", action.type);
//       console.log("prevState", store.getState());
//       console.log("action: ", action);
//       next(action); // update state

//       console.log("nextState", store.getState());
//       console.groupEnd();
//     };
//   };
// };

// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(store.dispatch, store.getState); // -> webApi
//     return;
//   }
//   next(action);
// };

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat
      // customLogger
      (),
});
