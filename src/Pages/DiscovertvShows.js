import React from "react";
import useFetchTvShows from "../hooks/useFetchTvShows";
import MovieList from "../components/SecondaryPage/MovieList";
import ShimmerEffect from "../utils/Shimmer";
import Search from "../components/SearchDetailMovieTv";
import { useRef } from "react";

const DiscoverTvShows = () => {
  const [discoverTvShows, setDiscoverTvShows] = React.useState([]);
  const { loading, error } = useFetchTvShows(setDiscoverTvShows);

  const searchRef = useRef(null);
  const handleScrollToSearch = () => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12 px-6 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto">
        {/* Button to Scroll to Search */}
        <div className="flex justify-center mb-8 mt-14">
          <button
            onClick={handleScrollToSearch}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
          >
            Go to Search
          </button>
        </div>

        {/* Card for Movie List */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
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

      {/* Search Component */}
      <div ref={searchRef} className="w-full max-w-6xl mx-auto mt-12">
        <Search type={"tv"} />
      </div>
    </div>
  );
};

export default DiscoverTvShows;
