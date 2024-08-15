import React, { useState } from "react";
import { Link } from "react-router-dom";

const CastList = ({ cast }) => {
  const [showCast, setShowCast] = useState(true);

  const handleToggle = () => {
    setShowCast(prevState => !prevState);
  };

  return (
    <div className="py-12 px-5 lg:px-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Cast</h1>
          <button
            onClick={handleToggle}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            {showCast ? 'Hide Cast' : 'Show Cast'}
          </button>
        </div>

        {/* Main Content */}
        {showCast && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
            {cast.map((actor) => (
              <Link
                key={actor.id}
                to={`/actordetail/${actor.name}/${actor.id}/${actor.credit_id}/true`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                    alt={actor.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute bottom-0 p-4 text-center text-white">
                    <h3 className="text-lg font-semibold">{actor.name}</h3>
                    <p className="text-sm mt-1">{actor.character}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CastList;
