import React, { useState } from "react";
import useFetchMovieTranslations from "../../hooks/useFetchMovieTranslations";
import ShimmerEffect from "../../utils/Shimmer";

const MovieTranslations = ({ movieId }) => {
  const [movieTranslations, setMovieTranslations] = React.useState([]);
  const [showTranslations, setShowTranslations] = useState(true);
  const { loading, error } = useFetchMovieTranslations(
    setMovieTranslations,
    movieId
  );

  const handleToggle = () => {
    setShowTranslations((prevState) => !prevState);
  };

  if (loading) {
    return (
      <div className="py-12 px-5 lg:px-20 bg-gray-900">
        <div className="max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <p className="text-center text-xl font-semibold text-gray-400">
            <ShimmerEffect />
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 px-5 lg:px-20 bg-gray-900">
        <div className="max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <p className="text-center text-xl font-semibold text-red-500">
            Error: {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-5 lg:px-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Movie Translations
          </h1>
          <button
            onClick={handleToggle}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            {showTranslations ? "Hide Translations" : "Show Translations"}
          </button>
        </div>

        {/* Main Content */}
        {showTranslations && (
          <div>
            {movieTranslations.length === 0 ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                <p className="text-center text-lg text-gray-400">
                  No translations available.
                </p>
              </div>
            ) : (
              <ul className="space-y-6">
                {movieTranslations.map((translation, index) => (
                  <li
                    key={index}
                    className="bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-md"
                  >
                    <h2 className="text-xl font-semibold text-gray-100 mb-2">
                      {translation.data.title || translation.name}
                    </h2>
                    <p className="text-sm text-gray-400 mb-2">
                      Language: {translation.english_name}
                    </p>
                    <p className="text-sm text-gray-300 mb-4">
                      Tagline: {translation.data.tagline || "N/A"}
                    </p>
                    <p className="text-sm text-gray-300 mb-2">
                      <strong>Overview:</strong> {translation.data.overview}
                    </p>
                    {translation.data.homepage && (
                      <a
                        href={translation.data.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        Homepage
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieTranslations;
