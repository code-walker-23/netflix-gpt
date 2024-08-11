import React from "react";
import lang from "../../utils/languageConstants";
import { SUPPORTED_LANGUAGES } from "../../utils/languageConstants";
import { useDispatch } from "react-redux";
import { setSelectedLang } from "../../utils/Slices/configSlice";
import { useSelector } from "react-redux";
import client from "../../utils/openai";

const GptSearchBar = () => {
  const [searchText, setSearchText] = React.useState("");
  const selectedLanguage = useSelector((state) => state.config.selectedLang);
  const dispatch = useDispatch();

  const handleLanguageChange = (event) => {
    dispatch(setSelectedLang(event.target.value));
  };

  const handleGptSearch = async () => {
    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: searchText }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-16 ">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
          Find Your Next Movie
        </h1>
        <p className="text-lg text-gray-200">
          Discover great content with our powerful search tool.
        </p>
      </header>

      {/* Search Container */}
      <div className="relative w-full max-w-4xl p-6 border border-gray-700 rounded-lg bg-white shadow-lg">
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <label
              htmlFor="language-select"
              className="text-lg font-semibold text-gray-700"
            >
              Language
            </label>
            <select
              id="language-select"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-black placeholder-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option value={language.identifier} key={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>

          {/* Search Bar */}
          <form
            className="relative flex-grow flex items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder={lang[selectedLanguage].gptSearchPlaceholder}
              className="w-full py-3 pl-6 pr-16 text-sm rounded-lg border border-gray-300 bg-gray-50 text-black placeholder-gray-700 shadow-sm transition-transform duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
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
                {lang[selectedLanguage].search}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;
