import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import SearchContainer from "./SearchContainer";
import ResultsBox from "./ResultsBox";
import { handleGptSearch } from "./handleGptSearch";

const GptSearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [movieArray, setMovieArray] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("bg-transparent");
  const selectedLanguage = useSelector((state) => state.config.selectedLang);

  return (
    <div
      className={`flex flex-col items-center min-h-screen px-4 py-16 transition-all duration-500 ${backgroundColor}`}
    >
      <Header />
      <SearchContainer
        searchText={searchText}
        setSearchText={setSearchText}
        handleGptSearch={() =>
          handleGptSearch(
            searchText,
            selectedLanguage,
            setMovieArray,
            setMovieDetails,
            setLoading,
            setError,
            setBackgroundColor
          )
        }
      />
      <ResultsBox loading={loading} error={error} movieDetails={movieDetails} />
    </div>
  );
};

export default GptSearchBar;
