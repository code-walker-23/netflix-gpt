import { useState, useEffect } from "react";
import { options } from "../utils/constant";
const useFetchMovieGenres = (setGenres) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchGenres = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/tv/list?language=en-US",
        options
      );

      if (!response.ok) throw new Error("Failed to fetch TV genres");

      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return {loading, error };
};

export default useFetchMovieGenres;
