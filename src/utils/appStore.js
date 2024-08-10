import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./moviesSlice";
import UserSlice from "./userSlice";
import gptToggleSlice from "./gptSearchSlice";
const store = configureStore({
  reducer: {
    movies: MoviesSlice,
    user: UserSlice,
    gptToggle: gptToggleSlice,
  },
});

export default store;
