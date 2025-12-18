



// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";

// const Receipt = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   // fallback safety
//   if (!state) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white bg-[#0f111b]">
//         <p>No receipt data found</p>
//       </div>
//     );
//   }

//   const { orderId, date, items, subtotal } = state;
//   const discount = subtotal * 0.05;
//   const total = subtotal - discount;

//   return (
//    <div className="min-h-screen  relative flex items-center justify-center px-4">

//   {/* BLUR OVERLAY */}
//   <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>

//   {/* RECEIPT CARD */}
//   <div className="relative z-10 w-full max-w-md bg-[#1f2430] rounded-2xl p-6 shadow-xl text-white">

//     {/* HEADER */}
//     <h2 className="text-xl font-semibold text-center mb-1">
//       🧾 Order Receipt
//     </h2>
//     <p className="text-xs text-gray-400 text-center mb-4">
//       Thank you for your order
//     </p>

//     {/* ORDER INFO */}
//     <div className="text-sm space-y-1 mb-4">
//       <p>
//         <span className="text-gray-400">Order ID:</span>{" "}
//         <span className="font-medium">{orderId}</span>
//       </p>
//       <p>
//         <span className="text-gray-400">Date:</span> {date}
//       </p>
//       <p>
//         <span className="text-gray-400">Payment:</span> Cash
//       </p>
//       <p>
//         <span className="text-gray-400">Status:</span>{" "}
//         <span className="text-green-400">Confirmed</span>
//       </p>
//     </div>

//     {/* ITEMS */}
//     <div className="border-t border-gray-600 pt-4 space-y-3">
//       {items.map((item, index) => (
//         <div key={index} className="flex justify-between text-sm">
//           <div>
//             <p className="font-medium">
//               {item.name}
//               <span className="text-xs text-gray-400">
//                 {" "}({item.size})
//               </span>
//             </p>
//             <p className="text-xs text-gray-400">
//               {item.qty} × {item.price} AED
//             </p>
//           </div>
//           <p className="font-medium">
//             {(item.qty * item.price).toFixed(2)} AED
//           </p>
//         </div>
//       ))}
//     </div>

//     {/* TOTAL */}
//     <div className="border-t border-gray-600 mt-4 pt-4 space-y-2 text-sm">
//       <div className="flex justify-between text-gray-400">
//         <span>Subtotal</span>
//         <span>{subtotal.toFixed(2)} AED</span>
//       </div>
//       <div className="flex justify-between text-gray-400">
//         <span>Discount (5%)</span>
//         <span>-{discount.toFixed(2)} AED</span>
//       </div>
//       <div className="flex justify-between font-semibold text-lg">
//         <span>Total</span>
//         <span>{total.toFixed(2)} AED</span>
//       </div>
//     </div>

//     {/* SUCCESS */}
//     <div className="flex items-center justify-center gap-2 text-green-400 mt-5">
//       <FaCheckCircle />
//       <span>Order placed successfully!</span>
//     </div>

//     {/* BUTTON */}
//     <button
//       onClick={() => navigate("/Menu")}
//       className="w-full mt-6 bg-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
//     >
//       Back to Menu
//     </button>
//   </div>
// </div>

//   );
// };

// export default Receipt;




import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

// 👉 use the SAME background image used in Menu page

const Receipt = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0f111b]">
        <p>No receipt data found</p>
      </div>
    );
  }

  const { orderId, date, items, subtotal } = state;
  const discount = subtotal * 0.05;
  const total = subtotal - discount;

  return (
    <div
      className="min-h-screen relative flex items-center inset-0 bg-black/60  backdrop-blur-sm justify-center px-4 bg-cover bg-center "
      
    >
      {/* 🔹 DARK + BLUR OVERLAY (Menu background effect) */}
      <div className="absolute "></div>

      {/* ================= RECEIPT CARD ================= */}
      <div className="relative z-10 w-full max-w-md bg-[#1f2430] rounded-2xl p-6 shadow-xl text-white">
        <h2 className="text-xl font-semibold text-center mb-1">
          🧾 Order Receipt
        </h2>
        <p className="text-xs text-gray-400 text-center mb-4">
          Thank you for your order
        </p>

        <div className="text-sm space-y-1 mb-4">
          <p><span className="text-gray-400">Order ID:</span> {orderId}</p>
          <p><span className="text-gray-400">Date:</span> {date}</p>
          <p><span className="text-gray-400">Payment:</span> Cash</p>
          <p>
            <span className="text-gray-400">Status:</span>{" "}
            <span className="text-green-400">Confirmed</span>
          </p>
        </div>

        <div className="border-t border-gray-600 pt-4 space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <div>
                <p className="font-medium">
                  {item.name}
                  <span className="text-xs text-gray-400">
                    {" "}({item.size})
                  </span>
                </p>
                <p className="text-xs text-gray-400">
                  {item.qty} × {item.price} AED
                </p>
              </div>
              <p className="font-medium">
                {(item.qty * item.price).toFixed(2)} AED
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600 mt-4 pt-4 space-y-2 text-sm">
          <div className="flex justify-between text-gray-400">
            <span>Subtotal</span>
            <span>{subtotal.toFixed(2)} AED</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Discount (5%)</span>
            <span>-{discount.toFixed(2)} AED</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>{total.toFixed(2)} AED</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-green-400 mt-5">
          <FaCheckCircle />
          <span>Order placed successfully!</span>
        </div>

        <button
          onClick={() => navigate("/home")}
          className="w-full mt-6 bg-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default Receipt;



