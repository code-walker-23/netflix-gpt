import { useState, useEffect } from "react";
import { options } from "../utils/constant";
const useFetchTvSeriesReviews = (setTvReviews, tvId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${tvId}/reviews?language=en-US&page=1`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setTvReviews(data.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [tvId]);

  return { loading, error };
};

export default useFetchTvSeriesReviews;
