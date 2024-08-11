import { createSlice } from "@reduxjs/toolkit";

const gpToggleSlice = createSlice({
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
export const { toggleGptView } = gpToggleSlice.actions;
export default gpToggleSlice.reducer;
