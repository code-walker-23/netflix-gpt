import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, list }) => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 shadow-lg">
        {title}
      </h2>

      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {list &&
            list.map((movie) => <MovieCards key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
