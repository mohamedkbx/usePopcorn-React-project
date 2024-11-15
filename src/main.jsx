import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating maxRating={7} defaultRating={3} /> */}
  </StrictMode>
);
