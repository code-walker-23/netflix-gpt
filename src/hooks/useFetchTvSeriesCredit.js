import { useEffect, useState } from "react";
import { options } from "../utils/constant";

export const useFetchTvSeriesCredit = (tvId, setTvSeriesCredit) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchSeriesCredit = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${tvId}/aggregate_credits?language=en-US`,
        options
      );
      if (!response.ok) throw new Error("Failed to fetch series Credits");
      const data = await response.json();
      setTvSeriesCredit(data.cast);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeriesCredit();
  }, [tvId]);

  return { loading, error };
};
