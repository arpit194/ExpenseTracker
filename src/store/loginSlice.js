import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  loggedIn: localStorage.getItem("token") ? true : false,
  userId: localStorage.getItem("userId")
    ? localStorage.getItem("userId")
    : null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.loggedIn = state.token ? true : false;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    logout: (state, action) => {
      state.token = null;
      state.loggedIn = null;
      state.userId = null;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
