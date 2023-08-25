"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  isAuth: false,
  id: "",
  name: "",
  email: "",
  emailVerified: null,
  image: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserAuth>) => {
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
