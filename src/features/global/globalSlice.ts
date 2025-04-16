import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalStateType, UserType } from "./types";

const initialState: GlobalStateType = {
  searchQuery: "",
  user: null,
  isAdmin: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login: loginUser, logout: logoutUser } = globalSlice.actions;

export default globalSlice.reducer;
