import React from "react";
import { Link } from "react-router-dom";
import useFetchPeopleList from "../../../hooks/useFetchPeopleList";

const PeopleList = () => {
  const [people, setPeople] = React.useState([]);
  const { loading, error } = useFetchPeopleList(setPeople);

  if (loading) {
    return (
      <div className="bg-gray-900 min-h-screen flex justify-center items-center">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 min-h-screen flex justify-center items-center">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {people.map((person) => (
        <Link
          key={person.id}
          to={`/browse/peopledetail/${person.id}`}
          className="block bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:bg-gray-700 transition duration-300"
        >
          <div className="p-4 flex items-center justify-center h-32">
            <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-white text-2xl">
              <span>P</span>
            </div>
          </div>
          <div className="p-4 text-center text-white">
            <p className="text-lg">Person #{person.id}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PeopleList;
