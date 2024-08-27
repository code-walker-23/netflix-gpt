import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import useAuthStateChange from "./hooks/useAuthStateChange";
import { useSelector } from "react-redux";
import GptSearch from "./Pages/GptSearchToggle";
import useResetScollPosition from "./hooks/useResetScrollPosition";

const App = () => {
  const location = useLocation(); // Hook to get the current location
  const user = useSelector((state) => state.user);
  const showGpt = useSelector((state) => state.gptToggle.showGptView);

  useAuthStateChange();
  useResetScollPosition(showGpt);

  return (
    <div className="app">
      <Header />
      <main>{user.email && showGpt ? <GptSearch /> : <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default App;
