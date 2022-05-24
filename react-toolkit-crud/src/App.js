import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ROUTES } from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      {/* Blur to be conditionally */}
      <div className="bg-[url('/Users/visheshbajpayee/Documents/Repositories/portfolio/react-toolkit-crud/public/assets/images/banner.jpg')] bg-cover w-screen h-screen absolute z-10">
        <div className="w-screen h-screen z-10 ">
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
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
