import React, { useState } from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useAuthStateChange from "../hooks/useAuthStateChange";

const Browse = () => {
  useAuthStateChange();
  useNowPlayingMovies();
  return (
    <div className="browse relative h-screen">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
