import React, { useContext } from "react";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";

const TotalCartItems = () => {
  const { cartItems } = useContext(CartItemsContext);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantidade, 0);

  return (
    <div>
      <p>Total Items in Cart: {totalQuantity}</p>
    </div>
  );
};

export default TotalCartItems;