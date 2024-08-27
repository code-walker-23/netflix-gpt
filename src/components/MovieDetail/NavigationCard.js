import React from "react";

const NavigationCard = ({ onScroll, items }) => {
  return (
    <div className="bg-gray-900 p-6 border border-gray-700 rounded-lg shadow-lg mb-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-4">Explore Sections</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => onScroll(item.ref)}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationCard;
