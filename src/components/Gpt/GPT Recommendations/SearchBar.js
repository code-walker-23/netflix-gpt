// components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchText, setSearchText, handleGptSearch }) => {
  return (
    <form
      className="relative flex-grow flex items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Search for movies..."
        className="w-full py-3 pl-6 pr-16 text-sm rounded-lg border border-gray-300 bg-gray-50 text-black placeholder-gray-700 shadow-sm transition-transform duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 bottom-0 px-4 flex items-center bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={handleGptSearch}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
          />
        </svg>
        <span className="ml-2 hidden lg:inline">
          Search
        </span>
      </button>
    </form>
  );
};

export default SearchBar;
