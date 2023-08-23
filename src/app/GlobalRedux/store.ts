"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import regModalReducer from "./auth/register-modal-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    regModal: regModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
