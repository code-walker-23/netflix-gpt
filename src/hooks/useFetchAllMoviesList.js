import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import {
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setNowPlayingMovies,
} from "../utils/Slices/moviesSlice";
import {
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  UPCOMING_MOVIES,
  NOW_PLAYING_MOVIES,
} from "../utils/constant";

const useFetchMoviesList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchMoviesData = async () => {
    try {
      const [
        popularResponse,
        topRatedResponse,
        upcomingResponse,
        nowPlayingResponse,
      ] = await Promise.all([
        fetch(POPULAR_MOVIES, options),
        fetch(TOP_RATED_MOVIES, options),
        fetch(UPCOMING_MOVIES, options),
        fetch(NOW_PLAYING_MOVIES, options),
      ]);

      const [popularData, topRatedData, upcomingData, nowPlayingData] =
        await Promise.all([
          popularResponse.json(),
          topRatedResponse.json(),
          upcomingResponse.json(),
          nowPlayingResponse.json(),
        ]);

      dispatch(setPopularMovies(popularData.results));
      dispatch(setTopRatedMovies(topRatedData.results));
      dispatch(setUpcomingMovies(upcomingData.results));
      dispatch(setNowPlayingMovies(nowPlayingData.results));
    } catch (error) {
      console.error("Error fetching movies data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, [dispatch]);

  return { loading };
};

export default useFetchMoviesList;
