import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearList } from "../utils/Slices/myListSlice";
import MovieList from "../components/SecondaryPage/MovieList";

const MyList = () => {
  const dispatch = useDispatch();
  const list = useSelector((store) => store.list.myList);

  // Handler to clear the list
  const handleClearList = () => {
    dispatch(clearList());
  };

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-6 flex flex-col items-center">
      {/* Heading and Buttons */}
      <div className="w-full max-w-4xl mb-8 mt-16 flex gap-4">
        <button className="w-full px-6 py-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-transform transform hover:scale-105">
          My List
        </button>
        <button
          onClick={handleClearList}
          className="w-full px-6 py-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-transform transform hover:scale-105"
        >
          Clear List
        </button>
      </div>

      {/* Card Container */}
      <div className="w-full max-w-7xl bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Empty State */}
        {list.length === 0 ? (
          <div className="flex justify-center items-center h-48">
            <p className="text-white text-lg">Your list is empty</p>
          </div>
        ) : (
          <MovieList title="My List" list={list} type="movie" />
        )}
      </div>
    </div>
  );
};

export default MyList;
