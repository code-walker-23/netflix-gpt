import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
  name: "MyList",
  initialState: {
    myList: [],
  },
  reducers: {
    addToList: (state, action) => {
      const newItem = action.payload;
      if (!state.myList.some((item) => item.id === newItem.id)) {
        state.myList.push(newItem);
      }
    },
    removeToList: (state, action) => {
      const idToRemove = action.payload;
      state.myList = state.myList.filter((item) => item.id !== idToRemove);
    },
    clearList: (state) => {
      return { myList: [] };
    },
  },
});

export const { addToList, removeToList, clearList } = myListSlice.actions;
export default myListSlice.reducer;
