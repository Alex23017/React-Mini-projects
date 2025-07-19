import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface INote {
  text: string;
  id: number;
  number: number;
}

interface IState {
  notes: INote[];
  value: string;
  isOpenRemove: boolean;
  isOpenEdit: boolean;
  newNote: string;
  idNote: number | null;
}

const initialState: IState = {
  isOpenEdit: false,
  notes: [],
  value: "",
  isOpenRemove: false,
  newNote: "",
  idNote: null,
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<INote>) {
      state.notes.push(action.payload);
    },

    saveEdit(state, action: PayloadAction<string>) {
      if (state.idNote === null) return;
      state.notes = state.notes.map((note) =>
        note.id === state.idNote ? { ...note, text: action.payload } : note,
      );
      state.isOpenEdit = false;
      state.newNote = "";
      state.idNote = null;
    },

    removeNote(state, action: PayloadAction<number>) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },

    removeAll(state) {
      state.notes = [];
    },

    cancelEdit(state) {
      state.isOpenEdit = false;
      state.newNote = "";
      state.idNote = null;
    },

    isOpen(state, action: PayloadAction<INote>) {
      state.isOpenEdit = true;
      state.newNote = action.payload.text;
      state.idNote = action.payload.id;
    },

    setNewNote(state, action: PayloadAction<string>) {
      state.newNote = action.payload;
    },

    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    initNotes: (state, action: PayloadAction<INote[]>) => {
      state.notes = action.payload;
    },
  },
});

export const {
  addNote,
  saveEdit,
  removeNote,
  removeAll,
  cancelEdit,
  isOpen,
  setNewNote,
  setValue,
  initNotes,
} = TodoSlice.actions;

export default TodoSlice.reducer;
