import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";

const MainContainer = () => {
  const moviesList = useSelector((state) => state.nowPlayingMovies?.moviesList);
  const mainMovie = moviesList[6];
  console.log(mainMovie);

  if (!mainMovie) return null; // early return if mainMovie is falsy

  const { original_title, overview } = mainMovie;

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      <VideoBackground movie={mainMovie} />
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-black via-transparent to-transparent">
        <VideoTitle title={original_title} overview={overview} />
        <div className="mt-8 flex space-x-6">
          <button className="flex items-center bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
            <img src={play_icon} alt="Play Icon" className="w-6 h-6 mr-3" />
            <span className="text-lg font-semibold">Play</span>
          </button>

          <button className="flex items-center bg-gradient-to-r from-gray-800 to-gray-600 text-white px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
            <img src={info_icon} alt="Info Icon" className="w-6 h-6 mr-3" />
            <span className="text-lg font-semibold">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
