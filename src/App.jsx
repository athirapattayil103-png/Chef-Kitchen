import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Display from "./components/Display";
import Menu from "./components/Menu";
import Receipt from "./components/Receipt";

// TODO : Use the same font style as in the figma
// TODO : Filter options are not working [Category,orderType,Search]
// TODO : Set the sidebar design exactly like in the figma [ logout icon ]
// TODO : <Route path="/menu" element={<Menu />} /> this route is not working , if it is unused one then remove it 
// TODO : Create a new folder named "Pages" and move pages from the components 

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
