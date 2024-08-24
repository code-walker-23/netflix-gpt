import { useState, useEffect } from "react";
import { options } from "../utils/constant";
const useFetchMovieTranslations = (setMovieTranslations, movieId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/translations`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMovieTranslations(data.translations);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [movieId]);

  return { loading, error };
};

export default useFetchMovieTranslations;
