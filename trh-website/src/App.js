import React from "react";
import Layout from "./layouts/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
