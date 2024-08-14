import React from "react";
import useFetchPopularPeopleList from "../../hooks/useFetchPopularPeopleList";
import MovieList from "../Secondary Page/MovieList";
import { Link } from "react-router-dom";

const PopularPeopleList = () => {
  const [popularPeopleList, setPopularPeopleList] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [inputPage, setInputPage] = React.useState(1);
  const { loading, error } = useFetchPopularPeopleList(
    setPopularPeopleList,
    pageNumber
  );

  const handlePageChange = (event) => {
    // Ensure the input is a valid number and update the inputPage state
    const newPage = event.target.value;
    if (/^\d*$/.test(newPage)) {
      setInputPage(newPage ? Number(newPage) : "");
    }
  };

  const searchPage = () => {
    // Ensure pageNumber is updated with a valid number before fetching data
    if (inputPage > 0) {
      setPageNumber(inputPage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center mt-10">
          Popular People
        </h1>
        <div className="mb-6 flex justify-center items-center space-x-4">
          <div className="flex items-center">
            <label htmlFor="pageNumber" className="mr-4 text-lg">
              Page Number:
            </label>
            <input
              id="pageNumber"
              type="text" // Changed to text to handle numeric input more flexibly
              value={inputPage}
              onChange={handlePageChange}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              min="1"
            />
            <button
              onClick={searchPage}
              className="ml-4 px-6 py-2 bg-blue-600 border border-blue-700 rounded-lg text-white hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>
        {loading && <p className="text-center text-lg">Loading...</p>}
        {error && (
          <p className="text-center text-red-500 text-lg">Error loading data</p>
        )}
        {!loading && !error && (
          <div>
            {Array.isArray(popularPeopleList) &&
            popularPeopleList.length > 0 ? (
              popularPeopleList.map((person) => (
                <div
                  key={person.id}
                  className="mb-12 p-6 border border-gray-700 rounded-lg bg-gray-800 shadow-lg flex flex-col items-center"
                >
                  <Link
                    to={`/actordetail/${person.name}/${person.id}/null/false`}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                      alt={person.name}
                      className="w-40 h-40 rounded-full shadow-md mb-4"
                    />
                  </Link>

                  <h2 className="text-2xl font-semibold mb-2 text-center">
                    {person.name}
                  </h2>
                  <p className="text-lg mb-4 text-center">
                    {person.known_for_department}
                  </p>
                  {person.known_for && person.known_for.length > 0 && (
                    <div className="w-full px-4">
                      <MovieList
                        title="Known For"
                        list={person.known_for}
                        type="movie"
                      />
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-lg">No popular people found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularPeopleList;
