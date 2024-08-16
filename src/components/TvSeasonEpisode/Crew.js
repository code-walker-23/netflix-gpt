import React from "react";
import { TMDB_IMG_BASE_URL_500 } from "../../utils/constant";

const Crew = ({ crew }) => {
  return (
    <section className="mb-12">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mb-8">
        Crew
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {crew.length > 0 ? (
          crew.map((member) => (
            <div
              key={member.id}
              className="bg-gray-800 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 border border-gray-700 flex items-start"
            >
              <div className="flex-shrink-0">
                {member.profile_path ? (
                  <img
                    src={`${TMDB_IMG_BASE_URL_500}${member.profile_path}`}
                    alt={member.name}
                    className="w-20 h-20 object-cover rounded-full border-4 border-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-700 rounded-full border-4 border-gray-600"></div>
                )}
              </div>
              <div className="ml-4 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-1 text-gradient">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm">{member.job}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No crew information available.</p>
        )}
      </div>
    </section>
  );
};

export default Crew;
