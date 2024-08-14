import { useState, useEffect } from "react";
import { options } from "../utils/constant";

const useFetchPeopleImages = (peopleId, setPeopleImages) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPeopleImages = async () => {
      if (!peopleId) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/${peopleId}/images`,
          options
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setPeopleImages(data.profiles);
      } catch (error) {
        setError(error.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPeopleImages();
  }, [peopleId]);

  return { loading, error };
};

export default useFetchPeopleImages;
