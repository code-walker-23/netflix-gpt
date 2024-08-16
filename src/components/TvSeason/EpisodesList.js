import React from "react";
import { Link } from "react-router-dom";
import { TMDB_IMG_BASE_URL_500 } from "../../utils/constant";

const Episodes = ({
  episodes,
  seriesId,
  seasonNumber,
}) => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
  {episodes.map((episode) => (
    <Link
      to={`/browse/tvdetail/${seriesId}/season/${seasonNumber}/${episode.episode_number}`}
      key={episode.id}
      className="group"
    >
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
        <img
          src={`${TMDB_IMG_BASE_URL_500}${episode.still_path}`}
          alt={`Episode ${episode.episode_number}`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 h-64 flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-2 text-gray-100 truncate">
            Episode {episode.episode_number}: {episode.name}
          </h2>
          <div className="text-gray-300 flex-1">
            <p className="mb-2">
              <strong>Runtime:</strong> {episode.runtime} minutes
            </p>
            <p className="mb-2">
              <strong>Air Date:</strong> {episode.air_date}
            </p>
            <p className="mb-4 text-sm text-gray-400 truncate">
              {episode.overview || "No overview available."}
            </p>
            <p className="text-gray-300">
              <strong>Rating:</strong> {episode.vote_average || "N/A"} / 10
            </p>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>;
};

export default Episodes;
