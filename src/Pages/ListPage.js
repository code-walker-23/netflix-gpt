import React from "react";
import MovieList1 from "../components/List/MovieList1";
import PeopleList from "../components/List/PeopleList";
import TvList from "../components/List/TvList";

const ListPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12 mt-20">Discover Entertainment</h1>
        
        {/* Movies Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-white mb-6">Movies</h1>
         
          <MovieList1 />
        </section>

        {/* People Section */}
        <section className="mb-16">
         <h1 className="text-3xl font-bold text-white mb-6">TV Shows</h1>
          <TvList />
        </section>

        {/* TV Shows Section */}
        <section>
          <h1 className="text-3xl font-bold text-white mb-6">People</h1>
          <PeopleList />
        </section>
      </div>
    </div>
  );
};

export default ListPage;
