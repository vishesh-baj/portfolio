import React from "react";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <div className="mx-auto mt-8">
      <Sidebar />
      <h1 className="text-4xl text-center ">Main Content</h1>
    </div>
  );
};

export default App;
