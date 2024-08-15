import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill } from "react-icons/bs";
import {
  TMDB_IMG_BASE_URL,
  TMDB_IMG_BASE_URL_500,
  RATED_PG_IMG,
  RATED_R_IMG,
  STAR,
  IMDB_LOGO,
} from "../../utils/constant";

const HeroSection = ({
  backdrop_path,
  poster_path,
  title,
  adult,
  imdbUrl,
  overview,
  vote_average,
  videoPageUrl,
  movieId,
}) => (
  <div className="relative bg-gray-900 overflow-hidden">
    {/* Dark margin area for header */}
    <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gray-900 to-transparent z-10" />

    {/* Hero Section */}
    <div
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${TMDB_IMG_BASE_URL}${backdrop_path})`,
        marginTop: "5rem", // Adjust based on header height
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start h-full p-6 md:p-12">
        {/* Poster Image */}
        <motion.img
          className="w-48 md:w-64 lg:w-80 rounded-lg shadow-2xl border-4 border-gray-800"
          src={`${TMDB_IMG_BASE_URL_500}${poster_path}`}
          alt={title}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Text Content */}
        <div className="mt-6 md:mt-0 md:ml-6 lg:ml-8 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 mt-">
            {title}
          </h1>
          <p className="text-base md:text-lg mb-2">
            {adult ? (
              <img src={RATED_R_IMG} width="60" alt="Rated R" />
            ) : (
              <img src={RATED_PG_IMG} width="60" alt="Rated PG" />
            )}
          </p>
          {vote_average && (
            <div className="flex items-center justify-center md:justify-start mb-2">
              <img src={STAR} width="25" alt="Star" />
              <span className="text-white text-xl font-semibold ml-2">
                {vote_average.toFixed(1)}
              </span>
            </div>
          )}
          <div className="mb-2">
            <a
              href={imdbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline text-lg font-semibold flex items-center justify-center md:justify-start"
            >
              <img src={IMDB_LOGO} width="60" alt="IMDb Logo" />
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Link to={videoPageUrl} className="block">
              <button className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
                <BsFillPlayCircleFill className="text-2xl mr-2" />
                <span className="font-semibold text-lg">Play Trailer</span>
              </button>
            </Link>
            <Link
              to={`/browse/moviedetail/${movieId}/images`}
              className="block"
            >
              <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
                <span className="font-semibold text-lg">View Images</span>
              </button>
            </Link>
          </div>
          <p className="text-gray-300 mt-2">{overview}</p>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
