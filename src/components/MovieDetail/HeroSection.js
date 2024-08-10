import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill } from "react-icons/bs";

const HeroSection = ({
  backdrop_path,
  poster_path,
  title,
  adult,
  imdbUrl,
  overview,
  vote_average,
  videoPageUrl,
}) => (
  <div
    className="relative h-[80vh] bg-cover bg-center"
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
    }}
  >
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start h-full p-6 md:p-12">
      {/* Poster Image */}
      <motion.img
        className="w-48 md:w-64 lg:w-80 rounded-lg shadow-2xl border-4 border-gray-800"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Text Content */}
      <div className="mt-6 md:mt-0 md:ml-6 lg:ml-8 max-w-lg text-center md:text-left flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          {title}
        </h1>
        <p className="text-base md:text-lg mb-2">
          {adult ? (
            <img
              src="https://cdn-icons-png.flaticon.com/128/2249/2249141.png"
              width="60"
            ></img>
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/128/2249/2249138.png"
              width="60"
            ></img>
          )}
        </p>
        {vote_average && (
          <div className="flex items-center justify-center md:justify-start mb-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1040/1040230.png"
              width="25"
            ></img>
            <span className="text-white text-xl font-semibold ml-2">
              {vote_average.toFixed(1)}
            </span>
          </div>
        )}
        <div className="mb-1">
          <a
            href={imdbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline text-lg font-semibold flex items-center justify-center md:justify-start"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5977/5977585.png"
              width="60"
              alt="IMDb Logo"
            />
          </a>
        </div>
        <Link to={videoPageUrl} className="block text-center md:text-left">
          <button className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 flex items-center justify-center mx-auto md:mx-0">
            <BsFillPlayCircleFill className="text-2xl mr-2" />
            <span className="font-semibold text-lg">Play Trailer</span>
          </button>
        </Link>
        <p className="text-gray-300 mt-2">{overview}</p>
      </div>
    </div>
  </div>
);

export default HeroSection;
