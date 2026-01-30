// import React from "react";

// const DishCard = ({
//   dish,
//   selectedSize,
//   onSizeSelect,
//   onAdd,
//   added,
// }) => {
//   return (
//     <div className="relative bg-[#232837] rounded-2xl pt-16 pb-20 px-5">
//       {/* IMAGE */}
//       <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//         <img
//           src={dish.image}
//           alt={dish.name}
//           className="w-24 h-24 rounded-full shadow-lg bg-[#1f2430]"
//         />
//       </div>

//       {/* NAME */}
//       <h3 className="text-sm mt-4 text-center font-medium">
//         {dish.name}
//       </h3>

//       {/* PRICE */}
//       <div className="flex justify-center gap-2 mt-2">
//         {dish.oldPrice && (
//           <span className="text-gray-400 text-xs line-through">
//             ${dish.oldPrice}
//           </span>
//         )}
//         <span className="text-orange-400 font-semibold">
//           ${dish.price}
//         </span>
//       </div>

//       {/* AVAILABLE */}
//       <p className="text-gray-400 text-xs text-center mt-1">
//         {dish.available}
//       </p>

//       {/* SIZE BUTTONS */}
//       <div className="flex justify-center gap-2 mt-3">
//         {dish.sizes.map((size) => (
//           <button
//             key={size}
//             onClick={() => onSizeSelect(dish.id, size)}
//             className={`px-2 py-1 text-xs rounded ${
//               selectedSize === size
//                 ? "bg-orange-500"
//                 : "bg-[#2b3140]"
//             }`}
//           >
//             {size}
//           </button>
//         ))}
//       </div>
//       <button
//   disabled={!selectedSize}
//   onClick={() => onAdd(dish)}
//   className={`w-full mt-4 py-2 rounded-lg text-sm font-semibold transition ${
//     !selectedSize
//       ? "bg-gray-500 cursor-not-allowed"
//       : added
//       ? "bg-green-500"
//       : "bg-orange-500"
//   }`}
// >
//   {added ? "Added" : "+ Add"}
// </button>
//     </div>
//   );
// };

// export default DishCard;
import React from "react";

const DishCard = ({
  dish,
  selectedSize,
  onSizeSelect,
  onAdd,
  added,
  variant = "menu", // 🔥 NEW (menu | product)
}) => {
  const isProductPage = variant === "product";

  return (
    <div
      className={`relative rounded-2xl pt-16 pb-20 px-5
        ${isProductPage ? "bg-gray-200 text-black" : "bg-[#232837] text-white"}
      `}
    >
      {/* IMAGE */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <img
          src={dish.image}
          alt={dish.name}
          className={`w-24 h-24 rounded-full shadow-lg
            ${isProductPage ? "bg-gray-100" : "bg-[#1f2430]"}
          `}
        />
      </div>

      {/* NAME */}
      <h3 className="text-sm mt-4 text-center font-medium">
        {dish.name}
      </h3>

      {/* PRICE */}
      <div className="flex justify-center gap-2 mt-2">
        {dish.oldPrice && (
          <span className="text-gray-400 text-xs line-through">
            ${dish.oldPrice}
          </span>
        )}
        <span className="text-orange-500 font-semibold">
          ${dish.price}
        </span>
      </div>

      {/* AVAILABLE */}
      <p className="text-gray-400 text-xs text-center mt-1">
        {dish.available}
      </p>

      {/* SIZE BUTTONS */}
      {/* <div className="flex justify-center gap-2 mt-3">
        {dish.sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect?.(dish.id, size)}
            className={`px-2 py-1 text-xs rounded
              ${
                selectedSize === size
                  ? "bg-orange-500 text-white"
                  : isProductPage
                  ? "bg-gray-200 text-black"
                  : "bg-[#2b3140]"
              }
            `}
          >
            {size}
          </button>
        ))}
      </div> */}


{/* SIZE BUTTONS (ONLY FOR MENU PAGE) */}
{!isProductPage && dish.sizes?.length > 0 && (
  <div className="flex justify-center gap-2 mt-3">
    {dish.sizes.map((size) => (
      <button
        key={size}
        onClick={() => onSizeSelect?.(dish.id, size)}
        className={`px-2 py-1 text-xs rounded
          ${
            selectedSize === size
              ? "bg-orange-500 text-white"
              : "bg-[#2b3140]"
          }
        `}
      >
        {size}
      </button>
    ))}
  </div>
)}



      {/* 🔥 ADD BUTTON (HIDDEN IN PRODUCT PAGE) */}
      {!isProductPage && (
        <button
          disabled={!selectedSize}
          onClick={() => onAdd(dish)}
          className={`w-full mt-4 py-2 rounded-lg text-sm font-semibold transition
            ${
              !selectedSize
                ? "bg-gray-500 cursor-not-allowed"
                : added
                ? "bg-green-500"
                : "bg-orange-500"
            }
          `}
        >
          {added ? "Added" : "+ Add"}
        </button>
      )}
    </div>
  );
};

export default DishCard;
