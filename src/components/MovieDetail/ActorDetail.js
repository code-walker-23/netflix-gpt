import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchActorDetail from "../../hooks/useFetchActorDetail";
import MovieList from "../Secondary Page/MovieList";
import ShimmerEffect from "../../utils/Shimmer";

export const ActorDetail = () => {
  const { actorId, actorName } = useParams();
  const [movies, setMovies] = useState([]);
  const { loading, error } = useFetchActorDetail(actorId, setMovies);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {loading && (
          <div className="text-white text-center p-8">
            <ShimmerEffect />
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center p-8">Error: {error}</div>
        )}

        {!loading && !error && (
          <div className="text-4xl font-bold mb-6 mt-24">
            <MovieList title={actorName} list={movies} />
          </div>
        )}
      </div>
    </div>
  );
};
