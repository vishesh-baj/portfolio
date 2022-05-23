import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ROUTES } from "./routes/routes";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {ROUTES.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
