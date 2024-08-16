import React from "react";
import { motion } from "framer-motion";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
const MovieDetailsContainer = ({
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
}) => (
  <motion.div
    className="bg-gray-900 text-gray-200 p-8 rounded-lg shadow-xl space-y-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-700 pb-2">
      Movie Details
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column */}
      <div>
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
      <div>
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

export default MovieDetailsContainer;
