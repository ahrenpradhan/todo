import { createSlice } from "@reduxjs/toolkit";
import { UserState, initialState } from "./init";
import { loginReducer, logoutReducer } from "./actions";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: loginReducer,
    logout: logoutReducer,
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;
export type { UserState };
export default userSlice.reducer;
