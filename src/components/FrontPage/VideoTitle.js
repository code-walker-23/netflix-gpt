import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="mb-4">
      <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
      <p className="text-lg md:text-xl mt-2">{overview}</p>
    </div>
  );
};

export default VideoTitle;
