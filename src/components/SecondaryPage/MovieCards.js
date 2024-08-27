import React from "react";
import { TMDB_IMG_BASE_URL_500 } from "../../utils/constant";
const MovieCards = ({ movie }) => {
  // console.log(movie);
  const { title, poster_path, vote_average } = movie;

  return (
    <div className="relative w-64 h-80 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex-shrink-0">
      <img
        src={`${TMDB_IMG_BASE_URL_500}${poster_path}`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
        <h3 className="text-white text-lg font-bold truncate">{title}</h3>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-yellow-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C12.09 3.81 13.76 3 15.5 3 18.58 3 21 5.42 21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-white text-sm font-medium ml-1">
            {vote_average ? vote_average.toFixed(1) : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
