import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill, BsImage } from "react-icons/bs";
import { FaPlus, FaMinus, FaHome } from "react-icons/fa";
import { IMDB_DETAILS } from "../../utils/constant";
import {
  TMDB_IMG_BASE_URL,
  TMDB_IMG_BASE_URL_500,
  IMDB_LOGO,
} from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addToList, removeToList } from "../../utils/Slices/myListSlice";
import { useState } from "react";

const HeroSection = ({ movieDetail }) => {
  const dispatch = useDispatch();
  const [plus, setPlus] = useState(true);

  const { backdrop_path, poster_path, title, overview, id, imdb_id, homepage } =
    movieDetail;

  const imdbUrl = imdb_id ? `${IMDB_DETAILS}${imdb_id}` : "#";
  const videoPageUrl = `/browse/moviedetail/${id}/videos`;

  const handleAddToList = () => {
    if (plus) {
      if (!movieDetail.media_type) movieDetail.media_type = "movie";
      dispatch(addToList(movieDetail));
    } else {
      dispatch(removeToList(movieDetail.id));
    }
    setPlus(!plus);
  };

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${TMDB_IMG_BASE_URL}${backdrop_path})`,
          marginTop: "5rem",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start h-full p-6 md:p-12">
          <motion.img
            className="w-48 md:w-64 lg:w-80 rounded-lg shadow-2xl border-4 border-gray-800"
            src={`${TMDB_IMG_BASE_URL_500}${poster_path}`}
            alt={title}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <div className="mt-6 md:mt-0 md:ml-6 lg:ml-8 max-w-lg text-center md:text-left flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              {title}
            </h1>

            <div className="mb-4">
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
                <button className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
                  <BsFillPlayCircleFill className="text-3xl" />
                </button>
              </Link>
              <Link to={`/browse/moviedetail/${id}/images`} className="block">
                <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
                  <BsImage className="text-3xl" />
                </button>
              </Link>
              {homepage && (
                <a
                  href={homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <FaHome className="text-3xl" />
                </a>
              )}
              <button
                onClick={handleAddToList}
                className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 flex items-center justify-center"
              >
                {plus ? (
                  <FaPlus className="text-3xl" />
                ) : (
                  <FaMinus className="text-3xl" />
                )}
              </button>
            </div>
            <p className="text-gray-300 mt-4">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
