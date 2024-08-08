import { createSlice } from "@reduxjs/toolkit";
const nowPlayingMoviesSlice = createSlice({
  name: "nowPlayingMovies",
  initialState: {
    moviesList: [],
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.moviesList = action.payload;
    },
  },
});
export const { setNowPlayingMovies } = nowPlayingMoviesSlice.actions;
export default nowPlayingMoviesSlice.reducer;
