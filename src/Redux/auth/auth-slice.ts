"use client";
import { SafeUserAuth, SafeUserState } from "@/types/safeUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: SafeUserState = {
  isAuth: false,
  id: "",
  name: "",
  email: "",
  emailVerified: "",
  image: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SafeUserAuth>) => {
      const { id, name, email, emailVerified, image } = action.payload;
      return {
        isAuth: true,
        id,
        name,
        email,
        emailVerified,
        image,
      };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
