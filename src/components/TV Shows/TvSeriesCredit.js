import React from "react";
import { useFetchTvSeriesCredit } from "../../hooks/useFetchTvSeriesCredit";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

const TvSeriesCredit = ({ tvId }) => {
  const [tvSeriesCredit, setTvSeriesCredit] = React.useState([]);
  const { loading, error } = useFetchTvSeriesCredit(tvId, setTvSeriesCredit);
  console.log(tvSeriesCredit);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-400 text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-xl">
          Error loading cast information. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-800 py-8 px-6 lg:px-12 shadow-lg">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-center">
          Cast Details
        </h1>
      </header>

      {/* Main Content */}
      <main className="p-6 lg:p-12 mt-8">
        {tvSeriesCredit.length === 0 ? (
          <div className="flex justify-center items-center min-h-screen">
            <p className="text-gray-400 text-xl">
              No cast information available.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tvSeriesCredit.map((member) => (
              <Link
                to={`/actordetail/${member.name}/${member.id}/${member.roles[0]?.credit_id}/true`}
              >
                <div
                  key={member.id}
                  className="bg-gray-800 rounded-lg shadow-xl p-4 transition-transform transform hover:scale-105 border border-gray-700"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full mb-4 border border-gray-600"
                    />
                    <h2 className="text-xl font-semibold mb-1 text-center">
                      {member.name}
                    </h2>
                    <p className="text-gray-400 text-center">
                      <strong>Character:</strong>{" "}
                      {member.roles[0]?.character || "Unknown"}
                    </p>
                    <p className="text-gray-400 text-center">
                      <strong>Episodes:</strong>{" "}
                      {member.total_episode_count || "N/A"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default TvSeriesCredit;
