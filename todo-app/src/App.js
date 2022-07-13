import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationWrapper from "./components/Navbar";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <div>
      <NavigationWrapper>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </NavigationWrapper>
    </div>
  );
};
export default App;
