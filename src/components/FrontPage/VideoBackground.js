import React, { useState } from "react";
import useFetchTrailer from "../../hooks/useFetchTrailer";
import { getYouTubeTrailerUrl_MUTE } from "../../utils/constant";

const VideoBackground = ({ id }) => {
  const [trailer, setTrailer] = useState(null);
  useFetchTrailer(id, setTrailer);

  const youtubeKey = trailer?.key;
  const youtubeTrailerUrl = getYouTubeTrailerUrl_MUTE(youtubeKey);

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
