import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "../Front Page/MainContainer";
import SecondaryContainer from "../Secondary Page/SecondaryContainer";
import useAuthStateChange from "../../hooks/useAuthStateChange";
import useFetchMoviesList from "../../hooks/useFetchAllMoviesList";
import ShimmerEffect from "../../utils/Shimmer";
import GptSearch from "../Gpt/GptSearchPage"; // Ensure GptSearch is imported

const Browse = () => {
  const { loading } = useFetchMoviesList();
  const {showGptView} = useSelector((state) => state.gptToggle);
  useAuthStateChange();

  return (
    <div className="browse relative">
      <Header />
      {showGptView ? (
        <GptSearch /> // Show GptSearch when showGptView is true
      ) : (
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
      )}
    </div>
  );
};

export default Browse;
