import React, { useState } from "react";
import useFetchMovieReviews from "../../hooks/useFetchMovieReviews";
import ShimmerEffect from "../../utils/Shimmer";

const MovieReviews = ({ movieId }) => {
  const [movieReviews, setMovieReviews] = React.useState([]);
  const [showReviews, setShowReviews] = useState(true);
  const { loading, error } = useFetchMovieReviews(setMovieReviews, movieId);

  const handleToggle = () => {
    setShowReviews((prevState) => !prevState);
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
            Error: {error.message}
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
          <h1 className="text-3xl font-bold text-white mb-4">Movie Reviews</h1>
          <button
            onClick={handleToggle}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
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
                  className="bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-md flex items-start space-x-4"
                >
                  {review.author_details.avatar_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
                      alt={review.author_details.username}
                      className="w-16 h-16 rounded-full object-cover border border-gray-600"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-100">
                      {review.author_details.username}
                    </h3>
                    <div className="text-sm text-gray-400">
                      Rating: {review.author_details.rating}
                    </div>
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
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieReviews;
