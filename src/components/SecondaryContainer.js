import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {
  const listNowPlaying = useSelector((state) => state.movies?.nowPlayingMovies);
  const listPopular = useSelector((state) => state.movies?.popularMovies);
  const listTopRated = useSelector((state) => state.movies?.topRatedMovies);
  const listUpcoming = useSelector((state) => state.movies?.upcomingMovies);

  return (
    <div className="p-8 bg-gray-900 text-white">
      <MovieList title="Now Playing" list={listNowPlaying} />
      <MovieList title="Popular" list={listPopular} />
      <MovieList title="Top Rated" list={listTopRated} />
      <MovieList title="Upcoming" list={listUpcoming} />
    </div>
  );
};

export default SecondaryContainer;
