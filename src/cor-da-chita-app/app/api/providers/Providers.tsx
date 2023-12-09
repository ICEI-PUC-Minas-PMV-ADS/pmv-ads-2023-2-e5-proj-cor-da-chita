"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import React, { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import UserContextProvider from "@/contexts/UserContext/UserContext";
import AddressContextProvider from "@/contexts/AddressContext/AddressContext";
import ProductContextProvider from "@/contexts/ProductContext/ProductContext";
import CartContextProvider from "@/contexts/CartContext/CartContext";
import SearchContextProvider from "@/contexts/ProductContext/SearchContext";
import CartIdContextProvider from "@/contexts/CartContext/CartItemsContext";
import CepContextProvider from "@/contexts/CepContext/CepContext";
import FreteContextProvider from "@/contexts/FreteContext/FreteContext";
import PixContextProvider from "@/contexts/PixContext/PixContext";
import OrderContext from "@/contexts/OrderContext/OrderContext";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";
import { UserContext } from "@/contexts/UserContext/UserContext";

export function Providers({ children }: { children: React.ReactNode }) {

  const user = useContext(UserContext);
  
  const { cartItems,setCartItems } = useContext(CartItemsContext);
  useEffect(()=>
  {
   const carrinho = JSON.parse(localStorage.getItem("cartItens") || "[]");
   setCartItems(carrinho)
   console.log(carrinho.length)
 
  },[])
 

  
  
  return (
    
    <SessionProvider >
      <NextUIProvider>
        <ProductContextProvider>
          <CepContextProvider>
            <SearchContextProvider>
              <UserContextProvider>
                <PixContextProvider>
                  <AddressContextProvider>
                    <CartIdContextProvider>
                      <CartContextProvider>
                        <FreteContextProvider>
                          <OrderContext>{children}</OrderContext>
                        </FreteContextProvider>
                      </CartContextProvider>
                    </CartIdContextProvider>
                  </AddressContextProvider>
                </PixContextProvider>
              </UserContextProvider>
            </SearchContextProvider>
          </CepContextProvider>
        </ProductContextProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
