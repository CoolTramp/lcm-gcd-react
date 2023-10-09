import { createSlice } from "@reduxjs/toolkit";

const checkboxLCM = createSlice({
  name: "lcmcheckbox",
  initialState: {
    value: false,
  },
  reducers: {
    changeLCMCheckboxValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeLCMCheckboxValue } = checkboxLCM.actions;
export default checkboxLCM.reducer;
