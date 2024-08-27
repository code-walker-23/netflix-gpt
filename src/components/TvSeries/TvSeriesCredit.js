import React, { useState } from "react";
import { useFetchTvSeriesCredit } from "../../hooks/useFetchTvSeriesCredit";
import { Link } from "react-router-dom";
import { TMDB_IMG_BASE_URL_500 } from "../../utils/constant";

const TvSeriesCredit = ({ tvId }) => {
  const [tvSeriesCredit, setTvSeriesCredit] = React.useState([]);
  const { loading, error } = useFetchTvSeriesCredit(tvId, setTvSeriesCredit);
  const [showCast, setShowCast] = useState(true);

  const handleToggle = () => {
    setShowCast(prevState => !prevState);
  };

  if (loading) {
    return (
      <div className="py-12 px-5 lg:px-20 bg-gray-900">
        <div className="max-w-6xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 px-5 lg:px-20 bg-gray-900">
        <div className="max-w-6xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-red-500 mb-6">
            Error loading cast information. Please try again later.
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-5 lg:px-20 bg-gray-900">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 mb-8">
          <h1 className="text-3xl font-bold text-white">Cast Details</h1>
          <button
            onClick={handleToggle}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
          >
            {showCast ? 'Hide Cast Details' : 'Show Cast Details'}
          </button>
        </div>

        {/* Main Content */}
        {showCast && (
          <div>
            {tvSeriesCredit.length === 0 ? (
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
                <p className="text-gray-400 text-xl text-center">
                  No cast information available.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tvSeriesCredit.map((member) => (
                  <Link
                    key={member.id}
                    to={`/actordetail/${member.name}/${member.id}/${member.roles[0]?.credit_id}/true`}
                  >
                    <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 border border-gray-700">
                      <div className="flex flex-col items-center">
                        <img
                          src={`${TMDB_IMG_BASE_URL_500}${member.profile_path}`}
                          alt={member.name}
                          className="w-32 h-32 object-cover rounded-full mb-4 border border-gray-600"
                        />
                        <h2 className="text-xl font-semibold mb-1 text-center text-white">
                          {member.name}
                        </h2>
                        <p className="text-gray-300 text-center">
                          <strong>Character:</strong>{" "}
                          {member.roles[0]?.character || "Unknown"}
                        </p>
                        <p className="text-gray-300 text-center">
                          <strong>Episodes:</strong>{" "}
                          {member.total_episode_count || "N/A"}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TvSeriesCredit;
