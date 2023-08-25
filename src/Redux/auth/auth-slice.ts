"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  isAuth: false,
  id: "",
  name: "",
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const { id, name, email } = action.payload;
      return {
        isAuth: true,
        id,
        name,
        email,
      };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
