import React from "react";
import { useParams } from "react-router-dom";
import useFetchSeasonEpisodeDetail from "../../hooks/useFetchSeasonEpisodeDetail";
import "tailwindcss/tailwind.css";

const TvSeasonEpisodeDetail = () => {
  const { seriesId, seasonNumber, episodeNumber } = useParams();
  const [episodeDetail, setEpisodeDetail] = React.useState({});
  const { loading, error } = useFetchSeasonEpisodeDetail(
    seriesId,
    seasonNumber,
    episodeNumber,
    setEpisodeDetail
  );

  const {
    name,
    air_date,
    overview,
    runtime,
    vote_average,
    vote_count,
    still_path,
    crew = [],
    guest_stars = [],
  } = episodeDetail;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-800 py-6 px-4 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mt-16">
          Episode Details
        </h1>
      </header>

      {/* Main Content */}
      <main className="p-6 lg:p-12 mt-6">
        {loading && (
          <div className="text-center text-gray-400">
            <p>Loading...</p>
          </div>
        )}
        {error && (
          <div className="text-center text-red-500">
            <p>Error loading episode details. Please try again later.</p>
          </div>
        )}
        {!loading && !error && episodeDetail && (
          <div>
            {/* Episode Card */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700 transition-transform transform hover:scale-105">
              <div className="flex flex-col lg:flex-row">
                <img
                  src={`https://image.tmdb.org/t/p/w500${still_path}`}
                  alt={name}
                  className="w-full lg:w-1/3 h-64 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 border border-gray-600"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{name}</h2>
                  <p className="text-gray-400 mb-2">
                    <strong>Air Date:</strong> {air_date}
                  </p>
                  <p className="text-gray-400 mb-2">
                    <strong>Runtime:</strong> {runtime} minutes
                  </p>
                  <p className="text-gray-400 mb-2">
                    <strong>Rating:</strong> {vote_average} / 10
                  </p>
                  <p className="text-gray-300 mb-4">
                    {overview || "No overview available."}
                  </p>
                </div>
              </div>
            </div>

            {/* Crew Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Crew</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {crew.length > 0 ? (
                  crew.map((member) => (
                    <div
                      key={member.id}
                      className="bg-gray-800 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 border border-gray-700"
                    >
                      <div className="flex items-center">
                        {member.profile_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                            alt={member.name}
                            className="w-16 h-16 object-cover rounded-full mr-4 border border-gray-600"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-700 rounded-full mr-4"></div>
                        )}
                        <div>
                          <h3 className="text-xl font-semibold mb-1">
                            {member.name}
                          </h3>
                          <p className="text-gray-400">{member.job}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No crew information available.</p>
                )}
              </div>
            </section>

            {/* Guest Stars Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Guest Stars</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {guest_stars.length > 0 ? (
                  guest_stars.map((guest) => (
                    <div
                      key={guest.id}
                      className="bg-gray-800 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 border border-gray-700"
                    >
                      <div className="flex items-center">
                        {guest.profile_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w500${guest.profile_path}`}
                            alt={guest.name}
                            className="w-16 h-16 object-cover rounded-full mr-4 border border-gray-600"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-700 rounded-full mr-4"></div>
                        )}
                        <div>
                          <h3 className="text-xl font-semibold mb-1">
                            {guest.name}
                          </h3>
                          <p className="text-gray-400">
                            <strong>Character:</strong> {guest.character}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No guest star information available.</p>
                )}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
};

export default TvSeasonEpisodeDetail;
