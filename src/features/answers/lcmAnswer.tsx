import { createSlice } from "@reduxjs/toolkit";

const lcmAnswerSlice = createSlice({
  name: "lcmAnswer",
  initialState: {
    value: "",
  },
  reducers: {
    addLCMAnswer: (state, action) => {
      state.value = action.payload;
    },
    cleanLCMAnswer: (state) => {
      state.value = "";
    },
  },
});

export const { addLCMAnswer, cleanLCMAnswer } = lcmAnswerSlice.actions;
export default lcmAnswerSlice.reducer;
