import React from "react";
import { getYouTubeTrailerUrl } from "../../utils/constant";
const FrontTrailer = ({ trailer }) => {
  const youtubeKey = trailer[0].key;
  const youtubeTrailerUrl = getYouTubeTrailerUrl(youtubeKey);

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
export default FrontTrailer;
