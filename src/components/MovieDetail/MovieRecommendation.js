import React from "react";
import useFetchMovieRecommendations from "../../hooks/useFetchMovieRecommendations";
import MovieList from "../SecondaryPage/MovieList";
const MovieRecommendation = ({ movieId }) => {
  const [movieRecommendations, setMovieRecommendations] = React.useState([]);
  const { loading, error } = useFetchMovieRecommendations(
    setMovieRecommendations,
    movieId
  );
  console.log(movieRecommendations, "movieRecommendations");

  return (
    <div>
      <MovieList
        list={movieRecommendations}
        title={"Recommendations"}
        type={"movie"}
      />
    </div>
  );
};

export default MovieRecommendation;
