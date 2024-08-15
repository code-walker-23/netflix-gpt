import React from "react";
import useFetchMovieRecommendations from "../../hooks/useFetchMovieRecommendations";
import MovieList from "../SecondaryPage/MovieList";

const MovieRecommendation = ({ movieId }) => {
  const [movieRecommendations, setMovieRecommendations] = React.useState([]);
  const { loading, error } = useFetchMovieRecommendations(
    setMovieRecommendations,
    movieId
  );

  if (loading) {
    return (
      <div className="p-8 text-center text-white">
        <p>Loading recommendations...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        <p>Failed to load recommendations. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-900 rounded-lg shadow-lg mt-8">
      <h2 className="text-4xl font-bold text-white mb-6">Recommended Movies</h2>
      <MovieList
        list={movieRecommendations}
        title={""}  // Assuming MovieList handles title internally
        type={"movie"}
      />
    </div>
  );
};

export default MovieRecommendation;
