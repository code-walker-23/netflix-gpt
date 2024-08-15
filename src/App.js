import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import useAuthStateChange from "./hooks/useAuthStateChange";
import { useSelector } from "react-redux";
import GptSearch from "./Pages/GptSearchToggle";

const App = () => {
  const user = useSelector((state) => state.user);
  const showGpt = useSelector((state) => state.gptToggle.showGptView);
  useAuthStateChange(); // Custom hook to handle authentication state changes
  return (
    <div className="app">
      <Header />
      <main>{user.email && showGpt ? <GptSearch /> : <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default App;
