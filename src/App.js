// App.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Main/Header/Header";
import Footer from "./components/Main/Footer";
import useAuthStateChange from "./hooks/useAuthStateChange";
import { useSelector } from "react-redux";
import GptSearch from "./components/Gpt/GptSearchPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  const user = useSelector((state) => state.user);
  const showGpt = useSelector((state) => state.gptToggle.showGptView);
  useAuthStateChange(); // Custom hook to handle authentication state changes
  return (
    <div className="app">
      <Header />
      <main>
        {user.email && showGpt ? <GptSearch /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
