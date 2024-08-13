import { useState, useEffect } from "react";
import { options } from "../utils/constant";

const useFetchTrending = (setTrending) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?language=en-US",
        options
      );
      if (!response.ok) {
        throw new Error("Failed to fetch trending");
      }
      const data = await response.json();
      setTrending(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return { loading, error };
};

export default useFetchTrending;
