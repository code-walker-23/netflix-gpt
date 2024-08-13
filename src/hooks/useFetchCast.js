import {useEffect} from "react";
import { options } from "../utils/constant";

const useFetchCast = (props) => {
  const { movieId, setCast } = props
  const fetchCast = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      options
    );
    const data = await response.json();
    setCast(data.cast);
  };

  useEffect(() => {
    fetchCast();
  }, [movieId]);
};

export default useFetchCast;