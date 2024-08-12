import axios from "axios";
import { fetchMovieDetail } from "./fetchMovieDetail"; 

export const handleGptSearch = async (
  searchText,
  selectedLanguage,
  setMovieArray,
  setMovieDetails,
  setLoading,
  setError,
  setBackgroundColor
) => {
  setLoading(true);
  setError(null);
  setBackgroundColor("bg-black");

  try {
    const query = `Give in one line only do not go for next line and act as a movie recommendation system and suggest some movies for the Query: ${searchText}. Only give names of 10 movies in one line only, comma-separated like the following: Movie1, Movie2, Movie3, Movie4, Movie5`;

    const response = await axios({
      url:
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
        process.env.REACT_APP_GEMINI_API_KEY,
      method: "POST",
      data: { contents: [{ parts: [{ text: query }] }] },
    });

    const rawResults = response.data.candidates[0]?.content?.parts[0]?.text;

    if (!rawResults) {
      throw new Error("No results returned from GPT-3.");
    }

    const movies = rawResults.split(", ").map((movie) => movie.trim());
    setMovieArray(movies);

    // Fetch details for each movie and update state
    const details = await Promise.all(
      movies.map((movie) => fetchMovieDetail(movie, selectedLanguage))
    );
    const movieDetailsObj = movies.reduce((acc, movie, index) => {
      acc[movie] = details[index];
      return acc;
    }, {});
    setMovieDetails(movieDetailsObj);
  } catch (error) {
    console.error("Error fetching GPT-3 search results:", error.message);
    setError("Sorry, something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
