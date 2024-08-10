import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { USER_ICON, NETFLIX_LOGO } from "../../utils/constant";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const user = useSelector((state) => state.user);

  // Create refs
  const userIconRef = useRef(null);
  const dropdownRef = useRef(null);

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

  // Toggle dropdown visibility
  const toggleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  // Function to handle click outside
  const handleClickOutside = (event) => {
    if (
      userIconRef.current &&
      !userIconRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black via-transparent to-transparent text-white">
      <div className="container flex items-center justify-between p-4 md:p-6 mx-auto">
        {/* Logo */}
        <Link to="/browse" className="flex-shrink-0">
          <img
            className="w-24 md:w-32 mr-6"
            src={NETFLIX_LOGO}
            alt="Netflix Logo"
          />
        </Link>

        {/* Navigation Links */}
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

        <div className="relative flex items-center">
          {user ? (
            <>
              <img
                ref={userIconRef}
                src={USER_ICON}
                alt="User Icon"
                className="w-10 h-10 border-2 rounded-lg cursor-pointer"
                onClick={toggleDropDown} // Toggle dropdown on click
              />
              {showDropDown && (
                <div
                  ref={dropdownRef}
                  className="absolute top-12 right-0 w-48 bg-black border border-gray-600 rounded-lg shadow-lg"
                >
                  <Link
                    to="/profile"
                    className="block py-2 px-4 text-white hover:bg-gray-800"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left py-2 px-4 text-white hover:bg-gray-800"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="hidden md:block text-xs md:text-sm font-semibold">
              Guest
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;








