import { useState, useEffect } from "react";
import { options } from "../utils/constant";
const useFetchPopularPeopleList = (setPopularPeopleList,pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/popular?page=${pageNumber}`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPopularPeopleList(data.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [pageNumber]);

  return { loading, error };
};

export default useFetchPopularPeopleList;
