import { options } from "../utils/constant";
export const useFetchMovieDetail = async (movie, selectedLanguage,page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=${selectedLanguage}&page=${page}`,
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    return [];
  }
};
