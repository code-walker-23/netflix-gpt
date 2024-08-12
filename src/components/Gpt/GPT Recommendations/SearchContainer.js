import React from "react";
import LanguageSelector from "./LanguageSelector";
import SearchBar from "./SearchBar";

const SearchContainer = () => {
  return (
    <div className="relative w-full max-w-4xl p-6 border border-gray-300 rounded-lg bg-white shadow-lg transform transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
        <LanguageSelector />
        <SearchBar />
      </div>
    </div>
  );
};

export default SearchContainer;
