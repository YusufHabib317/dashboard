import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const modeSlice = createSlice({
  name: "globalMode",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});
export const globalMode = (state) => state.globalMode.mode;

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
