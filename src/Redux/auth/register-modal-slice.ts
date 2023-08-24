"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RegisterModalState = {
  isOpen: false,
};

const regModalSlice = createSlice({
  name: "regModal",
  initialState,
  reducers: {
    onOpenReg: (state) => {
      state.isOpen = true;
    },
    onCloseReg: (state) => {
      state.isOpen = false;
    },
  },
});

export const { onOpenReg, onCloseReg } = regModalSlice.actions;
export default regModalSlice.reducer;
