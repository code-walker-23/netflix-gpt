import React from "react";
import MainContainer from "./FrontPage";
import SecondaryContainer from "./SecondaryPage";
import useFetchMoviesList from "../hooks/useFetchAllMoviesList";
import useFetchTvList from "../hooks/useFetchAllTvList";
import ShimmerEffect from "../utils/Shimmer";

const Browse = () => {
  const { loading } = useFetchMoviesList();
  useFetchTvList();
  return (
    <div className="browse relative min-h-screen bg-gray-900 text-white">
      <>
        {loading ? (
          <ShimmerEffect /> 
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </>
    </div>
  );
};

export default Browse;
