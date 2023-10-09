import { createSlice } from "@reduxjs/toolkit";

const canonical = createSlice({
  name: "canonical",
  initialState: {
    value: "",
  },
  reducers: {
    addCanonicalStringAnswer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addCanonicalStringAnswer } = canonical.actions;
export default canonical.reducer;
