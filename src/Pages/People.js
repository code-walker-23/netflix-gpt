import React, { useState } from "react";
import useFetchPopularPeopleList from "../hooks/useFetchPopularPeopleList";
import PeopleList from "../components/PopularPeople/PeopleList";
import SearchPeopleDetail from "../components/SearchPeopleDetail";
import ShimmerEffect from "../utils/Shimmer";

const PopularPeopleList = () => {
  const [popularPeopleList, setPopularPeopleList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [showSearch, setShowSearch] = useState(false);

  const { loading, error } = useFetchPopularPeopleList(
    setPopularPeopleList,
    pageNumber
  );

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
    <div className="bg-gray-900 min-h-screen py-8 px-6 flex flex-col items-center">
      {/* Button to Toggle Search and People */}
      <div className="w-full max-w-4xl mb-4 mt-16">
        <button
          onClick={toggleSearchSection}
          className="w-full px-6 py-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-transform transform hover:scale-105"
        >
          {showSearch ? "Show Popular People" : "Search People"}
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto">
        {showSearch ? (
          <div className="bg-gray-800  rounded-lg shadow-lg">
            <SearchPeopleDetail />
          </div>
        ) : (
          <div className="bg-gray-800  rounded-lg shadow-lg">
            {/* Loading and Error States */}
            {loading && <ShimmerEffect />}
            {error && (
              <div className="flex justify-center items-center h-64">
                <p className="text-red-400 text-lg font-semibold">
                  Error: {error}
                </p>
              </div>
            )}

            {/* People List */}
            {!loading && !error && (
              <div>
                <PeopleList popularPeopleList={popularPeopleList} />
                {/* Pagination Controls */}
                <div className="flex justify-center items-center mt-8 gap-6">
                  <button
                    onClick={handlePreviousPage}
                    disabled={pageNumber === 1}
                    className={`px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105 ${
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
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularPeopleList;
