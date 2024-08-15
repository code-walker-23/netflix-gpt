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
    <div className="bg-gray-900 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto mt-20">
        <div className="flex items-center justify-between mb-8 ">
          <button
            onClick={handleScrollToSearch}
            className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
          >
            Go to Search
          </button>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <p className="text-white text-lg">
              <ShimmerEffect />
            </p>
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500 text-lg">Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="mt-8">
            <MovieList
              list={discoverTvShows}
              title="Popular Tv Shows"
              type={"tv"}
            />
          </div>
        )}
      </div>
      <div ref={searchRef}>
        <Search type={"tv"} />
      </div>
    </div>
  );
};

export default DiscoverTvShows;
