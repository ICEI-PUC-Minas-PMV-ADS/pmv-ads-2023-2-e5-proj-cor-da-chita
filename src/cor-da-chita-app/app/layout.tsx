"use client";

import "./globals.css";
import Providers from "./Providers";
import { NextUIProvider } from "@nextui-org/react";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import Menu from "./components/Menu";
// import CustomModal from "./components/CustomModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <NextUIProvider>
          <Providers>
            <Header>
              <NavBar />
              <Menu />
            </Header>

            <ProductCard />

            {children}
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
