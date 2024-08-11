import React from "react";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
const MainButton = () => {
  return (
    <div className="mt-8 flex space-x-6">
      <button className="flex items-center bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
        <img src={play_icon} alt="Play Icon" className="w-6 h-6 mr-3" />
        <span className="text-lg font-semibold">Play</span>
      </button>

      <button className="flex items-center bg-gradient-to-r from-gray-800 to-gray-600 text-white px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
        <img src={info_icon} alt="Info Icon" className="w-6 h-6 mr-3" />
        <span className="text-lg font-semibold">More Info</span>
      </button>
    </div>
  );
};
export default MainButton;
