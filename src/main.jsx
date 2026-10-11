import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Portfolio from "./redesign/Portfolio.jsx";
import "./index.css";

// Visiting /?old shows the previous site while the redesign is in progress.
const showOld = new URLSearchParams(window.location.search).has("old");

createRoot(document.getElementById("root")).render(
  <StrictMode>{showOld ? <App /> : <Portfolio />}</StrictMode>
);
