import React from "react";
import useFetchMovieTranslations from "../../hooks/useFetchMovieTranslations";

const MovieTranslations = ({ movieId }) => {
  const [movieTranslations, setMovieTranslations] = React.useState([]);
  const { loading, error } = useFetchMovieTranslations(
    setMovieTranslations,
    movieId
  );

  if (loading) {
    return (
      <div className="text-center text-xl font-semibold text-gray-400">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-xl font-semibold text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Movie Translations</h1>
      {movieTranslations.length === 0 ? (
        <div className="text-center text-lg text-gray-400">
          No translations available.
        </div>
      ) : (
        <ul className="space-y-6">
          {movieTranslations.map((translation) => (
            <li
              key={translation.iso_639_1}
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
  );
};

export default MovieTranslations;
