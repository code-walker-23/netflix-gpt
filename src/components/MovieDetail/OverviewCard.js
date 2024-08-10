import React from 'react';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const OverviewCard = ({ overview, homepage }) => (
  <motion.div 
    className="bg-gray-900 text-gray-200 p-8 rounded-lg shadow-xl space-y-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-700 pb-2">Overview</h2>
    
    <div className="space-y-4">
      <div className="flex items-start space-x-4">
        <FaInfoCircle className="text-teal-400 text-2xl" />
        <p className="text-gray-300 text-lg">{overview || 'No overview available'}</p>
      </div>

      {homepage && (
        <div className="flex items-center space-x-4 mt-4">
          <FaHome className="text-teal-400 text-2xl" />
          <a
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 underline text-lg font-semibold hover:text-teal-300"
          >
            Official Homepage
          </a>
        </div>
      )}
    </div>
  </motion.div>
);

export default OverviewCard;
