import { createSlice } from "@reduxjs/toolkit";

const primeFactors = createSlice({
  name: "prime",
  initialState: {
    value: [] as string[],
  },
  reducers: {
    addPrimeFactors: (state, action) => {
      state.value = Array.from(action.payload);
    },
    cleanPrimeFactors: (state) => {
      state.value = [];
    },
  },
});

export const { addPrimeFactors, cleanPrimeFactors } = primeFactors.actions;

export default primeFactors.reducer;
