import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/SecondaryPage/MovieList";

const MyList = () => {
  const list = useSelector((store) => store.list.myList);

  return (
    <div className="bg-gray-900 min-h-screen py-12 px-6 flex items-center justify-center">
      <div className="w-full max-w-8xl bg-gray-900 p-8 rounded-lg shadow-lg mt-10">
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
