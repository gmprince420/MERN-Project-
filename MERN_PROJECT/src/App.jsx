import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Compo/Home";
import NextPage from "./Compo/NextPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<NextPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
