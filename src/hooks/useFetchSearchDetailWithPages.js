import { options } from "../utils/constant";
import React from "react";

export const useFetchSearchDetail = (type,movie, selectedLanguage, page) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/${type}?query=${movie}&include_adult=false&language=${selectedLanguage}&page=${page}`,
          options
        );
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (movie) {
      fetchData();
    }
  }, [movie, selectedLanguage, page]);

  return { data, loading, error };
};
