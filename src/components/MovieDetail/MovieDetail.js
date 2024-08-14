import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options, MOVIE_DETAIL, IMDB_DETAILS } from "../../utils/constant";
import HeroSection from "./HeroSection";
import MovieDetailsCard from "./MovieDetailsCard";
import OverviewCard from "./OverviewCard";
import ShimmerEffect from "../../utils/Shimmer";
import CastList from "./CastList";
import useFetchCast from "../../hooks/useFetchCast";
import MovieRecommendation from "./MovieRecommendation";
import MovieSimilar from "./MovieSimilar";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);

  useFetchCast({ movieId, setCast });

  const fetchDetail = async () => {
    try {
      const response = await fetch(
        `${MOVIE_DETAIL}${movieId}?language=en-US`,
        options
      );
      if (!response.ok) throw new Error("Failed to fetch movie details");
      const data = await response.json();
      setMovieDetail(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [movieId]);

  if (loading) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <ShimmerEffect />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 text-red-500 min-h-screen flex items-center justify-center">
        <p className="text-lg">Error: {error}</p>
      </div>
    );
  }

  if (!movieDetail) return null;

  const {
    adult,
    backdrop_path,
    title,
    poster_path,
    budget,
    genres = [],
    homepage,
    production_companies = [],
    production_countries = [],
    spoken_languages = [],
    release_date,
    imdb_id,
    overview,
    vote_count,
    vote_average,
    status,
    tagline,
    revenue,
  } = movieDetail;

  const imdbUrl = imdb_id ? `${IMDB_DETAILS}${imdb_id}` : "#";
  const videoPageUrl = `/browse/moviedetail/${movieId}/videos`;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Margin Container */}
      <div className="relative bg-gray-900 mt-[2rem]">
        {/* Hero Section */}
        <div className="relative">
          <HeroSection
            backdrop_path={backdrop_path}
            poster_path={poster_path}
            title={title}
            adult={adult}
            imdbUrl={imdbUrl}
            overview={overview}
            homepage={homepage}
            vote_average={vote_average}
            videoPageUrl={videoPageUrl}
            movieId={movieId}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-800 p-6 md:p-12 rounded-t-3xl relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <MovieDetailsCard
            release_date={release_date}
            status={status}
            tagline={tagline}
            budget={budget}
            revenue={revenue}
            vote_average={vote_average}
            vote_count={vote_count}
            genres={genres}
            production_companies={production_companies}
            production_countries={production_countries}
            spoken_languages={spoken_languages}
          />
          <OverviewCard overview={overview} homepage={homepage} />
        </div>

        {/* Recommendations and Cast */}
        <div className="mt-8">
          <MovieRecommendation movieId={movieId} />
        </div>
        <div className="mt-8">
          <MovieSimilar movieId={movieId} />
        </div>
        <div className="mt-8">
          <CastList cast={cast} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
