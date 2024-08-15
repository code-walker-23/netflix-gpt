import React from "react";
import MovieRecommendation from "./MovieRecommendation";
import MovieSimilar from "./MovieSimilar";
import CastList from "./CastList";
import MovieReviews from "./MovieReviews";
import MovieTranslations from "./MovieTranslations";

const Buttons = ({
  recommendationRef,
  similarRef,
  reviewsRef,
  castRef,
  translationsRef,
  movieId,
  cast,
}) => {
  return (
    <div>
      <div className="mb-8" ref={recommendationRef}>
        <MovieRecommendation movieId={movieId} />
      </div>

      <div className="mb-8" ref={similarRef}>
        <MovieSimilar movieId={movieId} />
      </div>

      <div className="mb-8" ref={castRef}>
        <CastList cast={cast} />
      </div>

      <div className="mb-8" ref={reviewsRef}>
        <MovieReviews movieId={movieId} />
      </div>

      <div className="mb-8" ref={translationsRef}>
        <MovieTranslations movieId={movieId} />
      </div>
    </div>
  );
};

export default Buttons;
