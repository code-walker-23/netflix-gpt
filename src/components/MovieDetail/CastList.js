import React from "react";
import { Link } from "react-router-dom";

const CastList = ({ cast }) => {
  return (
    <div className="p-6 md:p-12 bg-gray-800 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-white mb-6">Cast</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cast.map((actor) => (
          <Link
            key={actor.id}
            to={`actordetail/${actor.name}/${actor.id}/${actor.credit_id}`}
          >
            <div className="text-center hover:scale-105 transform transition-transform duration-300">
              <img
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={actor.name}
                className="w-full h-80 object-cover rounded-lg mb-4 border-2 border-gray-700"
              />
              <h3 className="text-xl font-semibold text-white">{actor.name}</h3>
              <p className="text-sm text-gray-300 mt-1">{actor.character}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CastList;
