import React from "react";
import ReactDOM from "react-dom/client";
import Clock from "./components/Clock.jsx";
import "./index.css";
import PM from "./components/PasswordMaking.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Clock location="bn-BD" />
  </React.StrictMode>
);
