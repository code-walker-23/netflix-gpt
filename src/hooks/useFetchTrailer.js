import React from "react";
import { useEffect } from "react";
import { options } from "../utils/constant";
const useFetchTrailer = (movie, setTrailer) => {
  const { id } = movie;
  const fetchVideo = async () => {
    const json = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const data = await json.json();
    const videosList = data?.results || [];
    const filterTrailer = videosList.filter(
      (video) => video.type === "Trailer"
    );
    setTrailer(filterTrailer[0]);
  };
  useEffect(() => {
    fetchVideo();
  }, [id]);
};

export default useFetchTrailer;
