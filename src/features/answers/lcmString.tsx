import { createSlice } from "@reduxjs/toolkit";

const lcmSlice = createSlice({
  name: "lcmString",
  initialState: {
    value: "",
  },
  reducers: {
    addLCMStringAnswer: (state, action) => {
      state.value = action.payload;
    },
    cleanLCMStringAnswer: (state) => {
      state.value = "";
    },
  },
});

export const { addLCMStringAnswer, cleanLCMStringAnswer } = lcmSlice.actions;
export default lcmSlice.reducer;
