import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  loading: true,
};

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    },

    logoutSuccess: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    authFinished: (state) => {
      state.loading = false;
    },
  },
});

export const { loginSuccess, logoutSuccess, authFinished } = userSlice.actions;

export default userSlice.reducer;
