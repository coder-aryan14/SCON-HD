import React from "react";
import { createRoot } from "react-dom/client";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import RedevelopmentPage from "./pages/RedevelopmentPage.jsx";
import ResidencesPage from "./pages/ResidencesPage.jsx";
import "./styles/homepage.css";

const pages = {
  "/": HomePage,
  "/about": AboutPage,
  "/residences": ResidencesPage,
  "/redevelopment": RedevelopmentPage,
  "/contact": ContactPage,
};
const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
const Page = pages[currentPath] ?? HomePage;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
