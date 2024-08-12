import { configureStore } from "@reduxjs/toolkit";
import MoviesReducers from "./Slices/moviesSlice";
import UserReducers from "./Slices/userSlice";
import gptToggleReducers from "./Slices/gptToggleSlice";
import configReducers from "./Slices/gpt/configSlice";
import movieReducers from "./Slices/gpt/movieGptSlice";

const store = configureStore({
  reducer: {
    movies: MoviesReducers,
    user: UserReducers,
    gptToggle: gptToggleReducers,
    config: configReducers,
    moviesGpt: movieReducers,
  },
});

export default store;
