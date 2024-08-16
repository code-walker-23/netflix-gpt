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
      <div className="flex justify-center mt-14">
        {/* Button to Toggle*/}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
        >
          {showSearch ? "Popular TV Shows" : "Search TV Shows"}
        </button>
      </div>

      {/* MovieList */}
      {!showSearch && (
        <div className="w-full max-w-8xl mx-auto">
          {/* Card for Movie List */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            {loading && (
              <div className="flex justify-center items-center h-64">
                <ShimmerEffect />
              </div>
            )}

            {error && (
              <div className="flex justify-center items-center h-64">
                <p className="text-red-500 text-lg">Error: {error}</p>
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
        </div>
      )}

      {/* Search */}
      {showSearch && (
        <div className="w-full max-w-8xl mx-auto">
          <Search type={"tv"} />
        </div>
      )}
    </div>
  );
};

export default DiscoverTvShows;
