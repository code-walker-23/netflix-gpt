import React from "react";

const FrontTrailer = ({ trailer }) => {
  const youtubeKey = trailer[0].key;
  console.log("Trailer",trailer);
  console.log("Youtube Key",youtubeKey);
  const youtubeTrailerUrl = youtubeKey
    ? `https://www.youtube.com/embed/${youtubeKey}?autoplay=1&loop=1&playlist=${youtubeKey}&controls=0&modestbranding=1&playsinline=1&mute=0&showinfo=0&fs=1&rel=0&iv_load_policy=3`
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
export default FrontTrailer;
