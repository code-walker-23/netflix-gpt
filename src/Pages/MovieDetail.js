import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { IMDB_DETAILS } from "../utils/constant";
import HeroSection from "../components/MovieDetail/HeroSection";
import MovieDetailsCard from "../components/MovieDetail/MovieDetailCard/MovieDetailsContainer";
import OverviewCard from "../components/MovieDetail/OverviewCard";
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
  const translationsRef = useRef(null);

  useFetchCast({ movieId, setCast });
  useFetchMovieDetail({ movieId, setMovieDetail, setLoading, setError });

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

  if (!movieDetail) return <ShimmerEffect />;

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

  const navItems = [
    { label: "Recommendations", ref: recommendationRef },
    { label: "Similar Movies", ref: similarRef },
    { label: "Cast", ref: castRef },
    { label: "Reviews", ref: reviewsRef },
    { label: "Translations", ref: translationsRef },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
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

      <div className="bg-gray-800 p-6 md:p-12 rounded-t-3xl mt-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
            translationsRef={translationsRef}
            movieId={movieId}
            cast={cast}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
