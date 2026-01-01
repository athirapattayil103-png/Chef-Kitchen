import  { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import MenuHeader from "../components/MenuHeader";
import DishCard from "../components/DishCard";
import { dishes } from "../constants/dishes";

const Menu = ({
  cart,
  setCart,
  showCart,
  setShowCart,
  orderType,
  setOrderType,
}) => {
  const [activeTab, setActiveTab] = useState("all");
  const [now, setNow] = useState(new Date());
  const [showToast, setShowToast] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [searchText, setSearchText] = useState("");
  const [showOrderType, setShowOrderType] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSizeSelect = (dishId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [dishId]: size,
    }));
  };

  const handleAdd = (dish) => {
  const size = selectedSizes[dish.id];

  // 🚨 SIZE NOT SELECTED
  if (!size) {
    alert("Please select your size");
    return;
  }

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
        note:"",
      },
    ];
  });

  // ✅ SUCCESS TOAST
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
      <div className="h-screen flex flex-col bg-[#1f2430] text-white">
       
          <MenuHeader
  now={now}
  searchText={searchText}
  setSearchText={setSearchText}
  activeTab={activeTab}
  setActiveTab={setActiveTab}
/>


{/* ================= CHOOSE DISHES HEADER ================= */}
<div className="flex justify-between items-center px-6 mt-6 relative">
  <h2 className="text-lg font-semibold">Choose Dishes</h2>

  {/* ORDER TYPE SELECT */}
  <div className="relative">
    <button
      onClick={() => setShowOrderType(!showOrderType)}
      className="flex items-center gap-2 bg-[#2b3140] px-4 py-2 rounded-lg text-sm border border-gray-600"
    >
      {orderType}
      <span className="text-xs">⌄</span>
    </button>

    {/* DROPDOWN */}
    {showOrderType && (
      <div className="absolute right-0 mt-2 w-36 bg-[#232837] rounded-lg shadow-xl overflow-hidden z-50">
        {["Dine In", "Take away", "Delivery"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setOrderType(type);
              setShowOrderType(false);
            }}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-[#2b3140] ${
              orderType === type
                ? "text-orange-400"
                : "text-white"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    )}
  </div>
</div>




        {/* MENU */}
  <div className="flex-1 overflow-y-auto hide-scrollbar px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {filteredDishes.map((dish) => {
  const selectedSize =
    selectedSizes[dish.id] || dish.sizes?.[0] || "M";

  const added = cart.some(
    (i) => i.id === dish.id && i.size === selectedSize
  );

  return (
    <DishCard
      key={dish.id}
      dish={dish}
      selectedSize={selectedSize}
      onSizeSelect={handleSizeSelect}
      onAdd={handleAdd}
      added={added}
    />
  );
})}

          </div>
        </div>

        {/* CART BUTTON */}
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-6 right-6 bg-[#F99147] p-4 rounded-full shadow-lg"
        >
          <IoCartOutline size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      
      </div>

      {showToast && (
  <div className="fixed top-5 right-5 z-50 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-fade">
    ✅ Order added successfully
  </div>
)}

    </>
  );
};

export default Menu;
