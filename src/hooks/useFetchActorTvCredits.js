import { useState, useEffect } from "react";
import { options } from "../utils/constant";

const useFetchActorTvCredits = (actorId, setMovies) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${actorId}/tv_credits?language=en-US`,
        options
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie credits");
      }
      const data = await response.json();
      setMovies(data.cast); // array of movies of actor
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (actorId) {
      fetchDetail();
    }
  }, [actorId]);

  return { loading, error };
};

export default useFetchActorTvCredits;
