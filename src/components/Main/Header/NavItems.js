import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <nav className="hidden md:flex flex-grow items-center space-x-8">
      <Link
        to="/browse"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
      >
        Home
      </Link>
      <Link
        to="/discovertvshows"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
      >
        TV Shows
      </Link>
      <Link
        to="/discovermovies"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
      >
        Movies
      </Link>
      <Link
        to="/trending"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
      >
        New & Popular
      </Link>
      <Link
        to="/movietvlist"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
      >
        Genres
      </Link>
      <Link
        to="/list"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
      >
        List
      </Link>
      <Link
        to="/languages"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
      >
        Browse by Languages
      </Link>
    </nav>
  );
};

export default NavItems;
