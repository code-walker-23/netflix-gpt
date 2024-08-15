import React from "react";
import MovieList from "../SecondaryPage/MovieList";
import { useSelector } from "react-redux";

const ResultsBox = () => {
  const movieDetails = useSelector((state) => state.moviesGpt.movieDetails);
  const loading = useSelector((state) => state.moviesGpt.loading);
  const error = useSelector((state) => state.moviesGpt.error);

  return (
    <div className="w-full max-w-6xl mt-8">
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
        </div>
      )}
      {error && <p className="text-red-500 text-center py-4">{error}</p>}
      {Object.keys(movieDetails).length > 0 ? (
        Object.entries(movieDetails).map(([title, details]) => (
          <MovieList key={title} title={title} list={details} type={"movie"} />
        ))
      ) : !loading && !error ? (
        <p className="text-center text-gray-600 py-4">No results found</p>
      ) : null}
    </div>
  );
};

export default ResultsBox;
