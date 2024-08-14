import React, { useState, useEffect } from "react";
import useFetchPeopleImages from "../../hooks/useFetchPeopleImages";

const PeopleImages = ({ actorId }) => {
  const [peopleImages, setPeopleImages] = useState([]);
  const { loading, error } = useFetchPeopleImages(actorId, setPeopleImages);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-lg">Loading images...</div>
      </div>
    );
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
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 shadow-lg">
        Actor Images
      </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {peopleImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg border border-gray-700">
              <img
                src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                alt={`Actor Image ${index}`}
                className="w-full h-full object-cover transition-transform transform hover:scale-105"
              />
              {/* Optionally add overlay or details here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleImages;
