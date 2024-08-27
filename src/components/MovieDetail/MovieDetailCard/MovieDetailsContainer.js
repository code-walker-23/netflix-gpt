import React from "react";
import { motion } from "framer-motion";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const MovieDetailsContainer = ({ movieDetail }) => {
  const {
    release_date,
    status,
    tagline,
    budget,
    revenue,
    vote_average,
    vote_count,
    genres,
    production_companies,
    production_countries,
    spoken_languages,
  } = movieDetail;

  return (
    <motion.div
      className="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-700 pb-2">
        Movie Details
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-md">
          <LeftCard
            release_date={release_date}
            status={status}
            tagline={tagline}
            budget={budget}
            revenue={revenue}
            vote_average={vote_average}
            vote_count={vote_count}
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-md">
          <RightCard
            genres={genres}
            production_companies={production_companies}
            production_countries={production_countries}
            spoken_languages={spoken_languages}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MovieDetailsContainer;
