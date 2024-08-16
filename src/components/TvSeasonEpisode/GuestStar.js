import React from "react";
import { TMDB_IMG_BASE_URL_500 } from "../../utils/constant";

const GuestStar = ({ guest_stars }) => {
  return (
    <section className="mb-12">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mb-8">
        Guest Stars
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {guest_stars.length > 0 ? (
          guest_stars.map((guest) => (
            <div
              key={guest.id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 border border-gray-700 flex items-start"
            >
              <div className="flex-shrink-0">
                {guest.profile_path ? (
                  <img
                    src={`${TMDB_IMG_BASE_URL_500}${guest.profile_path}`}
                    alt={guest.name}
                    className="w-20 h-20 object-cover rounded-full border-4 border-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-700 rounded-full border-4 border-gray-600"></div>
                )}
              </div>
              <div className="ml-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2 text-gradient">
                  {guest.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  <strong className="text-gray-300">Character:</strong> {guest.character}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No guest star information available.</p>
        )}
      </div>
    </section>
  );
};

export default GuestStar;
