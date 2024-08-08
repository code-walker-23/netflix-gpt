import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import nowPlayingMoviesSlice from "./nowPlayingMoviesSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    nowPlayingMovies: nowPlayingMoviesSlice,
  },
});

export default appStore;
