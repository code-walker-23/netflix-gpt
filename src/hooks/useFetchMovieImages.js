import { useState, useEffect } from "react";
import { options } from "../utils/constant";

const useFetchMovieImages = (movieId) => {
  const [movieImages, setMovieImages] = useState({
    backdrops: [],
    posters: [],
    logos: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieImages = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/images`,
          options
        );
        const data = await response.json();
        setMovieImages(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieImages();
  }, [movieId]);

  return { movieImages, loading, error };
};

export default useFetchMovieImages;
