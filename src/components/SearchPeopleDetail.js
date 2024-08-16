import React, { useState } from "react";
import { useFetchSearchDetail } from "../hooks/useFetchSearchDetailWithPages";
import ShimmerEffect from "../utils/Shimmer";
import LANGUAGE_OPTIONS from "../utils/LanguageOption";
import PeopleList from "./PopularPeople/PeopleList";

// Main Component
const SearchPeopleDetail = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");

  const {
    data: results,
    loading,
    error,
  } = useFetchSearchDetail("person", search, selectedLanguage, page);

  const handlePageChange = (newPage) => {
    if (newPage > 0) setPage(newPage);
  };

  return (
    <div className="max-w-7xl mx-auto bg-gray-900 p-8">
      <h1 className="text-5xl font-extrabold text-white mb-8 text-left">
        Search People
      </h1>

      <div className="flex flex-col md:flex-row items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search for people..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-4 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md w-full md:w-2/3"
        />
        <select
          onChange={(e) => setSelectedLanguage(e.target.value)}
          value={selectedLanguage}
          className="p-4 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md w-full md:w-1/3"
        >
          {LANGUAGE_OPTIONS.map(({ code, label }, index) => (
            <option key={index} value={code}>
              {label}
            </option>
          ))}
        </select>
      </div>

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

      {!loading && !error && (
        <div>
          <PeopleList popularPeopleList={results} />
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className={`px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg ${
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
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPeopleDetail;
