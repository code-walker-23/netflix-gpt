import React from "react";

const OverviewCard = ({
  overview,
  genres,
  networks,
  last_episode_to_air,
  next_episode_to_air,
}) => {
 
  const lastEpisodeAirDate = last_episode_to_air?.air_date || "N/A";
  const nextEpisodeAirDate = next_episode_to_air?.air_date || "N/A";

  return (
    <div className="py-12 px-5 lg:px-20 bg-gray-900">
      <div className="max-w-8xl mx-auto">
        {/* Card Wrapper */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <p className="text-gray-300 mb-4">
            {overview || "No overview available."}
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-2">Genres</h3>
            <p className="text-gray-300">
              {genres.length > 0
                ? genres.map((genre) => genre.name).join(", ")
                : "N/A"}
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-2">Networks</h3>
            <p className="text-gray-300">
              {networks.length > 0
                ? networks.map((network) => network.name).join(", ")
                : "N/A"}
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-2">Last Episode</h3>
            <p className="text-gray-300">{lastEpisodeAirDate}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Next Episode</h3>
            <p className="text-gray-300">{nextEpisodeAirDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
