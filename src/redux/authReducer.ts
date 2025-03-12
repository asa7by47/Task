import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, AuthTokenResponse } from "@/apis/@types/auth";

interface IAuthState {
  token?: string | null;
  userData?: User | null;
  authToken?: AuthTokenResponse | null;
}
const initialState: IAuthState = {
  token: null,
  userData: null,
  authToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => ({
      ...state,
      token: action.payload,
    }),
    setUserInfo: (state, action: PayloadAction<User>) => ({
      ...state,
      userData: action.payload,
    }),
    userAuthToken: (state, action: PayloadAction<AuthTokenResponse>) => ({
      ...state,
      authToken: action.payload,
    }),
    logout: () => ({
      ...initialState,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { login, setUserInfo, userAuthToken, logout } = authSlice.actions;

export default authSlice.reducer;
