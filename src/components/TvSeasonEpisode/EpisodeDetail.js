import React from "react";
import { TMDB_IMG_BASE_URL_500 } from "../../utils/constant";
const EpisodeDetail = ({
  name,
  air_date,
  overview,
  runtime,
  vote_average,
  still_path,

}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700 transition-transform transform hover:scale-105">
      <div className="flex flex-col lg:flex-row">
        <img
          src={`${TMDB_IMG_BASE_URL_500}${still_path}`}
          alt={name}
          className="w-full lg:w-1/3 h-64 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 border border-gray-600"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <p className="text-gray-400 mb-2">
            <strong>Air Date:</strong> {air_date}
          </p>
          <p className="text-gray-400 mb-2">
            <strong>Runtime:</strong> {runtime} minutes
          </p>
          <p className="text-gray-400 mb-2">
            <strong>Rating:</strong> {vote_average} / 10
          </p>
          <p className="text-gray-300 mb-4">
            {overview || "No overview available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetail;
