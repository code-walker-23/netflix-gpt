import React, { useState } from "react";
import useFetchMovieReviews from "../../hooks/useFetchMovieReviews";
import ShimmerEffect from "../../utils/Shimmer";
import { TMDB_IMG_BASE_URL_500 } from "../../utils/constant";

const MovieReviews = ({ movieId }) => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(true);
  const { loading, error } = useFetchMovieReviews(setMovieReviews, movieId);

  const handleToggle = () => {
    setShowReviews((prevState) => !prevState);
  };

  if (loading) {
    return <ShimmerEffect />;
  }

  if (error) {
    return (
      <div className="py-12 px-5 lg:px-20 bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <p className="text-center text-xl font-semibold text-red-500">
            Error: {error.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-5 lg:px-20 bg-gray-900">
      <div className="max-w-6xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-white">Movie Reviews</h2>
          <button
            onClick={handleToggle}
            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg hover:opacity-80 transition-opacity duration-300 focus:outline-none"
          >
            {showReviews ? "Hide Reviews" : "Show Reviews"}
          </button>
        </div>

        {/* Main Content */}
        {showReviews && (
          <div className="space-y-6">
            {movieReviews.length === 0 ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                <p className="text-center text-lg text-gray-400">
                  No reviews available.
                </p>
              </div>
            ) : (
              movieReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-md transition-transform transform"
                >
                  <div className="flex items-start space-x-4">
                    {review.author_details.avatar_path && (
                      <img
                        src={`${TMDB_IMG_BASE_URL_500}${review.author_details.avatar_path}`}
                        alt={review.author_details.username}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-100">
                        {review.author_details.username}
                      </h3>
                      {review.author_details.rating && (
                        <div className="text-sm text-gray-400">
                          Rating: {review.author_details.rating}
                        </div>
                      )}
                      <p className="mt-2 text-gray-300">{review.content}</p>
                      {review.url && (
                        <a
                          href={review.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline mt-2 block"
                        >
                          Read full review
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieReviews;
