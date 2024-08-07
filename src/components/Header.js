import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 fixed top-0 left-0 right-0 z-50 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
            className="h-12 md:h-14"  // Increased height for better visibility
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex flex-grow items-center justify-center space-x-8">
        <Link to="/" className="text-lg hover:underline">Home</Link>
        <Link to="/browse" className="text-lg hover:underline">Browse</Link>
        <Link to="/mylist" className="text-lg hover:underline">My List</Link>
        <Link to="/movies" className="text-lg hover:underline">Movies</Link>
        <Link to="/series" className="text-lg hover:underline">Series</Link>
        <Link to="/new" className="text-lg hover:underline">New Releases</Link>
      </nav>

      {/* User Icon */}
      <div className="flex items-center">
        <img
          src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
          alt="User Icon"
          className="w-12 h-12 rounded-full border-2 border-gray-400 shadow-lg"  // Slightly larger user icon
        />
      </div>
    </header>
  );
};

export default Header;
