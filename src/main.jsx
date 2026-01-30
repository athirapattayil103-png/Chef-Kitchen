import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";

import { MenuProvider } from "./context/MenuContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <MenuProvider>
      <CategoryProvider>
        <ProductProvider>
        <App />
         </ProductProvider>
      </CategoryProvider>
      </MenuProvider>
    </BrowserRouter>
  </React.StrictMode>
);

