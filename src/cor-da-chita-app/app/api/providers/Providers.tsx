"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

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

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
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
