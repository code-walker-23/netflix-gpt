import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options, MOVIE_DETAIL, IMDB_DETAILS } from "../../utils/constant";
import HeroSection from "./HeroSection";
import MovieDetailsCard from "./MovieDetailsCard";
import OverviewCard from "./OverviewCard";
import ShimmerEffect from "../../utils/Shimmer";
import CastList from "./CastList";
import useFetchCast from "../../hooks/useFetchCast";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);
  
  useFetchCast({movieId, setCast});

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
      <div className="text-white text-center p-8">
        <ShimmerEffect />
      </div>
    );
  }
  if (error) {
    return <div className="text-red-500 text-center p-8">Error: {error}</div>;
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
      <div className="relative">
        <div className="pt-20"> {/* Ensure proper padding for HeroSection */}
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
      <div className="p-6 md:p-12 bg-gray-800 rounded-t-3xl relative z-10 mt-[-4rem]">
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
        <div className="mt-8"> {/* Add margin to ensure spacing */}
          <CastList cast={cast} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
