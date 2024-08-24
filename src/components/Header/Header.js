import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { NETFLIX_LOGO } from "../../utils/constant";
import NavItems from "./NavItems";
import Buttons from "./Buttons";
import { toggle } from "./Toggle";
import { useSelector, useDispatch } from "react-redux";
import { toggleGptView } from "../../utils/Slices/gpt/gptToggleSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showGpt = useSelector((store) => store.gptToggle.showGptView);
  const userIconRef = useRef(null);
  const dropdownRef = useRef(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const { toggleDropDown, handleToggle } = toggle({
    setShowDropDown,
    userIconRef,
    dropdownRef,
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black via-transparent to-transparent text-white">
      <div className="container mx-auto p-4 md:p-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/browse" className="flex-shrink-0">
          <img
            className="w-24 md:w-32 mr-6 cursor-pointer"
            src={NETFLIX_LOGO}
            alt="Netflix Logo"
            onClick={() => {
              showGpt && dispatch(toggleGptView());
            }}
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
          <NavItems />
        </div>

        {/* Toggle for mobile menu */}
        <button
          className="md:hidden text-white"
          onClick={handleToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Buttons */}
        <div className="hidden md:flex">
          <Buttons
            handleToggle={handleToggle}
            dropdownRef={dropdownRef}
            showDropDown={showDropDown}
            userIconRef={userIconRef}
            toggleDropDown={toggleDropDown}
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 z-50 w-64 h-full bg-black text-white transition-transform transform ${showDropDown ? "translate-x-0" : "translate-x-full"} md:hidden`}
        ref={dropdownRef}
      >
        <NavItems />
        <Buttons
          handleToggle={handleToggle}
          dropdownRef={dropdownRef}
          showDropDown={showDropDown}
          userIconRef={userIconRef}
          toggleDropDown={toggleDropDown}
        />
      </div>
    </header>
  );
};

export default Header;
