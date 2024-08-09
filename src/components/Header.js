import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { USER_ICON, NETFLIX_LOGO } from "../utils/constant";

const Header = () => {
  const user = useSelector((state) => state.user);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("User signed out successfully!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: "bottom-center" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black via-transparent to-transparent text-white">
      <div className="container flex items-center justify-between p-4 md:p-6 mx-auto">
        {/* Logo */}
        <Link to="/browse" className="flex-shrink-0">
          <img
            className="w-24 md:w-32 mr-6" /* Adjusted logo size */
            src={NETFLIX_LOGO}
            alt="Netflix Logo"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex flex-grow items-center space-x-8">
          <Link to="/browse" className="text-xs md:text-sm font-semibold hover:text-red-600 transition-colors duration-300">Home</Link>
          <Link to="/tv-shows" className="text-xs md:text-sm font-semibold hover:text-red-600 transition-colors duration-300">TV Shows</Link>
          <Link to="/movies" className="text-xs md:text-sm font-semibold hover:text-red-600 transition-colors duration-300">Movies</Link>
          <Link to="/new" className="text-xs md:text-sm font-semibold hover:text-red-600 transition-colors duration-300">New & Popular</Link>
          <Link to="/my-list" className="text-xs md:text-sm font-semibold hover:text-red-600 transition-colors duration-300">My List</Link>
          <Link to="/series" className="text-xs md:text-sm font-semibold hover:text-red-600 transition-colors duration-300">Series</Link>
          <Link to="/languages" className="text-xs md:text-sm font-semibold hover:text-red-600 transition-colors duration-300">Browse by Languages</Link>
        </nav>

        {/* User Icon and Sign Out Button */}
        <div className="flex items-center space-x-4"> {/* Increased spacing */}
          {user ? (
            <>
              <p className="hidden md:block text-xs md:text-sm font-semibold">{user.displayName}</p>
              <button onClick={handleSignOut} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 text-xs md:text-sm font-semibold">Sign Out</button> {/* Adjusted padding */}
              <img src={USER_ICON} alt="User Icon" className="w-10 h-10 border-2 border-white" /> {/* Adjusted size */}
            </>
          ) : (
            <p className="hidden md:block text-xs md:text-sm font-semibold">Guest</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
