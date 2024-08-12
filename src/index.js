import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"; // Import your Redux store
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/LoginPage";
import Browse from "./components/Main/Browse";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import VideoPage from "./components/MovieDetail/Video/VideoPage";

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
        path: "browse",
        element: <Browse />, 
      },
      {
        path: "browse/moviedetail/:movieId",
        element: <MovieDetail />, 
      },
      {
        path: "browse/moviedetail/:movieId/videos",
        element: <VideoPage />,
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
    <ToastContainer />
  </React.StrictMode>
);

reportWebVitals();
