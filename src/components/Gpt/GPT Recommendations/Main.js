// components/GptSearchBar.js
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { options } from "../../../utils/constant";
import Header from "./Header";
import SearchContainer from "./SearchContainer";
import ResultsBox from "./ResultsBox";
import { fetchMovieDetail } from "./fetchMovieDetail";
import { handleGptSearch } from "./handleGptSearch";

const GptSearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [movieArray, setMovieArray] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("bg-transparent");
  const selectedLanguage = useSelector((state) => state.config.selectedLang);

  useEffect(() => {
    if (movieArray.length > 0) {
      const fetchDetails = async () => {
        const details = await Promise.all(
          movieArray.map((movie) =>
            fetchMovieDetail(movie, selectedLanguage, options)
          )
        );
        const movieDetailsObj = movieArray.reduce((acc, movie, index) => {
          acc[movie] = details[index];
          return acc;
        }, {});
        setMovieDetails(movieDetailsObj);
      };
      fetchDetails();
    } else {
      setBackgroundColor("bg-transparent");
    }
  }, [movieArray, selectedLanguage]);

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
