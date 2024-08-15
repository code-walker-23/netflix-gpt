import { useEffect } from "react";
import { MOVIE_DETAIL } from "../utils/constant";
import { options } from "../utils/constant";
const useFetchMovieDetail = ({
  movieId,
  setMovieDetail,
  setLoading,
  setError,
}) => {
  const fetchDetail = async () => {
    try {
      const response = await fetch(
        `${MOVIE_DETAIL}${movieId}?language=en-US`,
        options
      );
      if (!response.ok) throw new Error("Failed to fetch movie details");
      const data = await response.json();
      setMovieDetail(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [movieId]);
};

export default useFetchMovieDetail;
