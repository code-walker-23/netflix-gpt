import React from "react";
import { motion } from "framer-motion";
import {
  TMDB_IMG_BASE_URL,
  TMDB_IMG_BASE_URL_500,
  STAR,
} from "../../utils/constant";

const HeroSection = ({
  backdrop_path,
  poster_path,
  name,
  first_air_date,
  last_air_date,
  number_of_seasons,
  number_of_episodes,
  vote_average,
  vote_count,
  homepage,
}) => (
  <div className="relative bg-gray-900 overflow-hidden">
    {/* Hero Section */}
    <div
      className="relative h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${TMDB_IMG_BASE_URL}${backdrop_path})`,
        marginTop: "0rem", // Remove extra margin-top
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start h-full p-6 md:p-8">
        {/* Poster Image */}
        <motion.img
          className="w-40 md:w-56 lg:w-72 rounded-lg shadow-2xl border-4 border-gray-800 transition-transform transform hover:scale-105"
          src={`${TMDB_IMG_BASE_URL_500}${poster_path}`}
          alt={name}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Text Content */}
        <div className="mt-6 md:mt-0 md:ml-6 lg:ml-8 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-14">
            {name}
          </h1>
          <div className="text-gray-300 mb-4 space-y-2">
            {first_air_date && (
              <p>
                <strong>First Air Date:</strong> {first_air_date}
              </p>
            )}
            {last_air_date && (
              <p>
                <strong>Last Air Date:</strong> {last_air_date}
              </p>
            )}
            {number_of_seasons && (
              <p>
                <strong>Seasons:</strong> {number_of_seasons}
              </p>
            )}
            {number_of_episodes && (
              <p>
                <strong>Episodes:</strong> {number_of_episodes}
              </p>
            )}
            {vote_average && (
              <div className="flex items-center">
                <img src={STAR} width="20" alt="Star" />
                <span className="text-white text-xl font-semibold ml-2">
                  {vote_average.toFixed(1)}
                </span>
                {vote_count != null && (
                  <span className="text-gray-400 text-sm font-medium ml-2">
                    ({vote_count} votes)
                  </span>
                )}
              </div>
            )}
          </div>
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-3 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-transform transform hover:scale-105"
            >
              Visit Homepage
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
