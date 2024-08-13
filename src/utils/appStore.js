import { configureStore } from "@reduxjs/toolkit";
import MoviesReducers from "./Slices/moviesSlice";
import UserReducers from "./Slices/userSlice";
import gptToggleReducers from "./Slices//gpt/gptToggleSlice";
import configReducers from "./Slices/gpt/configSlice";
import movieReducers from "./Slices/gpt/movieGptSlice";
import userUpdateReducers from "./Slices/userUpdateSlice";

const store = configureStore({
  reducer: {
    movies: MoviesReducers,
    user: UserReducers,
    userUpdate: userUpdateReducers,
    gptToggle: gptToggleReducers,
    config: configReducers,
    moviesGpt: movieReducers,
  },
});

export default store;
