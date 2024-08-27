import { configureStore } from "@reduxjs/toolkit";
import MoviesReducers from "./Slices/moviesSlice";
import UserReducers from "./Slices/userSlice";
import gptToggleReducers from "./Slices//gpt/gptToggleSlice";
import configReducers from "./Slices/gpt/configSlice";
import movieReducers from "./Slices/gpt/movieGptSlice";
import userUpdateReducers from "./Slices/userUpdateSlice";
import tvReducers from "./Slices/TvSlice";
import myListReducers from "./Slices/myListSlice";

const store = configureStore({
  reducer: {
    movies: MoviesReducers,
    user: UserReducers,
    userUpdate: userUpdateReducers,
    gptToggle: gptToggleReducers,
    config: configReducers,
    moviesGpt: movieReducers,
    tv: tvReducers,
    list: myListReducers,
  },
});

export default store;
