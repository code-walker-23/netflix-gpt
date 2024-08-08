// components/Header.js
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import useAuthStateChange from "../hooks/useAuthStateChange";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  // Use the custom hook to listen for authentication state changes
  useAuthStateChange();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("User signed out successfully!", {
          position: "top-center",
        });
        navigate("/"); // Redirect to home page after signing out
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`, { position: "bottom-center" });
      });
  };

  return (
    <header className="bg-black text-white p-4 fixed top-0 left-0 right-0 z-50 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
            className="h-12 md:h-14"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex flex-grow items-center justify-center space-x-8">
        <Link to="/browse" className="text-lg hover:underline">Home</Link>
        <Link to="/browse" className="text-lg hover:underline">Browse</Link>
        <Link to="/mylist" className="text-lg hover:underline">My List</Link>
        <Link to="/movies" className="text-lg hover:underline">Movies</Link>
        <Link to="/series" className="text-lg hover:underline">Series</Link>
        <Link to="/new" className="text-lg hover:underline">New Releases</Link>
      </nav>

      {/* User Icon */}
      <div className="flex items-center">
        {user ? (
          <>
            <p className="mx-2">{user.displayName || user.email}</p>
            <button className="mx-2" onClick={handleSignOut}>
              Sign Out
            </button>
            <img
              src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
              alt="User Icon"
              className="w-12 h-12 border-2 border-gray-400 shadow-lg"
            />
          </>
        ) : (
          <p className="mx-2">Guest</p>
        )}
      </div>
    </header>
  );
};

export default Header;
