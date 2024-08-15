import React, { useRef } from "react";
import useFetchDiscoverMovies from "../hooks/useFetchDiscoverMovies";
import MovieList from "../components/SecondaryPage/MovieList";
import ShimmerEffect from "../utils/Shimmer";
import Search from "../components/SearchDetailMovieTv";

const DiscoverMovies = () => {
  const [discoverMovies, setDiscoverMovies] = React.useState([]);
  const { loading, error } = useFetchDiscoverMovies(setDiscoverMovies);

  const searchRef = useRef(null);
  const handleScrollToSearch = () => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12 px-6 flex flex-col items-center">
      {/* Button to Scroll to Search */}
      <div className="mb-8 mt-14">
        <button
          onClick={handleScrollToSearch}
          className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
        >
          Go to Search
        </button>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-6xl bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
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
              list={discoverMovies}
              title="Popular Movies"
              type={"movie"}
            />
          </div>
        )}
      </div>

      {/* Search Component */}
      <div ref={searchRef} className="mt-12 w-full max-w-6xl">
        <Search type={"movie"} />
      </div>
    </div>
  );
};

export default DiscoverMovies;
