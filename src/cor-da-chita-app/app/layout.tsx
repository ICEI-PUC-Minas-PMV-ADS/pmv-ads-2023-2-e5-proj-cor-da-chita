"use client";
import "../styles/globals.css";
import Providers from "./api/providers/Providers";
import { NextUIProvider } from "@nextui-org/react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import Section from "../components/Section";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Products from "./(product)/all-products/[[...id]]/page";

import { Main } from "next/document";
import ShippingData from "./(order)/shipping-data/page";
import UserContextProvider from "@/contexts/UserContext/UserContext";

import AddressContextProvider from "@/contexts/AddressContext/AddressContext";
import CartCard from "@/components/CardCart";
import QrCode from "@/components/QrCode";
import ProductContextProvider from "@/contexts/ProductContext/ProductContext";
import CartContextProvider from "@/contexts/CartContext/CartContext";
// import CustomModal from "./components/CustomModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <NextUIProvider>
          <Providers>
            <ProductContextProvider>
              <UserContextProvider>
                <AddressContextProvider>
                  <CartContextProvider>
                    {/* <Header> */}
                    <NavBar />

                    {/* Fixar esse componente Menu abaixo do nav bar */}
                    <Menu />
                    {/* </Header> */}

                    {/* Componentes renderizados aqui apenas para testes */}
                    {/* <Products /> */}
                    {/* <ShippingData /> */}
                    {/* <UserData /> */}
                    {/* <CartCard />  */}

                    {children}

                    <Footer />
                  </CartContextProvider>
                </AddressContextProvider>
              </UserContextProvider>
            </ProductContextProvider>
            {/* Ver porque logo nao renderiza */}
            {/* <QrCode /> */}
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
