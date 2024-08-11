import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import MainButton from "./MainButton";

const MainContainer = () => {
  const moviesList = useSelector((state) => state.movies?.nowPlayingMovies);
  const mainMovie = moviesList[1];

  if (!mainMovie) return null; // early return if mainMovie is falsy

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="scrollable-element relative h-screen bg-black text-white overflow-hidden">
      <VideoBackground id={id} />
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-black via-transparent to-transparent">
        <VideoTitle title={original_title} overview={overview} />
        <MainButton></MainButton>
      </div>
    </div>
  );
};

export default MainContainer;
