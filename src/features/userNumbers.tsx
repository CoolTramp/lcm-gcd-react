import { createSlice } from "@reduxjs/toolkit";

const userNumbersSlice = createSlice({
  name: "userNumbers",
  initialState: { value: [] as String[] },
  reducers: {
    addNumber: (state, action) => {
      state.value.push(action.payload);
    },
    deleteLast: (state) => {
      state.value.splice(state.value.length - 1, 1);
    },
  },
});

export const { addNumber, deleteLast } = userNumbersSlice.actions;
export default userNumbersSlice.reducer;
