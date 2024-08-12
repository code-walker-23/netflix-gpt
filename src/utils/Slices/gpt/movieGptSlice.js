import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieArray: [],
    movieDetails: {},
    loading: false,
    error: null,
    backgroundColor: "bg-transparent",
    searchText: "",
  },
  reducers: {
    setMovieArray(state, action) {
      state.movieArray = action.payload;
    },
    setMovieDetails(state, action) {
      state.movieDetails = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setBackgroundColor(state, action) {
      state.backgroundColor = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
  },
});

export const {
  setMovieArray,
  setMovieDetails,
  setBackgroundColor,
  setSearchText,
  setError,
  setLoading,
  set,
} = movieSlice.actions;

export default movieSlice.reducer;
