import { createSlice } from "@reduxjs/toolkit";

const checkboxGCD = createSlice({
  name: "gcdcheckbox",
  initialState: {
    value: false,
  },
  reducers: {
    changeGCDCheckboxValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeGCDCheckboxValue } = checkboxGCD.actions;
export default checkboxGCD.reducer;
