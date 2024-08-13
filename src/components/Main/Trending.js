import React from "react";
import { useState } from "react";
import useFetchTrending from "../../hooks/useFetchTrending";
import ShimmerEffect from "../../utils/Shimmer";
import MovieList from "../Secondary Page/MovieList";
import 'tailwindcss/tailwind.css';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const { loading, error } = useFetchTrending(setTrending);
  console.log(trending);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Header Section */}
      <header className="bg-gray-900 py-6">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mt-20">
          Trending Now
        </h1>
      </header>

      {/* Loading and Error States */}
      <main className="p-6 lg:p-12">
        {loading && <ShimmerEffect />}
        {error && (
          <div className="text-center text-red-500 text-lg mt-4">
            Error loading trending movies. Please try again later.
          </div>
        )}
        {!loading && !error && (
          <div className="mt-4">
            <MovieList title="New and Popular" list={trending} type={"movie"} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Trending;
