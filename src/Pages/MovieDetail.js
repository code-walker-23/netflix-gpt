import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../components/MovieDetail/HeroSection";
import MovieDetailsCard from "../components/MovieDetail/MovieDetailCard/MovieDetailsContainer";
import ShimmerEffect from "../utils/Shimmer";
import useFetchCast from "../hooks/useFetchCast";
import NavigationCard from "../components/MovieDetail/NavigationCard";
import useFetchMovieDetail from "../hooks/useFetchMovieDetail";
import Buttons from "../components/MovieDetail/Buttons";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);

  const recommendationRef = useRef(null);
  const similarRef = useRef(null);
  const castRef = useRef(null);
  const reviewsRef = useRef(null);

  useFetchCast({ movieId, setCast });
  useFetchMovieDetail({ movieId, setMovieDetail, setLoading, setError });

  if (loading) {
    return <ShimmerEffect />;
  }

  if (error) {
    return (
      <div className="bg-gray-900 text-red-500 min-h-screen flex items-center justify-center">
        <p className="text-lg">Error: {error}</p>
      </div>
    );
  }

  if (!movieDetail) return <ShimmerEffect />;

  const navItems = [
    { label: "Recommendations", ref: recommendationRef },
    { label: "Similar Movies", ref: similarRef },
    { label: "Cast", ref: castRef },
    { label: "Reviews", ref: reviewsRef },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <HeroSection movieDetail={movieDetail} />

      <div className="bg-gray-800 p-6 md:p-12 rounded-t-3xl mt-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <MovieDetailsCard movieDetail={movieDetail} />
            </div>
          </div>

          <NavigationCard
            onScroll={(ref) =>
              ref.current.scrollIntoView({ behavior: "smooth" })
            }
            items={navItems}
          />

          <Buttons
            recommendationRef={recommendationRef}
            similarRef={similarRef}
            reviewsRef={reviewsRef}
            castRef={castRef}
            movieId={movieId}
            cast={cast}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
