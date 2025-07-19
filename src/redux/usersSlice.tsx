import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface iUsers {
  users: UserData[];
  invites: number[];
  isLoading: boolean;
  search: string;
  success: boolean;
  error: string;
}

const initialState: iUsers = {
  users: [],
  invites: [],
  isLoading: true,
  success: false,
  search: "",
  error: "",
};

export const fetchUsers = createAsyncThunk("fetchUsers/users", async (_, { signal }) => {
  try {
    const response = await fetch("https://reqres.in/api/users", {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
      signal,
    });

    if (!response.ok) {
      throw new Error("ERROR");
    }
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addInvite: (state, action: PayloadAction<number>) => {
      if (!state.invites.includes(action.payload)) {
        state.invites.push(action.payload);
      }
    },
    removeInvite: (state, action: PayloadAction<number>) => {
      state.invites = state.invites.filter((id) => id !== action.payload);
    },
    clearInvites: (state) => {
      state.invites = [];
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.users = [];
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Ошибка загрузки пользователей";
      });
  },
});

export const { addInvite, removeInvite, clearInvites, setSearch, setSuccess } = usersSlice.actions;

export default usersSlice.reducer;
