import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalStateType } from "./types";

const initialState: GlobalStateType = {
  searchQuery: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    foo: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { foo } = globalSlice.actions;

export default globalSlice.reducer;
