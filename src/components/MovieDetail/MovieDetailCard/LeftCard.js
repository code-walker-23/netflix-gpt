import React from "react";
import { FaStar, FaCalendarAlt, FaTag, FaDollarSign } from "react-icons/fa";
import DetailItem from "./DetailItem";

const LeftCard = ({
  release_date,
  status,
  tagline,
  budget,
  revenue,
  vote_average,
  vote_count,
}) => {
  return (
    <div className="space-y-6">
      <DetailItem
        icon={<FaCalendarAlt className="text-teal-400 text-2xl" />}
        label="Release Date"
        value={release_date || "N/A"}
      />
      <DetailItem
        icon={<FaTag className="text-teal-400 text-2xl" />}
        label="Status"
        value={status || "N/A"}
      />
      <DetailItem
        icon={<FaTag className="text-teal-400 text-2xl" />}
        label="Tagline"
        value={tagline || "N/A"}
      />
      <DetailItem
        icon={<FaDollarSign className="text-green-400 text-2xl" />}
        label="Budget"
        value={`$${budget ? (budget / 1000000).toFixed(2) : "N/A"} Million`}
      />
      <DetailItem
        icon={<FaDollarSign className="text-green-400 text-2xl" />}
        label="Revenue"
        value={`$${revenue ? (revenue / 1000000).toFixed(2) : "N/A"} Million`}
      />
      <DetailItem
        icon={<FaStar className="text-yellow-400 text-2xl" />}
        label="Rating"
        value={`${
          vote_average ? vote_average.toFixed(1) : "N/A"
        } (${vote_count} votes)`}
      />
    </div>
  );
};

export default LeftCard;
