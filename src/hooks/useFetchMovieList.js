import { useState, useEffect } from "react";
import { options } from "../utils/constant";
const useFetchMovieList = (setMovies) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/changes?page=1`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { loading, error };
};

export default useFetchMovieList;
