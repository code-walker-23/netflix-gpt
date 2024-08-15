import React from "react";
import useFetchTvSeriesRecommendations from "../../hooks/useFetchMovieRecommendations";
import MovieList from "../SecondaryPage/MovieList";
const TvSeriesRecommendation = ({ tvId }) => {
  const [TvSeriesRecommendations, setTvSeriesRecommendations] = React.useState(
    []
  );
  useFetchTvSeriesRecommendations(setTvSeriesRecommendations, tvId);
  console.log(TvSeriesRecommendations, "TvSeriesRecommendations");

  return (
    <div>
      <MovieList
        list={TvSeriesRecommendations}
        title={"Recommendations"}
        type={"tv"}
      />
    </div>
  );
};

export default TvSeriesRecommendation;
