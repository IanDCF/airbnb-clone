"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: LoginModalState = {
  loginModalOpen: false,
};

const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    onOpenLogin: (state) => {
      state.loginModalOpen = true;
    },
    onCloseLogin: (state) => {
      state.loginModalOpen = false;
    },
  },
});

export const { onOpenLogin, onCloseLogin } = loginModalSlice.actions;
export default loginModalSlice.reducer;
