import React, { useState } from "react";
import useFetchPopularPeopleList from "../hooks/useFetchPopularPeopleList";
import PeopleList from "../components/PopularPeople/PeopleList";
import SearchPeopleDetail from "../components/SearchPeopleDetail";

const PopularPeopleList = () => {
  const [popularPeopleList, setPopularPeopleList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error } = useFetchPopularPeopleList(
    setPopularPeopleList,
    pageNumber
  );

  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchSection = () => {
    setShowSearch(!showSearch);
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 mt-20">
          <h1 className="text-5xl font-bold text-white mb-4 md:mb-0">
            {!showSearch ? "Popular People" : "Search People"}
          </h1>
          <button
            onClick={toggleSearchSection}
            className="px-6 py-3 bg-red-600 border border-red-700 rounded-lg text-white hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            {showSearch ? "Hide Search" : "Show People Search"}
          </button>
        </div>

        {!showSearch && (
          <>
            {/* Pagination Controls */}
            <div className="flex justify-center items-center mb-8 gap-4">
              <button
                onClick={handlePreviousPage}
                disabled={pageNumber === 1}
                className={`px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg ${
                  pageNumber === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Previous
              </button>
              <span className="text-lg text-white font-semibold">
                Page {pageNumber}
              </span>
              <button
                onClick={handleNextPage}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg"
              >
                Next
              </button>
            </div>

            {/* Loading and Error States */}
            {loading && (
              <div className="flex justify-center items-center h-64">
                <p className="text-center text-lg">Loading...</p>
              </div>
            )}

            {error && (
              <div className="flex justify-center items-center h-64">
                <p className="text-center text-red-500 text-lg">
                  Error loading data
                </p>
              </div>
            )}

            {/* Popular People List */}
            {!loading && !error && (
              <div className="mt-8">
                <PeopleList popularPeopleList={popularPeopleList} />
              </div>
            )}
          </>
        )}

        {showSearch && (
          <div className="bg-gray-800 py-12 border-t border-gray-700">
            <div className="container mx-auto px-6">
              <SearchPeopleDetail />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularPeopleList;
