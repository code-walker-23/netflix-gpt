import React from 'react';


const ShimmerEffect = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* Shimmer Effect for Video Background */}
      <div className="relative w-screen h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800">
          <div className="shimmer"></div>
        </div>
      </div>

      {/* Shimmer Effect for Movie List */}
      <div className="w-full py-8">
        <div className="flex overflow-x-auto space-x-8 py-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="relative w-64 h-96 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gray-700 shimmer"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerEffect;
