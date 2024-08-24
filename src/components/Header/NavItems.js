import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleGptView } from "../../utils/Slices/gpt/gptToggleSlice";

const NavItems = () => {
  const dispatch = useDispatch();
  const showGpt = useSelector((state) => state.gptToggle.showGptView);

  const handlerGptView = () => {
    if (showGpt) {
      dispatch(toggleGptView());
    }
  };

  return (
    <nav className="hidden md:flex flex-grow items-center space-x-8">
      <Link
        to="/browse"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
        onClick={handlerGptView}
      >
        Home
      </Link>
      <Link
        to="/discovertvshows"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
        onClick={handlerGptView}
      >
        TV Shows
      </Link>
      <Link
        to="/discovermovies"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
        onClick={handlerGptView}
      >
        Movies
      </Link>
      <Link
        to="/trending"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
        onClick={handlerGptView}
      >
        New & Popular
      </Link>
      <Link
        to="/movietvlist"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
        onClick={handlerGptView}
      >
        Genres
      </Link>
      <Link
        to="/list"
        className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
        onClick={handlerGptView}
      >
        Popular People
      </Link>
    </nav>
  );
};

export default NavItems;
