import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Display from "./components/Display";
import Menu from "./pages/Menu";
import Receipt from "./components/Receipt";
import Notifications from "./components/Notifications";
import Offers from "./components/offers";
import Likes from "./components/Likes";
import Profile from "./components/Profile";

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
      <Route path="/notification" element={<Notifications />} />
      <Route path="/Offers" element={<Offers />} />
      <Route path="/likes" element={<Likes />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;