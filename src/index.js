import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"; // Import your Redux store
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/LoginPage";
import Browse from "./components/Main/Browse";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import VideoPage from "./components/MovieDetail/Video/VideoPage";
import Profile from "./components/Main/Profile";
import MainLayout from "./components/Gpt/GptSearchPage";
import MovieImages from "./components/MovieDetail/MovieImages";
import { ActorDetail } from "./components/MovieDetail/ActorDetail";
import TvDetail from "./components/TV Shows/TvDetail";
import Trending from "./components/Main/Trending";
import TvSeasonDetail from "./components/TV Shows/TvSeasonDetail";
import TvSeasonEpisodeDetail from "./components/TV Shows/TvSeasonEpisodeDetail";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "browse/moviedetail/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "browse/tvdetail/:tvId",
        element: <TvDetail />,
      },
      {
        path: "browse/moviedetail/:movieId/videos",
        element: <VideoPage />,
      },
      {
        path: "/browse/tvdetail/:seriesId/season/:seasonNumber",
        element: <TvSeasonDetail />,
      },
      {
        path: "/browse/tvdetail/:seriesId/season/:seasonNumber/:episodeNumber",
        element: <TvSeasonEpisodeDetail />,
      },
      {
        path: "gptsearch",
        element: <MainLayout />,
      },
      {
        path: "browse/moviedetail/:movieId/images",
        element: <MovieImages />,
      },
      {
        path: "browse/moviedetail/:movieId/actordetail/:actorName/:actorId",
        element: <ActorDetail />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
