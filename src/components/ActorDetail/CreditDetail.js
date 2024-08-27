import React from "react";
import { Link } from "react-router-dom";
import { TMDB_IMG_BASE_URL_500 } from "../../utils/constant";

const CreditDetail = ({ creditDetail }) => {
  const { media, person } = creditDetail;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-8">
      <div className="max-w-9xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6 md:p-8"> 
        <h2 className="text-3xl font-bold text-white mb-6">Credit Detail</h2>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src={`${TMDB_IMG_BASE_URL_500}${media.poster_path}`}
              alt={media.title}
              className="w-full h-96 object-cover rounded-lg border-2 border-gray-700"
            />
          </div>

        
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-white mb-2">{media.title}</h3>
            <p className="text-sm text-gray-400 mb-2">
              Released on: {new Date(media.release_date).toLocaleDateString()}
              {/* credit detail */}
            </p>
            <p className="text-sm text-gray-300 mb-4">
              Genre: {media.genre_ids.join(", ")}
            </p>
            <p className="text-gray-300 mb-6">{media.overview}</p>

            <div className="flex items-start md:items-center mb-6">
              <img
                src={`${TMDB_IMG_BASE_URL_500}${person.profile_path}`}
                alt={person.name}
                className="w-32 h-32 object-cover rounded-full border-2 border-gray-700 mr-4"
              />
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {person.name}
                </h4>
                <p className="text-sm text-gray-300 mb-1">
                  Character: {media.character}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                  Job: {creditDetail.job}
                </p>
                <p className="text-sm text-gray-300">
                  Popularity: {person.popularity.toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to={`/browse/moviedetail/${media.id}`} // Adjust route as needed
            className="text-blue-400 hover:underline text-lg font-semibold"
          >
            View More About This Movie
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreditDetail;
