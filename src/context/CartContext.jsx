import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add place
  const addToCart = (place) => {
    setCart((prev) => {
      if (prev.find((p) => p.slug === place.slug)) return prev;
      return [...prev, place];
    });
  };

  // Remove place
  const removeFromCart = (slug) => {
    setCart((prev) => prev.filter((p) => p.slug !== slug));
  };

  // Check if in cart
  const isInCart = (slug) => {
    return cart.some((p) => p.slug === slug);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
