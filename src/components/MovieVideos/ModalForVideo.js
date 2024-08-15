import React from "react";
import {YOUTUBE_BASE_URL} from "../../utils/constant";

const ModalForVideo = ({ selectedVideo, handleCloseModal }) => {
  if (!selectedVideo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative max-w-4xl w-full max-h-[80vh] bg-gray-900 rounded-lg shadow-2xl border-4 border-gray-700 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300 z-10"
          aria-label="Close Video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Container */}
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-4 border-red-600 rounded-lg"
            src={`${YOUTUBE_BASE_URL}${selectedVideo.key}?autoplay=1&controls=1`}
            title={selectedVideo.name}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ModalForVideo;
