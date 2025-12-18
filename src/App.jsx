import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Display from "./components/Display";
import Menu from "./components/Menu";
import Receipt from "./components/Receipt";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Display />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/receipt" element={<Receipt />} />
    </Routes>
  );
};

export default App;
