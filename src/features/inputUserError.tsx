import { createSlice } from "@reduxjs/toolkit";

const userInputError = createSlice({
  name: "userHaveInputError",
  initialState: { value: false },
  reducers: {
    haveError: (state) => {
      state.value = true;
    },
    clean: (state) => {
      state.value = false;
    },
  },
});

export const { haveError, clean } = userInputError.actions;
export default userInputError.reducer;
