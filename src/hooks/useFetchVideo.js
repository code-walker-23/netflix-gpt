import { useEffect } from "react";
import { options } from "../utils/constant";

const useFetchVideos = (movieId, setVideos) => {
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          options
        );
        const data = await response.json();
        setVideos(data.results);
      } catch (error) {
        console.error("Failed to fetch videos", error);
        setVideos([]);
      }
    };

    if (movieId) {
      fetchVideos();
    }
  }, [movieId]);
};

export default useFetchVideos;
