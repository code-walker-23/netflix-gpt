import React from "react";

const ButtonCard = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="w-full px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105"
  >
    {label}
  </button>
);

const Buttons = ({
  seasonsRef,
  recommendationRef,
  similarRef,
  creditsRef,
  scrollToSection,
}) => {
  return (
    <div className="py-12 px-5 lg:px-20 bg-gray-900">
      <div className="max-w-8xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-white">Explore Sections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ButtonCard
              onClick={() => scrollToSection(seasonsRef)}
              label="Seasons"
            />
            <ButtonCard
              onClick={() => scrollToSection(recommendationRef)}
              label="Recommendations"
            />
            <ButtonCard
              onClick={() => scrollToSection(similarRef)}
              label="Similar Shows"
            />
            <ButtonCard
              onClick={() => scrollToSection(creditsRef)}
              label="Cast & Crew"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
