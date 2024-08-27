import React from "react";
import useFetchDiscoverMovies from "../hooks/useFetchDiscoverMovies";
import MovieList from "../components/SecondaryPage/MovieList";
import ShimmerEffect from "../utils/Shimmer";
import Search from "../components/SearchDetailMovieTv";

const DiscoverMovies = () => {
  const [discoverMovies, setDiscoverMovies] = React.useState([]);
  const { loading, error } = useFetchDiscoverMovies(setDiscoverMovies);
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-6 flex flex-col items-center">
      <div className=" mt-16">
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
        >
          {showSearch ? "Popular Movies" : "Search Movies"}
        </button>
      </div>

      {/* Main Card */}
      {!showSearch && (
        <div className="w-full max-w-9xl bg-gray-900 p-8 mt-3">
          {loading && <ShimmerEffect />}

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
      )}

      {/* Search Component */}
      {showSearch && (
        <div className=" w-full max-w-9xl">
          <Search type={"movie"} />
        </div>
      )}
    </div>
  );
};

export default DiscoverMovies;
