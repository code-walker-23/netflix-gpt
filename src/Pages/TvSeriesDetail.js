import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useFetchTvDetail } from "../hooks/useFetchTvDetail";
import ShimmerEffect from "../utils/Shimmer";
import TvSeriesCredit from "../components/TvSeries/TvSeriesCredit";
import TvSeriesRecommendation from "../components/TvSeries/TvSeriesRecommendation";
import TvSeriesSimilar from "../components/TvSeries/TvSeriesSimilar";
import TvSeriesReviews from "../components/TvSeries/TvSeriesReviews";
import SeasonSection from "../components/TvSeries/SeasonSection";
import HeroSection from "../components/TvSeries/HeroSection";
import Buttons from "../components/TvSeries/Buttons";
import ProductionDetail from "../components/TvSeries/ProdcutionDetail";
import OverviewCard from "../components/TvSeries/OverviewCard";

const TvDetail = () => {
  const { tvId } = useParams();
  const [tvDetail, setTvDetail] = React.useState({});
  const { loading, error } = useFetchTvDetail(tvId, setTvDetail);

  const seasonsRef = useRef(null);
  const recommendationRef = useRef(null);
  const similarRef = useRef(null);
  const creditsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return <ShimmerEffect />;
  }

  if (error || !tvDetail.name) {
    return (
      <div className="text-center text-red-500 mt-20">
        Error loading details
      </div>
    );
  }

  const {
    overview,
    seasons = [],
    production_companies = [],
    production_countries = [],
    spoken_languages = [],
    networks = [],
    genres = [],
    last_episode_to_air = {},
    next_episode_to_air = {},
  } = tvDetail;

  return (
    <div className="bg-gray-900 text-white min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSection tvDetail={tvDetail} />

      <OverviewCard
        overview={overview}
        genres={genres}
        networks={networks}
        last_episode_to_air={last_episode_to_air}
        next_episode_to_air={next_episode_to_air}
      />

      {/* Production Details */}
      <ProductionDetail
        production_companies={production_companies}
        production_countries={production_countries}
        spoken_languages={spoken_languages}
      />
      {/* Buttons */}
      <Buttons
        seasonsRef={seasonsRef}
        recommendationRef={recommendationRef}
        similarRef={similarRef}
        creditsRef={creditsRef}
        scrollToSection={scrollToSection}
      />

      {/* Seasons Section */}
      <SeasonSection seasons={seasons} tvId={tvId} seasonsRef={seasonsRef} />

      {/* Recommendations Section */}
      <div ref={recommendationRef}>
        <TvSeriesRecommendation tvId={tvId} />
      </div>

      {/* Similar Shows Section */}
      <div ref={similarRef}>
        <TvSeriesSimilar tvId={tvId} />
      </div>

      {/* Cast & Crew Section */}
      <div ref={creditsRef}>
        <TvSeriesCredit tvId={tvId} />
      </div>
      <div>
        <TvSeriesReviews tvId={tvId} />
      </div>
    </div>
  );
};

export default TvDetail;
