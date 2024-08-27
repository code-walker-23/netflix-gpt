import React, { useRef } from "react";
import MovieCards from "./MovieCards";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./hideScollbar.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptView } from "../../utils/Slices/gpt/gptToggleSlice";

const MovieList = ({ title, list, type }) => {
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const showGpt = useSelector((state) => state.gptToggle.showGptView);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-16 relative">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-4xl font-extrabold text-white text-center bg-gray-800 bg-opacity-75 p-6 rounded-md shadow-md">
          {title}
        </h2>
      </div>

      {/* Scrollable Container */}
      <div className="relative flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 z-10 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-transform transform hover:scale-110 flex items-center justify-center"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>

        {/* Movie List */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide whitespace-nowrap"
          style={{ scrollBehavior: "smooth" }}
        >
          {list &&
            list.map((movie) => {
              const mediaType = movie.media_type || type;
              const url =
                mediaType === "movie"
                  ? `/browse/moviedetail/${movie.id}`
                  : `/browse/tvdetail/${movie.id}`;

              return (
                <Link
                  to={url}
                  key={movie.id}
                  onClick={() => {
                    showGpt && dispatch(toggleGptView());
                  }}
                >
                  <MovieCards movie={movie} />
                </Link>
              );
            })}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 z-10 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-transform transform hover:scale-110 flex items-center justify-center"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
