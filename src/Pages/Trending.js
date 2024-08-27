import React, { useState } from "react";
import useFetchTrending from "../hooks/useFetchTrending";
import MovieList from "../components/SecondaryPage/MovieList";
import PeopleList from "../components/PopularPeople/PeopleList";
import TrendingLoadingError from "../components/Trending/TrendingLoadingError";
import LanguageSelector from "../components/Trending/LanguageSelectors";

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

  const handleTimeChange = (value) => setTime(value);
  const handleTypeChange = (value) => setType(value);
  const handleLanguageChange = (value) => setLanguage(value);

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-6 flex flex-col items-center">
      {/* Heading */}
      <div className="w-full max-w-4xl mb-8 mt-16">
        <button className="w-full px-6 py-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-transform transform hover:scale-105">
          Trending
        </button>
      </div>

      {/* Card Container */}
      <div className="w-full max-w-7xl bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Selector Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          {/* Type Selector */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => handleTypeChange("movie")}
              className={`px-4 py-2 rounded-lg ${
                type === "movie"
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-gray-300"
              } transition-transform transform hover:scale-105`}
            >
              Movies
            </button>
            <button
              onClick={() => handleTypeChange("tv")}
              className={`px-4 py-2 rounded-lg ${
                type === "tv"
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-gray-300"
              } transition-transform transform hover:scale-105`}
            >
              TV Shows
            </button>
            <button
              onClick={() => handleTypeChange("person")}
              className={`px-4 py-2 rounded-lg ${
                type === "person"
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-gray-300"
              } transition-transform transform hover:scale-105`}
            >
              People
            </button>
          </div>

          {/* Time Selector */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => handleTimeChange("day")}
              className={`px-4 py-2 rounded-lg ${
                time === "day"
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-gray-300"
              } transition-transform transform hover:scale-105`}
            >
              Today
            </button>
            <button
              onClick={() => handleTimeChange("week")}
              className={`px-4 py-2 rounded-lg ${
                time === "week"
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-gray-300"
              } transition-transform transform hover:scale-105`}
            >
              This Week
            </button>
          </div>

          {/* Language Selector */}
          <div className="mb-4">
            <LanguageSelector
              selectedLanguage={language}
              onLanguageChange={handleLanguageChange}
            />
          </div>
        </div>

        {/* Loading and Error States */}
        <TrendingLoadingError loading={loading} error={error} />

        {/* Trending Content */}
        {!loading && !error && (
          <div className="mt-8">
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
