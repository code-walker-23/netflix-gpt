import React, { useState } from "react";
import { useFetchSearchDetail } from "../hooks/useFetchSearchDetailWithPages";
import MovieList from "./SecondaryPage/MovieList";
import ShimmerEffect from "../utils/Shimmer";
import LANGUAGE_OPTIONS from "../utils/LanguageOption";

const SearchPage = ({ type }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");

  const {
    data: results,
    loading,
    error,
  } = useFetchSearchDetail(type, search, selectedLanguage, page);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-4 px-6 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        {/* Main Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            {type === "movie" ? "Movie Search" : "TV Show Search"}
          </h1>

          <div className="bg-gray-900 p-2 rounded-lg mb-6">
            <input
              type="text"
              placeholder={
                type === "movie"
                  ? "Search for movies..."
                  : "Search for TV Shows..."
              }
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-4 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition w-full mb-4"
            />
            <select
              onChange={(e) => setSelectedLanguage(e.target.value)}
              value={selectedLanguage}
              className="p-4 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition w-full"
            >
              {LANGUAGE_OPTIONS.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Loading and Error States */}
          {loading && (
            <div className="flex justify-center items-center h-64">
              <ShimmerEffect />
            </div>
          )}

          {error && (
            <div className="flex justify-center items-center h-64">
              <p className="text-red-500 text-lg">Error: {error}</p>
            </div>
          )}

          {/* Results and Pagination */}
          {!loading && !error && (
            <div>
              <MovieList list={results} title="Search Results" type={type} />
              <div className="flex justify-center items-center mt-6 gap-4">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className={`px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105 ${
                    page === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Previous
                </button>
                <span className="text-lg text-white font-semibold">
                  Page {page}
                </span>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
