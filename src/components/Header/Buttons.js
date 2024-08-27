import React from "react";
import { Link } from "react-router-dom";
import { toggleGptView } from "../../utils/Slices/gpt/gptToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import { USER_ICON } from "../../utils/constant";
import { handleSignOut } from "./handleSignOut";
const Buttons = ({
  handleToggle,
  dropdownRef,
  showDropDown,
  userIconRef,
  toggleDropDown,
}) => {
  const dispatch = useDispatch();
  const showGpt = useSelector((state) => state.gptToggle.showGptView);
  return (
    <div className="relative flex items-center">
      <button
        className="px-4 py-2 mx-2 rounded-lg bg-blue-800 text-white focus:outline-none hover:bg-blue-700 transition duration-300 z-10 relative"
        onClick={handleToggle}
      >
        {showGpt ? "Go Back" : "GPT Search"}
      </button>
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
          className="absolute top-12 right-0 w-48 bg-black border border-gray-600 rounded-lg shadow-lg z-50"
        >
          <Link
            to="/profile"
            className="block py-2 px-4 text-white hover:bg-gray-800"
            onClick={() => {
              showGpt && dispatch(toggleGptView());
            }}
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
    </div>
  );
};

export default Buttons;
