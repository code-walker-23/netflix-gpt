import { createSlice } from "@reduxjs/toolkit";
const userUpdateSlice = createSlice({
  name: "userUpdate",
  initialState: {
    showUpdate: false,
  },
  reducers: {
    toggleUpdate: (state, action) => {
      state.showUpdate = !(state.showUpdate);
    },
  },
});
export const { toggleUpdate } = userUpdateSlice.actions;
export default userUpdateSlice.reducer;