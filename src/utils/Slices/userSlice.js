import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    uid: null,
    email: null,
    displayName: null,
    imgUrl: null,
  },
  reducers: {
    addUser: (state, action) => {
      const { uid, email, displayName, url } = action.payload;
      state.uid = uid;
      state.email = email;
      state.displayName = displayName;
      state.imgUrl = url;
    },
    removeUser: (state) => {
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.imgUrl = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
