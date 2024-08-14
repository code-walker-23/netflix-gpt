import React from "react";
import useFetchDiscoverMovies from "../../hooks/useFetchDiscoverMovies";
import MovieList from "../Secondary Page/MovieList";
import ShimmerEffect from "../../utils/Shimmer";

const DiscoverMovies = () => {
  const [discoverMovies, setDiscoverMovies] = React.useState([]);
  const { loading, error } = useFetchDiscoverMovies(setDiscoverMovies);

  return (
    <div className="bg-gray-900 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto mt-20">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Discover Movies
        </h1>

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
              list={discoverMovies}
              title="Popular Movies"
              type={"movie"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverMovies;
