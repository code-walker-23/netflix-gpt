import React from "react";
import lang from "../../utils/languageConstants";
import { SUPPORTED_LANGUAGES } from "../../utils/languageConstants";
import { useDispatch } from "react-redux";
import { setSelectedLang } from "../../utils/Slices/configSlice";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((state) => state.config.selectedLang);
  const dispatch = useDispatch();

  const handleLanguageChange = (event) => {
    dispatch(setSelectedLang(event.target.value));
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-16">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Find Your Next Movie</h1>
        <p className="text-lg text-gray-300">Discover great content with our search tool.</p>
      </header>

      {/* Search Container */}
      <div className="relative w-full max-w-3xl p-4 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-70">
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <label htmlFor="language-select" className="text-lg font-semibold text-gray-300">
              Language
            </label>
            <select
              id="language-select"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-100 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-in-out hover:scale-105"
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option value={language.identifier} key={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>

          {/* Search Bar */}
          <div className="relative flex-grow flex items-center">
            <input
              type="text"
              placeholder={lang[selectedLanguage].gptSearchPlaceholder}
              className="w-full py-3 pl-12 pr-16 text-sm rounded-lg border border-gray-600 bg-gray-900 text-gray-100 placeholder-gray-400 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 focus:scale-110 focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-4 flex items-center bg-red-600 text-white rounded-r-lg hover:bg-red-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
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
              <span className="ml-2 hidden lg:inline">{lang[selectedLanguage].search}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;
