import { createSlice } from "@reduxjs/toolkit";

const lcmAnswerSlice = createSlice({
  name: "gcdAnswer",
  initialState: {
    value: "",
  },
  reducers: {
    addGCDAnswer: (state, action) => {
      state.value = action.payload;
    },
    cleanGCDAnswer: (state) => {
      state.value = "";
    },
  },
});

export const { addGCDAnswer, cleanGCDAnswer } = lcmAnswerSlice.actions;
export default lcmAnswerSlice.reducer;
