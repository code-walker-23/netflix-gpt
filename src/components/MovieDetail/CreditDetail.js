import React from "react";
import { Link } from "react-router-dom";

const CreditDetail = ({ creditDetail }) => {
  const { media, person } = creditDetail;

  return (
    <div className="p-6 md:p-8 bg-gray-800 rounded-lg shadow-lg mt-8 transition-transform transform hover:scale-105 duration-300">
      <h2 className="text-3xl font-bold text-white mb-6">Credit Detail</h2>
      
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Media Information */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w300${media.poster_path}`}
            alt={media.title}
            className="w-full h-64 object-cover rounded-lg mb-4 border-2 border-gray-700 transition-transform transform hover:scale-105 duration-300"
          />
        </div>

        {/* Media and Actor Information */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{media.title}</h3>
          <p className="text-sm text-gray-400 mb-2">Released on: {new Date(media.release_date).toLocaleDateString()}</p>
          <p className="text-sm text-gray-300 mb-4">Genre: {media.genre_ids.join(', ')}</p>
          <p className="text-gray-300 mb-4">{media.overview}</p>

          <div className="flex items-start md:items-center mb-6">
            <img
              src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
              alt={person.name}
              className="w-28 h-28 object-cover rounded-full border-2 border-gray-700 mr-4"
            />
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">{person.name}</h4>
              <p className="text-sm text-gray-300">Character: {media.character}</p>
              <p className="text-sm text-gray-300">Job: {creditDetail.job}</p>
              <p className="text-sm text-gray-300">Popularity: {person.popularity.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link
          to={`/browse/moviedetail/${media.id}`} // Adjust route as needed
          className="text-blue-400 hover:underline text-lg transition-transform transform hover:scale-105 duration-300"
        >
          View More About This Movie
        </Link>
      </div>
    </div>
  );
};

export default CreditDetail;
