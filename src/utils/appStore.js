import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./moviesSlice";
import UserSlice from "./userSlice";
const store = configureStore({
  reducer: {
    movies: MoviesSlice,
    user: UserSlice,
  },
});

export default store;
