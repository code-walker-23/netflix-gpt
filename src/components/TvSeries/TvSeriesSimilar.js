import React from "react";
import useFetchTvSeriesSimilar from "../../hooks/useFetchTvSeriesSimilar";
import MovieList from "../SecondaryPage/MovieList";

const TvSeriesSimilar = ({ tvId }) => {
  const [TvSeriesSimilar, setTvSeriesSimilar] = React.useState([]);

  useFetchTvSeriesSimilar(setTvSeriesSimilar, tvId);

  return (
    <div className="py-12 px-5 lg:px-20 bg-gray-900">
      <div className="max-w-8xl mx-auto">
        {/* Card Wrapper */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Similar Shows</h2>
          <div className="border-t border-gray-700 pt-4">
            <MovieList
              list={TvSeriesSimilar}
              title=""
              type={"tv"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvSeriesSimilar;
