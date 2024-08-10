import React from 'react';
import './shimmer.css'; // Import the stylesheet with shimmer effect

const VideoShimmer = () => (
  <div className="relative w-full h-[60vh] max-w-4xl mx-auto">
    <div className="shimmer-wrapper w-full h-full">
      <div className="shimmer" />
    </div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
      <div className="animate-pulse">
        <div className="w-3/4 h-5 bg-gray-700 rounded mb-4 mx-auto" />
        <div className="w-full h-3/4 bg-gray-700 rounded" />
      </div>
    </div>
  </div>
);

export default VideoShimmer;
