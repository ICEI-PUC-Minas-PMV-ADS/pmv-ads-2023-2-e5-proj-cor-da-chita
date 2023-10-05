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
import Products from "./(product)/products/page";
import ProductCard from "@/components/ProductCard";
import { Main } from "next/document";
import ShippingData from "./(order)/shipping-data/page";
import UserContextProvider from "@/Context/UserContext/UserContext";
import UserData from "./(order)/your-data/page";
import AddressContextProvider, {
  AddressContext,
} from "@/Context/AddressContext/AddressContext";
import CartCard from "@/components/CartCard";
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
            <UserContextProvider>
              <AddressContextProvider>
                <Header>
                  <NavBar />
                  <Menu />
                </Header>

                <main>
                  <Section>
                    {/* Componentes renderizados aqui apenas para testes */}
                    {/* <Products /> */}
                    {/* <ShippingData /> */}
                    {/* <UserData /> */}
                    {/* <CartCard /> */}
                  </Section>

                  {children}
                  {/* <Article /> */}
                </main>

                <Footer />
              </AddressContextProvider>
            </UserContextProvider>
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
