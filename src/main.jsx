import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Page/App";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
