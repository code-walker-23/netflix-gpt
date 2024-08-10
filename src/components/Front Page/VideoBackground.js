import React, { useState } from "react";
import useFetchTrailer from "../../hooks/useFetchTrailer";

const VideoBackground = ({ id, mute }) => {
  const [trailer, setTrailer] = useState(null);
  useFetchTrailer(id, setTrailer);

  const youtubeKey = trailer?.key;
  const youtubeTrailerUrl = youtubeKey
    ? `https://www.youtube.com/embed/${youtubeKey}?autoplay=1&loop=1&playlist=${youtubeKey}&controls=0&modestbranding=1&playsinline=1&${mute}&showinfo=0&fs=1&rel=0&iv_load_policy=3`
    : "";

  return (
    <div className="w-screen">
      {youtubeKey && (
        <iframe
          className="w-screen aspect-video absolute top-0 left-0 z-0 object-cover "
          src={youtubeTrailerUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
