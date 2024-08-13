import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import {
  setAiringToday,
  setOnTheAir,
  setPopular,
  setTopRated,
} from "../utils/Slices/TvSlice";
import {
  AIRING_TODAY_TV,
  ON_THE_AIR_TV,
  POPULAR_TV,
  TOP_RATED_TV,
} from "../utils/constant";

const useFetchList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchTvData = async () => {
    try {
      const [
        airingTodayResponse,
        onTheAirResponse,
        popularResponse,
        topRatedResponse,
      ] = await Promise.all([
        fetch(AIRING_TODAY_TV, options),
        fetch(ON_THE_AIR_TV, options),
        fetch(POPULAR_TV, options),
        fetch(TOP_RATED_TV, options),
      ]);

      const [airingTodayData, onTheAirData, popularData, topRatedData] =
        await Promise.all([
          airingTodayResponse.json(),
          onTheAirResponse.json(),
          popularResponse.json(),
          topRatedResponse.json(),
        ]);

      dispatch(setAiringToday(airingTodayData.results));
      dispatch(setOnTheAir(onTheAirData.results));
      dispatch(setPopular(popularData.results));
      dispatch(setTopRated(topRatedData.results));
    } catch (error) {
      console.error("Error fetching movies data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTvData();
  }, [dispatch]);

  return { loading };
};

export default useFetchList;
