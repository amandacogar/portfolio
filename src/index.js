import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/swiper-bundle.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
