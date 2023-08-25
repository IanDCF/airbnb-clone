"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RegModalState = {
  regModalOpen: false,
};

const regModalSlice = createSlice({
  name: "regModal",
  initialState,
  reducers: {
    onOpenReg: (state) => {
      state.regModalOpen = true;
    },
    onCloseReg: (state) => {
      state.regModalOpen = false;
    },
  },
});

export const { onOpenReg, onCloseReg } = regModalSlice.actions;
export default regModalSlice.reducer;
