import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./modeSlice/modeSlice";

const store = configureStore({
  reducer: {
    globalMode: modeReducer,
  },
});

export default store;
