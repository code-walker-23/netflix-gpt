import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchVideos from "../../../hooks/useFetchVideo";
import ShimmerVideo from "./ShimmerVideo";
import OtherClips from "./OtherClips";
import ModalForVideo from "./ModalForVideo";
import FrontTrailer from "./FrontTrailer";
import OtherTrailers from "./OtherTrailers";

const MovieVideos = () => {
  const { movieId } = useParams();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useFetchVideos(movieId, setVideos);

  if (!videos.length)
    return (
      <div className="text-gray-500 text-center p-8">
        <ShimmerVideo />
      </div>
    );

  const trailer = videos.filter((video) => video.type === "Trailer");
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
          <FrontTrailer
            trailer={trailer}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}

      {/* Other Trailers Section */}
      {trailer.length > 0 && (
        <OtherTrailers
          trailers={trailer}
          handleVideoClick={handleVideoClick}
        />
      )}

      {/* OtherClips Section */}
      {otherClips.length > 0 && (
        <div className="pt-12 bg-gray-900 relative z-10">
          <h2 className="text-4xl font-semibold mb-8 text-center text-white">
            Other Clips
          </h2>
          <OtherClips
            otherClips={otherClips}
            handleVideoClick={handleVideoClick}
          />
        </div>
      )}

      {/* Modal for full-screen video */}
      {selectedVideo && (
        <ModalForVideo
          selectedVideo={selectedVideo}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MovieVideos;
