import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {
  const listNowPlaying = useSelector((state) => state.movies?.nowPlayingMovies);
  const listPopular = useSelector((state) => state.movies?.popularMovies);
  const listTopRated1 = useSelector((state) => state.movies?.topRatedMovies);
  const listUpcoming = useSelector((state) => state.movies?.upcomingMovies);
  const listTopRated2 = useSelector((state) => state.movies?.ratedMovies);
  console.log("SecondaryContainer toprated2",listTopRated2);

  return (
    <div className="p-8 bg-gray-900 text-white">
      <MovieList title="Now Playing" list={listNowPlaying} />
      <MovieList title="Popular" list={listPopular} />
      <MovieList title="Top Rated1" list={listTopRated1} />
      <MovieList title="Top Rated2" list={listTopRated2} />
      <MovieList title="Upcoming" list={listUpcoming} />
    </div>
  );
};

export default SecondaryContainer;
