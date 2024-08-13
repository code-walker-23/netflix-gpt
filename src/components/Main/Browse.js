import React from "react";
import { useSelector } from "react-redux";
import MainContainer from "../Front Page/MainContainer";
import SecondaryContainer from "../Secondary Page/SecondaryContainer";
import useFetchMoviesList from "../../hooks/useFetchAllMoviesList";
import useFetchTvList from "../../hooks/useFetchAllTvList";
import ShimmerEffect from "../../utils/Shimmer";

const Browse = () => {
  const { loading } = useFetchMoviesList();
  useFetchTvList();
  return (
    <div className="browse relative min-h-screen bg-gray-900 text-white">
      <>
        {loading ? (
          <ShimmerEffect /> // Show shimmer effect while loading
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
