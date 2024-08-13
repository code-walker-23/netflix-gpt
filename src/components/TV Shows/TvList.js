import React from "react";
import { options } from "../../utils/constant";
import { useEffect, useState } from "react";
const TvList = () => {
  const [tvShows, setTvShows] = useState([]);

  const fetchTvShows = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/tv/list?language=en",
      options
    );
    const data = await response.json();
    setTvShows(data);
    console.log(tvShows);
  };

  useEffect(() => {
    fetchTvShows();
  }, []);
  return <div></div>;
};

export default TvList;
