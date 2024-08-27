import React, { useState } from "react";
import useFetchPeopleDetail from "../../hooks/useFetchPeopleDetail";
import ShimmerEffect from "../../utils/Shimmer";
import { TMDB_IMG_BASE_URL_500 } from "../../utils/constant";

const PeopleDetail = ({ actorId }) => {
  const [peopleDetail, setPeopleDetail] = useState({});
  const [showBiography, setShowBiography] = useState(false);
  const { loading, error } = useFetchPeopleDetail(actorId, setPeopleDetail);

  if (loading) {
    return <ShimmerEffect />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-lg">Error: {error}</div>
      </div>
    );
  }

  const {
    name,
    profile_path,
    biography,
    birthday,
    place_of_birth,
    known_for_department,
    also_known_as,
  } = peopleDetail;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/3 bg-gray-700 flex items-center justify-center">
          <img
            src={`${TMDB_IMG_BASE_URL_500}${profile_path}`}
            alt={name}
            className="w-48 h-72 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-2/3 p-6 flex flex-col">
          <h1 className="text-4xl font-bold mb-2">{name}</h1>
          <p className="text-lg text-gray-400 mb-2">
            Known for: {known_for_department}
          </p>
          <p className="text-md text-gray-300 mb-4">
            Born: {new Date(birthday).toDateString()}
          </p>
          <p className="text-md text-gray-300 mb-4">
            Place of Birth: {place_of_birth}
          </p>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Also Known As:</h2>
            <ul className="list-disc list-inside pl-5 text-gray-300">
              {also_known_as.map((alias, index) => (
                <li key={index}>{alias}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => setShowBiography(!showBiography)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 focus:outline-none hover:bg-blue-700 transition duration-200"
            >
              {showBiography ? "Hide Biography" : "Show Biography"}
            </button>
            {showBiography && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">Biography:</h2>
                <p className="text-gray-300">{biography}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetail;
