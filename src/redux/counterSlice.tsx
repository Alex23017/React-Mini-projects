import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICount {
  count: number;
  canAdd: boolean;
}

const initialState: ICount = {
  count: 0,
  canAdd: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count > 0 ? state.count - 1 : state.count;
    },
    setCanAdd(state, action: PayloadAction<boolean>) {
      state.canAdd = action.payload;
    },
    setCount(state) {
      state.count = 0;
    },
  },
});

export const { increment, decrement, setCanAdd, setCount } = counterSlice.actions;
export default counterSlice.reducer;
