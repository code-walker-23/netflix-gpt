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
      <header className="bg-gray-800 py-6 px-4 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mt-16">
          Season {seasonNumber} Details
        </h1>
      </header>

      {/* Main Content */}
      <main className="p-6 lg:p-12">
        {loading && (
          <div className="text-center text-gray-400">
            <p>Loading...</p>
          </div>
        )}
        {error && (
          <div className="text-center text-red-500">
            <p>Error loading season details. Please try again later.</p>
          </div>
        )}
        {!loading && !error && episodes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode) => (
              <Link
                to={`/browse/tvdetail/${seriesId}/season/${seasonNumber}/${episode.episode_number}`}
                key={episode.id}
                className="group"
              >
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform group-hover:scale-105 group-hover:shadow-xl">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
                    alt={`Episode ${episode.episode_number}`}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-100">
                      Episode {episode.episode_number}: {episode.name}
                    </h2>
                    <p className="text-gray-300 mb-2">
                      <strong>Runtime:</strong> {episode.runtime} minutes
                    </p>
                    <p className="text-gray-300 mb-2">
                      <strong>Air Date:</strong> {episode.air_date}
                    </p>
                    <p className="text-gray-300 mb-4">
                      {episode.overview || "No overview available."}
                    </p>
                    <p className="text-gray-300">
                      <strong>Rating:</strong> {episode.vote_average || "N/A"} / 10
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        {!loading && !error && episodes.length === 0 && (
          <div className="text-center text-gray-400">
            <p>No episodes available for this season.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default TvSeasonDetail;
