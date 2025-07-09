import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModal {
  open: boolean;
  canOpen: boolean;
}

const initialState: IModal = {
  open: false,
  canOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen(state) {
      state.open = !state.open;
    },
    setCanOpen(state, action: PayloadAction<boolean>) {
      state.canOpen = action.payload;
    },
  },
});

export const { setOpen, setCanOpen } = modalSlice.actions;
export default modalSlice.reducer;
