import React from "react";
import useFetchTvShows from "../hooks/useFetchTvShows";
import MovieList from "../components/SecondaryPage/MovieList";
import ShimmerEffect from "../utils/Shimmer";
import Search from "../components/SearchDetailMovieTv";

const DiscoverTvShows = () => {
  const [discoverTvShows, setDiscoverTvShows] = React.useState([]);
  const { loading, error } = useFetchTvShows(setDiscoverTvShows);
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-6 flex flex-col items-center">
      {/* Button to Toggle Search and TV Shows */}
      <div className="w-full max-w-4xl mb-8 mt-16">
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="w-full px-6 py-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-transform transform hover:scale-105"
        >
          {showSearch ? "Show Popular TV Shows" : "Search TV Shows"}
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto">
        {showSearch ? (
          <Search type={"tv"} />
        ) : (
          // TV Shows List
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            {loading && <ShimmerEffect />}

            {error && (
              <div className="flex justify-center items-center h-64">
                <p className="text-red-400 text-lg font-semibold">
                  Error: {error}
                </p>
              </div>
            )}

            {!loading && !error && (
              <div>
                <MovieList
                  list={discoverTvShows}
                  title="Popular TV Shows"
                  type={"tv"}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverTvShows;
