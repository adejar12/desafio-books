import CssBaseline from "./index.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAuth } from "./hooks/auth";

import Login from "./view/Login";
import Books from "./view/Books";

function App() {
  const user = useAuth();

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
