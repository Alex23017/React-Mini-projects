import { createSlice } from "@reduxjs/toolkit";
import questions from "../components/Quiz/Questions";
import { AppDispatch, RootState } from "./store";

interface IQuiz {
  step: number;
  correct: number;
}

const initialState: IQuiz = {
  step: 0,
  correct: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setStep(state) {
      state.step = state.step + 1;
    },
    setCorrect(state) {
      state.correct = state.correct + 1;
    },
    handleRestart(state) {
      state.correct = 0;
      state.step = 0;
    },
  },
});



export const answerQuestion =
  (index: number) => (dispatch: AppDispatch, getState: () => RootState) => {
    const { step } = getState().quiz;
    const question = questions[step];
    if (index === question.correct) {
      dispatch(setCorrect());
    }
    dispatch(setStep());
  };

export const { setStep, setCorrect, handleRestart } = quizSlice.actions;
export default quizSlice.reducer;
