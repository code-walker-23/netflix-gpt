import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const useResetScrollPosition = (showGpt) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location, showGpt]);
};
export default useResetScrollPosition;
