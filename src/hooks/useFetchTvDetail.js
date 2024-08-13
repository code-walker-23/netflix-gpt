import { useEffect, useState } from "react";
import { options } from "../utils/constant";

export const useFetchTvDetail = (tvId, setTvDetail) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${tvId}?language=en-US`,
        options
      );
      if (!response.ok) throw new Error("Failed to fetch movie details");
      const data = await response.json();
      setTvDetail(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [tvId]);

  return { loading, error };

};


