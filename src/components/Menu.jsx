import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

// Mock images - replace with your actual imports
import leaf from "../assets/leaf.svg";
import noodle2 from "../assets/noodle2.svg";
import noodle3 from "../assets/noodle3.svg";
import noodle4 from "../assets/noodle4.svg";
import noodle5 from "../assets/noodle5.svg";
import OrderPanel from "./OrderPanel";
const dishes = [
  {
    id: 1,
    name: "Healthy noodle with spinach leaf",
    oldPrice: 32,
    price: 25,
    available: "22 Bowls available",
    sizes: ["S", "M", "L"],
    image: leaf,
    category:"our",
    typ:"takeaway",
  },
  {
    id: 2,
    name: "Hot spicy fried rice with omelet",
    oldPrice: 32,
    price: 25,
    available: "13 Bowls available",
    sizes: ["S", "M", "L"],
    image: noodle2,
    category:"today",
    typ:"dine-in",
  },
  {
    id: 3,
    name: "Spicy instant noodle with omelette",
    oldPrice: 32,
    price: 25,
    available: "17 Bowls available",
    sizes: ["S", "M", "L"],
    image: noodle3,
    category:"south",
    typ:"takeaway",
  },
  {
    id: 4,
    name: "Healthy noodle with spinach leaf",
    oldPrice: 32,
    price: 25,
    available: "22 Bowls available",
    sizes: ["S", "M", "L"],
    image: noodle4,
    category:"south",
    typ:"takeaway",
  },
  {
    id: 5,
    name: "Hot spicy fried rice with omelet",
    oldPrice: 32,
    price: 25,
    available: "13 Bowls available",
    sizes: ["S", "M", "L"],
    image: noodle5,
     category:"today",
    typ:"takeaway",
  },
  {
    id: 6,
    name: "Hot spicy fried rice with omelet",
    oldPrice: 32,
    price: 25,
    available: "13 Bowls available",
    sizes: ["S", "M", "L"],
    image: noodle2,
     category:"our",
    typ:"dine-in",
    
  },
  {
    id: 7,
    name: "Spicy instant noodle with omelette",
    oldPrice: 32,
    price: 25,
    available: "17 Bowls available",
    sizes: ["S", "M", "L"],
    image: noodle3,
    category:"today",
    typ:"dine-in",
  },
  {
    id: 8,
    name: "Healthy noodle with spinach leaf",
    price: 25,
    available: "22 Bowls available",
    sizes: ["S", "M", "L"],
    image: noodle4,
    category:"our",
    typ:"takeaway",
  },
  {
    id: 9,
    name: "Hot spicy fried rice with omelet",
    price: 25,
    available: "13 Bowls available",
    sizes: ["S", "M", "L"],
    image: noodle5,
    category:"south",
    typ:"takeaway",
  },
  {
    id: 10,
    name: "Healthy noodle with spinach leaf",
    oldPrice: 32,
    price: 25,
    available: "22 Bowls available",
    sizes: ["S", "M", "L"],
    image: leaf,
    category:"today",
    typ:"dine-in",
  },
  {
    id: 11,
    name: "Healthy noodle with spinach leaf",
    oldPrice: 32,
    price: 25,
    available: "22 Bowls available",
    sizes: ["S", "M", "L"],
    image: leaf,
    category:"our",
    typ:"takeaway",
  },
];

const Menu = ({cart,setCart,showCart,setShowCart}) => {
  const [activeTab, setActiveTab] = useState("today");
  // const [cart, setCart] = useState([]);
  // const [showCart, setShowCart] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [now, setNow] = useState(new Date());
  const [showToast, setShowToast] = useState(false);

  const [selectedSizes, setSelectedSizes] = useState({});
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSizeSelect = (dishId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [dishId]: size,
    }));
  };
  const handleAdd = (dish) => {
  const size =
    dish.selectedSize ||
    selectedSizes[dish.id] ||
    dish.sizes?.[0] ||
    "M";

  setCart((prev) => {
    const existing = prev.find(
      (item) => item.id === dish.id && item.size === size
    );

    if (existing) {
      return prev.map((item) =>
        item.id === dish.id && item.size === size
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    }

    return [
      ...prev,
      {
        id: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image,
        qty: 1,
        size,
      },
    ];
  });

  // ✅ SHOW TOAST
  setShowToast(true);
  setTimeout(() => setShowToast(false), 2000);
};

const filteredDishes = dishes.filter((dish) => {
  const matchCategory =
    activeTab === "all" || dish.category === activeTab;

  const matchSearch = dish.name
    .toLowerCase()
    .includes(searchText.toLowerCase());

  return matchCategory && matchSearch;
});

  return (
    <>
      <div
        className={`h-screen flex flex-col bg-[#1f2430] text-white relative ${
          showReceipt ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <div className="h-screen flex flex-col bg-[#1f2430] text-white relative">
          {/* HEADER */}
          <div className="sticky top-0 z-40 bg-[#1f2430] border-b border-gray-700">
            
            <div className="flex justify-between items-center px-6 py-4">
  {/* LEFT: TITLE */}
  <div>
    <h1 className="text-xl font-semibold">Chef Kitchen</h1>
    <p className="text-sm text-gray-400 hidden sm:block">
      {now.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })}{" "}
      •{" "}
      {now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </p>
  </div>

  {/* RIGHT: SEARCH BAR (ADD THIS) */}
  <div className="flex items-center gap-3">
    <div className="flex items-center bg-[#1a1f2e] px-4 py-2 rounded-xl w-[320px] border border-gray-700">
      <FaSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search for food, coffee, etc..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="bg-transparent outline-none text-sm text-white w-full placeholder-gray-400"
      />
    </div>
  </div>
</div>


            {/* Tabs */}
            <div className="flex gap-6 px-6 text-sm whitespace-nowrap">
              {["all","today", "our", "south"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 ${
                    activeTab === tab
                      ? "text-orange-400 border-b-2 border-orange-400"
                      : "text-gray-400"
                  }`}
                >
{tab === "all"
  ? "All"
  : tab === "today"
  ? "Today Special"
  : tab === "our"
  ? "Our Specials"
  : "South Indian Special"}
                </button>
              ))}
            </div>
          </div>

          {/* CHOOSE DISH HEADER */}
          <div className="flex items-center justify-between font-medium gap-3 text-base text-gray-200 py-2 px-4">
            <span className="text-lg">Choose Dishes</span>
            <select className="bg-transparent text-gray-300 border border-transparent rounded px-2 py-1">
              <option>Dine In</option>
              <option>Takeaway</option>
            </select>
          </div>

          {/* MENU LIST */}
          <div className="flex-1 overflow-y-auto no-scrollbar px-6 py-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {filteredDishes.length === 0 && (
  <p className="col-span-full text-center text-gray-400">
    No dishes found
  </p>
)}

             {filteredDishes.map((dish) => {
                // const added = cart.some((i) => i.id === dish.id);
                const selectedSize =selectedSizes[dish.id] || dish.sizes?.[0] || "M";
                const added = cart.some((i) => i.id === dish.id && i.size === selectedSize);
                 return (
             <div key={dish.id} className="relative bg-[#232837] rounded-2xl pt-16 pb-20 px-5">
  {/* Floating Image */}
  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
    <img
      src={dish.image}
      alt={dish.name}
      className="w-24 h-24 rounded-full shadow-lg bg-[#1f2430]"
    />
  </div>
                    <h3 className="text-sm mt-4 text-center font-medium">
                      {dish.name}
                    </h3>

                    <div className="flex justify-center items-center gap-2 mt-2">
                      {dish.oldPrice && (
                        <span className="text-gray-400 text-xs line-through">
                          ${dish.oldPrice}
                        </span>
                      )}
                      <span className="text-orange-400 font-semibold">
                        ${dish.price}
                      </span>
                    </div>

                    <p className="text-gray-400 text-xs text-center mt-1">
                      {dish.available}
                    </p>

                    {dish.sizes && (
                      <div className="flex justify-center gap-2 mt-3">
                        {dish.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeSelect(dish.id, size)}
                            className={`px-2 py-1 text-xs rounded ${
                              selectedSizes[dish.id] === size
                                ? "bg-orange-500 text-white"
                                : "bg-[#2b3140] hover:bg-orange-500"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={() => handleAdd(dish)}
                      className={`w-full mt-4 py-2 rounded-lg text-sm font-semibold ${
                        added
                          ? "bg-green-500"
                          : "bg-orange-500 hover:bg-orange-600"
                      }`}
                    >
                      {added ? "Added" : "+ Add"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FLOATING CART BUTTON */}
          <button
            onClick={() => setShowCart(true)}
            className="fixed bottom-6 right-6 bg-[#F99147] p-4 rounded-full shadow-lg z-50"
          >
            <IoCartOutline size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </button>

          {/* ORDER PANEL */}
          {/* <OrderPanel
            orders={cart}
            setOrders={setCart}
            showCart={showCart}
            onClose={() => setShowCart(false)}
            onPlaceOrder={() => setShowReceipt(true)}
          /> */}
        </div>
      </div>

      {/* RECEIPT MODAL */}
      {/* {showReceipt && (
        
      )} */}
      {/* SUCCESS TOAST */}
{showToast && (
  <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg animate-fade-in">
    ✅ Order added successfully
  </div>
)}

    </>
  );
};

export default Menu;