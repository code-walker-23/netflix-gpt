import { useState, useEffect } from "react";
import { options } from "../utils/constant";

const useFetchCreditDetail = (creditId, setCreditDetail) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/credit/${creditId}`,
        options
      );

      if (!response.ok) {
        throw new Error("Failed to fetch credit details");
      }
      const data = await response.json();
      setCreditDetail(data); // Set credit details
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (creditId) {
      fetchDetail();
    }
  }, [creditId]);

  return { loading, error };
};

export default useFetchCreditDetail;
