import React from "react";
import LANGUAGE_OPTIONS from "../../utils/LanguageOption";

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div className="w-full max-w-xs">
      <select
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-transform transform hover:scale-105"
      >
        {LANGUAGE_OPTIONS.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
