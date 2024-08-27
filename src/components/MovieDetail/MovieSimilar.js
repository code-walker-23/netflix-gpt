import React from "react";
import useFetchMovieSimilar from "../../hooks/useFetchMovieSimilar";
import MovieList from "../SecondaryPage/MovieList";
import ShimmerEffect from "../../utils/Shimmer";

const MovieSimilar = ({ movieId }) => {
  const [movieSimilar, setMovieSimilar] = React.useState([]);
  const { loading, error } = useFetchMovieSimilar(setMovieSimilar, movieId);

  if (loading) {
    return <ShimmerEffect />;
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        <p>Failed to load similar movies. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-900 rounded-lg shadow-lg mt-8">
      <h2 className="text-4xl font-bold text-white mb-6">Similar Movies</h2>
      <MovieList list={movieSimilar} title={""} type={"movie"} />
    </div>
  );
};

export default MovieSimilar;
