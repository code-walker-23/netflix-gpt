import React from "react";
import { Link } from "react-router-dom";
import MovieList from "../SecondaryPage/MovieList";
import { TMDB_IMG_BASE_URL_500 } from "../../utils/constant";

const PeopleList = ({ popularPeopleList }) => {
  return (
    <div className="bg-gray-900 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6">
          {Array.isArray(popularPeopleList) && popularPeopleList.length > 0 ? (
            popularPeopleList.map((person) => (
              <div
                key={person.id}
                className="bg-gray-800 border border-gray-700 rounded-md overflow-hidden shadow-lg flex flex-col sm:flex-row items-start"
              >
                <Link to={`/actordetail/${person.name}/${person.id}/null/false`} className="flex-shrink-0">
                  <img
                    src={`${TMDB_IMG_BASE_URL_500}${person.profile_path}`}
                    alt={person.name}
                    className="w-full h-64 sm:w-48 sm:h-48 object-cover"
                  />
                </Link>
                <div className="p-4 flex-1">
                  <h2 className="text-lg font-semibold mb-2 text-white">
                    {person.name}
                  </h2>
                  <p className="text-sm mb-4 text-gray-300">
                    {person.known_for_department}
                  </p>
                  {person.known_for && person.known_for.length > 0 && (
                    <div>
                      <h3 className="text-md font-semibold mb-2 text-white">
                        Known For:
                      </h3>
                      <MovieList
                        title=""
                        list={person.known_for}
                        type="movie"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-white">No people found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeopleList;
