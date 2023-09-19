"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: SearchModalState = {
  searchModalOpen: false,
};

const searchModalSlice = createSlice({
  name: "searchModal",
  initialState,
  reducers: {
    onOpenSearch: (state) => {
      state.searchModalOpen = true;
    },
    onCloseSearch: (state) => {
      state.searchModalOpen = false;
    },
  },
});

export const { onOpenSearch, onCloseSearch } = searchModalSlice.actions;
export default searchModalSlice.reducer;
