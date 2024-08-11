import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    selectedLang: "en",
  },
  reducers: {
    setSelectedLang: (state, action) => {
      state.selectedLang = action.payload;
    },
  },
});
export default configSlice.reducer;
export const { setSelectedLang } = configSlice.actions;
