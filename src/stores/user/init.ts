export interface UserState {
  loggedIn: boolean;
  username: string;
  email: string;
  userId: string;
}

export const initialState: UserState = {
  loggedIn: false,
  username: "",
  email: "",
  userId: "",
};
