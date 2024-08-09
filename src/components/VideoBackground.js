import React, { useState } from "react";
import useFetchTrailer from "../hooks/useFetchTrailer";

const VideoBackground = ({ movie }) => {
  const [trailer, setTrailer] = useState(null);
  useFetchTrailer(movie, setTrailer);

  const youtubeKey = trailer?.key;
  const youtubeTrailerUrl = youtubeKey
    ? `https://www.youtube.com/embed/${youtubeKey}?autoplay=1&loop=1&playlist=${youtubeKey}&controls=0&modestbranding=1&playsinline=1&mute=1&showinfo=0&fs=1&rel=0&iv_load_policy=3`
    : "";

  return (
    <div className="w-screen">
      {youtubeKey && (
        <iframe
          className="w-screen aspect-video"
          src={youtubeTrailerUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
