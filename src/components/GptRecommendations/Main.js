import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import SearchContainer from "./SearchContainer";
import ResultsBox from "./ResultsBox";

const Main = () => {
  const backgroundColor = useSelector(
    (state) => state.moviesGpt.backgroundColor
  );
  return (
    <div
      className={`flex flex-col items-center min-h-screen px-4 py-16 transition-all duration-500 ${backgroundColor}`}
    >
      <Header />
      <SearchContainer />
      <ResultsBox />
    </div>
  );
};

export default Main;
