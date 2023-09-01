"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import regModalReducer from "./auth/register-modal-slice";
import loginModalReducer from "./auth/login-modal-slice";
import rentModalReducer from "./auth/rent-modal-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    regModal: regModalReducer,
    loginModal: loginModalReducer,
    rentModal: rentModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
