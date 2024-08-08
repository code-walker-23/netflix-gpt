import React from "react";

const SecondaryContainer = () => {
  return (
    <div className="p-8 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
      {/* Add movie carousel or additional content here */}
      <div className="flex space-x-4 overflow-x-scroll">
        {/* Example movie cards */}
        <div className="w-40 h-60 bg-gray-800 rounded-lg"></div>
        <div className="w-40 h-60 bg-gray-800 rounded-lg"></div>
        <div className="w-40 h-60 bg-gray-800 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
