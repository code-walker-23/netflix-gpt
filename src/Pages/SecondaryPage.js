import React from "react";
import MovieList from "../components/SecondaryPage/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const listNowPlaying = useSelector((state) => state.movies?.nowPlayingMovies);
  const listPopular = useSelector((state) => state.movies?.popularMovies);
  const listTopRated = useSelector((state) => state.movies?.topRatedMovies);
  const listUpcoming = useSelector((state) => state.movies?.upcomingMovies);
  const listAiringToday = useSelector((state) => state.tv?.airingToday);
  const listOnTheAir = useSelector((state) => state.tv?.onTheAir);
  const listPopularTv = useSelector((state) => state.tv?.popular);
  const listTopRatedTv = useSelector((state) => state.tv?.topRated);

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold mb-6 border-b-4 border-red-600 pb-2">
          Movies
        </h2>
        <div className="space-y-10">
          <MovieList title="Now Playing" list={listNowPlaying} type={"movie"} />
          <MovieList title="Popular" list={listPopular} type={"movie"} />
          <MovieList title="Top Rated" list={listTopRated} type={"movie"} />
          <MovieList title="Upcoming" list={listUpcoming} type={"movie"} />
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-extrabold mb-6 border-b-4 border-green-600 pb-2">
          TV Shows
        </h2>
        <div className="space-y-10">
          <MovieList title="Airing Today" list={listAiringToday} type={"tv"} />
          <MovieList title="On The Air" list={listOnTheAir} type={"tv"} />
          <MovieList title="Popular" list={listPopularTv} type={"tv"} />
          <MovieList title="Top Rated" list={listTopRatedTv} type={"tv"} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
