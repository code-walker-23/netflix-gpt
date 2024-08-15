import React from "react";
import { NETFLIX_BACKGROUND_IMG } from "../utils/constant";
import Main from "../components/GptRecommendations/Main";

const MainLayout = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${NETFLIX_BACKGROUND_IMG})` }}
    >
      <div className="flex flex-col min-h-screen px-4 py-8">
        <Main />
      </div>
    </div>
  );
};

export default MainLayout;
