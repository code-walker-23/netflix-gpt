import React from "react";
import useFetchTvSeriesReviews from "../../hooks/useFetchTvSeriesReviews";

const TvSeriesReviews = ({ tvId }) => {
  const [tvSeriesReviews, setTvSeriesReviews] = React.useState([]);
  const { loading, error } = useFetchTvSeriesReviews(setTvSeriesReviews, tvId);
  const [showReviews, setShowReviews] = React.useState(true);

  const handleToggle = () => {
    setShowReviews((prevState) => !prevState);
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
            Error: {error.message}
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
          <h1 className="text-3xl font-bold text-white mb-4">Reviews</h1>
          <button
            onClick={handleToggle}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
          >
            {showReviews ? "Hide Reviews" : "Show Reviews"}
          </button>
        </div>

        {/* Reviews Content */}
        {showReviews && (
          <div className="space-y-6">
            {tvSeriesReviews.length === 0 ? (
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
                <p className="text-gray-400 text-xl text-center">
                  No reviews available.
                </p>
              </div>
            ) : (
              tvSeriesReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-lg flex items-start space-x-4"
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
                      Rating: {review.author_details.rating || "N/A"}
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

export default TvSeriesReviews;
