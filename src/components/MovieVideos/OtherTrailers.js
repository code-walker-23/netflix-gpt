import React from "react";
import { YOUTUBE_BASE_URL } from "../../utils/constant";

const OtherTrailers = ({ trailers, handleVideoClick }) => {
  return (
    <div className="pt-12 bg-gray-900 relative z-10">
      <h2 className="text-4xl font-semibold mb-8 text-center text-white">
        Other Trailers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
        {trailers.map((trailer) => (
          <div
            key={trailer.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => handleVideoClick(trailer)}
          >
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg transition-transform transform group-hover:scale-105"
                src={`${YOUTUBE_BASE_URL}${trailer.key}`}
                title={trailer.name}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-70 text-white p-4 w-full transition-opacity opacity-0 group-hover:opacity-100">
                <p className="font-semibold text-lg">{trailer.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherTrailers;
