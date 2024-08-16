import React, { useState } from "react";
import useFetchTrending from "../hooks/useFetchTrending";
import MovieList from "../components/SecondaryPage/MovieList";
import PeopleList from "../components/PopularPeople/PeopleList";
import TrendingSelectors from "../components/Trending/TrendingSelectors";
import TrendingLoadingError from "../components/Trending/TrendingLoadingError";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [time, setTime] = useState("week");
  const [type, setType] = useState("movie");
  const [language, setLanguage] = useState("en");

  const { loading, error } = useFetchTrending(
    setTrending,
    time,
    type,
    language
  );

  const handleTimeChange = (selectedOption) => setTime(selectedOption.value);
  const handleTypeChange = (selectedOption) => setType(selectedOption.value);
  const handleLanguageChange = (selectedOption) =>
    setLanguage(selectedOption.value);

  return (
    <div className="bg-gray-900 min-h-screen py-16 px-6 flex flex-col items-center">
      <div className="w-full max-w-screen-xl bg-gray-900 mt-7">
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
          Trending
        </h1>

        <TrendingSelectors
          type={type}
          time={time}
          language={language}
          onTypeChange={handleTypeChange}
          onTimeChange={handleTimeChange}
          onLanguageChange={handleLanguageChange}
        />

        <TrendingLoadingError loading={loading} error={error} />

        {!loading && !error && (
          <div>
            {type === "person" ? (
              <PeopleList popularPeopleList={trending} />
            ) : (
              <MovieList
                list={trending}
                title={`Trending ${
                  type.charAt(0).toUpperCase() + type.slice(1)
                }`}
                type={type}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trending;
