import React from 'react';
import { FaStar, FaCalendarAlt, FaTag, FaDollarSign, FaLanguage, FaGlobe, FaFilm, FaBuilding } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MovieDetailsCard = ({
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
  spoken_languages
}) => (
  <motion.div 
    className="bg-gray-900 text-gray-200 p-8 rounded-lg shadow-xl space-y-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-700 pb-2">Movie Details</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="space-y-6">
        <DetailItem icon={<FaCalendarAlt className="text-teal-400 text-2xl" />} label="Release Date" value={release_date || 'N/A'} />
        <DetailItem icon={<FaTag className="text-teal-400 text-2xl" />} label="Status" value={status || 'N/A'} />
        <DetailItem icon={<FaTag className="text-teal-400 text-2xl" />} label="Tagline" value={tagline || 'N/A'} />
        <DetailItem icon={<FaDollarSign className="text-green-400 text-2xl" />} label="Budget" value={`$${budget ? (budget / 1000000).toFixed(2) : 'N/A'} Million`} />
        <DetailItem icon={<FaDollarSign className="text-green-400 text-2xl" />} label="Revenue" value={`$${revenue ? (revenue / 1000000).toFixed(2) : 'N/A'} Million`} />
        <DetailItem icon={<FaStar className="text-yellow-400 text-2xl" />} label="Rating" value={`${vote_average ? vote_average.toFixed(1) : 'N/A'} (${vote_count} votes)`} />
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <DetailList icon={<FaFilm className="text-purple-400 text-2xl" />} title="Genres" items={genres.map(genre => genre.name)} />
        <DetailList icon={<FaBuilding className="text-orange-400 text-2xl" />} title="Production Companies" items={production_companies.map(company => company.name)} logoPaths={production_companies.map(company => company.logo_path)} />
        <DetailList icon={<FaGlobe className="text-blue-400 text-2xl" />} title="Production Countries" items={production_countries.map(country => country.name)} />
        <DetailList icon={<FaLanguage className="text-red-400 text-2xl" />} title="Spoken Languages" items={spoken_languages.map(language => language.name)} />
      </div>
    </div>
  </motion.div>
);

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-start space-x-4">
    <div className="text-2xl flex-shrink-0">{icon}</div>
    <div className="flex-1">
      <p className="text-teal-300 font-semibold">{label}:</p>
      <p className="text-gray-400">{value}</p>
    </div>
  </div>
);

const DetailList = ({ icon, title, items, logoPaths }) => (
  <div>
    <div className="flex items-center space-x-2 mb-2">
      {icon}
      <p className="text-teal-300 font-semibold">{title}:</p>
    </div>
    <div className="space-y-2">
      {items.length > 0 ? items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {logoPaths && logoPaths[index] && (
            <img
              className="w-12 h-12 object-contain rounded-full border border-gray-700"
              src={`https://image.tmdb.org/t/p/w500${logoPaths[index]}`}
              alt={item}
            />
          )}
          <span className="text-gray-300">{item}</span>
        </div>
      )) : <p className="text-gray-500">N/A</p>}
    </div>
  </div>
);

export default MovieDetailsCard;
