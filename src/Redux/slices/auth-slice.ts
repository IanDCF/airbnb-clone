"use client";
import { SafeUser, SafeUserAuth, SafeUserCredentials } from "@/types/index";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: SafeUserAuth = {
  isAuth: false,
  id: "",
  name: "",
  email: "",
  image: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SafeUserCredentials>) => {
      const { id, name, email, image } = action.payload;
      return {
        isAuth: true,
        id,
        name,
        email,
        image,
      };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
