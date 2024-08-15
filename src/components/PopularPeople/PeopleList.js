import React from "react";
import { Link } from "react-router-dom";
import MovieList from "../SecondaryPage/MovieList";

const PeopleList = ({ popularPeopleList }) => {
  return (
    <div className="bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.isArray(popularPeopleList) && popularPeopleList.length > 0 ? (
            popularPeopleList.map((person) => (
              <div
                key={person.id}
                className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105"
              >
                <Link to={`/actordetail/${person.name}/${person.id}/null/false`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                    alt={person.name}
                    className="w-full h-80 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </Link>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-center text-white">
                    {person.name}
                  </h2>
                  <p className="text-lg mb-4 text-center text-gray-400">
                    {person.known_for_department}
                  </p>
                  {person.known_for && person.known_for.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">
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
