import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationWrapper from "./components/Navbar";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationWrapper>
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}
          </Routes>
        </NavigationWrapper>
      </BrowserRouter>
    </div>
  );
};
export default App;
