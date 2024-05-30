import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound/>
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
);
