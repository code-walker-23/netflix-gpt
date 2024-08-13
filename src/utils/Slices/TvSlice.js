import { createSlice } from "@reduxjs/toolkit";
const tvSlice = createSlice({
  name: "movies",
  initialState: {
    airingToday: [],
    onTheAir: [],
    popular: [],
    topRated: [],
  },
  reducers: {
    setAiringToday: (state, action) => {
      state.airingToday = action.payload;
    },
    setOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setTopRated: (state, action) => {
      state.topRated = action.payload;
    },
  },
});
export const { setAiringToday, setOnTheAir, setPopular, setTopRated } =
  tvSlice.actions;
export default tvSlice.reducer;
