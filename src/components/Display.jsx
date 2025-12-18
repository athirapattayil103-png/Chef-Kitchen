import { useState } from "react";
import Menu from "./Menu";
import OrderPanel from "./OrderPanel";
import Sidebar from "./Sidebar";

const Display = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-black">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <Menu
        cart={cart}
        setCart={setCart}
        setShowCart={setShowCart}
        showCart={showCart}
        />
      </div>
      <OrderPanel
        onClose={() => setShowCart(false)}
        orders={cart}
        setOrders={setCart}
        showCart={showCart}
      />
    </div>
  );
};

export default Display;
