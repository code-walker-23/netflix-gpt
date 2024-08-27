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
  const user = useSelector((store) => store.user);
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
      <div className="container flex items-center justify-between p-4 md:p-6 mx-auto">
        {/* Logo */}
        <Link to="/browse" className="flex-shrink-0">
          <img
            className="w-24 md:w-32 mr-6"
            src={NETFLIX_LOGO}
            alt="Netflix Logo"
            onClick={() => {
              showGpt && dispatch(toggleGptView());
            }}
          />
        </Link>

        {user.uid ? (
          <>
            <NavItems />
            <Buttons
              handleToggle={handleToggle}
              dropdownRef={dropdownRef}
              showDropDown={showDropDown}
              userIconRef={userIconRef}
              toggleDropDown={toggleDropDown}
            />
          </>
        ) : (
          "Guest"
        )}
      </div>
    </header>
  );
};

export default Header;
