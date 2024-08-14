import { useState, useEffect } from "react";
import { options } from "../utils/constant";

const useFetchPeopleDetail = (peopleId, setPeopleDetail) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPeople = async () => {
      if (!peopleId) return; 

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/${peopleId}?language=en-US`,
          options
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setPeopleDetail(data);
      } catch (error) {
        setError(error.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, [peopleId]); 

  return { loading, error };
};

export default useFetchPeopleDetail;
