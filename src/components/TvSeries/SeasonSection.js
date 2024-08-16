import React from "react";
import { Link } from "react-router-dom";
import { TMDB_IMG_BASE_URL_500 } from "../../utils/constant";

const SeasonCard = ({ season, tvId }) => (
  <Link
    to={`/browse/tvdetail/${tvId}/season/${season.season_number}`}
    key={season.id}
    className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
  >
    <img
      src={`${TMDB_IMG_BASE_URL_500}${season.poster_path}`}
      alt={`Season ${season.season_number}`}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h3 className="text-2xl font-semibold mb-2">
      Season {season.season_number}
    </h3>
    <p className="text-gray-300">Episodes: {season.episode_count}</p>
    <p className="text-gray-300">Rating: {season.vote_average || "N/A"}</p>
  </Link>
);

const SeasonSection = ({ seasons, tvId, seasonsRef }) => {
  const filteredSeasons = seasons.slice(1);

  return (
    <div ref={seasonsRef} className="py-12 px-5 lg:px-20 bg-gray-900">
      <div className="max-w-8xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-white mb-6">Seasons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSeasons.length > 0 ? (
              filteredSeasons.map((season) => (
                <SeasonCard key={season.id} season={season} tvId={tvId} />
              ))
            ) : (
              <p className="text-white">No seasons available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonSection;
