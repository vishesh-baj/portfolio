import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/layout";
import { ROUTES } from "./routes/routes";
const App = () => {
  return (
    <div>
      <Layout>
        <BrowserRouter>
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
      </Layout>
    </div>
  );
};

export default App;
