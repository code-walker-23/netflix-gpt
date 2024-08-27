import React from "react";
import { useParams } from "react-router-dom";
import useFetchSeasonEpisodeDetail from "../hooks/useFetchSeasonEpisodeDetail";
import EpisodeDetail from "../components/TvSeasonEpisode/EpisodeDetail";
import Header from "../components/TvSeasonEpisode/Header";
import ShimmerEffect from "../utils/Shimmer";
import Crew from "../components/TvSeasonEpisode/Crew";
import GuestStar from "../components/TvSeasonEpisode/GuestStar";

const TvSeasonEpisodeDetail = () => {
  const { seriesId, seasonNumber, episodeNumber } = useParams();
  const [episodeDetail, setEpisodeDetail] = React.useState({});
  const { loading, error } = useFetchSeasonEpisodeDetail(
    seriesId,
    seasonNumber,
    episodeNumber,
    setEpisodeDetail
  );

  const { crew = [], guest_stars = [] } = episodeDetail;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="p-6 lg:p-12 mt-6">
        {loading && <ShimmerEffect />}
        {error && (
          <div className="text-center text-red-500">
            <p>Error loading episode details. Please try again later.</p>
          </div>
        )}
        {!loading && !error && episodeDetail && (
          <div>
            {/* Episode Card */}
            <EpisodeDetail {...episodeDetail} />

            {/* Crew Section */}
            <Crew crew={crew} />

            {/* Guest Stars Section */}
            <GuestStar guest_stars={guest_stars} />
          </div>
        )}
      </main>
    </div>
  );
};

export default TvSeasonEpisodeDetail;
