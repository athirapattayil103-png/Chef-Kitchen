import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Display from "./components/Display";
import Menu from "./components/Menu";
import Receipt from "./components/Receipt";
import Notifications from "./components/Notifications";
import Offers from "./components/offers";
import Likes from "./components/Likes";
import Profile from "./components/Profile";

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
