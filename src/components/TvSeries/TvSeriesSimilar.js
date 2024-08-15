import React from "react";
import useFetchTvSeriesSimilar from "../../hooks/useFetchTvSeriesSimilar";
import MovieList from "../SecondaryPage/MovieList";
const TvSeriesSimilar = ({ tvId }) => {
  const [TvSeriesSimilar, setTvSeriesSimilar] = React.useState([]);
  useFetchTvSeriesSimilar(setTvSeriesSimilar, tvId);
  console.log(TvSeriesSimilar, "TvSeriesSimilar");

  return (
    <div>
      <MovieList list={TvSeriesSimilar} title={"similars"} type={"tv"} />
    </div>
  );
};

export default TvSeriesSimilar;
