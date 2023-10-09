import { createSlice } from "@reduxjs/toolkit";

const gcdSlice = createSlice({
  name: "gcdString",
  initialState: {
    value: "",
  },
  reducers: {
    addGCDStringAnswer: (state, action) => {
      state.value = action.payload;
    },
    cleanGCDStringAnswer: (state) => {
      state.value = "";
    },
  },
});

export const { addGCDStringAnswer, cleanGCDStringAnswer } = gcdSlice.actions;
export default gcdSlice.reducer;
