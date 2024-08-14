import React from "react";
import { useParams } from "react-router-dom";
import useFetchSeasonDetail from "../../hooks/useFetchSeasonDetail";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

const TvSeasonDetail = () => {
  const { seriesId, seasonNumber } = useParams();
  const [episodes, setEpisodes] = React.useState([]);
  const { loading, error } = useFetchSeasonDetail(
    seriesId,
    seasonNumber,
    setEpisodes
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-800 py-8 px-6 lg:px-12 shadow-lg">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-center mt-14">
          Season {seasonNumber} Details
        </h1>
      </header>

      {/* Main Content */}
      <main className="p-6 lg:p-12 mt-8">
        {loading && (
          <div className="flex justify-center items-center h-96">
            <div className="text-center text-gray-400 text-xl">
              <p>Loading...</p>
            </div>
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center h-96">
            <div className="text-center text-red-500 text-xl">
              <p>Error loading season details. Please try again later.</p>
            </div>
          </div>
        )}
        {!loading && !error && episodes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {episodes.map((episode) => (
              <Link
                to={`/browse/tvdetail/${seriesId}/season/${seasonNumber}/${episode.episode_number}`}
                key={episode.id}
                className="group"
              >
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
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
          </div>
        )}
        {!loading && !error && episodes.length === 0 && (
          <div className="flex justify-center items-center h-96">
            <div className="text-center text-gray-400 text-xl">
              <p>No episodes available for this season.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TvSeasonDetail;
