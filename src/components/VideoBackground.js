import React, { useEffect } from "react";
import { options } from "../utils/constant";

const VideoBackground = ({ movie }) => {
  const { id, backdrop_path } = movie;
  const fetchVideo = async () => {
    const json = await fetch(
      "https://api.themoviedb.org/3/movie/533535/videos?language=en-US",
      options
    );
    const data = await json.json();
    console.log(data);
  };
  useEffect(() => {
    fetchVideo();
  }, [id]);
  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      }}
    ></div>
  );
};

export default VideoBackground;
