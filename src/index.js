import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./Pages/LoginPage";
import Browse from "./Pages/Browse";
import MovieDetail from "./Pages/MovieDetail";
import VideoPage from "./Pages/MovieVideo";
import Profile from "./Pages/Profile";
import MovieImages from "./Pages/MovieImages";
import { ActorDetail } from "./Pages/ActorDetail";
import TvDetail from "./Pages/TvSeriesDetail";
import Trending from "./Pages/Trending";
import TvSeasonDetail from "./Pages/TvSeasonDetail";
import TvSeasonEpisodeDetail from "./Pages/TvSeasonEpisodeDetail";
import DiscoverMovies from "./Pages/DiscoverMovies";
import DiscoverTvShows from "./Pages/DiscovertvShows";
import PopularPeopleList from "./Pages/PopularPeopleList";
import MyList from "./Pages/MyList";

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
        path: "list",
        element: <PopularPeopleList />,
      },
      {
        path: "discovermovies",
        element: <DiscoverMovies />,
      },
      {
        path: "discovertvshows",
        element: <DiscoverTvShows />,
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
        path: "browse/moviedetail/:movieId/images",
        element: <MovieImages />,
      },
      {
        path: "actordetail/:actorName/:actorId/:actorCreditId/:useCreditId",
        element: <ActorDetail />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "mylist",
        element: <MyList />,
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
