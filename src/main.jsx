import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@grapecity-software/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import GC from "@grapecity-software/spread-sheets";
import "@grapecity-software/spread-sheets-resources-zh";

GC.Spread.Common.CultureManager.culture("zh-cn");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
