"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RentModalState = {
  rentModalOpen: false,
};

const rentModalSlice = createSlice({
  name: "rentModal",
  initialState,
  reducers: {
    onOpenRent: (state) => {
      state.rentModalOpen = true;
    },
    onCloseRent: (state) => {
      state.rentModalOpen = false;
    },
  },
});

export const { onOpenRent, onCloseRent } = rentModalSlice.actions;
export default rentModalSlice.reducer;
