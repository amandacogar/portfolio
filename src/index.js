import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/swiper-bundle.css";
import reportWebVitals from "./tests/reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
