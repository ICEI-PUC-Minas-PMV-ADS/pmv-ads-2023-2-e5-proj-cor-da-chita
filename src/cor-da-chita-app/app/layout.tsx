"use client";
import "../styles/globals.css";
import Providers from "./api/providers/Providers";
import { NextUIProvider } from "@nextui-org/react";

import NavBar from "@/components/NavBar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import UserContextProvider from "@/contexts/UserContext/UserContext";
import AddressContextProvider from "@/contexts/AddressContext/AddressContext";
import ProductContextProvider from "@/contexts/ProductContext/ProductContext";
import CartContextProvider from "@/contexts/CartContext/CartContext";
import SearchContextProvider from "@/contexts/ProductContext/SearchContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <Providers>
          <NextUIProvider>
            <ProductContextProvider>
              <SearchContextProvider>
                <UserContextProvider>
                  <AddressContextProvider>
                    <CartContextProvider>
                      <NavBar />
                      <Menu />

                      {/* Componentes renderizados aqui apenas para testes */}
                      {/* <Products /> */}
                      {/* <ShippingData /> */}
                      {/* <UserData /> */}
                      {/* <CartCard />  */}
                      {/* Ver porque logo nao renderiza */}
                      {/* <QrCode /> */}

                      {children}

                      <Footer />
                    </CartContextProvider>
                  </AddressContextProvider>
                </UserContextProvider>
              </SearchContextProvider>
            </ProductContextProvider>
          </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}
