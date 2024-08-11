import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./Slices/moviesSlice";
import UserSlice from "./Slices/userSlice";
import gptToggleSlice from "./Slices/gptSearchSlice";
const store = configureStore({
  reducer: {
    movies: MoviesSlice,
    user: UserSlice,
    gptToggle: gptToggleSlice,
  },
});

export default store;
