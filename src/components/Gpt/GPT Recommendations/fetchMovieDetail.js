// utils/movieUtils.js
export const fetchMovieDetail = async (movie, selectedLanguage, options) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=${selectedLanguage}&page=1`,
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return [];
  }
};
