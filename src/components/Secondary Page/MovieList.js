import React, { useRef } from "react";
import MovieCards from "./MovieCards";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Using FontAwesome icons
import { Link } from "react-router-dom";
import "./hideScollbar.css";

const MovieList = ({ title, list }) => {
  const scrollRef = useRef(null);

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
    <div className="mb-12 relative">
      <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 shadow-lg">
        {title}
      </h2>

      <div className="relative flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 z-10 p-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full shadow-xl hover:shadow-2xl focus:outline-none transition-transform transform hover:scale-110 flex items-center justify-center"
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
            list.map((movie) => (
              <Link to={`/browse/moviedetail/${movie.id}`} key={movie.id} target="_blank">
                <MovieCards movie={movie} />
              </Link>
            ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 z-10 p-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full shadow-xl hover:shadow-2xl focus:outline-none transition-transform transform hover:scale-110 flex items-center justify-center"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
