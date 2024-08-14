import React from "react";
import useFetchMovieReviews from "../../hooks/useFetchMovieReviews";
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const MovieReviews = ({ movieId }) => {
  const [movieReviews, setMovieReviews] = React.useState([]);
  const { loading, error } = useFetchMovieReviews(setMovieReviews, movieId);

  if (loading) {
    return <div className="text-center text-xl font-semibold text-gray-400">Loading...</div>;
  }
  if (error) {
    return <div className="text-center text-xl font-semibold text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="p-4 bg-gray-900 text-gray-200 space-y-4">
      {movieReviews.map((review) => (
        <div key={review.id} className="bg-gray-800 p-4 border border-gray-700 rounded-lg shadow-md flex items-start space-x-4">
          {review.author_details.avatar_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
              alt={review.author_details.username}
              className="w-16 h-16 rounded-full object-cover border border-gray-600"
            />
          )}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-100">{review.author_details.username}</h3>
            <div className="text-sm text-gray-400">Rating: {review.author_details.rating}</div>
            <p className="mt-2 text-gray-300">{review.content}</p>
            {review.url && (
              <a href={review.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-2 block">
                Read full review
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieReviews;
