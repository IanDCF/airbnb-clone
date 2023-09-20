"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import regModalReducer from "./slices/register-modal-slice";
import loginModalReducer from "./slices/login-modal-slice";
import rentModalReducer from "./slices/rent-modal-slice";
import searchModalReducer from "./slices/search-modal-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    regModal: regModalReducer,
    loginModal: loginModalReducer,
    rentModal: rentModalReducer,
    searchModal: searchModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
