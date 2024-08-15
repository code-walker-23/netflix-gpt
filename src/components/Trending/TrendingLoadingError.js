import React from "react";
import ShimmerEffect from "../../utils/Shimmer";

const TrendingLoadingError = ({ loading, error }) => {
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-64">
          <ShimmerEffect />
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center h-64">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      )}
    </>
  );
};

export default TrendingLoadingError;
