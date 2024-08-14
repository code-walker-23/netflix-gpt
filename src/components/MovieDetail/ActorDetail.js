import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchActorDetail from "../../hooks/useFetchActorMovieCredits";
import useFetchActorTvCredits from "../../hooks/useFetchActorTvCredits";
import useFetchCreditDetail from "../../hooks/useFetchCreditDetail";
import MovieList from "../Secondary Page/MovieList";
import ShimmerEffect from "../../utils/Shimmer";
import CreditDetail from "./CreditDetail";
import PeopleImages from "./PeopleImages";
import PeopleDetail from "./PeopleDetail";

export const ActorDetail = () => {
  const { actorId, actorName, actorCreditId, useCreditId } = useParams();
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [creditDetail, setCreditDetail] = useState(null);

  // Fetch movies and TV shows
  const { loading: loadingMovies, error: errorMovies } = useFetchActorDetail(
    actorId,
    setMovies
  );
  const { loading: loadingTv, error: errorTv } = useFetchActorTvCredits(
    actorId,
    setTvShows
  );
  if (useCreditId) {
    useFetchCreditDetail(actorCreditId, setCreditDetail);
  }

  const isLoading = loadingMovies || loadingTv;
  const error = errorMovies || errorTv;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 mt-12">
          {actorName}'s Filmography
        </h1>

        {isLoading && (
          <div className="text-white text-center p-8">
            <ShimmerEffect />
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center p-8">Error: {error}</div>
        )}

        {!isLoading && !error && (
          <>
            <PeopleDetail actorId={actorId} />
            {creditDetail && <CreditDetail creditDetail={creditDetail} />}
            {movies.length > 0 && (
              <MovieList title="Movies" list={movies} type={"movie"} />
            )}
            {tvShows.length > 0 && (
              <MovieList title="TV Shows" list={tvShows} type={"tv"} />
            )}
            {movies.length === 0 && tvShows.length === 0 && (
              <div className="text-white text-center p-8">
                No movies or TV shows found for {actorName}.
              </div>
            )}
            <PeopleImages actorId={actorId} />
          </>
        )}
      </div>
    </div>
  );
};
