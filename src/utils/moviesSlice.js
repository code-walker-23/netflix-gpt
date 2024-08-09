import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});
export const {
  setNowPlayingMovies,
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
