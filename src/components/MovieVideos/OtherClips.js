import React from "react";
import { YOUTUBE_BASE_URL } from "../../utils/constant";

const OtherClips = ({ otherClips, handleVideoClick }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
        {otherClips.map((video) => (
          <div
            key={video.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            onClick={() => handleVideoClick(video)}
          >
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`${YOUTUBE_BASE_URL}${video.key}`}
                title={video.name}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-70 text-white p-4 w-full">
              <p className="font-semibold text-lg">{video.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherClips;
