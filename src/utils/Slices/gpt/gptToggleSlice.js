import { createSlice } from "@reduxjs/toolkit";

const gptToggleSlice = createSlice({
  name: "gptToggle",
  initialState: {
    showGptView: false,
  },
  reducers: {
    toggleGptView(state) {
      state.showGptView = !(state.showGptView);
    },
  },
});
export const { toggleGptView } = gptToggleSlice.actions;
export default gptToggleSlice.reducer;
