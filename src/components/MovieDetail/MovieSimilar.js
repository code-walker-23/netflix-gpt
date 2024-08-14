import React from "react";
import useFetchMovieSimilar from "../../hooks/useFetchMovieSimilar";
import MovieList from "../Secondary Page/MovieList";
const MovieSimilar = ({ movieId }) => {
  const [movieSimilar, setMovieSimilar] = React.useState([]);
  const { loading, error } = useFetchMovieSimilar(
    setMovieSimilar,
    movieId
  );

  return (
    <div>
      <MovieList
        list={movieSimilar}
        title={"Similar Movies"}
        type={"movie"}
      />
    </div>
  );
};

export default MovieSimilar;
