// import { createContext, useContext, useEffect, useState } from "react";

// const MenuContext = createContext();

// export const MenuProvider = ({ children }) => {
//   // 🛒 CART
//   const [cart, setCart] = useState(() => {
//     const stored = localStorage.getItem("cart");
//     return stored ? JSON.parse(stored) : [];
//   });

//   // 🍽️ ORDER TYPE
//   const [orderType, setOrderType] = useState("Dine In");

//   const [showCart, setShowCart] = useState(false);

//   // 🔒 Persist cart
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // ➕ ADD TO CART
//   const addToCart = (dish, size) => {
//     setCart((prev) => {
//       const existing = prev.find(
//         (item) => item.id === dish.id && item.size === size
//       );

//       if (existing) {
//         return prev.map((item) =>
//           item.id === dish.id && item.size === size
//             ? { ...item, qty: item.qty + 1 }
//             : item
//         );
//       }

//       return [
//         ...prev,
//         {
//           id: dish.id,
//           name: dish.name,
//           price: dish.price,
//           image: dish.image,
//           qty: 1,
//           size,
//           note: "",
//         },
//       ];
//     });
//   };

//   // ❌ REMOVE ITEM
//   const removeFromCart = (id, size) => {
//     setCart((prev) =>
//       prev.filter((item) => !(item.id === id && item.size === size))
//     );
//   };

//   return (
//     <MenuContext.Provider
//       value={{
//         cart,
//         setCart,
//         addToCart,
//         removeFromCart,
//         showCart,
//         setShowCart,
//         orderType,
//         setOrderType,
//       }}
//     >
//       {children}
//     </MenuContext.Provider>
//   );
// };

// export const useMenu = () => useContext(MenuContext);




import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  // 🛒 CART
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // 🍽️ ORDER TYPE
  const [orderType, setOrderType] = useState("Dine In");

  const [showCart, setShowCart] = useState(false);

  // 🔒 Persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ ADD TO CART
  const addToCart = (dish, size) => {
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
          note: "",
        },
      ];
    });
  };

  // ❌ REMOVE ITEM
  const removeFromCart = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // 🧹 CLEAR CART (NEW ORDER)
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <MenuContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        showCart,
        setShowCart,
        orderType,
        setOrderType,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
