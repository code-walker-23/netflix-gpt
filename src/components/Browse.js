import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useAuthStateChange from "../hooks/useAuthStateChange";
import useFetchMoviesList from "../hooks/useFetchAllMoviesList";
import ShimmerEffect from "../utils/Shimmer";

const Browse = () => {
  const { loading } = useFetchMoviesList();
  useAuthStateChange();

  return (
    <div className="browse relative">
      <Header />
      {loading ? (
        <ShimmerEffect />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
