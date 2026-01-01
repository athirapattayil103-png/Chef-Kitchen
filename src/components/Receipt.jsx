
import { FaTimes, FaCheckCircle } from "react-icons/fa";

const Receipt = ({ data, onClose }) => {
  if (!data) return null;

  const { orderId, date, items, subtotal, orderType } = data;
  const discount = subtotal * 0.05;
  const total = subtotal - discount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* BLUR BACKGROUND */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* RECEIPT CARD */}
      <div className="relative z-10 w-full max-w-sm bg-[#1f2430] rounded-2xl p-6 text-white shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <FaTimes />
        </button>

        <h2 className="text-lg font-semibold mb-1">Order Receipt</h2>
        <p className="text-xs text-gray-400 mb-4">{date}</p>

        {/* ITEMS */}
        <div className="space-y-2 text-sm">
          {items.map((item, i) => (
            <div key={i} className="flex justify-between">
              <p className="font-medium">
  {item.name}
  <span className="text-xs text-gray-400">
    {" "}({item.size})
  </span>
</p>

{item.note && (
  <p className="text-xs text-gray-400 italic">
    Note: {item.note}
  </p>
)}

<p className="text-xs text-gray-400">
  {item.qty} × {item.price} AED
</p>

              <span>{(item.qty * item.price).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <hr className="border-white/10 my-3" />

        {/* TOTAL */}
        <div className="space-y-1 text-sm">
          <div className="flex justify-between text-gray-400">
            <span>Subtotal</span>
            <span>{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Discount (5%)</span>
            <span>-{discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>{total.toFixed(2)} AED</span>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-3">
          Order Type:{" "}
          <span className="text-orange-400">{orderType}</span>
        </p>

        <div className="flex items-center justify-center gap-2 text-green-400 mt-4 text-sm">
          <FaCheckCircle />
          Order placed successfully!
        </div>

        <button
          onClick={onClose}
          className="w-full mt-5 bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Receipt;

