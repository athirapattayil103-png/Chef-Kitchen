



import { IoClose, IoTrashOutline } from "react-icons/io5";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const OrderPanel = ({
  orders,
  setOrders,
  showCart,
  onClose,
  orderType,
  setOrderType,
    onOrderPlaced, // ✅ ADD THIS

}) => {
  // const navigate = useNavigate();
  const handleNoteChange = (id, size, value) => {
  setOrders((prev) =>
    prev.map((item) =>
      item.id === id && item.size === size
        ? { ...item, note: value }
        : item
    )
  );
};


  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => (document.body.style.overflowX = "");
  }, []);

  if (!showCart) return null;

  const subtotal = orders.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const discountPercent = 5;

  const handleQty = (id, size, type) => {
    setOrders((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? {
              ...item,
              qty:
                type === "inc"
                  ? item.qty + 1
                  : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const handleDelete = (id, size) => {
    setOrders((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.size === size)
      )
    );
  };


  const handlePlaceOrder = () => {
  if (!orders.length) return;

  onOrderPlaced({
    orderId: "ORD-" + Date.now(),
    date: new Date().toLocaleString(),
    items: orders,
    subtotal,
    orderType,
  });

  onClose();
};


  return (
    <aside className="h-screen w-[420px] flex flex-col bg-gradient-to-b from-[#1e1b2e] to-[#151320] text-white border-l border-white/10">

      {/* ================= HEADER (STICKY) ================= */}
      <div className="sticky top-0 z-20 bg-[#1e1b2e] p-4 border-b border-white/10">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Orders #34562</h2>
          <button onClick={onClose}>
            <IoClose size={20} />
          </button>
        </div>

        {/* Order type pills */}
        <div className="flex gap-2 mt-3">
          {["Dine In", "Take away", "Delivery"].map((type) => (
            <button
              key={type}
              onClick={() => setOrderType(type)}
              className={`px-3 py-1 rounded-full text-xs ${
                orderType === type
                  ? "bg-orange-500 text-white"
                  : "border border-orange-500 text-orange-400"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex justify-between text-xs text-gray-400 mt-4">
          <span>Item</span>
          <span>Qty</span>
          <span>Price</span>
        </div>
      </div>

      {/* ================= ITEMS (SCROLL ONLY HERE) ================= */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-4 space-y-5">
        {orders.length === 0 && (
          <p className="text-center text-gray-400 text-sm">
            Cart is empty
          </p>
        )}

        {orders.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt=""
                className="w-10 h-10 rounded-full"
              />

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {item.name}
                </p>
                <p className="text-xs text-gray-400">
                  Size: {item.size}
                </p>
                <p className="text-xs text-orange-400 font-semibold">
                  ${item.price}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    handleQty(item.id, item.size, "dec")
                  }
                  className="bg-[#2a273a] w-7 h-7 rounded"
                >
                  −
                </button>

                <div className="bg-[#2a273a] w-8 h-8 flex items-center justify-center rounded text-sm">
                  {item.qty}
                </div>

                <button
                  onClick={() =>
                    handleQty(item.id, item.size, "inc")
                  }
                  className="bg-[#2a273a] w-7 h-7 rounded"
                >
                  +
                </button>
              </div>

              <p className="w-14 text-right text-sm">
                {(item.price * item.qty).toFixed(2)}
              </p>
            </div>

            <div className="flex gap-2 mt-2">
             <input
  placeholder="Order Note..."
  value={item.note}
  onChange={(e) =>
    handleNoteChange(item.id, item.size, e.target.value)
  }
  className="flex-1 bg-[#2a273a] px-3 py-2 rounded-lg text-xs outline-none"
/>
              <button
                onClick={() =>
                  handleDelete(item.id, item.size)
                }
                className="border border-orange-500 p-2 rounded-lg"
              >
                <IoTrashOutline className="text-orange-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= FOOTER (STICKY) ================= */}
      <div className="sticky bottom-0 z-20 bg-[#1e1b2e] p-4 border-t border-white/10">
        <div className="flex justify-between text-sm text-gray-400">
          <span>Discount</span>
          <span>{discountPercent}%</span>
        </div>

        <div className="flex justify-between text-sm mt-2">
          <span>Sub total</span>
          <span>{subtotal.toFixed(2)} AED</span>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="w-full mt-4 bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold"
        >
          Order now
        </button>
      </div>
    </aside>
  );
};

export default OrderPanel;
