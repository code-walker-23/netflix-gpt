import React, { useState } from "react";
import useFetchPeopleImages from "../../hooks/useFetchPeopleImages";
import ShimmerEffect from "../../utils/Shimmer";
import { TMDB_IMG_BASE_URL_500 } from "../../utils/constant";

const PeopleImages = ({ actorId }) => {
  const [peopleImages, setPeopleImages] = useState([]);
  const { loading, error } = useFetchPeopleImages(actorId, setPeopleImages);

  if (loading) {
    return <ShimmerEffect />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-lg">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-9xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 shadow-lg">
          Actor Images
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {peopleImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={`${TMDB_IMG_BASE_URL_500}${image.file_path}`}
                alt={`Actor Image ${index}`}
                className="w-full h-64 object-cover transition-transform transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleImages;
