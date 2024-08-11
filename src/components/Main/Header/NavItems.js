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
        to="/tv-shows"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
      >
        TV Shows
      </Link>
      <Link
        to="/movies"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
      >
        Movies
      </Link>
      <Link
        to="/new"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
      >
        New & Popular
      </Link>
      <Link
        to="/my-list"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
      >
        My List
      </Link>
      <Link
        to="/series"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
      >
        Series
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
