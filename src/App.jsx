import React, { useEffect } from "react";

import CssBaseline from "./index.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { enablePersistors } from "./store/index";
import { enableToken } from "./services/api";

import { useAuth } from "./hooks/auth";

import Login from "./view/Login";
import Books from "./view/Books";

function App() {
  const user = useAuth();

  useEffect(() => {
    enablePersistors();
  }, []);

  useEffect(() => {
    enableToken();
  }, []);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/books"
          element={user.access_token ? <Books /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
