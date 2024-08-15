import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLang } from "../../utils/Slices/gpt/configSlice";
import { SUPPORTED_LANGUAGES } from "../../utils/languageConstants";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.config.selectedLang);

  const handleLanguageChange = (event) => {
    dispatch(setSelectedLang(event.target.value));
  };

  return (
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
        {SUPPORTED_LANGUAGES.map((language,index) => (
          <option value={language.identifier} key={index}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
