import React from "react";
import lang from "../../utils/languageConstants";

const GptSearchBar = () => {
  const {en,hindi,spanish} = lang;
  return (
    <div className="flex justify-center pt-16 bg-cover bg-center">
      <div className="relative w-[50%] max-w-4xl mx-4">
        <input
          type="text"
          placeholder="Search for movies, TV shows, genres, and more"
          className="w-full py-4 pl-12 pr-24 text-xl rounded-md border-none outline-none shadow-lg bg-white/80 placeholder-gray-700"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 bottom-0 px-6 flex items-center bg-red-600 text-white rounded-r-md hover:bg-red-700 transition duration-300"
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
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
