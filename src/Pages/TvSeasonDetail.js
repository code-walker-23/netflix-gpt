import React from "react";
import { useParams } from "react-router-dom";
import useFetchSeasonDetail from "../hooks/useFetchSeasonDetail";
import "tailwindcss/tailwind.css";
import Episodes from "../components/TvSeason/EpisodesList";
import ShimmerEffect from "../utils/Shimmer";

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
      <header className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 py-12 px-6 lg:px-12 shadow-lg rounded-b-lg">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mt-10">
            Season {seasonNumber} Details
          </h1>
          <p className="text-gray-300 mt-2 text-lg lg:text-xl">
            Explore all episodes and details of this season
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 lg:p-12 mt-8">
        {loading && <ShimmerEffect />}
        {error && (
          <div className="flex justify-center items-center h-96">
            <div className="text-center text-red-500 text-xl">
              <p>Error loading season details. Please try again later.</p>
            </div>
          </div>
        )}
        {!loading && !error && episodes.length > 0 && (
          <Episodes
            episodes={episodes}
            seriesId={seriesId}
            seasonNumber={seasonNumber}
          />
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
