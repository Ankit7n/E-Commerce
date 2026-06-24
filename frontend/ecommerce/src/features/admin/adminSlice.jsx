import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  checkingAuth: true,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    loginAdmin: (state, action) => {
      state.admin = action.payload.admin;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("adminName", action.payload.admin.name);
    },

    logoutAdmin: (state) => {
      state.admin = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem("token");
      localStorage.removeItem("adminName");
    },

    loadAdminFromStorage: (state) => {
      const token = localStorage.getItem("token");
      const name = localStorage.getItem("adminName");

      if (token) {
        state.token = token;
        state.isAuthenticated = true;
        state.admin = { name };
      }
    },

    setCheckingAuth: (state, action) => {
      state.checkingAuth = action.payload;
    },
  },
});

export const {
  loginAdmin,
  logoutAdmin,
  loadAdminFromStorage,
  setCheckingAuth,
} = adminSlice.actions;

export default adminSlice.reducer;
