import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchVideos from "../../hooks/useFetchVideo";
import VideoBackground from "../Front Page/VideoBackground";
import Shimmer from "../../utils/Shimmer";

const MovieVideos = () => {
  const { movieId } = useParams();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useFetchVideos(movieId, setVideos);

  if (!videos.length)
    return (
      <div className="text-gray-500 text-center p-8">
        <Shimmer />
      </div>
    );

  // Separate trailer from other videos
  const trailer = videos.find((video) => video.type === "Trailer");
  const otherClips = videos.filter((video) => video.type !== "Trailer");

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Trailer section */}
      {trailer && (
        <div className="relative h-screen overflow-hidden">
          <VideoBackground
            id={movieId}
            mute="mute=0"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}

      {/* OtherClips Section */}
      {otherClips.length > 0 && (
        <div className="pt-12 bg-gray-900 relative z-10">
          <h2 className="text-4xl font-semibold mb-8 text-center text-white">
            Other Clips
          </h2>
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
                    src={`https://www.youtube.com/embed/${video.key}`}
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
      )}

      {/* Modal for full-screen video */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-6xl max-h-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
            >
              &times;
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo.key}?autoplay=1&controls=1`}
              title={selectedVideo.name}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieVideos;
