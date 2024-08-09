import { options } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNowPlayingMovies } from "../utils/nowPlayingMoviesSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(setNowPlayingMovies(json.results));
    // console.log(json);
    console.log("fetching now playing movies");
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
