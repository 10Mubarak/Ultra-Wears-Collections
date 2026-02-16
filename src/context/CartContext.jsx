import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [archive, setArchive] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- ADD TO CART ---
  // Works for Footwear items and Lookbook "Deploy" items
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log(`${product.name} deployed to cart.`);
  };

  // --- REMOVE FROM CART ---
  const removeFromCart = (id) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index !== -1) {
        const newCart = [...prev];
        newCart.splice(index, 1);
        return newCart;
      }
      return prev;
    });
  };

  // --- ADD TO ARCHIVE ---
  const addToArchive = (product) => {
    setArchive((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
    console.log(`${product.name} synced to archive.`);
  };

  // --- REMOVE FROM ARCHIVE ---
  const removeFromArchive = (id) => {
    setArchive((prev) => prev.filter((item) => item.id !== id));
  };

  // --- UPDATED TOTAL CALCULATION ---
  // Added a check to ensure price is a string before replacing, 
  // preventing errors from Lookbook products.
  const cartTotal = cart.reduce((acc, item) => {
    if (!item.price) return acc;
    const priceString = String(item.price).replace(/[^0-9.]/g, ''); 
    const priceValue = parseFloat(priceString) || 0;
    return acc + priceValue;
  }, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      archive, 
      addToArchive, 
      removeFromArchive, 
      cartTotal, 
      isCartOpen, 
      setIsCartOpen 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);