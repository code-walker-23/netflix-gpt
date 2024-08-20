import { useState, useEffect } from "react";
import { options } from "../utils/constant"; 

const useFetchTrending = (setTrending, time, type, language) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/${type}/${time}?language=${language}`,
        options
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch trending: ${response.statusText}`);
      }
      const data = await response.json();
      setTrending(data.results);
    } catch (error) {
      setError(`Error: ${error.message}`); // Provide a clear error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [time, type, language]); 
  return { loading, error };
};

export default useFetchTrending;
