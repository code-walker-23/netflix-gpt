import { useState, useEffect } from "react";
import { options } from "../utils/constant";
const useFetchTVList = (setTv) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchTv = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/changes?page=1`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setTv(data.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTv();
  }, []);

  return { loading, error };
};

export default useFetchTVList;
