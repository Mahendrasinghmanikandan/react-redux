import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { values: { darkMode: false } },
  reducers: {
    change: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { change } = themeSlice.actions;
export default themeSlice.reducer;
