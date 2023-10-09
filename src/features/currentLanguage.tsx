import { createSlice } from "@reduxjs/toolkit";

const currentLanguage = createSlice({
  name: "flags",
  initialState: {
    value: "en",
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = currentLanguage.actions;

export default currentLanguage.reducer;
