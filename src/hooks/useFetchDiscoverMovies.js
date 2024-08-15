import { useState, useEffect } from "react";
import { options } from "../utils/constant";

const useFetchDiscoverMovies = (setDiscoverMovies) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      );

      if (!response.ok) {
        throw new Error("Failed to fetch credit details");
      }
      const data = await response.json();
      setDiscoverMovies(data.results); // Set credit details
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

export default useFetchDiscoverMovies;
