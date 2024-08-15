import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 py-8 px-6 lg:px-12 rounded-b-lg shadow-md">
      <div className="text-center">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mt-14">
          Episode Details
        </h1>
        <p className="text-gray-300 mt-2 text-sm lg:text-base">
          Discover all the information and insights about this episode.
        </p>
      </div>
    </header>
  );
};

export default Header;
