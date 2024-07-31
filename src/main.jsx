import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import Insights from "./pages/Insights.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/our-work",
        element: <Work />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// https://jobportalza.com/job/warehouse-worker-22-00-per-hour-jobs-in-luxembourg-2024/
