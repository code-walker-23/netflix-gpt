import React from "react";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BACKGROUND_IMG } from "../../utils/constant";

const MainLayout = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${NETFLIX_BACKGROUND_IMG})` }}
    >
      <div className="flex flex-col min-h-screen px-4 py-8">
        <GptSearchBar />
      </div>
    </div>
  );
};

export default MainLayout;
