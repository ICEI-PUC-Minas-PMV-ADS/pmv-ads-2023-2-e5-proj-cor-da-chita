"use client"
import Button from "./Button";
import React, { useContext, useEffect, useState } from "react";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";

const Header = () => {
  const { cartItems,setCartItems } = useContext(CartItemsContext);
  useEffect(()=>
  {
   const carrinho = JSON.parse(localStorage.getItem("cartItens") || "[]");
   setCartItems(carrinho)
 
  },[])
  return (
    <div className="flex justify-between w-full">
      <h2 className=" font-bold ml-4 mt-2">
        Cor da Chita
      </h2>

      <Button textButton="Login" />
    </div>
  );
};

export default Header;
