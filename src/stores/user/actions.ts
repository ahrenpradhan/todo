import { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./init";

interface loginReducerPayload {
  username: string;
  email: string;
  userId: string;
}

export const loginReducer = (
  state: UserState,
  action: PayloadAction<loginReducerPayload>
) => {
  const { username, email, userId } = action.payload;
  state.username = username;
  state.email = email;
  state.userId = userId;
  state.loggedIn = true;
};

// interface logoutReducerPayload {
//   username: string;
//   email: string;
// }

export const logoutReducer = (
  state: UserState
  //   action: PayloadAction<logoutReducerPayload>
) => {
  //   const { username, email } = action.payload;
  state.username = "";
  state.email = "";
  state.userId = "";
  state.loggedIn = false;
};
