import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TMDB_IMG_BASE_URL_300 } from "../../utils/constant";

const CastList = ({ cast }) => {
  const [showCast, setShowCast] = useState(true);

  const handleToggle = () => {
    setShowCast(prevState => !prevState);
  };

  return (
    <div className="py-12 px-5 lg:px-20 bg-gray-900">
      <div className="max-w-6xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">Cast</h2>
          <button
            onClick={handleToggle}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:opacity-80 transition-opacity duration-300 focus:outline-none"
          >
            {showCast ? "Hide Cast" : "Show Cast"}
          </button>
        </div>

        {/* Main Content */}
        {showCast && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
            {cast.map((actor) => (
              <Link
                key={actor.id}
                to={`/actordetail/${actor.name}/${actor.id}/${actor.credit_id}/true`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-700">
                  <img
                    src={`${TMDB_IMG_BASE_URL_300}${actor.profile_path}`}
                    alt={actor.name}
                    className="w-full h-80 object-cover transition-transform transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute bottom-0 w-full p-4 text-center text-white bg-gray-800 bg-opacity-70">
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
