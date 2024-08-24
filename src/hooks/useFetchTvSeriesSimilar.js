import { useState, useEffect } from "react";
import { options } from "../utils/constant";
const useFetchTvSeriesSimilar = (setTvSeriesSimilar, tvSeriesId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${tvSeriesId}/similar?language=en-US&page=1`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setTvSeriesSimilar(data.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [tvSeriesId]);

  return { loading, error };
};

export default useFetchTvSeriesSimilar;
