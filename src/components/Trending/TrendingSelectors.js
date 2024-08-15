import React from "react";
import Select from "react-select";
import LANGUAGE_OPTIONS from "../../utils/LanguageOption";

const TrendingSelectors = ({ type, time, language, onTypeChange, onTimeChange, onLanguageChange }) => {
  const timeOptions = [
    { value: "day", label: "Today" },
    { value: "week", label: "This Week" },
  ];

  const typeOptions = [
    { value: "movie", label: "Movies" },
    { value: "tv", label: "TV Shows" },
    { value: "person", label: "People" },
  ];

  const languageOptions = LANGUAGE_OPTIONS.map(({ code, label }) => ({
    value: code,
    label: label,
  }));

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      background: '#2d2d2d',
      border: '1px solid #444',
      borderRadius: '8px',
      boxShadow: 'none',
      color: 'white',
      '&:hover': {
        border: '1px solid #666',
      },
    }),
    menu: (provided) => ({
      ...provided,
      background: '#2d2d2d',
      borderRadius: '8px',
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? '#444' : '#2d2d2d',
      color: 'white',
      cursor: 'pointer',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#aaa',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
      <Select
        options={typeOptions}
        onChange={onTypeChange}
        value={typeOptions.find(option => option.value === type)}
        className="w-full md:w-1/3"
        placeholder="Select Type"
        styles={selectStyles}
      />
      <Select
        options={timeOptions}
        onChange={onTimeChange}
        value={timeOptions.find(option => option.value === time)}
        className="w-full md:w-1/3"
        placeholder="Select Time"
        styles={selectStyles}
      />
      <Select
        options={languageOptions}
        onChange={onLanguageChange}
        value={languageOptions.find(option => option.value === language)}
        className="w-full md:w-1/3"
        placeholder="Select Language"
        styles={selectStyles}
      />
    </div>
  );
};

export default TrendingSelectors;
