import React from "react";
import { FaFilm, FaBuilding, FaGlobe, FaLanguage } from "react-icons/fa";
import DetailList from "./DetailList";


const RightCard = ({
  genres,
  production_companies,
  production_countries,
  spoken_languages,
}) => {
  return (
    <div className="space-y-6">
      <DetailList
        icon={<FaFilm className="text-purple-400 text-2xl" />}
        title="Genres"
        items={genres.map((genre) => genre.name)}
      />
      <DetailList
        icon={<FaBuilding className="text-orange-400 text-2xl" />}
        title="Production Companies"
        items={production_companies.map((company) => company.name)}
        logoPaths={production_companies.map((company) => company.logo_path)}
      />
      <DetailList
        icon={<FaGlobe className="text-blue-400 text-2xl" />}
        title="Production Countries"
        items={production_countries.map((country) => country.name)}
      />
      <DetailList
        icon={<FaLanguage className="text-red-400 text-2xl" />}
        title="Spoken Languages"
        items={spoken_languages.map((language) => language.name)}
      />
    </div>
  );
};

export default RightCard;
