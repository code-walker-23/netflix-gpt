import { useState, useEffect } from "react";
import { options } from "../utils/constant";

const useFetchSeasonEpisodeDetail = (
  tvId,
  seasonId,
  episodeNumber,
  setEpisodeDetail
) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonId}/episode/${episodeNumber}?language=en-US`,
        options
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movie credits");
      }
      const data = await response.json();
      setEpisodeDetail(data); // array of movies of actor
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [tvId, seasonId, episodeNumber]);

  return { loading, error };
};

export default useFetchSeasonEpisodeDetail;
