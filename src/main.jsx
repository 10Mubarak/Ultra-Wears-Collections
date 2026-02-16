// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";
import { CartProvider, useCart } from "./context/CartContext";
import CartDrawer from "./Components/CartDrawer";
import "./index.css";

const Root = () => {
  return (
    <React.StrictMode>
      <CartProvider>
        {/* The drawer is now controlled by the Global Context */}
        <CartDrawerWrapper />
        <RouterProvider router={router} />
      </CartProvider>
    </React.StrictMode>
  );
};

// Small helper to connect the drawer to the new context state
const CartDrawerWrapper = () => {
  const { isCartOpen, setIsCartOpen } = useCart();
  return <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
