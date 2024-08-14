import React from "react";
import { Link } from "react-router-dom";
import useFetchMovieGenres from "../../hooks/useFetchMovieGenres";
import useFetchTvGenres from "../../hooks/useFetchTvGenres";

const MovieTvList = () => {
  const [movieGenres, setMovieGenres] = React.useState([]);
  const [tvGenres, setTvGenres] = React.useState([]);
  const { loading: movieLoading, error: movieError } = useFetchMovieGenres(setMovieGenres);
  const { loading: tvLoading, error: tvError } = useFetchTvGenres(setTvGenres);

  return (
    <div className="bg-gray-900 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Movies Section */}
        <section className="mb-12 mt-14">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Movie Genres</h1>
          
          {movieLoading && (
            <div className="flex justify-center items-center h-64">
              <p className="text-white text-lg">Loading movie genres...</p>
            </div>
          )}

          {movieError && (
            <div className="flex justify-center items-center h-64">
              <p className="text-red-500 text-lg">Error: {movieError}</p>
            </div>
          )}

          {!movieLoading && !movieError && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {movieGenres.map((genre) => (
                <Link
                  key={genre.id}
                  to={`/browse/moviedetail/${genre.id}`}
                  className="block bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-white">{genre.name}</h3>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* TV Shows Section */}
        <section>
          <h1 className="text-4xl font-bold text-white mb-8 text-center">TV Genres</h1>

          {tvLoading && (
            <div className="flex justify-center items-center h-64">
              <p className="text-white text-lg">Loading TV genres...</p>
            </div>
          )}

          {tvError && (
            <div className="flex justify-center items-center h-64">
              <p className="text-red-500 text-lg">Error: {tvError}</p>
            </div>
          )}

          {!tvLoading && !tvError && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {tvGenres.map((genre) => (
                <Link
                  key={genre.id}
                  to={`/browse/tvdetail/${genre.id}`}
                  className="block bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-white">{genre.name}</h3>
                </Link>
              ))}
            </div>
          )}
        </section>
        
      </div>
    </div>
  );
};

export default MovieTvList;
