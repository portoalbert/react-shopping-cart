import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./RouteSwitch.js";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="pages">
      <RouteSwitch />
    </div>
  </React.StrictMode>
);
