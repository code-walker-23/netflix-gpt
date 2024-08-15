import { useState, useEffect } from "react";
import { options } from "../utils/constant";
const useFetchPeopleList = (setPeople) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchPeople = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/person/changes?page=1",
        options
      );
      const data = await response.json();
      setPeople(data.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPeople();
  }, []);

  return { loading, error };
};

export default useFetchPeopleList;
