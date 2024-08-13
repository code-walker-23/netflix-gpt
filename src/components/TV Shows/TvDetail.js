import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetchTvDetail } from "../../hooks/useFetchTvDetail";
import "tailwindcss/tailwind.css";
import ShimmerEffect from "../../utils/Shimmer";

const TvDetail = () => {
  const { tvId } = useParams();
  const [tvDetail, setTvDetail] = React.useState({});
  const { loading, error } = useFetchTvDetail(tvId, setTvDetail);
  console.log(tvDetail);

  if (loading)
    return (
      <div className="text-center text-white mt-20">
        <ShimmerEffect />
      </div>
    );
  if (error || !tvDetail.name)
    return (
      <div className="text-center text-red-500 mt-20">
        Error loading details
      </div>
    );

  const {
    backdrop_path,
    poster_path,
    name,
    overview,
    first_air_date,
    last_air_date,
    vote_average,
    number_of_seasons,
    number_of_episodes,
    homepage,
    seasons = [],
    production_companies = [],
    production_countries = [],
    spoken_languages = [],
  } = tvDetail;

  console.log(seasons);

  return (
    <div className="relative bg-gray-900 min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={name}
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-5 lg:left-20 transform -translate-y-1/2 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={name}
            className="w-48 lg:w-64 rounded-lg shadow-lg border-4 border-gray-700"
          />
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-3">{name}</h1>
            <p className="text-lg mb-4">
              {overview || "No overview available."}
            </p>
            <div className="text-gray-300 mb-4 space-y-2">
              <p>
                <strong>First Air Date:</strong> {first_air_date || "N/A"}
              </p>
              <p>
                <strong>Last Air Date:</strong> {last_air_date || "N/A"}
              </p>
              <p>
                <strong>Seasons:</strong> {number_of_seasons || "N/A"}
              </p>
              <p>
                <strong>Episodes:</strong> {number_of_episodes || "N/A"}
              </p>
              <p>
                <strong>Rating:</strong>{" "}
                {vote_average !== undefined ? vote_average : "N/A"}
              </p>
            </div>
            {homepage && (
              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Visit Homepage
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Production Details */}
      <div className="py-10 px-5 lg:px-20 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold mb-6">Production Details</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Production Companies</h3>
          <div className="flex flex-wrap gap-4">
            {production_companies.length > 0 ? (
              production_companies.map((company) => (
                <div key={company.id} className="flex items-center space-x-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                    alt={company.name}
                    className="w-24 h-10 object-contain"
                  />
                  <p>{company.name}</p>
                </div>
              ))
            ) : (
              <p>No production companies available.</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Production Countries</h3>
          <p>
            {production_countries.length > 0
              ? production_countries.map((country) => country.name).join(", ")
              : "N/A"}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Languages</h3>
          <p>
            {spoken_languages.length > 0
              ? spoken_languages.map((lang) => lang.english_name).join(", ")
              : "N/A"}
          </p>
        </div>
      </div>

      {/* Seasons Section */}
      <div className="py-10 px-5 lg:px-20 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold mb-6">Seasons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seasons.length > 0 ? (
            seasons.map((season) => (
              <Link
                to={`/browse/tvdetail/${tvId}/season/${season.season_number}`}
                key={season.id}
                className="bg-gray-700 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                  alt={`Season ${season.season_number}`}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Season {season.season_number}
                </h3>
                <p className="text-gray-300">
                  Episodes: {season.episode_count}
                </p>
                <p className="text-gray-300">
                  Rating: {season.vote_average || "N/A"}
                </p>
              </Link>
            ))
          ) : (
            <p>No seasons available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TvDetail;
