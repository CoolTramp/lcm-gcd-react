import { createSlice } from "@reduxjs/toolkit";

const allLanguagesSlice = createSlice({
  name: "allLanguages",
  initialState: {
    value: ["en", "pl", "ru"],
  },
  reducers: {},
});

export default allLanguagesSlice.reducer;
