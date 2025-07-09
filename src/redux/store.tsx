import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import modalReducer from "./modalSlice";
import quizReducer from "./quizSlice";
import usersReducer from "./usersSlice"


const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    quiz: quizReducer,
    users: usersReducer,

  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
