import { configureStore } from "@reduxjs/toolkit";
import dsaReducer from "../features/dsaSlice";

export const store = configureStore({
  reducer: {
    dsa: dsaReducer,
  },
});
