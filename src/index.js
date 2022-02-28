import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "./index.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./view/Login";
import Books from "./view/Books";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/books" element={<Books />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
