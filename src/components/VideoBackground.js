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
    <div className="relative w-screen h-screen overflow-hidden ">
      {youtubeKey && (
        <iframe
          className="absolute top-0 left-0 w-full h-full border-none"
          src={youtubeTrailerUrl}
          title="YouTube trailer"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoBackground;
