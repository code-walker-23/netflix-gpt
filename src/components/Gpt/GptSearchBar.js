import React from "react";
import lang from "../../utils/languageConstants";

const GptSearchBar = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("en");

  return (
    <div className="flex flex-col items-center pt-16 bg-cover bg-center">
      <div className="relative w-full max-w-4xl mx-4">
        <div className="flex items-center mb-4">
          <button
            onClick={() => setSelectedLanguage("en")}
            className={`mx-1 px-3 py-1 rounded-lg text-sm ${selectedLanguage === "en" ? "bg-gray-300" : "bg-white text-black"}`}
          >
            English
          </button>
          <button
            onClick={() => setSelectedLanguage("hindi")}
            className={`mx-1 px-3 py-1 rounded-lg text-sm ${selectedLanguage === "hindi" ? "bg-gray-300" : "bg-white text-black"}`}
          >
            Hindi
          </button>
          <button
            onClick={() => setSelectedLanguage("spanish")}
            className={`mx-1 px-3 py-1 rounded-lg text-sm ${selectedLanguage === "spanish" ? "bg-gray-300" : "bg-white text-black"}`}
          >
            Spanish
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder={lang[selectedLanguage].gptSearchPlaceholder}
            className="w-full py-4 pl-12 pr-16 text-xl rounded-md border-none outline-none shadow-lg bg-white/80 placeholder-gray-700"
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
            <span className="sr-only">{lang[selectedLanguage].search}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;
