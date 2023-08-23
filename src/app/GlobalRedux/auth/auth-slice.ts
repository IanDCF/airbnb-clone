"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  isAuth: false,
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const { _id, firstName, lastName, email } = action.payload;
      return {
        isAuth: true,
        _id,
        firstName,
        lastName,
        email,
      };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
