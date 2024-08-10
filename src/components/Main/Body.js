import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Login/Login";
import Browse from "./Browse";
import MovieDetail from "../MovieDetail/MovieDetail";
import VideoPage from "../MovieDetail/Video/VideoPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    { path: "/browse/moviedetail/:movieId", element: <MovieDetail /> },
    { path: "/browse/moviedetail/:movieId/videos", element: <VideoPage /> },
  ]);

  return (
    <div className="body">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
