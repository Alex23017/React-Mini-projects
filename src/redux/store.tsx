import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import modalReducer from "./modalSlice";
import quizReducer from "./quizSlice";
import usersReducer from "./usersSlice";
import todoSliceReducer from "./TodoSlice";


const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    quiz: quizReducer,
    users: usersReducer,
    todo: todoSliceReducer,

  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
