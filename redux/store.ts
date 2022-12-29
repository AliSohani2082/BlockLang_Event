import { configureStore } from "@reduxjs/toolkit";
import directoryReducer from "./features/directory";

export const store = configureStore({
  reducer: {
    directory: directoryReducer,
  },
});
