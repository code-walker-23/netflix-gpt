import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useFetchMovieDetail } from "../../hooks/useFetchMovieSearch";
import {
  setMovieArray,
  setMovieDetails,
  setLoading,
  setError,
  setBackgroundColor,
} from "../../utils/Slices/gpt/movieGptSlice";

export const useHandleGptSearch = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.config.selectedLang);
  const searchText = useSelector((state) => state.moviesGpt.searchText);
  const page = 1;

  const handleGptSearch = async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    dispatch(setBackgroundColor("bg-black"));

    try {
      const query = `Give in one line only do not go for next line and act as a movie recommendation system and suggest some movies for the Query: ${searchText} and ${selectedLanguage}. Only give names of 10 movies in one line only, comma-separated like the following: Movie1, Movie2, Movie3, Movie4, Movie5`;

      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        method: "POST",
        data: { contents: [{ parts: [{ text: query }] }] },
      });

      const rawResults = response.data.candidates[0]?.content?.parts[0]?.text;

      if (!rawResults) {
        throw new Error("No results returned from GPT-3.");
      }

      const movies = rawResults.split(", ").map((movie) => movie.trim());
      dispatch(setMovieArray(movies));

      // Fetch details for each movie and update state
      const details = await Promise.all(
        movies.map((movie) =>
          useFetchMovieDetail(movie, selectedLanguage, page)
        )
      );
      const movieDetailsObj = movies.reduce((acc, movie, index) => {
        acc[movie] = details[index];
        return acc;
      }, {});
      dispatch(setMovieDetails(movieDetailsObj));
    } catch (error) {
      console.error("Error fetching GPT-3 search results:", error.message);
      dispatch(setError("Sorry, something went wrong. Please try again."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return handleGptSearch;
};
