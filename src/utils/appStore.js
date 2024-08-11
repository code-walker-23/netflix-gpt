import { configureStore } from "@reduxjs/toolkit";
import MoviesReducers from "./Slices/moviesSlice";
import UserReducers from "./Slices/userSlice";
import gptToggleReducers from "./Slices/gptToggleSlice";
import configReducers from "./Slices/configSlice";
const store = configureStore({
  reducer: {
    movies: MoviesReducers,
    user: UserReducers,
    gptToggle: gptToggleReducers,
    config: configReducers,
  },
});

export default store;
